__d("WAWebChatlistHeaderV2.react", [
	"fbt",
	"WAWebABProps",
	"WAWebActiveAccountInfoContext.react",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebBusinessProfileCollection",
	"WAWebChatlistHeaderDropdown.react",
	"WAWebCmd",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebFbtCommon",
	"WAWebMessageYourselfMetricUtils",
	"WAWebMobilePlatforms",
	"WAWebNewChatFlowLoadable",
	"WAWebNewChatMenuBarItem.react",
	"WAWebSMBUserJourneyLogger",
	"WAWebTabOrder",
	"WAWebThemeContext",
	"WAWebUserPrefsMeUser",
	"WAWebWaWordmarkIcon.react",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSmbFeatureNameEnum",
	"WAWebWamEnumSmbUserActionTypeEnum",
	"WAWebWamEnumSurfaceType",
	"WDSIconIcMoreVert.react",
	"WDSMenuBarItem.react",
	"cr:23046",
	"react",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.memo, m = c.useMemo, p = c.useRef, _ = c.useState, f = {
		wordmarkColor: {
			color: "x1v5yvga",
			$$css: !0
		},
		wordmarkColorDark: {
			color: "x17t9dm2",
			$$css: !0
		},
		marginStart8: {
			marginInlineStart: "x150mmf0",
			$$css: !0
		}
	};
	function g(e) {
		"use no forget";
		var t, a = e.headerRef, i = e.isMultiSelectMode, l = e.onSelectChatClick, c = e.updateActiveNavBarItem, d = (t = n("cr:23046") == null ? void 0 : n("cr:23046").isWindowsHybridEnabled()) != null ? t : !1, g = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), h = o("WAWebThemeContext").useIsDarkTheme(), y = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(), C = m(function() {
			return o("WAWebUserPrefsMeUser").getMeUserOrThrow();
		}, []), b = _(!0), v = b[0], S = b[1], R = m(function() {
			return o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(C);
		}, [C]);
		o("useWAWebListener").useListener(R, "change:profileOptions", g);
		var L = function(t) {
			t == null || t.preventDefault(), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "new_chat" } : u.jsx(o("WAWebNewChatFlowLoadable").NewChatFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft })), o("WAWebMessageYourselfMetricUtils").UiMessageYourselfNewChatAction.startSession(), o("WAWebMessageYourselfMetricUtils").UiMessageYourselfNewChatAction.newChatPressed(), o("WAWebMobilePlatforms").isSMB() && o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
				featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
				userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
				userActionTarget: "new_chat_button"
			});
		}, E = u.jsx(r("WAWebNewChatMenuBarItem.react"), {
			chatListVisible: v,
			onNewChat: L
		}, "btn-new-chat"), k = u.jsx(r("WAWebChatlistHeaderDropdown.react"), {
			startMultiSelect: l,
			isMultiSelectMode: i,
			activeAccountInfo: y,
			updateActiveNavBarItem: c
		}), I = u.jsx(r("WDSMenuBarItem.react"), {
			testid: "menu-bar-menu",
			icon: r("WDSIconIcMoreVert.react"),
			title: s._(
				/*BTDS*/
				""
			),
			tabOrder: v === !0 ? o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER : void 0,
			disabled: !v,
			marginInlineXstyle: f.marginStart8,
			wdsMenuToRender: k
		}, "btn-menu"), T = !d, D = !T && { title: s._(
			/*BTDS*/
			""
		) }, x = p(null), $ = function(t) {
			S(t);
		}, P = function(t) {
			var e, n = (e = a.current) == null ? void 0 : e.parentElement;
			t(n == null ? void 0 : n.getBoundingClientRect());
		};
		return o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chat_list_visibility_change", $), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "get_chat_list_panel_offset", P), u.jsx("header", {
			"data-testid": "chatlist-header",
			ref: a,
			children: u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({ ref: x }, D, {
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
				menu: o("WAWebABProps").getABPropConfigValue("wa_web_match_primary_icons") ? [I, E] : [E, I],
				focusBackOrCancel: !0,
				children: T && u.jsx(o("WAWebWaWordmarkIcon.react").WaWordmarkIcon, {
					"aria-hidden": !1,
					"aria-label": r("WAWebFbtCommon")("WhatsApp"),
					xstyle: h ? f.wordmarkColorDark : f.wordmarkColor
				})
			}))
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = d(g);
	l.WAWebChatlistHeaderV2 = h;
}), 226);
