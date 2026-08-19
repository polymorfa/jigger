__d("WAWebDeveloperToolsDBViewerTable.react", [
	"WAWebDeveloperToolsArrayUtils",
	"WAWebDeveloperToolsDBViewerBaseTable.react",
	"WAWebDeveloperToolsLoadTable",
	"WAWebDeveloperToolsSerializer",
	"WAWebEmptyState.react",
	"WAWebFlex.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { container: {
		height: "x5yr21d",
		$$css: !0
	} };
	function c(e) {
		var t = e.errorMsg, n = e.filterColumns, r = e.loading, a = e.offset, i = e.table;
		if (t != null) return s.jsx(m, { msg: t });
		if (r) return s.jsx(o("WAWebEmptyState.react").Loading, {});
		if (i == null) return s.jsx(m, { msg: "Select a table on the left to get started" });
		var l = n.filter(function(e) {
			var t = e.selected;
			return t;
		});
		return o("WAWebDeveloperToolsArrayUtils").isEmptyArray(l) ? s.jsx(m, { msg: "No columns found" }) : s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.container,
			children: s.jsx(d, {
				columns: l,
				table: i,
				offset: a
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.columns, n = e.offset, a = e.table;
		return s.jsxs(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerTable, { children: [s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerHeader, { children: t.map(function(e, t) {
			var n = e.name;
			return s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerColumn, { value: n }, n + "_" + t);
		}) }), s.jsx("tbody", { children: a.map(function(e, a) {
			return s.jsxs("tr", { children: [s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerCellIndex, {
				copy: !1,
				value: String(a + 1 + n * o("WAWebDeveloperToolsLoadTable").MAX_ROWS),
				rowIdx: a
			}), t.map(function(t, n) {
				var i = e[t.name], l = r("WAWebDeveloperToolsSerializer")(t.name, i);
				return s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerCell, {
					rowIdx: a,
					value: i,
					displayValue: l
				}, a + "_" + n);
			})] }, a);
		}) })] });
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.msg;
		return t == null ? s.jsx(s.Fragment, {}) : s.jsx(o("WAWebEmptyState.react").Empty, {
			theme: o("WAWebEmptyState.react").EmptyStateTheme.Compact,
			title: t
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.TableViewer = c, l.Message = m;
}), 98);
