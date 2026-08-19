__d("WAWebNoNewsletterAlertsDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebText.react",
	"WDSIllustrationWdsPictoChannelsFeedbackTick.react",
	"WDSMargins.stylex",
	"WDSTextLayout.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		paddingBlock36: {
			paddingTop: "xijc0j3",
			paddingBottom: "xq1608w",
			$$css: !0
		},
		paddingInline48: {
			paddingInlineStart: "x1oiqv2n",
			paddingInlineEnd: "x15zmtp0",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, d = {
		container: {
			alignItems: "x6s0dn4",
			$$css: !0
		},
		header: {
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			$$css: !0
		},
		emptyStateContainer: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			height: "x5yr21d",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		}
	};
	function m() {
		var e = o("react-compiler-runtime").c(2);
		if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
			var t;
			return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				testid: "newsletter-no-alerts-drawer",
				xstyle: d.emptyStateContainer,
				children: u.jsx(r("WDSTextLayout.react"), {
					illustration: u.jsx(r("WDSIllustrationWdsPictoChannelsFeedbackTick.react"), {}),
					headline: s._(
						/*BTDS*/
						""
					),
					body: s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
							children: s._(
								/*BTDS*/
								""
							)
						}))]
					)
				})
			}), e[0] = t) : t = e[0], t;
		}
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(r("WAWebDrawerSection.react"), {
			testid: "newsletter-no-alerts-drawer",
			children: u.jsx(p, {})
		}), e[1] = n) : n = e[1], n;
	}
	function p() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [
			d.container,
			c.paddingBlock36,
			c.paddingInline48,
			o("WDSMargins.stylex").wdsMargins.marginBottom0
		], e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
				weight: "medium",
				xstyle: d.header,
				padding: 16,
				color: "primary",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), e[1] = n) : n = e[1];
		var a;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			xstyle: t,
			children: [n, u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom16,
				children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
					color: "secondary",
					marginTop: 8,
					xstyle: d.header,
					children: s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
							children: s._(
								/*BTDS*/
								""
							)
						}))]
					)
				})
			})]
		}), e[2] = a) : a = e[2], a;
	}
	l.default = m;
}), 226);
