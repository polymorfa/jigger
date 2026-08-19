__d("WAWebTimeSeries.story", [
	"WAWebChartUtils",
	"WAWebCheckBox.react",
	"WAWebFlex.react",
	"WAWebTimeSeries.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useState, c = {
		storyName: "WAWebTimeSeries",
		component: r("WAWebTimeSeries.react"),
		description: "Time series chart, displaying series over a time period.",
		descriptionNode: s.jsx("div", { children: "Time series chart, displaying series over a time period." }),
		examples: [{
			example: function() {
				return s.jsx(p, { data: m() });
			},
			title: "Time Series"
		}, {
			example: function() {
				return s.jsx(p, { data: m(2) });
			},
			title: "Time Series - 2 points"
		}]
	}, d = [
		[new Date(2024, 11, 1), 100],
		[new Date(2024, 11, 2), 200],
		[new Date(2024, 11, 3), 150],
		[new Date(2024, 11, 4), 400],
		[new Date(2024, 11, 5), 534],
		[new Date(2024, 11, 6), 600],
		[new Date(2024, 11, 7), 710],
		[new Date(2024, 11, 8), 720],
		[new Date(2024, 11, 9), 750],
		[new Date(2024, 11, 10), 800],
		[new Date(2024, 11, 11), 1e3],
		[new Date(2024, 11, 12), 1200],
		[new Date(2024, 11, 13), 1140],
		[new Date(2024, 11, 14), 1700],
		[new Date(2024, 11, 15), 2700],
		[new Date(2024, 11, 16), 2300],
		[new Date(2024, 11, 17), 2700],
		[new Date(2024, 11, 18), 4500],
		[new Date(2024, 11, 19), 10700],
		[new Date(2024, 11, 20), 100],
		[new Date(2024, 11, 21), 200],
		[new Date(2024, 11, 22), 300],
		[new Date(2024, 11, 23), 700],
		[new Date(2024, 11, 24), 500],
		[new Date(2024, 11, 25), 600],
		[new Date(2024, 11, 26), 700],
		[new Date(2024, 11, 27), 100],
		[new Date(2024, 11, 28), 700],
		[new Date(2024, 11, 29), 200],
		[new Date(2024, 11, 30), 700]
	], m = function(t) {
		return t === void 0 && (t = d.length), [d.slice(0, t).map(function(e) {
			var t = e[0], n = e[1];
			return [t.valueOf(), n];
		}), d.slice(0, t).map(function(e) {
			var t = e[0], n = e[1];
			return [t.valueOf(), -n];
		})];
	};
	function p(e) {
		var t, n, a = e.data, i = u([]), l = i[0], c = i[1], d = u(!1), m = d[0], p = d[1];
		return s.jsxs("div", { children: [
			s.jsxs(o("WAWebFlex.react").FlexRow, { children: [s.jsx("label", {
				htmlFor: "loading-checkbox",
				style: { marginRight: 8 },
				children: "Animated:"
			}), s.jsx(o("WAWebCheckBox.react").CheckBox, {
				id: "loading-checkbox",
				checked: m,
				onChange: function() {
					return p(!m);
				}
			})] }),
			s.jsxs("div", { children: ["Series 1 ", l == null || (t = l[0]) == null ? void 0 : t[1]] }),
			s.jsxs("div", { children: ["Series 2 ", l == null || (n = l[1]) == null ? void 0 : n[1]] }),
			s.jsx("br", {}),
			s.jsx(r("WAWebTimeSeries.react"), {
				animate: m,
				getChartColor: o("WAWebChartUtils").makeGetChartColorFromTheme("light"),
				data: a,
				width: 360,
				height: 244,
				onHover: function(t) {
					return c(t);
				}
			})
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = c;
}), 98);
