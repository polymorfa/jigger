__d("WAWebDeveloperToolsDBViewerControlCenter.react", [
	"WAWebDeveloperBorderBox.react",
	"WAWebDeveloperToolsArrayUtils",
	"WAWebDeveloperToolsDBViewer.react",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerColumnFilter.react",
	"WAWebDeveloperToolsDBViewerFilterToggles.react",
	"WAWebDeveloperToolsDBViewerGroupBy.react",
	"WAWebDeveloperToolsDBViewerPageViewSelector.react",
	"WAWebDeveloperToolsDBViewerRowCount.react",
	"WAWebDeveloperToolsDBViewerRowFilter.react",
	"WAWebDeveloperToolsPopoverPill.react",
	"WAWebFlex.react",
	"WAWebXIcon.react",
	"WDSIconIcDownload.react",
	"WDSIconIcPushPin.react",
	"WDSPaddings.stylex",
	"react",
	"useWAWebDeveloperToolsDBViewerColumnSelector"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { paddingInline10: {
		paddingInlineStart: "xe2zdcy",
		paddingInlineEnd: "x2vl965",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, c = { topBar: {
		maxHeight: "xkgu5aw",
		minHeight: "x7ywyr2",
		width: "xh8yej3",
		$$css: !0
	} };
	function d(e) {
		var t = e.columns, n = e.filters, a = e.generatingExport, i = e.groupByColumn, l = e.groups, d = e.offset, p = e.onColumnChange, _ = e.onDownloadExport, f = e.onFilterChange, g = e.onGroupByChange, h = e.onPageViewChange, y = e.onPinQuery, C = e.pageView, b = e.reset, v = e.rowCount, S = o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(l[0].conditions) || o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(l[1].conditions), R = m({
			columns: t,
			filters: n,
			groupByColumn: i,
			offset: d,
			queryActive: S,
			setColumns: p
		});
		return s.jsxs(r("WAWebDeveloperBorderBox.react"), {
			centerY: !0,
			spaceApart: !0,
			flex: !0,
			xstyle: c.topBar,
			children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
				gap: 8,
				align: "center",
				xstyle: u.paddingInline10,
				shrink: 0,
				children: [
					s.jsx(r("WAWebDeveloperToolsDBViewerPageViewSelector.react"), {
						onPageViewChange: h,
						currentPage: C,
						pages: o("WAWebDeveloperToolsDBViewer.react").Pages
					}),
					s.jsx(r("WAWebDeveloperToolsDBViewerColumnFilter.react"), {
						columns: t,
						onColumnChange: p
					}),
					s.jsx(o("WAWebDeveloperToolsDBViewerRowFilter.react").DeveloperToolsDBViewerRowFilter, {
						columns: t,
						filters: n,
						onFilterChange: f
					}),
					s.jsx(r("WAWebDeveloperToolsDBViewerGroupBy.react"), {
						columns: t,
						onGroupByChange: g,
						selectedGroup: i
					}),
					R && s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
						xstyle: o("WDSPaddings.stylex").wdsPaddings.padding4,
						light: !0,
						onClick: b,
						children: s.jsx(o("WAWebXIcon.react").XIcon, {})
					}),
					o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(t) && s.jsx(r("WAWebDeveloperToolsDBViewerRowCount.react"), { rowCount: v })
				]
			}), s.jsxs(o("WAWebFlex.react").FlexRow, {
				gap: 4,
				align: "center",
				xstyle: u.paddingInline10,
				children: [s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					xstyle: o("WDSPaddings.stylex").wdsPaddings.padding4,
					light: !0,
					onClick: y,
					children: s.jsx(r("WDSIconIcPushPin.react"), {})
				}), s.jsx(o("WAWebDeveloperToolsPopoverPill.react").DeveloperToolsPopoverPill, {
					active: !1,
					disabled: a,
					label: s.jsx(r("WDSIconIcDownload.react"), {}),
					children: s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [s.jsx("button", {
						className: "x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1heor9g x1ypdohk xln7xf2 x1yrsyyn x10b6aqq xmzvs34 xf159sx x1yc453h xh8yej3",
						onClick: function() {
							_("csv");
						},
						type: "button",
						children: "Export CSV"
					}), s.jsx("button", {
						className: "x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1heor9g x1ypdohk xln7xf2 x1yrsyyn x10b6aqq xmzvs34 xf159sx x1yc453h xh8yej3",
						onClick: function() {
							_("json");
						},
						type: "button",
						children: "Export JSON"
					})] })
				})]
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.columns, n = e.filters, a = e.groupByColumn, i = e.offset, l = e.queryActive, s = e.setColumns, u = r("useWAWebDeveloperToolsDBViewerColumnSelector")(t, s), c = u.checkSelectionState, d = c !== o("WAWebDeveloperToolsDBViewerFilterToggles.react").FilterState.ALL && o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(t);
		return d || o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(n) || i > 0 || l || a != null;
	}
	l.default = d;
}), 98);
