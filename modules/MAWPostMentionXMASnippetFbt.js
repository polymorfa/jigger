__d("MAWPostMentionXMASnippetFbt", ["fbt", "isStringNullOrWhitespaceOnly"], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = function(t) {
		return r("isStringNullOrWhitespaceOnly")(t) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("user_name", t)]
		);
	}, u = function(t) {
		return r("isStringNullOrWhitespaceOnly")(t) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("user_name", t)]
		);
	};
	l.getCurrentUserSendPostMentionSnippetFbt = e, l.getParticipantSendPostMentionSnippetFbt = u;
}), 226);
