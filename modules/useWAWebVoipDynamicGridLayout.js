__d("useWAWebVoipDynamicGridLayout", [
	"WAWebResizeObserver",
	"WAWebVoipGridLayoutCalculator",
	"WAWebVoipGroupCallGridConstants",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useLayoutEffect, d = s.useMemo, m = s.useState, p = 96, _ = 120, f = {
		width: 0,
		height: 0
	};
	function g(e, t) {
		return e <= 0 ? { gridTemplateColumns: "1fr" } : t ? { gridTemplateColumns: "repeat(" + e + ", 1fr)" } : e <= 2 ? { gridTemplateColumns: "repeat(" + e + ", 1fr)" } : e <= 4 ? { gridTemplateColumns: "repeat(2, 1fr)" } : e <= 6 ? { gridTemplateColumns: "repeat(3, 1fr)" } : e <= 9 ? { gridTemplateColumns: "repeat(3, 1fr)" } : { gridTemplateColumns: "repeat(4, 1fr)" };
	}
	function h(e, t, n, r, a, i) {
		var l = o("react-compiler-runtime").c(31), s = m(null), u = s[0], d = s[1], h = m(f), y = h[0], C = h[1], b;
		l[0] === Symbol.for("react.memo_cache_sentinel") ? (b = function(t) {
			d(t);
		}, l[0] = b) : b = l[0];
		var v = b, S, R;
		l[1] !== u || l[2] !== r || l[3] !== i ? (S = function() {
			if (u) {
				var e = function(t) {
					C({
						width: t.width,
						height: t.height
					});
				};
				if (r && i != null) {
					var t = i.ResizeObserver;
					if (t != null) {
						var n = new t(function(t) {
							for (var n of t) {
								var r = n.contentRect;
								e({
									x: r.x,
									y: r.y,
									width: r.width,
									height: r.height,
									top: r.top,
									left: r.left,
									bottom: r.bottom,
									right: r.right
								});
							}
						});
						return n.observe(u), (function() {
							n.disconnect();
						});
					}
				}
				return o("WAWebResizeObserver").observe(u, e);
			}
		}, R = [
			u,
			r,
			i
		], l[1] = u, l[2] = r, l[3] = i, l[4] = S, l[5] = R) : (S = l[4], R = l[5]), c(S, R);
		var L = y, E = !t, k;
		l[6] !== L.width || l[7] !== t ? (k = t ? o("WAWebVoipGroupCallGridConstants").getPaginationReservedWidth(L.width) : 0, l[6] = L.width, l[7] = t, l[8] = k) : k = l[8];
		var I = k, T = L.width > 0 ? L.width - (E ? 2 * o("WAWebVoipGridLayoutCalculator").GRID_PADDING_SINGLE_PX : 0) - I : 0, D = L.height > 0 ? L.height - o("WAWebVoipGridLayoutCalculator").GRID_PADDING_SINGLE_PX : 0, x = !n && (e > 1 || t) && T > 0 && D > 0, $;
		e: {
			if (!x) {
				$ = null;
				break e;
			}
			var P = t ? a : e, N;
			l[9] !== D || l[10] !== T || l[11] !== P ? (N = o("WAWebVoipGridLayoutCalculator").calculateOptimalGridLayout(T, D, P, o("WAWebVoipGridLayoutCalculator").GRID_GAP_PX), l[9] = D, l[10] = T, l[11] = P, l[12] = N) : N = l[12], $ = N;
		}
		var M = $;
		if (M != null) {
			var w = "repeat(" + M.columns + ", " + M.cellWidth + "px)", A = "repeat(" + M.rows + ", " + M.cellHeight + "px)", F;
			return l[13] !== M.cellWidth || l[14] !== M.columns || l[15] !== L.width || l[16] !== w || l[17] !== A ? (F = {
				dynamicCellWidth: M.cellWidth,
				dynamicColumns: M.columns,
				gridAlignItems: "stretch",
				gridJustifyContent: "center",
				gridMeasureRef: v,
				gridTemplateColumns: w,
				gridTemplateRows: A,
				isMeasured: !0,
				measuredWidth: L.width
			}, l[13] = M.cellWidth, l[14] = M.columns, l[15] = L.width, l[16] = w, l[17] = A, l[18] = F) : F = l[18], F;
		}
		if (n) {
			if (L.width > 0) {
				var O = L.width - 2 * o("WAWebVoipGridLayoutCalculator").GRID_PADDING_SINGLE_PX, B = Math.max(1, Math.floor((O + o("WAWebVoipGridLayoutCalculator").GRID_GAP_PX) / (p + o("WAWebVoipGridLayoutCalculator").GRID_GAP_PX))), W = e > B, q = W ? L.width - o("WAWebVoipGroupCallGridConstants").getPaginationReservedWidth(L.width) : O, U = Math.max(1, Math.floor((q + o("WAWebVoipGridLayoutCalculator").GRID_GAP_PX) / (p + o("WAWebVoipGridLayoutCalculator").GRID_GAP_PX))), V = Math.min(U, e), H = L.height > 0 ? L.height - o("WAWebVoipGridLayoutCalculator").GRID_PADDING_SINGLE_PX : 0, G = H > 0 ? Math.min(H, _) : p, z = "repeat(" + V + ", " + p + "px)", j = G + "px", K;
				return l[19] !== L.width || l[20] !== z || l[21] !== j || l[22] !== U ? (K = {
					dynamicCellWidth: p,
					dynamicColumns: U,
					gridAlignItems: "center",
					gridJustifyContent: "center",
					gridMeasureRef: v,
					gridTemplateColumns: z,
					gridTemplateRows: j,
					isMeasured: !0,
					measuredWidth: L.width
				}, l[19] = L.width, l[20] = z, l[21] = j, l[22] = U, l[23] = K) : K = l[23], K;
			}
			var Q = "repeat(" + Math.min(a, e) + ", 1fr)", X;
			return l[24] !== Q ? (X = {
				dynamicCellWidth: 0,
				dynamicColumns: 0,
				gridAlignItems: "center",
				gridJustifyContent: "center",
				gridMeasureRef: v,
				gridTemplateColumns: Q,
				gridTemplateRows: "1fr",
				isMeasured: !1,
				measuredWidth: 0
			}, l[24] = Q, l[25] = X) : X = l[25], X;
		}
		var Y;
		l[26] !== e || l[27] !== n ? (Y = g(e, n), l[26] = e, l[27] = n, l[28] = Y) : Y = l[28];
		var J = Y, Z;
		return l[29] !== J.gridTemplateColumns ? (Z = {
			dynamicCellWidth: 0,
			dynamicColumns: 0,
			gridAlignItems: "center",
			gridJustifyContent: void 0,
			gridMeasureRef: v,
			gridTemplateColumns: J.gridTemplateColumns,
			gridTemplateRows: void 0,
			isMeasured: !1,
			measuredWidth: 0
		}, l[29] = J.gridTemplateColumns, l[30] = Z) : Z = l[30], Z;
	}
	l.default = h;
}), 98);
