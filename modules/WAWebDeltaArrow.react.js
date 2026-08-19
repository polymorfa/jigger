__d("WAWebDeltaArrow.react", [
	"WAWebL10N",
	"WAWebNewsletterMetricUtils",
	"WDSIconIcArrowForward.react",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(8), a = t.delta, i = t.size;
		if (o("WAWebNewsletterMetricUtils").isDeltaValueZero(a) || a === o("WAWebNewsletterMetricUtils").DELTA_INFINITE) return null;
		var l = a > 0, s = l ? 45 : -45, c;
		if (n[0] !== s) {
			var m = r("WAWebL10N").isRTL();
			c = (e || (e = r("stylex"))).props(d.rotateWrapper, d.rotate(s, m)), n[0] = s, n[1] = c;
		} else c = n[1];
		var p = l ? d.successColor : d.criticalColor, _;
		n[2] !== i || n[3] !== p ? (_ = u.jsx(r("WDSIconIcArrowForward.react"), {
			iconXstyle: p,
			height: i,
			width: i
		}), n[2] = i, n[3] = p, n[4] = _) : _ = n[4];
		var f;
		return n[5] !== c || n[6] !== _ ? (f = u.jsx("span", babelHelpers.extends({}, c, { children: _ })), n[5] = c, n[6] = _, n[7] = f) : f = n[7], f;
	}
	l.default = m;
}), 98);
