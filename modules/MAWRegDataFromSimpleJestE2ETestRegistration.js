__d("MAWRegDataFromSimpleJestE2ETestRegistration", [
	"MAWCurrentUser",
	"Promise",
	"WADbRegistrationApi",
	"WebAsyncStorage",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = o("MAWCurrentUser").getID(), a = yield new (e || (e = (n("Promise"))))(function(e, n) {
				r("WebAsyncStorage").getItem("regData:" + t, function(t, r) {
					t ? n(t) : e(r);
				});
			});
			if (a != null) {
				var i = a.deviceId;
				i != null && (yield o("WADbRegistrationApi").saveRegistrationMeta(o("MAWCurrentUser").getID(), a), yield o("WADbRegistrationApi").saveDeviceId(i));
			}
		});
		return function() {
			return t.apply(this, arguments);
		};
	})();
	l.updateRegDataFromLocalStorage = s;
}), 98);
