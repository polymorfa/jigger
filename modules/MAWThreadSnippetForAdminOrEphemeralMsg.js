__d("MAWThreadSnippetForAdminOrEphemeralMsg", [
	"FBLogger",
	"MAWAdminMsgNormalized",
	"MAWLocalizationType",
	"MAWLocalizationUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.adminMsgContent, n = e.adminType, a = e.snippetSenderContactId, i = n;
		if (i == null || t == null) return r("FBLogger")("GroupPollsE2EE").mustfix("MAWThreadSnippetForAdminOrEphemeralMsg: snippetType or adminMsgContent is null"), {
			snippetParams: {
				contactIDs: [],
				strings: []
			},
			snippetSenderContactId: a,
			snippetType: o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET
		};
		var l = o("MAWLocalizationUtils").isAdminMsgNormalized(i) ? o("MAWAdminMsgNormalized").deconstructContactIdsFromAdminContent(i, t) : {
			contactIds: [],
			contents: t
		}, s = l.contactIds, u = l.contents;
		return {
			snippetParams: {
				contactIDs: [].concat(s.map(function(e) {
					return e === "Facebook User" ? "0" : e;
				})),
				strings: [].concat(u)
			},
			snippetSenderContactId: a,
			snippetType: i
		};
	}
	l.default = e;
}), 98);
