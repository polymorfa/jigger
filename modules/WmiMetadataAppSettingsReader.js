__d("WmiMetadataAppSettingsReader", [
	"Promise",
	"WmiMetadataDb",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		return o("WmiMetadataDb").getMetadataDb().runInTransaction(["appSettings"], "readonly", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield e.stores.appSettings.get("msgTypeVersion");
				return (t == null ? void 0 : t.key) === "msgTypeVersion" ? t.value : null;
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), "WmiMetadataGetMsgTypeVersion");
	}
	function u() {
		return o("WmiMetadataDb").getMetadataDb().runInTransaction(["appSettings"], "readonly", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield e.stores.appSettings.get("hmacKey");
				return (t == null ? void 0 : t.key) === "hmacKey" ? t.value : null;
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), "WmiMetadataGetHMACKey");
	}
	function c() {
		return o("WmiMetadataDb").getMetadataDb().runInTransaction(["appSettings"], "readonly", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield e.stores.appSettings.get("allowSecurityAlertForSelf");
				return (t == null ? void 0 : t.key) === "allowSecurityAlertForSelf" ? t.value : !0;
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), "WmiMetadataGetSecuritySettingForSelf");
	}
	function d() {
		return o("WmiMetadataDb").getMetadataDb().runInTransaction(["appSettings"], "readonly", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield e.stores.appSettings.get("allowSecurityAlert");
				return (t == null ? void 0 : t.key) === "allowSecurityAlert" ? t.value : !1;
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), "WmiMetadataGetSecuritySettingForContact");
	}
	function m() {
		return o("WmiMetadataDb").getMetadataDb().runInTransaction(["appSettings"], "readonly", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var r = yield (e || (e = n("Promise"))).all([t.stores.appSettings.get("allowSecurityAlertForSelf"), t.stores.appSettings.get("allowSecurityAlert")]), o = r[0], a = r[1];
				return {
					allowSecurityAlertForContact: (a == null ? void 0 : a.key) === "allowSecurityAlert" ? a.value : !1,
					allowSecurityAlertForSelf: (o == null ? void 0 : o.key) === "allowSecurityAlertForSelf" ? o.value : !0
				};
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), "WmiMetadataBulkGetSecuritySettings");
	}
	l.getMsgTypeVersionFromMetadataDb = s, l.getHMACKeyFromMetadataDb = u, l.getSecuritySettingForSelfFromMetadataDb = c, l.getSecuritySettingForContactFromMetadataDb = d, l.bulkGetSecuritySettingsFromMetadataDb = m;
}), 98);
