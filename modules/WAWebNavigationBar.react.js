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
	"react-compiler-runtime",
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
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx("hr", { className: "xh8yej3 xjm9jq1 x178xt8z x13fuv20 xx42vgk x18oe1m7 x1sy0etr xstzfhl" }), e[0] = t) : t = e[0], t;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(80), a = e.activeNavBarItem, i = e.headerRef, l = e.updateActiveNavBarItem, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = { prefix: "navbar" }, t[0] = u) : u = t[0];
		var c = o("WAWebUseArrowKeyNavigation").useArrowKeyNavigation(u), f = c.down, h = c.focusItemIndex, y = c.focusSelectedItem, C = c.onFocus, b = c.ref, v = c.up, S;
		t[1] !== h ? (S = function() {
			h(0);
		}, t[1] = h, t[2] = S) : S = t[2];
		var R = S, L;
		t[3] !== f || t[4] !== R || t[5] !== v ? (L = {
			up: v,
			down: f,
			escape: R
		}, t[3] = f, t[4] = R, t[5] = v, t[6] = L) : L = t[6];
		var E = L;
		o("WAWebUseFocusSyncOnActiveItemChange").useFocusSyncOnActiveItemChange(a, b, y);
		var k = r("useMergeRefs")(i, b), I = r("WAWebEnvironment").isWindows === !0, T;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (T = function() {
			return I && o("WAWebChatCollection").ChatCollection.some(g);
		}, t[7] = T) : T = t[7];
		var D = T, x;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (x = function() {
			return I && o("WAWebChatLockUtils").shouldShowChatLockEntryPoints();
		}, t[8] = x) : x = t[8];
		var $ = x, P;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (P = D(), t[9] = P) : P = t[9];
		var N = d(P), M = N[0], w = N[1], A;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (A = $(), t[10] = A) : A = t[10];
		var F = d(A), O = F[0], B = F[1], W = o("useWAWebChatLockSettings").useChatLockSettings(), q = W.hideLockedChats, U;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (U = function(t) {
			if (I) if (t.archive === !0) w(!0);
			else {
				var e = D();
				e || o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), w(e);
			}
		}, t[11] = U) : U = t[11], o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:archive", U);
		var V;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (V = function(t) {
			if (I) if (t.isLocked) B(!0);
			else {
				var e = $();
				e || o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), B(e);
			}
		}, t[12] = V) : V = t[12], o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:isLocked", V);
		var H;
		t[13] !== a || t[14] !== l ? (H = {
			activeNavBarItem: a,
			updateActiveNavBarItem: l
		}, t[13] = a, t[14] = l, t[15] = H) : H = t[15];
		var G = H, z;
		t[16] !== G || t[17] !== M ? (z = M && s.createElement(r("WAWebWindowsArchivedChatsNavBarItem.react"), babelHelpers.extends({}, G, { key: "navbar-item-archived-chats" })), t[16] = G, t[17] = M, t[18] = z) : z = t[18];
		var j = z, K;
		t[19] !== G || t[20] !== O || t[21] !== q ? (K = O && !q && s.createElement(r("WAWebWindowsLockedChatsNavBarItem.react"), babelHelpers.extends({}, G, { key: "navbar-item-locked-chats" })), t[19] = G, t[20] = O, t[21] = q, t[22] = K) : K = t[22];
		var Q = K, X;
		t[23] !== G ? (X = o("WAWebBotGating").isBotShortcutEntryPointEnabled() && s.createElement(o("WAWebMetaBotNavBarItem.react").MetaBotNavBarItem, babelHelpers.extends({}, G, { key: "navbar-item-metabot" })), t[23] = G, t[24] = X) : X = t[24];
		var Y = X, J;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (J = s.jsx(r("WAWebMediaHubNavBarItem.react"), {}), t[25] = J) : J = t[25];
		var Z = J, ee;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (ee = s.jsx(r("WAWebPrivacyModeIndicator.react"), {}), t[26] = ee) : ee = t[26];
		var te = ee, ne;
		t[27] !== G ? (ne = o("WAWebMobilePlatforms").isSMB() && s.createElement(o("WAWebBizToolsNavBarItem.react").BizToolsNavBarItem, babelHelpers.extends({}, G, { key: "navbar-item-biz-tools" })), t[27] = G, t[28] = ne) : ne = t[28];
		var re = ne, oe;
		t[29] !== G ? (oe = o("WAWebMobilePlatforms").isSMB() && s.jsx(o("WAWebBizAdCreationNavBarItem.react").BizAdCreationNavBarItem, { activeNavBarItem: G.activeNavBarItem }, "navbar-item-ads-creation"), t[29] = G, t[30] = oe) : oe = t[30];
		var ae = oe, ie;
		t[31] !== G ? (ie = o("WAWebMobilePlatforms").isSMB() && s.createElement(r("WAWebContactManagerNavBarItem.react"), babelHelpers.extends({}, G, { key: "navbar-item-customer-manager" })), t[31] = G, t[32] = ie) : ie = t[32];
		var le = ie, se;
		t[33] !== G ? (se = o("WAWebTeamLinkGating").teamLinkEnabled() && s.createElement(r("WAWebTeamLinkNavBarItem.react"), babelHelpers.extends({}, G, { key: "navbar-item-teamlink" })), t[33] = G, t[34] = se) : se = t[34];
		var ue = se, ce;
		if (t[35] !== j || t[36] !== Q || t[37] !== Y || t[38] !== ae || t[39] !== re || t[40] !== le || t[41] !== ue) {
			if (ce = [
				j,
				Q,
				Y,
				re,
				ae,
				le,
				ue
			], ce.some(Boolean)) {
				var de;
				t[43] === Symbol.for("react.memo_cache_sentinel") ? (de = s.jsx(_, {}, "separator"), t[43] = de) : de = t[43], ce.unshift(de);
			}
			t[35] = j, t[36] = Q, t[37] = Y, t[38] = ae, t[39] = re, t[40] = le, t[41] = ue, t[42] = ce;
		} else ce = t[42];
		var me;
		t[44] === Symbol.for("react.memo_cache_sentinel") ? (me = n("cr:12462") ? s.jsx(n("cr:12462").BugnubNavBarItem, {}) : null, t[44] = me) : me = t[44];
		var pe = me, _e, fe;
		t[46] === Symbol.for("react.memo_cache_sentinel") ? (fe = [
			p.header,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor12,
			m.paddingBlock10
		], t[46] = fe) : fe = t[46];
		var ge;
		t[47] === Symbol.for("react.memo_cache_sentinel") ? (ge = [p.fullWidth, p.fullHeight], t[47] = ge) : ge = t[47];
		var he, ye, Ce, be, ve, Se;
		t[48] !== G ? (he = s.jsx(o("WAWebChatsNavBarItem.react").ChatsNavBarItem, babelHelpers.extends({}, G)), ye = s.jsx(o("WAWebCallsNavBarItemLoadable.react").CallsNavBarItemLoadable, babelHelpers.extends({}, G)), Ce = s.jsx(o("WAWebStatusNavBarItem.react").StatusNavBarItem, babelHelpers.extends({}, G)), be = s.jsx(o("WAWebNewslettersNavBarItem.react").NewslettersNavBarItem, babelHelpers.extends({}, G)), ve = s.jsx(o("WAWebCommunitiesNavBarItem.react").CommunitiesNavBarItem, babelHelpers.extends({}, G)), Se = n("cr:21280") ? s.jsx(n("cr:21280"), babelHelpers.extends({}, G)) : null, t[48] = G, t[49] = he, t[50] = ye, t[51] = Ce, t[52] = be, t[53] = ve, t[54] = Se) : (he = t[49], ye = t[50], Ce = t[51], be = t[52], ve = t[53], Se = t[54]);
		var Re;
		t[55] !== ce || t[56] !== he || t[57] !== ye || t[58] !== Ce || t[59] !== be || t[60] !== ve || t[61] !== Se ? (Re = s.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			shrink: 0,
			testid: "navbar-primary-section",
			xstyle: p.fullWidth,
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: p.wrapper,
				children: [
					he,
					ye,
					Ce,
					be,
					ve,
					Se,
					ce
				]
			})
		}), t[55] = ce, t[56] = he, t[57] = ye, t[58] = Ce, t[59] = be, t[60] = ve, t[61] = Se, t[62] = Re) : Re = t[62];
		var Le;
		t[63] === Symbol.for("react.memo_cache_sentinel") ? (Le = s.jsx(o("WAWebFeedbackNavBarItem.react").FeedbackNavBarItem, {}), t[63] = Le) : Le = t[63];
		var Ee;
		t[64] !== G ? (Ee = s.jsx(o("WAWebBetaNavBarItem.react").BetaNavBarItem, babelHelpers.extends({}, G)), t[64] = G, t[65] = Ee) : Ee = t[65];
		var ke;
		t[66] === Symbol.for("react.memo_cache_sentinel") ? (ke = pe == null ? null : s.jsx(_, {}), t[66] = ke) : ke = t[66];
		var Ie;
		t[67] !== G ? (Ie = o("WAWebSettingGatingUtils").isMeTabEnabled() ? s.jsx(o("WAWebMeTabNavBarItem.react").MeTabNavBarItem, babelHelpers.extends({}, G)) : s.jsxs(s.Fragment, { children: [s.jsx(o("WAWebSettingsNavBarItem.react").SettingsNavBarItem, babelHelpers.extends({}, G)), s.jsx(o("WAWebProfileNavBarItem.react").ProfileNavBarItem, babelHelpers.extends({}, G))] }), t[67] = G, t[68] = Ie) : Ie = t[68];
		var Te;
		t[69] !== Ee || t[70] !== Ie ? (Te = s.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 0,
			shrink: 0,
			testid: "navbar-footer-section",
			xstyle: p.fullWidth,
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: p.wrapper,
				children: [
					Le,
					pe,
					Z,
					te,
					Ee,
					ke,
					Ie
				]
			})
		}), t[69] = Ee, t[70] = Ie, t[71] = Te) : Te = t[71];
		var De;
		t[72] !== Re || t[73] !== Te ? (De = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: ge,
			children: [
				Re,
				Te,
				_e
			]
		}), t[72] = Re, t[73] = Te, t[74] = De) : De = t[74];
		var xe;
		return t[75] !== E || t[76] !== k || t[77] !== C || t[78] !== De ? (xe = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: k,
			"data-testid": "chatlist-header",
			component: "header",
			tabIndex: 0,
			"data-tab": o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			handlers: E,
			onFocus: C,
			xstyle: fe,
			children: De
		}), t[75] = E, t[76] = k, t[77] = C, t[78] = De, t[79] = xe) : xe = t[79], xe;
	}
	function g(e) {
		return e.archive && o("WAWebFrontendChatGetters").getShouldAppearInList(e);
	}
	var h = c(f);
	l.NavigationBar = h;
}), 98);
