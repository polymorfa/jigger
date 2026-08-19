__d("MWXDialogHeader.react", [
	"FDSDialogHeader.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"closeButtonTestId",
		"mdsTitleLayout",
		"showTruncationTooltip",
		"title",
		"titleImageAddOn",
		"withoutDivider"
	], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(14), a, i, l, s, c, d;
		if (n[0] !== t) {
			var m = t.closeButtonTestId, p = t.mdsTitleLayout, _ = t.showTruncationTooltip, f = t.title, g = t.titleImageAddOn, h = t.withoutDivider, y = babelHelpers.objectWithoutPropertiesLoose(t, e);
			i = m, l = _, s = f, c = g, d = h, a = y, n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = d;
		} else a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], d = n[6];
		var C = l === void 0 ? !0 : l, b = s != null ? s : void 0, v;
		return n[7] !== a || n[8] !== i || n[9] !== C || n[10] !== b || n[11] !== c || n[12] !== d ? (v = u.jsx(r("FDSDialogHeader.react"), babelHelpers.extends({
			closeTestID: i,
			text: b,
			titleImageAddOn: c
		}, a, {
			showTruncationTooltip: C,
			withoutDivider: d
		})), n[7] = a, n[8] = i, n[9] = C, n[10] = b, n[11] = c, n[12] = d, n[13] = v) : v = n[13], v;
	}
	l.default = c;
}), 98);
