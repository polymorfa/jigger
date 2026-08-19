__d("WAWebBizAiKnowledgeReviewSummaryPageDescription.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebText.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		marginBottom25: {
			marginBottom: "x1ibc7va",
			$$css: !0
		},
		marginTop48: {
			marginTop: "xx4vt8u",
			$$css: !0
		}
	};
	function d() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [
			o("WDSPaddings.stylex").wdsPaddings.paddingStart16,
			o("WDSPaddings.stylex").wdsPaddings.paddingEnd16,
			c.marginBottom25,
			c.marginTop48
		], e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
			/*BTDS*/
			""
		) }), e[1] = n) : n = e[1];
		var r;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (r = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: t,
			children: [n, u.jsx(o("WAWebText.react").WAWebTextSmall, { children: s._(
				/*BTDS*/
				""
			) })]
		}), e[2] = r) : r = e[2], r;
	}
	l.default = d;
}), 226);
