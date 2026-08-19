__d("WAWebAttachMenuPopupUprPaymentRequest.react", [
	"fbt",
	"WAWebModalManager",
	"WAWebSendUprPaymentRequestModalLoadable",
	"WDSIconIcAccountBalance.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(7), n = e.chat, a = e.dismissMenu, i = e.methods, l;
		t[0] !== n || t[1] !== a || t[2] !== i ? (l = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSendUprPaymentRequestModalLoadable").WAWebSendUprPaymentRequestModalLoadable, {
				chat: n,
				methods: i
			})), a();
		}, t[0] = n, t[1] = a, t[2] = i, t[3] = l) : l = t[3];
		var c = l, d;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[4] = d) : d = t[4];
		var m;
		return t[5] !== c ? (m = u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcAccountBalance.react"),
			onPress: c,
			testid: "mi-attach-upr-payment-request",
			title: d
		}), t[5] = c, t[6] = m) : m = t[6], m;
	}
	l.default = c;
}), 226);
