__d("WAWebSendPixPaymentRequestAmountInputHybridRow.react", [
	"fbt",
	"WAWebCurrencyUtils",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.currency, n = e.maxAmount, r = e.minAmount, a = e.value;
		if (a === "") return null;
		if (!o("WAWebCurrencyUtils").validateAmountString(t, a)) return s._(
			/*BTDS*/
			""
		);
		var i = o("WAWebCurrencyUtils").valueFromString(t, a);
		return i < r ? s._(
			/*BTDS*/
			"",
			[s._param("payment_request_min_allowed_amount", o("WAWebCurrencyUtils").formatAmount1000(t, r, { trailingZeroDisplay: "stripIfInteger" }))]
		) : i > n ? s._(
			/*BTDS*/
			"",
			[s._param("payment_request_max_allowed_amount", o("WAWebCurrencyUtils").formatAmount1000(t, n, { trailingZeroDisplay: "stripIfInteger" }))]
		) : null;
	}
	function m(e) {
		var t = e.currency, n = e.defaultAmount, a = e.maxAmount, i = e.minAmount, l = e.onValueChange, m = c(null), p = m[0], _ = m[1], f = function(n) {
			var e = n.trim();
			if (e === "") {
				_(null), l(e);
				return;
			}
			var r = d({
				currency: t,
				maxAmount: a,
				minAmount: i,
				value: e
			});
			_(r), l(e);
		};
		return u.jsx("div", {
			className: "xh8yej3",
			children: u.jsx(r("WDSTextField.react"), {
				prefix: o("WAWebCurrencyUtils").formatLocalSymbol(t),
				label: s._(
					/*BTDS*/
					""
				).toString(),
				defaultValue: n,
				onValueChange: f,
				error: !1,
				bottomText: p,
				testid: "chat_thread_pix_payment_request_amount_hybrid_textfield"
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
