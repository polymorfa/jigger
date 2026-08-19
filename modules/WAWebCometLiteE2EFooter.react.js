__d("WAWebCometLiteE2EFooter.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSIconIcLock.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		e2eFooter: {
			flexShrink: "x2lah0s",
			width: "xh8yej3",
			columnGap: "x1s70e7g",
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		e2eIcon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function d() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(r("WDSIconIcLock.react"), {
			height: 16,
			width: 16,
			iconXstyle: c.e2eIcon
		}), e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: c.e2eFooter,
			testid: "wa-web-lite-e2e-footer",
			children: [t, u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[1] = n) : n = e[1], n;
	}
	l.default = d;
}), 226);
