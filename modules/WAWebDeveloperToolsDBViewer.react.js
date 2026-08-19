__d("WAWebDeveloperToolsDBViewer.react", [
	"WAWebDeveloperBorderBox.react",
	"WAWebDeveloperToolsArrayUtils",
	"WAWebDeveloperToolsCustomIcons.react",
	"WAWebDeveloperToolsDBViewerControlCenter.react",
	"WAWebDeveloperToolsDBViewerGroupByTable.react",
	"WAWebDeveloperToolsDBViewerPagination.react",
	"WAWebDeveloperToolsDBViewerPinnedQueries",
	"WAWebDeveloperToolsDBViewerPinnedQueriesODS",
	"WAWebDeveloperToolsDBViewerQueryBuilder.react",
	"WAWebDeveloperToolsDBViewerTable.react",
	"WAWebDeveloperToolsDBViewerTableSelector.react",
	"WAWebDeveloperToolsLoadTable",
	"WAWebFileSaver",
	"WAWebFileSaverTypes",
	"WAWebFlex.react",
	"WAWebModelStorageUtils",
	"asyncToGeneratorRuntime",
	"react",
	"stylex",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState, _ = {
		tableSelector: {
			width: "xxsgkw5",
			$$css: !0
		},
		fullHeight: {
			height: "x5yr21d",
			$$css: !0
		}
	}, f = [{
		id: "Table",
		icon: u.jsx(o("WAWebDeveloperToolsCustomIcons.react").TableIconCustom, {})
	}, {
		id: "Query Builder",
		icon: u.jsx(o("WAWebDeveloperToolsCustomIcons.react").QueryBuilderIconCustom, {})
	}];
	function g(t) {
		var a, i = t.initialQueryState, l = t.setTitle, s = p((a = i == null ? void 0 : i.tableName) != null ? a : null), c = s[0], f = s[1], g = p(!1), h = g[0], y = g[1], C = p(!1), b = C[0], v = C[1], S = p(!1), R = S[0], L = S[1], E = o("WAWebModelStorageUtils").getStorage(), k = Array.from(E.tables, function(e) {
			var t = e[0], n = e[1];
			return {
				tableName: t,
				data: n
			};
		}), I = p(null), T = I[0], D = I[1], x = p(null), $ = x[0], P = x[1], N = p(null), M = N[0], w = N[1], A = p(), F = A[0], O = A[1], B = r("useWAWebUnmountSignal")(), W = p([]), q = W[0], U = W[1], V = p(0), H = V[0], G = V[1], z = p(0), j = z[0], K = z[1], Q = p([]), X = Q[0], Y = Q[1], J = p("Table"), Z = J[0], ee = J[1], te = p([{
			type: "GROUP",
			conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.All,
			conditions: []
		}, {
			type: "GROUP",
			conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.Any,
			conditions: []
		}]), ne = te[0], re = te[1], oe = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = e.columnNames, n = e.columnToGroupBy, r = e.conditions, a = e.filters, i = e.offset, s = e.tableName;
				if (!B.aborted && s != null) {
					y(!0);
					var u = yield o("WAWebDeveloperToolsLoadTable").loadTableRows(s, i, t, a, r, n), c = u.rowCount, d = u.table;
					d ? (P(d), l(s), D(null), K(c)) : (l(null), P(null), D("No Data Found"), K(0)), y(!1);
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [l, B.aborted]), ae = d(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (c != null) {
				var e = 0, t = yield o("WAWebDeveloperToolsLoadTable").loadTableHeaders(c), n = i, r = n != null ? (function() {
					var e = new Map(n.columns.map(function(e) {
						return [e.name, e.selected];
					}));
					return t.map(function(t) {
						var n;
						return babelHelpers.extends({}, t, { selected: (n = e.get(t.name)) != null ? n : t.selected });
					});
				})() : t, a = n != null ? n.filters : [], l = n != null ? n.conditions : [{
					type: "GROUP",
					conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.All,
					conditions: []
				}, {
					type: "GROUP",
					conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.Any,
					conditions: []
				}], s = n != null ? n.groupByColumn : null;
				ee("Table"), re(l), G(0), U(r), Y(a), O(s), yield oe({
					columnNames: r,
					columnToGroupBy: s,
					conditions: l,
					filters: a,
					offset: e,
					tableName: c
				});
			}
		}), [
			oe,
			i,
			c
		]);
		m(function() {
			ae();
		}, [ae]);
		var ie = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				U(e), yield oe({
					columnNames: e,
					columnToGroupBy: F,
					conditions: ne,
					filters: X,
					offset: H,
					tableName: c
				});
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [
			oe,
			c,
			H,
			X,
			ne,
			F
		]), le = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				Y(e), G(0), yield oe({
					columnNames: q,
					columnToGroupBy: F,
					conditions: ne,
					filters: e,
					offset: 0,
					tableName: c
				});
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [
			oe,
			c,
			q,
			ne,
			F
		]), se = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield oe({
					columnNames: q,
					columnToGroupBy: F,
					conditions: e,
					filters: X,
					offset: 0,
					tableName: c
				}), G(0);
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [
			q,
			oe,
			X,
			F,
			c
		]), ue = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				O(e), w(null), yield oe({
					columnNames: q,
					columnToGroupBy: e,
					conditions: ne,
					filters: X,
					offset: 0,
					tableName: c
				});
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [
			q,
			ne,
			oe,
			X,
			c
		]), ce = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (c != null) {
					v(!0);
					var t;
					try {
						t = e === "json" ? yield o("WAWebDeveloperToolsLoadTable").genJSONfromTable(c, q, X, ne) : yield o("WAWebDeveloperToolsLoadTable").genCSVfromTable({
							columns: q,
							filters: X,
							groups: ne,
							tableName: c
						});
					} finally {
						v(!1);
					}
					var n = (c != null ? c : "table") + "-", r = e === "csv" ? o("WAWebFileSaverTypes").AllowedFileExtensions.CSV : e === "json" ? o("WAWebFileSaverTypes").AllowedFileExtensions.JSON : (function() {
						throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
					})();
					yield o("WAWebFileSaver").FileSaver.downloadData(t, n, r);
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [
			q,
			ne,
			X,
			c
		]), de = d(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (!(c == null || F == null)) {
				L(!0);
				var e;
				try {
					e = yield o("WAWebDeveloperToolsLoadTable").genGroupByChartData(c, q, X, ne, F);
				} finally {
					L(!1);
				}
				w(e);
			}
		}), [
			q,
			ne,
			X,
			F,
			c
		]), me = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				G(e), yield oe({
					columnNames: q,
					columnToGroupBy: F,
					conditions: ne,
					filters: X,
					offset: e,
					tableName: c
				});
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [
			q,
			ne,
			oe,
			X,
			F,
			c
		]), pe = d(function() {
			c != null && (o("WAWebDeveloperToolsDBViewerPinnedQueriesODS").logQueryPinned(), i != null && o("WAWebDeveloperToolsDBViewerPinnedQueriesODS").logQueryRepinned(), o("WAWebDeveloperToolsDBViewerPinnedQueries").addPinnedQuery(o("WAWebDeveloperToolsDBViewerPinnedQueries").createPinnedQuery({
				columns: q,
				conditions: ne,
				filters: X,
				groupByColumn: F,
				tableName: c
			})));
		}, [
			q,
			ne,
			X,
			F,
			i,
			c
		]);
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			className: "x5yr21d",
			gap: 12,
			children: [i == null && u.jsx(o("WAWebFlex.react").FlexColumn, {
				className: (e || (e = r("stylex")))([_.tableSelector, _.fullHeight]),
				shrink: 0,
				children: u.jsx(o("WAWebDeveloperToolsDBViewerTableSelector.react").DBTableSelector, {
					refetchTable: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						yield oe({
							columnNames: q,
							columnToGroupBy: F,
							conditions: ne,
							filters: X,
							offset: H,
							tableName: c
						});
					}),
					canRefetch: c != null,
					selectedTableName: c,
					onTableSelect: function(t) {
						G(0), re([{
							type: "GROUP",
							conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.All,
							conditions: []
						}, {
							type: "GROUP",
							conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.Any,
							conditions: []
						}]), f(t);
					},
					tables: k
				})
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				grow: 1,
				className: "x5yr21d",
				gap: 12,
				children: [
					o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(q) && u.jsx(r("WAWebDeveloperToolsDBViewerControlCenter.react"), {
						generatingExport: b,
						onDownloadExport: ce,
						onPageViewChange: ee,
						groupByColumn: F,
						onGroupByChange: ue,
						groups: ne,
						pageView: Z,
						reset: ae,
						onColumnChange: ie,
						columns: q,
						rowCount: j,
						offset: H,
						filters: X,
						onFilterChange: le,
						onPinQuery: pe
					}),
					Z === "Table" && F == null && u.jsx(r("WAWebDeveloperBorderBox.react"), { children: u.jsx(o("WAWebDeveloperToolsDBViewerTable.react").TableViewer, {
						loading: h,
						offset: H,
						filterColumns: q,
						table: $,
						errorMsg: T
					}) }),
					Z === "Table" && F != null && u.jsx(r("WAWebDeveloperBorderBox.react"), { children: u.jsx(r("WAWebDeveloperToolsDBViewerGroupByTable.react"), {
						generatingGraph: R,
						groupByColumn: F,
						onGenChart: de,
						errorMsg: T,
						offset: H,
						table: $,
						chartData: M
					}) }),
					Z === "Query Builder" && u.jsx(r("WAWebDeveloperBorderBox.react"), { children: u.jsx(r("WAWebDeveloperToolsDBViewerQueryBuilder.react"), {
						loading: h,
						columns: q,
						onGroupChange: re,
						onPageViewChange: ee,
						conditions: ne,
						onExecuteQuery: se
					}) }),
					$ != null && u.jsx(o("WAWebDeveloperToolsDBViewerPagination.react").DeveloperToolsDBViewerPagination, {
						offset: H,
						onOffsetChange: me,
						rowCount: j
					})
				]
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.Pages = f, l.DeveloperToolsDBViewer = g;
}), 98);
