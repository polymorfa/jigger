__d("useMWPAriaLabelForMessageListGrid", [
	"fbt",
	"Int64Hooks",
	"MWPActor.react",
	"MWPGetThreadTitle",
	"ReQL",
	"ReQLSuspense",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e;
	function u(t) {
		var n = o("react-compiler-runtime").c(11), a = o("MWPActor.react").useActor(), l = (e || (e = r("useReStore")))(), u, c;
		n[0] !== l || n[1] !== t.threadKey || n[2] !== t.threadName ? (u = function() {
			return t.threadName != null ? o("ReQL").empty() : o("ReQL").leftJoin(o("ReQL").fromTableAscending(l.tables.participants, [
				"contactId",
				"nickname",
				"authorityLevel"
			]).getKeyRange(t.threadKey), o("ReQL").fromTableAscending(l.tables.contacts, [
				"name",
				"rank",
				"contactType",
				"firstName",
				"capabilities",
				"capabilities2"
			])).take(8);
		}, c = [
			l,
			t.threadKey,
			t.threadName
		], n[0] = l, n[1] = t.threadKey, n[2] = t.threadName, n[3] = u, n[4] = c) : (u = n[3], c = n[4]);
		var d = o("ReQLSuspense").useArray(u, c, i.id + ":32"), m, p;
		return n[5] !== a || n[6] !== d || n[7] !== t.threadName || n[8] !== t.threadType ? (m = function() {
			var e;
			if (t.threadName != null) return s._(
				/*BTDS*/
				"",
				[s._param("name of conversation", t.threadName)]
			).toString();
			var n = (e = o("MWPGetThreadTitle").computeThreadTitle(void 0, t.threadType, d, a)) != null ? e : "";
			return s._(
				/*BTDS*/
				"",
				[s._param("participant list", n)]
			).toString();
		}, p = [
			a,
			d,
			t.threadName,
			t.threadType
		], n[5] = a, n[6] = d, n[7] = t.threadName, n[8] = t.threadType, n[9] = m, n[10] = p) : (m = n[9], p = n[10]), o("Int64Hooks").useMemoInt64(m, p);
	}
	l.default = u;
}), 226);
