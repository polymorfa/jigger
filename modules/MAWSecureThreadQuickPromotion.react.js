__d("MAWSecureThreadQuickPromotion.react", [
	"CometQuickPromotionLoggerContext.react",
	"CometRelay",
	"MAWSecureThreadQuickPromotion_eligiblePromotions.graphql",
	"react",
	"react-compiler-runtime",
	"useQuickPromotionFalcoEvent"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("MAWSecureThreadQuickPromotion_eligiblePromotions.graphql");
	function d(e) {
		var t, n = o("react-compiler-runtime").c(8), a = e.eligiblePromotions, i = o("CometRelay").useFragment(c, a), l;
		if (n[0] !== (i == null ? void 0 : i.nodes)) {
			var s;
			l = i == null || (s = i.nodes) == null ? void 0 : s.find(m), n[0] = i == null ? void 0 : i.nodes, n[1] = l;
		} else l = n[1];
		var d = l, p = d == null || (t = d.comet_qp_sections) == null ? void 0 : t.renderer_strategy, _;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
			context_surface_id: 8879,
			context_trigger: "messenger_e2ee_thread_open"
		}, n[2] = _) : _ = n[2];
		var f = r("useQuickPromotionFalcoEvent")(_);
		if (p == null) return null;
		var g;
		n[3] !== p ? (g = u.jsx(o("CometRelay").MatchContainer, { match: p }), n[3] = p, n[4] = g) : g = n[4];
		var h;
		return n[5] !== f || n[6] !== g ? (h = u.jsx(r("CometQuickPromotionLoggerContext.react").Provider, {
			value: f,
			children: g
		}), n[5] = f, n[6] = g, n[7] = h) : h = n[7], h;
	}
	function m(e) {
		var t;
		return ((t = e.comet_qp_sections) == null ? void 0 : t.renderer_strategy) != null;
	}
	l.default = d;
}), 98);
