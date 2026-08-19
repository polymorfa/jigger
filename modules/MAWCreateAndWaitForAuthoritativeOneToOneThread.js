__d("MAWCreateAndWaitForAuthoritativeOneToOneThread", [
	"LSIntEnum",
	"LSResult",
	"MAWCreateOneToOneThread",
	"MAWJids",
	"MAWMiActOnMiThreadExistsForJidDeferred__DO_NOT_USE",
	"MWV2OnAuthoritativeThreadInsert",
	"Promise",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, a, l, u) {
		r("promiseDone")(o("MAWCreateOneToOneThread").call(t, a, void 0, l).then(function(a) {
			return t.runInTransaction(function(i) {
				return r("MAWMiActOnMiThreadExistsForJidDeferred__DO_NOT_USE")(i, a.jid, l, function(i, l) {
					return l != null && (a.isCreated ? o("MWV2OnAuthoritativeThreadInsert").onAuthoritativeThreadInsert(r("LSResult")(l), t, function(e) {
						return u(e.threadKey, e.clientThreadKey, e.threadType);
					}) : u(l, o("MAWJids").convertChatJidToIntJid(a.jid), (s || (s = o("LSIntEnum"))).ofNumber(15))), (e || (e = n("Promise"))).resolve();
				});
			}, "readwrite", void 0, void 0, i.id + ":43");
		}));
	}
	l.default = u;
}), 98);
