__d("WAWebReportNewsletterPopup.react", [
	"fbt",
	"WAWebCheckBox.react",
	"WAWebCommonNewsletterStrings",
	"WAWebComplianceReportPopupLoadable",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterIntegrityUtils",
	"WAWebNewsletterUnsubscribeAction",
	"WAWebSendSpamChatAction",
	"WAWebText_DONOTUSE.react",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumTsSurface",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebShouldShowNewsletterUnfollowUpsell"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = { border: {
		borderBottomWidth: "xso031l",
		borderBottomStyle: "x1q0q8m5",
		borderBottomColor: "x120ee7l",
		$$css: !0
	} };
	function p(t) {
		var n = t.chat, a = t.spamFlow, i = d(!1), l = i[0], u = i[1], p = o("useWAWebShouldShowNewsletterUnfollowUpsell").useShouldShowNewsletterUnfollowUpsell(n), _ = s._(
			/*BTDS*/
			""
		), f = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getNewsletterReportLearnMoreUrl(),
			children: r("WAWebFbtCommon")("Learn more")
		}), g = o("WAWebNewsletterGatingUtils").isNewsletterUKOSAReportingEnabled() ? s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", f)]
		) : s._(
			/*BTDS*/
			""
		), h = o("WAWebCommonNewsletterStrings").getUnfollowNewsletterText(), y, C = function() {
			o("WAWebSendSpamChatAction").sendReport({
				chat: n,
				spamFlow: a
			}).then(function(e) {
				return e != null && (y = e), l && o("WAWebNewsletterUnsubscribeAction").unsubscribeFromNewsletterAction(n, {
					eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE
				});
			}).finally(function() {
				o("WAWebModalManager").ModalManager.close();
				var e = o("WAWebNewsletterIntegrityUtils").getNewsletterReportComplianceConfig({ reportId: y });
				e != null && o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebComplianceReportPopupLoadable").ComplianceReportPopupLoadable, {
					learnMoreUrl: e.learnMoreUrl,
					bannerText: e.bannerText,
					actionText: e.actionText,
					showViewReport: e.showViewReport
				}));
			});
		};
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: C,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			title: _,
			children: [p && c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer12, o("WDSPaddings.stylex").wdsPaddings.paddingBottom20, m.border, o("WDSMargins.stylex").wdsMargins.marginEnd0), { children: [c.jsx(o("WAWebCheckBox.react").CheckBox, {
				onChange: function() {
					return u(function(e) {
						return !e;
					});
				},
				checked: l,
				id: "newsletter-upsell-unfollow"
			}), c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
				className: (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginStart8),
				testid: "newsletter-upsell-unfollow-label",
				htmlFor: "newsletter-upsell-unfollow",
				children: h
			})] })), c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom12,
				children: g
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
