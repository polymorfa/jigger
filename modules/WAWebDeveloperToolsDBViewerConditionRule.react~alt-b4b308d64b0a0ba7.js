__d("WAWebDeveloperToolsDBViewerConditionRule.react", [
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerQueryBuilderFilters.react",
	"WAWebFlex.react",
	"WAWebXIcon.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n = e.columns, a = e.conditionField, i = e.handleRemove, l = e.onChangeConditions;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			align: "center",
			grow: 1,
			children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
				gap: 4,
				children: [
					s.jsx((t = o("WAWebDeveloperToolsDBViewerQueryBuilderFilters.react")).FieldSelector, {
						label: a.key,
						conditionField: a,
						onChangeConditions: l,
						fields: n
					}),
					s.jsx(t.FilterSelector, {
						columns: n,
						conditionField: a,
						onChangeConditions: l
					}),
					s.jsx(t.StringInput, {
						conditionField: a,
						onChangeConditions: l
					}),
					s.jsx(t.BooleanFilter, {
						conditionField: a,
						onChangeConditions: l
					}),
					s.jsx(t.NumberFilter, {
						conditionField: a,
						onChangeConditions: l
					})
				]
			}), s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
				xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
				light: !0,
				onClick: i,
				children: s.jsx(o("WAWebXIcon.react").XIcon, {})
			})]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
