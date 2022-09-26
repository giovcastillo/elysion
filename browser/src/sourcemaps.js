
let VLQ_SHIFT, VLQ_CONTINUATION_BIT, VLQ_VALUE_MASK, BASE64_CHARS;

VLQ_SHIFT = 5;

VLQ_CONTINUATION_BIT = 1 << VLQ_SHIFT; // 0010 0000

VLQ_VALUE_MASK = VLQ_CONTINUATION_BIT - 1; // 0001 1111

// Regular Base64 Encoding
// -----------------------
BASE64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

class SourceMap {
  constructor(sources) {
    this.lines = {};
    this.names = [];
    this.sources = [];
    this.include(sources);
  }

  include(sources) {
    let base = this.lines;

    for (let source of sources) {
      if (!base[source.line]) {
        base[source.line] = {};
      }

      let line = base[source.line];
      line[source.column] = source;
      if (!this.sources.includes(source.source)) this.sources.push(source.source);

      if (!!source.sourceName && !this.names.includes(source.sourceName)) this.names.push(source.sourceName);
    }
  }

  generate(options, code = null) {
    let buffer = "", writingLine = 0, lastColumn = 0, lastSourceLine = 0, lastSourceColumn = 0, needComma = false, ref = this.lines;

    for (let lineNumber in ref) {
      let cols = ref[lineNumber];
      for (let col in cols) {
        let mapping = cols[col];
        while (writingLine < mapping.line) {
          lastColumn = 0;
          needComma = false;
          buffer += ";";
          writingLine++;
        }

        if (needComma) {
          buffer += ",";
          needComma = false;
        }

        buffer += this.encodeVlq(mapping.column - lastColumn);

        lastColumn = mapping.column;

        buffer += this.encodeVlq(this.sources.indexOf(mapping.source));

        buffer += this.encodeVlq(mapping.sourceLine - lastSourceLine);

        lastSourceLine = mapping.sourceLine;

        buffer += this.encodeVlq(mapping.sourceColumn - lastSourceColumn);

        lastSourceColumn = mapping.sourceColumn;

        if (mapping.sourceName) buffer += this.encodeVlq(this.names.indexOf(mapping.sourceName));

        needComma = true;
      }
    }

    let sources = this.sources;

    const v3 = {
      version: 3,
      file: options.generatedFile || '',
      sourceRoot: options.sourceRoot || '',
      sources,
      names: this.names || options.names || [],
      mappings: buffer
    }

    if (options.inlineMap) {
      v3.sourcesContent = [code];
    }

    return v3;
  }

  encodeVlq(value) {
    var answer, nextChunk, signBit, valueToEncode;
    answer = '';
    // Least significant bit represents the sign.
    signBit = value < 0 ? 1 : 0;
    // The next bits are the actual value.
    valueToEncode = (Math.abs(value) << 1) + signBit;
    // Make sure we encode at least one character, even if valueToEncode is 0.
    while (valueToEncode || !answer) {
      nextChunk = valueToEncode & VLQ_VALUE_MASK;
      valueToEncode = valueToEncode >> VLQ_SHIFT;
      if (valueToEncode) {
        nextChunk |= VLQ_CONTINUATION_BIT;
      }
      answer += this.encodeBase64(nextChunk);
    }
    return answer;
  }

  encodeBase64(value) {
    return BASE64_CHARS[value] || (function () {
      throw new Error(`Cannot Base64 encode value: ${value}`);
    })();
  }
}

class Sources extends Array {
  constructor() {
    super();
    this.names = []
  }

  add({ first_line, first_column, last_line, last_column, src } = {}, name) {
    let hash = ([1e7] + -1e3).replace(/[018]/g, function (c) {
      return (c ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    });

    hash = `/*@${hash}*/`;
    this.push([hash, { first_line, first_column, source: src, sourceName: name, last_line, last_column }]);
    return hash;
  }
}

module.exports = { SourceMap, Sources };