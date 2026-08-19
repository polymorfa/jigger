__d("MAWRemotePresenceSetup", [
	"MAWCurrentUser",
	"MAWDeviceRegistrationInitWorker",
	"MAWIndexedDbMetadata",
	"MAWODSProxy",
	"MessengerWebInitData",
	"MultipleTabsLogger",
	"QuickPerformanceLogger",
	"WAOdsEnums",
	"WASignalDB",
	"asyncToGeneratorRuntime",
	"justknobx",
	"qpl",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = r("requireDeferred")("MAWMainThreadLogger").__setRef("MAWRemotePresenceSetup");
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			o("MultipleTabsLogger").addAnnotationToQPLEvent(r("qpl")._(398998698, "1355"), +e);
			var t = yield s.load(), n = t.setupMainWaLogger;
			n(), yield d("signal_db", e, function() {
				return o("WASignalDB").makeSignalDb(o("MAWIndexedDbMetadata").signalWorm(o("MAWCurrentUser").getID()), r("MessengerWebInitData").accountKeyV2, r("justknobx")._("3218"), function(e) {
					o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.WORM,
						key: "unrecoverable." + e
					});
				}, { log: function() {} }, r("qpl")._(1056840657, "2716"));
			}), yield d("device_registration", e, function() {
				return o("MAWDeviceRegistrationInitWorker").registerDevice(!1);
			});
		}), c.apply(this, arguments);
	}
	var d = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, o) {
			(e || (e = r("QuickPerformanceLogger"))).markerPoint(r("qpl")._(398998698, "1355"), t + "_start", { instanceKey: +n });
			var a = yield o();
			return e.markerPoint(r("qpl")._(398998698, "1355"), t + "_end", { instanceKey: +n }), a;
		});
		return function(n, r, o) {
			return t.apply(this, arguments);
		};
	})();
	l.setupArmadilloWebForRP = u;
}), 98);
