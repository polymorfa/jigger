__d("WAWebFormatPictureNotification", ["fbt", "WAWebSystemMessagesUtils"], (function(t, n, r, o, a, i, l, s) {
	function e(e) {
		var t = e.author, n = e.authorClickable, r = e.body;
		return r === "remove" ? o("WAWebSystemMessagesUtils").isMe(t) ? s._(
			/*BTDS*/
			""
		) : n != null ? s._(
			/*BTDS*/
			"",
			[s._param("user_name", n)]
		) : s._(
			/*BTDS*/
			""
		) : o("WAWebSystemMessagesUtils").isMe(t) ? s._(
			/*BTDS*/
			""
		) : n != null ? s._(
			/*BTDS*/
			"",
			[s._param("user_name", n)]
		) : s._(
			/*BTDS*/
			""
		);
	}
	l.formatPictureNotification = e;
}), 226);
