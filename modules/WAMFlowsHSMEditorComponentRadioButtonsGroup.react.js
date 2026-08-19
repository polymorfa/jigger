__d("WAMFlowsHSMEditorComponentRadioButtonsGroup.react", [
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
		var t = e.component, n = e.isLabelDisabled, a = e.isOptionsDisabled, i = e.isOptionsHidden, l = e.maxOptions, c = e.onComponentChange, d = e.onComponentRemove, m = t["data-source"], p = u(function(e) {
			c(babelHelpers.extends({}, t, { "data-source": e }));
		}, [t, c]), _ = u(function(e) {
			c(babelHelpers.extends({}, t, { "data-source": o("WAMFlowsHSMEditorCommonOptionsUtils.react").removeOptionFromDataSource(e, t["data-source"]) }));
		}, [t, c]), f = u(function() {
			c(babelHelpers.extends({}, t, { "data-source": o("WAMFlowsHSMEditorCommonOptionsUtils.react").addOptionToDataSource(t["data-source"]) }));
		}, [t, c]), g = u(function(e, n) {
			c(babelHelpers.extends({}, t, { "data-source": t["data-source"].map(function(t, r) {
				return t.id === e ? babelHelpers.extends({}, t, {
					id: o("WAMFlowsHSMEditorCommonOptionsUtils.react").generateOptionId(r, n),
					title: n
				}) : t;
			}) }));
		}, [t, c]), h = o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG.RadioButtonsGroup;
		return s.jsxs(r("GeoVStack.react"), { children: [
			s.jsx(r("WAMFlowsHSMEditorInputField.react"), {
				isDisabled: n,
				isLabelHidden: !0,
				isRequired: !0,
				label: o("WAMFlowsHSMFbt").LABEL_FIELD_LABEL,
				maxLength: o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG.RadioButtonsGroup.maxLabel,
				onChange: function(n) {
					c(babelHelpers.extends({}, t, { label: n }));
				},
				value: t.label
			}),
			i !== !0 && s.jsx(r("WAMFlowsHSMEditorCommonOptionsList.react"), {
				dataSource: m,
				isDisabled: a,
				maxLabelLength: h.maxOptionLabel,
				maxOptions: l != null ? l : h.maxOptions,
				minOptions: h.minOptions,
				onItemAdd: f,
				onItemRemove: _,
				onItemTitleChange: g,
				setDataSource: p
			}),
			s.jsxs(r("GeoHStack.react"), {
				alignItems: "center",
				justifyContent: "end",
				children: [s.jsx(r("WAMFlowsHSMEditorRequiredInput.react"), {
					onChange: function() {
						c(babelHelpers.extends({}, t, { required: !t.required }));
					},
					value: !!t.required
				}), s.jsx(r("WAMFlowsHSMEditorRemoveButton.react"), { onRemove: d })]
			})
		] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
