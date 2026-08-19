__d("WAWebContactManagerSearchEmptyState.react", [
	"fbt",
	"WAWebSearchRefreshedThinIcon.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.testid;
		return u.jsxs("div", {
			className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k x5yr21d x1qvou4u",
			role: "status",
			"aria-live": "polite",
			"data-testid": t != null ? t : "customer-manager-search-empty",
			children: [u.jsx("div", {
				className: "xhslqc4",
				"aria-hidden": !0,
				children: u.jsx(o("WAWebSearchRefreshedThinIcon.react").SearchRefreshedThinIcon, {})
			}), u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
