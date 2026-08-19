__d("MWXPressable.react", [
	"CometPressable.react",
	"MessengerWebUXLogger",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"ref",
		"loggingEvent",
		"onPress",
		"overlayRadius"
	], s, u = s || (s = o("react")), c = s.useCallback;
	function d(e) {
		switch (e) {
			case "normal": return 8;
			case "compact": return 4;
			case "50%": return "50%";
			case "inherit":
			default: return;
		}
	}
	function m(t) {
		var n = o("react-compiler-runtime").c(17), a, i, l, s, c;
		n[0] !== t ? (i = t.ref, l = t.loggingEvent, s = t.onPress, c = t.overlayRadius, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5]);
		var m = r("MessengerWebUXLogger").useInteractionLogger(), p;
		n[6] !== m || n[7] !== l || n[8] !== s ? (p = function(t) {
			s == null || s(t), l && (m == null || m(l));
		}, n[6] = m, n[7] = l, n[8] = s, n[9] = p) : p = n[9];
		var _ = p, f;
		n[10] !== c ? (f = d(c), n[10] = c, n[11] = f) : f = n[11];
		var g;
		return n[12] !== a || n[13] !== i || n[14] !== _ || n[15] !== f ? (g = u.jsx(r("CometPressable.react"), babelHelpers.extends({
			onPress: _,
			overlayRadius: f
		}, a, { ref: i })), n[12] = a, n[13] = i, n[14] = _, n[15] = f, n[16] = g) : g = n[16], g;
	}
	l.default = m;
}), 98);
