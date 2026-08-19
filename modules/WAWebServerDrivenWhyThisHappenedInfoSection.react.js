__d("WAWebServerDrivenWhyThisHappenedInfoSection.react", [
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebNewsletterIntegrityUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4), n = e.enforcementPolicyInformation, r;
		t[0] !== n ? (r = o("WAWebNewsletterIntegrityUtils").getServerDrivenPolicyGuideline(n), t[0] = n, t[1] = r) : r = t[1];
		var a = r;
		if (a == null) return null;
		var i;
		return t[2] !== a ? (i = s.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").InfoSection, { section: {
			testId: "why-this-happened-server-driven",
			key: "why-this-happened",
			title: o("WAWebCommonNewsletterIntegrityStrings").getWhyThisHappenedSectionTitleString,
			subtitle: function() {
				return a;
			}
		} }, "why-this-happened"), t[2] = a, t[3] = i) : i = t[3], i;
	}
	l.default = u;
}), 98);
