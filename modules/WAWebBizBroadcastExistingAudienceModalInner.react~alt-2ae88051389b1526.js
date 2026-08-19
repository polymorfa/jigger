__d("WAWebBizBroadcastExistingAudienceModalInner.react", [
	"fbt",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebFlex.react",
	"WAWebKeyboardListHotKeys.react",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		footer: {
			backgroundColor: "x6egj2d",
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			flexShrink: "x2lah0s",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		header: {
			flexShrink: "x2lah0s",
			rowGap: "x1qvou4u",
			columnGap: "x1s70e7g",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x181vq82",
			paddingInlineEnd: "x1uc92m",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		modalContainer: {
			boxSizing: "x9f619",
			height: "xqt63rz",
			width: "x1czfd9k",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.list, n = e.onClose, a = e.onSave, i = e.selectedAudienceCount, l = e.totalRecipients, m = c(function(e) {
			return e[0];
		}, []);
		return u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			onOverlayClick: n,
			ariaLabel: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesDialogTitle(),
			testid: "biz-broadcast-existing-audiences-modal",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: d.modalContainer,
				align: "stretch",
				children: [
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: d.header,
						align: "center",
						children: [u.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcClose.react"),
							onPress: n,
							size: "medium",
							variant: "borderless",
							"aria-label": s._(
								/*BTDS*/
								""
							),
							testid: "existing-audiences-close-button"
						}), u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesDialogTitle()
						})]
					}),
					u.jsx(o("WAWebKeyboardListHotKeys.react").ListHotKeys, {
						className: "x1iyjqo2 x1odjw0f x12w63v0 x1nzty39",
						role: "listbox",
						"aria-label": o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesDialogTitle(),
						getDefaultFocusItem: m,
						children: t
					}),
					i > 0 && u.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: d.footer,
						align: "center",
						justify: "all",
						children: [u.jsx("div", {
							className: "x1iyjqo2",
							children: u.jsx(r("WDSText.react"), {
								type: "Body2Emphasized",
								colorName: "contentDefault",
								children: o("WAWebBizBroadcastsCreationStrings").getExistingAudienceRecipientsLabel(l)
							})
						}), u.jsx(r("WDSButton.react"), {
							label: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesSaveButtonLabel(),
							onPress: a,
							size: "medium",
							variant: "filled",
							testid: "existing-audiences-save-button"
						})]
					})
				]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
