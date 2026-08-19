__d("WAMFlowsHSMEditorComponentCheckboxGroup.react", [
	"GeoHStack.react",
	"GeoVStack.react",
	"WAMFlowsHSMEditorCommonOptionsList.react",
	"WAMFlowsHSMEditorCommonOptionsUtils.react",
	"WAMFlowsHSMEditorInputField.react",
	"WAMFlowsHSMEditorRemoveButton.react",
	"WAMFlowsHSMEditorRequiredInput.react",
	"WAMFlowsHSMFbt",
	"WAMFlowsHSMValidationConfig",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		var t = e.component, n = e.isLabelDisabled, a = e.isOptionsDisabled, i = e.isOptionsHidden, l = e.onComponentChange, c = e.onComponentRemove, d = t["data-source"], m = u(function(e) {
			l(babelHelpers.extends({}, t, { "data-source": e }));
		}, [t, l]), p = u(function(e) {
			l(babelHelpers.extends({}, t, { "data-source": o("WAMFlowsHSMEditorCommonOptionsUtils.react").removeOptionFromDataSource(e, t["data-source"]) }));
		}, [t, l]), _ = u(function() {
			l(babelHelpers.extends({}, t, { "data-source": o("WAMFlowsHSMEditorCommonOptionsUtils.react").addOptionToDataSource(t["data-source"]) }));
		}, [t, l]), f = u(function(e, n) {
			l(babelHelpers.extends({}, t, { "data-source": t["data-source"].map(function(t, r) {
				return t.id === e ? babelHelpers.extends({}, t, {
					id: o("WAMFlowsHSMEditorCommonOptionsUtils.react").generateOptionId(r, n),
					title: n
				}) : t;
			}) }));
		}, [t, l]), g = o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG.CheckboxGroup;
		return s.jsxs(r("GeoVStack.react"), { children: [
			s.jsx(r("WAMFlowsHSMEditorInputField.react"), {
				isDisabled: n,
				isLabelHidden: !0,
				isRequired: !0,
				label: o("WAMFlowsHSMFbt").LABEL_FIELD_LABEL,
				maxLength: g.maxLabel,
				onChange: function(n) {
					l(babelHelpers.extends({}, t, { label: n }));
				},
				value: t.label
			}),
			i !== !0 && s.jsx(r("WAMFlowsHSMEditorCommonOptionsList.react"), {
				dataSource: d,
				isDisabled: a,
				maxLabelLength: g.maxOptionLabel,
				maxOptions: g.maxOptions,
				minOptions: g.minOptions,
				onItemAdd: _,
				onItemRemove: p,
				onItemTitleChange: f,
				setDataSource: m
			}),
			s.jsxs(r("GeoHStack.react"), {
				alignItems: "center",
				justifyContent: "end",
				children: [s.jsx(r("WAMFlowsHSMEditorRequiredInput.react"), {
					onChange: function() {
						l(babelHelpers.extends({}, t, { required: !t.required }));
					},
					value: !!t.required
				}), s.jsx(r("WAMFlowsHSMEditorRemoveButton.react"), { onRemove: c })]
			})
		] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
