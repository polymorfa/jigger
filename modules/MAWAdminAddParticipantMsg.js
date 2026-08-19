__d("MAWAdminAddParticipantMsg", [
	"MAWLocalizationType",
	"MAWUserJidWrapper",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 1;
	function s(e, t, n) {
		switch (e) {
			case 1: return {
				adminMsgContent: [t],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_YOU
			};
			case 2: return {
				adminMsgContent: [t, n],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_YOU_AND_ONE_USER
			};
			default: return {
				adminMsgContent: [t, (e - 1).toString()],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_YOU_AND_MORE_THAN_ONE_USERS
			};
		}
	}
	function u(e, t, n) {
		switch (e) {
			case 1: return {
				adminMsgContent: [t],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_ONE_PARTICIPANT
			};
			case 2: return {
				adminMsgContent: [t, n],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_TWO_PARTICIPANTS
			};
			default: return {
				adminMsgContent: [t, (e - 1).toString()],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_MORE_THAN_TWO_PARTICIPANTS
			};
		}
	}
	function c(e, t, n, r) {
		switch (e) {
			case 1: return {
				adminMsgContent: [t, n],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_ONE_USER
			};
			case 2: return {
				adminMsgContent: [
					t,
					n,
					r
				],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_TWO_USER
			};
		}
		return {
			adminMsgContent: [
				t,
				n,
				(e - 1).toString()
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_MORE_THAN_TWO_USER
		};
	}
	function d(e, t) {
		switch (e) {
			case 1: return {
				adminMsgContent: [],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_YOU
			};
			case 2: return {
				adminMsgContent: [t],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_YOU_AND_ONE_USER
			};
		}
		return {
			adminMsgContent: [(e - 1).toString()],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_YOU_AND_MORE_THAN_ONE_USER
		};
	}
	function m(e, t, n) {
		switch (e) {
			case 1: return {
				adminMsgContent: [t],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_ONE_USER
			};
			case 2: return {
				adminMsgContent: [t, n],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_TWO_USER
			};
		}
		return {
			adminMsgContent: [t, (e - 1).toString()],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_MORE_THAN_TWO_USER
		};
	}
	function p(e, t) {
		var n = o("MAWUserJidWrapper").getMyUserJid(), r = t[0], a = t[1], i = o("WAJids").userIdFromJid(r), l = a != null ? o("WAJids").userIdFromJid(a) : "";
		if (e == null) return t.includes(n) ? d(t.length, r === n ? l : i) : m(t.length, i, l);
		if (e === n) return u(t.length, i, l);
		var p = o("WAJids").userIdFromJid(e);
		return t.includes(n) ? s(t.length, p, r === n ? l : i) : c(t.length, p, i, l);
	}
	function _(t, n) {
		return babelHelpers.extends({}, p(t, n), { version: e });
	}
	l.createAddParticipantsAdminMessage = _;
}), 98);
