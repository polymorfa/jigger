__d("WAWebDeveloperToolsDBViewerGroupBy.react", [
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerDropdown.react",
	"WAWebDeveloperToolsDBViewerRowFilter.react",
	"WAWebDeveloperToolsPopoverPill.react",
	"WAWebFlex.react",
	"WAWebLabelOutlineIcon.react",
	"WAWebSearchInput",
	"asyncToGeneratorRuntime",
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
		var t = e.columns, a = e.onGroupByChange, i = e.selectedGroup, l = r("useWAWebDeveloperToolsDBViewerColumnSearch")(t), c = l.formatters, d = l.searchResults, m = l.setQuery, p = i != null ? "Grouping by " + i : "Group by";
		return s.jsx(o("WAWebDeveloperToolsPopoverPill.react").DeveloperToolsPopoverPill, {
			xstyle: u.popover,
			active: i != null,
			label: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 8,
				children: [s.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, {
					height: 20,
					width: 20
				}), p]
			}),
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				gap: 8,
				grow: 1,
				children: [s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					disabled: i == null,
					fullWidth: !0,
					onClick: function() {
						return a(null);
					},
					children: "Reset"
				}), s.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: u.fullWidth,
					grow: 1,
					children: s.jsxs(r("WAWebDeveloperToolsDBViewerDropdown.react"), {
						label: p,
						children: [s.jsx(o("WAWebSearchInput").SearchInput, {
							placeholder: "Search fields",
							onSearch: m
						}), s.jsx(o("WAWebFlex.react").FlexColumn, {
							xstyle: u.fullWidth,
							grow: 1,
							shrink: 0,
							children: d.map(function(e, t) {
								var r = e.name, l = e.type;
								return s.jsx(o("WAWebDeveloperToolsDBViewerRowFilter.react").Selector, {
									type: l,
									formatters: c,
									onSelect: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
										yield a(r);
									}),
									filter: r,
									selected: i === r
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
