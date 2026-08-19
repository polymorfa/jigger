__d("MAWCreateGroupInvitesStep", [
	"MAWAddGroupParticipantsApi",
	"MAWExternalId",
	"MawMessageSendService",
	"WAAPI",
	"WAJids",
	"WATimeUtils",
	"isGroupInvitesEnabled",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t, n, a, i) {
		if (a === void 0 && (a = !0), !r("isGroupInvitesEnabled")() || n.length === 0) return [];
		var l = n.map(function(e) {
			return e.user;
		}), s = n.map(function(e) {
			return {
				addressable: !0,
				type: "invitedParticipant",
				user: e.user
			};
		});
		return await r("WAAPI").getDevices({
			ignoreDhash: !1,
			reason: "create-group-invite",
			users: new Set(l)
		}), a || await o("MAWAddGroupParticipantsApi").addGroupParticipants(null, e, o("WAJids").AUTHOR_ME, s, !0, null, o("WATimeUtils").unixTime()), await Promise.all(n.map(async function(n) {
			var a = n.user, l = n.inviteCode, s = n.expiration;
			await o("MawMessageSendService").sendGroupInviteMsg({
				args: {
					expiration: s,
					groupJid: e,
					inviteCode: l,
					invitedParticipantUserJid: a,
					inviterUserJid: t
				},
				externalId: o("MAWExternalId").generateExternalId(),
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: i
			});
		})), s;
	}
	l.createGroupInvitesStep = e;
}), 98);
