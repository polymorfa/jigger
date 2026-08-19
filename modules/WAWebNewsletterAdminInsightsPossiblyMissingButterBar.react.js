__d("WAWebNewsletterAdminInsightsPossiblyMissingButterBar.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebNewsletterInsightUtils",
	"WAWebNewsletterProducerInsightsLogger",
	"WAWebWamEnumActionTarget",
	"WDSBanner.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useContext;
	function d(e) {
		var t = e.newsletterMetadata, n = t.adminInsights, a = c(o("WAWebNewsletterProducerInsightsLogger").NewsletterProducerInsightsLoggerContext);
		if (n == null) return null;
		switch (n.dataStatus) {
			case o("WAWebNewsletterInsightUtils").NewsletterInsightDataStatus.Available: return null;
			case o("WAWebNewsletterInsightUtils").NewsletterInsightDataStatus.Missing: return u.jsx("div", {
				className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
				children: u.jsx(r("WDSBanner.react"), {
					type: "warning",
					body: s._(
						/*BTDS*/
						""
					),
					actionText: r("WAWebFbtCommon")("Learn more"),
					onAction: function() {
						a.logHelpCentreClick(o("WAWebWamEnumActionTarget").ACTION_TARGET.HELP_CENTER_DATA_UNAVAILABLE_ARTICLE), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterMetricsUnavailableFaqUrl());
					}
				})
			});
		}
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
