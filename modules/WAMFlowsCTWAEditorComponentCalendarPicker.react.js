__d("WAMFlowsCTWAEditorComponentCalendarPicker.react", [
	"GeoHStack.react",
	"GeoVStack.react",
	"WAMFlowsHSMEditorInputField.react",
	"WAMFlowsHSMEditorRemoveButton.react",
	"WAMFlowsHSMEditorRequiredInput.react",
	"WAMFlowsHSMFbt",
	"WAMFlowsHSMValidationConfig",
	"isStringNullOrWhitespaceOnly",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.component, n = e.isLabelDisabled, a = e.onComponentChange, i = e.onComponentRemove, l = o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG.DatePicker;
		return s.jsxs(r("GeoVStack.react"), { children: [
			s.jsx(r("WAMFlowsHSMEditorInputField.react"), {
				isDisabled: n,
				isLabelHidden: !0,
				isRequired: !0,
				label: o("WAMFlowsHSMFbt").LABEL_FIELD_LABEL,
				maxLength: l.maxLabel,
				onChange: function(n) {
					a(babelHelpers.extends({}, t, { label: n }));
				},
				value: typeof t.label == "string" ? t.label : ""
			}),
			s.jsx(r("WAMFlowsHSMEditorInputField.react"), {
				isLabelHidden: !1,
				isRequired: !1,
				label: o("WAMFlowsHSMFbt").HELPER_TEXT_FIELD_LABEL,
				maxLength: l.maxHelperText,
				onChange: function(n) {
					a(babelHelpers.extends({}, t, { "helper-text": r("isStringNullOrWhitespaceOnly")(n) ? void 0 : n }));
				},
				value: typeof t["helper-text"] == "string" ? t["helper-text"] : void 0
			}),
			s.jsxs(r("GeoHStack.react"), {
				alignItems: "center",
				justifyContent: "end",
				children: [s.jsx(r("WAMFlowsHSMEditorRequiredInput.react"), {
					onChange: function() {
						a(babelHelpers.extends({}, t, { required: !t.required }));
					},
					value: !!t.required
				}), s.jsx(r("WAMFlowsHSMEditorRemoveButton.react"), { onRemove: i })]
			})
		] });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
