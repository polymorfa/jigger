__d("WAWebBizAdCreationPaymentDescription.react", [
	"CometRelay",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationPaymentDescriptionData.graphql",
	"WAWebBizAdCreationSpecContext",
	"WAWebBizAdLogger",
	"WAWebClickableLink.react",
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = e !== void 0 ? e : e = n("WAWebBizAdCreationPaymentDescriptionData.graphql");
	function _(e, t) {
		return (e == null ? void 0 : e.label) == null ? null : u.jsx(r("WDSText.react"), {
			colorName: "contentActionEmphasized",
			type: "Body2",
			children: u.jsxs("span", { children: [" ", u.jsx(r("WAWebClickableLink.react"), {
				onClick: function() {
					return void t(e);
				},
				children: e.label
			})] })
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t, n = o("react-compiler-runtime").c(13), a = e.openBillingWizard, i = e.paymentSectionRef, l = o("CometRelay").useFragment(p, i), s = m(r("WAWebBizAdCreationLoggerContext")), c = m(r("WAWebBizAdCreationSpecContext")), d = c == null || (t = c.currentValue) == null || (t = t.adAccountData) == null ? void 0 : t.id, f;
		n[0] !== d || n[1] !== s || n[2] !== a ? (f = async function(t) {
			s != null && r("WAWebBizAdLogger").log({
				adAccountID: d,
				event: "click_change_payment_link",
				loggerContext: s
			}), await a(t);
		}, n[0] = d, n[1] = s, n[2] = a, n[3] = f) : f = n[3];
		var g = f;
		if (l.description == null) return null;
		var h;
		n[4] !== l.description || n[5] !== l.descriptionAx ? (h = u.jsx("span", {
			"aria-label": l.descriptionAx,
			children: l.description
		}), n[4] = l.description, n[5] = l.descriptionAx, n[6] = h) : h = n[6];
		var y;
		n[7] !== l.inlineAction || n[8] !== g ? (y = _(l.inlineAction, g), n[7] = l.inlineAction, n[8] = g, n[9] = y) : y = n[9];
		var C;
		return n[10] !== h || n[11] !== y ? (C = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: [h, y]
		}) }), n[10] = h, n[11] = y, n[12] = C) : C = n[12], C;
	}
	l.default = f;
}), 98);
