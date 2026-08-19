__d("MAWAdminMsgHelpers", [
	"MAWCreateParticipantAdminMsg",
	"MAWExternalId",
	"MAWRemoveParticipantAdminMsg",
	"MAWUserJidWrapper",
	"WAAckLevel",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "Facebook User", s = 1;
	function u(t) {
		return t == null || t === "" ? e : t;
	}
	function c(t) {
		return t != null ? o("WAJids").userIdFromJid(t) : e;
	}
	function d(e, t, n, r) {
		return {
			ack: o("WAAckLevel").ACK.SENT,
			id: {
				author: o("WAJids").AUTHOR_SYSTEM,
				chat: e,
				externalId: o("MAWExternalId").generateExternalId()
			},
			msgContent: o("MAWCreateParticipantAdminMsg").createParticipantAdminMessage(n === "@me" ? o("MAWUserJidWrapper").getMyUserJid() : n, t),
			serverTs: r,
			ts: r,
			type: "Admin"
		};
	}
	function m(e, t, n, r) {
		return {
			ack: o("WAAckLevel").ACK.SENT,
			id: {
				author: o("WAJids").AUTHOR_SYSTEM,
				chat: e,
				externalId: o("MAWExternalId").generateExternalId()
			},
			msgContent: o("MAWRemoveParticipantAdminMsg").removeParticipantAdminMessage(n === "@me" ? o("MAWUserJidWrapper").getMyUserJid() : n, t),
			serverTs: r,
			ts: r,
			type: "Admin"
		};
	}
	function p(e, t) {
		return babelHelpers.extends({}, _(e, t), { version: s });
	}
	function _(e, t) {
		var n, r = o("MAWUserJidWrapper").getMyUserJid(), a = t === "@me" ? r : t;
		if (a === r) n = {
			adminMsgContent: [o("WAJids").userIdFromJid(e)],
			adminType: "currentUserPromotedParticipant"
		};
		else if (a == null) n = e === r ? {
			adminMsgContent: [],
			adminType: "currentUserGotPromoted"
		} : {
			adminMsgContent: [o("WAJids").userIdFromJid(e)],
			adminType: "participantGotPromoted"
		};
		else {
			var i = o("WAJids").userIdFromJid(a);
			n = e === r ? {
				adminMsgContent: [i],
				adminType: "participantPromotedYou"
			} : {
				adminMsgContent: [i, o("WAJids").userIdFromJid(e)],
				adminType: "participantPromotedParticipant"
			};
		}
		return n;
	}
	function f(e, t, n, r) {
		var a = _(t, n);
		return {
			ack: o("WAAckLevel").ACK.SENT,
			id: {
				author: o("WAJids").AUTHOR_SYSTEM,
				chat: e,
				externalId: o("MAWExternalId").generateExternalId()
			},
			msgContent: a,
			serverTs: r,
			ts: r,
			type: "Admin"
		};
	}
	function g(e, t) {
		return babelHelpers.extends({}, h(e, t), { version: s });
	}
	function h(e, t) {
		var n, r = o("MAWUserJidWrapper").getMyUserJid(), a = t === "@me" ? r : t;
		if (a === r) n = e === r ? {
			adminMsgContent: [],
			adminType: "currentUserSelfDemoted"
		} : {
			adminMsgContent: [o("WAJids").userIdFromJid(e)],
			adminType: "currentUserDemotedParticipant"
		};
		else if (a == null) n = e === r ? {
			adminMsgContent: [],
			adminType: "currentUserGotDemoted"
		} : {
			adminMsgContent: [o("WAJids").userIdFromJid(e)],
			adminType: "participantGotDemoted"
		};
		else {
			var i = o("WAJids").userIdFromJid(a);
			n = e === r ? {
				adminMsgContent: [i],
				adminType: "participantDemotedYou"
			} : {
				adminMsgContent: [i, o("WAJids").userIdFromJid(e)],
				adminType: a === e ? "participantSelfDemoted" : "participantDemotedParticipant"
			};
		}
		return n;
	}
	function y(e, t, n, r) {
		var a = h(t, n);
		return {
			ack: o("WAAckLevel").ACK.SENT,
			id: {
				author: o("WAJids").AUTHOR_SYSTEM,
				chat: e,
				externalId: o("MAWExternalId").generateExternalId()
			},
			msgContent: a,
			serverTs: r,
			ts: r,
			type: "Admin"
		};
	}
	function C(e, t, n, r) {
		var a, i = [], l = t.subject.content;
		if (l != null) return t.subject.user === o("MAWUserJidWrapper").getMyUserJid() ? (a = "currentUserNamedGroup", i.push(l)) : n == null ? (a = "unkonwnUserNamedGroup", i.push(l)) : (a = "participantNamedGroup", i.push(n, l)), {
			ack: o("WAAckLevel").ACK.SENT,
			id: {
				author: o("WAJids").AUTHOR_SYSTEM,
				chat: e,
				externalId: o("MAWExternalId").generateExternalId()
			},
			msgContent: {
				adminMsgContent: i,
				adminType: a
			},
			serverTs: r,
			ts: r,
			type: "Admin"
		};
	}
	function b(e, t) {
		var n = v(e, t);
		if (n != null) return babelHelpers.extends({}, n, { version: s });
	}
	function v(e, t) {
		var n, r = [];
		if (e === o("MAWUserJidWrapper").getMyUserJid()) switch (t) {
			case "all_member_add":
				n = "currentUserSetAddModeAllMembers";
				break;
			case "admin_add":
				n = "currentUserSetAddModeAdminOnly";
				break;
		}
		else if (e != null) switch (r.push(o("WAJids").userIdFromJid(e)), t) {
			case "all_member_add":
				n = "participantSetAddModeAllMembers";
				break;
			case "admin_add":
				n = "participantSetAddModeAdminOnly";
				break;
		}
		else switch (t) {
			case "all_member_add":
				n = "serverSetAddModeAllMembers";
				break;
			case "admin_add":
				n = "serverSetAddModeAdminOnly";
				break;
		}
		if (n != null) return {
			adminMsgContent: r,
			adminType: n
		};
	}
	function S(e, t, n, r) {
		var a = v(n, t);
		if (a != null) return {
			ack: o("WAAckLevel").ACK.SENT,
			id: {
				author: o("WAJids").AUTHOR_SYSTEM,
				chat: e,
				externalId: o("MAWExternalId").generateExternalId()
			},
			msgContent: a,
			serverTs: r,
			ts: r,
			type: "Admin"
		};
	}
	l.UNKNOWN_USER = e, l.maybeUnknownParticipantName = u, l.createAdminMsgContactId = c, l.createParticipantAddAdminMessage = d, l.createParticipantRemoveAdminMsg = m, l.createParticipantPromoteAdminMessage = p, l.createParticipantPromoteAdminMsg = f, l.createParticipantDemoteAdminMessage = g, l.createParticipantDemoteAdminMsg = y, l.createGroupNameChangeAdminMsg = C, l.createMemberAddModeChangeAdminMessage = b, l.createMemberAddModeChangeAdminMsg = S;
}), 98);
