__d("WAWebChatlistBanners.react", [
	"WAWebChatButterbar.react",
	"WAWebChatlistPanelNuxBanners.react",
	"WAWebPrivacyScreenUpsellBanner.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c() {
		var e = u(!0), t = e[0], n = e[1], a = o("WAWebPrivacyScreenUpsellBanner.react").useShowPrivacyScreenUpsellBanner(), i = a[0], l = a[1];
		return s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebChatButterbar.react"), { setShowButterBar: n }), !t && (i ? s.jsx(o("WAWebPrivacyScreenUpsellBanner.react").PrivacyScreenUpsellBanner, { onClose: function() {
			return l(!1);
		} }) : s.jsx(r("WAWebChatlistPanelNuxBanners.react"), {}))] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
