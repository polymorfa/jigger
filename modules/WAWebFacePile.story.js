__d("WAWebFacePile.story", [
	"WAWebContactCollection",
	"WAWebFacePile.react",
	"WAWebShowroomUtils",
	"compactMap",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { borderColor: {
		borderTopColor: "x19bsprb",
		borderInlineEndColor: "x2cy9dh",
		borderBottomColor: "x1eeqclz",
		borderInlineStartColor: "x1mx0rqa",
		$$css: !0
	} }, c = [
		o("WAWebShowroomUtils").getRandomContactWithImage(),
		o("WAWebShowroomUtils").getRandomContactWithImage(),
		o("WAWebShowroomUtils").getRandomContactWithImage(),
		o("WAWebShowroomUtils").getRandomContactWithImage(),
		o("WAWebShowroomUtils").getRandomContactWithImage(),
		o("WAWebShowroomUtils").getRandomContactWithImage(),
		o("WAWebShowroomUtils").getRandomContactWithImage(),
		o("WAWebShowroomUtils").getRandomContactWithImage()
	], d = c.slice(0, 1), m = c.slice(0, 3), p = r("compactMap")(c, function(e) {
		var t = o("WAWebContactCollection").ContactCollection.get(e);
		return t == null ? void 0 : t.getProfilePicThumb().imgFull;
	}), _ = {
		storyName: "WAWebFacePile",
		component: r("WAWebFacePile.react"),
		description: "The component <FacePile /> displays a list of contact images (either from the contact id or a URL of the profile image) in a small stack, with a max of 5 faces. They all have white borders",
		examples: [
			{
				example: function() {
					return s.jsx(r("WAWebFacePile.react"), {
						idsOrUrls: d,
						borderColor: u.borderColor
					});
				},
				title: "FacePile - 1 Face"
			},
			{
				example: function() {
					return s.jsx(r("WAWebFacePile.react"), {
						idsOrUrls: m,
						borderColor: u.borderColor
					});
				},
				title: "FacePile - 3 Faces"
			},
			{
				example: function() {
					return s.jsx(r("WAWebFacePile.react"), {
						idsOrUrls: c,
						borderColor: u.borderColor
					});
				},
				title: "FacePile - 8 Faces"
			},
			{
				example: function() {
					return s.jsx(r("WAWebFacePile.react"), {
						idsOrUrls: p,
						borderColor: u.borderColor
					});
				},
				title: "FacePile - 8 Faces (using URLs for the image sources)"
			}
		]
	}, f = _;
	l.default = f;
}), 98);
