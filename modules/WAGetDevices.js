__d("WAGetDevices", [
	"WADevicesState",
	"WALogger",
	"WAPushSafeTypes",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = o("WAPushSafeTypes").unsafeNotNullable(t), r = n.ignoreDhash, a = r === void 0 ? !1 : r, i = n.reason, l = n.users;
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["fetchAndSaveDevices: ", ""])), i), a && o("WADevicesState").getDevicesState().reset(Array.from(l)), yield o("WADevicesState").getDevicesState().waitForUserDevices(Array.from(l), "getDevices job: " + i, a);
		}), u.apply(this, arguments);
	}
	l.getDevices = s;
}), 98);
