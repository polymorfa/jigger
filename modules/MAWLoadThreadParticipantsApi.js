__d("MAWLoadThreadParticipantsApi", [
	"MAWBridge",
	"MAWDbParticipantTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MAWUserJidWrapper",
	"WAJids",
	"WALogger",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("MAWIndexedDb").makeMsgrTransactor({
		participants: o("MAWTransactionMode").READONLY,
		threads: o("MAWTransactionMode").READONLY
	}, "loadThreadParticipants_mawDb", function(e) {
		return (function(t) {
			var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(t)) : e.threads.get({ jid: t });
			return n.then(function(t) {
				var n = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(t, "MAWLoadThreadParticipantsApi.loadThreadParticipants");
				return n == null ? [] : o("MAWDbParticipantTxns").getParticipantsInThread(e, n.jid).then(function(e) {
					return e.map(function(e) {
						return e.userJid;
					});
				});
			});
		});
	});
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				var t = yield o("MAWBridge").getBridge().sendAndReceive("event", "getLSDBParticipants", { chatJids: [e] }, void 0, void 0, { toLastActiveClient: !0 }), n = t.get(e);
				return n == null || n.length === 0 ? [] : n.map(function(e) {
					return e.userJid;
				});
			} catch (e) {
				return o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["MAWLoadThreadParticipantsApi -- LSDB fallback bridge call failed -- ", ""])), r("getErrorSafe")(e)), [];
			}
		}), p.apply(this, arguments);
	}
	var _ = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield d(t);
			if (n.length > 0) return n;
			if (r("justknobx")._("2756")) return [];
			var a = o("WAJids").switchOnMsgrChatJidType(t, {
				group: function() {
					return null;
				},
				user: function(t) {
					return Array.from(new Set([t, o("MAWUserJidWrapper").getMyUserJid()]));
				}
			});
			if (a != null) return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["MAWLoadThreadParticipantsApi -- recovered 1:1 participants via thread-key derivation"]))), a;
			var i = yield m(t);
			return i.length > 0 ? (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["MAWLoadThreadParticipantsApi -- recovered group participants via LSDB fallback"]))), i) : (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["MAWLoadThreadParticipantsApi -- loadThreadParticipants -- no participants found in MAW DB or LSDB"]))), []);
		});
		return function(n) {
			return t.apply(this, arguments);
		};
	})();
	l.loadThreadParticipants = _;
}), 98);
