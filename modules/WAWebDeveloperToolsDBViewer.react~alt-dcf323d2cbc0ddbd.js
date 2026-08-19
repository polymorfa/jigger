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
		var n, a = t.initialQueryState, i = t.setTitle, l = p((n = a == null ? void 0 : a.tableName) != null ? n : null), s = l[0], c = l[1], f = p(!1), g = f[0], h = f[1], y = p(!1), C = y[0], b = y[1], v = p(!1), S = v[0], R = v[1], L = o("WAWebModelStorageUtils").getStorage(), E = Array.from(L.tables, function(e) {
			var t = e[0], n = e[1];
			return {
				tableName: t,
				data: n
			};
		}), k = p(null), I = k[0], T = k[1], D = p(null), x = D[0], $ = D[1], P = p(null), N = P[0], M = P[1], w = p(), A = w[0], F = w[1], O = r("useWAWebUnmountSignal")(), B = p([]), W = B[0], q = B[1], U = p(0), V = U[0], H = U[1], G = p(0), z = G[0], j = G[1], K = p([]), Q = K[0], X = K[1], Y = p("Table"), J = Y[0], Z = Y[1], ee = p([{
			type: "GROUP",
			conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.All,
			conditions: []
		}, {
			type: "GROUP",
			conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.Any,
			conditions: []
		}]), te = ee[0], ne = ee[1], re = d(async function(e) {
			var t = e.columnNames, n = e.columnToGroupBy, r = e.conditions, a = e.filters, l = e.offset, s = e.tableName;
			if (!O.aborted && s != null) {
				h(!0);
				var u = await o("WAWebDeveloperToolsLoadTable").loadTableRows(s, l, t, a, r, n), c = u.rowCount, d = u.table;
				d ? ($(d), i(s), T(null), j(c)) : (i(null), $(null), T("No Data Found"), j(0)), h(!1);
			}
		}, [i, O.aborted]), oe = d(async function() {
			if (s != null) {
				var e = 0, t = await o("WAWebDeveloperToolsLoadTable").loadTableHeaders(s), n = a, r = n != null ? (function() {
					var e = new Map(n.columns.map(function(e) {
						return [e.name, e.selected];
					}));
					return t.map(function(t) {
						var n;
						return babelHelpers.extends({}, t, { selected: (n = e.get(t.name)) != null ? n : t.selected });
					});
				})() : t, i = n != null ? n.filters : [], l = n != null ? n.conditions : [{
					type: "GROUP",
					conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.All,
					conditions: []
				}, {
					type: "GROUP",
					conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.Any,
					conditions: []
				}], u = n != null ? n.groupByColumn : null;
				Z("Table"), ne(l), H(0), q(r), X(i), F(u), await re({
					columnNames: r,
					columnToGroupBy: u,
					conditions: l,
					filters: i,
					offset: e,
					tableName: s
				});
			}
		}, [
			re,
			a,
			s
		]);
		m(function() {
			oe();
		}, [oe]);
		var ae = d(async function(e) {
			q(e), await re({
				columnNames: e,
				columnToGroupBy: A,
				conditions: te,
				filters: Q,
				offset: V,
				tableName: s
			});
		}, [
			re,
			s,
			V,
			Q,
			te,
			A
		]), ie = d(async function(e) {
			X(e), H(0), await re({
				columnNames: W,
				columnToGroupBy: A,
				conditions: te,
				filters: e,
				offset: 0,
				tableName: s
			});
		}, [
			re,
			s,
			W,
			te,
			A
		]), le = d(async function(e) {
			await re({
				columnNames: W,
				columnToGroupBy: A,
				conditions: e,
				filters: Q,
				offset: 0,
				tableName: s
			}), H(0);
		}, [
			W,
			re,
			Q,
			A,
			s
		]), se = d(async function(e) {
			F(e), M(null), await re({
				columnNames: W,
				columnToGroupBy: e,
				conditions: te,
				filters: Q,
				offset: 0,
				tableName: s
			});
		}, [
			W,
			te,
			re,
			Q,
			s
		]), ue = d(async function(e) {
			if (s != null) {
				b(!0);
				var t;
				try {
					t = e === "json" ? await o("WAWebDeveloperToolsLoadTable").genJSONfromTable(s, W, Q, te) : await o("WAWebDeveloperToolsLoadTable").genCSVfromTable({
						columns: W,
						filters: Q,
						groups: te,
						tableName: s
					});
				} finally {
					b(!1);
				}
				var n = (s != null ? s : "table") + "-", r = e === "csv" ? o("WAWebFileSaverTypes").AllowedFileExtensions.CSV : e === "json" ? o("WAWebFileSaverTypes").AllowedFileExtensions.JSON : (function() {
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
				})();
				await o("WAWebFileSaver").FileSaver.downloadData(t, n, r);
			}
		}, [
			W,
			te,
			Q,
			s
		]), ce = d(async function() {
			if (!(s == null || A == null)) {
				R(!0);
				var e;
				try {
					e = await o("WAWebDeveloperToolsLoadTable").genGroupByChartData(s, W, Q, te, A);
				} finally {
					R(!1);
				}
				M(e);
			}
		}, [
			W,
			te,
			Q,
			A,
			s
		]), de = d(async function(e) {
			H(e), await re({
				columnNames: W,
				columnToGroupBy: A,
				conditions: te,
				filters: Q,
				offset: e,
				tableName: s
			});
		}, [
			W,
			te,
			re,
			Q,
			A,
			s
		]), me = d(function() {
			s != null && (o("WAWebDeveloperToolsDBViewerPinnedQueriesODS").logQueryPinned(), a != null && o("WAWebDeveloperToolsDBViewerPinnedQueriesODS").logQueryRepinned(), o("WAWebDeveloperToolsDBViewerPinnedQueries").addPinnedQuery(o("WAWebDeveloperToolsDBViewerPinnedQueries").createPinnedQuery({
				columns: W,
				conditions: te,
				filters: Q,
				groupByColumn: A,
				tableName: s
			})));
		}, [
			W,
			te,
			Q,
			A,
			a,
			s
		]);
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			className: "x5yr21d",
			gap: 12,
			children: [a == null && u.jsx(o("WAWebFlex.react").FlexColumn, {
				className: (e || (e = r("stylex")))([_.tableSelector, _.fullHeight]),
				shrink: 0,
				children: u.jsx(o("WAWebDeveloperToolsDBViewerTableSelector.react").DBTableSelector, {
					refetchTable: async function() {
						await re({
							columnNames: W,
							columnToGroupBy: A,
							conditions: te,
							filters: Q,
							offset: V,
							tableName: s
						});
					},
					canRefetch: s != null,
					selectedTableName: s,
					onTableSelect: function(t) {
						H(0), ne([{
							type: "GROUP",
							conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.All,
							conditions: []
						}, {
							type: "GROUP",
							conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.Any,
							conditions: []
						}]), c(t);
					},
					tables: E
				})
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				grow: 1,
				className: "x5yr21d",
				gap: 12,
				children: [
					o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(W) && u.jsx(r("WAWebDeveloperToolsDBViewerControlCenter.react"), {
						generatingExport: C,
						onDownloadExport: ue,
						onPageViewChange: Z,
						groupByColumn: A,
						onGroupByChange: se,
						groups: te,
						pageView: J,
						reset: oe,
						onColumnChange: ae,
						columns: W,
						rowCount: z,
						offset: V,
						filters: Q,
						onFilterChange: ie,
						onPinQuery: me
					}),
					J === "Table" && A == null && u.jsx(r("WAWebDeveloperBorderBox.react"), { children: u.jsx(o("WAWebDeveloperToolsDBViewerTable.react").TableViewer, {
						loading: g,
						offset: V,
						filterColumns: W,
						table: x,
						errorMsg: I
					}) }),
					J === "Table" && A != null && u.jsx(r("WAWebDeveloperBorderBox.react"), { children: u.jsx(r("WAWebDeveloperToolsDBViewerGroupByTable.react"), {
						generatingGraph: S,
						groupByColumn: A,
						onGenChart: ce,
						errorMsg: I,
						offset: V,
						table: x,
						chartData: N
					}) }),
					J === "Query Builder" && u.jsx(r("WAWebDeveloperBorderBox.react"), { children: u.jsx(r("WAWebDeveloperToolsDBViewerQueryBuilder.react"), {
						loading: g,
						columns: W,
						onGroupChange: ne,
						onPageViewChange: Z,
						conditions: te,
						onExecuteQuery: le
					}) }),
					x != null && u.jsx(o("WAWebDeveloperToolsDBViewerPagination.react").DeveloperToolsDBViewerPagination, {
						offset: V,
						onOffsetChange: de,
						rowCount: z
					})
				]
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.Pages = f, l.DeveloperToolsDBViewer = g;
}), 98);
