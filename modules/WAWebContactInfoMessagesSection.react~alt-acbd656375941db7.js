__d("WAWebContactInfoMessagesSection.react", [
	"fbt",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatInfoDrawerSection.react",
	"WAWebStarRefreshedIcon.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d(e) {
		var t = e.onStarred, n = s._(
			/*BTDS*/
			""
		), r = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: n }), a = u.jsx(o("WAWebStarRefreshedIcon.react").StarRefreshedIcon, { iconXstyle: c.secondaryColor });
		return u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			titleTestId: "section-starred-messages",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
			children: u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
				icon: a,
				onClick: t,
				testid: "block-starred-messages",
				title: r
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
