__d("WAWebCommunityTransferOwnershipFlowLoadable.react", [
	"JSResourceForInteraction",
	"WAWebLazyLoadedRetriable",
	"WAWebLoadable",
	"WAWebLoadingDrawer.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebCommunityTransferOwnershipFlow.react").__setRef("WAWebCommunityTransferOwnershipFlowLoadable.react").load();
		return e;
	}, "CommunityTransferOwnershipFlow"), c = r("WAWebLoadable")({
		loader: u,
		loading: function(t) {
			return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
		}
	});
	l.CommunityTransferOwnershipFlowLoadable = c;
}), 98);
