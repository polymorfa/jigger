__d("WAWebMidDrawerEmptyState.react", [
	"fbt",
	"WAWebActiveCommunityNavigation",
	"WAWebAppContext.react",
	"WAWebBotBaseGating",
	"WAWebChannelsQuickActions",
	"WAWebChatCollection",
	"WAWebChatCommunityUtils",
	"WAWebCommunityNavigationQuickActions",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerManagerContext",
	"WAWebIntroPanelStyles.stylex",
	"WAWebLockOutlineIcon.react",
	"WAWebMetaAILandingLoadable",
	"WAWebNavBarTypes",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterIcon.react",
	"WAWebQuickActionGatingUtils",
	"WAWebQuickActionSection.react",
	"WAWebSettingsFilledRefreshedIcon.react",
	"WAWebStatusFilledRefreshedIcon.react",
	"WAWebStatusQuickActions",
	"WAWebVoipCallsTabEmptyStateLoadable.react",
	"WDSIconIcAccountCircle.react",
	"WDSIconWdsIcCommunitiesFilled.react",
	"WDSText.react",
	"cr:21286",
	"react",
	"stylex",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		heroIcon: {
			color: "x1vef352",
			display: "x1rg5ohu",
			$$css: !0
		},
		spacingSingleBottom: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		spacingTripleBottom: {
			marginBottom: "x14mdic9",
			$$css: !0
		},
		spacingTripleTop: {
			marginTop: "x9u28bd",
			$$css: !0
		},
		introAnimated: {
			transitionProperty: "x11xpdln",
			transitionDuration: "x13dflua",
			transitionTimingFunction: "xwji4o3",
			$$css: !0
		},
		introShiftedForRightDrawer: {
			transform: "x1kv6fzm",
			$$css: !0
		}
	};
	function m(t) {
		var a = t.type, i = r("useWAWebEventTargetValue")(r("WAWebActiveCommunityNavigation"), "change", function() {
			return r("WAWebActiveCommunityNavigation").getActive();
		}), l = i != null ? o("WAWebChatCollection").ChatCollection.get(i) : null, u = o("WAWebAppContext.react").useAppContext(), m = u.rightDrawerOpen, p = o("WAWebDrawerManagerContext").useDrawerManagerContext("left"), _ = p.drawerContext, f = _.type === "quick_action", g = _.type === "community_home", h = r("useWAWebEventTargetValue")(l == null ? void 0 : l.groupMetadata, ["change:suspended"], function() {
			return o("WAWebChatCommunityUtils").isSuspendedCommunity(l);
		}), y = r("useWAWebEventTargetValue")(l == null ? void 0 : l.groupMetadata, ["change:participants"], function() {
			var e;
			return !!(!(l == null || (e = l.groupMetadata) == null || (e = e.participants) == null) && e.iAmAdmin());
		}), C = r("useWAWebEventTargetValue")(l == null ? void 0 : l.groupMetadata, ["change:suspended", "change:terminated"], function() {
			return o("WAWebChatCommunityUtils").canAddGroupToCommunity(l);
		}), b = r("useWAWebEventTargetValue")(l == null ? void 0 : l.groupMetadata, ["change:allowNonAdminSubGroupCreation"], function() {
			var e;
			return (l == null || (e = l.groupMetadata) == null ? void 0 : e.allowNonAdminSubGroupCreation) === !0;
		}), v, S, R, L, E;
		switch (a) {
			case o("WAWebNavBarTypes").NavBarItems.Status: {
				var k = !f && o("WAWebQuickActionGatingUtils").isQuickActionsEnabled("status");
				k ? E = c.jsx(r("WAWebQuickActionSection.react"), {
					actions: r("WAWebStatusQuickActions"),
					context: void 0,
					surface: "status"
				}) : (v = c.jsx(o("WAWebStatusFilledRefreshedIcon.react").StatusFilledRefreshedIcon, {
					height: 64,
					width: 64,
					iconXstyle: d.heroIcon
				}), S = s._(
					/*BTDS*/
					""
				), R = s._(
					/*BTDS*/
					""
				)), o("WAWebNewsletterGatingUtils").isNewsletterStatusProfileRingEnabled() || (L = c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encrypted), { children: [
					c.jsx("span", babelHelpers.extends({}, e.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encryptedIcon), { children: c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
						height: 20,
						width: 20
					}) })),
					" ",
					s._(
						/*BTDS*/
						""
					)
				] })));
				break;
			}
			case o("WAWebNavBarTypes").NavBarItems.Newsletters: {
				var I = !f && o("WAWebQuickActionGatingUtils").isQuickActionsEnabled("channels");
				I ? E = c.jsx(r("WAWebQuickActionSection.react"), {
					actions: r("WAWebChannelsQuickActions"),
					context: void 0,
					surface: "channels"
				}) : (v = c.jsx(o("WAWebNewsletterIcon.react").NewsletterIcon, {
					height: 64,
					width: 64,
					iconXstyle: d.heroIcon
				}), S = s._(
					/*BTDS*/
					""
				), R = s._(
					/*BTDS*/
					""
				));
				break;
			}
			case o("WAWebNavBarTypes").NavBarItems.Settings: {
				v = c.jsx(o("WAWebSettingsFilledRefreshedIcon.react").SettingsFilledRefreshedIcon, {
					height: 64,
					width: 64,
					iconXstyle: d.heroIcon
				}), S = s._(
					/*BTDS*/
					""
				);
				break;
			}
			case o("WAWebNavBarTypes").NavBarItems.Profile: {
				v = c.jsx(r("WDSIconIcAccountCircle.react"), {
					height: 64,
					width: 64,
					iconXstyle: d.heroIcon
				}), S = s._(
					/*BTDS*/
					""
				);
				break;
			}
			case o("WAWebNavBarTypes").NavBarItems.Communities: {
				var T = l != null && g && o("WAWebQuickActionGatingUtils").isQuickActionsEnabled("community_navigation");
				T && l != null ? E = c.jsx(r("WAWebQuickActionSection.react"), {
					actions: r("WAWebCommunityNavigationQuickActions"),
					context: {
						chat: l,
						isSuspended: h,
						isAdmin: y,
						canAddGroup: C,
						allowNonAdminSubGroupCreation: b
					},
					surface: "community_navigation"
				}) : (v = c.jsx(r("WDSIconWdsIcCommunitiesFilled.react"), {
					height: 64,
					width: 64,
					iconXstyle: d.heroIcon
				}), S = s._(
					/*BTDS*/
					""
				), R = s._(
					/*BTDS*/
					""
				)), L = c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encrypted), { children: [
					c.jsx("span", babelHelpers.extends({}, e.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encryptedIcon), { children: c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
						height: 20,
						width: 20
					}) })),
					" ",
					s._(
						/*BTDS*/
						""
					)
				] }));
				break;
			}
			case o("WAWebNavBarTypes").NavBarItems.TeamLink: {
				S = s._(
					/*BTDS*/
					""
				);
				break;
			}
			case o("WAWebNavBarTypes").NavBarItems.Calls: return c.jsx(o("WAWebVoipCallsTabEmptyStateLoadable.react").VoipCallsTabEmptyStateLoadable, {});
			case o("WAWebNavBarTypes").NavBarItems.Contacts: return n("cr:21286") != null ? c.jsx(n("cr:21286"), {}) : null;
			case o("WAWebNavBarTypes").NavBarItems.MetaAI: return o("WAWebBotBaseGating").isMetaAIHomeEnabled() ? c.jsx(o("WAWebMetaAILandingLoadable").WAWebMetaAILandingLoadable, {}) : null;
			case o("WAWebNavBarTypes").NavBarItems.Archived:
			case o("WAWebNavBarTypes").NavBarItems.Chats:
			case o("WAWebNavBarTypes").NavBarItems.Beta:
			case o("WAWebNavBarTypes").NavBarItems.BizTools:
			case o("WAWebNavBarTypes").NavBarItems.AdCreation:
			case o("WAWebNavBarTypes").NavBarItems.Orders:
			case o("WAWebNavBarTypes").NavBarItems.Labels:
			case o("WAWebNavBarTypes").NavBarItems.LockedChats:
			case o("WAWebNavBarTypes").NavBarItems.Starred:
			case o("WAWebNavBarTypes").NavBarItems.MediaHub:
			case o("WAWebNavBarTypes").NavBarItems.MeTab:
			case o("WAWebNavBarTypes").NavBarItems.ContactManager: return null;
		}
		var D = c.jsx(r("WDSText.react"), {
			type: "LargeTitle1",
			colorName: "contentDefault",
			testid: "empty-state-title",
			isPrimaryHeading: !0,
			xstyle: [d.spacingSingleBottom, d.spacingTripleTop],
			children: S
		}), x = c.jsx(r("WDSText.react"), {
			type: "Body1",
			testid: "empty-state-paragraph",
			colorName: "contentDeemphasized",
			xstyle: d.spacingTripleBottom,
			children: R
		});
		return c.jsx(r("WAWebDrawer.react"), {
			theme: "white-bg",
			testid: "empty-state-drawer",
			disableNavigationLogging: !0,
			children: c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.intro, d.introAnimated, m && d.introShiftedForRightDrawer), { children: c.jsxs("div", babelHelpers.extends({}, e.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.body), { children: [
				v != null && c.jsx("div", { children: v }),
				S != null && D,
				R != null && x,
				L,
				E
			] })) })) })
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.MidDrawerEmptyState = m;
}), 226);
