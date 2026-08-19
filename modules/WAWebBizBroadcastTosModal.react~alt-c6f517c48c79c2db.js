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
	"asyncToGeneratorRuntime",
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
		var a = t.broadcastJid, i = t.entryPoint, l = t.onAccept, u = t.onDismiss, _ = o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl(), f = o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1), g = o("useWAWebBizBroadcastQuota").useWAWebBizBroadcastQuota(), h = g.awaitQuota;
		d(function() {
			if (f) {
				var e = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxViewed(i, e);
			}
		}, [i, f]), d(function() {
			f || (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebBizBroadcastTosModal] ineligible, dismissing"]))), u());
		}, [f, u]);
		var y = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptClicked(i);
				try {
					yield h();
				} catch (l) {
					var e, t = (e = r("getErrorSafe")(l)) != null ? e : r("err")("biz broadcast quota fetch failed"), n = "quota_fetch_failed: " + t.name + ": " + t.message, d = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptFailed(i, n, d, a), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				o("WAWebBizBroadcastTos").acceptBizBroadcastTos().then(function() {
					var e = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptSuccess(i, e), l();
				}).catch(function(e) {
					var t, n = (t = r("getErrorSafe")(e)) != null ? t : r("err")("unknown error"), l = n.name + ": " + n.message, s = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptFailed(i, l, s, a), u();
				});
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), C = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxDismissClicked(i), u();
		};
		return f ? c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Small,
			buttonGroupStyle: m.legalFooterControls,
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: y,
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: C,
			onOverlayClick: C,
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
										href: _,
										onClick: function() {
											return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(i, "learn_more");
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
											return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(i, "tos");
										},
										children: s._(
											/*BTDS*/
											""
										)
									})), s._implicitParam("=m3", c.jsx(r("WDSTextualLink.react"), {
										href: o("WAWebBroadcastConsts").META_PRIVACY_POLICY_URL,
										onClick: function() {
											return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(i, "privacy_policy");
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
