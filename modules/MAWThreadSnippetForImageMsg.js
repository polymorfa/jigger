__d("MAWThreadSnippetForImageMsg", [
	"MAWLocalizationType",
	"WAJids",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		var n = t.author, r = t.mentionedJids, a = t.snippetSenderContactId, i = o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET, l = {
			contactIDs: [],
			mentionJIDs: r,
			strings: []
		};
		return o("WAJids").isAuthorMe(n) ? i = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_IMAGE : o("WAJids").isAuthorSystem(n) || a == null ? o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Image message can not have AUTHOR_SYSTEM"]))) : (i = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_IMAGE, l.contactIDs.push(a)), {
			snippetParams: l,
			snippetSenderContactId: a,
			snippetType: i
		};
	}
	l.default = s;
}), 98);
