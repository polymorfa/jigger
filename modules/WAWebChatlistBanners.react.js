__d("WAWebChatlistBanners.react", [
	"WAWebChatButterbar.react",
	"WAWebChatlistPanelNuxBanners.react",
	"WAWebPrivacyScreenUpsellBanner.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c() {
		var e = o("react-compiler-runtime").c(7), t = u(!0), n = t[0], a = t[1], i = o("WAWebPrivacyScreenUpsellBanner.react").useShowPrivacyScreenUpsellBanner(), l = i[0], c = i[1], d;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (d = s.jsx(r("WAWebChatButterbar.react"), { setShowButterBar: a }), e[0] = d) : d = e[0];
		var m;
		e[1] !== c || e[2] !== n || e[3] !== l ? (m = !n && (l ? s.jsx(o("WAWebPrivacyScreenUpsellBanner.react").PrivacyScreenUpsellBanner, { onClose: function() {
			return c(!1);
		} }) : s.jsx(r("WAWebChatlistPanelNuxBanners.react"), {})), e[1] = c, e[2] = n, e[3] = l, e[4] = m) : m = e[4];
		var p;
		return e[5] !== m ? (p = s.jsxs(s.Fragment, { children: [d, m] }), e[5] = m, e[6] = p) : p = e[6], p;
	}
	l.default = c;
}), 98);
