__d("MAWThreadSnippetForTextMsg", [
	"MAWLocalizationType",
	"MAWVault",
	"WAJids",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		var n = t.author, r = t.content, a = t.isGroup, i = t.mentionedJids, l = t.snippetSenderContactId, s = t.specialTextSize, u = o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET, c = {
			contactIDs: [],
			mentionJIDs: i,
			strings: []
		};
		if (o("WAJids").isAuthorMe(n) ? u = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_TEXT : o("WAJids").isAuthorSystem(n) || l == null ? o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Text message can not have AUTHOR_SYSTEM"]))) : (u = a ? o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_TEXT_IN_GROUP : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_TEXT, c.contactIDs.push(l)), r != null) if (s === 1 || s === 2 || s === 3) {
			var d = o("MAWVault").unvault(r);
			c.strings.push(d === "👍" ? "(Y)" : r);
		} else c.strings.push(r);
		return {
			snippetParams: c,
			snippetSenderContactId: l,
			snippetType: u
		};
	}
	l.default = s;
}), 98);
