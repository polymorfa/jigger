__d("WAWebHandleStatusReceipt", [
	"WAJids",
	"WALogger",
	"WAWebAck",
	"WAWebBatchedStatusIdUtils",
	"WAWebDBCreateLidPnMappings",
	"WAWebInsertUsernameChangeSystemMsg",
	"WAWebMessageReceiptBatcher",
	"WAWebMsgKey",
	"WAWebOfflineHandler",
	"WAWebSetUsernameJob",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebUserPrefsKeys",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameTypes",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e, s;
	async function u(t) {
		var n, a = t.ack, i = t.ackString, l = t.externalIds, u = t.offline, c = t.participant, d = t.recipient, m = t.ts, p = l[0];
		if (p != null) {
			var _ = o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(p);
			if (!c) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["error: got status ack without participant"]))).sendLogs("handleStatusSimpleReceipt: failed");
				return;
			}
			var f = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), g = o("WAWebWidFactory").asUserWidOrThrow(c), h = o("WAWebUserPrefsMeUser").isMeAccount(g), y = t.participantPn;
			if (y != null && c.isLid()) {
				var C = o("WAWebWidFactory").asUserLidOrThrow(c), b = o("WAWebWidFactory").asUserWidOrThrow(y);
				o("WAWebDBCreateLidPnMappings").createLidPnMappings({
					mappings: [{
						lid: C,
						pn: b
					}],
					flushImmediately: !0,
					learningSource: "status-receipt"
				});
			}
			var v = t.participantUsername;
			if (v != null && c.isLid()) {
				var S = o("WAWebUsernameTypes").asMaybeUsername(v);
				if (S != null) {
					var R = [{
						userId: g,
						username: S
					}];
					(async function() {
						try {
							var e = await o("WAWebSetUsernameJob").setUsernamesJob(R);
							await o("WAWebInsertUsernameChangeSystemMsg").maybeInsertUsernameChangeSystemMsgs(R, e, "handleStatusSimpleReceipt");
						} catch (e) {
							o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["handleStatusSimpleReceipt: setUsernamesJob failed ", ""])), e instanceof Error ? e.message : String(e)).sendLogs("handleStatusSimpleReceipt-set-usernames-failed");
						}
					})();
				}
			}
			var L = ((n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS)) == null ? void 0 : n.readReceipts) === "none";
			if (!(!h && (L || i !== o("WAWebAck").ACK_STRING.READ))) {
				var E = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID), k = new (r("WAWebMsgKey"))({
					id: _,
					remote: E,
					fromMe: !h,
					participant: d != null ? d : f
				}), I = [k.toString()], T = u != null && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete(), D = Promise.resolve();
				return h ? D = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptPeerReceipt({
					ts: m,
					msgKeys: I,
					ack: a,
					isOffline: T,
					remote: E
				}) : D = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptOtherReceipt({
					ack: a,
					ts: m,
					receiverId: g,
					msgKeys: I
				}), T || o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches(), D;
			}
		}
	}
	l.handleStatusSimpleReceipt = u;
}), 98);
