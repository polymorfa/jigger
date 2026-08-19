__d("WAManagerCustomerListCTAButton", [
	"AdsHelpTrayUILoggerStoreUtils",
	"GeoButton.react",
	"react",
	"useJSON"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useRef, _ = "maiba-wa-manager-customer-list-cta", f = "wa-manager-customer-list";
	function g(e) {
		var t = e.attributesJson, n = r("useJSON")(t), a = n.action != null && n.action !== "" ? n.action : null, i = n.label != null && n.label !== "" ? n.label : null, l = a != null && i != null, u = m(function() {
			return {
				action: a != null ? a : "",
				"cta-type": f,
				label: i != null ? i : ""
			};
		}, [a, i]), g = c(function() {
			a != null && (o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents("help_tray_ads_ai_non_os_cta_click", u), window.dispatchEvent(new CustomEvent(_, { detail: { action: a } })));
		}, [a, u]), h = p(!1);
		return d(function() {
			h.current || !l || (h.current = !0, o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents("help_tray_ads_ai_non_os_cta_impression", u));
		}, [l, u]), a == null || i == null ? null : s.jsx(r("GeoButton.react"), {
			label: i,
			onClick: g,
			variant: "primary"
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
