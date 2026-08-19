__d("WAWebLinkDevicePhoneNumberEntryScreen.react", [
	"fbt",
	"CometHeroHoldTrigger.react",
	"WAIsoToCc",
	"WALogger",
	"WAWebAlternateDeviceLinkingLink.react",
	"WAWebAppRootInteractionContext.react",
	"WAWebButton.react",
	"WAWebCountriesUtils",
	"WAWebCountryPhoneNumberInput.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebHybridRegGating",
	"WAWebInteractionTracePolicy",
	"WAWebLinkDeviceCodeViewCodeType",
	"WAWebLinkDeviceCommonComponents.react",
	"WAWebLinkDeviceFlagEmojiSetup",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebLoggedOutBanner.react",
	"WAWebSpinner.react",
	"WAWebThemeContext",
	"WAWebUserPrefsGeneral",
	"WDSThemes",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebAsync",
	"useWAWebCountries"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState, h = "link-device-phone-number-entry-screen-error", y = {
		error: {
			backgroundColor: "x1o4ak67",
			color: "xvwrcih",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		phoneNumberSectionWrapper: {
			width: "x1m258z3",
			$$css: !0
		},
		spacer: {
			height: "xsdox4t",
			$$css: !0
		},
		marginBottom8: {
			marginBottom: "xefnzgg",
			$$css: !0
		},
		marginBottom4: {
			marginBottom: "x4tpdpg",
			$$css: !0
		},
		marginBottom24: {
			marginBottom: "x14mdic9",
			$$css: !0
		},
		paddingVert12: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		paddingHoriz16: {
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function C() {
		return o("WAWebUserPrefsGeneral").getSystemThemeMode() ? o("WDSThemes").WDSSystemTheme : o("WAWebThemeContext").getTheme() === "dark" ? o("WDSThemes").WDSDarkTheme : o("WDSThemes").WDSLightTheme;
	}
	function b() {
		return d.jsx(r("WAWebFlexItem.react"), { xstyle: y.spacer });
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v() {
		return d.jsx(o("WAWebFlex.react").FlexRow, {
			alignSelf: "center",
			xstyle: [
				y.error,
				y.marginBottom8,
				y.paddingVert12,
				y.paddingHoriz16
			],
			align: "center",
			justify: "center",
			children: d.jsx(r("WAWebFlexItem.react"), { children: d.jsx("span", {
				id: h,
				children: s._(
					/*BTDS*/
					""
				)
			}) })
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.initialCountryId, a = e.initialPhoneNumber, i = e.isLinkingPageLoading, l = e.onClickLinkWithQr, u = e.onSubmitPhoneNumber, c = e.showUpdatePrimaryAppBanner, m = g(function() {
			if (a != null) return o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getCountryCodeIso(a);
			var e = t == null ? null : t.toUpperCase();
			return e != null && r("WAIsoToCc")[e] != null ? e : "US";
		}), _ = m[0], h = m[1], b = g(function() {
			return a == null ? "" : o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue(a).phoneNumberWithoutCountryCode;
		}), v = b[0], S = b[1], E = f(null), k = g(!1), I = k[0], T = k[1], D = p(function() {
			if (_ != null && o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(r("WAIsoToCc")[_], v, "pn_linking")) {
				var e = "" + r("WAIsoToCc")[_] + v;
				u(e);
			} else {
				var t;
				(t = E.current) == null || t.focus(), T(!0);
			}
		}, [
			u,
			v,
			_
		]), x = p(function(e, t) {
			T(!1), h(e), S(t);
		}, []), $ = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !0,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN
		}), P = $.failInteraction, N = $.startInteraction, M = $.stopInteraction, w = p(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			N(), yield l();
		}), [l, N]), A = s._(
			/*BTDS*/
			""
		), F = s._(
			/*BTDS*/
			""
		), O = o("WAWebHybridRegGating").shouldFollowAppTheme();
		return d.jsxs(d.Fragment, { children: [d.jsx(L, { shouldShowUpdatePrimaryErrorBanner: c }), d.jsxs(o("WAWebFlex.react").FlexColumn, {
			testid: "link-device-phone-number-entry-screen",
			className: O ? void 0 : "light",
			align: "center",
			xstyle: O ? C() : o("WDSThemes").WDSLightTheme,
			children: [
				d.jsx(r("WAWebFlexItem.react"), {
					xstyle: y.marginBottom4,
					children: d.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
						theme: O ? "wds" : void 0,
						value: A
					})
				}),
				d.jsx(r("WAWebFlexItem.react"), { children: d.jsx(o("WAWebLinkDeviceCommonComponents.react").Subtitle, { value: F }) }),
				d.jsx(R, {
					shouldDisplayError: I,
					phoneNumberWithoutCountryCode: v,
					selectedCountryId: _,
					onSubmit: D,
					onChangePhoneNumber: x,
					onChangeSelectedCountry: h,
					actionButtonText: r("WAWebFbtCommon")("Next"),
					isLinkingPageLoading: i,
					surface: "link-device-phone-number",
					onFailInteraction: P,
					onStopInteraction: M
				}),
				d.jsx(r("WAWebFlexItem.react"), { children: d.jsx(r("WAWebAlternateDeviceLinkingLink.react"), {
					codeType: o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE,
					onClick: w
				}) })
			]
		})] });
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(t) {
		var n = t.actionButtonText, a = t.isInsideModal, i = a === void 0 ? !1 : a, l = t.isLinkingPageLoading, s = l === void 0 ? !1 : l, c = t.onChangePhoneNumber, m = t.onChangeSelectedCountry, p = t.onFailInteraction, f = t.onStopInteraction, g = t.onSubmit, h = t.phoneNumberWithoutCountryCode, C = t.selectedCountryId, S = t.shouldDisplayError, R = t.surface, L = R === void 0 ? "default" : R, E = o("useWAWebCountries").useCountries({ filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION }), k = E.error, I = E.value, T = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), []);
		if (_(function() {
			T.error && p ? p(T.error) : f != null && !T.loading && !T.error && s !== !0 && I != null && f();
		}, [
			I,
			s,
			p,
			f,
			T.error,
			T.loading
		]), T.loading || T.error || s === !0 || I == null) return T.error ? o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[AltDeviceLink] PhoneNumEntry emoji load failed"]))).catching(T.error).sendLogs("alt-device-linking load error", { sampling: .01 }) : k && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[AltDeviceLink] PhoneNumEntry countries load failed"]))).catching(k).sendLogs("alt-device-linking load error", { sampling: .01 }), d.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "around",
			className: {
				0: "x1ym45yv",
				1: "x1fb2l0r"
			}[!!i << 0],
			children: d.jsxs(r("WAWebFlexItem.react"), { children: [d.jsx(r("CometHeroHoldTrigger.react"), {
				description: "WAWebLinkDevicePhoneNumberEntryScreen",
				hold: !0
			}), d.jsx(o("WAWebSpinner.react").Spinner, {})] })
		});
		var D = L === "link-device-phone-number" && S, x = L === "link-device-phone-number" ? o("WAWebHybridRegGating").shouldFollowAppTheme() : o("WAWebHybridRegGating").isHybridRegEnabled();
		return d.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: y.phoneNumberSectionWrapper,
			children: [
				d.jsx(r("WAWebCountryPhoneNumberInput.react"), {
					countries: I,
					shouldDisplayError: S,
					phoneNumberWithoutCountryCode: h,
					selectedCountryId: C,
					onChangePhoneNumber: c,
					onChangeSelectedCountry: m,
					onSubmit: g,
					surface: L,
					theme: x ? "wds" : void 0
				}),
				D ? d.jsx(v, {}) : d.jsx(b, {}),
				n != null && d.jsx(r("WAWebFlexItem.react"), {
					xstyle: y.marginBottom24,
					align: "center",
					children: d.jsx(o("WAWebButton.react").Button, {
						type: "primary",
						onClick: g,
						testid: "link-device-phone-number-entry-next-button",
						children: n
					})
				})
			]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.shouldShowUpdatePrimaryErrorBanner;
		if (t === !0) {
			var n = s._(
				/*BTDS*/
				""
			), o = s._(
				/*BTDS*/
				""
			);
			return d.jsx(r("WAWebLoggedOutBanner.react"), {
				header: n,
				text: o,
				category: "warning"
			});
		}
		return null;
	}
	L.displayName = L.name + " [from " + i.id + "]", l.LinkWithPhoneNumberEntryScreen = S, l.PhoneNumberSection = R;
}), 226);
