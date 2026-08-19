__d("WAWebMessageCommunitySubgroupWelcomeTitle.react", ["fbt", "WAWebFormatParticipantNames"], (function(t, n, r, o, a, i, l, s) {
	function e(e) {
		var t = e.author, n = e.clickable, r = e.templateParams, a = t ? o("WAWebFormatParticipantNames").getFormattedName(t, n) : null, i = o("WAWebFormatParticipantNames").getFormattedCommunityNameWithAlternative({
			jid: r[0],
			asString: !n,
			alternativeStringName: r[1]
		}), l = !i;
		return l ? a != null ? s._(
			/*BTDS*/
			"",
			[s._param("user_name", a)]
		) : s._(
			/*BTDS*/
			""
		) : a != null ? s._(
			/*BTDS*/
			"",
			[s._param("user_name", a), s._param("community", i)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("community", i)]
		);
	}
	l.communitySubgroupWelcomeTitle = e;
}), 226);
