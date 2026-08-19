__d("WAWebGlanceInsight.story", [
	"WAWebCheckBox.react",
	"WAWebFlex.react",
	"WAWebGlanceInsight.react",
	"WAWebNoop",
	"WAWebShowroomStory.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = {
		background: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		smallSize: {
			width: "x1exxlbk",
			height: "x1gnnpzl",
			$$css: !0
		},
		newsletterInsight: {
			width: "x1f2tiqu",
			height: "xsdox4t",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.insight, n = e.label, a = e.onClick, i = e.xstyle, l = u(!1), d = l[0], m = l[1], p = r("WAWebNoop");
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 4,
			children: [s.jsxs(o("WAWebFlex.react").FlexRow, { children: [s.jsx("label", {
				htmlFor: "loading-checkbox",
				style: { marginRight: 8 },
				children: "Loading:"
			}), s.jsx(o("WAWebCheckBox.react").CheckBox, {
				id: "loading-checkbox",
				checked: d,
				onChange: function() {
					return m(!d);
				}
			})] }), s.jsx(r("WAWebGlanceInsight.react"), {
				xstyle: [c.background, i],
				label: n,
				insight: t,
				loading: d,
				onClick: a != null ? a : p
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = {
		storyName: "WAWebGlanceInsight",
		section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
		component: r("WAWebGlanceInsight.react"),
		description: "Component designed to display delta value percentage, showing visualcolour indication of positive/negative/neutral change",
		examples: [
			{
				example: function() {
					return s.jsx(d, {
						label: "Accounts Reached",
						insight: {
							value: 57e5,
							delta: .087
						},
						xstyle: c.newsletterInsight
					});
				},
				title: "Positive Insight",
				description: "Typical positive newsletter glance insight"
			},
			{
				example: function() {
					return s.jsx(d, {
						label: "Accounts Reached",
						insight: {
							value: 57e5,
							delta: -.087
						},
						xstyle: c.newsletterInsight
					});
				},
				title: "Negative Insight",
				description: "Typical negative newsletter glance insight"
			},
			{
				example: function() {
					return s.jsx(d, {
						label: "Accounts Reached",
						insight: {
							value: 57e5,
							delta: 0
						},
						xstyle: c.newsletterInsight
					});
				},
				title: "Neutral Insight",
				description: "Typical newsletter glance insight with 0 delta"
			},
			{
				example: function() {
					return s.jsx(d, {
						label: "Accounts Reached",
						insight: { value: 57e5 },
						xstyle: c.newsletterInsight
					});
				},
				title: "No Delta Insight",
				description: "Typical newsletter glance insight without a delta"
			},
			{
				example: function() {
					return s.jsx(d, {
						label: "Accounts Reached",
						insight: { value: 57e5 },
						xstyle: c.newsletterInsight,
						onClick: function() {
							alert("Clicked on insight");
						}
					});
				},
				title: "Clickable insight",
				description: "Typical newsletter glance which can be clicked on"
			},
			{
				example: function() {
					return s.jsx(d, {
						label: "Accounts Reached",
						insight: null,
						xstyle: c.newsletterInsight,
						onClick: function() {
							alert("Clicked on insight");
						}
					});
				},
				title: "Blank insight",
				description: "Typical newsletter glance with null insight value"
			},
			{
				example: function() {
					return s.jsx(d, {
						label: "A very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very large value",
						insight: { value: 57e5 },
						xstyle: c.smallSize
					});
				},
				title: "Long text",
				description: "Glance insight with large text that gets hidden"
			}
		]
	};
	l.default = m;
}), 98);
