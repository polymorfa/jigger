__d("WAManagerTriggerSendCTAButton", [
	"GeoButton.react",
	"react",
	"useJSON"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useCallback, c = "maiba-wa-manager-trigger-send-cta";
	function d(e) {
		var t = e.attributesJson, n = r("useJSON")(t), o = u(function() {
			n.action == null || n.action === "" || window.dispatchEvent(new CustomEvent(c, { detail: { action: n.action } }));
		}, [n.action]);
		if (n.action == null || n.action === "") return null;
		var a = n.label != null && n.label !== "" ? n.label : null;
		return a == null ? null : s.jsx(r("GeoButton.react"), {
			label: a,
			onClick: o,
			variant: "default"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
