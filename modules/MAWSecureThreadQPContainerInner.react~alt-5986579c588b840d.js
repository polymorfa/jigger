__d("MAWSecureThreadQPContainerInner.react", [
	"CometPlaceholder.react",
	"CometRelay",
	"MAWSecureThreadQPContainerInner_query.graphql",
	"MAWSecureThreadQuickPromotion.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("MAWSecureThreadQPContainerInner_query.graphql");
	function d(e) {
		var t, n = e.query, a = o("CometRelay").useFragment(c, n), i = a == null || (t = a.viewer) == null ? void 0 : t.eligible_promotions;
		return i == null ? null : u.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: "MAWSecureThreadQPContainer.EligiblePromotions",
			children: u.jsx(r("MAWSecureThreadQuickPromotion.react"), { eligiblePromotions: i })
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
