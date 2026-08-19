__d("useWAWebPhoneNumberInput", [
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useState;
	function u() {
		var e = o("react-compiler-runtime").c(7), t = s(""), n = t[0], r = t[1], a = s(""), i = a[0], l = a[1], u;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var c, d = (c = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getMaxValidMobileNumberLength("US")) != null ? c : 10;
			u = function(t) {
				var e = t.replaceAll(/[^\d]/g, "");
				if (e.length <= d) {
					var n;
					r(e);
					var a = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
						countryCodeIso: "US",
						phoneNumberWithoutCountryCode: t
					});
					l((n = a == null ? void 0 : a.formattedInputValue) != null ? n : "");
				}
			}, e[0] = u;
		} else u = e[0];
		var m = u, p;
		e[1] !== n ? (p = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(1, n), e[1] = n, e[2] = p) : p = e[2];
		var _ = !p, f;
		return e[3] !== i || e[4] !== n || e[5] !== _ ? (f = {
			phoneNumber: n,
			formattedValue: i,
			disableSubmit: _,
			handleChange: m
		}, e[3] = i, e[4] = n, e[5] = _, e[6] = f) : f = e[6], f;
	}
	l.default = u;
}), 98);
