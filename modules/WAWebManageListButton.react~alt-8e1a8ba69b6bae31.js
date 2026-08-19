__d("WAWebManageListButton.react", [
	"fbt",
	"WAWebCreateOrEditListDrawer.react",
	"WAWebDrawerManager",
	"WAWebKeyboardHotKeys.react",
	"WAWebTabOrder",
	"WAWebWamEnumUpdateEntryPoint",
	"WDSFontTokenStyles",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		button: {
			cursor: "x1ypdohk",
			display: "x78zum5",
			maxWidth: "x193iq5w",
			minWidth: "xeuugli",
			$$css: !0
		},
		manageListText: {
			color: "xk4n5i7",
			display: "x1lliihq",
			maxWidth: "x193iq5w",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.listId, a = t.listName, i = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(r("WAWebCreateOrEditListDrawer.react"), {
				listId: n,
				onBack: o("WAWebDrawerManager").closeDrawerLeft,
				onClose: o("WAWebDrawerManager").closeDrawerLeft,
				entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LIST_FILTER_MANAGE
			}), { focusOnUnMount: !0 });
		}, l = s._(
			/*BTDS*/
			"",
			[s._param("listName", a)]
		);
		return c.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k xdd8jsf x1phvje8 xcldk2z",
			children: c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				handlers: {
					enter: i,
					space: i
				},
				"aria-label": l.toString(),
				role: "button",
				"data-testid": "manage-list-button",
				onClick: i,
				xstyle: d.button,
				tabIndex: 0,
				"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
				children: c.jsx("span", babelHelpers.extends({ title: a }, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, d.manageListText), { children: s._(
					/*BTDS*/
					"",
					[s._param("listName", a)]
				) }))
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
