(function(a){var b=a.util.clone(a.languages.javascript);a.languages.jsx=a.languages.extend('markup',b),a.languages.jsx.tag.pattern=/<\/?[\w\.:-]+\s*(?:\s+(?:[\w\.:-]+(?:=(?:("|')(\\?[\s\S])*?\1|[^\s'">=]+|(\{[\s\S]*?\})))?|\{\.{3}\w+\}))*\s*\/?>/i,a.languages.jsx.tag.inside['attr-value'].pattern=/=(?!\{)(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,a.languages.insertBefore('inside','attr-name',{spread:{pattern:/\{\.{3}\w+\}/,inside:{punctuation:/\{|\}|\./,"attr-value":/\w+/}}},a.languages.jsx.tag);var c=a.util.clone(a.languages.jsx);delete c.punctuation,c=a.languages.insertBefore('jsx','operator',{punctuation:/=(?={)|[{}[\];(),.:]/},{jsx:c}),a.languages.insertBefore('inside','attr-value',{script:{pattern:/=(\{(?:\{[^}]*\}|[^}])+\})/i,inside:c,alias:'language-javascript'}},a.languages.jsx.tag)})(Prism);