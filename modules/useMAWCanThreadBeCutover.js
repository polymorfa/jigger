__d("useMAWCanThreadBeCutover", [
	"LSContactBitOffset",
	"ReQL",
	"ReQLSuspense",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		var n = o("react-compiler-runtime").c(9), a = (e || (e = r("useReStore")))(), l;
		n[0] !== a.tables.contacts || n[1] !== a.tables.participants || n[2] !== t ? (l = function() {
			return o("ReQL").leftJoin(o("ReQL").fromTableAscending(a.tables.participants, []).getKeyRange(t), o("ReQL").fromTableAscending(a.tables.contacts, o("LSContactBitOffset").contactCapabilityFields));
		}, n[0] = a.tables.contacts, n[1] = a.tables.participants, n[2] = t, n[3] = l) : l = n[3];
		var s;
		n[4] !== a || n[5] !== t ? (s = [a, t], n[4] = a, n[5] = t, n[6] = s) : s = n[6];
		var c = o("ReQLSuspense").useArray(l, s, i.id + ":27"), d;
		return n[7] !== c ? (d = c.every(u), n[7] = c, n[8] = d) : d = n[8], d;
	}
	function u(e) {
		var t = e[1];
		return t != null && o("LSContactBitOffset").has(75, t) === !0;
	}
	l.default = s;
}), 98);
