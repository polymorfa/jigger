__d("WAWebVoipHandleIncomingSignalingMessage", [
	"WALogger",
	"WAWebBackendApi",
	"WAWebHandleVoipEncRekey",
	"WAWebVoipGatingUtils",
	"WAWebVoipPeerTcToken",
	"WAWebVoipStackInterface",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c;
	async function d(t, n, r) {
		if (r === void 0 && (r = o("WAWebVoipGatingUtils").isCallingEnabled()), r) {
			var a = await o("WAWebVoipStackInterface").getVoipStackInterface();
			if (a) {
				var i, l = await o("WAWebVoipPeerTcToken").fetchPeerTcToken(t.peer_jid);
				await a.handleIncomingSignalingMessage(n, t.peer_platform, t.peer_app_version, t.e, t.t, (i = t.isContact) != null ? i : !1, t.peer_jid.toString(), l);
				return;
			}
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: web-only fallback, stack interface unavailable"])));
		} else o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: web-only fallback, voip stack unavailable"])));
		o("WAWebBackendApi").frontendFireAndForget("handleVoipWebIncomingSignalingMessageAction", {
			msg: t,
			voipNode: n
		});
	}
	function m(e, t) {
		return o("WAWebVoipGatingUtils").isCallingEnabled() ? (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[voip] handleVoipIncomingEncRekey enc_rekey from ", ""])), e.peer_jid.toString()), o("WAWebHandleVoipEncRekey").handleVoipEncRekey(e, t)) : (o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[voip] handleVoipIncomingEncRekey: disabled, dropped ", ""])), e.peer_jid.toString()), Promise.reject(r("err")("incoming enc rekey received but calling is not enabled")));
	}
	l.handleVoipIncomingSignalingMessage = d, l.handleVoipIncomingEncRekey = m;
}), 98);
