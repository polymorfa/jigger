__d("WAWebDeveloperToolsDBViewerGroupBy.react", [
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerDropdown.react",
	"WAWebDeveloperToolsDBViewerRowFilter.react",
	"WAWebDeveloperToolsPopoverPill.react",
	"WAWebFlex.react",
	"WAWebLabelOutlineIcon.react",
	"WAWebSearchInput",
	"react",
	"useWAWebDeveloperToolsDBViewerColumnSearch"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		popover: {
			minWidth: "x1jzhcrs",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.columns, n = e.onGroupByChange, a = e.selectedGroup, i = r("useWAWebDeveloperToolsDBViewerColumnSearch")(t), l = i.formatters, c = i.searchResults, d = i.setQuery, m = a != null ? "Grouping by " + a : "Group by";
		return s.jsx(o("WAWebDeveloperToolsPopoverPill.react").DeveloperToolsPopoverPill, {
			xstyle: u.popover,
			active: a != null,
			label: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 8,
				children: [s.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, {
					height: 20,
					width: 20
				}), m]
			}),
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				gap: 8,
				grow: 1,
				children: [s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					disabled: a == null,
					fullWidth: !0,
					onClick: function() {
						return n(null);
					},
					children: "Reset"
				}), s.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: u.fullWidth,
					grow: 1,
					children: s.jsxs(r("WAWebDeveloperToolsDBViewerDropdown.react"), {
						label: m,
						children: [s.jsx(o("WAWebSearchInput").SearchInput, {
							placeholder: "Search fields",
							onSearch: d
						}), s.jsx(o("WAWebFlex.react").FlexColumn, {
							xstyle: u.fullWidth,
							grow: 1,
							shrink: 0,
							children: c.map(function(e, t) {
								var r = e.name, i = e.type;
								return s.jsx(o("WAWebDeveloperToolsDBViewerRowFilter.react").Selector, {
									type: i,
									formatters: l,
									onSelect: async function() {
										await n(r);
									},
									filter: r,
									selected: a === r
								}, r + "-" + t);
							})
						})]
					})
				})]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
