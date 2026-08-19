__d("useWAWebBizAdCreationDurationSpec", [
	"CometRelay",
	"TWAWebBizAdCreationSpec",
	"react-compiler-runtime",
	"useWAWebBizAdCreationDurationSpec_boostedComponentWrapper.graphql"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e !== void 0 ? e : e = n("useWAWebBizAdCreationDurationSpec_boostedComponentWrapper.graphql");
	function u(e) {
		var t, n, r = o("react-compiler-runtime").c(2), a = o("CometRelay").useFragment(s, e), i = (t = (n = a.spec) == null ? void 0 : n.durationInDays) != null ? t : o("TWAWebBizAdCreationSpec").CONTINUOUS_DURATION, l;
		return r[0] !== i ? (l = {
			durationInDays: i,
			initialDurationInDays: i
		}, r[0] = i, r[1] = l) : l = r[1], l;
	}
	l.default = u;
}), 98);
