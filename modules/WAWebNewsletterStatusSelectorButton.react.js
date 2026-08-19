__d("WAWebNewsletterStatusSelectorButton.react", [
	"fbt",
	"WAWebModalManager",
	"WAWebNewsletterCollection",
	"WAWebNewsletterStatusSelectorDrawerLoadable",
	"WDSButton.react",
	"WDSIconWdsIcChannels.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n, a = o("react-compiler-runtime").c(13), i = e.onNewsletterSelected, l = e.readonly, c = e.selectedNewsletterWid, d = e.type, m = l === void 0 ? !1 : l, p;
		a[0] !== i || a[1] !== c ? (p = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterStatusSelectorDrawerLoadable").NewsletterStatusSelectorDrawerLoadable, {
				selectedNewsletterWid: c,
				onNewsletterSelected: function(t) {
					i(t), o("WAWebModalManager").ModalManager.close();
				},
				onClose: o("WAWebModalManager").closeModalManager
			}));
		}, a[0] = i, a[1] = c, a[2] = p) : p = a[2];
		var _ = p, f = c != null && (t = (n = r("WAWebNewsletterCollection").get(c)) == null || (n = n.newsletterMetadata) == null ? void 0 : n.name) != null ? t : null, g;
		a[3] !== f ? (g = f != null ? f : s._(
			/*BTDS*/
			""
		), a[3] = f, a[4] = g) : g = a[4];
		var h = g;
		if (m) {
			var y;
			a[5] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x6s0dn4 x17t9dm2 x3nfvp2 x1qvou4u x1s70e7g" }, a[5] = y) : y = a[5];
			var C;
			a[6] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(r("WDSIconWdsIcChannels.react"), {
				height: 20,
				width: 20
			}), a[6] = C) : C = a[6];
			var b;
			return a[7] !== h ? (b = u.jsxs("div", babelHelpers.extends({}, y, {
				"data-testid": "newsletter-status-selector-button",
				children: [C, u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "persistentAlwaysWhite",
					children: h
				})]
			})), a[7] = h, a[8] = b) : b = a[8], b;
		}
		var v = d === "text" ? "media" : "default", S;
		return a[9] !== v || a[10] !== _ || a[11] !== h ? (S = u.jsx(r("WDSButton.react"), {
			variant: "outline",
			type: v,
			Icon: r("WDSIconWdsIcChannels.react"),
			label: h,
			onPress: _,
			testid: "newsletter-status-selector-button"
		}), a[9] = v, a[10] = _, a[11] = h, a[12] = S) : S = a[12], S;
	}
	l.default = c;
}), 226);
