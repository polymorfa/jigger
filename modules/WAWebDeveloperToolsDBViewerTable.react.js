__d("WAWebDeveloperToolsDBViewerTable.react", [
	"WAWebDeveloperToolsArrayUtils",
	"WAWebDeveloperToolsDBViewerBaseTable.react",
	"WAWebDeveloperToolsLoadTable",
	"WAWebDeveloperToolsSerializer",
	"WAWebEmptyState.react",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { container: {
		height: "x5yr21d",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(12), n = e.errorMsg, r = e.filterColumns, a = e.loading, i = e.offset, l = e.table;
		if (n != null) {
			var c;
			return t[0] !== n ? (c = s.jsx(_, { msg: n }), t[0] = n, t[1] = c) : c = t[1], c;
		}
		if (a) {
			var p;
			return t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = s.jsx(o("WAWebEmptyState.react").Loading, {}), t[2] = p) : p = t[2], p;
		}
		if (l == null) {
			var f;
			return t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = s.jsx(_, { msg: "Select a table on the left to get started" }), t[3] = f) : f = t[3], f;
		}
		var g, h;
		if (t[4] !== r ? (g = r.filter(d), h = o("WAWebDeveloperToolsArrayUtils").isEmptyArray(g), t[4] = r, t[5] = g, t[6] = h) : (g = t[5], h = t[6]), h) {
			var y;
			return t[7] === Symbol.for("react.memo_cache_sentinel") ? (y = s.jsx(_, { msg: "No columns found" }), t[7] = y) : y = t[7], y;
		}
		var C;
		return t[8] !== i || t[9] !== g || t[10] !== l ? (C = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.container,
			children: s.jsx(m, {
				columns: g,
				table: l,
				offset: i
			})
		}), t[8] = i, t[9] = g, t[10] = l, t[11] = C) : C = t[11], C;
	}
	function d(e) {
		var t = e.selected;
		return t;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(16), n = e.columns, a = e.offset, i = e.table, l;
		t[0] !== n ? (l = n.map(p), t[0] = n, t[1] = l) : l = t[1];
		var u;
		t[2] !== l ? (u = s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerHeader, { children: l }), t[2] = l, t[3] = u) : u = t[3];
		var c;
		if (t[4] !== n || t[5] !== a || t[6] !== i) {
			var d;
			t[8] !== n || t[9] !== a ? (d = function(t, i) {
				return s.jsxs("tr", { children: [s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerCellIndex, {
					copy: !1,
					value: String(i + 1 + a * o("WAWebDeveloperToolsLoadTable").MAX_ROWS),
					rowIdx: i
				}), n.map(function(e, n) {
					var a = t[e.name], l = r("WAWebDeveloperToolsSerializer")(e.name, a);
					return s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerCell, {
						rowIdx: i,
						value: a,
						displayValue: l
					}, i + "_" + n);
				})] }, i);
			}, t[8] = n, t[9] = a, t[10] = d) : d = t[10], c = i.map(d), t[4] = n, t[5] = a, t[6] = i, t[7] = c;
		} else c = t[7];
		var m;
		t[11] !== c ? (m = s.jsx("tbody", { children: c }), t[11] = c, t[12] = m) : m = t[12];
		var _;
		return t[13] !== u || t[14] !== m ? (_ = s.jsxs(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerTable, { children: [u, m] }), t[13] = u, t[14] = m, t[15] = _) : _ = t[15], _;
	}
	function p(e, t) {
		var n = e.name;
		return s.jsx(o("WAWebDeveloperToolsDBViewerBaseTable.react").DBViewerColumn, { value: n }, n + "_" + t);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = o("react-compiler-runtime").c(3), n = e.msg;
		if (n == null) {
			var r;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s.jsx(s.Fragment, {}), t[0] = r) : r = t[0], r;
		}
		var a;
		return t[1] !== n ? (a = s.jsx(o("WAWebEmptyState.react").Empty, {
			theme: o("WAWebEmptyState.react").EmptyStateTheme.Compact,
			title: n
		}), t[1] = n, t[2] = a) : a = t[2], a;
	}
	l.TableViewer = c, l.Message = _;
}), 98);
