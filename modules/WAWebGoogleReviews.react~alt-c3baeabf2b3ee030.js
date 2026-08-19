__d("WAWebGoogleReviews.react", [
	"WAWebDrawerBlock.react",
	"WAWebDrawerSection.react",
	"WAWebGoogleReviewsRow.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.googlePlace;
		return (t == null ? void 0 : t.rating) == null ? null : s.jsx(r("WAWebDrawerSection.react"), { children: s.jsx(r("WAWebDrawerBlock.react"), {
			testid: "google_reviews_section",
			multiline: !0,
			children: s.jsx(r("WAWebGoogleReviewsRow.react"), { googlePlace: t })
		}) });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
