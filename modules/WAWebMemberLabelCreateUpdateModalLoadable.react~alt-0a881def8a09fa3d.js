__d("WAWebMemberLabelCreateUpdateModalLoadable.react", [
	"JSResourceForInteraction",
	"WAWebLazyLoadLoading.react",
	"WAWebLazyLoadedRetriable",
	"WAWebLoadable",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebMemberLabelCreateUpdateModal.react").__setRef("WAWebMemberLabelCreateUpdateModalLoadable.react").load();
		return e.MemberLabelCreateUpdateModal;
	}, "MemberLabelCreateUpdateModal"), c = r("WAWebLoadable")({
		loader: u,
		loading: function(t) {
			return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
		}
	});
	l.MemberLabelCreateUpdateModalLoadable = c;
}), 98);
