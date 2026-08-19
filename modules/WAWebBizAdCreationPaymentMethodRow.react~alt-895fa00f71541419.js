__d("WAWebBizAdCreationPaymentMethodRow.react", [
	"CometRelay",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationPaymentMethodLabel.react",
	"WAWebBizAdCreationPaymentMethodRowData.graphql",
	"WAWebBizAdCreationSpecContext",
	"WAWebBizAdLogger",
	"WAWebFlex.react",
	"WDSButton.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = { container: {
		height: "xnnlda6",
		width: "xh8yej3",
		$$css: !0
	} }, _ = e !== void 0 ? e : e = n("WAWebBizAdCreationPaymentMethodRowData.graphql");
	function f(e, t) {
		return (e == null ? void 0 : e.label) == null ? null : u.jsx(r("WDSButton.react"), {
			label: e.label,
			onPress: function() {
				return void t(e);
			},
			size: "medium",
			variant: "borderless"
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t, n = e.openBillingWizard, a = e.paymentSectionRef, i = o("CometRelay").useFragment(_, a), l = m(r("WAWebBizAdCreationLoggerContext")), s = m(r("WAWebBizAdCreationSpecContext")), c = s == null || (t = s.currentValue) == null || (t = t.adAccountData) == null ? void 0 : t.id, g = d(async function(e) {
			l != null && r("WAWebBizAdLogger").log({
				adAccountID: c,
				event: "click_add_payment_button",
				loggerContext: l
			}), await n(e);
		}, [
			c,
			l,
			n
		]);
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			xstyle: p.container,
			children: [u.jsx(r("WAWebBizAdCreationPaymentMethodLabel.react"), { paymentSectionRef: i }), u.jsx(o("WAWebFlex.react").FlexItem, {
				justify: "end",
				children: f(i.primaryAction, g)
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
