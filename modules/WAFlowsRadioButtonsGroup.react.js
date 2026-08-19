__d("WAFlowsRadioButtonsGroup.react", [
	"WAFlowsComponentsCommon",
	"WAFlowsFormContext",
	"WAFlowsFormValidationUtils",
	"WAFlowsListSelectionComponentResponseView.react",
	"WAFlowsSelectOptionList.react",
	"WAFlowsTypes",
	"WAFlowsUseDataSourceFormValueReset",
	"WAFlowsUseValueUpdaterOnInit",
	"WAFlowsValidationConstants",
	"WAFlowsWELJUtils",
	"WDSNativeSelectListOptionConstant",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"dataSource",
		"mediaSize",
		"onSelect",
		"onUnselect",
		"version"
	], s, u = s || (s = o("react")), c = [];
	function d(t) {
		var n = t.dataSource, a = n === void 0 ? c : n, i = t.mediaSize, l = t.onSelect, s = t.onUnselect, d = t.version, m = babelHelpers.objectWithoutPropertiesLoose(t, e), p = o("WAFlowsFormContext").useWAFlowsForm(), _ = p.getError, f = p.getValue, g = p.setValue, h = _(m.name), y = h != null && typeof h != "boolean" ? h : void 0;
		o("WAFlowsUseDataSourceFormValueReset").useWAFlowsDataSourceFormReset(m.name, a, o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RADIOBUTTONS_GROUP);
		var C = f(m.name);
		o("WAFlowsUseValueUpdaterOnInit").useValueUpdaterOnInit({
			initialValue: C,
			updateCondition: function(t, n) {
				return !o("WAFlowsFormValidationUtils").isEqual(t, n);
			},
			onUpdate: l,
			isEnabled: o("WAFlowsComponentsCommon").getExecuteOnSelectActionScreenChange(d)
		});
		var b = function(t) {
			var e = f(m.name), n = m.required !== !0 && e === t;
			g(m.name, n ? void 0 : t), s && n ? s() : (s !== void 0 && ![
				void 0,
				"",
				t
			].includes(e) && s(), l == null || l());
		};
		return u.jsx(r("WAFlowsSelectOptionList.react"), babelHelpers.extends({}, m, {
			dataSource: a,
			value: f(m.name),
			onChange: b,
			multiple: !1,
			version: d,
			errorMessage: y,
			mediaSize: i
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = [
		o("WAFlowsValidationConstants").REQUIRED_AND_ENABLED,
		o("WAFlowsValidationConstants").REQUIRED_AND_VISIBLE,
		o("WAFlowsValidationConstants").DISABLED_OPTION_SELECTED
	], p = "RadioButtonsGroup", _ = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			label: { type: "string" },
			name: { type: "string" },
			required: { type: "boolean" },
			dataSource: babelHelpers.extends({
				type: "array",
				minItems: o("WDSNativeSelectListOptionConstant").SELECT_LIST_MIN_OPTIONS,
				maxItems: o("WDSNativeSelectListOptionConstant").SELECT_LIST_MAX_OPTIONS
			}, o("WAFlowsWELJUtils").getHardValidation([o("WAFlowsValidationConstants").NON_EMPTY_ID_IN_DATA_SOURCE, o("WAFlowsValidationConstants").UNIQUE_IDS_IN_DATA_SOURCE]), { items: {
				type: "object",
				properties: {
					id: { type: "string" },
					title: { type: "string" },
					metadata: { type: "string" },
					description: { type: "string" },
					enabled: { type: "boolean" }
				},
				required: ["id", "title"],
				additionalProperties: !1
			} }),
			visible: { type: "boolean" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties, { onSelect: {
			instanceof: "Function",
			properties: { name: { type: "string" } },
			required: ["name"]
		} })
	}, o("WAFlowsWELJUtils").getValidationSchema([{
		prop: "label",
		keyword: "maxLength",
		value: o("WDSNativeSelectListOptionConstant").SELECT_LIST_LABEL_MAX_LENGTH
	}], m, [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE], !0), {
		required: [
			"dataSource",
			"name",
			"isSoftValidationMode"
		],
		additionalProperties: !1
	});
	function f(e) {
		var t = e.componentResponse;
		return u.jsx(r("WAFlowsListSelectionComponentResponseView.react"), { componentResponse: t });
	}
	f.displayName = f.name + " [from " + i.id + "]", l.WAFlowsRadioButtonsGroup = d, l.TYPE = p, l.SCHEMA = _, l.RESPONSE_VIEW = f;
}), 98);
