__d("WAWebDeveloperToolsDBViewerColumnFilter.react", [
	"WAWebCellMenuItem.react",
	"WAWebCheckBox.react",
	"WAWebDeveloperToolsArrayUtils",
	"WAWebDeveloperToolsCustomIcons.react",
	"WAWebDeveloperToolsDBViewerFilterToggles.react",
	"WAWebDeveloperToolsDBViewerRowFilter.react",
	"WAWebDeveloperToolsDBViewerTableSelector.react",
	"WAWebDeveloperToolsPopoverPill.react",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebMenu.react",
	"WAWebNoop",
	"WAWebSearchInput",
	"react",
	"useWAWebDeveloperToolsDBViewerColumnSearch",
	"useWAWebDeveloperToolsDBViewerColumnSelector"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo, c = {
		columns: {
			maxHeight: "xl8z2ie",
			overflowY: "x1rife3k",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x1ktv7sr",
			borderInlineEndWidth: "x142x0oa",
			borderBottomWidth: "xv7zg05",
			borderInlineStartWidth: "x12dgle5",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		marginTop12: {
			marginTop: "x1de0gy",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.columns, n = e.onColumnChange, a = r("useWAWebDeveloperToolsDBViewerColumnSelector")(t, n), i = a.checkSelectionState, l = a.handleColumnClick, d = a.numberOfSelectedColumns, m = a.toggleAllColumns, p = r("useWAWebDeveloperToolsDBViewerColumnSearch")(t), _ = p.formatters, f = p.searchResults, g = p.setQuery, h = i !== o("WAWebDeveloperToolsDBViewerFilterToggles.react").FilterState.ALL && o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(t), y = u(function() {
			if (o("WAWebDeveloperToolsArrayUtils").isEmptyArray(t)) return "Fields";
			var e = t.filter(function(e) {
				var t = e.selected;
				return t;
			});
			return o("WAWebDeveloperToolsArrayUtils").isEmptyArray(e) ? "Fields | None" : e.length === t.length ? "Fields | All" : "Fields " + (h ? "| " + d + " of " + t.length : "");
		}, [
			h,
			t,
			d
		]);
		return s.jsxs(o("WAWebDeveloperToolsPopoverPill.react").DeveloperToolsPopoverPill, {
			disabled: o("WAWebDeveloperToolsArrayUtils").isEmptyArray(t),
			active: h,
			label: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 4,
				children: [s.jsx(o("WAWebDeveloperToolsCustomIcons.react").ColumnIconCustom, {}), y]
			}),
			children: [s.jsx(o("WAWebDeveloperToolsDBViewerFilterToggles.react").DeveloperToolsDBViewerFilterToggles, {
				toggleFunc: m,
				selectedState: i
			}), s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [c.columns, c.marginTop12],
				children: [s.jsx(o("WAWebSearchInput").SearchInput, {
					placeholder: "Search columns",
					onSearch: g
				}), s.jsx(o("WAWebMenu.react").WAWebMenu, {
					autoScroll: !1,
					minWidth: 300,
					children: f.map(function(e, n) {
						var a = e.name, i = e.selected, u = e.type;
						return s.jsxs("div", { children: [s.jsx(o("WAWebFlex.react").FlexRow, {
							grow: 1,
							align: "center",
							shrink: 0,
							children: s.jsx(o("WAWebCellMenuItem.react").CellV2MenuItem, {
								type: "multi-select",
								onSelect: function() {
									l(a);
								},
								detailLeft: s.jsx(o("WAWebCheckBox.react").CheckBox, {
									onChange: r("WAWebNoop"),
									checked: i
								}),
								optionId: a,
								primary: s.jsxs(o("WAWebFlex.react").FlexColumn, {
									gap: 2,
									children: [s.jsx(o("WAWebEmojiText.react").EmojiText, {
										formatters: _,
										className: i ? "xk4n5i7" : null,
										text: a
									}), s.jsx(o("WAWebDeveloperToolsDBViewerRowFilter.react").DisplayType, { type: u })]
								})
							})
						}), s.jsx(o("WAWebDeveloperToolsDBViewerTableSelector.react").Divider, { show: !o("WAWebDeveloperToolsArrayUtils").isLastItemInArray(t, n) })] }, n);
					})
				})]
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
