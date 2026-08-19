__d("WAWebGoogleReviews.react", [
	"WAWebDrawerBlock.react",
	"WAWebDrawerSection.react",
	"WAWebGoogleReviewsRow.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(2), n = e.googlePlace;
		if ((n == null ? void 0 : n.rating) == null) return null;
		var a;
		return t[0] !== n ? (a = s.jsx(r("WAWebDrawerSection.react"), { children: s.jsx(r("WAWebDrawerBlock.react"), {
			testid: "google_reviews_section",
			multiline: !0,
			children: s.jsx(r("WAWebGoogleReviewsRow.react"), { googlePlace: n })
		}) }), t[0] = n, t[1] = a) : a = t[1], a;
	}
	l.default = u;
}), 98);
