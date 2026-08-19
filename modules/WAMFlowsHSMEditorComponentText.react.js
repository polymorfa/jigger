__d("WAMFlowsHSMEditorComponentText.react", [
	"fbt",
	"GeoDropdownMenu.react",
	"GeoHStack.react",
	"GeoMenuItem.react",
	"GeoVStack.react",
	"WAMFlowsFlowProvider.react",
	"WAMFlowsHSMComponentLabels",
	"WAMFlowsHSMEditorInputField.react",
	"WAMFlowsHSMEditorProvider",
	"WAMFlowsHSMEditorRemoveButton.react",
	"WAMFlowsHSMEditorTypes.react",
	"WAMFlowsHSMValidationConfig",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = [
		"TextHeading",
		"TextSubheading",
		"TextBody",
		"TextCaption"
	];
	function m(e) {
		var t = e.component, n = e.isRemovable, a = n === void 0 ? !0 : n, i = e.isTypeChangeDisabled, l = i === void 0 ? !1 : i, m = e.onComponentChange, p = e.onComponentRemove, _ = o("WAMFlowsHSMEditorProvider").useWhatsAppFlowTemplatesEditor(), f = _.surface, g = o("WAMFlowsFlowProvider.react").useWAMFlow(), h = g.setIsFlowVisible, y = c(function(e) {
			m(babelHelpers.extends({}, t, { text: Array.isArray(e) ? e.join("\n") : String(e) }));
		}, [t, m]), C = c(function(e) {
			m(babelHelpers.extends({}, t, { type: e }));
		}, [t, m]);
		return u.jsxs(r("GeoVStack.react"), { children: [
			u.jsx(r("GeoDropdownMenu.react"), {
				isDisabled: l,
				label: o("WAMFlowsHSMComponentLabels").COMPONENT_LABELS[t.type],
				onOpen: function() {
					return h(!0);
				},
				children: d.filter(function(e) {
					return !(e === "TextSubheading" && f === o("WAMFlowsHSMEditorTypes.react").WAFlowTemplatesSurface.CTWA);
				}).map(function(e) {
					return u.jsx(r("GeoMenuItem.react"), {
						label: o("WAMFlowsHSMComponentLabels").COMPONENT_LABELS[e],
						onClick: function() {
							C(e);
						}
					}, e);
				})
			}),
			u.jsx(r("WAMFlowsHSMEditorInputField.react"), {
				isLabelHidden: !0,
				isRequired: !0,
				isTextArea: !0,
				label: s._(
					/*BTDS*/
					""
				),
				maxLength: o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG[t.type].maxText,
				onChange: y,
				value: Array.isArray(t.text) ? t.text.join("\n") : String(t.text)
			}),
			a && u.jsx(r("GeoHStack.react"), {
				alignItems: "center",
				justifyContent: "end",
				children: u.jsx(r("WAMFlowsHSMEditorRemoveButton.react"), { onRemove: p })
			})
		] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
