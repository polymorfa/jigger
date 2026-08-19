__d("MAWBridgeUpdateClientRestoreStatus", [
	"I64",
	"LSEncryptedBackupsClientRestoreState",
	"LSIntEnum",
	"MAWUpdateClientRestoreStatusOperationType",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime",
	"emptyFunction",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.encrypted_backups_client_restore_status).filter(function(e) {
			return e.threadId === t;
		})).then(function(t) {
			return r("vulture")("6ohLsZU1yNlCR9ixvbeAM832GX4="), t != null ? e.encrypted_backups_client_restore_status.delete(t.threadId).then(r("emptyFunction")) : (u || (u = n("Promise"))).resolve();
		});
	}
	function d(t, a, i, l) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.encrypted_backups_client_restore_status).getKeyRange(a)).then(function(l) {
			return l != null ? t.encrypted_backups_client_restore_status.put({
				lastUpdated: (e || (e = o("I64"))).of_float(Date.now()),
				restoreStatus: (s || (s = o("LSIntEnum"))).ofNumber(r("LSEncryptedBackupsClientRestoreState").RESTORE_COMPLETE),
				serverThreadKey: i,
				threadId: a
			}) : (u || (u = n("Promise"))).resolve();
		});
	}
	function m(e) {
		return o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(e.encrypted_backups_client_restore_status)).then(function(t) {
			return t.reduce(function(t, n) {
				return t.then(function() {
					return c(e, n.threadId);
				});
			}, (u || (u = n("Promise"))).resolve());
		});
	}
	function p(e, t) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
			var i = a.threadId, l = a.action;
			return l === o("MAWUpdateClientRestoreStatusOperationType").upsertClientRestoreStatus ? yield t.encrypted_backups_client_restore_status.put({
				lastUpdated: (e || (e = o("I64"))).of_float(Date.now()),
				restoreStatus: (s || (s = o("LSIntEnum"))).ofNumber(r("LSEncryptedBackupsClientRestoreState").RESTORE_IN_PROGRESS),
				serverThreadKey: void 0,
				threadId: i
			}) : yield d(t, a.threadId, void 0, a.ebPrefetch), (u || (u = n("Promise"))).resolve();
		}), _.apply(this, arguments);
	}
	l.truncateClientRestoreStatusTable = m, l.call = p;
}), 98);
