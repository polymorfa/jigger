__d("WAWebSMBTable.react", [
	"CometVirtualization.react",
	"VirtualizationContainerContext",
	"WAWebFlex.react",
	"WAWebSpinner.react",
	"WDSFocusStateStyles",
	"WDSText.react",
	"justknobx",
	"react",
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
		var n = t.columns, a = t.getItemKey, i = t.item, l = t.onRowClick, s = t.renderRow, c = t.rowIndex, d = t.selectedKey, m = t.totalItems, p = f(!1), _ = p[0], g = p[1], C = a(i, c), b = l != null && d != null && C === d, v = _ || b, S = {
			isFirstRow: c === 0,
			isLastRow: c === m - 1,
			isRowHovered: _,
			item: i,
			rowIndex: c
		}, R = u.jsx(u.Fragment, { children: n.map(function(e) {
			return u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: [
					h.cell,
					e.stickyEnd === !0 && h.stickyEndCell,
					e.stickyEnd === !0 && v && h.stickyEndCellEmphasized,
					e.stickyStart === !0 && h.stickyStartCell,
					e.stickyStart === !0 && v && h.stickyStartCellEmphasized
				],
				style: y(e.width),
				children: e.cell != null ? e.cell(S) : null
			}, e.key);
		}) });
		return s != null ? u.jsx(o("WAWebFlex.react").FlexRow, { children: s(i, R, c) }) : l != null ? u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: h.rowBase,
			children: u.jsx("div", babelHelpers.extends({
				role: "button",
				tabIndex: 0
			}, (e || (e = r("stylex"))).props(h.clickableRow, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, b && h.selectedRow), {
				onClick: function() {
					return l(i, c);
				},
				onKeyDown: function(t) {
					(t.key === "Enter" || t.key === " ") && (t.preventDefault(), l(i, c));
				},
				onMouseEnter: function() {
					return g(!0);
				},
				onMouseLeave: function() {
					return g(!1);
				},
				children: u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: h.rowContent,
					children: R
				})
			}))
		}) : u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [h.rowBase, h.nonClickableRow],
			children: R
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.children, n = e.enabled, o = e.fasterSizeMeasurement;
		return n ? u.jsx(r("CometVirtualization.react"), {
			fasterSizeMeasurement: o,
			hiddenMode: "none",
			initialRenderConfig: g,
			pinChildrenOnInteraction: !1,
			unmountHiddenChildren: !0,
			xstyle: h.virtualizationWrapper,
			children: t
		}) : t;
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.columns, n = e.getItemKey, a = e.hasMore, i = e.isLoadingMore, l = e.items, s = e.onLoadMore, c = e.onRowClick, f = e.pinnedItems, g = e.renderRow, v = e.scrollContainerRef, S = e.selectedKey, R = _(null), L = r("justknobx")._("1482"), E = r("justknobx")._("1487"), k = p(function() {
			return v != null ? { rootElementRef: v } : null;
		}, [v]), I = d(function(e) {
			var t, n = e[0], r = (t = n.isIntersecting) != null ? t : n.intersectionRatio > 0;
			r && a === !0 && i !== !0 && (s == null || s());
		}, [
			a,
			i,
			s
		]);
		m(function() {
			var e, t = R.current;
			if (!(t == null || s == null)) {
				var n = new IntersectionObserver(I, {
					root: (e = v == null ? void 0 : v.current) != null ? e : null,
					rootMargin: "100px"
				});
				return n.observe(t), function() {
					n.disconnect();
				};
			}
		}, [
			I,
			s,
			v
		]);
		var T = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: h.table,
			children: [
				u.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: h.headerRow,
					children: t.map(function(e) {
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
					})
				}),
				f != null && f.map(function(e, r) {
					var o;
					return u.jsx(C, {
						columns: t,
						getItemKey: n,
						item: e,
						onRowClick: c,
						renderRow: g,
						rowIndex: r,
						selectedKey: S,
						totalItems: ((o = f == null ? void 0 : f.length) != null ? o : 0) + l.length
					}, n(e, r));
				}),
				l.map(function(e, r) {
					var o, a = (o = f == null ? void 0 : f.length) != null ? o : 0, i = r + a, s = a + l.length;
					return u.jsx(b, {
						enabled: L,
						fasterSizeMeasurement: E,
						children: u.jsx(C, {
							columns: t,
							getItemKey: n,
							item: e,
							onRowClick: c,
							renderRow: g,
							rowIndex: i,
							selectedKey: S,
							totalItems: s
						})
					}, n(e, i));
				}),
				i === !0 && u.jsx("div", {
					className: "x6s0dn4 x78zum5 xl56j7k x1p57kb1 xvpt6g3 xh8yej3",
					children: u.jsx(o("WAWebSpinner.react").Spinner, { size: 24 })
				}),
				a === !0 && u.jsx("div", {
					ref: R,
					className: "xjm9jq1"
				})
			]
		});
		return k == null ? T : u.jsx(r("VirtualizationContainerContext").Provider, {
			value: k,
			children: T
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 98);
