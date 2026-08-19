__d("WAWebNewsletterStatusIntroPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModalManager",
	"WAWebNewsletterStatusIntroContent",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIllustrationWdsIllChannelStatus.react",
	"WDSMenuBarItem.react",
	"WDSText.react",
	"react",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		hero: {
			marginTop: "x9u28bd",
			$$css: !0
		},
		title: {
			marginTop: "x1de0gy",
			$$css: !0
		},
		row: {
			marginTop: "x1nmyh1g",
			$$css: !0
		},
		iconColumn: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xyo0t3i",
			$$css: !0
		},
		icon: {
			color: "x14ug900",
			$$css: !0
		},
		learnMore: {
			marginTop: "x9u28bd",
			$$css: !0
		}
	};
	function d() {
		var e, t = r("useWAWebFocusOnMount")(), n = function() {
			o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterStatusIntroFaqUrl());
		};
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			ref: t,
			testid: "newsletter-status-intro-popup",
			children: [
				u.jsx("div", {
					className: "x10l6tqk x13vifvy xtijo5x x1vjfegm",
					children: u.jsx(r("WDSMenuBarItem.react"), {
						icon: r("WDSIconIcClose.react"),
						title: s._(
							/*BTDS*/
							""
						),
						onClick: o("WAWebModalManager").closeModalManager,
						testid: "newsletter-status-intro-close"
					})
				}),
				u.jsx((e = o("WAWebFlex.react")).FlexRow, {
					align: "center",
					justify: "center",
					xstyle: c.hero,
					children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(r("WDSIllustrationWdsIllChannelStatus.react"), { "aria-hidden": !0 }) })
				}),
				u.jsx(e.FlexRow, {
					align: "center",
					justify: "center",
					xstyle: c.title,
					children: u.jsx(r("WDSText.react"), {
						type: "LargeTitle2",
						colorName: "contentDefault",
						textAlign: "center",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx(e.FlexColumn, { children: o("WAWebNewsletterStatusIntroContent").getNewsletterStatusIntroContent().map(function(e) {
					var t = e.Icon, n = e.description, a = e.key, i = e.title;
					return u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: c.row,
						children: [u.jsx(r("WAWebFlexItem.react"), {
							shrink: 0,
							xstyle: c.iconColumn,
							children: u.jsx(t, {
								width: 24,
								iconXstyle: c.icon
							})
						}), u.jsxs(r("WAWebFlexItem.react"), { children: [u.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							children: i
						}), u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDeemphasized",
							children: n
						})] })]
					}, a);
				}) }),
				u.jsx(e.FlexRow, {
					align: "center",
					justify: "center",
					xstyle: c.learnMore,
					children: u.jsx(r("WDSButton.react"), {
						variant: "borderless",
						type: "default",
						size: "medium",
						onPress: n,
						label: s._(
							/*BTDS*/
							""
						),
						testid: "newsletter-status-intro-learn-more"
					})
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
