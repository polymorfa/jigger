__d("MAWDbGroupInviteTxns", ["MAWDexieTable", "MAWMsgType"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return e.groupInvites.put(t).then(function() {
			return t;
		});
	}
	function s(e, t, n) {
		return e.groupInvites.where(["threadJid", "inviteeJid"]).anyOf([[t, n]]).delete();
	}
	function u(e, t, n) {
		return e.groupInvites.where(["threadJid", "inviteeJid"]).equals([t, n]).first();
	}
	function c(e, t, n) {
		return e.groupInvites.where(["threadJid", "inviteeJid"]).anyOf([[t, n]]).toArray();
	}
	function d(e, t) {
		return t.type === o("MAWMsgType").MSG_TYPE.GROUP_INVITE ? t.invitedParticipantUserJid == null ? o("MAWDexieTable").dexieResolve() : u(e, t.threadJid, t.invitedParticipantUserJid) : o("MAWDexieTable").dexieResolve();
	}
	l.putGroupInvite = e, l.deleteGroupInvitesByThreadAndInvitedParticipant = s, l.maybeGetGroupInvite = u, l.getGroupInvitesByThreadAndInvitedParticipant = c, l.getAndCheckGroupInviteFromMsg = d;
}), 98);
