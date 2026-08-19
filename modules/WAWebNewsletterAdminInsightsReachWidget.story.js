__d("WAWebNewsletterAdminInsightsReachWidget.story", ["WAWebNewsletterAdminInsightsReachWidget.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebNewsletterAdminInsightsReachWidget",
		component: r("WAWebNewsletterAdminInsightsReachWidget.react"),
		description: "Reach widget.",
		descriptionNode: s.jsx("div", { children: "Reach widget" }),
		examples: [
			{
				example: function() {
					return s.jsx(r("WAWebNewsletterAdminInsightsReachWidget.react"), {
						animate: !0,
						delta: .087,
						followers: 16e5,
						others: 42e5,
						reach: 58e5
					});
				},
				title: "Reach Widget, followers & non-followers"
			},
			{
				example: function() {
					return s.jsx(r("WAWebNewsletterAdminInsightsReachWidget.react"), {
						animate: !0,
						delta: .087,
						followers: 58e5,
						others: 0,
						reach: 58e5
					});
				},
				title: "Reach Widget, only followers"
			},
			{
				example: function() {
					return s.jsx(r("WAWebNewsletterAdminInsightsReachWidget.react"), {
						animate: !0,
						delta: .087,
						followers: 0,
						others: 58e5,
						reach: 58e5
					});
				},
				title: "Reach Widget, only non-followers"
			}
		]
	};
	l.default = u;
}), 98);
