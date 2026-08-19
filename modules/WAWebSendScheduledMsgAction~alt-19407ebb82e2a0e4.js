__d("WAWebSendScheduledMsgAction", [
	"WAJobOrchestratorTypes",
	"WALogger",
	"WAWebAttachMediaModel",
	"WAWebCommonMsgSubtypeTypes",
	"WAWebContactSystemMsg",
	"WAWebDBProcessMessage",
	"WAWebIsScheduledMessagesAvailableForChat",
	"WAWebLidMigrationFrontendUtils",
	"WAWebMessageSendPerfReporter",
	"WAWebMessageSendReporter",
	"WAWebMessageSendReporterFrontendDeps",
	"WAWebMsgInfoUtils",
	"WAWebMsgModel",
	"WAWebMsgType",
	"WAWebOrchestratorNonPersistedJob",
	"WAWebScheduledMsgConstants",
	"WAWebScheduledMsgLimitDialog.react",
	"WAWebScheduledMsgRevealKeyStore",
	"WAWebScheduledMsgStore",
	"WAWebSendMsgRecordAction",
	"WAWebSendTextMsgChatAction",
	"WAWebStateUtils",
	"WAWebViewMode.flow",
	"WAWebWamMsgUtils",
	"WAWebWidToJid",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p;
	async function _(t, n, a, i, l) {
		if (i === void 0 && (i = {}), l === void 0 && (l = !0), !o("WAWebIsScheduledMessagesAvailableForChat").isScheduledMessagesAvailableForChat(t)) throw r("err")("[scheduled_msg] Scheduled messages not available for this chat");
		var c = o("WAWebStateUtils").unproxy(t), d = await o("WAWebSendTextMsgChatAction").createTextMsgData(c, n, i);
		if (d != null) {
			if (await o("WAWebScheduledMsgStore").isChatAtScheduleLimit(o("WAWebWidToJid").widToChatJid(c.id))) {
				o("WAWebScheduledMsgLimitDialog.react").showScheduledMsgLimitReachedDialog();
				return;
			}
			var m = babelHelpers.extends({}, d, {
				isScheduledMsg: !0,
				scheduledTimestampS: a,
				viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE
			});
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[scheduled_msg] Scheduling message for chat ",
				" at ",
				""
			])), c.id.toLogString(), String(a));
			var p = null;
			try {
				var _;
				await o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(c, m, "addAndSendTextMsg");
				var f = new (o("WAWebMsgModel")).Msg(m), h = !!((_ = c.groupMetadata) != null && _.isLidAddressingMode), y = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(c.id, o("WAWebWamMsgUtils").msgIsLid(m, c.id, h));
				f.wamMessageSendReporter = new (o("WAWebMessageSendReporter")).MessageSendReporter(f, babelHelpers.extends({}, y, { frontendDeps: o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS })), f.wamMessageSendPerfReporter = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
					chatWid: f.to,
					mediaType: o("WAWebWamMsgUtils").getWamMediaType(f),
					messageType: o("WAWebWamMsgUtils").getWamMessageType(f)
				}), await o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", async function() {
					var e, t;
					(e = f.wamMessageSendPerfReporter) == null || e.startSavedStage(), await o("WAWebDBProcessMessage").storeMessages([m], c.id), (t = f.wamMessageSendPerfReporter) == null || t.postSavedStage();
					var n = await o("WAWebSendMsgRecordAction").sendMsgRecord(f);
					return p = n.ackErrorCode, n;
				}, { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }).waitUntilCompleted();
			} catch (e) {
				throw o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] Failed to send scheduled message"]))).catching(r("getErrorSafe")(e)).sendLogs("scheduled-msg-send-error"), e;
			}
			if (p === o("WAWebScheduledMsgConstants").SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE && (await o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(m.id.toString(), "FAILED"), o("WAWebScheduledMsgLimitDialog.react").showScheduledMsgLimitReachedDialog()), l) try {
				await g(c);
			} catch (e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] Failed to add scheduled system message"]))).catching(r("getErrorSafe")(e)).sendLogs("scheduled-msg-sys-error");
			}
		}
	}
	async function f(e, t, n, a, i) {
		if (a === void 0 && (a = {}), i === void 0 && (i = !0), !o("WAWebIsScheduledMessagesAvailableForChat").isScheduledMediaAvailableForChat(e)) throw r("err")("[scheduled_msg] Scheduled media not available for this chat");
		if (t.length !== 0) {
			var l = o("WAWebStateUtils").unproxy(e);
			if (await o("WAWebScheduledMsgStore").isChatAtScheduleLimit(o("WAWebWidToJid").widToChatJid(l.id))) {
				o("WAWebScheduledMsgLimitDialog.react").showScheduledMsgLimitReachedDialog();
				return;
			}
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"[scheduled_msg] Scheduling ",
				" media message(s) for chat ",
				" at ",
				""
			])), String(t.length), l.id.toLogString(), String(n));
			var s = l.composeQuotedMsg;
			l.composeQuotedMsg = null;
			var u = !1, p = [];
			for (var _ of t.entries()) {
				var f = _[0], h = _[1], y = h.media, C = {
					type: y.type,
					caption: y.caption,
					mentionedJidList: h.mentionedJidList,
					groupMentions: h.groupMentions,
					addEvenWhilePreparing: y.previewable && y.state === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING,
					quotedMsg: f === 0 ? s : void 0,
					isViewOnce: a.isViewOnce,
					threadId: a.threadId,
					isScheduledMsg: !0,
					scheduledTimestampS: n,
					viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE
				};
				try {
					var b = await y.sendToChat({
						chat: l,
						options: C
					});
					if (b.ackErrorCode === o("WAWebScheduledMsgConstants").SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE) {
						u = !0, b.msg != null && p.push(b.msg.id.toString());
						break;
					}
				} catch (e) {
					throw o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] Failed to send scheduled media message"]))).catching(r("getErrorSafe")(e)).sendLogs("scheduled-media-send-error"), e;
				}
			}
			if (u && (await Promise.all(p.map(function(e) {
				return o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(e, "FAILED");
			})), o("WAWebScheduledMsgLimitDialog.react").showScheduledMsgLimitReachedDialog()), i) try {
				await g(l);
			} catch (e) {
				o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] Failed to add scheduled system message"]))).catching(r("getErrorSafe")(e)).sendLogs("scheduled-media-sys-error");
			}
		}
	}
	async function g(e) {
		var t = o("WAWebContactSystemMsg").genNotificationMsg(e.id, {
			type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
			kind: o("WAWebMsgType").MsgKind.Notification,
			subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated,
			viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
		});
		try {
			await o("WAWebDBProcessMessage").storeMessages([t], e.id);
		} catch (e) {
			o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] persist ScheduledMessageCreated bubble -"]))).catching(r("getErrorSafe")(e)).sendLogs("scheduled-msg-sys-persist-error");
		}
		var n = new (o("WAWebMsgModel")).Msg(t);
		e.msgs.add(n);
	}
	l.sendScheduledTextMsgToChat = _, l.sendScheduledMediaMsgToChat = f;
}), 98);
