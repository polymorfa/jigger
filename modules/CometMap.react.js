__d("CometMap.react", [
	"BaseMapLibreGLEventListener.react",
	"BaseMapLibreGLMap.react",
	"CometMapData",
	"CometPlaceholder.react",
	"FBMapFunnelLoggerConstants",
	"FBMapFunnelLoggerContext",
	"deferredLoadComponent",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"children",
		"infoButtonPosition",
		"mapStyle",
		"onClick",
		"onDragEnd",
		"onDragStart",
		"onMapReady",
		"onMapSet",
		"onMouseDown",
		"onZoomEnd",
		"onZoomStart",
		"surface",
		"xstyle"
	], s, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = r("requireDeferred")("FBMapFunnelLogger").__setRef("CometMap.react"), g = r("deferredLoadComponent")(r("requireDeferred")("CometMapInfoButton.react").__setRef("CometMap.react"));
	function h(t) {
		var n = o("react-compiler-runtime").c(73), a, l, u, d, h, y, C, b, v, S, R, L, E, k;
		n[0] !== t ? (a = t.children, l = t.infoButtonPosition, d = t.mapStyle, h = t.onClick, y = t.onDragEnd, C = t.onDragStart, b = t.onMapReady, v = t.onMapSet, S = t.onMouseDown, R = t.onZoomEnd, L = t.onZoomStart, E = t.surface, k = t.xstyle, u = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = l, n[3] = u, n[4] = d, n[5] = h, n[6] = y, n[7] = C, n[8] = b, n[9] = v, n[10] = S, n[11] = R, n[12] = L, n[13] = E, n[14] = k) : (a = n[1], l = n[2], u = n[3], d = n[4], h = n[5], y = n[6], C = n[7], b = n[8], v = n[9], S = n[10], R = n[11], L = n[12], E = n[13], k = n[14]);
		var I = _(null), T = I[0], D = I[1], x = _(null), $ = x[0], P = x[1], N = p(!1), M, w;
		n[15] !== E ? (M = function() {
			f.onReady(function(e) {
				D(e.get(E, "CometMap"));
			});
		}, w = [E], n[15] = E, n[16] = M, n[17] = w) : (M = n[16], w = n[17]), m(M, w);
		var A, F;
		n[18] !== $ || n[19] !== v ? (A = function() {
			$ == null || v == null || N.current || (N.current = !0, v($));
		}, F = [$, v], n[18] = $, n[19] = v, n[20] = A, n[21] = F) : (A = n[20], F = n[21]), m(A, F);
		var O;
		n[22] !== k ? (O = k != null ? (s || (s = r("stylex")))(k) : "", n[22] = k, n[23] = O) : O = n[23];
		var B;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "x1vtvx1t x5yr21d x6ikm8r x10wlt62 x1n2onr6 xh8yej3" }, n[24] = B) : B = n[24];
		var W = o("CometMapData").useMapStyle(E, d), q;
		n[25] !== T || n[26] !== b ? (q = function(t) {
			P(t), T && T.onMapReady(), b && b(t);
		}, n[25] = T, n[26] = b, n[27] = q) : q = n[27];
		var U;
		n[28] !== a || n[29] !== T ? (U = c.jsx(r("FBMapFunnelLoggerContext").Provider, {
			value: T,
			children: a
		}), n[28] = a, n[29] = T, n[30] = U) : U = n[30];
		var V;
		n[31] !== T || n[32] !== h ? (V = function(t) {
			T && T.sendInteractiveEvent(o("FBMapFunnelLoggerConstants").MAP_INTERACTIVE_EVENTS.GESTURE_SINGLE_TAP), h && h();
		}, n[31] = T, n[32] = h, n[33] = V) : V = n[33];
		var H;
		n[34] !== T ? (H = function(t) {
			T && T.sendInteractiveEvent(o("FBMapFunnelLoggerConstants").MAP_INTERACTIVE_EVENTS.GESTURE_DOUBLE_TAP);
		}, n[34] = T, n[35] = H) : H = n[35];
		var G;
		n[36] !== T || n[37] !== y ? (G = function(t) {
			T && T.sendInteractiveEvent(o("FBMapFunnelLoggerConstants").MAP_INTERACTIVE_EVENTS.PAN), y && y();
		}, n[36] = T, n[37] = y, n[38] = G) : G = n[38];
		var z;
		n[39] !== C ? (z = function(t) {
			C && C();
		}, n[39] = C, n[40] = z) : z = n[40];
		var j;
		n[41] !== S ? (j = function(t) {
			S && S();
		}, n[41] = S, n[42] = j) : j = n[42];
		var K;
		n[43] !== T || n[44] !== R ? (K = function(t) {
			T && T.sendInteractiveEvent(o("FBMapFunnelLoggerConstants").MAP_INTERACTIVE_EVENTS.ZOOM_MAP), R && R();
		}, n[43] = T, n[44] = R, n[45] = K) : K = n[45];
		var Q;
		n[46] !== L ? (Q = function(t, n) {
			L && L(n.originalEvent != null);
		}, n[46] = L, n[47] = Q) : Q = n[47];
		var X;
		n[48] !== V || n[49] !== H || n[50] !== G || n[51] !== z || n[52] !== j || n[53] !== K || n[54] !== Q ? (X = c.jsx(r("BaseMapLibreGLEventListener.react"), {
			onClick: V,
			onDoubleClick: H,
			onDragEnd: G,
			onDragStart: z,
			onMouseDown: j,
			onZoomEnd: K,
			onZoomStart: Q
		}), n[48] = V, n[49] = H, n[50] = G, n[51] = z, n[52] = j, n[53] = K, n[54] = Q, n[55] = X) : X = n[55];
		var Y;
		n[56] !== u || n[57] !== X || n[58] !== W || n[59] !== q || n[60] !== U ? (Y = c.jsxs(r("BaseMapLibreGLMap.react"), babelHelpers.extends({
			customAttribution: !0,
			mapStyle: W,
			onMapReady: q
		}, u, { children: [U, X] })), n[56] = u, n[57] = X, n[58] = W, n[59] = q, n[60] = U, n[61] = Y) : Y = n[61];
		var J;
		n[62] !== $ ? (J = {
			getCenter: function() {
				return $ ? [$.getBounds().getCenter().lng, $.getBounds().getCenter().lat] : null;
			},
			getZoom: function() {
				return $ == null ? void 0 : $.getZoom();
			}
		}, n[62] = $, n[63] = J) : J = n[63];
		var Z;
		n[64] !== l || n[65] !== J ? (Z = c.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: i.id,
			children: c.jsx(g, {
				infoButtonPosition: l,
				reportMapConfig: J
			})
		}), n[64] = l, n[65] = J, n[66] = Z) : Z = n[66];
		var ee;
		n[67] !== Y || n[68] !== Z ? (ee = c.jsxs("div", babelHelpers.extends({}, B, { children: [Y, Z] })), n[67] = Y, n[68] = Z, n[69] = ee) : ee = n[69];
		var te;
		return n[70] !== ee || n[71] !== O ? (te = c.jsx("div", {
			className: O,
			"data-testid": void 0,
			children: ee
		}), n[70] = ee, n[71] = O, n[72] = te) : te = n[72], te;
	}
	var y = c.memo(h);
	l.default = y;
}), 98);
