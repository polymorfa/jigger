__d("WAFlowsTextInput.react", [
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsEnvContext.react",
	"WAFlowsFormContext",
	"WAFlowsValidationConstants",
	"WAFlowsWELJUtils",
	"cr:10953",
	"cr:12081",
	"cr:12089",
	"cr:180",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = n("cr:10953") || n("cr:12081") || n("cr:12089") || n("cr:180");
	function c(e) {
		var t = o("WAFlowsEnvContext.react").useWAFlowsEnv(), n = t.env, r = o("WAFlowsFormContext").useWAFlowsForm(), a = r.getError, i = r.getValue, l = r.isFocused, c = r.setBlur, d = r.setFocus, m = r.setValue, p = e.helperText, _ = e.label, f = e.error != null ? e.error : a(e.name), g = babelHelpers.extends({}, e, {
			label: _,
			value: e.useFormContext === !0 ? e.value : i(e.name),
			error: f != null && typeof f != "boolean" ? f : void 0,
			helperText: p,
			focused: l(e.name),
			onChange: function(n) {
				return m(e.name, n);
			},
			onClear: function() {
				m(e.name, ""), e.onClear == null || e.onClear();
			},
			onFocus: function(r) {
				if (d(e.name), r != null) {
					var t = r.currentTarget;
					n.platform === "ios" && t.scrollWidth > t.clientWidth && (t.scrollLeft = t.scrollWidth);
				}
			},
			onBlur: e.useCustomBlur === !0 ? void 0 : function() {
				return c(e.name);
			}
		});
		return u === null ? null : s.jsx(u, babelHelpers.extends({}, g));
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = [{
		prop: "helperText",
		keyword: "maxLength",
		value: o("WAFlowsComponentConstants").TEXT_INPUT_HELPER_TEXT_MAX_LENGTH
	}], m = [
		o("WAFlowsValidationConstants").TEXT_ENTRY_LABEL_MAX_LENGTH,
		o("WAFlowsValidationConstants").MIN_CHARS_LESS_OR_EQUAL_TO_MAX_CHARS,
		o("WAFlowsValidationConstants").REQUIRED_AND_ENABLED,
		o("WAFlowsValidationConstants").REQUIRED_AND_VISIBLE
	], p = Object.freeze({
		TEXT: "text",
		NUMBER: "number",
		PASSWORD: "password",
		PASSCODE: "passcode",
		PHONE: "phone",
		EMAIL: "email",
		REGEX: "regex"
	}), _ = [
		p.TEXT,
		p.PASSWORD,
		p.NUMBER,
		p.EMAIL,
		p.PASSCODE,
		p.PHONE
	], f = "TextInput", g = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			inputType: { enum: _ },
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
			minChars: { type: "integer" },
			maxChars: { type: "integer" },
			name: { type: "string" },
			visible: { type: "boolean" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: [
			"label",
			"name",
			"isSoftValidationMode"
		]
	}, o("WAFlowsWELJUtils").getValidationSchema(d, m, [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE]), { additionalProperties: !1 });
	l.WAFlowsTextInput = c, l.WAFlowJSONTextInputType = p, l.supportedInputTypes = _, l.TYPE = f, l.SCHEMA = g;
}), 98);
