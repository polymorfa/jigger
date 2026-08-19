__d("MAWRemoveParticipantAdminMsg", ["MAWAdminMsgHelpers", "WAGlobals"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		switch (e) {
			case 1: return {
				adminMsgContent: [t],
				adminType: "participantRemovedYou"
			};
			case 2: return {
				adminMsgContent: [t, n],
				adminType: "participantRemovedYouAndOneUser"
			};
			default: return {
				adminMsgContent: [t, e.toString()],
				adminType: "participantRemovedYouAndMoreThanOneUsers"
			};
		}
	}
	function s(e, t, n, r) {
		switch (e) {
			case 1: return r ? {
				adminMsgContent: [],
				adminType: "currentUserLeftGroup"
			} : {
				adminMsgContent: [t],
				adminType: "currentUserRemovedOneParticipant"
			};
			case 2: return {
				adminMsgContent: [t, n],
				adminType: "currentUserRemovedTwoParticipant"
			};
			default: return {
				adminMsgContent: [t, e.toString()],
				adminType: "currentUserRemovedMoreThanTwoParticipant"
			};
		}
	}
	function u(e, t, n, r, o) {
		switch (e) {
			case 1: return o ? {
				adminMsgContent: [t],
				adminType: "participantLeftGroup"
			} : {
				adminMsgContent: [t, n],
				adminType: "participantRemovedOneUser"
			};
			case 2: return {
				adminMsgContent: [
					t,
					n,
					r
				],
				adminType: "participantRemovedTwoUser"
			};
		}
		return {
			adminMsgContent: [
				t,
				n,
				e.toString()
			],
			adminType: "participantRemovedMoreThanTwoUser"
		};
	}
	function c(t, n, r, a) {
		var i = a == null ? n.map(o("MAWAdminMsgHelpers").createAdminMsgContactId) : a, l = i[0], c = i[1], d = r == null ? o("MAWAdminMsgHelpers").createAdminMsgContactId(t) : o("MAWAdminMsgHelpers").maybeUnknownParticipantName(r);
		return t === o("WAGlobals").getMyUserJid() ? s(n.length, o("MAWAdminMsgHelpers").maybeUnknownParticipantName(l), o("MAWAdminMsgHelpers").maybeUnknownParticipantName(c), n[0] === o("WAGlobals").getMyUserJid()) : n.includes(o("WAGlobals").getMyUserJid()) ? e(n.length, d, o("MAWAdminMsgHelpers").maybeUnknownParticipantName(n[0] === o("WAGlobals").getMyUserJid() ? c : l)) : u(n.length, d, o("MAWAdminMsgHelpers").maybeUnknownParticipantName(l), o("MAWAdminMsgHelpers").maybeUnknownParticipantName(c), n[0] === t);
	}
	l.removeParticipantAdminMessage = c;
}), 98);
