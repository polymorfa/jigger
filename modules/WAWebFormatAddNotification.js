__d("WAWebFormatAddNotification", ["fbt", "WAWebSystemMessagesUtils"], (function(t, n, r, o, a, i, l, s) {
	function e(e) {
		var t = e.author, n = e.authorClickable, r = e.participantsClickable, a = e.subject, i = e.subjectClickable;
		return t ? o("WAWebSystemMessagesUtils").isMe(t) ? s._(
			/*BTDS*/
			"",
			[s._param("names", r)]
		) : o("WAWebSystemMessagesUtils").isMe(a) ? n != null ? s._(
			/*BTDS*/
			"",
			[s._param("user_name", n)]
		) : s._(
			/*BTDS*/
			""
		) : n != null ? s._(
			/*BTDS*/
			"",
			[s._param("user_name", n), s._param("names", r)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("names", r)]
		) : o("WAWebSystemMessagesUtils").isMe(a) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("user_name", i)]
		);
	}
	l.formatAddNotification = e;
}), 226);
