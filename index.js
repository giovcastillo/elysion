const { Parser, Nodes } = require('./lib/parser'),
  Lexer = require('./lib/lexer');

const { parser } = require("./lib/elysion.js"),
  { errorToString, updateSyntaxError, guessIndentation, ElysionError } = require("./lib/helpers"),
  { SourceMap } = require('./lib/sourcemaps');

parser.lexer = {
  options: {
    ranges: true
  },
  yylloc: { first_line: 0, first_column: 0, last_column: 0, last_line: 0 },
  lex() {
    var tag, token;
    token = parser.tokens[this.pos];
    this.pos = this.pos + 1;

    if (token) {
      tag = token[0];
      this.yytext = token[1];
      this.yylloc = token[2];

      parser.errorToken = token;
    } else {
      tag = '';
    }
    
    return tag;
  },
  setInput(tokens) {
    parser.tokens = tokens;
    return this.pos = 0;
  },
  upcomingInput() {
    return '';
  }
};

for (var i = 0, keys = Object.keys(Nodes); i < keys.length; i++) {
  var key = keys[i];
  parser.yy[key] = Nodes[key];
}

parser.yy.parseError = function (message, holder, JisonErr) {
  let token = holder.parser.errorToken, symbol = token[0];
  if (symbol === "INDENT") {
    token[2].first_line++;
    token[2].first_column = 1;
    token[2].last_column = token[1].split(/\n/g).pop().length + 1;
  }

  if (token.origin) {
    symbol = token.origin;
  }

  resolveToken(token);

  let err = new (JisonErr || SyntaxError)('unexpected ' + symbol.toLowerCase());

  err.toString = errorToString;
  err.location = token[2];
  err.stack = err.toString();
  err.token = token;
  err.isCompilerError = true;
  throw err;
}

/**
 * The compiler
 */
class Elysion {
  /**
   * Compile a string
   * @param {string} script 
   * @param {object} options
   * @returns {object}
   */
  constructor(script, options) {
    return Elysion.compile(script, options);
  }

  /**
   * 
   * @param {String} script The code or path to file
   * @param {Object} options
   */
  static compile(script, options = {}, { nodes: _oldNodes, tokens: _oldTokens, comments: _oldComments, names: _oldNames } = {}) {
    return prettyPrint(() => {
      if (!options.tabSize) {
        options.tabSize = guessIndentation(script).tabSize;
      }

      var result = {}, tokens, nodes, comments, names, filename;

      filename = options.filename || '<anonymous>';

      if (!options.dirname) options.dirname = __dirname;

      if (!_oldTokens) {
        var lexed = new Lexer(script, options);
        tokens = lexed.tokens;
        comments = lexed.comments;
        names = lexed.names;

        result.tokens = tokens;

        tokens.script = script;

        result.nodes = nodes = Elysion.parseTokens(tokens);
      } else {
        comments = _oldComments;
        nodes = _oldNodes;
        names = _oldNames;
        tokens = _oldTokens;

        result.tokens = tokens;
        result.nodes = nodes;
      }

      if (options.nodes) return result;
      
      options.scope = names;
      let { js, sources, isTypeScript } = new Parser(nodes, { comments, ...options }).parse(options);

      let sourceMap;
      if (options.sourceMaps) {
        if (sources.length) {
          for (let ind in sources) {
            let source = sources[ind];
            if (!source || !source.length) continue;
            js = js.replace(source[0], (_, d) => {
              let x, y;
              x = js.slice(0, d).split(/\n/g).pop().length;
              y = count(js.slice(0, d), '\n');

              sources[ind] = {
                sourceLine: source[1].first_line - 1,
                sourceColumn: source[1].first_column - 1,
                lastSourceColumn: source[1].last_column - 1,
                lastSourceLine: source[1].last_line - 1,
                line: y,
                column: x,
                source: source[1].source,
                sourceName: source[1].sourceName
              }
              return '';
            });
          }

          sourceMap = new SourceMap(sources).generate({ generatedFile: options.generatedFile, sourceMap: options.inlineMap ? script : undefined, ...options }, script);
        }
      }

      if (isTypeScript) {
        let compileTS = {
          parse() {
            return Elysion.compile(null, { ...options, omitTypeScript: true, isRecomp: true }, { nodes, tokens, comments, names });
          }
        }

        result.compiledTS = compileTS;
      }

      result.output = js;
      result.sourceMap = sourceMap;
      result.sources = sources;
      result.isTypeScript = isTypeScript;
      return result;
    })(script, options);
  }

  static parseTokens(tokens) {
    return parser.parse(tokens);
  }

  static toJSON(ELSON, options = {}) {
    return JSON.parse(Elysion.compile(ELSON, { ...options, isELSON: true }).output);
  }
}

function prettyPrint(cb) {
  return function (script, options) {
    try {
      return cb.call(this, script, options)
    } catch (err) {
      let ref;
      if (!err.isCompilerError && !(err instanceof ElysionError)) throw err;
      if (typeof script !== "string") throw err;
      if (err.isCompilerError) err.type = "SyntaxError";

      if (err.token && (ref = err.token[2].src) !== options.src && ref || ((ref = err.src) !== options.src) && ref && ref !== '<anonymous>') {
        script = require('fs').readFileSync(require('path').isAbsolute(ref) ? ref : require('path').join(options.dirname, ref), { encoding: 'utf-8' });
        options.src = ref;
      }

      err = updateSyntaxError(err, script, options.src);

      throw err;
    }
  }
}

function count(string, substr) {
  var num, pos;
  num = pos = 0;
  if (!substr.length) {
    return 1 / 0;
  }
  while (pos = 1 + string.indexOf(substr, pos)) {
    num++;
  }
  return num;
};

function resolveToken(token) {
  switch (true) {
    case token[0] === "[" && token.generated: {
      token[0] = 'implicit array';
      break;
    };
    case token[0] === "CALL_START" && token.generated: {
      token[0] = 'implicit call';
      break;
    };
    case token[0] === "NEWLINE": {
      token[0] = 'end of line';
      break;
    }
    default: {
      return;
    }
  }
}

module.exports = Elysion;

var tried = {
  log: 'asdljkasd'
}