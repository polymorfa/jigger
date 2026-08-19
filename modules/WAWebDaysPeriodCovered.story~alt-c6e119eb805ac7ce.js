__d("WAWebDaysPeriodCovered.story", [
	"WATimeUtils",
	"WAWebDaysPeriodCovered.react",
	"WAWebFlex.react",
	"WAWebShowroomStory.react",
	"WAWebSlider.react",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = 3600 * 24;
	function d() {
		var e = u(30), t = e[0], n = e[1], a = o("WATimeUtils").castToUnixTime(17319e5);
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 4,
			children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 4,
				children: [s.jsx(o("WAWebText.react").WAWebTextSmall, { children: "Days" }), s.jsx(o("WAWebSlider.react").Slider, {
					min: 0,
					max: 90,
					value: t,
					displayValue: !0,
					onChange: function(t) {
						n(t);
					}
				})]
			}), s.jsx(r("WAWebDaysPeriodCovered.react"), {
				end: a,
				days: t,
				start: o("WATimeUtils").castToUnixTime(a - t * c)
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = {
		storyName: "WAWebDaysPeriodCovered",
		section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
		component: r("WAWebDaysPeriodCovered.react"),
		description: "Component designed to display a bar, filled based on percentage",
		examples: [{
			example: function() {
				return s.jsx(d, {});
			},
			title: "DaysPeriodCovered",
			description: "Component showing how may days are covered"
		}]
	};
	l.default = m;
}), 98);
