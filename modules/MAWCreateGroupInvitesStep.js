__d("MAWCreateGroupInvitesStep", [
	"MAWAddGroupParticipantsApi",
	"MAWExternalId",
	"MawMessageSendService",
	"Promise",
	"WAAPI",
	"WAJids",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"isGroupInvitesEnabled",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n, r, o) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, s) {
			if (l === void 0 && (l = !0), !r("isGroupInvitesEnabled")() || i.length === 0) return [];
			var u = i.map(function(e) {
				return e.user;
			}), c = i.map(function(e) {
				return {
					addressable: !0,
					type: "invitedParticipant",
					user: e.user
				};
			});
			return yield r("WAAPI").getDevices({
				ignoreDhash: !1,
				reason: "create-group-invite",
				users: new Set(u)
			}), l || (yield o("MAWAddGroupParticipantsApi").addGroupParticipants(null, t, o("WAJids").AUTHOR_ME, c, !0, null, o("WATimeUtils").unixTime())), yield (e || (e = n("Promise"))).all(i.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = e.user, i = e.inviteCode, l = e.expiration;
					yield o("MawMessageSendService").sendGroupInviteMsg({
						args: {
							expiration: l,
							groupJid: t,
							inviteCode: i,
							invitedParticipantUserJid: n,
							inviterUserJid: a
						},
						externalId: o("MAWExternalId").generateExternalId(),
						qplEventType: r("qpl")._(25313175, "1551"),
						qplInstanceKey: s
					});
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})())), c;
		}), u.apply(this, arguments);
	}
	l.createGroupInvitesStep = s;
}), 98);
