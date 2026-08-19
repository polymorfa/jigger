__d("WAWebOrderExpansionDifferentCurrencyPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebOrderGatingUtils",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "order-expansion-different-order-currency-title",
			title: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
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
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
