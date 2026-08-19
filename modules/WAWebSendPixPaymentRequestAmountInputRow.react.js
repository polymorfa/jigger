__d("WAWebSendPixPaymentRequestAmountInputRow.react", [
	"fbt",
	"WAWebCurrencyUtils",
	"WAWebFlex.react",
	"WAWebPixPaymentRequestFeature",
	"WAWebPixWamLogger",
	"WAWebWamEnumPaymentActionTargets",
	"WAWebWamEnumPaymentActionTypes",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(23), n = e.chat, a = e.currency, i = e.defaultAmount, l = e.maxAmount, s = e.minAmount, _ = e.onValueChange, f = e.pixData, g = e.previousScreenName, h = e.referral, y = e.screen, C = c(null), b = C[0], v = C[1], S = c(!0), R = S[0], L = S[1], E;
		t[0] !== a || t[1] !== l || t[2] !== s || t[3] !== _ ? (E = function(t) {
			var e = d({
				currency: a,
				maxAmount: l,
				minAmount: s,
				value: t
			});
			v(e), _(t, e != null);
		}, t[0] = a, t[1] = l, t[2] = s, t[3] = _, t[4] = E) : E = t[4];
		var k = E, I;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "xh8yej3" }, t[5] = I) : I = t[5];
		var T;
		t[6] !== a ? (T = o("WAWebCurrencyUtils").formatLocalSymbol(a), t[6] = a, t[7] = T) : T = t[7];
		var D = b != null, x;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (x = m(o("WAWebPixPaymentRequestFeature").getPixPaymentRequestVariant()), t[8] = x) : x = t[8];
		var $;
		t[9] !== n || t[10] !== f || t[11] !== g || t[12] !== h || t[13] !== y || t[14] !== R ? ($ = function() {
			R && (o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_PAYMENT_REQUEST_AMOUNT_INPUT, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK, g, h, y, n, f), L(!1));
		}, t[9] = n, t[10] = f, t[11] = g, t[12] = h, t[13] = y, t[14] = R, t[15] = $) : $ = t[15];
		var P;
		return t[16] !== i || t[17] !== b || t[18] !== k || t[19] !== T || t[20] !== D || t[21] !== $ ? (P = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: p.row,
			align: "start",
			justify: "start",
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: p.column,
				align: "start",
				justify: "center",
				children: u.jsx("div", babelHelpers.extends({}, I, { children: u.jsx(r("WDSTextField.react"), {
					prefix: T,
					label: i,
					floatingLabel: !1,
					onValueChange: k,
					error: D,
					errorText: b,
					bottomText: x,
					onFocus: $,
					testid: "chat_thread_pix_payment_request_amount_textfield"
				}) }))
			})
		}), t[16] = i, t[17] = b, t[18] = k, t[19] = T, t[20] = D, t[21] = $, t[22] = P) : P = t[22], P;
	}
	l.default = _;
}), 226);
