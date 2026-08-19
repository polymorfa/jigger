__d("WAWebBizAdCreationInterestsSectionHeader.react", [
	"WAWebFlex.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.title;
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			children: [s.jsx("div", {
				className: "x16ovd2e x12xbjc7",
				children: s.jsx("hr", { className: "x3x0x6p x1ejq31n x18oe1m7 x1sy0etr xstzfhl xjm9jq1 xdj266r x14z9mp xat24cr x1lziwak" })
			}), s.jsx("div", {
				className: "x12xbjc7",
				children: s.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					isSemanticHeading: !0,
					testid: "biz_native_ads_interest_section_header",
					type: "Body1Emphasized",
					children: t
				})
			})]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
