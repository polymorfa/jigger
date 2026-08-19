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
	"react",
	"useVisibility",
	"useWAWebAsync",
	"useWAWebCountries"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useImperativeHandle, p = c.useMemo, _ = c.useState;
	function f(e) {
		var t = e.experimentBucket, n = e.imperativeRef, a = e.onBack, i = e.onContinue, l = e.setApiCmd, c = _(""), f = c[0], g = c[1], h = _("US"), y = h[0], C = h[1], b = _(!1), v = b[0], S = b[1], R = _(!1), L = R[0], E = R[1], k = _(), I = k[0], T = k[1], D = d(function() {
			return (I == null ? void 0 : I.status) === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.SENT ? (g(""), T(null), !0) : a != null ? a() : !1;
		}, [a, I == null ? void 0 : I.status]);
		m(n, function() {
			return { handleBack: D };
		}, [D]);
		var x = d(function(e, t) {
			g(t.substr(0, 10));
		}, []), $ = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN
		}), P = $.startInteraction, N = p(function() {
			return v || L || !r("WAWebPhoneNumberCaptureValidation")(y, f);
		}, [
			L,
			v,
			f,
			y
		]), M = r("useVisibility")({ onVisible: function() {
			o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(t == null ? o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_PN_SCREEN_LOADED : o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_PN_SCREEN_LOADED);
		} }), w = M[0], A = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), []), F = o("useWAWebCountries").useCountries({ filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION }), O = F.error, B = F.value;
		if (B == null || O != null || A.loading || A.error) return u.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			children: [u.jsx(r("CometHeroHoldTrigger.react"), {
				description: "WAWebSmsRegistrationPhoneNumberInput",
				hold: !0
			}), u.jsx(o("WAWebSpinner.react").Spinner, {})]
		});
		var W = async function() {
			var e;
			if (!N) {
				o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(t == null ? o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_PN_SCREEN_CONTINUE_CLICKED : o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_PN_SCREEN_CONTINUE_CLICKED), S(!0);
				var n = ((e = r("WAIsoToCc")[y]) != null ? e : "") + f, a = await o("WAWebSmsRegistrationSendSmsCall").sendSmsCall(n), i = a == null ? void 0 : a.retry_after;
				(a == null ? void 0 : a.status) === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.ERROR && i != null && i > 0 && (E(!0), window.setTimeout(function() {
					E(!1);
				}, i * 1e3)), T(a), S(!1);
			}
		}, q = o("WAWebHybridRegGating").isHybridRegEnabled();
		return (I == null ? void 0 : I.status) === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.SENT ? u.jsx(r("WAWebSmsRegistrationConfirmation.react"), {
			selectedCountryId: y,
			phoneNumberWithoutCountryCode: f,
			onBack: function() {
				g(""), T(null);
			},
			onContinue: i,
			onRetry: W,
			providerNumber: I == null ? void 0 : I.provider_number,
			theme: q ? "wds" : void 0
		}) : u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 24,
			className: q ? void 0 : "light",
			xstyle: q ? void 0 : o("WDSThemes").WDSLightTheme,
			ref: w,
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
							phoneNumberWithoutCountryCode: f,
							selectedCountryId: y,
							onChangePhoneNumber: x,
							onChangeSelectedCountry: C,
							showCountrySelect: o("WAWebHybridRegGating").shouldShowCountrySelector(),
							surface: "link-device-phone-number",
							onSubmit: function() {
								W();
							},
							error: I == null ? void 0 : I.error_reason,
							theme: o("WAWebHybridRegGating").isHybridRegEnabled() ? "wds" : "default"
						}), u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
							text: r("WAWebFbtCommon")("Continue"),
							onClick: W,
							animate: !1,
							disabled: N,
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
						onClick: async function() {
							P(), l(null);
						},
						showArrow: o("WAWebHybridRegGating").isHybridRegEnabled() ? !1 : void 0,
						showUnderline: o("WAWebHybridRegGating").isHybridRegEnabled() ? !1 : void 0
					}) }) })]
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
