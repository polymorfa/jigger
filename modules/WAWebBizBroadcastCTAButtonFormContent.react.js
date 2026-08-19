__d("WAWebBizBroadcastCTAButtonFormContent.react", [
	"WAWebBizBroadcastCTAButtonSectionStrings",
	"WAWebFlex.react",
	"WDSSwitch.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		formContainer: {
			alignItems: "x1qjc9v5",
			boxSizing: "x9f619",
			flexGrow: "x1iyjqo2",
			paddingBottom: "x12xbjc7",
			paddingTop: "xexx8yu",
			paddingInlineStart: "x106a9eq",
			paddingInlineEnd: "x1xnnf8n",
			paddingLeft: null,
			paddingRight: null,
			rowGap: "x129bwdz",
			width: "xh8yej3",
			$$css: !0
		},
		trackingToggleRow: {
			alignItems: "x1cy8zhl",
			columnGap: "x1s70e7g",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(13), n = e.buttonType, a = e.displayText, i = e.displayTextError, l = e.linkTrackingEnabled, c = e.onDisplayTextChange, d = e.onLinkTrackingToggle, m = e.onPhoneNumberChange, p = e.onUrlChange, _ = e.phoneNumber, f = e.phoneNumberError, g = e.url, h = e.urlError, y;
		return t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== c || t[5] !== d || t[6] !== m || t[7] !== p || t[8] !== _ || t[9] !== f || t[10] !== g || t[11] !== h ? (y = n === "cta_url" ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.formContainer,
			children: [
				s.jsx(r("WDSTextField.react"), {
					label: o("WAWebBizBroadcastCTAButtonSectionStrings").getUrlLabel(),
					value: g,
					onValueChange: p,
					error: h != null,
					errorText: h,
					testid: "business_broadcasts_cta_url_textfield"
				}),
				s.jsx(r("WDSTextField.react"), {
					label: o("WAWebBizBroadcastCTAButtonSectionStrings").getButtonTextLabel(),
					value: a,
					onValueChange: c,
					error: i != null,
					errorText: i,
					testid: "business_broadcasts_cta_display_text_textfield"
				}),
				s.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: u.trackingToggleRow,
					children: [s.jsx("div", {
						className: "x1iyjqo2",
						children: s.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: o("WAWebBizBroadcastCTAButtonSectionStrings").getLinkTrackingHelperText()
						})
					}), s.jsx(r("WDSSwitch.react"), {
						value: l,
						onChange: d,
						testid: "cta-modal-link-tracking-toggle"
					})]
				})
			]
		}) : n === "cta_call" ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.formContainer,
			children: [
				s.jsx(r("WDSTextField.react"), {
					label: o("WAWebBizBroadcastCTAButtonSectionStrings").getPhoneNumberLabel(),
					value: _,
					onValueChange: m,
					error: f != null,
					errorText: f,
					testid: "business_broadcasts_cta_phone_textfield"
				}),
				s.jsx(r("WDSTextField.react"), {
					label: o("WAWebBizBroadcastCTAButtonSectionStrings").getButtonTextLabel(),
					value: a,
					onValueChange: c,
					error: i != null,
					errorText: i,
					testid: "business_broadcasts_cta_display_text_textfield"
				}),
				s.jsx("div", {
					className: "x1tiyuxx",
					children: s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: o("WAWebBizBroadcastCTAButtonSectionStrings").getPhoneCallHelperText()
					})
				})
			]
		}) : n === "quick_reply" ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.formContainer,
			children: [s.jsx(r("WDSTextField.react"), {
				label: o("WAWebBizBroadcastCTAButtonSectionStrings").getButtonAndReplyTextLabel(),
				value: a,
				onValueChange: c,
				error: i != null,
				errorText: i,
				testid: "business_broadcasts_cta_display_text_textfield"
			}), s.jsx("div", {
				className: "x1tiyuxx",
				children: s.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: o("WAWebBizBroadcastCTAButtonSectionStrings").getCustomerReplyHelperText()
				})
			})]
		}) : n === "cta_catalog" ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
		})(), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = c, t[5] = d, t[6] = m, t[7] = p, t[8] = _, t[9] = f, t[10] = g, t[11] = h, t[12] = y) : y = t[12], y;
	}
	l.default = c;
}), 98);
