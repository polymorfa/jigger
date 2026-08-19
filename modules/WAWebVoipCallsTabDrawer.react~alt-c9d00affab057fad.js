__d("WAWebVoipCallsTabDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebChatlistPanelFunctional.react",
	"WAWebChatlistPanelMode",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebMenuBar.react",
	"WAWebTabOrder",
	"WAWebVoipCreateCallLinksPopup.react",
	"WDSIconIcAddCall.react",
	"WDSIconIcLink.react",
	"WDSMenuBarItem.react",
	"react",
	"useWAWebABPropConfigValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useRef, m = { container: {
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		$$css: !0
	} };
	function p(e) {
		var t = e.onBack, n = e.onClickNewCall, a = e.ref, i = d(), l = s._(
			/*BTDS*/
			""
		), u = s._(
			/*BTDS*/
			""
		), p = o("WAWebABProps").getABPropConfigValue("calls_tab_username_global_search_enabled"), f = c.jsx(r("WAWebDrawerSection.react"), {
			theme: "full-height",
			animation: !1,
			xstyle: m.container,
			children: c.jsx(o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional, {
				showArchiveV2: !1,
				mode: r("WAWebChatlistPanelMode").CallsTab,
				unknownContactPhoneSearchEnabled: p,
				unknownContactUsernameSearchEnabled: p
			}, "callsTab")
		}), g = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			icon: c.jsx(r("WDSIconIcLink.react"), { testid: "ic-link" }),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: _,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER
		}), h = !o("useWAWebABPropConfigValue").useABPropConfigValue("web_calls_tab_empty_state_buttons"), y = c.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcAddCall.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: n,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER
		}), C = [h ? g : null, y].filter(Boolean);
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: i,
			"aria-label": u,
			"data-testid": "calls-tab-drawer",
			children: c.jsxs(r("WAWebDrawer.react"), {
				ref: a,
				theme: "striped",
				testid: "calls-drawer",
				tsNavigationData: { surface: "status" },
				children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: l,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
					onBack: t,
					menu: C
				}), c.jsx(r("WAWebDrawerBody.react"), { children: f })]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["CallsTabDrawer: createCallLinkMenuItem clicked"]))), o("WAWebVoipCreateCallLinksPopup.react").handleGenerateCallLinkClick();
	}
	l.default = p;
}), 226);
