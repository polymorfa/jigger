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
	"justknobx",
	"qpl",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = r("requireDeferred")("MAWMainThreadLogger").__setRef("MAWRemotePresenceSetup");
	async function u(e) {
		o("MultipleTabsLogger").addAnnotationToQPLEvent(r("qpl")._(398998698, "1355"), +e);
		var t = await s.load(), n = t.setupMainWaLogger;
		n(), await c("signal_db", e, function() {
			return o("WASignalDB").makeSignalDb(o("MAWIndexedDbMetadata").signalWorm(o("MAWCurrentUser").getID()), r("MessengerWebInitData").accountKeyV2, r("justknobx")._("3218"), function(e) {
				o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.WORM,
					key: "unrecoverable." + e
				});
			}, { log: function() {} }, r("qpl")._(1056840657, "2716"));
		}), await c("device_registration", e, function() {
			return o("MAWDeviceRegistrationInitWorker").registerDevice(!1);
		});
	}
	var c = async function(n, o, a) {
		(e || (e = r("QuickPerformanceLogger"))).markerPoint(r("qpl")._(398998698, "1355"), n + "_start", { instanceKey: +o });
		var t = await a();
		return e.markerPoint(r("qpl")._(398998698, "1355"), n + "_end", { instanceKey: +o }), t;
	};
	l.setupArmadilloWebForRP = u;
}), 98);
