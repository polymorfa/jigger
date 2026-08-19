__d("WARemoveCurrentDevice", [
	"WAGetCurrentUserDeviceInfoApi",
	"WAGlobals",
	"WALogger",
	"WARemoveDevice",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield o("WAGetCurrentUserDeviceInfoApi").getCurrentUserDeviceInfo();
			if (t == null) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["There is no stored user info, it was already deleted or this job was called twice, possibly from another tab"]))), o("WAResultOrError").makeResult();
			var n = t.deviceId, r = t.identityKey, a = yield o("WARemoveDevice").removeDevice({
				deviceId: n,
				identity: r
			});
			return a.success && (yield o("WAGlobals").getDependencies().clearSignalAndTempStores()), o("WAResultOrError").makeResult();
		});
		return function() {
			return t.apply(this, arguments);
		};
	})();
	l.removeCurrentDevice = s;
}), 98);
