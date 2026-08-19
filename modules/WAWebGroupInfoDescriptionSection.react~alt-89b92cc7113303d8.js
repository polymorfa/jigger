__d("WAWebGroupInfoDescriptionSection.react", [
	"fbt",
	"WAWebCommonGroupInfoDescriptionSection.react",
	"WAWebGroupType",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = o("useWAWebModelValues").useOptionalModelValues(t.groupMetadata, ["groupType"]), a;
		return (n == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? a = u.jsx("div", {
			className: "x14ug900 x1jchvi3",
			children: s._(
				/*BTDS*/
				""
			)
		}) : a = s._(
			/*BTDS*/
			""
		), u.jsx(r("WAWebCommonGroupInfoDescriptionSection.react"), {
			chat: e.chat,
			showFullDescription: e.showFullDescription,
			editRestrictionText: s._(
				/*BTDS*/
				""
			),
			testid: "group-info-drawer-description-title-input",
			containerTestId: "group-info-drawer-description-container",
			emptyValuePlaceholder: a,
			focusOnMount: e.focusOnMount
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
