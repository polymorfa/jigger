__d("WAWebFrequentQueriesTable.react", [
	"WAWebDBStats",
	"WAWebDeveloperToolsDBViewerBaseTable.react",
	"WAWebGetAllModelStorageTableNames",
	"WAWebQueriesTable",
	"compactMap",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e, t = c();
		return s.jsxs("div", { children: [s.jsx("h2", {
			className: "x579bpy x117nqv4",
			children: "Most frequent queries"
		}), s.jsxs((e = o("WAWebDeveloperToolsDBViewerBaseTable.react")).DBViewerTable, { children: [s.jsxs(e.DBViewerHeader, { children: [
			s.jsx(e.DBViewerColumn, { value: "Table Name" }),
			s.jsx(e.DBViewerColumn, { value: "Avg Result Size" }),
			s.jsx(e.DBViewerColumn, { value: "Avg Time (ms)" }),
			s.jsx(e.DBViewerColumn, { value: "Count" })
		] }), s.jsx("tbody", { children: t.map(function(e, t) {
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
				}),
				s.jsx(n.DBViewerCell, {
					rowIdx: t,
					value: String(e.totalCount)
				})
			] }, t);
		}) })] })] });
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c() {
		var e = Array.from(o("WAWebDBStats").dbStats.getAllStats().entries()), t = e.filter(function(e) {
			var t = e[0];
			return o("WAWebGetAllModelStorageTableNames").allModelStorageTableNames.includes(t);
		}), n = r("compactMap")(t, function(e) {
			var t = e[0], n = e[1];
			if (!n) return null;
			var r = n.queryTimes, a = n.readCount, i = n.recordCounts, l = n.writeCount, s = a + l, u = o("WAWebQueriesTable").calculateQueryStats(r, i), c = u.avgQueryTime, d = u.avgResultSize;
			return {
				tableName: t,
				avgResultSize: d,
				avgQueryTime: c,
				totalCount: s
			};
		});
		return n.sort(function(e, t) {
			return t.totalCount - e.totalCount;
		});
	}
	l.default = u;
}), 98);
