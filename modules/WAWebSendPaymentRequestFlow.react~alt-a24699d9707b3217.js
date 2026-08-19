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
		var t = e.chat, n = e.previousScreen, a = e.referral, i = o("WAWebUserPrefsCustomPaymentMethods").getPIX(), l = u(i != null), m = l[0], p = o("useWAWebFlow").useFlow(m ? c.SendPaymentRequest : c.AddEditCredential), _ = p[0], f = p[1], g = m ? {
			type: "cancel",
			onClick: function() {
				return f.end();
			}
		} : {
			type: "cancel",
			onClick: function() {
				return f.pop();
			}
		};
		if (f.step == null) return null;
		var h;
		switch (f.step) {
			case c.AddEditCredential: {
				h = s.jsx(r("WAWebBizPaymentsBrazilAddPixModalRefreshed.react"), {
					chat: t,
					onClose: function() {
						f.end();
					},
					pixData: i,
					previousScreen: n,
					referral: a,
					onSuccess: function() {
						return f.push(c.SendPaymentRequest);
					}
				});
				break;
			}
			case c.EditCredentialFromPaymentRequest: {
				h = s.jsx(r("WAWebBizPaymentsBrazilAddPixModalRefreshed.react"), {
					chat: t,
					onClose: function() {
						f.pop();
					},
					pixData: i,
					previousScreen: n,
					referral: a,
					onSuccess: function() {
						return f.pop();
					}
				});
				break;
			}
			case c.SendPaymentRequest: {
				var y = o("WAWebPixPaymentRequestFeature").getPixPaymentRequestVariant();
				h = d({
					chat: t,
					headerButton: g,
					onEditCredential: function() {
						return f.push(c.EditCredentialFromPaymentRequest);
					},
					pixData: r("nullthrows")(i),
					previousScreen: n,
					referral: a,
					variant: y
				});
				break;
			}
		}
		return s.jsx(_, {
			flow: f,
			children: h
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
