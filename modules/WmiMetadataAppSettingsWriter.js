__d("WmiMetadataAppSettingsWriter", [
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
			if (t.length !== 0) {
				var n = yield o("WmiMetadataDb").getMetadataDbPromise();
				try {
					yield n.runInTransaction(["appSettings"], "readwrite", function(e) {
						return e.stores.appSettings.bulkPut(t);
					}, "WmiMetadataWriteAppSettings");
				} catch (t) {
					e().catching(r("getErrorSafe")(t)).warn("Failed to write appSettings to messenger_web_metadata");
				}
			}
		}), u.apply(this, arguments);
	}
	l.writeAppSettingsToMetadataDb = s;
}), 98);
