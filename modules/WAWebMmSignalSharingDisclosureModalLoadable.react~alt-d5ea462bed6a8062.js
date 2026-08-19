__d("WAWebMmSignalSharingDisclosureModalLoadable.react", [
	"JSResourceForInteraction",
	"WAWebLazyLoadedRetriable",
	"WAWebLoadingDrawer.react",
	"react",
	"react-loadable"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebMmSignalSharingDisclosureModal.react").__setRef("WAWebMmSignalSharingDisclosureModalLoadable.react").load();
		return e;
	}, "WAWebMmSignalSharingDisclosureModal"), c = r("react-loadable")({
		loader: u,
		loading: function(t) {
			return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
		}
	});
	l.MmSignalSharingDisclosureModal = c;
}), 98);
