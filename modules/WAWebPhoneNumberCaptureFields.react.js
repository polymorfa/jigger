__d("WAWebPhoneNumberCaptureFields.react", [
	"CometHeroHoldTrigger.react",
	"WAWebCountriesUtils",
	"WAWebCountryPhoneNumberInput.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebLinkDeviceFlagEmojiSetup",
	"WAWebSpinner.react",
	"WDSBanner.react",
	"WDSIconIcWarning.react",
	"gkx",
	"react",
	"useWAWebAsync",
	"useWAWebCountries"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { error: {
		backgroundColor: "x1o4ak67",
		color: "xvwrcih",
		borderStartStartRadius: "xyi3aci",
		borderStartEndRadius: "xwf5gio",
		borderEndEndRadius: "x1p453bz",
		borderEndStartRadius: "x1suzm8a",
		marginBottom: "x1e56ztr",
		paddingTop: "x1xrf6ya",
		paddingInlineEnd: "xvtqlqk",
		paddingBottom: "xscbp6u",
		paddingInlineStart: "xdx6fka",
		$$css: !0
	} };
	function c(e) {
		var t = e.error, n = e.onBlur, a = e.onChangePhoneNumber, i = e.onChangeSelectedCountry, l = e.onFocus, c = e.onSubmit, d = e.phoneNumberWithoutCountryCode, m = e.selectedCountryId, p = e.showCountrySelect, _ = p === void 0 ? !0 : p, f = e.surface, g = f === void 0 ? "link-device-phone-number" : f, h = e.theme, y = h === void 0 ? "default" : h, C = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), []), b = o("useWAWebCountries").useCountries({ filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION }), v = b.error, S = b.value;
		if (S == null || v != null || C.loading || C.error) return s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			children: [s.jsx(r("CometHeroHoldTrigger.react"), {
				description: "WAWebPhoneNumberCaptureFields",
				hold: !0
			}), s.jsx(o("WAWebSpinner.react").Spinner, {})]
		});
		var R;
		return r("gkx")("26259") ? R = S : R = S.filter(function(e) {
			var t = e[0], n = e[1];
			return t === "US";
		}), s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebCountryPhoneNumberInput.react"), {
			countries: R,
			shouldDisplayError: !1,
			phoneNumberWithoutCountryCode: d,
			selectedCountryId: m,
			onChangePhoneNumber: a,
			onChangeSelectedCountry: i,
			onFocus: l,
			onBlur: n,
			showCountrySelect: _,
			surface: g,
			onSubmit: function() {
				c != null && c();
			},
			error: t,
			theme: y
		}), t != null && (y === "wds" ? s.jsx(r("WDSBanner.react"), {
			type: "warning",
			icon: r("WDSIconIcWarning.react"),
			body: t != null ? t : r("WAWebFbtCommon")("Try Again")
		}) : s.jsx(o("WAWebFlex.react").FlexRow, {
			alignSelf: "center",
			xstyle: u.error,
			children: t != null ? t : r("WAWebFbtCommon")("Try Again")
		}))] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
