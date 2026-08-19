__d("WACommsInit", [
	"WAComms",
	"WAGzip",
	"WAInitAndGetAuthKeyPair",
	"WALogger",
	"WAMockServerShell",
	"WASendPresenceStatusProtocol",
	"WAWaitForComms"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	async function c(t) {
		var n, r, a = t.fullCommsSync, i = t.getCommsConfig, l = t.oneQueue, c = t.regInfo, d = t.stanzaHandler, m = await o("WAInitAndGetAuthKeyPair").initAndGetAuthKeyPair(c), p = await i({ authKeyPair: m }), _ = (n = p.handlers) == null ? void 0 : n.onOptimisticConnectionChange, f = (r = p.handlers) == null ? void 0 : r.onConnectionChange, g = !1, h = function(n) {
			n === "in_handshake" ? g === !1 && (g = !0) : n === "connected" ? (a === !0 && (o("WAWaitForComms").unblockComms(), o("WASendPresenceStatusProtocol").sendPresenceStatusProtocol({ status: "available" }).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendPresenceStatusProtocol available failed with error ", ""])), t);
			})), l.newConnection(), g = !1) : n === "disconnected" && (a === !0 && o("WAWaitForComms").commsConnectionLost(), l.connectionDropped(), g = !1), f == null || f(n);
		}, y = function(t) {
			t === "connected" ? a === !1 && o("WASendPresenceStatusProtocol").sendPresenceStatusProtocol({ status: "available" }).catch(function(e) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["sendPresenceStatusProtocol available failed with error ", ""])), e);
			}) : t === "disconnected" && o("WASendPresenceStatusProtocol").sendPresenceStatusProtocol({ status: "unavailable" }).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["sendPresenceStatusProtocol unavailable failed with error ", ""])), e);
			}), _ == null || _(t);
		};
		p.handlers.onConnectionChange = h, p.handlers.onOptimisticConnectionChange = y, o("WAComms").startComms(d, p, o("WAGzip").gzipInflate, !o("WAMockServerShell").isMockServerMode), o("WAMockServerShell").isMockServerMode && o("WAMockServerShell").getMockServer != null && (o("WAWaitForComms").unblockComms(), l.newConnection());
	}
	l.initComms = c;
}), 98);
