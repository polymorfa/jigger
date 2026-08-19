__d("MAWSecureThreadQPContainer.react", [
	"CometErrorBoundary.react",
	"CometPlaceholder.react",
	"CometRelay",
	"MAWSecureThreadQPContainerInner.react",
	"MAWSecureThreadQPContainerQuery.graphql",
	"emptyFunction",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("MAWSecureThreadQPContainerQuery.graphql");
	function d(e) {
		var t = o("react-compiler-runtime").c(2), n = e.mawSecureThreadQPContainerQueryRef, a = o("CometRelay").usePreloadedQuery(c, n), i;
		return t[0] !== a ? (i = u.jsx(r("CometErrorBoundary.react"), {
			fallback: r("emptyFunction"),
			children: u.jsx(r("CometPlaceholder.react"), {
				fallback: null,
				name: "MAWSecureThreadQPContainer.Query",
				children: u.jsx(r("MAWSecureThreadQPContainerInner.react"), { query: a })
			})
		}), t[0] = a, t[1] = i) : i = t[1], i;
	}
	l.default = d;
}), 98);
