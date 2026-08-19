__d("WAWebNewsletterInboxShimmer.story", ["WAWebNewsletterInboxShimmer.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebNewsletterInboxShimmer",
		component: r("WAWebNewsletterInboxShimmer.react"),
		description: "The shimmering loading state for the channels inbox page",
		examples: [{
			example: function() {
				return s.jsx(r("WAWebNewsletterInboxShimmer.react"), { count: 1 });
			},
			title: "A single shimmering newsletter inbox item, with correct spacing and padding"
		}, {
			example: function() {
				return s.jsx(r("WAWebNewsletterInboxShimmer.react"), { count: 4 });
			},
			title: "A column of four shimmering newsletter inbox item, with correct spacing and padding"
		}]
	};
	l.default = u;
}), 98);
