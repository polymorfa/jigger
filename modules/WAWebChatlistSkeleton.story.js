__d("WAWebChatlistSkeleton.story", [
	"WAWebChatlistSkeleton.react",
	"WAWebShowroomUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebChatlistSkeleton",
		component: r("WAWebChatlistSkeleton.react"),
		description: "\n        Loading fallback for the logged-in shell's chat-list pane. It preserves\n        the pane geometry while chat previews become ready.\n    ",
		examples: [{
			templateStyle: o("WAWebShowroomUtils").bigPreview,
			example: function() {
				return s.jsx(r("WAWebChatlistSkeleton.react"), {});
			},
			title: "Chat-list pane region fallback",
			description: "The chat-list region Suspense fallback: search bar plus shimmering rows that fill the real pane below the real header."
		}]
	};
	l.default = u;
}), 98);
