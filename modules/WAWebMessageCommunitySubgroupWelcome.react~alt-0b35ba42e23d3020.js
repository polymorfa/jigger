__d("WAWebMessageCommunitySubgroupWelcome.react", [
	"fbt",
	"WAWebMessageCommunityCard.react",
	"WAWebMessageCommunitySubgroupWelcomeTitle.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.author, n = e.chat, r = e.clickable, a = e.templateParams, i = a[0], l = [s._(
			/*BTDS*/
			""
		), s._(
			/*BTDS*/
			""
		)], c = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
			communityId: i,
			subgroupId: n.id,
			title: o("WAWebMessageCommunitySubgroupWelcomeTitle.react").communitySubgroupWelcomeTitle({
				templateParams: a,
				clickable: r,
				author: t
			}),
			body: u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, { items: l }),
			footer: c,
			openNavigation: !0
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.MessageCommunitySubgroupWelcome = c;
}), 226);
