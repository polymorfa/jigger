__d("MAWFetchExternalIdUsingCache", [
	"FBLogger",
	"LSDatabaseSingleton",
	"MAWBridgeSendAndReceive",
	"MAWDbMsg",
	"WAStanzaUtils",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new Map();
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (e === "") return null;
			var t = s.get(e);
			if (t != null) return t;
			if (t = yield d(e), t != null) return p(e, t), t;
			try {
				var n = o("MAWDbMsg").toMsgId(e);
				if (n == null) return r("FBLogger")("messenger_web").warn("[MAWFetchProtocolMessageIdUsingCache] failed fetch external id, invalid msgId %s", e), null;
				var a = yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getProtocolMsgIdByMsgId", { msgId: n });
				return (a == null ? void 0 : a.externalId) == null ? (r("FBLogger")("messenger_web").warn("[MAWFetchProtocolMessageIdUsingCache] external id for msgId %s not found", e), null) : (p(e, a.externalId), a.externalId);
			} catch (e) {
				var i = r("getErrorSafe")(e);
				throw r("FBLogger")("messenger_web").catching(i).mustfix("[MAWFetchProtocolMessageIdUsingCache] getProtocolMsgIdByMsgId bridge call failed"), i;
			}
		}), c.apply(this, arguments);
	}
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton, r = yield n.tables.messages.index("messageId").get(t);
			return r != null ? o("WAStanzaUtils").toStanzaId(r.offlineThreadingId) : null;
		}), m.apply(this, arguments);
	}
	function p(e, t) {
		return e === "" ? !1 : (s.set(e, t), !0);
	}
	l.fetchExternalIdUsingCache = u;
}), 98);
