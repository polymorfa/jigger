__d("useWAWebRegPromo", [
	"WAWebAppRootInteractionContext.react",
	"WAWebInteractionTracePolicy",
	"WAWebPhoneNumberCaptureValidation",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useState, d = "US", m = 10;
	function p(e) {
		var t = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN_GET_STARTED
		}), a = t.startInteraction, i = c(""), l = i[0], s = i[1], p = d, _ = u(function(e, t) {
			s(t.substr(0, m));
		}, []), f = e.loading || e.blockRetry || !r("WAWebPhoneNumberCaptureValidation")(p, l), g = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				f || (a(), yield e.sendSms(p, l));
			});
			return function() {
				return t.apply(this, arguments);
			};
		})();
		return {
			handleChangePhoneNumber: _,
			handleSubmit: g,
			isDisabled: f,
			phoneNumberWithoutCountryCode: l,
			selectedCountryId: p
		};
	}
	l.default = p;
}), 98);
