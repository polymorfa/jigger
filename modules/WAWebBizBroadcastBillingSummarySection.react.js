__d("WAWebBizBroadcastBillingSummarySection.react", [
	"fbt",
	"WAWebBizBroadcastCheckoutUtils",
	"WAWebBizBroadcastCurrencyUtils",
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebBizSectionDivider.react",
	"WAWebBizSummaryLineItem.react",
	"WAWebBroadcastConsts",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebCompactMapString",
	"WAWebDivider.react",
	"WAWebFlex.react",
	"WDSSpinner.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		container: {
			boxSizing: "x9f619",
			minWidth: "x19aeb6u",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		},
		header: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		lineItemsContainer: {
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			rowGap: "x1qvou4u",
			$$css: !0
		},
		tosContainer: {
			minWidth: "xgqtt45",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "xyri2b",
			width: "xnalus7",
			$$css: !0
		}
	};
	function m(e) {
		var t, n, a, i, l = e.billingInfo, m = e.checkoutData, p = e.entryPoint, _ = e.isLoadingBillingInfo, f = e.isLoadingCheckout, g = e.recipientCount, h = f || _, y = l == null ? void 0 : l.estimated_tax, C = c(function() {
			p != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.billingSummaryTosLinkClicked(p);
		}, [p]), b = c(function() {
			p != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.billingSummaryPrivacyPolicyLinkClicked(p);
		}, [p]);
		if (h) return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.container,
			children: [u.jsx(r("WAWebBizSectionDivider.react"), {
				title: o("WAWebBizBroadcastsCreationStrings").getBillingSummarySectionTitle(),
				xstyle: d.header
			}), u.jsx("div", {
				className: "x6s0dn4 x78zum5 xl56j7k xseoqlg",
				children: u.jsx(r("WDSSpinner.react"), { size: 32 })
			})]
		});
		var v = m != null ? o("WAWebBizBroadcastCheckoutUtils").calculateCreditsAndPaidRecipients(m, g) : {
			numberOfCreditsUsed: 0,
			numberOfPaidRecipients: 0
		}, S = v.numberOfCreditsUsed, R = v.numberOfPaidRecipients, L = o("WAWebBizBroadcastCurrencyUtils").formatCurrencyFromMinorUnits(0, m == null ? void 0 : m.costCurrency, m == null ? void 0 : m.costOffset, "0"), E = R > 0 && (t = y == null || (n = y.budget) == null ? void 0 : n.formatted_amount) != null ? t : L, k = (y == null ? void 0 : y.taxes) != null ? r("WAWebCompactMapString")(y.taxes, function(e) {
			var t;
			return (t = e.tax_amount) == null ? void 0 : t.formatted_amount;
		}) : [], I = k.length > 0 ? k.join(", ") : L, T = (a = y == null || (i = y.total) == null ? void 0 : i.formatted_amount) != null ? a : L;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.container,
			testid: "biz-broadcasts-billing-summary",
			children: [
				u.jsx(r("WAWebBizSectionDivider.react"), {
					title: o("WAWebBizBroadcastsCreationStrings").getBillingSummarySectionTitle(),
					xstyle: d.header
				}),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: d.lineItemsContainer,
					children: u.jsx(r("WAWebBizSummaryLineItem.react"), {
						colorName: "contentDeemphasized",
						label: o("WAWebBizBroadcastsCreationStrings").getTotalRecipientsLabel(),
						testid: "biz-broadcasts-billing-total-recipients",
						value: o("WAWebBizBroadcastsAudienceSelectionStrings").getRecipientCountOfLimitText(g, o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit())
					})
				}),
				u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: d.lineItemsContainer,
					children: [
						(m == null ? void 0 : m.totalAvailableCredits) != null && u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebBizSummaryLineItem.react"), {
							colorName: "contentDeemphasized",
							label: o("WAWebBizBroadcastsCreationStrings").getCreditsUsedLabel(),
							testid: "biz-broadcasts-billing-credits-used",
							value: String(S)
						}), u.jsx(r("WAWebBizSummaryLineItem.react"), {
							colorName: "contentDeemphasized",
							label: o("WAWebBizBroadcastsCreationStrings").getAvailableCreditsLabel(),
							testid: "biz-broadcasts-billing-credits-available",
							value: String(m.totalAvailableCredits)
						})] }),
						u.jsx(r("WAWebBizSummaryLineItem.react"), {
							colorName: "contentDeemphasized",
							label: o("WAWebBizBroadcastsCreationStrings").getEstimatedCostLabel(),
							testid: "biz-broadcasts-billing-estimated-cost",
							value: E
						}),
						u.jsx(r("WAWebBizSummaryLineItem.react"), {
							colorName: "contentDeemphasized",
							label: o("WAWebBizBroadcastsCreationStrings").getEstimatedTaxLabel(),
							value: I
						})
					]
				}),
				u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: d.lineItemsContainer,
					children: u.jsx(r("WAWebBizSummaryLineItem.react"), {
						isBolded: !0,
						label: o("WAWebBizBroadcastsCreationStrings").getEstimatedTotalLabel(),
						testid: "biz-broadcasts-billing-total",
						value: T
					})
				}),
				u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "baseline",
					xstyle: d.tosContainer,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m1", u.jsx(r("WDSTextualLink.react"), {
								href: o("WAWebBroadcastConsts").BIZ_BROADCAST_TOS_URL,
								onClick: C,
								children: s._(
									/*BTDS*/
									""
								)
							})), s._implicitParam("=m3", u.jsx(r("WDSTextualLink.react"), {
								href: o("WAWebBroadcastConsts").META_PRIVACY_POLICY_URL,
								onClick: b,
								children: s._(
									/*BTDS*/
									""
								)
							}))]
						)
					})
				})
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
