__d("MAWUpdateSyncResponseBackoffInfoApi", [
	"MAWDexieTable",
	"MAWEphemeralSettingsCache",
	"MAWIndexedDb",
	"MAWMsgType",
	"MAWTransactionMode",
	"WAJids",
	"WmiMetadataDb",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		return o("MAWEphemeralSettingsCache").ephemeralSettingMigrationEnabled() ? s(e, t, n) : u(e, t, n);
	}
	async function s(e, t, n) {
		var r = await o("WmiMetadataDb").getMetadataDbPromise();
		await r.runInTransaction(["ephemeralSyncResponseBackoff"], "readwrite", function(r) {
			return t === o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE ? o("WAJids").switchOnMsgrChatJidType(e, {
				group: function() {
					return Promise.resolve();
				},
				user: async function(t) {
					var e, o = await r.stores.ephemeralSyncResponseBackoff.get(t);
					if (o == null) return Promise.resolve();
					await r.stores.ephemeralSyncResponseBackoff.bulkPut([{
						syncResponseRetries: ((e = o.syncResponseRetries) != null ? e : 0) + 1,
						syncResponseSentTs: n,
						userJid: t
					}]);
				}
			}) : t === o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE ? o("WAJids").switchOnMsgrChatJidType(e, {
				group: function() {
					return Promise.resolve();
				},
				user: async function(t) {
					var e = await r.stores.ephemeralSyncResponseBackoff.get(t);
					if (e == null) return Promise.resolve();
					await r.stores.ephemeralSyncResponseBackoff.bulkDelete([t]);
				}
			}) : Promise.resolve();
		}, "maybeUpdateSyncResponseBackoffInfo");
	}
	function u(e, t, n) {
		return o("MAWIndexedDb").makeMsgrTransactor({ ephemeralSettings: o("MAWTransactionMode").READWRITE }, "updateSyncResponseBackoffInfo", function(a) {
			return function() {
				return t === o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE ? o("WAJids").switchOnMsgrChatJidType(e, {
					group: function() {
						return o("MAWDexieTable").dexieResolve();
					},
					user: function(t) {
						return a.ephemeralSettings.get({ userJid: t }).then(function(e) {
							var t, r;
							if (e == null) return o("MAWDexieTable").dexieResolve();
							var i = babelHelpers.extends({}, e, { ephemeralSyncResponseBackoffInfo: {
								syncResponseRetries: ((t = (r = e.ephemeralSyncResponseBackoffInfo) == null ? void 0 : r.syncResponseRetries) != null ? t : 0) + 1,
								syncResponseSentTs: n
							} });
							return a.ephemeralSettings.put(i);
						}).then(r("emptyFunction"));
					}
				}) : t === o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE ? o("WAJids").switchOnMsgrChatJidType(e, {
					group: function() {
						return o("MAWDexieTable").dexieResolve();
					},
					user: function(t) {
						return a.ephemeralSettings.get({ userJid: t }).then(function(e) {
							if (e == null || e.ephemeralSyncResponseBackoffInfo == null) return o("MAWDexieTable").dexieResolve();
							var t = babelHelpers.extends({}, e, { ephemeralSyncResponseBackoffInfo: void 0 });
							return a.ephemeralSettings.put(t).then(r("emptyFunction"));
						});
					}
				}) : o("MAWDexieTable").dexieResolve();
			};
		})();
	}
	l.updateSyncResponseBackoffInfo = e;
}), 98);
