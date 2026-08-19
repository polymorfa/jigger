__d("MAWThreadSnippetForVideoMsg", [
	"MAWLocalizationType",
	"WAJids",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		var n = t.author, r = t.gifPlayback, a = t.mentionedJids, i = t.snippetSenderContactId, l = r === !0, s = o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET, u = {
			contactIDs: [],
			mentionJIDs: a,
			strings: []
		};
		return o("WAJids").isAuthorMe(n) ? s = l ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_GIF : o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_VIDEO : o("WAJids").isAuthorSystem(n) || i == null ? o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Video message can not have AUTHOR_SYSTEM"]))) : (s = l ? o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_GIF : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_VIDEO, u.contactIDs.push(i)), {
			snippetParams: u,
			snippetSenderContactId: i,
			snippetType: s
		};
	}
	l.default = s;
}), 98);
