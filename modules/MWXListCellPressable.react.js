__d("MWXListCellPressable.react", [
	"FDSListCellPressable.react",
	"MessengerWebUXLogger",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s = [
		"addOnBottom",
		"addOnEnd",
		"addOnStart",
		"content",
		"loggingEvent",
		"onPress",
		"paddingHorizontal",
		"size"
	], u, c = u || (u = o("react")), d = u.useCallback;
	function m(t) {
		var n = o("react-compiler-runtime").c(25), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l, u, d, m, p, _, f, g;
		if (n[3] !== a) {
			var h = a, y = h.addOnBottom, C = h.addOnEnd, b = h.addOnStart, v = h.content, S = h.loggingEvent, R = h.onPress, L = h.paddingHorizontal, E = h.size, k = babelHelpers.objectWithoutPropertiesLoose(h, s);
			l = y, u = C, d = b, m = v, p = S, _ = R, f = L, g = k, n[3] = a, n[4] = l, n[5] = u, n[6] = d, n[7] = m, n[8] = p, n[9] = _, n[10] = f, n[11] = g;
		} else l = n[4], u = n[5], d = n[6], m = n[7], p = n[8], _ = n[9], f = n[10], g = n[11];
		var I = r("MessengerWebUXLogger").useInteractionLogger(), T;
		n[12] !== I || n[13] !== p || n[14] !== _ ? (T = function(t) {
			_ == null || _(t), p && (I == null || I(p));
		}, n[12] = I, n[13] = p, n[14] = _, n[15] = T) : T = n[15];
		var D = T, x;
		return n[16] !== l || n[17] !== u || n[18] !== d || n[19] !== m || n[20] !== D || n[21] !== f || n[22] !== i || n[23] !== g ? (x = c.jsx(r("FDSListCellPressable.react"), babelHelpers.extends({
			addOnBottom: l,
			addOnEnd: u,
			addOnStart: d,
			addOnStartMarginTop: 0,
			content: m,
			onPress: D,
			overlayRadius: 8,
			paddingHorizontal: f,
			paddingVertical: 8,
			verticalAlign: "center"
		}, g, { ref: i })), n[16] = l, n[17] = u, n[18] = d, n[19] = m, n[20] = D, n[21] = f, n[22] = i, n[23] = g, n[24] = x) : x = n[24], x;
	}
	var p = m;
	l.default = p;
}), 98);
