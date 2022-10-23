const grammar = {};
let wrapped = {};

let u = function (group, rules) {
    grammar[group] = [];
    for (let [rule, ...actions] of rules) {
        let options;
        grammar[group].push([
            rule,
            "$$ = " + (function () {
                let _len = rule.split(" ").length,
                    actionDefault = _len > 0 ? `new yy["${group}"]("${rule}", ...[$1]).setLocation({ first_line: @1.first_line, first_column: @1.first_column, last_line: @${_len}.last_line, last_column: @${_len}.last_column, src: @1.src, type: @1.type }).setTokens(${Array.from({ length: _len }).map((_, ind) => {
                        return `["${rule.split(" ")[ind]}", @${ind}]`
                    }).join(', ')})` : `undefined`;

                if (!actions.length) {
                    return actions = [actionDefault];
                }

                if (typeof actions[actions.length - 1] == "object") {
                    options = actions.pop();
                } else {
                    options = {}
                }

                options = Object.assign({
                    first: 1,
                    last: _len,
                    typeOf: 1,
                    checkGenerated: false
                }, options);

                let action = actions.pop();

                if (!action) { action = actionDefault; }

                actions.push(
                    typeof action === "function" ?
                        action.toString().replace(/new /g, 'new yy.').replace(/Block\.wrap\(/g, 'yy.Block.wrap(').replace(/function\s*\(\)\s*\{\s*(?:return)?(.*)\s*\}|\(\)\s*=>\s*\{?\s*(?:return)?(.*)\s*\}?/i, "$1").trim()
                        :
                        `Object.assign(new yy["${group}"]("${rule}", ...[${action}]), { rule: "${rule}", loc: { first_line: @${options.first}.first_line, first_column: @${options.first}.first_column, last_line: @${options.last}.last_line, last_column: @${options.last}.last_column, src: @${options.first}.src${(options.typeOf === undefined || options.typeOf !== 0) ? `, type: @${options.typeOf || '1'}.type`:''} } }, ${options ? JSON.stringify(Object.assign(options)) : "{}"}, { generated: ${options.checkGenerated ? `@${options.checkGenerated}.generated` : `undefined`}${options.indentOf !== undefined ? `, indented: @${options.indentOf}.indented` : ``} }).setTokens(${Array.from({ length: _len }).map((_, ind) => {
                            return `["${rule.split(" ")[ind]}", @${ind + 1}]`
                        }).join(', ')})`
                );
                return actions
            })().join(' && '),
            options || {}
        ]);
    }
}

u(`Root`, [
    [``, `'EMPTY'`],
    [`Body`]
]);

u(`Body`, [
    [`Body NEWLINE Line`, `$1.push($3)`],
    [`Body NEWLINE`],
    [`Line`, `[$1]`]
]);

// Overriding automatic function because I`m silly
grammar[`Body`][0][1] = `($1[1] = [...$1[1], Object.assign($3, { lineCount: $2 })]) && Object.assign($1, { loc: { first_line: @1.first_line, last_line: @3.last_line, first_column: @1.first_column, last_column: @3.last_column } })`;
grammar[`Body`][1][1] = `$$ = Object.assign($1[1][$1[1].length - 1], { lineCount: $2 }) && Object.assign($1, { loc: { first_line: @1.first_line, last_line: @2.last_line, first_column: @1.first_column, last_column: @2.last_column } })`;

u(`Line`, [
    [`Expression`],
    [`Statement`]
]);

u(`Expression`, [
    [`Value`],
    [`Operation`],
    [`While`],
    [`For`],
    [`Switch`],
    [`TryBlock`],
    [`Assign`],
    [`If`],
    [`Class`],
    [`Label`],
    [`Code`]
]);

u(`Label`, [
    [`Identifier :: Expression`, `$1, yy.Block.wrap($3)`],
    [`Identifier :: Statement`, `$1, yy.Block.wrap($3)`],
    [`Identifier :: Block`, `$1, $3`]
])

u(`Code`, [
    [`FUNC_DIRECTIVE Expression`, `null, $1, $2`],
    [`WITHIN PARAM_START ParamList PARAM_END Block`, `$3, '=>', $5`],
    [`PARAM_START ParamList PARAM_END FUNC_DIRECTIVE Block`, `$2, $4, $5`],
    [`PARAM_START PARAM_END FUNC_DIRECTIVE Block`, `null, $3, $4`],
    [`PARAM_START ParamList PARAM_END FUNC_DIRECTIVE Expression`, `$2, $4, $5`],
    [`PARAM_START PARAM_END FUNC_DIRECTIVE Expression`, `null, $3, $4`],
    [`WITHIN PARAM_START ParamList PARAM_END THEN Block`, `$3, '=>', $5`],
    [`WITHIN PARAM_START ParamList PARAM_END Expression`, `$3, '=>', $5`],
    [`WITHIN PARAM_START ParamList PARAM_END THEN Expression`, `$3, '=>', $6`],
    [`WITHIN PARAM_START PARAM_END Block`, `null, '=>', $4`],
    [`WITHIN PARAM_START PARAM_END THEN Block`, `null, '=>', $5`],
    [`WITHIN PARAM_START PARAM_END Expression`, `null, '=>', $4`],
    [`WITHIN PARAM_START PARAM_END THEN Expression`, `null, '=>', $5`],
    [`WITHIN Block`, `null, '=>', $2`],
    [`ASYNC Code`, `...$2.contents`, { async: true }]
]);

u(`Operation`, [
    [`MathPrefix Expression`, `$1, $2`],
    [`Expression MathPostfix`, `$1, $2`],
    [`Expression Operator Expression`, `$1, $2, $3`],
    [`@ Value`, `$2`],
    [`DO Expression`, `$2`],
    [`WHETHER Expression`, `$2`],
    [`TYPEOF Expression`, `$2`],
    [`AWAIT Expression`, `$2`],
    [`AWAIT INDENT Expression OUTDENT`, `$3`],
    [`YIELD Expression`, `$2`],
    [`YIELD INDENT Expression OUTDENT`, `$3`],
    [`Expression EXISTS`, `$1`],
    [`Expression SYMBOL_EXISTS`, `$1`],
    [`Expression Compare Expression`, `$1, $2, $3`],
    [`Expression Logical Expression`, `$1, $2, $3`],
    [`Expression INCLUDES Expression`, `$1, $3`],
    [`Expression MATH_BIN Expression`, `$1, $2, $3`],
    [`Expression Multicheck`, `$1, $2.contents`],
    [`Multicondition`, `null, $1.contents`],
    [`Expression CHAIN Expression`, `$1, $3, /then\\?|\\?>/.test($2.origin || '')`],
    [`Expression CHAIN Block`, `$1, $3, /then\\?|\\?>/.test($2.origin || '')`]
]);

u(`Multicheck`, [
    [`MulticheckCombinations MulticheckClauses`, `$1.rule, $2`]
])

u(`Multicondition`, [
    [`EITHER MulticheckClauses`, `$1, $2`]
])

u(`MulticheckCombinations`, [
    [`IS EITHER`],
    [`ISNT EITHER`]
]);

u(`MulticheckClauses`, [
    [`MulticheckClauses EITHER_OR Clause`, `...$1.contents, $3`],
    [`Clause`, `$1`]
]);

u(`Clause`, [
    [`Clause COMPOUND_AND Compare Expression`, `...$1.contents, [$4, $3]`],
    [`Expression`, `[$1]`],
    [`Compare Expression`, `[$2, $1]`]
]);

u(`MathPrefix`, [
    [`++`],
    [`--`],
    [`+`],
    [`-`],
    [`~`],
    [`~~`],
    [`NOT`],
    [`!`]
]);

u(`MathPostfix`, [
    [`++`],
    [`--`]
]);

u(`Operator`, [
    [`*`],
    [`**`],
    [`+`],
    [`PLUS`],
    [`-`],
    [`DIVISION`],
    [`%`],
    [`<<`],
    [`>>`],
    [`>>>`],
    [`^`]
])

u(`Compare`, [
    [`IS`],
    [`===`],
    [`ISNT`],
    [`!==`],
    [`==`],
    [`!=`],
    [`>=`],
    [`<=`],
    [`>`],
    [`<`],
    [`INSTANCEOF`]
]);

u(`Logical`, [
    [`AND`],
    [`OR`],
    [`||`],
    [`&&`],
    [`|`],
    [`&`],
    [`??`]
])

u(`Invocation`, [
    [`Value Arguments`, `$1, $2`],
    [`SUPER Arguments`, `$1, $2`],
    [`Value FUNC_EXISTS Arguments`, `$1, $3`, { soak: true }],
    [`SUPER FUNC_EXISTS Arguments`, `$1, $3`, { soak: true }],
    [`@ SUPER`, `$2, new yy.Arguments(null)`],
    [`Value String`, `$1, $2`, { templ: true }],
    [`Value FUNC_EXISTS String`, `$1, $3`, { templ: true, soak: true }],
]);

u(`Arguments`, [
    [`CALL_START CALL_END`, `/* */`],
    [`CALL_START ArgList OptComma CALL_END`, `$2`],
    [`CALL_START INDENT ArgList OptComma OUTDENT CALL_END`, `$3`, { indented: true }]
]);

u(`ArgList`, [
    [`Arg`],
    [`ArgList , Arg`, `...$1.contents, $3`],
    [`ArgList OptComma NEWLINE Arg`, `...$1.contents, @3.generated, $4`],
    [`ArgList OptComma INDENT ArgList OptComma OUTDENT`, `...$1.contents, false, ...$4.contents`]
]);

u(`Arg`, [
    [`Expression`],
    [`... Expression`, `$2`, { expansion: true }],
    [`Expression ...`, `$1`, { expansion: true }]
]);

u(`OptComma`, [
    [``],
    [`,`]
]);

u(`Class`, [
    [`CLASS Identifier ClassConstructor?`, `$2, false, false, @1.origin === "class*", $3.unwrap`, { last: 2 }],
    [`CLASS Identifier ClassConstructor? Block`, `$2, false, $4[1], @1.origin === "class*", $3.unwrap`],
    [`CLASS Identifier ClassConstructor? THEN Block`, `$2, false, $5[1], @1.origin === "class*", $3.unwrap`],
    [`CLASS ClassConstructor? Block`, `undefined, false, $3[1], @1.origin === "class*", $2.unwrap`],
    [`CLASS ClassConstructor? THEN Block`, `undefined, false, $4[1], @1.origin === "class*", $2.unwrap`],
    [`CLASS Identifier ClassConstructor? EXTENDS Value Block`, `$2, $5, $6[1], @1.origin === "class*", $3.unwrap`],
    [`CLASS Identifier ClassConstructor? EXTENDS Value THEN Block`, `$2, $5, $7[1], @1.origin === "class*", $3.unwrap`],
    [`CLASS ClassConstructor? EXTENDS Value Block`, `undefined, $4, $5[1], @1.origin === "class*", $2.unwrap`],
    [`CLASS Identifier ClassConstructor? EXTENDS Value`, `$2, $5, false, @1.origin === "class*", $3.unwrap`],
    [`CLASS ClassConstructor? EXTENDS Value`, `undefined, $4,false, @1.origin === "class*", $2.unwrap`],
    [`CLASS ClassConstructor? EXTENDS Value THEN Block`, `undefined, $4, $6[1], @1.origin === "class*", $2.unwrap`]
]);

u(`ClassConstructor?`, [
    ['', 'undefined'],
    ['WITH Params', '$2'],
    ['Params', '$1']
]);

u(`Block`, [
    [`{{ }}`, `yy.Block.wrap()`],
    [`INDENT OUTDENT`, `yy.Block.wrap()`],
    [`{{ INDENT OUTDENT }}`, `yy.Block.wrap()`],
    [`INDENT Body OUTDENT`, `$2`],
    [`{{ INDENT Body OUTDENT }}`, `$3`],
    [`{ Body }`, `$2`]
]);

u(`ForExpression`, [
    [`JointExpression`],
    [`Declare`]
]);

u(`JointExpression`, [
    [`Expression`],
    [`JointExpression , Expression`, `...$1.contents, $3`]
]);

u(`For`, [
    [`FOR ForExpression ; Expression ; Expression Block`, `[$2, $4, $6], $7`],
    [`FOR ForExpression ; Expression ; Expression THEN Block`, `[$2, $4, $6], $8`],
    [`FOR ForExpression ; Expression ; Expression THEN Expression`, `[$2, $4, $6], yy.Block.wrap($8)`],

    [`FOR ForExpression WHEN Expression WHILST Expression Block`, `[$2, $4, $6], $7`],
    [`FOR ForExpression WHEN Expression WHILST Expression THEN Block`, `[$2, $4, $6], $8`],
    [`FOR ForExpression WHEN Expression WHILST Expression THEN Expression`, `[$2, $4, $6], yy.Block.wrap($8)`],

    [`FOR ForAssignable FOR_OF Expression Block`, `[$2[1], $3, $4], $5, $2[2]`],
    [`FOR ForAssignable FOR_IN Expression Block`, `[$2[1], $3, $4], $5, $2[2]`],

    [`FOR ForAssignable FOR_OF Expression THEN Block`, `[$2[1], $3, $4], $6, $2[2]`],
    [`FOR ForAssignable FOR_IN Expression THEN Block`, `[$2[1], $3, $4], $6, $2[2]`],

    [`FOR ForAssignable FOR_OF Expression THEN Expression`, `[$2[1], $3, $4], yy.Block.wrap($6), $2[2]`],
    [`FOR ForAssignable FOR_IN Expression THEN Expression`, `[$2[1], $3, $4], yy.Block.wrap($6), $2[2]`],

    [`FOR Identifier , Assignable ForAny Expression THEN Expression`, `[[$2, $4], $5, $6], yy.Block.wrap($8)`],
    [`FOR Identifier , Assignable ForAny Expression THEN Block`, `[[$2, $4], $5, $6], $8`],
    [`FOR Identifier , Assignable ForAny Expression Block`, `[[$2, $4], $5, $6], $7`],

    [`FOR DeclarationKeyword Identifier , Assignable ForAny Expression THEN Expression`, `[[$3, $5], $6, $7], yy.Block.wrap($9), $2`],
    [`FOR DeclarationKeyword Identifier , Assignable ForAny Expression THEN Block`, `[[$3, $5], $6, $7], $8, $2`],
    [`FOR DeclarationKeyword Identifier , Assignable ForAny Expression Block`, `[[$3, $5], $6, $7], $8, $2`],

    [`Expression POSTFOR DeclarationKeyword Identifier , Assignable ForAny Expression`, `[[$4, $6], $7, $8], yy.Block.wrap($1), $3`],
    [`Expression POSTFOR ForAssignable FOR_OF Expression`, `[$3[1], $4, $5], yy.Block.wrap($1), $3[2]`],
    [`Expression POSTFOR ForAssignable FOR_IN Expression`, `[$3[1], $4, $5], yy.Block.wrap($1), $3[2]`],
    [`Expression POSTFOR Identifier , Assignable ForAny Expression`, `[[$3, $5], $6, $7], yy.Block.wrap($1)`]
]);

u(`ForAssignable`, [
    [`DeclarationKeyword Assignable`, `$2, $1`],
    [`Assignable`, `$1`]
]);

u(`Switch`, [
    [`SWITCH Expression INDENT Cases OUTDENT`, `$2, $4`],
    [`SWITCH INDENT Cases OUTDENT`, `false, $3`],
    [`SWITCH Expression {{ INDENT Cases OUTDENT }}`, `$2, $5`],
    [`SWITCH {{ INDENT Cases OUTDENT }}`, `false, $4`]
]);

u(`Cases`, [
    [`Case`],
    [`Cases NEWLINE Case`, `...$1.contents, $3`]
]);

u(`Case`, [
    [`Clauses THEN Expression`, `$1, yy.Block.wrap($3)`],
    [`Clauses THEN Block`, `$1, $3.unwrap`],
    [`Clauses Block`, `$1, $2.unwrap`],
    [`Multicondition THEN Expression`, `$1, yy.Block.wrap($3)`],
    [`Multicondition THEN Block`, `$1, $3.unwrap`],
    [`Multicondition Block`, `$1, $2.unwrap`],
    [`DEFAULT Expression`, `false, yy.Block.wrap($2)`],
    [`DEFAULT Block`, `false, $2.unwrap`],
    [`Expression POSTCASE MulticheckClauses`, `$3, yy.Block.wrap($1)`],
    [`BREAK`]
]);

u(`Clauses`, [
    [`When`, `$1.contents`],
    [`Clauses NEWLINE When`, `...$1.contents, $3.contents`],
    [`Clauses COMPOUND_OR When`, `...$1.contents, $3.contents`]
])

u(`When`, [
    [`CASE Clause`, `...$2.contents`],
    [`IF Clause`, `...$2.contents`],
    [`WHEN Clause`, `...$2.contents`]
]);

grammar.ForAny = [
    [`FOR_FROM`, `$$ = $1`],
    [`FOR_AT`, `$$ = $1`],
    [`FOR_AS`, `$$ = $1`]
]

u(`If`, [
    [`IfBlock`],
    [`IfBlock Else`, `$1, $2`],
    [`Expression ? BlockExpression : BlockExpression`, `new yy.IfBlock('IfBlock', $1, $3.unwrap), new yy.Else('Else', $5.unwrap)`, { quoteSyntax: true }],
    [`Expression ? BlockExpression`, `new yy.IfBlock('IfBlock', $1, $3.unwrap)`, { quoteSyntax: true }],
    [`Expression ? INDENT BlockExpression : BlockExpression OUTDENT`, `new yy.IfBlock('IfBlock', $1, $4.unwrap), new yy.Else('Else', $6.unwrap)`, { quoteSyntax: true }],
    [`Expression POSTIF Expression`, `$3, $1`, { postfix: true }],
    [`Statement POSTIF Expression`, `$3, $1`, { postfix: true, statement: true }],
    [`Expression POSTUNLESS Expression`, `$3, $1`, { postfix: true, unless: true }],
    [`Statement POSTUNLESS Expression`, `$3, $1`, { postfix: true, statement: true, unless: true }]
]);

u(`BlockExpression`, [
    [`Expression`],
    [`INDENT Expression OUTDENT`, `$2`]
]);

u(`TryBlock`, [
    [`Try`, `$1, null, null`],
    [`Try Catch`, `$1, $2, null`],
    [`Try Catch Finally`, `$1, $2, $3`]
])

u(`Try`, [
    [`TRY Expression`, `yy.Block.wrap($2)`],
    [`TRY Block`, `$2`]
]);

u(`Finally`, [
    [`FINALLY Block`, `$2`],
    [`FINALLY Expression`, `yy.Block.wrap($2)`]
]);

u(`Catch`, [
    [`CATCH Block`, `null, $2`],
    [`CATCH Expression`, `null, yy.Block.wrap($2)`],
    [`CATCH Identifier Block`, `$2, $3`],
    [`CATCH Identifier THEN Block`, `$2, $4`],
    [`CATCH Identifier THEN Expression`, `$2, yy.Block.wrap($4)`]
])

u(`While`, [
    [`WhileUntil Expression THEN Block`, `$2, $4.unwrap, $1`],
    [`WhileUntil Expression THEN Expression`, `$2, yy.Block.wrap($4), $1`],
    [`WhileUntil ( Expression ) Expression`, `$3, yy.Block.wrap($5), $1`],
    [`WhileUntil Expression Block`, `$2, $3.unwrap, $1`],
    [`Loop WhileUntil Expression`, `$3, $1.unwrap, $2`],
    [`Loop NEWLINE WhileUntil Expression`, `$4, $1.unwrap, $3`],
    [`Expression WhileUntil Expression`, `$3, yy.Block.wrap($1), $2`]
]);

u(`WhileUntil`, [
    [`WHILE`],
    [`UNTIL`],
    ['POSTWHILE'],
    ['POSTUNTIL']
])

u(`Loop`, [
    [`LOOP Block`, `$2.unwrap`],
    [`LOOP Expression`, `yy.Block.wrap($2).unwrap`]
]);

u(`Else`, [
    [`ElseOtherwise Block`, `$2`],
    [`ElseOtherwise Expression`, `$2`],
    [`ElseOtherwise Statement`, `$2`],
    [`ElseOtherwise THEN Block`, `$3`]
]);

u(`IfBlock`, [

    [`IfUnless Expression Block`, `$2, $3, $1`],

    [`IfUnless Expression THEN Block`, `$2, $4, $1`],

    [`IfUnless Expression THEN Expression`, `$2, $4, $1`],

    [`IfUnless ( Expression ) Expression`, `$3, $5, $1`],

    [`IfUnless Expression THEN Statement`, `$2, $4, $1`],

    [`IfUnless Expression { Expression }`, `$2, $4, $1`],

    [`IfUnless Expression THEN { Expression }`, `$2, $5, $1`],

    [`IfUnless Expression THEN { Statement }`, `$2, $5, $1`]
]);

u(`IfUnless`, [
    [`IF`],
    [`UNLESS`]
]);

u(`ElseOtherwise`, [
    [`ELSE`],
    [`OTHERWISE`],
    [`OR`]
]);

u(`Value`, [
    [`Assignable`],
    [`Parenthetical`],
    [`Literal`],
    [`Invocation`],
    [`Function`],
    [`New`],
    [`This`],
    [`Super`],
    [`SUCH`]
]);

u(`New`, [
    [`NEW Expression`, `$2`]
]);

u(`Super`, [
    [`SUPER . PROPERTY`, `Object.assign([$3], { loc: @3 })`],
    [`SUPER INDEX_START PROPERTY INDEX_END`, `$3`]
]);

u(`This`, [
    [`THIS`]
]);

u(`Parenthetical`, [
    [`( Expression )`, `$2`],
    [`( Body )`, `$2`],
    [`( INDENT Body OUTDENT )`, `$3`]
]);

u(`ParamObject`, [
    [`{ ParamPropList }`, `$2`, { typeOf: 3 }],
    ['{ }', '[]', { typeOf: 0 }]
])

u(`Object`, [
    [`{ }`, `[]`],
    [`{ PropList OptComma }`, `$2`, { indentOf: 1 }],
    [`{ INDENT PropList OUTDENT }`, `$3`, { indented: true }]
]);

grammar.PropList = [
    [`PropObj`, `$$ = [$1]`],
    [`PropList , PropObj`, `$$ = $1.push($3) && $1`],
    [`PropList OptComma NEWLINE PropObj`, `$$ = $1.push(@3.generated, $4) && $1`],
    [`PropList OptComma INDENT PropList OUTDENT`, `$$ = $1.concat(false, ...[$4])`]
];

grammar.ParamPropList = [
    [``, `$$ = []`],
    [`ParamPropObj`, `$$ = [$1]`],
    [`ParamPropList , ParamPropObj`, `$$ = $1.push($3) && $1`],
    [`ParamPropList OptComma NEWLINE ParamPropObj`, `$$ = $1.push($4) && $1`],
    [`ParamPropList OptComma INDENT ParamPropObj OUTDENT`, `$$ = $1.push($4) && $1`]
]

grammar.PropObj = [
    [`Function`, `$$ = $1`],
    [`PROPERTY : Expression`, `$$ = [$1, $3, [@1, @3]]`],
    [`PROPERTY : Block`, `$$ = [$1, yy.Array.from($3), [@1, @3, true]]`],
    [`PROPERTY : INDENT Expression OUTDENT`, `$$ = [$1, $4, [@1, @5, true]]`],
    [`AlphaNum : Expression`, `$$ = [$1, $3, [@1, @3]]`],
    [`AlphaNum : Block`, `$$ = [$1, yy.Array.from($3), [@1, @3, true]]`],
    [`AlphaNum : INDENT Expression OUTDENT`, `$$ = [$1, $4, [@1, @5, true]]`],
    [`[ Expression ] : Expression`, `$$ = [$2, $5, [@1, @5]]`],
    [`[ Expression ] : INDENT Expression OUTDENT`, `$$ = [$2, $6, [@1, @6, true]]`],
    [`[ Expression ] : Block`, `$$ = [$2, yy.Array.from($5), [@1, @5, true]]`],
    [`PROPERTY :`, `$$ = [$1, false, [@1, @2]]`],
    [`... PROPERTY :`, `$$ = [$2, false, [@1, @3], true]`],
    [`PROPERTY : ...`, `$$ = [$1, false, [@1, @3], true]`],
    [`Identifier`, `$$ = [$1[1], false, [@1, @1]]`],
    [`Assignment`, `$$ = $1`],
    [`... Value`, `$$ = $2`],
    [`Value ...`, `$$ = $1`]
];

grammar.ParamPropObj = [
    [`PROPERTY : ParamAssignable`, `$$ = [$1, $3]`],
    [`PROPERTY :`, `$$ = [$1]`],
    [`PROPERTY : DEFAULTS Expression`, `$$ = [$1,,$4]`],
    [`ParamIdentifier`, `$$ = $1`],
    [`ParamIdentifier DEFAULTS Expression`, `$$ = [$1,,$3]`],
    [`... PROPERTY :`, `$$ = [$2,,,true]`],
    [`PROPERTY : ...`, `$$ = [$1,,,true]`]
]

u(`Literal`, [
    [`AlphaNum`],
    [`Regex`],
    [`UNDEFINED`],
    [`INFINITY`],
    [`BOOL`],
    [`NULL`],
    [`NAN`]
]);

u(`AlphaNum`, [
    [`String`],
    [`NUMBER`]
]);

u(`String`, [
    [`STRING`],
    [`StringWithInterpolations`]
]);

u(`StringWithInterpolations`, [
    [`STRING_START Interpolations STRING_END`, `$2, $1`]
]);

u(`Interpolations`, [
    [`Interpolation`, `$1`],
    [`Interpolations Interpolation`, `...$1.contents, $2`]
])

u(`Interpolation`, [
    [`INTERPOLATION_START Expression INTERPOLATION_END`, `$2`],
    [`String`]
]);

u(`Regex`, [
    [`REGEX`],
    [`RegexWithInterpolations`]
]);

u(`RegexWithInterpolations`, [
    [`REGEX_START RegexInterpolations REGEX_END`, `$2, $3`]
]);

u(`RegexInterpolations`, [
    [`RegexInterpolation`, `$1`],
    [`RegexInterpolations RegexInterpolation`, `...$1.contents, $2`]
])

u(`RegexInterpolation`, [
    [`INTERPOLATION_START Expression INTERPOLATION_END`, `$2`],
    [`Regex`]
]);

u(`Function`, [
    [`FuncHeader`, `$1.contents, yy.Block.wrap(), { arguments: $1[3] }`],
    [`FuncHeader FuncBody`, `$1.contents, $2.unwrap, { arguments: $1[3], returns: [@1.type, @2.type].filter(Boolean) }`],
    [`FuncSpecifiers FuncHeader FuncBody`, `$2.contents, $3.unwrap, { ...$1.unwrap, arguments: $2[3], returns: [@2.type, @3.type].filter(Boolean) }`],
    [`FUNCTION FuncHeader FuncBody`, `$2.contents, $3.unwrap, { yields: @1.origin === 'function*', arguments: $2[3], returns: [@2.type, @3.type].filter(Boolean) }`],
    [`ASYNC FUNCTION FuncHeader FuncBody`, `$3.contents, $4.unwrap, { async: true, yields: @2.origin === 'function*', arguments: $3[3], returns: [@3.type, @4.type].filter(Boolean) }`],
    [`FUNCTION WITH FuncBody`, `[], $3.unwrap, { yields: @1.origin === 'function*', returns: [@3.type].filter(Boolean) }`],
    [`FUNCTION WITH <( TypeArguments )> FuncBody`, `[], $6.unwrap, { yields: @1.origin === 'function*', arguments: $4, returns: [@6.type].filter(Boolean) }`],
    [`ASYNC FUNCTION WITH FuncBody`, `[], $4.unwrap, { async: true, yields: @2.origin === 'function*', returns: [@4.type].filter(Boolean) }`],
    [`ASYNC FUNCTION WITH <( TypeArguments )> FuncBody`, `[], $7.unwrap, { async: true, yields: @2.origin === 'function*', arguments: $5, returns: [@7.type].filter(Boolean) }`],
    [`WITH Block`, `[], $2.unwrap, {}`],
    [`WITH <( TypeArguments )> Block`, `[], $5.unwrap, { arguments: $3 }`],
    [`WITH <( TypeArguments )> THEN Block`, `[], $6.unwrap, { arguments: $3, returns: [@5.type].filter(Boolean) }`],
    [`FUNC_DIRECTIVE Block`, `[], $2.unwrap`],
    [`Identifier TypeArguments? Params FUNC_DIRECTIVE Expression`, `[$1, $3], yy.Block.wrap($5).setLoc(@5), { arguments: $2.unwrap }`],
    [`Identifier TypeArguments? Params FUNC_DIRECTIVE Block`, `[$1, $3], $5.unwrap, { arguments: $2.unwrap }`]
]);

u(`FuncBody`, [
    [`THEN Block`, `$2.unwrap.setLoc(@1, @2)`, { typeOf: 1 }],
    [`Block`, `$1.unwrap.setLoc(@1)`, { typeOf: 0 }],
    [`THEN Expression`, `yy.Block.wrap($2).setLoc(@2)`, { typeOf: 1 }]
]);

u(`FuncSpecifiers`, [
    [`STATIC GET`, `{ static: true, get: true }`],
    [`STATIC SET`, `{ static: true, set: true }`],
    [`STATIC ASYNC`, `{ static: true, async: true }`],
    [`GET`, `{ get: true }`],
    [`SET`, `{ set: true }`],
    [`STATIC`, `{ static: true }`],
    [`ASYNC`, `{ async: true }`],
]);

u(`FuncHeader`, [
    [`Identifier TypeArguments? Params`, `$1, $3, $2.unwrap`, { typeOf: 3 }],
    [`Identifier WITH TypeArguments? Params`, `$1, $4, $3.unwrap`, { typeOf: 4 }],
    [`Identifier TypeArguments? WITH Params`, `$1, $4, $2.unwrap`, { typeOf: 4 }],
    [`WITH TypeArguments? Params`, `null, $3, $2.unwrap`, { typeOf: 3 }],
    [`TypeArguments? WITH Params`, `null, $3, $1.unwrap`, { typeOf: 3, first: 2 }],
    [`Identifier TypeArguments?`, `$1, null, $2.unwrap`, { typeOf: 0, last: 1 }],
    [`Identifier TypeArguments? WITH`, `$1, null, $2.unwrap`, { typeOf: 0 }],
    [`Identifier WITH TypeArguments?`, `$1, null, $3.unwrap`, { typeOf: 0, last: 2 }],
    [`TypeArguments? Params`, `null, $2, $1.unwrap`, { typeOf: 2, first: 2 }]
]);

u('TypeArguments?', [
    ['', 'undefined'],
    ['<( TypeArguments )>', '$2'],
    ['<( INDENT TypeArguments OUTDENT )>', '$3']
]);

u(`Params`, [
    [`PARAM_START PARAM_END`, `[]`, { typeOf: 2 }],
    [`PARAM_START ParamList PARAM_END`, `$2.setLoc(@1, @3)`, { typeOf: 3 }]
]);

u(`ParamList`, [
    [`Param`, `$1`],
    [`ParamList , Param`, `...$1.addParam($3).setLoc(@1, @3)`],
    [`ParamList OptComma NEWLINE Param`, `...$1.addParam($4)`],
    [`ParamList OptComma INDENT ParamList OptComma OUTDENT`, `...$1.addParams($4.contents)`]
]);

u(`Param`, [
    [`ParamAssignable`]
]);

u(`Assign`, [
    [`Assignment`, `$1`]
]);

u(`Assignment`, [
    [`Assignable AssignKeyword Expression`, `$1, $3, $2`],
    [`Assignable AssignKeyword INDENT Expression OUTDENT`, `$1, $4, $2`],
    [`Assignable AssignKeyword NEWLINE Expression`, `$1, $4, $2`],
    [`Assignable AssignKeyword Block`, `$1, yy.Array.from($3), $2`]
]);

u(`AssignKeyword`, [
    [`AS`, `@1.origin`],
    [`AT`],
    [`FROM`]
])

u(`Assignable`, [
    [`Identifier`],
    [`ARGUMENT`],
    [`Object`],
    [`Array`],
    [`Value Access`, `$1, $2`, { typeOf: 2 }],
    ['Expression IN Expression', `$3, $1`]
]);

u(`ParamAssignable`, [
    [`ParamIdentifier`],
    [`ParamObject`],
    [`ParamObject DEFAULTS Expression`],
    [`ParamArray`],
    [`ParamArray DEFAULTS Expression`]
])

grammar.ParamAssignable[2][1] = `$$ = new yy.ParamAssignable('ParamObject', $1.defaults($3)).setLocation(@1, @3)`;
grammar.ParamAssignable[4][1] = `$$ = new yy.ParamAssignable('ParamArray', $1.defaults($3)).setLocation(@1, @3)`;

u(`Identifier`, [
    [`IDENTIFIER`]
]);

u(`ParamIdentifier`, [
    [`IDENTIFIER`, `$1`],
    [`... IDENTIFIER`, `$2`, { expansion: true }],
    [`IDENTIFIER ...`, `$1`, { expansion: true }],
    [`IDENTIFIER DEFAULTS Expression`, `$1,,$3`],
    [`THIS . PROPERTY`, `$3, true`],
    [`THIS . PROPERTY DEFAULTS Expression`, `$3,true,$5`],
    [`THIS . PROPERTY ...`, `$3, true`, { expansion: true }],
    [`... THIS . PROPERTY`, `$4, true`, { expansion: true }]
]);

u(`Access`, [
    [`. PROPERTY`, `Object.assign([$2], { loc: @2 }), @1.origin === '?.'`, { typeOf: 2 }],
    [`INDEX_START Expression INDEX_END`, `$2`, { typeOf: 3 }]
]);

u(`ParamArray`, [
    [`[ ]`, `/* */`, { typeOf: 0 }],
    [`[ ParamArrayList OptVoids ]`, `$2`, { typeOf: 4 }]
])

u(`Array`, [
    [`[ ]`, `/* */`, { checkGenerated: 1 }],
    [`[ ArrayList OptVoids ]`, `...$2`, { checkGenerated: 1 }],
    [`[ INDENT ArrayList OptVoids OUTDENT ]`, `...$3`, { indented: true, checkGenerated: 1 }]
]);

grammar.ParamArrayList = [
    [`ParamArrayArg`, `$$ = [...$1]`],
    [`ParamArrayList , ParamArrayArg`, `$$ = $1.concat($3)`],
    [`ParamArrayList OptComma NEWLINE ParamArrayArg`, `$$ = $1.concat($4)`]
]

grammar.ArrayList = [
    [`ArrayArg`, `$$ = [...$1]`],
    [`ArrayList , ArrayArg`, `$$ = $1.concat($3)`],
    [`ArrayList OptComma INDENT ArrayList OptVoids OUTDENT`, `$$ = $1.concat(false, $4)`],
    [`ArrayList OptComma NEWLINE ArrayArg`, `$$ = $1.concat(@3.generated, $4)`]
];

grammar.ParamArrayArg = [
    [`ParamAssignable`, `$$ = [$1]`],
    [`Voids ParamAssignable`, `$$ = [...$1, $2]`]
]

grammar.ArrayArg = [
    [`... Expression`, `$$ = [Object.assign($2, { expansion: true })]`],
    [`Expression ...`, `$$ = [Object.assign($1, { expansion: true })]`],
    [`Expression`, `$$ = [$1]`],
    [`Voids Expression`, `$$ = [...$1, $2]`]
];

grammar.OptVoids = [
    [``, `$$ = undefined`],
    [`Voids`, `$$ = $1`]
];

grammar.Voids = [
    [`,`, `$$ = [null]`],
    [`, Voids`, `$$ = [null, ...$1]`],
    [`, NEWLINE Voids`, `$$ = [null, ...$2]`]
]

u(`Statement`, [
    [`Return`],
    [`BREAK Identifier`, `$2`],
    [`BREAK`],
    [`CONTINUE Identifier`, `$2`],
    [`CONTINUE`],
    [`Import`],
    [`Export`],
    [`Declare`],
    [`THROW Expression`, `$2`],
    [`THROW INDENT Expression OUTDENT`, `$3`],
    [`Type`],
    [`Interface`]
]);

u(`Interface`, [
    ['INTERFACE Identifier TypeArguments? InterfaceBody', '$2, $3, $4'],
    ['INTERFACE Identifier TypeArguments? INDENT InterfaceBody OUTDENT', '$2, $3, $5']
]);

u(`InterfaceBody`, [
    ['{ }', '[]'],
    ['{ InterfaceProperties }', '$2.contents'],
    ['{ INDENT InterfaceProperties OUTDENT }', '$3.contents']
]);

u(`InterfaceProperties`, [
    ['InterfaceProperty'],
    ['InterfaceProperties , InterfaceProperty', '...$1.unwrap, $3'],
    ['InterfaceProperties OptComma NEWLINE InterfaceProperty', '...$1.unwrap, $4'],
    ['InterfaceProperties OptComma INDENT InterfaceProperty OUTDENT', '...$1.unwrap, $4']
]);

u('InterfaceProperty', [
    ['InterfaceKeyword? TypeArguments? Identifier? Params : TypeSentence', '$3.unwrap, $6, $4, { ...$1.unwrap, arguments: $2.unwrap, optional: @2.origin === "?:" }'],
    ['PROPERTY : TypeSentence', 'new yy.Identifier(null, $1).setLoc(@1), $3, null, { optional: @2.origin === "?:" }'],
    ['READONLY PROPERTY : TypeSentence', 'new yy.Identifier(null, $2).setLoc(@2), $4, null, { optional: @3.origin === "?:", readonly: true }']
]);

u("InterfaceKeyword?", [
    ['', 'undefined'],
    ['NEW', '{ new: true }'],
    ['READONLY', '{ readonly: true }']
])

u('Identifier?', [
    ['', 'undefined'],
    ['Identifier']
]);

u(`Type`, [
    [`TYPE TypeDeclaration`, `$2`],
    [`TYPE INDENT TypeDeclaration OUTDENT`, `$3`],
    [`TYPE NEWLINE TypeDeclaration`, `$3`]
])

u(`TypeDeclaration`, [
    [`Identifier TypeArguments? AS TypeSentence`, `$1, $4, $2.unwrap`],
    [`Identifier TypeArguments? AS INDENT TypeSentence OUTDENT`, `$1, $5, $2.unwrap`],
    [`Identifier TypeArguments? AS NEWLINE TypeSentence`, `$1, $5, $2.unwrap`]
])

u(`TypeSentence`, [
    [`TypeSentence & TypeValue`, `...$1.contents, $2, $3`],
    [`TypeSentence | TypeValue`, `...$1.contents, $2, $3`],
    [`TypeSentence & INDENT TypeValue OUTDENT`, `...$1.contents, $2, $4`],
    [`TypeSentence | INDENT TypeValue OUTDENT`, `...$1.contents, $2, $4`],
    [`TypeSentence & NEWLINE TypeValue`, `...$1.contents, $2, $4`],
    [`TypeSentence | NEWLINE TypeValue`, `...$1.contents, $2, $4`],
    [`TypeValue`, `$1`]
]);

u(`TypeValue`, [
    [`TypeArray`],
    [`TypeObject`],
    [`Literal`],
    [`Identifier`],
    [`TAG`],
    ['TypeWithArguments']
])

u('TypeWithArguments', [
    ['( TypeSentence ) INDEX_START INDEX_END', '{ isArray: true, type: $2 }'],
    ['TypeValue INDEX_START INDEX_END', '{ isArray: true, type: $1 }'],
    ['Identifier <( TypeArguments )>', '{ type: $1, arguments: $3 }'],
    ['Identifier <( INDENT TypeArguments OUTDENT )>', '{ type: $1, arguments: $4 }']
])

u('TypeArguments', [
    ['TypeArgument'],
    ['TypeArguments , TypeArgument', '...$1.contents, $3'],
    ['TypeArguments OptComma NEWLINE TypeArgument', '...$1.contents, $4'],
    ['TypeArguments OptComma INDENT TypeArgument OUTDENT', '...$1.contents, $4']
])

u('TypeArgument', [
    ['Identifier', '$1'],
    ['Identifier EXTENDS Identifier', '$1, $3'],
    ['TypeWithArguments']
])

u(`TypeObject`, [
    [`{ TypeObjProps }`, `...$2.contents`],
    [`{ INDENT TypeObjProps OUTDENT }`, `...$3.contents`],
]);

u(`TypeObjProps`, [
    [`TypeObjProps OptComma NEWLINE TypeObjProp`, `...$1.contents, $4`],
    [`TypeObjProps , TypeObjProp`, `...$1.contents, $3`],
    [`TypeObjProps OptComma INDENT TypeObjProp OUTDENT`, `...$1.contents, $4`],
    [`TypeObjProp`]
])

u(`TypeObjProp`, [
    [`PROPERTY : TypeSentence`, `$1, $3, @2.origin === '?:'`],
    [`PROPERTY : NEWLINE TypeSentence`, `$1, $4, @2.origin === '?:'`],
    [`PROPERTY : INDENT TypeSentence OUTDENT`, `$1, $4, @2.origin === '?:'`],
    [`PROPERTY :`, `$1, , @2.origin === '?:'`],
    [`Identifier`, `$1`]
]);

u(`TypeArray`, [
    [`[ TypeArrayItems ]`, `...$2.contents`],
    [`[ INDENT TypeArrayItems OUTDENT ]`, `...$3.contents`]
])

u(`TypeArrayItems`, [
    ['TypeSentence'],
    [`TypeArrayItems OptComma NEWLINE TypeSentence`, `...$1.contents, $4`],
    [`TypeArrayItems OptComma INDENT TypeSentence OUTDENT`, `...$1.contents, $4`],
    [`TypeArrayItems , TypeSentence`, `...$1.contents, $3`]
]);

u(`Declare`, [
    [`DeclarationKeyword Declarations`, `{ keyword: $1, statements: $2 }, [@1, @2]`],
    [`DeclarationKeyword INDENT Declarations OUTDENT`, `{ keyword: $1, statements: $3, indented: true }, [@1, @3]`]
]);

u(`DeclarationKeyword`, [
    [`VAR`],
    [`LET`],
    [`CONST`]
]);

u(`Declarations`, [
    [`Declaration`, `$1.unwrap`],
    [`Declarations , Declaration`, `...$1.contents, $3.unwrap`],
    [`Declarations OptComma NEWLINE Declaration`, `...$1.contents, @3.generated, $4.unwrap`],
    [`Declarations OptComma INDENT Declarations OUTDENT`, `...$1.contents, false, ...$4.contents`]
]);

u(`Declaration`, [
    [`Assignment`],
    [`Identifier`]
]);

u(`Return`, [
    [`RETURN`, `/* */`],
    [`RETURN Expression`, `$2`],
    [`RETURN INDENT Expression OUTDENT`, `$3`],
    [`RETURN INDENT Body OUTDENT`, `$3`]
]);

u(`Import`, [
    [`IMPORT OptDefault ImportList Import(FROM) STRING`, `$3.contents, $5, false, $2`],
    [`IMPORT INDENT OptDefault ImportList Import(FROM) STRING OUTDENT`, `$4.contents, $6, false, $3`],
    [`IMPORT OptDefault INDENT ImportList Import(FROM) STRING OUTDENT`, `$4.contents, $6, false, $2`],
    [`IMPORT OptDefault INDENT ImportList OUTDENT Import(FROM) STRING`, `$4.contents, $7, false, $2`],
    [`IMPORT INDENT OptDefault INDENT ImportList OUTDENT Import(FROM) STRING OUTDENT`, `$5.contents, $8, false, $3`],
    [`IMPORT OptDefault * AS Identifier Import(FROM) STRING`, `$5, $7, true, $2`],

    [`IMPORT INDENT OptDefault * AS Identifier Import(FROM) STRING OUTDENT`, `$6, $8, true, $3`],
    [`IMPORT OptDefault INDENT * AS Identifier Import(FROM) STRING OUTDENT`, `$6, $8, true, $2`]
]);

wrap('Import FROM');

u(`Export`, [
    [`EXPORT ExportList`, `{ list: $2 }`],
    [`EXPORT INDENT ExportList OUTDENT`, `{ list: $3 }`],
    [`EXPORT DEFAULT Expression`, `{ defaults: $3 }`],
    [`EXPORT INDENT DEFAULT Expression OUDENT`, `{ defaults: $4 }`],
    [`EXPORT Declare`, `{ declarations: $2 }`],
    [`EXPORT INDENT Declare OUTDENT`, `{ declarations: $3 }`],
    [`EXPORT Exportable`, `{ exportable: $2.unwrap }`],
    [`EXPORT INDENT Exportable OUTDENT`, `{ exportable: $3.unwrap }`]
]);

grammar.OptDefault = [
    [``, `$$ = undefined`],
    [`Identifier ,`, `$$ = $1`],
    [`Identifier OptComma NEWLINE`, `$$ = $1`]
]

u(`ImportList`, [
    [`Identifier`],
    [`{ ImportNames }`, `$2`],
    [`{{ INDENT ImportNames OUTDENT }}`, `$3`]
]);

u(`ExportList`, [
    [`{ ExportNames }`, `$2`],
    [`{{ INDENT ExportNames OUTDENT }}`, `$3`]
]);

u(`ExportNames`, [
    [`ExportName`, `$1.contents`],
    [`ExportNames , ExportName`, `...$1.contents, $3.contents`],
    [`ExportNames OptComma NEWLINE ExportName`, `...$1.contents, $4.contents`]
]);

u(`ExportName`, [
    [`PROPERTY :`, `new yy.Identifier(0, $1).setLoc(@1)`],
    [`PROPERTY : Identifier`, `new yy.Identifier(0, $1).setLoc(@1), $3`],
    [`PROPERTY : AS Identifier`, `new yy.Identifier(0, $1).setLoc(@1), $4`],
    [`Identifier`],
    [`Identifier AS DEFAULT`, `$1,,true`],
    [`Identifier AS Identifier`, `$1,$3`]
]);

u(`Exportable`, [
    [`Class`],
    [`Function`]
])

u(`ImportNames`, [
    [`ImportName`, `$1.contents`],
    [`ImportNames , ImportName`, `...$1.contents, $3.contents`],
    [`ImportNames OptComma NEWLINE ImportName`, `...$1.contents, $4.contents`],
]);

u(`ImportName`, [
    [`PROPERTY :`, `new yy.Identifier(0, $1).setLoc(@1), , [@1, @2]`],
    [`PROPERTY : Identifier`, `new yy.Identifier(0, $1).setLoc(@1), $3`],
    [`PROPERTY : AS Identifier`, `new yy.Identifier(0, $1).setLoc(@1), $4`],
    [`Identifier AS Identifier`, `$1, $3`],
    [`DEFAULT AS Identifier`, `(new yy.Identifier(null, 'default')).setLoc(@1), $3`],
    [`Identifier`]
]);

function wrap(source) {
    let [from, to] = source.split(' ');

    wrapped[`${from}(${to})`] = { from, to };
    grammar[`${from}(${to})`] = [
        [to, '$$ = $1']
    ];
}

module.exports = grammar;