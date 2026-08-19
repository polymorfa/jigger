__d("WAWebSendPixPaymentRequestModal.react", [
	"fbt",
	"WAWebBizSendOrderAction",
	"WAWebConfirmPopup.react",
	"WAWebCurrencyUtils",
	"WAWebFbtCommon",
	"WAWebGroupInfoSeparator.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebOrderDetailMath",
	"WAWebPaymentsPixBannerUtils",
	"WAWebPixWamLogger",
	"WAWebSendPixPaymentRequestAmountInputRow.react",
	"WAWebSendPixPaymentRequestCustomerProfileRow.react",
	"WAWebSendPixPaymentRequestModalHeader.react",
	"WAWebSendPixPaymentRequestPixCredentialsRow.react",
	"WAWebWamEnumPaymentActionTargets",
	"WAWebWamEnumPaymentActionTypes",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = "0", _ = .01 * o("WAWebOrderDetailMath").DEFAULT_OFFSET, f = 5e3 * o("WAWebOrderDetailMath").DEFAULT_OFFSET, g = "BRL";
	function h(e) {
		var t = e.chat, n = e.headerButton, a = e.onEditCredential, i = e.pixData, l = e.previousScreenName, c = e.referral, h = "pix_payment_request", y = m(!0), C = y[0], b = y[1], v = m(p), S = v[0], R = v[1], L = function(t, n) {
			R(t.trim()), b(n);
		};
		return d(function() {
			o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.VIEW_PIX_PAYMENT_REQUEST, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW, l, c, h, t, i);
		}, [
			t,
			i,
			i.key_type,
			l,
			c
		]), u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "send-pix-payment-request"
			},
			title: u.jsx(r("WAWebSendPixPaymentRequestModalHeader.react"), { headerButton: n }),
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onOK: async function() {
				await o("WAWebBizSendOrderAction").sendPixPaymentRequestMessage(t, i, o("WAWebCurrencyUtils").valueFromString(g, S), o("WAWebOrderDetailMath").DEFAULT_OFFSET), o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_PAYMENT_REQUEST_SEND_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.ENTER, l, c, h, t, i, {
					amount: S,
					currency: g
				}), o("WAWebPaymentsPixBannerUtils").shouldDismissTryItPixKeyPromo(), o("WAWebModalManager").closeModalManager();
			},
			okDisabled: C,
			onCancel: o("WAWebModalManager").closeModalManager,
			type: o("WAWebModal.react").ModalTheme.PaymentsFlow,
			children: [
				u.jsx(r("WAWebSendPixPaymentRequestCustomerProfileRow.react"), { chat: t }),
				u.jsx(r("WAWebSendPixPaymentRequestPixCredentialsRow.react"), {
					onEditCredential: a,
					pixData: i
				}),
				u.jsx(r("WAWebGroupInfoSeparator.react"), {
					animation: !1,
					padding: !1
				}),
				u.jsx(r("WAWebSendPixPaymentRequestAmountInputRow.react"), {
					chat: t,
					defaultAmount: p,
					maxAmount: f,
					minAmount: _,
					currency: g,
					onValueChange: L,
					referral: c,
					pixData: i,
					previousScreenName: l,
					screen: h
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
