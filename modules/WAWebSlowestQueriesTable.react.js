__d("WAWebSlowestQueriesTable.react", [
	"WAWebDBStats",
	"WAWebDeveloperToolsDBViewerBaseTable.react",
	"WAWebGetAllModelStorageTableNames",
	"WAWebQueriesTable",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("react-compiler-runtime").c(1), t;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var n, r = d();
			t = s.jsxs("div", { children: [s.jsx("h2", {
				className: "x579bpy x117nqv4",
				children: "Slowest queries"
			}), s.jsxs((n = o("WAWebDeveloperToolsDBViewerBaseTable.react")).DBViewerTable, { children: [s.jsxs(n.DBViewerHeader, { children: [
				s.jsx(n.DBViewerColumn, { value: "Table Name" }),
				s.jsx(n.DBViewerColumn, { value: "Avg Result Size" }),
				s.jsx(n.DBViewerColumn, { value: "Avg Time (ms)" })
			] }), s.jsx("tbody", { children: r.map(c) })] })] }), e[0] = t;
		} else t = e[0];
		return t;
	}
	function c(e, t) {
		var n;
		return s.jsxs("tr", { children: [
			s.jsx((n = o("WAWebDeveloperToolsDBViewerBaseTable.react")).DBViewerCellIndex, {
				rowIdx: t,
				value: String(t + 1)
			}),
			s.jsx(n.DBViewerCell, {
				rowIdx: t,
				value: e.tableName
			}),
			s.jsx(n.DBViewerCell, {
				rowIdx: t,
				value: e.avgResultSize.toFixed(2)
			}),
			s.jsx(n.DBViewerCell, {
				rowIdx: t,
				value: e.avgQueryTime.toFixed(2)
			})
		] }, t);
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		var e = Array.from(o("WAWebDBStats").dbStats.getAllStats().entries()), t = e.filter(function(e) {
			var t = e[0];
			return o("WAWebGetAllModelStorageTableNames").allModelStorageTableNames.includes(t);
		}).map(function(e) {
			var t = e[0], n = e[1], r = n.queryTimes, a = n.recordCounts, i = o("WAWebQueriesTable").calculateQueryStats(r, a), l = i.avgQueryTime, s = i.avgResultSize;
			return {
				tableName: t,
				avgQueryTime: l,
				avgResultSize: s
			};
		});
		return t.sort(function(e, t) {
			return t.avgQueryTime - e.avgQueryTime;
		});
	}
	l.default = u;
}), 98);
