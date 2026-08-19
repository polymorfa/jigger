__d("WAWebVoipWebWasmSampleVoipUI.react", [
	"fbt",
	"WAWebVoipUiVideoCall.react",
	"WAWebVoipWebWasmSampleContainer.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		return u.jsxs(r("WAWebVoipWebWasmSampleContainer.react"), { children: [u.jsx(r("WDSText.react"), {
			type: "Headline1",
			colorName: "contentActionDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), u.jsx(r("WAWebVoipUiVideoCall.react"), { isSelfScreenSharing: !1 })] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
