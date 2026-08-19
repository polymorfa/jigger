__d("MAWGetThreadUpdateTypeForAdminMsg", [
	"FBLogger",
	"MAWAdminMsgTypesGrouped",
	"MAWLocalizationType",
	"MAWThreadUpdateType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e;
		return t == null ? (r("FBLogger")("messenger_web").mustfix("nullAdminType"), o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.NO_SNIPPET_OR_ACTIVITY_TS_UPDATE) : s(t) ? o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.MARK_THREAD_AS_UNREAD : u(t) ? o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.BUMP_THREAD : c(t) ? o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.SNIPPET_ONLY : (d(t) || r("FBLogger")("messenger_web").mustfix("unsupportedAdminMsgType"), o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.NO_SNIPPET_OR_ACTIVITY_TS_UPDATE);
	}
	function s(e) {
		return o("MAWAdminMsgTypesGrouped").otherUserAddRemoveParticipant.includes(e) || o("MAWAdminMsgTypesGrouped").chatCustomizedByOtherUser.includes(e) || o("MAWAdminMsgTypesGrouped").callActionToNotifyAbout.includes(e) || o("MAWAdminMsgTypesGrouped").twoUsersConnected.includes(e) || o("MAWAdminMsgTypesGrouped").fallbackMsgFromOtherUser.includes(e) || o("MAWAdminMsgTypesGrouped").otherUserBumpsMessage.includes(e) || o("MAWAdminMsgTypesGrouped").otherNonAdminMsgToBeMarkedAsUnread.includes(e) || e === o("MAWLocalizationType").LOCALIZATION_TYPE.REACHABILITY_ERROR;
	}
	function u(e) {
		return o("MAWAdminMsgTypesGrouped").currentUserAddRemoveParticipant.includes(e) || o("MAWAdminMsgTypesGrouped").chatCustomizedByCurrentUser.includes(e) || o("MAWAdminMsgTypesGrouped").callActionNotToNotifyAbout.includes(e) || o("MAWAdminMsgTypesGrouped").fallbackMsgFromCurrentUser.includes(e) || o("MAWAdminMsgTypesGrouped").currentUserBumpsMessage.includes(e) || o("MAWAdminMsgTypesGrouped").otherNonAdminMsgToBeBumped.includes(e) || o("MAWAdminMsgTypesGrouped").limitSharingUpdate.includes(e);
	}
	function c(e) {
		return e === o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_ROLLBACK_ADMIN_MESSAGE || o("MAWAdminMsgTypesGrouped").dualThreadCutoverAdminMsgs.includes(e) || o("MAWAdminMsgTypesGrouped").ephemeralSettingChanges.includes(e) || o("MAWAdminMsgTypesGrouped").groupPermissionsChanged.includes(e) || o("MAWAdminMsgTypesGrouped").participantLeftGroup.includes(e) || o("MAWAdminMsgTypesGrouped").pinnedMessageUpdate.includes(e);
	}
	function d(e) {
		return o("MAWAdminMsgTypesGrouped").cutoverAdminMsgs.includes(e) || o("MAWAdminMsgTypesGrouped").deviceChanges.includes(e) || o("MAWAdminMsgTypesGrouped").otherNonAdminMsgToNotTriggerUpdate.includes(e) || e === o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_DESCRIPTION || e === o("MAWLocalizationType").LOCALIZATION_TYPE.EMPTY_SNIPPET || e === o("MAWLocalizationType").LOCALIZATION_TYPE.DEBUG_MSG || e === o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_UK_OSA_ADMIN_MESSAGE;
	}
	l.getThreadUpdateTypeForAdminMsg = e;
}), 98);
