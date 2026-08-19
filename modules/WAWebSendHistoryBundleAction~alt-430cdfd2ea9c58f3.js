__d("WAWebSendHistoryBundleAction", [
	"WALogger",
	"WAWebFindChatAction",
	"WAWebGenerateGroupHistoryBundleMsgData",
	"WAWebGenerateGroupHistoryNoticeMsgData",
	"WAWebGroupHistoryGating",
	"WAWebGroupHistoryNoticeHandler",
	"WAWebGroupMemberAddingUserJourneyLogger",
	"WAWebJidToWid",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebSendMsgChatAction",
	"WAWebSendMsgResultAction"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	async function c(t, n, r, a, i) {
		var l = await o("WAWebGenerateGroupHistoryBundleMsgData").generateGroupHistoryBundleMsgData({
			chatId: t,
			historyReceivers: n,
			nonHistoryReceivers: r,
			selectedMessageCount: a,
			targetStartMessageTime: i
		}), u = await o("WAWebFindChatAction").findExistingChat(o("WAWebJidToWid").groupJidToWid(t), "messageHistorySend"), c = o("WAWebSendMsgChatAction").addAndSendMsgToChat(u, l), m = c[0], p = c[1], _ = await p, f = _.messageSendResult;
		if (f !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[group-history] Failed to send history bundle message"]))).sendLogs("group-history-bundle-send-failed");
			return;
		}
		var g = l.groupHistoryBundleMetadata;
		if (g == null) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[group-history] bundleMetadata is null"])));
			return;
		}
		await d(u, g);
	}
	async function d(e, t) {
		var n = await o("WAWebGenerateGroupHistoryNoticeMsgData").generateGroupHistoryNoticeMsgData({
			chat: e,
			groupHistoryBundleMetadata: t
		});
		o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.noticeMessageSent();
		var r = o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, n), a = r[0], i = r[1], l = await i, s = l.messageSendResult;
		if (s !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
			o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[group-history] Failed to send history notice message"]))).sendLogs("group-history-notice-send-failed");
			return;
		}
		await o("WAWebGroupHistoryNoticeHandler").markGroupHistoryNoticeSent(e.id, t.historyReceivers);
	}
	async function m(e) {
		if (o("WAWebMsgGetters").getType(e) === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE && o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderOrInternalTesterEnabled(e.id.remote)) {
			var t = o("WAWebMsgGetters").getGroupHistoryBundleMetadata(e);
			if (t != null) {
				var n = t.historyReceivers;
				if (n.length !== 0 && !await o("WAWebGroupHistoryNoticeHandler").areAllReceiversNoticeSent(e.id.remote, n)) {
					var r = await o("WAWebFindChatAction").findExistingChat(e.id.remote, "messageHistorySend");
					await d(r, t);
				}
			}
		}
	}
	l.sendHistoryBundleAction = c, l.completeGroupHistorySend = d, l.completeGroupHistorySendOnBundleResend = m;
}), 98);
