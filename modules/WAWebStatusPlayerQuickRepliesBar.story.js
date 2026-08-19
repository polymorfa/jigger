__d("WAWebStatusPlayerQuickRepliesBar.story", [
	"WAWebStatusPlayerQuickRepliesBar.react",
	"WAWebStopEvent",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebStatusPlayerQuickRepliesBar",
		component: r("WAWebStatusPlayerQuickRepliesBar.react"),
		description: "Snackbar component used to choose a quick reply from a status",
		examples: [{
			example: function() {
				return s.jsx(r("WAWebStatusPlayerQuickRepliesBar.react"), { onClick: o("WAWebStopEvent").stopPropagation });
			},
			title: "Basic",
			description: "Basic Example"
		}]
	};
	l.default = u;
}), 98);
