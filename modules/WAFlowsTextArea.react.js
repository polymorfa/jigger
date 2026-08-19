__d("WAFlowsTextArea.react", [
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsFormContext",
	"WAFlowsValidationConstants",
	"WAFlowsWELJUtils",
	"cr:216",
	"cr:222",
	"cr:226",
	"cr:259",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["maxLength"], s, u = s || (s = o("react")), c = n("cr:216") || n("cr:222") || n("cr:226") || n("cr:259");
	function d(t) {
		var n, r = t.maxLength, a = r === void 0 ? o("WAFlowsComponentConstants").TEXT_AREA_MAX_CHARS_DEFAULT : r, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = o("WAFlowsFormContext").useWAFlowsForm(), s = l.getError, d = l.getValue, m = l.isFocused, p = l.setBlur, _ = l.setFocus, f = l.setValue, g = i.helperText, h = i.label, y = i.name, C = d(y), b = s(y), v = typeof C == "string" && (n = C == null ? void 0 : C.length) != null ? n : 0, S = a - v, R = S > 0 ? S : 0, L = babelHelpers.extends({}, i, {
			charsLeft: R,
			maxLength: a,
			label: h,
			value: C,
			error: b != null && typeof b != "boolean" ? b : void 0,
			helperText: g,
			focused: m(i.name),
			onChange: function(t) {
				return f(y, t);
			},
			onFocus: function() {
				return _(i.name);
			},
			onBlur: function() {
				return p(i.name);
			}
		});
		return c === null ? null : u.jsx(c, babelHelpers.extends({}, L));
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = [{
		prop: "helperText",
		keyword: "maxLength",
		value: o("WAFlowsComponentConstants").TEXT_AREA_HELPER_TEXT_MAX_LENGTH
	}], p = [
		o("WAFlowsValidationConstants").TEXT_ENTRY_LABEL_MAX_LENGTH,
		o("WAFlowsValidationConstants").REQUIRED_AND_ENABLED,
		o("WAFlowsValidationConstants").REQUIRED_AND_VISIBLE
	], _ = "TextArea", f = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			inputType: { enum: [
				"text",
				"password",
				"number",
				"email",
				"passcode",
				"phone"
			] },
			label: {
				type: "string",
				minLength: 1
			},
			labelVariant: {
				type: "string",
				enum: [o("WAFlowsComponentsCommon").WhatsAppFlowsTextEntryLabelVariant.LARGE]
			},
			helperText: { type: "string" },
			required: { type: "boolean" },
			maxLength: { type: "integer" },
			name: { type: "string" },
			visible: { type: "boolean" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: [
			"label",
			"name",
			"isSoftValidationMode"
		]
	}, o("WAFlowsWELJUtils").getValidationSchema(m, p, [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE]), { additionalProperties: !1 });
	l.WAFlowsTextArea = d, l.TYPE = _, l.SCHEMA = f;
}), 98);
