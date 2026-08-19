__d("WAMFlowsHSMEditorRemoveButton.react", [
	"fbt",
	"ix",
	"GeoButton.react",
	"Image.react",
	"WAMFlowsFlowProvider.react",
	"react"
], (function(t, n, r, o, a, i, l, s, u) {
	"use strict";
	var e, c = e || (e = o("react"));
	function d(e) {
		var t = e.onRemove, n = o("WAMFlowsFlowProvider.react").useWAMFlow(), a = n.setIsFlowVisible;
		return c.jsx(r("GeoButton.react"), {
			icon: c.jsx(r("Image.react"), { src: u("503832") }),
			isDisabled: t == null,
			isLabelHidden: !0,
			label: s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				a(!0), t && t();
			},
			variant: "flat"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
