__d("WAWebHandleMexNotification", [
	"WADeprecatedWapParser",
	"WALogger",
	"WAParsableWapNode",
	"WAWap",
	"WAWebHandleBrigadingUpdateNotification",
	"WAWebMexCommunityOwnerUpdateNotificationHandler",
	"WAWebMexGroupPropertyUpdateNotificationHandler",
	"WAWebMexIntegrityChallengeNotificationHandler",
	"WAWebMexLidChangeNotificationHandler",
	"WAWebMexLimitSharingUpdateHandler",
	"WAWebMexNewsletterAIContentNotificationHandler",
	"WAWebMexNewsletterAdminInviteRevokeNotificationHandler",
	"WAWebMexNewsletterAdminNotificationHandler",
	"WAWebMexNewsletterAdminProfileUpdateNotificationHandler",
	"WAWebMexNewsletterJoinHandler",
	"WAWebMexNewsletterLeaveHandler",
	"WAWebMexNewsletterMetadataUpdateNotificationHandler",
	"WAWebMexNewsletterMilestoneNotificationHandler",
	"WAWebMexNewsletterOwnerNotificationHandler",
	"WAWebMexNewsletterPaidPartnershipNotificationHandler",
	"WAWebMexNewsletterQuestionResponseBlockedNotificationHandler",
	"WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler",
	"WAWebMexNewsletterRoleChangeNotificationHandler",
	"WAWebMexNewsletterStateChangeHandler",
	"WAWebMexNewsletterUserSettingChangeHandler",
	"WAWebMexNewsletterWamoSubStatusChangeNotificationHandler",
	"WAWebMexReachoutTimelockNotificationHandler",
	"WAWebMexRelayEnvironment",
	"WAWebMexTextStatusUpdateNotificationHandler",
	"WAWebMexUsernameAccountSyncNotificationHandler",
	"WAWebMexUsernameUpdateNotificationHandler",
	"WAWebNewChatMessageCappingNotificationHandler",
	"WAWebScheduledMsgPostNotificationHandler",
	"WAWebScheduledMsgRevealNotificationHandler",
	"WAWebSharableEventNotificationHandler",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = new Set([
		"NotificationLinkedProfilesUpdatesSideSub",
		"NotificationAgeCollection",
		"NotificationLinkedProfilesUpdates"
	]), d = new Set([
		"UsernameSetNotification",
		"UsernameDeleteNotification",
		"UsernameUpdateNotification",
		"AccountSyncUsernameNotification"
	]), m = "mexNotificationParser", p = new (r("WADeprecatedWapParser"))(m, function(e) {
		e.assertTag("notification"), e.assertAttr("type", "mex");
		var t = e.child("update"), n = e.attrString("id"), r = e.attrWapJid("from"), a = e.maybeAttrString("offline"), i = t.attrString("op_name"), l = t.contentString(), s;
		try {
			s = JSON.parse(l);
		} catch (e) {
			throw new (o("WAParsableWapNode")).XmppParsingFailure(m, "JSON parsing error: " + String(e));
		}
		return {
			stanzaId: n,
			from: r,
			offline: a,
			OperationName: i,
			mexResponse: s
		};
	});
	async function _(t) {
		var n = p.parseOrThrow(t);
		try {
			var a = await f(n);
			return a;
		} catch (t) {
			var i = n.OperationName;
			if (d.has(i) && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[mex][username] notification handling failed op=", ""])), i).catching(r("getErrorSafe")(t)).tags("mex", "notification", "username").sendLogs("mex-username-notification-failed-" + i), t instanceof o("WAParsableWapNode").XmppParsingFailure) throw t;
			if (t instanceof g) if (c.has(t.operationName)) o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[mex] handleMexNotification: ", " unsupported, nack"])), t.operationName).tags("mex", "notification");
			else throw o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[mex] handleMexNotification: ", " unknown op, nack"])), t.operationName).tags("mex", "notification").sendLogs("mex-notification-error-" + t.operationName, { sampling: .01 }), t;
			throw new (o("WAParsableWapNode")).XmppParsingFailure(m, "unexpected error: " + String(t));
		}
	}
	function f(e) {
		return e.OperationName === "MexNotificationEvent" ? h(e, C) : e.OperationName === "NotificationNewsletterUserSettingChange" ? h(e, o("WAWebMexNewsletterUserSettingChangeHandler").mexHandleNewsletterUserSettingChange) : e.OperationName === "NotificationNewsletterJoin" ? h(e, o("WAWebMexNewsletterJoinHandler").mexHandleNewsletterJoin) : e.OperationName === "NotificationNewsletterLeave" ? h(e, o("WAWebMexNewsletterLeaveHandler").mexHandleNewsletterLeave) : e.OperationName === "NotificationNewsletterStateChange" ? h(e, o("WAWebMexNewsletterStateChangeHandler").mexHandleNewsletterStateChange) : e.OperationName === "NotificationNewsletterAdminProfileUpdate" ? h(e, o("WAWebMexNewsletterAdminProfileUpdateNotificationHandler").mexHandleNewsletterAdminProfileUpdateNotification) : e.OperationName === "NotificationNewsletterAdminMetadataUpdate" ? h(e, o("WAWebMexNewsletterAdminNotificationHandler").mexHandleNewsletterAdminNotification) : e.OperationName === "NotificationNewsletterOwnerUpdate" ? h(e, o("WAWebMexNewsletterOwnerNotificationHandler").mexHandleNewsletterOwnerNotification) : e.OperationName === "NotificationNewsletterUpdate" ? h(e, o("WAWebMexNewsletterMetadataUpdateNotificationHandler").mexHandleNewsletterMetadataUpdate) : e.OperationName === "NotificationNewsletterAdminPromote" || e.OperationName === "NotificationNewsletterAdminDemote" ? h(e, o("WAWebMexNewsletterRoleChangeNotificationHandler").mexHandleNewsletterRoleChange) : e.OperationName === "NotificationNewsletterAdminInviteRevoke" ? h(e, o("WAWebMexNewsletterAdminInviteRevokeNotificationHandler").handleNewsletterAdminInviteRevoke) : e.OperationName === "NotificationNewsletterWamoSubStatusChange" ? h(e, o("WAWebMexNewsletterWamoSubStatusChangeNotificationHandler").mexHandleNewsletterWamoSubStatusChange) : e.OperationName === "NewsletterResponseStateUpdate" ? h(e, o("WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler").mexHandleNewsletterQuestionsResponseStateChange) : e.OperationName === "NotificationNewsletterBlockUser" ? h(e, o("WAWebMexNewsletterQuestionResponseBlockedNotificationHandler").mexHandleNewsletterQuestionsResponseBlocked) : e.OperationName === "NotificationNewsletterPaidPartnershipUpdate" ? h(e, o("WAWebMexNewsletterPaidPartnershipNotificationHandler").mexHandleNewsletterPaidPartnership) : e.OperationName === "NotificationNewsletterAIContentUpdate" ? h(e, o("WAWebMexNewsletterAIContentNotificationHandler").mexHandleNewsletterAIContent) : e.OperationName === "NotificationNewsletterMilestone" ? h(e, o("WAWebMexNewsletterMilestoneNotificationHandler").mexHandleNewsletterMilestone) : e.OperationName === "TextStatusUpdateNotification" ? h(e, o("WAWebMexTextStatusUpdateNotificationHandler").mexHandleTextStatusUpdate) : e.OperationName === "TextStatusUpdateNotificationSideSub" ? h(e, o("WAWebMexTextStatusUpdateNotificationHandler").mexHandleTextStatusUpdateSideSub) : e.OperationName === "NotificationGroupPropertyUpdate" || e.OperationName === "NotificationGroupHiddenPropertyUpdate" || e.OperationName === "NotificationGroupSafetyCheckPropertyUpdate" || e.OperationName === "NotificationGroupMemberLinkPropertyUpdate" || e.OperationName === "NotificationGroupMemberShareGroupHistoryModePropertyUpdate" || e.OperationName === "NotificationGroupAppealStatusUpdate" ? h(e, o("WAWebMexGroupPropertyUpdateNotificationHandler").mexHandleGroupPropertyUpdate) : e.OperationName === "NotificationCommunityOwnerUpdate" ? h(e, o("WAWebMexCommunityOwnerUpdateNotificationHandler").mexHandleCommunityOwnerUpdate) : e.OperationName === "UsernameSetNotification" ? h(e, o("WAWebMexUsernameUpdateNotificationHandler").mexHandleUsernameChange) : e.OperationName === "UsernameDeleteNotification" ? h(e, o("WAWebMexUsernameUpdateNotificationHandler").mexHandleUsernameDelete) : e.OperationName === "UsernameUpdateNotification" ? h(e, o("WAWebMexUsernameUpdateNotificationHandler").mexHandleUsernameChangeForSideSub) : e.OperationName === "AccountSyncUsernameNotification" ? h(e, o("WAWebMexUsernameAccountSyncNotificationHandler").mexHandleUsernameAccountSync) : e.OperationName === "LidChangeNotification" ? h(e, o("WAWebMexLidChangeNotificationHandler").mexHandleLidChangeNotification) : e.OperationName === "NotificationUserBrigadingUpdate" ? h(e, o("WAWebHandleBrigadingUpdateNotification").mexHandleBrigadingNotification) : e.OperationName === "NotificationGroupLimitSharingPropertyUpdate" ? h(e, o("WAWebMexLimitSharingUpdateHandler").mexHandleLimitSharingUpdate) : e.OperationName === "NotificationUserReachoutTimelockUpdate" ? h(e, o("WAWebMexReachoutTimelockNotificationHandler").mexHandleReachoutTimelockNotification) : e.OperationName === "NotificationIntegrityChallengeRequest" ? h(e, o("WAWebMexIntegrityChallengeNotificationHandler").mexHandleIntegrityChallengeNotification) : e.OperationName === "MessageCappingInfoNotification" ? h(e, o("WAWebNewChatMessageCappingNotificationHandler").mexHandleNewChatMessageCappingNotification) : e.OperationName === "NotificationScheduledMessagePost" ? h(e, o("WAWebScheduledMsgPostNotificationHandler").mexHandleScheduledMsgPost) : e.OperationName === "NotificationScheduledMessageReveal" ? h(e, o("WAWebScheduledMsgRevealNotificationHandler").mexHandleScheduledMsgReveal) : e.OperationName === "NotificationEventInvite" ? h(e, o("WAWebSharableEventNotificationHandler").mexHandleSharableEventInviteNotification) : e.OperationName === "NotificationEventUpdate" ? h(e, o("WAWebSharableEventNotificationHandler").mexHandleSharableEventUpdateNotification) : e.OperationName === "NotificationEventRsvp" ? h(e, o("WAWebSharableEventNotificationHandler").mexHandleSharableEventRsvpNotification) : e.OperationName === "NotificationEventDelete" ? h(e, o("WAWebSharableEventNotificationHandler").mexHandleSharableEventDeleteNotification) : e.OperationName === "NotificationEventReminder" ? h(e, o("WAWebSharableEventNotificationHandler").mexHandleSharableEventReminderNotification) : e.OperationName === "NotificationEventInviteRemove" ? h(e, o("WAWebSharableEventNotificationHandler").mexHandleSharableEventInviteRemoveNotification) : Promise.reject(new g(e.OperationName));
	}
	var g = (function(e) {
		function t(n) {
			var r;
			return r = e.call(this, t.name + ": " + n) || this, r.name = "MissingMEXNotificationHandler", r.operationName = n, r;
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.toString = function() {
			return t.name + ": " + this.operationName;
		}, t;
	})(babelHelpers.wrapNativeSuper(Error));
	async function h(e, t) {
		var n = e.mexResponse, r = o("WAWebMexRelayEnvironment").parseFatalExtensionError(n.errors);
		if (r != null) throw new (o("WAParsableWapNode")).XmppParsingFailure(m, "errors list in parsed json has fatal error");
		if (n.data != null) return await t(e, n.data), y(e.stanzaId, e.from);
		throw new (o("WAParsableWapNode")).XmppParsingFailure(m, "null data in parsed json");
	}
	function y(e, t) {
		return o("WAWap").wap("ack", {
			id: o("WAWap").CUSTOM_STRING(e),
			to: t,
			class: "notification",
			type: "mex"
		});
	}
	async function C(e, t) {}
	l.handleMexNotification = _, l.MissingMEXNotificationHandler = g;
}), 98);
