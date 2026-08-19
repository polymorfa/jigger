__d("WAWebBizAdCreationPaymentMethodRow.react", [
	"CometRelay",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationPaymentMethodLabel.react",
	"WAWebBizAdCreationPaymentMethodRowData.graphql",
	"WAWebBizAdCreationSpecContext",
	"WAWebBizAdLogger",
	"WAWebFlex.react",
	"WDSButton.react",
	"react",
	"react-compiler-runtime"
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
		var t, n = o("react-compiler-runtime").c(14), a = e.openBillingWizard, i = e.paymentSectionRef, l = o("CometRelay").useFragment(_, i), s = m(r("WAWebBizAdCreationLoggerContext")), c = m(r("WAWebBizAdCreationSpecContext")), d = c == null || (t = c.currentValue) == null || (t = t.adAccountData) == null ? void 0 : t.id, g;
		n[0] !== d || n[1] !== s || n[2] !== a ? (g = async function(t) {
			s != null && r("WAWebBizAdLogger").log({
				adAccountID: d,
				event: "click_add_payment_button",
				loggerContext: s
			}), await a(t);
		}, n[0] = d, n[1] = s, n[2] = a, n[3] = g) : g = n[3];
		var h = g, y;
		n[4] !== l ? (y = u.jsx(r("WAWebBizAdCreationPaymentMethodLabel.react"), { paymentSectionRef: l }), n[4] = l, n[5] = y) : y = n[5];
		var C;
		n[6] !== l.primaryAction || n[7] !== h ? (C = f(l.primaryAction, h), n[6] = l.primaryAction, n[7] = h, n[8] = C) : C = n[8];
		var b;
		n[9] !== C ? (b = u.jsx(o("WAWebFlex.react").FlexItem, {
			justify: "end",
			children: C
		}), n[9] = C, n[10] = b) : b = n[10];
		var v;
		return n[11] !== y || n[12] !== b ? (v = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			xstyle: p.container,
			children: [y, b]
		}), n[11] = y, n[12] = b, n[13] = v) : v = n[13], v;
	}
	l.default = g;
}), 98);
