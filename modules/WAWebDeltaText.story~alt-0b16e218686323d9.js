__d("WAWebDeltaText.story", [
	"WAWebDeltaText.react",
	"WAWebFlex.react",
	"WAWebShowroomStory.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e) {
		var t = e.delta;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 16,
			align: "center",
			children: [s.jsx(r("WAWebDeltaText.react"), {
				delta: t,
				size: "small"
			}), s.jsx(r("WAWebDeltaText.react"), {
				delta: t,
				size: "large"
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		var e = u(.087), t = e[0], n = e[1];
		return s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [s.jsx("input", { onChange: function(t) {
			return n(parseFloat(t.currentTarget.value));
		} }), s.jsx(c, { delta: t })] });
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = {
		storyName: "WAWebDeltaText",
		section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
		component: r("WAWebDeltaText.react"),
		description: "Component designed to display delta value percentage, showing visual colour indication of positive/negative/neutral change",
		examples: [
			{
				example: function() {
					return s.jsx(d, {});
				},
				title: "Custom Delta",
				description: "Try different delta values"
			},
			{
				example: function() {
					return s.jsx(c, { delta: .087 });
				},
				title: "Positive Delta",
				description: "Delta is positive"
			},
			{
				example: function() {
					return s.jsx(c, { delta: -.09 });
				},
				title: "Negative Delta",
				description: "Delta is negative"
			},
			{
				example: function() {
					return s.jsx(c, { delta: 0 });
				},
				title: "Neutral Delta",
				description: "Delta is 0"
			},
			{
				example: function() {
					return s.jsx(c, { delta: 1e8 });
				},
				title: "Very Large Delta",
				description: "Massive delta value"
			},
			{
				example: function() {
					return s.jsx(c, { delta: -1e-11 });
				},
				title: "Very Small Delta",
				description: "Minimal delta value"
			}
		]
	};
	l.default = m;
}), 98);
