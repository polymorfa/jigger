__d("WAWebBizProfileRoot.react", [
	"CometRelay",
	"WAWebBizProfilePreloadedValues",
	"WAWebBizProfileRootQuery.graphql",
	"WAWebBizRefreshedProfileDrawer.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("WAWebBizProfileRootQuery.graphql");
	function d(e) {
		var t, n, a = e.props, i = e.queries, l = o("CometRelay").usePreloadedQuery(c, i.bizProfileQueryReference), s = o("CometRelay").useFragment(o("WAWebBizProfilePreloadedValues").bizProfilePreloadedValuesFragment, (t = (n = l.viewer) == null || (n = n.backing_waba) == null ? void 0 : n.business_profile) != null ? t : null), d = o("WAWebBizProfilePreloadedValues").getPreloadedBizProfileValues(s);
		return u.jsx(r("WAWebBizRefreshedProfileDrawer.react"), {
			entryPoint: a.entryPoint,
			onClose: a.onClose,
			preloadedProfile: d
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
