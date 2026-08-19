__d("WAWebMessageCommunityWelcomeAdminTitle.react", [
	"fbt",
	"WAWebFormatLinkNotification",
	"WAWebUserPrefsMeUser",
	"nullthrows"
], (function(t, n, r, o, a, i, l, s) {
	function e(e) {
		var t, n = e.author, a = e.chat, i = e.templateParams, l = o("WAWebUserPrefsMeUser").isMeAccount((t = a.groupMetadata) == null ? void 0 : t.owner);
		return l ? s._(
			/*BTDS*/
			""
		) : r("nullthrows")(o("WAWebFormatLinkNotification").formatLinkNotifAsFbt({
			author: n,
			subject: null,
			subtype: "community_create",
			templateParams: i
		}));
	}
	l.communityWelcomeAdminTitle = e;
}), 226);
