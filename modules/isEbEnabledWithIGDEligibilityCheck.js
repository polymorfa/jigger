__d("isEbEnabledWithIGDEligibilityCheck", [
	"EBIsEbEnabled",
	"Promise",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		return r("gkx")("24160") ? o("EBIsEbEnabled").isEbEnabledLS(t.tables) : (e || (e = n("Promise"))).resolve(!1);
	}
	l.isEbEnabledWithIGDEligibilityCheck = s;
}), 98);
