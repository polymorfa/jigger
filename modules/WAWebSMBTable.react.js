__d("WAWebSMBTable.react", [
	"CometVirtualization.react",
	"VirtualizationContainerContext",
	"WAWebFlex.react",
	"WAWebSpinner.react",
	"WDSFocusStateStyles",
	"WDSText.react",
	"justknobx",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState, g = {
		hasScrollAnchoring: !0,
		isVisible: !0,
		nodeHeight: null
	}, h = {
		cell: {
			boxSizing: "x9f619",
			minWidth: "xeuugli",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		},
		clickableRow: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			cursor: "x1ypdohk",
			display: "x78zum5",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			width: "xh8yej3",
			":hover_backgroundColor": "x1n67ipk",
			$$css: !0
		},
		headerCells: {
			height: "xn3w4p2",
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		headerCellsHoverable: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			":hover_backgroundColor": "x1n67ipk",
			$$css: !0
		},
		headerRow: {
			backgroundColor: "x1c7u0tx",
			boxSizing: "x9f619",
			flexShrink: "x2lah0s",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			position: "x7wzq59",
			top: "x13vifvy",
			width: "xh8yej3",
			zIndex: "xzkaem6",
			$$css: !0
		},
		nonClickableRow: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		rowBase: {
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			flexShrink: "x2lah0s",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			width: "xh8yej3",
			$$css: !0
		},
		rowContent: {
			width: "xh8yej3",
			$$css: !0
		},
		selectedRow: {
			backgroundColor: "x1h3rtpe",
			$$css: !0
		},
		stickyEndCell: {
			backgroundColor: "x1280gxy",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			position: "x7wzq59",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		stickyEndCellEmphasized: {
			backgroundColor: "x1h3rtpe",
			$$css: !0
		},
		stickyEndHeader: {
			backgroundColor: "x1c7u0tx",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			position: "x7wzq59",
			zIndex: "xhtitgo",
			$$css: !0
		},
		stickyStartCell: {
			backgroundColor: "x1280gxy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			position: "x7wzq59",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		stickyStartCellEmphasized: {
			backgroundColor: "x1h3rtpe",
			$$css: !0
		},
		stickyStartHeader: {
			backgroundColor: "x1c7u0tx",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			position: "x7wzq59",
			zIndex: "xhtitgo",
			$$css: !0
		},
		table: {
			width: "xh8yej3",
			$$css: !0
		},
		virtualizationWrapper: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function y(e) {
		var t, n, r = {};
		return e.type === "pixel" ? (r.width = e.px + "px", r.flexShrink = 0) : e.type === "proportional" ? r.flex = e.value + " 0 0%" : e.type === "fill" && (r.flex = "1 1 0%"), ((t = e.options) == null ? void 0 : t.minWidth) != null && (r.minWidth = e.options.minWidth), ((n = e.options) == null ? void 0 : n.maxWidth) != null && (r.maxWidth = e.options.maxWidth), r;
	}
	function C(t) {
		var n = o("react-compiler-runtime").c(40), a = t.columns, i = t.getItemKey, l = t.item, s = t.onRowClick, c = t.renderRow, d = t.rowIndex, m = t.selectedKey, p = t.totalItems, _ = f(!1), g = _[0], C = _[1], b;
		n[0] !== i || n[1] !== l || n[2] !== d ? (b = i(l, d), n[0] = i, n[1] = l, n[2] = d, n[3] = b) : b = n[3];
		var v = b, S = s != null && m != null && v === m, R = g || S, L = d === 0, E = d === p - 1, k;
		if (n[4] !== a || n[5] !== g || n[6] !== R || n[7] !== l || n[8] !== d || n[9] !== L || n[10] !== E) {
			var I = {
				isFirstRow: L,
				isLastRow: E,
				isRowHovered: g,
				item: l,
				rowIndex: d
			};
			k = a.map(function(e) {
				return u.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: [
						h.cell,
						e.stickyEnd === !0 && h.stickyEndCell,
						e.stickyEnd === !0 && R && h.stickyEndCellEmphasized,
						e.stickyStart === !0 && h.stickyStartCell,
						e.stickyStart === !0 && R && h.stickyStartCellEmphasized
					],
					style: y(e.width),
					children: e.cell != null ? e.cell(I) : null
				}, e.key);
			}), n[4] = a, n[5] = g, n[6] = R, n[7] = l, n[8] = d, n[9] = L, n[10] = E, n[11] = k;
		} else k = n[11];
		var T;
		n[12] !== k ? (T = u.jsx(u.Fragment, { children: k }), n[12] = k, n[13] = T) : T = n[13];
		var D = T;
		if (c != null) {
			var x;
			n[14] !== D || n[15] !== l || n[16] !== c || n[17] !== d ? (x = c(l, D, d), n[14] = D, n[15] = l, n[16] = c, n[17] = d, n[18] = x) : x = n[18];
			var $;
			return n[19] !== x ? ($ = u.jsx(o("WAWebFlex.react").FlexRow, { children: x }), n[19] = x, n[20] = $) : $ = n[20], $;
		}
		if (s != null) {
			var P;
			n[21] !== S ? (P = (e || (e = r("stylex"))).props(h.clickableRow, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, S && h.selectedRow), n[21] = S, n[22] = P) : P = n[22];
			var N, M;
			n[23] !== l || n[24] !== s || n[25] !== d ? (N = function() {
				return s(l, d);
			}, M = function(t) {
				(t.key === "Enter" || t.key === " ") && (t.preventDefault(), s(l, d));
			}, n[23] = l, n[24] = s, n[25] = d, n[26] = N, n[27] = M) : (N = n[26], M = n[27]);
			var w, A;
			n[28] === Symbol.for("react.memo_cache_sentinel") ? (A = function() {
				return C(!0);
			}, w = function() {
				return C(!1);
			}, n[28] = w, n[29] = A) : (w = n[28], A = n[29]);
			var F;
			n[30] !== D ? (F = u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: h.rowContent,
				children: D
			}), n[30] = D, n[31] = F) : F = n[31];
			var O;
			return n[32] !== F || n[33] !== P || n[34] !== N || n[35] !== M ? (O = u.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: h.rowBase,
				children: u.jsx("div", babelHelpers.extends({
					role: "button",
					tabIndex: 0
				}, P, {
					onClick: N,
					onKeyDown: M,
					onMouseEnter: A,
					onMouseLeave: w,
					children: F
				}))
			}), n[32] = F, n[33] = P, n[34] = N, n[35] = M, n[36] = O) : O = n[36], O;
		}
		var B;
		n[37] === Symbol.for("react.memo_cache_sentinel") ? (B = [h.rowBase, h.nonClickableRow], n[37] = B) : B = n[37];
		var W;
		return n[38] !== D ? (W = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: B,
			children: D
		}), n[38] = D, n[39] = W) : W = n[39], W;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, a = e.enabled, i = e.fasterSizeMeasurement;
		if (!a) return n;
		var l;
		return t[0] !== n || t[1] !== i ? (l = u.jsx(r("CometVirtualization.react"), {
			fasterSizeMeasurement: i,
			hiddenMode: "none",
			initialRenderConfig: g,
			pinChildrenOnInteraction: !1,
			unmountHiddenChildren: !0,
			xstyle: h.virtualizationWrapper,
			children: n
		}), t[0] = n, t[1] = i, t[2] = l) : l = t[2], l;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(54), n = e.columns, a = e.getItemKey, i = e.hasMore, l = e.isLoadingMore, s = e.items, c = e.onLoadMore, d = e.onRowClick, p = e.pinnedItems, f = e.renderRow, g = e.scrollContainerRef, y = e.selectedKey, v = _(null), R;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (R = r("justknobx")._("1482"), t[0] = R) : R = t[0];
		var L = R, E;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (E = r("justknobx")._("1487"), t[1] = E) : E = t[1];
		var k = E, I;
		t[2] !== g ? (I = g != null ? { rootElementRef: g } : null, t[2] = g, t[3] = I) : I = t[3];
		var T = I, D;
		t[4] !== i || t[5] !== l || t[6] !== c ? (D = function(t) {
			var e, n = t[0], r = (e = n.isIntersecting) != null ? e : n.intersectionRatio > 0;
			r && i === !0 && l !== !0 && (c == null || c());
		}, t[4] = i, t[5] = l, t[6] = c, t[7] = D) : D = t[7];
		var x = D, $, P;
		t[8] !== x || t[9] !== c || t[10] !== g ? ($ = function() {
			var e, t = v.current;
			if (!(t == null || c == null)) {
				var n = new IntersectionObserver(x, {
					root: (e = g == null ? void 0 : g.current) != null ? e : null,
					rootMargin: "100px"
				});
				return n.observe(t), (function() {
					n.disconnect();
				});
			}
		}, P = [
			x,
			c,
			g
		], t[8] = x, t[9] = c, t[10] = g, t[11] = $, t[12] = P) : ($ = t[11], P = t[12]), m($, P);
		var N;
		t[13] !== n ? (N = n.map(S), t[13] = n, t[14] = N) : N = t[14];
		var M;
		t[15] !== N ? (M = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: h.headerRow,
			children: N
		}), t[15] = N, t[16] = M) : M = t[16];
		var w;
		t[17] !== n || t[18] !== a || t[19] !== s.length || t[20] !== d || t[21] !== p || t[22] !== f || t[23] !== y ? (w = p != null && p.map(function(e, t) {
			var r;
			return u.jsx(C, {
				columns: n,
				getItemKey: a,
				item: e,
				onRowClick: d,
				renderRow: f,
				rowIndex: t,
				selectedKey: y,
				totalItems: ((r = p == null ? void 0 : p.length) != null ? r : 0) + s.length
			}, a(e, t));
		}), t[17] = n, t[18] = a, t[19] = s.length, t[20] = d, t[21] = p, t[22] = f, t[23] = y, t[24] = w) : w = t[24];
		var A;
		if (t[25] !== n || t[26] !== a || t[27] !== s || t[28] !== d || t[29] !== (p == null ? void 0 : p.length) || t[30] !== f || t[31] !== y) {
			var F;
			t[33] !== n || t[34] !== a || t[35] !== s.length || t[36] !== d || t[37] !== (p == null ? void 0 : p.length) || t[38] !== f || t[39] !== y ? (F = function(t, r) {
				var e, o = (e = p == null ? void 0 : p.length) != null ? e : 0, i = r + o, l = o + s.length;
				return u.jsx(b, {
					enabled: L,
					fasterSizeMeasurement: k,
					children: u.jsx(C, {
						columns: n,
						getItemKey: a,
						item: t,
						onRowClick: d,
						renderRow: f,
						rowIndex: i,
						selectedKey: y,
						totalItems: l
					})
				}, a(t, i));
			}, t[33] = n, t[34] = a, t[35] = s.length, t[36] = d, t[37] = p == null ? void 0 : p.length, t[38] = f, t[39] = y, t[40] = F) : F = t[40], A = s.map(F), t[25] = n, t[26] = a, t[27] = s, t[28] = d, t[29] = p == null ? void 0 : p.length, t[30] = f, t[31] = y, t[32] = A;
		} else A = t[32];
		var O;
		t[41] !== l ? (O = l === !0 && u.jsx("div", {
			className: "x6s0dn4 x78zum5 xl56j7k x1p57kb1 xvpt6g3 xh8yej3",
			children: u.jsx(o("WAWebSpinner.react").Spinner, { size: 24 })
		}), t[41] = l, t[42] = O) : O = t[42];
		var B;
		t[43] !== i ? (B = i === !0 && u.jsx("div", {
			ref: v,
			className: "xjm9jq1"
		}), t[43] = i, t[44] = B) : B = t[44];
		var W;
		t[45] !== A || t[46] !== O || t[47] !== B || t[48] !== M || t[49] !== w ? (W = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: h.table,
			children: [
				M,
				w,
				A,
				O,
				B
			]
		}), t[45] = A, t[46] = O, t[47] = B, t[48] = M, t[49] = w, t[50] = W) : W = t[50];
		var q = W;
		if (T == null) return q;
		var U;
		return t[51] !== T || t[52] !== q ? (U = u.jsx(r("VirtualizationContainerContext").Provider, {
			value: T,
			children: q
		}), t[51] = T, t[52] = q, t[53] = U) : U = t[53], U;
	}
	function S(e) {
		var t = null;
		return e.renderHeader != null ? t = e.renderHeader() : e.header != null && (t = u.jsx("div", {
			className: "x193iq5w",
			children: u.jsx(r("WDSText.react"), {
				maxLines: 1,
				type: "Body2Emphasized",
				colorName: "contentDeemphasized",
				children: e.header
			})
		})), u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: [
				h.cell,
				h.headerCells,
				e.header != null && h.headerCellsHoverable,
				e.stickyEnd === !0 && h.stickyEndHeader,
				e.stickyStart === !0 && h.stickyStartHeader
			],
			style: y(e.width),
			children: t
		}, e.key);
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = v;
}), 98);
