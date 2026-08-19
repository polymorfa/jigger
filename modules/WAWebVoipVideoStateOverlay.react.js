__d("WAWebVoipVideoStateOverlay.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebVoipWaCallEnums",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { overlay: {
		position: "x10l6tqk",
		top: "x13vifvy",
		insetInlineStart: "x1o0tod",
		left: null,
		right: null,
		width: "xh8yej3",
		height: "x5yr21d",
		zIndex: "xhtitgo",
		$$css: !0
	} };
	function d() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { className: "x1od0jb8 x6nvzda x4i4b9w xhl9efl xj65ea0 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39" }, e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx("div", babelHelpers.extends({}, t, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "persistentAlwaysWhite",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), e[1] = n) : n = e[1], n;
	}
	function m() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { className: "x1od0jb8 x6nvzda x4i4b9w xhl9efl xj65ea0 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39" }, e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx("div", babelHelpers.extends({}, t, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "persistentAlwaysWhite",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), e[1] = n) : n = e[1], n;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(5), n = e.peerReconnectingState, r = e.peerVideoPaused, a = r === void 0 ? !1 : r, i = (n == null ? void 0 : n.isReconnecting) === !0;
		if (i) {
			var l;
			t[0] !== (n == null ? void 0 : n.option) ? (l = (n == null ? void 0 : n.option) === o("WAWebVoipWaCallEnums").ReconnectingOption.Text && u.jsx(d, {}), t[0] = n == null ? void 0 : n.option, t[1] = l) : l = t[1];
			var s;
			return t[2] !== l ? (s = u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: c.overlay,
				children: l
			}), t[2] = l, t[3] = s) : s = t[3], s;
		}
		if (a) {
			var p;
			return t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: c.overlay,
				children: u.jsx(m, {})
			}), t[4] = p) : p = t[4], p;
		}
		return null;
	}
	l.WAWebVoipVideoStateOverlay = p;
}), 226);
