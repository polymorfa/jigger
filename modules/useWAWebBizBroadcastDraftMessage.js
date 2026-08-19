__d("useWAWebBizBroadcastDraftMessage", [
	"WATimeUtils",
	"WAWebChatGetters",
	"react",
	"react-compiler-runtime",
	"useWAWebChatValues",
	"useWAWebDebouncedCallback"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useState;
	function d(e, t) {
		var n, r = e == null ? void 0 : e.getComposeContents();
		r == null && t.trim() === "" || (r == null || (n = r.text) == null ? void 0 : n.trim()) !== t.trim() && (e == null || e.setComposeContents({
			text: t,
			timestamp: o("WATimeUtils").unixTime()
		}));
	}
	function m(e, t) {
		var n, a, i = o("react-compiler-runtime").c(12), l;
		i[0] !== e ? (l = e.values().next(), i[0] = e, i[1] = l) : l = i[1];
		var s = l.value, u = (n = o("useWAWebChatValues").useOptionalChatValues(s == null ? void 0 : s.id, [o("WAWebChatGetters").getDraftMessage])) != null ? n : [], m = u[0], p = c((a = t != null ? t : m == null ? void 0 : m.text) != null ? a : ""), _ = p[0], f = p[1], g = r("useWAWebDebouncedCallback")(d, 200), h;
		i[2] !== s || i[3] !== g || i[4] !== e.size ? (h = function(n) {
			f(n), e.size === 1 && g(s, n);
		}, i[2] = s, i[3] = g, i[4] = e.size, i[5] = h) : h = i[5];
		var y = h, C;
		i[6] !== s ? (C = function() {
			s == null || s.setComposeContents({
				text: "",
				timestamp: o("WATimeUtils").unixTime()
			});
		}, i[6] = s, i[7] = C) : C = i[7];
		var b = C, v;
		return i[8] !== b || i[9] !== _ || i[10] !== y ? (v = {
			clearDraftMessage: b,
			message: _,
			onMessageChange: y
		}, i[8] = b, i[9] = _, i[10] = y, i[11] = v) : v = i[11], v;
	}
	l.default = m;
}), 98);
