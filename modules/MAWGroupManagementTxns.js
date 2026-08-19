__d("MAWGroupManagementTxns", [
	"MAWAdminWriteChangeParticipantsAdminMsgTxn",
	"MAWAdminWriteGroupNameChangeTxn",
	"MAWDbGroupInfoTxns",
	"MAWDbParticipantTxns",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWExternalId",
	"MAWFolderTypes",
	"MAWGetOrCreateThreadTxns",
	"MAWParticipantManagementTxns",
	"MAWThreadManagementTxns",
	"MAWUserJidWrapper",
	"WATimeUtils",
	"isGroupInvitesEnabled"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["description", "participants"];
	function s(e, t, n) {
		return o("MAWDbGroupInfoTxns").deleteGroupInfo(t), o("MAWThreadManagementTxns").deleteAllThreadData(e, n);
	}
	var u = function(n, a) {
		var t = a.authoritativeThreadKey, i = a.deduplicationKey, l = a.extras, s = a.folder, u = a.groupStatus, c = a.groupToCreate, d = a.serverTs, m = a.threadMsgInfo, p = u === "added" ? o("WATimeUtils").unixTime() : c.creationTs;
		return o("MAWGetOrCreateThreadTxns").getOrCreateThread(n, {
			authoritativeThreadKey: t,
			clientThreadKey: l == null ? void 0 : l.clientThreadKey,
			createTs: o("WATimeUtils").castUnixTimeToMillisTime(p),
			deduplicationKey: i,
			description: "createGroup",
			folder: s == null ? o("MAWFolderTypes").FOLDER_ID.INBOX : s,
			jid: c.jid
		}, void 0, m).then(function(t) {
			var a = t.created, i = t.thread, l = c.participants.map(function(e) {
				return e.error ? r("isGroupInvitesEnabled")() && e.error.errorCode === 403 ? {
					addressable: !0,
					type: "invitedParticipant",
					userJid: e.error.user
				} : null : {
					addressable: e.value.addressable,
					type: e.value.type,
					userJid: e.value.user
				};
			}).filter(Boolean), s = a ? o("MAWDbParticipantTxns").bulkAddParticipants : o("MAWParticipantManagementTxns").syncParticipantList, m = s(n, i.jid, l), p = o("MAWUserJidWrapper").getMyUserJid(), _ = u === "added" && !a && c.creator !== p ? o("MAWAdminWriteChangeParticipantsAdminMsgTxn").writeAddParticipantAdminMsg(n, {
				admin: c.inviter,
				chatJid: i.jid,
				externalId: o("MAWExternalId").generateExternalId(),
				participants: [p],
				serverTs: d
			}) : o("MAWDexieTable").dexieResolve(), f = c.description, g = c.participants, h = babelHelpers.objectWithoutPropertiesLoose(c, e), y = o("MAWDbGroupInfoTxns").putGroupInfo(h);
			return o("MAWDexieTable").dexieAll([m, _]).then(function() {
				return a && u === "added" ? o("MAWAdminWriteGroupNameChangeTxn").writeGroupNameChangeInfo(n, y, i) : o("MAWDexieTable").dexieResolve();
			}).then(function() {
				return i.archived === !0 ? o("MAWDbThreadTxns").unarchiveThreads(n, [i.jid]) : o("MAWDbThreadTxns").subscribeToThreads(n, [i.jid]);
			}).then(function(e) {
				return i.jid;
			});
		});
	};
	l.deleteGroup = s, l.createGroupInternal = u;
}), 98);
