__d("WAWebPollHideVoterNamesLabel", [
	"fbt",
	"WAWebFlex.react",
	"WDSIconIcVisibilityOffFilled.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { container: {
		flex: "x3psx0u",
		paddingTop: "x1iorvi4",
		paddingBottom: "xjkvuk6",
		$$css: !0
	} };
	function d(e) {
		var t = e.trailingSeparator;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: c.container,
			testid: "poll-hide-voter-names-label",
			children: [u.jsx(r("WDSIconIcVisibilityOffFilled.react"), {
				width: 12,
				height: 12,
				colorName: "contentDeemphasized"
			}), u.jsxs("span", {
				className: "x1pg5gke x1d3mw78 x1bvqhpb xaso8d8",
				children: [s._(
					/*BTDS*/
					""
				), t ? u.jsx("span", {
					className: "x135b78x x11lfxj5",
					children: "·"
				}) : null]
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
