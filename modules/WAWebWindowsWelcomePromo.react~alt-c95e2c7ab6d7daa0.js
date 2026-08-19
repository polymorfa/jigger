__d("WAWebWindowsWelcomePromo.react", [
	"fbt",
	"WAWebDebounce",
	"WAWebFlex.react",
	"WAWebNoop",
	"WAWebPhoneNumberCaptureFields.react",
	"WAWebSmsRegistrationSubtitle.react",
	"WDSButton.react",
	"WDSSectionDivider.react",
	"WDSText.react",
	"react",
	"useWAWebRegPromo"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		row: {
			maxWidth: "x17fpy1y",
			width: "xh8yej3",
			$$css: !0
		},
		btn: {
			width: "xdzyupr",
			$$css: !0
		}
	};
	function d() {
		var e;
		return u.jsxs((e = o("WAWebFlex.react")).FlexRow, {
			align: "center",
			grow: 1,
			xstyle: c.row,
			paddingTop: 16,
			paddingBottom: 24,
			children: [
				u.jsx(e.FlexItem, {
					grow: 3,
					children: u.jsx(r("WDSSectionDivider.react"), { divider: !0 })
				}),
				u.jsx(e.FlexItem, {
					grow: 1,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx(e.FlexItem, {
					grow: 3,
					children: u.jsx(r("WDSSectionDivider.react"), { divider: !0 })
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t, n = e.isFocused, a = e.onContinue, i = e.onFocus, l = e.smsRegistration, m = s._(
			/*BTDS*/
			""
		), p = r("useWAWebRegPromo")(l), _ = p.handleChangePhoneNumber, f = p.handleSubmit, g = p.isDisabled, h = p.phoneNumberWithoutCountryCode, y = p.selectedCountryId, C = r("WAWebDebounce")(i, 100), b = function() {
			g || f().then(a);
		};
		return u.jsxs(u.Fragment, { children: [
			u.jsx(d, {}),
			n && u.jsx(o("WAWebFlex.react").FlexRow, {
				paddingBottom: 16,
				children: u.jsx(o("WAWebSmsRegistrationSubtitle.react").SmsRegistrationSubtitle, {
					ctaText: m,
					includesSmsText: !1,
					includeNewLine: !0
				})
			}),
			u.jsx(r("WAWebPhoneNumberCaptureFields.react"), {
				onFocus: function() {
					return i(!0);
				},
				onBlur: function() {
					g && C(!1);
				},
				phoneNumberWithoutCountryCode: h,
				selectedCountryId: y,
				onChangePhoneNumber: _,
				onChangeSelectedCountry: r("WAWebNoop"),
				showCountrySelect: !1,
				surface: "link-device-phone-number",
				onSubmit: b,
				error: (t = l.serverResponse) == null ? void 0 : t.error_reason,
				theme: "wds"
			}),
			n && u.jsx(r("WDSButton.react"), {
				disabled: g,
				onPress: b,
				label: m,
				type: "default",
				variant: "filled",
				xstyle: c.btn
			})
		] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
