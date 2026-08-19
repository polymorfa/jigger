__d("MAWSecureThreadQuickPromotion.react", [
	"CometQuickPromotionLoggerContext.react",
	"CometRelay",
	"MAWSecureThreadQuickPromotion_eligiblePromotions.graphql",
	"react",
	"useQuickPromotionFalcoEvent"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("MAWSecureThreadQuickPromotion_eligiblePromotions.graphql");
	function d(e) {
		var t, n, a = e.eligiblePromotions, i = o("CometRelay").useFragment(c, a), l = i == null || (t = i.nodes) == null ? void 0 : t.find(function(e) {
			var t;
			return ((t = e.comet_qp_sections) == null ? void 0 : t.renderer_strategy) != null;
		}), s = l == null || (n = l.comet_qp_sections) == null ? void 0 : n.renderer_strategy, d = r("useQuickPromotionFalcoEvent")({
			context_surface_id: 8879,
			context_trigger: "messenger_e2ee_thread_open"
		});
		return s == null ? null : u.jsx(r("CometQuickPromotionLoggerContext.react").Provider, {
			value: d,
			children: u.jsx(o("CometRelay").MatchContainer, { match: s })
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
