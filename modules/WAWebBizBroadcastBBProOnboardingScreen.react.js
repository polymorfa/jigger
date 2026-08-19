__d("WAWebBizBroadcastBBProOnboardingScreen.react", [
	"fbt",
	"WAWebBizBroadcastsHomeOverflowMenu.react",
	"WAWebBizBroadcastsHomeStrings",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebDrawerHeader.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebQRCode.react",
	"WAWebUserPrefsMultiDevice",
	"WAWebWamEnumBbTierType",
	"WAWebWdsIllClipMessagesIcon.react",
	"WDSButton.react",
	"WDSIconIcInfo.react",
	"WDSIconWdsIcWhatsappSmbLogo.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 280, d = 64, m = 48, p = 280, _ = 186, f = 18, g = 400, h = 152, y = {
		columns: {
			columnGap: "xf3avmp",
			rowGap: "x1j3ira4",
			$$css: !0
		},
		textBlock: {
			maxWidth: "x1j9u4d2",
			$$css: !0
		},
		wrapper: {
			backgroundColor: "x6egj2d",
			$$css: !0
		}
	};
	function C(e) {
		var t = o("react-compiler-runtime").c(100), n, a, i, l, d, g, h, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U, V, H, G;
		if (t[0] !== e) {
			var z = e.entryPoint, j = e.onDowngrade, K = e.qrDeeplink;
			h = j, C = K;
			var Q;
			t[35] === Symbol.for("react.memo_cache_sentinel") ? (Q = o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl(), t[35] = Q) : Q = t[35];
			var X = Q, Y;
			t[36] === Symbol.for("react.memo_cache_sentinel") ? (Y = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage(), t[36] = Y) : Y = t[36], b = !Y, g = o("WAWebFlex.react").FlexColumn, A = 1, F = "stretch", t[37] === Symbol.for("react.memo_cache_sentinel") ? (O = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				title: o("WAWebBizBroadcastsHomeStrings").getBusinessBroadcastsTitle(),
				menu: u.jsx(r("WAWebBizBroadcastsHomeOverflowMenu.react"), { testid: "biz-broadcast-bb-pro-onboarding-header-menu-button" })
			}), t[37] = O) : O = t[37], d = o("WAWebFlex.react").FlexColumn, D = 1, x = "center", $ = "center", N = 24, M = y.wrapper, w = "biz-broadcast-bb-pro-onboarding-screen", l = o("WAWebFlex.react").FlexRow, E = "center", k = "center", I = "wrap", T = y.columns, i = o("WAWebFlex.react").FlexColumn, S = "center", R = 24, t[38] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(o("WAWebWdsIllClipMessagesIcon.react").WdsIllClipMessagesIcon, {
				width: p,
				height: _
			}), t[38] = L) : L = t[38], a = o("WAWebFlex.react").FlexColumn, U = "center", V = 16, H = y.textBlock, t[39] === Symbol.for("react.memo_cache_sentinel") ? (G = u.jsx(r("WDSText.react"), {
				type: "LargeTitle1",
				colorName: "contentDefault",
				textAlign: "center",
				testid: "biz-broadcast-bb-pro-onboarding-title",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[39] = G) : G = t[39], n = r("WDSText.react"), v = "Body1", P = "contentDeemphasized", B = "center", W = "biz-broadcast-bb-pro-onboarding-subtitle", q = s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), {
					href: X,
					onClick: function() {
						return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(z, "learn_more", o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO);
					},
					testid: "biz-broadcast-bb-pro-onboarding-learn-more",
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			), t[0] = e, t[1] = n, t[2] = a, t[3] = i, t[4] = l, t[5] = d, t[6] = g, t[7] = h, t[8] = C, t[9] = b, t[10] = v, t[11] = S, t[12] = R, t[13] = L, t[14] = E, t[15] = k, t[16] = I, t[17] = T, t[18] = D, t[19] = x, t[20] = $, t[21] = P, t[22] = N, t[23] = M, t[24] = w, t[25] = A, t[26] = F, t[27] = O, t[28] = B, t[29] = W, t[30] = q, t[31] = U, t[32] = V, t[33] = H, t[34] = G;
		} else n = t[1], a = t[2], i = t[3], l = t[4], d = t[5], g = t[6], h = t[7], C = t[8], b = t[9], v = t[10], S = t[11], R = t[12], L = t[13], E = t[14], k = t[15], I = t[16], T = t[17], D = t[18], x = t[19], $ = t[20], P = t[21], N = t[22], M = t[23], w = t[24], A = t[25], F = t[26], O = t[27], B = t[28], W = t[29], q = t[30], U = t[31], V = t[32], H = t[33], G = t[34];
		var J;
		t[40] !== n || t[41] !== v || t[42] !== P || t[43] !== B || t[44] !== W || t[45] !== q ? (J = u.jsx(n, {
			type: v,
			colorName: P,
			textAlign: B,
			testid: W,
			children: q
		}), t[40] = n, t[41] = v, t[42] = P, t[43] = B, t[44] = W, t[45] = q, t[46] = J) : J = t[46];
		var Z;
		t[47] !== a || t[48] !== J || t[49] !== U || t[50] !== V || t[51] !== H || t[52] !== G ? (Z = u.jsxs(a, {
			align: U,
			rowGap: V,
			xstyle: H,
			children: [G, J]
		}), t[47] = a, t[48] = J, t[49] = U, t[50] = V, t[51] = H, t[52] = G, t[53] = Z) : Z = t[53];
		var ee;
		t[54] === Symbol.for("react.memo_cache_sentinel") ? (ee = s._(
			/*BTDS*/
			""
		), t[54] = ee) : ee = t[54];
		var te;
		t[55] !== h ? (te = u.jsx(r("WDSButton.react"), {
			label: ee,
			onPress: h,
			variant: "outline",
			size: "medium",
			testid: "biz-broadcast-bb-pro-onboarding-downgrade-button"
		}), t[55] = h, t[56] = te) : te = t[56];
		var ne;
		t[57] !== i || t[58] !== S || t[59] !== R || t[60] !== L || t[61] !== Z || t[62] !== te ? (ne = u.jsxs(i, {
			align: S,
			rowGap: R,
			children: [
				L,
				Z,
				te
			]
		}), t[57] = i, t[58] = S, t[59] = R, t[60] = L, t[61] = Z, t[62] = te, t[63] = ne) : ne = t[63];
		var re, oe;
		t[64] === Symbol.for("react.memo_cache_sentinel") ? (re = s._(
			/*BTDS*/
			""
		), oe = { className: "xqitzto x1n2onr6 x1dz1jew" }, t[64] = re, t[65] = oe) : (re = t[64], oe = t[65]);
		var ae;
		t[66] !== C ? (ae = u.jsx(r("WAWebQRCode.react"), {
			correctLevel: "H",
			data: C,
			size: c
		}), t[66] = C, t[67] = ae) : ae = t[67];
		var ie;
		t[68] === Symbol.for("react.memo_cache_sentinel") ? (ie = u.jsx("div", {
			className: "x6s0dn4 x1p8t8ri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x1peatla xtijo5x x1o0tod xl56j7k xvc5jky x11t971q x10l6tqk xwa60dl x1cb1t30 x1fu8urw",
			children: u.jsx(r("WDSIconWdsIcWhatsappSmbLogo.react"), {
				colorName: "persistentAlwaysBlack",
				width: m,
				height: m
			})
		}), t[68] = ie) : ie = t[68];
		var le;
		t[69] !== ae ? (le = u.jsxs("div", babelHelpers.extends({
			"data-testid": "biz-broadcast-bb-pro-onboarding-qr",
			role: "img",
			"aria-label": re
		}, oe, { children: [ae, ie] })), t[69] = ae, t[70] = le) : le = t[70];
		var se;
		t[71] === Symbol.for("react.memo_cache_sentinel") ? (se = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDeemphasized",
			textAlign: "center",
			testid: "biz-broadcast-bb-pro-onboarding-qr-caption",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[71] = se) : se = t[71];
		var ue;
		t[72] !== le ? (ue = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			rowGap: 16,
			children: [le, se]
		}), t[72] = le, t[73] = ue) : ue = t[73];
		var ce;
		t[74] !== l || t[75] !== E || t[76] !== k || t[77] !== I || t[78] !== T || t[79] !== ne || t[80] !== ue ? (ce = u.jsxs(l, {
			align: E,
			justify: k,
			wrap: I,
			xstyle: T,
			children: [ne, ue]
		}), t[74] = l, t[75] = E, t[76] = k, t[77] = I, t[78] = T, t[79] = ne, t[80] = ue, t[81] = ce) : ce = t[81];
		var de;
		t[82] !== b ? (de = b ? u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 4,
			testid: "biz-broadcast-bb-pro-onboarding-relogin-notice",
			children: [u.jsx(r("WDSIconIcInfo.react"), {
				colorName: "contentDeemphasized",
				width: f,
				height: f
			}), u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}) : null, t[82] = b, t[83] = de) : de = t[83];
		var me;
		t[84] !== d || t[85] !== D || t[86] !== x || t[87] !== $ || t[88] !== N || t[89] !== M || t[90] !== w || t[91] !== ce || t[92] !== de ? (me = u.jsxs(d, {
			grow: D,
			align: x,
			justify: $,
			rowGap: N,
			xstyle: M,
			testid: w,
			children: [ce, de]
		}), t[84] = d, t[85] = D, t[86] = x, t[87] = $, t[88] = N, t[89] = M, t[90] = w, t[91] = ce, t[92] = de, t[93] = me) : me = t[93];
		var pe;
		return t[94] !== g || t[95] !== A || t[96] !== F || t[97] !== O || t[98] !== me ? (pe = u.jsxs(g, {
			grow: A,
			align: F,
			children: [O, me]
		}), t[94] = g, t[95] = A, t[96] = F, t[97] = O, t[98] = me, t[99] = pe) : pe = t[99], pe;
	}
	l.default = C;
}), 226);
