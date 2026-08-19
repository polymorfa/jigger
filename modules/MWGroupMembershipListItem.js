__d("MWGroupMembershipListItem", [
	"I64",
	"MessagingSpecialThreadRole",
	"MessagingSpecialThreadRoleBitOffset"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = {
		BroadcastChannelParticipant: "broadcastChannelParticipantType",
		CommunityMember: "communityMemberType",
		ParticipantAndContact: "participantAndContactType",
		ServerSearchResult: "serverSearchResultType"
	};
	function u(e) {
		return e.type === s.ParticipantAndContact ? e.participant.isAdmin : e.type === s.CommunityMember ? e.communityMember.isAdmin : e.type === s.BroadcastChannelParticipant ? e.participant.isAdmin : !1;
	}
	function c(e) {
		return e.type === s.ParticipantAndContact ? e.participant.isModerator : e.type === s.CommunityMember ? e.communityMember.isModerator : !1;
	}
	function d(e) {
		return e.type === s.CommunityMember ? o("MessagingSpecialThreadRoleBitOffset").has(r("MessagingSpecialThreadRole").CHAT_HOST, e.communityMember) : !1;
	}
	function m(t) {
		return t.type === s.ParticipantAndContact ? t.contact.id : t.type === s.CommunityMember ? t.communityMember.contactId : t.type === s.BroadcastChannelParticipant ? t.participant.contactId : (e || (e = o("I64"))).of_string(t.serverSearchResult.resultId);
	}
	l.MWGroupMembershipMemberTypes = s, l.isAdmin = u, l.isModerator = c, l.isHost = d, l.contactId = m;
}), 98);
