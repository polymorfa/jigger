__d("WAMFlowsHSMEditorInputLabel.react", [
	"fbt",
	"GeoBaseText.react",
	"GeoText.react",
	"geoMargin",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = "∙";
	function d(e) {
		var t = e.isDisabled, n = e.isLabelHidden, o = e.isRequired, a = e.label;
		return u.jsx(u.Fragment, { children: n !== !0 && u.jsxs(u.Fragment, { children: [u.jsx(r("GeoText.react"), { children: a }), o !== !0 && t !== !0 ? u.jsxs(u.Fragment, { children: [u.jsx(r("GeoBaseText.react"), {
			color: "placeholder",
			size: "value",
			xstyle: r("geoMargin").horiz4,
			children: c
		}), u.jsx(r("GeoBaseText.react"), {
			color: "placeholder",
			size: "value",
			children: s._(
				/*BTDS*/
				""
			)
		})] }) : null] }) });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
