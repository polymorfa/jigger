__d("WAWebDonutChart.story", [
	"WAWebChartUtils",
	"WAWebCheckBox.react",
	"WAWebDonutChart.react",
	"WAWebFlex.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useState, c = {
		storyName: "WAWebDonutChart",
		component: r("WAWebDonutChart.react"),
		description: "Donut chart.",
		descriptionNode: s.jsx("div", { children: "Donut chart" }),
		examples: [
			{
				example: function() {
					return s.jsx(d, { data: [.277, .723] });
				},
				title: "Two slices"
			},
			{
				example: function() {
					return s.jsx(d, { data: [
						.2,
						.2,
						.6
					] });
				},
				title: "Many slices"
			},
			{
				example: function() {
					return s.jsx(d, { data: [1] });
				},
				title: "One slice (no gaps)"
			}
		]
	};
	function d(e) {
		var t = e.data, n = u(!1), a = n[0], i = n[1];
		return s.jsxs(s.Fragment, { children: [s.jsxs(o("WAWebFlex.react").FlexRow, { children: [s.jsx("label", {
			htmlFor: "loading-checkbox",
			style: { marginRight: 8 },
			children: "Animated:"
		}), s.jsx(o("WAWebCheckBox.react").CheckBox, {
			id: "loading-checkbox",
			checked: a,
			onChange: function() {
				return i(!a);
			}
		})] }), s.jsx(r("WAWebDonutChart.react"), {
			animate: a,
			size: 300,
			thickness: 50,
			data: t,
			getChartColor: o("WAWebChartUtils").makeGetChartColorFromTheme("light")
		})] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 98);
