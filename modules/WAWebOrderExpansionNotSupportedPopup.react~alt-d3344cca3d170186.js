__d("WAWebOrderExpansionNotSupportedPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebOrderGatingUtils",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = o("WAWebFrontendContactGetters").getFormattedUser(t.contact);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "order-expansion-not-supported"
			},
			testid: "order-expansion-country-not-supported-popup-title",
			title: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			onOK: o("WAWebModalManager").closeModalManager,
			children: u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
				testid: "order-expansion-country-not-supported-popup-description",
				children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
					/*BTDS*/
					"",
					[s._param("contact-name", n)]
				) : s._(
					/*BTDS*/
					"",
					[s._param("contact-name", n)]
				)
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
