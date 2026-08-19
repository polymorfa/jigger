__d("WAWebVoipCallEndedScreen.react", [
	"WAWebFlex.react",
	"WAWebVoipCallEndedDisplay.react",
	"WAWebVoipDarkThemeRoot.react",
	"WDSColorStyles.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		voipContainer: {
			height: "x5yr21d",
			width: "xh8yej3",
			pointerEvents: "x67bb7w",
			position: "x1n2onr6",
			$$css: !0
		},
		mainUIContainer: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			minHeight: "x2lwn1j",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function c() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [
			u.voipContainer,
			o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
			o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain
		], e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsx(r("WAWebVoipDarkThemeRoot.react"), {
			xstyle: t,
			children: s.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				grow: 1,
				shrink: 1,
				basis: "auto",
				xstyle: u.mainUIContainer,
				children: s.jsx(r("WAWebVoipCallEndedDisplay.react"), {})
			})
		}), e[1] = n) : n = e[1], n;
	}
	l.default = c;
}), 98);
