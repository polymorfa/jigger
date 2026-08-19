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
	"asyncToGeneratorRuntime",
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
		var t, a = e.onBack, i = e.onContinue, l = e.onRetry, d = e.phoneNumberWithoutCountryCode, p = e.providerNumber, _ = e.selectedCountryId, f = e.theme, g = r("useVisibility")({ onVisible: r("once")(function() {
			o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_SCREEN_LOADED);
		}) }), h = g[0], y = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
			phoneNumberWithoutCountryCode: d,
			countryCodeIso: _
		}), C = (t = r("WAIsoToCc")[_]) != null ? t : "", b = f === "wds" ? "+" + C : C, v = (y == null ? void 0 : y.formattedInputValue) != null ? b + " " + (y == null ? void 0 : y.formattedInputValue) : b + " " + d;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 20,
			ref: h,
			xstyle: [c.container, f === "wds" && c.containerWds],
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
						theme: f
					}) }), u.jsxs(o("WAWebFlex.react").FlexRow, {
						columnGap: 8,
						children: [
							s._(
								/*BTDS*/
								"",
								[s._param("phone", v)]
							),
							".",
							u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
								text: s._(
									/*BTDS*/
									""
								),
								isBold: f === "wds",
								showArrow: !1,
								showUnderline: f !== "wds",
								onClick: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
									o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_WRONG_NUMBER_CLICKED), a();
								})
							})
						]
					})]
				}) }), u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					rowGap: 32,
					children: [
						u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(m, {
							onRetry: l,
							providerNumber: p,
							theme: f
						}) }),
						f === "wds" && i != null && u.jsxs(o("WAWebFlex.react").FlexColumn, {
							rowGap: 16,
							children: [u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(r("WDSButton.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								onPress: function() {
									o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_CONTINUE_CLICKED), i();
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
						f !== "wds" && u.jsxs(o("WAWebFlex.react").FlexRow, {
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
				children: f === "wds" ? u.jsx(o("WAWebWdsIllPhoneTextDownloadV2Icon.react").WdsIllPhoneTextDownloadV2Icon, {}) : u.jsx(o("WAWebWdsIllPhoneTextDownloadIcon.react").WdsIllPhoneTextDownloadIcon, {})
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
		var t = e.onRetry, r = e.providerNumber, a = e.theme, i = a === "wds", l = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(y, { children: s._(
				/*BTDS*/
				""
			) }))]
		), c = s._(
			/*BTDS*/
			""
		), d = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_RESEND_SMS_CLICKED), yield t();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return i ? u.jsxs(u.Fragment, { children: [
			r != null && r.length > 0 ? s._(
				/*BTDS*/
				"",
				[s._param("provider_number", u.jsx(y, { children: r })), s._implicitParam("=m1", u.jsx(y, { children: s._(
					/*BTDS*/
					""
				) }))]
			) : l,
			" ",
			s._(
				/*BTDS*/
				"",
				[s._param("resend_sms", u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
					text: c,
					isBold: !0,
					showArrow: !1,
					showUnderline: !1,
					onClick: d
				}))]
			)
		] }) : u.jsxs(u.Fragment, { children: [
			r != null && r.length > 0 ? s._(
				/*BTDS*/
				"",
				[s._param("provider_number", r), s._implicitParam("=m1", u.jsx(y, { children: s._(
					/*BTDS*/
					""
				) }))]
			) : l,
			" ",
			s._(
				/*BTDS*/
				"",
				[s._param("resend_sms", u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
					text: c,
					isBold: !1,
					showArrow: !1,
					showUnderline: !0,
					onClick: d
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
