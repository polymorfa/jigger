__d("MWXDialogPage.react", [
	"FDSDialogPage.react",
	"react",
	"react-compiler-runtime",
	"react-strict-dom"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["children", "hasTextOnlyContent"], s = ["scrollAreaFocusProps"], u, c = u || (u = o("react")), d = { cometPageContent: {
		paddingBottom: "xwib8y2",
		paddingInlineEnd: "xv54qhq",
		paddingInlineStart: "xf7dkkf",
		$$css: !0
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(11), a, i;
		if (n[0] !== t) {
			var l = t.children, u = t.hasTextOnlyContent, m = babelHelpers.objectWithoutPropertiesLoose(t, e);
			i = l, a = m, n[0] = t, n[1] = a, n[2] = i;
		} else a = n[1], i = n[2];
		var p;
		if (n[3] !== a) {
			var _ = a, f = _.scrollAreaFocusProps, g = babelHelpers.objectWithoutPropertiesLoose(_, s);
			p = g, n[3] = a, n[4] = p;
		} else p = n[4];
		var h;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (h = [d.cometPageContent], n[5] = h) : h = n[5];
		var y;
		n[6] !== i ? (y = c.jsx(o("react-strict-dom").html.div, {
			style: h,
			children: i
		}), n[6] = i, n[7] = y) : y = n[7];
		var C;
		return n[8] !== p || n[9] !== y ? (C = c.jsx(r("FDSDialogPage.react"), babelHelpers.extends({}, p, { children: y })), n[8] = p, n[9] = y, n[10] = C) : C = n[10], C;
	}
	l.default = m;
}), 98);
