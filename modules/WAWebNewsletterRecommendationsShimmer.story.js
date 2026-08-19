__d("WAWebNewsletterRecommendationsShimmer.story", ["WAWebNewsletterRecommendationsShimmer.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebNewsletterRecommendationsShimmer",
		component: r("WAWebNewsletterRecommendationsShimmer.react"),
		description: "The shimmering loading state for the channels recommendations page",
		examples: [{
			example: function() {
				return s.jsx(r("WAWebNewsletterRecommendationsShimmer.react"), { count: 1 });
			},
			title: "A single row of four single shimmering newsletter recommendation items, all with correct space and padding"
		}, {
			example: function() {
				return s.jsx(r("WAWebNewsletterRecommendationsShimmer.react"), { count: 4 });
			},
			title: "Four rows of four single shimmering newsletter recommendation items, all with correct space and padding"
		}]
	};
	l.default = u;
}), 98);
