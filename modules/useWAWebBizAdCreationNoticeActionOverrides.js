__d("useWAWebBizAdCreationNoticeActionOverrides", [
	"WAWebBizAdCreationSABRLearnMoreModal.react",
	"WAWebModalManager",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationMaybeOpenEmailOnboarding"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = o("react-compiler-runtime").c(2), n = r("useWAWebBizAdCreationMaybeOpenEmailOnboarding")(e), a;
		return t[0] !== n ? (a = {
			AdsLWIAdAccountWhatsAppOnboardingIncompleteValidationModule: function(t) {
				n(t);
			},
			AdsLWICTWASimilarAdvertiserBudgetRecommendationValidationModule: d
		}, t[0] = n, t[1] = a) : a = t[1], a;
	}
	function d() {
		o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebBizAdCreationSABRLearnMoreModal.react"), {}));
	}
	l.default = c;
}), 98);
