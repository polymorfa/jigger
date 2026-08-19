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
	"asyncToGeneratorRuntime",
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
			window.location.href = E(e, t);
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
		var a = o("react-compiler-runtime").c(26), i = t.callType, l = t.idHash, u = t.locales;
		h(i, l);
		var d = o("useWAWebTimeout").useManualTimeout(L), m = d[0], p;
		a[0] !== i || a[1] !== l || a[2] !== m ? (p = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				window.location.href = E(i, l), m(g);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), a[0] = i, a[1] = l, a[2] = m, a[3] = p) : p = a[3];
		var f = p, C = S, v = b, R;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (R = (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, y.page), a[4] = R) : R = a[4];
		var k;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (k = c.jsx(r("WAWebCallLinkJoinCallLiteHeader.react"), {
			onLogin: v,
			onDownload: C
		}), a[5] = k) : k = a[5];
		var I;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), a[6] = I) : I = a[6];
		var T;
		a[7] !== i ? (T = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: _,
			testid: "call-link-join-call-lite-hero",
			"aria-label": I,
			xstyle: y.heroButton,
			children: i === "video" ? c.jsx(o("WAWebVideoIcon.react").VideoIcon, {
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
		}), a[7] = i, a[8] = T) : T = a[8];
		var D;
		a[9] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsx("h1", {
			className: "xdj266r x14z9mp xat24cr x1lziwak x579bpy xo1l8bm x1ud3kw6 xiaed6b xipbhat x2b8uid",
			children: s._(
				/*BTDS*/
				""
			)
		}), a[9] = D) : D = a[9];
		var x;
		a[10] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), a[10] = x) : x = a[10];
		var $;
		a[11] !== f ? ($ = c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			onClick: f,
			testId: "call-link-join-call-lite-join-button",
			text: x,
			xstyle: y.joinButtonOverride
		}), a[11] = f, a[12] = $) : $ = a[12];
		var P;
		a[13] !== T || a[14] !== $ ? (P = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: y.card,
			children: [
				T,
				D,
				$
			]
		}), a[13] = T, a[14] = $, a[15] = P) : P = a[15];
		var N, M;
		a[16] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsx(r("WDSIllustrationWdsPictoDownloadDesktop.react"), {
			"aria-hidden": !0,
			xstyle: y.downloadCardIllustration
		}), M = c.jsx("span", {
			className: "x1iyjqo2 x1c3i2sq xk50ysn x1o2sk6j xy4aiz4 x1yc453h",
			children: s._(
				/*BTDS*/
				""
			)
		}), a[16] = N, a[17] = M) : (N = a[16], M = a[17]);
		var w;
		a[18] === Symbol.for("react.memo_cache_sentinel") ? (w = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			xstyle: y.downloadCard,
			children: [
				N,
				M,
				c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
					onClick: C,
					testId: "call-link-join-call-lite-download-button",
					text: s._(
						/*BTDS*/
						""
					),
					xstyle: y.downloadButtonOverride
				})
			]
		}), a[18] = w) : w = a[18];
		var A;
		a[19] !== P ? (A = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: y.contentRegion,
			children: [k, c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: y.cardArea,
				children: [P, w]
			})]
		}), a[19] = P, a[20] = A) : A = a[20];
		var F;
		a[21] !== u ? (F = c.jsx(r("WAWebCallLinkJoinCallLiteFooter.react"), {
			locales: u,
			onDownload: C
		}), a[21] = u, a[22] = F) : F = a[22];
		var O;
		return a[23] !== A || a[24] !== F ? (O = c.jsxs("div", babelHelpers.extends({}, R, { children: [A, F] })), a[23] = A, a[24] = F, a[25] = O) : O = a[25], O;
	}
	function b() {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			window.location.href = f;
		}), v.apply(this, arguments);
	}
	function S() {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			window.location.href = _;
		}), R.apply(this, arguments);
	}
	function L() {
		document.visibilityState === "visible" && (window.location.href = _);
	}
	function E(e, t) {
		return "whatsapp://call/" + encodeURIComponent(e) + "/" + encodeURIComponent(t);
	}
	l.default = C;
}), 226);
