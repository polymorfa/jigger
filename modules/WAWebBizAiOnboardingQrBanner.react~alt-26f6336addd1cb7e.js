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
	"react"
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
		var t = e.qpId;
		c(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewBizAiOnboardingQr();
		}, []);
		var n = function() {
			o("WAWebBizAILargeScreensLogEvents").logClickBizAiOnboardingNeedHelp(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getBizAiOnboardingHandoffFaqUrl());
		}, a = !o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage(), i = t != null ? d + "-" + encodeURIComponent(t) : d;
		return u.jsxs("div", {
			className: "x6s0dn4 x6egj2d x78zum5 xdt5ytf x5yr21d xl56j7k x1h678fw xcldk2z xv6tirj x1phvje8 x1f0uite xh8yej3",
			children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 24,
				xstyle: h.banner,
				testid: "biz-ai-onboarding-qr-banner",
				children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					rowGap: 24,
					xstyle: h.textColumn,
					children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "stretch",
						rowGap: 8,
						children: [u.jsx(r("WDSText.react"), {
							type: "Headline2",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								""
							)
						}), u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: s._(
								/*BTDS*/
								""
							)
						})]
					}), u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcOpenInNew.react"),
						label: s._(
							/*BTDS*/
							""
						),
						onPress: n,
						size: "small",
						testid: "biz-ai-onboarding-need-help",
						type: "default",
						variant: "borderless"
					})]
				}), u.jsxs("div", {
					"data-testid": "biz-ai-onboarding-qr-code",
					role: "img",
					"aria-label": s._(
						/*BTDS*/
						""
					),
					className: "x1b51vyi x1n2onr6 xzjbwwf",
					children: [u.jsx(r("WAWebQRCode.react"), {
						data: i,
						size: m
					}), u.jsx("div", {
						className: "x6s0dn4 x1p8t8ri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x5kalc8 xbudbmw xl56j7k x10l6tqk xwa60dl x11lhmoz x10h3iyq",
						children: u.jsx(r("WDSIconWdsIcWhatsappSmbLogo.react"), {
							colorName: "persistentAlwaysBlack",
							width: f,
							height: f
						})
					})]
				})]
			}), a ? u.jsxs(o("WAWebFlex.react").FlexRow, {
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
			}) : null]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
