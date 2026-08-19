__d("WAWebSimilarNewslettersUnitsLoadable.react", [
	"JSResourceForInteraction",
	"WAWebLazyLoadLoading.react",
	"WAWebLazyLoadedRetriable",
	"WAWebLoadable",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebSimilarNewslettersUnits.react").__setRef("WAWebSimilarNewslettersUnitsLoadable.react").load();
		return e.SimilarNewslettersConversationBanner;
	}, "SimilarNewslettersConversationBanner"), c = r("WAWebLoadable")({
		loader: u,
		loading: function(t) {
			return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
		}
	});
	l.SimilarNewslettersConversationBannerLoadable = c;
}), 98);
