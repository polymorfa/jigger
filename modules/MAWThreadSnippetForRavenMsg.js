__d("MAWThreadSnippetForRavenMsg", [
	"MAWLocalizationType",
	"MAWMsg",
	"WAJids",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		var n = t.author, r = t.mentionedJids, a = t.ravenMediaType, i = t.snippetSenderContactId, l = o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET, s = {
			contactIDs: [],
			mentionJIDs: r,
			strings: []
		};
		return o("WAJids").isAuthorMe(n) ? l = a === o("MAWMsg").MAWRavenMsgMediaType.IMAGE ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_IMAGE : o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_VIDEO : o("WAJids").isAuthorSystem(n) || i == null ? o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Animated message can not have AUTHOR_SYSTEM"]))) : (l = a === o("MAWMsg").MAWRavenMsgMediaType.IMAGE ? o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_IMAGE : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_VIDEO, s.contactIDs.push(i)), {
			snippetParams: s,
			snippetSenderContactId: i,
			snippetType: l
		};
	}
	l.default = s;
}), 98);
