__d("WDSSectionDivider.react", [
	"WDSSectionDividerConfig.stylex",
	"WDSText.react",
	"err",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n = e.divider, a = n === void 0 ? !1 : n, i = e.footer, l = e.header, u = e.testid;
		if (l == null && i == null && !a) throw r("err")("WDSSectionDivider requires at least one of: header, footer, or divider");
		var c = l != null ? o("WDSSectionDividerConfig.stylex").HEADER_VARIANT_CONFIG[(t = l.type) != null ? t : "default"] : null;
		return s.jsxs("div", {
			className: "x78zum5 xdt5ytf xh8yej3",
			"data-testid": void 0,
			children: [
				i != null && s.jsx("div", {
					className: "x12xbjc7 x1phvje8 xcldk2z",
					children: s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: i.children
					})
				}),
				a && s.jsx("div", {
					className: "x16ovd2e x12xbjc7",
					children: s.jsx("div", {
						className: "x3x0x6p xjm9jq1",
						role: "separator"
					})
				}),
				l != null && c != null && s.jsxs("div", {
					className: "x6s0dn4 x78zum5 xs2akgl x1qughib x12xbjc7 x1p57kb1 x1phvje8 xcldk2z",
					children: [s.jsxs("div", {
						className: "x78zum5 xdt5ytf x1iyjqo2 xeuugli",
						children: [s.jsx(r("WDSText.react"), {
							type: c.textType,
							colorName: c.colorName,
							isSemanticHeading: !0,
							children: l.title
						}), l.subtitle != null && s.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: l.subtitle
						})]
					}), l.action]
				})
			]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
