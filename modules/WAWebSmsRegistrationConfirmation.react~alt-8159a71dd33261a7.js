__d("WAWebSmsRegistrationConfirmation.react", [
	"fbt",
	"WAIsoToCc",
	"WAWebFlex.react",
	"WAWebLinkDeviceCommonComponents.react",
	"WAWebLinkDeviceCommonInstructions.react",
	"WAWebLinkDeviceInstructionsList.react",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebLinkDeviceQplHelpLinkEvent",
	"WAWebWdsIllPhoneTextDownloadIcon.react",
	"WAWebWdsIllPhoneTextDownloadV2Icon.react",
	"WDSButton.react",
	"once",
	"react",
	"useVisibility"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		continueButton: {
			minWidth: "x173radd",
			$$css: !0
		},
		container: {
			flexDirection: "x1q0g3np",
			"@media (max-width: 600px)_flexDirection": "x3wxgri",
			$$css: !0
		},
		containerWds: {
			color: "x14ug900",
			$$css: !0
		},
		contentColumn: {
			"@media (max-width: 600px)_alignItems": "xcjwdqn",
			$$css: !0
		},
		illustrationColumn: {
			width: "x9r4l05",
			"@media (max-width: 600px)_marginBottom": "xudy9kh",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = e.onBack, a = e.onContinue, i = e.onRetry, l = e.phoneNumberWithoutCountryCode, d = e.providerNumber, p = e.selectedCountryId, _ = e.theme, f = r("useVisibility")({ onVisible: r("once")(function() {
			o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_SCREEN_LOADED);
		}) }), g = f[0], h = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
			phoneNumberWithoutCountryCode: l,
			countryCodeIso: p
		}), y = (t = r("WAIsoToCc")[p]) != null ? t : "", C = _ === "wds" ? "+" + y : y, b = (h == null ? void 0 : h.formattedInputValue) != null ? C + " " + (h == null ? void 0 : h.formattedInputValue) : C + " " + l;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 20,
			ref: g,
			xstyle: [c.container, _ === "wds" && c.containerWds],
			children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				rowGap: 32,
				xstyle: c.contentColumn,
				children: [u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					rowGap: 12,
					children: [u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
						value: s._(
							/*BTDS*/
							""
						),
						theme: _
					}) }), u.jsxs(o("WAWebFlex.react").FlexRow, {
						columnGap: 8,
						children: [
							s._(
								/*BTDS*/
								"",
								[s._param("phone", b)]
							),
							".",
							u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
								text: s._(
									/*BTDS*/
									""
								),
								isBold: _ === "wds",
								showArrow: !1,
								showUnderline: _ !== "wds",
								onClick: async function() {
									o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_WRONG_NUMBER_CLICKED), n();
								}
							})
						]
					})]
				}) }), u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					rowGap: 32,
					children: [
						u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(m, {
							onRetry: i,
							providerNumber: d,
							theme: _
						}) }),
						_ === "wds" && a != null && u.jsxs(o("WAWebFlex.react").FlexColumn, {
							rowGap: 16,
							children: [u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(r("WDSButton.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								onPress: function() {
									o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_CONTINUE_CLICKED), a();
								},
								variant: "filled",
								widthMode: "fit",
								xstyle: c.continueButton
							}) }), u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
								text: s._(
									/*BTDS*/
									""
								),
								isBold: !0,
								showArrow: !1,
								showUnderline: !1,
								url: "https://www.whatsapp.com/contact"
							}) })]
						}),
						_ !== "wds" && u.jsxs(o("WAWebFlex.react").FlexRow, {
							columnGap: 8,
							children: [s._(
								/*BTDS*/
								""
							), u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
								text: s._(
									/*BTDS*/
									""
								),
								isBold: !1,
								showArrow: !1,
								showUnderline: !0,
								url: "https://www.whatsapp.com/contact"
							})]
						})
					]
				}) })]
			}), u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				alignSelf: "center",
				xstyle: c.illustrationColumn,
				shrink: 0,
				children: _ === "wds" ? u.jsx(o("WAWebWdsIllPhoneTextDownloadV2Icon.react").WdsIllPhoneTextDownloadV2Icon, {}) : u.jsx(o("WAWebWdsIllPhoneTextDownloadIcon.react").WdsIllPhoneTextDownloadIcon, {})
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.onRetry, n = e.providerNumber, o = e.theme, a = o === "wds" ? [
			u.jsx(p, {
				onRetry: t,
				providerNumber: n,
				theme: o
			}, "smsregistrationconfirmationinstruction1"),
			u.jsx(_, {}, "smsregistrationconfirmationinstruction2"),
			u.jsx(h, { theme: o }, "smsregistrationconfirmationinstruction3")
		] : [
			u.jsx(p, {
				onRetry: t,
				providerNumber: n,
				theme: o
			}, "smsregistrationconfirmationinstruction1"),
			u.jsx(f, {}, "smsregistrationconfirmationinstruction2"),
			u.jsx(g, {}, "smsregistrationconfirmationinstruction3"),
			u.jsx(h, { theme: o }, "smsregistrationconfirmationinstruction4")
		];
		return u.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
			instructionSource: "smsreg",
			instructions: a
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.onRetry, n = e.providerNumber, r = e.theme, a = r === "wds", i = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(y, { children: s._(
				/*BTDS*/
				""
			) }))]
		), l = s._(
			/*BTDS*/
			""
		), c = async function() {
			o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_RESEND_SMS_CLICKED), await t();
		};
		return a ? u.jsxs(u.Fragment, { children: [
			n != null && n.length > 0 ? s._(
				/*BTDS*/
				"",
				[s._param("provider_number", u.jsx(y, { children: n })), s._implicitParam("=m1", u.jsx(y, { children: s._(
					/*BTDS*/
					""
				) }))]
			) : i,
			" ",
			s._(
				/*BTDS*/
				"",
				[s._param("resend_sms", u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
					text: l,
					isBold: !0,
					showArrow: !1,
					showUnderline: !1,
					onClick: c
				}))]
			)
		] }) : u.jsxs(u.Fragment, { children: [
			n != null && n.length > 0 ? s._(
				/*BTDS*/
				"",
				[s._param("provider_number", n), s._implicitParam("=m1", u.jsx(y, { children: s._(
					/*BTDS*/
					""
				) }))]
			) : i,
			" ",
			s._(
				/*BTDS*/
				"",
				[s._param("resend_sms", u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
					text: l,
					isBold: !1,
					showArrow: !1,
					showUnderline: !0,
					onClick: c
				}))]
			)
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m0", u.jsx(y, { children: s._(
				/*BTDS*/
				""
			) })), s._implicitParam("=m2", u.jsx(y, { children: s._(
				/*BTDS*/
				""
			) }))]
		);
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		return s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m0", u.jsx(y, { children: s._(
				/*BTDS*/
				""
			) }))]
		);
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		return s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(y, { children: s._(
				/*BTDS*/
				""
			) }))]
		);
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.theme;
		return u.jsx(u.Fragment, { children: t === "wds" ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(y, { children: s._(
				/*BTDS*/
				""
			) }))]
		) : u.jsxs(u.Fragment, { children: [
			s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(y, { children: s._(
					/*BTDS*/
					""
				) }))]
			),
			"\xA0",
			u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
				text: s._(
					/*BTDS*/
					""
				),
				url: "https://faq.whatsapp.com/497209988909970",
				isBold: t === "wds",
				showArrow: !1,
				showUnderline: t !== "wds"
			})
		] }) });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.children;
		return u.jsx("strong", {
			className: "x1rg5ohu xk50ysn x1o2sk6j",
			children: t
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = d;
}), 226);
