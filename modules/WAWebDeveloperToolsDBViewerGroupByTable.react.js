__d("WAWebDeveloperToolsDBViewerGroupByTable.react", [
	"WAWebDeveloperToolsDBViewerBaseTable.react",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerChart.react",
	"WAWebDeveloperToolsDBViewerTable.react",
	"WAWebDeveloperToolsLoadTable",
	"WAWebFlex.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(29), n = e.chartData, a = e.errorMsg, i = e.generatingGraph, l = e.groupByColumn, c = e.offset, d = e.onGenChart, m = e.table;
		if (m == null) {
			var p;
			return t[0] !== a ? (p = s.jsx(o("WAWebDeveloperToolsDBViewerTable.react").Message, { msg: a }), t[0] = a, t[1] = p) : p = t[1], p;
		}
		var _;
		t[2] !== i || t[3] !== d ? (_ = s.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: u.padding10,
			children: s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
				xstyle: o("WDSPaddings.stylex").wdsPaddings.padding4,
				light: !0,
				onClick: d,
				loading: i,
				children: "Generate Graph"
			})
		}), t[2] = i, t[3] = d, t[4] = _) : _ = t[4];
		var f;
		t[5] !== l ? (f = s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerColumn, { value: l }), t[5] = l, t[6] = f) : f = t[6];
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerColumn, { value: "Count" }), t[7] = g) : g = t[7];
		var h;
		t[8] !== f ? (h = s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerHeader, { children: s.jsxs(s.Fragment, { children: [f, g] }) }), t[8] = f, t[9] = h) : h = t[9];
		var y;
		if (t[10] !== c || t[11] !== m) {
			var C;
			t[13] !== c ? (C = function(t, n) {
				var e = t.count, r = t.value, a = typeof r == "object" ? JSON.stringify(r) : String(r);
				return s.jsxs("tr", { children: [
					s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerCellIndex, {
						copy: !1,
						value: String(n + 1 + c * o("WAWebDeveloperToolsLoadTable").MAX_ROWS),
						rowIdx: n
					}),
					s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerCell, {
						value: a,
						rowIdx: n
					}),
					s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerCell, {
						rowIdx: n,
						value: String(e)
					})
				] }, n);
			}, t[13] = c, t[14] = C) : C = t[14], y = m.map(C), t[10] = c, t[11] = m, t[12] = y;
		} else y = t[12];
		var b;
		t[15] !== y ? (b = s.jsx("tbody", { children: y }), t[15] = y, t[16] = b) : b = t[16];
		var v;
		t[17] !== h || t[18] !== b ? (v = s.jsxs(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerTable, { children: [h, b] }), t[17] = h, t[18] = b, t[19] = v) : v = t[19];
		var S;
		t[20] !== n || t[21] !== a ? (S = n && s.jsx(r("WAWebDeveloperToolsDBViewerChart.react"), {
			data: n,
			errorMsg: a
		}), t[20] = n, t[21] = a, t[22] = S) : S = t[22];
		var R;
		t[23] !== S ? (R = s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: S
		}), t[23] = S, t[24] = R) : R = t[24];
		var L;
		return t[25] !== _ || t[26] !== v || t[27] !== R ? (L = s.jsxs(s.Fragment, { children: [
			_,
			v,
			R
		] }), t[25] = _, t[26] = v, t[27] = R, t[28] = L) : L = t[28], L;
	}
	l.default = c;
}), 98);
