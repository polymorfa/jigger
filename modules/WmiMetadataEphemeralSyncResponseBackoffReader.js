__d("WmiMetadataEphemeralSyncResponseBackoffReader", [
	"FBLogger",
	"WmiMetadataDb",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["userJid"], s = function() {
		return r("FBLogger")("wmi").tags(["wmi_metadata_read"]);
	};
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				var t = yield o("WmiMetadataDb").getMetadataDbPromise();
				return t.runInTransaction(["ephemeralSyncResponseBackoff"], "readonly", (function() {
					var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
						var n = yield t.stores.ephemeralSyncResponseBackoff.get(e);
						return (n == null ? void 0 : n.userJid) === e ? n : null;
					});
					return function(e) {
						return t.apply(this, arguments);
					};
				})(), "WmiMetadataGetEphemeralSyncResponseBackoff");
			} catch (e) {
				s().catching(r("getErrorSafe")(e)).warn("Failed to read ephemeralSyncResponseBackoff from messenger_web_metadata");
			}
		}), c.apply(this, arguments);
	}
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield u(t);
			if (n == null) return null;
			var r = n.userJid, o = babelHelpers.objectWithoutPropertiesLoose(n, e);
			return o;
		}), m.apply(this, arguments);
	}
	l.getEphemeralSyncResponseBackoffInfo = d;
}), 98);
