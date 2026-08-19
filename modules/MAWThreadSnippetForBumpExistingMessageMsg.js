__d("MAWThreadSnippetForBumpExistingMessageMsg", [
	"MAWLocalizationType",
	"WAGlobals",
	"WAJids",
	"WALogger",
	"WAMsgType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c;
	function d(e, t, n) {
		return {
			snippetParams: {
				contactIDs: n != null ? n : [],
				strings: []
			},
			snippetSenderContactId: e,
			snippetType: t
		};
	}
	var m = function(t) {
		return d(t, o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET);
	};
	function p(t) {
		var n = t.author, r = t.replyAuthor, a = t.replyType, i = t.snippetSenderContactId;
		if (o("WAJids").isAuthorSystem(n)) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Bumped message can not have AUTHOR_SYSTEM"]))), m(i);
		var l = a;
		if (l === o("WAMsgType").UNAVAILABLE) return o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Bump message has unavailable content type"]))), m(i);
		var p = r;
		return p == null ? (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Bump message has no quoted author"]))), m(i)) : o("WAJids").isAuthorMe(n) || n === o("WAGlobals").getMyUserJid() ? o("WAJids").isAuthorMe(p) || p === o("WAGlobals").getMyUserJid() ? d(i, o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_BUMPED_OWN_MESSAGE) : d(i, o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_BUMPED_MESSAGE, [o("WAJids").userIdFromJid(p)]) : i == null ? (o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Bump message sender is null"]))), m(i)) : o("WAJids").isAuthorMe(p) || p === o("WAGlobals").getMyUserJid() ? d(i, o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_BUMPED_CURRENT_USER_MESSAGE, [i]) : p === n ? d(i, o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_BUMPED_OWN_MESSAGE, [i]) : d(i, o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_BUMPED_PARTICIPANT_MESSAGE, [i, o("WAJids").userIdFromJid(p)]);
	}
	l.default = p;
}), 98);
