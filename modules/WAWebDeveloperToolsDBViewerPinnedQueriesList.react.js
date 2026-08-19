__d("WAWebDeveloperToolsDBViewerPinnedQueriesList.react", [
	"WAWebCellMenuItem.react",
	"WAWebDeveloperBorderBox.react",
	"WAWebDeveloperToolsArrayUtils",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerPinnedQueries",
	"WAWebDeveloperToolsDBViewerPinnedQueriesODS",
	"WAWebEmojiText.react",
	"WAWebEmptyState.react",
	"WAWebFlex.react",
	"WAWebMenu.react",
	"WAWebVisualRadio.react",
	"WAWebXIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState, m = {
		listContainer: {
			height: "x5yr21d",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		deleteButton: {
			paddingTop: "x1iorvi4",
			paddingInlineEnd: "x11lfxj5",
			paddingBottom: "xjkvuk6",
			paddingInlineStart: "x135b78x",
			$$css: !0
		}
	};
	function p() {
		var e = o("react-compiler-runtime").c(3), t = d(o("WAWebDeveloperToolsDBViewerPinnedQueries").loadPinnedQueries), n = t[0], r = t[1], a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = function(t) {
			o("WAWebDeveloperToolsDBViewerPinnedQueriesODS").logPinnedQueryRemoved();
			var e = o("WAWebDeveloperToolsDBViewerPinnedQueries").removePinnedQuery(t);
			r(e);
		}, e[0] = a) : a = e[0];
		var i = a, l;
		return e[1] !== n ? (l = {
			queries: n,
			handleRemoveQuery: i
		}, e[1] = n, e[2] = l) : l = e[2], l;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(8), n = e.onQuerySelect, a = e.selectedQueryId, i = p(), l = i.handleRemoveQuery, u = i.queries;
		if (u.length === 0) {
			var c;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(r("WAWebDeveloperBorderBox.react"), { children: s.jsx(o("WAWebEmptyState.react").NoSearchResults, { center: !0 }) }), t[0] = c) : c = t[0], c;
		}
		var d;
		t[1] !== l || t[2] !== n || t[3] !== u || t[4] !== a ? (d = u.map(function(e, t) {
			var i = a === e.id;
			return s.jsxs("div", { children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: [s.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					children: s.jsx(o("WAWebCellMenuItem.react").CellV2MenuItem, {
						type: "single-select",
						onSelect: function() {
							o("WAWebDeveloperToolsDBViewerPinnedQueriesODS").logPinnedQueryLoaded(), n(e);
						},
						detailLeft: s.jsx(o("WAWebVisualRadio.react").WAWebVisualRadio, { checked: i }),
						optionId: e.id,
						primary: s.jsx(o("WAWebEmojiText.react").EmojiText, {
							className: i ? "xk4n5i7" : null,
							text: e.label
						})
					})
				}), s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					xstyle: m.deleteButton,
					light: !0,
					onClick: function() {
						l(e.id);
					},
					children: s.jsx(o("WAWebXIcon.react").XIcon, {})
				})]
			}), !o("WAWebDeveloperToolsArrayUtils").isLastItemInArray(u, t) && s.jsx("div", { className: "x120ee7l x1q0q8m5 xso031l" })] }, e.id);
		}), t[1] = l, t[2] = n, t[3] = u, t[4] = a, t[5] = d) : d = t[5];
		var _;
		return t[6] !== d ? (_ = s.jsx(r("WAWebDeveloperBorderBox.react"), {
			xstyle: m.listContainer,
			children: s.jsx(o("WAWebMenu.react").WAWebMenu, { children: d })
		}), t[6] = d, t[7] = _) : _ = t[7], _;
	}
	l.default = _;
}), 98);
