__d("WAWebOrderExpansionDifferentCurrencyPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebOrderGatingUtils",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "order-expansion-different-order-currency-title",
			title: t,
			onOK: o("WAWebModalManager").closeModalManager,
			children: u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
				testid: "order-expansion-different-order-currency-description",
				children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			})
		}), e[1] = n) : n = e[1], n;
	}
	l.default = c;
}), 226);
