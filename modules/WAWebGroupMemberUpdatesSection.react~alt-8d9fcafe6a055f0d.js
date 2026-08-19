__d("WAWebGroupMemberUpdatesSection.react", [
	"fbt",
	"WAWebChatInfoDrawerSection.react",
	"WAWebDrawerButtonRefreshed.react",
	"WDSIconIcFormatListBulleted.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onMemberUpdates;
		return u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
			testid: "li-member-updates",
			onClick: t,
			icon: u.jsx(r("WDSIconIcFormatListBulleted.react"), {}),
			children: s._(
				/*BTDS*/
				""
			)
		}) });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
