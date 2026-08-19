__d("WAWebNewsletterTabDrawerLoadingShimmer.react", [
	"WAWebDrawerSection.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterInboxShimmer.react",
	"WAWebNewsletterLoadingStageManager",
	"WAWebNewsletterRecommendationsShimmer.react",
	"react",
	"useWAWebModelValues",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 128;
	function c(e) {
		var t = e.newsletterCount, n = r("useWAWebWindowSize")(), a = n.height, i = o("useWAWebModelValues").useModelValues(o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager, ["stage"]), l = i.stage, c = l === o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage.Loading, d = Math.floor(a / u), m = t > d || c ? d : t, p = s.jsx(r("WAWebNewsletterInboxShimmer.react"), { count: m });
		return t === 0 && !c && (m = o("WAWebNewsletterGatingUtils").getRecommendedUnitRowCount(), p = s.jsx(r("WAWebNewsletterRecommendationsShimmer.react"), { count: m })), s.jsx(r("WAWebDrawerSection.react"), {
			theme: "full-height",
			children: p
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
