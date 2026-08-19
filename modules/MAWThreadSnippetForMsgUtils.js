__d("MAWThreadSnippetForMsgUtils", [
	"MAWLocalizationType",
	"WAJids",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n, r) {
		var a = o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET, i = {
			contactIDs: [],
			mentionJIDs: n != null ? n : [],
			strings: []
		};
		return o("WAJids").isAuthorMe(t) ? a = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STICKER : o("WAJids").isAuthorSystem(t) || r == null ? o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Sticker message can not have AUTHOR_SYSTEM"]))) : (a = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STICKER, i.contactIDs.push(r)), {
			snippetParams: i,
			snippetSenderContactId: r,
			snippetType: a
		};
	}
	l.getMAWThreadSnippetForStickerMsg = s;
}), 98);
