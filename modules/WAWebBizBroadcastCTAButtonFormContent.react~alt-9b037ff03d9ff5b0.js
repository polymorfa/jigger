__d("WAWebBizBroadcastCTAButtonFormContent.react", [
	"WAWebBizBroadcastCTAButtonSectionStrings",
	"WAWebFlex.react",
	"WDSSwitch.react",
	"WDSText.react",
	"WDSTextField.react",
	"react"
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
		var t = e.buttonType, n = e.displayText, a = e.displayTextError, i = e.linkTrackingEnabled, l = e.onDisplayTextChange, c = e.onLinkTrackingToggle, d = e.onPhoneNumberChange, m = e.onUrlChange, p = e.phoneNumber, _ = e.phoneNumberError, f = e.url, g = e.urlError;
		return t === "cta_url" ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.formContainer,
			children: [
				s.jsx(r("WDSTextField.react"), {
					label: o("WAWebBizBroadcastCTAButtonSectionStrings").getUrlLabel(),
					value: f,
					onValueChange: m,
					error: g != null,
					errorText: g,
					testid: "business_broadcasts_cta_url_textfield"
				}),
				s.jsx(r("WDSTextField.react"), {
					label: o("WAWebBizBroadcastCTAButtonSectionStrings").getButtonTextLabel(),
					value: n,
					onValueChange: l,
					error: a != null,
					errorText: a,
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
						value: i,
						onChange: c,
						testid: "cta-modal-link-tracking-toggle"
					})]
				})
			]
		}) : t === "cta_call" ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.formContainer,
			children: [
				s.jsx(r("WDSTextField.react"), {
					label: o("WAWebBizBroadcastCTAButtonSectionStrings").getPhoneNumberLabel(),
					value: p,
					onValueChange: d,
					error: _ != null,
					errorText: _,
					testid: "business_broadcasts_cta_phone_textfield"
				}),
				s.jsx(r("WDSTextField.react"), {
					label: o("WAWebBizBroadcastCTAButtonSectionStrings").getButtonTextLabel(),
					value: n,
					onValueChange: l,
					error: a != null,
					errorText: a,
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
		}) : t === "quick_reply" ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.formContainer,
			children: [s.jsx(r("WDSTextField.react"), {
				label: o("WAWebBizBroadcastCTAButtonSectionStrings").getButtonAndReplyTextLabel(),
				value: n,
				onValueChange: l,
				error: a != null,
				errorText: a,
				testid: "business_broadcasts_cta_display_text_textfield"
			}), s.jsx("div", {
				className: "x1tiyuxx",
				children: s.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: o("WAWebBizBroadcastCTAButtonSectionStrings").getCustomerReplyHelperText()
				})
			})]
		}) : t === "cta_catalog" ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})();
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
