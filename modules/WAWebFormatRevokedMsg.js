__d("WAWebFormatRevokedMsg", [
	"fbt",
	"WAWebContactCollection",
	"WAWebFrontendContactGetters",
	"WAWebMsgGetters",
	"WAWebWidFormat"
], (function(t, n, r, o, a, i, l, s) {
	var e = function(t) {
		var e = o("WAWebContactCollection").ContactCollection.get(t);
		return e ? e.shortName || e.name || o("WAWebFrontendContactGetters").getDisplayName(e) : o("WAWebWidFormat").widToFormattedUser(t);
	};
	function u(t) {
		return o("WAWebMsgGetters").getIsRevokedByMe(t) ? s._(
			/*BTDS*/
			""
		) : t.revokeSender == null ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("admin", e(t.revokeSender))]
		);
	}
	function c(e) {
		return o("WAWebMsgGetters").getIsSentByMe(e) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function d(e) {
		var t, n = (t = e.subtype) != null ? t : "sender";
		switch (n) {
			case "sender": return c(e);
			case "admin": return u(e);
		}
	}
	function m(e) {
		var t, n = (t = e.subtype) != null ? t : "sender";
		switch (n) {
			case "sender": return c(e);
			case "admin": return o("WAWebMsgGetters").getIsNewsletterMsg(e) ? p(e) : u(e);
		}
	}
	function p(e) {
		return o("WAWebMsgGetters").getIsRevokedByMe(e) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	l.formatRevokedComment = d, l.formatRevokedMsg = m;
}), 226);
