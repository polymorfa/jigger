__d("GeoDropdownMenu.react", [
	"fbt",
	"GeoBaseDropdownMenu.react",
	"GeoBaseDropdownMenuContext",
	"GeoButton.react",
	"GeoDropdownButton.react",
	"GeoEllipsisButton.react",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = [
		"buttonVariant",
		"isChevronHidden",
		"label",
		"useEllipsisIcon",
		"aria-describedby",
		"aria-expanded",
		"data-testid",
		"disabledMessage",
		"download",
		"grow",
		"hasAnimation",
		"hasShadowPulseAnimation",
		"href",
		"icon",
		"id",
		"isDisabled",
		"isLabelHidden",
		"isLoading",
		"onClick",
		"onFocus",
		"onHoverEnd",
		"onHoverMove",
		"onHoverStart",
		"rel",
		"target",
		"tooltip",
		"xstyle"
	], u = [
		"popupMenuID",
		"ref",
		"toggle"
	], c, d = c || (c = o("react")), m = c, p = m.useContext, _ = m.useMemo, f = s._(
		/*BTDS*/
		""
	);
	function g(t) {
		var n = o("react-compiler-runtime").c(67), a, i, l, s, c, m, _, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A;
		n[0] !== t ? (s = t.buttonVariant, P = t.isChevronHidden, N = t.label, M = t.useEllipsisIcon, a = t["aria-describedby"], i = t["aria-expanded"], m = t["data-testid"], _ = t.disabledMessage, g = t.download, h = t.grow, y = t.hasAnimation, C = t.hasShadowPulseAnimation, b = t.href, v = t.icon, l = t.id, S = t.isDisabled, R = t.isLabelHidden, L = t.isLoading, E = t.onClick, k = t.onFocus, I = t.onHoverEnd, T = t.onHoverMove, D = t.onHoverStart, $ = t.rel, w = t.target, A = t.tooltip, c = t.xstyle, x = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = m, n[7] = _, n[8] = g, n[9] = h, n[10] = y, n[11] = C, n[12] = b, n[13] = v, n[14] = S, n[15] = R, n[16] = L, n[17] = E, n[18] = k, n[19] = I, n[20] = T, n[21] = D, n[22] = x, n[23] = $, n[24] = P, n[25] = N, n[26] = M, n[27] = w, n[28] = A) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], m = n[6], _ = n[7], g = n[8], h = n[9], y = n[10], C = n[11], b = n[12], v = n[13], S = n[14], R = n[15], L = n[16], E = n[17], k = n[18], I = n[19], T = n[20], D = n[21], x = n[22], $ = n[23], P = n[24], N = n[25], M = n[26], w = n[27], A = n[28]);
		var F = P === void 0 ? !1 : P, O = N === void 0 ? f : N, B = M === void 0 ? !1 : M, W = p(r("GeoBaseDropdownMenuContext")), q = W.isDisabled, U = W.isLabelHidden, V = W.variant, H = q != null ? q : S, G = U != null ? U : R, z;
		n[29] !== s || n[30] !== V ? (z = s, V != null && (V === "special" ? z = "creation" : V === "flatWhite" ? z = "flat" : z = V), n[29] = s, n[30] = V, n[31] = z) : z = n[31];
		var j = !G, K = !!v, Q;
		n[32] !== a || n[33] !== i || n[34] !== l || n[35] !== c || n[36] !== m || n[37] !== _ || n[38] !== g || n[39] !== h || n[40] !== y || n[41] !== C || n[42] !== b || n[43] !== L || n[44] !== E || n[45] !== k || n[46] !== I || n[47] !== T || n[48] !== D || n[49] !== $ || n[50] !== w || n[51] !== A ? (Q = {
			"aria-describedby": a,
			"aria-expanded": i,
			"aria-haspopup": "menu",
			"data-testid": m,
			disabledMessage: _,
			download: g,
			grow: h,
			hasAnimation: y,
			hasShadowPulseAnimation: C,
			href: b,
			id: l,
			isLoading: L,
			onClick: E,
			onFocus: k,
			onHoverStart: D,
			onHoverEnd: I,
			onHoverMove: T,
			rel: $,
			target: w,
			tooltip: A,
			xstyle: c
		}, n[32] = a, n[33] = i, n[34] = l, n[35] = c, n[36] = m, n[37] = _, n[38] = g, n[39] = h, n[40] = y, n[41] = C, n[42] = b, n[43] = L, n[44] = E, n[45] = k, n[46] = I, n[47] = T, n[48] = D, n[49] = $, n[50] = w, n[51] = A, n[52] = Q) : Q = n[52];
		var X = Q, Y;
		n[53] !== X || n[54] !== K || n[55] !== v || n[56] !== F || n[57] !== H || n[58] !== G || n[59] !== O || n[60] !== j || n[61] !== B || n[62] !== z ? (Y = function(t) {
			var e = t.popupMenuID, n = t.ref, o = t.toggle, a = babelHelpers.objectWithoutPropertiesLoose(t, u);
			return B ? d.jsx(r("GeoEllipsisButton.react"), babelHelpers.extends({
				"aria-controls": e,
				containerRef: n
			}, X, {
				isDisabled: H,
				label: O,
				onClick: o,
				variant: z
			}, a)) : F && (j || K) ? d.jsx(r("GeoButton.react"), babelHelpers.extends({
				"aria-controls": e,
				containerRef: n
			}, X, {
				icon: v,
				isDisabled: H,
				isLabelHidden: G,
				label: O,
				onClick: o,
				variant: z
			}, a)) : d.jsx(r("GeoDropdownButton.react"), babelHelpers.extends({
				"aria-controls": e,
				containerRef: n
			}, X, {
				icon: v,
				isDisabled: H,
				isLabelHidden: G,
				label: O,
				onClick: o,
				variant: z
			}, a));
		}, n[53] = X, n[54] = K, n[55] = v, n[56] = F, n[57] = H, n[58] = G, n[59] = O, n[60] = j, n[61] = B, n[62] = z, n[63] = Y) : Y = n[63];
		var J = Y, Z;
		return n[64] !== x || n[65] !== J ? (Z = d.jsx(r("GeoBaseDropdownMenu.react"), babelHelpers.extends({}, x, { triggerRenderer: J })), n[64] = x, n[65] = J, n[66] = Z) : Z = n[66], Z;
	}
	var h = o("GeoPrivateMakeComponent").makeGeoComponent("GeoDropdownMenu", g);
	l.default = h;
}), 226);
