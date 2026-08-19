__d("WAWebSendPixPaymentRequestAmountInputRow.react", [
	"fbt",
	"WAWebCurrencyUtils",
	"WAWebFlex.react",
	"WAWebPixPaymentRequestFeature",
	"WAWebPixWamLogger",
	"WAWebWamEnumPaymentActionTargets",
	"WAWebWamEnumPaymentActionTypes",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.currency, n = e.maxAmount, r = e.minAmount, a = e.value;
		if (!o("WAWebCurrencyUtils").validateAmountString(t, a)) return s._(
			/*BTDS*/
			""
		);
		var i = o("WAWebCurrencyUtils").valueFromString(t, a);
		return i < r ? s._(
			/*BTDS*/
			"",
			[s._param("payment_request_min_allowed_amount", o("WAWebCurrencyUtils").formatAmount1000(t, r, { trailingZeroDisplay: "stripIfInteger" }))]
		).toString() : i > n ? s._(
			/*BTDS*/
			"",
			[s._param("payment_request_max_allowed_amount", o("WAWebCurrencyUtils").formatAmount1000(t, n, { trailingZeroDisplay: "stripIfInteger" }))]
		).toString() : null;
	}
	function m(e) {
		return e === o("WAWebPixPaymentRequestFeature").PixPaymentRequestVariant.PAYMENT_REQUEST_STANDARD_WITH_EDUCATION ? o("WAWebPixPaymentRequestFeature").getPaymentRequestEducationText() : s._(
			/*BTDS*/
			""
		);
	}
	var p = {
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
	function _(e) {
		var t = e.chat, n = e.currency, a = e.defaultAmount, i = e.maxAmount, l = e.minAmount, s = e.onValueChange, _ = e.pixData, f = e.previousScreenName, g = e.referral, h = e.screen, y = c(null), C = y[0], b = y[1], v = c(!0), S = v[0], R = v[1], L = function(t) {
			var e = d({
				currency: n,
				maxAmount: i,
				minAmount: l,
				value: t
			});
			b(e), s(t, e != null);
		};
		return u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: p.row,
			align: "start",
			justify: "start",
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: p.column,
				align: "start",
				justify: "center",
				children: u.jsx("div", {
					className: "xh8yej3",
					children: u.jsx(r("WDSTextField.react"), {
						prefix: o("WAWebCurrencyUtils").formatLocalSymbol(n),
						label: a,
						floatingLabel: !1,
						onValueChange: L,
						error: C != null,
						errorText: C,
						bottomText: m(o("WAWebPixPaymentRequestFeature").getPixPaymentRequestVariant()),
						onFocus: function() {
							S && (o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_PAYMENT_REQUEST_AMOUNT_INPUT, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK, f, g, h, t, _), R(!1));
						},
						testid: "chat_thread_pix_payment_request_amount_textfield"
					})
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
