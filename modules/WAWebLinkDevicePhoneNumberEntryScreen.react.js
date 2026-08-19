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
	"react-compiler-runtime",
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
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = d.jsx(r("WAWebFlexItem.react"), { xstyle: y.spacer }), e[0] = t) : t = e[0], t;
	}
	function v() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [
			y.error,
			y.marginBottom8,
			y.paddingVert12,
			y.paddingHoriz16
		], e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = d.jsx(o("WAWebFlex.react").FlexRow, {
			alignSelf: "center",
			xstyle: t,
			align: "center",
			justify: "center",
			children: d.jsx(r("WAWebFlexItem.react"), { children: d.jsx("span", {
				id: h,
				children: s._(
					/*BTDS*/
					""
				)
			}) })
		}), e[1] = n) : n = e[1], n;
	}
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
		var n = o("react-compiler-runtime").c(34), a = t.actionButtonText, i = t.isInsideModal, l = t.isLinkingPageLoading, s = t.onChangePhoneNumber, c = t.onChangeSelectedCountry, m = t.onFailInteraction, p = t.onStopInteraction, f = t.onSubmit, g = t.phoneNumberWithoutCountryCode, h = t.selectedCountryId, C = t.shouldDisplayError, S = t.surface, R = i === void 0 ? !1 : i, L = l === void 0 ? !1 : l, E = S === void 0 ? "default" : S, k;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (k = { filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION }, n[0] = k) : k = n[0];
		var I = o("useWAWebCountries").useCountries(k), T = I.error, D = I.value, x;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (x = [], n[1] = x) : x = n[1];
		var $ = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), x), P, N;
		if (n[2] !== D || n[3] !== L || n[4] !== m || n[5] !== p || n[6] !== $.error || n[7] !== $.loading ? (P = function() {
			$.error && m ? m($.error) : p != null && !$.loading && !$.error && L !== !0 && D != null && p();
		}, N = [
			D,
			L,
			m,
			p,
			$.error,
			$.loading
		], n[2] = D, n[3] = L, n[4] = m, n[5] = p, n[6] = $.error, n[7] = $.loading, n[8] = P, n[9] = N) : (P = n[8], N = n[9]), _(P, N), $.loading || $.error || L === !0 || D == null) {
			$.error ? o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[AltDeviceLink] PhoneNumEntry emoji load failed"]))).catching($.error).sendLogs("alt-device-linking load error", { sampling: .01 }) : T && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[AltDeviceLink] PhoneNumEntry countries load failed"]))).catching(T).sendLogs("alt-device-linking load error", { sampling: .01 });
			var M;
			n[10] !== R ? (M = {
				0: "x1ym45yv",
				1: "x1fb2l0r"
			}[!!R << 0], n[10] = R, n[11] = M) : M = n[11];
			var w;
			n[12] === Symbol.for("react.memo_cache_sentinel") ? (w = d.jsxs(r("WAWebFlexItem.react"), { children: [d.jsx(r("CometHeroHoldTrigger.react"), {
				description: "WAWebLinkDevicePhoneNumberEntryScreen",
				hold: !0
			}), d.jsx(o("WAWebSpinner.react").Spinner, {})] }), n[12] = w) : w = n[12];
			var A;
			return n[13] !== M ? (A = d.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "around",
				className: M,
				children: w
			}), n[13] = M, n[14] = A) : A = n[14], A;
		}
		var F = E === "link-device-phone-number" && C, O = E === "link-device-phone-number" ? o("WAWebHybridRegGating").shouldFollowAppTheme() : o("WAWebHybridRegGating").isHybridRegEnabled(), B = O ? "wds" : void 0, W;
		n[15] !== D || n[16] !== s || n[17] !== c || n[18] !== f || n[19] !== g || n[20] !== h || n[21] !== C || n[22] !== E || n[23] !== B ? (W = d.jsx(r("WAWebCountryPhoneNumberInput.react"), {
			countries: D,
			shouldDisplayError: C,
			phoneNumberWithoutCountryCode: g,
			selectedCountryId: h,
			onChangePhoneNumber: s,
			onChangeSelectedCountry: c,
			onSubmit: f,
			surface: E,
			theme: B
		}), n[15] = D, n[16] = s, n[17] = c, n[18] = f, n[19] = g, n[20] = h, n[21] = C, n[22] = E, n[23] = B, n[24] = W) : W = n[24];
		var q;
		n[25] !== F ? (q = F ? d.jsx(v, {}) : d.jsx(b, {}), n[25] = F, n[26] = q) : q = n[26];
		var U;
		n[27] !== a || n[28] !== f ? (U = a != null && d.jsx(r("WAWebFlexItem.react"), {
			xstyle: y.marginBottom24,
			align: "center",
			children: d.jsx(o("WAWebButton.react").Button, {
				type: "primary",
				onClick: f,
				testid: "link-device-phone-number-entry-next-button",
				children: a
			})
		}), n[27] = a, n[28] = f, n[29] = U) : U = n[29];
		var V;
		return n[30] !== U || n[31] !== W || n[32] !== q ? (V = d.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: y.phoneNumberSectionWrapper,
			children: [
				W,
				q,
				U
			]
		}), n[30] = U, n[31] = W, n[32] = q, n[33] = V) : V = n[33], V;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(2), n = e.shouldShowUpdatePrimaryErrorBanner;
		if (n === !0) {
			var a;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
				/*BTDS*/
				""
			), t[0] = a) : a = t[0];
			var i = a, l;
			if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
				var u = s._(
					/*BTDS*/
					""
				);
				l = d.jsx(r("WAWebLoggedOutBanner.react"), {
					header: i,
					text: u,
					category: "warning"
				}), t[1] = l;
			} else l = t[1];
			return l;
		}
		return null;
	}
	l.LinkWithPhoneNumberEntryScreen = S, l.PhoneNumberSection = R;
}), 226);
