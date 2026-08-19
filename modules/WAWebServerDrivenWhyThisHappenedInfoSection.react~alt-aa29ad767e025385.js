__d("WAWebServerDrivenWhyThisHappenedInfoSection.react", [
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebNewsletterIntegrityUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.enforcementPolicyInformation, n = o("WAWebNewsletterIntegrityUtils").getServerDrivenPolicyGuideline(t);
		return n == null ? null : s.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").InfoSection, { section: {
			testId: "why-this-happened-server-driven",
			key: "why-this-happened",
			title: o("WAWebCommonNewsletterIntegrityStrings").getWhyThisHappenedSectionTitleString,
			subtitle: function() {
				return n;
			}
		} }, "why-this-happened");
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
