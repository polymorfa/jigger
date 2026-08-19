__d("WAWebMessageCommunityLinkGroupTitle.react", [
	"fbt",
	"WAWebFormatParticipantNames",
	"WAWebUserPrefsMeUser"
], (function(t, n, r, o, a, i, l, s) {
	function e(e) {
		var t = e.author, n = e.clickable, r = e.templateParams, a = t ? o("WAWebFormatParticipantNames").getFormattedName(t, n) : null, i = o("WAWebFormatParticipantNames").getFormattedCommunityNameWithAlternative({
			jid: r[0],
			asString: !n,
			alternativeStringName: r[1]
		}), l = !i, u = o("WAWebUserPrefsMeUser").isMeAccount(t);
		return l ? u ? s._(
			/*BTDS*/
			""
		) : a != null ? s._(
			/*BTDS*/
			"",
			[s._param("author", a)]
		) : s._(
			/*BTDS*/
			""
		) : u ? s._(
			/*BTDS*/
			"",
			[s._param("community", i)]
		) : a != null ? s._(
			/*BTDS*/
			"",
			[s._param("author", a), s._param("community", i)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("community", i)]
		);
	}
	l.communityLinkGroupTitle = e;
}), 226);
