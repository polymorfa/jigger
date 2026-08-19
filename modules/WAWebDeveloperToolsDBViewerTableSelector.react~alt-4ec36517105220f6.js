__d("WAWebDeveloperToolsDBViewerTableSelector.react", [
	"WAWebCellMenuItem.react",
	"WAWebDeveloperBorderBox.react",
	"WAWebDeveloperToolsArrayUtils",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsSearch",
	"WAWebEmojiText.react",
	"WAWebEmptyState.react",
	"WAWebFlex.react",
	"WAWebFormatConfiguration",
	"WAWebLocalStorage",
	"WAWebMenu.react",
	"WAWebRefreshIcon.react",
	"WAWebSearchInput",
	"WAWebVisualRadio.react",
	"WDSIconIcPushPin.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = u.useState, p = "wa_devtools_pinned_tables";
	function _() {
		try {
			var e = r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem(p);
			if (e != null) {
				var t = JSON.parse(e);
				if (Array.isArray(t)) return new Set(t);
			}
		} catch (e) {}
		return new Set();
	}
	function f(e) {
		r("WAWebLocalStorage") == null || r("WAWebLocalStorage").setItem(p, JSON.stringify(Array.from(e)));
	}
	function g() {
		var e = m(_), t = e[0], n = e[1], r = c(function(e) {
			n(function(t) {
				var n = new Set(t);
				return n.has(e) ? n.delete(e) : n.add(e), f(n), n;
			});
		}, []);
		return {
			pinnedTables: t,
			togglePin: r
		};
	}
	function h(e) {
		var t = e.canRefetch, n = e.onTableSelect, a = e.refetchTable, i = e.selectedTableName, l = e.tables, u = m(""), c = u[0], p = u[1], _ = g(), f = _.pinnedTables, h = _.togglePin, C = d(function() {
			return o("WAWebDeveloperToolsSearch").WAWebDeveloperToolsSearchTables(c, l, f);
		}, [
			c,
			l,
			f
		]), b = c != null && c !== "" ? o("WAWebFormatConfiguration").SearchName({ terms: [c] }) : void 0;
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 12,
			className: "x5yr21d xh8yej3",
			children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
				className: "xh8yej3",
				align: "center",
				gap: 8,
				children: [s.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					children: s.jsx(o("WAWebSearchInput").SearchInput, {
						placeholder: "Search for tables",
						onSearch: p
					})
				}), s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					disabled: !t,
					light: !0,
					onClick: function() {
						a();
					},
					children: s.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {})
				})]
			}), s.jsxs(r("WAWebDeveloperBorderBox.react"), { children: [s.jsx(o("WAWebMenu.react").WAWebMenu, { children: C.map(function(e, t) {
				var a = e.tableName, l = f.has(a);
				return s.jsxs("div", { children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: [s.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						children: s.jsx(o("WAWebCellMenuItem.react").CellV2MenuItem, {
							type: "single-select",
							onSelect: function() {
								n(a);
							},
							detailLeft: s.jsx(o("WAWebVisualRadio.react").WAWebVisualRadio, { checked: i === a }),
							optionId: a,
							primary: s.jsx(o("WAWebEmojiText.react").EmojiText, {
								className: i === a ? "xk4n5i7" : null,
								text: a,
								formatters: b
							})
						})
					}), s.jsx("button", babelHelpers.extends({}, {
						0: { className: "x1ypdohk x11g6tue x972fbf x10w94by x1qhh985 x14e42zd xexx8yu xyri2b x18d9i69 x1c1uobl x1091wy8 x1o7uuvo xfrlarv xuzhngd x1158fpu x1v5yvga" },
						1: { className: "x1ypdohk x11g6tue x972fbf x10w94by x1qhh985 x14e42zd xexx8yu xyri2b x18d9i69 x1c1uobl x1091wy8 x1o7uuvo xfrlarv x1hc1fzr xk4n5i7 x7p49u4" }
					}[!!l << 0], {
						onClick: function(t) {
							t.stopPropagation(), h(a);
						},
						"aria-label": l ? "Unpin table" : "Pin table",
						children: s.jsx(r("WDSIconIcPushPin.react"), {})
					}))]
				}), s.jsx(y, { show: !o("WAWebDeveloperToolsArrayUtils").isLastItemInArray(C, t) })] }, t);
			}) }), o("WAWebDeveloperToolsArrayUtils").isEmptyArray(C) && s.jsx(o("WAWebEmptyState.react").NoSearchResults, { center: !1 })] })]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.show;
		return t == null || t === !1 ? null : s.jsx("div", { className: "xjm9jq1 x3x0x6p" });
	}
	y.displayName = y.name + " [from " + i.id + "]", l.DBTableSelector = h, l.Divider = y;
}), 98);
