__d("WAWebBizProfileRoot.react", [
	"CometRelay",
	"WAWebBizProfilePreloadedValues",
	"WAWebBizProfileRootQuery.graphql",
	"WAWebBizRefreshedProfileDrawer.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("WAWebBizProfileRootQuery.graphql");
	function d(e) {
		var t, n, a = o("react-compiler-runtime").c(6), i = e.props, l = e.queries, s = o("CometRelay").usePreloadedQuery(c, l.bizProfileQueryReference), d = o("CometRelay").useFragment(o("WAWebBizProfilePreloadedValues").bizProfilePreloadedValuesFragment, (t = (n = s.viewer) == null || (n = n.backing_waba) == null ? void 0 : n.business_profile) != null ? t : null), m;
		a[0] !== d ? (m = o("WAWebBizProfilePreloadedValues").getPreloadedBizProfileValues(d), a[0] = d, a[1] = m) : m = a[1];
		var p = m, _;
		return a[2] !== p || a[3] !== i.entryPoint || a[4] !== i.onClose ? (_ = u.jsx(r("WAWebBizRefreshedProfileDrawer.react"), {
			entryPoint: i.entryPoint,
			onClose: i.onClose,
			preloadedProfile: p
		}), a[2] = p, a[3] = i.entryPoint, a[4] = i.onClose, a[5] = _) : _ = a[5], _;
	}
	l.default = d;
}), 98);
