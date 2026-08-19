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
	"Promise",
	"ReQL",
	"ReQLSuspense",
	"WAChatState",
	"WAJids",
	"asyncToGeneratorRuntime",
	"gkx",
	"promiseDone",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c;
	function d(e, t, n, r) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a, i) {
			if (!(u || (u = o("I64"))).equal(a, (c || (c = o("LSIntEnum"))).ofNumber(15))) return (s || (s = n("Promise"))).resolve(!0);
			var l = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.participants, ["contactId"]).getKeyRange(t).filter(function(e) {
				return !(u || (u = o("I64"))).equal(e.contactId, i);
			}));
			if (l == null) return !1;
			var d = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.contacts).getKeyRange(l.contactId));
			return d == null ? !1 : (u || (u = o("I64"))).equal(d.blockedByViewerStatus, (c || (c = o("LSIntEnum"))).ofNumber(r("LSContactBlockedByViewerStatus").UNBLOCKED));
		}), m.apply(this, arguments);
	}
	function p(e, t, n, a) {
		if (t && !(u || (u = o("I64"))).equal(e, n)) {
			var i = a.map(function(e) {
				return o("EBMinosInterfaceTypes").userJidToUserFbId(e);
			}).filter(Boolean);
			i.length > 0 && (o("MAWBridgeFireAndForget").fireAndForget("backend", "syncMailboxKeysForContactsInWorker", { userFbIds: i }), r("gkx")("22580") && o("MAWBridgeFireAndForget").fireAndForget("backend", "syncContactMMKsInWorker", { userFbIds: i }));
		}
	}
	function _(t, a, l) {
		var m = (e || (e = r("useReStore")))(), _ = o("MWPActor.react").useActor(), f = (u || (u = o("I64"))).to_string(a), g = r("MessengerWebUXLogger").useInteractionLogger(), h = o("ReQLSuspense").useArray(function() {
			return o("ReQL").fromTableAscending(m.tables.participants, ["contactId"]).getKeyRange(a).map(function(e) {
				return o("WAJids").toMsgrUserJid((u || (u = o("I64"))).to_string(e.contactId));
			});
		}, [m, a], i.id + ":109");
		return o("Int64Hooks").useCallbackInt64(function(e) {
			(u || (u = o("I64"))).ge(t, (c || (c = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE)) && o("LSMessagingThreadTypeUtil").isArmadilloSecure(l) && (p(a, e, _, h), r("promiseDone")(d(m, a, l, _).then(function(t) {
				return t ? o("MAWMiActOnActThreadReady").onActThreadReady(m.tables, a, "MAWSecureTypingState", function(t, r) {
					return g == null || g({
						eventName: "send_typing_indicators",
						threadKey: a,
						threadType: l
					}), o("MAWBridgeFireAndForget").fireAndForget("backend", "sendChatStateFromComposer", {
						chatJid: r,
						state: e ? o("WAChatState").TYPING : o("WAChatState").IDLE
					}), (s || (s = n("Promise"))).resolve();
				}) : (s || (s = n("Promise"))).resolve();
			})));
		}, [
			m,
			h,
			t,
			a,
			l,
			_,
			f,
			g
		]);
	}
	l.useOnTypingStateChanged = _;
}), 98);
