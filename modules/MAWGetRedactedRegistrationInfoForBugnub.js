__d("MAWGetRedactedRegistrationInfoForBugnub", ["WAGetRegistrationInfoApi", "asyncToGeneratorRuntime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAGetRegistrationInfoApi").getRegistrationInfo(), t = e.catExpiryUnixTime, n = e.registrationUnixTime;
			return {
				catExpiryUnixTime: t,
				registrationUnixTime: n
			};
		}), s.apply(this, arguments);
	}
	l.getRedactedRegistrationInfoForBugnub = e;
}), 98);
