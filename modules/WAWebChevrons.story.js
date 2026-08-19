__d("WAWebChevrons.story", [
	"WAWebChevronCustomIcons",
	"WAWebChevronIcon.react",
	"WAWebShowroomStory.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4), n = e.direction;
		switch (n) {
			case "right": {
				var r;
				return t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {}), t[0] = r) : r = t[0], r;
			}
			case "down": {
				var a;
				return t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {}), t[1] = a) : a = t[1], a;
			}
			case "left": {
				var i;
				return t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx(o("WAWebChevronCustomIcons").ChevronLeftCustomIcon, {}), t[2] = i) : i = t[2], i;
			}
			case "up": {
				var l;
				return t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, {}), t[3] = l) : l = t[3], l;
			}
		}
	}
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
