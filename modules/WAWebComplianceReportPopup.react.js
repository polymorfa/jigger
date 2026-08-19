__d("WAWebComplianceReportPopup.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebDrawerManager",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebIconPopup.react",
	"WAWebPrivacyTipBanner.react",
	"WAWebSettingsConst",
	"WAWebSettingsFlowLoadable",
	"WAWebWdsPictoSuccessTickIcon.react",
	"WDSIconIcDescription.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { iconColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d(e) {
		var t = e.actionText, n = e.bannerText, a = e.learnMoreUrl, i = e.showViewReport;
		return u.jsx(r("WAWebIconPopup.react"), {
			icon: o("WAWebWdsPictoSuccessTickIcon.react").WdsPictoSuccessTickIcon,
			useFilledIcon: !1,
			iconSize: "small",
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			extraContent: u.jsx(o("WAWebFlex.react").FlexRow, {
				paddingTop: 16,
				paddingBottom: 16,
				testid: "popup-contents",
				children: u.jsx(r("WAWebPrivacyTipBanner.react"), {
					image: u.jsx(r("WDSIconIcDescription.react"), { iconXstyle: c.iconColor }),
					testId: "newsletter-dsa-report-learn-more",
					text: n,
					actionText: t,
					actionTextColor: "blue",
					onAction: function() {
						return o("WAWebExternalLink.react").openExternalLink(a);
					}
				})
			}),
			primaryActionText: r("WAWebFbtCommon")("Close"),
			secondaryActionText: i === !0 ? s._(
				/*BTDS*/
				""
			) : void 0,
			onSecondaryActionClick: i === !0 ? m : void 0
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
			descriptorType: "settings",
			initialStep: o("WAWebSettingsConst").SettingsSteps.NewsletterReports
		} : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
			initialStep: o("WAWebSettingsConst").SettingsSteps.NewsletterReports,
			onEnd: o("WAWebDrawerManager").closeDrawerLeft
		}));
	}
	l.default = d;
}), 226);
