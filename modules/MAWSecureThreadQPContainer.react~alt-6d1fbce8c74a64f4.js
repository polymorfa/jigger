__d("MAWSecureThreadQPContainer.react", [
	"CometErrorBoundary.react",
	"CometPlaceholder.react",
	"CometRelay",
	"MAWSecureThreadQPContainerInner.react",
	"MAWSecureThreadQPContainerQuery.graphql",
	"emptyFunction",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("MAWSecureThreadQPContainerQuery.graphql");
	function d(e) {
		var t = e.mawSecureThreadQPContainerQueryRef, n = o("CometRelay").usePreloadedQuery(c, t);
		return u.jsx(r("CometErrorBoundary.react"), {
			fallback: r("emptyFunction"),
			children: u.jsx(r("CometPlaceholder.react"), {
				fallback: null,
				name: "MAWSecureThreadQPContainer.Query",
				children: u.jsx(r("MAWSecureThreadQPContainerInner.react"), { query: n })
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
