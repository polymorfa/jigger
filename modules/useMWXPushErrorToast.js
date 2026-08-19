__d("useMWXPushErrorToast", [
	"MWXIconCautionTriangle",
	"react",
	"react-compiler-runtime",
	"useMWXPushToast"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useCallback;
	function u() {
		var e = o("react-compiler-runtime").c(2), t = r("useMWXPushToast")(), n;
		return e[0] !== t ? (n = function(n) {
			t(babelHelpers.extends({}, n, {
				_isWarning_DO_NOT_USE: !0,
				announcementType: "warning",
				assertive: !0,
				icon: r("MWXIconCautionTriangle")
			}));
		}, e[0] = t, e[1] = n) : n = e[1], n;
	}
	l.default = u;
}), 98);
