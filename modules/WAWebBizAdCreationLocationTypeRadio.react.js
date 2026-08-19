__d("WAWebBizAdCreationLocationTypeRadio.react", [
	"WAWebPencilRefreshedIcon.react",
	"WAWebRadio.react",
	"WDSButton.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(14), n = e.checked, a = e.label, i = e.onChange, l = e.onEditPress, u = e.secondaryLabel, c = e.testid, d = e.value, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x6s0dn4 x78zum5 x1q0g3np x1n2onr6 xh8yej3" }, t[0] = m) : m = t[0];
		var p;
		t[1] !== n || t[2] !== a || t[3] !== i || t[4] !== u || t[5] !== d ? (p = s.jsx(o("WAWebRadio.react").RadioWithLabel, {
			checked: n,
			label: a,
			name: "location-type",
			onChange: i,
			secondaryLabel: u,
			theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
			value: d
		}), t[1] = n, t[2] = a, t[3] = i, t[4] = u, t[5] = d, t[6] = p) : p = t[6];
		var _;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "xvc5jky" }, t[7] = _) : _ = t[7];
		var f;
		t[8] !== l ? (f = s.jsx("div", babelHelpers.extends({}, _, { children: s.jsx(r("WDSButton.react"), {
			Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
			onPress: l,
			size: "medium",
			variant: "borderless"
		}) })), t[8] = l, t[9] = f) : f = t[9];
		var g;
		return t[10] !== p || t[11] !== f || t[12] !== c ? (g = s.jsxs("div", babelHelpers.extends({ "data-testid": c }, m, { children: [p, f] })), t[10] = p, t[11] = f, t[12] = c, t[13] = g) : g = t[13], g;
	}
	l.default = u;
}), 98);
