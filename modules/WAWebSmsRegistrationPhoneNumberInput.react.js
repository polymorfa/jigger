__d("WAWebSmsRegistrationPhoneNumberInput.react", [
	"fbt",
	"CometHeroHoldTrigger.react",
	"WAIsoToCc",
	"WAWebAppRootInteractionContext.react",
	"WAWebCountriesUtils",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebHybridRegGating",
	"WAWebInteractionTracePolicy",
	"WAWebLinkDeviceCommonComponents.react",
	"WAWebLinkDeviceCommonInstructions.react",
	"WAWebLinkDeviceFlagEmojiSetup",
	"WAWebLinkDeviceQplHelpLinkEvent",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WAWebPhoneNumberCaptureFields.react",
	"WAWebPhoneNumberCaptureValidation",
	"WAWebSmsRegistrationConfirmation.react",
	"WAWebSmsRegistrationSendSmsCall",
	"WAWebSmsRegistrationSubtitle.react",
	"WAWebSpinner.react",
	"WAWebWaBrandArrowRightIconWrapper.react",
	"WDSThemes",
	"asyncToGeneratorRuntime",
	"react",
	"useVisibility",
	"useWAWebAsync",
	"useWAWebCountries"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useImperativeHandle, p = c.useMemo, _ = c.useState;
	function f(e) {
		var t = e.experimentBucket, a = e.imperativeRef, i = e.onBack, l = e.onContinue, c = e.setApiCmd, f = _(""), g = f[0], h = f[1], y = _("US"), C = y[0], b = y[1], v = _(!1), S = v[0], R = v[1], L = _(!1), E = L[0], k = L[1], I = _(), T = I[0], D = I[1], x = d(function() {
			return (T == null ? void 0 : T.status) === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.SENT ? (h(""), D(null), !0) : i != null ? i() : !1;
		}, [i, T == null ? void 0 : T.status]);
		m(a, function() {
			return { handleBack: x };
		}, [x]);
		var $ = d(function(e, t) {
			h(t.substr(0, 10));
		}, []), P = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN
		}), N = P.startInteraction, M = p(function() {
			return S || E || !r("WAWebPhoneNumberCaptureValidation")(C, g);
		}, [
			E,
			S,
			g,
			C
		]), w = r("useVisibility")({ onVisible: function() {
			o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(t == null ? o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_PN_SCREEN_LOADED : o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_PN_SCREEN_LOADED);
		} }), A = w[0], F = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), []), O = o("useWAWebCountries").useCountries({ filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION }), B = O.error, W = O.value;
		if (W == null || B != null || F.loading || F.error) return u.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			children: [u.jsx(r("CometHeroHoldTrigger.react"), {
				description: "WAWebSmsRegistrationPhoneNumberInput",
				hold: !0
			}), u.jsx(o("WAWebSpinner.react").Spinner, {})]
		});
		var q = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				if (!M) {
					o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(t == null ? o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_PN_SCREEN_CONTINUE_CLICKED : o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_PN_SCREEN_CONTINUE_CLICKED), R(!0);
					var n = ((e = r("WAIsoToCc")[C]) != null ? e : "") + g, a = yield o("WAWebSmsRegistrationSendSmsCall").sendSmsCall(n), i = a == null ? void 0 : a.retry_after;
					(a == null ? void 0 : a.status) === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.ERROR && i != null && i > 0 && (k(!0), window.setTimeout(function() {
						k(!1);
					}, i * 1e3)), D(a), R(!1);
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), U = o("WAWebHybridRegGating").isHybridRegEnabled();
		return (T == null ? void 0 : T.status) === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.SENT ? u.jsx(r("WAWebSmsRegistrationConfirmation.react"), {
			selectedCountryId: C,
			phoneNumberWithoutCountryCode: g,
			onBack: function() {
				h(""), D(null);
			},
			onContinue: l,
			onRetry: q,
			providerNumber: T == null ? void 0 : T.provider_number,
			theme: U ? "wds" : void 0
		}) : u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 24,
			className: U ? void 0 : "light",
			xstyle: U ? void 0 : o("WDSThemes").WDSLightTheme,
			ref: A,
			children: [
				u.jsx(o("WAWebFlex.react").FlexRow, {
					alignSelf: "center",
					children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
						rowGap: o("WAWebHybridRegGating").isHybridRegEnabled() ? 0 : 16,
						children: [u.jsx(o("WAWebFlex.react").FlexRow, {
							alignSelf: "center",
							children: u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
								value: s._(
									/*BTDS*/
									""
								),
								theme: o("WAWebHybridRegGating").isHybridRegEnabled() ? "wds" : void 0
							})
						}), u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebSmsRegistrationSubtitle.react").SmsRegistrationSubtitle, {}) })]
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					alignSelf: "center",
					children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
						rowGap: 4,
						align: "center",
						children: [u.jsx(r("WAWebPhoneNumberCaptureFields.react"), {
							phoneNumberWithoutCountryCode: g,
							selectedCountryId: C,
							onChangePhoneNumber: $,
							onChangeSelectedCountry: b,
							showCountrySelect: o("WAWebHybridRegGating").shouldShowCountrySelector(),
							surface: "link-device-phone-number",
							onSubmit: function() {
								q();
							},
							error: T == null ? void 0 : T.error_reason,
							theme: o("WAWebHybridRegGating").isHybridRegEnabled() ? "wds" : "default"
						}), u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
							text: r("WAWebFbtCommon")("Continue"),
							onClick: q,
							animate: !1,
							disabled: M,
							testId: "link-device-sms-pn-entry-continue-button",
							icon: u.jsx(r("WAWebWaBrandArrowRightIconWrapper.react"), {}),
							theme: o("WAWebHybridRegGating").isHybridRegEnabled() ? "wds" : void 0
						})]
					})
				}),
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					columnGap: 8,
					alignSelf: "center",
					children: [u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsx(o("WAWebSmsRegistrationSubtitle.react").SmsRegistrationSubtitleText, { children: s._(
						/*BTDS*/
						""
					) }) }), u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsx(o("WAWebSmsRegistrationSubtitle.react").SmsRegistrationSubtitleText, { children: u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
						isBold: o("WAWebHybridRegGating").isHybridRegEnabled(),
						text: s._(
							/*BTDS*/
							""
						),
						onClick: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							N(), c(null);
						}),
						showArrow: o("WAWebHybridRegGating").isHybridRegEnabled() ? !1 : void 0,
						showUnderline: o("WAWebHybridRegGating").isHybridRegEnabled() ? !1 : void 0
					}) }) })]
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
