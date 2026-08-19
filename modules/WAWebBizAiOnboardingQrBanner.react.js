__d("WAWebBizAiOnboardingQrBanner.react", [
	"fbt",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebQRCode.react",
	"WAWebUserPrefsMultiDevice",
	"WDSButton.react",
	"WDSIconIcInfo.react",
	"WDSIconIcOpenInNew.react",
	"WDSIconWdsIcWhatsappSmbLogo.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = "https://wa.me/biz-agents-onboarding?referral=web-qr-handoff", m = 180, p = 240, _ = 42, f = 32, g = 18, h = {
		reloginNotice: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		banner: {
			backgroundColor: "xw6alqk",
			borderStartStartRadius: "x1g83kfv",
			borderStartEndRadius: "x3qq2k7",
			borderEndEndRadius: "x2x8art",
			borderEndStartRadius: "x1qor8vf",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			$$css: !0
		},
		textColumn: {
			width: "xafpxmx",
			$$css: !0
		}
	};
	function y(e) {
		var t = o("react-compiler-runtime").c(16), n = e.qpId, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [], t[0] = a) : a = t[0], c(b, a);
		var i = C, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage(), t[1] = l) : l = t[1];
		var p = !l, _ = n != null ? d + "-" + encodeURIComponent(n) : d, y;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x6s0dn4 x6egj2d x78zum5 xdt5ytf x5yr21d xl56j7k x1h678fw xcldk2z xv6tirj x1phvje8 x1f0uite xh8yej3" }, t[2] = y) : y = t[2];
		var v;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[3] = v) : v = t[3];
		var S;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			rowGap: 8,
			children: [v, u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), t[4] = S) : S = t[4];
		var R;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			rowGap: 24,
			xstyle: h.textColumn,
			children: [S, u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcOpenInNew.react"),
				label: s._(
					/*BTDS*/
					""
				),
				onPress: i,
				size: "small",
				testid: "biz-ai-onboarding-need-help",
				type: "default",
				variant: "borderless"
			})]
		}), t[5] = R) : R = t[5];
		var L, E;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), E = { className: "x1b51vyi x1n2onr6 xzjbwwf" }, t[6] = L, t[7] = E) : (L = t[6], E = t[7]);
		var k;
		t[8] !== _ ? (k = u.jsx(r("WAWebQRCode.react"), {
			data: _,
			size: m
		}), t[8] = _, t[9] = k) : k = t[9];
		var I;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsx("div", {
			className: "x6s0dn4 x1p8t8ri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x5kalc8 xbudbmw xl56j7k x10l6tqk xwa60dl x11lhmoz x10h3iyq",
			children: u.jsx(r("WDSIconWdsIcWhatsappSmbLogo.react"), {
				colorName: "persistentAlwaysBlack",
				width: f,
				height: f
			})
		}), t[10] = I) : I = t[10];
		var T;
		t[11] !== k ? (T = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 24,
			xstyle: h.banner,
			testid: "biz-ai-onboarding-qr-banner",
			children: [R, u.jsxs("div", babelHelpers.extends({
				"data-testid": "biz-ai-onboarding-qr-code",
				role: "img",
				"aria-label": L
			}, E, { children: [k, I] }))]
		}), t[11] = k, t[12] = T) : T = t[12];
		var D;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (D = p ? u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 4,
			testid: "biz-ai-onboarding-relogin-notice",
			children: [u.jsx(r("WDSIconIcInfo.react"), {
				colorName: "contentDeemphasized",
				width: g,
				height: g
			}), u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				xstyle: h.reloginNotice,
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}) : null, t[13] = D) : D = t[13];
		var x;
		return t[14] !== T ? (x = u.jsxs("div", babelHelpers.extends({}, y, { children: [T, D] })), t[14] = T, t[15] = x) : x = t[15], x;
	}
	function C() {
		o("WAWebBizAILargeScreensLogEvents").logClickBizAiOnboardingNeedHelp(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getBizAiOnboardingHandoffFaqUrl());
	}
	function b() {
		o("WAWebBizAILargeScreensLogEvents").logViewBizAiOnboardingQr();
	}
	l.default = y;
}), 226);
