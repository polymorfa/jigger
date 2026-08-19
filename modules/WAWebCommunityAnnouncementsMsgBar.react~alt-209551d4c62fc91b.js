__d("WAWebCommunityAnnouncementsMsgBar.react", [
	"fbt",
	"WALogger",
	"WAWebClickable.react",
	"WAWebCmd",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebKeyboardIsKeyActivation",
	"WAWebMsgBarActions",
	"WAWebTabOrder",
	"WDSTextualLink.react",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { wrapper: {
		width: "xh8yej3",
		marginTop: "x16z1lm9",
		marginBottom: "x11tup63",
		$$css: !0
	} };
	function m(t) {
		var n = t.groupMetadata, a = o("useWAWebModelValues").useModelValues(n, [
			"participants",
			"parentGroup",
			"id"
		]), i = a.parentGroup;
		if (!i) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["CommunityAnnouncementsMsgBar null parent"]))), null;
		var l = function(t) {
			t.stopPropagation(), o("WAWebMsgBarActions").handleMsgAdmin(a, s._(
				/*BTDS*/
				""
			));
		}, u = function(t) {
			r("WAWebKeyboardIsKeyActivation")(t) && t.stopPropagation();
		}, m = c.jsx(r("WDSTextualLink.react"), {
			"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
			onClick: l,
			onKeyDown: u,
			children: s._(
				/*BTDS*/
				""
			)
		});
		return c.jsx(o("WAWebClickable.react").Clickable, {
			onClick: function() {
				o("WAWebCmd").Cmd.openCommunityHome(i);
			},
			xstyle: d.wrapper,
			children: c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: c.jsx(r("WAWebFlexItem.react"), { children: c.jsx("span", {
					className: "x126k92a",
					children: s._(
						/*BTDS*/
						"",
						[s._param("community admins link", m)]
					)
				}) })
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
