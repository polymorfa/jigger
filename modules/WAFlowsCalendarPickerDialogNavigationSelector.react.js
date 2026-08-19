__d("WAFlowsCalendarPickerDialogNavigationSelector.react", [
	"GeoMenuItem.react",
	"WAFlowsCalendarPickerDialogNavigationSelectorLabel.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = { dateTokenSelectorSelected: {
		backgroundColor: "x1h3rtpe",
		paddingTop: "x1o9s02k",
		$$css: !0
	} };
	function d(t) {
		var n = t.isSelectorExpanded, o = t.label, a = t.onToggleSelector, i = t.xstyle;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.dateTokenSelectorSelected, i), {
			"data-styleid": "token-selector-header",
			role: "button",
			children: u.jsx(r("GeoMenuItem.react"), {
				label: u.jsx(r("WAFlowsCalendarPickerDialogNavigationSelectorLabel.react"), {
					label: o,
					isSelectorExpanded: n
				}),
				onClick: a
			}, o.toString())
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
