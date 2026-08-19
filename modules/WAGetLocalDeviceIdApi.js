__d("WAGetLocalDeviceIdApi", [
	"WADbSignal",
	"WALogger",
	"WASignalDB",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function() {
		return o("WASignalDB").getDb().runInTransaction(["meta"], "readonly", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n, a = yield t.stores.meta.get(o("WADbSignal").MetaKeysEnum.deviceId);
				if ((a == null || (n = a.value) == null ? void 0 : n.deviceId) == null) {
					var i = "[Remote Presence Error] DeviceId was null";
					throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])), i), r("err")(i);
				}
				return a.value.deviceId;
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("getLocalDeviceId"));
	};
	l.getLocalDeviceId = s;
}), 98);
