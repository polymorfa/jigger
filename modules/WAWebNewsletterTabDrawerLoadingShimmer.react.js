__d("WAWebNewsletterTabDrawerLoadingShimmer.react", [
	"WAWebDrawerSection.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterInboxShimmer.react",
	"WAWebNewsletterLoadingStageManager",
	"WAWebNewsletterRecommendationsShimmer.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 128;
	function c(e) {
		var t = o("react-compiler-runtime").c(7), n = e.newsletterCount, a = r("useWAWebWindowSize")(), i = a.height, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = ["stage"], t[0] = l) : l = t[0];
		var c = o("useWAWebModelValues").useModelValues(o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager, l), d = c.stage, m = d === o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage.Loading, p = Math.floor(i / u), _ = n > p || m ? p : n, f;
		t[1] !== _ ? (f = s.jsx(r("WAWebNewsletterInboxShimmer.react"), { count: _ }), t[1] = _, t[2] = f) : f = t[2];
		var g = f;
		if (n === 0 && !m) {
			var h;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (h = o("WAWebNewsletterGatingUtils").getRecommendedUnitRowCount(), t[3] = h) : h = t[3], _ = h;
			var y;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (y = s.jsx(r("WAWebNewsletterRecommendationsShimmer.react"), { count: _ }), t[4] = y) : y = t[4], g = y;
		}
		var C;
		return t[5] !== g ? (C = s.jsx(r("WAWebDrawerSection.react"), {
			theme: "full-height",
			children: g
		}), t[5] = g, t[6] = C) : C = t[6], C;
	}
	l.default = c;
}), 98);
