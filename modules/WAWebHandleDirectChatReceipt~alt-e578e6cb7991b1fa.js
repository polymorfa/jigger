__d("WAWebHandleDirectChatReceipt", [
	"WAJids",
	"WALogger",
	"WAWebAck",
	"WAWebHandleMsgReceiptCommon",
	"WAWebHandleMsgReceiptUtils",
	"WAWebMaibaWASSMigration",
	"WAWebMessageReceiptBatcher",
	"WAWebMsgKey",
	"WAWebOfflineHandler",
	"WAWebSimpleSignalPNToFBIDMigration",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebUserPrefsKeys",
	"WAWebUserPrefsMeUser",
	"WAWebWid",
	"WAWebWidFactory",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	async function c(t) {
		var n = t.ackString, a = t.biz, i = t.externalIds, l = t.from, c = t.offline, d = t.recipient, m = t.ts, p = t.ack, _ = n === o("WAWebAck").ACK_STRING.SENDER, f = !_ && o("WAWebUserPrefsMeUser").isMeAccount(l), g;
		if (f || _) {
			if (!d) {
				if (!o("WAWebUserPrefsMeUser").isMeAccount(l)) throw r("err")("handleChatSimpleReceipt: invalid sender/peer receipt without recipient");
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[handleChatSimpleReceipt] skip self receipt: no recipient"]))).sendLogs("handleChatSimpleReceipt: skip self receipt without recipient", { sampling: .01 });
				return;
			}
			g = d;
		} else {
			var h;
			g = o("WAWebWidFactory").asUserWidOrThrow(l);
			var y = ((h = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS)) == null ? void 0 : h.readReceipts) === "none";
			y && (p === o("WAWebAck").ACK.READ || p === o("WAWebAck").ACK.PLAYED) && (p = o("WAWebAck").ACK.RECEIVED);
		}
		var C = o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidThread(g);
		C != null && (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
			"handleChatSimpleReceipt: forwarding ",
			" to ",
			""
		])), g.toLogString(), C.toLogString()), g = o("WAWebWidFactory").asUserWidOrThrow(C));
		var b = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(g);
		b != null && (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"[BIZAI] handleChatSimpleReceipt: forwarding ",
			" to ",
			""
		])), g.toLogString(), b.toLogString()), g = o("WAWebWidFactory").asUserWidOrThrow(b));
		var v;
		g != null && r("WAWebWid").isWid(g) && g === o("WAWebWidFactory").createWid(o("WAJids").PSA_JID) && (v = o("WAWebWidFactory").createWid(o("WAJids").PSA_JID));
		var S = i.map(function(e) {
			return new (r("WAWebMsgKey"))({
				id: e,
				remote: g,
				fromMe: !f,
				participant: v
			});
		});
		f && p === o("WAWebAck").ACK.PLAYED && o("WAWebHandleMsgReceiptCommon").handleViewOnceOpenedIfNecessary(S);
		var R = S.map(function(e) {
			return e.toString();
		});
		c != null && o("WAWebOfflineHandler").OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
		var L = c != null && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete(), E = Promise.resolve();
		return f ? d != null && o("WAWebHandleMsgReceiptUtils").isReadOrPlayedReceipt(n) && i.length > 0 && (E = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptPeerReceipt({
			ack: p,
			ts: m,
			msgKeys: R,
			isOffline: L,
			remote: g
		})) : E = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptOtherReceipt({
			ack: p,
			ts: m,
			receiverId: l,
			msgKeys: R,
			privacyMode: a,
			isSender: _
		}), L || o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches(), E;
	}
	l.handleChatSimpleReceipt = c;
}), 98);
