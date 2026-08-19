__d("WAWebSendPixPaymentRequestAmountInputRowOptional.react", [
	"fbt",
	"WAWebCurrencyUtils",
	"WAWebFlex.react",
	"WAWebPixPaymentRequestFeature",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.currency, n = e.maxAmount, r = e.minAmount, a = e.value, i = o("WAWebPixPaymentRequestFeature").getPaymentRequestEducationText();
		if (a === "") return i;
		if (!o("WAWebCurrencyUtils").validateAmountString(t, a)) return s._(
			/*BTDS*/
			""
		);
		var l = o("WAWebCurrencyUtils").valueFromString(t, a);
		return l < r ? s._(
			/*BTDS*/
			"",
			[s._param("payment_request_min_allowed_amount", o("WAWebCurrencyUtils").formatAmount1000(t, r, { trailingZeroDisplay: "stripIfInteger" }))]
		) : l > n ? s._(
			/*BTDS*/
			"",
			[s._param("payment_request_max_allowed_amount", o("WAWebCurrencyUtils").formatAmount1000(t, n, { trailingZeroDisplay: "stripIfInteger" }))]
		) : i;
	}
	var m = {
		row: {
			height: "x13swhlj",
			width: "xh8yej3",
			$$css: !0
		},
		column: {
			width: "xh8yej3",
			height: "x14nwjz3",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.currency, n = e.defaultAmount, a = e.maxAmount, i = e.minAmount, l = e.onValueChange, s = c(d({
			currency: t,
			maxAmount: a,
			minAmount: i,
			value: n
		})), p = s[0], _ = s[1], f = function(n) {
			var e = n.trim(), r = d({
				currency: t,
				maxAmount: a,
				minAmount: i,
				value: e
			});
			_(r), l(e);
		};
		return u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: m.row,
			align: "start",
			justify: "start",
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: m.column,
				align: "start",
				justify: "start",
				children: u.jsx("div", {
					className: "xh8yej3",
					children: u.jsx(r("WDSTextField.react"), {
						prefix: o("WAWebCurrencyUtils").formatLocalSymbol(t),
						label: "0",
						floatingLabel: !1,
						defaultValue: n,
						onValueChange: f,
						error: !1,
						bottomText: p,
						testid: "chat_thread_pix_payment_request_amount_optional_textfield"
					})
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
