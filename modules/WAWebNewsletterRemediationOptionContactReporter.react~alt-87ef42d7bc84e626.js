__d("WAWebNewsletterRemediationOptionContactReporter.react", [
	"fbt",
	"WAWebNewsletterAlertsRowComponent.react",
	"WDSIconIcMail.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d(e) {
		var t = e.onClickEmailReporter;
		return u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
			icon: u.jsx(r("WDSIconIcMail.react"), {
				height: 24,
				width: 24,
				iconXstyle: c.secondaryColor
			}),
			onClick: t,
			showBottomBorder: !1,
			showDetailRight: !1,
			subtitle: s._(
				/*BTDS*/
				""
			),
			testId: "newsletter-remediation-options-drawer-contact-reporter",
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
