__d("WAWebDeveloperToolsDBViewerGroupBy.react", [
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerDropdown.react",
	"WAWebDeveloperToolsDBViewerRowFilter.react",
	"WAWebDeveloperToolsPopoverPill.react",
	"WAWebFlex.react",
	"WAWebLabelOutlineIcon.react",
	"WAWebSearchInput",
	"asyncToGeneratorRuntime",
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
		var t = o("react-compiler-runtime").c(32), a = e.columns, i = e.onGroupByChange, l = e.selectedGroup, c = r("useWAWebDeveloperToolsDBViewerColumnSearch")(a), d = c.formatters, m = c.searchResults, p = c.setQuery, _ = l != null ? "Grouping by " + l : "Group by", f = l != null, g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = s.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, {
			height: 20,
			width: 20
		}), t[0] = g) : g = t[0];
		var h;
		t[1] !== _ ? (h = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 8,
			children: [g, _]
		}), t[1] = _, t[2] = h) : h = t[2];
		var y = l == null, C;
		t[3] !== i ? (C = function() {
			return i(null);
		}, t[3] = i, t[4] = C) : C = t[4];
		var b;
		t[5] !== y || t[6] !== C ? (b = s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			disabled: y,
			fullWidth: !0,
			onClick: C,
			children: "Reset"
		}), t[5] = y, t[6] = C, t[7] = b) : b = t[7];
		var v;
		t[8] !== p ? (v = s.jsx(o("WAWebSearchInput").SearchInput, {
			placeholder: "Search fields",
			onSearch: p
		}), t[8] = p, t[9] = v) : v = t[9];
		var S;
		if (t[10] !== d || t[11] !== i || t[12] !== m || t[13] !== l) {
			var R;
			t[15] !== d || t[16] !== i || t[17] !== l ? (R = function(t, r) {
				var e = t.name, a = t.type;
				return s.jsx(o("WAWebDeveloperToolsDBViewerRowFilter.react").Selector, {
					type: a,
					formatters: d,
					onSelect: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						yield i(e);
					}),
					filter: e,
					selected: l === e
				}, e + "-" + r);
			}, t[15] = d, t[16] = i, t[17] = l, t[18] = R) : R = t[18], S = m.map(R), t[10] = d, t[11] = i, t[12] = m, t[13] = l, t[14] = S;
		} else S = t[14];
		var L;
		t[19] !== S ? (L = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.fullWidth,
			grow: 1,
			shrink: 0,
			children: S
		}), t[19] = S, t[20] = L) : L = t[20];
		var E;
		t[21] !== _ || t[22] !== v || t[23] !== L ? (E = s.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: u.fullWidth,
			grow: 1,
			children: s.jsxs(r("WAWebDeveloperToolsDBViewerDropdown.react"), {
				label: _,
				children: [v, L]
			})
		}), t[21] = _, t[22] = v, t[23] = L, t[24] = E) : E = t[24];
		var k;
		t[25] !== E || t[26] !== b ? (k = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 8,
			grow: 1,
			children: [b, E]
		}), t[25] = E, t[26] = b, t[27] = k) : k = t[27];
		var I;
		return t[28] !== f || t[29] !== k || t[30] !== h ? (I = s.jsx(o("WAWebDeveloperToolsPopoverPill.react").DeveloperToolsPopoverPill, {
			xstyle: u.popover,
			active: f,
			label: h,
			children: k
		}), t[28] = f, t[29] = k, t[30] = h, t[31] = I) : I = t[31], I;
	}
	l.default = c;
}), 98);
