__d("WAWebCallLinkJoinCallLiteHeader.react", [
	"fbt",
	"WAWebCallLinkDownloadArrowIcon.react",
	"WAWebCallLinkJoinCallLiteData",
	"WAWebCallLinkLoginChevronIcon.react",
	"WAWebCallLinkMarketingLogo.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WDSIconIcMenu.react",
	"react",
	"react-compiler-runtime",
	"useMergeRefs",
	"useWAWebFocusOnMount",
	"useWAWebListener",
	"useWAWebOnOutsideClick"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState, _ = "https://www.whatsapp.com/", f = {
		marketingHeader: {
			alignSelf: "xkh2ocl",
			height: "xwzfr38 x1ugx4es",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			columnGap: "x13a9art",
			flexWrap: "xozqiw3 x1a3ezpb",
			position: "x1n2onr6",
			$$css: !0
		},
		headerLogoLink: {
			columnGap: "xmixu3c",
			textDecoration: "x1hl2dhg",
			flexShrink: "x2lah0s",
			alignSelf: "xqcrz7y",
			marginTop: "x1tht7el",
			display: "x78zum5 xilz9nn",
			$$css: !0
		},
		headerLogoCenteredLink: {
			pointerEvents: "x67bb7w",
			$$css: !0
		},
		headerPillHideNarrow: {
			display: "x3nfvp2 xilz9nn",
			$$css: !0
		},
		marketingNavLink: {
			color: "xipbhat",
			fontSize: "x1jchvi3",
			fontWeight: "xo1l8bm",
			lineHeight: "x19v9tvf",
			textDecoration: "x1hl2dhg",
			textDecorationLine: "xkrqix3 x1ubmc1d",
			whiteSpace: "xuxw1ft",
			display: "x3nfvp2",
			alignItems: "x6s0dn4",
			columnGap: "xmixu3c",
			position: "x1n2onr6",
			$$css: !0
		},
		marketingActions: {
			columnGap: "xtqikln",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		headerCtaCommon: {
			minWidth: "x15x72sd",
			whiteSpace: "xuxw1ft",
			flexShrink: "x2lah0s",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			$$css: !0
		},
		loginButtonOverride: {
			backgroundColor: "xb1i3fl x19qpkoy",
			color: "xipbhat xmp5vt6",
			fontWeight: "xo1l8bm",
			paddingTop: "xyamay9",
			paddingBottom: "x1l90r2v",
			paddingInlineStart: "x110972j",
			paddingInlineEnd: "xziim83",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		headerDownloadButtonOverride: {
			fontWeight: "xo1l8bm",
			paddingTop: "xyamay9",
			paddingBottom: "x1l90r2v",
			paddingInlineStart: "x110972j",
			paddingInlineEnd: "xziim83",
			paddingLeft: null,
			paddingRight: null,
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopColor: "x20xl7p",
			borderInlineEndColor: "x1uiyo9q",
			borderBottomColor: "xqcoddb",
			borderInlineStartColor: "xgylblj",
			$$css: !0
		}
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(41), n = e.onDownload, a = e.onLogin, i = p(!1), l = i[0], c = i[1], d = m(null), g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = function(t) {
			t != null && t.preventDefault(), c(y);
		}, t[0] = g) : g = t[0];
		var b = g, v;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (v = function(t) {
			if (c(!1), t) {
				var e;
				(e = d.current) == null || e.focus();
			}
		}, t[1] = v) : v = t[1];
		var S = v, R, L, E;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), L = { className: "x1s85apg xcj0trt x6s0dn4 xl56j7k x100vrsf x1vqgdyp x1ejq31n x18oe1m7 x1sy0etr xstzfhl xjbqb8w x1ypdohk xipbhat x2lah0s xexx8yu xyri2b x18d9i69 x1c1uobl" }, E = u.jsx(r("WDSIconIcMenu.react"), {
			"aria-hidden": !0,
			height: 24,
			width: 24
		}), t[2] = R, t[3] = L, t[4] = E) : (R = t[2], L = t[3], E = t[4]);
		var k;
		t[5] !== l ? (k = u.jsx("button", babelHelpers.extends({
			ref: d,
			type: "button",
			"data-testid": "call-link-join-call-lite-header-hamburger",
			onClick: b,
			"aria-expanded": l,
			"aria-controls": "call-link-join-call-lite-hamburger-drawer",
			"aria-label": R
		}, L, { children: E })), t[5] = l, t[6] = k) : k = t[6];
		var I;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), t[7] = I) : I = t[7];
		var T, D;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (T = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: _,
			testid: "call-link-join-call-lite-header-home",
			"aria-label": I,
			xstyle: f.headerLogoLink,
			children: u.jsx(r("WAWebCallLinkMarketingLogo.react"), {
				height: 30,
				width: 130,
				testid: "call-link-join-call-lite-header-logo"
			})
		}), D = { className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1s85apg xm4l750 x6s0dn4 xl56j7k x1hl2dhg x47corl" }, t[8] = T, t[9] = D) : (T = t[8], D = t[9]);
		var x;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), t[10] = x) : x = t[10];
		var $, P, N, M;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? ($ = u.jsx("div", babelHelpers.extends({}, D, { children: u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: _,
			testid: "call-link-join-call-lite-header-home-centered",
			"aria-label": x,
			xstyle: f.headerLogoCenteredLink,
			children: u.jsx(r("WAWebCallLinkMarketingLogo.react"), {
				height: 26,
				width: 110,
				testid: "call-link-join-call-lite-header-logo-centered"
			})
		}) })), P = u.jsx("span", { className: "x1iyjqo2" }), N = u.jsx("nav", {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			className: "xf91ah9 x1qvou4u x6s0dn4 x1a02dak x78zum5 xilz9nn x1n2onr6 xl3v32j",
			children: o("WAWebCallLinkJoinCallLiteData").HEADER_NAV_LINKS.map(h)
		}), M = u.jsx("span", { className: "x1iyjqo2" }), t[11] = $, t[12] = P, t[13] = N, t[14] = M) : ($ = t[11], P = t[12], N = t[13], M = t[14]);
		var w;
		t[15] !== l ? (w = l ? u.jsx(C, { onClose: S }) : null, t[15] = l, t[16] = w) : w = t[16];
		var A;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (A = u.jsx("span", {
			"data-testid": "login-pill-icon",
			className: "x3nfvp2 x6s0dn4 xl56j7k x1kky2od xlup9mm x1ni14s7 x1hb08if",
			children: u.jsx(r("WAWebCallLinkLoginChevronIcon.react"), {})
		}), t[17] = A) : A = t[17];
		var F, O;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
			/*BTDS*/
			""
		), O = [
			f.headerCtaCommon,
			f.loginButtonOverride,
			f.headerPillHideNarrow
		], t[18] = F, t[19] = O) : (F = t[18], O = t[19]);
		var B;
		t[20] !== a ? (B = u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			icon: A,
			onClick: a,
			testId: "call-link-join-call-lite-header-login",
			text: F,
			xstyle: O
		}), t[20] = a, t[21] = B) : B = t[21];
		var W;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (W = u.jsx("span", {
			"data-testid": "download-pill-icon",
			className: "x3nfvp2 x6s0dn4 xl56j7k x1kky2od xlup9mm x1ni14s7 x1hb08if",
			children: u.jsx(r("WAWebCallLinkDownloadArrowIcon.react"), {})
		}), t[22] = W) : W = t[22];
		var q, U;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (q = s._(
			/*BTDS*/
			""
		), U = [
			f.headerCtaCommon,
			f.headerDownloadButtonOverride,
			f.headerPillHideNarrow
		], t[23] = q, t[24] = U) : (q = t[23], U = t[24]);
		var V;
		t[25] !== n ? (V = u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			icon: W,
			onClick: n,
			testId: "call-link-join-call-lite-header-download",
			text: q,
			xstyle: U
		}), t[25] = n, t[26] = V) : V = t[26];
		var H;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (H = s._(
			/*BTDS*/
			""
		), t[27] = H) : H = t[27];
		var G, z, j;
		t[28] === Symbol.for("react.memo_cache_sentinel") ? (G = { className: "x-default-marker x1s85apg xcj0trt x6s0dn4 xl56j7k x1td3qas x10w6t97 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xq4q3us xipbhat x1qehtsu x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x20xl7p x1uiyo9q xqcoddb xgylblj x1ypdohk x2lah0s xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x6ikm8r x10wlt62 x1vjfegm" }, z = u.jsx("span", {
			className: "x1n2onr6 x1vjfegm",
			children: u.jsx(r("WAWebCallLinkDownloadArrowIcon.react"), {
				width: 14,
				height: 14
			})
		}), j = u.jsx("div", { className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1c9tyrk xeusxvb x1pahc9y x1ertn4p x37n5ga x8knxv4 x1ufz0iv x2rt36x x19w6rv x11xpdln x1wsgiic x9lcvmn" }), t[28] = G, t[29] = z, t[30] = j) : (G = t[28], z = t[29], j = t[30]);
		var K;
		t[31] !== n ? (K = u.jsxs("button", babelHelpers.extends({
			type: "button",
			"data-testid": "call-link-join-call-lite-header-download-icon",
			"aria-label": H,
			onClick: n
		}, G, { children: [z, j] })), t[31] = n, t[32] = K) : K = t[32];
		var Q;
		t[33] !== B || t[34] !== V || t[35] !== K ? (Q = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: f.marketingActions,
			children: [
				B,
				V,
				K
			]
		}), t[33] = B, t[34] = V, t[35] = K, t[36] = Q) : Q = t[36];
		var X;
		return t[37] !== w || t[38] !== Q || t[39] !== k ? (X = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			shrink: 0,
			testid: "call-link-join-call-lite-header",
			xstyle: f.marketingHeader,
			children: [
				k,
				T,
				$,
				P,
				N,
				M,
				w,
				Q
			]
		}), t[37] = w, t[38] = Q, t[39] = k, t[40] = X) : X = t[40], X;
	}
	function h(e) {
		return u.jsxs(o("WAWebExternalLink.react").ExternalLink, {
			href: e.href,
			xstyle: f.marketingNavLink,
			children: [e.label(), u.jsx("span", {
				"aria-hidden": !0,
				className: "x10l6tqk x1t1qrwb x1o0tod x36qwtl xh8yej3 xq4q3us x19w6rv x1ufz0iv x2rt36x xqob4bo x11xpdln x15tc24c xcj1dhv"
			})]
		}, e.href);
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		return !e;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(9), n = e.onClose, a = r("useWAWebFocusOnMount")(), i;
		t[0] !== n ? (i = function(t) {
			var e = t.target;
			e instanceof Element && e.closest("[data-testid=\"call-link-join-call-lite-header-hamburger\"]") != null || n(!1);
		}, t[0] = n, t[1] = i) : i = t[1];
		var l = i, c = o("useWAWebOnOutsideClick").useOnOutsideClickRef(l), d = r("useMergeRefs")(a, c), m;
		t[2] !== n ? (m = function(t) {
			t.key === "Escape" && n(!0);
		}, t[2] = n, t[3] = m) : m = t[3];
		var p = m;
		o("useWAWebListener").useListener(document, "keydown", p);
		var _, f, g;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), f = { className: "x10l6tqk x1o0tod xtijo5x xdsb8wn x1n327nk xlo9req xl7twdi xvg22vi xu7uy1i x1e5xhrn x1t7qo4d x9lt2cq xkfbf7x x78zum5 xdt5ytf x1f0uite" }, g = o("WAWebCallLinkJoinCallLiteData").HEADER_NAV_LINKS.map(b), t[4] = _, t[5] = f, t[6] = g) : (_ = t[4], f = t[5], g = t[6]);
		var h;
		return t[7] !== d ? (h = u.jsx("div", babelHelpers.extends({
			ref: d,
			id: "call-link-join-call-lite-hamburger-drawer",
			"data-testid": "call-link-join-call-lite-hamburger-drawer",
			tabIndex: -1,
			"aria-label": _
		}, f, { children: g })), t[7] = d, t[8] = h) : h = t[8], h;
	}
	function b(e) {
		return u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: e.href,
			xstyle: f.marketingNavLink,
			children: e.label()
		}, e.href);
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = g;
}), 226);
