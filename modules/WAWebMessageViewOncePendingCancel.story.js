__d("WAWebMessageViewOncePendingCancel.story", [
	"WAWebMessageViewOncePendingCancel",
	"WAWebNoop",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebMessageViewOncePendingCancel",
		component: r("WAWebMessageViewOncePendingCancel"),
		description: "Cancellable action for view once message",
		examples: [{
			title: "ViewOncePendingCancel with click handler",
			example: function() {
				return s.jsx(r("WAWebMessageViewOncePendingCancel"), { onClick: r("WAWebNoop") });
			},
			description: "Active ViewOncePendingCancel"
		}, {
			title: "ViewOncePendingCancel without click handler",
			example: function() {
				return s.jsx(r("WAWebMessageViewOncePendingCancel"), {});
			}
		}]
	};
	l.default = u;
}), 98);
