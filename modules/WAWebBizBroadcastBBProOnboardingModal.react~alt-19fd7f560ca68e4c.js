__d("WAWebBizBroadcastBBProOnboardingModal.react", [
	"fbt",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebConfirmPopup.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebNoop",
	"WAWebWamEnumBbTierType",
	"WAWebWdsIllClipMessagesIcon.react",
	"WDSIconIcSchedule.react",
	"WDSIconIcSend.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		body: {
			rowGap: "x1f0uite",
			$$css: !0
		},
		content: {
			rowGap: "x1j3ira4",
			$$css: !0
		},
		featureIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		legalFooterControls: {
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		titleSubtitle: {
			rowGap: "x1f0uite",
			$$css: !0
		},
		valuePropItem: {
			columnGap: "xrdqr27",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		valueProps: {
			rowGap: "x1qvou4u",
			$$css: !0
		}
	}, d = {
		height: 24,
		width: 24,
		xstyle: c.featureIcon
	};
	function m(e) {
		var t, n, a = e.entryPoint, i = e.onContinueWithout, l = e.onTryNow, m = o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl();
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Small,
			buttonGroupStyle: c.legalFooterControls,
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: l,
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: i,
			onOverlayClick: r("WAWebNoop"),
			testid: "biz-broadcast-bb-pro-onboarding-modal",
			children: u.jsxs((n = o("WAWebFlex.react")).FlexColumn, {
				xstyle: c.content,
				align: "stretch",
				children: [u.jsx(n.FlexColumn, {
					align: "center",
					testid: "biz-broadcast-bb-pro-onboarding-modal-illustration",
					children: u.jsx(o("WAWebWdsIllClipMessagesIcon.react").WdsIllClipMessagesIcon, {
						width: 180,
						height: 120
					})
				}), u.jsxs(n.FlexColumn, {
					xstyle: c.body,
					align: "stretch",
					children: [u.jsxs(n.FlexColumn, {
						xstyle: c.titleSubtitle,
						align: "stretch",
						children: [u.jsx(t = r("WDSText.react"), {
							type: "Headline1",
							colorName: "contentDefault",
							textAlign: "center",
							testid: "biz-broadcast-bb-pro-onboarding-modal-title",
							children: s._(
								/*BTDS*/
								""
							)
						}), u.jsx(t, {
							type: "Body2",
							colorName: "contentDeemphasized",
							textAlign: "center",
							testid: "biz-broadcast-bb-pro-onboarding-modal-subtitle",
							children: s._(
								/*BTDS*/
								"",
								[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), {
									href: m,
									onClick: function() {
										return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(a, "learn_more", o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO);
									},
									testid: "biz-broadcast-bb-pro-onboarding-modal-learn-more",
									children: s._(
										/*BTDS*/
										""
									)
								}))]
							)
						})]
					}), u.jsxs(n.FlexColumn, {
						xstyle: c.valueProps,
						align: "stretch",
						children: [u.jsxs(n.FlexRow, {
							align: "center",
							xstyle: c.valuePropItem,
							testid: "biz-broadcast-bb-pro-onboarding-modal-value-prop-volume",
							children: [u.jsx(r("WDSIconIcSend.react"), babelHelpers.extends({}, d)), u.jsx(t, {
								type: "Body1",
								colorName: "contentDefault",
								children: s._(
									/*BTDS*/
									""
								)
							})]
						}), u.jsxs(n.FlexRow, {
							align: "center",
							xstyle: c.valuePropItem,
							testid: "biz-broadcast-bb-pro-onboarding-modal-value-prop-customization",
							children: [u.jsx(r("WDSIconIcSchedule.react"), babelHelpers.extends({}, d)), u.jsx(t, {
								type: "Body1",
								colorName: "contentDefault",
								children: s._(
									/*BTDS*/
									""
								)
							})]
						})]
					})]
				})]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
