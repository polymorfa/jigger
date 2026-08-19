__d("WAWebCallLinkJoinCallLite.react", [
	"fbt",
	"WAWebCallLinkJoinCallLiteFooter.react",
	"WAWebCallLinkJoinCallLiteHeader.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WAWebPhoneIcon.react",
	"WAWebVideoIcon.react",
	"WDSIllustrationWdsPictoDownloadDesktop.react",
	"WDSThemes",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = "https://www.whatsapp.com/download", f = "https://web.whatsapp.com/", g = 2e3;
	function h(e, t) {
		var n = o("react-compiler-runtime").c(4), r, a;
		n[0] !== e || n[1] !== t ? (r = function() {
			window.location.href = R(e, t);
		}, a = [e, t], n[0] = e, n[1] = t, n[2] = r, n[3] = a) : (r = n[2], a = n[3]), p(r, a);
	}
	var y = {
		page: {
			fontFamily: "xnogrbr",
			backgroundColor: "x1fgb4vj",
			width: "xh8yej3",
			minWidth: "x15hv16n",
			minHeight: "x1us19tq",
			height: "x5yr21d",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			color: "xowvryd",
			boxSizing: "x9f619",
			$$css: !0
		},
		contentRegion: {
			alignSelf: "xkh2ocl",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			paddingInlineStart: "xu7uy1i x1e5xhrn",
			paddingLeft: null,
			paddingRight: null,
			paddingInlineEnd: "x1t7qo4d x9lt2cq",
			boxSizing: "x9f619",
			$$css: !0
		},
		cardArea: {
			width: "xh8yej3",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			rowGap: "x1f0uite",
			paddingTop: "x9orja2",
			paddingBottom: "xbaz6xv",
			justifyContent: "xl56j7k x176qze7",
			$$css: !0
		},
		card: {
			backgroundColor: "xb1i3fl",
			borderStartStartRadius: "x1g83kfv",
			borderStartEndRadius: "x3qq2k7",
			borderEndEndRadius: "x2x8art",
			borderEndStartRadius: "x1qor8vf",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xuvddsd",
			borderInlineEndColor: "x8vtej4",
			borderBottomColor: "xa1pj8o",
			borderInlineStartColor: "x10nbx9m",
			paddingTop: "x4i7bpe xiaro03",
			paddingInlineEnd: "x15zmtp0 xcm4ngb",
			paddingBottom: "x1sgudl8 x17ud9ob",
			paddingInlineStart: "x1oiqv2n xomcbdp",
			maxWidth: "x65f84u",
			width: "xh8yej3",
			boxSizing: "x9f619",
			rowGap: "xi32cqo",
			$$css: !0
		},
		heroButton: {
			width: "x13oubkp",
			height: "xjp8j0k",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x1bbfg41",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		heroGlyph: {
			color: "xz5x636",
			$$css: !0
		},
		joinButtonOverride: {
			minWidth: "x15x72sd",
			borderTopColor: "xuvddsd",
			borderInlineEndColor: "x8vtej4",
			borderBottomColor: "xa1pj8o",
			borderInlineStartColor: "x10nbx9m",
			color: "xipbhat xmp5vt6",
			$$css: !0
		},
		downloadCard: {
			backgroundColor: "xb1i3fl",
			borderStartStartRadius: "x1g83kfv",
			borderStartEndRadius: "x3qq2k7",
			borderEndEndRadius: "x2x8art",
			borderEndStartRadius: "x1qor8vf",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xuvddsd",
			borderInlineEndColor: "x8vtej4",
			borderBottomColor: "xa1pj8o",
			borderInlineStartColor: "x10nbx9m",
			paddingTop: "xl7twdi xf7h00z",
			paddingInlineEnd: "xyo0t3i x19viewb",
			paddingBottom: "xvg22vi xp9ekdk",
			paddingInlineStart: "xb0esv5 xaacwwv",
			columnGap: "xrdqr27",
			rowGap: "x1qvou4u",
			width: "xh8yej3",
			maxWidth: "x65f84u",
			boxSizing: "x9f619",
			$$css: !0
		},
		downloadCardIllustration: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		downloadButtonOverride: {
			minWidth: "x15x72sd",
			whiteSpace: "xuxw1ft",
			flexShrink: "x2lah0s",
			backgroundColor: "xb1i3fl x19qpkoy",
			borderTopColor: "xuvddsd",
			borderInlineEndColor: "x8vtej4",
			borderBottomColor: "xa1pj8o",
			borderInlineStartColor: "x10nbx9m",
			color: "xipbhat xmp5vt6",
			$$css: !0
		}
	};
	function C(t) {
		var n = o("react-compiler-runtime").c(26), a = t.callType, i = t.idHash, l = t.locales;
		h(a, i);
		var u = o("useWAWebTimeout").useManualTimeout(S), d = u[0], m;
		n[0] !== a || n[1] !== i || n[2] !== d ? (m = async function() {
			window.location.href = R(a, i), d(g);
		}, n[0] = a, n[1] = i, n[2] = d, n[3] = m) : m = n[3];
		var p = m, f = v, C = b, L;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (L = (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, y.page), n[4] = L) : L = n[4];
		var E;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx(r("WAWebCallLinkJoinCallLiteHeader.react"), {
			onLogin: C,
			onDownload: f
		}), n[5] = E) : E = n[5];
		var k;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), n[6] = k) : k = n[6];
		var I;
		n[7] !== a ? (I = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: _,
			testid: "call-link-join-call-lite-hero",
			"aria-label": k,
			xstyle: y.heroButton,
			children: a === "video" ? c.jsx(o("WAWebVideoIcon.react").VideoIcon, {
				"aria-hidden": !0,
				height: 48,
				width: 48,
				iconXstyle: y.heroGlyph
			}) : c.jsx(o("WAWebPhoneIcon.react").PhoneIcon, {
				"aria-hidden": !0,
				height: 48,
				width: 48,
				iconXstyle: y.heroGlyph
			})
		}), n[7] = a, n[8] = I) : I = n[8];
		var T;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (T = c.jsx("h1", {
			className: "xdj266r x14z9mp xat24cr x1lziwak x579bpy xo1l8bm x1ud3kw6 xiaed6b xipbhat x2b8uid",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[9] = T) : T = n[9];
		var D;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), n[10] = D) : D = n[10];
		var x;
		n[11] !== p ? (x = c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			onClick: p,
			testId: "call-link-join-call-lite-join-button",
			text: D,
			xstyle: y.joinButtonOverride
		}), n[11] = p, n[12] = x) : x = n[12];
		var $;
		n[13] !== I || n[14] !== x ? ($ = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: y.card,
			children: [
				I,
				T,
				x
			]
		}), n[13] = I, n[14] = x, n[15] = $) : $ = n[15];
		var P, N;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (P = c.jsx(r("WDSIllustrationWdsPictoDownloadDesktop.react"), {
			"aria-hidden": !0,
			xstyle: y.downloadCardIllustration
		}), N = c.jsx("span", {
			className: "x1iyjqo2 x1c3i2sq xk50ysn x1o2sk6j xy4aiz4 x1yc453h",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[16] = P, n[17] = N) : (P = n[16], N = n[17]);
		var M;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (M = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			xstyle: y.downloadCard,
			children: [
				P,
				N,
				c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
					onClick: f,
					testId: "call-link-join-call-lite-download-button",
					text: s._(
						/*BTDS*/
						""
					),
					xstyle: y.downloadButtonOverride
				})
			]
		}), n[18] = M) : M = n[18];
		var w;
		n[19] !== $ ? (w = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: y.contentRegion,
			children: [E, c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: y.cardArea,
				children: [$, M]
			})]
		}), n[19] = $, n[20] = w) : w = n[20];
		var A;
		n[21] !== l ? (A = c.jsx(r("WAWebCallLinkJoinCallLiteFooter.react"), {
			locales: l,
			onDownload: f
		}), n[21] = l, n[22] = A) : A = n[22];
		var F;
		return n[23] !== w || n[24] !== A ? (F = c.jsxs("div", babelHelpers.extends({}, L, { children: [w, A] })), n[23] = w, n[24] = A, n[25] = F) : F = n[25], F;
	}
	async function b() {
		window.location.href = f;
	}
	async function v() {
		window.location.href = _;
	}
	function S() {
		document.visibilityState === "visible" && (window.location.href = _);
	}
	function R(e, t) {
		return "whatsapp://call/" + encodeURIComponent(e) + "/" + encodeURIComponent(t);
	}
	l.default = C;
}), 226);
