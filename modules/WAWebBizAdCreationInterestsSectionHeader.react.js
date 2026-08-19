__d("WAWebBizAdCreationInterestsSectionHeader.react", [
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4), n = e.title, a, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx("div", {
			className: "x16ovd2e x12xbjc7",
			children: s.jsx("hr", { className: "x3x0x6p x1ejq31n x18oe1m7 x1sy0etr xstzfhl xjm9jq1 xdj266r x14z9mp xat24cr x1lziwak" })
		}), i = { className: "x12xbjc7" }, t[0] = a, t[1] = i) : (a = t[0], i = t[1]);
		var l;
		return t[2] !== n ? (l = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			children: [a, s.jsx("div", babelHelpers.extends({}, i, { children: s.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				isSemanticHeading: !0,
				testid: "biz_native_ads_interest_section_header",
				type: "Body1Emphasized",
				children: n
			}) }))]
		}), t[2] = n, t[3] = l) : l = t[3], l;
	}
	l.default = u;
}), 98);
