__d("useIsLastNonAdminMessage", [
	"ReQL",
	"ReQLSuspense",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = 10;
	function u(t, n) {
		var a = o("react-compiler-runtime").c(6), l = (e || (e = r("useReStore")))(), u;
		a[0] !== l.tables.messages || a[1] !== t ? (u = function() {
			return o("ReQL").fromTableDescending(l.tables.messages.index("messageDisplayOrder"), ["messageId", "isAdminMessage"]).getKeyRange(t).take(s).filter(c);
		}, a[0] = l.tables.messages, a[1] = t, a[2] = u) : u = a[2];
		var d;
		a[3] !== l || a[4] !== t ? (d = [l, t], a[3] = l, a[4] = t, a[5] = d) : d = a[5];
		var m = o("ReQLSuspense").useFirst(u, d, i.id + ":29");
		return (m == null ? void 0 : m.messageId) === n;
	}
	function c(e) {
		return e.isAdminMessage === !1;
	}
	l.default = u;
}), 98);
