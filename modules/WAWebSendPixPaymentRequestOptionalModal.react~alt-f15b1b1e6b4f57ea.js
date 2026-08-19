__d("WAWebSendPixPaymentRequestOptionalModal.react", [
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
	"WAWebSendPixPaymentRequestAmountInputRowOptional.react",
	"WAWebSendPixPaymentRequestCustomerProfileRow.react",
	"WAWebSendPixPaymentRequestModalHeader.react",
	"WAWebSendPixPaymentRequestPixCredentialsRow.react",
	"WAWebWamEnumPaymentActionTargets",
	"WAWebWamEnumPaymentActionTypes",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = "", _ = .01 * o("WAWebOrderDetailMath").DEFAULT_OFFSET, f = 5e3 * o("WAWebOrderDetailMath").DEFAULT_OFFSET, g = "BRL";
	function h(e) {
		var t = e.chat, n = e.headerButton, a = e.onEditCredential, i = e.pixData, l = e.previousScreenName, c = e.referral, h = "pix_payment_request", y = m(p), C = y[0], b = y[1], v = function(t) {
			b(t.trim());
		};
		d(function() {
			o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.VIEW_PIX_PAYMENT_REQUEST, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW, l, c, h, t, i);
		}, [
			t,
			i,
			i.key_type,
			l,
			c
		]);
		var S = function() {
			if (C === "" || !o("WAWebCurrencyUtils").validateAmountString(g, C)) return !1;
			var e = o("WAWebCurrencyUtils").valueFromString(g, C);
			return e >= _ && e <= f;
		}, R = async function() {
			S() ? (await o("WAWebBizSendOrderAction").sendPixPaymentRequestMessage(t, i, o("WAWebCurrencyUtils").valueFromString(g, C), o("WAWebOrderDetailMath").DEFAULT_OFFSET), o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_PAYMENT_REQUEST_SEND_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.ENTER, l, c, h, t, i, {
				amount: C,
				currency: g
			}), o("WAWebPaymentsPixBannerUtils").shouldDismissTryItPixKeyPromo()) : (o("WAWebBizSendOrderAction").sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner(t, null), o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_PAYMENT_REQUEST_SEND_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK, l, c, h, t, i)), o("WAWebModalManager").ModalManager.close();
		};
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "pix-payment-optional"
			},
			title: u.jsx(r("WAWebSendPixPaymentRequestModalHeader.react"), { headerButton: n }),
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onOK: R,
			okDisabled: !1,
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
				u.jsx(r("WAWebSendPixPaymentRequestAmountInputRowOptional.react"), {
					currency: g,
					defaultAmount: p,
					maxAmount: f,
					minAmount: _,
					onValueChange: v
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.WAWebSendPixPaymentRequestOptionalModal = h;
}), 226);
