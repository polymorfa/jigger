__d("MAWRegDataFromSimpleJestE2ETestRegistration", [
	"MAWCurrentUser",
	"WADbRegistrationApi",
	"WebAsyncStorage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = async function() {
		var e = o("MAWCurrentUser").getID(), t = await new Promise(function(t, n) {
			r("WebAsyncStorage").getItem("regData:" + e, function(e, r) {
				e ? n(e) : t(r);
			});
		});
		if (t != null) {
			var n = t.deviceId;
			n != null && (await o("WADbRegistrationApi").saveRegistrationMeta(o("MAWCurrentUser").getID(), t), await o("WADbRegistrationApi").saveDeviceId(n));
		}
	};
	l.updateRegDataFromLocalStorage = e;
}), 98);
