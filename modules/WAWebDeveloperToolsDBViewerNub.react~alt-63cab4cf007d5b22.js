__d("WAWebDeveloperToolsDBViewerNub.react", [
	"ReactDOM",
	"WAWebBulkQueriesTable.react",
	"WAWebButton.react",
	"WAWebDBStats",
	"WAWebDeveloperEscableModal.react",
	"WAWebDeveloperToolNub.react",
	"WAWebDeveloperToolsCustomIcons.react",
	"WAWebDeveloperToolsDBViewer.react",
	"WAWebDeveloperToolsDBViewerPageViewSelector.react",
	"WAWebDeveloperToolsDBViewerPinnedQueriesODS",
	"WAWebDeveloperToolsDBViewerPinnedQueryViewer.react",
	"WAWebFlex.react",
	"WAWebFrequentQueriesTable.react",
	"WAWebSlowestQueriesTable.react",
	"WDSIconIcPushPin.react",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useState;
	function c() {
		var e = r("useWAWebToggle")(!1), t = e[0], n = e[1], a = u(null), i = a[0], l = a[1], c = u("DB Explorer"), m = c[0], p = c[1], _ = function(t) {
			t === "Pinned Queries" && o("WAWebDeveloperToolsDBViewerPinnedQueriesODS").logPinnedQueriesTabActivated(), p(t);
		};
		return s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "db-viewer-nub",
			icon: "🕵️",
			title: "DB Viewer",
			onClick: n
		}), t && o("ReactDOM").createPortal(s.jsxs(r("WAWebDeveloperEscableModal.react"), {
			title: i != null ? i : "DB Viewer",
			onClose: n,
			modalId: "db-viewer-body-id",
			children: [s.jsx("div", {
				className: "x12xbjc7",
				children: s.jsx(r("WAWebDeveloperToolsDBViewerPageViewSelector.react"), {
					currentPage: m,
					onPageViewChange: _,
					pages: [
						{
							id: "DB Explorer",
							icon: s.jsx(o("WAWebDeveloperToolsCustomIcons.react").ColumnIconCustom, {})
						},
						{
							id: "DB Stats",
							icon: s.jsx(o("WAWebDeveloperToolsCustomIcons.react").TableIconCustom, {})
						},
						{
							id: "Pinned Queries",
							icon: s.jsx(r("WDSIconIcPushPin.react"), {})
						}
					]
				})
			}), s.jsx(d, {
				selectedTab: m,
				setTitle: l
			})]
		}), document.body)] });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.selectedTab, n = e.setTitle, a = u(0), i = a[0], l = a[1];
		return t === "DB Explorer" ? s.jsx(o("WAWebDeveloperToolsDBViewer.react").DeveloperToolsDBViewer, { setTitle: n }) : t === "Pinned Queries" ? s.jsx(r("WAWebDeveloperToolsDBViewerPinnedQueryViewer.react"), { setTitle: n }) : t === "DB Stats" ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 4,
			align: "stretch",
			children: [
				s.jsx(r("WAWebSlowestQueriesTable.react"), {}, "slowest-" + i),
				s.jsx(r("WAWebFrequentQueriesTable.react"), {}, "frequent-" + i),
				s.jsx(r("WAWebBulkQueriesTable.react"), {}, "bulk-" + i),
				s.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "end",
					alignSelf: "stretch",
					children: s.jsx(o("WAWebButton.react").Button, {
						onClick: function() {
							o("WAWebDBStats").dbStats.resetStats(), l(function(e) {
								return e + 1;
							});
						},
						children: "Reset All Stats"
					})
				})
			]
		}) : null;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.DBViewerNub = c, l.TabContent = d;
}), 98);
