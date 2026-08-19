__d("updateEphemeralDuration", ["JSResourceForInteraction", "WATimeUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, a, i, l) {
		var s = o("WATimeUtils").millisTime();
		return r("JSResourceForInteraction")("MAWEphemeralSettingsUpdate").__setRef("updateEphemeralDuration").load().then(function(e) {
			return e.updateEphemeralSettings(t, s, n, l);
		}).then(function(e) {
			return a(), !0;
		}).catch(function(e) {
			return i(), !1;
		});
	}
	l.default = e;
}), 98);
