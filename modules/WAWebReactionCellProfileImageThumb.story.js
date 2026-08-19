__d("WAWebReactionCellProfileImageThumb.story", [
	"WAWebReactionCellDetailThumb.react",
	"WAWebShowroomUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = o("WAWebShowroomUtils").getRandomContactWithImage(), c = {
		storyName: "WAWebReactionCellProfileImageThumb",
		component: o("WAWebReactionCellDetailThumb.react").ReactionCellProfileImageThumb,
		description: "The component <ReactionCellProfileImageThumb /> displays a contact image with a reaction thumb in the bottom right hand corner",
		examples: [{
			example: function() {
				return s.jsx(o("WAWebReactionCellDetailThumb.react").ReactionCellProfileImageThumb, {
					reactionText: "❤️",
					profileImageId: u
				});
			},
			title: "ReactionCellDetailThumb with a random contact and emoji"
		}]
	}, d = c;
	l.default = d;
}), 98);
