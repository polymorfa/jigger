__d("WAWebEmojiPanelMenuSectionTab.react", [
	"fbt",
	"WAWebEmojiPanelEmojiSections",
	"WAWebEmojiPanelMenuSectionIcon.react",
	"WAWebPanelsMenuTab.react",
	"react",
	"useWAWebForwardRefSetter"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react"));
	function d(t) {
		var n, a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), u = r("useWAWebForwardRefSetter")(i), d = (n = {}, n[(a = o("WAWebEmojiPanelEmojiSections")).SECTIONS.RECENT] = s._(
			/*BTDS*/
			""
		), n[a.SECTIONS.RECENT_REACTIONS] = s._(
			/*BTDS*/
			""
		), n[a.SECTIONS.SMILEYS_PEOPLE] = s._(
			/*BTDS*/
			""
		), n[a.SECTIONS.ANIMALS_NATURE] = s._(
			/*BTDS*/
			""
		), n[a.SECTIONS.FOOD_DRINK] = s._(
			/*BTDS*/
			""
		), n[a.SECTIONS.ACTIVITY] = s._(
			/*BTDS*/
			""
		), n[a.SECTIONS.TRAVEL_PLACES] = s._(
			/*BTDS*/
			""
		), n[a.SECTIONS.OBJECTS] = s._(
			/*BTDS*/
			""
		), n[a.SECTIONS.SYMBOLS] = s._(
			/*BTDS*/
			""
		), n[a.SECTIONS.FLAGS] = s._(
			/*BTDS*/
			""
		), n), m = l.sectionId, p = d[m];
		return c.jsx(o("WAWebPanelsMenuTab.react").MenuTab, {
			onClick: l.onClick,
			sectionId: m,
			selected: l.selected,
			showFocusIndicator: l.showFocusIndicator,
			theme: o("WAWebPanelsMenuTab.react").THEMES.MENU,
			title: p,
			onRef: u,
			children: c.jsx(r("WAWebEmojiPanelMenuSectionIcon.react"), { sectionId: m })
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
