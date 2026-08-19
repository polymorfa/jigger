__d("WAWebVoipCallEndedScreen.react", [
	"WAWebFlex.react",
	"WAWebVoipCallEndedDisplay.react",
	"WAWebVoipDarkThemeRoot.react",
	"WDSColorStyles.stylex",
	"react"
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
		return s.jsx(r("WAWebVoipDarkThemeRoot.react"), {
			xstyle: [
				u.voipContainer,
				o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
				o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain
			],
			children: s.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				grow: 1,
				shrink: 1,
				basis: "auto",
				xstyle: u.mainUIContainer,
				children: s.jsx(r("WAWebVoipCallEndedDisplay.react"), {})
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
