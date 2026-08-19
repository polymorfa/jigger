__d("WAWebVoipCallingNux.react", [
	"fbt",
	"WAWebABProps",
	"WAWebDropdownV2.react",
	"WAWebNux",
	"WAWebVoipCallingNavNuxSequencing",
	"WAWebVoipCallingNuxCoachmark.react",
	"react",
	"react-compiler-runtime",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect, d = { arrow: {
		marginTop: "xdj266r",
		marginInlineEnd: "x14z9mp",
		marginBottom: "xat24cr",
		marginInlineStart: "x1sbwfh8",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(11), n = e.onVisibilityChange, a = e.targetRef, i = r("useWAWebNux")(o("WAWebNux").NUX.WEB_CALLING_SHARED_NUX), l = i[0], m = i[2], p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = o("WAWebABProps").getABPropConfigValue("enable_web_calling_nux"), t[0] = p) : p = t[0];
		var _ = p, f, g;
		t[1] !== l ? (f = function() {
			!l && _ && o("WAWebVoipCallingNavNuxSequencing").recordHeaderCallingNuxDismissed();
		}, g = [l, _], t[1] = l, t[2] = f, t[3] = g) : (f = t[2], g = t[3]), c(f, g);
		var h;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[4] = h) : h = t[4];
		var y = h, C;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[5] = C) : C = t[5];
		var b = C, v;
		return t[6] !== m || t[7] !== n || t[8] !== l || t[9] !== a ? (v = u.jsx(r("WAWebVoipCallingNuxCoachmark.react"), {
			targetRef: a,
			isVisible: l,
			onDismiss: m,
			onVisibilityChange: n,
			title: y,
			subtitle: b,
			testid: "voip-calling-nux",
			displayName: "VoipCallingNux",
			position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
			arrowXStyle: d.arrow
		}), t[6] = m, t[7] = n, t[8] = l, t[9] = a, t[10] = v) : v = t[10], v;
	}
	l.default = m;
}), 226);
