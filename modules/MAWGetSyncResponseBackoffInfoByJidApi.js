__d("MAWGetSyncResponseBackoffInfoByJidApi", [
	"MAWEphemeralSettingsCache",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WmiMetadataEphemeralSyncResponseBackoffReader"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ ephemeralSettings: o("MAWTransactionMode").READONLY }, "getSyncResponseBackoffInfoByJid", function(e) {
		return function(t) {
			return e.ephemeralSettings.get({ userJid: t }).then(function(e) {
				return e == null ? null : e.ephemeralSyncResponseBackoffInfo;
			});
		};
	}), s = function(n) {
		return o("MAWEphemeralSettingsCache").ephemeralSettingMigrationEnabled() ? o("WmiMetadataEphemeralSyncResponseBackoffReader").getEphemeralSyncResponseBackoffInfo(n) : e(n);
	};
	l.getSyncResponseBackoffInfoByJid = s;
}), 98);
