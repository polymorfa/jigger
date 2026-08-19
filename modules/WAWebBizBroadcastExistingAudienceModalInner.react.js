__d("WAWebBizBroadcastExistingAudienceModalInner.react", [
	"fbt",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebFlex.react",
	"WAWebKeyboardListHotKeys.react",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(22), n = e.list, a = e.onClose, i = e.onSave, l = e.selectedAudienceCount, c = e.totalRecipients, m = p, _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesDialogTitle(), t[0] = _) : _ = t[0];
		var f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[1] = f) : f = t[1];
		var g;
		t[2] !== a ? (g = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			onPress: a,
			size: "medium",
			variant: "borderless",
			"aria-label": f,
			testid: "existing-audiences-close-button"
		}), t[2] = a, t[3] = g) : g = t[3];
		var h;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesDialogTitle()
		}), t[4] = h) : h = t[4];
		var y;
		t[5] !== g ? (y = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: d.header,
			align: "center",
			children: [g, h]
		}), t[5] = g, t[6] = y) : y = t[6];
		var C;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (C = "x1iyjqo2 x1odjw0f x12w63v0 x1nzty39", t[7] = C) : C = t[7];
		var b;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (b = o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesDialogTitle(), t[8] = b) : b = t[8];
		var v;
		t[9] !== n ? (v = u.jsx(o("WAWebKeyboardListHotKeys.react").ListHotKeys, {
			className: C,
			role: "listbox",
			"aria-label": b,
			getDefaultFocusItem: m,
			children: n
		}), t[9] = n, t[10] = v) : v = t[10];
		var S;
		t[11] !== i || t[12] !== l || t[13] !== c ? (S = l > 0 && u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: d.footer,
			align: "center",
			justify: "all",
			children: [u.jsx("div", {
				className: "x1iyjqo2",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDefault",
					children: o("WAWebBizBroadcastsCreationStrings").getExistingAudienceRecipientsLabel(c)
				})
			}), u.jsx(r("WDSButton.react"), {
				label: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesSaveButtonLabel(),
				onPress: i,
				size: "medium",
				variant: "filled",
				testid: "existing-audiences-save-button"
			})]
		}), t[11] = i, t[12] = l, t[13] = c, t[14] = S) : S = t[14];
		var R;
		t[15] !== y || t[16] !== v || t[17] !== S ? (R = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.modalContainer,
			align: "stretch",
			children: [
				y,
				v,
				S
			]
		}), t[15] = y, t[16] = v, t[17] = S, t[18] = R) : R = t[18];
		var L;
		return t[19] !== a || t[20] !== R ? (L = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			onOverlayClick: a,
			ariaLabel: _,
			testid: "biz-broadcast-existing-audiences-modal",
			children: R
		}), t[19] = a, t[20] = R, t[21] = L) : L = t[21], L;
	}
	function p(e) {
		return e[0];
	}
	l.default = m;
}), 226);
