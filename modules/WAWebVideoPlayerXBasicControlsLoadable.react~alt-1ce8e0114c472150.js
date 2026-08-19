__d("WAWebVideoPlayerXBasicControlsLoadable.react", [
	"JSResourceForInteraction",
	"WAWebLazyLoadLoading.react",
	"WAWebLazyLoadedRetriable",
	"WAWebLoadable",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebVideoPlayerXBasicControls.react").__setRef("WAWebVideoPlayerXBasicControlsLoadable.react").load();
		return e;
	}, "WAWebVideoPlayerXBasicControls"), c = r("WAWebLoadable")({
		loader: u,
		loading: function(t) {
			return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
		}
	});
	l.WAWebVideoPlayerXBasicControlsLoadable = c;
}), 98);
