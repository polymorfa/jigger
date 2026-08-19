__d("WAWebVoipCallingNavNux.react", [
	"fbt",
	"WAWebDropdownV2.react",
	"WAWebNux",
	"WAWebVoipCallingNuxCoachmark.react",
	"react",
	"useWAWebIsModalOpen",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 40, d = 24, m = (c - d) / 2, p = { navCard: {
		paddingTop: "x96k8nx",
		paddingInlineStart: "x1g0dm76",
		paddingInlineEnd: "xpdmqnj",
		paddingLeft: null,
		paddingRight: null,
		paddingBottom: "xxbrewl",
		$$css: !0
	} };
	function _(e) {
		var t = e.onVisibilityChange, n = e.targetRef, a = r("useWAWebNux")(o("WAWebNux").NUX.WEB_CALLING_NAV_NUX), i = a[0], l = a[1], c = a[2], d = r("useWAWebIsModalOpen")(), _ = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WAWebVoipCallingNuxCoachmark.react"), {
			targetRef: n,
			isVisible: i && !d,
			onDismiss: c,
			onVisibilityChange: t,
			subtitle: _,
			subtitleType: "Body2",
			cardXStyle: p.navCard,
			testid: "voip-calling-nav-nux",
			displayName: "VoipCallingNavNux",
			position: o("WAWebDropdownV2.react").PopoverPosition.End,
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
			buffer: -m
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
