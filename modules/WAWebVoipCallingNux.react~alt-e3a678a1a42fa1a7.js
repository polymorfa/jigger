__d("WAWebVoipCallingNux.react", [
	"fbt",
	"WAWebABProps",
	"WAWebDropdownV2.react",
	"WAWebNux",
	"WAWebVoipCallingNavNuxSequencing",
	"WAWebVoipCallingNuxCoachmark.react",
	"react",
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
		var t = e.onVisibilityChange, n = e.targetRef, a = r("useWAWebNux")(o("WAWebNux").NUX.WEB_CALLING_SHARED_NUX), i = a[0], l = a[1], m = a[2], p = o("WAWebABProps").getABPropConfigValue("enable_web_calling_nux");
		c(function() {
			!i && p && o("WAWebVoipCallingNavNuxSequencing").recordHeaderCallingNuxDismissed();
		}, [i, p]);
		var _ = s._(
			/*BTDS*/
			""
		), f = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WAWebVoipCallingNuxCoachmark.react"), {
			targetRef: n,
			isVisible: i,
			onDismiss: m,
			onVisibilityChange: t,
			title: _,
			subtitle: f,
			testid: "voip-calling-nux",
			displayName: "VoipCallingNux",
			position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
			arrowXStyle: d.arrow
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
