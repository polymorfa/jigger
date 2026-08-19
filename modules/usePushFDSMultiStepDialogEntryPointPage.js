__d("usePushFDSMultiStepDialogEntryPointPage", [
	"BaseMultiPageEntryPointImpl.react",
	"CometRelay",
	"FDSMultiStepDialogPushPageContext.react",
	"react",
	"react-compiler-runtime",
	"useCometRelayEntrypointContextualEnvironmentProvider"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["fallback"], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = c.useTransition;
	function _(t, n) {
		var a = o("react-compiler-runtime").c(8), i = p(), l = i[0], s = i[1], c = r("useCometRelayEntrypointContextualEnvironmentProvider")(), d = m(o("FDSMultiStepDialogPushPageContext.react").FDSMultiStepDialogPushPageContext), _;
		a[0] !== c || a[1] !== t || a[2] !== n || a[3] !== d ? (_ = function(i, l) {
			n != null && s(function() {
				var a = o("CometRelay").loadEntryPoint(c, t, n), s = l != null ? l : {}, m = s.fallback, p = babelHelpers.objectWithoutPropertiesLoose(s, e);
				d(function() {
					return u.jsx(r("BaseMultiPageEntryPointImpl.react"), {
						entryPoint: t,
						environmentProvider: c,
						fallback: m,
						loadedEntryPoint: a,
						otherProps: i,
						preloadParams: n,
						usePlaceholder: m != null
					});
				}, p);
			});
		}, a[0] = c, a[1] = t, a[2] = n, a[3] = d, a[4] = _) : _ = a[4];
		var f = _, g;
		return a[5] !== l || a[6] !== f ? (g = [l, f], a[5] = l, a[6] = f, a[7] = g) : g = a[7], g;
	}
	l.default = _;
}), 98);
