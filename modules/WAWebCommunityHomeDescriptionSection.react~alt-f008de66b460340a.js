__d("WAWebCommunityHomeDescriptionSection.react", [
	"fbt",
	"WAWebCommonGroupInfoDescriptionSection.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = e.showFullDescription, o = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WAWebCommonGroupInfoDescriptionSection.react"), {
			chat: t,
			showFullDescription: n,
			editRestrictionText: s._(
				/*BTDS*/
				""
			),
			testid: "community-home-drawer-description-title-input",
			containerTestId: "community-home-drawer-description",
			emptyValuePlaceholder: o
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
