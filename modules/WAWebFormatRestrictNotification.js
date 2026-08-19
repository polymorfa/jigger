__d("WAWebFormatRestrictNotification", ["fbt", "WAWebSystemMessagesUtils"], (function(t, n, r, o, a, i, l, s) {
	var e = 256;
	function u(t) {
		var n = t.author, r = t.authorClickable, a = t.templateParams, i = a[0];
		if (i === "on") {
			if (a[1] != null) {
				var l = parseInt(a[1], 10) || e;
				return s._(
					/*BTDS*/
					"",
					[s._plural(l, "threshold")]
				);
			}
			return o("WAWebSystemMessagesUtils").isMe(n) ? s._(
				/*BTDS*/
				""
			) : r != null ? s._(
				/*BTDS*/
				"",
				[s._param("user_name", r)]
			) : s._(
				/*BTDS*/
				""
			);
		} else if (o("WAWebSystemMessagesUtils").isMe(n)) return s._(
			/*BTDS*/
			""
		);
		return r != null ? s._(
			/*BTDS*/
			"",
			[s._param("user_name", r)]
		) : s._(
			/*BTDS*/
			""
		);
	}
	l.formatRestrictNotification = u;
}), 226);
