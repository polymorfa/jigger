__d("WAWebSendPixPaymentRequestHybridModal.react", [
	"fbt",
	"WAWebBizSendOrderAction",
	"WAWebChatGetters",
	"WAWebConfirmPopup.react",
	"WAWebConsumerPaymentsHomeLogger",
	"WAWebConsumerPixStrings",
	"WAWebCurrencyUtils",
	"WAWebFbtCommon",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebOrderDetailMath",
	"WAWebPaymentsPixBannerUtils",
	"WAWebPixUserInfo.react",
	"WAWebPixWamLogger",
	"WAWebSendPixPaymentRequestAmountInputHybridRow.react",
	"WAWebWamEnumPaymentActionTargets",
	"WAWebWamEnumPaymentActionTypes",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = "", f = .01 * o("WAWebOrderDetailMath").DEFAULT_OFFSET, g = 5e3 * o("WAWebOrderDetailMath").DEFAULT_OFFSET, h = "BRL";
	function y(e) {
		var t = e.chat, n = e.headerButton, a = e.onEditCredential, i = e.onSent, l = e.orderReferral, c = l === void 0 ? null : l, y = e.pixData, C = e.previousScreenName, b = e.referral, v = "pix_payment_request", S = !o("WAWebMobilePlatforms").isSMB(), R = o("WAWebConsumerPaymentsHomeLogger").getChatTypeForLogging(t.id), L = o("WAWebChatGetters").getIsGroup(t), E = p(_), k = E[0], I = E[1], T = m(!1);
		d(function() {
			S && !T.current && (T.current = !0, o("WAWebConsumerPaymentsHomeLogger").logSendPixKeyView(R, C));
		}, [
			R,
			S,
			C
		]), d(function() {
			o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.VIEW_PIX_PAYMENT_REQUEST, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW, C, b, v, t, y);
		}, [
			t,
			y,
			y.key_type,
			C,
			b
		]);
		var D = function(t) {
			I(t);
		}, x = function() {
			if (k === "" || !o("WAWebCurrencyUtils").validateAmountString(h, k)) return !1;
			var e = o("WAWebCurrencyUtils").valueFromString(h, k);
			return e >= f && e <= g;
		}, $ = async function() {
			S && o("WAWebConsumerPaymentsHomeLogger").logSendPixKeySendClick(R);
			var e = !L && x();
			try {
				e ? (await o("WAWebBizSendOrderAction").sendPixPaymentRequestMessage(t, y, o("WAWebCurrencyUtils").valueFromString(h, k), o("WAWebOrderDetailMath").DEFAULT_OFFSET), o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_PAYMENT_REQUEST_SEND_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.ENTER, C, b, v, t, y, {
					amount: k,
					currency: h
				}), o("WAWebPaymentsPixBannerUtils").shouldDismissTryItPixKeyPromo()) : (await o("WAWebBizSendOrderAction").sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner(t, c), o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_PAYMENT_REQUEST_SEND_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK, C, b, v, t, y));
			} catch (e) {
				o("WAWebModalManager").ModalManager.close();
				return;
			}
			o("WAWebModalManager").ModalManager.close(), i == null || i(e);
		}, P;
		return L ? P = o("WAWebConsumerPixStrings").getConsumerSendPixGroupDescription() : S ? P = o("WAWebConsumerPixStrings").getConsumerSendPixDescription(t.title()) : P = o("WAWebConsumerPixStrings").getSmbSendPixDescription(t.formattedTitle), u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "send-pix-payment-hybrid"
			},
			title: L ? o("WAWebConsumerPixStrings").getConsumerSendPixGroupTitle() : o("WAWebConsumerPixStrings").getSendPixRequestPaymentTitle(),
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onOK: $,
			okDisabled: !1,
			onCancel: function() {
				S && o("WAWebConsumerPaymentsHomeLogger").logSendPixKeyCancelClick(R), o("WAWebModalManager").closeModalManager();
			},
			children: u.jsxs("div", {
				className: "x193iq5w xh8yej3",
				children: [
					u.jsx("div", {
						className: "xvhpnrs xdqhqc9",
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "accentEmphasized",
							children: P
						})
					}),
					u.jsx(r("WAWebPixUserInfo.react"), {
						onEdit: a,
						pixData: y
					}),
					L ? null : u.jsx("div", {
						className: "x1nmyh1g xh8yej3",
						children: u.jsx(r("WAWebSendPixPaymentRequestAmountInputHybridRow.react"), {
							currency: h,
							defaultAmount: _,
							maxAmount: g,
							minAmount: f,
							onValueChange: D
						})
					})
				]
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.WAWebSendPixPaymentRequestHybridModal = y;
}), 226);
