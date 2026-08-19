__d("WAWebBizCheckbox.react", [
	"WAWebFlex.react",
	"WDSBaseCheckbox.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(10), n = e.isDisabled, a = e.label, i = e.onChange, l = e.testid, u = e.value, c = n === void 0 ? !1 : n, d;
		t[0] !== c || t[1] !== i || t[2] !== l || t[3] !== u ? (d = s.jsx(r("WDSBaseCheckbox.react"), {
			disabled: c,
			onChange: i,
			testid: l,
			value: u
		}), t[0] = c, t[1] = i, t[2] = l, t[3] = u, t[4] = d) : d = t[4];
		var m;
		t[5] !== a ? (m = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: a
		}), t[5] = a, t[6] = m) : m = t[6];
		var p;
		return t[7] !== d || t[8] !== m ? (p = s.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 16,
			align: "center",
			children: [d, m]
		}), t[7] = d, t[8] = m, t[9] = p) : p = t[9], p;
	}
	l.default = u;
}), 98);
