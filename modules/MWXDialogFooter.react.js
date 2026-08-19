__d("MWXDialogFooter.react", [
	"FDSDialogButtonGroupFooter.react",
	"MWXSpinner.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"callToActionGroupDirection",
		"callToActionGroupWrap",
		"primaryCallToAction",
		"secondaryCallToAction"
	], s = ["disabled", "loading"], u, c = u || (u = o("react"));
	function d(t) {
		var n = o("react-compiler-runtime").c(23), a, i, l, u, d;
		n[0] !== t ? (i = t.callToActionGroupDirection, l = t.callToActionGroupWrap, u = t.primaryCallToAction, d = t.secondaryCallToAction, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = u, n[5] = d) : (a = n[1], i = n[2], l = n[3], u = n[4], d = n[5]);
		var m = u != null ? u : d, p = u == null ? null : d;
		if (m == null) return null;
		var _, f, g;
		n[6] !== m ? (_ = m.disabled, f = m.loading, g = babelHelpers.objectWithoutPropertiesLoose(m, s), n[6] = m, n[7] = _, n[8] = f, n[9] = g) : (_ = n[7], f = n[8], g = n[9]);
		var h;
		n[10] !== f ? (h = f === !0 ? c.jsx(r("MWXSpinner.react"), {
			color: "blue",
			size: 24
		}) : void 0, n[10] = f, n[11] = h) : h = n[11];
		var y = h, C = f === !0 ? !0 : _, b = m.type === "destructive" ? "fdsOverride_negative" : m.type, v;
		n[12] !== y || n[13] !== g || n[14] !== C || n[15] !== b ? (v = babelHelpers.extends({}, g, {
			addOnPrimary: y,
			disabled: C,
			type: b
		}), n[12] = y, n[13] = g, n[14] = C, n[15] = b, n[16] = v) : v = n[16];
		var S;
		return n[17] !== a || n[18] !== i || n[19] !== l || n[20] !== p || n[21] !== v ? (S = c.jsx(r("FDSDialogButtonGroupFooter.react"), babelHelpers.extends({
			direction: i,
			primary: v,
			secondary: p,
			wrap: l
		}, a)), n[17] = a, n[18] = i, n[19] = l, n[20] = p, n[21] = v, n[22] = S) : S = n[22], S;
	}
	l.default = d;
}), 98);
