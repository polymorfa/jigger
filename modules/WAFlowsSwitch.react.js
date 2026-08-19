__d("WAFlowsSwitch.react", [
	"WAFlowsComponentTemplate.react",
	"WAFlowsComponentsCommon",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n, o = e.cases, a = e.dataTestId, i = a === void 0 ? "waf-switch-data-testid" : a, l = e.screenID, u = e.value, c = (t = o.default) != null ? t : [], d = (n = o[u]) != null ? n : c;
		return s.jsx("div", {
			"data-testid": void 0,
			children: d.map(function(e, t) {
				return s.jsx("div", {
					className: t > 0 ? "x1hovqzm" : "",
					children: s.jsx(r("WAFlowsComponentTemplate.react"), {
						screenID: l,
						component: e
					}, e.type + "_" + t + "_" + u)
				}, e.type + "_" + t + "_" + u);
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	var c = "Switch", d = {
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			value: { type: "string" },
			cases: {
				type: "object",
				additionalProperties: {
					type: "array",
					items: {
						type: "object",
						required: ["type"]
					}
				}
			}
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: ["value", "cases"],
		additionalProperties: !1
	};
	l.WAFlowsSwitch = u, l.TYPE = c, l.SCHEMA = d;
}), 98);
