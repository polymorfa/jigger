__d("WAWebFormatDeleteNotification", ["fbt", "WAWebChatGroupUtils"], (function(t, n, r, o, a, i, l, s) {
	function e(e) {
		var t = e.chat;
		return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t) ? s._(
			/*BTDS*/
			""
		) : o("WAWebChatGroupUtils").isSupportGroup(t) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	l.formatDeleteNotification = e;
}), 226);
