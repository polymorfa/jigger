__d("WAWebWindowsLinkScreenWrapper.react", [
	"fbt",
	"WAWebAutoLogoutGating",
	"WAWebClickable.react",
	"WAWebFlex.react",
	"WAWebHybridRegGating",
	"WAWebLandingPromoGating",
	"WAWebLinkDeviceMethod.react",
	"WAWebPairingType",
	"WAWebWindowsLinkDeviceV2.react",
	"WAWebWindowsTaskbarController",
	"WAWebWindowsWelcomeScreenUtils",
	"WAWebWindowsWelcomeV2.react",
	"WDSIconIcArrowBack.react",
	"react",
	"react-compiler-runtime",
	"useWAWebLinkDeviceAutoLogout",
	"useWAWebSmsRegistration"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		outerContainer: {
			backgroundColor: "x1h3rtpe",
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		container: {
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			backgroundColor: "x1280gxy",
			minWidth: "x1q18rhr",
			maxWidth: "x1wtp3jp",
			width: "xm6i5cn",
			minHeight: "xmaeki8",
			maxHeight: "x1aysy39 xs7vrp5",
			boxSizing: "x9f619",
			height: "x1ck2h3a",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			paddingTop: "x1p57kb1",
			paddingInlineEnd: "xvtqlqk",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			marginTop: "x1ci5j9l xw07rgd",
			marginInlineEnd: "x5jkbfu x1wxr1zq",
			marginBottom: "xg6s713 x6h1cav",
			marginInlineStart: "xoud76o x1xdtf2h",
			$$css: !0
		},
		containerFooterPromo: {
			maxHeight: "x1rkru5j xs7vrp5",
			$$css: !0
		},
		containerPairing: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		backIcon: {
			insetInlineStart: "x1n8ud3w",
			left: null,
			right: null,
			cursor: "x1ypdohk",
			borderStartStartRadius: "xuqqiot",
			borderStartEndRadius: "x1lkg3h2",
			borderEndEndRadius: "x17mbzc4",
			borderEndStartRadius: "xcouhex",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			color: "xhslqc4",
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		},
		content: {
			width: "xh8yej3",
			boxSizing: "x9f619",
			paddingTop: "xexx8yu xo8btsf",
			paddingInlineEnd: "xsvpdpl x1siyn35",
			paddingBottom: "x18d9i69 xrjntua",
			paddingInlineStart: "x4g923t xur3ugl",
			alignItems: "x6s0dn4",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(19), n = e.apiCmd, a = e.forcedView, i = p(a != null ? a : o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome), l = i[0], s = i[1], c = p(o("WAWebPairingType").PairingType.QR_CODE), _ = c[0], f = c[1], C = p(!1), b = C[0], v = C[1], S = r("useWAWebSmsRegistration")(), R = m(null), L;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (L = [], t[0] = L) : L = t[0], d(h, L);
		var E;
		t[1] !== b || t[2] !== _ || t[3] !== l ? (E = function() {
			if (l === o("WAWebWindowsWelcomeScreenUtils").ViewType.Signup) {
				var e;
				if (((e = R.current) == null ? void 0 : e.handleBack()) === !0) return;
				s(o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome);
				return;
			}
			if (l === o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice && _ === o("WAWebPairingType").PairingType.QR_CODE) {
				if (b) {
					v(!1), s(o("WAWebWindowsWelcomeScreenUtils").ViewType.Signup);
					return;
				}
				s(o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome);
				return;
			}
			var t = g([l, _]), n = t[0], r = t[1];
			n != null && s(n), r != null && f(r);
		}, t[1] = b, t[2] = _, t[3] = l, t[4] = E) : E = t[4];
		var k = E, I = r("useWAWebLinkDeviceAutoLogout")(), T = I.autoLogoutEnabled, D = I.handleAutoLogoutToggle, x;
		t[5] !== T ? (x = o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() || T, t[5] = T, t[6] = x) : x = t[6];
		var $ = x, P = l !== o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome, N;
		t[7] !== n || t[8] !== D || t[9] !== _ || t[10] !== $ || t[11] !== S || t[12] !== l ? (N = l === o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome ? u.jsx(r("WAWebWindowsWelcomeV2.react"), {
			onClickHandler: function() {
				s(o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice);
			},
			onSignupClickHandler: function() {
				s(o("WAWebWindowsWelcomeScreenUtils").ViewType.Signup);
			},
			smsRegistration: S
		}) : l === o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice ? u.jsx(r("WAWebWindowsLinkDeviceV2.react"), {
			apiCmd: n,
			pairingType: _,
			onPairingTypeChange: f,
			theme: o("WAWebHybridRegGating").isHybridRegEnabled() ? "wds" : void 0
		}, "qr-code") : l === o("WAWebWindowsWelcomeScreenUtils").ViewType.Signup ? u.jsx(r("WAWebLinkDeviceMethod.react"), {
			apiCmd: {
				resultType: "WEB_REGISTRATION_CAMPAIGN",
				data: {
					url: "/",
					referrer: "windows"
				}
			},
			autoLogoutEnabled: $,
			imperativeRef: R,
			onAutoLogoutToggle: D,
			onContinue: function() {
				v(!0), s(o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice);
			},
			setApiCmd: function(t) {
				t == null && s(o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice);
			},
			smsRegistration: S
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + l);
		})(), t[7] = n, t[8] = D, t[9] = _, t[10] = $, t[11] = S, t[12] = l, t[13] = N) : N = t[13];
		var M;
		return t[14] !== k || t[15] !== P || t[16] !== N || t[17] !== l ? (M = u.jsx(y, {
			view: l,
			showBack: P,
			onBackClick: k,
			children: N
		}), t[14] = k, t[15] = P, t[16] = N, t[17] = l, t[18] = M) : M = t[18], M;
	}
	function g(e) {
		if (Array.isArray(e) && e.length === 2 && e[0] === o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome) return [o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome, null];
		if (Array.isArray(e) && e.length === 2 && e[0] === o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice) return [null, o("WAWebPairingType").PairingType.QR_CODE];
		if (Array.isArray(e) && e.length === 2 && e[0] === o("WAWebWindowsWelcomeScreenUtils").ViewType.Signup) return [o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome, null];
		throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
	}
	function h() {
		o("WAWebWindowsTaskbarController").WATaskbarController.ResetTaskbarBadge();
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(12), n = e.children, a = e.onBackClick, i = e.showBack, l = e.view, c = l === o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice && _.containerPairing, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = o("WAWebLandingPromoGating").isLandingPromoEnabled() && _.containerFooterPromo, t[0] = d) : d = t[0];
		var m;
		t[1] !== c ? (m = [
			_.container,
			c,
			d
		], t[1] = c, t[2] = m) : m = t[2];
		var p;
		t[3] !== a || t[4] !== i ? (p = i && u.jsx(o("WAWebFlex.react").FlexRow, {
			alignSelf: "start",
			children: u.jsx(o("WAWebClickable.react").Clickable, {
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				onClick: a,
				xstyle: _.backIcon,
				children: u.jsx(r("WDSIconIcArrowBack.react"), {})
			})
		}), t[3] = a, t[4] = i, t[5] = p) : p = t[5];
		var f;
		t[6] !== n ? (f = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			grow: 1,
			xstyle: _.content,
			children: n
		}), t[6] = n, t[7] = f) : f = t[7];
		var g;
		return t[8] !== m || t[9] !== p || t[10] !== f ? (g = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.outerContainer,
			justify: "center",
			align: "center",
			grow: 1,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: m,
				justify: "center",
				align: "center",
				grow: 1,
				children: [p, f]
			})
		}), t[8] = m, t[9] = p, t[10] = f, t[11] = g) : g = t[11], g;
	}
	l.default = f;
}), 226);
