__d("WAWebBizBroadcastTosModal.react", [
	"fbt",
	"WALogger",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBizBroadcastTos",
	"WAWebBroadcastConsts",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebConfirmPopup.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWdsIllMarketingMessagesIcon.react",
	"WDSIconIcShowChart.react",
	"WDSIconIcTouchApp.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"err",
	"getErrorSafe",
	"react",
	"useWAWebBizBroadcastQuota"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useEffect, m = {
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
		legalFooter: {
			paddingBottom: "x18d9i69",
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
	}, p = {
		height: 24,
		width: 24,
		xstyle: m.featureIcon
	};
	function _(t) {
		var n = t.broadcastJid, a = t.entryPoint, i = t.onAccept, l = t.onDismiss, u = o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl(), _ = o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1), f = o("useWAWebBizBroadcastQuota").useWAWebBizBroadcastQuota(), g = f.awaitQuota;
		d(function() {
			if (_) {
				var e = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxViewed(a, e);
			}
		}, [a, _]), d(function() {
			_ || (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebBizBroadcastTosModal] ineligible, dismissing"]))), l());
		}, [_, l]);
		var h = async function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptClicked(a);
			try {
				await g();
			} catch (i) {
				var e, t = (e = r("getErrorSafe")(i)) != null ? e : r("err")("biz broadcast quota fetch failed"), u = "quota_fetch_failed: " + t.name + ": " + t.message, d = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptFailed(a, u, d, n), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			o("WAWebBizBroadcastTos").acceptBizBroadcastTos().then(function() {
				var e = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptSuccess(a, e), i();
			}).catch(function(e) {
				var t, i = (t = r("getErrorSafe")(e)) != null ? t : r("err")("unknown error"), s = i.name + ": " + i.message, u = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptFailed(a, s, u, n), l();
			});
		}, y = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxDismissClicked(a), l();
		};
		return _ ? c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Small,
			buttonGroupStyle: m.legalFooterControls,
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: h,
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: y,
			onOverlayClick: y,
			testid: "biz-broadcast-tos-modal",
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: m.content,
				align: "stretch",
				children: [c.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					children: c.jsx(o("WAWebWdsIllMarketingMessagesIcon.react").WdsIllMarketingMessagesIcon, {
						width: 180,
						height: 120
					})
				}), c.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: m.body,
					align: "stretch",
					children: [
						c.jsxs(o("WAWebFlex.react").FlexColumn, {
							xstyle: m.titleSubtitle,
							align: "stretch",
							children: [c.jsx(r("WDSText.react"), {
								type: "Headline1",
								colorName: "contentDefault",
								textAlign: "center",
								children: s._(
									/*BTDS*/
									""
								)
							}), c.jsxs(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								textAlign: "center",
								children: [
									s._(
										/*BTDS*/
										""
									),
									" ",
									c.jsx(r("WDSTextualLink.react"), {
										href: u,
										onClick: function() {
											return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(a, "learn_more");
										},
										children: s._(
											/*BTDS*/
											""
										)
									})
								]
							})]
						}),
						c.jsxs(o("WAWebFlex.react").FlexColumn, {
							xstyle: m.valueProps,
							align: "stretch",
							children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
								align: "center",
								xstyle: m.valuePropItem,
								children: [c.jsx(r("WDSIconIcTouchApp.react"), babelHelpers.extends({}, p)), c.jsx(r("WDSText.react"), {
									type: "Body1",
									colorName: "contentDefault",
									children: s._(
										/*BTDS*/
										""
									)
								})]
							}), c.jsxs(o("WAWebFlex.react").FlexRow, {
								align: "center",
								xstyle: m.valuePropItem,
								children: [c.jsx(r("WDSIconIcShowChart.react"), babelHelpers.extends({}, p)), c.jsx(r("WDSText.react"), {
									type: "Body1",
									colorName: "contentDefault",
									children: s._(
										/*BTDS*/
										""
									)
								})]
							})]
						}),
						c.jsx(o("WAWebFlex.react").FlexColumn, {
							align: "center",
							xstyle: m.legalFooter,
							children: c.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								textAlign: "center",
								children: s._(
									/*BTDS*/
									"",
									[s._implicitParam("=m1", c.jsx(r("WDSTextualLink.react"), {
										href: o("WAWebBroadcastConsts").BIZ_BROADCAST_TOS_URL,
										onClick: function() {
											return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(a, "tos");
										},
										children: s._(
											/*BTDS*/
											""
										)
									})), s._implicitParam("=m3", c.jsx(r("WDSTextualLink.react"), {
										href: o("WAWebBroadcastConsts").META_PRIVACY_POLICY_URL,
										onClick: function() {
											return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(a, "privacy_policy");
										},
										children: s._(
											/*BTDS*/
											""
										)
									}))]
								)
							})
						})
					]
				})]
			})
		}) : null;
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
