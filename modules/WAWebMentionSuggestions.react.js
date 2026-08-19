__d("WAWebMentionSuggestions.react", ["WAWebGroupType"], (function(t, n, r, o, a, i, l) {
	function e(e) {
		return (e == null ? void 0 : e.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && e != null && e.participants.iAmAdmin() ? !0 : (e == null ? void 0 : e.groupType) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP || (e == null ? void 0 : e.groupType) === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP;
	}
	l.shouldEnableGroupMentions = e;
}), 98);
