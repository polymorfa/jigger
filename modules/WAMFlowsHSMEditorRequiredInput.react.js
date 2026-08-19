__d("WAMFlowsHSMEditorRequiredInput.react", [
	"fbt",
	"GeoSwitch.react",
	"WAMFlowsFlowProvider.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onChange, n = e.value, a = o("WAMFlowsFlowProvider.react").useWAMFlow(), i = a.setIsFlowVisible;
		return u.jsx(r("GeoSwitch.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onChange: function(n) {
				i(!0), t(n);
			},
			value: n
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
