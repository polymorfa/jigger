__d("WAWebDeveloperMenuDeveloperFlowLoadable.react", [
	"JSResourceForInteraction",
	"WAWebLazyLoadedRetriable",
	"WAWebLoadable",
	"WAWebLoadingDrawer.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebDeveloperMenuDeveloperFlow.react").__setRef("WAWebDeveloperMenuDeveloperFlowLoadable.react").load();
		return e;
	}, "DeveloperFlow"), c = r("WAWebLoadable")({
		loader: u,
		loading: function(t) {
			return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
		}
	}), d = c;
	l.default = d;
}), 98);
