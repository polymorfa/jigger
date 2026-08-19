__d("useMAWCanThreadBeCutoverOnDemand", [
	"LSContactBitOffset",
	"LSMessagingThreadTypeUtil",
	"MAWThreadCutover",
	"ReQL",
	"ReQLSuspense",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		var n, a, l = o("react-compiler-runtime").c(12), s = (e || (e = r("useReStore")))(), u, c;
		l[0] !== s || l[1] !== t ? (u = function() {
			return t != null ? o("ReQL").fromTableAscending(s.tables.contacts, o("LSContactBitOffset").contactCapabilityFields).getKeyRange(t) : o("ReQL").empty();
		}, c = [s, t], l[0] = s, l[1] = t, l[2] = u, l[3] = c) : (u = l[2], c = l[3]);
		var d = o("ReQLSuspense").useFirst(u, c, i.id + ":34"), m;
		l[4] !== d ? (m = d != null && o("LSContactBitOffset").has(76, d), l[4] = d, l[5] = m) : m = l[5];
		var p = m, _, f;
		l[6] !== s || l[7] !== t ? (_ = function() {
			return t != null ? o("ReQL").fromTableAscending(s.tables.threads, ["threadType"]).getKeyRange(t) : o("ReQL").empty();
		}, f = [s, t], l[6] = s, l[7] = t, l[8] = _, l[9] = f) : (_ = l[8], f = l[9]);
		var g = o("ReQLSuspense").useFirst(_, f, i.id + ":53"), h;
		l[10] !== g ? (h = g ? o("LSMessagingThreadTypeUtil").isOpenOneToOne(g.threadType) : !1, l[10] = g, l[11] = h) : h = l[11];
		var y = h, C = ((n = (a = o("ReQLSuspense").useFirst(function() {
			return t != null ? o("ReQL").fromTableAscending(s.tables.messages_ranges_v2__generated, ["minMessageId"]).getKeyRange(t) : o("ReQL").empty();
		}, [s, t], i.id + ":67")) == null ? void 0 : a.minMessageId) != null ? n : "") === "", b = o("MAWThreadCutover").useIsCutoverOpenThread(t), v = o("MAWThreadCutover").useIsCutoverSecureThread(t), S = b || v;
		return p && y && !C && !S;
	}
	l.default = s;
}), 98);
