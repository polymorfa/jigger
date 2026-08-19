__d("GeoAccordionList.react", [
	"GeoAccordionListContext",
	"GeoPrivateBaseList.react",
	"GeoPrivateListLayoutContext",
	"GeoPrivateMakeComponent",
	"GeoSelectionContext",
	"areEqual",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"children",
		"data-testid",
		"itemRef",
		"selectedIds",
		"selectionType",
		"variant",
		"xstyle"
	], s, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useImperativeHandle, _ = d.useMemo, f = d.useState, g = [];
	function h(t) {
		var n = o("react-compiler-runtime").c(38), a, i, l, u, d, m, _, h;
		n[0] !== t ? (a = t.children, _ = t["data-testid"], i = t.itemRef, u = t.selectedIds, d = t.selectionType, m = t.variant, h = t.xstyle, l = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = u, n[5] = d, n[6] = m, n[7] = _, n[8] = h) : (a = n[1], i = n[2], l = n[3], u = n[4], d = n[5], m = n[6], _ = n[7], h = n[8]);
		var C = u === void 0 ? g : u, b = d === void 0 ? "multi" : d, v = m === void 0 ? "default" : m, S;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (S = [], n[9] = S) : S = n[9];
		var R = f(S), L = R[0], E = R[1], k = f(C), I = k[0], T = k[1], D = b === "single", x;
		n[10] !== D ? (x = function(t) {
			return T(function(e) {
				return D ? [t] : e.some(function(e) {
					return (s || (s = r("areEqual")))(e, t);
				}) ? e : e.concat([t]);
			});
		}, n[10] = D, n[11] = x) : x = n[11];
		var $;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? ($ = function(t) {
			return E(function(e) {
				return e.some(function(e) {
					return (s || (s = r("areEqual")))(e, t);
				}) ? e : e.concat([t]);
			});
		}, n[12] = $) : $ = n[12];
		var P;
		n[13] !== x || n[14] !== v ? (P = {
			onInitiallySelected: x,
			registerItem: $,
			variant: v
		}, n[13] = x, n[14] = v, n[15] = P) : P = n[15];
		var N = P, M;
		n[16] !== I || n[17] !== D ? (M = {
			isSingleSelection: D,
			value: I,
			onSelect: T
		}, n[16] = I, n[17] = D, n[18] = M) : M = n[18];
		var w = M, A;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (A = function() {
			T([]);
		}, n[19] = A) : A = n[19];
		var F = A, O;
		n[20] !== L ? (O = function() {
			T(L);
		}, n[20] = L, n[21] = O) : O = n[21];
		var B = O, W, q;
		n[22] !== B || n[23] !== I ? (W = function() {
			return {
				collapseAll: F,
				expandAll: B,
				expandableItems: I
			};
		}, q = [
			F,
			B,
			I
		], n[22] = B, n[23] = I, n[24] = W, n[25] = q) : (W = n[24], q = n[25]), p(i, W, q);
		var U = v !== "divided", V;
		n[26] !== a || n[27] !== l || n[28] !== U || n[29] !== _ || n[30] !== h ? (V = c.jsx(r("GeoPrivateBaseList.react"), babelHelpers.extends({}, l, {
			"data-testid": void 0,
			shouldSpaceRows: U,
			xstyle: h,
			children: a
		})), n[26] = a, n[27] = l, n[28] = U, n[29] = _, n[30] = h, n[31] = V) : V = n[31];
		var H;
		n[32] !== w || n[33] !== V ? (H = c.jsx(r("GeoSelectionContext").Provider, {
			value: w,
			children: V
		}), n[32] = w, n[33] = V, n[34] = H) : H = n[34];
		var G;
		return n[35] !== N || n[36] !== H ? (G = c.jsx(r("GeoPrivateListLayoutContext").Provider, {
			value: y,
			children: c.jsx(r("GeoAccordionListContext").Provider, {
				value: N,
				children: H
			})
		}), n[35] = N, n[36] = H, n[37] = G) : G = n[37], G;
	}
	function y(e) {
		var t = e.isFirst;
		return { isFirst: t };
	}
	var C = o("GeoPrivateMakeComponent").makeGeoComponent("GeoAccordionList", h);
	l.default = C;
}), 98);
