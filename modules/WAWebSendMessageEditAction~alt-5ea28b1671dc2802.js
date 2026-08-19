__d("WAWebSendMessageEditAction", [
	"WAJobOrchestratorTypes",
	"WALogger",
	"WATimeUtils",
	"WAWebChatGetters",
	"WAWebCodeFormatMutator",
	"WAWebCoexEditDeleteAlertUtils",
	"WAWebCreateEncryptedMessageEditMsgData",
	"WAWebDBMessageDelete",
	"WAWebDBMsgUtils",
	"WAWebDBProcessMessage",
	"WAWebDBUpdateMessageTable",
	"WAWebErrorType",
	"WAWebFrontendMsgGetters",
	"WAWebLidMigrationUtils",
	"WAWebMessageEditUtils",
	"WAWebMessageSendPerfReporter",
	"WAWebMessageSendReporter",
	"WAWebMessageSendReporterFrontendDeps",
	"WAWebMessagingGatingUtils",
	"WAWebMsgActionCapability",
	"WAWebMsgDataFromModel",
	"WAWebMsgGetters",
	"WAWebMsgInfoUtils",
	"WAWebMsgKey",
	"WAWebMsgKeyUtils",
	"WAWebMsgModel",
	"WAWebMsgModelFromData",
	"WAWebMsgType",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterSendMsgAction",
	"WAWebOpenCoexEditDeleteAlertModal",
	"WAWebOrchestratorNonPersistedJob",
	"WAWebPaymentLink",
	"WAWebProcessAddonsJob",
	"WAWebSendMsgRecordAction",
	"WAWebSendMsgResultAction",
	"WAWebSerializeError",
	"WAWebStateUtils",
	"WAWebUserPrefsMultiDevice",
	"WAWebViewMode.flow",
	"WAWebWamMsgUtils",
	"WAWebWidFactory",
	"err",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	async function c(e, t, n) {
		o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
			parentTsInSeconds: e.t,
			editTsInSeconds: n,
			msgKey: e.id
		}) ? await y(t, o("WAWebErrorType").SendFailureErrorCode.NoError) : (await y(e, o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired), await y(t, o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired));
	}
	async function d(e, t) {
		t != null && await o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, { count: t });
	}
	function m(e) {
		var t = o("WAWebMsgGetters").getLatestEditMsgKey(e);
		return t == null || !o("WAWebMsgActionCapability").canEditText(e) ? Promise.resolve() : o("WAWebDBMsgUtils").getMsgByMsgKey(t).then(function(t) {
			if (t) return g(o("WAWebStateUtils").unproxy(e), o("WAWebMsgModelFromData").msgModelFromMsgData(t));
		}).catch(function(e) {});
	}
	function p(e, t, n) {
		var a, i, l;
		if (!o("WAWebMsgActionCapability").canEditText(e) && !o("WAWebMsgActionCapability").canEditCaption(e)) return Promise.reject(r("err")("Cannot edit message"));
		var s = _({
			msg: o("WAWebStateUtils").unproxy(e),
			options: n,
			text: t
		}), u = o("WAWebFrontendMsgGetters").getChat(e), c = (a = u == null || (i = u.id) == null ? void 0 : i.toString()) != null ? a : "", d = (u == null || (l = u.contact) == null ? void 0 : l.isHosted) === !0, m = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() === !0;
		return h(o("WAWebStateUtils").unproxy(e), s).then(function() {
			o("WAWebCoexEditDeleteAlertUtils").shouldShowCoexEditAlert(c, d) && (o("WAWebCoexEditDeleteAlertUtils").markCoexEditAlertShown(c), o("WAWebOpenCoexEditDeleteAlertModal").openCoexEditAlertModal(m));
		});
	}
	function _(e) {
		var t, n, a, i, l, s, u, c = e.msg, d = e.options, m = e.text, p = o("WAWebFrontendMsgGetters").getChat(c), _ = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(p, o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage), f = o("WAWebChatGetters").getIsGroup(p) ? o("WAWebWidFactory").asUserWidOrThrow(_) : void 0, g = new (r("WAWebMsgKey"))({
			id: r("WAWebMsgKey").newId_DEPRECATED(),
			remote: c.id.remote,
			fromMe: !0,
			participant: f
		}), h = d.groupMentions, y = d.linkPreview, C = d.mentionedJidList, b = {
			id: g,
			from: _,
			to: c.id.remote,
			type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
			kind: o("WAWebMsgType").MsgKind.Protocol,
			subtype: "message_edit",
			viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
			protocolMessageKey: c.id,
			local: !0,
			t: o("WATimeUtils").unixTime(),
			mentionedJidList: C,
			groupMentions: h,
			latestEditMsgKey: g,
			latestEditSenderTimestampMs: o("WATimeUtils").unixTimeMs(),
			editMsgType: c.type,
			errorCode: o("WAWebErrorType").SendFailureErrorCode.NoError,
			messageSecret: o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() ? c.messageSecret : null,
			aiProvenance: o("WAWebMsgGetters").getIsNewsletterMsg(c) && o("WAWebNewsletterGatingUtils").isChannelSGISenderEnabled() && (t = c.aiProvenance) != null ? t : void 0
		};
		switch (r("nullthrows")(o("WAWebMessageEditUtils").getMsgEditType(c.type))) {
			case o("WAWebMessageEditUtils").MsgEditType.TextEdit:
				b = babelHelpers.extends({}, b, {
					body: m.trim(),
					title: (n = y == null ? void 0 : y.title) != null ? n : void 0,
					matchedText: (a = y == null ? void 0 : y.matchedText) != null ? a : void 0,
					description: y == null ? void 0 : y.description,
					thumbnail: (i = y == null ? void 0 : y.thumbnail) != null ? i : void 0,
					richPreviewType: y == null ? void 0 : y.richPreviewType,
					doNotPlayInline: y == null ? void 0 : y.doNotPlayInline,
					inviteGrpType: y == null ? void 0 : y.inviteGrpType,
					thumbnailDirectPath: y == null ? void 0 : y.thumbnailDirectPath,
					thumbnailSha256: y == null ? void 0 : y.thumbnailSha256,
					thumbnailEncSha256: y == null ? void 0 : y.thumbnailEncSha256,
					thumbnailHeight: y == null ? void 0 : y.thumbnailHeight,
					thumbnailWidth: y == null ? void 0 : y.thumbnailWidth,
					mediaKey: (l = y == null ? void 0 : y.mediaKey) != null ? l : void 0,
					mediaKeyTimestamp: (s = y == null ? void 0 : y.mediaKeyTimestamp) != null ? s : void 0,
					paymentLinkMetadata: (u = o("WAWebPaymentLink").getPaymentLinkMessageMetadata(y, o("WAWebCodeFormatMutator").removeCodeBlocks(m))) != null ? u : void 0
				});
				break;
			case o("WAWebMessageEditUtils").MsgEditType.CaptionEdit:
				b = babelHelpers.extends({}, b, { caption: m.trim() });
				break;
			case o("WAWebMessageEditUtils").MsgEditType.EventEdit:
			case o("WAWebMessageEditUtils").MsgEditType.PollEdit:
			case o("WAWebMessageEditUtils").MsgEditType.RichResponseEdit:
			case o("WAWebMessageEditUtils").MsgEditType.LoadingMediaEdit: break;
		}
		return b;
	}
	async function f(t, n, r, a, i) {
		t.latestEditMsgKey && await o("WAWebDBMessageDelete").removeMessagesFromHistory([t.latestEditMsgKey.toString()]);
		try {
			i.startSavedStage(), await o("WAWebDBProcessMessage").storeMessages([r != null ? r : n], a), i.postSavedStage();
		} catch (t) {
			throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[message-edit][sendMessageEdit] store protocol msg failed"]))).verbose().sendLogs("storeSentMessageEdit failed"), t;
		}
		i.startRenderedStage(), await o("WAWebProcessAddonsJob").processEditProtocolMsgsJob([n]), i.postRenderedStage();
	}
	async function g(e, t) {
		var n = o("WAWebMsgGetters").getIsNewsletterMsg(e) ? await o("WAWebNewsletterSendMsgAction").sendNewsletterEditMsg(e, t) : await o("WAWebSendMsgRecordAction").sendMsgRecord(t), r = n.count, a = n.messageSendResult, i = n.t;
		if (a !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[message-edit][sendMsgEditRecord] send failed"]))).sendLogs("message-edit-send-fail"), e.isSendFailure = !0;
			return;
		}
		await c(e, t, i), await d(e, r), e.updateAck(t.ack), e.isSendFailure = t.isSendFailure === !0 || t.errorCode === o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired;
	}
	async function h(e, t) {
		var n, a = o("WAWebFrontendMsgGetters").getChat(e), i = !!((n = a.groupMetadata) != null && n.isLidAddressingMode), l = o("WAWebWamMsgUtils").msgIsLid(e, a.id, i), s = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(a.id, l);
		s.originalMessage = e;
		var c = e.messageSecret != null, d = t;
		if (c) try {
			d = await o("WAWebCreateEncryptedMessageEditMsgData").createEncryptedMessageEditMsgData(t, e);
		} catch (e) {
			o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[message-edit] Failed to create encrypted message edit ", ""])), r("WAWebSerializeError")(e)).sendLogs("encrypted-message-edit-failed");
		}
		var m = new (o("WAWebMsgModel")).Msg(d != null ? d : t);
		m.wamMessageSendReporter = new (o("WAWebMessageSendReporter")).MessageSendReporter(m, babelHelpers.extends({}, s, { frontendDeps: o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS })), m.wamMessageSendPerfReporter = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
			chatWid: m.to,
			mediaType: o("WAWebWamMsgUtils").getWamMediaType(m),
			messageType: o("WAWebWamMsgUtils").getWamMessageType(m)
		});
		var p = m.wamMessageSendPerfReporter;
		await o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessageEdit", async function(n) {
			var r = n.chatId, o = n.msgData;
			await f(o, t, d, r, p), await g(e, m);
		}, { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }).waitUntilCompleted({
			msgData: o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
			chatId: o("WAWebFrontendMsgGetters").getChat(e).id
		});
	}
	function y(e, t) {
		return e.errorCode = t, o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, { errorCode: t });
	}
	l.resendLatestEdit = m, l.sendMessageEdit = p, l.createEditMsgData = _, l.addAndSendMessageEdit = h;
}), 98);
