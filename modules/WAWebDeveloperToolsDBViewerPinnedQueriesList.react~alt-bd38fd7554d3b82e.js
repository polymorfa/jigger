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
	"react"
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
		var e = d(o("WAWebDeveloperToolsDBViewerPinnedQueries").loadPinnedQueries), t = e[0], n = e[1], r = c(function(e) {
			o("WAWebDeveloperToolsDBViewerPinnedQueriesODS").logPinnedQueryRemoved();
			var t = o("WAWebDeveloperToolsDBViewerPinnedQueries").removePinnedQuery(e);
			n(t);
		}, []);
		return {
			queries: t,
			handleRemoveQuery: r
		};
	}
	function _(e) {
		var t = e.onQuerySelect, n = e.selectedQueryId, a = p(), i = a.handleRemoveQuery, l = a.queries;
		return l.length === 0 ? s.jsx(r("WAWebDeveloperBorderBox.react"), { children: s.jsx(o("WAWebEmptyState.react").NoSearchResults, { center: !0 }) }) : s.jsx(r("WAWebDeveloperBorderBox.react"), {
			xstyle: m.listContainer,
			children: s.jsx(o("WAWebMenu.react").WAWebMenu, { children: l.map(function(e, a) {
				var u = n === e.id;
				return s.jsxs("div", { children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: [s.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						children: s.jsx(o("WAWebCellMenuItem.react").CellV2MenuItem, {
							type: "single-select",
							onSelect: function() {
								o("WAWebDeveloperToolsDBViewerPinnedQueriesODS").logPinnedQueryLoaded(), t(e);
							},
							detailLeft: s.jsx(o("WAWebVisualRadio.react").WAWebVisualRadio, { checked: u }),
							optionId: e.id,
							primary: s.jsx(o("WAWebEmojiText.react").EmojiText, {
								className: u ? "xk4n5i7" : null,
								text: e.label
							})
						})
					}), s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
						xstyle: m.deleteButton,
						light: !0,
						onClick: function() {
							i(e.id);
						},
						children: s.jsx(o("WAWebXIcon.react").XIcon, {})
					})]
				}), !o("WAWebDeveloperToolsArrayUtils").isLastItemInArray(l, a) && s.jsx("div", { className: "x120ee7l x1q0q8m5 xso031l" })] }, e.id);
			}) })
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
