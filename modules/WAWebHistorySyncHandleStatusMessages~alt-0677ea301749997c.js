__d("WAWebHistorySyncHandleStatusMessages", [
	"WAAckLevel",
	"WAJids",
	"WALogger",
	"WALongInt",
	"WATimeUtils",
	"WAWebApiHistorySyncNotification",
	"WAWebBackendJobs.flow",
	"WAWebDBReportingTokenUtils",
	"WAWebHandleMsgTypes.flow",
	"WAWebHandleSingleMsgWorkerCompatible",
	"WAWebHistorySyncLogUtils",
	"WAWebHistorySyncNotificationUtils",
	"WAWebLidStatusMigrationUtils",
	"WAWebMessageReceiptBatcher",
	"WAWebMessagingGatingUtils",
	"WAWebMsgKey",
	"WAWebMsgProcessingApiUtils",
	"WAWebReportingTokenConstants",
	"WAWebUserPrefsMeUser",
	"WAWebWid",
	"WAWebWidFactory",
	"err",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d;
	async function m(t) {
		var n = t.chunkDownloadFinishTimestamp, a = t.chunkInfo, i = t.historySyncDataAppliedMetric, l = t.historySyncDownloadMetric, m = t.proto;
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[history sync] start processing status"]))), l.mdBootstrapMessagesCount = m.statusV3Messages.length, o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
			chunkDownloadFinishTimestamp: n,
			historySyncDownloadMetric: l,
			isSuccess: !0,
			startTs: a.historySyncStepStartedTs
		}), m.statusV3Messages.sort(function(e, t) {
			var n = e.messageTimestamp, r = t.messageTimestamp;
			return o("WATimeUtils").castToUnixTime(parseInt(n, 10)) - o("WATimeUtils").castToUnixTime(parseInt(r, 10));
		});
		var p = [];
		await Promise.all(m.statusV3Messages.map(async function(e) {
			var t, n = null, a = [];
			if (e.key.fromMe === !0) n = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), a = e.userReceipt.filter(function(e) {
				return e.readTimestamp != null && e.readTimestamp !== 0;
			});
			else {
				var i = e.participant;
				if (i == null) {
					if (r("WAWebWid").isXWid("newsletter", e.key.remoteJid)) return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[history sync] skipping newsletter status without participant"]))), Promise.resolve();
					throw o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[history sync] missing participant in status message, remoteJid: ", ""])), e.key.remoteJid).sendLogs("hist-sync-missing-participant-in-status"), r("err")("HistorySync:handleStatusMessages: missing participant");
				}
				n = o("WAWebWidFactory").createWid(i);
			}
			var l = {
				type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS,
				externalId: r("nullthrows")(e.key.id, "HistorySync:handleStatusMessages: missing key.id"),
				ts: o("WATimeUtils").castToUnixTime(parseInt(e.messageTimestamp, 10)),
				edit: -1,
				isHsm: !1,
				count: null,
				chat: o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
				author: n,
				pushname: null,
				isDirect: !1
			};
			if (e.message == null) return o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[history sync] missing message"]))).sendLogs("history-sync-missing-status-msg"), Promise.resolve();
			var d = o("WAWebBackendJobs.flow").CiphertextType.Skmsg, m = await o("WAWebMsgProcessingApiUtils").parseMessage({
				info: l,
				ciphertextType: d,
				msgProtobuf: r("nullthrows")(e.message, "HistorySync:handleStatusMessages: missing message"),
				hsmInfo: null
			}), _ = m.renderableMsgs && m.renderableMsgs;
			if (!_ || _.length !== 1) return Promise.resolve();
			var f = _[0].id, g = _[0].author, h = babelHelpers.extends({}, _[0], {
				author: g && o("WAWebLidStatusMigrationUtils").matWidConvert(g),
				id: new (r("WAWebMsgKey"))({
					fromMe: f.fromMe,
					remote: f.remote,
					id: f.id,
					participant: f.participant == null ? void 0 : o("WAWebLidStatusMigrationUtils").matWidConvert(f.participant)
				})
			});
			if (e.participant === "0@s.whatsapp.net") return Promise.resolve();
			var y = e.ignore === !0;
			if (y && (h = babelHelpers.extends({}, h, {
				invis: !0,
				ack: o("WAAckLevel").ACK.READ
			})), await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
				chatId: h.id.remote,
				newMsg: h,
				handleSingleMsgOrigin: "historyStatusMessages"
			}), a.forEach(function(e) {
				var t, n = o("WALongInt").numberOrThrowIfTooLarge((t = e.readTimestamp) != null ? t : 0), r = o("WAWebWidFactory").createWid(e.userJid);
				o("WAWebMessageReceiptBatcher").receiptBatcher.acceptOtherReceipt({
					ts: n,
					ack: o("WAAckLevel").ACK.READ,
					receiverId: r,
					msgKeys: [h.id.toString()]
				});
			}), o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled() && ((t = e.reportingTokenInfo) == null ? void 0 : t.reportingTag) != null) {
				var C;
				h = babelHelpers.extends({}, h, { reportingTokenInfo: {
					reportingTag: new Uint8Array((C = e.reportingTokenInfo) == null ? void 0 : C.reportingTag),
					version: o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.HISTORY_SYNC
				} });
			}
			return p.push(h), !0;
		})), await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(a.msgKey, a.syncType, a.chunkOrder), o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
			historySyncDataAppliedMetric: i,
			startTs: a.historySyncStepStartedTs,
			isSuccess: !0
		}), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[history sync] storing Status complete, ", ""])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(a, m.statusV3Messages.length)), o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(p);
	}
	l.handleStatusMessages = m;
}), 98);
