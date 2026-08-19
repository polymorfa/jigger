__d("WAFlowsIf.react", [
	"WAFlowsComponentTemplate.react",
	"WAFlowsComponentsCommon",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.condition, n = e.dataTestId, o = n === void 0 ? "waf-if-data-testid" : n, a = e.elseStatement, i = e.screenID, l = e.then, u = a != null ? a : [], c = t ? l : u;
		return s.jsx("div", {
			"data-testid": void 0,
			children: c.map(function(e, n) {
				return s.jsx("div", {
					className: n > 0 ? "x1hovqzm" : "",
					children: s.jsx(r("WAFlowsComponentTemplate.react"), {
						screenID: i,
						component: e
					}, e.type + "_" + n + "_" + t.toString())
				}, e.type + "_" + n + "_" + t.toString());
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	var c = "If", d = {
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			condition: { type: "boolean" },
			then: {
				type: "array",
				items: {
					type: "object",
					required: ["type"]
				}
			},
			elseStatement: {
				type: "array",
				items: {
					type: "object",
					required: ["type"]
				}
			}
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: ["condition", "then"],
		additionalProperties: !1
	};
	l.WAFlowsIf = u, l.TYPE = c, l.SCHEMA = d;
}), 98);
