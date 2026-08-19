__d("useMAWEphemeralDurationInSec", [
	"Int64Hooks",
	"JSResourceForInteraction",
	"promiseDone",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useRef, c = s.useState, d = 0, m = -1;
	function p(e, t) {
		var n = c(m), a = n[0], i = n[1], l = u(a);
		return o("Int64Hooks").useEffectInt64(function() {
			var n = e();
			n != null && r("promiseDone")(r("JSResourceForInteraction")("MAWGetEphemeralSettings").__setRef("useMAWEphemeralDurationInSec").load().then(function(e) {
				return e.getEphemeralSetting(n, t).then(function(e) {
					e ? (l.current = e.ephemeralExpirationInSec, i(e.ephemeralExpirationInSec)) : (l.current = d, i(d));
				});
			}));
		}, [e, t]), {
			ephemeralDurationInSec: a,
			initialDuration: l.current,
			isLoadingEphemeralDuration: l.current === m,
			setEphemeralDurationInSec: i
		};
	}
	l.default = p;
}), 98);
