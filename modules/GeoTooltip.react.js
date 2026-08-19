__d("GeoTooltip.react", [
	"GeoFbtUtils",
	"GeoPrivateHintContent.react",
	"GeoPrivateHintLayer.react",
	"GeoPrivateMakeComponent",
	"GeoTooltipText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"content",
		"groupName",
		"heading",
		"onToggle",
		"popoverType",
		"whiteSpace"
	], s, u = s || (s = o("react")), c = s, d = c.useRef, m = c.useState;
	function p(t) {
		var n = o("react-compiler-runtime").c(23), a, i, l, s, c, p, _;
		n[0] !== t ? (a = t.content, p = t.groupName, i = t.heading, l = t.onToggle, c = t.popoverType, _ = t.whiteSpace, s = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = p, n[7] = _) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], p = n[6], _ = n[7]);
		var f = p === void 0 ? "GeoTooltip" : p, g = d(null), h = m(!1), y = h[0], C = h[1], b = o("GeoFbtUtils").isFbt(a), v = i != null || !b, S;
		n[8] !== a || n[9] !== _ ? (S = a, o("GeoFbtUtils").isFbt(a) && (S = u.jsx(r("GeoTooltipText.react"), {
			children: a,
			whiteSpace: _
		})), n[8] = a, n[9] = _, n[10] = S) : S = n[10];
		var R;
		n[11] !== l ? (R = function(t) {
			if (l == null || l(t), t) {
				var e;
				C(!!((e = g.current) != null && e.querySelector("a")));
			}
		}, n[11] = l, n[12] = R) : R = n[12];
		var L = R, E;
		n[13] !== S || n[14] !== i ? (E = function(t) {
			return u.jsx(r("GeoPrivateHintContent.react"), babelHelpers.extends({}, t, {
				content: S,
				contentRef: g,
				heading: i
			}));
		}, n[13] = S, n[14] = i, n[15] = E) : E = n[15];
		var k = E, I = c != null ? c : v ? "infoTooltip" : "simpleTooltip", T;
		return n[16] !== k || n[17] !== f || n[18] !== y || n[19] !== L || n[20] !== s || n[21] !== I ? (T = u.jsx(r("GeoPrivateHintLayer.react"), babelHelpers.extends({}, s, {
			contentRenderer: k,
			groupName: f,
			isLayerHoverable: y,
			isSticky: !1,
			onToggle: L,
			popoverType: I
		})), n[16] = k, n[17] = f, n[18] = y, n[19] = L, n[20] = s, n[21] = I, n[22] = T) : T = n[22], T;
	}
	var _ = o("GeoPrivateMakeComponent").makeGeoComponent("GeoTooltip", p);
	l.default = _;
}), 98);
