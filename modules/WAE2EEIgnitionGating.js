__d("WAE2EEIgnitionGating", ["gkx", "qex"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		var e;
		return (e = r("qex")._("535")) != null ? e : !1;
	}
	function s() {
		var e;
		return (e = r("qex")._("546")) != null ? e : !1;
	}
	function u() {
		return r("gkx")("12542");
	}
	function c() {
		return e() || u();
	}
	l.isE2EEIgnitionSyncEnabled = e, l.isE2EEIgnitionResnapshotEnabled = s, l.isE2EEIgnitionCompareEnabled = u, l.isE2EEIgnitionEnabled = c;
}), 98);
