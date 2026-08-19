__d("MWContextBannerWithKeyboardFocus.react", [
	"fbt",
	"MWContextBanner.react",
	"MWPMessageListFocusableTableRowSimple.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = "mwcontextbanner";
	function d(e) {
		var t = o("react-compiler-runtime").c(4), n = e.threadKey, a = e.threadType, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[0] = i) : i = t[0];
		var l;
		return t[1] !== n || t[2] !== a ? (l = u.jsx(r("MWPMessageListFocusableTableRowSimple.react"), {
			accessibilityDialogTitleText: i,
			checkIfContentsAreTabbable: !0,
			focusCellOnRender: !1,
			nameForModality: c,
			showButtonInsideRow: !0,
			children: u.jsx(r("MWContextBanner.react"), {
				includeBaseViewWrapper: !1,
				threadKey: n,
				threadType: a
			})
		}), t[1] = n, t[2] = a, t[3] = l) : l = t[3], l;
	}
	l.default = d;
}), 226);
