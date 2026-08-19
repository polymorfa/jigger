__d("MWJumpToMostRecentMessageButton.react", [
	"fbt",
	"MWPBumpEntityKey",
	"MWXIconMenuItemArrowDown",
	"MWXIconStrict.react",
	"MWXPressable.react",
	"MWXThreadThemeColor",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { circleButton: {
		alignItems: "x6s0dn4",
		backgroundColor: "x1l31dnx",
		borderStartStartRadius: "x1c9tyrk",
		borderStartEndRadius: "xeusxvb",
		borderEndEndRadius: "x1pahc9y",
		borderEndStartRadius: "x1ertn4p",
		boxShadow: "xurzqwv",
		display: "x78zum5",
		height: "x1vqgdyp",
		justifyContent: "xl56j7k",
		width: "x100vrsf",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(6), n = e.onPress, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i;
		t[1] !== n ? (i = function() {
			n(), o("MWPBumpEntityKey").bumpEntityKeyWithAppId("mw_jump_to_bottom", "app_id");
		}, t[1] = n, t[2] = i) : i = t[2];
		var l;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(r("MWXIconStrict.react"), {
			color: o("MWXThreadThemeColor").mwxThreadThemeColor("var(--mwp-primary-theme-color)"),
			icon: r("MWXIconMenuItemArrowDown"),
			isDecorative: !0,
			size: 20
		}), t[3] = l) : l = t[3];
		var d;
		return t[4] !== i ? (d = u.jsx(r("MWXPressable.react"), {
			"aria-label": a,
			onPress: i,
			role: "button",
			xstyle: c.circleButton,
			children: l
		}), t[4] = i, t[5] = d) : d = t[5], d;
	}
	l.default = d;
}), 226);
