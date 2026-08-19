__d("WAWebMobileLandingAcquisition.react", [
	"CometPlaceholder.react",
	"WAWebMobileLandingAcquisitionGating",
	"WDSThemes",
	"deferredLoadComponent",
	"react",
	"requireDeferredForDisplay",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = r("deferredLoadComponent")(r("requireDeferredForDisplay")("WAWebMobileLandingVariant1.react").__setRef("WAWebMobileLandingAcquisition.react")), d = r("deferredLoadComponent")(r("requireDeferredForDisplay")("WAWebMobileLandingVariant2.react").__setRef("WAWebMobileLandingAcquisition.react")), m = { fullHeight: {
		position: "xixxii4",
		top: "x13vifvy",
		insetInlineStart: "x1o0tod",
		left: null,
		right: null,
		width: "xh8yej3",
		height: "x5yr21d",
		overflowY: "x1odjw0f",
		backgroundColor: "x12peec7",
		$$css: !0
	} };
	function p(t) {
		var n = t.experiment;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, m.fullHeight), {
			"data-testid": "mobile_landing_acquisition_container",
			children: u.jsx(r("CometPlaceholder.react"), {
				fallback: u.jsx("div", {}),
				name: "WAWebMobileLandingAcquisition",
				children: n === o("WAWebMobileLandingAcquisitionGating").MobileLandingAcquisitionExperiment.Test ? u.jsx(c, {}) : u.jsx(d, {})
			})
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
