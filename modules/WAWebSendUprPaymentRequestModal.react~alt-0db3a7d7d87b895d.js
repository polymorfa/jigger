__d("WAWebSendUprPaymentRequestModal.react", [
	"fbt",
	"WAWebBizSendOrderAction",
	"WAWebConfirmPopup.react",
	"WAWebCurrencyUtils",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebOrderDetailMath",
	"WAWebSendPixPaymentRequestAmountInputHybridRow.react",
	"WAWebUprPaymentMethodInfo.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = "", m = .01 * o("WAWebOrderDetailMath").DEFAULT_OFFSET, p = Number.MAX_SAFE_INTEGER, _ = { keyList: {
		rowGap: "x8a3fw1",
		maxHeight: "x9v6m0g",
		overflowY: "x1odjw0f",
		$$css: !0
	} };
	function f(e) {
		var t = e.chat, n = e.methods, a = n.keys, i = n.currency, l = c(d), f = l[0], g = l[1], h = c(!1), y = h[0], C = h[1];
		if (a.length === 0) return null;
		var b = function() {
			if (f === "" || !o("WAWebCurrencyUtils").validateAmountString(i, f)) return !1;
			var e = o("WAWebCurrencyUtils").valueFromString(i, f);
			return e >= m && e <= p;
		}, v = async function() {
			y || (C(!0), await o("WAWebBizSendOrderAction").sendUprPaymentRequestMessage(t, a, i, b() ? o("WAWebCurrencyUtils").valueFromString(i, f) : null, o("WAWebOrderDetailMath").DEFAULT_OFFSET), o("WAWebModalManager").ModalManager.close());
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "send-upr-payment-request"
			},
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onOK: v,
			okDisabled: y,
			okSpinner: y,
			cancelDisabled: y,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: u.jsxs("div", {
				className: "x193iq5w xh8yej3",
				children: [
					u.jsx("div", {
						className: "xvhpnrs xdqhqc9",
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "accentEmphasized",
							children: s._(
								/*BTDS*/
								"",
								[s._plural(a.length), s._param("customer_name", t.formattedTitle)]
							)
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: _.keyList,
						children: a.map(function(e) {
							return u.jsx(r("WAWebUprPaymentMethodInfo.react"), {
								accountType: e.accountType,
								identifierType: e.identifierType,
								paymentKey: e
							}, e.credentialId);
						})
					}),
					u.jsx("div", {
						className: "x1nmyh1g xh8yej3",
						children: u.jsx(r("WAWebSendPixPaymentRequestAmountInputHybridRow.react"), {
							currency: i,
							defaultAmount: d,
							maxAmount: p,
							minAmount: m,
							onValueChange: g
						})
					})
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
