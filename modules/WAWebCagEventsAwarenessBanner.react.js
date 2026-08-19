__d("WAWebCagEventsAwarenessBanner.react", [
	"fbt",
	"WAWebConversationBanner.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebUimUie.react",
	"WAWebUserPrefsEvents",
	"WDSIconIcCampaignMegaphone.react",
	"react",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { paddingInlineEnd18: {
		paddingInlineEnd: "x1x5flf6",
		$$css: !0
	} }, d = {
		banner: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		announcementSpeaker: {
			color: "xo1mcw5",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.onClose, n = e.ref;
		o("WAWebUserPrefsEvents").getCagEventsAwarenessBannerFirstSeenTimestamp() || o("WAWebUserPrefsEvents").setCagEventsAwarenessBannerFirstSeenTimestamp(), o("useWAWebTimeout").useAlarm(t, o("WAWebUserPrefsEvents").getCagEventsAwarenessBannerAutoDismissalExpiration(), {
			immediate: !0,
			isGlobal: !0
		});
		var a = o("WAWebFaqUrl").getEventsLearnMoreFaqUrl(), i = o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON;
		return u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "CagEventsAwarenessBanner",
			escapable: !0,
			children: u.jsx(r("WAWebConversationBanner.react"), {
				ref: n,
				xstyle: d.banner,
				onClose: t,
				"data-tab": i,
				children: u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: [u.jsx(r("WAWebFlexItem.react"), {
						xstyle: c.paddingInlineEnd18,
						children: u.jsx(r("WDSIconIcCampaignMegaphone.react"), {
							iconXstyle: d.announcementSpeaker,
							width: 32,
							height: 32
						})
					}), u.jsx(r("WAWebFlexItem.react"), { children: u.jsxs(o("WAWebText.react").WAWebTextMuted, {
						as: "span",
						children: [
							s._(
								/*BTDS*/
								""
							),
							" ",
							u.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: a,
								tabIndex: 0,
								"data-tab": i,
								children: r("WAWebFbtCommon")("Learn more")
							})
						]
					}) })]
				})
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
