__d("WAFlowsCalendarPickerDialogNavigationButtons.react", [
	"ix",
	"GeoButton.react",
	"Locale",
	"fbicon",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t = e.direction, n = e.isDisabled, a = e.label, i = a === void 0 ? "" : a, l = e.labelIsHidden, d = e.onClick, m = c(function() {
			d == null || d();
		}, [d]), p = t === "previous", _ = o("fbicon")._(s("492515"), 16), f = o("fbicon")._(s("492569"), 16), g = o("Locale").isRTL(), h = p ? g ? f : _ : g ? _ : f;
		return u.jsx("div", {
			"data-styleid": "pager-button",
			role: "button",
			children: u.jsx(r("GeoButton.react"), {
				icon: h,
				isLabelHidden: l,
				label: i,
				onClick: m,
				variant: "flat",
				isDisabled: n
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
