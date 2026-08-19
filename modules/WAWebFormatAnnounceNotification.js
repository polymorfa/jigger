__d("WAWebFormatAnnounceNotification", ["fbt", "WAWebSystemMessagesUtils"], (function(t, n, r, o, a, i, l, s) {
	function e(e) {
		var t = e.author, n = e.authorClickable, r = e.body;
		return r === "on" ? o("WAWebSystemMessagesUtils").isMe(t) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("user_name", n)]
		) : o("WAWebSystemMessagesUtils").isMe(t) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("user_name", n)]
		);
	}
	l.formatAnnounceNotification = e;
}), 226);
