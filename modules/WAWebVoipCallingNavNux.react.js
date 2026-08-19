__d("WAWebVoipCallingNavNux.react", [
	"fbt",
	"WAWebDropdownV2.react",
	"WAWebNux",
	"WAWebVoipCallingNuxCoachmark.react",
	"react",
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(6), n = e.onVisibilityChange, a = e.targetRef, i = r("useWAWebNux")(o("WAWebNux").NUX.WEB_CALLING_NAV_NUX), l = i[0], c = i[2], d = r("useWAWebIsModalOpen")(), _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[0] = _) : _ = t[0];
		var f = _, g = l && !d, h;
		return t[1] !== c || t[2] !== n || t[3] !== g || t[4] !== a ? (h = u.jsx(r("WAWebVoipCallingNuxCoachmark.react"), {
			targetRef: a,
			isVisible: g,
			onDismiss: c,
			onVisibilityChange: n,
			subtitle: f,
			subtitleType: "Body2",
			cardXStyle: p.navCard,
			testid: "voip-calling-nav-nux",
			displayName: "VoipCallingNavNux",
			position: o("WAWebDropdownV2.react").PopoverPosition.End,
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
			buffer: -m
		}), t[1] = c, t[2] = n, t[3] = g, t[4] = a, t[5] = h) : h = t[5], h;
	}
	l.default = _;
}), 226);
