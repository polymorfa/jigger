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
	"react-compiler-runtime",
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
		var l = o("react-compiler-runtime").c(25), m = (e || (e = r("useReStore")))(), _ = o("MWPActor.react").useActor(), f;
		l[0] !== n ? (f = (s || (s = o("I64"))).to_string(n), l[0] = n, l[1] = f) : f = l[1];
		var g = f, h = r("MessengerWebUXLogger").useInteractionLogger(), y;
		l[2] !== m.tables.participants || l[3] !== n ? (y = function() {
			return o("ReQL").fromTableAscending(m.tables.participants, ["contactId"]).getKeyRange(n).map(p);
		}, l[2] = m.tables.participants, l[3] = n, l[4] = y) : y = l[4];
		var C;
		l[5] !== m || l[6] !== n ? (C = [m, n], l[5] = m, l[6] = n, l[7] = C) : C = l[7];
		var b = o("ReQLSuspense").useArray(y, C, i.id + ":109"), v;
		l[8] !== _ || l[9] !== t || l[10] !== m || l[11] !== h || l[12] !== n || l[13] !== a || l[14] !== b ? (v = function(i) {
			(s || (s = o("I64"))).ge(t, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE)) && o("LSMessagingThreadTypeUtil").isArmadilloSecure(a) && (d(n, i, _, b), r("promiseDone")(c(m, n, a, _).then(function(e) {
				return e ? o("MAWMiActOnActThreadReady").onActThreadReady(m.tables, n, "MAWSecureTypingState", function(e, t) {
					return h == null || h({
						eventName: "send_typing_indicators",
						threadKey: n,
						threadType: a
					}), o("MAWBridgeFireAndForget").fireAndForget("backend", "sendChatStateFromComposer", {
						chatJid: t,
						state: i ? o("WAChatState").TYPING : o("WAChatState").IDLE
					}), Promise.resolve();
				}) : Promise.resolve();
			})));
		}, l[8] = _, l[9] = t, l[10] = m, l[11] = h, l[12] = n, l[13] = a, l[14] = b, l[15] = v) : v = l[15];
		var S;
		return l[16] !== _ || l[17] !== t || l[18] !== m || l[19] !== h || l[20] !== n || l[21] !== g || l[22] !== a || l[23] !== b ? (S = [
			m,
			b,
			t,
			n,
			a,
			_,
			g,
			h
		], l[16] = _, l[17] = t, l[18] = m, l[19] = h, l[20] = n, l[21] = g, l[22] = a, l[23] = b, l[24] = S) : S = l[24], o("Int64Hooks").useCallbackInt64(v, S);
	}
	function p(e) {
		return o("WAJids").toMsgrUserJid((s || (s = o("I64"))).to_string(e.contactId));
	}
	l.useOnTypingStateChanged = m;
}), 98);
