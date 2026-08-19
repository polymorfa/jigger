__d("WAWebDeveloperToolsDBViewerGroupBy.react", [
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerDropdown.react",
	"WAWebDeveloperToolsDBViewerRowFilter.react",
	"WAWebDeveloperToolsPopoverPill.react",
	"WAWebFlex.react",
	"WAWebLabelOutlineIcon.react",
	"WAWebSearchInput",
	"react",
	"react-compiler-runtime",
	"useWAWebDeveloperToolsDBViewerColumnSearch"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		popover: {
			minWidth: "x1jzhcrs",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(32), n = e.columns, a = e.onGroupByChange, i = e.selectedGroup, l = r("useWAWebDeveloperToolsDBViewerColumnSearch")(n), c = l.formatters, d = l.searchResults, m = l.setQuery, p = i != null ? "Grouping by " + i : "Group by", _ = i != null, f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = s.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, {
			height: 20,
			width: 20
		}), t[0] = f) : f = t[0];
		var g;
		t[1] !== p ? (g = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 8,
			children: [f, p]
		}), t[1] = p, t[2] = g) : g = t[2];
		var h = i == null, y;
		t[3] !== a ? (y = function() {
			return a(null);
		}, t[3] = a, t[4] = y) : y = t[4];
		var C;
		t[5] !== h || t[6] !== y ? (C = s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			disabled: h,
			fullWidth: !0,
			onClick: y,
			children: "Reset"
		}), t[5] = h, t[6] = y, t[7] = C) : C = t[7];
		var b;
		t[8] !== m ? (b = s.jsx(o("WAWebSearchInput").SearchInput, {
			placeholder: "Search fields",
			onSearch: m
		}), t[8] = m, t[9] = b) : b = t[9];
		var v;
		if (t[10] !== c || t[11] !== a || t[12] !== d || t[13] !== i) {
			var S;
			t[15] !== c || t[16] !== a || t[17] !== i ? (S = function(t, n) {
				var e = t.name, r = t.type;
				return s.jsx(o("WAWebDeveloperToolsDBViewerRowFilter.react").Selector, {
					type: r,
					formatters: c,
					onSelect: async function() {
						await a(e);
					},
					filter: e,
					selected: i === e
				}, e + "-" + n);
			}, t[15] = c, t[16] = a, t[17] = i, t[18] = S) : S = t[18], v = d.map(S), t[10] = c, t[11] = a, t[12] = d, t[13] = i, t[14] = v;
		} else v = t[14];
		var R;
		t[19] !== v ? (R = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.fullWidth,
			grow: 1,
			shrink: 0,
			children: v
		}), t[19] = v, t[20] = R) : R = t[20];
		var L;
		t[21] !== p || t[22] !== b || t[23] !== R ? (L = s.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: u.fullWidth,
			grow: 1,
			children: s.jsxs(r("WAWebDeveloperToolsDBViewerDropdown.react"), {
				label: p,
				children: [b, R]
			})
		}), t[21] = p, t[22] = b, t[23] = R, t[24] = L) : L = t[24];
		var E;
		t[25] !== L || t[26] !== C ? (E = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 8,
			grow: 1,
			children: [C, L]
		}), t[25] = L, t[26] = C, t[27] = E) : E = t[27];
		var k;
		return t[28] !== _ || t[29] !== E || t[30] !== g ? (k = s.jsx(o("WAWebDeveloperToolsPopoverPill.react").DeveloperToolsPopoverPill, {
			xstyle: u.popover,
			active: _,
			label: g,
			children: E
		}), t[28] = _, t[29] = E, t[30] = g, t[31] = k) : k = t[31], k;
	}
	l.default = c;
}), 98);
