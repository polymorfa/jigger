__d("WDSTextLayout.react", [
	"WDSBulletList.react",
	"WDSButtonGroup.react",
	"WDSText.react",
	"WDSTextLayoutConfig",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = t.actionsWidth, a = n === void 0 ? "fill" : n, i = t.body, l = t.bullets, s = t.footnote, c = t.headline, d = t.illustration, m = t.isPrimaryHeading, p = m === void 0 ? !1 : m, _ = t.primaryAction, f = t.secondaryAction, g = t.tertiaryAction, h = t.testid, y = c != null || i != null, C = l != null && l.length > 0, b = _ != null ? u.jsx(r("WDSButtonGroup.react"), {
			footnote: s,
			orientation: a === "hug" ? "horizontal" : "stacked",
			primaryButtonProps: _,
			secondaryButtonProps: f,
			tertiaryButtonProps: g,
			width: a
		}) : null;
		return u.jsxs("div", babelHelpers.extends({ "data-testid": void 0 }, (e || (e = r("stylex"))).props(o("WDSTextLayoutConfig").textLayoutStyles.root), { children: [
			d != null && u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSTextLayoutConfig").textLayoutStyles.illustration), { children: d })),
			(y || C) && u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSTextLayoutConfig").textLayoutStyles.contentStack), { children: [y && u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSTextLayoutConfig").textLayoutStyles.contentGroup), { children: [c != null && u.jsx(r("WDSText.react"), {
				type: "Headline2",
				colorName: "contentDefault",
				textAlign: "center",
				isPrimaryHeading: p,
				isSemanticHeading: p !== !0,
				children: c
			}), i != null && u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: i
			})] })), C && l != null && u.jsx(r("WDSBulletList.react"), { bullets: l })] })),
			b != null && (a === "hug" ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSTextLayoutConfig").textLayoutStyles.actionsHug), { children: b })) : b)
		] }));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
