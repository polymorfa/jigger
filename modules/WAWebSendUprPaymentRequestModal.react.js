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
	"asyncToGeneratorRuntime",
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
		var t = e.chat, a = e.methods, i = a.keys, l = a.currency, f = c(d), g = f[0], h = f[1], y = c(!1), C = y[0], b = y[1];
		if (i.length === 0) return null;
		var v = function() {
			if (g === "" || !o("WAWebCurrencyUtils").validateAmountString(l, g)) return !1;
			var e = o("WAWebCurrencyUtils").valueFromString(l, g);
			return e >= m && e <= p;
		}, S = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				C || (b(!0), yield o("WAWebBizSendOrderAction").sendUprPaymentRequestMessage(t, i, l, v() ? o("WAWebCurrencyUtils").valueFromString(l, g) : null, o("WAWebOrderDetailMath").DEFAULT_OFFSET), o("WAWebModalManager").ModalManager.close());
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
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
			onOK: S,
			okDisabled: C,
			okSpinner: C,
			cancelDisabled: C,
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
								[s._plural(i.length), s._param("customer_name", t.formattedTitle)]
							)
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: _.keyList,
						children: i.map(function(e) {
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
							currency: l,
							defaultAmount: d,
							maxAmount: p,
							minAmount: m,
							onValueChange: h
						})
					})
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
