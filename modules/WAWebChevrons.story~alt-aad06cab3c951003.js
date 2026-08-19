__d("WAWebChevrons.story", [
	"WAWebChevronCustomIcons",
	"WAWebChevronIcon.react",
	"WAWebShowroomStory.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.direction;
		switch (t) {
			case "right": return s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {});
			case "down": return s.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {});
			case "left": return s.jsx(o("WAWebChevronCustomIcons").ChevronLeftCustomIcon, {});
			case "up": return s.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, {});
		}
	}
	u.displayName = u.name + " [from " + i.id + "]";
	var c = {
		storyName: "WAWebChevrons",
		section: o("WAWebShowroomStory.react").StorySectionType.ATOM,
		component: u,
		description: "Shows the chevrons we have available in the app",
		examples: [
			{
				title: "Chevron Right",
				example: function() {
					return s.jsx(u, { direction: "right" });
				},
				description: "This is the default chevron icon direction"
			},
			{
				title: "Chevron Down",
				example: function() {
					return s.jsx(u, { direction: "down" });
				},
				description: "Custom component <ChevronDownCustomIcon /> can be used here"
			},
			{
				title: "Chevron Left",
				example: function() {
					return s.jsx(u, { direction: "left" });
				},
				description: "Custom component <ChevronLeftCustomIcon /> can be used here"
			},
			{
				title: "Chevron Up",
				example: function() {
					return s.jsx(u, { direction: "up" });
				},
				description: "Custom component <ChevronUpCustomIcon /> can be used here"
			}
		]
	};
	l.default = c;
}), 98);
