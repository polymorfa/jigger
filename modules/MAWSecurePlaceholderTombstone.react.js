__d("MAWSecurePlaceholderTombstone.react", [
	"MAWUnavailablePlaceholder.react",
	"MAWUnavailableStoryPlaceholder.react",
	"MAWXMAUtils",
	"ReQL",
	"ReQLSuspense",
	"react",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(8), a = (e || (e = r("useReStore")))(), l;
		n[0] !== a.tables.attachments || n[1] !== t.messageId || n[2] !== t.threadKey ? (l = function() {
			return o("ReQL").fromTableAscending(a.tables.attachments).getKeyRange(t.threadKey, t.messageId);
		}, n[0] = a.tables.attachments, n[1] = t.messageId, n[2] = t.threadKey, n[3] = l) : l = n[3];
		var s;
		return n[4] !== a || n[5] !== t.messageId || n[6] !== t.threadKey ? (s = [
			a,
			t.threadKey,
			t.messageId
		], n[4] = a, n[5] = t.messageId, n[6] = t.threadKey, n[7] = s) : s = n[7], o("ReQLSuspense").useFirst(l, s, i.id + ":25");
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(4), n = e.isOutgoing, a = e.message, i = a, l = c(i);
		if (l == null) return null;
		var s = l.xmaContentType;
		if (s != null && o("MAWXMAUtils").isXMAFBStory(s)) {
			var d;
			return t[0] !== n ? (d = u.jsx(r("MAWUnavailableStoryPlaceholder.react"), { isOutgoing: n }), t[0] = n, t[1] = d) : d = t[1], d;
		}
		var m;
		return t[2] !== n ? (m = u.jsx(r("MAWUnavailablePlaceholder.react"), { isOutgoing: n }), t[2] = n, t[3] = m) : m = t[3], m;
	}
	l.default = d;
}), 98);
