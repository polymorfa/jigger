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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(21), n = e.onClose, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = o("WAWebBizBroadcastsHomeStrings").getBusinessBroadcastsSettingsTitle(), t[0] = a) : a = t[0];
		var i;
		t[1] !== n ? (i = s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: "small",
			title: a,
			onCancel: n
		}), t[1] = n, t[2] = i) : i = t[2];
		var l;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx(r("WDSIconIcHandyman.react"), {
			colorName: "contentDefault",
			height: u,
			width: u
		}), t[3] = l) : l = t[3];
		var m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			children: s.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: o("WAWebBizBroadcastsHomeStrings").getAdvancedToolsLabel()
			})
		}), t[4] = m) : m = t[4];
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = s.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 16,
			align: "center",
			xstyle: d.row,
			children: [
				l,
				m,
				s.jsx(r("WDSButton.react"), {
					label: o("WAWebBizBroadcastsHomeStrings").getTurnOffLabel(),
					onPress: r("WAWebNoop"),
					size: "small",
					testid: "biz-broadcasts-settings-advanced-tools-toggle",
					variant: "outline"
				})
			]
		}), t[5] = p) : p = t[5];
		var _;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = s.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: d.dividerWrapper,
			children: s.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
		}), t[6] = _) : _ = t[6];
		var f;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (f = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			xstyle: d.sectionLabel,
			children: o("WAWebBizBroadcastsHomeStrings").getManagePaymentsSectionLabel()
		}), t[7] = f) : f = t[7];
		var g;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (g = s.jsx(r("WDSIconIcCreditCard.react"), {
			colorName: "contentDefault",
			height: u,
			width: u
		}), t[8] = g) : g = t[8];
		var h;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (h = s.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 16,
			align: "center",
			xstyle: d.row,
			children: [
				g,
				s.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					children: s.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						children: o("WAWebBizBroadcastsHomeStrings").getPaymentsLabel()
					})
				}),
				s.jsx(r("WDSIconIcEdit.react"), {
					colorName: "contentDeemphasized",
					height: u,
					width: u
				})
			]
		}), t[9] = h) : h = t[9];
		var y;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (y = s.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: d.dividerWrapper,
			children: s.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
		}), t[10] = y) : y = t[10];
		var C;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (C = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			xstyle: d.sectionLabel,
			children: o("WAWebBizBroadcastsHomeStrings").getManageCustomerBaseSectionLabel()
		}), t[11] = C) : C = t[11];
		var b;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (b = s.jsx(r("WDSIconIcBlock.react"), {
			colorName: "contentDefault",
			height: u,
			width: u
		}), t[12] = b) : b = t[12];
		var v;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (v = s.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: o("WAWebBizBroadcastsHomeStrings").getUnsubscribeRecipientsLabel()
		}), t[13] = v) : v = t[13];
		var S;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (S = s.jsx(r("WAWebUnstyledButton.react"), {
			onClick: r("WAWebNoop"),
			xstyle: d.clickableRow,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				gap: 16,
				align: "center",
				xstyle: d.row,
				children: [
					b,
					s.jsxs(o("WAWebFlex.react").FlexColumn, {
						grow: 1,
						children: [v, s.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: o("WAWebBizBroadcastsHomeStrings").getUnsubscribeRecipientsSublabel()
						})]
					}),
					s.jsx(r("WDSIconIcChevronRight.react"), {
						colorName: "contentDeemphasized",
						height: c,
						width: c
					})
				]
			})
		}), t[14] = S) : S = t[14];
		var R;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (R = s.jsx(r("WDSIconIcDownload.react"), {
			colorName: "contentDefault",
			height: u,
			width: u
		}), t[15] = R) : R = t[15];
		var L;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (L = s.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: o("WAWebBizBroadcastsHomeStrings").getDownloadSubscribedRecipientsLabel()
		}), t[16] = L) : L = t[16];
		var E;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (E = s.jsx(r("WAWebUnstyledButton.react"), {
			onClick: r("WAWebNoop"),
			xstyle: d.clickableRow,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				gap: 16,
				align: "center",
				xstyle: d.row,
				children: [
					R,
					s.jsxs(o("WAWebFlex.react").FlexColumn, {
						grow: 1,
						children: [L, s.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: o("WAWebBizBroadcastsHomeStrings").getDownloadSubscribedRecipientsSublabel()
						})]
					}),
					s.jsx(r("WDSIconIcChevronRight.react"), {
						colorName: "contentDeemphasized",
						height: c,
						width: c
					})
				]
			})
		}), t[17] = E) : E = t[17];
		var k;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (k = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			grow: 1,
			xstyle: d.content,
			children: [
				p,
				_,
				f,
				h,
				y,
				C,
				S,
				E,
				s.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: d.dividerWrapper,
					children: s.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
				})
			]
		}), t[18] = k) : k = t[18];
		var I;
		return t[19] !== i ? (I = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.container,
			children: [i, k]
		}), t[19] = i, t[20] = I) : I = t[20], I;
	}
	l.default = m;
}), 98);
