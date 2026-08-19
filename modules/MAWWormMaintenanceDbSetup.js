__d("MAWWormMaintenanceDbSetup", [
	"BackendInitLoggingUtils",
	"MAWCurrentUser",
	"MAWIndexedDbMetadata",
	"MAWODSProxy",
	"MessengerWebInitData",
	"WAOdsEnums",
	"WormMaintenanceDb",
	"asyncToGeneratorRuntime",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield o("BackendInitLoggingUtils").measureMawInit("worm_maintenance_db_init", n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				yield o("WormMaintenanceDb").makeWormMaintenanceDb({
					blockingErrorThreshold: r("justknobx")._("3218"),
					dbName: o("MAWIndexedDbMetadata").wormMaintenanceDbName(o("MAWCurrentUser").getID()),
					onBlockingError: function(t) {
						o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.WORM,
							key: "reverb.unrecoverable." + t
						});
					},
					qplEvent: r("qpl")._(1056840657, "2716"),
					strEncKey: r("MessengerWebInitData").accountKeyV2
				});
			}));
		}), s.apply(this, arguments);
	}
	l.mawWormDbMaintenanceDbSetup = e;
}), 98);
