__d("WAWebSecurityDrawer.react", [
	"fbt",
	"WAWebDefenseModeLockedInterstitial.react",
	"WAWebDefenseModeUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerItem.react",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebKeyboardRotateFocus.react",
	"WAWebKeyboardTabUtils",
	"WAWebMiscGatingUtils",
	"WAWebPrinaUtils",
	"WAWebPrivacyNarrativeE2ESummary.react",
	"WAWebSecurityLockIcon.react",
	"WAWebSecurityShieldIcon.react",
	"WAWebTabOrder",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsNotifications",
	"WDSIconIcLock.react",
	"WDSSwitch.react",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = {
		icon: {
			position: "x1n2onr6",
			boxSizing: "x9f619",
			width: "xj35x94",
			height: "x19swzb4",
			paddingTop: "x16ovd2e",
			marginInlineEnd: "x11t971q",
			marginBottom: "xat24cr",
			marginInlineStart: "xvc5jky",
			marginTop: "x98l61r",
			color: "x1mysghr",
			backgroundColor: "xe8plzu",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		iconLock: {
			position: "x10l6tqk",
			insetInlineStart: "x1o0tod",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			top: "x13vifvy",
			bottom: "xy1j3rs",
			color: "x2rqmh4",
			$$css: !0
		}
	};
	function _() {
		var e = o("react-compiler-runtime").c(5), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebSecurityShieldIcon.react").SecurityShieldIcon, {}) }), e[0] = t) : t = e[0];
		var n, a, i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: p.icon,
			align: "center",
			justify: "center",
			children: [t, u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: p.iconLock,
				align: "center",
				justify: "center",
				children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebSecurityLockIcon.react").SecurityLockIcon, {}) })
			})]
		}), a = { className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1nmyh1g x1jchvi3 x1o2sk6j" }, i = s._(
			/*BTDS*/
			""
		), e[1] = n, e[2] = a, e[3] = i) : (n = e[1], a = e[2], i = e[3]);
		var l;
		return e[4] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsxs(u.Fragment, { children: [n, u.jsxs("div", babelHelpers.extends({}, a, { children: [
			i,
			" ",
			u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebPrinaUtils").securityUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			})
		] }))] }), e[4] = l) : l = e[4], l;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(35), n = e.onClose, a = e.ref, i = r("useWAWebToggle")(o("WAWebUserPrefsNotifications").getGlobalSecurityNotifications, o("WAWebUserPrefsNotifications").setGlobalSecurityNotifications), l = i[0], c = i[1], d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[0] = d) : d = t[0];
		var p = d, f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled(), t[1] = f) : f = t[1];
		var y = f, C = m(g), b = C[0], v = C[1], S = b != null, R;
		t[2] !== b ? (R = function() {
			var e = o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("securityNotifications");
			e !== b && v(e);
		}, t[2] = b, t[3] = R) : R = t[3], o("useWAWebListener").useListener(o("WAWebUserPrefsGeneral").privacySettingsEventEmitter, "all", R);
		var L;
		t[4] !== l || t[5] !== b || t[6] !== c ? (L = function() {
			b != null ? o("WAWebDefenseModeLockedInterstitial.react").openDefenseModeLockedInterstitialGlobal(b, l ? "on" : "off") : c();
		}, t[4] = l, t[5] = b, t[6] = c, t[7] = L) : L = t[7];
		var E = L, k;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (k = {
			surface: "unknown",
			viewName: "security-settings"
		}, t[8] = k) : k = t[8];
		var I;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x5yr21d x78zum5 xdt5ytf x6ikm8r x10wlt62" }, t[9] = I) : I = t[9];
		var T;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), t[10] = T) : T = t[10];
		var D;
		t[11] !== n ? (D = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "drawer-title-security",
			title: T,
			onBack: n,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}), t[11] = n, t[12] = D) : D = t[12];
		var x, $, P, N;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (N = y ? u.jsx(o("WAWebPrivacyNarrativeE2ESummary.react").E2eSummarySecurityDrawer, {}) : u.jsx(_, {}), x = u.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }), $ = { className: "x78zum5 x6s0dn4 x1s70e7g x1phvje8 xcldk2z" }, P = u.jsx("div", {
			className: "x1xrf6ya x1nzty39 xscbp6u x12w63v0",
			children: u.jsx(r("WDSIconIcLock.react"), {})
		}), t[13] = x, t[14] = $, t[15] = P, t[16] = N) : (x = t[13], $ = t[14], P = t[15], N = t[16]);
		var M;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
			/*BTDS*/
			""
		), t[17] = M) : M = t[17];
		var w;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (w = { className: "x1849jeq x78zum5 xl56j7k" }, t[18] = w) : w = t[18];
		var A = l || b !== void 0, F;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
			/*BTDS*/
			""
		), t[19] = F) : F = t[19];
		var O;
		t[20] !== A ? (O = u.jsx("div", babelHelpers.extends({}, w, { children: u.jsx(r("WDSSwitch.react"), {
			value: A,
			"aria-label": F
		}) })), t[20] = A, t[21] = O) : O = t[21];
		var B;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "xcldk2z" }, t[22] = B) : B = t[22];
		var W;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (W = o("WAWebFaqUrl").getCodeChangeFaqUrl(), t[23] = W) : W = t[23];
		var q;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsxs("div", babelHelpers.extends({}, B, { children: [
			p,
			" ",
			u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: W,
				onClick: h,
				children: s._(
					/*BTDS*/
					""
				)
			})
		] })), t[24] = q) : q = t[24];
		var U;
		t[25] !== E || t[26] !== S || t[27] !== O ? (U = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			children: [
				N,
				x,
				u.jsxs("div", babelHelpers.extends({}, $, { children: [P, u.jsx(r("WAWebDrawerItem.react"), {
					title: M,
					tabIndex: -1,
					dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
					icon: O,
					theme: "privacy",
					isLastItem: !0,
					disableKeydownHandling: !0,
					disabled: S,
					onDisabledClick: E,
					onClick: E,
					testid: "security-notifications-settings-item",
					children: q
				})] }))
			]
		}) }), t[25] = E, t[26] = S, t[27] = O, t[28] = U) : U = t[28];
		var V;
		t[29] !== U || t[30] !== D ? (V = u.jsx(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
			focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
			children: u.jsxs("div", babelHelpers.extends({}, I, { children: [D, U] }))
		}), t[29] = U, t[30] = D, t[31] = V) : V = t[31];
		var H;
		return t[32] !== a || t[33] !== V ? (H = u.jsx(r("WAWebDrawer.react"), {
			ref: a,
			testid: "security-settings-drawer",
			tsNavigationData: k,
			children: V
		}), t[32] = a, t[33] = V, t[34] = H) : H = t[34], H;
	}
	function g() {
		return o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("securityNotifications");
	}
	function h(e) {
		e == null || e.stopPropagation();
	}
	l.default = f;
}), 226);
