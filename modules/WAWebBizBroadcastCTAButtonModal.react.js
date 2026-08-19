__d("WAWebBizBroadcastCTAButtonModal.react", [
	"WALogger",
	"WAWebBizBroadcastCTAButtonFormContent.react",
	"WAWebBizBroadcastCTAButtonSectionStrings",
	"WAWebBizBroadcastCTAButtonUtils",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useMemo, p = c.useState, _ = {
		footer: {
			flexShrink: "x2lah0s",
			justifyContent: "x13a6bvl",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x106a9eq",
			paddingInlineEnd: "x1xnnf8n",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		header: {
			alignItems: "x6s0dn4",
			columnGap: "x1trrmfo",
			flexShrink: "x2lah0s",
			height: "x1peatla",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineEnd: "xcldk2z",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		modalContainer: {
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			boxSizing: "x9f619",
			height: "x1fy0iyk",
			maxHeight: "x179dxpb",
			maxWidth: "x16xn7b0",
			width: "x1czfd9k",
			$$css: !0
		}
	};
	function f(t) {
		var n, a = t.buttonType, i = t.initialButtonData, l = t.onClose, s = t.onSave, c = p((i == null ? void 0 : i.type) === "cta_url" ? i.url : ""), f = c[0], g = c[1], h = p((i == null ? void 0 : i.type) === "cta_call" ? i.phoneNumber : ""), y = h[0], C = h[1], b = p((n = i == null ? void 0 : i.displayText) != null ? n : ""), v = b[0], S = b[1], R = p((i == null ? void 0 : i.type) === "cta_url" ? i.linkTrackingEnabled : !1), L = R[0], E = R[1], k = m(function() {
			return a === "cta_url" ? {
				displayText: v,
				linkTrackingEnabled: L,
				type: "cta_url",
				url: o("WAWebBizBroadcastCTAButtonUtils").normalizeUrl(f)
			} : a === "cta_call" ? {
				displayText: v,
				phoneNumber: y,
				type: "cta_call"
			} : a === "quick_reply" ? {
				displayText: v,
				type: "quick_reply"
			} : a === "cta_catalog" ? {
				businessPhoneNumber: "",
				displayText: v,
				type: "cta_catalog"
			} : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + a);
			})();
		}, [
			a,
			v,
			L,
			y,
			f
		]), I = m(function() {
			return o("WAWebBizBroadcastCTAButtonUtils").validateButtonData(k);
		}, [k]), T = !I.isValid && I.error != null ? I.error : null, D = o("WAWebBizBroadcastCTAButtonUtils").getDisplayTextValidationError(T), x = o("WAWebBizBroadcastCTAButtonUtils").getPhoneNumberValidationError(T), $ = o("WAWebBizBroadcastCTAButtonUtils").getUrlValidationError(T), P = v.trim() === "" || a === "cta_url" && f.trim() === "" || a === "cta_call" && y.trim() === "" || !I.isValid, N = d(function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebBizBroadcastCTAButtonModal] handleSave: buttonType=", ""])), a), s(k);
		}, [
			k,
			a,
			s
		]), M = d(function(e, t) {
			E(e);
		}, []);
		return u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			onOverlayClick: l,
			testid: "biz-broadcast-cta-button-modal",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: _.modalContainer,
				align: "stretch",
				children: [
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: _.header,
						align: "center",
						children: [u.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcClose.react"),
							onPress: l,
							size: "medium",
							variant: "borderless",
							testid: "cta-modal-close-button"
						}), u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: o("WAWebBizBroadcastCTAButtonUtils").getModalTitle(a)
						})]
					}),
					u.jsx(r("WAWebBizBroadcastCTAButtonFormContent.react"), {
						buttonType: a,
						displayText: v,
						displayTextError: D,
						linkTrackingEnabled: L,
						onDisplayTextChange: S,
						onLinkTrackingToggle: M,
						onPhoneNumberChange: C,
						onUrlChange: g,
						phoneNumber: y,
						phoneNumberError: x,
						url: f,
						urlError: $
					}),
					u.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: _.footer,
						children: u.jsx(r("WDSButton.react"), {
							label: o("WAWebBizBroadcastCTAButtonSectionStrings").getSaveButtonLabel(),
							onPress: N,
							size: "medium",
							variant: "filled",
							disabled: P,
							testid: "cta-modal-save-button"
						})
					})
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
