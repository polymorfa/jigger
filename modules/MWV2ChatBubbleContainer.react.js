__d("MWV2ChatBubbleContainer.react", [
	"MWChatBubbleEmphasisRing.react",
	"MWV2ChatBubble.react",
	"react",
	"react-compiler-runtime",
	"xmaLayouts"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"hasEmphasisRing",
		"message",
		"xmaLayout",
		"children"
	], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(16), a, i, l, s, c;
		n[0] !== t ? (s = t.hasEmphasisRing, i = t.message, c = t.xmaLayout, a = t.children, l = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5]);
		var d = s === void 0 ? !1 : s, m = c === void 0 ? o("xmaLayouts").XMA_LAYOUTS.DEFAULT : c, p;
		n[6] !== a || n[7] !== d || n[8] !== i || n[9] !== l || n[10] !== m ? (p = u.jsx(r("MWV2ChatBubble.react"), babelHelpers.extends({
			children: a,
			emphasized: d,
			message: i,
			xmaLayout: m
		}, l)), n[6] = a, n[7] = d, n[8] = i, n[9] = l, n[10] = m, n[11] = p) : p = n[11];
		var _ = p;
		if (d) {
			var f;
			return n[12] !== _ || n[13] !== i || n[14] !== l ? (f = u.jsx(r("MWChatBubbleEmphasisRing.react"), babelHelpers.extends({
				flattenTop: !1,
				message: i
			}, l, { children: _ })), n[12] = _, n[13] = i, n[14] = l, n[15] = f) : f = n[15], f;
		}
		return _;
	}
	l.default = c;
}), 98);
