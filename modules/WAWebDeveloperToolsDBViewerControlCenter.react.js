__d("WAWebDeveloperToolsDBViewerControlCenter.react", [
	"WAWebDeveloperBorderBox.react",
	"WAWebDeveloperToolsArrayUtils",
	"WAWebDeveloperToolsDBViewer.react",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerColumnFilter.react",
	"WAWebDeveloperToolsDBViewerFilterToggles.react",
	"WAWebDeveloperToolsDBViewerGroupBy.react",
	"WAWebDeveloperToolsDBViewerPageViewSelector.react",
	"WAWebDeveloperToolsDBViewerRowCount.react",
	"WAWebDeveloperToolsDBViewerRowFilter.react",
	"WAWebDeveloperToolsPopoverPill.react",
	"WAWebFlex.react",
	"WAWebXIcon.react",
	"WDSIconIcDownload.react",
	"WDSIconIcPushPin.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebDeveloperToolsDBViewerColumnSelector"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { paddingInline10: {
		paddingInlineStart: "xe2zdcy",
		paddingInlineEnd: "x2vl965",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, c = { topBar: {
		maxHeight: "xkgu5aw",
		minHeight: "x7ywyr2",
		width: "xh8yej3",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(59), n = e.columns, a = e.filters, i = e.generatingExport, l = e.groupByColumn, d = e.groups, p = e.offset, _ = e.onColumnChange, f = e.onDownloadExport, g = e.onFilterChange, h = e.onGroupByChange, y = e.onPageViewChange, C = e.onPinQuery, b = e.pageView, v = e.reset, S = e.rowCount, R;
		t[0] !== d[0].conditions || t[1] !== d[1] ? (R = o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(d[0].conditions) || o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(d[1].conditions), t[0] = d[0].conditions, t[1] = d[1], t[2] = R) : R = t[2];
		var L = R, E;
		t[3] !== n || t[4] !== a || t[5] !== l || t[6] !== L || t[7] !== p || t[8] !== _ ? (E = {
			columns: n,
			filters: a,
			groupByColumn: l,
			offset: p,
			queryActive: L,
			setColumns: _
		}, t[3] = n, t[4] = a, t[5] = l, t[6] = L, t[7] = p, t[8] = _, t[9] = E) : E = t[9];
		var k = m(E), I;
		t[10] !== y || t[11] !== b ? (I = s.jsx(r("WAWebDeveloperToolsDBViewerPageViewSelector.react"), {
			onPageViewChange: y,
			currentPage: b,
			pages: o("WAWebDeveloperToolsDBViewer.react").Pages
		}), t[10] = y, t[11] = b, t[12] = I) : I = t[12];
		var T;
		t[13] !== n || t[14] !== _ ? (T = s.jsx(r("WAWebDeveloperToolsDBViewerColumnFilter.react"), {
			columns: n,
			onColumnChange: _
		}), t[13] = n, t[14] = _, t[15] = T) : T = t[15];
		var D;
		t[16] !== n || t[17] !== a || t[18] !== g ? (D = s.jsx(o("WAWebDeveloperToolsDBViewerRowFilter.react").DeveloperToolsDBViewerRowFilter, {
			columns: n,
			filters: a,
			onFilterChange: g
		}), t[16] = n, t[17] = a, t[18] = g, t[19] = D) : D = t[19];
		var x;
		t[20] !== n || t[21] !== l || t[22] !== h ? (x = s.jsx(r("WAWebDeveloperToolsDBViewerGroupBy.react"), {
			columns: n,
			onGroupByChange: h,
			selectedGroup: l
		}), t[20] = n, t[21] = l, t[22] = h, t[23] = x) : x = t[23];
		var $;
		t[24] !== v || t[25] !== k ? ($ = k && s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding4,
			light: !0,
			onClick: v,
			children: s.jsx(o("WAWebXIcon.react").XIcon, {})
		}), t[24] = v, t[25] = k, t[26] = $) : $ = t[26];
		var P;
		t[27] !== n || t[28] !== S ? (P = o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(n) && s.jsx(r("WAWebDeveloperToolsDBViewerRowCount.react"), { rowCount: S }), t[27] = n, t[28] = S, t[29] = P) : P = t[29];
		var N;
		t[30] !== I || t[31] !== T || t[32] !== D || t[33] !== x || t[34] !== $ || t[35] !== P ? (N = s.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 8,
			align: "center",
			xstyle: u.paddingInline10,
			shrink: 0,
			children: [
				I,
				T,
				D,
				x,
				$,
				P
			]
		}), t[30] = I, t[31] = T, t[32] = D, t[33] = x, t[34] = $, t[35] = P, t[36] = N) : N = t[36];
		var M;
		t[37] === Symbol.for("react.memo_cache_sentinel") ? (M = s.jsx(r("WDSIconIcPushPin.react"), {}), t[37] = M) : M = t[37];
		var w;
		t[38] !== C ? (w = s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding4,
			light: !0,
			onClick: C,
			children: M
		}), t[38] = C, t[39] = w) : w = t[39];
		var A;
		t[40] === Symbol.for("react.memo_cache_sentinel") ? (A = s.jsx(r("WDSIconIcDownload.react"), {}), t[40] = A) : A = t[40];
		var F;
		t[41] === Symbol.for("react.memo_cache_sentinel") ? (F = { className: "x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1heor9g x1ypdohk xln7xf2 x1yrsyyn x10b6aqq xmzvs34 xf159sx x1yc453h xh8yej3" }, t[41] = F) : F = t[41];
		var O;
		t[42] !== f ? (O = s.jsx("button", babelHelpers.extends({}, F, {
			onClick: function() {
				f("csv");
			},
			type: "button",
			children: "Export CSV"
		})), t[42] = f, t[43] = O) : O = t[43];
		var B;
		t[44] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1heor9g x1ypdohk xln7xf2 x1yrsyyn x10b6aqq xmzvs34 xf159sx x1yc453h xh8yej3" }, t[44] = B) : B = t[44];
		var W;
		t[45] !== f ? (W = s.jsx("button", babelHelpers.extends({}, B, {
			onClick: function() {
				f("json");
			},
			type: "button",
			children: "Export JSON"
		})), t[45] = f, t[46] = W) : W = t[46];
		var q;
		t[47] !== O || t[48] !== W ? (q = s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [O, W] }), t[47] = O, t[48] = W, t[49] = q) : q = t[49];
		var U;
		t[50] !== i || t[51] !== q ? (U = s.jsx(o("WAWebDeveloperToolsPopoverPill.react").DeveloperToolsPopoverPill, {
			active: !1,
			disabled: i,
			label: A,
			children: q
		}), t[50] = i, t[51] = q, t[52] = U) : U = t[52];
		var V;
		t[53] !== w || t[54] !== U ? (V = s.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 4,
			align: "center",
			xstyle: u.paddingInline10,
			children: [w, U]
		}), t[53] = w, t[54] = U, t[55] = V) : V = t[55];
		var H;
		return t[56] !== V || t[57] !== N ? (H = s.jsxs(r("WAWebDeveloperBorderBox.react"), {
			centerY: !0,
			spaceApart: !0,
			flex: !0,
			xstyle: c.topBar,
			children: [N, V]
		}), t[56] = V, t[57] = N, t[58] = H) : H = t[58], H;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(9), n = e.columns, a = e.filters, i = e.groupByColumn, l = e.offset, s = e.queryActive, u = e.setColumns, c = r("useWAWebDeveloperToolsDBViewerColumnSelector")(n, u), d = c.checkSelectionState, m;
		t[0] !== d || t[1] !== n ? (m = d !== o("WAWebDeveloperToolsDBViewerFilterToggles.react").FilterState.ALL && o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(n), t[0] = d, t[1] = n, t[2] = m) : m = t[2];
		var p = m, _;
		return t[3] !== p || t[4] !== a || t[5] !== i || t[6] !== l || t[7] !== s ? (_ = p || o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(a) || l > 0 || s || i != null, t[3] = p, t[4] = a, t[5] = i, t[6] = l, t[7] = s, t[8] = _) : _ = t[8], _;
	}
	l.default = d;
}), 98);
