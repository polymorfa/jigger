__d("WAWebBlockContactPopup.react", [
	"fbt",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebName.react",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WDSFocusStateStyles",
	"WDSMargins.stylex",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginTop6: {
		marginTop: "x1k70j0n",
		$$css: !0
	} };
	function d(e) {
		var t = e.contact, n = e.isReportPreChecked, a = e.onBlock, i = e.onCancel, l = e.onReportSpamBlock, d = r("useWAWebToggle")(n), m = d[0], p = d[1], _ = u.jsx(o("WAWebName.react").Name, {
			contact: t,
			breakWord: !0
		}), f = s._(
			/*BTDS*/
			"",
			[s._param("contact", _)]
		), g = s._(
			/*BTDS*/
			""
		), h = s._(
			/*BTDS*/
			""
		), y = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
			testid: "learn-more-link",
			children: r("WAWebFbtCommon")("Learn more")
		}), C = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", y)]
		);
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "block-contact",
				viewName: "block-contact"
			},
			onOK: m ? l : a,
			okButtonType: "solid-warning",
			okText: r("WAWebFbtCommon")("Block"),
			onCancel: i,
			title: f,
			children: [u.jsx(o("WAWebText.react").WAWebTextMuted, { children: g }), u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginVer12,
				columnGap: 8,
				children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
					children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
						onChange: p,
						checked: m,
						id: "menu-icon-block",
						tabIndex: 0
					})
				}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginTop2,
					children: [u.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
						htmlFor: "menu-icon-block",
						weight: "bold",
						children: h
					}), u.jsx(o("WAWebText.react").WAWebTextMuted, {
						xstyle: c.marginTop6,
						children: C
					})]
				})]
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
