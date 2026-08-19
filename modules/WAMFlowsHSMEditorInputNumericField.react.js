__d("WAMFlowsHSMEditorInputNumericField.react", [
	"fbt",
	"GeoFlexbox.react",
	"GeoNumericInput.react",
	"WAMFlowsHSMEditorInputLabel.react",
	"react",
	"useDebouncedOnChange"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isLabelHidden, n = e.isRequired, o = n === void 0 ? !1 : n, a = e.label, i = e.maxNumber, l = e.minNumber, c = e.onChange, d = e.value, m, p = d == null, _ = i != null && d != null && d > i, f = l != null && d != null && d < l, g = o && (p || _ || f);
		p ? m = s._(
			/*BTDS*/
			""
		) : _ ? m = s._(
			/*BTDS*/
			"",
			[s._param("max length", i)]
		) : f && (m = s._(
			/*BTDS*/
			"",
			[s._param("max length", l)]
		));
		var h = r("useDebouncedOnChange")(d, function(e) {
			e != null && c(e);
		}, 500), y = h[0], C = h[1];
		return u.jsxs(u.Fragment, { children: [u.jsx(r("GeoFlexbox.react"), { children: u.jsx(r("WAMFlowsHSMEditorInputLabel.react"), {
			isLabelHidden: t,
			isRequired: o,
			label: a
		}) }), u.jsx(r("GeoNumericInput.react"), {
			errorMessage: g ? m : void 0,
			hasError: g,
			isLabelHidden: !0,
			isOptional: !o,
			label: a,
			max: i,
			min: l,
			onChange: function(t) {
				t != null ? C(Math.floor(t)) : C(t);
			},
			value: y
		})] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
