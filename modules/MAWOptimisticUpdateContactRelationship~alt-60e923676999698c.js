__d("MAWOptimisticUpdateContactRelationship", [
	"I64",
	"LSAddMessengerContactStoredProcedure",
	"LSFactory",
	"LSMessagingThreadTypeUtil",
	"ReQL",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n, a) {
		o("LSMessagingThreadTypeUtil").isOneToOne(t.threadType) && r("promiseDone")(n.runInTransaction(async function(i) {
			var l, s = (l = await o("ReQL").firstAsync(o("ReQL").mergeJoin(o("ReQL").fromTableAscending(n.tables.participants).getKeyRange(t.threadKey), o("ReQL").fromTableAscending(n.tables.contacts)).filter(function(t) {
				var n = t[0], r = t[1];
				return !(e || (e = o("I64"))).equal(r.id, a);
			}))) != null ? l : [void 0, void 0], u = s[0], c = s[1];
			if (c != null) {
				var d = babelHelpers.extends({}, c, { contactViewerRelationship: (e || (e = o("I64"))).of_string("2") });
				await i.contacts.upsert([c.id], d), o("LSMessagingThreadTypeUtil").isArmadilloSecure(t.threadType) && await r("LSAddMessengerContactStoredProcedure")(r("LSFactory")(i), { contactId: c.id });
			}
		}, "readwrite", void 0, void 0, i.id + ":39"));
	}
	l.call = s;
}), 98);
