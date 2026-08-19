__d("WAWebCappingOTERequestModalLoadable.react", [
	"JSResourceForInteraction",
	"WAWebLazyLoadLoading.react",
	"WAWebLazyLoadedRetriable",
	"WAWebLoadable",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebCappingOTERequestModal.react").__setRef("WAWebCappingOTERequestModalLoadable.react").load();
		return e.CappingOTERequestModal;
	}, "CappingOTERequestModal"), c = r("WAWebLoadable")({
		loader: u,
		loading: function(t) {
			return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
		}
	});
	l.CappingOTERequestModalLoadable = c;
}), 98);
