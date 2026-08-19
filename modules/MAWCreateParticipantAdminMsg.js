__d("MAWCreateParticipantAdminMsg", ["MAWAdminMsgHelpers", "WAGlobals"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		switch (e) {
			case 1: return {
				adminMsgContent: [t],
				adminType: "participantAddedYou"
			};
			case 2: return {
				adminMsgContent: [t, n],
				adminType: "participantAddedYouAndOneUser"
			};
			default: return {
				adminMsgContent: [t, e.toString()],
				adminType: "participantAddedYouAndMoreThanOneUsers"
			};
		}
	}
	function s(e, t, n) {
		switch (e) {
			case 1: return {
				adminMsgContent: [t],
				adminType: "currentUserAddedOneParticipant"
			};
			case 2: return {
				adminMsgContent: [t, n],
				adminType: "currentUserAddedTwoParticipant"
			};
			default: return {
				adminMsgContent: [t, e.toString()],
				adminType: "currentUserAddedMoreThanTwoParticipant"
			};
		}
	}
	function u(e, t, n, r) {
		switch (e) {
			case 1: return {
				adminMsgContent: [t, n],
				adminType: "participantAddedOneUser"
			};
			case 2: return {
				adminMsgContent: [
					t,
					n,
					r
				],
				adminType: "participantAddedTwoUser"
			};
		}
		return {
			adminMsgContent: [
				t,
				n,
				e.toString()
			],
			adminType: "participantAddedMoreThanTwoUser"
		};
	}
	function c(t, n, r, a) {
		var i = a == null ? n.map(o("MAWAdminMsgHelpers").createAdminMsgContactId) : a, l = i[0], c = i[1], d = r == null ? o("MAWAdminMsgHelpers").createAdminMsgContactId(t) : o("MAWAdminMsgHelpers").maybeUnknownParticipantName(r);
		return t === o("WAGlobals").getMyUserJid() ? s(n.length, o("MAWAdminMsgHelpers").maybeUnknownParticipantName(l), o("MAWAdminMsgHelpers").maybeUnknownParticipantName(c)) : n.includes(o("WAGlobals").getMyUserJid()) ? e(n.length, o("MAWAdminMsgHelpers").maybeUnknownParticipantName(d), o("MAWAdminMsgHelpers").maybeUnknownParticipantName(n[0] === o("WAGlobals").getMyUserJid() ? c : l)) : u(n.length, d, o("MAWAdminMsgHelpers").maybeUnknownParticipantName(l), o("MAWAdminMsgHelpers").maybeUnknownParticipantName(c));
	}
	l.createParticipantAdminMessage = c;
}), 98);
