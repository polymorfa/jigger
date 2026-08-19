__d("MAWSecureThreadQPContainerLazyLoaded.react", [
	"CometErrorBoundary.react",
	"CometPlaceholder.react",
	"CometRelay",
	"MAWSecureThreadQPContainerInner.react",
	"MAWSecureThreadQPContainerLazyLoadedQuery.graphql",
	"emptyFunction",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("MAWSecureThreadQPContainerLazyLoadedQuery.graphql");
	function d() {
		var e = o("react-compiler-runtime").c(2), t = o("CometRelay").useLazyLoadQuery(c, {}), n;
		return e[0] !== t ? (n = u.jsx(r("CometErrorBoundary.react"), {
			fallback: r("emptyFunction"),
			children: u.jsx(r("CometPlaceholder.react"), {
				fallback: null,
				name: "MAWSecureThreadQPContainer.Query",
				children: u.jsx(r("MAWSecureThreadQPContainerInner.react"), { query: t })
			})
		}), e[0] = t, e[1] = n) : n = e[1], n;
	}
	l.default = d;
}), 98);
