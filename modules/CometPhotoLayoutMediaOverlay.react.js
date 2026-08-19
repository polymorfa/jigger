__d("CometPhotoLayoutMediaOverlay.react", [
	"fbt",
	"FDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(3), n = e.numItemsNotShown, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x6s0dn4 x1lxk4cn x1ey2m1c x9f619 x78zum5 xdt5ytf xtijo5x x1o0tod xl56j7k x47corl x10l6tqk x13vifvy" }, t[0] = a) : a = t[0];
		var i;
		return t[1] !== n ? (i = u.jsx("div", babelHelpers.extends({}, a, { children: u.jsx(r("FDSText.react"), {
			align: "center",
			color: "primaryOnMedia",
			type: "entityHeaderHeadline2",
			children: s._(
				/*BTDS*/
				"",
				[s._param("num", n)]
			)
		}) })), t[1] = n, t[2] = i) : i = t[2], i;
	}
	l.default = c;
}), 226);
