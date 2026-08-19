__d("WAMFlowsCTWAEditorComponentRenderer.react", [
	"WAFlowsComponentsCommon",
	"WAMFlowsCTWAEditorComponentCalendarPicker.react",
	"WAMFlowsCTWAEditorValidationConfig",
	"WAMFlowsCTWAFormInputTypes",
	"WAMFlowsHSMEditorComponentCheckboxGroup.react",
	"WAMFlowsHSMEditorComponentDatePicker.react",
	"WAMFlowsHSMEditorComponentDropdown.react",
	"WAMFlowsHSMEditorComponentImage.react",
	"WAMFlowsHSMEditorComponentOptIn",
	"WAMFlowsHSMEditorComponentRadioButtonsGroup.react",
	"WAMFlowsHSMEditorComponentText.react",
	"WAMFlowsHSMEditorComponentTextArea.react",
	"WAMFlowsHSMEditorComponentTextInput.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useCallback, c = 10;
	function d(e) {
		var t, n = e.component, a = e.isRemovable, i = a === void 0 ? !0 : a, l = e.isTypeChangeDisabled, d = l === void 0 ? !1 : l, m = e.onComponentChange, p = e.onComponentRemove, _ = n.flowJSON, f = _.label, g = (t = n.presetType) != null ? t : o("WAMFlowsCTWAFormInputTypes").detectPresetType(typeof f == "string" ? f : null, _.name), h = o("WAMFlowsCTWAFormInputTypes").isPresetWithLockedLabel(g), y = o("WAMFlowsCTWAFormInputTypes").isPresetWithLockedHelperText(g), C = o("WAMFlowsCTWAFormInputTypes").isPresetWithLockedOptions(g), b = o("WAMFlowsCTWAFormInputTypes").isPresetWithLockedOptions(g), v = u(function(e) {
			var t = babelHelpers.extends({}, e, { "label-variant": o("WAFlowsComponentsCommon").WhatsAppFlowsTextEntryLabelVariant.LARGE });
			m(t);
		}, [m]), S = u(function(e) {
			var t = e["data-source"], n = Array.isArray(t) ? t.length : 0;
			if (n > c) {
				var r = babelHelpers.extends({}, e, { type: "Dropdown" });
				m(r);
			} else {
				var o = babelHelpers.extends({}, e, { type: "RadioButtonsGroup" });
				m(o);
			}
		}, [m]);
		switch (_.type) {
			case "TextHeading":
			case "TextSubheading":
			case "TextBody":
			case "TextCaption": return s.jsx(r("WAMFlowsHSMEditorComponentText.react"), {
				component: _,
				isRemovable: i,
				isTypeChangeDisabled: d,
				onComponentChange: m,
				onComponentRemove: p
			});
			case "TextInput": return s.jsx(r("WAMFlowsHSMEditorComponentTextInput.react"), {
				component: _,
				isHelperTextDisabled: y,
				isInputTypeChangeDisabled: h,
				isLabelDisabled: h,
				onComponentChange: v,
				onComponentRemove: p
			});
			case "DatePicker": return s.jsx(r("WAMFlowsHSMEditorComponentDatePicker.react"), {
				component: _,
				isLabelDisabled: h,
				onComponentChange: m,
				onComponentRemove: p
			});
			case "CalendarPicker": return s.jsx(r("WAMFlowsCTWAEditorComponentCalendarPicker.react"), {
				component: _,
				isLabelDisabled: h,
				onComponentChange: m,
				onComponentRemove: p
			});
			case "TextArea": return s.jsx(r("WAMFlowsHSMEditorComponentTextArea.react"), {
				component: _,
				isLabelDisabled: h,
				onComponentChange: v,
				onComponentRemove: p
			});
			case "CheckboxGroup": return s.jsx(r("WAMFlowsHSMEditorComponentCheckboxGroup.react"), {
				component: _,
				isLabelDisabled: h,
				isOptionsDisabled: C,
				isOptionsHidden: b,
				onComponentChange: m,
				onComponentRemove: p
			});
			case "RadioButtonsGroup": return s.jsx(r("WAMFlowsHSMEditorComponentRadioButtonsGroup.react"), {
				component: _,
				isLabelDisabled: h,
				isOptionsDisabled: C,
				isOptionsHidden: b,
				maxOptions: o("WAMFlowsCTWAEditorValidationConfig").WAM_FLOWS_CTWA_VALIDATION_CONFIG.RadioButtonsGroup.maxOptions,
				onComponentChange: b ? m : S,
				onComponentRemove: p
			});
			case "Dropdown":
				if (g === "single_choice" || g === "gender") {
					var R = babelHelpers.extends({}, _, { type: "RadioButtonsGroup" });
					return s.jsx(r("WAMFlowsHSMEditorComponentRadioButtonsGroup.react"), {
						component: R,
						isLabelDisabled: h,
						isOptionsDisabled: C,
						isOptionsHidden: b,
						maxOptions: o("WAMFlowsCTWAEditorValidationConfig").WAM_FLOWS_CTWA_VALIDATION_CONFIG.RadioButtonsGroup.maxOptions,
						onComponentChange: b ? m : S,
						onComponentRemove: p
					});
				}
				return s.jsx(r("WAMFlowsHSMEditorComponentDropdown.react"), {
					component: _,
					onComponentChange: m,
					onComponentRemove: p
				});
			case "OptIn": return s.jsx(r("WAMFlowsHSMEditorComponentOptIn"), {
				component: _,
				onComponentChange: m,
				onComponentRemove: p
			});
			case "Image": return s.jsx(r("WAMFlowsHSMEditorComponentImage.react"), {
				component: _,
				onComponentChange: m,
				onComponentRemove: p
			});
			default: return s.jsx(s.Fragment, {});
		}
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
