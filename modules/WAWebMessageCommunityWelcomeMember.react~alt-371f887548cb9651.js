__d("WAWebMessageCommunityWelcomeMember.react", [
	"fbt",
	"WAWebFormatParticipantNames",
	"WAWebMessageCommunityCard.react",
	"WAWebMessageCommunityWelcomeMemberTitle.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.author, n = e.chat, r = e.clickable, a = e.templateParams, i = a[0], l = t ? o("WAWebFormatParticipantNames").getFormattedName(t, r) : null, c = [u.jsx(u.Fragment, { children: l == null || l === "" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("author", l)]
		) }), s._(
			/*BTDS*/
			""
		)], d = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
			communityId: i,
			subgroupId: n.id,
			title: o("WAWebMessageCommunityWelcomeMemberTitle.react").communityWelcomeMemberTitle(),
			body: u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, { items: c }),
			footer: d
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.MessageCommunityWelcomeMember = c;
}), 226);
