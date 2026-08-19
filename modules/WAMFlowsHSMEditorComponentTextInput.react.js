__d("WAMFlowsHSMEditorComponentTextInput.react", [
	"fbt",
	"GeoDropdownMenu.react",
	"GeoHStack.react",
	"GeoMenuItem.react",
	"GeoVStack.react",
	"WAMFlowsFlowProvider.react",
	"WAMFlowsHSMEditorInputField.react",
	"WAMFlowsHSMEditorProvider",
	"WAMFlowsHSMEditorRemoveButton.react",
	"WAMFlowsHSMEditorRequiredInput.react",
	"WAMFlowsHSMFbt",
	"isStringNullOrWhitespaceOnly",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = s._(
		/*BTDS*/
		""
	), d = new Map([
		["text", c],
		["password", s._(
			/*BTDS*/
			""
		)],
		["email", s._(
			/*BTDS*/
			""
		)],
		["number", s._(
			/*BTDS*/
			""
		)],
		["passcode", s._(
			/*BTDS*/
			""
		)],
		["phone", s._(
			/*BTDS*/
			""
		)]
	]);
	function m(e) {
		var t, n = e.component, a = e.isHelperTextDisabled, i = e.isInputTypeChangeDisabled, l = e.isLabelDisabled, s = e.onComponentChange, c = e.onComponentRemove, m = o("WAMFlowsHSMEditorProvider").useWhatsAppFlowTemplatesEditor(), p = m.validationConfig, _ = p.TextInput, f = o("WAMFlowsFlowProvider.react").useWAMFlow(), g = f.setIsFlowVisible;
		return u.jsxs(r("GeoVStack.react"), { children: [
			i !== !0 && u.jsx(r("GeoDropdownMenu.react"), {
				label: d.get((t = n["input-type"]) != null ? t : "text"),
				onOpen: function() {
					return g(!0);
				},
				children: Array.from(d.entries()).map(function(e) {
					var t = e[0], o = e[1];
					return u.jsx(r("GeoMenuItem.react"), {
						label: o,
						onClick: function() {
							s(babelHelpers.extends({}, n, { "input-type": t }));
						}
					}, t);
				})
			}),
			u.jsx(r("WAMFlowsHSMEditorInputField.react"), {
				isDisabled: l,
				isLabelHidden: !0,
				isRequired: !0,
				label: o("WAMFlowsHSMFbt").LABEL_FIELD_LABEL,
				maxLength: _.maxLabel,
				onChange: function(t) {
					s(babelHelpers.extends({}, n, { label: t }));
				},
				value: n.label
			}),
			u.jsx(r("WAMFlowsHSMEditorInputField.react"), {
				isDisabled: a,
				isLabelHidden: !1,
				isRequired: !1,
				label: o("WAMFlowsHSMFbt").HELPER_TEXT_FIELD_LABEL,
				maxLength: _.maxHelperText,
				onChange: function(t) {
					s(babelHelpers.extends({}, n, { "helper-text": r("isStringNullOrWhitespaceOnly")(t) ? void 0 : t }));
				},
				value: n["helper-text"]
			}),
			u.jsxs(r("GeoHStack.react"), {
				alignItems: "center",
				justifyContent: "end",
				children: [u.jsx(r("WAMFlowsHSMEditorRequiredInput.react"), {
					onChange: function() {
						s(babelHelpers.extends({}, n, { required: !n.required }));
					},
					value: !!n.required
				}), u.jsx(r("WAMFlowsHSMEditorRemoveButton.react"), { onRemove: c })]
			})
		] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
