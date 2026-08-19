__d("MAWWriteGroupInviteTxns", [
	"MAWBridgeTypesCreators",
	"MAWDbGroupInviteTxns",
	"MAWDbParticipant",
	"MAWDbParticipantTxns",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWLowLevelApiTypes",
	"MAWThreadManagementTxns",
	"MAWUserJidWrapper",
	"WAGroupInviteUtils",
	"WAJids",
	"WAResultOrError",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		return o("MAWDbThreadTxns").getThread(e, n).then(function(n) {
			return n.success ? o("MAWDbGroupInviteTxns").maybeGetGroupInvite(e, t.threadJid, t.inviteeJid).then(function(n) {
				return n && !o("WATimeUtils").isInFuture(n.inviteExpirationTs) ? o("MAWLowLevelApiTypes").WRITE_GROUP_INVITE_ERROR.EXISTING_GROUP_INVITE : o("MAWDbGroupInviteTxns").putGroupInvite(e, t);
			}) : o("MAWLowLevelApiTypes").WRITE_GROUP_INVITE_ERROR.MISSING_GROUP;
		});
	}
	function s(e, t, n, r) {
		var a = t.caption, i = t.groupJid, l = t.inviteCode, s = t.inviteExpiration, u = o("WAJids").interpretAsUserJid(n);
		if (i == null || s == null || l == null || u == null) return o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeError({ type: "invalid_args" }));
		var c = [
			o("WATimeUtils").castLongIntToUnixTime(s),
			o("WAJids").toGroupJid(i),
			o("WAGroupInviteUtils").toInviteCode(l)
		], d = c[0], m = c[1], p = c[2], _ = {
			folder: r,
			groupJid: m,
			inviteCode: p,
			inviteExpireTs: d,
			inviterJid: u,
			type: "group_invite"
		};
		return o("MAWThreadManagementTxns").getGroupThread(e, m, r, !0).then(function(t) {
			return t == null ? o("WAResultOrError").makeError(_) : o("MAWDbParticipantTxns").getParticipant(e, t.thread.jid, u);
		}).then(function(t) {
			if (!t.success) return o("WAResultOrError").makeError(_);
			var n = o("MAWUserJidWrapper").getMyUserJid(), r = o("MAWDbParticipant").craftParticipantId(t.value.threadJid, n);
			return o("MAWDbGroupInviteTxns").putGroupInvite(e, {
				caption: a == null ? void 0 : a.text,
				inviteCode: p,
				invitedParticipantId: r,
				inviteeJid: n,
				inviteExpirationTs: d,
				inviterJid: u,
				threadJid: t.value.threadJid
			}).then(function(e) {
				return o("MAWIndexedDb").afterTransaction({
					tag: "GroupInviteUpdate",
					value: o("MAWBridgeTypesCreators").createBridgeGroupInvite(e)
				}), o("WAResultOrError").makeResult();
			});
		});
	}
	l.writeGroupInvite = e, l.writeIncomingGroupInviteMsg = s;
}), 98);
