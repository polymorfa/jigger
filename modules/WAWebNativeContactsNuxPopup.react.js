__d("WAWebNativeContactsNuxPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebContactLogging",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebWdsIllFavoritesIcon.react",
	"WDSMargins.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = { marginInlineStart30: {
		marginInlineStart: "xymharo",
		$$css: !0
	} }, m = {
		contactsHeroIcon: {
			strokeWidth: "xupzf07",
			$$css: !0
		},
		contactsHeroIconHeart: {
			display: "x1s85apg",
			$$css: !0
		},
		contactsHeroIconAvatar: {
			fill: "x2xlkv5",
			$$css: !0
		},
		contactsHeroIconBackpage: {
			fill: "x8e2w6c",
			$$css: !0
		},
		text: {
			maxWidth: "x1lr1uin",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.source;
		c(function() {
			o("WAWebContactLogging").logViewNativeContactNux(t);
		}, []);
		var n = s._(
			/*BTDS*/
			""
		), a = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getNativeContactLearnMoreFaqUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("OK"),
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					u.jsx(o("WAWebWdsIllFavoritesIcon.react").WdsIllFavoritesIcon, {
						xstyle: d.marginInlineStart30,
						height: 96,
						iconXstyle: m.contactsHeroIcon,
						innerStyles: {
							heart: m.contactsHeroIconHeart,
							avatar: m.contactsHeroIconAvatar,
							backpage: m.contactsHeroIconBackpage
						}
					}),
					u.jsx(o("WAWebText.react").WAWebTextLarge, {
						weight: "bold",
						xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
						textAlign: "center",
						children: n
					}),
					u.jsx(o("WAWebText.react").WAWebTextMuted, {
						xstyle: [o("WDSMargins.stylex").wdsMargins.marginTop16, m.text],
						textAlign: "center",
						children: a
					})
				]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
