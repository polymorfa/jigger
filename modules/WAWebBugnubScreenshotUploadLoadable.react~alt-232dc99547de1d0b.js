__d("WAWebBugnubScreenshotUploadLoadable.react", [
	"JSResourceForInteraction",
	"WAWebLazyLoadLoading.react",
	"WAWebLazyLoadedRetriable",
	"WAWebLoadable",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebBugnubScreenshotUpload.react").__setRef("WAWebBugnubScreenshotUploadLoadable.react").load();
		return e;
	}, "WAWebBugnubScreenshotUpload"), c = r("WAWebLoadable")({
		loader: u,
		loading: function(t) {
			return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
		}
	});
	l.WAWebBugnubScreenshotUploadLoadable = c;
}), 98);
