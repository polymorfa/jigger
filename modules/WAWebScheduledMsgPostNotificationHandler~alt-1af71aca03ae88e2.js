__d("WAWebScheduledMsgPostNotificationHandler", [
	"WALogger",
	"WATimeUtils",
	"WAWebAck",
	"WAWebBackendApi",
	"WAWebExtractEphemeralFieldsFromScheduledMsg",
	"WAWebExtractImageFieldsFromScheduledMsg",
	"WAWebExtractLinkPreviewFieldsFromScheduledMsg",
	"WAWebExtractMentionFieldsFromScheduledMsg",
	"WAWebExtractQuoteFieldsFromScheduledMsg",
	"WAWebHandleSingleMsg",
	"WAWebLidMigrationDbUtils",
	"WAWebLidMigrationUtils",
	"WAWebMessageQueue",
	"WAWebMsgType",
	"WAWebOfflineHandler",
	"WAWebScheduledMessagesGatingUtils",
	"WAWebScheduledMsgDecryptInnerProto",
	"WAWebScheduledMsgExtractText",
	"WAWebScheduledMsgOutgoingMsgKey",
	"WAWebScheduledMsgRevealKeyStore",
	"WAWebSchemaMessage",
	"WAWebUserPrefsMeUser",
	"WAWebViewMode.flow",
	"WAWebWidFactory",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b;
	async function v(t, n) {
		if (o("WAWebScheduledMessagesGatingUtils").isScheduledMessagesSenderEnabled()) {
			var a = n.xwa2_notify_scheduled_message_post;
			if (a == null) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] missing post data in notification"]))).sendLogs("mex-scheduled-msg-post-missing-data");
				return;
			}
			var i = a.rkid, l = a.status;
			if (i == null) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] missing rkid in notification"]))).sendLogs("mex-scheduled-msg-post-missing-rkid");
				return;
			}
			if (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] received rkid, status=", ""])), l), l == null) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] missing status in notification"]))).sendLogs("mex-scheduled-msg-post-missing-status");
				return;
			}
			var p = !!t.offline && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete();
			await o("WAWebMessageQueue").onMessageQueue({
				chatWid: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
				isOffline: p,
				msgCategory: null,
				action: async function() {
					try {
						var e = await o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByRevealKeyId(i);
						if (e == null) return o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] no record found for rkid"]))), null;
						switch (l) {
							case "SUCCESS": {
								var t = e.revealKey.byteLength === 0 ? null : await o("WAWebScheduledMsgDecryptInnerProto").decryptAndDecodeRevealPayload(e.encPayload, e.encIv, e.revealKey);
								await S(e, t);
								break;
							}
							default: await R(e.msgId, l);
						}
					} catch (e) {
						o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] handler failed"]))).catching(r("getErrorSafe")(e)).sendLogs("mex-scheduled-msg-post-handler-failed");
					}
					return null;
				}
			});
		}
	}
	async function S(e, t) {
		var n = e.chatId, a = e.msgId;
		if (o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] SUCCESS for msgId"]))), t == null) {
			o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] no inner proto; keep reveal-key"])));
			return;
		}
		var i = o("WAWebExtractImageFieldsFromScheduledMsg").extractImageFieldsFromScheduledMsg(t), l = o("WAWebScheduledMsgExtractText").extractScheduledMsgText(t);
		if (i == null && l == null) {
			o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] no renderable content; keep reveal-key"])));
			return;
		}
		var s = o("WAWebWidFactory").createWid(n), u = s.isGroup(), c = u ? s : await L(s), d = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), m = o("WAWebScheduledMsgOutgoingMsgKey").buildScheduledMsgOutgoingMsgKey(a, c, d), b = e.scheduledTimestampS > 0 ? e.scheduledTimestampS : o("WATimeUtils").unixTime();
		await o("WAWebSchemaMessage").getMessageTable().remove(m.toString());
		try {
			await o("WAWebBackendApi").frontendSendAndReceive("removeScheduledMsgModelForReveal", { msgKey: m });
		} catch (e) {
			o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] drop in-memory model failed"]))).catching(r("getErrorSafe")(e)).sendLogs("mex-scheduled-msg-post-drop-model-failed");
		}
		var v = babelHelpers.extends({}, o("WAWebExtractEphemeralFieldsFromScheduledMsg").extractEphemeralFieldsFromScheduledMsg(t, d), o("WAWebExtractMentionFieldsFromScheduledMsg").extractMentionFieldsFromScheduledMsg(t), o("WAWebExtractLinkPreviewFieldsFromScheduledMsg").extractLinkPreviewFieldsFromScheduledMsg(t), o("WAWebExtractQuoteFieldsFromScheduledMsg").extractQuoteFieldsFromScheduledMsg(t, m)), S = babelHelpers.extends({
			id: m,
			from: d,
			to: c,
			author: u ? d : void 0,
			viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
		}, v, {
			t: b,
			ack: o("WAWebAck").ACK.RECEIVED,
			isNewMsg: !0,
			recvFresh: !0,
			invis: !1,
			isScheduledMsg: !1,
			scheduledTimestampS: o("WATimeUtils").castToUnixTime(b)
		}), R = i != null ? babelHelpers.extends({}, S, i) : babelHelpers.extends({}, S, {
			type: o("WAWebMsgType").MSG_TYPE.CHAT,
			kind: o("WAWebMsgType").MsgKind.Chat,
			body: l != null ? l : ""
		});
		try {
			await o("WAWebHandleSingleMsg").handleSingleMsgImpl({
				chatId: c,
				newMsg: R,
				handleSingleMsgOrigin: "scheduledMsgReveal"
			});
		} catch (e) {
			o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] handleSingleMsgImpl -, keep key"]))).catching(r("getErrorSafe")(e)).sendLogs("mex-scheduled-msg-post-insert-failed");
			return;
		}
		try {
			await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a);
		} catch (e) {
			o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] deleteRevealKey - post-insert"]))).catching(r("getErrorSafe")(e)).sendLogs("mex-scheduled-msg-post-delete-failed");
		}
		o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] posted message to chat"])));
	}
	async function R(e, t) {
		o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg][mex][post] FAILURE for msgId status=", ""])), t).sendLogs("mex-scheduled-msg-post-failure"), await o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(e, "FAILED");
	}
	async function L(e) {
		var t;
		if (!e.isUser()) return e;
		var n = o("WAWebLidMigrationUtils").toLid(e);
		return n == null ? e : (t = await o("WAWebLidMigrationDbUtils").getChatWidFromUserLid(n)) != null ? t : e;
	}
	l.mexHandleScheduledMsgPost = v;
}), 98);
