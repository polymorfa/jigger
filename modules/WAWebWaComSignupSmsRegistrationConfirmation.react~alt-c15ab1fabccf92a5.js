__d("WAWebWaComSignupSmsRegistrationConfirmation.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebLinkDeviceCommonComponents.react",
	"WAWebLinkDeviceCommonInstructions.react",
	"WAWebLinkDeviceInstructionsList.react",
	"WAWebLinkDeviceQplHelpLinkEvent",
	"WAWebWdsIllPhoneTextDownloadV2Icon.react",
	"react",
	"useVisibility"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		return e.length === 11 ? "+" + e.slice(0, 1) + " (" + e.slice(1, 4) + ") " + e.slice(4, 7) + "-" + e.slice(7) : e;
	}
	function d(e) {
		var t, n = e.onBack, a = e.onLinkDevice, i = e.onRetry, l = e.phoneNumberWithoutCountryCode, d = e.providerNumber, p = r("useVisibility")({ onVisible: function() {
			o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_CONFIRMATION_SCREEN_LOADED);
		} }), _ = p[0], f = c("1" + l);
		return u.jsxs((t = o("WAWebFlex.react")).FlexRow, {
			columnGap: 20,
			ref: _,
			children: [u.jsxs(t.FlexColumn, {
				rowGap: 32,
				children: [u.jsx(t.FlexRow, { children: u.jsxs(t.FlexColumn, {
					rowGap: 12,
					children: [u.jsx(t.FlexRow, { children: u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, { value: s._(
						/*BTDS*/
						""
					) }) }), u.jsxs(t.FlexRow, {
						columnGap: 8,
						children: [
							s._(
								/*BTDS*/
								"",
								[s._param("phone", f)]
							),
							".",
							u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
								text: s._(
									/*BTDS*/
									""
								),
								isBold: !1,
								showArrow: !1,
								showUnderline: !0,
								onClick: async function() {
									o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_CONFIRMATION_WRONG_NUMBER_CLICKED), n();
								}
							})
						]
					})]
				}) }), u.jsx(t.FlexRow, { children: u.jsxs(t.FlexColumn, {
					rowGap: 32,
					children: [u.jsx(t.FlexRow, { children: u.jsx(m, {
						onLinkDevice: a,
						onRetry: i,
						providerNumber: d
					}) }), u.jsxs(t.FlexRow, {
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
					})]
				}) })]
			}), u.jsx(t.FlexColumn, {
				align: "center",
				alignSelf: "center",
				children: u.jsx(o("WAWebWdsIllPhoneTextDownloadV2Icon.react").WdsIllPhoneTextDownloadV2Icon, {})
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.onLinkDevice, n = e.onRetry, o = e.providerNumber, a = [
			u.jsx(p, {
				onRetry: n,
				providerNumber: o
			}, "postreginstruction1"),
			u.jsx(_, {}, "postreginstruction2"),
			u.jsx(f, { onLinkDevice: t }, "postreginstruction3")
		];
		return u.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
			instructionSource: "postreg",
			instructions: a
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.onRetry, n = e.providerNumber;
		return u.jsxs(u.Fragment, { children: [
			n != null ? s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(g, { children: s._(
					/*BTDS*/
					""
				) })), s._implicitParam("=m4", u.jsx(g, { children: s._(
					/*BTDS*/
					"",
					[s._param("provider_number", n)]
				) }))]
			) : s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(g, { children: s._(
					/*BTDS*/
					""
				) }))]
			),
			".",
			" ",
			s._(
				/*BTDS*/
				"",
				[s._param("resend_sms", u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
					text: s._(
						/*BTDS*/
						""
					),
					isBold: !1,
					showArrow: !1,
					showUnderline: !0,
					onClick: async function() {
						o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_CONFIRMATION_RESEND_SMS_CLICKED), await t();
					}
				}))]
			)
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return s._(
			/*BTDS*/
			""
		);
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.onLinkDevice;
		return u.jsxs(u.Fragment, { children: [
			s._(
				/*BTDS*/
				""
			),
			"\xA0",
			u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
				text: s._(
					/*BTDS*/
					""
				),
				isBold: !1,
				onClick: async function() {
					o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_CONFIRMATION_CONTINUE_CLICKED), t();
				},
				showArrow: !1,
				showUnderline: !0
			})
		] });
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.children;
		return u.jsx("strong", {
			className: "x1rg5ohu xk50ysn x1o2sk6j",
			children: t
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = d;
}), 226);
