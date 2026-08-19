__d("WAWebConsumerAddPixKeyFlow.react", [
	"WAWebConsumerPaymentsHomeLogger",
	"WAWebModalManager",
	"WAWebPaymentOnboardingFlowLoadable",
	"WAWebUserPrefsCustomPaymentMethods",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		o("WAWebConsumerPaymentsHomeLogger").logAddOrEditPixView(o("WAWebUserPrefsCustomPaymentMethods").getPIX() != null), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebPaymentOnboardingFlowLoadable").PaymentOnboardingFlowLoadable, {
			onSuccess: e,
			previousScreen: "payment_home",
			referral: "payment_home.nux_banner"
		}), { transition: "modal-flow" });
	}
	l.openConsumerAddPixKeyModal = u;
}), 98);
