__d("WAWebBizBroadcastDetailsSection.react", [
	"WAWebBizBroadcastPaymentMethodSection.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizCard.react",
	"WAWebFlex.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.budget, n = e.entryPoint, a = e.onBillingInfoChanged;
		return s.jsx("div", {
			className: "x19aeb6u xh8yej3",
			children: s.jsx(r("WAWebBizCard.react"), {
				header: o("WAWebBizBroadcastsCreationStrings").getDetailsSectionTitle(),
				children: s.jsx(o("WAWebFlex.react").FlexColumn, { children: s.jsx(r("WAWebBizBroadcastPaymentMethodSection.react"), {
					budget: t,
					entryPoint: n,
					onBillingInfoChanged: a
				}) })
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
