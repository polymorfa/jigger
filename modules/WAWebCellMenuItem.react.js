__d("WAWebCellMenuItem.react", [
	"WAWebCellV2.react",
	"WAWebMenuItem.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s = [
		"border",
		"children",
		"colorScheme",
		"detailLeft",
		"detailRight",
		"disabled",
		"forceActive",
		"isRefresh",
		"middleContainerXStyle",
		"onMouseEnter",
		"onMouseLeave",
		"optionId",
		"primary",
		"primaryRight",
		"secondary",
		"secondaryRight",
		"size",
		"textWrap"
	], u, c = u || (u = o("react"));
	function d(t) {
		var n = o("react-compiler-runtime").c(52), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l, u, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I;
		if (n[3] !== a) {
			var T = a;
			S = T.border, l = T.children, R = T.colorScheme, u = T.detailLeft, d = T.detailRight, m = T.disabled, p = T.forceActive, _ = T.isRefresh, g = T.middleContainerXStyle, h = T.onMouseEnter, y = T.onMouseLeave, C = T.optionId, b = T.primary, v = T.primaryRight, E = T.secondary, k = T.secondaryRight, L = T.size, I = T.textWrap, f = babelHelpers.objectWithoutPropertiesLoose(T, s), n[3] = a, n[4] = l, n[5] = u, n[6] = d, n[7] = m, n[8] = p, n[9] = _, n[10] = f, n[11] = g, n[12] = h, n[13] = y, n[14] = C, n[15] = b, n[16] = v, n[17] = S, n[18] = R, n[19] = L, n[20] = E, n[21] = k, n[22] = I;
		} else l = n[4], u = n[5], d = n[6], m = n[7], p = n[8], _ = n[9], f = n[10], g = n[11], h = n[12], y = n[13], C = n[14], b = n[15], v = n[16], S = n[17], R = n[18], L = n[19], E = n[20], k = n[21], I = n[22];
		var D = I === void 0 ? "ellipsis" : I, x = o("WAWebMenuItem.react").useMenuItem(C), $ = x.border, P = x.colorScheme, N = x.isActive, M = x.material, w = x.size, A = R != null ? R : P, F;
		if (b != null) {
			var O = D === "ellipsis" ? 1 : null, B;
			n[23] !== b || n[24] !== O ? (B = c.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				maxLines: O,
				children: b
			}), n[23] = b, n[24] = O, n[25] = B) : B = n[25], F = B;
		}
		var W;
		if (E != null) {
			var q = D === "ellipsis" ? 1 : null, U;
			n[26] !== E || n[27] !== q ? (U = c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				maxLines: q,
				children: E
			}), n[26] = E, n[27] = q, n[28] = U) : U = n[28], W = U;
		}
		var V = L != null ? L : w, H = p === !0 || N, G = S || $, z;
		n[29] !== u || n[30] !== d || n[31] !== m || n[32] !== A || n[33] !== _ || n[34] !== M || n[35] !== g || n[36] !== h || n[37] !== y || n[38] !== F || n[39] !== v || n[40] !== W || n[41] !== k || n[42] !== V || n[43] !== H || n[44] !== G ? (z = c.jsx(r("WAWebCellV2.react"), {
			middleContainerXStyle: g,
			onMouseEnter: h,
			onMouseLeave: y,
			size: V,
			colorScheme: A,
			material: M,
			disabled: m,
			primary: F,
			primaryRight: v,
			secondary: W,
			secondaryRight: k,
			detailLeft: u,
			detailRight: d,
			active: H,
			tabIndex: -1,
			border: G,
			isRefresh: _
		}), n[29] = u, n[30] = d, n[31] = m, n[32] = A, n[33] = _, n[34] = M, n[35] = g, n[36] = h, n[37] = y, n[38] = F, n[39] = v, n[40] = W, n[41] = k, n[42] = V, n[43] = H, n[44] = G, n[45] = z) : z = n[45];
		var j;
		return n[46] !== l || n[47] !== f || n[48] !== C || n[49] !== i || n[50] !== z ? (j = c.jsxs(o("WAWebMenuItem.react").WAWebMenuItem, babelHelpers.extends({
			optionId: C,
			type: "action"
		}, f, {
			ref: i,
			children: [z, l]
		})), n[46] = l, n[47] = f, n[48] = C, n[49] = i, n[50] = z, n[51] = j) : j = n[51], j;
	}
	l.CellV2MenuItem = d;
}), 98);
