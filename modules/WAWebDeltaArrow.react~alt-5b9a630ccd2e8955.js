__d("WAWebDeltaArrow.react", [
	"WAWebL10N",
	"WAWebNewsletterMetricUtils",
	"WDSIconIcArrowForward.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = {
		transform: "xsqj5wx",
		$$css: !0
	}, d = {
		criticalColor: {
			color: "x30a034",
			$$css: !0
		},
		successColor: {
			color: "x1du590y",
			$$css: !0
		},
		rotateWrapper: {
			display: "x1rg5ohu",
			$$css: !0
		},
		rotate: function(t, n) {
			return [c, { "--x-transform": "rotate(" + (n ? t : -t) + "deg) scale(" + (n ? -1 : 1) + ")" != null ? "rotate(" + (n ? t : -t) + "deg) scale(" + (n ? -1 : 1) + ")" : void 0 }];
		}
	};
	function m(t) {
		var n = t.delta, a = t.size;
		if (o("WAWebNewsletterMetricUtils").isDeltaValueZero(n) || n === o("WAWebNewsletterMetricUtils").DELTA_INFINITE) return null;
		var i = n > 0, l = i ? 45 : -45, s = r("WAWebL10N").isRTL();
		return u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.rotateWrapper, d.rotate(l, s)), { children: u.jsx(r("WDSIconIcArrowForward.react"), {
			iconXstyle: i ? d.successColor : d.criticalColor,
			height: a,
			width: a
		}) }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
