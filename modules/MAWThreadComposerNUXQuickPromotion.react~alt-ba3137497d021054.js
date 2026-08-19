__d("MAWThreadComposerNUXQuickPromotion.react", [
	"CometQuickPromotionLoggerContext.react",
	"CometRelay",
	"react",
	"useQuickPromotionFalcoEvent",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.onClose, n = e.onClosed, a = e.rendererStrategy;
		r("vulture")("Gn0SiNorx5W44FTuKgaecV08gm0=");
		var i = r("useQuickPromotionFalcoEvent")({
			context_surface_id: 8879,
			context_trigger: "messenger_interstitial"
		});
		return s.jsx(r("CometQuickPromotionLoggerContext.react").Provider, {
			value: i,
			children: s.jsx(o("CometRelay").MatchContainer, {
				match: a,
				props: {
					onClose: t,
					onClosed: n
				}
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
