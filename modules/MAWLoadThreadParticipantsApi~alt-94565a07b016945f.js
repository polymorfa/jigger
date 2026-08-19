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
	async function m(t) {
		try {
			var n = await o("MAWBridge").getBridge().sendAndReceive("event", "getLSDBParticipants", { chatJids: [t] }, void 0, void 0, { toLastActiveClient: !0 }), a = n.get(t);
			return a == null || a.length === 0 ? [] : a.map(function(e) {
				return e.userJid;
			});
		} catch (t) {
			return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["MAWLoadThreadParticipantsApi -- LSDB fallback bridge call failed -- ", ""])), r("getErrorSafe")(t)), [];
		}
	}
	var p = async function(t) {
		var e = await d(t);
		if (e.length > 0) return e;
		if (r("justknobx")._("2756")) return [];
		var n = o("WAJids").switchOnMsgrChatJidType(t, {
			group: function() {
				return null;
			},
			user: function(t) {
				return Array.from(new Set([t, o("MAWUserJidWrapper").getMyUserJid()]));
			}
		});
		if (n != null) return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["MAWLoadThreadParticipantsApi -- recovered 1:1 participants via thread-key derivation"]))), n;
		var a = await m(t);
		return a.length > 0 ? (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["MAWLoadThreadParticipantsApi -- recovered group participants via LSDB fallback"]))), a) : (o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["MAWLoadThreadParticipantsApi -- loadThreadParticipants -- no participants found in MAW DB or LSDB"]))), []);
	};
	l.loadThreadParticipants = p;
}), 98);
