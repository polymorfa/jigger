__d("WAWebMobileLandingAcquisition.react", [
	"CometPlaceholder.react",
	"WAWebMobileLandingAcquisitionGating",
	"WDSThemes",
	"deferredLoadComponent",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(4), a = t.experiment, i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, m.fullHeight), n[0] = i) : i = n[0];
		var l;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx("div", {}), n[1] = l) : l = n[1];
		var s;
		return n[2] !== a ? (s = u.jsx("div", babelHelpers.extends({}, i, {
			"data-testid": "mobile_landing_acquisition_container",
			children: u.jsx(r("CometPlaceholder.react"), {
				fallback: l,
				name: "WAWebMobileLandingAcquisition",
				children: a === o("WAWebMobileLandingAcquisitionGating").MobileLandingAcquisitionExperiment.Test ? u.jsx(c, {}) : u.jsx(d, {})
			})
		})), n[2] = a, n[3] = s) : s = n[3], s;
	}
	l.default = p;
}), 98);
