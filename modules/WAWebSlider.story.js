__d("WAWebSlider.story", [
	"WAWebSlider.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e) {
		var t = o("react-compiler-runtime").c(20), n = e.crescendo, r = e.displayValue, a = e.initial, i = e.max, l = e.min, c = e.showChangeStarted, d = n === void 0 ? !1 : n, m = r === void 0 ? !1 : r, p = a === void 0 ? 50 : a, _ = i === void 0 ? 100 : i, f = l === void 0 ? 0 : l, g = c === void 0 ? !1 : c, h = u(p), y = h[0], C = h[1], b = u(!1), v = b[0], S = b[1], R = u(0), L = R[0], E = R[1], k;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (k = { className: "xeq5yr9" }, t[0] = k) : k = t[0];
		var I;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (I = function(t, n) {
			C(t), n != null && n && S(!0);
		}, t[1] = I) : I = t[1];
		var T = d ? o("WAWebSlider.react").SliderTheme.Crescendo : o("WAWebSlider.react").SliderTheme.Default, D;
		t[2] !== m || t[3] !== L || t[4] !== _ || t[5] !== f || t[6] !== T || t[7] !== y ? (D = s.jsx(o("WAWebSlider.react").Slider, {
			min: f,
			max: _,
			value: y,
			displayValue: m,
			onChange: I,
			theme: T
		}, L), t[2] = m, t[3] = L, t[4] = _, t[5] = f, t[6] = T, t[7] = y, t[8] = D) : D = t[8];
		var x;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "x1anpbxc" }, t[9] = x) : x = t[9];
		var $;
		t[10] !== p || t[11] !== L ? ($ = s.jsx("button", babelHelpers.extends({}, x, {
			onClick: function() {
				C(p), S(!1), E(L + 1);
			},
			children: "Reset"
		})), t[10] = p, t[11] = L, t[12] = $) : $ = t[12];
		var P;
		t[13] !== v || t[14] !== g ? (P = g ? s.jsx("div", {
			className: "x1anpbxc",
			children: "Change has " + (v ? "" : "NOT ") + "started"
		}) : null, t[13] = v, t[14] = g, t[15] = P) : P = t[15];
		var N;
		return t[16] !== D || t[17] !== $ || t[18] !== P ? (N = s.jsxs("div", babelHelpers.extends({}, k, { children: [
			D,
			$,
			P
		] })), t[16] = D, t[17] = $, t[18] = P, t[19] = N) : N = t[19], N;
	}
	var d = {
		storyName: "WAWebSlider",
		component: o("WAWebSlider.react").Slider,
		description: "Generic slider component with options to enable displaying value and handling onChange event with ability to distinguish when the change starts.",
		examples: [
			{
				example: function() {
					return s.jsx(c, {});
				},
				title: "Default tabs"
			},
			{
				example: function() {
					return s.jsx(c, { displayValue: !0 });
				},
				title: "Display current input value",
				description: "displayValue=true"
			},
			{
				example: function() {
					return s.jsx(c, { showChangeStarted: !0 });
				},
				title: "Distinguish when change starts",
				description: "Refer to WAWebMediaEditorToolbarBlur.react for usage"
			},
			{
				example: function() {
					return s.jsx(c, { crescendo: !0 });
				},
				title: "Slider with crescendo shape",
				description: "Refer to WAWebMediaEditorToolbarColorIntegrated.react for usage"
			}
		]
	};
	l.default = d;
}), 98);
