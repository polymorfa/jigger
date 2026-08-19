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
	"react"
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
		var t, n = e.entryPoint, a = e.onDowngrade, i = e.qrDeeplink, l = o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl(), d = !o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage();
		return u.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
			grow: 1,
			align: "stretch",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				title: o("WAWebBizBroadcastsHomeStrings").getBusinessBroadcastsTitle(),
				menu: u.jsx(r("WAWebBizBroadcastsHomeOverflowMenu.react"), { testid: "biz-broadcast-bb-pro-onboarding-header-menu-button" })
			}), u.jsxs(t.FlexColumn, {
				grow: 1,
				align: "center",
				justify: "center",
				rowGap: 24,
				xstyle: y.wrapper,
				testid: "biz-broadcast-bb-pro-onboarding-screen",
				children: [u.jsxs(t.FlexRow, {
					align: "center",
					justify: "center",
					wrap: "wrap",
					xstyle: y.columns,
					children: [u.jsxs(t.FlexColumn, {
						align: "center",
						rowGap: 24,
						children: [
							u.jsx(o("WAWebWdsIllClipMessagesIcon.react").WdsIllClipMessagesIcon, {
								width: p,
								height: _
							}),
							u.jsxs(t.FlexColumn, {
								align: "center",
								rowGap: 16,
								xstyle: y.textBlock,
								children: [u.jsx(r("WDSText.react"), {
									type: "LargeTitle1",
									colorName: "contentDefault",
									textAlign: "center",
									testid: "biz-broadcast-bb-pro-onboarding-title",
									children: s._(
										/*BTDS*/
										""
									)
								}), u.jsx(r("WDSText.react"), {
									type: "Body1",
									colorName: "contentDeemphasized",
									textAlign: "center",
									testid: "biz-broadcast-bb-pro-onboarding-subtitle",
									children: s._(
										/*BTDS*/
										"",
										[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), {
											href: l,
											onClick: function() {
												return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(n, "learn_more", o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO);
											},
											testid: "biz-broadcast-bb-pro-onboarding-learn-more",
											children: s._(
												/*BTDS*/
												""
											)
										}))]
									)
								})]
							}),
							u.jsx(r("WDSButton.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								onPress: a,
								variant: "outline",
								size: "medium",
								testid: "biz-broadcast-bb-pro-onboarding-downgrade-button"
							})
						]
					}), u.jsxs(t.FlexColumn, {
						align: "center",
						rowGap: 16,
						children: [u.jsxs("div", {
							"data-testid": "biz-broadcast-bb-pro-onboarding-qr",
							role: "img",
							"aria-label": s._(
								/*BTDS*/
								""
							),
							className: "xqitzto x1n2onr6 x1dz1jew",
							children: [u.jsx(r("WAWebQRCode.react"), {
								correctLevel: "H",
								data: i,
								size: c
							}), u.jsx("div", {
								className: "x6s0dn4 x1p8t8ri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x1peatla xtijo5x x1o0tod xl56j7k xvc5jky x11t971q x10l6tqk xwa60dl x1cb1t30 x1fu8urw",
								children: u.jsx(r("WDSIconWdsIcWhatsappSmbLogo.react"), {
									colorName: "persistentAlwaysBlack",
									width: m,
									height: m
								})
							})]
						}), u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDeemphasized",
							textAlign: "center",
							testid: "biz-broadcast-bb-pro-onboarding-qr-caption",
							children: s._(
								/*BTDS*/
								""
							)
						})]
					})]
				}), d ? u.jsxs(o("WAWebFlex.react").FlexRow, {
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
				}) : null]
			})]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
