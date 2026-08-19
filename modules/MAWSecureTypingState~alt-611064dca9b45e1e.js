__d("MAWSecureTypingState", [
	"EBMinosInterfaceTypes",
	"I64",
	"Int64Hooks",
	"LSAuthorityLevel",
	"LSContactBlockedByViewerStatus",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"MAWBridgeFireAndForget",
	"MAWMiActOnActThreadReady",
	"MWPActor.react",
	"MessengerWebUXLogger",
	"ReQL",
	"ReQLSuspense",
	"WAChatState",
	"WAJids",
	"gkx",
	"promiseDone",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	async function c(e, t, n, a) {
		if (!(s || (s = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(15))) return Promise.resolve(!0);
		var i = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.participants, ["contactId"]).getKeyRange(t).filter(function(e) {
			return !(s || (s = o("I64"))).equal(e.contactId, a);
		}));
		if (i == null) return !1;
		var l = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.contacts).getKeyRange(i.contactId));
		return l == null ? !1 : (s || (s = o("I64"))).equal(l.blockedByViewerStatus, (u || (u = o("LSIntEnum"))).ofNumber(r("LSContactBlockedByViewerStatus").UNBLOCKED));
	}
	function d(e, t, n, a) {
		if (t && !(s || (s = o("I64"))).equal(e, n)) {
			var i = a.map(function(e) {
				return o("EBMinosInterfaceTypes").userJidToUserFbId(e);
			}).filter(Boolean);
			i.length > 0 && (o("MAWBridgeFireAndForget").fireAndForget("backend", "syncMailboxKeysForContactsInWorker", { userFbIds: i }), r("gkx")("22580") && o("MAWBridgeFireAndForget").fireAndForget("backend", "syncContactMMKsInWorker", { userFbIds: i }));
		}
	}
	function m(t, n, a) {
		var l = (e || (e = r("useReStore")))(), m = o("MWPActor.react").useActor(), p = (s || (s = o("I64"))).to_string(n), _ = r("MessengerWebUXLogger").useInteractionLogger(), f = o("ReQLSuspense").useArray(function() {
			return o("ReQL").fromTableAscending(l.tables.participants, ["contactId"]).getKeyRange(n).map(function(e) {
				return o("WAJids").toMsgrUserJid((s || (s = o("I64"))).to_string(e.contactId));
			});
		}, [l, n], i.id + ":109");
		return o("Int64Hooks").useCallbackInt64(function(e) {
			(s || (s = o("I64"))).ge(t, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE)) && o("LSMessagingThreadTypeUtil").isArmadilloSecure(a) && (d(n, e, m, f), r("promiseDone")(c(l, n, a, m).then(function(t) {
				return t ? o("MAWMiActOnActThreadReady").onActThreadReady(l.tables, n, "MAWSecureTypingState", function(t, r) {
					return _ == null || _({
						eventName: "send_typing_indicators",
						threadKey: n,
						threadType: a
					}), o("MAWBridgeFireAndForget").fireAndForget("backend", "sendChatStateFromComposer", {
						chatJid: r,
						state: e ? o("WAChatState").TYPING : o("WAChatState").IDLE
					}), Promise.resolve();
				}) : Promise.resolve();
			})));
		}, [
			l,
			f,
			t,
			n,
			a,
			m,
			p,
			_
		]);
	}
	l.useOnTypingStateChanged = m;
}), 98);
