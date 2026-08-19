__d("WAWebMessageCommunityWelcomeSubgroup.react", [
	"fbt",
	"WAWebGroupMetadataCollection",
	"WAWebMessageCommunityCard.react",
	"WAWebMessageCommunityWelcomeMemberTitle.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.templateParams, a = n[0], i = n[2], l = (t = r("WAWebGroupMetadataCollection").get(i)) == null ? void 0 : t.subject, c = [u.jsx(u.Fragment, { children: l != null ? s._(
			/*BTDS*/
			"",
			[s._param("group_name", l)]
		) : s._(
			/*BTDS*/
			""
		) }), s._(
			/*BTDS*/
			""
		)], d = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
			communityId: a,
			title: o("WAWebMessageCommunityWelcomeMemberTitle.react").communityWelcomeMemberTitle(),
			body: u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, { items: c }),
			footer: d
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
