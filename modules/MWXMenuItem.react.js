__d("MWXMenuItem.react", [
	"BaseTheme.react",
	"FDSMenuItem.react",
	"MWXSvgIcon",
	"MWXThreadThemeColor",
	"MessengerWebUXLogger",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s = [
		"icon",
		"iconColor",
		"loggingEvent",
		"onClick",
		"primaryColor",
		"secondaryColor"
	], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo;
	function _(t) {
		var n = o("react-compiler-runtime").c(22), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l, u, d, m, p;
		if (n[3] !== a) {
			var _ = a, g = _.icon, h = _.iconColor, y = _.loggingEvent, C = _.onClick, b = _.primaryColor, v = _.secondaryColor, S = babelHelpers.objectWithoutPropertiesLoose(_, s);
			l = g, u = h, d = y, m = C, p = S, n[3] = a, n[4] = l, n[5] = u, n[6] = d, n[7] = m, n[8] = p;
		} else l = n[4], u = n[5], d = n[6], m = n[7], p = n[8];
		var R = u instanceof o("MWXThreadThemeColor").MWXThreadThemeColor ? "primary" : u, L = r("MessengerWebUXLogger").useInteractionLogger(), E;
		n[9] !== L || n[10] !== d || n[11] !== m ? (E = function(t) {
			m == null || m(t), d && (L == null || L(d));
		}, n[9] = L, n[10] = d, n[11] = m, n[12] = E) : E = n[12];
		var k = E, I = l instanceof o("MWXSvgIcon").MWXSvgMenuItemIcon ? l.component : l, T;
		n[13] !== k || n[14] !== R || n[15] !== p || n[16] !== i || n[17] !== I ? (T = c.jsx(r("FDSMenuItem.react"), babelHelpers.extends({
			icon: I,
			iconColor: R,
			isIconDecorative: !0,
			onClick: k
		}, p, { ref: i })), n[13] = k, n[14] = R, n[15] = p, n[16] = i, n[17] = I, n[18] = T) : T = n[18];
		var D;
		return n[19] !== u || n[20] !== T ? (D = c.jsx(f, {
			iconColor: u,
			children: T
		}), n[19] = u, n[20] = T, n[21] = D) : D = n[21], D;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(5), n = e.children, a = e.iconColor, i;
		t[0] !== a ? (i = a instanceof o("MWXThreadThemeColor").MWXThreadThemeColor ? {
			dark: { "primary-icon": a.color },
			light: { "primary-icon": a.color },
			type: "VARIABLES"
		} : void 0, t[0] = a, t[1] = i) : i = t[1];
		var l = i;
		if (l == null) return n;
		var s;
		return t[2] !== n || t[3] !== l ? (s = c.jsx(r("BaseTheme.react"), {
			config: l,
			children: n
		}), t[2] = n, t[3] = l, t[4] = s) : s = t[4], s;
	}
	l.default = _;
}), 98);
