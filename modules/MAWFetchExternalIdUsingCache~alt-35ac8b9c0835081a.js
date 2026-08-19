__d("MAWFetchExternalIdUsingCache", [
	"FBLogger",
	"LSDatabaseSingleton",
	"MAWBridgeSendAndReceive",
	"MAWDbMsg",
	"WAStanzaUtils",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new Map();
	async function u(e) {
		if (e === "") return null;
		var t = s.get(e);
		if (t != null) return t;
		if (t = await c(e), t != null) return d(e, t), t;
		try {
			var n = o("MAWDbMsg").toMsgId(e);
			if (n == null) return r("FBLogger")("messenger_web").warn("[MAWFetchProtocolMessageIdUsingCache] failed fetch external id, invalid msgId %s", e), null;
			var a = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getProtocolMsgIdByMsgId", { msgId: n });
			return (a == null ? void 0 : a.externalId) == null ? (r("FBLogger")("messenger_web").warn("[MAWFetchProtocolMessageIdUsingCache] external id for msgId %s not found", e), null) : (d(e, a.externalId), a.externalId);
		} catch (e) {
			var i = r("getErrorSafe")(e);
			throw r("FBLogger")("messenger_web").catching(i).mustfix("[MAWFetchProtocolMessageIdUsingCache] getProtocolMsgIdByMsgId bridge call failed"), i;
		}
	}
	async function c(t) {
		var n = await (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton, r = await n.tables.messages.index("messageId").get(t);
		return r != null ? o("WAStanzaUtils").toStanzaId(r.offlineThreadingId) : null;
	}
	function d(e, t) {
		return e === "" ? !1 : (s.set(e, t), !0);
	}
	l.fetchExternalIdUsingCache = u;
}), 98);
