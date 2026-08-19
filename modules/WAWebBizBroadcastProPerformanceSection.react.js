__d("WAWebBizBroadcastProPerformanceSection.react", [
	"WAWebBizBroadcastsHomeStrings",
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { sectionDivider: {
		boxSizing: "x9f619",
		flexShrink: "x2lah0s",
		paddingBottom: "x12xbjc7",
		paddingInlineStart: "x1phvje8",
		paddingInlineEnd: "xcldk2z",
		paddingLeft: null,
		paddingRight: null,
		paddingTop: "x1p57kb1",
		width: "xh8yej3",
		$$css: !0
	} };
	function c() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			testid: "biz_broadcast_pro_performance_section",
			xstyle: u.sectionDivider,
			children: s.jsx(r("WDSText.react"), {
				type: "Body1Emphasized",
				colorName: "contentDefault",
				children: o("WAWebBizBroadcastsHomeStrings").getPerformanceSectionTitle()
			})
		}), e[0] = t) : t = e[0], t;
	}
	l.default = c;
}), 98);
