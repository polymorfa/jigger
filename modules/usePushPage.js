__d("usePushPage", [
	"BaseMultiPageEntryPointImpl.react",
	"BaseMultiPageViewContext",
	"FBLogger",
	"react",
	"react-compiler-runtime",
	"useCometRelayEntrypointContextualEnvironmentProvider",
	"usePageEntryPointPrerenderer"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext;
	function m(e, t, n) {
		var a = o("react-compiler-runtime").c(9), i = n === void 0 ? "button" : n, l = r("useCometRelayEntrypointContextualEnvironmentProvider")(), u = d(r("BaseMultiPageViewContext")), c = r("usePageEntryPointPrerenderer")(e, t, i), m = c[0], p = c[1], _;
		a[0] !== u || a[1] !== l || a[2] !== m || a[3] !== e || a[4] !== t ? (_ = function(o, a) {
			var n = a === void 0 ? {} : a, i = n.fallback, c = n.pageKey;
			if (u == null) throw r("FBLogger")("BaseMultiPageView").blameToPreviousFrame().mustfixThrow("usePushPage can only be used inside BaseMultiPageView.");
			t != null && m(function(n) {
				return u.pushPage(function() {
					return s.jsx(r("BaseMultiPageEntryPointImpl.react"), {
						entryPoint: e,
						environmentProvider: l,
						fallback: i != null ? i : u.fallback,
						loadedEntryPoint: n,
						otherProps: o,
						placeholderComponent: u.placeholderComponent,
						preloadParams: t
					});
				}, { pageKey: c });
			});
		}, a[0] = u, a[1] = l, a[2] = m, a[3] = e, a[4] = t, a[5] = _) : _ = a[5];
		var f = _, g;
		return a[6] !== p || a[7] !== f ? (g = [f, p], a[6] = p, a[7] = f, a[8] = g) : g = a[8], g;
	}
	l.default = m;
}), 98);
