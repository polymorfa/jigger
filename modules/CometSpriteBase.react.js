__d("CometSpriteBase.react", [
	"BaseImage.react",
	"CometPressable.react",
	"react",
	"react-compiler-runtime",
	"useMergeRefs",
	"xplatToDOMRef"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { innerSprite: {
		animationDelay: "x1uzojwf",
		animationFillMode: "x10e4vud",
		animationIterationCount: "xa4qsjk",
		animationPlayState: "xoj058f",
		animationTimingFunction: "x1nxgg22",
		insetInlineStart: "x1o0tod",
		left: null,
		right: null,
		position: "x10l6tqk",
		top: "x13vifvy",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(20), n = e.accessibilityCaption, a = e.animationStyle, i = e.containerRef, l = e.cursorEnabled, c = e.imgHeight, d = e.imgRef, m = e.imgWidth, p = e.linkProps, _ = e.onHoverIn, f = e.onPress, g = e.overlayEnabled, h = e.pressableRef, y = e.showFocusOverlay, C = e.showHoverOverlay, b = e.src, v = e.style, S = e.xstyle, R = r("useMergeRefs")(h, i), L = !l, E = !y, k = !C, I = !g, T;
		t[0] !== n || t[1] !== a || t[2] !== c || t[3] !== d || t[4] !== m || t[5] !== b ? (T = function(t) {
			var e = t.overlay;
			return s.jsxs(s.Fragment, { children: [s.jsx("div", {
				className: "x6ikm8r x10wlt62 x1n2onr6 x1pdlv7q x5yr21d xh8yej3",
				children: s.jsx(r("BaseImage.react"), {
					alt: n,
					draggable: !1,
					height: "100%",
					ref: d && o("xplatToDOMRef").xplatToDOMRef(d),
					src: b,
					style: babelHelpers.extends({
						height: c,
						width: m
					}, a == null ? void 0 : a(t)),
					width: "100%",
					xstyle: u.innerSprite
				})
			}), e] });
		}, t[0] = n, t[1] = a, t[2] = c, t[3] = d, t[4] = m, t[5] = b, t[6] = T) : T = t[6];
		var D;
		return t[7] !== n || t[8] !== p || t[9] !== R || t[10] !== _ || t[11] !== f || t[12] !== v || t[13] !== L || t[14] !== E || t[15] !== k || t[16] !== I || t[17] !== T || t[18] !== S ? (D = s.jsx(r("CometPressable.react"), {
			cursorDisabled: L,
			hideFocusOverlay: E,
			hideHoverOverlay: k,
			label: n,
			linkProps: p,
			onHoverIn: _,
			onPress: f,
			overlayDisabled: I,
			overlayRadius: 4,
			ref: R,
			style: v,
			xstyle: S,
			children: T
		}), t[7] = n, t[8] = p, t[9] = R, t[10] = _, t[11] = f, t[12] = v, t[13] = L, t[14] = E, t[15] = k, t[16] = I, t[17] = T, t[18] = S, t[19] = D) : D = t[19], D;
	}
	l.default = c;
}), 98);
