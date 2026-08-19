__d("WAWebSendPixPaymentRequestAmountInputRowOptional.react", [
	"fbt",
	"WAWebCurrencyUtils",
	"WAWebFlex.react",
	"WAWebPixPaymentRequestFeature",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(18), n = e.currency, a = e.defaultAmount, i = e.maxAmount, l = e.minAmount, s = e.onValueChange, p;
		t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l ? (p = d({
			currency: n,
			maxAmount: i,
			minAmount: l,
			value: a
		}), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = p) : p = t[4];
		var _ = c(p), f = _[0], g = _[1], h;
		t[5] !== n || t[6] !== i || t[7] !== l || t[8] !== s ? (h = function(t) {
			var e = t.trim(), r = d({
				currency: n,
				maxAmount: i,
				minAmount: l,
				value: e
			});
			g(r), s(e);
		}, t[5] = n, t[6] = i, t[7] = l, t[8] = s, t[9] = h) : h = t[9];
		var y = h, C;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "xh8yej3" }, t[10] = C) : C = t[10];
		var b;
		t[11] !== n ? (b = o("WAWebCurrencyUtils").formatLocalSymbol(n), t[11] = n, t[12] = b) : b = t[12];
		var v;
		return t[13] !== a || t[14] !== y || t[15] !== f || t[16] !== b ? (v = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: m.row,
			align: "start",
			justify: "start",
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: m.column,
				align: "start",
				justify: "start",
				children: u.jsx("div", babelHelpers.extends({}, C, { children: u.jsx(r("WDSTextField.react"), {
					prefix: b,
					label: "0",
					floatingLabel: !1,
					defaultValue: a,
					onValueChange: y,
					error: !1,
					bottomText: f,
					testid: "chat_thread_pix_payment_request_amount_optional_textfield"
				}) }))
			})
		}), t[13] = a, t[14] = y, t[15] = f, t[16] = b, t[17] = v) : v = t[17], v;
	}
	l.default = p;
}), 226);
