__d("WAMFlowsHSMEditorInputField.react", [
	"fbt",
	"GeoFlexbox.react",
	"GeoTextArea.react",
	"GeoTextInput.react",
	"WAFlowsDynamicDataUtils",
	"WAMFlowsFlowProvider.react",
	"WAMFlowsHSMEditorInputLabel.react",
	"react",
	"useDebouncedOnChange"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.allowBindingValue, a = n === void 0 ? !1 : n, i = e["data-testid"], l = e.isDisabled, c = l === void 0 ? !1 : l, d = e.isLabelHidden, m = e.isRequired, p = m === void 0 ? !1 : m, _ = e.isTextArea, f = _ === void 0 ? !1 : _, g = e.label, h = e.maxLength, y = e.onChange, C = e.value, b = o("WAMFlowsFlowProvider.react").useWAMFlow(), v = b.setIsFlowVisible, S, R = C == null || C.trim().length === 0, L = h != null && ((t = C == null ? void 0 : C.length) != null ? t : 0) > h, E = o("WAFlowsDynamicDataUtils").isBindingValue(C), k = p && (R || L) || !a && E;
		R ? S = s._(
			/*BTDS*/
			""
		) : L ? S = s._(
			/*BTDS*/
			"",
			[s._param("max length", h)]
		) : E && (S = s._(
			/*BTDS*/
			""
		));
		var I = r(f ? "GeoTextArea.react" : "GeoTextInput.react"), T = r("useDebouncedOnChange")(C != null ? C : "", y, 500), D = T[0], x = T[1];
		return u.jsxs(u.Fragment, { children: [u.jsx(r("GeoFlexbox.react"), { children: u.jsx(r("WAMFlowsHSMEditorInputLabel.react"), {
			isDisabled: c,
			isLabelHidden: d,
			isRequired: p,
			label: g
		}) }), u.jsx(I, {
			"data-testid": void 0,
			isDisabled: c,
			isLabelHidden: !0,
			isOptional: !p,
			label: g,
			maxLength: h,
			message: k ? S : void 0,
			onChange: x,
			onFocus: function() {
				return v(!0);
			},
			status: k ? "error" : void 0,
			value: D
		})] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
