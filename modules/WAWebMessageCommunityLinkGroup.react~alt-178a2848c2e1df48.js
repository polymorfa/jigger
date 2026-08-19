__d("WAWebMessageCommunityLinkGroup.react", [
	"fbt",
	"WAWebGroupMetadataCollection",
	"WAWebMessageCommunityCard.react",
	"WAWebMessageCommunityLinkGroupTitle.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n, a = e.author, i = e.chat, l = e.clickable, c = e.templateParams, d = c[0], m = r("WAWebGroupMetadataCollection").get(d), p = m == null ? void 0 : m.participants.iAmAdmin(), _ = (t = i.groupMetadata) == null ? void 0 : t.membershipApprovalMode, f = (n = i.groupMetadata) == null ? void 0 : n.hiddenSubgroup, g;
		f === !0 ? g = s._(
			/*BTDS*/
			""
		) : _ === !0 ? g = s._(
			/*BTDS*/
			""
		) : g = s._(
			/*BTDS*/
			""
		);
		var h = [
			s._(
				/*BTDS*/
				""
			),
			g,
			s._(
				/*BTDS*/
				""
			)
		], y = [s._(
			/*BTDS*/
			""
		), g], C = p === !0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
			communityId: d,
			subgroupId: i.id,
			title: o("WAWebMessageCommunityLinkGroupTitle.react").communityLinkGroupTitle({
				templateParams: c,
				clickable: l,
				author: a
			}),
			body: u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, { items: p === !0 ? y : h }),
			footer: C,
			openNavigation: !p
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.MessageCommunityLinkGroup = c;
}), 226);
