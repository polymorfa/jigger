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
	"react-compiler-runtime",
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
		var m = o("react-compiler-runtime").c(25), _ = (e || (e = r("useReStore")))(), g = o("MWPActor.react").useActor(), h;
		m[0] !== a ? (h = (u || (u = o("I64"))).to_string(a), m[0] = a, m[1] = h) : h = m[1];
		var y = h, C = r("MessengerWebUXLogger").useInteractionLogger(), b;
		m[2] !== _.tables.participants || m[3] !== a ? (b = function() {
			return o("ReQL").fromTableAscending(_.tables.participants, ["contactId"]).getKeyRange(a).map(f);
		}, m[2] = _.tables.participants, m[3] = a, m[4] = b) : b = m[4];
		var v;
		m[5] !== _ || m[6] !== a ? (v = [_, a], m[5] = _, m[6] = a, m[7] = v) : v = m[7];
		var S = o("ReQLSuspense").useArray(b, v, i.id + ":109"), R;
		m[8] !== g || m[9] !== t || m[10] !== _ || m[11] !== C || m[12] !== a || m[13] !== l || m[14] !== S ? (R = function(i) {
			(u || (u = o("I64"))).ge(t, (c || (c = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE)) && o("LSMessagingThreadTypeUtil").isArmadilloSecure(l) && (p(a, i, g, S), r("promiseDone")(d(_, a, l, g).then(function(e) {
				return e ? o("MAWMiActOnActThreadReady").onActThreadReady(_.tables, a, "MAWSecureTypingState", function(e, t) {
					return C == null || C({
						eventName: "send_typing_indicators",
						threadKey: a,
						threadType: l
					}), o("MAWBridgeFireAndForget").fireAndForget("backend", "sendChatStateFromComposer", {
						chatJid: t,
						state: i ? o("WAChatState").TYPING : o("WAChatState").IDLE
					}), (s || (s = n("Promise"))).resolve();
				}) : (s || (s = n("Promise"))).resolve();
			})));
		}, m[8] = g, m[9] = t, m[10] = _, m[11] = C, m[12] = a, m[13] = l, m[14] = S, m[15] = R) : R = m[15];
		var L;
		return m[16] !== g || m[17] !== t || m[18] !== _ || m[19] !== C || m[20] !== a || m[21] !== y || m[22] !== l || m[23] !== S ? (L = [
			_,
			S,
			t,
			a,
			l,
			g,
			y,
			C
		], m[16] = g, m[17] = t, m[18] = _, m[19] = C, m[20] = a, m[21] = y, m[22] = l, m[23] = S, m[24] = L) : L = m[24], o("Int64Hooks").useCallbackInt64(R, L);
	}
	function f(e) {
		return o("WAJids").toMsgrUserJid((u || (u = o("I64"))).to_string(e.contactId));
	}
	l.useOnTypingStateChanged = _;
}), 98);
