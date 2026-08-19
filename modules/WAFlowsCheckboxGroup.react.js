__d("WAFlowsCheckboxGroup.react", [
	"WAFlowsComponentsCommon",
	"WAFlowsFormContext",
	"WAFlowsFormValidationUtils",
	"WAFlowsListSelectionComponentResponseView.react",
	"WAFlowsLocalization",
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
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useMemo, m = u.useState, p = [];
	function _(e, t, n, r, o, a, i, l) {
		var s = [].concat(t), u = t.findIndex(function(t) {
			return t === e;
		}), c = u >= 0;
		if (c ? s.splice(u, 1) : a() && s.push(e), n(s), o(r, s), c && l) {
			l();
			return;
		}
		i == null || i();
	}
	function f(e) {
		var t, n = o("WAFlowsFormContext").useWAFlowsForm(), a = n.getError, i = n.getValue, l = n.setValue, u = a(e.name), f = u != null && typeof u != "boolean" ? u : void 0, g = i(e.name), h = m([]), y = h[0], C = h[1], b = (t = e.dataSource) != null ? t : p, v = e.version != null && parseInt(e.version, 10) >= 400;
		c(function() {
			o("WAFlowsFormValidationUtils").isComponentValueArrayOfStr(g) && C(g);
		}, [g]), o("WAFlowsUseValueUpdaterOnInit").useValueUpdaterOnInit({
			initialValue: g,
			updateCondition: function(t, n) {
				return !o("WAFlowsFormValidationUtils").isEqual(t, n);
			},
			onUpdate: e == null ? void 0 : e.onSelect,
			isEnabled: o("WAFlowsComponentsCommon").getExecuteOnSelectActionScreenChange(e.version)
		});
		var S = function() {
			return e.maxSelectedItems === void 0 || y.length < e.maxSelectedItems;
		}, R = d(function() {
			return e.maxSelectedItems !== void 0 && e.maxSelectedItems === y.length ? b.reduce(function(e, t) {
				return y.includes(t.id) ? e : [].concat(e, [t.id]);
			}, []) : [];
		}, [
			y,
			b,
			e.maxSelectedItems
		]);
		o("WAFlowsUseDataSourceFormValueReset").useWAFlowsDataSourceFormReset(e.name, b, o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHECKBOX_GROUP);
		var L = function(n) {
			_(n, y, C, e.name, l, S, e == null ? void 0 : e.onSelect, e == null ? void 0 : e.onUnselect);
		}, E = v ? o("WAFlowsLocalization").getMinMaxSelectionLabelV400(e.minSelectedItems, e.maxSelectedItems) : o("WAFlowsLocalization").getMinMaxSelectionLabel(e.minSelectedItems, e.maxSelectedItems);
		return s.jsx(r("WAFlowsSelectOptionList.react"), {
			value: g,
			name: e.name,
			dataSource: b,
			label: e.label,
			enabled: e.enabled,
			required: e.required,
			description: v ? e.description : E !== null ? E : "",
			disabledOptions: R,
			multiple: !0,
			onChange: L,
			validationString: v && E !== null ? E : void 0,
			version: e.version,
			errorMessage: f,
			mediaSize: e.mediaSize
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = [
		o("WAFlowsValidationConstants").MIN_SELECTED_ITEMS_LESS_THAN_MAX_SELECTED_ITEMS,
		o("WAFlowsValidationConstants").REQUIRED_AND_ENABLED,
		o("WAFlowsValidationConstants").REQUIRED_AND_VISIBLE,
		o("WAFlowsValidationConstants").DISABLED_OPTION_SELECTED
	], h = "CheckboxGroup", y = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			label: { type: "string" },
			name: { type: "string" },
			required: { type: "boolean" },
			dataSource: babelHelpers.extends({ type: "array" }, o("WAFlowsWELJUtils").getHardValidation([o("WAFlowsValidationConstants").NON_EMPTY_ID_IN_DATA_SOURCE, o("WAFlowsValidationConstants").UNIQUE_IDS_IN_DATA_SOURCE]), {
				minItems: o("WDSNativeSelectListOptionConstant").SELECT_LIST_MIN_OPTIONS,
				maxItems: o("WDSNativeSelectListOptionConstant").SELECT_LIST_MAX_OPTIONS,
				items: {
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
				}
			}),
			minSelectedItems: { type: "number" },
			maxSelectedItems: { type: "number" },
			visible: { type: "boolean" },
			onSelect: {
				instanceof: "Function",
				properties: { name: { type: "string" } },
				required: ["name", "label"]
			}
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties)
	}, o("WAFlowsWELJUtils").getValidationSchema([{
		prop: "label",
		keyword: "maxLength",
		value: o("WDSNativeSelectListOptionConstant").SELECT_LIST_LABEL_MAX_LENGTH
	}], g, [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE], !0), {
		required: [
			"dataSource",
			"name",
			"isSoftValidationMode"
		],
		additionalProperties: !1
	});
	function C(e) {
		var t = e.componentResponse;
		return s.jsx(r("WAFlowsListSelectionComponentResponseView.react"), {
			componentResponse: t,
			isMultiSelectList: !0
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.WAFlowsCheckboxGroup = f, l.TYPE = h, l.SCHEMA = y, l.RESPONSE_VIEW = C;
}), 98);
