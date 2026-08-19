__d("WAWebEnforcementHeader.react", [
	"WAWebEnforcementPictograms.react",
	"WAWebFlex.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.enforcementType;
		return s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: s.jsx(r("WAWebEnforcementPictograms.react"), { enforcementType: t })
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
