__d("WAWebMessageCommunityWelcomeAdmin.react", [
	"fbt",
	"WAWebFormatLinkNotification",
	"WAWebGroupMetadataCollection",
	"WAWebMessageCommunityCard.react",
	"WAWebMessageCommunityWelcomeAdminTitle.react",
	"WAWebUserPrefsMeUser",
	"WAWebWid",
	"WAWebWidFactory",
	"WDSPaddings.stylex",
	"isStringNullOrEmpty",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		paddingTop5: {
			paddingTop: "x123j3cw",
			$$css: !0
		},
		paddingBottom6: {
			paddingBottom: "x10b6aqq",
			$$css: !0
		}
	};
	function m(t) {
		var n, a = t.author, i = t.chat, l = t.templateParams, u = l.length > 0 ? l[0] : null, m;
		u instanceof r("WAWebWid") ? m = u : r("isStringNullOrEmpty")(u) || (m = o("WAWebWidFactory").createWid(u));
		var p = m != null ? r("WAWebGroupMetadataCollection").get(m) : null;
		p != null && p.parentGroup && (m = p.parentGroup);
		var _ = o("WAWebUserPrefsMeUser").isMeAccount((n = i.groupMetadata) == null ? void 0 : n.owner);
		if (!_) return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingHor12, d.paddingTop5, d.paddingBottom6), { children: o("WAWebFormatLinkNotification").formatLinkNotification({
			author: a,
			clickable: !0,
			subject: null,
			subtype: "community_create",
			templateParams: l
		}) }));
		if (m == null) return null;
		var f = c.jsx("div", {
			className: "xe2zdcy x2vl965",
			children: s._(
				/*BTDS*/
				""
			)
		}), g = s._(
			/*BTDS*/
			""
		);
		return c.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
			communityId: m,
			subgroupId: i.id,
			title: o("WAWebMessageCommunityWelcomeAdminTitle.react").communityWelcomeAdminTitle({
				templateParams: l,
				chat: i,
				author: a
			}),
			subtitle: f,
			footer: g
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.MessageCommunityWelcomeAdmin = m;
}), 226);
