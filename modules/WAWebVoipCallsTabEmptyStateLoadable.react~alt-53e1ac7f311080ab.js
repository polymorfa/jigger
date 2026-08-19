__d("WAWebVoipCallsTabEmptyStateLoadable.react", [
	"JSResourceForInteraction",
	"WALogger",
	"WAWebLazyLoadedRetriable",
	"WAWebLoadable",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = r("WAWebLazyLoadedRetriable")(async function() {
		try {
			var t = await r("JSResourceForInteraction")("WAWebVoipCallsTabEmptyState.react").__setRef("WAWebVoipCallsTabEmptyStateLoadable.react").load();
			return t;
		} catch (t) {
			throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to load WAWebVoipCallsTabEmptyState bundle: ", ""])), t), t;
		}
	}, "WAWebVoipCallsTabEmptyStateLoadable"), d = r("WAWebLoadable")({
		loader: c,
		loading: function(t) {
			return u.jsx(u.Fragment, {});
		}
	});
	function m() {
		return u.jsx(d, {});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.VoipCallsTabEmptyStateLoadable = m;
}), 98);
