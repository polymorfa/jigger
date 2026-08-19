__d("MAWAdminRemoveParticipantMsg", [
	"MAWAdminMsgType",
	"MAWUserJidWrapper",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 1;
	function s(e, t, n) {
		switch (e) {
			case 1: return {
				adminMsgContent: [t],
				adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_REMOVED_YOU
			};
			case 2: return {
				adminMsgContent: [t, n],
				adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_REMOVED_YOU_AND_ONE_USER
			};
			default: return {
				adminMsgContent: [t, (e - 1).toString()],
				adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_REMOVED_YOU_AND_MORE_THAN_ONE_USERS
			};
		}
	}
	function u(e, t, n, r) {
		switch (e) {
			case 1: return r ? {
				adminMsgContent: [],
				adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_LEFT_GROUP
			} : {
				adminMsgContent: [t],
				adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_REMOVED_ONE_PARTICIPANT
			};
			case 2: return {
				adminMsgContent: [t, n],
				adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_REMOVED_TWO_PARTICIPANTS
			};
			default: return {
				adminMsgContent: [t, (e - 1).toString()],
				adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_REMOVED_MORE_THAN_TWO_PARTICIPANTS
			};
		}
	}
	function c(e, t, n, r, a) {
		switch (e) {
			case 1: return a ? {
				adminMsgContent: [t],
				adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_LEFT_GROUP
			} : {
				adminMsgContent: [t, n],
				adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_REMOVED_ONE_USER
			};
			case 2: return {
				adminMsgContent: [
					t,
					n,
					r
				],
				adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_REMOVED_TWO_USER
			};
		}
		return {
			adminMsgContent: [
				t,
				n,
				(e - 1).toString()
			],
			adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_REMOVED_MORE_THAN_TWO_USER
		};
	}
	function d(e, t) {
		var n = o("MAWUserJidWrapper").getMyUserJid(), r = t[0], a = t[1], i = o("WAJids").userIdFromJid(r), l = a != null ? o("WAJids").userIdFromJid(a) : "";
		if (e == null) return t.includes(n) ? {
			adminMsgContent: [],
			adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.UNKNOWN_USER_REMOVED_YOU
		} : {
			adminMsgContent: [i],
			adminType: o("MAWAdminMsgType").ADMIN_MSG_TYPE.UNKNOWN_USER_REMOVED_ONE_USER
		};
		if (e === n) return u(t.length, i, l, r === n);
		var d = o("WAJids").userIdFromJid(e);
		return t.includes(n) ? s(t.length, d, r === n ? l : i) : c(t.length, d, i, l, r === e);
	}
	function m(t, n) {
		return babelHelpers.extends({}, d(t, n), { version: e });
	}
	l.createRemoveParticipantsAdminMessage = m;
}), 98);
