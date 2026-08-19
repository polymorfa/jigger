__d("WAWebMediaEditorToolbarFilterOption.react", [
	"ReactKonva",
	"WAWebFlex.react",
	"WAWebMediaEditorUtilsFilters",
	"WDSIconIcCheck.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["composition", "overlay"], s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useState, p = { checkmarkIconStyle: {
		position: "x10l6tqk",
		color: "x1awj2ng",
		opacity: "x1hc1fzr",
		zIndex: "xhtitgo",
		$$css: !0
	} };
	function _(t) {
		var n = o("react-compiler-runtime").c(54), a = t.filter, i = t.imageUrl, l = t.onFilterChange, s = t.onHover, c = t.selected, _;
		n[0] !== c ? (_ = {
			0: "x1nxh6w3 x1v9usgg x1u78mur x2b8uid x1vvkbs x1mzt3pk x1tiyuxx",
			1: "x1nxh6w3 x1v9usgg x1u78mur x2b8uid x1vvkbs x1mzt3pk x1tiyuxx x1fh42yi"
		}[!!c << 0], n[0] = c, n[1] = _) : _ = n[1];
		var f = _, g, h;
		n[2] !== a ? (g = o("WAWebMediaEditorUtilsFilters").getFilterValue(a), h = g.toString(), n[2] = a, n[3] = g, n[4] = h) : (g = n[3], h = n[4]);
		var y = h + " filter", C = m(null), b = C[0], v = C[1], S, R;
		n[5] !== i || n[6] !== b ? (S = function() {
			i && (b == null || b.cache());
		}, R = [i, b], n[5] = i, n[6] = b, n[7] = S, n[8] = R) : (S = n[7], R = n[8]), d(S, R);
		var L;
		n[9] !== a || n[10] !== l ? (L = function() {
			return l(a);
		}, n[9] = a, n[10] = l, n[11] = L) : L = n[11];
		var E = L, k;
		n[12] !== a || n[13] !== s ? (k = function() {
			return s(a);
		}, n[12] = a, n[13] = s, n[14] = k) : k = n[14];
		var I = k, T;
		n[15] !== s ? (T = function() {
			return s(null);
		}, n[15] = s, n[16] = T) : T = n[16];
		var D = T, x;
		n[17] !== a ? (x = o("WAWebMediaEditorUtilsFilters").getKonvaFilters(a), n[17] = a, n[18] = x) : x = n[18];
		var $ = x, P;
		n[19] !== a ? (P = o("WAWebMediaEditorUtilsFilters").getFilterPresets(a), n[19] = a, n[20] = P) : P = n[20];
		var N, M, w;
		if (n[21] !== P) {
			var A = P;
			N = A.composition, w = A.overlay, M = babelHelpers.objectWithoutPropertiesLoose(A, e), n[21] = P, n[22] = N, n[23] = M, n[24] = w;
		} else N = n[22], M = n[23], w = n[24];
		var F = String(a), O;
		n[25] !== F ? (O = F.toLowerCase(), n[25] = F, n[26] = O) : O = n[26];
		var B = "filter-option-" + O, W;
		n[27] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "x1n2onr6 x1247r65 x1mgsydn x78zum5 xdt5ytf x6s0dn4" }, n[27] = W) : W = n[27];
		var q;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (q = { className: "x1n2onr6 x1useyqa xsdox4t xbrszos xea3l6g x18isctg x2q3nzr x6ikm8r x10wlt62 x1277o0a x14snt5h x18br7mf" }, n[28] = q) : q = n[28];
		var U;
		n[29] !== N || n[30] !== M || n[31] !== i || n[32] !== $ || n[33] !== w ? (U = i && u.jsxs(o("ReactKonva").Group, { children: [u.jsx(o("ReactKonva").Image, babelHelpers.extends({
			ref: v,
			image: i,
			width: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
			height: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
			crop: {
				x: Math.max((i.width - i.height) / 2, 0),
				y: Math.max((i.height - i.width) / 2, 0),
				width: Math.min(i.width, i.height),
				height: Math.min(i.width, i.height)
			},
			filters: $
		}, M)), u.jsx(o("ReactKonva").Rect, {
			width: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
			height: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
			fill: w,
			globalCompositeOperation: N
		})] }), n[29] = N, n[30] = M, n[31] = i, n[32] = $, n[33] = w, n[34] = U) : U = n[34];
		var V;
		n[35] !== U ? (V = u.jsx(o("ReactKonva").Stage, {
			width: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
			height: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
			children: u.jsx(o("ReactKonva").Layer, { children: U })
		}), n[35] = U, n[36] = V) : V = n[36];
		var H;
		n[37] !== c ? (H = c && u.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1jxbiih x18km98s xbrszos xea3l6g x18isctg x2q3nzr x78zum5 x6s0dn4 xl56j7k x1vjfegm",
			children: u.jsx(r("WDSIconIcCheck.react"), { xstyle: p.checkmarkIconStyle })
		}), n[37] = c, n[38] = H) : H = n[38];
		var G;
		n[39] !== V || n[40] !== H ? (G = u.jsxs("div", babelHelpers.extends({}, q, { children: [V, H] })), n[39] = V, n[40] = H, n[41] = G) : G = n[41];
		var z;
		n[42] !== g || n[43] !== f ? (z = u.jsx("span", {
			className: f,
			children: g
		}), n[42] = g, n[43] = f, n[44] = z) : z = n[44];
		var j;
		return n[45] !== y || n[46] !== E || n[47] !== D || n[48] !== I || n[49] !== c || n[50] !== B || n[51] !== G || n[52] !== z ? (j = u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsxs("div", babelHelpers.extends({ "data-testid": B }, W, {
			onClick: E,
			onKeyPress: E,
			onTouchStart: E,
			role: "button",
			tabIndex: 0,
			"aria-label": y,
			"aria-pressed": c,
			onMouseOver: I,
			onMouseLeave: D,
			onFocus: I,
			onBlur: D,
			children: [G, z]
		})) }), n[45] = y, n[46] = E, n[47] = D, n[48] = I, n[49] = c, n[50] = B, n[51] = G, n[52] = z, n[53] = j) : j = n[53], j;
	}
	l.default = _;
}), 98);
