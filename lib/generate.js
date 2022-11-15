const parser = require("jison-gho").Parser, grammar = require("./grammar");

let tokens = [], alternatives, alt, token, name;

for (name in grammar) {
  alternatives = grammar[name];
  grammar[name] = (function () {
    var i, j, len, len1, ref, results;
    results = [];
    for (i = 0, len = alternatives.length; i < len; i++) {
      alt = alternatives[i];
      ref = alt[0].split(' ');
      for (j = 0, len1 = ref.length; j < len1; j++) {
        token = ref[j];
        if (!grammar[token]) {
          tokens.push(token);
        }
      }
      if (name === 'Root') {
        alt[1] = `return ${alt[1]}`;
      }
      results.push(alt);
    }
    return results;
  })();
}

const Parser = new parser({
  bnf: grammar,
  startSymbol: 'Root',
  operators: operators = [
    ['left', 'AS', 'FROM', 'AT'],
    ['left', '.'],
    ['left', 'CALL_START', 'CALL_END'],
    ['nonassoc', '++', '--', '...'],
    ['left', 'EXISTS'],
    ['right', 'TYPEOF', '@', 'WHETHER'],
    ['right', 'AWAIT'],
    ['right', '**'],
    ['right', 'UNARY_MATH', 'DO', 'NEW'],
    ['left', 'MATH'],
    ['left', '+', 'PLUS', '-', '>=', '<=', '>', '<', '===', '==', '!==', '!='],
    ['left', 'SHIFT'],
    ['right', 'COMPARE'],
    ['left', '&'],
    ['left', '&&'],
    ['left', '^'],
    ['left', '|'],
    ['left', '||'], 
    ['left', 'HAS'], 
    ['left', 'BIN?'], 
    ['nonassoc', 'INDENT', 'OUTDENT'],
    ['right', 'YIELD'], 
    ['right', 'FUNC_DIRECTIVE', ':', 'COMPOUND_ASSIGN', 'RETURN', 'THROW', 'EXTENDS', 'TYPE'],
    ['right', 'FORIN', 'FOROF', 'FORFROM', 'BY', 'WHEN'], 
    ['right', 'IF', 'ELSE', 'TRY', 'CATCH', 'FINALLY', 'OTHERWISE', 'FOR', 'WHILE', 'UNTIL', 'LOOP', 'SUPER', 'CLASS', 'IMPORT', 'EXPORT', 'DYNAMIC_IMPORT'], 
    ['right', 'EITHER', 'POST_IF', 'POST_UNLESS'], 
    ['left', 'POSTCASE', 'IS', 'ISNT', 'AND', 'OR', 'INCLUDES', 'HAS'], 
    ['left', 'CHAIN']].reverse()
});

Parser.lexer = {
  options: {
    ranges: false,
    noTryCatch: true
  },
  lex: function (tt) {
    var tag, token;
    token = Parser.tokens[this.pos++];
    if (token) {
      ([tag, this.yytext] = token);
      Parser.errorToken = token;
    } else {
      tag = '';
    }
    return tag;
  },
  setInput: function (tokens) {
    Parser.tokens = tokens;
    return this.pos = 0;
  },
  upcomingInput: function () {
    return '';
  },
  parseError: function () {
    return ''
  }
};

Parser.Grammar = grammar;

// console.log(require('util').inspect(grammar, { depth: null, colors: true }), "\n".repeat(4));

let Code = Parser.generate({ moduleName: "Elysion" });

Code = Code.replace(/\s+try \{([\s\r\n]+this\.__reentrant_call_depth[\s\S]+?)\} catch \(ex\) \{[\s\S]+?\} finally \{([^]+?)\}\s+\/\/\s+\/finally/, function replace_noTryCatch(m, p1, p2) {
  p1 = p1.replace(/^        /mg, '    ');
  p2 = p2.replace(/^        /mg, '    ');
  return '\n' + p1 + '\n    // ... AND FINALLY ...\n' + p2;
}).replace(/^[^\n]+\b__reentrant_call_depth\b[^\n]+$/gm, '\n');

require("fs").writeFileSync(__dirname + "/elysion.js", Code, { encoding: "utf-8" });

require("fs").writeFileSync(__dirname + "/../browser/src/elysion.js", Code, { encoding: "utf-8" });

module.exports = Parser;