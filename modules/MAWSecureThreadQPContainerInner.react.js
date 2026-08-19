__d("MAWSecureThreadQPContainerInner.react", [
	"CometPlaceholder.react",
	"CometRelay",
	"MAWSecureThreadQPContainerInner_query.graphql",
	"MAWSecureThreadQuickPromotion.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("MAWSecureThreadQPContainerInner_query.graphql");
	function d(e) {
		var t, n = o("react-compiler-runtime").c(2), a = e.query, i = o("CometRelay").useFragment(c, a), l = i == null || (t = i.viewer) == null ? void 0 : t.eligible_promotions;
		if (l == null) return null;
		var s;
		return n[0] !== l ? (s = u.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: "MAWSecureThreadQPContainer.EligiblePromotions",
			children: u.jsx(r("MAWSecureThreadQuickPromotion.react"), { eligiblePromotions: l })
		}), n[0] = l, n[1] = s) : s = n[1], s;
	}
	l.default = d;
}), 98);
