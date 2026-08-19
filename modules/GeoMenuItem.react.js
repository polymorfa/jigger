__d("GeoMenuItem.react", [
	"GeoBaseListRow.react",
	"GeoPrivateMakeComponent",
	"GeoPrivateMenuItemContext",
	"GeoPrivateMenuItemWrapper.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"containerRef",
		"icon",
		"label",
		"logging",
		"onClick",
		"rightContent"
	], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext;
	function p(t) {
		var n = o("react-compiler-runtime").c(22), a, i, l, s, c, d, p;
		n[0] !== t ? (a = t.containerRef, i = t.icon, l = t.label, s = t.logging, c = t.onClick, p = t.rightContent, d = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = d, n[7] = p) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], d = n[6], p = n[7]);
		var _ = m(r("GeoPrivateMenuItemContext")), f = _.isHighlighted, g = _.onClick, h;
		n[8] !== c || n[9] !== g ? (h = function(t) {
			c == null || c(t), g == null || g();
		}, n[8] = c, n[9] = g, n[10] = h) : h = n[10];
		var y = h, C;
		n[11] !== i || n[12] !== f || n[13] !== l || n[14] !== s || n[15] !== y || n[16] !== d || n[17] !== p ? (C = u.jsx(r("GeoBaseListRow.react"), babelHelpers.extends({
			accessibilityRole: "menuitem",
			align: "center",
			endContent: p,
			isFocusable: !0,
			isHighlighted: f,
			label: l,
			logging: s,
			loggingName: "GeoMenuItem",
			media: i,
			onPress: y
		}, d)), n[11] = i, n[12] = f, n[13] = l, n[14] = s, n[15] = y, n[16] = d, n[17] = p, n[18] = C) : C = n[18];
		var b;
		return n[19] !== a || n[20] !== C ? (b = u.jsx(r("GeoPrivateMenuItemWrapper.react"), {
			containerRef: a,
			children: C
		}), n[19] = a, n[20] = C, n[21] = b) : b = n[21], b;
	}
	var _ = o("GeoPrivateMakeComponent").makeGeoComponent("GeoMenuItem", p);
	l.default = _;
}), 98);
