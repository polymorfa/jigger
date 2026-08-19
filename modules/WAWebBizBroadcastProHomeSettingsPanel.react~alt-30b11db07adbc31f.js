__d("WAWebBizBroadcastProHomeSettingsPanel.react", [
	"WAWebBizBroadcastsHomeStrings",
	"WAWebDivider.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebNoop",
	"WAWebUnstyledButton.react",
	"WDSButton.react",
	"WDSIconIcBlock.react",
	"WDSIconIcChevronRight.react",
	"WDSIconIcCreditCard.react",
	"WDSIconIcDownload.react",
	"WDSIconIcEdit.react",
	"WDSIconIcHandyman.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 24, c = 20, d = {
		clickableRow: {
			cursor: "x1ypdohk",
			textAlign: "x1yc453h",
			width: "xh8yej3",
			$$css: !0
		},
		container: {
			backgroundColor: "x1280gxy",
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		content: {
			overflowY: "x1odjw0f",
			$$css: !0
		},
		dividerWrapper: {
			boxSizing: "x9f619",
			flexShrink: "x2lah0s",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		},
		row: {
			boxSizing: "x9f619",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		},
		sectionLabel: {
			boxSizing: "x9f619",
			paddingBottom: "x12xbjc7",
			paddingTop: "x1p57kb1",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		}
	};
	function m(e) {
		var t, n, a, i = e.onClose;
		return s.jsxs((n = o("WAWebFlex.react")).FlexColumn, {
			align: "stretch",
			xstyle: d.container,
			children: [s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: "small",
				title: (a = o("WAWebBizBroadcastsHomeStrings")).getBusinessBroadcastsSettingsTitle(),
				onCancel: i
			}), s.jsxs(n.FlexColumn, {
				grow: 1,
				xstyle: d.content,
				children: [
					s.jsxs(n.FlexRow, {
						gap: 16,
						align: "center",
						xstyle: d.row,
						children: [
							s.jsx(r("WDSIconIcHandyman.react"), {
								colorName: "contentDefault",
								height: u,
								width: u
							}),
							s.jsx(n.FlexItem, {
								grow: 1,
								children: s.jsx(t = r("WDSText.react"), {
									type: "Body1",
									colorName: "contentDefault",
									children: a.getAdvancedToolsLabel()
								})
							}),
							s.jsx(r("WDSButton.react"), {
								label: a.getTurnOffLabel(),
								onPress: r("WAWebNoop"),
								size: "small",
								testid: "biz-broadcasts-settings-advanced-tools-toggle",
								variant: "outline"
							})
						]
					}),
					s.jsx(n.FlexItem, {
						xstyle: d.dividerWrapper,
						children: s.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
					}),
					s.jsx(t, {
						type: "Body2",
						colorName: "contentDeemphasized",
						xstyle: d.sectionLabel,
						children: a.getManagePaymentsSectionLabel()
					}),
					s.jsxs(n.FlexRow, {
						gap: 16,
						align: "center",
						xstyle: d.row,
						children: [
							s.jsx(r("WDSIconIcCreditCard.react"), {
								colorName: "contentDefault",
								height: u,
								width: u
							}),
							s.jsx(n.FlexItem, {
								grow: 1,
								children: s.jsx(t, {
									type: "Body1",
									colorName: "contentDefault",
									children: a.getPaymentsLabel()
								})
							}),
							s.jsx(r("WDSIconIcEdit.react"), {
								colorName: "contentDeemphasized",
								height: u,
								width: u
							})
						]
					}),
					s.jsx(n.FlexItem, {
						xstyle: d.dividerWrapper,
						children: s.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
					}),
					s.jsx(t, {
						type: "Body2",
						colorName: "contentDeemphasized",
						xstyle: d.sectionLabel,
						children: a.getManageCustomerBaseSectionLabel()
					}),
					s.jsx(r("WAWebUnstyledButton.react"), {
						onClick: r("WAWebNoop"),
						xstyle: d.clickableRow,
						children: s.jsxs(n.FlexRow, {
							gap: 16,
							align: "center",
							xstyle: d.row,
							children: [
								s.jsx(r("WDSIconIcBlock.react"), {
									colorName: "contentDefault",
									height: u,
									width: u
								}),
								s.jsxs(n.FlexColumn, {
									grow: 1,
									children: [s.jsx(t, {
										type: "Body1",
										colorName: "contentDefault",
										children: a.getUnsubscribeRecipientsLabel()
									}), s.jsx(t, {
										type: "Body2",
										colorName: "contentDeemphasized",
										children: a.getUnsubscribeRecipientsSublabel()
									})]
								}),
								s.jsx(r("WDSIconIcChevronRight.react"), {
									colorName: "contentDeemphasized",
									height: c,
									width: c
								})
							]
						})
					}),
					s.jsx(r("WAWebUnstyledButton.react"), {
						onClick: r("WAWebNoop"),
						xstyle: d.clickableRow,
						children: s.jsxs(n.FlexRow, {
							gap: 16,
							align: "center",
							xstyle: d.row,
							children: [
								s.jsx(r("WDSIconIcDownload.react"), {
									colorName: "contentDefault",
									height: u,
									width: u
								}),
								s.jsxs(n.FlexColumn, {
									grow: 1,
									children: [s.jsx(t, {
										type: "Body1",
										colorName: "contentDefault",
										children: a.getDownloadSubscribedRecipientsLabel()
									}), s.jsx(t, {
										type: "Body2",
										colorName: "contentDeemphasized",
										children: a.getDownloadSubscribedRecipientsSublabel()
									})]
								}),
								s.jsx(r("WDSIconIcChevronRight.react"), {
									colorName: "contentDeemphasized",
									height: c,
									width: c
								})
							]
						})
					}),
					s.jsx(n.FlexItem, {
						xstyle: d.dividerWrapper,
						children: s.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
					})
				]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
