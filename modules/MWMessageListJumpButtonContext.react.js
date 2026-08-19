__d("MWMessageListJumpButtonContext.react", [
	"MWJumpToMostRecentMessageButton.react",
	"MWPJumpToMostRecentMessageButtonAnimationWrapper.react",
	"react",
	"react-compiler-runtime",
	"useIsNearBottomOfScrollArea"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useCallback, m = u.useContext, p = u.useMemo, _ = u.useRef, f = u.useState, g = c(null);
	function h(e) {
		var t = o("react-compiler-runtime").c(6), n = e.children, r = f(null), a = r[0], i = r[1], l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = function(t) {
			i(t);
		}, t[0] = l) : l = t[0];
		var u = l, c;
		t[1] !== a ? (c = {
			jumpButtonData: a,
			onJumpButtonChange: u
		}, t[1] = a, t[2] = c) : c = t[2];
		var d = c, m;
		return t[3] !== n || t[4] !== d ? (m = s.jsx(g, {
			value: d,
			children: n
		}), t[3] = n, t[4] = d, t[5] = m) : m = t[5], m;
	}
	function y() {
		var e, t = o("react-compiler-runtime").c(5), n = m(g), a = _(null), i = n == null ? void 0 : n.jumpButtonData, l = (e = i == null ? void 0 : i.scrollAreaRef) != null ? e : a, u = r("useIsNearBottomOfScrollArea")(l, 108);
		if (i == null) return null;
		var c = u === !1 || i.alwaysShow, d;
		t[0] !== i.jumpToMostRecentMessage ? (d = s.jsx(r("MWJumpToMostRecentMessageButton.react"), { onPress: i.jumpToMostRecentMessage }), t[0] = i.jumpToMostRecentMessage, t[1] = d) : d = t[1];
		var p;
		return t[2] !== d || t[3] !== c ? (p = s.jsx(r("MWPJumpToMostRecentMessageButtonAnimationWrapper.react"), {
			visible: c,
			children: d
		}), t[2] = d, t[3] = c, t[4] = p) : p = t[4], p;
	}
	function C() {
		var e = m(g);
		return e == null ? void 0 : e.onJumpButtonChange;
	}
	l.MWMessageListJumpButtonProvider = h, l.MWMessageListJumpButtonConsumer = y, l.useMWMessageListJumpButtonChange = C;
}), 98);
