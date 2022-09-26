;

(function () {
  "use strict";

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  const _excluded = ["lvl", "loc", "origin", "generated", "inImplicitObj", "isNext2GenArr", "isNext2GenObj", "$$accept", "pair"],
        _excluded2 = ["first_line", "first_column"];

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  /*! For license information please see browser.js.LICENSE.txt */
  (() => {
    var e = {
      514: (e, t) => {
        var s = function () {
          function e(e, t) {
            var s;

            if (Object.defineProperty(this, "name", {
              enumerable: !1,
              writable: !1,
              value: "JisonParserError"
            }), null == e && (e = "???"), Object.defineProperty(this, "message", {
              enumerable: !1,
              writable: !0,
              value: e
            }), this.hash = t, t && t.exception instanceof Error) {
              var i = t.exception;
              this.message = i.message || e, s = i.stack;
            }

            s || (Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : s = new Error(e).stack), s && Object.defineProperty(this, "stack", {
              enumerable: !1,
              writable: !1,
              value: s
            });
          }

          function t(e, t, s) {
            s = s || 0;

            for (var i = 0; i < t; i++) this.push(e), e += s;
          }

          function s(e, t) {
            for (t += e = this.length - e; e < t; e++) this.push(this[e]);
          }

          function i(e) {
            for (var t = [], s = 0, i = e.length; s < i; s++) {
              var n = e[s];
              "function" == typeof n ? (s++, n.apply(t, e[s])) : t.push(n);
            }

            return t;
          }

          "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, Error.prototype) : e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e.prototype.name = "JisonParserError";
          var n = {
            trace: function () {},
            JisonParserError: e,
            yy: {},
            options: {
              type: "lalr",
              hasPartialLrUpgradeOnConflict: !0,
              errorRecoveryTokenDiscardCount: 3
            },
            symbols_: {
              "!": 7,
              "!=": 64,
              "!==": 62,
              $accept: 0,
              $end: 1,
              "%": 9,
              "&": 14,
              "&&": 72,
              "(": 21,
              ")": 22,
              ")>": 134,
              "*": 8,
              "**": 55,
              "+": 4,
              "++": 51,
              ",": 15,
              "-": 5,
              "--": 52,
              ".": 23,
              "...": 78,
              ":": 20,
              "::": 27,
              ";": 18,
              "<": 12,
              "<(": 133,
              "<<": 58,
              "<=": 66,
              "==": 63,
              "===": 61,
              ">": 11,
              ">=": 65,
              ">>": 59,
              ">>>": 60,
              "?": 19,
              "??": 73,
              "@": 3,
              AND: 69,
              ARGUMENT: 141,
              AS: 138,
              ASYNC: 33,
              AT: 139,
              AWAIT: 37,
              Access: 239,
              AlphaNum: 215,
              Arg: 176,
              ArgList: 175,
              Arguments: 174,
              Array: 241,
              ArrayArg: 245,
              ArrayList: 243,
              Assign: 232,
              AssignKeyword: 234,
              Assignable: 235,
              Assignment: 233,
              BOOL: 119,
              BREAK: 92,
              Block: 179,
              BlockExpression: 191,
              Body: 157,
              CALL_END: 77,
              CALL_START: 76,
              CASE: 94,
              CATCH: 103,
              CHAIN: 45,
              CLASS: 79,
              COMPOUND_AND: 50,
              COMPOUND_OR: 93,
              CONST: 151,
              CONTINUE: 143,
              Case: 186,
              Cases: 185,
              Catch: 195,
              Class: 178,
              Clause: 167,
              Clauses: 187,
              Code: 161,
              Compare: 171,
              DEFAULT: 90,
              DEFAULTS: 116,
              DIVISION: 57,
              DO: 34,
              Declaration: 270,
              DeclarationKeyword: 268,
              Declarations: 269,
              Declare: 267,
              EITHER: 46,
              EITHER_OR: 49,
              ELSE: 108,
              EOF: 1,
              EXISTS: 41,
              EXPORT: 154,
              EXTENDS: 80,
              Else: 199,
              ElseOtherwise: 202,
              Export: 274,
              ExportList: 277,
              ExportName: 279,
              ExportNames: 278,
              Exportable: 280,
              Expression: 159,
              FINALLY: 102,
              FOR: 83,
              FOR_AS: 98,
              FOR_AT: 97,
              FOR_FROM: 96,
              FOR_IN: 87,
              FOR_OF: 86,
              FROM: 140,
              FUNCTION: 131,
              FUNC_DIRECTIVE: 28,
              FUNC_EXISTS: 75,
              Finally: 194,
              For: 182,
              ForAny: 189,
              ForAssignable: 183,
              ForExpression: 180,
              FuncBody: 225,
              FuncHeader: 227,
              FuncSpecifiers: 226,
              Function: 224,
              GET: 136,
              IDENTIFIER: 142,
              IF: 95,
              IMPORT: 153,
              IN: 67,
              INCLUDES: 43,
              INDENT: 38,
              INDEX_END: 114,
              INDEX_START: 113,
              INFINITY: 118,
              INSTANCEOF: 68,
              INTERFACE: 145,
              INTERPOLATION_END: 127,
              INTERPOLATION_START: 126,
              IS: 47,
              ISNT: 48,
              Identifier: 237,
              "Identifier?": 254,
              If: 190,
              IfBlock: 200,
              IfUnless: 201,
              Import: 272,
              "Import(FROM)": 273,
              ImportList: 276,
              ImportName: 282,
              ImportNames: 281,
              Interface: 249,
              InterfaceBody: 250,
              "InterfaceKeyword?": 253,
              InterfaceProperties: 251,
              InterfaceProperty: 252,
              Interpolation: 219,
              Interpolations: 218,
              Invocation: 173,
              JointExpression: 181,
              LET: 150,
              LOOP: 106,
              Label: 160,
              Line: 158,
              Literal: 214,
              Logical: 172,
              Loop: 198,
              MATH_BIN: 44,
              MathPostfix: 169,
              MathPrefix: 168,
              Multicheck: 163,
              MulticheckClauses: 166,
              MulticheckCombinations: 165,
              Multicondition: 164,
              NAN: 121,
              NEW: 111,
              NEWLINE: 26,
              NOT: 54,
              NULL: 120,
              NUMBER: 122,
              New: 204,
              OR: 70,
              OTHERWISE: 109,
              OUDENT: 155,
              OUTDENT: 39,
              Object: 209,
              Operation: 162,
              Operator: 170,
              OptComma: 177,
              OptDefault: 275,
              OptVoids: 246,
              PARAM_END: 31,
              PARAM_START: 30,
              PLUS: 56,
              POSTCASE: 91,
              POSTFOR: 88,
              POSTIF: 99,
              POSTUNLESS: 100,
              PROPERTY: 112,
              Param: 231,
              ParamArray: 240,
              ParamArrayArg: 244,
              ParamArrayList: 242,
              ParamAssignable: 236,
              ParamIdentifier: 238,
              ParamList: 230,
              ParamObject: 208,
              ParamPropList: 211,
              ParamPropObj: 213,
              Params: 229,
              Parenthetical: 207,
              PropList: 210,
              PropObj: 212,
              READONLY: 146,
              REGEX: 128,
              REGEX_END: 130,
              REGEX_START: 129,
              RETURN: 152,
              Regex: 220,
              RegexInterpolation: 223,
              RegexInterpolations: 222,
              RegexWithInterpolations: 221,
              Return: 271,
              Root: 156,
              SET: 137,
              STATIC: 135,
              STRING: 123,
              STRING_END: 125,
              STRING_START: 124,
              SUCH: 110,
              SUPER: 74,
              SWITCH: 89,
              SYMBOL_EXISTS: 42,
              Statement: 248,
              String: 216,
              StringWithInterpolations: 217,
              Super: 205,
              Switch: 184,
              TAG: 148,
              THEN: 32,
              THIS: 115,
              THROW: 144,
              TRY: 101,
              TYPE: 147,
              TYPEOF: 36,
              This: 206,
              Try: 193,
              TryBlock: 192,
              Type: 255,
              TypeArgument: 261,
              TypeArguments: 260,
              "TypeArguments?": 228,
              TypeArray: 265,
              TypeArrayItems: 266,
              TypeDeclaration: 256,
              TypeObjProp: 264,
              TypeObjProps: 263,
              TypeObject: 262,
              TypeSentence: 257,
              TypeValue: 258,
              TypeWithArguments: 259,
              UNDEFINED: 117,
              UNLESS: 107,
              UNTIL: 105,
              VAR: 149,
              Value: 203,
              Voids: 247,
              WHEN: 84,
              WHETHER: 35,
              WHILE: 104,
              WHILST: 85,
              WITH: 132,
              WITHIN: 29,
              When: 188,
              While: 196,
              WhileUntil: 197,
              YIELD: 40,
              "[": 24,
              "]": 25,
              "^": 10,
              error: 2,
              "{": 16,
              "{{": 81,
              "|": 13,
              "||": 71,
              "}": 17,
              "}}": 82,
              "~": 6,
              "~~": 53
            },
            terminals_: {
              1: "EOF",
              2: "error",
              3: "@",
              4: "+",
              5: "-",
              6: "~",
              7: "!",
              8: "*",
              9: "%",
              10: "^",
              11: ">",
              12: "<",
              13: "|",
              14: "&",
              15: ",",
              16: "{",
              17: "}",
              18: ";",
              19: "?",
              20: ":",
              21: "(",
              22: ")",
              23: ".",
              24: "[",
              25: "]",
              26: "NEWLINE",
              27: "::",
              28: "FUNC_DIRECTIVE",
              29: "WITHIN",
              30: "PARAM_START",
              31: "PARAM_END",
              32: "THEN",
              33: "ASYNC",
              34: "DO",
              35: "WHETHER",
              36: "TYPEOF",
              37: "AWAIT",
              38: "INDENT",
              39: "OUTDENT",
              40: "YIELD",
              41: "EXISTS",
              42: "SYMBOL_EXISTS",
              43: "INCLUDES",
              44: "MATH_BIN",
              45: "CHAIN",
              46: "EITHER",
              47: "IS",
              48: "ISNT",
              49: "EITHER_OR",
              50: "COMPOUND_AND",
              51: "++",
              52: "--",
              53: "~~",
              54: "NOT",
              55: "**",
              56: "PLUS",
              57: "DIVISION",
              58: "<<",
              59: ">>",
              60: ">>>",
              61: "===",
              62: "!==",
              63: "==",
              64: "!=",
              65: ">=",
              66: "<=",
              67: "IN",
              68: "INSTANCEOF",
              69: "AND",
              70: "OR",
              71: "||",
              72: "&&",
              73: "??",
              74: "SUPER",
              75: "FUNC_EXISTS",
              76: "CALL_START",
              77: "CALL_END",
              78: "...",
              79: "CLASS",
              80: "EXTENDS",
              81: "{{",
              82: "}}",
              83: "FOR",
              84: "WHEN",
              85: "WHILST",
              86: "FOR_OF",
              87: "FOR_IN",
              88: "POSTFOR",
              89: "SWITCH",
              90: "DEFAULT",
              91: "POSTCASE",
              92: "BREAK",
              93: "COMPOUND_OR",
              94: "CASE",
              95: "IF",
              96: "FOR_FROM",
              97: "FOR_AT",
              98: "FOR_AS",
              99: "POSTIF",
              100: "POSTUNLESS",
              101: "TRY",
              102: "FINALLY",
              103: "CATCH",
              104: "WHILE",
              105: "UNTIL",
              106: "LOOP",
              107: "UNLESS",
              108: "ELSE",
              109: "OTHERWISE",
              110: "SUCH",
              111: "NEW",
              112: "PROPERTY",
              113: "INDEX_START",
              114: "INDEX_END",
              115: "THIS",
              116: "DEFAULTS",
              117: "UNDEFINED",
              118: "INFINITY",
              119: "BOOL",
              120: "NULL",
              121: "NAN",
              122: "NUMBER",
              123: "STRING",
              124: "STRING_START",
              125: "STRING_END",
              126: "INTERPOLATION_START",
              127: "INTERPOLATION_END",
              128: "REGEX",
              129: "REGEX_START",
              130: "REGEX_END",
              131: "FUNCTION",
              132: "WITH",
              133: "<(",
              134: ")>",
              135: "STATIC",
              136: "GET",
              137: "SET",
              138: "AS",
              139: "AT",
              140: "FROM",
              141: "ARGUMENT",
              142: "IDENTIFIER",
              143: "CONTINUE",
              144: "THROW",
              145: "INTERFACE",
              146: "READONLY",
              147: "TYPE",
              148: "TAG",
              149: "VAR",
              150: "LET",
              151: "CONST",
              152: "RETURN",
              153: "IMPORT",
              154: "EXPORT",
              155: "OUDENT"
            },
            TERROR: 2,
            EOF: 1,
            originalQuoteName: null,
            originalParseError: null,
            cleanupAfterParse: null,
            constructParseErrorInfo: null,
            yyMergeLocationInfo: null,
            __error_infos: [],
            __error_recovery_infos: [],
            quoteName: function (e) {
              return '"' + e + '"';
            },
            getSymbolName: function (e) {
              if (this.terminals_[e]) return this.terminals_[e];
              var t = this.symbols_;

              for (var s in t) if (t[s] === e) return s;

              return null;
            },
            describeSymbol: function (e) {
              if (e !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[e]) return this.terminal_descriptions_[e];
              if (e === this.EOF) return "end of input";
              var t = this.getSymbolName(e);
              return t ? this.quoteName(t) : null;
            },
            collect_expected_token_set: function (e, t) {
              var s = this.TERROR,
                  i = [],
                  n = {};
              if (!t && this.state_descriptions_ && this.state_descriptions_[e]) return [this.state_descriptions_[e]];

              for (var r in this.table[e]) if ((r = +r) !== s) {
                var l = t ? r : this.describeSymbol(r);
                l && !n[l] && (i.push(l), n[l] = !0);
              }

              return i;
            },
            productions_: function (e) {
              for (var t = [], s = e.pop, i = e.rule, n = 0, r = s.length; n < r; n++) t.push([s[n], i[n]]);

              return t;
            }({
              pop: i([156, 156, t, [157, 3], 158, 158, t, [159, 11], t, [160, 3], t, [161, 15], t, [162, 21], 163, 164, 165, 165, 166, 166, t, [167, 3], t, [168, 8], 169, 169, t, [170, 11], t, [171, 12], t, [172, 7], t, [173, 7], t, [174, 3], t, [175, 4], t, [176, 3], 177, 177, t, [178, 11], t, [179, 6], 180, 180, 181, 181, t, [182, 22], 183, 183, t, [184, 4], 185, 185, t, [186, 10], t, [187, 3], t, [188, 3], t, [189, 3], t, [190, 9], 191, 191, t, [192, 3], 193, 193, 194, 194, t, [195, 5], t, [196, 7], 197, 197, 198, 198, t, [199, 4], t, [200, 8], 201, 201, t, [202, 3], t, [203, 9], 204, 205, 205, 206, t, [207, 3], 208, 208, t, [209, 3], t, [210, 4], t, [211, 5], t, [212, 17], t, [213, 7], t, [214, 7], 215, 215, 216, 216, 217, 218, 218, 219, 219, 220, 220, 221, 222, 222, 223, 223, t, [224, 13], t, [225, 3], t, [226, 7], t, [227, 9], t, [228, 3], 229, 229, t, [230, 4], 231, 232, t, [233, 4], t, [234, 3], t, [235, 5], t, [236, 5], 237, t, [238, 8], 239, 239, 240, 240, t, [241, 3], t, [242, 3], t, [243, 4], 244, 244, t, [245, 4], 246, 246, t, [247, 3], t, [248, 12], 249, 249, t, [250, 3], t, [251, 4], t, [252, 3], t, [253, 3], 254, 254, t, [255, 3], t, [256, 3], t, [257, 7], t, [258, 6], t, [259, 4], t, [260, 4], t, [261, 3], 262, 262, t, [263, 4], t, [264, 5], 265, 265, t, [266, 4], 267, 267, t, [268, 3], t, [269, 4], 270, 270, t, [271, 4], t, [272, 8], 273, t, [274, 8], t, [275, 3], t, [276, 3], 277, 277, t, [278, 3], t, [279, 6], 280, 280, t, [281, 3], t, [282, 6]]),
              rule: i([0, 1, 3, 2, t, [1, 14], t, [3, 3], 2, 5, 5, 4, 5, 4, 6, 5, 6, s, [6, 3], 5, t, [2, 4], 3, t, [2, 5], 4, 2, 4, s, [11, 3], s, [32, 4], s, [37, 3], s, [23, 5], 1, 4, 1, s, [62, 15], t, [1, 26], s, [59, 4], s, [74, 4], 4, 6, 1, 3, s, [4, 3], 2, 2, t, [0, 5, 1], 2, 3, s, [102, 3], 4, 3, s, [102, 3], s, [5, 3], 3, s, [127, 4], 7, 8, 8, s, [3, 3], 5, 5, t, [6, 4], 5, 5, s, [13, 3], 7, 9, 9, 8, 8, 2, 1, 5, 4, 7, s, [58, 3], s, [68, 3], s, [124, 5], s, [43, 3], s, [8, 5], s, [90, 5], 5, 3, 7, t, [3, 4], 1, 3, s, [82, 3], t, [2, 6], 3, t, [4, 4], 5, 3, 3, 4, s, [40, 3], s, [17, 6], s, [18, 3], s, [205, 3], 6, 6, s, [149, 15], 3, 4, s, [72, 3], 5, s, [54, 3], 4, 5, s, [151, 3], 5, s, [271, 3], s, [9, 4], s, [18, 3], 3, 5, 5, 7, 5, s, [55, 3], s, [185, 5], 2, s, [38, 4], s, [158, 4], s, [293, 9], s, [58, 3], s, [7, 9], s, [93, 4], 3, 6, 4, 7, 2, 5, 6, s, [145, 3], t, [2, 4], s, [35, 5], s, [215, 3], s, [173, 5], 0, s, [222, 3], s, [156, 3], s, [244, 3], 1, 3, 5, s, [145, 4], s, [122, 6], s, [62, 4], s, [94, 6], s, [22, 3], s, [264, 3], s, [351, 4], s, [283, 4], 1, s, [75, 3], s, [69, 4], 1, s, [289, 3], s, [95, 4], s, [9, 3], s, [48, 5], 4, 1, 1, 4, 6, s, [303, 3], s, [162, 4], 6, 3, 4, s, [29, 3], s, [321, 3], 4, s, [87, 3], s, [172, 5], 4, s, [31, 3], t, [1, 5], 5, s, [105, 4], s, [197, 5], s, [110, 5], s, [47, 5], s, [432, 3], 5, 1, s, [271, 3], s, [68, 4], s, [153, 4], 5, s, [80, 5], 4, 5, t, [7, 3], 9, s, [350, 3], s, [71, 4], 5, s, [127, 4], 0, s, [168, 4], 5, s, [52, 5], s, [281, 6], s, [46, 5], s, [11, 3], s, [10, 3]])
            }),
            performAction: function (e, t, s, i, n) {
              var r = this.yy,
                  l = r.parser;

              switch (r.lexer, t) {
                case 0:
                  this.$ = i[s - 1], this._$ = n[s - 1];
                  break;

                case 1:
                  return this._$ = l.yyMergeLocationInfo(null, null, null, null, !0), this.$ = Object.assign(new r.Root("", ...["EMPTY"]), {
                    rule: "",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });

                case 2:
                  return this._$ = n[s], this.$ = new r.Root("Body", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });

                case 3:
                  this.$ = i[s - 2], this._$ = l.yyMergeLocationInfo(s - 2, s), (i[s - 2][1] = [...i[s - 2][1], Object.assign(i[s], {
                    lineCount: i[s - 1]
                  })]) && Object.assign(i[s - 2], {
                    loc: {
                      first_line: n[s - 2].first_line,
                      last_line: n[s].last_line,
                      first_column: n[s - 2].first_column,
                      last_column: n[s].last_column
                    }
                  });
                  break;

                case 4:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(i[s - 1][1][i[s - 1][1].length - 1], {
                    lineCount: i[s]
                  }) && Object.assign(i[s - 1], {
                    loc: {
                      first_line: n[s - 1].first_line,
                      last_line: n[s].last_line,
                      first_column: n[s - 1].first_column,
                      last_column: n[s].last_column
                    }
                  });
                  break;

                case 5:
                  this._$ = n[s], this.$ = Object.assign(new r.Body("Line", ...[[i[s]]]), {
                    rule: "Line",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 6:
                  this._$ = n[s], this.$ = new r.Line("Expression", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 7:
                  this._$ = n[s], this.$ = new r.Line("Statement", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 8:
                  this._$ = n[s], this.$ = new r.Expression("Code", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 9:
                  this._$ = n[s], this.$ = new r.Expression("Value", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 10:
                  this._$ = n[s], this.$ = new r.Expression("Operation", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 11:
                  this._$ = n[s], this.$ = new r.Expression("If", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 12:
                  this._$ = n[s], this.$ = new r.Expression("While", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 13:
                  this._$ = n[s], this.$ = new r.Expression("For", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 14:
                  this._$ = n[s], this.$ = new r.Expression("Switch", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 15:
                  this._$ = n[s], this.$ = new r.Expression("TryBlock", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 16:
                  this._$ = n[s], this.$ = new r.Expression("Assign", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 17:
                  this._$ = n[s], this.$ = new r.Expression("Class", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 18:
                  this._$ = n[s], this.$ = new r.Expression("Label", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 19:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Label("Identifier :: Expression", ...[i[s - 2], r.Block.wrap(i[s])]), {
                    rule: "Identifier :: Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 20:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Label("Identifier :: Statement", ...[i[s - 2], r.Block.wrap(i[s])]), {
                    rule: "Identifier :: Statement",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 21:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Label("Identifier :: Block", ...[i[s - 2], i[s]]), {
                    rule: "Identifier :: Block",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 22:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Code("FUNC_DIRECTIVE Expression", ...[null, i[s - 1], i[s]]), {
                    rule: "FUNC_DIRECTIVE Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 23:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Code("WITHIN PARAM_START ParamList PARAM_END Block", ...[i[s - 2], "=>", i[s]]), {
                    rule: "WITHIN PARAM_START ParamList PARAM_END Block",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 24:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Code("PARAM_START ParamList PARAM_END FUNC_DIRECTIVE Block", ...[i[s - 3], i[s - 1], i[s]]), {
                    rule: "PARAM_START ParamList PARAM_END FUNC_DIRECTIVE Block",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 25:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Code("PARAM_START PARAM_END FUNC_DIRECTIVE Block", ...[null, i[s - 1], i[s]]), {
                    rule: "PARAM_START PARAM_END FUNC_DIRECTIVE Block",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 26:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Code("PARAM_START ParamList PARAM_END FUNC_DIRECTIVE Expression", ...[i[s - 3], i[s - 1], i[s]]), {
                    rule: "PARAM_START ParamList PARAM_END FUNC_DIRECTIVE Expression",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 27:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Code("PARAM_START PARAM_END FUNC_DIRECTIVE Expression", ...[null, i[s - 1], i[s]]), {
                    rule: "PARAM_START PARAM_END FUNC_DIRECTIVE Expression",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 28:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.Code("WITHIN PARAM_START ParamList PARAM_END THEN Block", ...[i[s - 3], "=>", i[s - 1]]), {
                    rule: "WITHIN PARAM_START ParamList PARAM_END THEN Block",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 29:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Code("WITHIN PARAM_START ParamList PARAM_END Expression", ...[i[s - 2], "=>", i[s]]), {
                    rule: "WITHIN PARAM_START ParamList PARAM_END Expression",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 30:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.Code("WITHIN PARAM_START ParamList PARAM_END THEN Expression", ...[i[s - 3], "=>", i[s]]), {
                    rule: "WITHIN PARAM_START ParamList PARAM_END THEN Expression",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 31:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Code("WITHIN PARAM_START PARAM_END Block", ...[null, "=>", i[s]]), {
                    rule: "WITHIN PARAM_START PARAM_END Block",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 32:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Code("WITHIN PARAM_START PARAM_END THEN Block", ...[null, "=>", i[s]]), {
                    rule: "WITHIN PARAM_START PARAM_END THEN Block",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 33:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Code("WITHIN PARAM_START PARAM_END Expression", ...[null, "=>", i[s]]), {
                    rule: "WITHIN PARAM_START PARAM_END Expression",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 34:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Code("WITHIN PARAM_START PARAM_END THEN Expression", ...[null, "=>", i[s]]), {
                    rule: "WITHIN PARAM_START PARAM_END THEN Expression",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 35:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Code("WITHIN Block", ...[null, "=>", i[s]]), {
                    rule: "WITHIN Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 36:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Code("ASYNC Code", ...[...i[s].contents]), {
                    rule: "ASYNC Code",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1,
                    async: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 37:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Operation("MathPrefix Expression", ...[i[s - 1], i[s]]), {
                    rule: "MathPrefix Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 38:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Operation("Expression MathPostfix", ...[i[s - 1], i[s]]), {
                    rule: "Expression MathPostfix",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 39:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Operation("Expression Operator Expression", ...[i[s - 2], i[s - 1], i[s]]), {
                    rule: "Expression Operator Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 40:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Operation("@ Value", ...[i[s]]), {
                    rule: "@ Value",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 41:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Operation("DO Expression", ...[i[s]]), {
                    rule: "DO Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 42:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Operation("WHETHER Expression", ...[i[s]]), {
                    rule: "WHETHER Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 43:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Operation("TYPEOF Expression", ...[i[s]]), {
                    rule: "TYPEOF Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 44:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Operation("AWAIT Expression", ...[i[s]]), {
                    rule: "AWAIT Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 45:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Operation("AWAIT INDENT Expression OUTDENT", ...[i[s - 1]]), {
                    rule: "AWAIT INDENT Expression OUTDENT",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 46:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Operation("YIELD Expression", ...[i[s]]), {
                    rule: "YIELD Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 47:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Operation("YIELD INDENT Expression OUTDENT", ...[i[s - 1]]), {
                    rule: "YIELD INDENT Expression OUTDENT",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 48:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Operation("Expression EXISTS", ...[i[s - 1]]), {
                    rule: "Expression EXISTS",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 49:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Operation("Expression SYMBOL_EXISTS", ...[i[s - 1]]), {
                    rule: "Expression SYMBOL_EXISTS",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 50:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Operation("Expression Compare Expression", ...[i[s - 2], i[s - 1], i[s]]), {
                    rule: "Expression Compare Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 51:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Operation("Expression Logical Expression", ...[i[s - 2], i[s - 1], i[s]]), {
                    rule: "Expression Logical Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 52:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Operation("Expression INCLUDES Expression", ...[i[s - 2], i[s]]), {
                    rule: "Expression INCLUDES Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 53:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Operation("Expression MATH_BIN Expression", ...[i[s - 2], i[s - 1], i[s]]), {
                    rule: "Expression MATH_BIN Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 54:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Operation("Expression Multicheck", ...[i[s - 1], i[s].contents]), {
                    rule: "Expression Multicheck",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 55:
                  this._$ = n[s], this.$ = Object.assign(new r.Operation("Multicondition", ...[null, i[s].contents]), {
                    rule: "Multicondition",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 56:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Operation("Expression CHAIN Expression", ...[i[s - 2], i[s], /then\?|\?>/.test(i[s - 1].origin || "")]), {
                    rule: "Expression CHAIN Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 57:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Operation("Expression CHAIN Block", ...[i[s - 2], i[s], /then\?|\?>/.test(i[s - 1].origin || "")]), {
                    rule: "Expression CHAIN Block",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 58:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Multicheck("MulticheckCombinations MulticheckClauses", ...[i[s - 1].rule, i[s]]), {
                    rule: "MulticheckCombinations MulticheckClauses",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 59:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Multicondition("EITHER MulticheckClauses", ...[i[s - 1], i[s]]), {
                    rule: "EITHER MulticheckClauses",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 60:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = new r.MulticheckCombinations("IS EITHER", ...[i[s - 1]]).setLocation({
                    first_line: n[s - 1].first_line,
                    first_column: n[s - 1].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s - 1].src,
                    type: n[s - 1].type
                  });
                  break;

                case 61:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = new r.MulticheckCombinations("ISNT EITHER", ...[i[s - 1]]).setLocation({
                    first_line: n[s - 1].first_line,
                    first_column: n[s - 1].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s - 1].src,
                    type: n[s - 1].type
                  });
                  break;

                case 62:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.MulticheckClauses("MulticheckClauses EITHER_OR Clause", ...[...i[s - 2].contents, i[s]]), {
                    rule: "MulticheckClauses EITHER_OR Clause",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 63:
                  this._$ = n[s], this.$ = Object.assign(new r.MulticheckClauses("Clause", ...[i[s]]), {
                    rule: "Clause",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 64:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Clause("Clause COMPOUND_AND Compare Expression", ...[...i[s - 3].contents, [i[s], i[s - 1]]]), {
                    rule: "Clause COMPOUND_AND Compare Expression",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 65:
                  this._$ = n[s], this.$ = Object.assign(new r.Clause("Expression", ...[[i[s]]]), {
                    rule: "Expression",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 66:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Clause("Compare Expression", ...[[i[s], i[s - 1]]]), {
                    rule: "Compare Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 67:
                  this._$ = n[s], this.$ = new r.MathPrefix("++", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 68:
                  this._$ = n[s], this.$ = new r.MathPrefix("--", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 69:
                  this._$ = n[s], this.$ = new r.MathPrefix("+", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 70:
                  this._$ = n[s], this.$ = new r.MathPrefix("-", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 71:
                  this._$ = n[s], this.$ = new r.MathPrefix("~", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 72:
                  this._$ = n[s], this.$ = new r.MathPrefix("~~", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 73:
                  this._$ = n[s], this.$ = new r.MathPrefix("NOT", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 74:
                  this._$ = n[s], this.$ = new r.MathPrefix("!", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 75:
                  this._$ = n[s], this.$ = new r.MathPostfix("++", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 76:
                  this._$ = n[s], this.$ = new r.MathPostfix("--", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 77:
                  this._$ = n[s], this.$ = new r.Operator("*", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 78:
                  this._$ = n[s], this.$ = new r.Operator("**", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 79:
                  this._$ = n[s], this.$ = new r.Operator("+", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 80:
                  this._$ = n[s], this.$ = new r.Operator("PLUS", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 81:
                  this._$ = n[s], this.$ = new r.Operator("-", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 82:
                  this._$ = n[s], this.$ = new r.Operator("DIVISION", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 83:
                  this._$ = n[s], this.$ = new r.Operator("%", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 84:
                  this._$ = n[s], this.$ = new r.Operator("<<", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 85:
                  this._$ = n[s], this.$ = new r.Operator(">>", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 86:
                  this._$ = n[s], this.$ = new r.Operator(">>>", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 87:
                  this._$ = n[s], this.$ = new r.Operator("^", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 88:
                  this._$ = n[s], this.$ = new r.Compare("IS", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 89:
                  this._$ = n[s], this.$ = new r.Compare("===", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 90:
                  this._$ = n[s], this.$ = new r.Compare("ISNT", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 91:
                  this._$ = n[s], this.$ = new r.Compare("!==", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 92:
                  this._$ = n[s], this.$ = new r.Compare("==", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 93:
                  this._$ = n[s], this.$ = new r.Compare("!=", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 94:
                  this._$ = n[s], this.$ = new r.Compare(">=", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 95:
                  this._$ = n[s], this.$ = new r.Compare("<=", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 96:
                  this._$ = n[s], this.$ = new r.Compare(">", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 97:
                  this._$ = n[s], this.$ = new r.Compare("<", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 98:
                  this._$ = n[s], this.$ = new r.Compare("IN", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 99:
                  this._$ = n[s], this.$ = new r.Compare("INSTANCEOF", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 100:
                  this._$ = n[s], this.$ = new r.Logical("AND", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 101:
                  this._$ = n[s], this.$ = new r.Logical("OR", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 102:
                  this._$ = n[s], this.$ = new r.Logical("||", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 103:
                  this._$ = n[s], this.$ = new r.Logical("&&", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 104:
                  this._$ = n[s], this.$ = new r.Logical("|", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 105:
                  this._$ = n[s], this.$ = new r.Logical("&", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 106:
                  this._$ = n[s], this.$ = new r.Logical("??", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 107:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Invocation("Value Arguments", ...[i[s - 1], i[s]]), {
                    rule: "Value Arguments",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 108:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Invocation("SUPER Arguments", ...[i[s - 1], i[s]]), {
                    rule: "SUPER Arguments",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 109:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Invocation("Value FUNC_EXISTS Arguments", ...[i[s - 2], i[s]]), {
                    rule: "Value FUNC_EXISTS Arguments",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1,
                    soak: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 110:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Invocation("SUPER FUNC_EXISTS Arguments", ...[i[s - 2], i[s]]), {
                    rule: "SUPER FUNC_EXISTS Arguments",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1,
                    soak: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 111:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Invocation("@ SUPER", ...[i[s], new r.Arguments(null)]), {
                    rule: "@ SUPER",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 112:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Invocation("Value String", ...[i[s - 1], i[s]]), {
                    rule: "Value String",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1,
                    templ: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 113:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Invocation("Value FUNC_EXISTS String", ...[i[s - 2], i[s]]), {
                    rule: "Value FUNC_EXISTS String",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1,
                    templ: !0,
                    soak: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 114:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Arguments("CALL_START CALL_END", ...[]), {
                    rule: "CALL_START CALL_END",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 115:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Arguments("CALL_START ArgList OptComma CALL_END", ...[i[s - 2]]), {
                    rule: "CALL_START ArgList OptComma CALL_END",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 116:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.Arguments("CALL_START INDENT ArgList OptComma OUTDENT CALL_END", ...[i[s - 3]]), {
                    rule: "CALL_START INDENT ArgList OptComma OUTDENT CALL_END",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1,
                    indented: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 117:
                  this._$ = n[s], this.$ = new r.ArgList("Arg", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 118:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ArgList("ArgList , Arg", ...[...i[s - 2].contents, i[s]]), {
                    rule: "ArgList , Arg",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 119:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.ArgList("ArgList OptComma NEWLINE Arg", ...[...i[s - 3].contents, n[s - 1].generated, i[s]]), {
                    rule: "ArgList OptComma NEWLINE Arg",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 120:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.ArgList("ArgList OptComma INDENT ArgList OptComma OUTDENT", ...[...i[s - 5].contents, !1, ...i[s - 2].contents]), {
                    rule: "ArgList OptComma INDENT ArgList OptComma OUTDENT",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 121:
                  this._$ = n[s], this.$ = new r.Arg("Expression", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 122:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Arg("... Expression", ...[i[s]]), {
                    rule: "... Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1,
                    expansion: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 123:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Arg("Expression ...", ...[i[s - 1]]), {
                    rule: "Expression ...",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1,
                    expansion: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 124:
                  this._$ = l.yyMergeLocationInfo(null, null, null, null, !0), this.$ = new r.OptComma("", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 125:
                  this._$ = n[s], this.$ = new r.OptComma(",", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 126:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Class("CLASS Identifier", ...[i[s], !1, !1]), {
                    rule: "CLASS Identifier",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 127:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Class("CLASS Identifier Block", ...[i[s - 1], !1, i[s][1]]), {
                    rule: "CLASS Identifier Block",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 128:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Class("CLASS Identifier THEN Block", ...[i[s - 2], !1, i[s][1]]), {
                    rule: "CLASS Identifier THEN Block",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 129:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Class("CLASS Block", ...[void 0, !1, i[s][1]]), {
                    rule: "CLASS Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 130:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Class("CLASS THEN Block", ...[void 0, !1, i[s][1]]), {
                    rule: "CLASS THEN Block",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 131:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Class("CLASS Identifier EXTENDS Value Block", ...[i[s - 3], i[s - 1], i[s][1]]), {
                    rule: "CLASS Identifier EXTENDS Value Block",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 132:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.Class("CLASS Identifier EXTENDS Value THEN Block", ...[i[s - 4], i[s - 2], i[s][1]]), {
                    rule: "CLASS Identifier EXTENDS Value THEN Block",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 133:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Class("CLASS EXTENDS Value Block", ...[void 0, i[s - 1], i[s][1]]), {
                    rule: "CLASS EXTENDS Value Block",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 134:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Class("CLASS Identifier EXTENDS Value", ...[i[s - 2], i[s], !1]), {
                    rule: "CLASS Identifier EXTENDS Value",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 135:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Class("CLASS EXTENDS Value", ...[void 0, i[s], !1]), {
                    rule: "CLASS EXTENDS Value",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 136:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Class("CLASS EXTENDS Value THEN Block", ...[void 0, i[s - 2], i[s][1]]), {
                    rule: "CLASS EXTENDS Value THEN Block",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 137:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Block("{{ }}", ...[r.Block.wrap()]), {
                    rule: "{{ }}",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 138:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Block("INDENT OUTDENT", ...[r.Block.wrap()]), {
                    rule: "INDENT OUTDENT",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 139:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Block("{{ INDENT OUTDENT }}", ...[r.Block.wrap()]), {
                    rule: "{{ INDENT OUTDENT }}",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 140:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Block("INDENT Body OUTDENT", ...[i[s - 1]]), {
                    rule: "INDENT Body OUTDENT",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 141:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Block("{{ INDENT Body OUTDENT }}", ...[i[s - 2]]), {
                    rule: "{{ INDENT Body OUTDENT }}",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 142:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Block("{ Body }", ...[i[s - 1]]), {
                    rule: "{ Body }",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 143:
                  this._$ = n[s], this.$ = new r.ForExpression("JointExpression", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 144:
                  this._$ = n[s], this.$ = new r.ForExpression("Declare", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 145:
                  this._$ = n[s], this.$ = new r.JointExpression("Expression", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 146:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.JointExpression("JointExpression , Expression", ...[...i[s - 2].contents, i[s]]), {
                    rule: "JointExpression , Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 147:
                  this._$ = l.yyMergeLocationInfo(s - 6, s), this.$ = Object.assign(new r.For("FOR ForExpression ; Expression ; Expression Block", ...[[i[s - 5], i[s - 3], i[s - 1]], i[s]]), {
                    rule: "FOR ForExpression ; Expression ; Expression Block",
                    loc: {
                      first_line: n[s - 6].first_line,
                      first_column: n[s - 6].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 6].src,
                      type: n[s - 6].type
                    }
                  }, {
                    first: 1,
                    last: 7,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 148:
                  this._$ = l.yyMergeLocationInfo(s - 7, s), this.$ = Object.assign(new r.For("FOR ForExpression ; Expression ; Expression THEN Block", ...[[i[s - 6], i[s - 4], i[s - 2]], i[s]]), {
                    rule: "FOR ForExpression ; Expression ; Expression THEN Block",
                    loc: {
                      first_line: n[s - 7].first_line,
                      first_column: n[s - 7].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 7].src,
                      type: n[s - 7].type
                    }
                  }, {
                    first: 1,
                    last: 8,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 149:
                  this._$ = l.yyMergeLocationInfo(s - 7, s), this.$ = Object.assign(new r.For("FOR ForExpression ; Expression ; Expression THEN Expression", ...[[i[s - 6], i[s - 4], i[s - 2]], r.Block.wrap(i[s])]), {
                    rule: "FOR ForExpression ; Expression ; Expression THEN Expression",
                    loc: {
                      first_line: n[s - 7].first_line,
                      first_column: n[s - 7].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 7].src,
                      type: n[s - 7].type
                    }
                  }, {
                    first: 1,
                    last: 8,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 150:
                  this._$ = l.yyMergeLocationInfo(s - 6, s), this.$ = Object.assign(new r.For("FOR ForExpression WHEN Expression WHILST Expression Block", ...[[i[s - 5], i[s - 3], i[s - 1]], i[s]]), {
                    rule: "FOR ForExpression WHEN Expression WHILST Expression Block",
                    loc: {
                      first_line: n[s - 6].first_line,
                      first_column: n[s - 6].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 6].src,
                      type: n[s - 6].type
                    }
                  }, {
                    first: 1,
                    last: 7,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 151:
                  this._$ = l.yyMergeLocationInfo(s - 7, s), this.$ = Object.assign(new r.For("FOR ForExpression WHEN Expression WHILST Expression THEN Block", ...[[i[s - 6], i[s - 4], i[s - 2]], i[s]]), {
                    rule: "FOR ForExpression WHEN Expression WHILST Expression THEN Block",
                    loc: {
                      first_line: n[s - 7].first_line,
                      first_column: n[s - 7].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 7].src,
                      type: n[s - 7].type
                    }
                  }, {
                    first: 1,
                    last: 8,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 152:
                  this._$ = l.yyMergeLocationInfo(s - 7, s), this.$ = Object.assign(new r.For("FOR ForExpression WHEN Expression WHILST Expression THEN Expression", ...[[i[s - 6], i[s - 4], i[s - 2]], r.Block.wrap(i[s])]), {
                    rule: "FOR ForExpression WHEN Expression WHILST Expression THEN Expression",
                    loc: {
                      first_line: n[s - 7].first_line,
                      first_column: n[s - 7].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 7].src,
                      type: n[s - 7].type
                    }
                  }, {
                    first: 1,
                    last: 8,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 153:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.For("FOR ForAssignable FOR_OF Expression Block", ...[[i[s - 3][1], i[s - 2], i[s - 1]], i[s], i[s - 3][2]]), {
                    rule: "FOR ForAssignable FOR_OF Expression Block",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 154:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.For("FOR ForAssignable FOR_IN Expression Block", ...[[i[s - 3][1], i[s - 2], i[s - 1]], i[s], i[s - 3][2]]), {
                    rule: "FOR ForAssignable FOR_IN Expression Block",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 155:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.For("FOR ForAssignable FOR_OF Expression THEN Block", ...[[i[s - 4][1], i[s - 3], i[s - 2]], i[s], i[s - 4][2]]), {
                    rule: "FOR ForAssignable FOR_OF Expression THEN Block",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 156:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.For("FOR ForAssignable FOR_IN Expression THEN Block", ...[[i[s - 4][1], i[s - 3], i[s - 2]], i[s], i[s - 4][2]]), {
                    rule: "FOR ForAssignable FOR_IN Expression THEN Block",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 157:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.For("FOR ForAssignable FOR_OF Expression THEN Expression", ...[[i[s - 4][1], i[s - 3], i[s - 2]], r.Block.wrap(i[s]), i[s - 4][2]]), {
                    rule: "FOR ForAssignable FOR_OF Expression THEN Expression",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 158:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.For("FOR ForAssignable FOR_IN Expression THEN Expression", ...[[i[s - 4][1], i[s - 3], i[s - 2]], r.Block.wrap(i[s]), i[s - 4][2]]), {
                    rule: "FOR ForAssignable FOR_IN Expression THEN Expression",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 159:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.For("Expression POSTFOR ForAssignable FOR_OF Expression", ...[[i[s - 2][1], i[s - 1], i[s]], r.Block.wrap(i[s - 4]), i[s - 2][2]]), {
                    rule: "Expression POSTFOR ForAssignable FOR_OF Expression",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 160:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.For("Expression POSTFOR ForAssignable FOR_IN Expression", ...[[i[s - 2][1], i[s - 1], i[s]], r.Block.wrap(i[s - 4]), i[s - 2][2]]), {
                    rule: "Expression POSTFOR ForAssignable FOR_IN Expression",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 161:
                  this._$ = l.yyMergeLocationInfo(s - 7, s), this.$ = Object.assign(new r.For("FOR Identifier , Assignable ForAny Expression THEN Expression", ...[[[i[s - 6], i[s - 4]], i[s - 3], i[s - 2]], r.Block.wrap(i[s])]), {
                    rule: "FOR Identifier , Assignable ForAny Expression THEN Expression",
                    loc: {
                      first_line: n[s - 7].first_line,
                      first_column: n[s - 7].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 7].src,
                      type: n[s - 7].type
                    }
                  }, {
                    first: 1,
                    last: 8,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 162:
                  this._$ = l.yyMergeLocationInfo(s - 7, s), this.$ = Object.assign(new r.For("FOR Identifier , Assignable ForAny Expression THEN Block", ...[[[i[s - 6], i[s - 4]], i[s - 3], i[s - 2]], i[s]]), {
                    rule: "FOR Identifier , Assignable ForAny Expression THEN Block",
                    loc: {
                      first_line: n[s - 7].first_line,
                      first_column: n[s - 7].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 7].src,
                      type: n[s - 7].type
                    }
                  }, {
                    first: 1,
                    last: 8,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 163:
                  this._$ = l.yyMergeLocationInfo(s - 6, s), this.$ = Object.assign(new r.For("FOR Identifier , Assignable ForAny Expression Block", ...[[[i[s - 5], i[s - 3]], i[s - 2], i[s - 1]], i[s]]), {
                    rule: "FOR Identifier , Assignable ForAny Expression Block",
                    loc: {
                      first_line: n[s - 6].first_line,
                      first_column: n[s - 6].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 6].src,
                      type: n[s - 6].type
                    }
                  }, {
                    first: 1,
                    last: 7,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 164:
                  this._$ = l.yyMergeLocationInfo(s - 6, s), this.$ = Object.assign(new r.For("Expression POSTFOR Identifier , Assignable ForAny Expression", ...[[[i[s - 4], i[s - 2]], i[s - 1], i[s]], r.Block.wrap(i[s - 6])]), {
                    rule: "Expression POSTFOR Identifier , Assignable ForAny Expression",
                    loc: {
                      first_line: n[s - 6].first_line,
                      first_column: n[s - 6].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 6].src,
                      type: n[s - 6].type
                    }
                  }, {
                    first: 1,
                    last: 7,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 165:
                  this._$ = l.yyMergeLocationInfo(s - 8, s), this.$ = Object.assign(new r.For("FOR DeclarationKeyword Identifier , Assignable ForAny Expression THEN Expression", ...[[[i[s - 6], i[s - 4]], i[s - 3], i[s - 2]], r.Block.wrap(i[s]), i[s - 7]]), {
                    rule: "FOR DeclarationKeyword Identifier , Assignable ForAny Expression THEN Expression",
                    loc: {
                      first_line: n[s - 8].first_line,
                      first_column: n[s - 8].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 8].src,
                      type: n[s - 8].type
                    }
                  }, {
                    first: 1,
                    last: 9,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 166:
                  this._$ = l.yyMergeLocationInfo(s - 8, s), this.$ = Object.assign(new r.For("FOR DeclarationKeyword Identifier , Assignable ForAny Expression THEN Block", ...[[[i[s - 6], i[s - 4]], i[s - 3], i[s - 2]], i[s - 1], i[s - 7]]), {
                    rule: "FOR DeclarationKeyword Identifier , Assignable ForAny Expression THEN Block",
                    loc: {
                      first_line: n[s - 8].first_line,
                      first_column: n[s - 8].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 8].src,
                      type: n[s - 8].type
                    }
                  }, {
                    first: 1,
                    last: 9,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 167:
                  this._$ = l.yyMergeLocationInfo(s - 7, s), this.$ = Object.assign(new r.For("FOR DeclarationKeyword Identifier , Assignable ForAny Expression Block", ...[[[i[s - 5], i[s - 3]], i[s - 2], i[s - 1]], i[s], i[s - 6]]), {
                    rule: "FOR DeclarationKeyword Identifier , Assignable ForAny Expression Block",
                    loc: {
                      first_line: n[s - 7].first_line,
                      first_column: n[s - 7].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 7].src,
                      type: n[s - 7].type
                    }
                  }, {
                    first: 1,
                    last: 8,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 168:
                  this._$ = l.yyMergeLocationInfo(s - 7, s), this.$ = Object.assign(new r.For("Expression POSTFOR DeclarationKeyword Identifier , Assignable ForAny Expression", ...[[[i[s - 4], i[s - 2]], i[s - 1], i[s]], r.Block.wrap(i[s - 7]), i[s - 5]]), {
                    rule: "Expression POSTFOR DeclarationKeyword Identifier , Assignable ForAny Expression",
                    loc: {
                      first_line: n[s - 7].first_line,
                      first_column: n[s - 7].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 7].src,
                      type: n[s - 7].type
                    }
                  }, {
                    first: 1,
                    last: 8,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 169:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.ForAssignable("DeclarationKeyword Assignable", ...[i[s], i[s - 1]]), {
                    rule: "DeclarationKeyword Assignable",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 170:
                  this._$ = n[s], this.$ = Object.assign(new r.ForAssignable("Assignable", ...[i[s]]), {
                    rule: "Assignable",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 171:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Switch("SWITCH Expression INDENT Cases OUTDENT", ...[i[s - 3], i[s - 1]]), {
                    rule: "SWITCH Expression INDENT Cases OUTDENT",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 172:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Switch("SWITCH INDENT Cases OUTDENT", ...[!1, i[s - 1]]), {
                    rule: "SWITCH INDENT Cases OUTDENT",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 173:
                  this._$ = l.yyMergeLocationInfo(s - 6, s), this.$ = Object.assign(new r.Switch("SWITCH Expression {{ INDENT Cases OUTDENT }}", ...[i[s - 5], i[s - 2]]), {
                    rule: "SWITCH Expression {{ INDENT Cases OUTDENT }}",
                    loc: {
                      first_line: n[s - 6].first_line,
                      first_column: n[s - 6].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 6].src,
                      type: n[s - 6].type
                    }
                  }, {
                    first: 1,
                    last: 7,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 174:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.Switch("SWITCH {{ INDENT Cases OUTDENT }}", ...[!1, i[s - 2]]), {
                    rule: "SWITCH {{ INDENT Cases OUTDENT }}",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 175:
                  this._$ = n[s], this.$ = new r.Cases("Case", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 176:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Cases("Cases NEWLINE Case", ...[...i[s - 2].contents, i[s]]), {
                    rule: "Cases NEWLINE Case",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 177:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Case("Clauses THEN Expression", ...[i[s - 2], r.Block.wrap(i[s])]), {
                    rule: "Clauses THEN Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 178:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Case("Clauses THEN Block", ...[i[s - 2], i[s].unwrap]), {
                    rule: "Clauses THEN Block",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 179:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Case("Clauses Block", ...[i[s - 1], i[s].unwrap]), {
                    rule: "Clauses Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 180:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Case("Multicondition THEN Expression", ...[i[s - 2], r.Block.wrap(i[s])]), {
                    rule: "Multicondition THEN Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 181:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Case("Multicondition THEN Block", ...[i[s - 2], i[s].unwrap]), {
                    rule: "Multicondition THEN Block",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 182:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Case("Multicondition Block", ...[i[s - 1], i[s].unwrap]), {
                    rule: "Multicondition Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 183:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Case("DEFAULT Expression", ...[!1, r.Block.wrap(i[s])]), {
                    rule: "DEFAULT Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 184:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Case("DEFAULT Block", ...[!1, i[s].unwrap]), {
                    rule: "DEFAULT Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 185:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Case("Expression POSTCASE MulticheckClauses", ...[i[s], r.Block.wrap(i[s - 2])]), {
                    rule: "Expression POSTCASE MulticheckClauses",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 186:
                  this._$ = n[s], this.$ = new r.Case("BREAK", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 187:
                  this._$ = n[s], this.$ = Object.assign(new r.Clauses("When", ...[i[s].contents]), {
                    rule: "When",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 188:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Clauses("Clauses NEWLINE When", ...[...i[s - 2].contents, i[s].contents]), {
                    rule: "Clauses NEWLINE When",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 189:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Clauses("Clauses COMPOUND_OR When", ...[...i[s - 2].contents, i[s].contents]), {
                    rule: "Clauses COMPOUND_OR When",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 190:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.When("CASE Clause", ...[...i[s].contents]), {
                    rule: "CASE Clause",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 191:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.When("IF Clause", ...[...i[s].contents]), {
                    rule: "IF Clause",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 192:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.When("WHEN Clause", ...[...i[s].contents]), {
                    rule: "WHEN Clause",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 193:
                case 194:
                case 195:
                case 277:
                case 291:
                case 297:
                case 414:
                case 517:
                  this._$ = n[s], this.$ = i[s];
                  break;

                case 196:
                  this._$ = n[s], this.$ = new r.If("IfBlock", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 197:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.If("IfBlock Else", ...[i[s - 1], i[s]]), {
                    rule: "IfBlock Else",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 198:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.If("Expression ? BlockExpression : BlockExpression", ...[new r.IfBlock("IfBlock", i[s - 4], i[s - 2].unwrap), new r.Else("Else", i[s].unwrap)]), {
                    rule: "Expression ? BlockExpression : BlockExpression",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1,
                    quoteSyntax: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 199:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.If("Expression ? BlockExpression", ...[new r.IfBlock("IfBlock", i[s - 2], i[s].unwrap)]), {
                    rule: "Expression ? BlockExpression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1,
                    quoteSyntax: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 200:
                  this._$ = l.yyMergeLocationInfo(s - 6, s), this.$ = Object.assign(new r.If("Expression ? INDENT BlockExpression : BlockExpression OUTDENT", ...[new r.IfBlock("IfBlock", i[s - 6], i[s - 3].unwrap), new r.Else("Else", i[s - 1].unwrap)]), {
                    rule: "Expression ? INDENT BlockExpression : BlockExpression OUTDENT",
                    loc: {
                      first_line: n[s - 6].first_line,
                      first_column: n[s - 6].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 6].src,
                      type: n[s - 6].type
                    }
                  }, {
                    first: 1,
                    last: 7,
                    typeOf: 1,
                    checkGenerated: !1,
                    quoteSyntax: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 201:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.If("Expression POSTIF Expression", ...[i[s], i[s - 2]]), {
                    rule: "Expression POSTIF Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1,
                    postfix: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 202:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.If("Statement POSTIF Expression", ...[i[s], i[s - 2]]), {
                    rule: "Statement POSTIF Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1,
                    postfix: !0,
                    statement: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 203:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.If("Expression POSTUNLESS Expression", ...[i[s], i[s - 2]]), {
                    rule: "Expression POSTUNLESS Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1,
                    postfix: !0,
                    unless: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 204:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.If("Statement POSTUNLESS Expression", ...[i[s], i[s - 2]]), {
                    rule: "Statement POSTUNLESS Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1,
                    postfix: !0,
                    statement: !0,
                    unless: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 205:
                  this._$ = n[s], this.$ = new r.BlockExpression("Expression", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 206:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.BlockExpression("INDENT Expression OUTDENT", ...[i[s - 1]]), {
                    rule: "INDENT Expression OUTDENT",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 207:
                  this._$ = n[s], this.$ = Object.assign(new r.TryBlock("Try", ...[i[s], null, null]), {
                    rule: "Try",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 208:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.TryBlock("Try Catch", ...[i[s - 1], i[s], null]), {
                    rule: "Try Catch",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 209:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.TryBlock("Try Catch Finally", ...[i[s - 2], i[s - 1], i[s]]), {
                    rule: "Try Catch Finally",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 210:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Try("TRY Expression", ...[r.Block.wrap(i[s])]), {
                    rule: "TRY Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 211:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Try("TRY Block", ...[i[s]]), {
                    rule: "TRY Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 212:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Finally("FINALLY Block", ...[i[s]]), {
                    rule: "FINALLY Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 213:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Finally("FINALLY Expression", ...[r.Block.wrap(i[s])]), {
                    rule: "FINALLY Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 214:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Catch("CATCH Block", ...[null, i[s]]), {
                    rule: "CATCH Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 215:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Catch("CATCH Expression", ...[null, r.Block.wrap(i[s])]), {
                    rule: "CATCH Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 216:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Catch("CATCH Identifier Block", ...[i[s - 1], i[s]]), {
                    rule: "CATCH Identifier Block",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 217:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Catch("CATCH Identifier THEN Block", ...[i[s - 2], i[s]]), {
                    rule: "CATCH Identifier THEN Block",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 218:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Catch("CATCH Identifier THEN Expression", ...[i[s - 2], r.Block.wrap(i[s])]), {
                    rule: "CATCH Identifier THEN Expression",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 219:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.While("WhileUntil Expression THEN Block", ...[i[s - 2], i[s].unwrap, i[s - 3]]), {
                    rule: "WhileUntil Expression THEN Block",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 220:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.While("WhileUntil Expression THEN Expression", ...[i[s - 2], r.Block.wrap(i[s]), i[s - 3]]), {
                    rule: "WhileUntil Expression THEN Expression",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 221:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.While("WhileUntil ( Expression ) Expression", ...[i[s - 2], r.Block.wrap(i[s]), i[s - 4]]), {
                    rule: "WhileUntil ( Expression ) Expression",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 222:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.While("WhileUntil Expression Block", ...[i[s - 1], i[s].unwrap, i[s - 2]]), {
                    rule: "WhileUntil Expression Block",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 223:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.While("Loop WhileUntil Expression", ...[i[s], i[s - 2].unwrap, i[s - 1]]), {
                    rule: "Loop WhileUntil Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 224:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.While("Loop NEWLINE WhileUntil Expression", ...[i[s], i[s - 3].unwrap, i[s - 1]]), {
                    rule: "Loop NEWLINE WhileUntil Expression",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 225:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.While("Expression WhileUntil Expression", ...[i[s], r.Block.wrap(i[s - 2]), i[s - 1]]), {
                    rule: "Expression WhileUntil Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 226:
                  this._$ = n[s], this.$ = new r.WhileUntil("WHILE", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 227:
                  this._$ = n[s], this.$ = new r.WhileUntil("UNTIL", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 228:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Loop("LOOP Block", ...[i[s].unwrap]), {
                    rule: "LOOP Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 229:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Loop("LOOP Expression", ...[r.Block.wrap(i[s]).unwrap]), {
                    rule: "LOOP Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 230:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Else("ElseOtherwise Block", ...[i[s]]), {
                    rule: "ElseOtherwise Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 231:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Else("ElseOtherwise Expression", ...[i[s]]), {
                    rule: "ElseOtherwise Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 232:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Else("ElseOtherwise Statement", ...[i[s]]), {
                    rule: "ElseOtherwise Statement",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 233:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Else("ElseOtherwise THEN Block", ...[i[s]]), {
                    rule: "ElseOtherwise THEN Block",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 234:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.IfBlock("IfUnless Expression Block", ...[i[s - 1], i[s], i[s - 2]]), {
                    rule: "IfUnless Expression Block",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 235:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.IfBlock("IfUnless Expression THEN Block", ...[i[s - 2], i[s], i[s - 3]]), {
                    rule: "IfUnless Expression THEN Block",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 236:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.IfBlock("IfUnless Expression THEN Expression", ...[i[s - 2], i[s], i[s - 3]]), {
                    rule: "IfUnless Expression THEN Expression",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 237:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.IfBlock("IfUnless ( Expression ) Expression", ...[i[s - 2], i[s], i[s - 4]]), {
                    rule: "IfUnless ( Expression ) Expression",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 238:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.IfBlock("IfUnless Expression THEN Statement", ...[i[s - 2], i[s], i[s - 3]]), {
                    rule: "IfUnless Expression THEN Statement",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 239:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.IfBlock("IfUnless Expression { Expression }", ...[i[s - 3], i[s - 1], i[s - 4]]), {
                    rule: "IfUnless Expression { Expression }",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 240:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.IfBlock("IfUnless Expression THEN { Expression }", ...[i[s - 4], i[s - 1], i[s - 5]]), {
                    rule: "IfUnless Expression THEN { Expression }",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 241:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.IfBlock("IfUnless Expression THEN { Statement }", ...[i[s - 4], i[s - 1], i[s - 5]]), {
                    rule: "IfUnless Expression THEN { Statement }",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 242:
                  this._$ = n[s], this.$ = new r.IfUnless("IF", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 243:
                  this._$ = n[s], this.$ = new r.IfUnless("UNLESS", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 244:
                  this._$ = n[s], this.$ = new r.ElseOtherwise("ELSE", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 245:
                  this._$ = n[s], this.$ = new r.ElseOtherwise("OTHERWISE", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 246:
                  this._$ = n[s], this.$ = new r.ElseOtherwise("OR", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 247:
                  this._$ = n[s], this.$ = new r.Value("Assignable", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 248:
                  this._$ = n[s], this.$ = new r.Value("Parenthetical", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 249:
                  this._$ = n[s], this.$ = new r.Value("Literal", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 250:
                  this._$ = n[s], this.$ = new r.Value("Invocation", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 251:
                  this._$ = n[s], this.$ = new r.Value("Function", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 252:
                  this._$ = n[s], this.$ = new r.Value("New", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 253:
                  this._$ = n[s], this.$ = new r.Value("This", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 254:
                  this._$ = n[s], this.$ = new r.Value("Super", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 255:
                  this._$ = n[s], this.$ = new r.Value("SUCH", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 256:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.New("NEW Expression", ...[i[s]]), {
                    rule: "NEW Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 257:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Super("SUPER . PROPERTY", ...[Object.assign([i[s]], {
                    loc: n[s]
                  })]), {
                    rule: "SUPER . PROPERTY",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 258:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Super("SUPER INDEX_START PROPERTY INDEX_END", ...[i[s - 1]]), {
                    rule: "SUPER INDEX_START PROPERTY INDEX_END",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 259:
                  this._$ = n[s], this.$ = new r.This("THIS", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 260:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Parenthetical("( Expression )", ...[i[s - 1]]), {
                    rule: "( Expression )",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 261:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Parenthetical("( Body )", ...[i[s - 1]]), {
                    rule: "( Body )",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 262:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Parenthetical("( INDENT Body OUTDENT )", ...[i[s - 2]]), {
                    rule: "( INDENT Body OUTDENT )",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 263:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ParamObject("{ ParamPropList }", ...[i[s - 1]]), {
                    rule: "{ ParamPropList }",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 3,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 264:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.ParamObject("{ }", ...[[]]), {
                    rule: "{ }",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 0,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 265:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Object("{ }", ...[[]]), {
                    rule: "{ }",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 266:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Object("{ PropList OptComma }", ...[i[s - 2]]), {
                    rule: "{ PropList OptComma }",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 267:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Object("{ INDENT PropList OUTDENT }", ...[i[s - 2]]), {
                    rule: "{ INDENT PropList OUTDENT }",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1,
                    indented: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 268:
                case 273:
                case 407:
                case 411:
                  this._$ = n[s], this.$ = [i[s]];
                  break;

                case 269:
                case 274:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = i[s - 2].push(i[s]) && i[s - 2];
                  break;

                case 270:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = i[s - 3].push(n[s - 1].generated, i[s]) && i[s - 3];
                  break;

                case 271:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = i[s - 4].concat(!1, i[s - 1]);
                  break;

                case 272:
                  this._$ = l.yyMergeLocationInfo(null, null, null, null, !0), this.$ = [];
                  break;

                case 275:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = i[s - 3].push(i[s]) && i[s - 3];
                  break;

                case 276:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = i[s - 4].push(i[s - 1]) && i[s - 4];
                  break;

                case 278:
                case 281:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = [i[s - 2], i[s], [n[s - 2], n[s]]];
                  break;

                case 279:
                case 282:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = [i[s - 2], r.Array.from(i[s]), [n[s - 2], n[s], !0]];
                  break;

                case 280:
                case 283:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = [i[s - 4], i[s - 1], [n[s - 4], n[s], !0]];
                  break;

                case 284:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = [i[s - 3], i[s], [n[s - 4], n[s]]];
                  break;

                case 285:
                  this._$ = l.yyMergeLocationInfo(s - 6, s), this.$ = [i[s - 5], i[s - 1], [n[s - 6], n[s - 1], !0]];
                  break;

                case 286:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = [i[s - 3], r.Array.from(i[s]), [n[s - 4], n[s], !0]];
                  break;

                case 287:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = [i[s - 1], !1, [n[s - 1], n[s]]];
                  break;

                case 288:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = [i[s - 1], !1, [n[s - 2], n[s]], !0];
                  break;

                case 289:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = [i[s - 2], !1, [n[s - 2], n[s]], !0];
                  break;

                case 290:
                  this._$ = n[s], this.$ = [i[s][1], !1, [n[s], n[s]]];
                  break;

                case 292:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = i[s];
                  break;

                case 293:
                case 527:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = i[s - 1];
                  break;

                case 294:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = [i[s - 2], i[s]];
                  break;

                case 295:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = [i[s - 1]];
                  break;

                case 296:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = [i[s - 3],, i[s]];
                  break;

                case 298:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = [i[s - 2],, i[s]];
                  break;

                case 299:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = [i[s - 1],,, !0];
                  break;

                case 300:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = [i[s - 2],,, !0];
                  break;

                case 301:
                  this._$ = n[s], this.$ = new r.Literal("AlphaNum", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 302:
                  this._$ = n[s], this.$ = new r.Literal("Regex", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 303:
                  this._$ = n[s], this.$ = new r.Literal("UNDEFINED", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 304:
                  this._$ = n[s], this.$ = new r.Literal("INFINITY", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 305:
                  this._$ = n[s], this.$ = new r.Literal("BOOL", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 306:
                  this._$ = n[s], this.$ = new r.Literal("NULL", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 307:
                  this._$ = n[s], this.$ = new r.Literal("NAN", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 308:
                  this._$ = n[s], this.$ = new r.AlphaNum("String", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 309:
                  this._$ = n[s], this.$ = new r.AlphaNum("NUMBER", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 310:
                  this._$ = n[s], this.$ = new r.String("STRING", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 311:
                  this._$ = n[s], this.$ = new r.String("StringWithInterpolations", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 312:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.StringWithInterpolations("STRING_START Interpolations STRING_END", ...[i[s - 1], i[s - 2]]), {
                    rule: "STRING_START Interpolations STRING_END",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 313:
                  this._$ = n[s], this.$ = Object.assign(new r.Interpolations("Interpolation", ...[i[s]]), {
                    rule: "Interpolation",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 314:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Interpolations("Interpolations Interpolation", ...[...i[s - 1].contents, i[s]]), {
                    rule: "Interpolations Interpolation",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 315:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Interpolation("INTERPOLATION_START Expression INTERPOLATION_END", ...[i[s - 1]]), {
                    rule: "INTERPOLATION_START Expression INTERPOLATION_END",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 316:
                  this._$ = n[s], this.$ = new r.Interpolation("String", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 317:
                  this._$ = n[s], this.$ = new r.Regex("REGEX", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 318:
                  this._$ = n[s], this.$ = new r.Regex("RegexWithInterpolations", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 319:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.RegexWithInterpolations("REGEX_START RegexInterpolations REGEX_END", ...[i[s - 1], i[s]]), {
                    rule: "REGEX_START RegexInterpolations REGEX_END",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 320:
                  this._$ = n[s], this.$ = Object.assign(new r.RegexInterpolations("RegexInterpolation", ...[i[s]]), {
                    rule: "RegexInterpolation",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 321:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.RegexInterpolations("RegexInterpolations RegexInterpolation", ...[...i[s - 1].contents, i[s]]), {
                    rule: "RegexInterpolations RegexInterpolation",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 322:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.RegexInterpolation("INTERPOLATION_START Expression INTERPOLATION_END", ...[i[s - 1]]), {
                    rule: "INTERPOLATION_START Expression INTERPOLATION_END",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 323:
                  this._$ = n[s], this.$ = new r.RegexInterpolation("Regex", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 324:
                  this._$ = n[s], this.$ = Object.assign(new r.Function("FuncHeader", ...[i[s].contents, r.Block.wrap(), {
                    arguments: i[s][3]
                  }]), {
                    rule: "FuncHeader",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 325:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Function("FuncHeader FuncBody", ...[i[s - 1].contents, i[s].unwrap, {
                    arguments: i[s - 1][3],
                    returns: [n[s - 1].type, n[s].type].filter(Boolean)
                  }]), {
                    rule: "FuncHeader FuncBody",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 326:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Function("FuncSpecifiers FuncHeader FuncBody", ...[i[s - 1].contents, i[s].unwrap, _objectSpread(_objectSpread({}, i[s - 2].unwrap), {}, {
                    arguments: i[s - 1][3],
                    returns: [n[s - 1].type, n[s].type].filter(Boolean)
                  })]), {
                    rule: "FuncSpecifiers FuncHeader FuncBody",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 327:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Function("FUNCTION FuncHeader FuncBody", ...[i[s - 1].contents, i[s].unwrap, {
                    yields: "function*" === n[s - 2].origin,
                    arguments: i[s - 1][3],
                    returns: [n[s - 1].type, n[s].type].filter(Boolean)
                  }]), {
                    rule: "FUNCTION FuncHeader FuncBody",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 328:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Function("ASYNC FUNCTION FuncHeader FuncBody", ...[i[s - 1].contents, i[s].unwrap, {
                    async: !0,
                    yields: "function*" === n[s - 2].origin,
                    arguments: i[s - 1][3],
                    returns: [n[s - 1].type, n[s].type].filter(Boolean)
                  }]), {
                    rule: "ASYNC FUNCTION FuncHeader FuncBody",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 329:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Function("FUNCTION WITH FuncBody", ...[[], i[s].unwrap, {
                    yields: "function*" === n[s - 2].origin,
                    returns: [n[s].type].filter(Boolean)
                  }]), {
                    rule: "FUNCTION WITH FuncBody",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 330:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.Function("FUNCTION WITH <( TypeArguments )> FuncBody", ...[[], i[s].unwrap, {
                    yields: "function*" === n[s - 5].origin,
                    arguments: i[s - 2],
                    returns: [n[s].type].filter(Boolean)
                  }]), {
                    rule: "FUNCTION WITH <( TypeArguments )> FuncBody",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 331:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Function("ASYNC FUNCTION WITH FuncBody", ...[[], i[s].unwrap, {
                    async: !0,
                    yields: "function*" === n[s - 2].origin,
                    returns: [n[s].type].filter(Boolean)
                  }]), {
                    rule: "ASYNC FUNCTION WITH FuncBody",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 332:
                  this._$ = l.yyMergeLocationInfo(s - 6, s), this.$ = Object.assign(new r.Function("ASYNC FUNCTION WITH <( TypeArguments )> FuncBody", ...[[], i[s].unwrap, {
                    async: !0,
                    yields: "function*" === n[s - 5].origin,
                    arguments: i[s - 2],
                    returns: [n[s].type].filter(Boolean)
                  }]), {
                    rule: "ASYNC FUNCTION WITH <( TypeArguments )> FuncBody",
                    loc: {
                      first_line: n[s - 6].first_line,
                      first_column: n[s - 6].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 6].src,
                      type: n[s - 6].type
                    }
                  }, {
                    first: 1,
                    last: 7,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 333:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Function("WITH Block", ...[[], i[s].unwrap, {}]), {
                    rule: "WITH Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 334:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Function("WITH <( TypeArguments )> Block", ...[[], i[s].unwrap, {
                    arguments: i[s - 2]
                  }]), {
                    rule: "WITH <( TypeArguments )> Block",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 335:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.Function("WITH <( TypeArguments )> THEN Block", ...[[], i[s].unwrap, {
                    arguments: i[s - 3],
                    returns: [n[s - 1].type].filter(Boolean)
                  }]), {
                    rule: "WITH <( TypeArguments )> THEN Block",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 336:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Function("FUNC_DIRECTIVE Block", ...[[], i[s].unwrap]), {
                    rule: "FUNC_DIRECTIVE Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 337:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.FuncBody("THEN Block", ...[i[s].unwrap.setLoc(n[s - 1], n[s])]), {
                    rule: "THEN Block",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 338:
                  this._$ = n[s], this.$ = Object.assign(new r.FuncBody("Block", ...[i[s].unwrap.setLoc(n[s])]), {
                    rule: "Block",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 0,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 339:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.FuncBody("THEN Expression", ...[r.Block.wrap(i[s]).setLoc(n[s])]), {
                    rule: "THEN Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 340:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.FuncSpecifiers("STATIC GET", ...[{
                    static: !0,
                    get: !0
                  }]), {
                    rule: "STATIC GET",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 341:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.FuncSpecifiers("STATIC SET", ...[{
                    static: !0,
                    set: !0
                  }]), {
                    rule: "STATIC SET",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 342:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.FuncSpecifiers("STATIC ASYNC", ...[{
                    static: !0,
                    async: !0
                  }]), {
                    rule: "STATIC ASYNC",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 343:
                  this._$ = n[s], this.$ = Object.assign(new r.FuncSpecifiers("GET", ...[{
                    get: !0
                  }]), {
                    rule: "GET",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 344:
                  this._$ = n[s], this.$ = Object.assign(new r.FuncSpecifiers("SET", ...[{
                    set: !0
                  }]), {
                    rule: "SET",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 345:
                  this._$ = n[s], this.$ = Object.assign(new r.FuncSpecifiers("STATIC", ...[{
                    static: !0
                  }]), {
                    rule: "STATIC",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 346:
                  this._$ = n[s], this.$ = Object.assign(new r.FuncSpecifiers("ASYNC", ...[{
                    async: !0
                  }]), {
                    rule: "ASYNC",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 347:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.FuncHeader("Identifier TypeArguments? Params", ...[i[s - 2], i[s], i[s - 1].unwrap]), {
                    rule: "Identifier TypeArguments? Params",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 3,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 348:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.FuncHeader("Identifier WITH TypeArguments? Params", ...[i[s - 3], i[s], i[s - 1].unwrap]), {
                    rule: "Identifier WITH TypeArguments? Params",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 4,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 349:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.FuncHeader("Identifier TypeArguments? WITH Params", ...[i[s - 3], i[s], i[s - 2].unwrap]), {
                    rule: "Identifier TypeArguments? WITH Params",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 4,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 350:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.FuncHeader("WITH TypeArguments? Params", ...[null, i[s], i[s - 1].unwrap]), {
                    rule: "WITH TypeArguments? Params",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 3,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 351:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.FuncHeader("TypeArguments? WITH Params", ...[null, i[s], i[s - 2].unwrap]), {
                    rule: "TypeArguments? WITH Params",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s].type
                    }
                  }, {
                    first: 2,
                    last: 3,
                    typeOf: 3,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 352:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.FuncHeader("Identifier TypeArguments?", ...[i[s - 1], null, i[s].unwrap]), {
                    rule: "Identifier TypeArguments?",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s - 1].last_line,
                      last_column: n[s - 1].last_column,
                      src: n[s - 1].src
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 0,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 353:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.FuncHeader("Identifier TypeArguments? WITH", ...[i[s - 2], null, i[s - 1].unwrap]), {
                    rule: "Identifier TypeArguments? WITH",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 0,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 354:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.FuncHeader("Identifier WITH TypeArguments?", ...[i[s - 2], null, i[s].unwrap]), {
                    rule: "Identifier WITH TypeArguments?",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s - 1].last_line,
                      last_column: n[s - 1].last_column,
                      src: n[s - 2].src
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 0,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 355:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.FuncHeader("TypeArguments? Params", ...[null, i[s], i[s - 1].unwrap]), {
                    rule: "TypeArguments? Params",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 2,
                    last: 2,
                    typeOf: 2,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 356:
                  this._$ = l.yyMergeLocationInfo(null, null, null, null, !0), this.$ = Object.assign(new r["TypeArguments?"]("", ...[void 0]), {
                    rule: "",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 357:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r["TypeArguments?"]("<( TypeArguments )>", ...[i[s - 1]]), {
                    rule: "<( TypeArguments )>",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 358:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r["TypeArguments?"]("<( INDENT TypeArguments OUTDENT )>", ...[i[s - 2]]), {
                    rule: "<( INDENT TypeArguments OUTDENT )>",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 359:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Params("PARAM_START PARAM_END", ...[[]]), {
                    rule: "PARAM_START PARAM_END",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 2,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 360:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Params("PARAM_START ParamList PARAM_END", ...[i[s - 1].setLoc(n[s - 2], n[s])]), {
                    rule: "PARAM_START ParamList PARAM_END",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 3,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 361:
                  this._$ = n[s], this.$ = Object.assign(new r.ParamList("Param", ...[i[s]]), {
                    rule: "Param",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 362:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ParamList("ParamList , Param", ...[...i[s - 2].addParam(i[s]).setLoc(n[s - 2], n[s])]), {
                    rule: "ParamList , Param",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 363:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.ParamList("ParamList OptComma NEWLINE Param", ...[...i[s - 3].addParam(i[s])]), {
                    rule: "ParamList OptComma NEWLINE Param",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 364:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.ParamList("ParamList OptComma INDENT ParamList OptComma OUTDENT", ...[...i[s - 5].addParams(i[s - 2].contents)]), {
                    rule: "ParamList OptComma INDENT ParamList OptComma OUTDENT",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 365:
                  this._$ = n[s], this.$ = new r.Param("ParamAssignable", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 366:
                  this._$ = n[s], this.$ = Object.assign(new r.Assign("Assignment", ...[i[s]]), {
                    rule: "Assignment",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 367:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Assignment("Assignable AssignKeyword Expression", ...[i[s - 2], i[s], i[s - 1]]), {
                    rule: "Assignable AssignKeyword Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 368:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Assignment("Assignable AssignKeyword INDENT Expression OUTDENT", ...[i[s - 4], i[s - 1], i[s - 3]]), {
                    rule: "Assignable AssignKeyword INDENT Expression OUTDENT",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 369:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Assignment("Assignable AssignKeyword NEWLINE Expression", ...[i[s - 3], i[s], i[s - 2]]), {
                    rule: "Assignable AssignKeyword NEWLINE Expression",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 370:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Assignment("Assignable AssignKeyword Block", ...[i[s - 2], r.Array.from(i[s]), i[s - 1]]), {
                    rule: "Assignable AssignKeyword Block",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 371:
                  this._$ = n[s], this.$ = Object.assign(new r.AssignKeyword("AS", ...[n[s].origin]), {
                    rule: "AS",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 372:
                  this._$ = n[s], this.$ = new r.AssignKeyword("AT", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 373:
                  this._$ = n[s], this.$ = new r.AssignKeyword("FROM", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 374:
                  this._$ = n[s], this.$ = new r.Assignable("Identifier", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 375:
                  this._$ = n[s], this.$ = new r.Assignable("ARGUMENT", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 376:
                  this._$ = n[s], this.$ = new r.Assignable("Object", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 377:
                  this._$ = n[s], this.$ = new r.Assignable("Array", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 378:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Assignable("Value Access", ...[i[s - 1], i[s]]), {
                    rule: "Value Access",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 2,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 379:
                  this._$ = n[s], this.$ = new r.ParamAssignable("ParamIdentifier", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 380:
                  this._$ = n[s], this.$ = new r.ParamAssignable("ParamObject", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 381:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = new r.ParamAssignable("ParamObject", i[s - 2].defaults(i[s])).setLocation(n[s - 2], n[s]);
                  break;

                case 382:
                  this._$ = n[s], this.$ = new r.ParamAssignable("ParamArray", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 383:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = new r.ParamAssignable("ParamArray", i[s - 2].defaults(i[s])).setLocation(n[s - 2], n[s]);
                  break;

                case 384:
                  this._$ = n[s], this.$ = new r.Identifier("IDENTIFIER", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 385:
                  this._$ = n[s], this.$ = Object.assign(new r.ParamIdentifier("IDENTIFIER", ...[i[s]]), {
                    rule: "IDENTIFIER",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 386:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.ParamIdentifier("... IDENTIFIER", ...[i[s]]), {
                    rule: "... IDENTIFIER",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1,
                    expansion: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 387:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.ParamIdentifier("IDENTIFIER ...", ...[i[s - 1]]), {
                    rule: "IDENTIFIER ...",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1,
                    expansion: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 388:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ParamIdentifier("IDENTIFIER DEFAULTS Expression", ...[i[s - 2],, i[s]]), {
                    rule: "IDENTIFIER DEFAULTS Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 389:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ParamIdentifier("THIS . PROPERTY", ...[i[s], !0]), {
                    rule: "THIS . PROPERTY",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 390:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.ParamIdentifier("THIS . PROPERTY DEFAULTS Expression", ...[i[s - 2], !0, i[s]]), {
                    rule: "THIS . PROPERTY DEFAULTS Expression",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 391:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.ParamIdentifier("THIS . PROPERTY ...", ...[i[s - 1], !0]), {
                    rule: "THIS . PROPERTY ...",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1,
                    expansion: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 392:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.ParamIdentifier("... THIS . PROPERTY", ...[i[s], !0]), {
                    rule: "... THIS . PROPERTY",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1,
                    expansion: !0
                  }, {
                    generated: void 0
                  });
                  break;

                case 393:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Access(". PROPERTY", ...[Object.assign([i[s]], {
                    loc: n[s]
                  }), "?." === n[s - 1].origin]), {
                    rule: ". PROPERTY",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 2,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 394:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Access("INDEX_START Expression INDEX_END", ...[i[s - 1]]), {
                    rule: "INDEX_START Expression INDEX_END",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 3,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 395:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.ParamArray("[ ]", ...[]), {
                    rule: "[ ]",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 0,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 396:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.ParamArray("[ ParamArrayList OptVoids ]", ...[i[s - 2]]), {
                    rule: "[ ParamArrayList OptVoids ]",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 4,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 397:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Array("[ ]", ...[]), {
                    rule: "[ ]",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: 1
                  }, {
                    generated: n[s - 1].generated
                  });
                  break;

                case 398:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Array("[ ArrayList OptVoids ]", ...[...i[s - 2]]), {
                    rule: "[ ArrayList OptVoids ]",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: 1
                  }, {
                    generated: n[s - 3].generated
                  });
                  break;

                case 399:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.Array("[ INDENT ArrayList OptVoids OUTDENT ]", ...[...i[s - 3]]), {
                    rule: "[ INDENT ArrayList OptVoids OUTDENT ]",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: 1,
                    indented: !0
                  }, {
                    generated: n[s - 5].generated
                  });
                  break;

                case 400:
                case 403:
                  this._$ = n[s], this.$ = [...i[s]];
                  break;

                case 401:
                case 404:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = i[s - 2].concat(i[s]);
                  break;

                case 402:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = i[s - 3].concat(i[s]);
                  break;

                case 405:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = i[s - 5].concat(!1, i[s - 2]);
                  break;

                case 406:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = i[s - 3].concat(n[s - 1].generated, i[s]);
                  break;

                case 408:
                case 412:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = [...i[s - 1], i[s]];
                  break;

                case 409:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = [Object.assign(i[s], {
                    expansion: !0
                  })];
                  break;

                case 410:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = [Object.assign(i[s - 1], {
                    expansion: !0
                  })];
                  break;

                case 413:
                case 526:
                  this._$ = l.yyMergeLocationInfo(null, null, null, null, !0), this.$ = void 0;
                  break;

                case 415:
                  this._$ = n[s], this.$ = [null];
                  break;

                case 416:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = [null, ...i[s - 1]];
                  break;

                case 417:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = [null, ...i[s - 1]];
                  break;

                case 418:
                  this._$ = n[s], this.$ = new r.Statement("Return", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 419:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Statement("BREAK Identifier", ...[i[s]]), {
                    rule: "BREAK Identifier",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 420:
                  this._$ = n[s], this.$ = new r.Statement("BREAK", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 421:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Statement("CONTINUE Identifier", ...[i[s]]), {
                    rule: "CONTINUE Identifier",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 422:
                  this._$ = n[s], this.$ = new r.Statement("CONTINUE", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 423:
                  this._$ = n[s], this.$ = new r.Statement("Import", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 424:
                  this._$ = n[s], this.$ = new r.Statement("Export", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 425:
                  this._$ = n[s], this.$ = new r.Statement("Declare", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 426:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Statement("THROW Expression", ...[i[s]]), {
                    rule: "THROW Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 427:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Statement("THROW INDENT Expression OUTDENT", ...[i[s - 1]]), {
                    rule: "THROW INDENT Expression OUTDENT",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 428:
                  this._$ = n[s], this.$ = new r.Statement("Type", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 429:
                  this._$ = n[s], this.$ = new r.Statement("Interface", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 430:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Interface("INTERFACE Identifier TypeArguments? InterfaceBody", ...[i[s - 2], i[s - 1], i[s]]), {
                    rule: "INTERFACE Identifier TypeArguments? InterfaceBody",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 431:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.Interface("INTERFACE Identifier TypeArguments? INDENT InterfaceBody OUTDENT", ...[i[s - 4], i[s - 3], i[s - 1]]), {
                    rule: "INTERFACE Identifier TypeArguments? INDENT InterfaceBody OUTDENT",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 432:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.InterfaceBody("{ }", ...[[]]), {
                    rule: "{ }",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 433:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.InterfaceBody("{ InterfaceProperties }", ...[i[s - 1].contents]), {
                    rule: "{ InterfaceProperties }",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 434:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.InterfaceBody("{ INDENT InterfaceProperties OUTDENT }", ...[i[s - 2].contents]), {
                    rule: "{ INDENT InterfaceProperties OUTDENT }",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 435:
                  this._$ = n[s], this.$ = new r.InterfaceProperties("InterfaceProperty", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 436:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.InterfaceProperties("InterfaceProperties , InterfaceProperty", ...[...i[s - 2].unwrap, i[s]]), {
                    rule: "InterfaceProperties , InterfaceProperty",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 437:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.InterfaceProperties("InterfaceProperties OptComma NEWLINE InterfaceProperty", ...[...i[s - 3].unwrap, i[s]]), {
                    rule: "InterfaceProperties OptComma NEWLINE InterfaceProperty",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 438:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.InterfaceProperties("InterfaceProperties OptComma INDENT InterfaceProperty OUTDENT", ...[...i[s - 4].unwrap, i[s - 1]]), {
                    rule: "InterfaceProperties OptComma INDENT InterfaceProperty OUTDENT",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 439:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.InterfaceProperty("InterfaceKeyword? TypeArguments? Identifier? Params : TypeSentence", ...[i[s - 3].unwrap, i[s], i[s - 2], _objectSpread(_objectSpread({}, i[s - 5].unwrap), {}, {
                    arguments: i[s - 4].unwrap,
                    optional: "?:" === n[s - 4].origin
                  })]), {
                    rule: "InterfaceKeyword? TypeArguments? Identifier? Params : TypeSentence",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 440:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.InterfaceProperty("PROPERTY : TypeSentence", ...[new r.Identifier(null, i[s - 2]).setLoc(n[s - 2]), i[s], null, {
                    optional: "?:" === n[s - 1].origin
                  }]), {
                    rule: "PROPERTY : TypeSentence",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 441:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.InterfaceProperty("READONLY PROPERTY : TypeSentence", ...[new r.Identifier(null, i[s - 2]).setLoc(n[s - 2]), i[s], null, {
                    optional: "?:" === n[s - 1].origin,
                    readonly: !0
                  }]), {
                    rule: "READONLY PROPERTY : TypeSentence",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 442:
                  this._$ = l.yyMergeLocationInfo(null, null, null, null, !0), this.$ = Object.assign(new r["InterfaceKeyword?"]("", ...[void 0]), {
                    rule: "",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 443:
                  this._$ = n[s], this.$ = Object.assign(new r["InterfaceKeyword?"]("NEW", ...[{
                    new: !0
                  }]), {
                    rule: "NEW",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 444:
                  this._$ = n[s], this.$ = Object.assign(new r["InterfaceKeyword?"]("READONLY", ...[{
                    readonly: !0
                  }]), {
                    rule: "READONLY",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 445:
                  this._$ = l.yyMergeLocationInfo(null, null, null, null, !0), this.$ = Object.assign(new r["Identifier?"]("", ...[void 0]), {
                    rule: "",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 446:
                  this._$ = n[s], this.$ = new r["Identifier?"]("Identifier", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 447:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Type("TYPE TypeDeclaration", ...[i[s]]), {
                    rule: "TYPE TypeDeclaration",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 448:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Type("TYPE INDENT TypeDeclaration OUTDENT", ...[i[s - 1]]), {
                    rule: "TYPE INDENT TypeDeclaration OUTDENT",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 449:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Type("TYPE NEWLINE TypeDeclaration", ...[i[s]]), {
                    rule: "TYPE NEWLINE TypeDeclaration",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 450:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.TypeDeclaration("Identifier TypeArguments? AS TypeSentence", ...[i[s - 3], i[s], i[s - 2].unwrap]), {
                    rule: "Identifier TypeArguments? AS TypeSentence",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 451:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.TypeDeclaration("Identifier TypeArguments? AS INDENT TypeSentence OUTDENT", ...[i[s - 5], i[s - 1], i[s - 4].unwrap]), {
                    rule: "Identifier TypeArguments? AS INDENT TypeSentence OUTDENT",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 452:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.TypeDeclaration("Identifier TypeArguments? AS NEWLINE TypeSentence", ...[i[s - 4], i[s], i[s - 3].unwrap]), {
                    rule: "Identifier TypeArguments? AS NEWLINE TypeSentence",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 453:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.TypeSentence("TypeSentence & TypeValue", ...[...i[s - 2].contents, i[s - 1], i[s]]), {
                    rule: "TypeSentence & TypeValue",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 454:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.TypeSentence("TypeSentence | TypeValue", ...[...i[s - 2].contents, i[s - 1], i[s]]), {
                    rule: "TypeSentence | TypeValue",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 455:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.TypeSentence("TypeSentence & INDENT TypeValue OUTDENT", ...[...i[s - 4].contents, i[s - 3], i[s - 1]]), {
                    rule: "TypeSentence & INDENT TypeValue OUTDENT",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 456:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.TypeSentence("TypeSentence | INDENT TypeValue OUTDENT", ...[...i[s - 4].contents, i[s - 3], i[s - 1]]), {
                    rule: "TypeSentence | INDENT TypeValue OUTDENT",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 457:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.TypeSentence("TypeSentence & NEWLINE TypeValue", ...[...i[s - 3].contents, i[s - 2], i[s]]), {
                    rule: "TypeSentence & NEWLINE TypeValue",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 458:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.TypeSentence("TypeSentence | NEWLINE TypeValue", ...[...i[s - 3].contents, i[s - 2], i[s]]), {
                    rule: "TypeSentence | NEWLINE TypeValue",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 459:
                  this._$ = n[s], this.$ = Object.assign(new r.TypeSentence("TypeValue", ...[i[s]]), {
                    rule: "TypeValue",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 460:
                  this._$ = n[s], this.$ = new r.TypeValue("TypeArray", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 461:
                  this._$ = n[s], this.$ = new r.TypeValue("TypeObject", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 462:
                  this._$ = n[s], this.$ = new r.TypeValue("Literal", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 463:
                  this._$ = n[s], this.$ = new r.TypeValue("Identifier", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 464:
                  this._$ = n[s], this.$ = new r.TypeValue("TAG", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 465:
                  this._$ = n[s], this.$ = new r.TypeValue("TypeWithArguments", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 466:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.TypeWithArguments("( TypeSentence ) INDEX_START INDEX_END", ...[{
                    isArray: !0,
                    type: i[s - 3]
                  }]), {
                    rule: "( TypeSentence ) INDEX_START INDEX_END",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 467:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.TypeWithArguments("TypeValue INDEX_START INDEX_END", ...[{
                    isArray: !0,
                    type: i[s - 2]
                  }]), {
                    rule: "TypeValue INDEX_START INDEX_END",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 468:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.TypeWithArguments("Identifier <( TypeArguments )>", ...[{
                    type: i[s - 3],
                    arguments: i[s - 1]
                  }]), {
                    rule: "Identifier <( TypeArguments )>",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 469:
                  this._$ = l.yyMergeLocationInfo(s - 5, s), this.$ = Object.assign(new r.TypeWithArguments("Identifier <( INDENT TypeArguments OUTDENT )>", ...[{
                    type: i[s - 5],
                    arguments: i[s - 2]
                  }]), {
                    rule: "Identifier <( INDENT TypeArguments OUTDENT )>",
                    loc: {
                      first_line: n[s - 5].first_line,
                      first_column: n[s - 5].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 5].src,
                      type: n[s - 5].type
                    }
                  }, {
                    first: 1,
                    last: 6,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 470:
                  this._$ = n[s], this.$ = new r.TypeArguments("TypeArgument", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 471:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.TypeArguments("TypeArguments , TypeArgument", ...[...i[s - 2].contents, i[s]]), {
                    rule: "TypeArguments , TypeArgument",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 472:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.TypeArguments("TypeArguments OptComma NEWLINE TypeArgument", ...[...i[s - 3].contents, i[s]]), {
                    rule: "TypeArguments OptComma NEWLINE TypeArgument",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 473:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.TypeArguments("TypeArguments OptComma INDENT TypeArgument OUTDENT", ...[...i[s - 4].contents, i[s - 1]]), {
                    rule: "TypeArguments OptComma INDENT TypeArgument OUTDENT",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 474:
                  this._$ = n[s], this.$ = Object.assign(new r.TypeArgument("Identifier", ...[i[s]]), {
                    rule: "Identifier",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 475:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.TypeArgument("Identifier EXTENDS Identifier", ...[i[s - 2], i[s]]), {
                    rule: "Identifier EXTENDS Identifier",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 476:
                  this._$ = n[s], this.$ = new r.TypeArgument("TypeWithArguments", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 477:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.TypeObject("{ TypeObjProps }", ...[...i[s - 1].contents]), {
                    rule: "{ TypeObjProps }",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 478:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.TypeObject("{ INDENT TypeObjProps OUTDENT }", ...[...i[s - 2].contents]), {
                    rule: "{ INDENT TypeObjProps OUTDENT }",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 479:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.TypeObjProps("TypeObjProps OptComma NEWLINE TypeObjProp", ...[...i[s - 3].contents, i[s]]), {
                    rule: "TypeObjProps OptComma NEWLINE TypeObjProp",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 480:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.TypeObjProps("TypeObjProps , TypeObjProp", ...[...i[s - 2].contents, i[s]]), {
                    rule: "TypeObjProps , TypeObjProp",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 481:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.TypeObjProps("TypeObjProps OptComma INDENT TypeObjProp OUTDENT", ...[...i[s - 4].contents, i[s - 1]]), {
                    rule: "TypeObjProps OptComma INDENT TypeObjProp OUTDENT",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 482:
                  this._$ = n[s], this.$ = new r.TypeObjProps("TypeObjProp", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 483:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.TypeObjProp("PROPERTY : TypeSentence", ...[i[s - 2], i[s], "?:" === n[s - 1].origin]), {
                    rule: "PROPERTY : TypeSentence",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 484:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.TypeObjProp("PROPERTY : NEWLINE TypeSentence", ...[i[s - 3], i[s], "?:" === n[s - 2].origin]), {
                    rule: "PROPERTY : NEWLINE TypeSentence",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 485:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.TypeObjProp("PROPERTY : INDENT TypeSentence OUTDENT", ...[i[s - 4], i[s - 1], "?:" === n[s - 3].origin]), {
                    rule: "PROPERTY : INDENT TypeSentence OUTDENT",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 486:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.TypeObjProp("PROPERTY :", ...[i[s - 1],, "?:" === n[s].origin]), {
                    rule: "PROPERTY :",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 487:
                  this._$ = n[s], this.$ = Object.assign(new r.TypeObjProp("Identifier", ...[i[s]]), {
                    rule: "Identifier",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 488:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.TypeArray("[ TypeArrayItems ]", ...[...i[s - 1].contents]), {
                    rule: "[ TypeArrayItems ]",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 489:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.TypeArray("[ INDENT TypeArrayItems OUTDENT ]", ...[...i[s - 2].contents]), {
                    rule: "[ INDENT TypeArrayItems OUTDENT ]",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 490:
                  this._$ = n[s], this.$ = new r.TypeArrayItems("TypeSentence", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 491:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.TypeArrayItems("TypeArrayItems OptComma NEWLINE TypeSentence", ...[...i[s - 3].contents, i[s]]), {
                    rule: "TypeArrayItems OptComma NEWLINE TypeSentence",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 492:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.TypeArrayItems("TypeArrayItems OptComma INDENT TypeSentence OUTDENT", ...[...i[s - 4].contents, i[s - 1]]), {
                    rule: "TypeArrayItems OptComma INDENT TypeSentence OUTDENT",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 493:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.TypeArrayItems("TypeArrayItems , TypeSentence", ...[...i[s - 2].contents, i[s]]), {
                    rule: "TypeArrayItems , TypeSentence",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 494:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Declare("DeclarationKeyword Declarations", ...[{
                    keyword: i[s - 1],
                    statements: i[s]
                  }, [n[s - 1], n[s]]]), {
                    rule: "DeclarationKeyword Declarations",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 495:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Declare("DeclarationKeyword INDENT Declarations OUTDENT", ...[{
                    keyword: i[s - 3],
                    statements: i[s - 1],
                    indented: !0
                  }, [n[s - 3], n[s - 1]]]), {
                    rule: "DeclarationKeyword INDENT Declarations OUTDENT",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 496:
                  this._$ = n[s], this.$ = new r.DeclarationKeyword("VAR", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 497:
                  this._$ = n[s], this.$ = new r.DeclarationKeyword("LET", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 498:
                  this._$ = n[s], this.$ = new r.DeclarationKeyword("CONST", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 499:
                  this._$ = n[s], this.$ = Object.assign(new r.Declarations("Declaration", ...[i[s].unwrap]), {
                    rule: "Declaration",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 500:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Declarations("Declarations , Declaration", ...[...i[s - 2].contents, i[s].unwrap]), {
                    rule: "Declarations , Declaration",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 501:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Declarations("Declarations OptComma NEWLINE Declaration", ...[...i[s - 3].contents, n[s - 1].generated, i[s].unwrap]), {
                    rule: "Declarations OptComma NEWLINE Declaration",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 502:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Declarations("Declarations OptComma INDENT Declarations OUTDENT", ...[...i[s - 4].contents, !1, ...i[s - 1].contents]), {
                    rule: "Declarations OptComma INDENT Declarations OUTDENT",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 503:
                  this._$ = n[s], this.$ = new r.Declaration("Assignment", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 504:
                  this._$ = n[s], this.$ = new r.Declaration("Identifier", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 505:
                  this._$ = n[s], this.$ = Object.assign(new r.Return("RETURN", ...[]), {
                    rule: "RETURN",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 506:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Return("RETURN Expression", ...[i[s]]), {
                    rule: "RETURN Expression",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 507:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Return("RETURN INDENT Expression OUTDENT", ...[i[s - 1]]), {
                    rule: "RETURN INDENT Expression OUTDENT",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 508:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Return("RETURN INDENT Body OUTDENT", ...[i[s - 1]]), {
                    rule: "RETURN INDENT Body OUTDENT",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 509:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Import("IMPORT OptDefault ImportList Import(FROM) STRING", ...[i[s - 2].contents, i[s], !1, i[s - 3]]), {
                    rule: "IMPORT OptDefault ImportList Import(FROM) STRING",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 510:
                  this._$ = l.yyMergeLocationInfo(s - 6, s), this.$ = Object.assign(new r.Import("IMPORT INDENT OptDefault ImportList Import(FROM) STRING OUTDENT", ...[i[s - 3].contents, i[s - 1], !1, i[s - 4]]), {
                    rule: "IMPORT INDENT OptDefault ImportList Import(FROM) STRING OUTDENT",
                    loc: {
                      first_line: n[s - 6].first_line,
                      first_column: n[s - 6].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 6].src,
                      type: n[s - 6].type
                    }
                  }, {
                    first: 1,
                    last: 7,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 511:
                  this._$ = l.yyMergeLocationInfo(s - 6, s), this.$ = Object.assign(new r.Import("IMPORT OptDefault INDENT ImportList Import(FROM) STRING OUTDENT", ...[i[s - 3].contents, i[s - 1], !1, i[s - 5]]), {
                    rule: "IMPORT OptDefault INDENT ImportList Import(FROM) STRING OUTDENT",
                    loc: {
                      first_line: n[s - 6].first_line,
                      first_column: n[s - 6].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 6].src,
                      type: n[s - 6].type
                    }
                  }, {
                    first: 1,
                    last: 7,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 512:
                  this._$ = l.yyMergeLocationInfo(s - 6, s), this.$ = Object.assign(new r.Import("IMPORT OptDefault INDENT ImportList OUTDENT Import(FROM) STRING", ...[i[s - 3].contents, i[s], !1, i[s - 5]]), {
                    rule: "IMPORT OptDefault INDENT ImportList OUTDENT Import(FROM) STRING",
                    loc: {
                      first_line: n[s - 6].first_line,
                      first_column: n[s - 6].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 6].src,
                      type: n[s - 6].type
                    }
                  }, {
                    first: 1,
                    last: 7,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 513:
                  this._$ = l.yyMergeLocationInfo(s - 8, s), this.$ = Object.assign(new r.Import("IMPORT INDENT OptDefault INDENT ImportList OUTDENT Import(FROM) STRING OUTDENT", ...[i[s - 4].contents, i[s - 1], !1, i[s - 6]]), {
                    rule: "IMPORT INDENT OptDefault INDENT ImportList OUTDENT Import(FROM) STRING OUTDENT",
                    loc: {
                      first_line: n[s - 8].first_line,
                      first_column: n[s - 8].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 8].src,
                      type: n[s - 8].type
                    }
                  }, {
                    first: 1,
                    last: 9,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 514:
                  this._$ = l.yyMergeLocationInfo(s - 6, s), this.$ = Object.assign(new r.Import("IMPORT OptDefault * AS Identifier Import(FROM) STRING", ...[i[s - 2], i[s], !0, i[s - 5]]), {
                    rule: "IMPORT OptDefault * AS Identifier Import(FROM) STRING",
                    loc: {
                      first_line: n[s - 6].first_line,
                      first_column: n[s - 6].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 6].src,
                      type: n[s - 6].type
                    }
                  }, {
                    first: 1,
                    last: 7,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 515:
                  this._$ = l.yyMergeLocationInfo(s - 8, s), this.$ = Object.assign(new r.Import("IMPORT INDENT OptDefault * AS Identifier Import(FROM) STRING OUTDENT", ...[i[s - 3], i[s - 1], !0, i[s - 6]]), {
                    rule: "IMPORT INDENT OptDefault * AS Identifier Import(FROM) STRING OUTDENT",
                    loc: {
                      first_line: n[s - 8].first_line,
                      first_column: n[s - 8].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 8].src,
                      type: n[s - 8].type
                    }
                  }, {
                    first: 1,
                    last: 9,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 516:
                  this._$ = l.yyMergeLocationInfo(s - 8, s), this.$ = Object.assign(new r.Import("IMPORT OptDefault INDENT * AS Identifier Import(FROM) STRING OUTDENT", ...[i[s - 3], i[s - 1], !0, i[s - 7]]), {
                    rule: "IMPORT OptDefault INDENT * AS Identifier Import(FROM) STRING OUTDENT",
                    loc: {
                      first_line: n[s - 8].first_line,
                      first_column: n[s - 8].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 8].src,
                      type: n[s - 8].type
                    }
                  }, {
                    first: 1,
                    last: 9,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 518:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Export("EXPORT ExportList", ...[{
                    list: i[s]
                  }]), {
                    rule: "EXPORT ExportList",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 519:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Export("EXPORT INDENT ExportList OUTDENT", ...[{
                    list: i[s - 1]
                  }]), {
                    rule: "EXPORT INDENT ExportList OUTDENT",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 520:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.Export("EXPORT DEFAULT Expression", ...[{
                    defaults: i[s]
                  }]), {
                    rule: "EXPORT DEFAULT Expression",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 521:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.Export("EXPORT INDENT DEFAULT Expression OUDENT", ...[{
                    defaults: i[s - 1]
                  }]), {
                    rule: "EXPORT INDENT DEFAULT Expression OUDENT",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 522:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Export("EXPORT Declare", ...[{
                    declarations: i[s]
                  }]), {
                    rule: "EXPORT Declare",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 523:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Export("EXPORT INDENT Declare OUTDENT", ...[{
                    declarations: i[s - 1]
                  }]), {
                    rule: "EXPORT INDENT Declare OUTDENT",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 524:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.Export("EXPORT Exportable", ...[{
                    exportable: i[s].unwrap
                  }]), {
                    rule: "EXPORT Exportable",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 525:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.Export("EXPORT INDENT Exportable OUTDENT", ...[{
                    exportable: i[s - 1].unwrap
                  }]), {
                    rule: "EXPORT INDENT Exportable OUTDENT",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 528:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = i[s - 2];
                  break;

                case 529:
                  this._$ = n[s], this.$ = new r.ImportList("Identifier", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 530:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ImportList("{ ImportNames }", ...[i[s - 1]]), {
                    rule: "{ ImportNames }",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 531:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.ImportList("{{ INDENT ImportNames OUTDENT }}", ...[i[s - 2]]), {
                    rule: "{{ INDENT ImportNames OUTDENT }}",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 532:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ExportList("{ ExportNames }", ...[i[s - 1]]), {
                    rule: "{ ExportNames }",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 533:
                  this._$ = l.yyMergeLocationInfo(s - 4, s), this.$ = Object.assign(new r.ExportList("{{ INDENT ExportNames OUTDENT }}", ...[i[s - 2]]), {
                    rule: "{{ INDENT ExportNames OUTDENT }}",
                    loc: {
                      first_line: n[s - 4].first_line,
                      first_column: n[s - 4].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 4].src,
                      type: n[s - 4].type
                    }
                  }, {
                    first: 1,
                    last: 5,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 534:
                  this._$ = n[s], this.$ = Object.assign(new r.ExportNames("ExportName", ...[i[s].contents]), {
                    rule: "ExportName",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 535:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ExportNames("ExportNames , ExportName", ...[...i[s - 2].contents, i[s].contents]), {
                    rule: "ExportNames , ExportName",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 536:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.ExportNames("ExportNames OptComma NEWLINE ExportName", ...[...i[s - 3].contents, i[s].contents]), {
                    rule: "ExportNames OptComma NEWLINE ExportName",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 537:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.ExportName("PROPERTY :", ...[new r.Identifier(0, i[s - 1]).setLoc(n[s - 1])]), {
                    rule: "PROPERTY :",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 538:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ExportName("PROPERTY : Identifier", ...[new r.Identifier(0, i[s - 2]).setLoc(n[s - 2]), i[s]]), {
                    rule: "PROPERTY : Identifier",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 539:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.ExportName("PROPERTY : AS Identifier", ...[new r.Identifier(0, i[s - 3]).setLoc(n[s - 3]), i[s]]), {
                    rule: "PROPERTY : AS Identifier",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 540:
                  this._$ = n[s], this.$ = new r.ExportName("Identifier", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 541:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ExportName("Identifier AS DEFAULT", ...[i[s - 2],, !0]), {
                    rule: "Identifier AS DEFAULT",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 542:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ExportName("Identifier AS Identifier", ...[i[s - 2], i[s]]), {
                    rule: "Identifier AS Identifier",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 543:
                  this._$ = n[s], this.$ = new r.Exportable("Class", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 544:
                  this._$ = n[s], this.$ = new r.Exportable("Function", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
                  break;

                case 545:
                  this._$ = n[s], this.$ = Object.assign(new r.ImportNames("ImportName", ...[i[s].contents]), {
                    rule: "ImportName",
                    loc: {
                      first_line: n[s].first_line,
                      first_column: n[s].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s].src,
                      type: n[s].type
                    }
                  }, {
                    first: 1,
                    last: 1,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 546:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ImportNames("ImportNames , ImportName", ...[...i[s - 2].contents, i[s].contents]), {
                    rule: "ImportNames , ImportName",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 547:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.ImportNames("ImportNames OptComma NEWLINE ImportName", ...[...i[s - 3].contents, i[s].contents]), {
                    rule: "ImportNames OptComma NEWLINE ImportName",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 548:
                  this._$ = l.yyMergeLocationInfo(s - 1, s), this.$ = Object.assign(new r.ImportName("PROPERTY :", ...[new r.Identifier(0, i[s - 1]).setLoc(n[s - 1]),, [n[s - 1], n[s]]]), {
                    rule: "PROPERTY :",
                    loc: {
                      first_line: n[s - 1].first_line,
                      first_column: n[s - 1].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 1].src,
                      type: n[s - 1].type
                    }
                  }, {
                    first: 1,
                    last: 2,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 549:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ImportName("PROPERTY : Identifier", ...[new r.Identifier(0, i[s - 2]).setLoc(n[s - 2]), i[s]]), {
                    rule: "PROPERTY : Identifier",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 550:
                  this._$ = l.yyMergeLocationInfo(s - 3, s), this.$ = Object.assign(new r.ImportName("PROPERTY : AS Identifier", ...[new r.Identifier(0, i[s - 3]).setLoc(n[s - 3]), i[s]]), {
                    rule: "PROPERTY : AS Identifier",
                    loc: {
                      first_line: n[s - 3].first_line,
                      first_column: n[s - 3].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 3].src,
                      type: n[s - 3].type
                    }
                  }, {
                    first: 1,
                    last: 4,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 551:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ImportName("Identifier AS Identifier", ...[i[s - 2], i[s]]), {
                    rule: "Identifier AS Identifier",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 552:
                  this._$ = l.yyMergeLocationInfo(s - 2, s), this.$ = Object.assign(new r.ImportName("DEFAULT AS Identifier", ...[new r.Identifier(null, "default").setLoc(n[s - 2]), i[s]]), {
                    rule: "DEFAULT AS Identifier",
                    loc: {
                      first_line: n[s - 2].first_line,
                      first_column: n[s - 2].first_column,
                      last_line: n[s].last_line,
                      last_column: n[s].last_column,
                      src: n[s - 2].src,
                      type: n[s - 2].type
                    }
                  }, {
                    first: 1,
                    last: 3,
                    typeOf: 1,
                    checkGenerated: !1
                  }, {
                    generated: void 0
                  });
                  break;

                case 553:
                  this._$ = n[s], this.$ = new r.ImportName("Identifier", ...[i[s]]).setLocation({
                    first_line: n[s].first_line,
                    first_column: n[s].first_column,
                    last_line: n[s].last_line,
                    last_column: n[s].last_column,
                    src: n[s].src,
                    type: n[s].type
                  });
              }
            },
            table: function (e) {
              for (var t = [], s = e.len, i = e.symbol, n = e.type, r = e.state, l = e.mode, a = e.goto, o = 0, c = s.length; o < c; o++) {
                for (var p = s[o], _ = {}, u = 0; u < p; u++) {
                  var f = i.shift();

                  switch (n.shift()) {
                    case 2:
                      _[f] = [l.shift(), a.shift()];
                      break;

                    case 0:
                      _[f] = r.shift();
                      break;

                    default:
                      _[f] = [3];
                  }
                }

                t.push(_);
              }

              return t;
            }({
              len: i([115, 1, 2, 0, 55, 7, 0, 83, t, [0, 10], 81, 81, t, [0, 3], 112, 0, 0, 114, 5, 12, 9, s, [23, 9], 111, 49, t, [111, 3], 112, 112, 0, 81, 111, 4, 114, 113, 80, 0, 8, 87, 181, 7, 28, 53, 5, 2, t, [0, 3], 114, t, [0, 7], 5, 81, t, [7, 3], 111, t, [0, 9], 126, s, [11, 3], 114, s, [28, 5], 56, 118, t, [0, 4], 3, 7, t, [0, 6], 7, 29, 7, 117, 0, s, [28, 3], t, [111, 4], 0, 114, 113, t, [111, 3], 54, t, [0, 13], 64, 0, 64, t, [0, 16], 126, s, [42, 3], 0, 6, 0, 1, 111, 116, 0, 0, 86, 111, 2, 86, 0, 2, 114, 119, 12, 0, 113, 5, 1, t, [0, 3], 8, 8, 9, 2, 1, 11, 14, 0, 7, 111, 5, 115, t, [0, 3], 86, 83, 80, 0, 86, 1, 5, 4, t, [86, 4], 111, 86, 111, 0, s, [20, 4], 55, 114, 111, 3, 2, 2, 66, 53, 3, 4, 58, 53, 52, 118, 1, 80, 114, 81, 0, 4, 49, 114, 82, 82, 86, 113, 7, 7, 3, 0, 27, s, [92, 3], s, [74, 4], 83, 80, 52, s, [63, 3], 10, 0, t, [3, 3], 4, 52, 2, 113, 0, 2, 1, 1, s, [219, 3], 6, 3, 6, 9, 0, 29, 2, 86, 79, 79, s, [77, 3], s, [74, 3], 0, 51, 86, s, [47, 3], 54, 0, 55, 1, 53, 118, 50, 22, 0, 11, 0, 7, 116, 0, 111, 56, 111, 70, 2, 0, 12, s, [220, 4], s, [217, 3], 5, 28, 0, 8, 6, 27, s, [155, 4], 0, 29, 6, s, [17, 4], 0, t, [86, 6], 0, 79, 113, t, [86, 4], 2, 17, 49, 8, 0, 0, 79, s, [16, 3], 0, 0, 51, 0, 5, 114, 0, 56, 111, 51, s, [104, 3], 2, 2, 65, 47, 56, 5, 115, 1, 13, 2, 114, s, [237, 3], 111, 0, 1, 1, 5, 0, 0, 1, 6, 3, s, [247, 3], 0, 9, 6, 9, 86, 114, s, [72, 3], 51, 51, 0, 86, 79, 4, 114, 0, 52, 86, t, [111, 5], 49, 25, 12, 111, 118, s, [445, 3], 7, 49, 114, 51, 6, 0, t, [125, 3], 118, s, [72, 3], 86, 88, s, [220, 3], 0, 84, 86, 79, s, [455, 4], 52, 2, 2, 6, 1, 0, 6, 1, 7, 6, 1, 1, 111, 1, 1, 86, 4, 0, 1, 5, 5, 53, 2, s, [238, 3], 1, 3, 0, 0, s, [444, 3], 1, 0, s, [135, 4], 29, 5, 0, 125, 13, 86, s, [396, 3], 52, 3, 56, 5, 119, 114, 55, 1, 15, 0, 1, 119, s, [88, 3], 55, 0, 55, s, [37, 4], s, [137, 3], 51, s, [259, 3], 5, 2, 29, 3, 79, 80, s, [66, 3], 28, 7, 5, 5, s, [58, 3], s, [22, 3], 113, 1, 52, s, [136, 4], 17, 8, 0, 3, 117, 5, s, [45, 3], s, [141, 3], s, [369, 3], 114, 86, 114, 0, 10, 11, 0, 86, 57, 57, 58, 1, 9, 0, 8, 2, 15, s, [123, 3], 14, s, [48, 4], 29, 52, s, [110, 4], 0, 86, 155, 86, 51, 51, 55, 55, 10, 49, 53, 2, 118, 0, 117, 114, 0, 4, s, [211, 4], 0, 126, t, [7, 3], 2, s, [143, 3], 114, 0, 84, 0, 4, t, [0, 4], 1, 0, 3, 1, 2, s, [178, 4], 1, 6, s, [178, 4], s, [132, 3], s, [424, 4], 7, 3, 4, 0, 51, s, [425, 3], 29, 0, 2, 11, 1, 0, 5, 6, 79, 111, s, [276, 3], 119, 52, 155, 0, 53, 54, s, [127, 3], 55, s, [63, 3], s, [4, 3], s, [109, 4], 113, 116, 115, s, [388, 5], 27, s, [395, 3], 5, 28, 1, 28, 28, s, [241, 3], s, [233, 3], 2, 6, 5, 32, s, [29, 3], s, [455, 3], 86, 10, 49, 0, 113, 114, 0, 3, s, [105, 3], 114, 86, s, [121, 3], 86, s, [233, 3], s, [615, 4], 6, 0, 111, s, [250, 3], 0, 0, 10, 12, 5, s, [621, 3], s, [675, 3], 0, s, [380, 4], 0, 10, s, [267, 3], s, [120, 3], 125, s, [5, 3], 3, s, [311, 4], s, [164, 3], 1, t, [2, 3], s, [350, 4], 2, 2, 4, 1, s, [251, 4], 4, s, [339, 6], 5, 79, s, [116, 5], 9, 0, 4, 1, s, [37, 3], 7, 0, 4, 86, 52, 4, s, [94, 5], 52, 52, 114, 7, s, [32, 3], s, [151, 3], 5, 1, 79, 26, 26, s, [3, 3], 27, 27, 7, 1, 4, s, [228, 3], 7, s, [50, 3], 111, 10, s, [647, 5], 86, 3, 58, 0, 1, 55, s, [381, 3], 55, s, [148, 4], 55, 111, s, [19, 3], s, [93, 3], s, [80, 3], s, [93, 5], s, [115, 3], s, [844, 5], s, [479, 3], 10, 2, 5, 4, s, [615, 6], s, [739, 5], s, [87, 4], 1, 0, 2, 79, 2, 79, s, [724, 3], s, [10, 3], s, [6, 3], 86, 111, s, [10, 3], s, [929, 5], s, [904, 3], s, [211, 4], s, [46, 6], s, [728, 3], s, [822, 3], s, [569, 4], 27, s, [209, 3], t, [0, 5], s, [408, 3], s, [109, 3], s, [381, 4], t, [1, 3], s, [163, 4], 7, s, [537, 5], s, [318, 3], 7]),
              symbol: i([1, t, [3, 5, 1], 16, 21, 24, 28, 29, 30, t, [33, 5, 1], 40, 46, t, [51, 4, 1], 74, 79, 83, 89, 92, 95, 101, t, [104, 4, 1], 110, 111, 115, t, [117, 8, 1], 128, 129, 131, 132, 133, 135, 136, 137, t, [141, 5, 1], 147, t, [149, 6, 1], t, [156, 7, 1], 164, 168, 173, 178, 182, 184, 190, 192, 193, 196, 197, 198, 200, 201, t, [203, 5, 1], 209, t, [214, 4, 1], 220, 221, 224, 226, 227, 228, 232, 233, 235, 237, 241, 248, 249, 255, 267, 268, 271, 272, 274, 1, 1, 26, 1, 4, 5, t, [8, 7, 1], 17, 19, 22, 26, 39, t, [41, 5, 1], 47, 48, 51, 52, t, [55, 19, 1], 88, 99, 100, 104, 105, 163, 165, t, [169, 4, 1], 197, 1, 17, s, [45, 3], 99, 100, s, [62, 10], t, [15, 6, 1], 22, 23, 25, 26, 31, 32, 38, s, [71, 8], t, [49, 4, 1], s, [73, 19], t, [75, 4, 1], 81, 84, 85, 88, 91, 93, 99, 100, t, [102, 4, 1], 108, 109, 113, 114, 116, 123, 124, 127, 155, 174, 216, 217, 239, s, [83, 78], 142, 155, 237, s, [81, 81], s, [424, 16], 38, s, [425, 48], s, [422, 47], s, [112, 25], 81, s, [113, 48], 179, s, [114, 39], 16, 30, 38, 81, 179, 16, 24, 31, 78, 115, 142, 208, 230, 231, 236, 238, 240, s, [123, 4], s, [87, 3], 142, 161, s, [333, 78], 138, 139, 140, 155, 234, s, [759, 64], s, [334, 48], s, [107, 4], 30, 33, 74, s, [86, 21], 173, s, [59, 16], s, [57, 3], s, [160, 112], s, [111, 237], s, [828, 121], s, [112, 87], s, [1297, 79], 199, 202, s, [416, 111], 26, 104, 105, 197, s, [115, 72], t, [180, 5, 1], s, [1250, 111], s, [423, 118], 195, 16, 32, 38, 80, 81, 142, 179, s, [1644, 21], 27, 30, s, [90, 58], 132, 133, s, [1315, 4], 228, s, [2075, 6], t, [8, 19, 1], t, [28, 52, 1], 81, 83, s, [105, 3], 89, 91, 92, 93, 95, t, [99, 13, 1], t, [113, 12, 1], 127, s, [355, 20], 155, s, [356, 47], 8, 16, 38, 81, 142, 237, 275, 16, s, [1389, 3], 38, 79, 81, 90, s, [81, 6], 142, s, [76, 3], 178, s, [43, 4], 237, 267, 268, 277, 280, s, [1420, 7], 38, s, [1421, 39], s, [94, 4], 269, 270, 26, 38, 142, 237, 256, 142, s, [1926, 66], s, [2350, 49], 23, 75, 76, 113, 174, s, [570, 79], 179, 225, 30, s, [1879, 3], s, [271, 3], s, [7, 7], s, [1914, 4], 133, 179, 228, s, [1430, 116], 11, 12, s, [113, 13], s, [2565, 4], 53, 54, s, [198, 8], s, [123, 47], 166, 167, 168, 171, s, [1667, 177], s, [2383, 89], s, [114, 115], 16, 17, s, [858, 7], 78, 110, 111, 112, s, [860, 26], 210, 212, s, [862, 14], s, [170, 5], 15, s, [171, 3], 25, s, [172, 16], 78, s, [399, 80], 243, 245, 247, s, [174, 8], 30, 132, 229, 30, 33, 132, 133, s, [1054, 3], 126, 128, 129, t, [220, 4, 1], s, [129, 3], 38, s, [99, 10], 142, 148, s, [59, 6], 237, t, [258, 5, 1], 265, 123, 124, 126, t, [216, 4, 1], s, [3375, 7], 17, 21, t, [22, 4, 2], s, [173, 7], 39, s, [571, 48], s, [1027, 48], s, [2572, 349], s, [2794, 231], s, [1127, 114], s, [226, 51], 191, s, [560, 370], s, [3736, 28], s, [82, 3], 173, 183, s, [3740, 19], 268, s, [165, 64], s, [64, 69], s, [2106, 248], s, [111, 95], 76, 123, 124, s, [4881, 3], 112, s, [1208, 135], s, [3130, 3], s, [114, 47], 175, 176, s, [3471, 119], s, [5284, 7], s, [313, 111], s, [5390, 81], s, [199, 7], 38, 82, s, [201, 16], s, [2279, 49], s, [3307, 49], s, [2396, 8], s, [518, 17], s, [517, 13], s, [2649, 20], s, [117, 36], s, [2678, 12], s, [5240, 14], s, [5235, 11], s, [446, 64], s, [244, 49], 15, 26, 31, 38, 177, 28, 15, 17, s, [436, 3], 38, 39, 116, s, [8, 15], 78, 116, 115, 142, 23, 15, 17, 26, 38, 78, 112, 115, 142, 211, 213, 238, 15, 16, 24, 25, s, [171, 4], t, [236, 5, 2], 247, s, [3517, 7], s, [625, 111], s, [103, 4], 161, s, [116, 8], s, [2820, 9], s, [2152, 98], s, [743, 86], s, [6219, 161], 155, s, [4092, 21], s, [4573, 45], t, [96, 5, 1], s, [4576, 14], 155, 228, 74, 30, s, [5978, 4], s, [4397, 3], 179, s, [345, 165], s, [86, 179], s, [920, 111], s, [197, 197], s, [111, 11], s, [5217, 7], s, [1112, 97], s, [311, 9], 16, 19, 32, 38, s, [7305, 28], 81, s, [7306, 11], 179, s, [281, 17], s, [5129, 98], s, [395, 111], s, [6035, 3], 18, 84, 86, 87, s, [598, 11], 18, 19, 23, 27, 30, s, [292, 30], 75, 76, 81, s, [52, 3], s, [297, 5], 113, 123, 124, s, [5704, 5], 228, s, [5487, 53], 15, 18, 84, 18, 84, 99, 100, s, [126, 10], s, [125, 3], s, [121, 30], s, [120, 11], s, [118, 3], 234, s, [58, 12], s, [57, 28], 84, s, [7776, 12], s, [53, 9], 19, s, [522, 41], s, [802, 26], 84, 89, 90, 92, 94, s, [410, 47], t, [185, 4, 1], s, [414, 37], 38, s, [1007, 79], 194, s, [4153, 114], s, [194, 58], 80, s, [5845, 22], s, [1741, 4], s, [7528, 65], s, [248, 118], s, [6573, 60], 155, 229, s, [82, 79], s, [2078, 3], s, [1613, 150], s, [1331, 49], s, [6669, 6], 276, s, [6676, 7], 15, 26, 177, s, [6679, 4], s, [6678, 24], s, [1375, 110], 112, 142, 237, 278, 279, s, [966, 21], s, [7097, 61], s, [443, 81], 177, s, [850, 46], s, [1470, 6], s, [215, 81], s, [7312, 5], s, [6922, 4], s, [4253, 5], 239, s, [7051, 5], 256, 133, 138, 228, 16, 38, 133, 228, s, [1461, 10], 22, 26, s, [9289, 40], 22, 26, s, [652, 113], 76, 174, 112, s, [4437, 17], s, [9044, 99], 32, s, [1301, 3], 225, 30, 133, 228, s, [9, 6], 16, s, [1984, 3], s, [7146, 3], 225, 228, s, [6380, 29], 30, s, [1106, 21], s, [2920, 145], s, [79, 158], s, [2881, 118], s, [2766, 169], s, [950, 10], s, [949, 41], s, [417, 86], s, [4447, 4], s, [1253, 9], s, [7352, 46], s, [144, 10], 17, 19, 23, 26, s, [137, 9], s, [135, 23], 78, s, [2719, 8], 20, s, [10493, 11], 20, 23, s, [255, 29], s, [54, 11], s, [7461, 118], s, [1534, 10], s, [280, 27], s, [2385, 13], s, [412, 3], 23, 26, s, [1127, 3], 39, s, [188, 3], 81, s, [3077, 9], s, [1468, 3], 78, s, [1469, 7], 15, 25, s, [369, 3], 246, 247, s, [208, 9], s, [794, 15], s, [206, 93], s, [909, 119], 15, 19, s, [244, 3], s, [543, 29], s, [487, 6], s, [3957, 123], s, [602, 5], s, [7891, 17], s, [397, 42], 247, 30, 229, s, [5448, 12], s, [8019, 3], 130, 220, 221, 223, s, [202, 111], 15, 26, 38, 134, 177, s, [111, 3], s, [1754, 25], s, [33, 3], 39, 80, 113, 133, 134, s, [8, 4], 113, 134, s, [42, 22], 257, 258, 259, 262, 265, 113, s, [1825, 23], s, [29, 5], 266, 38, s, [2494, 3], 263, 264, t, [123, 4, 1], 216, 217, 219, s, [4584, 197], s, [86, 509], s, [8131, 113], s, [536, 344], 86, 87, 15, 16, 23, s, [1916, 3], s, [4999, 3], 86, 87, s, [1916, 5], s, [4990, 8], s, [4369, 42], s, [1962, 3], s, [60, 5], s, [2910, 165], s, [86, 86], s, [2716, 10], s, [2715, 33], 114, s, [2630, 8], 26, 38, 77, 177, s, [1546, 23], s, [7875, 91], s, [2146, 11], s, [2145, 31], 77, s, [2146, 124], s, [337, 10], s, [13291, 41], s, [7806, 114], 26, 39, 17, 26, s, [591, 12], s, [3027, 3], s, [5871, 34], 78, s, [3400, 6], s, [2792, 9], s, [3091, 12], 26, s, [60, 29], s, [56, 5], s, [3082, 11], s, [3081, 41], s, [2884, 5], s, [7734, 4], s, [6445, 115], 28, 16, 24, s, [616, 3], s, [2534, 4], s, [2533, 4], 26, 38, s, [9839, 130], s, [9726, 317], 23, 112, s, [3838, 5], 20, s, [6, 4], 39, 116, s, [8292, 3], s, [3484, 3], s, [3483, 3], 16, 24, s, [8293, 7], s, [4661, 15], s, [4386, 102], s, [8808, 104], s, [1278, 156], s, [51, 51], s, [1889, 165], s, [6563, 5], s, [1076, 113], s, [5666, 52], s, [8015, 208], s, [111, 434], s, [3001, 48], s, [8097, 3], s, [4985, 5], s, [8068, 6], 99, 100, s, [4988, 12], s, [3026, 5], s, [7959, 4], s, [308, 136], s, [7965, 94], 26, 39, 16, 26, s, [1716, 3], 93, 179, s, [5903, 43], 91, s, [1021, 4], s, [1181, 125], s, [1179, 29], s, [159, 5], s, [1094, 7], s, [16132, 4], s, [13963, 7], s, [11525, 76], s, [11524, 49], s, [125, 250], s, [723, 113], s, [8607, 172], s, [2128, 48], s, [15019, 66], 179, s, [7689, 3], s, [8700, 51], s, [10666, 80], 179, s, [10750, 82], s, [7482, 106], s, [389, 59], s, [8834, 81], 155, 229, s, [7199, 11], s, [2818, 41], 26, 39, 140, 273, 8, 16, s, [8689, 4], 138, 90, s, [6049, 3], 281, 282, 38, s, [8704, 9], 26, s, [8, 3], 26, 39, s, [1789, 111], 39, 39, s, [7346, 89], s, [3507, 5], 39, 138, s, [8773, 5], s, [759, 4], 26, s, [10081, 47], s, [15567, 3], s, [6403, 4], 177, 39, 138, 16, 38, 250, 26, 39, 114, s, [169, 86], s, [8293, 29], s, [6572, 5], s, [1482, 125], 11, 12, 47, 48, s, [103, 8], 171, s, [3056, 102], s, [4384, 162], s, [8137, 59], s, [3421, 42], s, [4207, 3], s, [15404, 5], s, [695, 6], s, [8053, 30], s, [8052, 15], s, [695, 5], s, [7346, 7], s, [66, 5], s, [346, 8], s, [7347, 10], s, [15698, 203], s, [7746, 14], s, [7745, 41], s, [1054, 3], s, [8336, 4], s, [9520, 9], 25, s, [7651, 19], s, [305, 11], s, [1280, 79], s, [8048, 10], s, [1126, 7], 246, 247, s, [7946, 43], s, [4359, 21], s, [55, 46], 15, 247, s, [5408, 5], s, [6087, 43], 127, s, [1202, 10], 26, s, [1203, 22], s, [1202, 3], s, [206, 7], 142, 237, s, [1240, 29], 13, 14, 22, s, [6459, 157], 133, 155, 114, s, [8578, 5], s, [7933, 27], 266, s, [106, 3], s, [368, 4], s, [5149, 5], s, [7915, 5], s, [8883, 10], s, [332, 42], s, [7254, 113], s, [165, 11], 20, s, [6248, 57], s, [4276, 368], s, [7343, 15], s, [4268, 8], s, [6991, 3], s, [13924, 18], s, [1202, 8], s, [14869, 50], s, [6993, 41], s, [994, 5], s, [6998, 43], s, [587, 12], 82, s, [2658, 13], s, [6547, 104], s, [3610, 200], s, [11036, 115], s, [6375, 5], s, [6857, 4], s, [10, 6], s, [9401, 5], s, [7762, 95], s, [7191, 3], s, [14810, 5], s, [1794, 50], s, [57, 97], 116, s, [58, 7], s, [6676, 3], s, [14973, 7], s, [14968, 6], 213, 238, s, [1785, 3], 16, 17, s, [7161, 6], 116, s, [6680, 5], s, [1111, 111], 20, 25, s, [15097, 4], 26, s, [6805, 7], 244, 247, 26, s, [1921, 29], s, [3643, 52], s, [14424, 177], s, [5335, 9], 21, 23, s, [1133, 12], s, [19341, 8], s, [19339, 26], s, [847, 3], 88, s, [422, 3], s, [19333, 3], s, [424, 6], 113, s, [9884, 162], s, [85, 9], s, [13770, 30], s, [6976, 22], s, [50, 28], 85, s, [51, 21], s, [11578, 46], s, [55, 55], s, [1768, 3], s, [15255, 3], s, [1769, 3], 189, s, [1844, 49], s, [14042, 53], s, [4349, 27], s, [5304, 109], s, [118, 61], s, [5421, 154], 84, 94, 95, 188, s, [4, 4], s, [6207, 124], s, [1262, 42], s, [17727, 126], s, [6555, 4], 50, 81, 93, s, [7, 14], 26, s, [4908, 87], s, [2334, 193], s, [5717, 5], s, [5854, 4], 123, s, [5342, 3], 138, 142, 237, s, [5117, 10], s, [5349, 7], 140, 273, s, [5363, 6], s, [3490, 43], s, [285, 8], 26, s, [65, 3], 279, 26, s, [77, 5], 142, 237, 90, s, [92, 3], 26, s, [4443, 3], s, [13807, 49], 270, s, [13858, 52], s, [3945, 24], s, [3712, 5], 16, 250, 17, 30, 38, 111, 112, 133, 142, 146, 251, 252, 253, 22, s, [11733, 6], s, [8836, 4], s, [16555, 80], s, [11706, 276], s, [17796, 119], s, [9993, 11], s, [5190, 41], s, [2313, 155], s, [13392, 38], s, [20743, 16], s, [13445, 53], s, [4516, 3], s, [10357, 14], s, [10595, 155], s, [169, 169], 20, s, [115, 8], s, [13677, 9], s, [116, 49], s, [13189, 56], s, [13583, 112], s, [116, 100], s, [115, 10], 39, s, [13214, 24], s, [3513, 3], s, [27, 27], s, [13233, 4], s, [13274, 30], s, [13233, 4], s, [5563, 23], s, [90, 5], s, [28, 25], 26, 38, s, [1676, 29], s, [4625, 5], 26, 38, 26, s, [13299, 4], 264, s, [13, 5], s, [6264, 6], 38, 39, s, [50, 24], s, [5368, 113], s, [10285, 216], s, [86, 7], s, [3371, 59], s, [12177, 72], s, [5183, 41], s, [12290, 114], s, [649, 3], s, [19882, 17], s, [19341, 263], s, [15415, 94], s, [7304, 9], s, [2625, 106], s, [5006, 6], s, [6, 6], s, [14682, 112], s, [11810, 4], 115, 142, s, [1985, 55], s, [20151, 10], s, [5065, 3], s, [5063, 9], s, [1492, 5], s, [11112, 324], s, [23628, 213], s, [12554, 111], s, [1637, 9], 26, 39, s, [4435, 133], s, [4434, 44], s, [9517, 54], 49, 82, s, [9206, 87], s, [4269, 4], 140, 273, 142, 237, 140, 273, 26, s, [4259, 4], 282, s, [4194, 8], 142, 237, s, [4195, 6], 123, 39, 142, 237, s, [4218, 4], 142, 237, 82, s, [1350, 5], s, [12388, 80], s, [7897, 26], s, [27, 27], s, [7917, 6], 30, s, [4214, 8], 30, 133, 142, 228, 20, 30, s, [13, 3], s, [4217, 6], 225, s, [20777, 90], s, [3834, 52], 17, 26, s, [22007, 88], s, [7424, 14], s, [592, 43], s, [821, 57], s, [1110, 109], s, [8847, 7], 25, 39, s, [9, 5], s, [9975, 80], s, [3232, 24], s, [3291, 26], 262, 265, s, [131, 131], s, [817, 54], s, [8740, 7], 25, s, [3352, 4], s, [4, 4], 17, s, [2069, 4], s, [17, 3], s, [895, 55], s, [1520, 121], s, [522, 5], 77, s, [846, 86], s, [91, 3], s, [7560, 58], s, [59, 13], s, [2413, 44], s, [1202, 6], s, [6864, 110], s, [15839, 181], s, [18724, 62], s, [674, 95], 82, 39, s, [1861, 3], 123, s, [1857, 5], s, [1833, 3], s, [6141, 3], 140, 273, 13, 14, s, [6438, 80], 26, s, [5992, 7], 252, 253, s, [9949, 7], 30, 142, 237, 254, s, [935, 27], s, [9571, 10], s, [5058, 160], 39, 134, 39, 113, s, [301, 79], s, [81, 81], s, [1347, 7], s, [471, 3], s, [4, 3], s, [1341, 5], s, [482, 82], s, [3345, 118], s, [203, 3], s, [3237, 244], s, [22702, 153], t, [123, 3], s, [2779, 6], s, [2778, 3], s, [8, 7], 17, 30, 229, s, [1970, 34], s, [9036, 224], s, [23632, 188], s, [621, 98], t, [39, 4], 20, s, [549, 7], s, [12834, 89], s, [2656, 27], s, [120, 4]]),
              type: i([t, [2, 65], t, [0, 50], 1, s, [101, 57], t, [2, 86], s, [90, 84], s, [81, 147], t, [0, 47], s, [344, 70], s, [114, 48], s, [119, 7], s, [131, 14], s, [504, 83], s, [83, 65], s, [334, 76], s, [383, 84], s, [494, 111], s, [111, 222], s, [112, 225], s, [126, 16], s, [192, 114], s, [115, 112], s, [1250, 116], s, [1220, 86], s, [1815, 89], t, [2, 134], s, [356, 52], s, [275, 20], s, [391, 40], s, [675, 27], 0, s, [1926, 114], s, [1814, 13], s, [993, 79], s, [93, 8], s, [309, 27], s, [783, 169], s, [1022, 114], s, [2383, 165], s, [114, 143], s, [521, 91], s, [513, 52], s, [121, 11], s, [135, 20], s, [1024, 18], s, [692, 71], s, [683, 223], s, [111, 444], s, [1127, 115], s, [782, 413], s, [2761, 101], s, [2656, 172], s, [530, 228], s, [3778, 182], s, [3584, 115], s, [5284, 84], s, [197, 126], s, [5483, 76], s, [401, 117], t, [0, 51], s, [5235, 20], s, [3551, 147], s, [158, 10], s, [59, 12], s, [625, 117], s, [542, 116], s, [743, 153], s, [6219, 95], s, [1901, 86], s, [86, 10], s, [345, 170], s, [86, 239], s, [1742, 311], s, [1112, 95], s, [3319, 121], s, [395, 114], s, [4333, 71], s, [4627, 117], s, [65, 47], s, [118, 52], s, [2345, 123], s, [7856, 149], s, [195, 132], s, [7528, 114], s, [248, 130], s, [2082, 83], s, [1613, 198], s, [6360, 14], s, [1234, 22], s, [1375, 124], s, [4424, 85], s, [2687, 110], s, [739, 104], s, [8731, 15], s, [7051, 5], s, [464, 7], s, [1461, 119], s, [652, 50], s, [3807, 117], s, [762, 13], s, [3819, 11], s, [6380, 30], s, [2920, 166], s, [5208, 165], s, [2881, 158], s, [2766, 166], s, [3298, 97], s, [91, 32], s, [1255, 108], s, [5868, 172], s, [50, 41], s, [4794, 12], s, [4791, 71], s, [6074, 212], s, [4154, 187], s, [1589, 9], s, [5276, 144], s, [10631, 54], s, [138, 30], s, [9021, 18], s, [4584, 256], s, [86, 445], s, [6092, 282], s, [86, 193], s, [4369, 116], s, [2910, 171], s, [86, 66], s, [6934, 77], s, [2257, 98], s, [2146, 162], s, [5984, 185], s, [11572, 104], s, [7557, 133], s, [8112, 121], s, [9726, 339], s, [118, 14], s, [5431, 10], s, [4670, 10], s, [3507, 73], s, [1002, 198], s, [1278, 142], s, [2666, 175], s, [6514, 160], s, [8015, 268], s, [111, 409], s, [49, 44], s, [25, 12], s, [8656, 227], s, [2214, 13], s, [1181, 207], s, [7383, 13], s, [5657, 125], s, [125, 317], s, [8688, 117], s, [4516, 213], s, [14544, 12], s, [4331, 129], s, [5105, 235], s, [17134, 142], s, [15942, 15], s, [6042, 15], s, [318, 74], s, [12187, 138], s, [17179, 10], s, [103, 33], s, [3578, 33], s, [3044, 84], s, [257, 22], s, [15576, 94], s, [1364, 61], s, [952, 153], s, [3804, 159], s, [3421, 91], s, [16143, 98], s, [1925, 210], s, [730, 20], s, [1162, 74], s, [13146, 58], s, [831, 103], s, [9408, 13], s, [4421, 69], s, [1332, 20], s, [1240, 34], s, [6465, 164], s, [196, 39], s, [10409, 51], s, [15385, 166], s, [4276, 405], s, [2633, 82], s, [14046, 100], s, [1018, 77], s, [3610, 314], s, [11806, 55], s, [10, 13], s, [221, 137], s, [57, 114], s, [2998, 26], s, [14563, 81], s, [625, 57], s, [9629, 39], s, [9213, 329], s, [1050, 177], s, [6976, 105], s, [11633, 72], s, [4790, 96], s, [10724, 77], s, [13992, 117], s, [5421, 167], s, [20677, 69], s, [7388, 178], s, [14523, 130], s, [4481, 207], s, [5717, 23], s, [4, 7], s, [614, 15], s, [3821, 8], s, [520, 57], s, [16980, 10], s, [14657, 56], s, [3062, 51], s, [3945, 33], s, [5343, 17], s, [6899, 83], s, [1822, 244], s, [12903, 153], s, [2485, 132], s, [491, 107], s, [53, 75], s, [3049, 75], s, [7484, 146], s, [10764, 188], s, [2228, 161], s, [15110, 118], s, [13172, 42], s, [4011, 18], s, [3574, 46], s, [1646, 39], s, [13321, 35], s, [7241, 13], s, [310, 21], s, [20753, 169], s, [3824, 188], s, [8161, 115], s, [21261, 161], s, [5237, 185], s, [662, 196], s, [14559, 117], s, [11669, 13], s, [1695, 160], s, [20322, 17], s, [14884, 17], s, [11112, 372], s, [6245, 228], s, [10803, 104], s, [10387, 177], s, [3389, 90], s, [4876, 13], s, [4037, 4], s, [1195, 14], s, [18, 8], s, [33, 8], s, [4071, 8], s, [3528, 95], s, [2658, 51], s, [25746, 17], s, [25762, 70], s, [19572, 141], s, [1751, 73], s, [199, 125], s, [18191, 54], s, [13560, 21], s, [634, 93], s, [3199, 45], s, [131, 127], s, [817, 44], s, [19290, 10], s, [201, 24], s, [78, 49], s, [1520, 116], s, [8311, 88], s, [61, 110], s, [26370, 32], s, [6864, 101], s, [3089, 210], s, [2194, 123], s, [1857, 8], s, [1663, 6], s, [1068, 91], s, [1299, 11], s, [935, 78], s, [3864, 191], s, [19591, 359], s, [9482, 250], s, [22702, 112], s, [12565, 12], s, [77, 23], s, [9036, 315], s, [10017, 212], s, [1175, 108], s, [125, 19]]),
              state: i([t, [1, 4, 1], 16, 6, 8, 46, 39, 33, 15, 11, 12, 9, 13, 52, 10, 48, 49, 47, 89, 7, 35, 37, 36, 31, 63, 32, 66, 100, 111, 67, 103, 34, 75, 74, 104, 14, 53, 30, 55, 64, 5, 25, 24, 22, 59, 17, 20, 21, 124, 163, 116, 117, 120, 121, 129, 167, 169, 111, 166, 173, 174, 175, s, [60, 38], 177, s, [60, 7], 178, s, [47, 7], 179, s, [48, 39], 184, 191, 186, 188, 189, 190, 192, 198, 202, 206, s, [104, 46], 33, 207, s, [30, 15], 209, 210, 64, 214, s, [67, 46], 215, s, [47, 46], 216, s, [47, 46], 217, s, [47, 46], 219, s, [47, 46], 221, 222, 226, s, [49, 46], 228, 237, s, [48, 7], 230, 234, 11, 231, s, [51, 27], 236, 232, s, [51, 4], 235, 233, s, [51, 3], 238, s, [98, 46], 241, 244, 243, 248, 250, s, [51, 46], 254, 252, 262, 263, s, [20, 3], 264, 258, 59, 255, 259, 33, 270, s, [42, 15], 268, 30, 269, 64, 265, 267, 274, 271, 275, 277, 3, 276, s, [704, 46], 279, 285, 283, 286, 104, 264, 288, 104, 264, 290, 292, 293, s, [145, 46], 296, s, [47, 4], 294, 295, 39, 297, s, [50, 41], 300, s, [97, 46], 303, s, [47, 7], 302, s, [48, 39], 304, s, [48, 7], 305, s, [791, 40], 317, s, [30, 5], 307, 309, 32, 312, s, [32, 4], 310, s, [32, 3], 316, 30, 315, 64, 323, s, [166, 38], 319, 321, 324, s, [73, 8], 327, 335, 103, 332, 333, 345, s, [31, 5], 339, 342, 340, 336, 338, 344, 343, 352, 111, 349, 350, 353, s, [1098, 47], 354, s, [286, 46], 355, s, [47, 46], 356, s, [47, 46], 357, s, [47, 46], 358, s, [47, 46], 359, s, [47, 7], 360, s, [48, 39], 363, s, [95, 10], 361, s, [48, 36], 364, s, [143, 46], 365, s, [47, 46], 366, s, [1406, 47], 367, s, [942, 16], 370, 368, 64, 369, s, [830, 5], 373, s, [830, 44], 374, s, [119, 46], 375, s, [47, 46], 376, 377, 111, 379, s, [50, 46], 384, s, [47, 6], 381, 383, s, [49, 40], s, [1835, 7], 386, s, [103, 46], s, [54, 7], 390, s, [1945, 48], 391, s, [49, 19], 394, s, [1009, 17], 14, 393, 30, 392, s, [51, 9], 191, 395, s, [1887, 4], s, [57, 20], s, [106, 29], 399, 408, 410, 412, 191, 417, 190, 192, 415, 416, 418, 419, 104, 264, s, [2005, 8], s, [223, 39], 198, 421, s, [48, 7], 424, s, [272, 46], s, [2161, 4], 279, 248, 179, s, [14, 7], s, [7, 21], 426, s, [361, 53], 427, s, [54, 46], 429, s, [47, 7], 428, s, [48, 31], 430, s, [102, 13], 433, 129, 277, 3, 434, s, [358, 46], 435, s, [152, 46], 436, 248, s, [1829, 18], 443, 442, s, [1829, 3], 202, s, [293, 14], 452, s, [87, 3], 450, s, [87, 5], 447, 448, 449, 454, s, [91, 37], 459, 462, s, [139, 7], 461, s, [140, 29], 463, s, [49, 9], 464, 467, 33, 468, s, [2434, 18], 469, s, [70, 7], 471, s, [210, 31], 470, s, [70, 7], 472, 474, s, [179, 7], 476, 3, 475, s, [315, 46], 480, 477, 254, 483, 485, s, [2110, 6], 488, 59, 486, 489, 490, s, [330, 46], 494, 491, 492, 248, 497, s, [2162, 21], 498, 267, 248, s, [647, 4], 274, 499, 274, 500, 501, 502, s, [157, 7], 505, s, [830, 48], 506, 510, s, [48, 7], 509, s, [144, 39], 285, 511, 292, 285, 512, 285, 513, 292, s, [1905, 9], 515, s, [1905, 3], 516, s, [470, 14], 519, s, [763, 52], 520, s, [661, 3], 523, s, [3070, 53], s, [7, 7], 524, s, [2130, 7], 526, s, [2130, 15], 529, s, [2130, 49], 33, 531, s, [560, 18], s, [364, 5], 535, 533, 536, s, [2208, 39], 537, s, [78, 10], 538, s, [1033, 53], 540, s, [54, 46], 541, 543, 191, 545, s, [1343, 4], 335, 103, 547, 548, s, [58, 46], 551, s, [458, 9], 552, s, [458, 3], s, [13, 6], 557, 555, 556, 558, s, [12, 9], 562, s, [12, 4], 560, 567, 563, 565, 352, 111, 569, 570, s, [204, 53], s, [7, 35], 573, s, [89, 10], 572, s, [90, 64], s, [1148, 18], 579, 578, 64, s, [42, 21], 581, s, [1862, 7], 583, s, [1862, 48], 585, s, [264, 53], 588, s, [926, 48], s, [629, 5], 399, 594, s, [53, 7], 592, s, [110, 39], 191, 596, s, [521, 3], 600, s, [53, 7], 599, s, [53, 39], 601, s, [210, 46], 602, s, [47, 46], 603, s, [47, 46], 608, 614, 612, 536, 191, 615, 190, 192, 285, 616, 285, 617, 292, s, [2179, 9], 619, s, [317, 46], 620, s, [684, 67], 623, 625, s, [69, 7], 624, s, [70, 53], 627, s, [131, 46], 628, s, [47, 46], 629, s, [47, 46], 630, s, [47, 46], 631, s, [2920, 47], s, [884, 16], 632, s, [1332, 3], 202, 634, s, [69, 46], s, [2063, 10], 635, s, [2063, 40], 640, 644, 645, s, [100, 7], 646, s, [419, 46], 173, s, [3076, 5], 648, s, [3075, 43], s, [49, 5], 649, s, [49, 48], 650, s, [49, 43], s, [256, 10], 651, s, [256, 40], 653, s, [254, 7], 652, s, [254, 46], 654, 248, 656, 33, 657, s, [1766, 18], 167, 658, s, [1137, 3], s, [35, 7], 660, 661, s, [9, 7], 664, 480, 666, 672, 669, 670, 480, 675, 680, s, [849, 53], 685, 494, 688, 492, s, [2240, 21], 689, 497, 695, s, [35, 7], s, [1666, 9], 700, s, [1666, 3], 551, s, [310, 5], 702, s, [310, 43], 703, s, [71, 7], 705, s, [160, 7], 704, s, [56, 31], 706, s, [3236, 9], 708, s, [2160, 53], s, [2152, 7], 713, s, [2151, 14], 715, 716, s, [77, 7], 717, s, [183, 39], 720, s, [48, 7], 721, s, [3195, 50], s, [2181, 39], 726, 727, s, [60, 8], 535, 730, 536, s, [1178, 14], 731, 399, s, [380, 16], 734, s, [379, 3], 738, s, [14, 9], 739, s, [394, 3], 746, s, [2049, 12], 748, 750, 567, 752, 565, s, [52, 7], s, [4113, 11], 755, s, [186, 43], 758, s, [576, 46], 759, s, [47, 46], 760, s, [1200, 63], 761, s, [1200, 3], s, [2063, 7], 766, s, [69, 40], 767, s, [218, 7], 772, s, [124, 7], 770, s, [56, 39], 774, s, [48, 7], 773, s, [507, 46], 776, s, [55, 7], 775, s, [2057, 40], 777, s, [2057, 3], 191, 778, s, [2584, 4], s, [2352, 28], 782, 412, 191, 785, 190, 192, 788, s, [320, 46], s, [3955, 4], 791, 792, s, [560, 9], 794, s, [560, 3], s, [93, 21], 796, s, [2610, 73], 799, s, [8, 7], 801, 129, 803, s, [445, 17], 807, 210, s, [2529, 8], s, [1347, 10], 809, s, [1347, 40], s, [51, 10], 810, s, [50, 39], 811, s, [213, 7], 812, s, [214, 39], 813, 815, 816, s, [50, 7], 817, s, [264, 46], s, [1292, 5], 818, s, [4776, 44], s, [57, 7], 821, s, [112, 7], 820, s, [55, 39], 167, 822, s, [1111, 3], 824, 826, 829, 832, 672, 836, 670, 837, 480, 838, s, [70, 7], 494, 841, 843, 846, 685, s, [1469, 21], 848, s, [22, 21], 849, 267, s, [1075, 7], 850, s, [1075, 4], 853, 855, 857, 858, 551, 864, 866, s, [513, 53], 391, 3, 867, s, [4672, 40], 868, s, [58, 14], 870, s, [1032, 47], s, [1485, 6], 871, s, [1485, 14], s, [22, 7], 872, s, [3659, 15], s, [2699, 9], 874, s, [1593, 53], 390, 3, 875, s, [56, 46], s, [3589, 47], s, [1559, 39], 877, s, [3740, 10], s, [50, 39], 878, s, [49, 9], s, [1009, 9], 880, s, [3616, 8], s, [12, 3], 881, s, [1595, 3], s, [13, 9], 884, s, [3654, 10], 886, s, [3653, 10], 889, s, [11, 10], 894, s, [540, 4], 746, 567, 898, 750, s, [16, 7], 900, s, [16, 4], s, [1619, 11], 903, s, [1064, 57], 904, s, [661, 17], 905, 210, 64, s, [1492, 7], 906, s, [5465, 47], 907, s, [3603, 41], 911, s, [187, 7], 910, s, [1251, 60], 912, 913, s, [491, 46], 914, 412, 915, 412, 916, s, [858, 53], s, [3416, 4], s, [1469, 4], 917, 418, 551, s, [18, 7], 919, s, [72, 46], 920, s, [47, 46], 922, s, [47, 7], 921, s, [48, 39], 924, s, [48, 7], 923, s, [48, 39], 925, s, [143, 46], 926, s, [1370, 12], s, [3021, 44], s, [432, 14], 929, 931, 932, 933, 672, 934, 936, 938, 939, 832, 943, 494, 944, 945, 497, s, [715, 7], 948, s, [4407, 11], 949, s, [12, 4], 953, 954, 857, 858, 955, 285, 958, 959, s, [500, 21], 715, s, [15, 14], 965, s, [201, 7], 967, s, [145, 39], 535, 968, 536, s, [886, 7], 557, 973, s, [119, 10], 974, s, [11, 10], 975, s, [11, 10], 976, s, [11, 10], 977, s, [164, 11], 978, s, [12, 4], 567, 980, 567, 981, s, [16, 7], 983, s, [28, 11], 984, s, [12, 4], 986, s, [349, 46], 987, 988, s, [233, 21], 285, 992, s, [9, 6], 993, s, [17, 7], 995, s, [2016, 21], 998, 129, 999, s, [110, 46], 1003, 672, 1005, 1006, 1009, 1010, 1012, 858, 953, 1017, 1016, s, [180, 7], 1018, s, [180, 4], s, [1389, 9], 1020, s, [1445, 53], 1028, s, [133, 46], 1031, s, [47, 7], 1030, s, [48, 39], 1033, s, [48, 7], 1032, s, [48, 39], 1034, s, [48, 7], 1035, s, [679, 45], 1037, 129, 1041, 858, 1042, 858, 1044, s, [279, 7], 1045, s, [279, 11], s, [7, 28], 1047, s, [108, 7], 1048, s, [787, 46], s, [102, 7], 1054, s, [102, 4]]),
              mode: i([2, t, [1, 64], 2, 1, s, [67, 10], s, [12, 3], 2, s, [81, 34], t, [2, 5], s, [7, 7], t, [2, 12], s, [18, 18], t, [2, 19], s, [56, 18], s, [17, 3], s, [77, 19], t, [2, 63], s, [81, 80], s, [293, 11], t, [1, 137], t, [2, 81], s, [514, 5], s, [154, 69], t, [1, 345], s, [778, 70], s, [72, 9], s, [276, 247], s, [293, 29], s, [85, 26], s, [106, 60], s, [1335, 9], s, [92, 11], s, [9, 5], s, [1279, 4], s, [891, 6], s, [122, 8], s, [42, 7], s, [47, 8], s, [137, 24], s, [1454, 7], s, [8, 6], s, [46, 7], s, [4, 7], s, [472, 9], s, [481, 21], s, [1231, 8], s, [29, 22], s, [431, 108], s, [12, 10], s, [454, 37], s, [36, 22], s, [181, 8], s, [1141, 347], s, [97, 98], s, [514, 5], s, [126, 29], s, [746, 6], s, [1633, 353], t, [1, 351], s, [697, 27], s, [2756, 81], s, [64, 47], s, [494, 349], s, [1774, 17], s, [2063, 11], s, [516, 13], s, [2256, 28], s, [145, 71], s, [1919, 22], s, [145, 14], s, [1942, 12], s, [145, 92], s, [430, 142], s, [235, 9], s, [8, 17], s, [1702, 10], s, [3301, 148], s, [616, 26], s, [598, 10], s, [1137, 25], s, [2613, 8], s, [1071, 27], s, [4058, 79], s, [79, 58], t, [2, 86], s, [507, 9], s, [2845, 7], s, [802, 32], s, [838, 11], s, [802, 32], s, [79, 35], s, [3046, 12], s, [79, 190], s, [1327, 209], s, [4197, 256], s, [575, 34], s, [592, 22], s, [1312, 31], s, [4772, 63], s, [511, 14], s, [4742, 145], s, [5309, 79], s, [3953, 125], s, [4359, 22], s, [352, 97], s, [4477, 79], s, [5726, 84], s, [1195, 147], s, [128, 8], s, [409, 83], s, [1905, 82], s, [414, 79], s, [657, 29], s, [190, 85], s, [4943, 13], s, [5884, 184], s, [4444, 9], s, [5160, 24], s, [2315, 78], s, [6578, 110], s, [1625, 55], s, [2883, 69], s, [5101, 220], s, [1276, 68], s, [601, 15], s, [2097, 86], s, [1126, 54], s, [330, 98], s, [2356, 26], s, [1103, 18], s, [3860, 130], s, [145, 101], s, [2671, 56], s, [3057, 89], s, [710, 20], s, [6516, 8], s, [993, 107], s, [4058, 80], s, [79, 183], s, [1113, 53], s, [237, 107], s, [3881, 9], s, [1004, 31], s, [1227, 26], s, [5613, 65], s, [618, 171], s, [302, 52], s, [79, 106], s, [2030, 54], s, [397, 20], s, [2704, 63], s, [531, 49], s, [371, 157], s, [1551, 48], s, [1732, 79], s, [8879, 212], s, [560, 59], s, [3349, 63], s, [62, 30], s, [9764, 10], s, [9823, 14], s, [237, 64], s, [5027, 269], s, [8784, 13], s, [6626, 16], s, [3277, 264], s, [6456, 127], s, [4375, 60], s, [375, 82], s, [3546, 60], s, [568, 270], s, [3984, 133], s, [4951, 32], s, [6228, 153], s, [818, 30], s, [4686, 9], s, [158, 112], s, [9542, 193], s, [8471, 237], s, [6181, 31], s, [1433, 40], s, [11038, 26], s, [439, 32], s, [69, 17], s, [5424, 15], s, [1507, 26], s, [1510, 15], s, [4608, 15], s, [1675, 149], s, [5553, 148], s, [1835, 22], s, [870, 52], s, [1138, 74], s, [5403, 80], s, [4992, 14], s, [10499, 13], s, [4786, 27], s, [1991, 96], s, [1324, 91], s, [2178, 220], s, [142, 39], s, [8847, 8], s, [489, 33], s, [1867, 6], s, [1632, 135], s, [4114, 26], s, [3257, 20], s, [502, 27], s, [3612, 64], s, [5810, 48], s, [48, 41], s, [3786, 50], s, [232, 18], s, [4404, 36], s, [7912, 139], s, [13562, 9], s, [1029, 21], s, [9248, 11], s, [11929, 216], s, [3076, 173], s, [12889, 11], s, [59, 19], s, [5270, 33], s, [857, 37], s, [398, 170], s, [1610, 155], s, [11142, 88], s, [4629, 13], s, [4679, 50], s, [50, 78], s, [6954, 11], s, [1713, 12], s, [7521, 101], s, [657, 42], s, [6929, 158], s, [30, 14], s, [5084, 12], s, [3188, 10], s, [13859, 26], s, [50, 7], s, [1017, 39], s, [4604, 261], s, [11268, 11], s, [576, 36], s, [10369, 150], s, [5831, 174], s, [4583, 113], s, [4711, 14], s, [13945, 14], s, [3510, 71], s, [10674, 81], s, [4188, 62], s, [8655, 70], s, [244, 8], s, [9785, 34], s, [767, 50], s, [1192, 9], s, [399, 8], s, [13532, 143], s, [6185, 237], s, [3752, 40], s, [1688, 102], s, [35, 36], s, [178, 38], s, [3707, 21], s, [7077, 98], s, [2804, 116], s, [1658, 214], s, [332, 58], s, [58, 15], s, [16240, 10], s, [704, 16], s, [3242, 144], s, [9003, 131], s, [2323, 46], s, [7698, 271], s, [79, 83], s, [3641, 75], s, [2984, 139], s, [4280, 17], s, [158, 40], s, [2270, 12], s, [18636, 13], s, [7874, 392], s, [1089, 14], s, [3065, 118], s, [121, 45], s, [3091, 90], s, [960, 9], s, [5878, 18], s, [9625, 71], s, [697, 41], s, [3120, 9], s, [17985, 9], s, [4103, 96], s, [2535, 38], s, [128, 80], s, [15795, 58], s, [674, 102], s, [798, 8], s, [6150, 81], s, [13777, 102], s, [7484, 69], s, [1723, 18], s, [1171, 105], s, [19931, 14], s, [1588, 81], s, [5422, 43], s, [1786, 49], s, [18858, 99], s, [12176, 104], s, [4455, 119], s, [4516, 69], s, [844, 75], s, [3894, 9], s, [17959, 30], s, [2487, 106], s, [1062, 81], s, [81, 86], s, [1081, 14], s, [11960, 124], s, [10427, 273], s, [10224, 8], s, [1499, 35], s, [6574, 63], s, [3882, 77], s, [1248, 132], s, [1327, 152], s, [157, 101], t, [2, 5]]),
              goto: i([1, 40, 82, 83, 84, 87, 98, 65, 99, t, [26, 4, 1], t, [41, 5, 1], 88, 80, 81, 85, 86, 73, 54, 50, 51, 18, 108, 93, 90, 91, 92, 109, 38, 78, 79, t, [68, 5, 1], 101, 110, 114, 102, 112, 76, 77, 113, 105, 106, 107, 62, 94, 19, 23, 61, 60, 95, 96, 97, 56, 57, 58, 2, 115, 6, 135, 137, 133, 139, 143, 152, 153, 160, 161, 6, 126, t, [6, 3], 118, 119, 122, 123, 125, 144, 146, 131, t, [132, 5, 2], 141, 142, 145, t, [147, 5, 1], t, [154, 6, 1], 162, 130, 127, 128, 90, 91, t, [7, 5], 164, 165, t, [9, 17], 170, t, [9, 36], 168, 172, t, [9, 16], 171, 9, 9, 110, 114, 9, 9, t, [420, 78], 94, 420, t, [422, 78], 94, 422, s, [360, 16], 176, s, [361, 48], s, [65, 5], 182, s, [65, 10], 181, s, [65, 8], 180, s, [66, 40], 185, 183, 181, 180, 196, 197, 187, 194, 195, 193, 200, 27, 28, 201, 199, t, [346, 3], t, [247, 78], 203, 204, 205, 247, s, [591, 64], 211, s, [60, 3], 213, 356, 212, 208, s, [39, 21], s, [93, 64], s, [64, 144], 218, s, [65, 64], 220, s, [65, 48], t, [196, 50], 225, t, [196, 19], 223, 224, t, [196, 7], s, [144, 6], 227, s, [273, 57], 229, 90, 91, s, [340, 80], 239, s, [65, 8], 240, s, [66, 40], t, [207, 67], 242, t, [207, 11], 185, 245, 181, 246, 180, 94, t, [374, 20], 247, 356, t, [374, 58], 249, 113, t, [374, 4], 505, s, [238, 5], t, [505, 8], 98, t, [505, 4], 65, 505, 505, 99, 505, 505, s, [254, 3], 505, 505, s, [256, 5], 251, 505, 45, t, [505, 5], 88, t, [505, 4], s, [266, 4], t, [505, 19], 73, t, [505, 4], 54, 505, 50, t, [505, 3], 51, 505, 18, 505, 108, 505, 505, 93, t, [505, 4], 92, 109, 505, 505, 38, 78, 505, 505, 79, 505, s, [303, 8], 505, s, [304, 20], 505, 526, 526, 253, 526, 94, 260, s, [934, 3], 256, 54, 261, 257, s, [32, 6], t, [94, 4, 1], s, [955, 7], 266, 73, s, [368, 21], 273, 272, 94, s, [960, 17], 278, s, [493, 48], 281, 280, 172, 282, t, [324, 11], 185, t, [324, 9], 284, 181, t, [324, 35], 180, t, [324, 20], 356, 287, 113, 94, 356, 289, 113, 94, 185, 356, 181, 180, 291, s, [653, 69], 152, 153, s, [66, 13], 298, 299, s, [68, 4], s, [1799, 8], s, [729, 48], 301, s, [140, 62], s, [1584, 61], s, [66, 66], 211, 98, 306, 65, 313, s, [532, 3], 308, 73, 314, 38, 78, 311, s, [1490, 24], 325, s, [304, 3], 318, s, [101, 8], 320, s, [101, 7], 322, s, [233, 41], 328, 326, 345, 331, 345, 345, 329, 330, 345, 334, 102, 112, 348, 341, 347, 337, s, [44, 10], 94, 346, 110, 114, 351, 4, s, [329, 6], 4, 65, 4, 99, 4, s, [101, 8], 4, s, [1594, 192], s, [64, 181], s, [653, 66], s, [130, 11], 362, s, [323, 240], s, [1375, 7], s, [1374, 22], s, [35, 3], t, [88, 17], 371, t, [88, 46], t, [90, 17], 372, t, [90, 46], s, [1276, 82], s, [364, 122], 172, 110, 114, 378, s, [132, 80], 382, s, [65, 7], 380, 385, s, [67, 41], 426, s, [3418, 9], t, [426, 4], 126, t, [426, 9], 118, 119, 426, 123, t, [426, 5], s, [3429, 16], 426, 426, s, [3429, 3], t, [426, 25], s, [210, 64], 164, 165, 22, s, [145, 4], t, [22, 9], 126, t, [22, 9], 118, 119, 22, 123, t, [22, 5], s, [145, 8], t, [22, 6], 154, 155, t, [22, 4], 162, t, [22, 25], 388, 387, s, [147, 16], 389, s, [358, 54], s, [1638, 3], s, [66, 8], 308, s, [66, 7], 314, s, [67, 12], s, [1659, 20], s, [2837, 11], 197, 396, s, [3348, 3], s, [286, 64], 398, 124, 397, 124, 400, t, [380, 7], 401, t, [382, 7], 402, t, [385, 7], 403, 404, 406, 405, 407, 272, 409, 272, 272, 413, 411, 195, 193, 325, 196, 197, 414, s, [112, 3], 356, 420, 113, s, [3281, 65], s, [3528, 4], s, [1371, 8], 423, s, [69, 8], 422, s, [1372, 49], 37, s, [616, 9], t, [37, 4], 126, t, [37, 9], s, [4043, 7], 37, 37, s, [4045, 21], t, [37, 7], 130, 37, 37, 127, 128, 37, 37, 90, 91, t, [37, 9], t, [40, 17], 170, t, [40, 36], 168, 172, t, [40, 16], 171, 40, 40, 110, 114, 40, 40, t, [111, 17], 281, t, [111, 36], 280, 172, t, [111, 16], 282, t, [111, 6], t, [374, 20], s, [2969, 59], s, [2972, 6], 425, 346, s, [3919, 4], 185, 181, 180, t, [41, 3], 133, 139, t, [41, 9], 126, t, [41, 9], 118, 119, 41, 123, t, [41, 5], s, [331, 3], 41, s, [331, 4], t, [41, 6], 154, 155, t, [41, 4], 162, t, [41, 25], t, [42, 3], 133, 139, t, [42, 9], 126, t, [42, 9], 118, 119, 42, 123, t, [42, 5], 131, 132, 42, 42, s, [79, 4], t, [42, 6], 154, 155, t, [42, 4], 162, t, [42, 25], t, [43, 3], 133, 139, t, [43, 9], 126, t, [43, 9], 118, 119, 43, 123, t, [43, 5], 131, 132, 43, 43, s, [79, 4], t, [43, 6], 154, 155, t, [43, 4], 162, t, [43, 25], t, [44, 3], 133, 139, t, [44, 9], 126, t, [44, 9], 118, 119, 44, 123, t, [44, 5], 131, 132, 44, 44, s, [79, 4], t, [44, 6], 154, 155, t, [44, 4], 162, t, [44, 25], s, [782, 64], 46, s, [711, 9], t, [46, 4], 126, t, [46, 9], 118, 119, 46, 123, t, [46, 5], s, [711, 16], 46, 46, s, [711, 3], t, [46, 25], s, [2292, 75], 431, s, [2293, 55], s, [209, 9], 185, 126, 432, 181, s, [4953, 28], 180, s, [4954, 5], s, [3424, 65], s, [243, 64], 90, 91, t, [437, 4, 1], t, [374, 9], 441, s, [856, 4], 247, t, [356, 3], t, [374, 30], s, [31, 12], s, [3816, 5], s, [3658, 30], 444, 143, 143, 144, 144, 425, 425, t, [247, 44], 170, 170, s, [4772, 11], s, [341, 9], 145, 145, 126, s, [340, 28], 145, s, [340, 5], s, [46, 9], 126, 445, s, [45, 28], 446, s, [385, 21], s, [320, 9], 457, 51, 451, 453, 455, 456, s, [323, 36], 458, t, [208, 66], 460, t, [208, 12], s, [2938, 66], t, [126, 11], 185, t, [126, 9], 465, 181, t, [126, 35], 466, 180, t, [126, 20], s, [1318, 3], s, [2764, 29], s, [178, 66], t, [352, 20], 328, t, [352, 58], 473, 352, t, [356, 79], 113, 356, 506, s, [599, 9], t, [506, 4], 126, t, [506, 9], 118, 119, 506, 123, t, [506, 5], s, [613, 16], 506, 506, s, [613, 3], t, [506, 25], s, [952, 64], 479, 481, 478, 482, 94, t, [526, 4], 94, 484, 124, s, [4569, 4], 54, 261, 487, s, [4568, 10], s, [93, 64], 493, 94, 495, t, [356, 79], 249, 113, 356, t, [494, 10], 496, t, [494, 68], s, [657, 29], t, [504, 20], 356, t, [504, 58], s, [1251, 5], 504, 170, 168, 172, 171, 110, 114, 94, 94, 113, s, [528, 4], s, [1125, 10], 503, s, [6464, 34], 504, 115, s, [3295, 65], 507, 508, s, [6222, 67], 284, 181, 180, 356, 113, s, [6, 4], 185, 356, s, [5, 3], 514, s, [4475, 16], 328, t, [256, 3], 133, 139, t, [256, 9], 126, t, [256, 9], 118, 119, 256, 123, t, [256, 5], s, [227, 3], 256, s, [227, 4], t, [256, 6], 154, 155, t, [256, 4], 162, t, [256, 25], t, [59, 31], 517, t, [59, 47], t, [63, 32], 518, t, [63, 46], 65, s, [451, 9], t, [65, 4], 126, t, [65, 9], s, [462, 7], 65, 65, s, [464, 21], t, [65, 7], 130, 65, 65, 127, 128, 65, 65, 90, 91, t, [65, 9], s, [482, 64], s, [142, 9], 522, 126, 521, s, [2105, 100], s, [705, 10], 229, s, [704, 33], 210, s, [45, 9], t, [210, 4], 126, t, [210, 9], 118, 119, 210, 123, t, [210, 5], s, [59, 16], 210, 210, s, [59, 3], t, [210, 14], s, [70, 3], t, [210, 8], 525, t, [124, 3], s, [959, 3], s, [5223, 4], s, [5222, 24], t, [251, 9], 277, 277, s, [4, 4], s, [5, 3], t, [251, 37], 527, t, [301, 11], 528, t, [301, 41], s, [5331, 68], s, [1167, 10], 530, s, [40, 19], 290, 356, 290, 374, 290, 356, 356, 290, 290, s, [2364, 7], s, [1105, 5], s, [1104, 3], 532, s, [1105, 3], 534, 413, 124, 124, s, [130, 9], s, [574, 15], s, [128, 42], s, [639, 73], 411, 126, t, [411, 4], s, [531, 28], 539, s, [2361, 30], s, [113, 39], t, [415, 5], 325, t, [415, 4], 542, t, [415, 58], 328, 196, 197, 544, s, [3993, 3], s, [5703, 3], 546, s, [144, 64], 550, 124, 124, 549, s, [1297, 3], s, [1296, 12], t, [474, 4], 553, 463, 554, 474, t, [476, 4], 465, 476, s, [29, 15], 559, s, [16, 3], 561, s, [17, 12], 564, 566, 94, 110, 114, 568, 351, s, [136, 64], 39, s, [394, 9], t, [39, 4], 126, t, [39, 9], s, [402, 7], 39, 39, s, [404, 21], t, [39, 7], 130, 39, 39, 127, 128, 39, 39, 90, 91, t, [39, 9], 50, s, [79, 9], t, [50, 4], 126, t, [50, 9], s, [79, 7], 50, 50, s, [79, 21], t, [50, 7], 130, 50, 50, 127, 128, 50, 50, 90, 91, t, [50, 9], 51, s, [79, 9], t, [51, 4], 126, t, [51, 9], s, [79, 7], 51, 51, s, [79, 21], t, [51, 7], 130, 51, 51, 127, 128, 51, 51, 90, 91, t, [51, 9], 52, s, [79, 9], t, [52, 4], 126, t, [52, 9], 118, 119, 52, 123, t, [52, 5], s, [79, 16], 52, 52, s, [79, 3], t, [52, 14], 90, 91, t, [52, 9], 53, s, [79, 9], t, [53, 4], 126, t, [53, 9], s, [158, 7], 53, 53, s, [158, 21], t, [53, 7], 130, 53, 53, 127, 128, 53, 53, 90, 91, t, [53, 9], 56, s, [79, 9], t, [56, 4], 126, t, [56, 9], s, [79, 4], 56, 144, 146, 56, 56, s, [79, 21], t, [56, 14], 90, 91, t, [56, 9], t, [199, 15], 571, t, [199, 63], s, [617, 16], 574, s, [618, 48], s, [3415, 10], t, [205, 4], 126, t, [205, 9], s, [302, 7], 205, 205, s, [223, 21], t, [205, 7], 130, 205, 205, 127, 128, 205, 205, 90, 91, t, [205, 9], 201, s, [79, 9], t, [201, 4], 126, t, [201, 9], s, [79, 4], 201, 144, 146, 201, 201, s, [79, 21], t, [201, 14], 90, 91, t, [201, 9], 203, s, [79, 9], t, [203, 4], 126, t, [203, 9], s, [79, 4], 203, 144, 146, 203, 203, s, [79, 21], t, [203, 14], 90, 91, t, [203, 9], 225, s, [79, 9], t, [225, 4], 126, t, [225, 9], s, [237, 7], 225, 225, s, [79, 21], t, [225, 7], 130, 225, 225, 127, 128, 225, 225, 90, 91, t, [225, 9], 575, 576, 577, 356, 374, s, [3879, 5], s, [3851, 6], 249, 113, s, [2704, 29], s, [3793, 8], t, [58, 31], 517, t, [58, 47], 202, s, [213, 9], t, [202, 4], 126, t, [202, 9], s, [213, 4], 202, 144, 146, 202, 202, s, [213, 21], t, [202, 14], 90, 91, t, [202, 9], 204, s, [79, 9], t, [204, 4], 126, t, [204, 9], s, [79, 4], 204, 144, 146, 204, 204, s, [79, 21], t, [204, 14], 90, 91, t, [204, 9], s, [2146, 10], s, [2145, 33], 580, 582, t, [124, 3], s, [1338, 23], s, [6013, 42], s, [113, 9], 121, 126, t, [121, 3], s, [117, 28], 121, 584, s, [1732, 69], s, [226, 10], 586, s, [227, 33], s, [108, 16], 587, s, [109, 48], 115, 589, 590, 115, t, [374, 9], s, [2129, 4], 374, 290, s, [4521, 3], s, [2130, 4], s, [4522, 37], s, [2163, 5], t, [366, 9], 291, 291, s, [3, 4], t, [366, 32], s, [9707, 41], s, [2250, 3], s, [9690, 6], 110, 114, 398, 124, 591, s, [458, 6], s, [3243, 6], 593, s, [3244, 55], 595, 196, 197, t, [125, 3], s, [2012, 3], 597, 598, s, [7306, 82], s, [7241, 176], 604, 605, 607, 606, 124, 124, 609, t, [297, 5], 610, 611, 406, 405, 613, 413, 124, 196, 197, s, [284, 3], s, [3531, 9], 618, 367, s, [651, 9], t, [367, 4], 126, t, [367, 9], s, [663, 7], 367, 367, s, [665, 21], t, [367, 7], 130, 367, 367, 127, 128, 367, 367, 90, 91, t, [367, 9], s, [6629, 71], s, [858, 68], 621, s, [858, 33], s, [44, 10], 622, s, [44, 33], 231, s, [45, 9], t, [231, 4], 126, t, [231, 9], s, [57, 7], 231, 231, s, [59, 21], t, [231, 7], 130, 231, 231, 127, 128, 231, 231, s, [70, 3], t, [231, 8], t, [232, 64], 164, 165, t, [232, 13], s, [4968, 3], s, [749, 66], s, [271, 10], 626, s, [4250, 34], 223, s, [46, 9], t, [223, 4], 126, t, [223, 9], s, [57, 7], 223, 223, s, [59, 21], t, [223, 7], 130, 223, 223, 127, 128, 223, 223, s, [70, 3], t, [223, 8], s, [8565, 320], s, [2117, 29], 633, 356, 504, 374, 504, 356, s, [5, 3], 374, s, [4, 4], 504, s, [4, 3], s, [1493, 6], t, [247, 3], 169, 169, s, [5929, 6], s, [192, 89], s, [5902, 42], 636, 638, 637, 185, 641, 639, 181, 180, 642, t, [55, 9], 185, 55, 643, 181, t, [55, 28], 180, t, [55, 6], s, [762, 76], s, [760, 29], 647, s, [761, 4], 186, 186, s, [11315, 3], s, [8449, 81], s, [76, 14], 242, s, [76, 75], s, [8601, 82], s, [467, 42], s, [410, 66], 215, s, [411, 9], t, [215, 4], 126, t, [215, 9], 118, 119, 215, 123, t, [215, 5], s, [426, 16], 215, 215, s, [426, 3], t, [215, 14], 90, 91, t, [215, 9], t, [374, 11], 185, s, [10667, 11], 655, 181, t, [374, 35], 180, s, [10667, 25], s, [6374, 32], t, [135, 11], 185, t, [135, 5], 170, t, [135, 3], 659, 181, t, [135, 31], 168, 172, 135, 135, 180, t, [135, 13], 171, 135, 135, 110, 114, 135, 135, 19, s, [276, 9], t, [19, 4], 126, t, [19, 9], s, [700, 7], 19, 19, s, [702, 21], t, [19, 7], 130, 19, 19, 127, 128, 19, 19, 90, 91, t, [19, 9], t, [20, 64], 164, 165, t, [20, 13], t, [353, 20], 328, t, [353, 59], t, [354, 20], 328, t, [354, 59], s, [1004, 10], 6, 662, s, [1766, 33], 115, 663, 665, 667, 481, 482, 94, 668, 673, 671, 94, 674, 677, 481, 676, 482, 94, 527, 527, 125, t, [527, 3], 678, 679, s, [1328, 64], 681, 682, 520, s, [137, 9], t, [520, 4], 126, t, [520, 9], 118, 119, 520, 123, t, [520, 5], s, [150, 16], 520, 520, s, [150, 3], t, [520, 14], 90, 91, t, [520, 9], 684, 683, 124, 686, t, [540, 4], 687, 493, 94, s, [652, 4], 125, s, [653, 3], 125, s, [654, 22], 690, 691, 496, 124, 124, 692, 693, 694, 697, 696, 115, 698, 699, 339, s, [134, 9], t, [339, 4], 126, t, [339, 9], s, [282, 7], 339, 339, s, [284, 21], t, [339, 7], 130, 339, 339, 127, 128, 339, 339, 90, 91, t, [339, 9], s, [6169, 16], s, [4892, 3], 701, s, [1172, 76], 152, 153, 298, 299, s, [54, 8], 66, s, [187, 9], t, [66, 4], 126, t, [66, 9], s, [187, 7], 66, 66, s, [187, 21], t, [66, 7], 130, 66, 66, 127, 128, 66, 66, 90, 91, t, [66, 9], s, [167, 5], 707, s, [3117, 124], s, [666, 10], 709, s, [2432, 34], 710, 711, 712, 211, 98, 125, 65, 313, s, [489, 6], s, [5901, 23], s, [5936, 3], 714, s, [150, 5], 287, 182, 287, 65, 99, 287, s, [153, 8], 718, 287, s, [155, 7], 719, s, [11297, 58], 722, s, [1893, 58], 411, 126, 723, s, [5672, 36], 724, 292, 292, 170, t, [292, 3], s, [6972, 5], 725, s, [5864, 9], 415, 542, s, [130, 8], 125, 415, s, [5868, 49], 729, 728, 534, 124, 124, 413, s, [137, 9], 409, 126, t, [409, 4], s, [3111, 42], 412, 126, t, [412, 4], s, [48, 33], 325, 398, 124, 732, 124, s, [4292, 43], 733, s, [822, 3], 125, 125, s, [823, 12], 735, 736, s, [825, 3], 737, 94, s, [24, 3], 740, s, [23, 12], 743, 742, 741, t, [459, 72], 559, t, [459, 6], t, [463, 78], 554, 463, 744, 747, 745, 124, 124, s, [5872, 15], 743, 742, t, [490, 5], 751, 749, 124, 124, 566, 94, 753, s, [280, 43], 754, s, [5289, 65], 756, s, [110, 10], 205, 757, s, [4457, 49], s, [3076, 205], 762, s, [5238, 15], s, [3068, 8], 764, 765, 763, s, [120, 8], 125, s, [858, 9], 125, s, [123, 7], 125, s, [4931, 42], s, [5e3, 4], s, [366, 9], 122, 126, t, [122, 3], s, [368, 28], 122, s, [369, 5], 768, 115, 769, s, [1111, 11], 771, s, [12475, 121], 33, s, [185, 9], t, [33, 4], 126, t, [33, 9], s, [194, 7], 33, 33, s, [196, 21], t, [33, 7], 130, 33, 33, 127, 128, 33, 33, 90, 91, t, [33, 9], s, [145, 66], s, [4516, 5], s, [5, 5], 27, s, [155, 4], t, [27, 9], 126, t, [27, 9], 118, 119, 27, 123, t, [27, 5], s, [155, 8], t, [27, 6], 154, 155, t, [27, 4], 162, t, [27, 25], s, [233, 9], 381, 381, 126, t, [381, 5], s, [1277, 42], 383, 383, 126, t, [383, 5], s, [50, 42], 388, 388, 126, t, [388, 5], s, [50, 33], 388, 779, t, [389, 7], 781, 780, 125, 125, s, [11063, 4], 783, 784, 295, 196, 295, 197, t, [295, 3], 787, 195, 786, s, [11181, 65], 789, 790, s, [11142, 3], 415, 542, s, [333, 3], 793, s, [2207, 16], s, [2572, 11], 795, s, [166, 33], 369, s, [46, 9], t, [369, 4], 126, t, [369, 9], s, [57, 7], 369, 369, s, [59, 21], t, [369, 7], 130, 369, 369, 127, 128, 369, 369, s, [70, 3], t, [369, 8], 220, s, [79, 9], t, [220, 4], 126, t, [220, 9], s, [79, 7], 220, 220, s, [79, 21], t, [220, 7], 130, 220, 220, 127, 128, 220, 220, 90, 91, t, [220, 9], s, [294, 5], t, [260, 7], 98, 260, 65, 260, s, [303, 4], 260, s, [304, 5], 260, 45, t, [260, 5], 88, 260, 260, s, [312, 4], t, [260, 19], 73, 260, 260, 54, 260, 50, 260, s, [335, 3], 260, 260, s, [337, 7], 260, s, [338, 29], 224, s, [187, 9], t, [224, 4], 126, t, [224, 9], s, [187, 7], 224, 224, s, [187, 21], t, [224, 7], 130, 224, 224, 127, 128, 224, 224, 90, 91, t, [224, 9], s, [78, 9], 797, s, [1556, 34], s, [1599, 38], 798, s, [44, 14], 185, 126, 800, s, [8473, 35], s, [47, 11], 802, s, [47, 35], t, [247, 3], 804, 805, 806, t, [247, 3], s, [3579, 30], s, [85, 8], 146, 146, s, [178, 29], 146, s, [84, 5], 638, 808, s, [3957, 72], s, [4024, 128], 457, 455, 814, s, [3, 3], s, [4506, 76], 183, 183, s, [1985, 38], s, [3178, 71], t, [190, 4], 518, 190, 190, t, [191, 4], 518, 191, 191, t, [192, 4], 518, 192, 192, 638, 819, 213, s, [145, 9], t, [213, 4], 126, t, [213, 9], 118, 119, 213, 123, t, [213, 5], s, [158, 16], 213, 213, s, [158, 3], t, [213, 14], 90, 91, t, [213, 9], s, [289, 66], t, [134, 11], 185, t, [134, 5], 170, t, [134, 3], 823, 181, t, [134, 31], 168, 172, 134, 134, 180, t, [134, 13], 171, 134, 134, 110, 114, s, [68, 3], 181, 180, 825, 827, 665, 828, 94, 831, 830, 124, 833, t, [553, 4], 834, 835, s, [3835, 3], 665, s, [3843, 3], 839, s, [2489, 43], 840, 125, 493, 94, 842, t, [537, 4], 844, 94, 845, 94, 684, 124, 847, s, [802, 29], s, [29, 29], s, [1457, 3], 852, 851, s, [1458, 12], 697, 854, 442, 856, 861, 859, 442, 442, 860, 862, s, [2850, 3], 863, 185, 357, 865, 181, 180, t, [62, 32], 518, t, [62, 46], s, [1647, 64], 236, s, [297, 9], t, [236, 4], 126, t, [236, 9], s, [310, 7], 236, 236, s, [312, 21], t, [236, 7], 130, 236, 236, 127, 128, 236, 236, 90, 91, t, [236, 9], t, [238, 64], 164, 165, t, [238, 13], s, [13124, 68], s, [225, 9], 869, 126, s, [3752, 34], s, [1688, 108], s, [9755, 31], s, [31, 31], 873, 711, 712, s, [218, 9], 278, 278, 126, t, [278, 3], s, [3122, 49], s, [6894, 49], s, [113, 9], 281, 281, 126, t, [281, 3], s, [113, 98], 876, s, [66, 8], 416, s, [67, 8], 416, s, [3239, 53], s, [9843, 66], s, [66, 61], 879, s, [3684, 15], s, [15, 15], 882, s, [1053, 3], 883, s, [20, 15], 885, s, [16, 3], 888, 887, s, [53, 15], 891, 890, s, [17, 12], 892, 893, s, [3978, 17], 747, 124, 124, 895, 896, 897, 125, 125, 566, 94, 751, 124, 124, 899, 486, 348, 486, 341, 347, 901, 902, 486, s, [34, 12], s, [3749, 65], s, [1369, 10], s, [3747, 34], 159, s, [45, 9], t, [159, 4], 126, t, [159, 9], s, [57, 4], 159, 144, 146, 159, 159, s, [59, 21], t, [159, 14], s, [70, 3], t, [159, 8], 160, s, [79, 9], t, [160, 4], 126, t, [160, 9], s, [79, 4], 160, 144, 146, 160, 160, s, [79, 21], t, [160, 14], 90, 91, t, [160, 9], s, [2323, 38], s, [8622, 65], s, [65, 65], 764, 765, 908, 909, s, [1914, 66], 29, s, [317, 9], t, [29, 4], 126, t, [29, 9], s, [453, 7], 29, 29, s, [317, 21], t, [29, 7], 130, 29, 29, 127, 128, 29, 29, 90, 91, t, [29, 9], 34, s, [79, 9], t, [34, 4], 126, t, [34, 9], s, [79, 7], 34, 34, s, [79, 21], t, [34, 7], 130, 34, 34, 127, 128, 34, 34, 90, 91, t, [34, 9], 26, s, [79, 4], t, [26, 9], 126, t, [26, 9], 118, 119, 26, 123, t, [26, 5], s, [79, 8], t, [26, 6], 154, 155, t, [26, 4], 162, t, [26, 25], 398, s, [9063, 26], s, [375, 41], s, [3546, 4], s, [4, 4], s, [72, 64], t, [300, 5], 406, 405, s, [304, 9], 298, 298, 126, t, [298, 3], s, [828, 33], 196, 197, 416, s, [3588, 3], s, [3596, 3], s, [6, 3], s, [1056, 3], 918, 221, s, [65, 9], t, [221, 4], 126, t, [221, 9], s, [73, 7], 221, 221, s, [75, 21], t, [221, 7], 130, 221, 221, 127, 128, 221, 221, 90, 91, t, [221, 9], s, [16247, 199], s, [9007, 125], s, [1089, 9], 638, 927, s, [1302, 10], 177, 177, s, [3065, 109], s, [121, 10], 180, 180, s, [121, 33], 185, 185, 517, 928, 218, s, [50, 9], t, [218, 4], 126, t, [218, 9], 118, 119, 218, 123, t, [218, 5], s, [63, 16], 218, 218, s, [63, 3], t, [218, 14], 90, 91, t, [218, 9], s, [2946, 3], 930, 665, 94, 665, 125, s, [2936, 3], 935, t, [548, 4], 937, t, [94, 3], 831, 124, 940, 941, 942, 94, 493, 94, 94, 946, s, [6587, 3], 947, t, [450, 8], 743, 742, t, [450, 69], s, [1867, 30], 950, 952, 951, 124, 124, 442, s, [2931, 5], s, [13516, 3], 956, 444, 957, 444, 444, 185, 357, s, [9278, 4], 181, 180, 64, s, [249, 9], t, [64, 4], 126, t, [64, 9], s, [310, 7], 64, 64, s, [312, 21], t, [64, 7], 130, 64, 64, 127, 128, 64, 64, 90, 91, t, [64, 9], s, [78, 9], 960, s, [2647, 35], 961, s, [19542, 3], 237, s, [50, 9], t, [237, 4], 126, t, [237, 9], s, [61, 7], 237, 237, s, [63, 21], t, [237, 7], 130, 237, 237, 127, 128, 237, 237, 90, 91, t, [237, 9], s, [6445, 3], 962, s, [4625, 11], 963, s, [4236, 43], 6, 964, s, [675, 38], s, [861, 11], 966, s, [861, 49], s, [6331, 4], 969, 970, s, [1210, 3], 971, 972, t, [453, 72], 559, t, [453, 6], s, [514, 30], t, [454, 72], 559, t, [454, 6], s, [109, 30], s, [15, 30], 743, 742, t, [493, 5], 979, 566, 94, 566, 94, 982, 743, 742, t, [483, 5], s, [50, 30], 985, s, [1171, 73], s, [5857, 4], 989, 30, s, [500, 9], t, [30, 4], 126, t, [30, 9], s, [511, 7], 30, 30, s, [513, 21], t, [30, 7], 130, 30, 30, 127, 128, 30, 30, 90, 91, t, [30, 9], 597, 598, 990, s, [81, 9], 390, 390, 126, t, [390, 5], s, [586, 33], 390, 991, s, [52, 9], 296, 296, 126, t, [296, 3], s, [1190, 34], s, [945, 4], s, [4831, 11], 994, s, [4878, 46], 996, s, [47, 35], 157, s, [48, 9], t, [157, 4], 126, t, [157, 9], 118, 119, 157, 123, t, [157, 5], s, [60, 16], 157, s, [60, 4], t, [157, 14], s, [70, 3], t, [157, 8], 158, s, [79, 9], t, [158, 4], 126, t, [158, 9], 118, 119, 158, 123, t, [158, 5], s, [79, 16], t, [158, 3], 159, 162, t, [158, 14], 90, 91, t, [158, 9], s, [205, 11], 997, s, [13603, 51], s, [564, 48], 1e3, 1001, 1002, 665, 1004, s, [1472, 3], 94, 1007, 1008, 665, 665, 743, 742, 1011, t, [452, 8], 743, 742, t, [452, 69], 125, 442, 125, s, [1424, 5], 1013, 1014, 952, 124, 124, 1015, 445, s, [4389, 4], s, [755, 12], 1019, s, [238, 9], 284, 284, 126, t, [284, 3], s, [3669, 98], 1021, 1022, 1023, 559, t, [457, 72], s, [73, 7], 1024, 559, t, [458, 72], s, [73, 7], 743, 742, t, [491, 5], 743, 742, 1025, 1026, 743, 742, t, [484, 5], 743, 742, 1027, 164, s, [299, 9], t, [164, 4], 126, t, [164, 9], s, [307, 4], 164, 144, 146, 164, 164, s, [309, 21], t, [164, 14], 90, 91, t, [164, 9], s, [568, 64], 764, 765, 1029, s, [2502, 137], s, [5558, 70], 185, 126, 1036, s, [880, 35], 1038, 1039, 1040, s, [2146, 6], s, [6, 6], 1043, 328, 743, 742, t, [440, 5], s, [729, 15], s, [1904, 11], 1046, s, [725, 33], 168, s, [46, 9], t, [168, 4], 126, t, [168, 9], s, [57, 4], 168, 144, 146, 168, 168, s, [59, 21], t, [168, 14], s, [70, 3], t, [168, 8], 149, s, [79, 9], t, [149, 4], 126, t, [149, 9], 118, 119, 149, 123, t, [149, 5], s, [79, 16], 149, 149, s, [79, 3], t, [149, 14], 90, 91, t, [149, 9], 152, s, [79, 9], t, [152, 4], 126, t, [152, 9], 118, 119, 152, 123, t, [152, 5], s, [79, 16], 152, 152, s, [79, 3], t, [152, 14], 90, 91, t, [152, 9], 161, s, [79, 9], t, [161, 4], 126, t, [161, 9], 118, 119, 161, 123, t, [161, 5], s, [79, 16], 161, 161, s, [79, 3], t, [161, 14], 90, 91, t, [161, 9], s, [513, 66], t, [1049, 5, 1], 743, 742, t, [441, 5], 165, s, [157, 9], t, [165, 4], 126, t, [165, 9], 118, 119, 165, 123, t, [165, 5], s, [157, 16], 165, 165, s, [157, 3], t, [165, 14], 90, 91, t, [165, 9], s, [2067, 17], t, [439, 5]])
            }),
            defaultActions: function (e) {
              for (var t = {}, s = e.idx, i = e.goto, n = 0, r = s.length; n < r; n++) t[s[n]] = i[n];

              return t;
            }({
              idx: i([3, 6, t, [8, 10, 1], 20, 21, 22, 24, 25, t, [31, 8, 1], 46, 53, 62, 63, 64, t, [66, 7, 1], t, [79, 9, 1], 90, 91, t, [94, 4, 1], t, [100, 4, 1], t, [106, 6, 1], 116, 118, 119, 124, t, [131, 13, 1], 145, t, [147, 16, 1], 166, 167, 169, 173, 174, 179, 184, 188, 189, 190, 198, 203, 204, 205, 209, 221, 223, 224, 225, 244, 255, 258, 259, 262, 263, 267, 268, 271, 279, 283, 285, 290, 298, 299, 302, 305, 306, 309, 316, 318, 321, 327, 329, 330, 331, 333, 335, 338, t, [343, 4, 1], 350, 352, 353, 360, 371, 372, 376, 377, 378, 380, 383, 387, 389, 403, 405, 409, 410, 414, 416, 417, 424, 425, 428, 433, 448, 454, 459, 461, 464, 467, 471, 472, 480, 492, 500, 503, 504, 506, 507, 509, 511, 512, 513, 516, 520, 532, 536, 539, 541, 543, 544, 546, 547, 549, 558, 565, 567, 568, 569, 580, 584, 586, 589, 590, 592, 596, 599, 606, 615, 616, 617, t, [621, 4, 1], 637, 640, 644, 646, t, [652, 5, 2], 661, 662, 663, 665, 670, 678, 679, 681, 682, 683, 689, 692, 693, 695, 699, 704, 710, 713, 717, 719, 721, 724, 725, 726, t, [731, 4, 1], 738, 744, 745, 749, 754, 755, 757, 763, 766, 768, 770, t, [773, 5, 2], 782, 785, 789, 790, 791, 795, 799, 801, 804, 805, t, [806, 4, 2], 813, 815, 817, 820, 822, 824, 825, 830, 840, 841, 843, 845, 846, 848, 854, 857, 861, 862, 864, 869, 871, 873, 878, 880, 882, 883, 898, 906, 909, 910, 914, 917, 921, 923, 928, 929, 934, 936, 938, 939, t, [944, 4, 1], 950, 951, t, [958, 7, 1], 967, 969, 970, 972, 979, 980, 982, 985, t, [989, 5, 1], 995, 998, 1e3, 1001, 1002, t, [1004, 5, 1], 1011, 1012, 1017, t, [1021, 7, 1], 1029, 1030, 1032, 1035, 1037, 1041, 1043, 1046, t, [1048, 5, 1]]),
              goto: i([5, 8, t, [10, 9, 1], 418, 423, 424, 425, 428, 429, t, [248, 8, 1], 55, 366, 375, 376, 377, t, [301, 7, 1], 259, t, [67, 8, 1], 226, 227, 384, 496, 497, 498, 308, 309, 317, 318, 343, 344, 242, 243, 310, 311, 38, 48, 49, 54, t, [75, 13, 1], 89, t, [91, 16, 1], 378, 107, 112, 419, 421, 336, 35, 361, 365, 379, 36, 371, 372, 373, 247, 197, 244, 245, 246, 129, 518, 522, 524, 543, 544, 499, 503, 447, 108, 325, 338, 333, 88, 90, 228, 211, 265, 268, 291, 397, 403, 355, 340, 341, 342, 320, 323, 470, 460, 461, 462, 464, 313, 316, 3, 57, 60, 61, 109, 113, 393, 114, 117, 137, 138, 387, 386, 264, 273, 395, 400, 407, 370, 111, 230, 222, 175, 187, 209, 214, 127, 130, 21, 347, 529, 534, 449, 260, 261, 110, 257, 337, 326, 327, 329, 350, 234, 293, 414, 410, 416, 351, 359, 319, 321, 357, 465, 482, 487, 312, 314, 394, 123, 427, 140, 142, 31, 362, 25, 263, 408, 328, 331, 45, 47, 233, 219, 172, 179, 182, 184, 212, 216, 128, 133, 349, 348, 507, 508, 517, 545, 528, 519, 523, 525, 532, 500, 495, 448, 430, 258, 235, 266, 269, 279, 289, 282, 288, 398, 404, 417, 360, 322, 471, 475, 467, 488, 477, 315, 198, 206, 115, 118, 139, 23, 32, 24, 363, 392, 391, 274, 294, 299, 396, 401, 368, 153, 154, 193, 194, 195, 171, 176, 178, 188, 189, 181, 217, 131, 136, 509, 530, 521, 535, 538, 541, 542, 501, 432, 435, 443, 262, 334, 239, 270, 267, 406, 472, 358, 468, 480, 119, 141, 28, 275, 402, 155, 156, 174, 132, 546, 549, 551, 552, 536, 539, 533, 502, 431, 433, 330, 335, 240, 241, 271, 280, 283, 286, 399, 473, 466, 489, 479, 478, 200, 116, 364, 276, 332, 147, 150, 163, 173, 511, 512, 514, 547, 550, 531, 510, 451, 436, 446, 405, 469, 455, 456, 492, 481, 485, 120, 148, 151, 162, 167, 437, 434, 285, 166, 516, 513, 515, 438])
            }),
            parseError: function (e, t, s) {
              if (!t.recoverable) throw "function" == typeof this.trace && this.trace(e), s || (s = this.JisonParserError), new s(e, t);
              "function" == typeof this.trace && this.trace(e), t.destroy();
            },
            parse: function (e) {
              var t,
                  s,
                  i = this,
                  n = new Array(128),
                  r = new Array(128),
                  l = new Array(128),
                  a = new Array(128),
                  o = this.table,
                  c = 0,
                  p = 0,
                  _ = (this.TERROR, this.EOF),
                  u = (this.options.errorRecoveryTokenDiscardCount, [0, 1055]);

              s = this.__lexer__ ? this.__lexer__ : this.__lexer__ = Object.create(this.lexer);
              var f = {
                parseError: void 0,
                quoteName: void 0,
                lexer: void 0,
                parser: void 0,
                pre_parse: void 0,
                post_parse: void 0,
                pre_lex: void 0,
                post_lex: void 0
              };

              function h(e) {
                if ("object" == typeof e) {
                  var t = {};

                  for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);

                  return t;
                }

                return e;
              }

              function m(e, t) {
                for (var s in t) void 0 === e[s] && Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
              }

              function y(e) {
                var t = h(e);
                return t && t.range && (t.range = t.range.slice(0)), t;
              }

              "function" != typeof assert || assert, this.yyGetSharedState = function () {
                return f;
              }, m(f, this.yy), f.lexer = s, f.parser = this, "function" == typeof f.parseError ? this.parseError = function (e, t, s) {
                return s || (s = this.JisonParserError), f.parseError.call(this, e, t, s);
              } : this.parseError = this.originalParseError, "function" == typeof f.quoteName ? this.quoteName = function (e) {
                return f.quoteName.call(this, e);
              } : this.quoteName = this.originalQuoteName, this.cleanupAfterParse = function (e, t, i) {
                var o, p;

                if (t && ((f.post_parse || this.post_parse) && (p = this.constructParseErrorInfo(null, null, null, !1)), f.post_parse && void 0 !== (o = f.post_parse.call(this, f, e, p)) && (e = o), this.post_parse && void 0 !== (o = this.post_parse.call(this, f, e, p)) && (e = o), p && p.destroy && p.destroy()), s.cleanupAfterLex && s.cleanupAfterLex(i), f && (f.lexer = void 0, f.parser = void 0, s.yy === f && (s.yy = void 0)), f = void 0, this.parseError = this.originalParseError, this.quoteName = this.originalQuoteName, n.length = 0, r.length = 0, a.length = 0, l.length = 0, c = 0, !i) {
                  for (var _ = this.__error_infos.length - 1; _ >= 0; _--) {
                    var u = this.__error_infos[_];
                    u && "function" == typeof u.destroy && u.destroy();
                  }

                  this.__error_infos.length = 0;
                }

                return e;
              }, this.yyMergeLocationInfo = function (e, t, s, i, n) {
                var r,
                    l = 0 | e,
                    o = 0 | t,
                    p = s,
                    _ = i;
                if (!p && null != e) for (var u = l; u <= o && !(p = a[u]); u++);
                if (!_ && null != t) for (u = o; u >= l && !(_ = a[u]); u--);

                if (!p && null == e) {
                  if (!n) for (u = (l || c) - 1; u >= 0 && !(p = a[u]); u--);
                  return p ? ((r = h(p)).first_line = r.last_line, r.first_column = r.last_column, r.range && (r.range = r.range.slice(0), r.range[0] = r.range[1]), _ && (m(r, _), r.last_line = _.last_line, r.last_column = _.last_column, r.range && _.range && (r.range[1] = _.range[1])), r) : _ ? ((r = h(_)).range && (r.range = r.range.slice(0)), r) : void 0;
                }

                if (p || (p = _, _ = null), p) return (r = h(p)).range && (r.range = r.range.slice(0)), _ && (m(r, _), r.last_line = _.last_line, r.last_column = _.last_column, r.range && _.range && (r.range[1] = _.range[1])), r;
              }, this.constructParseErrorInfo = function (e, t, i, o) {
                var _ = {
                  errStr: e,
                  exception: t,
                  text: s.match,
                  value: s.yytext,
                  token: this.describeSymbol(p) || p,
                  token_id: p,
                  line: s.yylineno,
                  loc: y(s.yylloc),
                  expected: i,
                  recoverable: o,
                  state: d,
                  action: E,
                  new_state: O,
                  symbol_stack: n,
                  state_stack: r,
                  value_stack: l,
                  location_stack: a,
                  stack_pointer: c,
                  yy: f,
                  lexer: s,
                  parser: this,
                  destroy: function () {
                    var e = !!this.recoverable;

                    for (var t in this) this.hasOwnProperty(t) && "object" == typeof t && (this[t] = void 0);

                    this.recoverable = e;
                  }
                };
                return this.__error_infos.push(_), _;
              };

              var d,
                  E,
                  g,
                  $,
                  I,
                  T,
                  N,
                  O,
                  k = function () {
                var e = s.lex();
                return "number" != typeof e && (e = i.symbols_[e] || e), e || _;
              },
                  L = {
                $: !0,
                _$: void 0,
                yy: f
              },
                  b = !1;

              for (s.setInput(e, f), "function" == typeof s.canIUse && s.canIUse().fastLex && (k = function () {
                var e = s.fastLex();
                return "number" != typeof e && (e = i.symbols_[e] || e), e || _;
              }), t = s.yylloc, a[c] = t, l[c] = null, r[c] = 0, n[c] = 0, ++c, this.pre_parse && this.pre_parse.call(this, f), f.pre_parse && f.pre_parse.call(this, f), O = r[c - 1];;) {
                if (d = O, this.defaultActions[d]) E = 2, O = this.defaultActions[d];else if (p || (p = k()), $ = o[d] && o[d][p] || u, O = $[1], !(E = $[0])) {
                  var A,
                      S = this.describeSymbol(p) || p,
                      v = this.collect_expected_token_set(d);
                  A = "number" == typeof s.yylineno ? "Parse error on line " + (s.yylineno + 1) + ": " : "Parse error: ", "function" == typeof s.showPosition && (A += "\n" + s.showPosition(69, 10) + "\n"), v.length ? A += "Expecting " + v.join(", ") + ", got unexpected " + S : A += "Unexpected " + S, I = this.constructParseErrorInfo(A, null, v, !1), void 0 !== (g = this.parseError(I.errStr, I, this.JisonParserError)) && (b = g);
                  break;
                }

                switch (E) {
                  default:
                    if (E instanceof Array) {
                      I = this.constructParseErrorInfo("Parse Error: multiple actions possible at state: " + d + ", token: " + p, null, null, !1), void 0 !== (g = this.parseError(I.errStr, I, this.JisonParserError)) && (b = g);
                      break;
                    }

                    I = this.constructParseErrorInfo("Parsing halted. No viable error recovery approach available due to internal system failure.", null, null, !1), void 0 !== (g = this.parseError(I.errStr, I, this.JisonParserError)) && (b = g);
                    break;

                  case 1:
                    n[c] = p, l[c] = s.yytext, a[c] = y(s.yylloc), r[c] = O, ++c, p = 0, t = s.yylloc;
                    continue;

                  case 2:
                    if (T = (N = this.productions_[O - 1])[1], void 0 !== (g = this.performAction.call(L, t, O, c - 1, l, a))) {
                      b = g;
                      break;
                    }

                    c -= T;
                    var x = N[0];
                    n[c] = x, l[c] = L.$, a[c] = L._$, O = o[r[c - 1]][x], r[c] = O, ++c;
                    continue;

                  case 3:
                    -2 !== c && (b = !0, c--, void 0 !== l[c] && (b = l[c]));
                }

                break;
              }

              return this.cleanupAfterParse(b, !0, !0);
            }
          };

          function r() {
            this.yy = {};
          }

          return n.originalParseError = n.parseError, n.originalQuoteName = n.quoteName, r.prototype = n, n.Parser = r, new r();
        }();

        t.parser = s, t.Parser = s.Parser, t.parse = function () {
          return s.parse.apply(s, arguments);
        };
      },
      258: e => {
        const t = {};

        let s = {},
            i = function (e, s) {
          t[e] = [];

          for (let [i, ...n] of s) {
            let s;
            t[e].push([i, "$$ = " + function () {
              let t = i.split(" ").length,
                  r = `new yy["${e}"]("${i}", ...[$1]).setLocation({ first_line: @1.first_line, first_column: @1.first_column, last_line: @${t}.last_line, last_column: @${t}.last_column, src: @1.src, type: @1.type })`;
              if (!n.length) return n = [r];
              s = "object" == typeof n[n.length - 1] ? n.pop() : {}, s = Object.assign({
                first: 1,
                last: t,
                typeOf: 1,
                checkGenerated: !1
              }, s);
              let l = n.pop();
              return l || (l = r), n.push("function" == typeof l ? l.toString().replace(/new /g, "new yy.").replace(/Block\.wrap\(/g, "yy.Block.wrap(").replace(/function\s*\(\)\s*\{\s*(?:return)?(.*)\s*\}|\(\)\s*=>\s*\{?\s*(?:return)?(.*)\s*\}?/i, "$1").trim() : `Object.assign(new yy["${e}"]("${i}", ...[${l}]), { rule: "${i}", loc: { first_line: @${s.first}.first_line, first_column: @${s.first}.first_column, last_line: @${s.last}.last_line, last_column: @${s.last}.last_column, src: @${s.first}.src${void 0 === s.typeOf || 0 !== s.typeOf ? `, type: @${s.typeOf || "1"}.type` : ""} } }, ${s ? JSON.stringify(Object.assign(s)) : "{}"}, { generated: ${s.checkGenerated ? `@${s.checkGenerated}.generated` : "undefined"} })`), n;
            }().join(" && "), s || {}]);
          }
        };

        i("Root", [["", "'EMPTY'"], ["Body"]]), i("Body", [["Body NEWLINE Line", "$1.push($3)"], ["Body NEWLINE"], ["Line", "[$1]"]]), t.Body[0][1] = "($1[1] = [...$1[1], Object.assign($3, { lineCount: $2 })]) && Object.assign($1, { loc: { first_line: @1.first_line, last_line: @3.last_line, first_column: @1.first_column, last_column: @3.last_column } })", t.Body[1][1] = "$$ = Object.assign($1[1][$1[1].length - 1], { lineCount: $2 }) && Object.assign($1, { loc: { first_line: @1.first_line, last_line: @2.last_line, first_column: @1.first_column, last_column: @2.last_column } })", i("Line", [["Expression"], ["Statement"]]), i("Expression", [["Code"], ["Value"], ["Operation"], ["If"], ["While"], ["For"], ["Switch"], ["TryBlock"], ["Assign"], ["Class"], ["Label"]]), i("Label", [["Identifier :: Expression", "$1, yy.Block.wrap($3)"], ["Identifier :: Statement", "$1, yy.Block.wrap($3)"], ["Identifier :: Block", "$1, $3"]]), i("Code", [["FUNC_DIRECTIVE Expression", "null, $1, $2"], ["WITHIN PARAM_START ParamList PARAM_END Block", "$3, '=>', $5"], ["PARAM_START ParamList PARAM_END FUNC_DIRECTIVE Block", "$2, $4, $5"], ["PARAM_START PARAM_END FUNC_DIRECTIVE Block", "null, $3, $4"], ["PARAM_START ParamList PARAM_END FUNC_DIRECTIVE Expression", "$2, $4, $5"], ["PARAM_START PARAM_END FUNC_DIRECTIVE Expression", "null, $3, $4"], ["WITHIN PARAM_START ParamList PARAM_END THEN Block", "$3, '=>', $5"], ["WITHIN PARAM_START ParamList PARAM_END Expression", "$3, '=>', $5"], ["WITHIN PARAM_START ParamList PARAM_END THEN Expression", "$3, '=>', $6"], ["WITHIN PARAM_START PARAM_END Block", "null, '=>', $4"], ["WITHIN PARAM_START PARAM_END THEN Block", "null, '=>', $5"], ["WITHIN PARAM_START PARAM_END Expression", "null, '=>', $4"], ["WITHIN PARAM_START PARAM_END THEN Expression", "null, '=>', $5"], ["WITHIN Block", "null, '=>', $2"], ["ASYNC Code", "...$2.contents", {
          async: !0
        }]]), i("Operation", [["MathPrefix Expression", "$1, $2"], ["Expression MathPostfix", "$1, $2"], ["Expression Operator Expression", "$1, $2, $3"], ["@ Value", "$2"], ["DO Expression", "$2"], ["WHETHER Expression", "$2"], ["TYPEOF Expression", "$2"], ["AWAIT Expression", "$2"], ["AWAIT INDENT Expression OUTDENT", "$3"], ["YIELD Expression", "$2"], ["YIELD INDENT Expression OUTDENT", "$3"], ["Expression EXISTS", "$1"], ["Expression SYMBOL_EXISTS", "$1"], ["Expression Compare Expression", "$1, $2, $3"], ["Expression Logical Expression", "$1, $2, $3"], ["Expression INCLUDES Expression", "$1, $3"], ["Expression MATH_BIN Expression", "$1, $2, $3"], ["Expression Multicheck", "$1, $2.contents"], ["Multicondition", "null, $1.contents"], ["Expression CHAIN Expression", "$1, $3, /then\\?|\\?>/.test($2.origin || '')"], ["Expression CHAIN Block", "$1, $3, /then\\?|\\?>/.test($2.origin || '')"]]), i("Multicheck", [["MulticheckCombinations MulticheckClauses", "$1.rule, $2"]]), i("Multicondition", [["EITHER MulticheckClauses", "$1, $2"]]), i("MulticheckCombinations", [["IS EITHER"], ["ISNT EITHER"]]), i("MulticheckClauses", [["MulticheckClauses EITHER_OR Clause", "...$1.contents, $3"], ["Clause", "$1"]]), i("Clause", [["Clause COMPOUND_AND Compare Expression", "...$1.contents, [$4, $3]"], ["Expression", "[$1]"], ["Compare Expression", "[$2, $1]"]]), i("MathPrefix", [["++"], ["--"], ["+"], ["-"], ["~"], ["~~"], ["NOT"], ["!"]]), i("MathPostfix", [["++"], ["--"]]), i("Operator", [["*"], ["**"], ["+"], ["PLUS"], ["-"], ["DIVISION"], ["%"], ["<<"], [">>"], [">>>"], ["^"]]), i("Compare", [["IS"], ["==="], ["ISNT"], ["!=="], ["=="], ["!="], [">="], ["<="], [">"], ["<"], ["IN"], ["INSTANCEOF"]]), i("Logical", [["AND"], ["OR"], ["||"], ["&&"], ["|"], ["&"], ["??"]]), i("Invocation", [["Value Arguments", "$1, $2"], ["SUPER Arguments", "$1, $2"], ["Value FUNC_EXISTS Arguments", "$1, $3", {
          soak: !0
        }], ["SUPER FUNC_EXISTS Arguments", "$1, $3", {
          soak: !0
        }], ["@ SUPER", "$2, new yy.Arguments(null)"], ["Value String", "$1, $2", {
          templ: !0
        }], ["Value FUNC_EXISTS String", "$1, $3", {
          templ: !0,
          soak: !0
        }]]), i("Arguments", [["CALL_START CALL_END", "/* */"], ["CALL_START ArgList OptComma CALL_END", "$2"], ["CALL_START INDENT ArgList OptComma OUTDENT CALL_END", "$3", {
          indented: !0
        }]]), i("ArgList", [["Arg"], ["ArgList , Arg", "...$1.contents, $3"], ["ArgList OptComma NEWLINE Arg", "...$1.contents, @3.generated, $4"], ["ArgList OptComma INDENT ArgList OptComma OUTDENT", "...$1.contents, false, ...$4.contents"]]), i("Arg", [["Expression"], ["... Expression", "$2", {
          expansion: !0
        }], ["Expression ...", "$1", {
          expansion: !0
        }]]), i("OptComma", [[""], [","]]), i("Class", [["CLASS Identifier", "$2, false, false"], ["CLASS Identifier Block", "$2, false, $3[1]"], ["CLASS Identifier THEN Block", "$2, false, $4[1]"], ["CLASS Block", "undefined, false, $2[1]"], ["CLASS THEN Block", "undefined, false, $3[1]"], ["CLASS Identifier EXTENDS Value Block", "$2, $4, $5[1]"], ["CLASS Identifier EXTENDS Value THEN Block", "$2, $4, $6[1]"], ["CLASS EXTENDS Value Block", "undefined, $3, $4[1]"], ["CLASS Identifier EXTENDS Value", "$2, $4,false"], ["CLASS EXTENDS Value", "undefined, $3,false"], ["CLASS EXTENDS Value THEN Block", "undefined, $3, $5[1]"]]), i("Block", [["{{ }}", "yy.Block.wrap()"], ["INDENT OUTDENT", "yy.Block.wrap()"], ["{{ INDENT OUTDENT }}", "yy.Block.wrap()"], ["INDENT Body OUTDENT", "$2"], ["{{ INDENT Body OUTDENT }}", "$3"], ["{ Body }", "$2"]]), i("ForExpression", [["JointExpression"], ["Declare"]]), i("JointExpression", [["Expression"], ["JointExpression , Expression", "...$1.contents, $3"]]), i("For", [["FOR ForExpression ; Expression ; Expression Block", "[$2, $4, $6], $7"], ["FOR ForExpression ; Expression ; Expression THEN Block", "[$2, $4, $6], $8"], ["FOR ForExpression ; Expression ; Expression THEN Expression", "[$2, $4, $6], yy.Block.wrap($8)"], ["FOR ForExpression WHEN Expression WHILST Expression Block", "[$2, $4, $6], $7"], ["FOR ForExpression WHEN Expression WHILST Expression THEN Block", "[$2, $4, $6], $8"], ["FOR ForExpression WHEN Expression WHILST Expression THEN Expression", "[$2, $4, $6], yy.Block.wrap($8)"], ["FOR ForAssignable FOR_OF Expression Block", "[$2[1], $3, $4], $5, $2[2]"], ["FOR ForAssignable FOR_IN Expression Block", "[$2[1], $3, $4], $5, $2[2]"], ["FOR ForAssignable FOR_OF Expression THEN Block", "[$2[1], $3, $4], $6, $2[2]"], ["FOR ForAssignable FOR_IN Expression THEN Block", "[$2[1], $3, $4], $6, $2[2]"], ["FOR ForAssignable FOR_OF Expression THEN Expression", "[$2[1], $3, $4], yy.Block.wrap($6), $2[2]"], ["FOR ForAssignable FOR_IN Expression THEN Expression", "[$2[1], $3, $4], yy.Block.wrap($6), $2[2]"], ["Expression POSTFOR ForAssignable FOR_OF Expression", "[$3[1], $4, $5], yy.Block.wrap($1), $3[2]"], ["Expression POSTFOR ForAssignable FOR_IN Expression", "[$3[1], $4, $5], yy.Block.wrap($1), $3[2]"], ["FOR Identifier , Assignable ForAny Expression THEN Expression", "[[$2, $4], $5, $6], yy.Block.wrap($8)"], ["FOR Identifier , Assignable ForAny Expression THEN Block", "[[$2, $4], $5, $6], $8"], ["FOR Identifier , Assignable ForAny Expression Block", "[[$2, $4], $5, $6], $7"], ["Expression POSTFOR Identifier , Assignable ForAny Expression", "[[$3, $5], $6, $7], yy.Block.wrap($1)"], ["FOR DeclarationKeyword Identifier , Assignable ForAny Expression THEN Expression", "[[$3, $5], $6, $7], yy.Block.wrap($9), $2"], ["FOR DeclarationKeyword Identifier , Assignable ForAny Expression THEN Block", "[[$3, $5], $6, $7], $8, $2"], ["FOR DeclarationKeyword Identifier , Assignable ForAny Expression Block", "[[$3, $5], $6, $7], $8, $2"], ["Expression POSTFOR DeclarationKeyword Identifier , Assignable ForAny Expression", "[[$4, $6], $7, $8], yy.Block.wrap($1), $3"]]), i("ForAssignable", [["DeclarationKeyword Assignable", "$2, $1"], ["Assignable", "$1"]]), i("Switch", [["SWITCH Expression INDENT Cases OUTDENT", "$2, $4"], ["SWITCH INDENT Cases OUTDENT", "false, $3"], ["SWITCH Expression {{ INDENT Cases OUTDENT }}", "$2, $5"], ["SWITCH {{ INDENT Cases OUTDENT }}", "false, $4"]]), i("Cases", [["Case"], ["Cases NEWLINE Case", "...$1.contents, $3"]]), i("Case", [["Clauses THEN Expression", "$1, yy.Block.wrap($3)"], ["Clauses THEN Block", "$1, $3.unwrap"], ["Clauses Block", "$1, $2.unwrap"], ["Multicondition THEN Expression", "$1, yy.Block.wrap($3)"], ["Multicondition THEN Block", "$1, $3.unwrap"], ["Multicondition Block", "$1, $2.unwrap"], ["DEFAULT Expression", "false, yy.Block.wrap($2)"], ["DEFAULT Block", "false, $2.unwrap"], ["Expression POSTCASE MulticheckClauses", "$3, yy.Block.wrap($1)"], ["BREAK"]]), i("Clauses", [["When", "$1.contents"], ["Clauses NEWLINE When", "...$1.contents, $3.contents"], ["Clauses COMPOUND_OR When", "...$1.contents, $3.contents"]]), i("When", [["CASE Clause", "...$2.contents"], ["IF Clause", "...$2.contents"], ["WHEN Clause", "...$2.contents"]]), t.ForAny = [["FOR_FROM", "$$ = $1"], ["FOR_AT", "$$ = $1"], ["FOR_AS", "$$ = $1"]], i("If", [["IfBlock"], ["IfBlock Else", "$1, $2"], ["Expression ? BlockExpression : BlockExpression", "new yy.IfBlock('IfBlock', $1, $3.unwrap), new yy.Else('Else', $5.unwrap)", {
          quoteSyntax: !0
        }], ["Expression ? BlockExpression", "new yy.IfBlock('IfBlock', $1, $3.unwrap)", {
          quoteSyntax: !0
        }], ["Expression ? INDENT BlockExpression : BlockExpression OUTDENT", "new yy.IfBlock('IfBlock', $1, $4.unwrap), new yy.Else('Else', $6.unwrap)", {
          quoteSyntax: !0
        }], ["Expression POSTIF Expression", "$3, $1", {
          postfix: !0
        }], ["Statement POSTIF Expression", "$3, $1", {
          postfix: !0,
          statement: !0
        }], ["Expression POSTUNLESS Expression", "$3, $1", {
          postfix: !0,
          unless: !0
        }], ["Statement POSTUNLESS Expression", "$3, $1", {
          postfix: !0,
          statement: !0,
          unless: !0
        }]]), i("BlockExpression", [["Expression"], ["INDENT Expression OUTDENT", "$2"]]), i("TryBlock", [["Try", "$1, null, null"], ["Try Catch", "$1, $2, null"], ["Try Catch Finally", "$1, $2, $3"]]), i("Try", [["TRY Expression", "yy.Block.wrap($2)"], ["TRY Block", "$2"]]), i("Finally", [["FINALLY Block", "$2"], ["FINALLY Expression", "yy.Block.wrap($2)"]]), i("Catch", [["CATCH Block", "null, $2"], ["CATCH Expression", "null, yy.Block.wrap($2)"], ["CATCH Identifier Block", "$2, $3"], ["CATCH Identifier THEN Block", "$2, $4"], ["CATCH Identifier THEN Expression", "$2, yy.Block.wrap($4)"]]), i("While", [["WhileUntil Expression THEN Block", "$2, $4.unwrap, $1"], ["WhileUntil Expression THEN Expression", "$2, yy.Block.wrap($4), $1"], ["WhileUntil ( Expression ) Expression", "$3, yy.Block.wrap($5), $1"], ["WhileUntil Expression Block", "$2, $3.unwrap, $1"], ["Loop WhileUntil Expression", "$3, $1.unwrap, $2"], ["Loop NEWLINE WhileUntil Expression", "$4, $1.unwrap, $3"], ["Expression WhileUntil Expression", "$3, yy.Block.wrap($1), $2"]]), i("WhileUntil", [["WHILE"], ["UNTIL"]]), i("Loop", [["LOOP Block", "$2.unwrap"], ["LOOP Expression", "yy.Block.wrap($2).unwrap"]]), i("Else", [["ElseOtherwise Block", "$2"], ["ElseOtherwise Expression", "$2"], ["ElseOtherwise Statement", "$2"], ["ElseOtherwise THEN Block", "$3"]]), i("IfBlock", [["IfUnless Expression Block", "$2, $3, $1"], ["IfUnless Expression THEN Block", "$2, $4, $1"], ["IfUnless Expression THEN Expression", "$2, $4, $1"], ["IfUnless ( Expression ) Expression", "$3, $5, $1"], ["IfUnless Expression THEN Statement", "$2, $4, $1"], ["IfUnless Expression { Expression }", "$2, $4, $1"], ["IfUnless Expression THEN { Expression }", "$2, $5, $1"], ["IfUnless Expression THEN { Statement }", "$2, $5, $1"]]), i("IfUnless", [["IF"], ["UNLESS"]]), i("ElseOtherwise", [["ELSE"], ["OTHERWISE"], ["OR"]]), i("Value", [["Assignable"], ["Parenthetical"], ["Literal"], ["Invocation"], ["Function"], ["New"], ["This"], ["Super"], ["SUCH"]]), i("New", [["NEW Expression", "$2"]]), i("Super", [["SUPER . PROPERTY", "Object.assign([$3], { loc: @3 })"], ["SUPER INDEX_START PROPERTY INDEX_END", "$3"]]), i("This", [["THIS"]]), i("Parenthetical", [["( Expression )", "$2"], ["( Body )", "$2"], ["( INDENT Body OUTDENT )", "$3"]]), i("ParamObject", [["{ ParamPropList }", "$2", {
          typeOf: 3
        }], ["{ }", "[]", {
          typeOf: 0
        }]]), i("Object", [["{ }", "[]"], ["{ PropList OptComma }", "$2"], ["{ INDENT PropList OUTDENT }", "$3", {
          indented: !0
        }]]), t.PropList = [["PropObj", "$$ = [$1]"], ["PropList , PropObj", "$$ = $1.push($3) && $1"], ["PropList OptComma NEWLINE PropObj", "$$ = $1.push(@3.generated, $4) && $1"], ["PropList OptComma INDENT PropList OUTDENT", "$$ = $1.concat(false, ...[$4])"]], t.ParamPropList = [["", "$$ = []"], ["ParamPropObj", "$$ = [$1]"], ["ParamPropList , ParamPropObj", "$$ = $1.push($3) && $1"], ["ParamPropList OptComma NEWLINE ParamPropObj", "$$ = $1.push($4) && $1"], ["ParamPropList OptComma INDENT ParamPropObj OUTDENT", "$$ = $1.push($4) && $1"]], t.PropObj = [["Function", "$$ = $1"], ["PROPERTY : Expression", "$$ = [$1, $3, [@1, @3]]"], ["PROPERTY : Block", "$$ = [$1, yy.Array.from($3), [@1, @3, true]]"], ["PROPERTY : INDENT Expression OUTDENT", "$$ = [$1, $4, [@1, @5, true]]"], ["AlphaNum : Expression", "$$ = [$1, $3, [@1, @3]]"], ["AlphaNum : Block", "$$ = [$1, yy.Array.from($3), [@1, @3, true]]"], ["AlphaNum : INDENT Expression OUTDENT", "$$ = [$1, $4, [@1, @5, true]]"], ["[ Expression ] : Expression", "$$ = [$2, $5, [@1, @5]]"], ["[ Expression ] : INDENT Expression OUTDENT", "$$ = [$2, $6, [@1, @6, true]]"], ["[ Expression ] : Block", "$$ = [$2, yy.Array.from($5), [@1, @5, true]]"], ["PROPERTY :", "$$ = [$1, false, [@1, @2]]"], ["... PROPERTY :", "$$ = [$2, false, [@1, @3], true]"], ["PROPERTY : ...", "$$ = [$1, false, [@1, @3], true]"], ["Identifier", "$$ = [$1[1], false, [@1, @1]]"], ["Assignment", "$$ = $1"], ["... Value", "$$ = $2"], ["Value ...", "$$ = $1"]], t.ParamPropObj = [["PROPERTY : ParamAssignable", "$$ = [$1, $3]"], ["PROPERTY :", "$$ = [$1]"], ["PROPERTY : DEFAULTS Expression", "$$ = [$1,,$4]"], ["ParamIdentifier", "$$ = $1"], ["ParamIdentifier DEFAULTS Expression", "$$ = [$1,,$3]"], ["... PROPERTY :", "$$ = [$2,,,true]"], ["PROPERTY : ...", "$$ = [$1,,,true]"]], i("Literal", [["AlphaNum"], ["Regex"], ["UNDEFINED"], ["INFINITY"], ["BOOL"], ["NULL"], ["NAN"]]), i("AlphaNum", [["String"], ["NUMBER"]]), i("String", [["STRING"], ["StringWithInterpolations"]]), i("StringWithInterpolations", [["STRING_START Interpolations STRING_END", "$2, $1"]]), i("Interpolations", [["Interpolation", "$1"], ["Interpolations Interpolation", "...$1.contents, $2"]]), i("Interpolation", [["INTERPOLATION_START Expression INTERPOLATION_END", "$2"], ["String"]]), i("Regex", [["REGEX"], ["RegexWithInterpolations"]]), i("RegexWithInterpolations", [["REGEX_START RegexInterpolations REGEX_END", "$2, $3"]]), i("RegexInterpolations", [["RegexInterpolation", "$1"], ["RegexInterpolations RegexInterpolation", "...$1.contents, $2"]]), i("RegexInterpolation", [["INTERPOLATION_START Expression INTERPOLATION_END", "$2"], ["Regex"]]), i("Function", [["FuncHeader", "$1.contents, yy.Block.wrap(), { arguments: $1[3] }"], ["FuncHeader FuncBody", "$1.contents, $2.unwrap, { arguments: $1[3], returns: [@1.type, @2.type].filter(Boolean) }"], ["FuncSpecifiers FuncHeader FuncBody", "$2.contents, $3.unwrap, { ...$1.unwrap, arguments: $2[3], returns: [@2.type, @3.type].filter(Boolean) }"], ["FUNCTION FuncHeader FuncBody", "$2.contents, $3.unwrap, { yields: @1.origin === 'function*', arguments: $2[3], returns: [@2.type, @3.type].filter(Boolean) }"], ["ASYNC FUNCTION FuncHeader FuncBody", "$3.contents, $4.unwrap, { async: true, yields: @2.origin === 'function*', arguments: $3[3], returns: [@3.type, @4.type].filter(Boolean) }"], ["FUNCTION WITH FuncBody", "[], $3.unwrap, { yields: @1.origin === 'function*', returns: [@3.type].filter(Boolean) }"], ["FUNCTION WITH <( TypeArguments )> FuncBody", "[], $6.unwrap, { yields: @1.origin === 'function*', arguments: $4, returns: [@6.type].filter(Boolean) }"], ["ASYNC FUNCTION WITH FuncBody", "[], $4.unwrap, { async: true, yields: @2.origin === 'function*', returns: [@4.type].filter(Boolean) }"], ["ASYNC FUNCTION WITH <( TypeArguments )> FuncBody", "[], $7.unwrap, { async: true, yields: @2.origin === 'function*', arguments: $5, returns: [@7.type].filter(Boolean) }"], ["WITH Block", "[], $2.unwrap, {}"], ["WITH <( TypeArguments )> Block", "[], $5.unwrap, { arguments: $3 }"], ["WITH <( TypeArguments )> THEN Block", "[], $6.unwrap, { arguments: $3, returns: [@5.type].filter(Boolean) }"], ["FUNC_DIRECTIVE Block", "[], $2.unwrap"]]), i("FuncBody", [["THEN Block", "$2.unwrap.setLoc(@1, @2)", {
          typeOf: 1
        }], ["Block", "$1.unwrap.setLoc(@1)", {
          typeOf: 0
        }], ["THEN Expression", "yy.Block.wrap($2).setLoc(@2)", {
          typeOf: 1
        }]]), i("FuncSpecifiers", [["STATIC GET", "{ static: true, get: true }"], ["STATIC SET", "{ static: true, set: true }"], ["STATIC ASYNC", "{ static: true, async: true }"], ["GET", "{ get: true }"], ["SET", "{ set: true }"], ["STATIC", "{ static: true }"], ["ASYNC", "{ async: true }"]]), i("FuncHeader", [["Identifier TypeArguments? Params", "$1, $3, $2.unwrap", {
          typeOf: 3
        }], ["Identifier WITH TypeArguments? Params", "$1, $4, $3.unwrap", {
          typeOf: 4
        }], ["Identifier TypeArguments? WITH Params", "$1, $4, $2.unwrap", {
          typeOf: 4
        }], ["WITH TypeArguments? Params", "null, $3, $2.unwrap", {
          typeOf: 3
        }], ["TypeArguments? WITH Params", "null, $3, $1.unwrap", {
          typeOf: 3,
          first: 2
        }], ["Identifier TypeArguments?", "$1, null, $2.unwrap", {
          typeOf: 0,
          last: 1
        }], ["Identifier TypeArguments? WITH", "$1, null, $2.unwrap", {
          typeOf: 0
        }], ["Identifier WITH TypeArguments?", "$1, null, $3.unwrap", {
          typeOf: 0,
          last: 2
        }], ["TypeArguments? Params", "null, $2, $1.unwrap", {
          typeOf: 2,
          first: 2
        }]]), i("TypeArguments?", [["", "undefined"], ["<( TypeArguments )>", "$2"], ["<( INDENT TypeArguments OUTDENT )>", "$3"]]), i("Params", [["PARAM_START PARAM_END", "[]", {
          typeOf: 2
        }], ["PARAM_START ParamList PARAM_END", "$2.setLoc(@1, @3)", {
          typeOf: 3
        }]]), i("ParamList", [["Param", "$1"], ["ParamList , Param", "...$1.addParam($3).setLoc(@1, @3)"], ["ParamList OptComma NEWLINE Param", "...$1.addParam($4)"], ["ParamList OptComma INDENT ParamList OptComma OUTDENT", "...$1.addParams($4.contents)"]]), i("Param", [["ParamAssignable"]]), i("Assign", [["Assignment", "$1"]]), i("Assignment", [["Assignable AssignKeyword Expression", "$1, $3, $2"], ["Assignable AssignKeyword INDENT Expression OUTDENT", "$1, $4, $2"], ["Assignable AssignKeyword NEWLINE Expression", "$1, $4, $2"], ["Assignable AssignKeyword Block", "$1, yy.Array.from($3), $2"]]), i("AssignKeyword", [["AS", "@1.origin"], ["AT"], ["FROM"]]), i("Assignable", [["Identifier"], ["ARGUMENT"], ["Object"], ["Array"], ["Value Access", "$1, $2", {
          typeOf: 2
        }]]), i("ParamAssignable", [["ParamIdentifier"], ["ParamObject"], ["ParamObject DEFAULTS Expression"], ["ParamArray"], ["ParamArray DEFAULTS Expression"]]), t.ParamAssignable[2][1] = "$$ = new yy.ParamAssignable('ParamObject', $1.defaults($3)).setLocation(@1, @3)", t.ParamAssignable[4][1] = "$$ = new yy.ParamAssignable('ParamArray', $1.defaults($3)).setLocation(@1, @3)", i("Identifier", [["IDENTIFIER"]]), i("ParamIdentifier", [["IDENTIFIER", "$1"], ["... IDENTIFIER", "$2", {
          expansion: !0
        }], ["IDENTIFIER ...", "$1", {
          expansion: !0
        }], ["IDENTIFIER DEFAULTS Expression", "$1,,$3"], ["THIS . PROPERTY", "$3, true"], ["THIS . PROPERTY DEFAULTS Expression", "$3,true,$5"], ["THIS . PROPERTY ...", "$3, true", {
          expansion: !0
        }], ["... THIS . PROPERTY", "$4, true", {
          expansion: !0
        }]]), i("Access", [[". PROPERTY", "Object.assign([$2], { loc: @2 }), @1.origin === '?.'", {
          typeOf: 2
        }], ["INDEX_START Expression INDEX_END", "$2", {
          typeOf: 3
        }]]), i("ParamArray", [["[ ]", "/* */", {
          typeOf: 0
        }], ["[ ParamArrayList OptVoids ]", "$2", {
          typeOf: 4
        }]]), i("Array", [["[ ]", "/* */", {
          checkGenerated: 1
        }], ["[ ArrayList OptVoids ]", "...$2", {
          checkGenerated: 1
        }], ["[ INDENT ArrayList OptVoids OUTDENT ]", "...$3", {
          indented: !0,
          checkGenerated: 1
        }]]), t.ParamArrayList = [["ParamArrayArg", "$$ = [...$1]"], ["ParamArrayList , ParamArrayArg", "$$ = $1.concat($3)"], ["ParamArrayList OptComma NEWLINE ParamArrayArg", "$$ = $1.concat($4)"]], t.ArrayList = [["ArrayArg", "$$ = [...$1]"], ["ArrayList , ArrayArg", "$$ = $1.concat($3)"], ["ArrayList OptComma INDENT ArrayList OptVoids OUTDENT", "$$ = $1.concat(false, $4)"], ["ArrayList OptComma NEWLINE ArrayArg", "$$ = $1.concat(@3.generated, $4)"]], t.ParamArrayArg = [["ParamAssignable", "$$ = [$1]"], ["Voids ParamAssignable", "$$ = [...$1, $2]"]], t.ArrayArg = [["... Expression", "$$ = [Object.assign($2, { expansion: true })]"], ["Expression ...", "$$ = [Object.assign($1, { expansion: true })]"], ["Expression", "$$ = [$1]"], ["Voids Expression", "$$ = [...$1, $2]"]], t.OptVoids = [["", "$$ = undefined"], ["Voids", "$$ = $1"]], t.Voids = [[",", "$$ = [null]"], [", Voids", "$$ = [null, ...$1]"], [", NEWLINE Voids", "$$ = [null, ...$2]"]], i("Statement", [["Return"], ["BREAK Identifier", "$2"], ["BREAK"], ["CONTINUE Identifier", "$2"], ["CONTINUE"], ["Import"], ["Export"], ["Declare"], ["THROW Expression", "$2"], ["THROW INDENT Expression OUTDENT", "$3"], ["Type"], ["Interface"]]), i("Interface", [["INTERFACE Identifier TypeArguments? InterfaceBody", "$2, $3, $4"], ["INTERFACE Identifier TypeArguments? INDENT InterfaceBody OUTDENT", "$2, $3, $5"]]), i("InterfaceBody", [["{ }", "[]"], ["{ InterfaceProperties }", "$2.contents"], ["{ INDENT InterfaceProperties OUTDENT }", "$3.contents"]]), i("InterfaceProperties", [["InterfaceProperty"], ["InterfaceProperties , InterfaceProperty", "...$1.unwrap, $3"], ["InterfaceProperties OptComma NEWLINE InterfaceProperty", "...$1.unwrap, $4"], ["InterfaceProperties OptComma INDENT InterfaceProperty OUTDENT", "...$1.unwrap, $4"]]), i("InterfaceProperty", [["InterfaceKeyword? TypeArguments? Identifier? Params : TypeSentence", '$3.unwrap, $6, $4, { ...$1.unwrap, arguments: $2.unwrap, optional: @2.origin === "?:" }'], ["PROPERTY : TypeSentence", 'new yy.Identifier(null, $1).setLoc(@1), $3, null, { optional: @2.origin === "?:" }'], ["READONLY PROPERTY : TypeSentence", 'new yy.Identifier(null, $2).setLoc(@2), $4, null, { optional: @3.origin === "?:", readonly: true }']]), i("InterfaceKeyword?", [["", "undefined"], ["NEW", "{ new: true }"], ["READONLY", "{ readonly: true }"]]), i("Identifier?", [["", "undefined"], ["Identifier"]]), i("Type", [["TYPE TypeDeclaration", "$2"], ["TYPE INDENT TypeDeclaration OUTDENT", "$3"], ["TYPE NEWLINE TypeDeclaration", "$3"]]), i("TypeDeclaration", [["Identifier TypeArguments? AS TypeSentence", "$1, $4, $2.unwrap"], ["Identifier TypeArguments? AS INDENT TypeSentence OUTDENT", "$1, $5, $2.unwrap"], ["Identifier TypeArguments? AS NEWLINE TypeSentence", "$1, $5, $2.unwrap"]]), i("TypeSentence", [["TypeSentence & TypeValue", "...$1.contents, $2, $3"], ["TypeSentence | TypeValue", "...$1.contents, $2, $3"], ["TypeSentence & INDENT TypeValue OUTDENT", "...$1.contents, $2, $4"], ["TypeSentence | INDENT TypeValue OUTDENT", "...$1.contents, $2, $4"], ["TypeSentence & NEWLINE TypeValue", "...$1.contents, $2, $4"], ["TypeSentence | NEWLINE TypeValue", "...$1.contents, $2, $4"], ["TypeValue", "$1"]]), i("TypeValue", [["TypeArray"], ["TypeObject"], ["Literal"], ["Identifier"], ["TAG"], ["TypeWithArguments"]]), i("TypeWithArguments", [["( TypeSentence ) INDEX_START INDEX_END", "{ isArray: true, type: $2 }"], ["TypeValue INDEX_START INDEX_END", "{ isArray: true, type: $1 }"], ["Identifier <( TypeArguments )>", "{ type: $1, arguments: $3 }"], ["Identifier <( INDENT TypeArguments OUTDENT )>", "{ type: $1, arguments: $4 }"]]), i("TypeArguments", [["TypeArgument"], ["TypeArguments , TypeArgument", "...$1.contents, $3"], ["TypeArguments OptComma NEWLINE TypeArgument", "...$1.contents, $4"], ["TypeArguments OptComma INDENT TypeArgument OUTDENT", "...$1.contents, $4"]]), i("TypeArgument", [["Identifier", "$1"], ["Identifier EXTENDS Identifier", "$1, $3"], ["TypeWithArguments"]]), i("TypeObject", [["{ TypeObjProps }", "...$2.contents"], ["{ INDENT TypeObjProps OUTDENT }", "...$3.contents"]]), i("TypeObjProps", [["TypeObjProps OptComma NEWLINE TypeObjProp", "...$1.contents, $4"], ["TypeObjProps , TypeObjProp", "...$1.contents, $3"], ["TypeObjProps OptComma INDENT TypeObjProp OUTDENT", "...$1.contents, $4"], ["TypeObjProp"]]), i("TypeObjProp", [["PROPERTY : TypeSentence", "$1, $3, @2.origin === '?:'"], ["PROPERTY : NEWLINE TypeSentence", "$1, $4, @2.origin === '?:'"], ["PROPERTY : INDENT TypeSentence OUTDENT", "$1, $4, @2.origin === '?:'"], ["PROPERTY :", "$1, , @2.origin === '?:'"], ["Identifier", "$1"]]), i("TypeArray", [["[ TypeArrayItems ]", "...$2.contents"], ["[ INDENT TypeArrayItems OUTDENT ]", "...$3.contents"]]), i("TypeArrayItems", [["TypeSentence"], ["TypeArrayItems OptComma NEWLINE TypeSentence", "...$1.contents, $4"], ["TypeArrayItems OptComma INDENT TypeSentence OUTDENT", "...$1.contents, $4"], ["TypeArrayItems , TypeSentence", "...$1.contents, $3"]]), i("Declare", [["DeclarationKeyword Declarations", "{ keyword: $1, statements: $2 }, [@1, @2]"], ["DeclarationKeyword INDENT Declarations OUTDENT", "{ keyword: $1, statements: $3, indented: true }, [@1, @3]"]]), i("DeclarationKeyword", [["VAR"], ["LET"], ["CONST"]]), i("Declarations", [["Declaration", "$1.unwrap"], ["Declarations , Declaration", "...$1.contents, $3.unwrap"], ["Declarations OptComma NEWLINE Declaration", "...$1.contents, @3.generated, $4.unwrap"], ["Declarations OptComma INDENT Declarations OUTDENT", "...$1.contents, false, ...$4.contents"]]), i("Declaration", [["Assignment"], ["Identifier"]]), i("Return", [["RETURN", "/* */"], ["RETURN Expression", "$2"], ["RETURN INDENT Expression OUTDENT", "$3"], ["RETURN INDENT Body OUTDENT", "$3"]]), i("Import", [["IMPORT OptDefault ImportList Import(FROM) STRING", "$3.contents, $5, false, $2"], ["IMPORT INDENT OptDefault ImportList Import(FROM) STRING OUTDENT", "$4.contents, $6, false, $3"], ["IMPORT OptDefault INDENT ImportList Import(FROM) STRING OUTDENT", "$4.contents, $6, false, $2"], ["IMPORT OptDefault INDENT ImportList OUTDENT Import(FROM) STRING", "$4.contents, $7, false, $2"], ["IMPORT INDENT OptDefault INDENT ImportList OUTDENT Import(FROM) STRING OUTDENT", "$5.contents, $8, false, $3"], ["IMPORT OptDefault * AS Identifier Import(FROM) STRING", "$5, $7, true, $2"], ["IMPORT INDENT OptDefault * AS Identifier Import(FROM) STRING OUTDENT", "$6, $8, true, $3"], ["IMPORT OptDefault INDENT * AS Identifier Import(FROM) STRING OUTDENT", "$6, $8, true, $2"]]), function (e) {
          let [i, n] = "Import FROM".split(" ");
          s[`${i}(${n})`] = {
            from: i,
            to: n
          }, t[`${i}(${n})`] = [[n, "$$ = $1"]];
        }(), i("Export", [["EXPORT ExportList", "{ list: $2 }"], ["EXPORT INDENT ExportList OUTDENT", "{ list: $3 }"], ["EXPORT DEFAULT Expression", "{ defaults: $3 }"], ["EXPORT INDENT DEFAULT Expression OUDENT", "{ defaults: $4 }"], ["EXPORT Declare", "{ declarations: $2 }"], ["EXPORT INDENT Declare OUTDENT", "{ declarations: $3 }"], ["EXPORT Exportable", "{ exportable: $2.unwrap }"], ["EXPORT INDENT Exportable OUTDENT", "{ exportable: $3.unwrap }"]]), t.OptDefault = [["", "$$ = undefined"], ["Identifier ,", "$$ = $1"], ["Identifier OptComma NEWLINE", "$$ = $1"]], i("ImportList", [["Identifier"], ["{ ImportNames }", "$2"], ["{{ INDENT ImportNames OUTDENT }}", "$3"]]), i("ExportList", [["{ ExportNames }", "$2"], ["{{ INDENT ExportNames OUTDENT }}", "$3"]]), i("ExportNames", [["ExportName", "$1.contents"], ["ExportNames , ExportName", "...$1.contents, $3.contents"], ["ExportNames OptComma NEWLINE ExportName", "...$1.contents, $4.contents"]]), i("ExportName", [["PROPERTY :", "new yy.Identifier(0, $1).setLoc(@1)"], ["PROPERTY : Identifier", "new yy.Identifier(0, $1).setLoc(@1), $3"], ["PROPERTY : AS Identifier", "new yy.Identifier(0, $1).setLoc(@1), $4"], ["Identifier"], ["Identifier AS DEFAULT", "$1,,true"], ["Identifier AS Identifier", "$1,$3"]]), i("Exportable", [["Class"], ["Function"]]), i("ImportNames", [["ImportName", "$1.contents"], ["ImportNames , ImportName", "...$1.contents, $3.contents"], ["ImportNames OptComma NEWLINE ImportName", "...$1.contents, $4.contents"]]), i("ImportName", [["PROPERTY :", "new yy.Identifier(0, $1).setLoc(@1), , [@1, @2]"], ["PROPERTY : Identifier", "new yy.Identifier(0, $1).setLoc(@1), $3"], ["PROPERTY : AS Identifier", "new yy.Identifier(0, $1).setLoc(@1), $4"], ["Identifier AS Identifier", "$1, $3"], ["DEFAULT AS Identifier", "(new yy.Identifier(null, 'default')).setLoc(@1), $3"], ["Identifier"]]), e.exports = t;
      },
      225: function (e, t) {
        let s, i, n, r;

        let l = function (_SyntaxError) {
          _inherits(l, _SyntaxError);

          var _super = _createSuper(l);

          function l(e, {
            code: t,
            location: i,
            type: n,
            filename: r,
            intermediate: _l
          }) {
            var _this;

            _classCallCheck(this, l);

            _this = _super.call(this, e), _this.location = i, _this.src = i.src, _this.toString = s, _this.code = t, _this.stack = _this.toString(), _this.type = n, _this.filename = r, _this.intermediate = _l;
            return _this;
          }

          return _createClass(l);
        }(_wrapNativeSuper(SyntaxError));

        function a(e, t, s, i, n) {
          let r;

          for (n.spacesDiff = 0, n.looksLikeAlignment = !1, r = 0; r < t && r < i && e.charCodeAt(r) === s.charCodeAt(r); r++);

          let l = 0;

          for (let e = r; e < t; e++) l++;

          let a = 0;

          for (let e = r; e < i; e++) a++;

          let o = Math.abs(l - a);
          n.spacesDiff = o, o > 0 && 0 <= a - 1 && a - 1 < e.length && a < s.length && 32 !== s.charCodeAt(a) && 32 === e.charCodeAt(a - 1) && 44 === e.charCodeAt(e.length - 1) && (n.looksLikeAlignment = !0);
        }

        t.throwSyntaxError = throwSyntaxError = function (e, t, s) {
          throw e = new l(e.message, {
            location: e.location,
            code: t,
            type: e.type || "error",
            filename: s,
            intermediate: e.intermediate
          }), s ? e.toString() : e;
        }, t.errorToString = s = function () {
          let e, t;
          if (!this.location || "string" != typeof this.code) return Error.prototype.toString.call(this);
          let {
            first_column: s,
            first_line: i,
            last_column: r,
            last_line: l
          } = this.location;
          e = !this.filename || this.filename.startsWith("<anonymous") ? "[stdin]" : this.filename || "[stdin]";
          let a = `${n(e)}:${i}${n(":")}${s}${n(":")} ${this.type}: ${this.message}`;

          if (this.code.length) {
            t = this.code, l && i < l && (l = i, r = t.length);
            let e = s - 1,
                o = r - 1,
                c = (e ? " ".repeat(e) : "") + "^".repeat(Math.abs(o - e || 1));
            t = t.slice(0, e) + n(t.slice(e, o)) + t.slice(o), "object" == typeof this.intermediate && (t = t.split(""), t.splice(...Object.values(this.intermediate), "(...)"), t = t.join(""), c = c.split(""), c.splice(...Object.values(this.intermediate), "     "), c = c.join("")), a += `\n${t}\n${c}\n`;
          }

          return a;
        }, t.updateSyntaxError = i = function (e, t, i) {
          return e.toString === s && ("string" != typeof e.code && (e.code = t.split(/\n/g)[e.location.first_line - 1]), !e.filename && (e.filename = i), e.stack = e.toString(), e.type = e.type || "error"), e.toString();
        }, t.supportsColors = r = function () {
          try {
            return process.stdout.isTTY && !process.env.NODE_DISABLE_COLORS;
          } catch {}
        }, t.red = n = e => this.supportsColors() ? `[0;31m${e}[0m` : e, t.yellow = e => this.supportsColors() ? `[0;33m${e}[0m` : e, t.guessIndentation = e => {
          let t = e.split(/\n/g),
              s = Math.min(t.length, 100),
              i = "",
              n = 0,
              r = [0, 0, 0, 0, 0, 0, 0, 0, 0],
              l = {};

          for (let e = 1; e <= s; e++) {
            let s = t[e - 1].length,
                o = t[e - 1],
                c = !1,
                p = 0,
                _ = 0;

            for (let e = 0, t = s; e < t; e++) {
              if (32 !== o.charCodeAt(e)) {
                c = !0, p = e;
                break;
              }

              _++;
            }

            if (!c) continue;
            if (a(i, n, o, p, l), l.looksLikeAlignment && 2 === l.spacesDiff) continue;
            let u = l.spacesDiff;
            u <= 8 && r[u]++, i = o, n = p;
          }

          let o = 2,
              c = .1 * s;
          return [2, 4, 6, 8, 3, 5, 7].forEach(e => {
            let t = r[e];
            t > c && (c = t, o = e);
          }), 8 === o && r[8] > 0 && r[4] > 0 && (console.log(r[4], r[8]), o = 4), 4 === o && r[4] > 0 && r[2] > 0 && (o = 2), {
            tabSize: o
          };
        }, t.resolveContext = (e, t) => {
          for (let t of e) console.log(t);
        }, t.ElysionError = l;
      },
      138: (e, t, s) => {
        let i = function () {
          function i(e, t) {
            _classCallCheck(this, i);

            return i.compile(e, t);
          }

          _createClass(i, null, [{
            key: "compile",
            value: function compile(e, t = {}, {
              nodes: s,
              tokens: r,
              comments: a,
              names: o
            } = {}) {
              return (u = () => {
                t.tabSize || (t.tabSize = p(e).tabSize);

                var c,
                    _,
                    u,
                    f,
                    m = {};

                if (t.filename, r) u = a, _ = s, f = o, c = r, m.tokens = c, m.nodes = _;else {
                  var y = new l(e, t);
                  c = y.tokens, u = y.comments, f = y.names, m.tokens = c, c.script = e, m.nodes = _ = i.parseTokens(c);
                }
                if (t.nodes) return m;
                t.scope = f;
                let d,
                    {
                  js: g,
                  sources: $,
                  isTypeScript: I
                } = new n(_, _objectSpread({
                  comments: u
                }, t)).parse(t);

                if (t.sourceMaps && $.length) {
                  for (let e in $) {
                    let t = $[e];
                    t && t.length && (g = g.replace(t[0], (s, _i) => {
                      let n, r;
                      return n = g.slice(0, _i).split(/\n/g).pop().length, r = E(g.slice(0, _i), "\n"), $[e] = {
                        sourceLine: t[1].first_line - 1,
                        sourceColumn: t[1].first_column - 1,
                        lastSourceColumn: t[1].last_column - 1,
                        lastSourceLine: t[1].last_line - 1,
                        line: r,
                        column: n,
                        source: t[1].source,
                        sourceName: t[1].sourceName
                      }, "";
                    }));
                  }

                  d = new h($).generate(_objectSpread({
                    generatedFile: t.generatedFile,
                    sourceMap: t.inlineMap ? e : void 0
                  }, t), e);
                }

                if (I) {
                  let e = {
                    parse: () => i.compile(null, _objectSpread(_objectSpread({}, t), {}, {
                      omitTypeScript: !0
                    }), {
                      nodes: _,
                      tokens: c,
                      comments: u,
                      names: f
                    })
                  };
                  m.compiledTS = e;
                }

                return m.output = g, m.sourceMap = d, m.sources = $, m.isTypeScript = I, m;
              }, function (e, t) {
                try {
                  return u.call(this, e, t);
                } catch (s) {
                  let i;
                  if (!(s.isCompilerError || s instanceof _)) throw s;
                  if ("string" != typeof e) throw s;
                  throw s.isCompilerError && (s.type = "SyntaxError"), (s.token && (i = s.token[2].src) !== t.src && i || (i = s.src) !== t.src && i) && (t.src = i), s = c(s, e, t.src);
                }
              })(e, t);
              var u;
            }
          }, {
            key: "parseTokens",
            value: function parseTokens(e) {
              return a.parse(e);
            }
          }]);

          return i;
        }();

        const {
          Parser: n,
          Nodes: r
        } = s(477),
              l = s(618),
              {
          parser: a
        } = s(514),
              {
          errorToString: o,
          updateSyntaxError: c,
          guessIndentation: p,
          ElysionError: _,
          red: u,
          throwSyntaxError: f
        } = s(225),
              {
          SourceMap: h
        } = s(421);
        a.lexer = {
          options: {
            ranges: !0
          },
          yylloc: {
            first_line: 0,
            first_column: 0,
            last_column: 0,
            last_line: 0
          },

          lex() {
            var e, t;
            return t = a.tokens[this.pos], this.pos = this.pos + 1, t ? (e = t[0], this.yytext = t[1], this.yylloc = t[2], a.errorToken = t) : e = "", e;
          },

          setInput(e) {
            return a.tokens = e, this.pos = 0;
          },

          upcomingInput: () => ""
        };

        for (var m = 0, y = Object.keys(r); m < y.length; m++) {
          var d = y[m];
          a.yy[d] = r[d];
        }

        function E(e, t) {
          var s, i;
          if (s = i = 0, !t.length) return 1 / 0;

          for (; i = 1 + e.indexOf(t, i);) s++;

          return s;
        }

        a.yy.parseError = function (e, t, s) {
          let i = t.parser.errorToken,
              n = i[0];
          "INDENT" === n && (i[2].first_line++, i[2].first_column = 1, i[2].last_column = i[1].split(/\n/g).pop().length + 1), i.origin && (n = i.origin), function (e) {
            switch (!0) {
              case "[" === e[0] && e.generated:
                e[0] = "implicit array";
                break;

              case "CALL_START" === e[0] && e.generated:
                e[0] = "implicit call";
                break;

              case "NEWLINE" === e[0]:
                e[0] = "end of line";
            }
          }(i);
          let r = new (s || SyntaxError)("unexpected " + n.toLowerCase());
          throw r.toString = o, r.location = i[2], r.stack = r.toString(), r.token = i, r.isCompilerError = !0, r;
        }, Object.assign(i, {
          throwSyntaxError: f,
          errorToString: o,
          ElysionError: _,
          red: u,
          SourceMap: h,
          Parser: n,
          Nodes: r,
          Lexer: l
        }), window.Elysion = i, e.exports = i;
      },
      618: e => {
        let t = function () {
          function t(_e, _t = {}) {
            _classCallCheck(this, t);

            _defineProperty(this, "Unfinished", "get static set async new await do with within for when or else until loop try catch then whether case post_case if unless function var const let otherwise as from at import export class extends ? : [ { {{ ( call_start index_start ** division * ~ ^ % math_bin is isnt == === != !== <= >= < > << >> >>> func_exists . indent newline , throw yield && || & |".split(" ").map(e => e.toUpperCase()));

            _defineProperty(this, "postfixeables", "THIS IDENTIFIER REGEX REGEX_END PROPERTY ] } ) NUMBER CALL_END INDEX_END STRING_END STRING NpmPackage RETURN CONTINUE BREAK DEBUGGER SUCH SUPER SYMBOL_EXISTS ARGUMENT".split(" "));

            _defineProperty(this, "indexables", "THIS IDENTIFIER REGEX REGEX_END PROPERTY ] } ) CALL_END INDEX_END STRING_END STRING SUCH SUPER ARGUMENT".split(" "));

            _defineProperty(this, "uncontinuous", "STRING STRING_END NUMBER UNDEFINED NULL BOOL THIS REGEX REGEX_END INFINITY TAG".split(" "));

            _defineProperty(this, "Opening", "( { {{ [ INDEX_START CALL_START INDENT".split(" "));

            if ("string" == typeof _e && "object" == typeof _t) {
              this.position = 0, this.indentLevel = 0, this.tokens = [], this.names = [], this.filename = _t.filename, this.dirname = _t.dirname, this.sdir = _t.isInclude ? _t.sdir : this.dirname, this.tabSize = _t.tabSize || 2, this.skipped = [], this.assignLine = -1, this.forLine = -1, this.funcLine = -1, this.paramLine = !1, this.isSimulation = "function" == typeof _t.cb, this.stages = [{
                label: "Root",
                type: "indent",
                contains: [],
                indent: 0
              }], this.forStage = [], this.explicit = [], this.comments = [], this.parensMap = [], this.isInterpolation = _t.isInterpolation, this.isELSON = _t.isELSON, this.cursor = _t.cursor || {
                x: 1,
                y: 1
              }, this.forceCursorAtX = !1, this.cantImport = _t.cantImport ? _t.cantImport : [this.filename], _e = _e.replace(/\r\n/g, "\n") + "\n", this.code = _e;

              for (var s = 0; (this.chunk = _e.slice(s)) && (!this.isSimulation || !_t.cb(this, s));) {
                let e = this.float;
                var i = this.isELSON ? this.Separator() || this.Whitespace() || this.Comment() || this.String() || this.KeywordStatement() || this.Number() || this.Literal() || this.Identifier() : this.Separator() || this.Whitespace() || this.Comment() || this.String() || this.Regex() || this.Assign() || this.AssignKeyword() || this.ImportExport() || this.KeywordStatement() || this.Type() || this.Number() || this.Literal() || this.Identifier();

                if (!i) {
                  let e = "unexpected token " + red(this.chunk[0]);
                  throwSyntaxError({
                    message: e,
                    location: {
                      first_line: this.cursor.y,
                      first_column: this.cursor.x,
                      last_column: this.cursor.x + 1,
                      last_line: this.cursor.y,
                      src: "<anonymous>"
                    },
                    type: "SyntaxError"
                  });
                }

                if (this.forceCursorAtX || (this.cursor.x += i), this.forceCursorAtX = !1, this.isInterpolation && "INTERPOLATION_END" === this.prev()[0]) {
                  this.tokens.pop();
                  break;
                }

                e && /IDENTIFIER|PROPERTY|INDEX_END/.test(this.prev()[0]) ? (this.prev()[2].type = this.float, this.float = null) : e && ":" === this.prev()[0] && this.tokens.length > 1 && /IDENTIFIER|PROPERTY|INDEX_END/.test(this.tokens[this.tokens.length - 2][0]) && (this.tokens[this.tokens.length - 2][2].type = this.float, this.float = null), s += i;
              }

              this.closeTo(0), this.close(), 1 === this.tokens.length && "NEWLINE" == this.tokens[0][0] && (this.tokens = []), this.fix(), this.length = s;
            }
          }

          _createClass(t, [{
            key: "Type",
            value: function Type() {
              let e;

              if (e = /^<([:?])/.exec(this.chunk)) {
                let e = 1,
                    _t2 = [];

                for (; e++, ">" !== this.chunk.charAt(e) || _t2.length;) ">" === this.chunk.charAt(e) ? _t2.pop() : "<" === this.chunk.charAt(e) && _t2.push(1);

                let s = /^<([:?])(.+)>/.exec(this.chunk.slice(0, e + 1));
                if (!s) return;
                let [i, n, r] = s;
                n = "?" === n;

                let l = (() => {
                  let e;

                  try {
                    e = Elysion.compile(`type PARTIAL = ${r}`, {
                      cursor: {
                        x: this.cursor.x - 13,
                        y: this.cursor.y
                      },
                      filename: this.filename,
                      dirname: this.dirname,
                      sdir: this.sdir,
                      nodes: !0
                    }).nodes;
                  } catch (e) {}

                  return e;
                })();

                l || throwSyntaxError({
                  message: "Invalid type",
                  location: {
                    first_column: this.cursor.x + 2,
                    first_line: this.cursor.y,
                    last_line: this.cursor.y,
                    last_column: this.cursor.x + 2 + r.length,
                    src: "<anonymous>"
                  },
                  type: "SyntaxError"
                }, this.code.split("\n")[this.cursor.y - 1]);
                let a = {
                  value: r,
                  nodes: l.visit(1, 1, 0, 1, 1, 1, 2),
                  optional: n,
                  loc: {
                    first_column: this.cursor.x,
                    first_line: this.cursor.y,
                    last_line: this.cursor.y,
                    last_column: this.cursor.x + i.length
                  }
                };
                return this.stage().typeKwd ? (this.uncontinuous.includes(this.prev()[0]) && (this.isPossibleArray() && this.createImplicitArray(), this.token("NEWLINE", 0, {
                  generated: !0
                })), this.token("TAG", a)) : this.prev()[0] && /IDENTIFIER|PROPERTY|INDEX_END|PARAM_END/.test(this.prev()[0]) ? this.prev()[2].type = a : ":" === this.prev()[0] && this.tokens.length > 1 && /IDENTIFIER|PROPERTY|INDEX_END/.test(this.tokens[this.tokens.length - 2][0]) ? (this.tokens[this.tokens.length - 2][2].type = a, this.float = null) : this.float = a, i.length;
              }

              if ((e = /^[&|?:]:/.exec(this.chunk)) || (e = /^:=/.exec(this.chunk)) || (e = /^:/.exec(this.chunk)) && (void 0 === this.stage().quotedIf || !this.stage().quotedIf.length)) {
                let _t3 = e[0].length - 1,
                    s = [],
                    i = e[0],
                    n = {
                  x: this.cursor.x + _t3,
                  y: this.cursor.y
                },
                    r = 0;

                for (; ++_t3 && this.chunk.charAt(_t3);) {
                  n.x++;
                  let l = this.chunk.charAt(_t3);
                  if (/[<[{(]/.test(l)) s.push(l);else {
                    if (/^[\s ]/.test(l) && i === e[0]) {
                      r++;
                      continue;
                    }

                    if (/[^\w)\]}>]/.test(l) && !s.length || /^[)\]}>]/.test(l) && !s.length) break;
                  }

                  if (/^[)\]}>]/.test(l)) {
                    let e = {
                      ">": "<",
                      "}": "{",
                      "]": "[",
                      ")": "("
                    }[l];

                    if (s.pop() !== e) {
                      let e = "unexpected token " + red(l);
                      throwSyntaxError({
                        message: e,
                        location: {
                          first_line: n.y,
                          first_column: n.x,
                          last_column: n.x + 1,
                          last_line: n.y,
                          src: "<anonymous>"
                        },
                        type: "SyntaxError"
                      }, this.code.split("\n")[n.y - 1]);
                    }
                  }

                  i += l;
                }

                if (s.length) {
                  let e = "unmatched " + red(s.pop()) + " at end of " + (this.chunk[_t3] ? "line" : "input");
                  throwSyntaxError({
                    message: e,
                    location: {
                      first_line: n.y,
                      first_column: n.x,
                      last_column: n.x + 1,
                      last_line: n.y,
                      src: "<anonymous>"
                    },
                    type: "SyntaxError"
                  }, this.code.split("\n")[n.y - 1]);
                }

                let l = /^([&:?|])?:(=)?(.+)/.exec(i);
                if (!l) return;
                let [a, o, c, p] = l,
                    _ = p.length;
                if (":" === o && !this.prev().spaced) return;
                o = "?" === o;

                let u = (() => {
                  let e;

                  try {
                    e = Elysion.compile(`type PARTIAL = ${p}`, {
                      cursor: {
                        x: this.cursor.x - 13 + (r ? r - 1 : 0),
                        y: this.cursor.y
                      },
                      filename: this.filename,
                      dirname: this.dirname,
                      sdir: this.sdir,
                      nodes: !0
                    }).nodes;
                  } catch (e) {}

                  return e;
                })();

                u || throwSyntaxError({
                  message: "Invalid type",
                  location: {
                    first_column: this.cursor.x + 2,
                    first_line: this.cursor.y,
                    last_line: this.cursor.y,
                    last_column: this.cursor.x + 2 + _,
                    src: "<anonymous>"
                  },
                  type: "SyntaxError"
                }, this.code.split("\n")[this.cursor.y - 1]);
                let f = {
                  value: p,
                  optional: o,
                  nodes: u.visit(1, 1, 0, 1, 1, 1, 2),
                  loc: {
                    first_column: this.cursor.x,
                    first_line: this.cursor.y,
                    last_line: this.cursor.y,
                    last_column: this.cursor.x + a.length
                  }
                };

                if (c) {
                  let e = this.stages.length - this.stages.map(e => e).reverse().findIndex(e => "indent" === e.type || "explicit" === e.type);
                  this.close(void 0, void 0, !0), ["indent", "explicit"].includes(this.stage().type) || this.closeTo(e, !0), "WITH" === this.prev()[0] && (this.token("PARAM_START", "(", {
                    generated: !0
                  }), this.token("PARAM_END", ")", {
                    generated: !0
                  })), "PARAM_END" !== this.prev()[0] && ")>" !== this.prev()[0] || (this.token("THEN", "then", {
                    generated: !0,
                    origin: ":=, possibly missing function body",
                    last_column: this.cursor.x + 2
                  }), this.prev());
                }

                return this.prev()[0] && /IDENTIFIER|PROPERTY|INDEX_END|\}|\]|PARAM_END|THEN/.test(this.prev()[0]) ? this.prev()[2].type = f : ":" === this.prev()[0] && this.tokens.length > 1 && /IDENTIFIER|PROPERTY|INDEX_END/.test(this.tokens[this.tokens.length - 2][0]) ? (this.tokens[this.tokens.length - 2][2].type = f, this.float = null) : throwSyntaxError({
                  message: "Value expected before type reference",
                  location: {
                    first_line: this.cursor.y,
                    first_column: this.cursor.x,
                    last_line: this.cursor.y,
                    last_column: this.cursor.x,
                    src: "<anonymous>"
                  },
                  type: "SyntaxError"
                }, this.code.split("\n")[this.cursor.y - 1]), _t3;
              }
            }
          }, {
            key: "AssignKeyword",
            value: function AssignKeyword() {
              if (/^(const|var|let|local|type(?= (?:[^\x00-\x7F]|[a-zA-Z$_])(?:[^\x00-\x7F]|[a-zA-Z$_\d])*(?:<[\w, ]+>)?\s*(?:=|as))|interface)\s/.test(this.chunk)) {
                let e = /^(const|var|let|local|type|interface)\s/.exec(this.chunk)[1],
                    _t4 = e;
                return "local" === e && (_t4 = "let"), ["POSTFOR", "FOR"].includes(this.prev()[0]) ? this.forAssignLine = this.cursor.y : "type" !== e && "interface" !== e ? this.stage().assignKwd = e : this.stage().typeKwd = e, this.token(_t4.toUpperCase(), e, {
                  $$accept: "type" !== e
                }), e.length;
              }
            }
          }, {
            key: "ImportExport",
            value: function ImportExport() {
              let e;

              if (e = /^(import|export)\s/.exec(this.chunk)) {
                let [, _t5] = e;
                return "." == this.prev()[0] ? this.token("PROPERTY", _t5) : (this.token(_t5.toUpperCase(), _t5), this.opLine = _t5, this.opLevel = this.stages.length, this.portLine = this.cursor.y), _t5.length;
              }
            }
          }, {
            key: "Literal",
            value: function Literal() {
              let e, s, i;

              if (this.isELSON ? (s = /^(\[|\{|\}|\]|:|,|-?>|=>?|[*-])/, i = /^(:|=>?|-?>)/.test(this.chunk)) : s = /^([=!]==|=[<>=]|->|([+-/%!^]|[<>*&|]{1,2})=|[*<>]{1,2}|\|{1,2}|&{1,2}|;|:{1,3}|\.\.\.|\??\.|\?{1,2}|@|\,|\-{1,2}|\+{1,2}|\^|\/|\[|\]|\{|\}|\(|\)|\!|~)/, e = s.exec(this.chunk)) {
                let s,
                    l,
                    a,
                    [o, c] = e,
                    p = !0;
                if (i && (/]|}/.test(this.prev()[0]) || (this.prev().spaced = !1), l = c, c = ":"), this.isELSON && /^[*-]$/.test(c)) return "NEWLINE" === this.prev()[0] && this.prev().isNext2GenArr ? (this.tokens.splice(-2, 2, this._token("NEWLINE", 0, {
                  generated: !0
                })), this.storeBefore(["array", this.position])) : this.isPossibleArray() ? this.createImplicitArray("INDENT" === this.prev()[0]) : ["NEWLINE", "INDENT"].includes(this.prev()[0]) || this.token("NEWLINE", 0), 1;

                if (!/\.(\.\.)?/.test(c) && ("," === this.prev()[0] || "NEWLINE" === this.prev()[0] && this.prev().comma) && this.inImplicitObj()) {
                  let e = this.tokens.pop();
                  this.closeImplicitObjects(!1, !0), this.tokens.push(e);
                }

                if ("(" === c && !this.isELSON && !this.isSimulation) try {
                  new t(this.chunk, {
                    cb: (e, _t6) => {
                      if (_t6 > 0 && !e.explicit.length) return a = /^\s*[-=]>/.test(e.chunk), !0;
                    }
                  });
                } catch (e) {}

                if (!this.isELSON && (/\{|\[|\.(\.\.)?/.test(c) || a) && ("." === c && !this.prev()[0] || ["IDENTIFIER", "PROPERTY", "SYMBOL_EXISTS"].includes(this.prev()[0]) && this.prev().spaced && (!/^\s*(\n|;)/.test(this.chunk.slice(c.length)) || !this.opLine) || this.prev()[0] && !["IDENTIFIER", "PROPERTY", "]", "INDEX_END", "STRING_END", "STRING", "REGEX", "REGEX_END", ".", ")", "CALL_END", "}", "THIS", "SUCH", "SUPER", "OUTDENT"].includes(this.prev()[0]))) {
                  if (this.prev() && this.prev()[0] && "IDENTIFIER SUCH SUPER PROPERTY ] INDEX_END ) CALL_END } SYMBOL_EXISTS".split(" ").includes(this.prev()[0])) {
                    let e;
                    "IDENTIFIER" === this.prev()[0] && this.inClass && !(e = this.skipped.slice(-1)[0] === this.indentLevel) ? (this.token("PARAM_START", "(", {
                      generated: !0,
                      pair: this.position
                    }), this.paramLine = !0, this.prev().stageId = this.store(["param", this.position]), this.prev().fromClass = !0) : (e && this.skipped.pop(), this.inClass() && this.opLine && (this.opLine = !1, this.opLevel = -1), "SYMBOL_EXISTS" === this.prev()[0] && (this.prev()[0] = "FUNC_EXISTS"), this.token("CALL_START", "(", {
                      generated: !0
                    }), ++this.indentLevel, this.insertStage("call", "implicit", 1));
                  } else (this.opLine && this.prev() && ("WITH" == this.prev()[0] || "WITHIN" === this.prev()[0]) || ")>" === this.prev()[0] && this.funcLine === this.cursor.y && !this.stages.find(e => e.contains.find(e => e.includes("param")))) && (this.token("PARAM_START", "(", {
                    generated: !0,
                    pair: this.position
                  }), this.paramLine = !0, this.prev().pair = this.indentLevel, this.prev().stageId = this.store(["param", this.position]));

                  "." === c && this.token("THIS", "this", {
                    generated: !0
                  });
                }

                if (";" == c && (this.forLine !== this.cursor.y || this.forStage[this.forStage.length - 1] !== this.stages.length)) {
                  let e = this.stages.length - this.stages.map(e => e).reverse().findIndex(e => "indent" === e.type || "explicit" === e.type);
                  return this.close(), ["indent", "explicit"].includes(this.stage().type) || this.closeTo(e), this.token("NEWLINE", Math.max((/^\n+/.exec(this.chunk.slice(1)) || [""])[0].length - 1, 0), {
                    origin: ";",
                    generated: !0
                  }), 1;
                }

                if (":" === c && "switch" === this.trueStage().label && this.opLine && /\s*\n/.test(this.chunk.slice(1))) return 1;

                if (":" === c && !this.prev().spaced && ["]", "STRING", "STRING_END"].includes(this.prev()[0]) && "}" !== this.currExplicit()) {
                  let e = [];
                  if ("STRING" === this.prev()[0]) e = [this.tokens.pop()];else if (["STRING_END", "]"].includes(this.prev()[0])) {
                    let _t7 = this.tokens.findIndex(e => e[0] === this.prev()[0].replace("END", "START").replace("]", "[") && e.pair === this.prev().pair);

                    e = this.tokens.splice(_t7, this.tokens.length - _t7);
                  }
                  if (this.stage().contains.find(e => "object" === e[0])) ":" === this.prev()[0] && (this.tokens.push(this._token("{", "{", {
                    generated: !0,
                    pair: this.position
                  })), this.prev().stageId = this.store(["object", this.position]));else if (e = e.map(e => ++e.lvl && e), "NEWLINE" != this.prev()[0] || 0 !== this.prev()[1] || !this.prev().isNext2GenObj && "}" !== (this.tokens.slice(-2)[0] || [])[0]) this.tokens.push(this._token("{", "{", {
                    generated: !0,
                    pair: this.position
                  })), this.stage().lastValue = this.prev().stageId = this.store(["object", this.position]);else {
                    let e = this.tokens.slice(-2)[0],
                        _t8 = this.tokens.slice(-2)[0].stageId;
                    this.tokens.splice(this.tokens.length - 2, 2), this.tokens.push(this._token("NEWLINE", 0, {
                      inImplicitObj: !0
                    })), this.storeAt(_t8, ["object", e ? e.pair : this.position]);
                  }
                  this.tokens = [...this.tokens, ...e];
                } else if (":" === c && this.prev().spaced && this.stage().quotedIf && this.stage().quotedIf.length) {
                  let e = this.stages.length - this.stages.map(e => e).reverse().findIndex(e => "indent" === e.type || "explicit" === e.type);
                  this.close(!1, 0, !0), ["indent", "explicit"].includes(this.stage().type) || this.closeTo(e, !0);
                }

                let _,
                    u,
                    f = ["(", "[", "{"],
                    h = [")", "]", "}"],
                    m = this.prev();

                var n, r;

                if ((this.stage().typeKwd || this.funcLine === this.cursor.y || (u = "WITH" === this.prev()[0] || "WITHIN" === this.prev()[0])) && (f.push("<"), h.push(">")), (n = f.indexOf(c)) > -1) {
                  if (a) n = "PARAM_END", c = "PARAM_START", /^(A[TS]|FROM|:)$/.test(this.prev()[0]) && ((this.stage().contains[this.stage().contains.length - 1] || []).break = !0), this.opLine || (this.opLine = "function", this.opLevel = this.stages.length);else if ("(" !== c || [...this.Opening, "NEWLINE"].includes(m[0]) || m && !["FUNCTION", "WITH", "WITHIN"].includes(m[0]) && m.spaced) this.isELSON || "[" !== c || this.prev().spaced || !this.indexables.includes(this.prev()[0]) ? !this.isELSON && "[" === c && !this.prev().spaced && "." === this.prev()[0] && this.tokens.slice(-2)[0] && "THIS" === this.tokens.slice(-2)[0][0] && this.tokens.slice(-2)[0][2].generated ? (this.tokens.pop(), c = "INDEX_START", n = "INDEX_END") : "<" === c ? (u && (this.funcLine = this.cursor.y, this.opLevel = this.stages.length, this.opLine = "function"), n = ")>", c = "<(") : n = h[n] : (c = "INDEX_START", n = "INDEX_END");else {
                    let e;
                    this.funcLine === this.cursor.y || "WITH" === this.prev()[0] || "WITHIN" === this.prev()[0] || ")>" === this.prev()[0] && this.funcLine === this.cursor.y && !this.stages.find(e => e.contains.find(e => e.includes("param"))) ? (n = "PARAM_END", c = "PARAM_START") : this.inClass() && ("IDENTIFIER" === this.prev()[0] || this.prev().spaced && ("WITH" === this.prev()[0] || "WITHIN" === this.prev()[0] || ")>" === this.prev()[0] && this.funcLine === this.cursor.y && !this.stages.find(e => e.contains.find(e => e.includes("param")))) || (e = !this.prev()[2].generated && ["INDENT", "NEWLINE"].includes(this.prev()[0]))) ? (n = "PARAM_END", c = "PARAM_START", e && this.token("WITH", "with", {
                      generated: !0,
                      spaced: !0
                    })) : "SUCH SUPER IDENTIFIER PROPERTY ] INDEX_END CALL_END ) } SYMBOL_EXISTS IMPORT )>".split(" ").includes(this.prev()[0]) ? "}" === this.currExplicit() && void 0 === this.stage().label && "IDENTIFIER" === this.prev()[0] && /^(NEWLINE|INDENT|,|\{)$/.test(this.tokens.slice(-2)[0][0]) ? (c = "PARAM_START", n = "PARAM_END", this.opLine || (this.opLine = "function", this.opLevel = this.stages.length, this.funcLine = this.cursor.y)) : ("SYMBOL_EXISTS" === this.prev()[0] && (this.prev()[0] = "FUNC_EXISTS"), "IMPORT" === this.prev()[0] && (this.prev()[0] = "IDENTIFIER"), c = "CALL_START", n = "CALL_END") : n = ")";
                  }
                  "PARAM_START" === c || "<(" === c || "WITH" !== this.prev()[0] && "WITHIN" !== this.prev()[0] && (")>" !== this.prev()[0] || this.funcLine !== this.cursor.y || this.stages.find(e => e.contains.find(e => e.includes("param")))) ? ("(" !== c && "<(" !== c || a) && !this.opLine && "SUCH SUPER IDENTIFIER PROPERTY ] INDEX_END CALL_END ) } SYMBOL_EXISTS".split(" ").includes(this.prev()[0]) && this.prev().spaced && !this.paramLine && (this.skipped.slice(-1)[0] === this.indentLevel && this.inExplicit() && this.skipped.pop(), "SYMBOL_EXISTS" === this.prev()[0] && (this.prev()[0] = "FUNC_EXISTS"), this.token("CALL_START", "(", {
                    generated: !0
                  }), ++this.indentLevel, this.insertStage("call", "implicit", 1)) : (this.token("PARAM_START", "(", {
                    generated: !0,
                    pair: this.position
                  }), this.opLine || (this.opLine = "function", this.opLevel = this.stages.length), this.paramLine = !0, this.prev().stageId = this.store(["param", this.position]));

                  let e = this.inExplicit(),
                      _t9 = /WHILE|UNTIL|IF|UNLESS|WITH|WITHIN|CATCH|FOR/.test(this.prev()[0]) && !this.prev().cc && "(" === c;

                  _t9 && (this.prev().cc = !0, p = !1), "{" == c && (this.funcLine === this.cursor.y || this.opLine && !e) && [...this.postfixeables.slice(0, 8), "THEN"].includes(this.prev()[0]) && "DEFAULTS" !== this.prev()[0] && "," !== this.prev()[0] && ":" !== this.prev()[0] && (this.close(), this.closeTo(this.opLevel), this.funcLine === this.cursor.y && (this.funcLine = -1), "THEN" !== this.prev()[0] && this.inClass() && this.token("THEN", "", {
                    generated: !0
                  })), this.explicit.push([n, this.indentLevel, s = this.position + 1, this.stages.length, _t9]);
                  let i = this.stage();
                  this.insertStage("explicit", n, 0), i.typeKwd && (this.stage().typeKwd = i.typeKwd);
                } else if (h.includes(c)) {
                  this.rmNL();
                  let e = c;
                  if (")" === c && "CALL_END" === this.currExplicit() ? e = "CALL_END" : "]" === c && "INDEX_END" === this.currExplicit() ? e = "INDEX_END" : ")" === c && "PARAM_END" === this.currExplicit() ? (e = "PARAM_END", this.paramLine = !1) : "}" === c && "}}" === this.currExplicit() ? e = c = "}}" : "}" === c && !this.explicit.length && this.isInterpolation ? e = c = "INTERPOLATION_END" : ">" === c && (e = c = ")>"), !(this.explicit.slice(-1)[0] && this.currExplicit() === e || "INTERPOLATION_END" === e)) throw this.explicit.length ? `${this.cursor.y}:${this.cursor.x} missing ` + this.currExplicit() : "unexpected " + c;
                  {
                    let _t10 = "INTERPOLATION_END" === e ? 0 : this.explicit.slice(-1)[0][3];

                    this.close(), this.closeTo(_t10), this.rmNL(), r = this.explicit.pop() || e, Array.isArray(r) && r[4] && (_ = !0);
                  }
                }

                if ("[()]".split("").includes(c)) switch (c) {
                  case "(":
                  case "[":
                    a && (c = "PARAM_START", this.paramLine = !0), "(" !== c || [...this.Opening, "NEWLINE"].includes(m[0]) || m && !["FUNCTION", "WITH", "WITHIN"].includes(m[0]) && m.spaced ? this.isELSON || "[" !== c || this.prev().spaced || !this.indexables.includes(this.prev()[0]) ? !this.isELSON && "[" === c && !this.prev().spaced && "." === this.prev()[0] && this.tokens.slice(-2)[0] && "THIS" === this.tokens.slice(-2)[0][0] && this.tokens.slice(-2)[0][2].generated && (c = "INDEX_START") : c = "INDEX_START" : this.funcLine === this.cursor.y || "WITH" === this.prev()[0] || "WITHIN" === this.prev()[0] ? (this.funcLine === this.cursor.y && (this.funcLine = -1), c = "PARAM_START", this.paramLine = !0) : this.inClass() && ("IDENTIFIER" === this.prev()[0] || this.prev().spaced && ("WITH" === this.prev()[0] || "WITHIN" === this.prev()[0]) || !this.prev()[2].generated && ["INDENT", "NEWLINE"].includes(this.prev()[0])) ? (c = "PARAM_START", this.paramLine = !0) : "SUCH SUPER IDENTIFIER PROPERTY ] INDEX_END CALL_END ) } SYMBOL_EXISTS".split(" ").includes(this.prev()[0]) ? (this.inExplicit() || "}" === this.currExplicit() && void 0 === this.stage().label) && "IDENTIFIER" === this.prev()[0] && /^(NEWLINE|INDENT|,|\{)$/.test(this.tokens.slice(-2)[0][0]) ? c = "PARAM_START;" : ("SYMBOL_EXISTS" === this.prev()[0] && (this.prev()[0] = "FUNC_EXISTS"), c = "CALL_START") : c = "(";
                    break;

                  case ")":
                  case "]":
                    c = r[0];
                }

                if ("," === c && (")" !== this.stage().label ? this.rmNL() : ")" !== this.stage().label || this.stage().contains.length || [this.forLine, this.funcLine, this.portLine].includes(this.cursor.y) || (c = "NEWLINE")), "|" === c && "NEWLINE" === this.prev()[0] && !this.prev()[2].generated && this.prev()[1] < 2 && !this.stage().typeKwd && (this.rmNL(), p = !1, o = /^(\|\s*)/.exec(this.chunk)[0]), /^(\^|[&|]{1,2}|\+|\-|\*|\/|\%|[<>]{2,3})=/.test(c) && (l = c, c = "MATH_BIN"), /^(===?|!==?|[><]=?)$/.test(c) && /^(&&|AND)$/.test(this.prev()[0]) && (this.prev()[2].origin = this.prev()[1], this.prev()[0] = "COMPOUND_AND"), "/" === c && (c = "DIVISION", l = "/"), /[-=]>/.test(c)) {
                  switch (this.prev()[0]) {
                    case "]":
                    case "}":
                      {
                        let e = this.tokens.map(e => e[0] === ("]" === this.prev()[0] ? "[" : "{") && e.pair).lastIndexOf(this.prev().pair),
                            _t11 = this.tokens.slice(e);

                        _t11 = _t11.map(e => ("AS" === e[0] && (e[0] = "DEFAULTS"), e)), this.tokens.splice(e, _t11.length, this._token("PARAM_START", "(", {
                          generated: !0
                        }), ..._t11, this._token("PARAM_END", ")", {
                          generated: !0
                        }));
                        break;
                      }

                    default:
                      {
                        let e;
                        "THIS . PROPERTY" === this.tokens.slice(-3).map(e => e[0]).join(" ") ? e = 3 : "IDENTIFIER" === this.prev()[0] && (e = 1), e ? (this.tokens.splice(this.tokens.length - e, 0, this._token("PARAM_START", "(", {
                          generated: !0
                        })), this.token("PARAM_END", ")", {
                          generated: !0
                        })) : "PARAM_END" !== this.prev()[0] && (this.isPossibleArray() && this.createImplicitArray(), [":", "AS", "FROM", "AT", "RETURN", "YIELD", "ASYNC", "AWAIT"].includes(this.prev()[0]) || this.token("NEWLINE", 0, {
                          generated: !0
                        }));
                        break;
                      }
                  }

                  this.opLine || (this.opLine = "FUNC_DIRECTIVE", this.opLevel = this.stages.length), c = "FUNC_DIRECTIVE";
                }

                return "?" === c && ["SUCH", "SUPER", "IDENTIFIER", "PROPERTY", "]", "INDEX_END", "CALL_END", ")", "}"].includes(this.prev()[0]) && !this.prev().spaced ? (c = "SYMBOL_EXISTS", l = "?") : "?" === c && ((this.stage().contains[this.stage().contains.length - 1] || {}).break = !0), "?." === c && (l = c, c = "."), "?" === c && (this.stage().quotedIf || (this.stage().quotedIf = []), this.stage().quotedIf.push(1)), ":" === c && (this.stage().quotedIf || (this.stage().quotedIf = []), this.stage().quotedIf.pop()), _ && (this.token("THEN", "then", {
                  generated: !0
                }), this.prev().canBlock = !0, p = !1, this.opLine = !1, this.opLevel = -1), p && (/^([<>=!]=|[!=]==|>{1,3}|<{1,2}|\*{1,2}|\^|%|&{1,2}|\|{1,2}|\?|:|DIVISION|MATH_BIN|\}|\]|,|\)|INDEX_END|CALL_END|PARAM_END)$/.test(c) && this.rmNL(), this.token(c, o, {
                  pair: s || r && r[2] || void 0,
                  origin: l
                })), "PARAM_START" === c && (this.paramLine = !0), "PARAM_END" === c && (this.paramLine = !1), "(" === c && (this.prev().$$accept = !0), "," === c && this.isPossibleArray() && this.createImplicitArray(), o.length;
              }
            }
          }, {
            key: "Number",
            value: function Number() {
              let e = /^(0b[01](?:_?[01])*n?|^0o[0-7](?:_?[0-7])*n?|^0x[\da-f](?:_?[\da-f])*n?|^\d+n|^-?(?:\d(?:_?\d)*)?\.?(?:\d(?:_?\d)*)+(?:e[+-]?(?:\d(?:_?\d)*)+)?)(:)?/i;

              if (e.test(this.chunk)) {
                let _t12,
                    [, s, i] = e.exec(this.chunk);

                if (s.startsWith(".") && !this.prev().spaced) return;
                if (i) return;
                if ("." === this.prev()[0]) return s = s.indexOf(".") > -1 ? s.slice(0, s.indexOf(".")) : s, this.tokens.pop(), this.token("INDEX_START", "[", {
                  generated: !0
                }), this.token("NUMBER", s), this.token("INDEX_END", "]", {
                  generated: !0
                }), this.prev()[2].first_column = this.cursor.x + s.length, s.length;
                {
                  let e;

                  if ("SUCH SUPER IDENTIFIER PROPERTY ] INDEX_END CALL_END ) } SYMBOL_EXISTS".split(" ").includes(this.prev()[0]) && this.prev().spaced ? (this.skipped.slice(-1)[0] === this.indentLevel && this.inExplicit() && this.skipped.pop(), "SYMBOL_EXISTS" === this.prev()[0] && (this.prev()[0] = "FUNC_EXISTS"), this.token("CALL_START", "(", {
                    generated: !0
                  }), ++this.indentLevel, this.insertStage("call", "implicit", 1)) : this.uncontinuous.includes(this.prev()[0]) && this.prev().spaced && (this.isPossibleArray() && this.createImplicitArray(), this.token("NEWLINE", 0, {
                    generated: !0
                  })), (e = "," === this.prev()[0]) && this.inImplicitObj()) {
                    let e = this.stage().contains.findIndex(e => "object" === e[0]);
                    this.close(!1, e), this.isPossibleArray() && this.createImplicitArray(), this.token("NEWLINE", 0, {
                      isNext2GenObj: !0,
                      generated: !0
                    });
                  }

                  _t12 = Infinity === parseInt(s) ? "INFINITY" : "NUMBER";
                }
                return this.token(_t12, s), s.length;
              }
            }
          }, {
            key: "Whitespace",
            value: function Whitespace() {
              if (/^( )+/.test(this.chunk)) return this.prev().spaced = !0, /^( )+/.exec(this.chunk)[0].length;
            }
          }, {
            key: "Identifier",
            value: function Identifier() {
              let e,
                  _t13 = this.isELSON ? /^((?:[^\x00-\x7F]|[a-z$_])(?:[^\x00-\x7F]|[a-z$_\d])*)(\s*(:|=>?|-?>))/i : /^((?:[^\x00-\x7F]|[a-z$_])(?:[^\x00-\x7F]|[a-z$_\d])*)(\??:(?!:))?/i,
                  s = this.isELSON ? /^(0b[01](?:_?[01])*n?|^0o[0-7](?:_?[0-7])*n?|^0x[\da-f](?:_?[\da-f])*n?|^\d+n|^(?:\d(?:_?\d)*)?\.?(?:\d(?:_?\d)*)+(?:e[+-]?(?:\d(?:_?\d)*)+)?)(\s*(:|=>?|-?>))/i : /^(0b[01](?:_?[01])*n?|^0o[0-7](?:_?[0-7])*n?|^0x[\da-f](?:_?[\da-f])*n?|^\d+n|^(?:\d(?:_?\d)*)?\.?(?:\d(?:_?\d)*)+(?:e[+-]?(?:\d(?:_?\d)*)+)?)(\??:(?!:))?/i;

              if (_t13.test(this.chunk) || s.test(this.chunk) && (e = !0)) {
                let i,
                    n,
                    r,
                    [l, a, o] = (e ? s : _t13).exec(this.chunk);
                "?:" !== o || this.stage().typeKwd ? "?:" === o && (r = "?:") : (o = !1, l = a);
                let c,
                    p = this.prev();
                if (this.isELSON && !o) return;

                if (p && p[0] && p.spaced && "SUCH SUPER IDENTIFIER PROPERTY ] CALL_END ) } SYMBOL_EXISTS )>".split(" ").includes(p[0])) {
                  if (this.isELSON) return;
                  let e;
                  ("IDENTIFIER" === p[0] || ")>" === p[0]) && this.inClass() && !(e = this.skipped.slice(-1)[0] === this.indentLevel) || this.funcLine === this.cursor.y ? (this.token("PARAM_START", "(", {
                    generated: !0,
                    pair: this.position
                  }), this.opLine || (this.opLine = "function", this.opLevel = this.stages.length), this.paramLine = !0, this.prev().stageId = this.store(["param", this.position]), this.prev().fromClass = !0) : (e && this.inExplicit() && this.skipped.pop(), this.inClass() && this.opLine && (this.opLine = !1, this.opLevel = -1), "SYMBOL_EXISTS" === this.prev()[0] && (this.prev()[0] = "FUNC_EXISTS"), p = this.token("CALL_START", "(", {
                    generated: !0
                  }), ++this.indentLevel, this.insertStage("call", "implicit", 1));
                } else this.opLine && p && ("WITH" == p[0] || "WITHIN" == p[0]) && (this.token("PARAM_START", "(", {
                  generated: !0,
                  pair: this.position
                }), this.paramLine = !0, this.prev().stageId = this.store(["param", this.position]));

                if ("." === this.prev()[0]) i = "PROPERTY";else {
                  if (i = "IDENTIFIER", this.uncontinuous.includes(this.prev()[0]) && this.prev().spaced) {
                    if (this.isELSON) return;
                    this.isPossibleArray() && this.createImplicitArray(), this.token("NEWLINE", 0, {
                      generated: !0
                    });
                  }

                  o && "CLASS" === this.prev()[0] && (o = !1, n = !0);
                }
                "IDENTIFIER" == i && !o && "," == this.prev()[0] && (c = this.stage().contains.findIndex(e => "object" === e[0])) > -1 && (this.tokens.pop(), this.close(!1, c), this.isPossibleArray() && this.createImplicitArray(), this.token("NEWLINE", 0, {
                  isNext2GenObj: !0,
                  generated: !0
                })), "IDENTIFIER" === i && !o && this.prev().comma && this.isPossibleArray() && ["indent", "unfinished"].includes(this.stage().type) && this.createImplicitArray(), o || "IDENTIFIER" !== i || "this" !== a && "such" !== a && "super" !== a && "function" !== a || (i = a.toUpperCase());

                let _ = "switch" === this.trueStage().label && (this.opLine || /^(default|otherwise|else)$/.test(a)) && /^\s*(\{\s*)?\n/.test(this.chunk.slice(l.length));

                if (this.token(i, a), ("IDENTIFIER" == i || "THIS" == i || "SUCH" == i || "SUPER" == i) && o && (this.inExplicit() && /^(A[ST]|FROM|:|\[|\(|PARAM_START|DEFAULTS)$/.test(p[0]) || !this.inExplicit() && ("}" !== this.currExplicit() || void 0 !== this.stage().label)) && !_) {
                  if (this.stage().contains.find(e => "object" === e[0])) {
                    let e = this.tokens.pop();
                    e[0] = "PROPERTY";
                    let _t14 = [e];
                    "..." === this.prev()[0] && (_t14 = [this.tokens.pop(), ..._t14]), ":" === this.prev()[0] ? (this.tokens.push(this._token("{", "{", {
                      generated: !0,
                      pair: this.position
                    }), ..._t14), this.prev().stageId = this.store(["object", this.position])) : this.tokens = [...this.tokens, ..._t14];
                  } else {
                    let e = this.tokens.pop();

                    if (++e.lvl, e[0] = "PROPERTY", "NEWLINE" != this.prev()[0] || 0 !== this.prev()[1] || !this.prev().isNext2GenObj && "}" !== (this.tokens.slice(-2)[0] || [])[0]) {
                      let _t15 = [e];
                      "..." === this.prev()[0] && (_t15 = [this.tokens.pop(), ..._t15]), this.tokens.push(this._token("{", "{", {
                        generated: !0,
                        pair: this.position
                      }), ..._t15), this.stage().lastValue = this.prev().stageId = this.store(["object", this.position]);
                    } else {
                      let _t16 = this.tokens.slice(-2)[0],
                          s = this.tokens.slice(-2)[0].stageId;
                      this.tokens.splice(this.tokens.length - 2, 2), this.tokens.push(this._token("NEWLINE", 0, {
                        inImplicitObj: !0,
                        generated: !0
                      }), e), this.storeAt(s, ["object", _t16 ? _t16.pair : this.position]);
                    }
                  }

                  this.token(":", ":", {
                    first_column: this.cursor.x + l.length - 1,
                    last_column: this.cursor.x + l.length,
                    origin: r
                  }), o = !1;
                }

                return "IDENTIFIER" === i && /^(yes|no)$/.test(a) && /^(yes|no)$/.test(a) && (this.prev()[2].origin = a, this.prev()[1] = "yes" === a ? "true" : "false", this.prev()[0] = "BOOL"), ["SWITCH", "FOR", "UNLESS", "WHILE", "FUNCTION"].includes(i) && ("FUNCTION" === i && (this.funcLine = this.cursor.y), this.opLine = i.toLowerCase(), this.opLevel = this.stages.length, this.tokens.slice(-2)[0] && /^(A[ST]|FROM|:)$/.test(this.tokens.slice(-2)[0][0]) && ((this.stage().contains[this.stage().contains.length - 1] || [{}])[0].break = !0)), o && !_ ? (this.prev()[0] = "PROPERTY", this.token(":", ":", {
                  first_column: this.cursor.x + l.length - 1,
                  last_column: this.cursor.x + l.length,
                  origin: r
                })) : o ? "IDENTIFIER" === i && /^(default|otherwise|else)$/.test(a) && (this.prev()[2].origin = this.prev()[1], this.prev()[0] = "DEFAULT", this.opLevel = this.trueStageLevel() + 1, this.opLine = "default") : n && this.token("EXTENDS", "extends", {
                  generated: !0
                }), "IDENTIFIER" === i && this.names.push(a), l.length;
              }
            }
          }, {
            key: "KeywordStatement",
            value: function KeywordStatement() {
              let e = this.isELSON ? /^(true|false|yes|no|null|nil|undefined)(:)?/ : /^(=|as|and|or|plus|includes|has|function\*?|[gs]et|static|i[fn]|of|or|not|true|false|undefined|nil|null|new|delete|return|void|yield|await|async|either|do|with(?:in)?|whil(?:e|st)|for|whe(?:n|ther)|unless|until|else|loop|has|try|catch|finally|otherwise|then|exists|class|extends|typeof|instanceof|is not|is(?:nt)?|defaults?|continue|break|switch|case|when|on|throw)(:)?(;|,|\s)/;

              if (e.test(this.chunk) || !this.isELSON && ((e = /^(@)\s*/).test(this.chunk) || (e = /^(with(?:in)?(?=[([{<]))/).test(this.chunk))) {
                let _t17,
                    s,
                    i,
                    n = !0,
                    [, r, l] = e.exec(this.chunk);

                if (_t17 = r, "." == this.prev()[0] && "=" !== r) return this.token("PROPERTY", r.split(" ")[0]), this.prev()[1].length;
                if (l) return;
                if (this.inClass() && /^[gs]et(;|\s|:)?$/.test(r) && !["NEWLINE", "INDENT"].includes(this.prev()[0])) return;

                if (r = r.split(" ").join(""), "extending" == r && (s = r, r = "extends"), "isnot" !== r && "isn't" !== r || (s = r, r = "isnt"), "function*" === r && (r = "function", s = "function*"), ("default" !== r || this.inSwitch() && this.portLine !== this.cursor.y && "NEWLINE" === this.prev()[0]) && "=" !== r && "as" !== r || (this.rmNL(), s = r, r = "defaults"), "otherwise" !== r && "else" !== r || !this.inSwitch() || "NEWLINE" !== this.prev()[0] || ([s, r] = [r, "default"]), "defaults" !== r || this.paramLine || (r = "default", s = s || "defaults", ":" === this.prev()[0] && this.tokens.pop(), "PROPERTY" === this.prev()[0] ? this.prev()[0] = "IDENTIFIER" : this.rmNL()), "otherwise" === r && ([r, s] = ["else", r]), "nil" === r && ([s, r] = [r, "null"]), "yes" === r && ([s, r] = [r, "true"]), "no" === r && ([s, r] = [r, "false"]), ("," === this.prev()[0] || ":" === this.prev()[0] && ["defaults"].includes(r) && "=" !== s) && this.inImplicitObj()) {
                  let e;
                  "," === this.prev()[0] && (e = this.tokens.pop()), this.closeImplicitObjects(!!e && "defaults" !== r, !0);
                }

                if ("either" === r && (this.stage().eitherLine = this.cursor.y, this.inSwitch() && (this.opLine = r, this.opLevel = this.stages.length)), ["and", "or", "in", "of", "is", "isnt"].includes(r)) {
                  let e = !0;

                  if (this.rmNL(), ["in", "of"].includes(r) && this.forLine !== this.cursor.y && (e = !1), e) {
                    ["in", "of"].includes(r) && (s = r, r = "for_" + r, this.forLine = -1, this.forStage.pop());
                    let e = this.stages.length - this.stages.map(e => e).reverse().findIndex(e => "indent" === e.type || "explicit" === e.type);
                    this.close(), ["indent", "explicit"].includes(this.stage().type) || this.closeTo(e), "]" === this.prev()[0] && "for_in" === r && (this.tokens = this.tokens.filter(e => !(/\[|\]/.test(e[0]) && e.pair == this.prev().pair)), r = "for_as"), "or" === r && this.stage().eitherLine === this.cursor.y && (r = "either_or");
                  }
                }

                if (!this.isELSON && (this.postfixeables.includes(this.prev()[0]) && "if switch case when within while whilst class new delete await async do for until loop unless @ whether function plus includes has true false undefined null catch finally try".split(" ").includes(r) || "with" === r && this.prev()[0] && ["PROPERTY", "INDEX_END", "}", "}}", "CALL_END", "SUPER", "SUCH"].includes(this.prev()[0]))) {
                  if (["RETURN", "BREAK", "CONTINUE", "STRING", "STRING_END", "NUMBER", "UNDEFINED", "NULL", "BOOL", "THIS", "REGEX", "REGEX_END", "INFINITY"].includes(this.prev()[0]) || ["if", "when", "whilst", "for", "unless", "while", "until", "return", "break", "loop", "continue", "function", "plus", "includes", "has", "else", "finally", "catch"].includes(r) && ("case" !== r || this.inSwitch)) {
                    if (["if", "for", "unless", "while", "until", "else", "catch", "finally", "when", "whilst", "includes", "has", "plus"].includes(r) || "case" === r && this.inSwitch) {
                      let e,
                          _t18 = this.stages.length - this.stages.map(e => e).reverse().findIndex(e => "indent" === e.type || "explicit" === e.type);

                      return this.close(), ["indent", "explicit"].includes(this.stage().type) || this.closeTo(_t18), ["catch", "finally"].includes(r) && (this.opLine = r, this.opLevel = this.stages.length), "for" === r && (this.forLine = this.cursor.y, this.forStage[this.forStage.length] = this.stages.length), "while" === r && this.forLine === this.cursor.y && (r = "whilst", e = "while"), !this.inSwitch() || "NEWLINE" !== this.prev()[0] || "when" !== r && "case" !== r || (this.stage().eitherLine = this.cursor.y), !this.inSwitch && "when" == r && "]" == this.prev()[0] && this.prev()[2].generated && this.forLine === this.cursor.y && (this.tokens = this.tokens.filter(e => !(/\[|\]/.test(e[0]) && e.pair == this.prev().pair))), this.rmNL(), this.token({
                        if: "POSTIF",
                        unless: "POSTUNLESS",
                        for: "POSTFOR",
                        while: "POSTWHILE",
                        until: "POSTUNTIL",
                        case: "POSTCASE",
                        when: this.forLine === this.cursor.y ? "WHEN" : "POSTCASE"
                      }[r] || r.toUpperCase(), r, {
                        $$accept: !0,
                        origin: e
                      }), r.length;
                    }

                    this.uncontinuous.includes(this.prev()[0]) && this.prev().spaced && (this.isPossibleArray() && this.createImplicitArray(), this.token("NEWLINE", 0, {
                      generated: !0
                    }), (this.stage().contains[this.stage().contains.length - 1] || {}).break = !0);
                  } else "SYMBOL_EXISTS" === this.prev()[0] && (this.prev()[0] = "FUNC_EXISTS"), this.token("CALL_START", "(", {
                    generated: !0
                  }), ++this.indentLevel, this.insertStage("call", "implicit", 1);
                } else !this.isELSON && [":", "=", "AS", "FROM", "AT"].includes(this.prev()[0]) && ["if", "unless", "switch", "for", "while", "try", "with", "within", "either", "async", "until"].includes(r) && ((this.stage().contains[this.stage().contains.length - 1] || []).break = !0);

                if (["case", "or", "if", "when"].includes(r) && this.inSwitch() && "OR" === this.prev()[0] && (this.prev()[0] = "COMPOUND_OR", this.prev()[2].origin = "OR"), ("case" === r && !this.inSwitch || "whether" === r) && (r = "!", this.token("!", "!", {
                  origin: "case"
                })), "if" == r || "switch" == r || "case" == r || "when" == r || "while" == r || "class" == r || "with" == r || "within" == r || "function" == r || "else" == r || "otherwise" == r || "return" == r || "unless" == r || "until" == r || "loop" == r || "for" == r || "try" == r || "catch" == r || "async" == r || "finally" == r || !this.inClass && /[gs]et/.test(r)) {
                  if (!this.opLine) {
                    if (/[gs]et/.test(r)) return;
                    this.opLine = r, this.opLevel = this.stages.length;
                  }

                  "function" == r && (this.funcLine = this.cursor.y), "async" == r && this.funcLine !== this.cursor.y && (this.funcLine = this.cursor.y), "for" === r && (this.forLine = this.cursor.y);
                }

                return "else" != r && "otherwise" != r && "then" != r && "or" != r && "either_or" != r && "and" != r && "catch" != r && "finally" != r || this.rmNL(), "then" == r && this.opLine && this.opLevel === this.trueStageLevel() ? (this.rmNL(), this.close(), this.closeTo(this.opLevel), this.actExp = this.opLine, this.opLine = !1, this.opLevel = -1, "THEN" === this.prev()[0] && this.prev()[2].generated && (i = this.tokens.pop()[2].type)) : "then" === r && (s = r, r = "CHAIN"), /^(true|false|null|undefined)$/.test(r) ? this.token(/true|false/.test(r) ? "BOOL" : r.toUpperCase(), r.trim(), {
                  origin: s
                }) : n && (this.token(r.trim().toUpperCase(), r.trim(), {
                  origin: s,
                  $$accept: "!" !== r
                }), i && (this.prev()[2].type = i)), _t17.length;
              }
            }
          }, {
            key: "Assign",
            value: function Assign() {
              let e = /^(at|from|as|=)(:)?\s/;

              if (e.test(this.chunk)) {
                let _t19,
                    [, s, i] = e.exec(this.chunk),
                    n = s.length;

                if ("=" == s || "as" == s) {
                  if (this.paramLine) return;
                  "=" == s ? (":" === this.prev()[0] && (this.tokens.pop(), "PROPERTY" === this.prev()[0] && "." !== (this.tokens.slice(-2)[0] || [])[0] && (this.prev()[0] = "IDENTIFIER")), _t19 = s, s = "as") : "DEFAULTS" === this.prev()[0] && (this.prev()[0] = "DEFAULT");
                } else {
                  if ("." == this.prev()[0] && !i) return this.token("PROPERTY", s), n;
                  if (i) return;
                }

                this.rmNL();
                let r = "as" === s && (this.portLine === this.cursor.y || "indent" === this.stage().type && ("import" === this.stage().label || "export" === this.stage().label));
                return _t19 || (r || this.closeImplicitObjects(), this.assignLine = -1, "as" !== s && this.forLine === this.cursor.y && (this.forLine = -1, s = "for_" + s, this.close(!1), "]" === this.prev()[0] && this.prev()[2].generated && (this.tokens = this.tokens.filter(e => !(/\[|\]/.test(e[0]) && e.pair == this.prev().pair))))), "as" === s || _t19 || "AS" !== this.prev()[0] || (this.tokens.pop(), _t19 = "as " + s), this.token(s.toUpperCase(), s, {
                  origin: _t19,
                  $$accept: "=" !== _t19 || this.stage().typeKwd
                }), this.inClass() && this.skipped.push(this.indentLevel), n;
              }
            }
          }, {
            key: "Separator",
            value: function Separator() {
              let e = new RegExp("^(\\n[\\s]*?)+((\\t| {" + this.tabSize + "})+|)?");

              if (e.test(this.chunk)) {
                let r,
                    [l,, a] = e.exec(this.chunk);

                for (this.isUnfinished(); r = new RegExp("^\\n((\\t| {" + this.tabSize + "})+|)").exec(this.chunk.slice(l.length));) l += r[0], a = r[1];

                let o = l.split("").filter(e => "\n" == e).length;
                a = void 0 === a ? 0 : a.split(new RegExp(" {" + this.tabSize + "}|\t", "g")).slice(1).length;

                let c = _objectSpread({}, this.cursor);

                c.y += o, c.x = 1 + l.length - o;

                const p = () => {
                  this.cursor.y = c.y, this.cursor.x = c.x, this.forceCursorAtX = !0;
                };

                if (this.inClass() && "PROPERTY" === this.prev()[0] && this.opLine && (this.opLine = !1, this.opLevel = -1), this.opLine && (this.closeTo(this.opLevel, !0), this.rmNL(), this.actExp = this.opLine, this.opLine = !1, this.opLevel = -1, this.forceIndent = !0, this.funcLine === this.cursor.y && (this.funcLine = -1)), a == this.indentLevel) {
                  let e, _t21;

                  "{" === this.prev()[0] && this.actExp && (this.explicit[this.explicit.length - 1][0] = "}}", this.prev()[0] = "{{"), this.actExp = !1, ("," === this.prev()[0] || "NEWLINE" === this.prev()[0] && this.prev().comma) && (e = this.tokens.pop()), "NEWLINE" === this.prev()[0] && (o += this.tokens.pop()[1]), o > 1 ? (this.close(), _t21 = !0) : (this.closeImplicitObjects(!1, !!e, !!e), _t21 = !1), this.stage().quotedIf = void 0;
                  let s = !this.Unfinished.includes(this.prev()[0]),
                      i = this.stage().contains.length;
                  return e && this.rmNL(), s && o && i && this.token("NEWLINE", Math.max(o - 1, 0), {
                    isNext2GenObj: !_t21 && "}" === this.prev()[0] && this.prev()[2].generated,
                    isNext2GenArr: !_t21 && "]" === this.prev()[0] && this.prev()[2].generated,
                    $$accept: !_t21
                  }), s && "NEWLINE" !== this.prev()[0] && "INDENT" !== this.prev()[0] && this.token("NEWLINE", Math.max(o - 1, 0), {
                    isNext2GenObj: !_t21 && "}" === this.prev()[0] && this.prev()[2].generated,
                    isNext2GenArr: !_t21 && "]" === this.prev()[0] && this.prev()[2].generated,
                    $$accept: !0
                  }), _t21 && (this.prev().$$accept = !0, delete this.prev().isNext2GenArr, delete this.prev().isNext2GenObj), this.prev().comma = !!e, o > 1 && this.stage().assignKwd && (this.stage().assignKwd = ""), o > 1 && this.stage().typeKwd && (this.stage().typeKwd = ""), this.inClass() && !this.opLine && (this.opLine = "function", this.opLevel = this.stages.length), i && (this.prev().inImplicitObj = !0), p(), l.length;
                }

                if (a > this.indentLevel) {
                  let e;

                  if (this.stage().contains.map(e => e[0]).includes("object") && ":" !== this.prev()[0] && (e = !0), !this.actExp || "OUTDENT" === this.prev()[0] || "NEWLINE" === this.prev()[0] || e || "IF" === this.prev()[0] || "SWITCH" === this.prev()[0] || "WHILE" === this.prev()[0] || "[" === this.prev()[0] || "{" === this.prev()[0] || "(" === this.prev()[0] || ":" === this.prev()[0] || /^(A[ST]|FROM)$/.test(this.prev()[0])) {
                    var _t20 = "INDENT",
                        s = this.stage().contains.map(e => e[0]).includes("array"),
                        i = this.stage().assignKwd,
                        n = this.stage().typeKwd;
                    let e = "indent",
                        r = 0;

                    for (; this.indentLevel !== a;) ++this.indentLevel, ++r;

                    let o = !0;

                    if ("{" === this.prev()[0] && this.actExp || "{" === this.prev()[0] && this.tokens[this.tokens.length - 2] && this.tokens[this.tokens.length - 2].canBlock ? (this.explicit[this.explicit.length - 1][0] = "}}", this.prev()[0] = "{{") : !"IDENTIFIER SUCH SUPER PROPERTY ] INDEX_END CALL_END ) } SYMBOL_EXISTS".split(" ").includes(this.prev()[0]) || this.actExp || i || this.stage().typeKwd ? !this.actExp && /^AT|AS|FROM|:$/.test(this.prev()[0]) && (o = !1) : this.inClass && "IDENTIFIER" === this.prev()[0] || ("SYMBOL_EXISTS" === this.prev()[0] && (this.prev()[0] = "FUNC_EXISTS"), _t20 = "CALL_START", e = "call", o = !1), o && this.close(!1, 0, !0), [s, i].includes(!0) && "NEWLINE" === this.prev()[0] && (this.tokens.pop(), "," !== this.prev()[0] && this.token(",", ",", {
                      generated: !0
                    })), this.insertStage(e, "call" === e ? "implicit" : this.actExp, r), i && (this.stage().assignKwd = i), n && (this.stage().typeKwd = n), this.inClass()) {
                      for (; "NEWLINE" === this.prev()[0];) this.tokens.pop();

                      this.opLine = "function", this.opLevel = this.stages.length;
                    }

                    this.token(_t20, l, {
                      $$accept: !0,
                      pair: this.position
                    }), this.actExp = !1;
                  } else {
                    let e;
                    this.close(!1, 0, !0), this.inClass() && "PARAM_END" !== this.prev()[0] && "WITH" !== this.prev()[0] && "WITHIN" !== this.prev()[0] && "IDENTIFIER" == this.prev()[0] && this.token("WITH", "with", {
                      generated: !0
                    }), this.inClass() && (e = !0);
                    let _t22 = 0;

                    for (; this.indentLevel !== a;) ++this.indentLevel, ++_t22;

                    if (this.token("INDENT", l, {
                      $$accept: !0,
                      pair: this.position + 1
                    }), this.insertStage("indent", this.actExp, _t22), this.actExp = !1, e) {
                      for (; "NEWLINE" === this.prev()[0];) this.tokens.pop();

                      this.opLine = this.actExp = "function", this.opLevel = this.stages.length;
                    }
                  }

                  return p(), l.length;
                }

                if (a < this.indentLevel) {
                  for (; "NEWLINE" == this.prev()[0];) this.tokens.pop();

                  let e, _t23;

                  return "," === this.prev()[0] && this.tokens.pop(), this.closeToIndent(a), this.stage().contains.length && "explicit" === this.stage().type || ("call" === this.stage().type && this.close(), o > 1 && this.token("NEWLINE", Math.max(o - 1, 0), {
                    $$accept: !0
                  })), o > 1 ? (this.close(), _t23 = !0, this.stage().typeKwd = "", this.stage().assignKwd = "") : (this.closeImplicitObjects(!1, !!e, !!e), _t23 = !1), "NEWLINE" !== this.prev()[0] && "INDENT" !== this.prev()[0] && this.token("NEWLINE", Math.max(o - 1, 0), {
                    isNext2GenObj: "}" === this.prev()[0] && this.prev()[2].generated,
                    isNext2GenArr: "]" === this.prev()[0] && this.prev()[2].generated,
                    $$accept: !(/}|]/.test(this.prev()[0]) && !this.prev()[2].generated)
                  }), this.prev().comma = !!e, this.actExp = !1, this.inClass() && (this.opLine = this.actExp = "function", this.opLevel = this.stages.length), p(), l.length;
                }

                return p(), l.length;
              }
            }
          }, {
            key: "Regex",
            value: function Regex() {
              let e = /^(\/)((?:\n|.|[$#]\{(?:.|\n)+\})*)(?<!\\)\1/.exec(this.chunk);

              if (Array.isArray(e)) {
                let [s, i, n] = e,
                    r = "",
                    l = 1,
                    a = this.chunk,
                    o = "",
                    c = "",
                    p = [],
                    _ = l,
                    u = !1;

                for (; o = a.charAt(l);) {
                  if (o === i && !u && ("\\" !== c || "\\" === a.charAt(Math.max(0, l - 2)))) {
                    l++, (r = /^[gimsy]+/.exec(a.slice(l))) && (r = r[0], l += r.length);
                    break;
                  }

                  if ("[" === o && "\\" !== c ? u = !0 : "]" === o && u && "\\" !== c && (u = !1), "{" !== o || !/[$#]/.test(c) || "\\" === a.charAt(Math.max(0, l - 2)) && "\\" !== a.charAt(Math.max(0, l - 3))) l++, c = o;else {
                    let e, s;
                    ({
                      tokens: e,
                      length: s
                    } = new t(a.slice(l + 1), {
                      isInterpolation: !0,
                      cursor: this.cursor,
                      filename: this.filename
                    })), p.push(this._token("REGEX", a.slice(_, l - 1)), this._token("INTERPOLATION_START", "${"), ...e, this._token("INTERPOLATION_END", "}")), _ = l + s + 2, c = "}", l += s + 2;
                  }
                }

                return a.slice(_, l - 1) && p.push(this._token("REGEX", a.slice(_, l - 1))), "IDENTIFIER SUCH SUPER PROPERTY ] INDEX_END CALL_END ) } SYMBOL_EXISTS )>".split(" ").includes(this.prev()[0]) && this.prev().spaced && (this.skipped.slice(-1)[0] === this.indentLevel && this.inExplicit() && this.skipped.pop(), "SYMBOL_EXISTS" === this.prev()[0] && (this.prev()[0] = "FUNC_EXISTS"), this.token("CALL_START", "(", {
                  generated: !0
                }), ++this.indentLevel, this.insertStage("call", "implicit", 1)), 1 === p.length ? (p[0][1] = `/${p[0][1]}${r || "/"}`, p[0][2].last_column += 2 + (r && r.length - 1 || 0), this.tokens.push(p[0])) : this.tokens.push(this._token("REGEX_START", i), ...p, this._token("REGEX_END", r)), this.chunk.slice(0, l).length;
              }
            }
          }, {
            key: "String",
            value: function String() {
              let e = /^("|'|`)((?:\n|.|[$#]\{(?:.|\n)+\})*)(?<!\\)(\1)/.exec(this.chunk),
                  s = /^\\([^\s\n]+)/.exec(this.chunk);

              if (e) {
                let [s, i, n] = e,
                    r = _objectSpread({}, this.cursor);

                r.x++;
                let l = 1,
                    a = this.chunk,
                    o = "",
                    c = "",
                    p = [],
                    _ = l;

                for (; o = a.charAt(l);) {
                  if ("\n" === o && (r.x = 0, r.y++), r.x++, o === i && ("\\" !== c || "\\" === a.charAt(Math.max(0, l - 2)))) {
                    l++;
                    break;
                  }

                  if (this.isELSON || "{" !== o || !/\$|#/.test(c) || "\\" === a.charAt(Math.max(0, l - 2)) && "\\" !== a.charAt(Math.max(0, l - 3))) l++, c = o;else {
                    let e, s;
                    ({
                      tokens: e,
                      length: s
                    } = new t(a.slice(l + 1), {
                      isInterpolation: !0,
                      cursor: r
                    })), p.push(this._token("STRING", a.slice(_, l - 1)), this._token("INTERPOLATION_START", "${"), ...e, this._token("INTERPOLATION_END", "}")), _ = l + s + 2, c = "}", l += s + 2;
                  }
                }

                switch (a.slice(_, l - 1) && p.push(this._token("STRING", a.slice(_, l - 1))), "IDENTIFIER SUCH SUPER PROPERTY ] INDEX_END CALL_END ) } SYMBOL_EXISTS )>".split(" ").includes(this.prev()[0]) && this.prev().spaced ? (this.skipped.slice(-1)[0] === this.indentLevel && this.inExplicit() && this.skipped.pop(), "SYMBOL_EXISTS" === this.prev()[0] && (this.prev()[0] = "FUNC_EXISTS"), this.token("CALL_START", "(", {
                  generated: !0
                }), ++this.indentLevel, this.insertStage("call", "implicit", 1)) : this.uncontinuous.includes(this.prev()[0]) && this.prev().spaced && (this.isPossibleArray() && this.createImplicitArray(), this.token("NEWLINE", 0, {
                  generated: !0
                })), p.length) {
                  case 0:
                    this.token("STRING", i.repeat(2));
                    break;

                  case 1:
                    this.tokens.push(Object.assign(p[0], {
                      1: `${i}${p[0][1]}${i}`,
                      loc: _objectSpread(_objectSpread({}, p[0][2]), {}, {
                        last_column: p[0][2].last_column + 2
                      })
                    }));
                    break;

                  default:
                    {
                      let e = this.position + 1;
                      this.tokens.push(this._token("STRING_START", i, {
                        pair: e
                      }), ...p, this._token("STRING_END", i, {
                        pair: e
                      }));
                      break;
                    }
                }

                return l;
              }

              if (s) {
                let [e, _t24] = s;
                return _t24 = _t24.replace(/(?:\\*)"/g, function (e, t) {
                  let s = (/^\\+/.exec(e) ?? [])[0];
                  return s && s.length % 2 != 0 ? e.slice(0, -1) + '"' : e.slice(0, -1) + '\\"';
                }), this.token("STRING", `"${_t24}"`), e.length;
              }
            }
          }, {
            key: "Comment",
            value: function Comment() {
              let e,
                  _t25,
                  s,
                  i,
                  n = /^([{#][:?])/.exec(this.chunk) || /^(#|\/\/)/.exec(this.chunk) || /^(\/\*)/.exec(this.chunk);

              if (!n) return 0;

              if (e = "/*" === n[0], s = /[{#][:?]/.test(n[0]), _t25 = !e && !s, e) {
                let e = /\*\//g.exec(this.chunk);
                return e ? (i = this._token("COMMENT", this.chunk.slice(2, e.index)), this.cursor.y = i[2].last_line, this.cursor.x = i[2].last_column, this.forceCursorAtX = !0, this.comments.push(_objectSpread(_objectSpread({}, i), {}, {
                  inline: !1,
                  id: this.comments.length,
                  addNewlines: (/^\n*/.exec(this.chunk.slice(e.index + 2)) || [""])[0].length,
                  loc: i[2]
                })), e.index + 2) : 0;
              }

              if (s) {
                let e = 1,
                    _t26 = [];

                for (;;) {
                  if (e++, !this.chunk.charAt(e)) return 0;
                  if ("\n" === this.chunk.charAt(e) && "#" === n[0][0]) break;

                  if ("}" === this.chunk.charAt(e)) {
                    if (!_t26.length) break;

                    _t26.pop();
                  }

                  "{" === this.chunk.charAt(e) && _t26.push(1);
                }

                return i = this._token("COMMENT", this.chunk.slice(2, e).trim().split("\n").map(e => e.trim()).join("\n")), this.cursor.y = i[2].last_line, this.cursor.x = i[2].last_column, this.forceCursorAtX = !0, this.comments.push(_objectSpread(_objectSpread({}, i), {}, {
                  jsdoc: !0,
                  id: this.comments.length,
                  addNewlines: (/^\n*/.exec(this.chunk.slice(e + 1)) || [""])[0].length,
                  loc: i[2]
                })), e + ("#" === n[0][0] ? 0 : 1);
              }

              {
                let e, _t27;

                return "#" === n[0] && (_t27 = !!(e = /#/.exec(this.chunk.slice(1).split(/\n/)[0])) && 2 + e.index), _t27 || (_t27 = n[0].length + this.chunk.slice(n[0].length).split(/\n/)[0].length), i = this._token("COMMENT", this.chunk.slice(n[0].length, e ? _t27 - 1 : _t27)), this.comments.push(_objectSpread(_objectSpread({}, i), {}, {
                  inline: !e,
                  id: this.comments.length,
                  addNewlines: (/^\n*/.exec(this.chunk.slice(_t27)) || [""])[0].length,
                  loc: i[2]
                })), _t27;
              }
            }
          }, {
            key: "_token",
            value: function _token(e, _t28, _ref = {}) {
              let {
                lvl: s,
                loc: i,
                origin: n,
                generated: r,
                inImplicitObj: l,
                isNext2GenArr: a,
                isNext2GenObj: o,
                $$accept: c,
                pair: p
              } = _ref,
                  _ = _objectWithoutProperties(_ref, _excluded);

              let u = [e, _t28];

              if (u.lvl = void 0 === s ? this.indentLevel : s, u[2] = i || _objectSpread({
                first_column: this.cursor.x,
                first_line: this.cursor.y,
                last_column: r ? this.cursor.x : "?",
                last_line: r ? this.cursor.y : this.cursor.y + ("string" == typeof _t28 ? ("\n" !== _t28 ? _t28.split(/\n/) : _t28.repeat(2)).length - 1 : 1)
              }, _), "?" === u[2].last_column) {
                let e = n || _t28;
                u[2].last_line !== u[2].first_line ? u[2].last_column = "string" == typeof e && "\n" !== e ? e.split(/\n/).pop().length : u[2].first_column + 1 : u[2].last_column = u[2].first_column + ("string" == typeof e ? e.length : 1);
              }

              return n && (u[2].origin = n), r && (u[2].generated = !0), l && (u.inImplicitObj = !0), a && (u.isNext2GenArr = !0), o && (u.isNext2GenObj = !0), c && (u.$$accept = !0), p && (u.pair = p), u[2].src = this.filename, u;
            }
          }, {
            key: "token",
            value: function token(...e) {
              let _t29 = this._token.apply(this, e);

              return _t29.hash = this.position++, _t29.inImplicit = this.inImplicit, this.tokens[this.tokens.length] = _t29, _t29;
            }
          }, {
            key: "createImplicitArray",
            value: function createImplicitArray(e) {
              let _t30,
                  s,
                  i = this.tokens.map(e => e).reverse().findIndex(e => {
                if (("NEWLINE" === e[0] || e.$$accept) && e.lvl === this.indentLevel) {
                  if ("NEWLINE" === e[0]) {
                    if (e.isNext2GenObj && e.comma && !e.inImplicitObj) return;
                    if (e.inImplicitObj) return;
                  }

                  return e.isNext2GenArr && (s = e.lvl), "INDENT" == e[0] && (_t30 = e.lvl), !0;
                }
              });

              if (i > 0 - +!!e) {
                if (i = this.tokens.length - i, this.tokens[i]) {
                  if (void 0 === s && void 0 === _t30 && "[" !== this.tokens[i][0]) this.tokens.splice(i, 0, Object.assign(this._token("[", "[", {
                    generated: !0,
                    pair: this.position
                  }), {
                    stageId: this.storeBefore(["array", this.position])
                  }));else if ("number" == typeof s) {
                    let {
                      stageId: e,
                      hash: _t31
                    } = this.tokens[i - 2];
                    this.tokens.splice(i - 2, 1), this.storeAt(e, ["array", _t31]);
                  } else "number" == typeof _t30 && "[" !== this.tokens[i][0] && this.tokens.splice(i, 0, Object.assign(this._token("[", "[", {
                    generated: !0,
                    pair: this.position
                  }), {
                    stageId: this.storeBefore(["array", this.position])
                  }));
                } else this.tokens.push(Object.assign(this._token("[", "[", {
                  generated: !0,
                  pair: this.position
                }), {
                  stageId: this.storeBefore(["array", this.position])
                }));
              } else {
                if (0 === i) return;
                -1 === this.stage().contains.findIndex(e => "array" === e[0]) && this.tokens.splice(0, 0, Object.assign(this._token("[", "[", {
                  generated: !0,
                  pair: this.position
                }), {
                  stageId: this.storeBefore(["array", this.position])
                }));
              }
            }
          }, {
            key: "fix",
            value: function fix() {
              if (this.explicit.length) {
                let e,
                    _t32 = this.currExplicit(),
                    s = this.explicit.pop();

                e = {
                  ")": "(",
                  "]": "[",
                  "}": "{",
                  ")>": "<",
                  CALL_END: "CALL_START",
                  INDEX_END: "INDEX_START"
                }[_t32], _t32 = {
                  CALL_END: ")",
                  INDEX_END: ")",
                  ")>": ">"
                }[_t32] || _t32, throwSyntaxError({
                  message: `Missing ${_t32}`,
                  location: this.tokens.find(_t33 => _t33.pair === s[2] && _t33[1] === e)[2]
                });
              }

              for (this.rmNL(); this.tokens[0] && "NEWLINE" === this.tokens[0][0];) this.tokens = this.tokens.slice(1);
            }
          }, {
            key: "inExplicit",
            value: function inExplicit() {
              return "explicit" === this.stage().type;
            }
          }, {
            key: "currExplicit",
            value: function currExplicit() {
              return this.explicit.slice(-1)[0] && this.explicit.slice(-1)[0][0];
            }
          }, {
            key: "rmNL",
            value: function rmNL() {
              let e = {};

              for (; "NEWLINE" === this.prev()[0];) {
                let _t34;

                for (let s in _t34 = this.tokens.pop()) e[s] || (e[s] = _t34[s]);
              }

              return e;
            }
          }, {
            key: "isPossibleArray",
            value: function isPossibleArray() {
              return !("indent" !== this.stage().type || "import" === this.stage().label || "export" === this.stage().label || this.stage().contains.length || this.stage().assignKwd || this.portLine === this.cursor.y || this.forAssignLine === this.cursor.y || this.inExplicit() || this.currExplicit() && [void 0, "Root"].includes(this.stage().label));
            }
          }, {
            key: "inImplicitObj",
            value: function inImplicitObj() {
              return this.stage().contains.map(e => e[0]).includes("object");
            }
          }, {
            key: "inImplicit",
            value: function inImplicit() {
              return !!this.stage().contains.length;
            }
          }, {
            key: "inClass",
            value: function inClass() {
              return "class" === this.stage().label;
            }
          }, {
            key: "inSwitch",
            value: function inSwitch() {
              return "switch" === this.stage().label;
            }
          }, {
            key: "stage",
            value: function stage() {
              return this.stages.slice(-1)[0];
            }
          }, {
            key: "insertStage",
            value: function insertStage(e, _t35, s) {
              this.stages.push({
                type: e,
                label: _t35 || void 0,
                indent: s,
                totalIndent: this.indentLevel,
                location: _objectSpread({}, this.cursor),
                contains: [],
                position: this.position
              });
            }
          }, {
            key: "store",
            value: function store(e) {
              let _t36 = this.stage().contains.length + 1;

              return this.stage().contains.push([...e, _t36, this.cursor]), _t36;
            }
          }, {
            key: "storeBefore",
            value: function storeBefore(e) {
              let _t37 = this.stage().contains.length + 1;

              return this.stage().contains.unshift([...e, _t37, this.cursor]), _t37;
            }
          }, {
            key: "storeAt",
            value: function storeAt(e, _t38) {
              let s = this.stage().contains.length + 1;
              return this.stage().contains.splice(e, 0, [..._t38, s, this.cursor]), s;
            }
          }, {
            key: "trueStageLevel",
            value: function trueStageLevel() {
              let e = this.stages.length;

              for (let _t39 = this.stages.length; _t39 > 0; _t39--) {
                let s = this.stages[_t39 - 1];

                if (["explicit", "indent"].includes(s.type)) {
                  e = _t39;
                  break;
                }
              }

              return e;
            }
          }, {
            key: "trueStage",
            value: function trueStage() {
              return this.stages.filter(e => ["explicit", "indent"].includes(e.type)).slice(-1)[0];
            }
          }, {
            key: "trueIndentOrExplicit",
            value: function trueIndentOrExplicit() {
              return this.explicit.length ? this.explicit.slice(-1)[0][1] : this.trueIndent;
            }
          }, {
            key: "inExplicitCall",
            value: function inExplicitCall() {
              let e = this.explicit.slice(-1)[0];
              return !!Array.isArray(e) && /(CALL|PARAM)_END/.test(e[0]);
            }
          }, {
            key: "close",
            value: function close(e, _t40 = 0, s) {
              let i,
                  {
                loc: n
              } = this.prev();

              for (; (i = this.stage()) && i.contains.length >= _t40;) {
                if (s && i.contains.length && i.contains[i.contains.length - 1].break) return !1;
                let _t41 = i.contains.length,
                    r = i.contains.pop();
                if (0 === _t41) break;

                switch (r[0]) {
                  case "object":
                    this.rmNL(), this.token("}", "}", {
                      generated: !0,
                      pair: r[1]
                    }), this.prev().stageId = _t41, this.prev().loc = n, e && this.token("NEWLINE", 0, {
                      isNext2GenObj: !0,
                      generated: !0
                    });
                    break;

                  case "array":
                    this.rmNL(), this.token("]", "]", {
                      generated: !0,
                      pair: r[1]
                    }), this.prev().stageId = _t41, this.prev().loc = n, e && this.token("NEWLINE", 0, {
                      isNext2GenArr: !0,
                      generated: !0
                    });
                    break;

                  case "call":
                  case "param":
                    this.rmNL(), this.token(`${r[0].toUpperCase()}_END`, ")", {
                      generated: !0,
                      pair: r[1]
                    }), this.prev().stageId = _t41, this.prev().loc = _objectSpread(_objectSpread({}, n), {}, {
                      type: null
                    }), e && this.token("NEWLINE", 0, {
                      generated: !0
                    }), "param" === r[0] && (this.paramLine = !1);
                }
              }

              return !0;
            }
          }, {
            key: "closeTo",
            value: function closeTo(e, _t42) {
              for (; this.stages.length > e;) {
                if (!this.close(!1, 0, _t42) && _t42) return !1;
                if ("Root" === this.stage().label) break;
                let e = this.stages.pop();
                "indent" === e.type ? this.token("OUTDENT", "", {
                  pair: e.position
                }) : "call" === e.type && this.token("CALL_END", ")"), this.indentLevel -= e.indent;
              }
            }
          }, {
            key: "closeToIndent",
            value: function closeToIndent(e) {
              for (; this.indentLevel > e && (this.close(), "Root" !== this.stage().label && "explicit" !== this.stage().type);) {
                let e = this.stages.pop();
                this.indentLevel -= e.indent, "indent" === e.type ? this.token("OUTDENT", "", {
                  pair: e.position
                }) : "call" === e.type && this.token("CALL_END", ")");
              }
            }
          }, {
            key: "closeUntil",
            value: function closeUntil(e) {
              let _t43 = this.stages.slice(-1)[0];

              for (; this.stages.length && (this.close(), "Root" !== this.stage().label && "explicit" !== this.stage().type);) {
                let s = this.stages.pop();

                switch (s.type) {
                  case "indent":
                    this.token("OUTDENT", "", {
                      pair: s.position
                    });
                    break;

                  case "call":
                    this.token("CALL_END", ")");
                }

                if (e(_t43)) break;
                _t43 = this.stages.slice(-1)[0], this.indentLevel -= s.indent;
              }
            }
          }, {
            key: "closeImplicitsTo",
            value: function closeImplicitsTo(e, _t44) {
              let s = this.stage().contains.length + e,
                  {
                loc: i
              } = this.prev();

              for (; s > e;) {
                let e = this.stage().contains.length,
                    s = this.stage().contains.pop();
                if (!s) break;

                switch (s[0]) {
                  case "object":
                    this.rmNL(), this.token("}", "}", {
                      generated: !0,
                      pair: s[1]
                    }), this.prev().stageId = e, this.prev().loc = i, _t44 && this.token("NEWLINE", 0, {
                      isNext2GenObj: !0,
                      generated: !0
                    });
                    break;

                  case "array":
                    this.rmNL(), this.token("]", "]", {
                      generated: !0,
                      pair: s[1]
                    }), this.prev().stageId = e, this.prev().loc = i, _t44 && this.token("NEWLINE", 0, {
                      isNext2GenArr: !0,
                      generated: !0
                    });
                    break;

                  case "call":
                  case "param":
                    this.rmNL(), this.token(`${s[0].toUpperCase()}_END`, ")", {
                      generated: !0
                    }), this.prev().stageId = e, this.prev().loc = i, _t44 && this.token("NEWLINE", 0, {
                      generated: !0
                    });
                }
              }
            }
          }, {
            key: "closeImplicitObjects",
            value: function closeImplicitObjects(e, _t45, s = !1) {
              let i = this.stage().contains.slice(-1)[0] || [];

              for (; /array|object/.test(i[0]);) {
                let n = this.stage().contains.length;

                switch (i[0]) {
                  case "object":
                    this.rmNL(), this.token("}", "}", {
                      generated: !0,
                      pair: i[1]
                    }), this.prev().stageId = n, e && this.token("NEWLINE", 0, {
                      isNext2GenObj: !0,
                      generated: !0
                    });
                    break;

                  case "array":
                    if (_t45) return;
                    this.rmNL(), this.token("]", "]", {
                      generated: !0,
                      pair: i[1]
                    }), this.prev().stageId = n, e && this.token("NEWLINE", 0, {
                      isNext2GenArr: !0,
                      generated: !0
                    });
                }

                this.stage().contains.pop(), s && (this.prev().comma = !0), i = this.stage().contains.slice(-1)[0] || [];
              }
            }
          }, {
            key: "isUnfinished",
            value: function isUnfinished() {
              return this.Unfinished.includes(this.prev()[0]);
            }
          }, {
            key: "prev",
            value: function prev() {
              return this.tokens[this.tokens.length - 1] || [];
            }
          }, {
            key: "indent",
            value: function indent() {
              return this.stage().indent;
            }
          }]);

          return t;
        }();

        e.exports = t;
      },
      477: (e, t, s) => {
        const i = {};
        var n;

        function r(e = 0) {
          return "  ".repeat(Math.max(0, e));
        }

        function l(e = [], t = !1, s = "ref") {
          let i = 0;

          for (; e.includes((t ? "_" : "") + s + (i || ""));) i++;

          return (t ? "_" : "") + (i ? s + i : s);
        }

        function a(e = [], t = "a") {
          let s = "abcdefghijklmnopqrstuvwxyz";
          s += s.toUpperCase();
          let i,
              n = 0;

          for (s = s.slice(s.indexOf(t));;) {
            for (i of s.split("")) if (!e.includes("_" + i + (n || ""))) return "_" + i + (n || "");

            n++;
          }
        }

        function o(e = {
          first_line: 1,
          first_column: 1,
          last_line: 1,
          last_column: 1
        }, t = [], s = {
          first_line: 1,
          first_column: 1,
          last_line: 1,
          last_column: 1
        }) {
          let i = [],
              n = [],
              r = [...t].filter((t, r) => {
            let l = 0,
                a = t.loc;
            return (a.last_line === s.first_line && a.last_column <= s.first_column || a.last_line < s.first_line) && l++, 1 === l && (a.first_line > e.last_line ? l++ : a.first_line === e.last_line && a.first_column >= e.last_column && (1 !== e.last_line && 1 !== e.last_column && (t.appendToLastLine = !0), l++)), t.jsdoc || 2 !== l ? (i.push(t), void (!t.jsdoc || 2 !== l && -1 !== a.last_line || n.push(t))) : (t._id = r, 2 === l);
          }),
              l = i.filter(e => {
            let t = 0,
                i = e.loc;
            return (i.first_line > s.first_line || i.first_line === s.first_line && i.first_column > s.first_column) && t++, 1 === t && (i.last_line < s.last_line || i.last_line == s.last_line && i.last_column < s.last_column) && t++, 2 === t;
          });
          return {
            releasedComments: i,
            childComments: l,
            matchedComments: r,
            metaComments: n
          };
        }

        function c(e, t, s = !1) {
          let i = "";
          !s && e.inline ? i += "// " + e[1].trim() : i += "/*" + e[1].split(/\n/g).map((e, s) => (s ? r(t) : "") + e).join("\n") + "*/", !/\n +\*\/$/.test(i) && s && (/ \*\/$/.test(i) || (i = i.slice(0, -2) + " */"));
          let n = s ? r(t) : "";
          return i += e.addNewlines ? "\n".repeat(e.addNewlines) + n : s ? " " : "", i;
        }

        function p(e, {
          scope: t,
          vars: s,
          tabs: n,
          constants: r,
          $such: a,
          that: o,
          varExistent: c,
          Insert: _,
          Params: u,
          comments: f = [],
          lastNodeLocation: h,
          registry: m = {}
        }) {
          switch (f = [], e[0]) {
            case "ParamArray":
              return function (e, {
                scope: t,
                vars: s,
                varExistent: i,
                tabs: n,
                constants: r,
                $such: l,
                that: a,
                Insert: o,
                Params: c,
                comments: _ = [],
                lastNodeLocation: u,
                registry: f
              }) {
                var h = "[";

                for (let u of e) u && (h += "" + p(u, {
                  scope: t,
                  vars: s,
                  varExistent: i,
                  tabs: n,
                  constants: r,
                  $such: l,
                  that: a,
                  varExistent: i,
                  Insert: o,
                  Params: c,
                  comments: _,
                  comments: _
                })), h += ", ";

                return h = h.replace(/, $/, ""), h += "]", e.defaults && (h += " = " + e.defaults.parse({
                  scope: t,
                  vars: s,
                  varExistent: i,
                  tabs: n,
                  constants: r,
                  $such: l,
                  that: a,
                  varExistent: i,
                  isValue: !0,
                  isParam: !0,
                  comments: _,
                  comments: _
                })), 3 === h.length && (h = "[]"), h;
              }(e[1].unwrap, {
                scope: t,
                vars: s,
                varExistent: c,
                tabs: n,
                constants: r,
                $such: a,
                that: o,
                varExistent: c,
                Insert: _,
                Params: u,
                comments: f,
                comments: f,
                lastNodeLocation: h,
                registry: m
              });

            case "ParamObject":
              return function (e, {
                scope: t,
                vars: s,
                varExistent: n,
                tabs: r,
                constants: l,
                $such: a,
                that: o,
                Insert: c,
                Params: _,
                comments: u = [],
                lastNodeLocation: f,
                registry: h = {},
                type: m
              }) {
                for (var y = "{", d = 0; d < e.length; d++) {
                  let f = e[d],
                      m = f[0],
                      E = f[1],
                      g = f[2],
                      $ = f[3];
                  y += " ", f instanceof i.ParamIdentifier ? y += p(new i.Param("ParamIdentifier", f).setLoc(f), {
                    scope: t,
                    vars: s,
                    varExistent: n,
                    tabs: r,
                    constants: l,
                    $such: a,
                    that: o,
                    varExistent: n,
                    Insert: c,
                    Params: _,
                    comments: u
                  }) : ($ && (y += "..."), y += m, E || _.push(m), E && (y += ": " + (h.sources ? h.sources.add(E.loc) : "") + p(E, {
                    scope: t,
                    vars: s,
                    varExistent: n,
                    tabs: r,
                    constants: l,
                    $such: a,
                    that: o,
                    varExistent: n,
                    Insert: c,
                    Params: _,
                    comments: u
                  })), g && (y += " = " + g.parse({
                    scope: t,
                    vars: s,
                    varExistent: n,
                    tabs: r,
                    constants: l,
                    $such: a,
                    that: o,
                    varExistent: n,
                    isValue: !0,
                    isParam: !0,
                    comments: u
                  }))), y += ",";
                }

                return "," === y.charAt(y.length - 1) && (y = y.slice(0, -1)), y += " }", m && !h.omitTypeScript && (h.isTypeScript = !0, y += `: ${m.nodes.parse({
                  registry: h
                })}`), e.defaults && (y += " = " + e.defaults.parse({
                  scope: t,
                  vars: s,
                  varExistent: n,
                  tabs: r,
                  constants: l,
                  $such: a,
                  that: o,
                  varExistent: n,
                  isValue: !0,
                  isParam: !0,
                  comments: u
                })), 3 === y.length && (y = "{}"), y;
              }(e[1].unwrap, {
                scope: t,
                vars: s,
                varExistent: c,
                tabs: n,
                constants: r,
                $such: a,
                that: o,
                varExistent: c,
                Insert: _,
                Params: u,
                comments: f,
                comments: f,
                lastNodeLocation: h,
                registry: m,
                type: !m.omitTypeScript && e[1].loc.type
              });

            case "ParamIdentifier":
              {
                let i = "",
                    p = e[1].contents,
                    y = p[0],
                    d = !!p[1],
                    E = p[2];

                if (d) {
                  let e = l(t, !1, y);
                  _.push([y, e]), u.push(e), i += e;
                } else u.push(y), i += y;

                return e.loc.type && (m.omitTypeScript || (m.isTypeScript = !0, i += ": " + (m.sources ? m.sources.add(e.loc.type.nodes.loc) : "") + e.loc.type.nodes.parse({
                  registry: m
                }))), void 0 !== E && (i += " = " + E.parse({
                  scope: t,
                  vars: s,
                  varExistent: c,
                  tabs: n,
                  constants: r,
                  $such: a,
                  that: o,
                  varExistent: c,
                  comments: f,
                  lastNodeLocation: h,
                  registry: m,
                  isParam: !0
                })), e[1].expansion && (i = `...${i}`), m.sources && (i = m.sources.add(e[1].loc || e.loc) + i), i;
              }
          }

          return "";
        }

        function _(e, {
          tabs: t,
          scope: s,
          vars: i,
          prevLine: n,
          Soaks: l,
          registry: o,
          loc: c
        }) {
          let p,
              _ = 0,
              u = "";

          for (let [e] of l) u += `${r(t + _)}${o.sources ? o.sources.add(c) : ""}if (${e}) {\n`, _++;

          u += r(t + _), p = a(s, "s"), s.push(p), i.push(p), u += `${p} = ${e};`;

          for (let e of l) _--, u += `\n${r(t + _)}}`;

          return n.push(u), p;
        }

        i.Base = n = function (_Array) {
          _inherits(e, _Array);

          var _super2 = _createSuper(e);

          function e(..._e2) {
            var _this2;

            _classCallCheck(this, e);

            _this2 = _super2.call(this, ..._e2), _this2.setRule(_e2[0]);
            return _this2;
          }

          _createClass(e, [{
            key: "location",
            get: function () {
              return this.loc;
            }
          }, {
            key: "setRule",
            value: function setRule(_e3) {
              return this.rule = _e3, this;
            }
          }, {
            key: "setLocation",
            value: function setLocation(_ref2, {
              last_line: i,
              last_column: n
            } = {}) {
              let {
                first_line: _e4,
                first_column: t
              } = _ref2,
                  s = _objectWithoutProperties(_ref2, _excluded2);

              return i || ({
                last_line: i
              } = s), n || ({
                last_column: n
              } = s), this.loc = {
                first_line: _e4,
                first_column: t,
                last_line: i,
                last_column: n,
                src: s.src,
                type: s.type
              }, this;
            }
          }, {
            key: "setLoc",
            value: function setLoc(..._e5) {
              return this.setLocation(..._e5);
            }
          }, {
            key: "contents",
            get: function () {
              return Object.assign(this.slice(1), {
                loc: this.loc,
                rule: this.rule
              });
            }
          }, {
            key: "unwrap",
            get: function () {
              return this.contents.length > 1 ? this.contents : this.contents[0];
            }
          }, {
            key: "unwraps",
            value: function unwraps(_e6) {
              let t = this;

              for (; 0 !== _e6;) _e6--, t = t.unwrap;

              return t;
            }
          }, {
            key: "visit",
            value: function visit(..._e7) {
              var t = this;

              for (let s of _e7) t = t[s];

              return t;
            }
          }, {
            key: "unwrapAll",
            get: function () {
              let t = this;

              for (; t.unwrap instanceof e;) t = t.unwrap;

              return t;
            }
          }, {
            key: "unwrapUntil",
            value: function unwrapUntil(_e8) {
              let t = this,
                  s = !1,
                  i = 0;

              for (; t && t.unwrap && !(s = _e8(t, i));) t = t.unwrap, i++;

              return !!s && t;
            }
          }, {
            key: "throwSyntaxError",
            value: function (_throwSyntaxError) {
              function throwSyntaxError(_x) {
                return _throwSyntaxError.apply(this, arguments);
              }

              throwSyntaxError.toString = function () {
                return _throwSyntaxError.toString();
              };

              return throwSyntaxError;
            }(function (_e9, t = this.loc) {
              throwSyntaxError({
                message: _e9,
                location: t
              });
            })
          }]);

          return e;
        }(_wrapNativeSuper(Array)), i.Access = function (_n) {
          _inherits(_class, _n);

          var _super3 = _createSuper(_class);

          function _class() {
            _classCallCheck(this, _class);

            return _super3.apply(this, arguments);
          }

          _createClass(_class, [{
            key: "parse",
            value: function parse(e = {
              registry: {}
            }) {
              let {
                rule: t,
                unwrap: s
              } = this,
                  i = "";

              switch (t) {
                case ". PROPERTY":
                  i += "." + s[0];
                  break;

                case "INDEX_START Expression INDEX_END":
                  i += "[" + s.parse(_objectSpread(_objectSpread({}, e), {}, {
                    isValue: !0
                  })) + "]";
              }

              return i;
            }
          }]);

          return _class;
        }(n), i.AlphaNum = function (_n2) {
          _inherits(_class2, _n2);

          var _super4 = _createSuper(_class2);

          function _class2() {
            _classCallCheck(this, _class2);

            return _super4.apply(this, arguments);
          }

          _createClass(_class2, [{
            key: "parse",
            value: function parse(e) {
              return 1 == this.unwrap instanceof i.String ? this.unwrap.parse(e) : this.unwrap;
            }
          }]);

          return _class2;
        }(n), i.Array = function (_n3) {
          _inherits(_class3, _n3);

          var _super5 = _createSuper(_class3);

          function _class3() {
            _classCallCheck(this, _class3);

            return _super5.apply(this, arguments);
          }

          _createClass(_class3, [{
            key: "parse",
            value: function parse({
              that: e,
              $such: t,
              scope: s,
              addSemicolon: n,
              vars: l,
              varExistent: a,
              constants: p,
              prevLine: _,
              isCondition: u,
              isValue: f,
              tabs: h,
              wrap: m,
              isClass: y,
              isAssignment: d,
              ID: E,
              comments: g,
              lastNodeLocation: $,
              registry: I = {},
              isFrom: T,
              isObjProperty: N
            }) {
              let O = this.contents,
                  {
                loc: k
              } = O[0] || this,
                  L = k,
                  b = "";
              b += "[";
              let A = this.indented,
                  S = "";

              for (let e of g.filter(e => e.loc.first_line < k.first_line || e.loc.first_line === k.first_line && e.loc.first_column < k.first_column)) I[e.id] || (S += c(e, h + 1, !0), A = !0, I[e.id] = !0);

              let v = [],
                  x = 0;

              for (let n of O) {
                let f;

                if (x++, null === n) {
                  v.push(["", ""]);
                  continue;
                }

                if (/boolean|undefined/.test(typeof n)) {
                  n || (A = !0, v.push(["jump", ""]));
                  continue;
                }

                let {
                  childComments: N,
                  matchedComments: k
                } = o(L, g, n.loc);
                d && (n.unwrap instanceof i.Value || n.unwrap.unwrap instanceof i.Assignment || n.unwrap.unwrap instanceof i.Assignable || n.throwSyntaxError("Invalid left-hand assignment reference."));
                let b = (f = "Value" === n.rule && "Assignable" === n[1].rule) && "Object" === n[1][1].rule && T;
                f && ["Object", "Array", "Invocation"].includes(n[1][1].rule) ? (f = !0, A = !0) : f = !1;
                let S = "",
                    w = n.parse({
                  that: e,
                  $such: t,
                  scope: s,
                  addSemicolon: [],
                  vars: l,
                  varExistent: a,
                  constants: p,
                  prevLine: _,
                  isCondition: u,
                  isValue: !0,
                  isParam: !0,
                  tabs: A ? h + 1 : h,
                  wrap: m,
                  isClass: y,
                  isAssignment: d,
                  ID: E,
                  comments: N,
                  lastNodeLocation: $,
                  registry: I
                });
                if (b && (w = w.slice(2, -2)), n.expansion && (w = `...${w}`), k.length) for (let e of k) I[e.id] || (S = c(e, h + 1, !0), v.slice(-1)[0][1] += S, I[e.id] = !0, A = !0);
                L = n.loc, v.push([w, ""]), f && x < O.length && v.push(["jump", "\n" + r(h + 1)]);
              }

              let w = v.filter(e => "jump" !== e[0]).length;
              v = v.map(([e, t], s, i) => {
                let n = s !== i.length - 1 ? ", " : "";
                return 0 === s ? e + n + (t && (A = !0) && (t || "\n" + r(h + 1))) : "" === e ? n + (t && (A = !0) && t) : "jump" === e ? (A = !0) && (this.separate ? "\n" + r(h + 1) : t) : (i[s - 1], e + n + (t && (A = !0) && t));
              }).join("").replace(/\s+\n/g, "\n");
              let R = !1,
                  D = "";

              for (let e of g.filter(e => e.loc.first_line >= L.last_line)) {
                if (I[e.id]) continue;
                R = !0;
                let t = c(e, h + 1, !0);

                if (e.loc.first_line == L.last_line) {
                  let e = D,
                      s = 0;

                  for (; /\n|\r| /.test(e.charAt(e.length - 1));) e = e.slice(0, -1), s++;

                  D = e + " " + t;
                } else D += t;

                I[e.id] = !0;
              }

              return !A || S || !v.startsWith("{\n") || /\n\s*\}$/.test(v) && w > 1 || (A = !1, v = v.replace(/\n  /g, "\n")), (A || R) && (b += "\n" + r(h + 1)), b += (S + v + D).trim(), (R || A) && (b += "\n" + r(h)), b += "]", b;
            }
          }], [{
            key: "from",
            value: function from(e) {
              let t = new i.Array(null).setLoc(e.loc);
              t.indented = !0, t.separate = !0, e instanceof i.Block && (e = e.unwrap);
              let s = e.unwrap,
                  n = 0;

              for (let e of s) n++, e = e.unwrap, e instanceof i.Statement && throwSyntaxError({
                message: "Unexpected statement",
                location: e.loc
              }), t[t.length] = e, n !== s.length && (t[t.length] = !1);

              return new i.Expression("Value", new i.Value("Assignable", new i.Assignable("Array", t).setLoc(e.loc)).setLoc(e.loc)).setLoc(e.loc);
            }
          }]);

          return _class3;
        }(n), i.Assign = function (_n4) {
          _inherits(_class4, _n4);

          var _super6 = _createSuper(_class4);

          function _class4() {
            _classCallCheck(this, _class4);

            return _super6.apply(this, arguments);
          }

          _createClass(_class4, [{
            key: "parse",
            value: function parse({
              that: e,
              $such: t,
              scope: s,
              vars: i,
              varExistent: n,
              constants: r,
              constant: l,
              construct: a,
              isValue: o,
              prevLine: c,
              tabs: p,
              lineReturns: _,
              isCondition: u,
              isCompare: f,
              comments: h = [],
              lastNodeLocation: m,
              registry: y = {},
              ID: d = [],
              FiresSuper: E,
              FiresAwait: g,
              FiresYield: $,
              isStatement: I,
              addSemicolon: T,
              afterParse: N,
              metaComments: O
            } = {}) {
              let {
                rule: k,
                contents: L
              } = this;
              1 == L.length && (L = L[0]);
              let b,
                  A = "";
              if ("Object" === L[1].rule || "FROM" === L[3][0] ? b = !0 : "Array" !== L[1].rule && "AT" !== L[3][0] || (A += y.sources ? y.sources.add(L[2].loc) : ""), A += L.parse({
                that: e,
                $such: t,
                scope: s,
                vars: i,
                varExistent: n,
                constants: r,
                constant: l,
                construct: a,
                isValue: o,
                prevLine: c,
                tabs: p,
                lineReturns: _,
                isCondition: u,
                isCompare: f,
                comments: h,
                lastNodeLocation: m,
                registry: y,
                ID: d,
                FiresSuper: E,
                FiresAwait: g,
                FiresYield: $,
                isStatement: I,
                addSemicolon: T,
                afterParse: N,
                metaComments: O
              }), Array.isArray(d) || (d = [d]), l) for (let [e, t] of d) e && i && i.includes(e) && throwSyntaxError({
                message: `'${e}' is already assigned as a variable`,
                location: t
              }), r.push(e.toString());

              for (let [e, t] of d) !e || e.isProperty || !i || i.includes(e.toString()) || l || (r && r.includes(e) && throwSyntaxError({
                message: "Assignment to constant variable.",
                location: t
              }), I || (i.push(e.toString()), s.push(e.toString())));

              return !b || u || I || (A = [y.sources ? y.sources.add(L[2].loc) : "", "(", A, ")"].join("")), A;
            }
          }]);

          return _class4;
        }(n), i.Assignable = function (_n5) {
          _inherits(_class5, _n5);

          var _super7 = _createSuper(_class5);

          function _class5() {
            _classCallCheck(this, _class5);

            return _super7.apply(this, arguments);
          }

          _createClass(_class5, [{
            key: "isDestructor",
            value: function isDestructor([e]) {
              let t = 0,
                  s = this.rule;
              return "Object" === s && t++, "Array" === s && ("AS" === e && void 0 === this.unwrap.loc.generated ? t = 0 : t++), t > 0;
            }
          }, {
            key: "parse",
            value: function parse({
              that: e,
              $such: t,
              scope: s = [],
              addSemicolon: i,
              vars: n = [],
              constants: r = [],
              prevLine: l,
              isCondition: o,
              isValue: c,
              tabs: p,
              wrap: u,
              isClass: m,
              isLine: y,
              lineReturns: d,
              isAssignment: E,
              isOperation: g,
              isStatement: $,
              ID: I = [],
              func: T,
              scopedParams: N,
              method: O,
              isAssigned: k,
              comments: L = [],
              lastNodeLocation: b,
              registry: A = {},
              isFrom: S,
              isParam: v,
              varExistent: x,
              FiresSoak: w = [],
              isInvoked: R,
              isNarrow: D = !1,
              isObjProperty: P,
              typeData: C = [],
              afterParse: F,
              metaComments: M = []
            } = {}) {
              let j,
                  U = this,
                  G = "";

              switch (this.rule) {
                case "Identifier":
                  {
                    let e = U[1].parse({
                      registry: A
                    });

                    if (E) {
                      let e = this.loc.type ? {
                        value: this.loc.type.nodes.parse({
                          registry: A
                        }),
                        loc: this.loc.type.nodes.loc
                      } : void 0,
                          t = U[1].parse();
                      I.push([t, this.loc]), e ? f(M, [e], p) : e = h({
                        metaComments: M,
                        ID: t,
                        tabs: p,
                        loc: this.loc
                      }), e && C.push(_objectSpread({
                        ID: t
                      }, e));
                    }

                    G += e;
                    break;
                  }

                case "ThisProperty":
                  j = !0, G += e && e[0] || "this", G += U[1].parse({
                    that: e,
                    $such: t,
                    scope: s,
                    addSemicolon: i,
                    vars: n,
                    varExistent: x,
                    constants: r,
                    prevLine: l,
                    isCondition: o,
                    isValue: c,
                    tabs: p,
                    wrap: u,
                    isClass: m,
                    isAssignment: E,
                    ID: I,
                    isLine: y,
                    lineReturns: d,
                    comments: L,
                    lastNodeLocation: b,
                    registry: A
                  });
                  break;

                case "Value Access":
                  {
                    let i,
                        O = this.loc.type ? {
                      value: this.loc.type.nodes.parse({
                        registry: A
                      }),
                      loc: this.loc.type.nodes.loc
                    } : void 0;
                    E && $ && this.throwSyntaxError("Unexpected property", U[2].loc);
                    let k = U[2][2];
                    j = !0;
                    let S = "";
                    S += U[1].parse({
                      that: e,
                      $such: t,
                      scope: s,
                      addSemicolon: [],
                      vars: n,
                      varExistent: x,
                      constants: r,
                      prevLine: l,
                      isCondition: o,
                      isValue: !0,
                      tabs: p,
                      wrap: u,
                      isClass: m,
                      isLine: y,
                      lineReturns: d,
                      func: T,
                      scopedParams: N,
                      comments: L,
                      lastNodeLocation: b,
                      registry: _objectSpread(_objectSpread({}, A), {}, {
                        sources: void 0
                      }),
                      FiresSoak: w,
                      isAssignment: E,
                      isInvoked: !0,
                      isOperation: g,
                      isParam: v,
                      isNarrow: D
                    });
                    let P = (A.sources ? A.sources.add(this.loc) : "") + S,
                        F = U[2].parse({
                      that: e,
                      $such: t,
                      scope: s,
                      addSemicolon: [],
                      vars: n,
                      varExistent: x,
                      constants: r,
                      prevLine: l,
                      isCondition: o,
                      isValue: c,
                      tabs: p,
                      wrap: u,
                      isClass: m,
                      isAssignment: E,
                      ID: I,
                      isLine: y,
                      comments: L,
                      lastNodeLocation: b,
                      registry: A,
                      isParam: v,
                      isNarrow: D,
                      FiresSoak: w
                    }),
                        B = E || g || R || v || o || D;

                    if (k) {
                      let e,
                          t = w[w.length - 1],
                          i = "";
                      P = t ? t[1] + t[2] : S, "Identifier" !== U[1].unwrap.rule ? (e = !0, t = a(s, "s"), n.push(t), s.push(t), i += `(${t} = ${P})`) : (i = P, t = P), P = `typeof ${i} ${!e || B ? `!== "undefined" && ${t} ` : ""}!== null`, w.push([P, t, F]), P = t;
                    }

                    if (G += P + F, E) {
                      "Assignable" === U[1].rule && /Identifier|Value Access/.test(U[1].unwrap.rule) && (i = S);
                      let e = i + F;
                      O ? f(M, [O], p) : O = h({
                        metaComments: M,
                        ID: e,
                        tabs: p,
                        loc: this.loc
                      }), O && C.push(_objectSpread({
                        ID: e,
                        kind: "access"
                      }, O));
                    }

                    k && !B && (G = _(G, {
                      Soaks: w,
                      tabs: p,
                      scope: s,
                      vars: n,
                      prevLine: l,
                      registry: A,
                      loc: this.loc
                    }), c && (G = `(${G})`));
                    break;
                  }

                case "Object":
                  U = U.unwrap, G += U.parse({
                    that: e,
                    $such: t,
                    scope: s,
                    addSemicolon: i,
                    vars: n,
                    varExistent: x,
                    constants: r,
                    prevLine: l,
                    isCondition: o,
                    isValue: c,
                    tabs: p,
                    wrap: u,
                    isClass: m,
                    isAssignment: E,
                    ID: I,
                    isLine: y,
                    lineReturns: d,
                    comments: L,
                    lastNodeLocation: b,
                    registry: A,
                    isParam: v,
                    isStatement: $,
                    isObjProperty: P,
                    typeData: C,
                    afterParse: F,
                    metaComments: M
                  });
                  break;

                case "Array":
                  U = U.unwrap, G += U.parse({
                    that: e,
                    $such: t,
                    scope: s,
                    addSemicolon: i,
                    vars: n,
                    varExistent: x,
                    constants: r,
                    prevLine: l,
                    isCondition: o,
                    isValue: c,
                    tabs: p,
                    wrap: u,
                    isClass: m,
                    isAssignment: E,
                    ID: I,
                    method: O,
                    comments: L,
                    lastNodeLocation: b,
                    registry: A,
                    isFrom: S,
                    isParam: v,
                    isStatement: $,
                    isObjProperty: P,
                    typeData: C,
                    afterParse: F,
                    metaComments: M
                  });
              }

              if (E && !$) for (let [e, t] of I) s && !s.includes(e.toString()) && (e = e.toString(), n.includes(e) || n.push(e), s.push(e));
              return G;
            }
          }]);

          return _class5;
        }(n), i.Assignment = function (_n6) {
          _inherits(_class6, _n6);

          var _super8 = _createSuper(_class6);

          function _class6() {
            _classCallCheck(this, _class6);

            return _super8.apply(this, arguments);
          }

          _createClass(_class6, [{
            key: "parse",
            value: function parse({
              that: e,
              $such: t,
              scope: s,
              vars: i,
              varExistent: n,
              constants: l,
              constant: a,
              construct: c,
              isValue: p,
              prevLine: u,
              tabs: h,
              lineReturns: m,
              isCondition: y,
              isCompare: d,
              comments: E,
              lastNodeLocation: g,
              registry: $ = {},
              ID: I = [],
              FiresSuper: T,
              FiresAwait: N,
              FiresYield: O,
              isStatement: k,
              addSemicolon: L,
              afterParse: b,
              metaComments: A
            }) {
              let S,
                  v = this,
                  x = "",
                  w = [],
                  R = [];

              switch (v[3][0]) {
                case "FROM":
                  {
                    S = v[1].parse({
                      that: e,
                      $such: t,
                      scope: s,
                      vars: i,
                      varExistent: n,
                      constants: l,
                      constant: a,
                      construct: c,
                      isValue: p,
                      prevLine: u,
                      tabs: h,
                      lineReturns: m,
                      isCondition: y,
                      isCompare: d,
                      isAssignment: !0,
                      lastNodeLocation: g,
                      registry: $,
                      isFrom: !0,
                      ID: I,
                      isStatement: k,
                      FiresSoak: R,
                      typeData: w,
                      afterParse: b,
                      metaComments: A
                    });
                    let r = v[1].parse({
                      isAssignment: !0,
                      isFrom: !0
                    }).toString();
                    /^\[(.|\n)+\]$/.test(r) ? S = `{ ${S.slice(1, -1)} }` : /^([a-zñ$_](?:[a-zñ$_\d]+)?)$/i.test(r) && (S = `{ ${S} }`);
                    break;
                  }

                case "AT":
                  S = v[1].parse({
                    that: e,
                    $such: t,
                    scope: s,
                    vars: i,
                    varExistent: n,
                    constants: l,
                    constant: a,
                    construct: c,
                    isValue: p,
                    prevLine: u,
                    tabs: h,
                    lineReturns: m,
                    isCondition: y,
                    isCompare: d,
                    isAssignment: !0,
                    lastNodeLocation: g,
                    registry: $,
                    ID: I,
                    isStatement: k,
                    FiresSoak: R,
                    typeData: w,
                    afterParse: b,
                    metaComments: A
                  }), /^\[(.|\n)+\]$/.test(S) || (S = `[${S}]`);
                  break;

                case "AS":
                  S = v[1].parse({
                    that: e,
                    $such: t,
                    scope: s,
                    vars: i,
                    varExistent: n,
                    constants: l,
                    constant: a,
                    construct: c,
                    isValue: p,
                    prevLine: u,
                    tabs: h,
                    lineReturns: m,
                    isCondition: y,
                    isCompare: d,
                    isAssignment: !0,
                    lastNodeLocation: g,
                    registry: $,
                    ID: I,
                    isStatement: k,
                    FiresSoak: R,
                    typeData: w,
                    afterParse: b,
                    metaComments: A
                  });
              }

              x += S + " = ";
              let D = [],
                  {
                childComments: P
              } = o(v[2].loc, E, v[2].loc),
                  C = v[2].parse({
                that: e,
                $such: t,
                scope: s,
                vars: i,
                varExistent: n,
                constants: l,
                isValue: !0,
                prevLine: u,
                tabs: h,
                isCompare: d,
                isAssigned: !0,
                isNarrow: !0,
                comments: P,
                lastNodeLocation: g,
                registry: $,
                FiresSuper: T,
                FiresAwait: N,
                FiresYield: O,
                FiresSoak: D,
                afterParse: b,
                metaComments: A
              });

              if (D.length && (C = _(C, {
                tabs: h,
                scope: s,
                vars: i,
                prevLine: u,
                Soaks: D,
                registry: $,
                loc: this.loc
              })), x += C, R.length && a ? this.throwSyntaxError("Existential operators not supported in declaration statements.") : R.length && (x = _(x, {
                tabs: h,
                scope: s,
                vars: i,
                prevLine: u,
                Soaks: R,
                registry: $,
                loc: this.loc
              })), ["Value Access", "ThisProperty"].includes(v[1].unwrap.rule)) {
                if (!R.length) {
                  let e = function ({
                    typeData: e,
                    prevLine: t,
                    metaComments: s,
                    tabs: i
                  }) {
                    let n = [];
                    f(s, e, i);

                    for (let t of e) {
                      let e = [];
                      t.description && e.push(t.description.split("\n").map(e => e.trim()).join("\n * ")), t.value && e.push(`@type {${t.value}}`), e.length && n.push(`/**\n${r(i)} * ${e.join(`\n${r(i)} * `)}\n${r(i)} */`);
                    }

                    return t.push(...n), "";
                  }({
                    prevLine: u,
                    typeData: w,
                    tabs: h,
                    metaComments: A
                  });

                  x = e + x;
                }
              } else i.__data || (i.__data = []), i.__data.push(...w);

              return x;
            }
          }]);

          return _class6;
        }(n), i.Block = function (_n7) {
          _inherits(_class7, _n7);

          var _super9 = _createSuper(_class7);

          function _class7() {
            _classCallCheck(this, _class7);

            return _super9.apply(this, arguments);
          }

          _createClass(_class7, null, [{
            key: "wrap",
            value: function wrap(...e) {
              Array.from(e)[0];
              const t = new i.Body(null, []);
              void 0 === e && (e = []);

              for (const s of Array.from(e)) t[1].push(new i.Line(null, s));

              return t;
            }
          }]);

          return _class7;
        }(n), i.Body = function (_n8) {
          _inherits(_class8, _n8);

          var _super10 = _createSuper(_class8);

          function _class8() {
            _classCallCheck(this, _class8);

            return _super10.apply(this, arguments);
          }

          _createClass(_class8, [{
            key: "parse",
            value: function parse({
              tabs: e = 0,
              vars: t = [],
              constants: s = [],
              that: i = [],
              $such: n = [],
              scope: l = [],
              isChildren: a = !1,
              isClass: p = !1,
              callSelf: _ = !1,
              func: u = !1,
              scopedParams: h = Object.assign([], {
                generated: !0
              }),
              top: m = 0,
              lastValue: y = [],
              varExistent: d = [],
              comments: E = [],
              lastNodeLocation: g = {
                first_line: 1,
                first_column: 1,
                last_line: 1,
                last_column: 1
              },
              registry: $ = {},
              debug: I = !1,
              FiresSuper: T = [],
              FiresYield: N = [],
              FiresAwait: O = [],
              assignRes: k,
              appendToVars: L,
              isParenthetical: b = !1
            } = {}) {
              const [A, S] = this;
              let v = "";
              _ && ++e;
              var x = 0,
                  w = g,
                  R = !1,
                  D = [],
                  P = {};

              for (let a of S) {
                ++x;
                let f,
                    m,
                    g = a.loc || w;
                a.loc && !P[a.loc.src] && (P[a.loc.src] = {
                  first_line: 1,
                  first_column: 1,
                  last_line: 1,
                  last_column: 1
                });
                let I,
                    {
                  childComments: L,
                  matchedComments: A,
                  metaComments: C
                } = o(P[a.loc && a.loc.src] || w, E.filter(e => e.loc.src === (a.loc && a.loc.src)), g);

                if (m = !(x !== S.length || !(k || _ || u)), f = a.parse({
                  that: i,
                  $such: n,
                  scope: l,
                  vars: t,
                  varExistent: d,
                  constants: s,
                  tabs: e,
                  lineReturns: !b && m,
                  assignRes: k,
                  isClass: p,
                  isLine: !0,
                  func: u,
                  scopedParams: h,
                  nl: a.lineCount || 0,
                  lastValue: y,
                  comments: L,
                  metaComments: C,
                  afterParse: D,
                  lastNodeLocation: P[a.loc && a.loc.src] || w,
                  registry: $,
                  FiresSuper: T,
                  FiresAwait: O,
                  FiresYield: N,
                  isParenthetical: b
                }), "" !== f && ";" !== f) {
                  if (R ? R = !1 : v += "\n".repeat(a.lineCount || 0), A.length) for (let t of A) {
                    let s = c(t, e);

                    if (!$[t.id]) {
                      if (t.appendToLastLine) {
                        let e = v,
                            t = 0;

                        for (; /\n|\r| /.test(e.charAt(e.length - 1));) e = e.slice(0, -1), t++;

                        v = e + " " + s, I = !s.endsWith("\n");
                      } else v += r(e) + s, I = !s.endsWith("\n");

                      $[t.id] = !0;
                    }
                  }
                  v += (I ? f.replace(/^ +/, " ") : f) + (b ? x === S.length ? "" : ", " : "\n"), w = g, a.loc && a.loc.src && (P[a.loc.src] = g);
                } else R = !0;
              }

              for (let t of E.filter(e => e.loc.first_line >= w.last_line && !e.jsdoc)) {
                if ($[t.id]) continue;
                let s = c(t, e);

                if (t.loc.first_line == w.last_line) {
                  let e = v,
                      t = 0;

                  for (; /\n|\r| /.test(e.charAt(e.length - 1));) e = e.slice(0, -1), t++;

                  v = e + " " + s.trim() + "\n".repeat(t);
                } else v += r(e) + s;

                $[t.id] = !0;
              }

              if (d && d.length && t.length && !a && !p) for (let e in d) t.includes(d[e]) && t.splice(t.indexOf(d[e]), 1);
              if (h && h.length && t.length) for (let e of h) t.includes(e) && t.splice(t.indexOf(e), 1);
              if (a || p) L && (v = r(e) + ($.useVar ? "var " : "let ") + L + ";\n\n" + v);else if (L && t.push(L), t.length) {
                let s = t.sort((e, t) => t.length - e.length).sort((e, t) => +e.startsWith("_") - +t.startsWith("_")).filter((e, t, s) => s.indexOf(e) === t),
                    i = t.__data && t.__data.filter(e => s.includes(e.ID)),
                    n = "";

                if (i.length && !$.omitTypeScript) {
                  $.isTypeScript = !0;
                  let t = [];
                  n += function (e, t, s, i, n, l = {}) {
                    let a = [];
                    f(i, e, t);

                    for (let i of e) {
                      let e = [];
                      i.description && e.push(i.description), e.length && (a.push(`/**\n${r(t)} * ${e.join(`\n${r(t)} * `)}\n${r(t)} */\n${r(t)}${s}${l.sources ? l.sources.add(i.loc) : ""}${i.ID}${i.value ? `: ${i.value}` : ""};`), n.push(i.ID));
                    }

                    return a.length ? r(t) + a.join("\n\n" + r(t)) + "\n\n" : "";
                  }(i, e, $.useVar ? "var " : "let ", E.filter(e => e.jsdoc), t, $), s = s.filter(e => !t.includes(e)).map(e => {
                    let t = i.find(t => t.ID === e);
                    return t ? `${e}: ${$.sources ? $.sources.add(t.loc) : ""}${t.value}` : e;
                  });
                } else i.length && $.omitTypeScript && (n += function (e, t, s, i) {
                  let n = [];
                  f(i, e, t);

                  for (let i of e) {
                    let e = [];
                    i.description && e.push(i.description), i.value && e.push(`@type {${i.value}}`), e.length && n.push(`/**\n${r(t)} * ${e.join(`\n${r(t)} * `)}\n${r(t)} */\n${r(t)}${s}${i.ID};`);
                  }

                  return n.length ? n.join("\n\n" + r(t)) + "\n\n" : "";
                }(i, e, $.useVar ? "var " : "let ", E.filter(e => e.jsdoc)), s = s.filter(e => !i.find(t => t.ID === e)));

                v = (s.length ? r(e) + ($.useVar ? "var " : "let ") + s.join(", ") + ";\n\n" : "") + n + v;
              }
              return D.length && (v = D.join(`\n${r(e)}`) + `\n\n${r(e)}` + v), _ && (v = "(" + (O.length ? "async " : "") + "function () {\n" + v + r(e - 1) + "}).call(this)"), m ? v.replace(/(\n| )+$/, "") : v.trim();
            }
          }]);

          return _class8;
        }(n), i.Class = function (_n9) {
          _inherits(_class9, _n9);

          var _super11 = _createSuper(_class9);

          function _class9() {
            _classCallCheck(this, _class9);

            return _super11.apply(this, arguments);
          }

          _createClass(_class9, [{
            key: "parse",
            value: function parse({
              that: e,
              $such: t,
              scope: s,
              vars: n,
              varExistent: a,
              constants: o,
              prevLine: c,
              isValue: p,
              tabs: _ = 0,
              lineReturns: u,
              addSemicolon: f,
              comments: h = [],
              lastNodeLocation: m,
              registry: y = {}
            } = {}) {
              let d,
                  E,
                  g,
                  $,
                  I,
                  T = "",
                  {
                contents: N,
                rule: O
              } = this;

              if (N[0] ? d = N[0].parse ? N[0].parse({
                registry: y
              }).toString() : N[0] : (g = !0, d = l(s, !0), t[0] = d), N[1] && (E = N[1].parse({
                that: e,
                scope: s,
                tabs: _ + 1,
                isParam: !0,
                vars: n,
                varExistent: a,
                constants: o,
                comments: h,
                registry: y,
                addSemicolon: []
              })), $ = N[2], $ instanceof i.Body) {
                I = [];

                for (var k = 0, L = $[1].length; k < L; k++) {
                  var b = $[1][k];
                  "Value" === b.unwrap.rule && b.unwrapUntil(e => e instanceof i.Function && !/FUNCTION/.test(e.rule)) || I.push(b);
                }
              } else $ = [], I = [];

              let A = "class " + d;

              if (E && (A += " extends " + E), I.length) {
                var S;
                $ = $.unwrap.filter(e => {
                  let t = e.unwrap;
                  return !("Value" != t.rule || !["Function"].includes(t.unwrap.rule) || /FUNCTION/.test(t.unwrap.unwrap.rule) || (S = e.loc, 0));
                }), n.push(d), s.push(d);
                let l = [],
                    c = "";
                c += r(_ + 1) + new i.Class(null, [d], N[1], new i.Body(null, $)).parse({
                  that: e,
                  $such: t,
                  scope: s,
                  tabs: _ + 1,
                  isChildren: !0,
                  isClass: {
                    doesExtend: !!E
                  },
                  comments: h,
                  lastNodeLocation: (N[1] || N[0]).loc,
                  registry: y
                }), c += "\n\n" + r(_ + 1) + new i.Body(null, I).parse({
                  that: [d],
                  scope: s,
                  tabs: _ + 1,
                  isChildren: !0,
                  vars: l,
                  varExistent: a,
                  constants: o,
                  comments: h,
                  lastNodeLocation: S,
                  registry: y
                }), c += "\n\n" + r(_ + 1) + "return " + d + ";", l.length && (c = r(_ + 1) + (y.useVar ? "var " : "let ") + l.join(", ") + ";\n\n" + c), T = d + " = (function() {\n" + c + "\n" + r(_) + "}).call(this)", p || f.push(1);
              } else $ = $ instanceof i.Body ? new i.Body(null, $.unwrap.map(e => Object.assign(e, {
                lineCount: 1
              }))).parse({
                that: e,
                $such: t,
                scope: s,
                tabs: _ + 1,
                isClass: {
                  doesExtend: !!E
                },
                isChildren: !0,
                vars: n,
                varExistent: a,
                constants: o,
                comments: h,
                lastNodeLocation: (N[1] || N[0] || {
                  loc: m
                }).loc,
                debug: !0,
                registry: y
              }) : "", T += A, $.length ? T += " {\n" + r(_ + 1) + $ + "\n" + r(_) + "}" : T += ` {\n${r(_)}}`;

              return T;
            }
          }]);

          return _class9;
        }(n), i.Compare = function (_n10) {
          _inherits(_class10, _n10);

          var _super12 = _createSuper(_class10);

          function _class10() {
            _classCallCheck(this, _class10);

            return _super12.apply(this, arguments);
          }

          _createClass(_class10, [{
            key: "operand",
            get: function () {
              switch (this.rule) {
                case "IS":
                  return "===";

                case "ISNT":
                  return "!==";

                case "OR":
                  return "||";

                case "AND":
                  return "&&";

                default:
                  return this.rule.toLowerCase();
              }
            }
          }, {
            key: "inverse",
            get: function () {
              switch (this.operand) {
                case "IS":
                case "!==":
                  return "===";

                case "ISNT":
                case "===":
                  return "!==";

                case "==":
                  return "!=";

                case "!=":
                  return "==";

                case "<":
                  return ">=";

                case ">":
                  return "<=";

                case ">=":
                  return "<";

                case "<=":
                  return ">";

                default:
                  return this.operand;
              }
            }
          }]);

          return _class10;
        }(n), i.Else = function (_n11) {
          _inherits(_class11, _n11);

          var _super13 = _createSuper(_class11);

          function _class11() {
            _classCallCheck(this, _class11);

            return _super13.apply(this, arguments);
          }

          _createClass(_class11, [{
            key: "isIndirect",
            get: function () {
              if ("ElseOtherwise Expression" === this.rule && !(this.unwrapAll instanceof i.Body)) return !0;
            }
          }]);

          return _class11;
        }(n), i.Expression = function (_n12) {
          _inherits(_class12, _n12);

          var _super14 = _createSuper(_class12);

          function _class12() {
            _classCallCheck(this, _class12);

            return _super14.apply(this, arguments);
          }

          _createClass(_class12, [{
            key: "parse",
            value: function parse({
              lineReturns: e = !1,
              addSemicolon: t = [],
              construct: s = !1,
              constants: c = [],
              vars: _ = [],
              varExistent: u = [],
              that: f = [],
              $such: h = [],
              scope: m = [],
              isValue: y = !1,
              isInvoked: d = !1,
              isOperation: E = !1,
              isLine: g = !1,
              prevLine: $ = [],
              tabs: I = 0,
              isCondition: T = !1,
              isDirect: N = !1,
              isClass: O = !1,
              isCompare: k = !1,
              isAssignment: L = !1,
              isAssigned: b = !1,
              ID: A = [],
              isParam: S = !1,
              nl: v,
              func: x = !1,
              scopedParams: w = Object.assign([], {
                generated: !0
              }),
              comments: R = [],
              afterParse: D,
              metaComments: P = [],
              lastNodeLocation: C = {
                first_line: 0,
                first_column: 0,
                last_line: 0,
                last_column: 0
              },
              registry: F = {},
              isUnless: M = !1,
              FiresSuper: j = [],
              FiresAwait: U = [],
              FiresYield: G = [],
              assignRes: B = !1,
              isStatement: H = !1,
              constant: W = !1,
              FiresSoak: Y,
              isNarrow: V = !1,
              isObjProperty: X,
              metaQueue: K
            } = {}) {
              var [q, z] = this;
              let J,
                  Q,
                  Z,
                  ee = "";

              switch ("Expression" == z[0] && (z = z[1]), R = o(void 0, R, this.loc).childComments, this.rule) {
                case "While":
                  {
                    if (J = !0, y) {
                      let e = l(m, !0, "results");
                      ee += i.Block.wrap(this, "", "return " + e + ";").parse({
                        addSemicolon: [1],
                        that: f,
                        $such: h,
                        scope: m,
                        constants: c,
                        vars: _,
                        varExistent: u,
                        isChildren: !0,
                        appendToVars: `${e} = []`,
                        tabs: I,
                        comments: R,
                        lastNodeLocation: C,
                        registry: F,
                        FiresSuper: j,
                        FiresAwait: U,
                        FiresYield: G,
                        callSelf: !0,
                        assignRes: [e, !0]
                      });
                      break;
                    }

                    t.pop();
                    let [e, s, n] = z.contents;
                    ee += "while (" + e.parse({
                      addSemicolon: [],
                      constants: c,
                      vars: _,
                      varExistent: u,
                      that: f,
                      $such: h,
                      scope: m,
                      isValue: !0,
                      prevLine: $,
                      tabs: I,
                      isCondition: !0,
                      isAssigned: b,
                      scopedParams: w,
                      comments: R,
                      registry: F,
                      isUnless: "UNTIL" === n[0],
                      FiresSuper: j,
                      FiresAwait: U,
                      FiresYield: G
                    }) + ") {\n" + r(I + 1) + s.parse({
                      lineReturns: !!B,
                      that: f,
                      $such: h,
                      scope: m,
                      vars: _,
                      varExistent: u,
                      constants: c,
                      tabs: I + 1,
                      comments: R,
                      registry: F,
                      isChildren: !0,
                      assignRes: B,
                      FiresSuper: j,
                      FiresAwait: U,
                      FiresYield: G
                    }) + "\n" + r(I) + "}";
                    break;
                  }

                case "Switch":
                  if (J = !0, y) {
                    let e = a(m, "s");
                    ee += i.Block.wrap(this, "", "return " + e + ";").parse({
                      addSemicolon: [1],
                      construct: s,
                      that: f,
                      $such: h,
                      scope: m,
                      constants: c,
                      vars: _,
                      varExistent: u,
                      tabs: I,
                      comments: R,
                      lastNodeLocation: C,
                      registry: F,
                      FiresSuper: j,
                      FiresAwait: U,
                      FiresYield: G,
                      callSelf: !0,
                      assignRes: [e, !1],
                      appendToVars: e,
                      isChildren: !0
                    });
                    break;
                  }

                  t.pop(), ee += z.parse({
                    lineReturns: !!B,
                    that: f,
                    $such: h,
                    scope: m,
                    vars: _,
                    varExistent: u,
                    constants: c,
                    tabs: I + 1,
                    comments: R,
                    registry: F,
                    isChildren: !0,
                    assignRes: B,
                    prevLine: $,
                    FiresSuper: j,
                    FiresAwait: U,
                    FiresYield: G
                  });
                  break;

                case "For":
                  if (J = !0, y) {
                    let e = l(m, !0, "results"),
                        t = [];
                    ee += i.Block.wrap(this, "", "return " + e + ";").parse({
                      addSemicolon: [1],
                      construct: s,
                      that: f,
                      $such: h,
                      scope: m,
                      constants: c,
                      vars: _,
                      varExistent: u,
                      tabs: I,
                      comments: R,
                      lastNodeLocation: C,
                      registry: F,
                      FiresSuper: j,
                      FiresAwait: t,
                      FiresYield: G,
                      callSelf: !0,
                      isChildren: !0,
                      assignRes: [e, !0],
                      appendToVars: e + " = []"
                    }), t.length && (ee = `await ${ee}`, U.push(1));
                    break;
                  }

                  t.pop(), ee += z.parse({
                    lineReturns: !!B,
                    that: f,
                    $such: h,
                    scope: m,
                    vars: _,
                    varExistent: u,
                    constants: c,
                    tabs: I + 1,
                    comments: R,
                    registry: F,
                    isChildren: !0,
                    assignRes: B,
                    prevLine: $,
                    FiresSuper: j,
                    FiresAwait: U,
                    FiresYield: G
                  });
                  break;

                case "TryBlock":
                  {
                    if (J = !0, y) {
                      let e = l(m, !0, "result");
                      ee += i.Block.wrap(this, "", "return " + e + ";").parse({
                        addSemicolon: [1],
                        construct: s,
                        that: f,
                        $such: h,
                        scope: m,
                        constants: c,
                        vars: _,
                        varExistent: u,
                        isChildren: !0,
                        tabs: I,
                        comments: R,
                        lastNodeLocation: C,
                        registry: F,
                        FiresSuper: j,
                        FiresAwait: U,
                        FiresYield: G,
                        callSelf: !0,
                        isChildren: !0,
                        assignRes: [e, !1],
                        appendToVars: e
                      });
                      break;
                    }

                    let n, a, o;
                    t.pop(), z.contents.filter(e => null !== e).map(([t, ...p]) => {
                      switch (t.split(" ")[0]) {
                        case "TRY":
                        case "FINALLY":
                          {
                            let [l] = p;
                            l instanceof i.Block && (l = l.unwrap), l = l.parse({
                              lineReturns: e || !!B,
                              addSemicolon: [1],
                              construct: s,
                              that: f,
                              $such: h,
                              scope: m,
                              constants: c,
                              vars: _,
                              varExistent: u,
                              prevLine: $,
                              tabs: I + 1,
                              comments: R,
                              lastNodeLocation: C,
                              registry: F,
                              FiresSuper: j,
                              FiresAwait: U,
                              FiresYield: G,
                              assignRes: B,
                              isChildren: !0,
                              func: e
                            });
                            let a = `${t.split(" ")[0].toLowerCase()} {\n${r(I + 1)}${l}\n${r(I)}}`;
                            "TRY" === t.split(" ")[0] ? n = a : o = a;
                            break;
                          }

                        case "CATCH":
                          {
                            let [t, n] = p,
                                o = [];
                            t ? t = t.parse({
                              registry: F
                            }) : (t = l(m, !0, "err"), o[0] = t), n instanceof i.Block && (n = n.unwrap), n = n.parse({
                              lineReturns: e || !!B,
                              addSemicolon: [1],
                              construct: s,
                              that: f,
                              $such: o,
                              scope: m,
                              constants: c,
                              vars: _,
                              varExistent: u,
                              prevLine: $,
                              tabs: I + 1,
                              comments: R,
                              lastNodeLocation: C,
                              registry: F,
                              FiresSuper: j,
                              FiresAwait: U,
                              FiresYield: G,
                              assignRes: B,
                              isChildren: !0,
                              func: e
                            }), a = `catch (${t}) {\n${r(I + 1)}${n}\n${r(I)}}`;
                            break;
                          }
                      }
                    }), a || (a = `catch(${l(m, !1, "err")}) {  }`), ee += `${n} ${a}${o ? ` ${o}` : ""}`;
                    break;
                  }

                case "Operation":
                  d && !["DO Expression", "@ Value"].includes(this.unwrap.rule) && (Q = !0), M && !z.canInverse ? (Z = !1, Q = !0) : M && (Z = !0), y = y || Array.isArray(B) && e, ee += z.parse({
                    lineReturns: e,
                    addSemicolon: t,
                    construct: s,
                    that: f,
                    $such: h,
                    scope: m,
                    constants: c,
                    vars: _,
                    varExistent: u,
                    isValue: y,
                    prevLine: $,
                    tabs: I,
                    isCondition: T,
                    isLine: g,
                    isCompare: k,
                    func: x,
                    scopedParams: w,
                    isAssigned: b,
                    comments: R,
                    lastNodeLocation: C,
                    registry: F,
                    isUnless: M,
                    FiresSuper: j,
                    FiresAwait: U,
                    FiresYield: G
                  });
                  break;

                case "Value":
                  F.isELSON || !d && !g || e || !["Assignable"].includes(z.rule) || ["Identifier", "Array", "Value Access"].includes(z[1].rule) || (Q = !0), ["Function"].includes(z.rule) && O && (J = !0, t.pop()), ee += z.parse({
                    lineReturns: e,
                    addSemicolon: t,
                    construct: s,
                    that: f,
                    $such: h,
                    scope: m,
                    constants: c,
                    vars: _,
                    varExistent: u,
                    isValue: y,
                    prevLine: $,
                    tabs: I,
                    isCondition: T,
                    isOperation: E,
                    isStatement: H,
                    isDirect: N,
                    isClass: O,
                    isLine: g,
                    isAssignment: L,
                    ID: A,
                    isParam: S,
                    func: x,
                    scopedParams: w,
                    isAssigned: b,
                    comments: R,
                    lastNodeLocation: C,
                    registry: F,
                    FiresSuper: j,
                    FiresAwait: U,
                    FiresYield: G,
                    FiresSoak: Y,
                    isNarrow: V,
                    isObjProperty: X,
                    afterParse: D,
                    metaComments: P,
                    metaQueue: K
                  });
                  break;

                case "Class":
                  d ? Q = !0 : J = !0, ee += z.parse({
                    lineReturns: e,
                    addSemicolon: t,
                    construct: s,
                    that: f,
                    $such: h,
                    scope: m,
                    constants: c,
                    vars: _,
                    varExistent: u,
                    isValue: y,
                    prevLine: $,
                    tabs: I,
                    isCondition: T,
                    isLine: g,
                    func: x,
                    scopedParams: w,
                    isAssigned: b,
                    comments: R,
                    lastNodeLocation: C,
                    registry: F,
                    FiresSuper: j,
                    FiresAwait: U,
                    FiresYield: G
                  }), t.pop();
                  break;

                case "Assign":
                  k || H || !(d || E || V) || (Q = !0), ee += z.parse({
                    vars: _,
                    varExistent: u,
                    lineReturns: e,
                    that: f,
                    $such: h,
                    scope: m,
                    constants: c,
                    construct: s,
                    isValue: y,
                    prevLine: $,
                    isCondition: T,
                    isCompare: k,
                    tabs: I,
                    func: x,
                    scopedParams: w,
                    comments: R,
                    lastNodeLocation: C,
                    registry: F,
                    FiresSuper: j,
                    FiresAwait: U,
                    FiresYield: G,
                    ID: A,
                    isStatement: H,
                    constant: W,
                    addSemicolon: t,
                    afterParse: D,
                    metaComments: P
                  });
                  break;

                case "If":
                  d && (Q = !0), z.quoteSyntax || (J = !0, t && t.pop && t.pop()), Array.isArray(B) && z.unwrap[2] instanceof i.Expression && (z.unwrap[2] = i.Block.wrap(z.unwrap[2])), ee += z.parse({
                    vars: _,
                    varExistent: u,
                    constants: c,
                    that: f,
                    $such: h,
                    scope: m,
                    isValue: y,
                    isInvoked: d,
                    prevLine: $,
                    tabs: I,
                    lineReturns: e,
                    isLine: g,
                    func: x,
                    scopedParams: w,
                    isAssigned: b,
                    comments: R,
                    lastNodeLocation: C,
                    registry: F,
                    FiresSuper: j,
                    FiresAwait: U,
                    FiresYield: G,
                    assignRes: B
                  });
                  break;

                case "Code":
                  {
                    d && (Q = !0);
                    let [e, t, s] = z.contents,
                        {
                      async: l,
                      yield: a
                    } = z;
                    s instanceof i.Block && (s = s.unwrap);
                    let o = s instanceof i.Expression;
                    l && (ee += "async "), ee += "->" === t ? "function(" : "(";
                    let y,
                        E = [],
                        T = [],
                        N = [];
                    if (null !== e) for (let t of e.contents) y = t.loc, T.push(p(t.unwrap, {
                      scope: m,
                      vars: _,
                      varExistent: u,
                      tabs: I + 1,
                      constants: c,
                      $such: h,
                      that: f,
                      varExistent: u,
                      Insert: N,
                      Params: E,
                      comments: R,
                      lastNodeLocation: C,
                      registry: F
                    }));

                    if (N.length) {
                      o && (s = new i.Block(null, i.Block.wrap(s)), o = !1);
                      let e = s[1][1],
                          t = 0;
                      e.find(([, e], s) => {
                        if (!(e instanceof n)) return;
                        let i = [];
                        e.parse({
                          FiresSuper: i
                        }), i.length && (t = s + 1);
                      }), e.splice(t, 0, ...N.map((e, t) => new i.Line("SimpleCode", [`${f && f[0] || "this"}.${e[0]} = ${e[1]};`])));
                    }

                    ee += T.join(", ") + ")";
                    let O,
                        k = [],
                        L = [];
                    o && "=>" === t ? (O = !0, ee += " => ", ee += s.parse({
                      constants: c,
                      that: f,
                      $such: h,
                      scope: m.concat(...E),
                      isValue: !0,
                      prevLine: $,
                      tabs: I,
                      isLine: g,
                      func: !0,
                      scopedParams: E,
                      isAssigned: b,
                      vars: _,
                      varExistent: u,
                      comments: R,
                      lastNodeLocation: C,
                      registry: F,
                      FiresAwait: k,
                      FiresYield: L
                    })) : (ee += "=>" === t ? (O = !0) && ` ${t} ` : " ", ee += "{\n" + r(I + 1) + s.parse({
                      lineReturns: !0,
                      constants: c,
                      that: f,
                      $such: h,
                      scope: m.concat(...E),
                      varExistent: _,
                      varExistent: u,
                      tabs: I + 1,
                      func: !0,
                      scopedParams: E,
                      comments: R,
                      lastNodeLocation: C,
                      registry: F,
                      FiresAwait: k,
                      FiresYield: L
                    }) + "\n" + r(I) + "}"), (L.length || a) && O ? this.throwSyntaxError("Generators can't be used in arrow functions.", L[0]) : (L.length || a) && (ee = ee.replace(/^function\(/, "function*(")), k.length && !l && (ee = `async ${ee}`);
                    break;
                  }

                case "Label":
                  {
                    let e;
                    ee += z[1].parse({
                      registry: F
                    }) + ": ", e = z[2] instanceof i.Block ? z[2].unwrap : z[2], ee += `{\n${r(I + 1)}${e.parse({
                      that: f,
                      $such: h,
                      scope: m,
                      vars: _,
                      varExistent: u,
                      constants: c,
                      tabs: I + 1,
                      comments: R,
                      registry: F,
                      isChildren: !0,
                      assignRes: B,
                      prevLine: $,
                      FiresSuper: j,
                      FiresAwait: U,
                      FiresYield: G
                    })}\n${r(I)}}`;
                    break;
                  }
              }

              return e && !J && (ee = Array.isArray(B) ? (F.sources ? F.sources.add(this.loc) : "") + B[0] + (B[1] ? ".push(" + ee + ")" : " = " + ee) : (F.sources ? F.sources.add(this.loc) : "") + "return " + ee), Q && (ee = (F.sources ? F.sources.add(this.loc) : "") + "(" + ee + ")"), M && !Z && (ee = "!" + ee), s && (ee = "new " + ee), t.length && !J && (ee += ";", t.pop()), ee;
            }
          }]);

          return _class12;
        }(n), i.For = function (_n13) {
          _inherits(_class13, _n13);

          var _super15 = _createSuper(_class13);

          function _class13() {
            _classCallCheck(this, _class13);

            return _super15.apply(this, arguments);
          }

          _createClass(_class13, [{
            key: "parse",
            value: function parse({
              prevLine: e,
              lineReturns: t,
              that: s,
              $such: n,
              scope: l,
              vars: o,
              varExistent: c,
              constants: p,
              tabs: _,
              comments: u,
              registry: f = {},
              isChildren: h,
              assignRes: m,
              appendToVars: y,
              FiresSuper: d,
              FiresAwait: E,
              FiresYield: g
            }) {
              let [$, I, T] = this.contents,
                  N = "";
              if (I = I instanceof i.Block ? I.unwrap : I, "string" == typeof $[1]) {
                if (/for_(from|at|as)/.test($[1])) {
                  let [[y, O],, k] = $,
                      L = [],
                      b = a(l, "j"),
                      A = T ? T[0].toLowerCase() + " " : "";
                  l.push(b), o.push(b), T || o.includes(y.parse().toString) || o.push(y.parse().toString());
                  let S = new i.Identifier("Identifier", b);
                  N += `for (${A}${y.parse({
                    that: s,
                    $such: n,
                    scope: l,
                    constants: p,
                    vars: o,
                    varExistent: c,
                    registry: f
                  })} in (${f.sources ? f.sources.add(k.loc) : ""}${b} = ${k.parse({
                    that: s,
                    $such: n,
                    scope: l,
                    vars: o,
                    varExistent: c,
                    constants: p,
                    isValue: !0,
                    isAssigned: !0,
                    registry: f,
                    FiresSuper: d,
                    FiresAwait: E,
                    FiresYield: g
                  })})) {\n` + r(_), k = new i.Expression("Value", new i.Value("Assignable", new i.Assignable("Value Access", new i.Value("Assignable", new i.Assignable("Identifier", S.setLoc(k.loc)).setLoc(k.loc)).setLoc(k.loc), new i.Access("INDEX_START Expression INDEX_END", y).setLoc(y.loc)).setLoc(k.loc)).setLoc(k.loc));
                  let v = A + new i.Expression("Assign", new i.Assign("Assignment", new i.Assignment(null, O, k, [$[1].split("_").pop().toUpperCase()]).setLoc(O.loc)).setLoc(O.loc)).parse({
                    that: s,
                    $such: n,
                    scope: l,
                    vars: o,
                    varExistent: c,
                    constants: p,
                    tabs: _,
                    comments: u,
                    registry: f,
                    isChildren: h,
                    assignRes: m,
                    prevLine: L,
                    isLine: !0,
                    FiresSuper: d,
                    FiresAwait: E,
                    FiresYield: g,
                    isStatement: Array.isArray(T),
                    constant: T && "CONST" === T[0]
                  }) + `;\n\n${r(_)}`;
                  N += `${L.length ? L.join(`;\n${r(_)}`) + `;\n${r(_)}` : ""}${v}`, N += I.parse({
                    prevLine: e,
                    lineReturns: t,
                    that: s,
                    $such: n,
                    scope: l,
                    vars: o,
                    varExistent: c,
                    constants: p,
                    tabs: _,
                    comments: u,
                    registry: f,
                    isChildren: !0,
                    assignRes: m,
                    FiresSuper: d,
                    FiresAwait: E,
                    FiresYield: g
                  }), N += `\n${r(_ - 1)}}`;
                } else {
                  let [y, O, k] = $,
                      L = [],
                      b = "";

                  if ("for_of" === O || "for_in" === O && "Identifier" === y.rule) {
                    let a = [];

                    if (!T) {
                      new i.Assignment("Assignable AssignKeyword Expression", y, new i.Expression(null, []), ["AS"]).setLoc($[0].loc).parse({
                        that: s,
                        $such: n,
                        scope: l,
                        vars: o,
                        varExistent: c,
                        constants: p,
                        registry: f,
                        ID: a
                      });

                      for (let [e] of a) o.includes(e.toString()) || o.push(e);
                    }

                    N += `for (${T ? T[0].toLowerCase() + " " : ""}${$[0].parse({
                      prevLine: e,
                      that: s,
                      $such: n,
                      scope: l,
                      vars: o,
                      varExistent: c,
                      constants: p,
                      tabs: _,
                      comments: u,
                      registry: f,
                      isChildren: h,
                      assignRes: m,
                      addSemicolon: []
                    })} ${f.sources ? f.sources.add($[2].loc) : ""}${$[1].split("_")[1]} ${$[2].parse({
                      prevLine: e,
                      that: s,
                      $such: n,
                      scope: l,
                      vars: o,
                      varExistent: c,
                      constants: p,
                      tabs: _,
                      comments: u,
                      registry: f,
                      isChildren: h,
                      assignRes: m,
                      addSemicolon: [],
                      FiresSuper: d,
                      FiresAwait: E,
                      FiresYield: g
                    })}) {\n${r(_)}${I.parse({
                      prevLine: e,
                      lineReturns: t,
                      that: s,
                      $such: n,
                      scope: l,
                      vars: o,
                      varExistent: c,
                      constants: p,
                      tabs: _,
                      comments: u,
                      registry: f,
                      isChildren: !0,
                      assignRes: m,
                      FiresSuper: d,
                      FiresAwait: E,
                      FiresYield: g
                    })}\n${r(_ - 1)}}`;
                  } else {
                    let $ = a(l, "j"),
                        O = a(l.concat($), "i");
                    l.push($, O), o.push($, O);
                    let A = new i.Identifier("Identifier", $),
                        S = new i.Expression("Value", new i.Value("Assignable", new i.Assignable("Identifier", new i.Identifier("IDENTIFIER", O)))),
                        v = new i.Expression("Value", new i.Value("Assignable", new i.Assignable("Value Access", new i.Value("Assignable", new i.Assignable("Identifier", A.setLoc(k.loc)).setLoc(k.loc)).setLoc(k.loc), new i.Access("INDEX_START Expression INDEX_END", S).setLoc(y.loc)).setLoc(k.loc)).setLoc(k.loc));
                    b = (T ? T[0].toLowerCase() + " " : "") + new i.Expression("Assign", new i.Assign("Assignment", new i.Assignment(null, y, v, ["AS"]).setLoc(y.loc)).setLoc(y.loc)).parse({
                      that: s,
                      $such: n,
                      scope: l,
                      vars: o,
                      varExistent: c,
                      constants: p,
                      tabs: _,
                      comments: u,
                      registry: f,
                      isChildren: h,
                      assignRes: m,
                      prevLine: L,
                      isLine: !0,
                      FiresSuper: d,
                      FiresAwait: E,
                      FiresYield: g,
                      isStatement: Array.isArray(T),
                      constant: T && "CONST" === T[0]
                    }) + `;\n\n${r(_)}`, N += `for (${O} in (${$} = ${k.parse({
                      that: s,
                      $such: n,
                      prevLine: e,
                      scope: l,
                      vars: o,
                      varExistent: c,
                      constants: p,
                      isAssigned: !0,
                      isValue: !0,
                      addSemicolon: [],
                      registry: f,
                      comments: u,
                      FiresSuper: d,
                      FiresAwait: E,
                      FiresYield: g
                    })})) {\n${r(_)}${L.length ? L.join(`;\n${r(_)}`) + `;\n${r(_)}` : ""}${b}${I.parse({
                      prevLine: e,
                      lineReturns: t,
                      that: s,
                      $such: n,
                      scope: l,
                      vars: o,
                      varExistent: c,
                      constants: p,
                      tabs: _,
                      comments: u,
                      registry: f,
                      isChildren: !0,
                      assignRes: m,
                      FiresSuper: d,
                      FiresAwait: E,
                      FiresYield: g
                    })}\n${r(_ - 1)}}`;
                  }
                }
              } else N += `for (${$.map(e => e.parse({
                that: s,
                $such: n,
                scope: l,
                vars: o,
                varExistent: c,
                constants: p,
                isValue: !0,
                isAssigned: !0,
                registry: f,
                FiresSuper: d,
                FiresAwait: E,
                FiresYield: g,
                registry: f
              })).join("; ")}) {\n${r(_)}${I.parse({
                prevLine: e,
                lineReturns: t,
                that: s,
                $such: n,
                scope: l,
                vars: o,
                varExistent: c,
                constants: p,
                tabs: _,
                comments: u,
                registry: f,
                isChildren: !0,
                assignRes: m,
                FiresSuper: d,
                FiresAwait: E,
                FiresYield: g
              })}\n${r(_ - 1)}}`;
              return N;
            }
          }]);

          return _class13;
        }(n), i.ForExpression = function (_n14) {
          _inherits(_class14, _n14);

          var _super16 = _createSuper(_class14);

          function _class14() {
            _classCallCheck(this, _class14);

            return _super16.apply(this, arguments);
          }

          _createClass(_class14, [{
            key: "parse",
            value: function parse(e) {
              let {
                rule: t
              } = this;
              return "Declare" === t ? new i.Statement("Declare", this.unwrap).setLoc(this.loc).parse(e) : this.unwrap.parse(e);
            }
          }]);

          return _class14;
        }(n), i.Function = function (_n15) {
          _inherits(_class15, _n15);

          var _super17 = _createSuper(_class15);

          function _class15() {
            _classCallCheck(this, _class15);

            return _super17.apply(this, arguments);
          }

          _createClass(_class15, [{
            key: "parse",
            value: function parse({
              that: e,
              $such: t,
              scope: s,
              vars: a,
              varExistent: _,
              constants: u,
              prevLine: f,
              isValue: h,
              tabs: m,
              func: y,
              scopedParams: d,
              comments: E,
              lastNodeLocation: g,
              registry: $ = {},
              FiresSuper: I,
              isInvoked: T,
              isParam: N,
              isClass: O,
              isObject: k,
              lineReturns: L,
              isExport: b,
              isLine: A,
              metaComments: S = [],
              metaQueue: v
            }) {
              let {
                loc: x,
                rule: w
              } = this,
                  R = "",
                  D = this.contents,
                  {
                get: P,
                static: C,
                set: F,
                async: M,
                yields: j,
                arguments: U,
                returns: G
              } = D[2] || {};
              G && G.length > 1 && this.throwSyntaxError("Duplicate return-type annotation after end of name/parameters", G[1].loc), C && (R += "static "), P && (R += "get "), F && (R += "set "), M && (R += "async ");
              let B = !1;
              O || k || (R += `function${j ? "*" : ""} `, B = !0);
              let H,
                  W = D[0],
                  [Y, V] = W || [],
                  X = !0;
              !Y && b && this.throwSyntaxError("Expected a name for exported function."), Y ? (Y = Y.parse ? Y.parse() : Y, k && /FUNCTION/.test(w) && (R += `${Y}: function `), O && "constructor" === Y ? X = !1 : O && O.doesExtend && (H = Y.parse ? Y.parse() : Y), R += Y.parse ? Y.parse({
                registry: $
              }) : ($.sources ? $.sources.add(W[0].loc) : "") + Y) : O ? (R += ($.sources ? $.sources.add(x) : "") + (Y = "constructor"), X = !1) : A && !h ? (R += ($.sources ? $.sources.add(x) : "") + (Y = l(s, !0, "fn")), t.push(Y)) : k && throwSyntaxError({
                message: "Object literals can't contain anonymous functions.",
                location: _objectSpread(_objectSpread({}, x), {}, {
                  last_line: x.first_line,
                  last_column: x.first_column + 1
                })
              }), M && !X && throwSyntaxError({
                message: "'async' modifier cannot appear on a constructor declaration.",
                location: _objectSpread(_objectSpread({}, x), {}, {
                  last_line: x.first_line,
                  last_column: x.first_column + 5,
                  scope: $.scope
                })
              }), U && !$.omitTypeScript && ($.isTypeScript = !0, R += ($.sources ? $.sources.add(U.loc) : "") + "<" + U.parse({
                registry: $
              }) + ">"), R += "(", "function (" == R && (R = "function(");
              let K,
                  q = R,
                  {
                childComments: z
              } = o(x, E, x),
                  J = "",
                  Q = [],
                  Z = [],
                  ee = [],
                  te = [];
              if (V && V[1] instanceof i.ParamList) for (let i of V[1].contents) K = i.loc, Z.push(p(i.unwrap, {
                scope: s,
                vars: a,
                varExistent: _,
                tabs: m,
                constants: u,
                $such: t,
                that: e,
                varExistent: a,
                varExistent: _,
                Insert: ee,
                Params: Q,
                comments: z,
                lastNodeLocation: g,
                registry: $,
                isParam: !0,
                typeData: te
              }));

              if (ee.length) {
                D[1] instanceof i.Expression && (D[1] = new i.Block(null, i.Block.wrap(D[1])));
                let t = D[1][1],
                    s = 0;
                t.find(([, e], t) => {
                  if (!(e instanceof n)) return;
                  let i = [];
                  return e.parse({
                    FiresSuper: i
                  }), i.length ? (s = t + 1, !0) : void 0;
                }), t.splice(s, 0, ...ee.map((t, s) => new i.Line("SimpleCode", [`${e && e[0] || "this"}.${t[0]} = ${t[1]};`])));
              }

              if (D[1][1] && D[1][1].length || (D[1][1] = []), z.length && D[1].loc) for (let e of z) $[e.id] || e.loc.first_line === D[1].loc.first_line && (J += c(e, m) + r(m + 1), $[e.id] = !0);
              Q.Supers = H;
              let se = [],
                  ie = [];
              R = D[1].parse({
                scope: s.concat(...Q),
                isValue: h,
                tabs: m + 1,
                lineReturns: L,
                func: "constructor" !== Y || !O,
                scopedParams: Q,
                varExistent: [...a, ..._],
                comments: E,
                lastNodeLocation: g,
                registry: $,
                FiresAwait: se,
                FiresYield: ie
              });
              let ne = Z.join(", ");
              ne && P && throwSyntaxError({
                message: "An accessor cannot have parameters",
                location: V[1].loc
              }), q += ne + ")", G && G.length && !$.omitTypeScript && ($.isTypeScript = !0, q += `: ${G[0].nodes.parse({
                registry: $
              })}`), q += " ", R = q + "{" + (J ? " " + J.trim() : "") + "\n" + r(m + 1) + R + "\n" + r(m) + "}", ie.length && !j && (B || throwSyntaxError({
                message: "Unexpected yield.",
                location: ie[0]
              }), R = R.replace(/^function/i, "function*")), se.length && !M && (X || throwSyntaxError({
                message: "'await' statements cannot appear on a constructor declaration.",
                location: se[0]
              }), R = `async ${R}`);
              let re = this.loc,
                  le = [];

              for (let e = S.length; e > 0; e--) {
                let t = S[e - 1];
                !$[t.id] && (t.loc.last_line + 1 === re.first_line || t.loc.last_line === re.first_line && t.loc.last_column < re.first_column) && (re = t.loc, le.unshift(t[1]));
              }

              return le.length && v && v.push({
                1: ["* ", ...le].join("\n" + r(m) + " * ") + "\n" + r(m),
                block: !0
              }), R;
            }
          }]);

          return _class15;
        }(n), i.Identifier = function (_n16) {
          _inherits(_class16, _n16);

          var _super18 = _createSuper(_class16);

          function _class16() {
            _classCallCheck(this, _class16);

            return _super18.apply(this, arguments);
          }

          _createClass(_class16, [{
            key: "parse",
            value: function parse({
              registry: {
                sources: e
              } = {}
            } = {}) {
              let t = this[1];
              return Array.isArray(t[0]) && t[0].length && (t = t[0]), 0 !== this.rule || /^((?:[^\x00-\x7F]|[a-z$_])(?:[^\x00-\x7F]|[a-z$_\d])*)$/i.test(t) || this.throwSyntaxError("Can't convert property to importable variable."), e && (t = e.add(this.loc) + t), t;
            }
          }]);

          return _class16;
        }(n), i.If = function (_n17) {
          _inherits(_class17, _n17);

          var _super19 = _createSuper(_class17);

          function _class17() {
            _classCallCheck(this, _class17);

            return _super19.apply(this, arguments);
          }

          _createClass(_class17, [{
            key: "parse",
            value: function parse({
              isStatement: e,
              vars: t,
              varExistent: s,
              constants: n,
              that: l,
              $such: a,
              scope: p,
              isValue: u,
              isInvoked: f,
              prevLine: h,
              tabs: m,
              lineReturns: y,
              isLine: d,
              scopedParams: E,
              isAssigned: g,
              comments: $,
              lastNodeLocation: I,
              registry: T = {},
              FiresSuper: N = [],
              assignRes: O
            } = {}) {
              let k,
                  L = "",
                  b = this;

              if (b.postfix) {
                let o = b.unless;
                b.statement && (u = !1, e = !0), b = b.contents;
                let c = m;
                f && !u && c++;
                let [_, d] = [b[0].parse({
                  that: l,
                  $such: a,
                  scope: p,
                  vars: t,
                  varExistent: s,
                  constants: n,
                  prevLine: h,
                  isValue: u,
                  isCondition: !0,
                  tabs: m,
                  comments: $,
                  lastNodeLocation: I,
                  registry: T,
                  isUnless: o,
                  FiresSuper: N
                }), b[1].parse({
                  that: l,
                  $such: a,
                  scope: p,
                  vars: t,
                  varExistent: s,
                  constants: n,
                  prevLine: h,
                  tabs: m,
                  lineReturns: y,
                  addSemicolon: u ? [] : [1],
                  comments: $,
                  lastNodeLocation: b[0].loc,
                  registry: T,
                  FiresSuper: N
                })];
                return !u || b[1] instanceof i.Statement ? L += f ? "if (" + _ + ") {\n" + r(c + 1) + d + "\n" + r(m + 1) + "}\n" + r(m) : "if (" + _ + ") {\n" + r(m + 1) + d + "\n" + r(m) + "}" : L += _ + " ? " + d + " : void 0", f && (e && (L = "{\n" + r(c) + L + "}"), L = "() => " + L), L;
              }

              const {
                loc: A,
                quoteSyntax: S
              } = b,
                    v = b;
              b = b.contents;
              let x,
                  w = (S || /IfUnless (\( )?Expression (\) )?(DoThen )?(\{ )?Expression/.test(b[0].rule)) && !Array.isArray(O);
              if (b[1] && (x = w && (S || b[1].isIndirect)), u && !w) return i.Block.wrap(new i.Expression("If", v)).setLocation(b.loc).parse({
                that: l,
                $such: a,
                scope: p,
                vars: t,
                varExistent: s,
                constants: n,
                tabs: m,
                callSelf: !0,
                isChildren: !0,
                comments: $,
                lastNodeLocation: I,
                registry: T,
                FiresSuper: N,
                scopedParams: E
              });
              let R,
                  D,
                  P,
                  C = b[1];
              [R, D, P] = b[0].contents;
              let F = [],
                  M = R.loc;
              R = R.parse({
                that: l,
                $such: a,
                scope: p,
                vars: t,
                varExistent: s,
                constants: n,
                prevLine: h,
                isValue: !0,
                tabs: m,
                isCondition: !0,
                isDirect: !0,
                comments: $,
                lastNodeLocation: I,
                FiresSuper: N,
                registry: T,
                isUnless: Array.isArray(P) && "UNLESS" === P[0],
                FiresSoak: F
              }), F.length && (R = _(R, {
                tabs: m,
                scope: p,
                vars: t,
                prevLine: h,
                Soaks: F,
                registry: T,
                loc: this.loc
              })), y && (k = !0);
              let j,
                  U = D.loc,
                  G = C ? C.loc : {
                first_line: U.last_line,
                first_column: U.last_column
              };

              if (F = [], D instanceof i.Expression || D instanceof i.Statement) {
                let {
                  matchedComments: e
                } = o(M, $, G);
                D = D.parse({
                  that: l,
                  $such: a,
                  scope: p,
                  vars: t,
                  varExistent: s,
                  constants: n,
                  tabs: w ? m : m + 1,
                  isValue: C ? w && x : w,
                  prevLine: h,
                  lineReturns: y && !w,
                  addSemicolon: w ? [] : [1],
                  comments: e,
                  lastNodeLocation: R.loc,
                  registry: T,
                  FiresSuper: N,
                  assignRes: O,
                  FiresSoak: F,
                  isNarrow: !0
                }), F.length && (D = _(D, {
                  tabs: m,
                  scope: p,
                  vars: t,
                  prevLine: h,
                  Soaks: F,
                  registry: T,
                  loc: U
                }));

                for (let t of e) {
                  if (T[t.id]) continue;
                  let e = c(t, m + 1, !0);
                  D += "\n" + r(m + 1) + e.trim(), T[t.id] = !0;
                }
              } else D = D instanceof i.Block ? D.unwrap : D, D = D.parse({
                that: l,
                $such: a,
                scope: p,
                vars: t,
                varExistent: s,
                constants: n,
                tabs: m + 1,
                isChildren: !0,
                func: y,
                comments: $,
                lastNodeLocation: R.loc,
                registry: T,
                FiresSuper: N,
                assignRes: O
              });

              return C && (C = C.unwrap, C instanceof i.Expression || C instanceof i.Statement ? (F = [], j = C.unwrap instanceof i.If, C = C.parse({
                that: l,
                $such: a,
                scope: p,
                vars: t,
                varExistent: s,
                constants: n,
                tabs: m + 1 - (j || w),
                isValue: w && x,
                prevLine: h,
                lineReturns: !x && y,
                addSemicolon: x ? [] : [1],
                comments: $,
                lastNodeLocation: D.loc,
                registry: T,
                FiresSuper: N,
                assignRes: O,
                FiresSoak: F,
                isNarrow: !0
              }), F.length && (C = _(C, {
                tabs: m,
                scope: p,
                vars: t,
                prevLine: h,
                Soaks: F,
                registry: T,
                loc: G
              }))) : (C = C.unwrap, x = !1, j = 1 === C[1].length && !!C.unwrapUntil(e => e instanceof i.If), C = C.parse({
                that: l,
                $such: a,
                scope: p,
                vars: t,
                varExistent: s,
                constants: n,
                isChildren: !0,
                tabs: m + 1 - j,
                func: k,
                comments: $,
                lastNodeLocation: R.loc,
                registry: T,
                FiresSuper: N,
                assignRes: O
              }))), !w || w && C && !x ? (L += "if (" + R + ") ", L += "{\n" + r(m + 1) + D + "\n" + r(m) + "}", C && (L += j ? " else " + C : " else {\n" + r(m + 1) + C + "\n" + r(m) + "}")) : (!u && y && (L = (T.sources ? T.sources.add(this.loc) : "") + "return " + L), L += `${R} ? ${D} : ${C || "void 0"}`), L;
            }
          }]);

          return _class17;
        }(n), i.Interpolation = function (_n18) {
          _inherits(_class18, _n18);

          var _super20 = _createSuper(_class18);

          function _class18() {
            _classCallCheck(this, _class18);

            return _super20.apply(this, arguments);
          }

          _createClass(_class18, [{
            key: "parse",
            value: function parse(e) {
              return "String" === this.rule ? this.unwrap.parse(e) : `\${${this.unwrap.parse(_objectSpread(_objectSpread({}, e), {}, {
                addSemicolon: [],
                isValue: !0
              }))}}`;
            }
          }]);

          return _class18;
        }(n), i.Invocation = function (_n19) {
          _inherits(_class19, _n19);

          var _super21 = _createSuper(_class19);

          function _class19() {
            _classCallCheck(this, _class19);

            return _super21.apply(this, arguments);
          }

          _createClass(_class19, [{
            key: "parse",
            value: function parse({
              that: e,
              $such: t,
              scope: s,
              vars: n,
              varExistent: l,
              constants: p,
              prevLine: u,
              isValue: f,
              tabs: h = 0,
              lineReturns: m,
              func: y,
              scopedParams: d,
              comments: E = [],
              lastNodeLocation: g,
              registry: $ = {},
              FiresSuper: I = [],
              FiresSoak: T
            } = {}) {
              let N,
                  O,
                  [k, L] = this.contents,
                  {
                soak: b,
                templ: A
              } = this,
                  S = !A && L.unwrap,
                  v = L && L.indented,
                  x = "";
              N = S && S.loc || this.loc;
              let w = k.rule,
                  R = k.loc,
                  D = [];

              if (k = "super" === k ? d && d.Supers ? `${k}.${d.Supers}` : k : k.parse({
                that: e,
                $such: t,
                scope: s,
                vars: n,
                varExistent: l,
                constants: p,
                prevLine: u,
                isInvoked: !0,
                tabs: h,
                lineReturns: m,
                func: y,
                scopedParams: d,
                comments: E,
                lastNodeLocation: g,
                registry: $,
                FiresSoak: D
              }), D.length && (k = _(k, {
                tabs: h,
                scope: s,
                vars: n,
                prevLine: u,
                Soaks: D,
                registry: $,
                loc: R
              })), b) {
                let e = k,
                    t = "";
                "Assignable" !== w && (e = a(s, "f"), n.push(e), s.push(e), t += `(${e} = ${k}) && `), t += `typeof ${e} === "function" ? ${e}`, k = t;
              }

              for (let e of E.filter(e => e.loc.first_line < N.first_line || e.loc.first_line === N.first_line && e.loc.first_column < N.first_column)) $[e.id] || (x += c(e, h + 1, !0), $[e.id] = !0, v = !0);

              !A && void 0 !== S && S.contents.length ? (v = S.contents.find(e => /boolean|undefined/.test(typeof e) ? !e : "Code" === e.unwrap.rule || "Value" === e.unwrap.rule && "Function" === e.unwrap.unwrap.rule || void 0) || v, S = S.contents.map((a, f, m) => {
                if (/boolean|undefined/.test(typeof a)) return;
                let g,
                    {
                  expansion: I
                } = a;
                a = a.unwrapUntil(e => e instanceof i.Expression) || a;
                let {
                  childComments: T,
                  matchedComments: O
                } = o(N, E, a.loc),
                    k = [],
                    L = a.parse({
                  that: e,
                  $such: t,
                  scope: s,
                  vars: n,
                  varExistent: l,
                  constants: p,
                  prevLine: u,
                  isValue: !0,
                  isParam: !0,
                  tabs: v ? h + 1 : h,
                  func: y,
                  scopedParams: d,
                  comments: T,
                  lastNodeLocation: N,
                  registry: $,
                  FiresSoak: k
                });
                if (k.length && (L = _(L, {
                  tabs: h,
                  scope: s,
                  vars: n,
                  prevLine: u,
                  Soaks: k,
                  registry: $,
                  loc: a.loc
                })), N = a.loc, I && (L = `...${L}`), O.length) for (let e of O) {
                  if ($[e.id]) continue;
                  v = !0;
                  let t = "";
                  e.loc.first_line > N.last_line && (t = "\n" + r(h + 1)), g = t + c(e, h + 1, !0), L = `${g}${L}`, $[e.id] = !0;
                } else (!1 === m[f - 1] || 0 !== f && void 0 === m[f - 1]) && (L = `\n${r(h + 1) + L}`);
                return L;
              }).filter(e => void 0 !== e)) : S = [], O = S.length;
              let P = S.join(", "),
                  C = "",
                  F = A && L.parse({
                that: e,
                $such: t,
                scope: s,
                vars: n,
                varExistent: l,
                constants: p,
                prevLine: u,
                isValue: f,
                tabs: h,
                lineReturns: m,
                func: y,
                scopedParams: d,
                comments: E,
                lastNodeLocation: g,
                registry: $,
                FiresSuper: I,
                forceBacktick: !0
              });

              for (let e of E.filter(e => e.loc.first_line >= N.last_line)) {
                if ($[e.id]) continue;
                v = !0;
                let t = c(e, h, !0);

                if (e.loc.first_line == N.last_line) {
                  let e = C,
                      s = 0;

                  for (; /\n|\r| /.test(e.charAt(e.length - 1));) e = e.slice(0, -1), s++;

                  C = e + " " + t;
                } else C += "\n" + r(h + 1) + t;

                $[e.id] = !0;
              }

              return !v || x || !P.startsWith("{\n") || /\n\s*\}$/.test(P) && O > 1 || (v = !1), v && (P = "\n" + r(h + 1) + x + P + C + "\n" + r(h)), this.isSuper && I.push(1), k + (A ? F : "(" + P + ")") + (b ? " : void 0" : "");
            }
          }, {
            key: "isSuper",
            get: function () {
              return "super" === this[1];
            }
          }]);

          return _class19;
        }(n), i.JointExpression = function (_n20) {
          _inherits(_class20, _n20);

          var _super22 = _createSuper(_class20);

          function _class20() {
            _classCallCheck(this, _class20);

            return _super22.apply(this, arguments);
          }

          _createClass(_class20, [{
            key: "parse",
            value: function parse(e) {
              let t;
              return t = this.contents.map(t => t.parse(e)).join(", "), t;
            }
          }]);

          return _class20;
        }(n), i.Line = function (_n21) {
          _inherits(_class21, _n21);

          var _super23 = _createSuper(_class21);

          function _class21() {
            _classCallCheck(this, _class21);

            return _super23.apply(this, arguments);
          }

          _createClass(_class21, [{
            key: "parse",
            value: function parse({
              that: e,
              $such: t,
              scope: s,
              constants: i,
              vars: n,
              varExistent: l,
              tabs: a = 0,
              lineReturns: o,
              isClass: c,
              isLine: p = !0,
              func: _,
              scopedParams: u,
              nl: f,
              lastValue: h,
              comments: m = [],
              afterParse: y,
              metaComments: d = [],
              lastNodeLocation: E,
              registry: g = {},
              FiresSuper: $ = [],
              FiresYield: I = [],
              FiresAwait: T = [],
              assignRes: N = !1,
              isParenthetical: O
            } = {}) {
              let k = O ? ", " : "\n\n";
              const [L, b] = this;
              let A = "";
              var S = [];
              return A += r(a) + (b.parse ? b.parse({
                addSemicolon: g.isELSON || O ? [] : [1],
                that: e,
                $such: t,
                scope: s,
                constants: i,
                vars: n,
                varExistent: l,
                prevLine: S,
                tabs: a,
                lineReturns: o,
                isClass: c,
                isLine: p,
                func: _,
                scopedParams: u,
                nl: f,
                comments: m,
                lastNodeLocation: E,
                registry: g,
                FiresSuper: $,
                FiresYield: I,
                FiresAwait: T,
                assignRes: N,
                isParenthetical: O,
                isValue: !!O,
                afterParse: y,
                metaComments: d
              }) : b), S.length && (A = r(a) + S.join(k + r(a)) + k + A), A;
            }
          }]);

          return _class21;
        }(n), i.Literal = function (_n22) {
          _inherits(_class22, _n22);

          var _super24 = _createSuper(_class22);

          function _class22() {
            _classCallCheck(this, _class22);

            return _super24.apply(this, arguments);
          }

          _createClass(_class22, [{
            key: "parse",
            value: function parse({
              that: e,
              $such: t,
              scope: s,
              addSemicolon: n,
              vars: r,
              varExistent: l,
              constants: a,
              lineReturns: o,
              prevLine: c,
              isCondition: p,
              isValue: _,
              tabs: u,
              wrap: f,
              isClass: h,
              isLine: m,
              isAssignment: y,
              ID: d,
              func: E,
              scopedParams: g,
              comments: $,
              lastNodeLocation: I,
              registry: T = {}
            }) {
              const [N, O] = this;
              let k = "";

              switch (!0) {
                case O instanceof i.AlphaNum:
                case O instanceof i.Regex:
                  k = O.parse({
                    that: e,
                    $such: t,
                    scope: s,
                    addSemicolon: n,
                    vars: r,
                    varExistent: l,
                    constants: a,
                    lineReturns: o,
                    prevLine: c,
                    isCondition: p,
                    isValue: _,
                    tabs: u,
                    wrap: f,
                    isClass: h,
                    isLine: m,
                    isAssignment: y,
                    ID: d,
                    func: E,
                    scopedParams: g,
                    comments: $,
                    lastNodeLocation: I,
                    registry: T
                  });
                  break;

                default:
                  k = O;
              }

              return k;
            }
          }]);

          return _class22;
        }(n), i.Logical = function (_i$Compare) {
          _inherits(_class23, _i$Compare);

          var _super25 = _createSuper(_class23);

          function _class23() {
            _classCallCheck(this, _class23);

            return _super25.apply(this, arguments);
          }

          return _createClass(_class23);
        }(i.Compare), i.Object = function (_n23) {
          _inherits(_class24, _n23);

          var _super26 = _createSuper(_class24);

          function _class24() {
            _classCallCheck(this, _class24);

            return _super26.apply(this, arguments);
          }

          _createClass(_class24, [{
            key: "parse",
            value: function parse({
              that: e,
              $such: t,
              scope: s,
              addSemicolon: n = [],
              vars: l,
              varExistent: a,
              constants: p,
              prevLine: _,
              isCondition: u,
              isValue: m,
              isParam: y,
              tabs: d = 0,
              lineReturns: E,
              wrap: g,
              isClass: $,
              isAssignment: I,
              isStatement: T,
              ID: N = [],
              comments: O = [],
              lastNodeLocation: k,
              registry: L = {},
              typeData: b = [],
              afterParse: A,
              metaComments: S = []
            } = {}) {
              S = O.filter(e => e.jsdoc);
              let v = "";
              v += "{";
              let x = this,
                  w = [],
                  R = x.loc,
                  D = x.unwrap[0] && x.unwrap[0][2] && x.unwrap[0][2][0] || R,
                  P = !y && x.indented;
              x = x.unwrap;
              var C,
                  F = "";

              for (let e of O.filter(e => e.loc.first_line < D.first_line || e.loc.first_line === D.first_line && e.loc.first_column < D.first_column)) L[e.id] || (F += c(e, d + 1, !0), L[e.id] = !0, P = !0);

              for (let n of x) {
                if (/boolean|undefined/.test(typeof n)) {
                  n || (P = !0, w.push(["jump", ""]));
                  continue;
                }

                !I && n instanceof i.Assignment ? throwSyntaxError({
                  message: "Assignments not allowed in this context.",
                  location: n.loc
                }) : !I || n[1].unwrap instanceof i.Value || n instanceof i.Assignment || n[1] && n[1].unwrap instanceof i.Assign || !n[1] || n[1] instanceof i.Assignable && (n[1].unwrap.unwrap instanceof i.Assignment || n[1].unwrap.unwrap instanceof i.Assignable) || throwSyntaxError({
                  message: "Invalid left-hand assignment reference.",
                  location: n[2] && n[2][1] || n.loc
                });
                let u,
                    m,
                    E,
                    g,
                    {
                  childComments: $,
                  matchedComments: A
                } = o(R, O, n[2] && n[2][1] || n.loc),
                    v = n[2] && n[2][0].type,
                    x = "",
                    D = "";
                m = n[0];
                let M = [];
                if (m instanceof i.Expression) m = `[${m.parse({
                  that: e,
                  $such: t,
                  scope: s,
                  addSemicolon: [],
                  vars: l,
                  varExistent: a,
                  constants: p,
                  prevLine: _,
                  isValue: !0,
                  isParam: !0,
                  tabs: C || P ? d + 1 : d,
                  isAssignment: I,
                  ID: N,
                  comments: $,
                  lastNodeLocation: k,
                  registry: L
                })}]`;else if (m instanceof i.AlphaNum) {
                  let i;
                  m.unwrap && "StringWithInterpolations" === m.unwrap[0] && (i = !0), L.isELSON && m.unwrap && "STRING" !== m.unwrap[0] && (g = !0), m = m.parse({
                    that: e,
                    $such: t,
                    scope: s,
                    addSemicolon: [],
                    vars: l,
                    varExistent: a,
                    constants: p,
                    prevLine: _,
                    isValue: !0,
                    isParam: !0,
                    tabs: C || P ? d + 1 : d,
                    isAssignment: I,
                    ID: N,
                    comments: $,
                    lastNodeLocation: k,
                    registry: L
                  }), i && (m = `[${m}]`), g && (m = `"${m}"`);
                } else L.isELSON ? m = `"${m}"` : u = m;
                if (L.sources && (x += L.sources.add(n[2] && n[2][0] || n.loc)), n instanceof i.Value ? (!I || n.unwrap.unwrap instanceof i.Identifier || throwSyntaxError({
                  message: "Invalid left-hand assignment reference.",
                  location: n.loc
                }), x += "..." + n.parse({
                  $such: t,
                  that: e,
                  scope: s,
                  vars: l,
                  varExistent: a,
                  constants: p,
                  isAssignment: I,
                  isValue: !0
                })) : n instanceof i.Function ? (C = P = !0, x += new i.Value("Function", n).parse({
                  tabs: d + 1,
                  $such: t,
                  that: e,
                  scope: s,
                  vars: l,
                  varExistent: a,
                  constants: p,
                  isAssignment: I,
                  isValue: !0,
                  isObject: !0,
                  func: !0,
                  comments: O,
                  registry: L,
                  lastNodeLocation: this.loc,
                  metaComments: S
                })) : (x += m, n[1] ? ("Value" === n[1].rule && (["Function", "Code", "Class", "If", "Switch", "While", "TryBlock"].includes(n[1][1].rule) || "Assignable" === n[1][1].rule && ["Object", "Array"].includes(n[1][1][1].rule)) && (P = !y && !0), E = n[1].parse({
                  that: e,
                  $such: t,
                  scope: s,
                  addSemicolon: [],
                  vars: l,
                  varExistent: a,
                  constants: p,
                  prevLine: _,
                  isValue: !0,
                  isAssigned: !0,
                  isObjProperty: !0,
                  isAssignment: I,
                  tabs: P || n[2][2] ? d + 1 : d,
                  comments: $,
                  lastNodeLocation: k,
                  registry: L,
                  isStatement: T,
                  ID: N,
                  metaComments: S,
                  metaQueue: M
                }), x += ": " + E) : (L.isELSON && this.throwSyntaxError("Value expected", n[2][0]), n[3] && (x = `...${x}`), N.push([m, n[2][0]]), u = m)), C ? (P = !0, x = "\n" + r(d + 1) + x) : P && (x = "\n" + r(d + 1) + x), A.length) for (let e of A) L[e.id] || (D = c(e, d, !0).trim(), w.slice(-1)[0][1] += "\n" + r(d + 1) + D, L[e.id] = !0, P = !0);
                if (M.length) for (let e of M) {
                  if (L[e.id]) continue;
                  let t = "\n" + r(d + 1) + c(e, d);
                  0 === w.length ? F += t : w.slice(-1)[0][1] += t, L[e.id] = !0, P = !0;
                }
                R = n[2] && n[2][1] || n.loc, w.push([x, ""]), void 0 !== u && (v ? f(S, [v], d) : v = h({
                  metaComments: S,
                  ID: u,
                  tabs: d,
                  loc: this.loc
                }), v && b.push(_objectSpread({
                  ID: u,
                  kind: "Property"
                }, v)));
              }

              if (w.length) {
                let e = "";

                for (let t of O.filter(e => e.loc.first_line >= R.last_line)) L[t.id] || (e += c(t, d + 1, !0), P = !0, L[t.id] = !0);

                w = w.map(([e, t], s) => "jump" === e ? (P = !0) && t : e + (s === w.length - 1 ? "" : ",") + t + (s == w.length - 1 && P ? "" : " ")).join(""), v += P ? `\n${r(d + 1)}${(F + w + e).trim()}\n${r(d)}` : " " + F + w + e;
              }

              return v += "}", 3 === v.length && (v = "{}"), v = v.replace(/\n \}$/, "\n}"), v;
            }
          }]);

          return _class24;
        }(n), i.Operation = function (_n24) {
          _inherits(_class25, _n24);

          var _super27 = _createSuper(_class25);

          function _class25() {
            _classCallCheck(this, _class25);

            return _super27.apply(this, arguments);
          }

          _createClass(_class25, [{
            key: "parse",
            value: function parse({
              vars: e,
              varExistent: t,
              that: s,
              $such: o = [],
              scope: c,
              constants: p,
              prevLine: u,
              isValue: f,
              isCompare: h,
              tabs: m = 0,
              lineReturns: y,
              isCondition: d,
              inverse: E,
              addSemicolon: g,
              func: $,
              scopedParams: I,
              comments: T = [],
              lastNodeLocation: N,
              registry: O = {},
              isUnless: k,
              FiresSuper: L,
              FiresAwait: b = [],
              FiresYield: A = [],
              assignRes: S
            } = {}) {
              let v = "",
                  x = this.contents,
                  {
                rule: w
              } = this;

              switch (w) {
                case "DO Expression":
                case "@ Value":
                  {
                    let i = [],
                        n = x[0].parse({
                      that: s,
                      $such: o,
                      scope: c,
                      vars: e,
                      varExistent: t,
                      constants: p,
                      prevLine: u,
                      isValue: !0,
                      isInvoked: !0,
                      tabs: m,
                      isCondition: d,
                      func: $,
                      scopedParams: I,
                      comments: T,
                      lastNodeLocation: N,
                      registry: O,
                      FiresSuper: L,
                      FiresAwait: b,
                      FiresYield: A,
                      FiresSoak: i,
                      isOperation: !0
                    });
                    i.length && (n = _(n, {
                      tabs: m,
                      scope: c,
                      vars: e,
                      prevLine: u,
                      Soaks: i,
                      registry: O,
                      loc: this.loc
                    })), v += n + "()";
                    break;
                  }

                case "AWAIT Expression":
                case "AWAIT INDENT Expression OUTDENT":
                  b.push(_objectSpread(_objectSpread({}, x.loc), {}, {
                    last_column: x.loc.first_column + 5,
                    last_line: x.loc.first_line
                  })), v += "await ", v += x[0].parse({
                    that: s,
                    $such: o,
                    scope: c,
                    vars: e,
                    varExistent: t,
                    constants: p,
                    prevLine: u,
                    isValue: !0,
                    isInvoked: !0,
                    tabs: m,
                    isCondition: d,
                    func: $,
                    scopedParams: I,
                    comments: T,
                    lastNodeLocation: N,
                    registry: O,
                    FiresSuper: L,
                    FiresYield: A
                  });
                  break;

                case "YIELD Expression":
                case "YIELD INDENT Expression OUTDENT":
                  A.push(_objectSpread(_objectSpread({}, this.loc), {}, {
                    last_line: this.loc.first_line,
                    last_column: this.loc.first_column + 5
                  })), v += "yield ", v += x[0].parse({
                    that: s,
                    $such: o,
                    scope: c,
                    vars: e,
                    varExistent: t,
                    constants: p,
                    prevLine: u,
                    isValue: !0,
                    isInvoked: !0,
                    tabs: m,
                    isCondition: d,
                    func: $,
                    scopedParams: I,
                    comments: T,
                    lastNodeLocation: N,
                    registry: O,
                    FiresSuper: L,
                    FiresYield: A
                  });
                  break;

                case "WHETHER Expression":
                case "TYPEOF Expression":
                  "WHETHER" != w.split(" ")[0] || h || (v += "!!"), "TYPEOF" == w.split(" ")[0] && (v += "typeof "), x = x[0], v += x.parse({
                    that: s,
                    $such: o,
                    scope: c,
                    vars: e,
                    varExistent: t,
                    constants: p,
                    prevLine: u,
                    isValue: !0,
                    isOperation: !0,
                    tabs: m,
                    lineReturns: y,
                    isCondition: d,
                    comments: T,
                    lastNodeLocation: N,
                    registry: O,
                    FiresSuper: L,
                    FiresAwait: b,
                    FiresYield: A
                  });
                  break;

                case "Expression INCLUDES Expression":
                  v += x[0].parse({
                    that: s,
                    $such: o,
                    scope: c,
                    vars: e,
                    varExistent: t,
                    constants: p,
                    prevLine: u,
                    isValue: !0,
                    isOperation: !0,
                    isInvoked: !0,
                    tabs: m,
                    lineReturns: y,
                    isCondition: d,
                    comments: T,
                    lastNodeLocation: N,
                    registry: O,
                    FiresSuper: L,
                    FiresAwait: b,
                    FiresYield: A
                  }), v += `.includes(${x[1].parse({
                    that: s,
                    $such: o,
                    scope: c,
                    vars: e,
                    varExistent: t,
                    constants: p,
                    prevLine: u,
                    isValue: !0,
                    isOperation: !0,
                    tabs: m,
                    lineReturns: y,
                    isCondition: d,
                    isParam: !0,
                    comments: T,
                    lastNodeLocation: N,
                    registry: O,
                    FiresSuper: L,
                    FiresAwait: b,
                    FiresYield: A
                  })})`;
                  break;

                case "MathPrefix Expression":
                case "Expression MathPostfix":
                  {
                    let n,
                        r = [];
                    v += x.map(l => l instanceof i.Expression ? l.parse({
                      that: s,
                      $such: o,
                      scope: c,
                      vars: e,
                      varExistent: t,
                      constants: p,
                      prevLine: u,
                      isValue: !0,
                      isOperation: !0,
                      tabs: m,
                      comments: T,
                      lastNodeLocation: N,
                      registry: O,
                      FiresSuper: L,
                      FiresAwait: b,
                      FiresYield: A,
                      isOperation: !0,
                      FiresSoak: r
                    }) : n = l[0].replace(/NOT/, "!")).join(""), r.length && (v = _(v, {
                      tabs: m,
                      scope: c,
                      vars: e,
                      prevLine: u,
                      Soaks: r,
                      registry: O,
                      loc: this.loc
                    }));
                    break;
                  }

                case "Expression MATH_BIN Expression":
                case "Expression Compare Expression":
                case "Expression Logical Expression":
                  {
                    let n = [],
                        r = x[0].parse({
                      that: s,
                      $such: o,
                      scope: c,
                      vars: e,
                      varExistent: t,
                      constants: p,
                      prevLine: u,
                      isValue: !0,
                      isOperation: !0,
                      tabs: m,
                      isCondition: d,
                      isCompare: !0,
                      comments: T,
                      lastNodeLocation: N,
                      registry: O,
                      FiresSuper: L,
                      FiresAwait: b,
                      FiresYield: A,
                      FiresSoak: n
                    });
                    n.length && (r = _(r, {
                      tabs: m,
                      scope: c,
                      vars: e,
                      prevLine: u,
                      Soaks: n,
                      registry: O,
                      loc: x[0].loc
                    })), v += r, v += " " + (x[1].operand ? k ? x[1].inverse : x[1].operand : x[1]) + " ", n = [];
                    let l = x[2].parse({
                      that: s,
                      $such: o,
                      scope: c,
                      vars: e,
                      varExistent: t,
                      constants: p,
                      prevLine: u,
                      isValue: !0,
                      isOperation: !0,
                      tabs: m,
                      isCondition: d,
                      comments: T,
                      lastNodeLocation: x[0].loc,
                      registry: O,
                      isUnless: k && x[2].unwrap && x[2].unwrap instanceof i.Operation,
                      FiresSuper: L,
                      FiresAwait: b,
                      FiresYield: A,
                      FiresSoak: n
                    });
                    n.length && (l = _(l, {
                      tabs: m,
                      scope: c,
                      vars: e,
                      prevLine: u,
                      Soaks: n,
                      registry: O,
                      loc: x[2].loc
                    })), v += l;
                    break;
                  }

                case "Expression Operator Expression":
                  v += x.map(i => {
                    if (i.parse) {
                      let n = [],
                          r = i.parse({
                        that: s,
                        $such: o,
                        scope: c,
                        vars: e,
                        varExistent: t,
                        constants: p,
                        prevLine: u,
                        isValue: !0,
                        isOperation: !0,
                        tabs: m,
                        comments: T,
                        lastNodeLocation: N,
                        registry: O,
                        FiresSuper: L,
                        FiresAwait: b,
                        FiresYield: A,
                        FiresSoak: n
                      });
                      return n.length && (r = _(r, {
                        tabs: m,
                        scope: c,
                        vars: e,
                        prevLine: u,
                        Soaks: n,
                        registry: O,
                        loc: i.loc
                      })), r;
                    }

                    return i[0].replace("PLUS", "+").replace("DIVISION", "/");
                  }).join(" ");
                  break;

                case "Expression EXISTS":
                case "Expression SYMBOL_EXISTS":
                  {
                    let i = "Value" === x[0].rule && "Assignable" === x[0][1][0] && "Identifier" === x[0][1][1].rule,
                        n = x[0].parse({
                      that: s,
                      $such: o,
                      scope: c,
                      vars: e,
                      varExistent: t,
                      constants: p,
                      prevLine: u,
                      isValue: !0,
                      isOperation: !0,
                      tabs: m,
                      comments: T,
                      lastNodeLocation: N,
                      registry: O,
                      FiresSuper: L,
                      FiresAwait: b,
                      FiresYield: A
                    }),
                        r = k ? "===" : "!==";
                    if (i) v += `typeof ${n} ${r} "undefined"`;else {
                      let t = a(c, "r");
                      e.push(t), c.push(t), o[0] = t, v += `(${t} = ${n}) && typeof ${t} ${r} "undefined"`;
                    }
                    break;
                  }

                case "Multicondition":
                case "Expression Multicheck":
                  {
                    let n,
                        [r, [l, _]] = x,
                        f = r;
                    if (null === r || "Value" === r.rule && "Assignable" === r[1][0] && "Identifier" === r[1][1].rule) null !== f && (n = () => f.parse({
                      that: s,
                      $such: o,
                      scope: c,
                      vars: e,
                      varExistent: t,
                      constants: p,
                      prevLine: u,
                      isValue: !0,
                      isOperation: !0,
                      tabs: m,
                      comments: T,
                      lastNodeLocation: N,
                      registry: O,
                      FiresSuper: L,
                      FiresAwait: b,
                      FiresYield: A
                    }));else {
                      let i = a(c, "r");
                      e.push(i), c.push(i), o[0] = i, n = i;
                      let r = f.parse({
                        that: s,
                        $such: o,
                        scope: c,
                        vars: e,
                        varExistent: t,
                        constants: p,
                        prevLine: u,
                        isValue: !0,
                        isOperation: !0,
                        tabs: m,
                        comments: T,
                        lastNodeLocation: N,
                        registry: O,
                        FiresSuper: L,
                        FiresAwait: b,
                        FiresYield: A
                      });
                      u.push(`${O.sources && O.sources.add(x.loc) || ""}${i} = ${r};`);
                    }
                    let h = [];

                    for (let r of _.contents) {
                      let l = (r.contents.length > 1 ? "(" : "") + r.contents.map(r => {
                        let [l, a] = r;
                        a && null === f && throwSyntaxError({
                          message: "Unexpected " + a.operand,
                          location: a.loc
                        });

                        let _ = new i.Compare("===").setLoc(this.loc),
                            h = a && a.operand || _.operand;

                        a = a || _, a = k ? a.inverse : a.operand;
                        let y = l.parse({
                          that: s,
                          $such: o,
                          scope: c,
                          vars: e,
                          varExistent: t,
                          constants: p,
                          prevLine: u,
                          isValue: !0,
                          isOperation: !0,
                          isCompare: !0,
                          tabs: m,
                          comments: T,
                          lastNodeLocation: N,
                          registry: O,
                          FiresSuper: L,
                          FiresAwait: b,
                          FiresYield: A
                        });
                        return y = "function" == typeof n ? `(${n()} ${a} ${y})` : "string" == typeof n ? `(${n} ${a} ${y})` : `(${y})`, !k || h && a !== h || (y = `!${y}`), y;
                      }).join(" && ") + (r.contents.length > 1 ? ")" : "");
                      h.push(l);
                    }

                    v += h.join(k ? " && " : " || ");
                  }

                case "Expression CHAIN Expression":
                case "Expression CHAIN Block":
                  {
                    let a = [];

                    if (x[1] instanceof i.Block) {
                      let n = l(c, !1, "ref"),
                          a = "",
                          _ = [];
                      c.push(n), e.push(n), a += `${n} = ${x[0].parse({
                        that: s,
                        $such: o,
                        scope: c,
                        vars: e,
                        varExistent: t,
                        constants: p,
                        prevLine: _,
                        isValue: !0,
                        isAssigned: !0,
                        tabs: m,
                        comments: T,
                        lastNodeLocation: N,
                        registry: O,
                        FiresSuper: L,
                        FiresAwait: b,
                        FiresYield: A
                      })};`, _.length && (a = _.join(`\n${r(m + 1)}`) + `\n${r(m + 1)}` + a);
                      let f = x[1].unwrap;
                      f.unwrap.unshift(new i.Line("SimpleCode", [a])), v += f.parse({
                        constants: p,
                        that: s,
                        $such: [n],
                        scope: c.concat(n),
                        isValue: !0,
                        prevLine: u,
                        tabs: m,
                        callSelf: !0,
                        vars: e,
                        varExistent: t,
                        comments: T,
                        lastNodeLocation: N,
                        registry: O
                      });
                    } else v += Object.assign(new i.Invocation(null, x[1], new n(null, new n(null, x[0]).setLoc(this.loc)).setLoc(this.loc)).setLoc(this.loc), {
                      soak: !!x[2]
                    }).parse({
                      that: s,
                      $such: o,
                      scope: c,
                      vars: e,
                      varExistent: t,
                      constants: p,
                      prevLine: u,
                      isValue: !0,
                      isOperation: !0,
                      tabs: m,
                      isCondition: d,
                      isCompare: !0,
                      comments: T,
                      lastNodeLocation: N,
                      registry: O,
                      FiresSuper: L,
                      FiresAwait: b,
                      FiresYield: A,
                      FiresSoaks: a
                    });

                    break;
                  }
              }

              return v;
            }
          }, {
            key: "canInverse",
            get: function () {
              switch (this.rule) {
                case "Expression Compare Expression":
                case "Multicondition":
                case "Expression Multicheck":
                  return !0;

                default:
                  return !1;
              }
            }
          }]);

          return _class25;
        }(n), i.ParamIdentifier = function (_n25) {
          _inherits(_class26, _n25);

          var _super28 = _createSuper(_class26);

          function _class26() {
            _classCallCheck(this, _class26);

            return _super28.apply(this, arguments);
          }

          return _createClass(_class26);
        }(n), i.ParamList = function (_n26) {
          _inherits(_class27, _n26);

          var _super29 = _createSuper(_class27);

          function _class27() {
            _classCallCheck(this, _class27);

            return _super29.apply(this, arguments);
          }

          _createClass(_class27, [{
            key: "addParam",
            value: function addParam(e) {
              return this.push(e), this.contents;
            }
          }, {
            key: "addParams",
            value: function addParams(e) {
              for (let t of e) this.push(t);

              return this.contents;
            }
          }]);

          return _class27;
        }(n), i.ParamObject = function (_n27) {
          _inherits(_class28, _n27);

          var _super30 = _createSuper(_class28);

          function _class28() {
            _classCallCheck(this, _class28);

            return _super30.apply(this, arguments);
          }

          _createClass(_class28, [{
            key: "defaults",
            value: function defaults(e) {
              return this[1].defaults = e, this;
            }
          }]);

          return _class28;
        }(n), i.ParamPropObj = function (_n28) {
          _inherits(_class29, _n28);

          var _super31 = _createSuper(_class29);

          function _class29() {
            _classCallCheck(this, _class29);

            return _super31.apply(this, arguments);
          }

          return _createClass(_class29);
        }(n), i.Regex = function (_n29) {
          _inherits(_class30, _n29);

          var _super32 = _createSuper(_class30);

          function _class30() {
            _classCallCheck(this, _class30);

            return _super32.apply(this, arguments);
          }

          _createClass(_class30, [{
            key: "parse",
            value: function parse(e) {
              switch (this.rule) {
                case "RegexWithInterpolations":
                  return this.parseWithInterpolations(e);

                case "REGEX":
                  return this[1].replace(/\n/g, "\\n");
              }
            }
          }, {
            key: "parseWithInterpolations",
            value: function parseWithInterpolations(e) {
              let t = "",
                  s = this.unwrap[2];

              for (const s of this.unwrap[1].contents) t += s.parse(e);

              return `new RegExp(\`${s ? t.slice(0, -1) : t}${s ? `\`, '${s}'` : "`"})`;
            }
          }]);

          return _class30;
        }(n), i.RegexInterpolation = function (_n30) {
          _inherits(_class31, _n30);

          var _super33 = _createSuper(_class31);

          function _class31() {
            _classCallCheck(this, _class31);

            return _super33.apply(this, arguments);
          }

          _createClass(_class31, [{
            key: "parse",
            value: function parse(e) {
              return "Regex" === this.rule ? this.unwrap.parse(e) : `\${${this.unwrap.parse(_objectSpread(_objectSpread({}, e), {}, {
                addSemicolon: [],
                isValue: !0
              }))}}`;
            }
          }]);

          return _class31;
        }(n), i.Root = function (_n31) {
          _inherits(_class32, _n31);

          var _super34 = _createSuper(_class32);

          function _class32() {
            _classCallCheck(this, _class32);

            return _super34.apply(this, arguments);
          }

          _createClass(_class32, [{
            key: "parse",
            value: function parse(e = {}) {
              let t = "";
              const s = this.unwrap;
              return e.registry && e.registry.isELSON && s.unwrap.length > 1 && (s[1] = [new i.Line("Expression", i.Array.from(s)).setLoc(s.loc)]), t += "EMPTY" !== s ? s.parse(_objectSpread(_objectSpread({}, e), {}, {
                tabs: e.wrapSafe ? 1 : 0,
                top: 1
              })) : "// You should write some code below!", e.wrapSafe && (t = `(function() {\n${t}\n})()`), t;
            }
          }]);

          return _class32;
        }(n), i.Statement = function (_n32) {
          _inherits(_class33, _n32);

          var _super35 = _createSuper(_class33);

          function _class33() {
            _classCallCheck(this, _class33);

            return _super35.apply(this, arguments);
          }

          _createClass(_class33, [{
            key: "parse",
            value: function parse({
              addSemicolon: e = [],
              construct: t,
              constants: s,
              vars: n,
              varExistent: l,
              that: a,
              $such: o,
              scope: c = [],
              isValue: p,
              isInvoked: _,
              isOperation: u,
              isLine: f,
              prevLine: h,
              tabs: m = 0,
              isCondition: y,
              isDirect: d,
              isClass: E,
              isCompare: g,
              isAssignment: $,
              ID: I,
              isParam: T,
              nl: N,
              func: O,
              scopedParams: k,
              comments: L = [],
              lastNodeLocation: b,
              registry: A = {},
              isParenthetical: S,
              FiresSuper: v,
              FiresAwait: x,
              FiresYield: w,
              afterParse: R = [],
              metaComments: D = []
            } = {}) {
              var P = this.unwrap;
              let C = "";

              switch (S && this.throwSyntaxError("Cannot use statements in this context."), A.sources && (C += A.sources.add(this.loc)), this.rule) {
                case "Type":
                  {
                    if (A.omitTypeScript) return "";
                    A.isTypeScript = !0;
                    let [e, t] = P[1].contents;
                    e = e.parse();
                    let s = `type ${e}`;
                    return s += ` = ${t.parse({
                      registry: A
                    })}`, C += s, R.push(C), "";
                  }

                case "Interface":
                  if (A.omitTypeScript) return "";
                  break;

                case "Return":
                  C += "return", "RETURN Expression" === P.rule ? C += " " + P.unwrap.parse({
                    addSemicolon: e,
                    that: a,
                    $such: o,
                    scope: c,
                    constants: s,
                    vars: n,
                    varExistent: l,
                    prevLine: h,
                    tabs: m,
                    isClass: E,
                    isLine: f,
                    func: O,
                    scopedParams: k,
                    nl: N,
                    comments: L,
                    lastNodeLocation: b,
                    registry: A,
                    FiresSuper: v,
                    FiresAwait: x,
                    FiresYield: w
                  }) : P.rule;
                  break;

                case "BREAK Identifier":
                case "CONTINUE Identifier":
                  C += this.rule.split(" ")[0].toLowerCase() + " " + P.parse({
                    registry: A
                  });
                  break;

                case "Import":
                  {
                    let [e, t, s, n] = this.unwrap.contents;
                    C += "import ", n && (C += `${n.parse({
                      registry: A
                    })}, `), s && (C += "* as "), e instanceof i.Identifier ? C += e.parse({
                      registry: A
                    }) : (C += `{\n${r(m + 1)}`, C += e[0].contents.map(([e, t, s], i, n) => {
                      let r = e.parse ? e.parse({
                        registry: A
                      }) : e;
                      return t && (r += " as " + t.parse({
                        registry: A
                      })), i !== n.length - 1 && (r += ", ", t && (r += "\n")), r;
                    }).join(""), C += `\n${r(m)}}`), C += " from " + t;
                    break;
                  }

                case "Export":
                  {
                    let {
                      list: e,
                      declarations: t,
                      defaults: p,
                      exportable: _
                    } = this.unwrap.unwrap;
                    t ? C += "export " + new i.Statement("Declare", t).setLoc(t.loc).parse(_objectSpread(_objectSpread({}, arguments[0]), {}, {
                      addSemicolon: []
                    })) : p ? C += "export default " + p.parse({
                      addSemicolon: [],
                      that: a,
                      $such: o,
                      scope: c,
                      constants: s,
                      vars: n,
                      varExistent: l,
                      prevLine: h,
                      tabs: m,
                      comments: L,
                      registry: A,
                      FiresSuper: v,
                      FiresAwait: x,
                      FiresYield: w,
                      ID: I,
                      isStatement: !0,
                      isValue: !0
                    }) : e ? C += `export {\n${r(m + 1)}${e.unwrap.contents.map(e => e[1] ? (e[0].parse ? e[0].parse({
                      registry: A
                    }) : e[0]) + " as " + e[1].parse({
                      registry: A
                    }) : e[2] ? e[0].parse({
                      registry: A
                    }) + " as default" : e[0].parse ? e[0].parse({
                      registry: A
                    }) : e[0]).join(",\n" + r(m + 1))}\n${r(m)}}` : _ && (C += "export " + _.parse({
                      addSemicolon: [],
                      that: a,
                      $such: o,
                      scope: c,
                      constants: s,
                      vars: n,
                      varExistent: l,
                      prevLine: h,
                      tabs: m,
                      comments: L,
                      registry: A,
                      FiresSuper: v,
                      FiresAwait: x,
                      FiresYield: w,
                      ID: I,
                      isStatement: !0,
                      isValue: !0,
                      isExport: !0
                    }));
                    break;
                  }

                case "Declare":
                  {
                    let [{
                      keyword: e,
                      statements: t,
                      indented: p
                    }, _] = this.unwrap.contents;
                    C += e[0].toLowerCase() + " ", p && m++;
                    let u = "",
                        f = !1;
                    t.contents.map((t, p, _) => {
                      let y = t,
                          d = p === _.length - 1;
                      if (/boolean|undefined/.test(typeof y)) y || (u += "\n" + r(m + 1), f = !0);else {
                        if (y instanceof i.Identifier) "CONST" === e[0] && this.throwSyntaxError("Missing initializer in constant declaration", y.loc), l.push(y.parse()), u += y.parse({
                          registry: A
                        });else {
                          let t = [];
                          u += new i.Assign("Assignment", y).parse({
                            constant: "CONST" === e[0],
                            addSemicolon: [],
                            that: a,
                            $such: o,
                            scope: c,
                            constants: s,
                            vars: n,
                            varExistent: l,
                            prevLine: h,
                            tabs: m + +f,
                            comments: L,
                            registry: A,
                            FiresSuper: v,
                            FiresAwait: x,
                            FiresYield: w,
                            ID: t,
                            isStatement: !0,
                            isValue: !0
                          });

                          for (let [e] of t) l.push(e.toString());
                        }
                        d || (u += ", ");
                      }
                    }), C += u;
                    break;
                  }

                case "THROW Expression":
                case "THROW INDENT Expression OUTDENT":
                  C += `throw ${this.unwrap.parse({
                    addSemicolon: e,
                    that: a,
                    $such: o,
                    scope: c,
                    constants: s,
                    vars: n,
                    varExistent: l,
                    prevLine: h,
                    tabs: m,
                    isClass: E,
                    isLine: f,
                    func: O,
                    scopedParams: k,
                    nl: N,
                    comments: L,
                    lastNodeLocation: b,
                    registry: A,
                    FiresSuper: v,
                    FiresAwait: x,
                    FiresYield: w
                  })}`;
                  break;

                default:
                  C += this.rule.toLowerCase();
              }

              return e.length && (C += ";"), C;
            }
          }]);

          return _class33;
        }(n), i.String = function (_n33) {
          _inherits(_class34, _n33);

          var _super36 = _createSuper(_class34);

          function _class34() {
            _classCallCheck(this, _class34);

            return _super36.apply(this, arguments);
          }

          _createClass(_class34, [{
            key: "parse",
            value: function parse(e) {
              switch (this.rule) {
                case "StringWithInterpolations":
                  return this.parseWithInterpolations(e);

                case "STRING":
                  return e.registry && e.registry.isELSON && (this[1] = this[1].replace(/^['`]/, '"').replace(/['`]$/, '"')), e.forceBacktick && (this[1] = this[1].replace(/^['"]/, "`").replace(/['"]$/, "`")), this[1].replace(/\n/g, "\\n");
              }
            }
          }, {
            key: "parseWithInterpolations",
            value: function parseWithInterpolations(e) {
              let t = "";

              for (const s of this.unwrap[1].contents) t += s.parse(_objectSpread(_objectSpread({}, e), {}, {
                lineReturns: !1
              }));

              return `\`${t}\``;
            }
          }]);

          return _class34;
        }(n), i.Switch = function (_n34) {
          _inherits(_class35, _n34);

          var _super37 = _createSuper(_class35);

          function _class35() {
            _classCallCheck(this, _class35);

            return _super37.apply(this, arguments);
          }

          _createClass(_class35, [{
            key: "parse",
            value: function parse({
              that: e,
              $such: t,
              assignRes: s,
              lineReturns: i,
              scope: n,
              vars: l,
              varExistent: o,
              constants: c,
              registry: p = {},
              FiresSuper: _,
              prevLine: u,
              tabs: f
            }) {
              let h,
                  m,
                  [y, d] = this.contents,
                  E = "";
              y && (h = a(n, "j"), l.push(h), n.push(h), u.push(`${p.sources ? p.sources.add(y.loc) : ""}${h} = ${y.parse({
                that: e,
                $such: t,
                scope: n,
                addSemicolon: [],
                vars: l,
                varExistent: o,
                constants: c,
                registry: p,
                FiresSuper: _,
                prevLine: u,
                isValue: !0,
                isAssigned: !0,
                isCondition: !0
              })};`), m = !0), E += "switch (true) {\n" + r(f);
              let g = 0;

              for (let [a, y, $] of d.contents) {
                let I;
                a.includes("Multicondition") && (y = y.unwrap.unwrap);
                let T = !!y && y.contents;
                "BREAK" !== a ? (I = T ? T.map(s => {
                  let i = "case ";
                  return i += (m ? "" : "!!") + (s.length > 1 ? "(" : "") + s.slice(+/Multicondition|POSTCASE/.test(a)).map(s => {
                    let [i, r] = s;
                    r && !m && this.throwSyntaxError("Unexpected " + r.operand, r.loc);
                    let a = [h];
                    return i = i.parse({
                      that: e,
                      $such: m ? a : t,
                      scope: n,
                      vars: l,
                      varExistent: o,
                      constants: c,
                      registry: p,
                      FiresSuper: _,
                      prevLine: u,
                      tabs: f,
                      isValue: !0,
                      isCondition: m,
                      addSemicolon: []
                    }), m ? a.active ? i : `${h} ${r ? r.operand : "==="} ${i}` : i;
                  }).join(`) && ${m ? "" : "!!"}(`) + (s.length > 1 ? ")" : ""), i + ":";
                }).join(`\n${r(f)}`) : "default:", E += I, E += ` {\n${r(f + 1)}` + $.parse({
                  that: e,
                  $such: m ? [h] : t,
                  assignRes: s,
                  lineReturns: i,
                  scope: n,
                  vars: l,
                  varExistent: o,
                  constants: c,
                  registry: p,
                  FiresSuper: _,
                  prevLine: u,
                  tabs: f + 1,
                  isChildren: !0
                }) + (null === $.rule ? `\n${r(f + 1)}break;` : "") + `\n${r(f)}}`, g !== d.contents.length - 1 && (E += `;\n${r(f)}`), g++) : (E += "break", g !== d.contents.length - 1 && (E += `;\n${r(f)}`), g++);
              }

              return E += `\n${r(f - 1)}}`, E;
            }
          }]);

          return _class35;
        }(n), i.Value = function (_n35) {
          _inherits(_class36, _n35);

          var _super38 = _createSuper(_class36);

          function _class36() {
            _classCallCheck(this, _class36);

            return _super38.apply(this, arguments);
          }

          _createClass(_class36, [{
            key: "parse",
            value: function parse({
              that: e,
              $such: t,
              scope: s,
              addSemicolon: n = [],
              vars: r,
              varExistent: l,
              constants: o,
              prevLine: c,
              isCondition: p,
              isValue: _,
              isLine: u,
              tabs: f = 0,
              lineReturns: h,
              wrap: m,
              isClass: y,
              isAssignment: d,
              ID: E,
              isParam: g,
              func: $,
              scopedParams: I,
              isCompare: T,
              isStatement: N,
              inverse: O,
              isDirect: k,
              isAssigned: L,
              comments: b = [],
              lastNodeLocation: A,
              registry: S = {},
              FiresSuper: v = [],
              FiresAwait: x = [],
              FiresYield: w = [],
              isObject: R,
              FiresSoak: D,
              isOperation: P,
              isInvoked: C,
              isNarrow: F,
              isObjProperty: M,
              metaComments: j = [],
              metaQueue: U
            } = {}) {
              var G = "";
              let {
                rule: B
              } = this,
                  H = this.unwrap;

              switch (B) {
                case "Assignable":
                  !_ || d || g || L || T || P || S.isELSON || "Object" !== H.rule || (m = !0), G += H.parse({
                    that: e,
                    $such: t,
                    scope: s,
                    addSemicolon: n,
                    vars: r,
                    varExistent: l,
                    constants: o,
                    lineReturns: h,
                    prevLine: c,
                    isCondition: p,
                    isValue: _,
                    tabs: f,
                    wrap: m,
                    isClass: y,
                    isLine: u,
                    isAssignment: d,
                    lineReturns: h,
                    ID: E,
                    func: $,
                    scopedParams: I,
                    comments: b,
                    lastNodeLocation: A,
                    registry: S,
                    isParam: g,
                    FiresSoak: D,
                    isOperation: P,
                    isInvoked: C,
                    isCondition: p,
                    isStatement: N,
                    isNarrow: F,
                    isObjProperty: M
                  });
                  break;

                case "Literal":
                  return H.parse({
                    that: e,
                    $such: t,
                    scope: s,
                    addSemicolon: n,
                    vars: r,
                    varExistent: l,
                    constants: o,
                    lineReturns: h,
                    prevLine: c,
                    isCondition: p,
                    isValue: _,
                    tabs: f,
                    wrap: m,
                    isClass: y,
                    isLine: u,
                    isAssignment: d,
                    lineReturns: h,
                    func: $,
                    scopedParams: I,
                    comments: b,
                    lastNodeLocation: A,
                    registry: S,
                    FiresSoak: D
                  });

                case "Module":
                  G += H.parse({
                    registry: S
                  });
                  break;

                case "Parenthetical":
                  m = !0, H = H.unwrap, H instanceof i.Expression ? (G += H.parse({
                    vars: r,
                    varExistent: l,
                    that: e,
                    $such: t,
                    scope: s,
                    constants: o,
                    prevLine: c,
                    isValue: _,
                    isCompare: T,
                    tabs: f,
                    isCondition: p,
                    inverse: O,
                    addSemicolon: [],
                    comments: b,
                    lastNodeLocation: A,
                    registry: S,
                    FiresSoak: D,
                    isInvoked: C
                  }), p && k ? m = !1 : _ = !0) : (G += H.parse({
                    vars: r,
                    varExistent: l,
                    that: e,
                    $such: t,
                    scope: s,
                    constants: o,
                    prevLine: c,
                    isValue: _,
                    isCompare: T,
                    tabs: f,
                    isCondition: p,
                    inverse: O,
                    addSemicolon: [],
                    comments: b,
                    lastNodeLocation: A,
                    registry: S,
                    isChildren: !0,
                    isParenthetical: !0,
                    FiresSoak: D,
                    isInvoked: C
                  }), p && k ? m = !1 : _ = !0);
                  break;

                case "Invocation":
                  G += H.parse({
                    that: e,
                    $such: t,
                    scope: s,
                    vars: r,
                    varExistent: l,
                    constants: o,
                    prevLine: c,
                    isValue: _,
                    tabs: f,
                    func: $,
                    scopedParams: I,
                    comments: b,
                    lastNodeLocation: A,
                    registry: S,
                    FiresSuper: v,
                    FiresSoak: D,
                    isInvoked: C,
                    isParam: g,
                    isObjProperty: M
                  });
                  break;

                case "Function":
                  n.pop(), C && (m = !0), G += H.parse({
                    that: e,
                    $such: t,
                    scope: s,
                    vars: r,
                    varExistent: l,
                    constants: o,
                    prevLine: c,
                    isValue: _,
                    tabs: f,
                    func: $,
                    scopedParams: I,
                    comments: b,
                    lastNodeLocation: A,
                    registry: S,
                    FiresSuper: v,
                    isInvoked: C,
                    isParam: g,
                    isClass: y,
                    isObject: R,
                    lineReturns: h,
                    isLine: u,
                    metaComments: j,
                    metaQueue: U
                  });
                  break;

                case "This":
                  return G = e && e[0] || "this", S.sources && (G = S.sources.add(H.loc) + G), G;

                case "SUCH":
                  return t && t.length ? (t.active = !0, (S.sources ? S.sources.add(this.loc, "such") : "") + t[0]) : $ && I && !I.generated && !I.length ? (t = [a(s, "p")], I.push(t[0]), (S.sources ? S.sources.add(this.loc, "such") : "") + t[0]) : $ && I && !I.generated && I.length ? (t = [I[0]], (S.sources ? S.sources.add(this.loc, "such") : "") + t[0]) : (S.sources ? S.sources.add(this.loc, "such") : "") + (e && e[0] || "this");

                case "New":
                  G += H[1].parse({
                    vars: r,
                    varExistent: l,
                    isValue: !0,
                    constants: o,
                    that: e,
                    $such: t,
                    scope: s,
                    prevLine: c,
                    tabs: f,
                    func: $,
                    scopedParams: I,
                    isInvoked: !0,
                    construct: !0,
                    comments: b,
                    lastNodeLocation: A,
                    registry: S
                  });
              }

              return _ && m && (G = "(" + G + ")"), G;
            }
          }]);

          return _class36;
        }(n), i.TypeObject = function (_n36) {
          _inherits(_class37, _n36);

          var _super39 = _createSuper(_class37);

          function _class37() {
            _classCallCheck(this, _class37);

            return _super39.apply(this, arguments);
          }

          _createClass(_class37, [{
            key: "parse",
            value: function parse({
              registry: e = {}
            } = {}) {
              let t = [],
                  s = this.contents;

              for (let i of s) {
                let [, s, n, r] = i,
                    l = [];
                r && l.push(1), n = n ? n.parse({
                  isOptional: l,
                  isChildren: !0,
                  registry: e
                }) : "any", t.push(`${e.sources ? e.sources.add(i.loc) : ""}${s}${l.length ? "?" : ""}: ${n}`);
              }

              return `{ ${t.join(", ")} }`;
            }
          }]);

          return _class37;
        }(n), i.TypeArray = function (_n37) {
          _inherits(_class38, _n37);

          var _super40 = _createSuper(_class38);

          function _class38() {
            _classCallCheck(this, _class38);

            return _super40.apply(this, arguments);
          }

          _createClass(_class38, [{
            key: "parse",
            value: function parse({
              registry: e = {}
            } = {}) {
              let t = [],
                  s = this.contents;

              for (let i of s) {
                let s = i.parse({
                  isChildren: !0,
                  registry: e
                });
                t.push((e.sources ? e.sources.add(i.loc) : "") + s);
              }

              return `[ ${t.join(", ")} ]`;
            }
          }]);

          return _class38;
        }(n), i.TypeSentence = function (_n38) {
          _inherits(_class39, _n38);

          var _super41 = _createSuper(_class39);

          function _class39() {
            _classCallCheck(this, _class39);

            return _super41.apply(this, arguments);
          }

          _createClass(_class39, [{
            key: "parse",
            value: function parse({
              isOptional: e = [],
              isChildren: t = !1,
              registry: s = {}
            } = {}) {
              let i = this.contents,
                  n = [];

              for (let r of i) if ("string" == typeof r) n.push(r);else {
                let i;
                "TAG" === r.rule ? (i = r[1].nodes.parse({
                  isOptional: e,
                  isChildren: t,
                  registry: s
                }), r[1].isArray && (i = `Array<${i}>`), r[1].optional && e.push(1)) : ("Regex" === r.unwrap.rule && this.throwSyntaxError("not a valid type", r.loc), i = r.unwrap.parse ? r.unwrap.parse({}) : r.parse({
                  registry: s,
                  isOptional: e,
                  isChildren: t
                })), n.push(i);
              }

              return !e.length || t || n.includes("undefined") || n.includes("any") || n.push("|", "undefined"), n.join(" ");
            }
          }]);

          return _class39;
        }(n), i.TypeWithArguments = function (_n39) {
          _inherits(_class40, _n39);

          var _super42 = _createSuper(_class40);

          function _class40() {
            _classCallCheck(this, _class40);

            return _super42.apply(this, arguments);
          }

          _createClass(_class40, [{
            key: "parse",
            value: function parse({
              isChildren: e,
              isOptional: t = [],
              registry: s
            }) {
              let {
                isArray: n,
                type: r,
                arguments: l
              } = this.unwrap;

              if (n) {
                let n = r instanceof i.TypeSentence ? `(${r.parse({
                  isChildren: e,
                  isOptional: t,
                  registry: s
                })})` : new i.TypeSentence(null, r).parse({
                  isChildren: e,
                  isOptional: t,
                  registry: s
                });
                return n += "[]";
              }

              return `${r.parse()}<${l.parse({
                isChildren: e,
                isOptional: t,
                registry: s
              })}>`;
            }
          }]);

          return _class40;
        }(n), i.TypeArguments = function (_n40) {
          _inherits(_class41, _n40);

          var _super43 = _createSuper(_class41);

          function _class41() {
            _classCallCheck(this, _class41);

            return _super43.apply(this, arguments);
          }

          _createClass(_class41, [{
            key: "parse",
            value: function parse({
              registry: e
            }) {
              let t = "";
              return t += this.contents.map(t => {
                if ("Identifier" === t.rule) return t.unwrap.parse({
                  registry: e
                });
              }).join(", "), t;
            }
          }]);

          return _class41;
        }(n);
        let u = [];

        for (let e in s(258)) i[e] || (i[e] = n, u.push(e));

        function f(e, t, s) {
          for (var i = 0, n = e.length; i < n; i++) {
            let n = e[i][1],
                l = [],
                a = 0;

            for (; n.charAt(a);) {
              let e,
                  t = /^((?:[^\x00-\x7F]|[a-z$_])(?:[^\x00-\x7F]|[a-z$_\d\.\["'`\]])*)\s*(:|-*>|=>?)/i.exec(n.slice(a));
              if (t) {
                if (a += t[0].length, "{" === n.charAt(a)) ;else {
                  let i = /\n(?!-)/.exec(n.slice(a));
                  e = n.slice(a, i ? a + i.index : n.length).trim(), e = e.split("\n").map(e => e.replace(/^-\s*/, "").trim()).join("\n" + r(s) + " * "), l.push({
                    name: t[1],
                    description: e
                  }), a += e.length;
                }
              } else a++;
            }

            for (let e = 0, s = l.length; e < s; e++) {
              let s = l[e],
                  i = t.find(e => e.ID === s.name);
              i && (i.description = s.description.replace(/^\s*# /, ""));
            }
          }

          if (1 === t.length && !t[0].description) {
            let s = t[0],
                i = e[e.length - 1];
            i && -1 !== i.loc.last_line && (s.description = i[1].replace(/^\s*# /, ""));
          }
        }

        function h({
          metaComments: e,
          ID: t,
          tabs: s,
          loc: i
        }) {
          let n;

          for (let i = 0, l = e.length; i < l; i++) {
            let l = e[i][1],
                a = [],
                o = 0;

            for (; l.charAt(o);) {
              let e,
                  t = /^((?:[^\x00-\x7F]|[a-z$_])(?:[^\x00-\x7F]|[a-z$_\d\.\["'`\]])*)\s*(:|-*>|=>?)/i.exec(l.slice(o));
              if (t) {
                if (o += t[0].length, "{" === l.charAt(o)) ;else {
                  let i = /\n(?!-)/.exec(l.slice(o));
                  e = l.slice(o, i ? o + i.index : l.length).trim(), e = e.split("\n").map(e => e.replace(/^-\s*/, "").trim()).join("\n" + r(s) + " * "), a.push({
                    name: t[1],
                    description: e
                  }), o += e.length;
                }
              } else o++;
            }

            for (let e = 0, s = a.length; e < s; e++) {
              let s = a[e];
              s.name === t && (n = s);
            }
          }

          if (!n) {
            let s = e[e.length - 1];
            s && -1 !== s.loc.last_line && (s.loc.last_line === i.last_line && s.loc.last_column < i.last_column || s.loc.last_line < i.last_line) && (n = {
              name: t,
              description: s[1].replace(/^\s*#\s*/, "")
            });
          }

          return n;
        }

        e.exports = {
          Parser: function () {
            function Parser(e, t = {}) {
              _classCallCheck(this, Parser);

              this.nodes = e, this.comments = t.isELSON || t.removeComments ? [] : t.comments, this.isELSON = t.isELSON, this.useVar = t.useVar, this.sourceMaps = t.sourceMaps, this.wrapSafe = t.wrapSafe, this.tsCheck = t.tsCheck, this.omitTypeScript = t.omitTypeScript;
            }

            _createClass(Parser, [{
              key: "parse",
              value: function parse({
                scope: e
              }) {
                let t, i, n;
                return t = new (s(421).Sources)(), n = {
                  sources: this.sourceMaps ? t : void 0,
                  scope: ["Root"],
                  useVar: this.useVar,
                  isELSON: this.isELSON,
                  omitTypeScript: this.omitTypeScript
                }, i = this.nodes.parse({
                  comments: this.comments,
                  registry: n,
                  wrapSafe: this.wrapSafe,
                  scope: e,
                  tsCheck: this.tsCheck
                }), {
                  js: i,
                  sources: t,
                  isTypeScript: n.isTypeScript
                };
              }
            }]);

            return Parser;
          }(),
          Nodes: i
        };
      },
      421: e => {
        let t, s, i, n;
        t = 5, s = 32, i = 31, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e.exports = {
          SourceMap: function () {
            function SourceMap(e) {
              _classCallCheck(this, SourceMap);

              this.lines = {}, this.names = [], this.sources = [], this.include(e);
            }

            _createClass(SourceMap, [{
              key: "include",
              value: function include(e) {
                let t = this.lines;

                for (let s of e) t[s.line] || (t[s.line] = {}), t[s.line][s.column] = s, this.sources.includes(s.source) || this.sources.push(s.source), s.sourceName && !this.names.includes(s.sourceName) && this.names.push(s.sourceName);
              }
            }, {
              key: "generate",
              value: function generate(e, t = null) {
                let s = "",
                    i = 0,
                    n = 0,
                    r = 0,
                    l = 0,
                    a = !1,
                    o = this.lines;

                for (let e in o) {
                  let t = o[e];

                  for (let e in t) {
                    let o = t[e];

                    for (; i < o.line;) n = 0, a = !1, s += ";", i++;

                    a && (s += ",", a = !1), s += this.encodeVlq(o.column - n), n = o.column, s += this.encodeVlq(this.sources.indexOf(o.source)), s += this.encodeVlq(o.sourceLine - r), r = o.sourceLine, s += this.encodeVlq(o.sourceColumn - l), l = o.sourceColumn, o.sourceName && (s += this.encodeVlq(this.names.indexOf(o.sourceName))), a = !0;
                  }
                }

                let c = this.sources;
                const p = {
                  version: 3,
                  file: e.generatedFile || "",
                  sourceRoot: e.sourceRoot || "",
                  sources: c,
                  names: this.names || e.names || [],
                  mappings: s
                };
                return e.inlineMap && (p.sourcesContent = [t]), p;
              }
            }, {
              key: "encodeVlq",
              value: function encodeVlq(e) {
                var t, s, i, n;

                for (t = "", i = e < 0 ? 1 : 0, n = (Math.abs(e) << 1) + i; n || !t;) s = 31 & n, (n >>= 5) && (s |= 32), t += this.encodeBase64(s);

                return t;
              }
            }, {
              key: "encodeBase64",
              value: function encodeBase64(e) {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e] || function () {
                  throw new Error(`Cannot Base64 encode value: ${e}`);
                }();
              }
            }]);

            return SourceMap;
          }(),
          Sources: function (_Array2) {
            _inherits(Sources, _Array2);

            var _super44 = _createSuper(Sources);

            function Sources() {
              var _this3;

              _classCallCheck(this, Sources);

              _this3 = _super44.call(this), _this3.names = [];
              return _this3;
            }

            _createClass(Sources, [{
              key: "add",
              value: function add({
                first_line: e,
                first_column: t,
                last_line: s,
                last_column: i,
                src: n
              } = {}, r) {
                let l = ([1e7] + -1e3).replace(/[018]/g, function (e) {
                  return (e ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16);
                });
                return l = `/*@${l}*/`, this.push([l, {
                  first_line: e,
                  first_column: t,
                  source: n,
                  sourceName: r,
                  last_line: s,
                  last_column: i
                }]), l;
              }
            }]);

            return Sources;
          }(_wrapNativeSuper(Array))
        };
      }
    },
        t = {};
    !function s(i) {
      var n = t[i];
      if (void 0 !== n) return n.exports;
      var r = t[i] = {
        exports: {}
      };
      return e[i].call(r.exports, r, r.exports, s), r.exports;
    }(138);
  })();
})();