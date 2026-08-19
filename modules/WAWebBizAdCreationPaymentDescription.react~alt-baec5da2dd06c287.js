__d("WAWebBizAdCreationPaymentDescription.react", [
	"CometRelay",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationPaymentDescriptionData.graphql",
	"WAWebBizAdCreationSpecContext",
	"WAWebBizAdLogger",
	"WAWebClickableLink.react",
	"WAWebFlex.react",
	"WDSText.react",
	"react"
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
		var t, n = e.openBillingWizard, a = e.paymentSectionRef, i = o("CometRelay").useFragment(p, a), l = m(r("WAWebBizAdCreationLoggerContext")), s = m(r("WAWebBizAdCreationSpecContext")), c = s == null || (t = s.currentValue) == null || (t = t.adAccountData) == null ? void 0 : t.id, f = d(async function(e) {
			l != null && r("WAWebBizAdLogger").log({
				adAccountID: c,
				event: "click_change_payment_link",
				loggerContext: l
			}), await n(e);
		}, [
			c,
			l,
			n
		]);
		return i.description == null ? null : u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: [u.jsx("span", {
				"aria-label": i.descriptionAx,
				children: i.description
			}), _(i.inlineAction, f)]
		}) });
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
