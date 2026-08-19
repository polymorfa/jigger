__d("WAMFlowsHSMEditorComponentDropdown.react", [
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
		var t = e.component, n = e.onComponentChange, a = e.onComponentRemove, i = t["data-source"], l = u(function(e) {
			n(babelHelpers.extends({}, t, { "data-source": e }));
		}, [t, n]), c = u(function(e) {
			n(babelHelpers.extends({}, t, { "data-source": o("WAMFlowsHSMEditorCommonOptionsUtils.react").removeOptionFromDataSource(e, t["data-source"]) }));
		}, [t, n]), d = u(function() {
			n(babelHelpers.extends({}, t, { "data-source": o("WAMFlowsHSMEditorCommonOptionsUtils.react").addOptionToDataSource(t["data-source"]) }));
		}, [t, n]), m = u(function(e, r) {
			n(babelHelpers.extends({}, t, { "data-source": t["data-source"].map(function(t, n) {
				return t.id === e ? babelHelpers.extends({}, t, {
					id: o("WAMFlowsHSMEditorCommonOptionsUtils.react").generateOptionId(n, r),
					title: r
				}) : t;
			}) }));
		}, [t, n]), p = o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG.Dropdown;
		return s.jsxs(r("GeoVStack.react"), { children: [
			s.jsx(r("WAMFlowsHSMEditorInputField.react"), {
				isLabelHidden: !0,
				isRequired: !0,
				label: o("WAMFlowsHSMFbt").LABEL_FIELD_LABEL,
				maxLength: p.maxLabel,
				onChange: function(r) {
					n(babelHelpers.extends({}, t, { label: r }));
				},
				value: t.label
			}),
			s.jsx(r("WAMFlowsHSMEditorCommonOptionsList.react"), {
				dataSource: i,
				maxLabelLength: p.maxOptionLabel,
				maxOptions: p.maxOptions,
				minOptions: p.minOptions,
				onItemAdd: d,
				onItemRemove: c,
				onItemTitleChange: m,
				setDataSource: l
			}),
			s.jsxs(r("GeoHStack.react"), {
				alignItems: "center",
				justifyContent: "end",
				children: [s.jsx(r("WAMFlowsHSMEditorRequiredInput.react"), {
					onChange: function() {
						n(babelHelpers.extends({}, t, { required: !t.required }));
					},
					value: !!t.required
				}), s.jsx(r("WAMFlowsHSMEditorRemoveButton.react"), { onRemove: a })]
			})
		] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
