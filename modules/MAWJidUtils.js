__d("MAWJidUtils", [
	"FBLogger",
	"I64",
	"LSIntEnum",
	"MAWDbMsg",
	"MAWJids",
	"WAGlobals",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t, n) {
		if (o("WAJids").isAuthorSystem(e) || t == null || n == null) {
			r("FBLogger")("messenger_web").warn("Failed to create protocolMsgId with externalId %s for a msg to edit", n);
			return;
		}
		return {
			author: e,
			chat: t,
			externalId: n
		};
	}
	function c(e) {
		var t;
		return u(e.author, e.threadJid, (t = e.externalId) != null ? t : e.editExternalId);
	}
	function d(e) {
		return o("WAJids").isAuthorMe(e) ? o("WAGlobals").getMyUserJid() : e;
	}
	function m(t, n) {
		var r = (e || (e = o("I64"))).to_string(t), a = (s || (s = o("LSIntEnum"))).unwrapIntEnum(n);
		switch (a) {
			case 15: return o("MAWJids").jidUtils.toUserJid(r);
			case 16: return o("WAJids").toGroupJid(r);
			default: return null;
		}
	}
	function p(e) {
		return g(e.threadJid, e.externalId);
	}
	function _(e) {
		return f(e.threadJid, e.externalId);
	}
	function f(e, t) {
		var n = o("MAWDbMsg").toMsgId(g(e, t));
		if (n == null) throw r("FBLogger")("messenger_e2ee_web").mustfixThrow("formatProtocolMsgIdFromExternalId: Failed to create protocolMsgId with externalId %s for a msg", t);
		return n;
	}
	function g(e, t) {
		return e + "." + t;
	}
	l.maybeToProtocolMsgId = u, l.toProtocolMsgId = c, l.getAuthorJid = d, l.LSJidtoChatJid = m, l.toProtocolMsgIdStringForMAWStorage = p, l.formatProtocolMsgIdFromMsg = _, l.formatProtocolMsgIdFromExternalId = f;
}), 98);
