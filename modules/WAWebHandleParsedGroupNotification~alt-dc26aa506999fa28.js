__d("WAWebHandleParsedGroupNotification", [
	"WAWap",
	"WAWebCommsWapMd",
	"WAWebHandleGroupNotificationAction",
	"WAWebHandleGroupNotificationV2",
	"WAWebMessageQueue",
	"WAWebOfflineHandler"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = !!e.offline && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete();
		return o("WAWebHandleGroupNotificationV2").isGroupNotificationOptimizationEligible(e, t) && t ? o("WAWebHandleGroupNotificationV2").handleGroupNotificationV2(e, t) : o("WAWebMessageQueue").onMessageQueue({
			chatWid: e.chatId,
			isOffline: t,
			msgCategory: null,
			action: async function() {
				return await Promise.all(e.actions.map(function(n) {
					return o("WAWebHandleGroupNotificationAction").handleAction({
						action: n,
						isOffline: t,
						meta: e
					});
				})), o("WAWap").wap("ack", {
					to: o("WAWebCommsWapMd").GROUP_JID(e.chatId),
					id: o("WAWap").CUSTOM_STRING(e.externalId),
					class: "notification",
					type: "w:gp2",
					participant: e.author ? o("WAWebCommsWapMd").USER_JID(e.author) : o("WAWap").DROP_ATTR
				});
			}
		});
	}
	l.handleParsedGroupNotification = e;
}), 98);
