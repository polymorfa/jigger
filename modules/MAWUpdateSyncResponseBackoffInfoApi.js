__d("MAWUpdateSyncResponseBackoffInfoApi", [
	"MAWDexieTable",
	"MAWEphemeralSettingsCache",
	"MAWIndexedDb",
	"MAWMsgType",
	"MAWTransactionMode",
	"Promise",
	"WAJids",
	"WmiMetadataDb",
	"asyncToGeneratorRuntime",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n) {
		return o("MAWEphemeralSettingsCache").ephemeralSettingMigrationEnabled() ? u(e, t, n) : d(e, t, n);
	}
	function u(e, t, n) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
			var i = yield o("WmiMetadataDb").getMetadataDbPromise();
			yield i.runInTransaction(["ephemeralSyncResponseBackoff"], "readwrite", function(i) {
				return r === o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE ? o("WAJids").switchOnMsgrChatJidType(t, {
					group: function() {
						return (e || (e = n("Promise"))).resolve();
					},
					user: (function() {
						var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
							var r, o = yield i.stores.ephemeralSyncResponseBackoff.get(t);
							if (o == null) return (e || (e = n("Promise"))).resolve();
							yield i.stores.ephemeralSyncResponseBackoff.bulkPut([{
								syncResponseRetries: ((r = o.syncResponseRetries) != null ? r : 0) + 1,
								syncResponseSentTs: a,
								userJid: t
							}]);
						});
						function r(e) {
							return t.apply(this, arguments);
						}
						return r;
					})()
				}) : r === o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE ? o("WAJids").switchOnMsgrChatJidType(t, {
					group: function() {
						return (e || (e = n("Promise"))).resolve();
					},
					user: (function() {
						var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
							var r = yield i.stores.ephemeralSyncResponseBackoff.get(t);
							if (r == null) return (e || (e = n("Promise"))).resolve();
							yield i.stores.ephemeralSyncResponseBackoff.bulkDelete([t]);
						});
						function r(e) {
							return t.apply(this, arguments);
						}
						return r;
					})()
				}) : (e || (e = n("Promise"))).resolve();
			}, "maybeUpdateSyncResponseBackoffInfo");
		}), c.apply(this, arguments);
	}
	function d(e, t, n) {
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
	l.updateSyncResponseBackoffInfo = s;
}), 98);
