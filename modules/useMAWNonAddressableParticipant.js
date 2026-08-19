__d("useMAWNonAddressableParticipant", [
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSWhatsAppConnectStatus",
	"MWPActor.react",
	"ReQL",
	"ReQLSuspense",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(t) {
		var n = o("react-compiler-runtime").c(9), a = (u || (u = r("useReStore")))(), l = o("MWPActor.react").useActor(), c;
		n[0] !== l || n[1] !== a.tables.contacts || n[2] !== a.tables.participants || n[3] !== t ? (c = function() {
			return o("ReQL").mergeJoin(o("ReQL").fromTableAscending(a.tables.participants, []).getKeyRange(t), o("ReQL").fromTableAscending(a.tables.contacts, [
				"waConnectStatus",
				"authorityLevel",
				"id",
				"name",
				"firstName"
			])).filter(function(t) {
				var n = t[1];
				return (e || (e = o("I64"))).equal(n.waConnectStatus, (s || (s = o("LSIntEnum"))).ofNumber(r("LSWhatsAppConnectStatus").WHATSAPP_NOT_ADDRESSABLE)) && (e || (e = o("I64"))).ge(n.authorityLevel, (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE_PENDING_REPLACEMENT)) ? !(e || (e = o("I64"))).equal(n.id, l) : !1;
			}).map(d);
		}, n[0] = l, n[1] = a.tables.contacts, n[2] = a.tables.participants, n[3] = t, n[4] = c) : c = n[4];
		var m;
		n[5] !== l || n[6] !== a || n[7] !== t ? (m = [
			a,
			t,
			l
		], n[5] = l, n[6] = a, n[7] = t, n[8] = m) : m = n[8];
		var p = o("ReQLSuspense").useFirst(c, m, i.id + ":36");
		return p;
	}
	function d(e) {
		var t = e[1];
		return t;
	}
	l.default = c;
}), 98);
