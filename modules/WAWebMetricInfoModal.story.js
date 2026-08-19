__d("WAWebMetricInfoModal.story", [
	"WAWebButton.react",
	"WAWebMetricInfoModal.react",
	"WAWebModalManager",
	"WAWebShowroomStory.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useCallback, c = {
		name: "Accounts Reached",
		description: "The number of people who have viewed any of your updates at least once. This does not include multiple views by the same people.",
		key: "accounts-reached"
	}, d = {
		name: "Net Follows",
		description: "The number of people that followed your channel minus the number of people that unfollowed your channel or deleted their WhatsApp account in the last 30 days.",
		key: "net-follows"
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(4), n = e.metrics, a;
		t[0] !== n ? (a = function() {
			o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebMetricInfoModal.react"), {
				metrics: n,
				logger: {
					logHelpCentreClick: function() {},
					logInfoIconTap: function() {},
					logNavigationTap: function() {},
					log: function() {},
					logOpen: function() {},
					logClose: function() {}
				}
			}));
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		return t[2] !== i ? (l = s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: i,
			children: "Display metric info"
		}), t[2] = i, t[3] = l) : l = t[3], l;
	}
	var p = {
		storyName: "WAWebMetricInfoModal",
		section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
		component: r("WAWebMetricInfoModal.react"),
		description: "Component designed to display information about the specific metrics",
		examples: [{
			example: function() {
				return s.jsx(m, { metrics: [c] });
			},
			title: "Single Metric Info",
			description: "Showing a modal with a single metric"
		}, {
			example: function() {
				return s.jsx(m, { metrics: [c, d] });
			},
			title: "Multiple Metrics Info",
			description: "Showing a modal with multiple metrics"
		}]
	};
	l.default = p;
}), 98);
