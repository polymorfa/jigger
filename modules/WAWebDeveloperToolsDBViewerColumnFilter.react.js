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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(34), n = e.columns, a = e.onColumnChange, i = r("useWAWebDeveloperToolsDBViewerColumnSelector")(n, a), l = i.checkSelectionState, u = i.handleColumnClick, d = i.numberOfSelectedColumns, p = i.toggleAllColumns, _ = r("useWAWebDeveloperToolsDBViewerColumnSearch")(n), f = _.formatters, g = _.searchResults, h = _.setQuery, y;
		t[0] !== l || t[1] !== n ? (y = l !== o("WAWebDeveloperToolsDBViewerFilterToggles.react").FilterState.ALL && o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(n), t[0] = l, t[1] = n, t[2] = y) : y = t[2];
		var C = y, b;
		e: {
			if (o("WAWebDeveloperToolsArrayUtils").isEmptyArray(n)) {
				b = "Fields";
				break e;
			}
			var v = n.filter(m);
			if (o("WAWebDeveloperToolsArrayUtils").isEmptyArray(v)) {
				b = "Fields | None";
				break e;
			} else if (v.length === n.length) {
				b = "Fields | All";
				break e;
			}
			b = "Fields " + (C ? "| " + d + " of " + n.length : "");
		}
		var S = b, R;
		t[3] !== n ? (R = o("WAWebDeveloperToolsArrayUtils").isEmptyArray(n), t[3] = n, t[4] = R) : R = t[4];
		var L;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (L = s.jsx(o("WAWebDeveloperToolsCustomIcons.react").ColumnIconCustom, {}), t[5] = L) : L = t[5];
		var E;
		t[6] !== S ? (E = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 4,
			children: [L, S]
		}), t[6] = S, t[7] = E) : E = t[7];
		var k;
		t[8] !== l || t[9] !== p ? (k = s.jsx(o("WAWebDeveloperToolsDBViewerFilterToggles.react").DeveloperToolsDBViewerFilterToggles, {
			toggleFunc: p,
			selectedState: l
		}), t[8] = l, t[9] = p, t[10] = k) : k = t[10];
		var I;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (I = [c.columns, c.marginTop12], t[11] = I) : I = t[11];
		var T;
		t[12] !== h ? (T = s.jsx(o("WAWebSearchInput").SearchInput, {
			placeholder: "Search columns",
			onSearch: h
		}), t[12] = h, t[13] = T) : T = t[13];
		var D;
		if (t[14] !== n || t[15] !== f || t[16] !== u || t[17] !== g) {
			var x;
			t[19] !== n || t[20] !== f || t[21] !== u ? (x = function(t, a) {
				var e = t.name, i = t.selected, l = t.type;
				return s.jsxs("div", { children: [s.jsx(o("WAWebFlex.react").FlexRow, {
					grow: 1,
					align: "center",
					shrink: 0,
					children: s.jsx(o("WAWebCellMenuItem.react").CellV2MenuItem, {
						type: "multi-select",
						onSelect: function() {
							u(e);
						},
						detailLeft: s.jsx(o("WAWebCheckBox.react").CheckBox, {
							onChange: r("WAWebNoop"),
							checked: i
						}),
						optionId: e,
						primary: s.jsxs(o("WAWebFlex.react").FlexColumn, {
							gap: 2,
							children: [s.jsx(o("WAWebEmojiText.react").EmojiText, {
								formatters: f,
								className: i ? "xk4n5i7" : null,
								text: e
							}), s.jsx(o("WAWebDeveloperToolsDBViewerRowFilter.react").DisplayType, { type: l })]
						})
					})
				}), s.jsx(o("WAWebDeveloperToolsDBViewerTableSelector.react").Divider, { show: !o("WAWebDeveloperToolsArrayUtils").isLastItemInArray(n, a) })] }, a);
			}, t[19] = n, t[20] = f, t[21] = u, t[22] = x) : x = t[22], D = g.map(x), t[14] = n, t[15] = f, t[16] = u, t[17] = g, t[18] = D;
		} else D = t[18];
		var $;
		t[23] !== D ? ($ = s.jsx(o("WAWebMenu.react").WAWebMenu, {
			autoScroll: !1,
			minWidth: 300,
			children: D
		}), t[23] = D, t[24] = $) : $ = t[24];
		var P;
		t[25] !== $ || t[26] !== T ? (P = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: I,
			children: [T, $]
		}), t[25] = $, t[26] = T, t[27] = P) : P = t[27];
		var N;
		return t[28] !== C || t[29] !== P || t[30] !== R || t[31] !== E || t[32] !== k ? (N = s.jsxs(o("WAWebDeveloperToolsPopoverPill.react").DeveloperToolsPopoverPill, {
			disabled: R,
			active: C,
			label: E,
			children: [k, P]
		}), t[28] = C, t[29] = P, t[30] = R, t[31] = E, t[32] = k, t[33] = N) : N = t[33], N;
	}
	function m(e) {
		var t = e.selected;
		return t;
	}
	l.default = d;
}), 98);
