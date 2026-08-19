__d("MAWThreadComposerNUXQuickPromotion.react", [
	"CometQuickPromotionLoggerContext.react",
	"CometRelay",
	"react",
	"react-compiler-runtime",
	"useQuickPromotionFalcoEvent",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(10), n = e.onClose, a = e.onClosed, i = e.rendererStrategy;
		r("vulture")("Gn0SiNorx5W44FTuKgaecV08gm0=");
		var l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			context_surface_id: 8879,
			context_trigger: "messenger_interstitial"
		}, t[0] = l) : l = t[0];
		var u = r("useQuickPromotionFalcoEvent")(l), c;
		t[1] !== n || t[2] !== a ? (c = {
			onClose: n,
			onClosed: a
		}, t[1] = n, t[2] = a, t[3] = c) : c = t[3];
		var d;
		t[4] !== i || t[5] !== c ? (d = s.jsx(o("CometRelay").MatchContainer, {
			match: i,
			props: c
		}), t[4] = i, t[5] = c, t[6] = d) : d = t[6];
		var m;
		return t[7] !== u || t[8] !== d ? (m = s.jsx(r("CometQuickPromotionLoggerContext.react").Provider, {
			value: u,
			children: d
		}), t[7] = u, t[8] = d, t[9] = m) : m = t[9], m;
	}
	l.default = u;
}), 98);
