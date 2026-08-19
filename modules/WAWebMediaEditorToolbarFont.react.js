__d("WAWebMediaEditorToolbarFont.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebMediaEditorEnumsFonts",
	"WAWebMediaEditorToolbarButton.react",
	"WAWebMediaEditorToolbarFontDropdown.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebVelocityTransitionGroup",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useImperativeHandle, p = d.useRef, _ = d.useState, f = { icon: {
		width: "xw4jnvo",
		height: "x1qx5ct2",
		fontSize: "x1nxh6w3",
		color: "x1r3oa16",
		textAlign: "x2b8uid",
		backgroundColor: "x1518k6t",
		borderStartStartRadius: "x1c9tyrk",
		borderStartEndRadius: "xeusxvb",
		borderEndEndRadius: "x1pahc9y",
		borderEndStartRadius: "x1ertn4p",
		$$css: !0
	} };
	function g(t) {
		var n = o("react-compiler-runtime").c(41), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.fonts, d = l.onAlignmentSelect, g = l.onFontSelect, h = l.selectedAlignment, y = l.selectedFont, C = p(null), b = _(null), v = b[0], S = b[1], R;
		n[3] !== v || n[4] !== u || n[5] !== d || n[6] !== g || n[7] !== h || n[8] !== y ? (R = function(t) {
			if (!v && C.current) {
				var e = c.jsx(r("WAWebMediaEditorToolbarFontDropdown.react"), {
					fonts: u,
					selectedFont: y,
					selectedAlignment: h,
					showAlignmentOptions: !0,
					onFontSelect: g,
					onAlignmentSelect: d
				});
				S({
					menu: e,
					anchor: C.current
				});
			}
		}, n[3] = v, n[4] = u, n[5] = d, n[6] = g, n[7] = h, n[8] = y, n[9] = R) : R = n[9];
		var L = R, E;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			S(null);
		}, n[10] = E) : E = n[10];
		var k = E, I;
		n[11] !== v ? (I = function() {
			return !!v;
		}, n[11] = v, n[12] = I) : I = n[12];
		var T = I, D;
		n[13] !== T ? (D = function() {
			return { isMenuVisible: T };
		}, n[13] = T, n[14] = D) : D = n[14], m(i, D);
		var x = !!v, $;
		if (v) {
			var P;
			n[15] !== v ? (P = c.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "MediaEditorFontDropdown",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: k,
				children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: v })
			}), n[15] = v, n[16] = P) : P = n[16], $ = P;
		}
		var N;
		n[17] !== y ? (N = o("WAWebMediaEditorEnumsFonts").getFontStyle(y), n[17] = y, n[18] = N) : N = n[18];
		var M;
		n[19] !== N ? (M = babelHelpers.extends({}, N), n[19] = N, n[20] = M) : M = n[20];
		var w;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (w = c.jsx("div", {
			"aria-hidden": "true",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[21] = w) : w = n[21];
		var A;
		n[22] !== M ? (A = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: f.icon,
			style: M,
			justify: "center",
			align: "center",
			children: w
		}), n[22] = M, n[23] = A) : A = n[23];
		var F = A, O = x ? "down" : "up", B;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "x1gabggj" }, n[24] = B) : B = n[24];
		var W;
		n[25] !== y ? (W = o("WAWebMediaEditorEnumsFonts").getFontTranslation(y), n[25] = y, n[26] = W) : W = n[26];
		var q;
		n[27] !== W ? (q = c.jsx("span", babelHelpers.extends({}, B, { children: W })), n[27] = W, n[28] = q) : q = n[28];
		var U;
		n[29] !== x || n[30] !== L || n[31] !== F || n[32] !== q || n[33] !== O ? (U = c.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
			onClick: L,
			icon: F,
			selected: x,
			caret: O,
			children: q
		}), n[29] = x, n[30] = L, n[31] = F, n[32] = q, n[33] = O, n[34] = U) : U = n[34];
		var V = U, H;
		n[35] === Symbol.for("react.memo_cache_sentinel") ? (H = { className: "x1n2onr6 x2lah0s" }, n[35] = H) : H = n[35];
		var G;
		n[36] !== $ ? (G = c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "dropdown",
			children: $
		}), n[36] = $, n[37] = G) : G = n[37];
		var z;
		return n[38] !== V || n[39] !== G ? (z = c.jsxs("div", babelHelpers.extends({ ref: C }, H, { children: [V, G] })), n[38] = V, n[39] = G, n[40] = z) : z = n[40], z;
	}
	var h = g;
	l.Font = h;
}), 226);
