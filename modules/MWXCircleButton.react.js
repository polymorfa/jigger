__d("MWXCircleButton.react", [
	"BaseTheme.react",
	"FDSCircleButton.react",
	"MWXSvgIcon",
	"MWXThreadThemeColor",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"aria-label",
		"color",
		"icon",
		"ref",
		"size",
		"type"
	], s, u = s || (s = o("react")), c = s.useMemo;
	function d(t) {
		var n = o("react-compiler-runtime").c(21), a, i, l, s, c, d, m;
		n[0] !== t ? (a = t["aria-label"], i = t.color, l = t.icon, c = t.ref, d = t.size, m = t.type, s = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = d, n[7] = m) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], d = n[6], m = n[7]);
		var p = i instanceof o("MWXThreadThemeColor").MWXThreadThemeColor ? "primary" : i, _;
		n[8] !== i ? (_ = i instanceof o("MWXThreadThemeColor").MWXThreadThemeColor ? {
			dark: { "primary-icon": i.color },
			light: { "primary-icon": i.color },
			type: "VARIABLES"
		} : void 0, n[8] = i, n[9] = _) : _ = n[9];
		var f = _, g = l instanceof o("MWXSvgIcon").MWXSvgIcon ? l.component : l, h;
		n[10] !== a || n[11] !== p || n[12] !== g || n[13] !== s || n[14] !== c || n[15] !== d || n[16] !== m ? (h = u.jsx(r("FDSCircleButton.react"), babelHelpers.extends({
			"aria-label": a,
			color_DEPRECATED: p,
			icon: g,
			size: d,
			type_DEPRECATED: m
		}, s, { ref: c })), n[10] = a, n[11] = p, n[12] = g, n[13] = s, n[14] = c, n[15] = d, n[16] = m, n[17] = h) : h = n[17];
		var y = h;
		if (f != null) {
			var C;
			return n[18] !== y || n[19] !== f ? (C = u.jsx(r("BaseTheme.react"), {
				config: f,
				children: y
			}), n[18] = y, n[19] = f, n[20] = C) : C = n[20], C;
		}
		return y;
	}
	l.default = d;
}), 98);
