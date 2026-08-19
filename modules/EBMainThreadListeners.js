__d("EBMainThreadListeners", [
	"EBReenrollmentTriggerListener",
	"LSDatabaseSingleton",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
			o("EBReenrollmentTriggerListener").initEBReenrollmentTriggerListener(t);
		}), u.apply(this, arguments);
	}
	l.initEBListeners = s;
}), 98);
