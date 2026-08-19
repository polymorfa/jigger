__d("WAWebNewsletterDirectoryActionButton.react", [
	"WAWebNewsletterQuickFollowButton.react",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n, a = e.directoryFunnelLogger, i = e.loggingOptions, l = e.newsletter, u = e.ref, c = o("useWAWebModelValues").useOptionalModelValues(l.newsletterMetadata, ["isPreview", "membershipType"]);
		if (c == null || (t = c == null ? void 0 : c.iAmOwner()) != null && t || (n = c == null ? void 0 : c.iAmAdmin()) != null && n) return null;
		var d = function() {
			a == null || a.logNewsletterFollow(l.id, i.directoryChannelIndex);
		}, m = function() {
			a == null || a.logNewsletterUnfollow(l.id, i.directoryChannelIndex);
		};
		return s.jsx(r("WAWebNewsletterQuickFollowButton.react"), {
			ref: u,
			confirmUnfollow: !0,
			hasBorder: !0,
			onFollowAction: d,
			onUnfollowAction: m,
			following: c.isPreview === !1,
			loggingOptions: i,
			newsletter: l
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
