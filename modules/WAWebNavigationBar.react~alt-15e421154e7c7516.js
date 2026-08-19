__d("WAWebNavigationBar.react", [
	"WAWebBetaNavBarItem.react",
	"WAWebBizAdCreationNavBarItem.react",
	"WAWebBizToolsNavBarItem.react",
	"WAWebBotGating",
	"WAWebCallsNavBarItemLoadable.react",
	"WAWebChatCollection",
	"WAWebChatLockUtils",
	"WAWebChatsNavBarItem.react",
	"WAWebCommunitiesNavBarItem.react",
	"WAWebContactManagerNavBarItem.react",
	"WAWebDrawerManager",
	"WAWebEnvironment",
	"WAWebFeedbackNavBarItem.react",
	"WAWebFlex.react",
	"WAWebFrontendChatGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebMeTabNavBarItem.react",
	"WAWebMediaHubNavBarItem.react",
	"WAWebMetaBotNavBarItem.react",
	"WAWebMobilePlatforms",
	"WAWebNewslettersNavBarItem.react",
	"WAWebPrivacyModeIndicator.react",
	"WAWebProfileNavBarItem.react",
	"WAWebSettingGatingUtils",
	"WAWebSettingsNavBarItem.react",
	"WAWebStatusNavBarItem.react",
	"WAWebTabOrder",
	"WAWebTeamLinkGating",
	"WAWebTeamLinkNavBarItem.react",
	"WAWebUseArrowKeyNavigation",
	"WAWebUseFocusSyncOnActiveItemChange",
	"WAWebWindowsArchivedChatsNavBarItem.react",
	"WAWebWindowsLockedChatsNavBarItem.react",
	"WDSPaddings.stylex",
	"cr:12462",
	"cr:21012",
	"cr:21280",
	"react",
	"useMergeRefs",
	"useWAWebChatLockSettings",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.memo, d = u.useState, m = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, p = {
		header: {
			zIndex: "x12xzxwr",
			position: "x1n2onr6",
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			minWidth: "xq3y45c",
			width: "xbyj736",
			height: "x5yr21d",
			backgroundColor: "x1h3rtpe",
			$$css: !0
		},
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		fullHeight: {
			height: "x5yr21d",
			$$css: !0
		},
		wrapper: {
			rowGap: "x129bwdz",
			$$css: !0
		}
	};
	function _() {
		return s.jsx("hr", { className: "xh8yej3 xjm9jq1 x178xt8z x13fuv20 xx42vgk x18oe1m7 x1sy0etr xstzfhl" });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.activeNavBarItem, a = e.headerRef, i = e.updateActiveNavBarItem, l = o("WAWebUseArrowKeyNavigation").useArrowKeyNavigation({ prefix: "navbar" }), u = l.down, c = l.focusItemIndex, f = l.focusSelectedItem, g = l.onFocus, h = l.ref, y = l.up, C = function() {
			c(0);
		}, b = {
			up: y,
			down: u,
			escape: C
		};
		o("WAWebUseFocusSyncOnActiveItemChange").useFocusSyncOnActiveItemChange(t, h, f);
		var v = r("useMergeRefs")(a, h), S = r("WAWebEnvironment").isWindows === !0, R = function() {
			return S && o("WAWebChatCollection").ChatCollection.some(function(e) {
				return e.archive && o("WAWebFrontendChatGetters").getShouldAppearInList(e);
			});
		}, L = function() {
			return S && o("WAWebChatLockUtils").shouldShowChatLockEntryPoints();
		}, E = d(R()), k = E[0], I = E[1], T = d(L()), D = T[0], x = T[1], $ = o("useWAWebChatLockSettings").useChatLockSettings(), P = $.hideLockedChats;
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:archive", function(e) {
			if (S) if (e.archive === !0) I(!0);
			else {
				var t = R();
				t || o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), I(t);
			}
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:isLocked", function(e) {
			if (S) if (e.isLocked) x(!0);
			else {
				var t = L();
				t || o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), x(t);
			}
		});
		var N = {
			activeNavBarItem: t,
			updateActiveNavBarItem: i
		}, M = k && s.createElement(r("WAWebWindowsArchivedChatsNavBarItem.react"), babelHelpers.extends({}, N, { key: "navbar-item-archived-chats" })), w = D && !P && s.createElement(r("WAWebWindowsLockedChatsNavBarItem.react"), babelHelpers.extends({}, N, { key: "navbar-item-locked-chats" })), A = o("WAWebBotGating").isBotShortcutEntryPointEnabled() && s.createElement(o("WAWebMetaBotNavBarItem.react").MetaBotNavBarItem, babelHelpers.extends({}, N, { key: "navbar-item-metabot" })), F = s.jsx(r("WAWebMediaHubNavBarItem.react"), {}), O = s.jsx(r("WAWebPrivacyModeIndicator.react"), {}), B = o("WAWebMobilePlatforms").isSMB() && s.createElement(o("WAWebBizToolsNavBarItem.react").BizToolsNavBarItem, babelHelpers.extends({}, N, { key: "navbar-item-biz-tools" })), W = o("WAWebMobilePlatforms").isSMB() && s.jsx(o("WAWebBizAdCreationNavBarItem.react").BizAdCreationNavBarItem, { activeNavBarItem: N.activeNavBarItem }, "navbar-item-ads-creation"), q = o("WAWebMobilePlatforms").isSMB() && s.createElement(r("WAWebContactManagerNavBarItem.react"), babelHelpers.extends({}, N, { key: "navbar-item-customer-manager" })), U = o("WAWebTeamLinkGating").teamLinkEnabled() && s.createElement(r("WAWebTeamLinkNavBarItem.react"), babelHelpers.extends({}, N, { key: "navbar-item-teamlink" })), V = [
			M,
			w,
			A,
			B,
			W,
			q,
			U
		];
		V.some(Boolean) && V.unshift(s.jsx(_, {}, "separator"));
		var H = n("cr:12462") ? s.jsx(n("cr:12462").BugnubNavBarItem, {}) : null, G;
		return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: v,
			"data-testid": "chatlist-header",
			component: "header",
			tabIndex: 0,
			"data-tab": o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			handlers: b,
			onFocus: g,
			xstyle: [
				p.header,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor12,
				m.paddingBlock10
			],
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [p.fullWidth, p.fullHeight],
				children: [
					s.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						shrink: 0,
						testid: "navbar-primary-section",
						xstyle: p.fullWidth,
						children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
							xstyle: p.wrapper,
							children: [
								s.jsx(o("WAWebChatsNavBarItem.react").ChatsNavBarItem, babelHelpers.extends({}, N)),
								s.jsx(o("WAWebCallsNavBarItemLoadable.react").CallsNavBarItemLoadable, babelHelpers.extends({}, N)),
								s.jsx(o("WAWebStatusNavBarItem.react").StatusNavBarItem, babelHelpers.extends({}, N)),
								s.jsx(o("WAWebNewslettersNavBarItem.react").NewslettersNavBarItem, babelHelpers.extends({}, N)),
								s.jsx(o("WAWebCommunitiesNavBarItem.react").CommunitiesNavBarItem, babelHelpers.extends({}, N)),
								n("cr:21280") ? s.jsx(n("cr:21280"), babelHelpers.extends({}, N)) : null,
								V
							]
						})
					}),
					s.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 0,
						shrink: 0,
						testid: "navbar-footer-section",
						xstyle: p.fullWidth,
						children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
							xstyle: p.wrapper,
							children: [
								s.jsx(o("WAWebFeedbackNavBarItem.react").FeedbackNavBarItem, {}),
								H,
								F,
								O,
								s.jsx(o("WAWebBetaNavBarItem.react").BetaNavBarItem, babelHelpers.extends({}, N)),
								H == null ? null : s.jsx(_, {}),
								o("WAWebSettingGatingUtils").isMeTabEnabled() ? s.jsx(o("WAWebMeTabNavBarItem.react").MeTabNavBarItem, babelHelpers.extends({}, N)) : s.jsxs(s.Fragment, { children: [s.jsx(o("WAWebSettingsNavBarItem.react").SettingsNavBarItem, babelHelpers.extends({}, N)), s.jsx(o("WAWebProfileNavBarItem.react").ProfileNavBarItem, babelHelpers.extends({}, N))] })
							]
						})
					}),
					G
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = c(f);
	l.NavigationBar = g;
}), 98);
