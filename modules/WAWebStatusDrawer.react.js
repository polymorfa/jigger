__d("WAWebStatusDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebCmd",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebStatusCollection",
	"WAWebStatusList.react",
	"WAWebStatusListHeader.react",
	"WAWebStatusPostingDropdown.react",
	"WAWebTabOrder",
	"WAWebUserPrefsGeneral",
	"WAWebWamEnumStatusCreationEntryPoint",
	"WDSIconIcAddCircle.react",
	"WDSIconIcMoreVert.react",
	"WDSMenuBarItem.react",
	"react",
	"useLazyRef",
	"useMergeRefs",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef;
	function p(e) {
		var t = e.onBack, n = e.onOpenStatusPrivacySettingDrawer, a = e.ref, i = m(), l = r("useLazyRef")(function() {
			return Math.round(Math.random() * 1e9);
		});
		d(function() {
			o("WAWebUserPrefsGeneral").setLastStatusUsage(), l.current != null && o("WAWebStatusCollection").StatusCollection.logMetrics({
				type: "session",
				sessionId: l.current
			}), o("WAWebCmd").Cmd.onStatusViewerOpen();
		}, []);
		var c = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		), _ = u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			children: u.jsx(r("WAWebStatusListHeader.react"), { sessionIdRef: l })
		}), f = u.jsx(r("WAWebDrawerSection.react"), {
			theme: "full-height",
			animation: !1,
			testid: "status-list-drawer",
			children: u.jsx(r("WAWebStatusList.react"), { sessionIdRef: l })
		}), g = r("useWAWebFocusOnMount")(), h = r("useMergeRefs")(i, g), y = u.jsx(r("WDSMenuBarItem.react"), {
			testid: "menu-bar-add-status",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			title: s._(
				/*BTDS*/
				""
			),
			buttonVariant: "borderless",
			icon: r("WDSIconIcAddCircle.react"),
			wdsMenuToRender: u.jsx(o("WAWebStatusPostingDropdown.react").AddStatusMenu, { entryPoint: o("WAWebWamEnumStatusCreationEntryPoint").STATUS_CREATION_ENTRY_POINT.STATUS_TAB_SELF_POG })
		}), C = u.jsx(r("WDSMenuBarItem.react"), {
			testid: "menu-bar-status-menu",
			title: s._(
				/*BTDS*/
				""
			),
			buttonVariant: "borderless",
			icon: r("WDSIconIcMoreVert.react"),
			wdsMenuToRender: u.jsx(o("WAWebStatusPostingDropdown.react").StatusPrivacyMenu, { onOpenStatusPrivacySettingDrawer: n })
		}), b = o("WAWebABProps").getABPropConfigValue("wa_web_match_primary_icons");
		return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: h,
			"aria-label": p,
			"data-testid": "status-tab-drawer",
			children: u.jsxs(r("WAWebDrawer.react"), {
				ref: a,
				theme: "striped",
				testid: "status-drawer",
				tsNavigationData: { surface: "status" },
				children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: c,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
					menu: u.jsx("div", {
						className: "x78zum5 x1qvou4u x1s70e7g",
						children: b ? u.jsxs(u.Fragment, { children: [C, y] }) : u.jsxs(u.Fragment, { children: [y, C] })
					}),
					onBack: t
				}), u.jsxs(r("WAWebDrawerBody.react"), { children: [_, f] })]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
