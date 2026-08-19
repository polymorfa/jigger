__d("WAWebAttachMenuPopupUprPaymentRequest.react", [
	"fbt",
	"WAWebModalManager",
	"WAWebSendUprPaymentRequestModalLoadable",
	"WDSIconIcAccountBalance.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = e.dismissMenu, a = e.methods, i = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSendUprPaymentRequestModalLoadable").WAWebSendUprPaymentRequestModalLoadable, {
				chat: t,
				methods: a
			})), n();
		};
		return u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcAccountBalance.react"),
			onPress: i,
			testid: "mi-attach-upr-payment-request",
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
