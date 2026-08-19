__d("WAWebProgressRing.story", [
	"WAWebProgressRing.react",
	"WAWebShowroomUtils",
	"WDSSlider.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = [
		"Body3Emphasized",
		"Body2Emphasized",
		"Body1Emphasized",
		"Headline2",
		"Headline1"
	], d = {
		min: 0,
		max: 99,
		step: 1
	}, m = {
		min: 24,
		max: 128,
		step: 4
	}, p = {
		min: 1,
		max: 8,
		step: 1
	};
	function _(e) {
		return e + "px";
	}
	function f() {
		var e, t = u(40), n = t[0], o = t[1], a = u(64), i = a[0], l = a[1], f = u(4), g = f[0], h = f[1], y = u(1), C = y[0], b = y[1];
		return s.jsxs("div", {
			className: "x6s0dn4 x78zum5 xdt5ytf x1na6gtj",
			children: [s.jsx(r("WAWebProgressRing.react"), {
				percentage: n,
				size: i,
				stroke: g,
				textType: c[C]
			}), s.jsxs("div", {
				className: "x78zum5 xdt5ytf xgpatz3 x1hfn5x7",
				children: [
					s.jsxs("div", {
						className: "x78zum5 xdt5ytf x1r0jzty",
						children: [s.jsx("label", {
							htmlFor: "progress-ring-percentage",
							children: "Percentage — " + n + "%"
						}), s.jsx(e = r("WDSSlider.react"), {
							testid: "progress-ring-percentage",
							values: [n],
							min: d.min,
							max: d.max,
							step: d.step,
							startEndLabels: "minMax",
							displayValueText: function(t) {
								return t + "%";
							},
							onChange: function(t) {
								return o(t[0]);
							}
						})]
					}),
					s.jsxs("div", {
						className: "x78zum5 xdt5ytf x1r0jzty",
						children: [s.jsx("label", {
							htmlFor: "progress-ring-size",
							children: "Ring size — " + i + "px"
						}), s.jsx(e, {
							testid: "progress-ring-size",
							values: [i],
							min: m.min,
							max: m.max,
							step: m.step,
							startEndLabels: "minMax",
							displayValueText: _,
							onChange: function(t) {
								return l(t[0]);
							}
						})]
					}),
					s.jsxs("div", {
						className: "x78zum5 xdt5ytf x1r0jzty",
						children: [s.jsx("label", {
							htmlFor: "progress-ring-stroke",
							children: "Ring stroke — " + g + "px"
						}), s.jsx(e, {
							testid: "progress-ring-stroke",
							values: [g],
							min: p.min,
							max: p.max,
							step: p.step,
							startEndLabels: "minMax",
							displayValueText: _,
							onChange: function(t) {
								return h(t[0]);
							}
						})]
					}),
					s.jsxs("div", {
						className: "x78zum5 xdt5ytf x1r0jzty",
						children: [s.jsx("label", {
							htmlFor: "progress-ring-text-size",
							children: "Text size — " + c[C]
						}), s.jsx(e, {
							testid: "progress-ring-text-size",
							values: [C],
							min: 0,
							max: c.length - 1,
							startEndLabels: "minMax",
							displayValueText: function(t) {
								return c[t];
							},
							onChange: function(t) {
								return b(t[0]);
							}
						})]
					})
				]
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = {
		storyName: "WAWebProgressRing",
		component: r("WAWebProgressRing.react"),
		description: "A determinate circular progress ring (built on the WA media download/upload arc) with the percentage centered in it. Takes a percentage (0–100) plus the ring size/stroke and the label text type.",
		examples: [{
			example: f,
			title: "Interactive",
			description: "Each slider is clamped to a sensible range (shown as its min/max endpoints); the current value is in the label above it.",
			templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").bigPreview)
		}]
	};
	l.default = g;
}), 98);
