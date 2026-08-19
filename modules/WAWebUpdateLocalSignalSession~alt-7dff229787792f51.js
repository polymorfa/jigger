__d("WAWebUpdateLocalSignalSession", [
	"WALogger",
	"WAWebApiParticipantStore",
	"WAWebBroadcastSenderKeyManager",
	"WAWebChatCollection",
	"WAWebProcessRetryKeyBundle",
	"WAWebSignal",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsStatus",
	"WAWebWidFactory",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	async function c(t, n, a) {
		var i = n.from, l = n.keyBundle, c = n.offline, d = n.originalMsgId, m = n.participant, p = n.regId, _ = n.retryCount, f = m || i;
		if (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"updateLocalSignalSession: retryCount: ",
			", offline: ",
			", has keyBundle: ",
			""
		])), _, c.toString(), (!!l).toString()), t.isGroup()) {
			var g = o("WAWebChatCollection").ChatCollection.get(t);
			g && f && o("WAWebApiParticipantStore").markForgetSenderKey(g.id, [f]);
		}
		t.isStatus() && f && await r("WAWebUserPrefsStatus").markForgetStatusSenderKey([f]), t.isBroadcastList() && f && o("WAWebBroadcastSenderKeyManager").markForgetBroadcastSenderKey(o("WAWebWidFactory").createDeviceWidFromWidOrThrow(f), t.toString());
		var h = o("WAWebWidFactory").asUserWidOrThrow(f), y = await o("WAWebSignal").Session.getRemoteRegId(f);
		if (o("WAWebUserPrefsMeUser").isMeAccount(h) && y !== p) throw r("err")("updateLocalSignalSession: detect registration Id change remote: " + p + ", local: " + String(y) + " for peer device");
		var C = t.isUser() && !o("WAWebUserPrefsMeUser").isMeAccount(h), b = await o("WAWebProcessRetryKeyBundle").processKeyBundle({
			is1on1: C,
			keyBundle: l,
			offline: c,
			remoteRegId: p,
			requester: f,
			savedRegId: y,
			sessionScope: a
		});
		b || y != null && y !== p && (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
			"updateLocalSignalSession: delete session because reg does not match, saved: ",
			", received: ",
			""
		])), y, p), await o("WAWebSignal").Session.deleteRemoteSession(f));
		var v = 2;
		if (_ === v) return o("WAWebSignal").Session.saveSessionBaseKey(f, d);
		if (_ > v) {
			var S = await o("WAWebSignal").Session.hasSameBaseKey(f, d);
			if (S) return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["updateLocalSignalSession: delete local session due to same base key"]))), o("WAWebSignal").Session.deleteRemoteSession(f);
		}
	}
	l.updateLocalSignalSession = c;
}), 98);
