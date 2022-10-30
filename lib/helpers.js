let errorToString, updateSyntaxError, red, supportsColors;

class ElysionError extends SyntaxError {
  constructor (err, { code, location, type, filename, intermediate, noFileHeader }) {
    super(err);
    this.location = location;
    this.src = location.src;
    this.toString = errorToString;
    this.code = code;
    this.stack = this.toString();
    this.type = type;
    this.filename = filename;
    this.intermediate = intermediate;
    this.noFileHeader = noFileHeader;
  }
}

exports.throwSyntaxError = throwSyntaxError = function (err, code, filename) {
  err = new ElysionError(err.message, { location: err.location, code, type: err.type || 'error', filename, intermediate: err.intermediate, noFileHeader: err.noFileHeader });

  throw filename ? err.toString() : err;
}

exports.errorToString = errorToString = function () {
  let filename, errorLine;
  if (!this.location || (typeof this.code !== "string")) {
    return Error.prototype.toString.call(this);
  }

  let { first_column, first_line, last_column, last_line } = this.location;
  if (!this.filename || this.filename.startsWith('<anonymous')) {
    filename = '[stdin]';
  } else {
    filename = this.filename || '[stdin]';
  }

  let errMessage = this.noFileHeader ? this.message : `${red(filename)}:${first_line}${red(':')}${first_column}${red(' ->')} ${this.type}: ${this.message}`;

  if (this.code.length) {
    errorLine = this.code;
    if (last_line && first_line < last_line) {
      last_line = first_line;
      last_column = errorLine.length + 1;
    }
    let start = first_column - 1, end = last_column - 1, highlight = (start ? " ".repeat(start) : "") + "^".repeat(Math.abs(end - start || 1));

    errorLine = errorLine.slice(0, start) + red(errorLine.slice(start, end)) + errorLine.slice(end);

    if (typeof this.intermediate === 'object') {
      errorLine = errorLine.split('');
      errorLine.splice(...Object.values(this.intermediate), '(...)');
      errorLine = errorLine.join('');

      highlight = highlight.split('');
      highlight.splice(...Object.values(this.intermediate), '     ');
      highlight = highlight.join('');
    }

    errMessage += `
${errorLine}
${highlight}
`
  }

  return errMessage;
}

exports.updateSyntaxError = updateSyntaxError = function (error, code, filename) {
  if (error.toString === errorToString) {
    (typeof error.code !== "string") && (error.code = code.split(/\n/g)[error.location.first_line - 1]);
    !error.filename && (error.filename = filename);
    error.stack = error.toString();
    error.type = error.type || 'error';
  }

  return error.toString();
}

exports.supportsColors = supportsColors = function () {
  try {
    return process.stdout.isTTY && !process.env.NODE_DISABLE_COLORS
  } catch { }
}

exports.red = red = (str) => this.supportsColors() ? `\x1B[0;31m${str}\x1B[0m` : str;

exports.yellow = (str) => this.supportsColors() ? `\x1B[0;33m${str}\x1B[0m` : str

exports.guessIndentation = (script) => {
  let lines = script.split(/\n/g);
  let linesCount = Math.min(lines.length, 100);
  let linesIndented = 0;
  let previousLineText = "";
  let previousLineIndentation = 0;
  let defaultTabSize = 2;

  const ALLOWED_TAB_SIZE_GUESSES = [2, 4, 6, 8, 3, 5, 7];
  const MAX_ALLOWED_TAB_SIZE_GUESS = 8;

  let spacesDiffCount = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  let tmp = {};

  for (let lineNumber = 1; lineNumber <= linesCount; lineNumber++) {
    let currLineLength = lines[lineNumber - 1].length;
    let currLineText = lines[lineNumber - 1]

    let currHasContent = false;
    let currLineIndentation = 0;
    let currLineSpacesCount = 0;

    for (let j = 0, lenJ = currLineLength; j < lenJ; j++) {
      let charCode = currLineText.charCodeAt(j);

      if (charCode === 32) {
        currLineSpacesCount++
      } else {
        currHasContent = true;
        currLineIndentation = j;
        break;
      }
    }

    if (!currHasContent) continue

    if (currLineSpacesCount > 1) {
      linesIndented++;
    }

    spacesDiff(previousLineText, previousLineIndentation, currLineText, currLineIndentation, tmp);
    if (tmp.looksLikeAlignment) {
      if (defaultTabSize === tmp.spacesDiff) {
        continue;
      }
    }

    let currSpacesDiff = tmp.spacesDiff;
    if (currSpacesDiff <= MAX_ALLOWED_TAB_SIZE_GUESS) {
      spacesDiffCount[currSpacesDiff]++;
    }

    previousLineText = currLineText;
    previousLineIndentation = currLineIndentation
  }

  let tabSize = 2;

  let tabSizeScore = 0.1 * linesCount;
  
  ALLOWED_TAB_SIZE_GUESSES.forEach((possibleTabSize) => {
    let possibleTabSizeScore = spacesDiffCount[possibleTabSize]
    if (possibleTabSizeScore > tabSizeScore) {
      tabSizeScore = possibleTabSizeScore
      tabSize = possibleTabSize
    }
  });

  if (tabSize === 8 && spacesDiffCount[8] > 0 && spacesDiffCount[4] > 0) {
    console.log(spacesDiffCount[4], spacesDiffCount[8])
    tabSize = 4;
  }

  if (tabSize === 4 && spacesDiffCount[4] > 0 && spacesDiffCount[2] > 0) {
    tabSize = 2;
  }

  return {
    tabSize
  }
}

exports.resolvePath = (dir, dname) => {
  let path = require('path');

  if (path.isAbsolute(dir)) {
    return dir;
  } else {
    let filename = path.join(dname, dir);
    if (!require('fs').existsSync(filename) && !filename.endsWith('.els')) {
      return exports.resolvePath(dir + '.els', dname);
    } else return filename;
  }
}

exports.resolveContext = (set, token) => {
  let possible = [];

  for (let tag of set) {
    console.log(tag);
  }
}

function spacesDiff(a, aLen, b, bLen, result) {
  result.spacesDiff = 0;
  result.looksLikeAlignment = false;

  let i;

  for (i = 0; i < aLen && i < bLen; i++) {
    let aCharCode = a.charCodeAt(i);
    let bCharCode = b.charCodeAt(i);

    if (aCharCode !== bCharCode) {
      break;
    }
  }

  let aSpacesCount = 0;
  for (let j = i; j < aLen; j++) {
    aSpacesCount++;
  }

  let bSpacesCount = 0;
  for (let j = i; j < bLen; j++) {
    bSpacesCount++;
  }

  let spacesDiff = Math.abs(aSpacesCount - bSpacesCount);

  result.spacesDiff = spacesDiff;

  if (spacesDiff > 0 && 0 <= bSpacesCount - 1 && bSpacesCount - 1 < a.length && bSpacesCount < b.length) {
    if (b.charCodeAt(bSpacesCount) !== 32 && a.charCodeAt(bSpacesCount - 1) === 32) {
      if (a.charCodeAt(a.length - 1) === 44) {
        // This looks like an alignment desire: e.g.
        // const a = b + c,
        //       d = b - c;
        result.looksLikeAlignment = true;
      }
    }
  }
  return;
}

exports.ElysionError = ElysionError;