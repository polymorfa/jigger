__d("useMAWMaybeInsertDualThreadCutoverAdminMessage", [
	"I64",
	"MAWAckLevel",
	"MAWBridgeNewMsgHandler",
	"MAWLocalizationType",
	"MAWMiActOnActThreadReady",
	"MAWMsgType",
	"MpsToBridgeMessageId",
	"MpsTypes",
	"ReQL",
	"ReQLSuspense",
	"WATimeUtils",
	"justknobx",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"useMWGetOtherUserContact",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = (s || (s = o("react"))).useEffect;
	function d(e) {
		return e.showOpenMessageHistory === !1;
	}
	function m(e, t, n, r, a) {
		var l = e + "DUALCUTOVER", s = o("MpsTypes").toMessageId(l), c = o("MpsTypes").toThreadId(l), d = o("WATimeUtils").castToMillisTime((u || (u = o("I64"))).to_float(t.timestampMs)), m = {
			ack: o("MAWAckLevel").ACK.received,
			adminContent: n != null ? [n] : [],
			adminType: r ? o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_SELF_THREAD : n != null ? o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_WITH_OTHER_USER_NAME : o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_OTHER_USER_NAME_UNKNOWN,
			adminVersion: 1,
			chatJid: e,
			externalId: l,
			forwardingScore: 0,
			isAdminMessage: !0,
			isAuthorMe: !1,
			isForwarded: !1,
			msgId: o("MpsToBridgeMessageId").mpsToBridgeMsgId(c, s),
			sender: "",
			sortOrderMs: d,
			ts: o("WATimeUtils").castToUnixTime(d),
			type_: o("MAWMsgType").MSG_TYPE.ADMIN
		};
		return a.runInTransaction(function(e) {
			return o("MAWBridgeNewMsgHandler").call(e, m);
		}, "readwrite", void 0, void 0, i.id + ":74");
	}
	function p(t, n) {
		var a = o("react-compiler-runtime").c(22), l = (e || (e = r("useReStore")))(), s;
		a[0] !== l.tables.mi_act_mapping_table || a[1] !== t ? (s = function() {
			return o("ReQL").fromTableAscending(l.tables.mi_act_mapping_table).getKeyRange(t);
		}, a[0] = l.tables.mi_act_mapping_table, a[1] = t, a[2] = s) : s = a[2];
		var p;
		a[3] !== l || a[4] !== t ? (p = [t, l], a[3] = l, a[4] = t, a[5] = p) : p = a[5];
		var _ = o("ReQLSuspense").useFirst(s, p, i.id + ":85"), f = _ == null ? void 0 : _.jid, g = _ == null ? void 0 : _.serverThreadKey, h;
		a[6] !== l.tables.cutover_threads || a[7] !== f ? (h = function() {
			return f != null ? o("ReQL").fromTableAscending(l.tables.cutover_threads).getKeyRange(f).filter(d) : o("ReQL").empty();
		}, a[6] = l.tables.cutover_threads, a[7] = f, a[8] = h) : h = a[8];
		var y;
		a[9] !== l || a[10] !== f ? (y = [l, f], a[9] = l, a[10] = f, a[11] = y) : y = a[11];
		var C = o("ReQLSuspense").useFirst(h, y, i.id + ":94"), b;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (b = ["id"], a[12] = b) : b = a[12];
		var v = r("useMWGetOtherUserContact")(t, n, b), S = v == null, R;
		a[13] !== v ? (R = (v == null ? void 0 : v.id) != null ? (u || (u = o("I64"))).to_string(v.id) : null, a[13] = v, a[14] = R) : R = a[14];
		var L = R, E, k;
		a[15] !== l || a[16] !== C || a[17] !== S || a[18] !== L || a[19] !== g ? (E = function() {
			!C || g == null || !r("justknobx")._("1446") || r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(l.tables, g, "useMAWMaybeInsertDualThreadCutoverAdminMessage", function(e, t) {
				return m(t, C, L, S, l);
			}));
		}, k = [
			l,
			C,
			S,
			L,
			g
		], a[15] = l, a[16] = C, a[17] = S, a[18] = L, a[19] = g, a[20] = E, a[21] = k) : (E = a[20], k = a[21]), c(E, k);
	}
	l.default = p;
}), 98);
