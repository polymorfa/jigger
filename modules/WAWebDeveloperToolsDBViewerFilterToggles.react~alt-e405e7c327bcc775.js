__d("WAWebDeveloperToolsDBViewerFilterToggles.react", [
	"$InternalEnum",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebFlexBox.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = n("$InternalEnum").Mirrored([
		"ALL",
		"NONE",
		"SOME"
	]);
	function c(e) {
		var t = e.selectedState, n = e.toggleFunc;
		return s.jsxs(o("WAWebFlexBox.react").FlexRow, {
			gap: 12,
			grow: 1,
			children: [s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
				onClick: function() {
					return n(!0);
				},
				isActive: t === u.ALL,
				fullWidth: !0,
				children: "All"
			}), s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
				onClick: function() {
					return n(!1);
				},
				isActive: t === u.NONE,
				fullWidth: !0,
				children: "None"
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.FilterState = u, l.DeveloperToolsDBViewerFilterToggles = c;
}), 98);
