__d("WmiMetadataEphemeralSyncResponseBackoffWriter", [
	"FBLogger",
	"WmiMetadataDb",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function() {
		return r("FBLogger")("wmi").tags(["wmi_metadata_write"]);
	};
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			if (t.length !== 0) try {
				var n = yield o("WmiMetadataDb").getMetadataDbPromise();
				yield n.runInTransaction(["ephemeralSyncResponseBackoff"], "readwrite", function(e) {
					return e.stores.ephemeralSyncResponseBackoff.bulkDelete(t);
				}, "WmiMetadataDeleteEphemeralSyncResponseBackoff");
			} catch (t) {
				e().catching(r("getErrorSafe")(t)).warn("Failed to delete ephemeralSyncResponseBackoff in messenger_web_metadata");
			}
		}), u.apply(this, arguments);
	}
	l.deleteEphemeralSyncResponseBackoffInfo = s;
}), 98);
