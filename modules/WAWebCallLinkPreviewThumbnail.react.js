__d("WAWebCallLinkPreviewThumbnail.react", [
	"WAWebPhoneIcon.react",
	"WAWebVideoIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { icon: {
		color: "xw2c8ud",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(3), n = e.callType, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xfrb85r" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = s.jsx("div", babelHelpers.extends({ "data-testid": "call-link-preview-thumbnail" }, r, { children: n === "video" ? s.jsx(o("WAWebVideoIcon.react").VideoIcon, {
			"aria-hidden": !0,
			height: 46,
			width: 46,
			iconXstyle: u.icon
		}) : s.jsx(o("WAWebPhoneIcon.react").PhoneIcon, {
			"aria-hidden": !0,
			height: 46,
			width: 46,
			iconXstyle: u.icon
		}) })), t[1] = n, t[2] = a) : a = t[2], a;
	}
	l.default = c;
}), 98);
