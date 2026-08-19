__d("WAWebNewsletterAdminInsightsTimelineWidget.story", [
	"WAWebChartUtils",
	"WAWebNewsletterAdminInsightsTimelineWidget.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebNewsletterAdminInsightsTimelineWidget",
		component: r("WAWebNewsletterAdminInsightsTimelineWidget.react"),
		description: "Timeline Widget",
		descriptionNode: s.jsx("div", { children: "Timeline Widget" }),
		examples: [{
			example: function() {
				return s.jsx(r("WAWebNewsletterAdminInsightsTimelineWidget.react"), {
					animate: !0,
					dataSets: d,
					getChartColor: o("WAWebChartUtils").makeGetChartColorFromTheme("dark")
				});
			},
			title: "Timeline Widget"
		}]
	}, c = [
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
	].map(function(e) {
		var t = e[0], n = e[1];
		return [t.valueOf(), n];
	}), d = [{
		data: [c, c.map(function(e) {
			var t = e[0], n = e[1];
			return [t, n * Math.random()];
		})],
		dataLabels: [{
			label: "Follows",
			key: "follows"
		}, {
			label: "Unfollows",
			key: "unfollows"
		}],
		dataSetLabel: {
			label: "Follows/unfollows",
			key: "follows-unfollows"
		}
	}, {
		data: [c],
		dataLabels: [{
			label: "Net follows",
			key: "net-follows"
		}],
		dataSetLabel: {
			label: "Net follows",
			key: "net-follows-set"
		}
	}];
	l.default = u;
}), 98);
