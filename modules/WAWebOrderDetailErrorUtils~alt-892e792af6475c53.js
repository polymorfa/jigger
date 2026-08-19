__d("WAWebOrderDetailErrorUtils", [
	"fbt",
	"WATypeUtils",
	"WAWebCurrencyUtils",
	"WAWebOrderDetailMath",
	"WAWebToast.react",
	"WAWebToastManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		c(function() {
			for (var t in e) {
				var n = e[t];
				n != null && o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
					duration: 1e4,
					id: t + n.toString(),
					msg: n,
					action: {
						actionText: s._(
							/*BTDS*/
							""
						),
						dismiss: !0,
						theme: "success"
					}
				}));
			}
		}, [e]);
	}
	function m() {
		return s._(
			/*BTDS*/
			""
		);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		return s._(
			/*BTDS*/
			""
		);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("input_label", e)]
		);
	}
	function f(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("input_label", e)]
		);
	}
	function g(e) {
		var t = e.currency, n = e.enablePercentValueCheck, r = e.fieldType, a = e.label, i = e.maxFlatValue, l = e.value;
		if (!o("WAWebCurrencyUtils").validatePriceString(t, l)) return m();
		var s = o("WAWebCurrencyUtils").valueFromString(t, l) / o("WAWebOrderDetailMath").DEFAULT_OFFSET;
		if (s < 0) return p();
		if (r === o("WAWebOrderDetailMath").PERCENTAGE_SYMBOL) {
			if (n && s > 100) return _(a != null ? a : "");
		} else if (o("WATypeUtils").isNumber(i) && s > i) return f(a != null ? a : "");
		return "";
	}
	l.useShowToastErrors = d, l.getOrderDetailInvalidNumberErrorMessage = m, l.getOrderDetailNegativeNumberErrorMessage = p, l.errorMessageBigPercentageValue = _, l.errorMessageBigFlatValue = f, l.additionalChargeErrorHandler = g;
}), 226);
