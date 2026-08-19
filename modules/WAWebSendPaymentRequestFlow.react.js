__d("WAWebSendPaymentRequestFlow.react", [
	"$InternalEnum",
	"WAWebBizPaymentsBrazilAddPixModalRefreshed.react",
	"WAWebPixPaymentRequestFeature",
	"WAWebSendPixPaymentRequestHybridModal.react",
	"WAWebSendPixPaymentRequestModal.react",
	"WAWebSendPixPaymentRequestOptionalModal.react",
	"WAWebUserPrefsCustomPaymentMethods",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = n("$InternalEnum").Mirrored([
		"AddEditCredential",
		"EditCredentialFromPaymentRequest",
		"SendPaymentRequest"
	]);
	function d(e) {
		var t = e.chat, n = e.headerButton, a = e.onEditCredential, i = e.pixData, l = e.previousScreen, u = e.referral, c = e.variant;
		return c === o("WAWebPixPaymentRequestFeature").PixPaymentRequestVariant.PAYMENT_REQUEST_STANDARD_WITH_MANDATORY_AMOUNT || c === o("WAWebPixPaymentRequestFeature").PixPaymentRequestVariant.PAYMENT_REQUEST_STANDARD_WITH_EDUCATION ? s.jsx(r("WAWebSendPixPaymentRequestModal.react"), {
			chat: t,
			headerButton: n,
			onEditCredential: a,
			pixData: i,
			previousScreenName: l,
			referral: u
		}) : c === o("WAWebPixPaymentRequestFeature").PixPaymentRequestVariant.PAYMENT_REQUEST_HYBRID_OPTIONAL_AMOUNT ? s.jsx(o("WAWebSendPixPaymentRequestHybridModal.react").WAWebSendPixPaymentRequestHybridModal, {
			chat: t,
			headerButton: n,
			onEditCredential: a,
			pixData: i,
			previousScreenName: l,
			referral: u
		}) : c === o("WAWebPixPaymentRequestFeature").PixPaymentRequestVariant.PAYMENT_REQUEST_STANDARD_WITH_OPTIONAL_AMOUNT ? s.jsx(o("WAWebSendPixPaymentRequestOptionalModal.react").WAWebSendPixPaymentRequestOptionalModal, {
			chat: t,
			headerButton: n,
			onEditCredential: a,
			pixData: i,
			previousScreenName: l,
			referral: u
		}) : null;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(14), n = e.chat, a = e.previousScreen, i = e.referral, l = o("WAWebUserPrefsCustomPaymentMethods").getPIX(), m = u(l != null), p = m[0], _ = o("useWAWebFlow").useFlow(p ? c.SendPaymentRequest : c.AddEditCredential), f = _[0], g = _[1], h = p ? {
			type: "cancel",
			onClick: function() {
				return g.end();
			}
		} : {
			type: "cancel",
			onClick: function() {
				return g.pop();
			}
		};
		if (g.step == null) return null;
		var y;
		e: switch (g.step) {
			case c.AddEditCredential: {
				var C;
				t[0] !== g ? (C = function() {
					g.end();
				}, t[0] = g, t[1] = C) : C = t[1];
				var b;
				t[2] !== g ? (b = function() {
					return g.push(c.SendPaymentRequest);
				}, t[2] = g, t[3] = b) : b = t[3], y = s.jsx(r("WAWebBizPaymentsBrazilAddPixModalRefreshed.react"), {
					chat: n,
					onClose: C,
					pixData: l,
					previousScreen: a,
					referral: i,
					onSuccess: b
				});
				break e;
			}
			case c.EditCredentialFromPaymentRequest: {
				var v;
				t[4] !== g ? (v = function() {
					g.pop();
				}, t[4] = g, t[5] = v) : v = t[5];
				var S;
				t[6] !== g ? (S = function() {
					return g.pop();
				}, t[6] = g, t[7] = S) : S = t[7], y = s.jsx(r("WAWebBizPaymentsBrazilAddPixModalRefreshed.react"), {
					chat: n,
					onClose: v,
					pixData: l,
					previousScreen: a,
					referral: i,
					onSuccess: S
				});
				break e;
			}
			case c.SendPaymentRequest: {
				var R = o("WAWebPixPaymentRequestFeature").getPixPaymentRequestVariant(), L;
				t[8] !== g ? (L = function() {
					return g.push(c.EditCredentialFromPaymentRequest);
				}, t[8] = g, t[9] = L) : L = t[9], y = d({
					chat: n,
					headerButton: h,
					onEditCredential: L,
					pixData: r("nullthrows")(l),
					previousScreen: a,
					referral: i,
					variant: R
				});
			}
		}
		var E;
		return t[10] !== f || t[11] !== y || t[12] !== g ? (E = s.jsx(f, {
			flow: g,
			children: y
		}), t[10] = f, t[11] = y, t[12] = g, t[13] = E) : E = t[13], E;
	}
	l.default = m;
}), 98);
