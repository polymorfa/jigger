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
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = "", f = .01 * o("WAWebOrderDetailMath").DEFAULT_OFFSET, g = 5e3 * o("WAWebOrderDetailMath").DEFAULT_OFFSET, h = "BRL";
	function y(e) {
		var t = e.chat, a = e.headerButton, i = e.onEditCredential, l = e.onSent, c = e.orderReferral, y = c === void 0 ? null : c, C = e.pixData, b = e.previousScreenName, v = e.referral, S = "pix_payment_request", R = !o("WAWebMobilePlatforms").isSMB(), L = o("WAWebConsumerPaymentsHomeLogger").getChatTypeForLogging(t.id), E = o("WAWebChatGetters").getIsGroup(t), k = p(_), I = k[0], T = k[1], D = m(!1);
		d(function() {
			R && !D.current && (D.current = !0, o("WAWebConsumerPaymentsHomeLogger").logSendPixKeyView(L, b));
		}, [
			L,
			R,
			b
		]), d(function() {
			o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.VIEW_PIX_PAYMENT_REQUEST, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW, b, v, S, t, C);
		}, [
			t,
			C,
			C.key_type,
			b,
			v
		]);
		var x = function(t) {
			T(t);
		}, $ = function() {
			if (I === "" || !o("WAWebCurrencyUtils").validateAmountString(h, I)) return !1;
			var e = o("WAWebCurrencyUtils").valueFromString(h, I);
			return e >= f && e <= g;
		}, P = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				R && o("WAWebConsumerPaymentsHomeLogger").logSendPixKeySendClick(L);
				var e = !E && $();
				try {
					e ? (yield o("WAWebBizSendOrderAction").sendPixPaymentRequestMessage(t, C, o("WAWebCurrencyUtils").valueFromString(h, I), o("WAWebOrderDetailMath").DEFAULT_OFFSET), o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_PAYMENT_REQUEST_SEND_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.ENTER, b, v, S, t, C, {
						amount: I,
						currency: h
					}), o("WAWebPaymentsPixBannerUtils").shouldDismissTryItPixKeyPromo()) : (yield o("WAWebBizSendOrderAction").sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner(t, y), o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_PAYMENT_REQUEST_SEND_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK, b, v, S, t, C));
				} catch (e) {
					o("WAWebModalManager").ModalManager.close();
					return;
				}
				o("WAWebModalManager").ModalManager.close(), l == null || l(e);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), N;
		return E ? N = o("WAWebConsumerPixStrings").getConsumerSendPixGroupDescription() : R ? N = o("WAWebConsumerPixStrings").getConsumerSendPixDescription(t.title()) : N = o("WAWebConsumerPixStrings").getSmbSendPixDescription(t.formattedTitle), u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "send-pix-payment-hybrid"
			},
			title: E ? o("WAWebConsumerPixStrings").getConsumerSendPixGroupTitle() : o("WAWebConsumerPixStrings").getSendPixRequestPaymentTitle(),
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onOK: P,
			okDisabled: !1,
			onCancel: function() {
				R && o("WAWebConsumerPaymentsHomeLogger").logSendPixKeyCancelClick(L), o("WAWebModalManager").closeModalManager();
			},
			children: u.jsxs("div", {
				className: "x193iq5w xh8yej3",
				children: [
					u.jsx("div", {
						className: "xvhpnrs xdqhqc9",
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "accentEmphasized",
							children: N
						})
					}),
					u.jsx(r("WAWebPixUserInfo.react"), {
						onEdit: i,
						pixData: C
					}),
					E ? null : u.jsx("div", {
						className: "x1nmyh1g xh8yej3",
						children: u.jsx(r("WAWebSendPixPaymentRequestAmountInputHybridRow.react"), {
							currency: h,
							defaultAmount: _,
							maxAmount: g,
							minAmount: f,
							onValueChange: x
						})
					})
				]
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.WAWebSendPixPaymentRequestHybridModal = y;
}), 226);
