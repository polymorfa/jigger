__d("WAWebNewsletterStatusSelectorButton.react", [
	"fbt",
	"WAWebModalManager",
	"WAWebNewsletterCollection",
	"WAWebNewsletterStatusSelectorDrawerLoadable",
	"WDSButton.react",
	"WDSIconWdsIcChannels.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n, a = e.onNewsletterSelected, i = e.readonly, l = i === void 0 ? !1 : i, c = e.selectedNewsletterWid, d = e.type, m = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterStatusSelectorDrawerLoadable").NewsletterStatusSelectorDrawerLoadable, {
				selectedNewsletterWid: c,
				onNewsletterSelected: function(t) {
					a(t), o("WAWebModalManager").ModalManager.close();
				},
				onClose: o("WAWebModalManager").closeModalManager
			}));
		}, p = c != null && (t = (n = r("WAWebNewsletterCollection").get(c)) == null || (n = n.newsletterMetadata) == null ? void 0 : n.name) != null ? t : null, _ = p != null ? p : s._(
			/*BTDS*/
			""
		);
		if (l) return u.jsxs("div", {
			className: "x6s0dn4 x17t9dm2 x3nfvp2 x1qvou4u x1s70e7g",
			"data-testid": "newsletter-status-selector-button",
			children: [u.jsx(r("WDSIconWdsIcChannels.react"), {
				height: 20,
				width: 20
			}), u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "persistentAlwaysWhite",
				children: _
			})]
		});
		var f = d === "text" ? "media" : "default";
		return u.jsx(r("WDSButton.react"), {
			variant: "outline",
			type: f,
			Icon: r("WDSIconWdsIcChannels.react"),
			label: _,
			onPress: m,
			testid: "newsletter-status-selector-button"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
