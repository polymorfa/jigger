__d("WAWebVoipBackendCallLogTargetResolverWorker", [
	"WALogger",
	"WAWebLid1X1MigrationGating",
	"WAWebLidMigrationUtils",
	"WAWebMessageProcessUtils",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	async function u(t) {
		var n = t.callCreatorWid, r = t.callId, a = t.groupJid, i = await c(o("WAWebWidFactory").asUserWidOrThrow(n));
		if (i == null) return null;
		var l = o("WAWebUserPrefsMeUser").isMeAccount(i), s, u;
		if (a != null) s = a, u = i;
		else if (!l) s = i;
		else return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip:sw] outgoing/self call_log unsupported in SW; skip"]))), null;
		return {
			msgKeyId: r,
			fromMe: l,
			callCreatorUserWid: i,
			chatId: s,
			participant: u
		};
	}
	async function c(e) {
		var t = !e.isLid() && o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated(), n = e.isLid() || t;
		if (!n) return e;
		var r = o("WAWebLidMigrationUtils").toUserLid(e);
		if (r == null) return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[voip:sw] LID resolve - for callDest; skip placeholder"]))), null;
		var a = await o("WAWebMessageProcessUtils").selectChatForOneOnOneMessage({ lid: r });
		return o("WAWebWidFactory").asUserWidOrThrow(a.chatId);
	}
	l.getCallLogTargetDetailsWorker = u;
}), 98);
