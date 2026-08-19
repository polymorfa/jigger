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
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = "0", _ = .01 * o("WAWebOrderDetailMath").DEFAULT_OFFSET, f = 5e3 * o("WAWebOrderDetailMath").DEFAULT_OFFSET, g = "BRL";
	function h(e) {
		var t = e.chat, a = e.headerButton, i = e.onEditCredential, l = e.pixData, c = e.previousScreenName, h = e.referral, y = "pix_payment_request", C = m(!0), b = C[0], v = C[1], S = m(p), R = S[0], L = S[1], E = function(t, n) {
			L(t.trim()), v(n);
		};
		return d(function() {
			o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.VIEW_PIX_PAYMENT_REQUEST, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW, c, h, y, t, l);
		}, [
			t,
			l,
			l.key_type,
			c,
			h
		]), u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "send-pix-payment-request"
			},
			title: u.jsx(r("WAWebSendPixPaymentRequestModalHeader.react"), { headerButton: a }),
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onOK: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				yield o("WAWebBizSendOrderAction").sendPixPaymentRequestMessage(t, l, o("WAWebCurrencyUtils").valueFromString(g, R), o("WAWebOrderDetailMath").DEFAULT_OFFSET), o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_PAYMENT_REQUEST_SEND_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.ENTER, c, h, y, t, l, {
					amount: R,
					currency: g
				}), o("WAWebPaymentsPixBannerUtils").shouldDismissTryItPixKeyPromo(), o("WAWebModalManager").closeModalManager();
			}),
			okDisabled: b,
			onCancel: o("WAWebModalManager").closeModalManager,
			type: o("WAWebModal.react").ModalTheme.PaymentsFlow,
			children: [
				u.jsx(r("WAWebSendPixPaymentRequestCustomerProfileRow.react"), { chat: t }),
				u.jsx(r("WAWebSendPixPaymentRequestPixCredentialsRow.react"), {
					onEditCredential: i,
					pixData: l
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
					onValueChange: E,
					referral: h,
					pixData: l,
					previousScreenName: c,
					screen: y
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
