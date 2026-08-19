__d("WAWebDeveloperToolsDBViewerConditionRule.react", [
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerQueryBuilderFilters.react",
	"WAWebFlex.react",
	"WAWebXIcon.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(22), n = e.columns, a = e.conditionField, i = e.handleRemove, l = e.onChangeConditions, u, c;
		t[0] !== n || t[1] !== a || t[2] !== l ? (u = s.jsx(o("WAWebDeveloperToolsDBViewerQueryBuilderFilters.react").FieldSelector, {
			label: a.key,
			conditionField: a,
			onChangeConditions: l,
			fields: n
		}), c = s.jsx(o("WAWebDeveloperToolsDBViewerQueryBuilderFilters.react").FilterSelector, {
			columns: n,
			conditionField: a,
			onChangeConditions: l
		}), t[0] = n, t[1] = a, t[2] = l, t[3] = u, t[4] = c) : (u = t[3], c = t[4]);
		var d, m, p;
		t[5] !== a || t[6] !== l ? (d = s.jsx(o("WAWebDeveloperToolsDBViewerQueryBuilderFilters.react").StringInput, {
			conditionField: a,
			onChangeConditions: l
		}), m = s.jsx(o("WAWebDeveloperToolsDBViewerQueryBuilderFilters.react").BooleanFilter, {
			conditionField: a,
			onChangeConditions: l
		}), p = s.jsx(o("WAWebDeveloperToolsDBViewerQueryBuilderFilters.react").NumberFilter, {
			conditionField: a,
			onChangeConditions: l
		}), t[5] = a, t[6] = l, t[7] = d, t[8] = m, t[9] = p) : (d = t[7], m = t[8], p = t[9]);
		var _;
		t[10] !== u || t[11] !== c || t[12] !== d || t[13] !== m || t[14] !== p ? (_ = s.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 4,
			children: [
				u,
				c,
				d,
				m,
				p
			]
		}), t[10] = u, t[11] = c, t[12] = d, t[13] = m, t[14] = p, t[15] = _) : _ = t[15];
		var f;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (f = s.jsx(o("WAWebXIcon.react").XIcon, {}), t[16] = f) : f = t[16];
		var g;
		t[17] !== i ? (g = s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
			light: !0,
			onClick: i,
			children: f
		}), t[17] = i, t[18] = g) : g = t[18];
		var h;
		return t[19] !== _ || t[20] !== g ? (h = s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			align: "center",
			grow: 1,
			children: [_, g]
		}), t[19] = _, t[20] = g, t[21] = h) : h = t[21], h;
	}
	l.default = u;
}), 98);
