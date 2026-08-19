__d("MAWJobHandlers", [
	"MAWAcceptGroupInvite",
	"MAWAddGroupParticipants",
	"MAWCreateGroup",
	"MAWCreateJobNotImplemented",
	"MAWDeleteThread",
	"MAWDemoteGroupParticipants",
	"MAWLeaveGroups",
	"MAWPromoteGroupParticipants",
	"MAWRemoveGroupParticipants",
	"MAWSetGroupSubject"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return {
			acceptGroupInvite: o("MAWAcceptGroupInvite").acceptGroupInvite,
			addGroupParticipants: o("MAWAddGroupParticipants").addGroupParticipants,
			createGroup: o("MAWCreateGroup").createGroup,
			deleteMsgsForMe: [],
			deleteThread: o("MAWDeleteThread").deleteThread,
			demoteGroupParticipants: o("MAWDemoteGroupParticipants").demoteGroupParticipants,
			downloadAndHandleMedia: [],
			downloadAndRestoreMedia: [],
			handleFutureproofMsg: [],
			igdReportUserSpam: [],
			igdSendMsg: [],
			leaveGroups: o("MAWLeaveGroups").leaveGroupsJob,
			promoteGroupParticipants: o("MAWPromoteGroupParticipants").promoteGroupParticipants,
			removeGroupParticipants: o("MAWRemoveGroupParticipants").removeGroupParticipants,
			setGroupSubject: o("MAWSetGroupSubject").setGroupSubject,
			startInstamadilloDYI: o("MAWCreateJobNotImplemented").createNotImplementedJob("startInstamadilloDYI")
		};
	}
	l.getJobHandlers = e;
}), 98);
