__d("WAWebDeveloperToolsDBViewerGroupByTable.react", [
	"WAWebDeveloperToolsDBViewerBaseTable.react",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerChart.react",
	"WAWebDeveloperToolsDBViewerTable.react",
	"WAWebDeveloperToolsLoadTable",
	"WAWebFlex.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { padding10: {
		paddingTop: "x889kno",
		paddingInlineEnd: "x2vl965",
		paddingBottom: "x1a8lsjc",
		paddingInlineStart: "xe2zdcy",
		$$css: !0
	} };
	function c(e) {
		var t = e.chartData, n = e.errorMsg, a = e.generatingGraph, i = e.groupByColumn, l = e.offset, c = e.onGenChart, d = e.table;
		return d == null ? s.jsx(o("WAWebDeveloperToolsDBViewerTable.react").Message, { msg: n }) : s.jsxs(s.Fragment, { children: [
			s.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: u.padding10,
				children: s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					xstyle: o("WDSPaddings.stylex").wdsPaddings.padding4,
					light: !0,
					onClick: c,
					loading: a,
					children: "Generate Graph"
				})
			}),
			s.jsxs(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerTable, { children: [s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerHeader, { children: s.jsxs(s.Fragment, { children: [s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerColumn, { value: i }), s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerColumn, { value: "Count" })] }) }), s.jsx("tbody", { children: d.map(function(e, t) {
				var n = e.count, r = e.value, a = typeof r == "object" ? JSON.stringify(r) : String(r);
				return s.jsxs("tr", { children: [
					s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerCellIndex, {
						copy: !1,
						value: String(t + 1 + l * o("WAWebDeveloperToolsLoadTable").MAX_ROWS),
						rowIdx: t
					}),
					s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerCell, {
						value: a,
						rowIdx: t
					}),
					s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerCell, {
						rowIdx: t,
						value: String(n)
					})
				] }, t);
			}) })] }),
			s.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: t && s.jsx(r("WAWebDeveloperToolsDBViewerChart.react"), {
					data: t,
					errorMsg: n
				})
			})
		] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
