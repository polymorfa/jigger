__d("MAWSecureThreadQPContainerLazyLoaded.react", [
	"CometErrorBoundary.react",
	"CometPlaceholder.react",
	"CometRelay",
	"MAWSecureThreadQPContainerInner.react",
	"MAWSecureThreadQPContainerLazyLoadedQuery.graphql",
	"emptyFunction",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("MAWSecureThreadQPContainerLazyLoadedQuery.graphql");
	function d() {
		var e = o("CometRelay").useLazyLoadQuery(c, {});
		return u.jsx(r("CometErrorBoundary.react"), {
			fallback: r("emptyFunction"),
			children: u.jsx(r("CometPlaceholder.react"), {
				fallback: null,
				name: "MAWSecureThreadQPContainer.Query",
				children: u.jsx(r("MAWSecureThreadQPContainerInner.react"), { query: e })
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
