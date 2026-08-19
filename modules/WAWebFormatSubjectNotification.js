__d("WAWebFormatSubjectNotification", [
	"fbt",
	"WAWebChatGroupUtils",
	"WAWebUserPrefsMeUser"
], (function(t, n, r, o, a, i, l, s) {
	function e(e) {
		var t = e.author, n = e.authorClickable, r = e.chat, a = e.subjectValue;
		return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(r) ? o("WAWebUserPrefsMeUser").isMeAccount(t) ? s._(
			/*BTDS*/
			"",
			[s._param("community_name", a)]
		) : n != null ? s._(
			/*BTDS*/
			"",
			[s._param("user", n), s._param("community_name", a)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("community_name", a)]
		) : o("WAWebUserPrefsMeUser").isMeAccount(t) ? s._(
			/*BTDS*/
			"",
			[s._param("group_name", a)]
		) : n != null ? s._(
			/*BTDS*/
			"",
			[s._param("user", n), s._param("group_name", a)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("group_name", a)]
		);
	}
	l.formatSubjectNotification = e;
}), 226);
