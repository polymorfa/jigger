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
	"react-compiler-runtime",
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
		var a, i, l = o("react-compiler-runtime").c(64), u = t.type, m = r("useWAWebEventTargetValue")(r("WAWebActiveCommunityNavigation"), "change", p), _;
		l[0] !== m ? (_ = m != null ? o("WAWebChatCollection").ChatCollection.get(m) : null, l[0] = m, l[1] = _) : _ = l[1];
		var f = _, g = o("WAWebAppContext.react").useAppContext(), h = g.rightDrawerOpen, y = o("WAWebDrawerManagerContext").useDrawerManagerContext("left"), C = y.drawerContext, b = C.type === "quick_action", v = C.type === "community_home", S;
		l[2] === Symbol.for("react.memo_cache_sentinel") ? (S = ["change:suspended"], l[2] = S) : S = l[2];
		var R;
		l[3] !== f ? (R = function() {
			return o("WAWebChatCommunityUtils").isSuspendedCommunity(f);
		}, l[3] = f, l[4] = R) : R = l[4];
		var L = r("useWAWebEventTargetValue")(f == null ? void 0 : f.groupMetadata, S, R), E;
		l[5] === Symbol.for("react.memo_cache_sentinel") ? (E = ["change:participants"], l[5] = E) : E = l[5];
		var k;
		if (l[6] !== (f == null || (a = f.groupMetadata) == null ? void 0 : a.participants)) {
			var I;
			k = function() {
				var e;
				return !!(!(f == null || (e = f.groupMetadata) == null || (e = e.participants) == null) && e.iAmAdmin());
			}, l[6] = f == null || (I = f.groupMetadata) == null ? void 0 : I.participants, l[7] = k;
		} else k = l[7];
		var T = r("useWAWebEventTargetValue")(f == null ? void 0 : f.groupMetadata, E, k), D;
		l[8] === Symbol.for("react.memo_cache_sentinel") ? (D = ["change:suspended", "change:terminated"], l[8] = D) : D = l[8];
		var x;
		l[9] !== f ? (x = function() {
			return o("WAWebChatCommunityUtils").canAddGroupToCommunity(f);
		}, l[9] = f, l[10] = x) : x = l[10];
		var $ = r("useWAWebEventTargetValue")(f == null ? void 0 : f.groupMetadata, D, x), P;
		l[11] === Symbol.for("react.memo_cache_sentinel") ? (P = ["change:allowNonAdminSubGroupCreation"], l[11] = P) : P = l[11];
		var N;
		if (l[12] !== (f == null || (i = f.groupMetadata) == null ? void 0 : i.allowNonAdminSubGroupCreation)) {
			var M;
			N = function() {
				var e;
				return (f == null || (e = f.groupMetadata) == null ? void 0 : e.allowNonAdminSubGroupCreation) === !0;
			}, l[12] = f == null || (M = f.groupMetadata) == null ? void 0 : M.allowNonAdminSubGroupCreation, l[13] = N;
		} else N = l[13];
		var w = r("useWAWebEventTargetValue")(f == null ? void 0 : f.groupMetadata, P, N), A, F, O, B, W;
		e: switch (u) {
			case o("WAWebNavBarTypes").NavBarItems.Status: {
				var q = !b && o("WAWebQuickActionGatingUtils").isQuickActionsEnabled("status");
				if (q) {
					var U;
					l[14] === Symbol.for("react.memo_cache_sentinel") ? (U = c.jsx(r("WAWebQuickActionSection.react"), {
						actions: r("WAWebStatusQuickActions"),
						context: void 0,
						surface: "status"
					}), l[14] = U) : U = l[14], W = U;
				} else {
					var V;
					l[15] === Symbol.for("react.memo_cache_sentinel") ? (V = c.jsx(o("WAWebStatusFilledRefreshedIcon.react").StatusFilledRefreshedIcon, {
						height: 64,
						width: 64,
						iconXstyle: d.heroIcon
					}), l[15] = V) : V = l[15], A = V;
					var H;
					l[16] === Symbol.for("react.memo_cache_sentinel") ? (H = s._(
						/*BTDS*/
						""
					), l[16] = H) : H = l[16], F = H;
					var G;
					l[17] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
						/*BTDS*/
						""
					), l[17] = G) : G = l[17], O = G;
				}
				if (!o("WAWebNewsletterGatingUtils").isNewsletterStatusProfileRingEnabled()) {
					var z, j;
					l[18] === Symbol.for("react.memo_cache_sentinel") ? (z = (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encrypted), j = c.jsx("span", babelHelpers.extends({}, e.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encryptedIcon), { children: c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
						height: 20,
						width: 20
					}) })), l[18] = z, l[19] = j) : (z = l[18], j = l[19]);
					var K;
					l[20] === Symbol.for("react.memo_cache_sentinel") ? (K = c.jsxs("div", babelHelpers.extends({}, z, { children: [
						j,
						" ",
						s._(
							/*BTDS*/
							""
						)
					] })), l[20] = K) : K = l[20], B = K;
				}
				break e;
			}
			case o("WAWebNavBarTypes").NavBarItems.Newsletters: {
				var Q = !b && o("WAWebQuickActionGatingUtils").isQuickActionsEnabled("channels");
				if (Q) {
					var X;
					l[21] === Symbol.for("react.memo_cache_sentinel") ? (X = c.jsx(r("WAWebQuickActionSection.react"), {
						actions: r("WAWebChannelsQuickActions"),
						context: void 0,
						surface: "channels"
					}), l[21] = X) : X = l[21], W = X;
				} else {
					var Y;
					l[22] === Symbol.for("react.memo_cache_sentinel") ? (Y = c.jsx(o("WAWebNewsletterIcon.react").NewsletterIcon, {
						height: 64,
						width: 64,
						iconXstyle: d.heroIcon
					}), l[22] = Y) : Y = l[22], A = Y;
					var J;
					l[23] === Symbol.for("react.memo_cache_sentinel") ? (J = s._(
						/*BTDS*/
						""
					), l[23] = J) : J = l[23], F = J;
					var Z;
					l[24] === Symbol.for("react.memo_cache_sentinel") ? (Z = s._(
						/*BTDS*/
						""
					), l[24] = Z) : Z = l[24], O = Z;
				}
				break e;
			}
			case o("WAWebNavBarTypes").NavBarItems.Settings: {
				var ee;
				l[25] === Symbol.for("react.memo_cache_sentinel") ? (ee = c.jsx(o("WAWebSettingsFilledRefreshedIcon.react").SettingsFilledRefreshedIcon, {
					height: 64,
					width: 64,
					iconXstyle: d.heroIcon
				}), l[25] = ee) : ee = l[25], A = ee;
				var te;
				l[26] === Symbol.for("react.memo_cache_sentinel") ? (te = s._(
					/*BTDS*/
					""
				), l[26] = te) : te = l[26], F = te;
				break e;
			}
			case o("WAWebNavBarTypes").NavBarItems.Profile: {
				var ne;
				l[27] === Symbol.for("react.memo_cache_sentinel") ? (ne = c.jsx(r("WDSIconIcAccountCircle.react"), {
					height: 64,
					width: 64,
					iconXstyle: d.heroIcon
				}), l[27] = ne) : ne = l[27], A = ne;
				var re;
				l[28] === Symbol.for("react.memo_cache_sentinel") ? (re = s._(
					/*BTDS*/
					""
				), l[28] = re) : re = l[28], F = re;
				break e;
			}
			case o("WAWebNavBarTypes").NavBarItems.Communities: {
				var oe = f != null && v && o("WAWebQuickActionGatingUtils").isQuickActionsEnabled("community_navigation");
				if (oe && f != null) {
					var ae;
					l[29] !== f || l[30] !== $ || l[31] !== w || l[32] !== T || l[33] !== L ? (ae = c.jsx(r("WAWebQuickActionSection.react"), {
						actions: r("WAWebCommunityNavigationQuickActions"),
						context: {
							chat: f,
							isSuspended: L,
							isAdmin: T,
							canAddGroup: $,
							allowNonAdminSubGroupCreation: w
						},
						surface: "community_navigation"
					}), l[29] = f, l[30] = $, l[31] = w, l[32] = T, l[33] = L, l[34] = ae) : ae = l[34], W = ae;
				} else {
					var ie;
					l[35] === Symbol.for("react.memo_cache_sentinel") ? (ie = c.jsx(r("WDSIconWdsIcCommunitiesFilled.react"), {
						height: 64,
						width: 64,
						iconXstyle: d.heroIcon
					}), l[35] = ie) : ie = l[35], A = ie;
					var le;
					l[36] === Symbol.for("react.memo_cache_sentinel") ? (le = s._(
						/*BTDS*/
						""
					), l[36] = le) : le = l[36], F = le;
					var se;
					l[37] === Symbol.for("react.memo_cache_sentinel") ? (se = s._(
						/*BTDS*/
						""
					), l[37] = se) : se = l[37], O = se;
				}
				var ue, ce;
				l[38] === Symbol.for("react.memo_cache_sentinel") ? (ue = (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encrypted), ce = c.jsx("span", babelHelpers.extends({}, e.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encryptedIcon), { children: c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
					height: 20,
					width: 20
				}) })), l[38] = ue, l[39] = ce) : (ue = l[38], ce = l[39]);
				var de;
				l[40] === Symbol.for("react.memo_cache_sentinel") ? (de = c.jsxs("div", babelHelpers.extends({}, ue, { children: [
					ce,
					" ",
					s._(
						/*BTDS*/
						""
					)
				] })), l[40] = de) : de = l[40], B = de;
				break e;
			}
			case o("WAWebNavBarTypes").NavBarItems.TeamLink: {
				var me;
				l[41] === Symbol.for("react.memo_cache_sentinel") ? (me = s._(
					/*BTDS*/
					""
				), l[41] = me) : me = l[41], F = me;
				break e;
			}
			case o("WAWebNavBarTypes").NavBarItems.Calls: {
				var pe;
				return l[42] === Symbol.for("react.memo_cache_sentinel") ? (pe = c.jsx(o("WAWebVoipCallsTabEmptyStateLoadable.react").VoipCallsTabEmptyStateLoadable, {}), l[42] = pe) : pe = l[42], pe;
			}
			case o("WAWebNavBarTypes").NavBarItems.Contacts: {
				if (n("cr:21286") != null) {
					var _e;
					return l[43] === Symbol.for("react.memo_cache_sentinel") ? (_e = c.jsx(n("cr:21286"), {}), l[43] = _e) : _e = l[43], _e;
				}
				return null;
			}
			case o("WAWebNavBarTypes").NavBarItems.MetaAI: {
				if (o("WAWebBotBaseGating").isMetaAIHomeEnabled()) {
					var fe;
					return l[44] === Symbol.for("react.memo_cache_sentinel") ? (fe = c.jsx(o("WAWebMetaAILandingLoadable").WAWebMetaAILandingLoadable, {}), l[44] = fe) : fe = l[44], fe;
				}
				return null;
			}
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
		var ge;
		l[45] === Symbol.for("react.memo_cache_sentinel") ? (ge = [d.spacingSingleBottom, d.spacingTripleTop], l[45] = ge) : ge = l[45];
		var he;
		l[46] !== F ? (he = c.jsx(r("WDSText.react"), {
			type: "LargeTitle1",
			colorName: "contentDefault",
			testid: "empty-state-title",
			isPrimaryHeading: !0,
			xstyle: ge,
			children: F
		}), l[46] = F, l[47] = he) : he = l[47];
		var ye = he, Ce;
		l[48] !== O ? (Ce = c.jsx(r("WDSText.react"), {
			type: "Body1",
			testid: "empty-state-paragraph",
			colorName: "contentDeemphasized",
			xstyle: d.spacingTripleBottom,
			children: O
		}), l[48] = O, l[49] = Ce) : Ce = l[49];
		var be = Ce, ve;
		l[50] !== h ? (ve = (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.intro, d.introAnimated, h && d.introShiftedForRightDrawer), l[50] = h, l[51] = ve) : ve = l[51];
		var Se;
		l[52] === Symbol.for("react.memo_cache_sentinel") ? (Se = (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.body), l[52] = Se) : Se = l[52];
		var Re;
		l[53] !== A ? (Re = A != null && c.jsx("div", { children: A }), l[53] = A, l[54] = Re) : Re = l[54];
		var Le = F != null && ye, Ee = O != null && be, ke;
		l[55] !== B || l[56] !== W || l[57] !== Re || l[58] !== Le || l[59] !== Ee ? (ke = c.jsxs("div", babelHelpers.extends({}, Se, { children: [
			Re,
			Le,
			Ee,
			B,
			W
		] })), l[55] = B, l[56] = W, l[57] = Re, l[58] = Le, l[59] = Ee, l[60] = ke) : ke = l[60];
		var Ie;
		return l[61] !== ve || l[62] !== ke ? (Ie = c.jsx(r("WAWebDrawer.react"), {
			theme: "white-bg",
			testid: "empty-state-drawer",
			disableNavigationLogging: !0,
			children: c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx("div", babelHelpers.extends({}, ve, { children: ke })) })
		}), l[61] = ve, l[62] = ke, l[63] = Ie) : Ie = l[63], Ie;
	}
	function p() {
		return r("WAWebActiveCommunityNavigation").getActive();
	}
	l.MidDrawerEmptyState = m;
}), 226);
