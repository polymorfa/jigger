__d("GeoCancelButton.react", [
	"fbt",
	"GeoALSurface",
	"GeoPrivateBaseButton.react",
	"GeoPrivateCloseButtonContext",
	"GeoPrivateMakeComponent",
	"LayerHideSources",
	"react",
	"react-compiler-runtime",
	"useMergeRefs"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = [
		"containerRef",
		"label",
		"logging",
		"onClick"
	], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useMemo, f = d.useRef;
	function g(t) {
		var n = o("react-compiler-runtime").c(21), a, i, l, u, d;
		n[0] !== t ? (a = t.containerRef, d = t.label, i = t.logging, l = t.onClick, u = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = u, n[5] = d) : (a = n[1], i = n[2], l = n[3], u = n[4], d = n[5]);
		var m;
		n[6] !== d ? (m = d === void 0 ? s._(
			/*BTDS*/
			""
		) : d, n[6] = d, n[7] = m) : m = n[7];
		var _ = m, g = p(r("GeoPrivateCloseButtonContext")), h = g.onHide, y = f(null), C = r("useMergeRefs")(a, y), b;
		n[8] !== l || n[9] !== h ? (b = function(t) {
			l == null || l(t), h == null || h(r("LayerHideSources").LAYER_CANCEL_BUTTON);
		}, n[8] = l, n[9] = h, n[10] = b) : b = n[10];
		var v = b, S;
		e: {
			if (i == null || i.nodeRef != null) {
				S = i;
				break e;
			}
			var R;
			n[11] !== i ? (R = babelHelpers.extends({}, i, { nodeRef: y }), n[11] = i, n[12] = R) : R = n[12], S = R;
		}
		var L = S, E;
		n[13] !== _ || n[14] !== C || n[15] !== v || n[16] !== u ? (E = c.jsx(r("GeoPrivateBaseButton.react"), babelHelpers.extends({}, u, {
			containerRef: C,
			label: _,
			loggingName: "GeoCancelButton",
			onClick: v
		})), n[13] = _, n[14] = C, n[15] = v, n[16] = u, n[17] = E) : E = n[17];
		var k;
		return n[18] !== L || n[19] !== E ? (k = c.jsx(r("GeoALSurface"), {
			logging: L,
			name: "GeoCancelButton",
			children: E
		}), n[18] = L, n[19] = E, n[20] = k) : k = n[20], k;
	}
	var h = o("GeoPrivateMakeComponent").makeGeoComponent("GeoCancelButton", g);
	l.default = h;
}), 226);
