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
	"react-compiler-runtime",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useState;
	function c() {
		var e = o("react-compiler-runtime").c(11), t = r("useWAWebToggle")(!1), n = t[0], a = t[1], i = u(null), l = i[0], c = i[1], m = u("DB Explorer"), p = m[0], _ = m[1], f;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (f = function(t) {
			t === "Pinned Queries" && o("WAWebDeveloperToolsDBViewerPinnedQueriesODS").logPinnedQueriesTabActivated(), _(t);
		}, e[0] = f) : f = e[0];
		var g = f, h;
		e[1] !== a ? (h = s.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "db-viewer-nub",
			icon: "🕵️",
			title: "DB Viewer",
			onClick: a
		}), e[1] = a, e[2] = h) : h = e[2];
		var y;
		e[3] !== n || e[4] !== p || e[5] !== l || e[6] !== a ? (y = n && o("ReactDOM").createPortal(s.jsxs(r("WAWebDeveloperEscableModal.react"), {
			title: l != null ? l : "DB Viewer",
			onClose: a,
			modalId: "db-viewer-body-id",
			children: [s.jsx("div", {
				className: "x12xbjc7",
				children: s.jsx(r("WAWebDeveloperToolsDBViewerPageViewSelector.react"), {
					currentPage: p,
					onPageViewChange: g,
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
				selectedTab: p,
				setTitle: c
			})]
		}), document.body), e[3] = n, e[4] = p, e[5] = l, e[6] = a, e[7] = y) : y = e[7];
		var C;
		return e[8] !== h || e[9] !== y ? (C = s.jsxs(s.Fragment, { children: [h, y] }), e[8] = h, e[9] = y, e[10] = C) : C = e[10], C;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(4), n = e.selectedTab, a = e.setTitle, i = u(0), l = i[0], c = i[1], d;
		return t[0] !== l || t[1] !== n || t[2] !== a ? (d = n === "DB Explorer" ? s.jsx(o("WAWebDeveloperToolsDBViewer.react").DeveloperToolsDBViewer, { setTitle: a }) : n === "Pinned Queries" ? s.jsx(r("WAWebDeveloperToolsDBViewerPinnedQueryViewer.react"), { setTitle: a }) : n === "DB Stats" ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 4,
			align: "stretch",
			children: [
				s.jsx(r("WAWebSlowestQueriesTable.react"), {}, "slowest-" + l),
				s.jsx(r("WAWebFrequentQueriesTable.react"), {}, "frequent-" + l),
				s.jsx(r("WAWebBulkQueriesTable.react"), {}, "bulk-" + l),
				s.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "end",
					alignSelf: "stretch",
					children: s.jsx(o("WAWebButton.react").Button, {
						onClick: function() {
							o("WAWebDBStats").dbStats.resetStats(), c(m);
						},
						children: "Reset All Stats"
					})
				})
			]
		}) : null, t[0] = l, t[1] = n, t[2] = a, t[3] = d) : d = t[3], d;
	}
	function m(e) {
		return e + 1;
	}
	l.DBViewerNub = c, l.TabContent = d;
}), 98);
