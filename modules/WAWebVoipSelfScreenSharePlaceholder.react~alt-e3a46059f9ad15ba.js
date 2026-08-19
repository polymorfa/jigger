__d("WAWebVoipSelfScreenSharePlaceholder.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebVoipStackInterface",
	"WDSButton.react",
	"WDSIconIcStopScreenShare.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		container: {
			backgroundColor: "x16w0wmm",
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		textContainer: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		}
	};
	function m() {
		var e = o("react-compiler-runtime").c(3), t = p, n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: d.textContainer,
			children: u.jsx(r("WDSText.react"), {
				type: "Headline2",
				colorName: "contentDefault",
				preserveNewLines: !1,
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), e[0] = n) : n = e[0];
		var a;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = function() {
			t();
		}, e[1] = a) : a = e[1];
		var i;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: d.container,
			testid: "voip-self-screen-share-placeholder",
			children: [n, u.jsx(r("WDSButton.react"), {
				type: "destructive",
				variant: "filled",
				onPress: a,
				Icon: r("WDSIconIcStopScreenShare.react"),
				size: "medium",
				label: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[2] = i) : i = e[2], i;
	}
	async function p() {
		var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
		(e == null ? void 0 : e.type) === "web" && await e.stopScreenShare();
	}
	l.default = m;
}), 226);
