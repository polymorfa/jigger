__d("MWXDialog.react", [
	"FDSDialog.react",
	"MWXColumn.react",
	"MWXColumnItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["children", "hasTextOnlyContent"], s = ["scrollAreaFocusProps"], u, c = u || (u = o("react"));
	function d(t) {
		var n = o("react-compiler-runtime").c(10), a, i;
		if (n[0] !== t) {
			var l = t.children, u = t.hasTextOnlyContent, d = babelHelpers.objectWithoutPropertiesLoose(t, e);
			i = l, a = d, n[0] = t, n[1] = a, n[2] = i;
		} else a = n[1], i = n[2];
		var m;
		if (n[3] !== a) {
			var p = a, _ = p.scrollAreaFocusProps, f = babelHelpers.objectWithoutPropertiesLoose(p, s);
			m = f, n[3] = a, n[4] = m;
		} else m = n[4];
		var g;
		n[5] !== i ? (g = c.jsx(r("MWXColumn.react"), {
			expanding: !0,
			paddingHorizontal: 16,
			paddingVertical: 16,
			children: c.jsx(r("MWXColumnItem.react"), {
				expanding: !0,
				children: i
			})
		}), n[5] = i, n[6] = g) : g = n[6];
		var h;
		return n[7] !== m || n[8] !== g ? (h = c.jsx(r("FDSDialog.react"), babelHelpers.extends({}, m, { children: g })), n[7] = m, n[8] = g, n[9] = h) : h = n[9], h;
	}
	l.default = d;
}), 98);
