__d("WAWebSlider.story", ["WAWebSlider.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e) {
		var t = e.crescendo, n = t === void 0 ? !1 : t, r = e.displayValue, a = r === void 0 ? !1 : r, i = e.initial, l = i === void 0 ? 50 : i, c = e.max, d = c === void 0 ? 100 : c, m = e.min, p = m === void 0 ? 0 : m, _ = e.showChangeStarted, f = _ === void 0 ? !1 : _, g = u(l), h = g[0], y = g[1], C = u(!1), b = C[0], v = C[1], S = u(0), R = S[0], L = S[1];
		return s.jsxs("div", {
			className: "xeq5yr9",
			children: [
				s.jsx(o("WAWebSlider.react").Slider, {
					min: p,
					max: d,
					value: h,
					displayValue: a,
					onChange: function(t, n) {
						y(t), n != null && n && v(!0);
					},
					theme: n ? o("WAWebSlider.react").SliderTheme.Crescendo : o("WAWebSlider.react").SliderTheme.Default
				}, R),
				s.jsx("button", {
					className: "x1anpbxc",
					onClick: function() {
						y(l), v(!1), L(R + 1);
					},
					children: "Reset"
				}),
				f ? s.jsx("div", {
					className: "x1anpbxc",
					children: "Change has " + (b ? "" : "NOT ") + "started"
				}) : null
			]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
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
