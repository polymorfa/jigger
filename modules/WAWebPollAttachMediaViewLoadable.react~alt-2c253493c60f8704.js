__d("WAWebPollAttachMediaViewLoadable.react", [
	"JSResourceForInteraction",
	"WAWebLazyLoadLoading.react",
	"WAWebLazyLoadedRetriable",
	"WAWebLoadable",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebPollAttachMediaView.react").__setRef("WAWebPollAttachMediaViewLoadable.react").load();
		return e.PollAttachMediaView;
	}, "PollAttachMediaView"), c = r("WAWebLoadable")({
		loader: u,
		loading: function(t) {
			return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
		}
	});
	l.PollAttachMediaViewLoadable = c;
}), 98);
