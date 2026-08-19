__d("MAWBridgeUpdateClientRestoreStatus", [
	"I64",
	"LSEncryptedBackupsClientRestoreState",
	"LSIntEnum",
	"MAWUpdateClientRestoreStatusOperationType",
	"ReQL",
	"emptyFunction",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.encrypted_backups_client_restore_status).filter(function(e) {
			return e.threadId === t;
		})).then(function(t) {
			return r("vulture")("6ohLsZU1yNlCR9ixvbeAM832GX4="), t != null ? e.encrypted_backups_client_restore_status.delete(t.threadId).then(r("emptyFunction")) : Promise.resolve();
		});
	}
	function c(t, n, a, i) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.encrypted_backups_client_restore_status).getKeyRange(n)).then(function(i) {
			return i != null ? t.encrypted_backups_client_restore_status.put({
				lastUpdated: (e || (e = o("I64"))).of_float(Date.now()),
				restoreStatus: (s || (s = o("LSIntEnum"))).ofNumber(r("LSEncryptedBackupsClientRestoreState").RESTORE_COMPLETE),
				serverThreadKey: a,
				threadId: n
			}) : Promise.resolve();
		});
	}
	function d(e) {
		return o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(e.encrypted_backups_client_restore_status)).then(function(t) {
			return t.reduce(function(t, n) {
				return t.then(function() {
					return u(e, n.threadId);
				});
			}, Promise.resolve());
		});
	}
	async function m(t, n) {
		var a = n.threadId, i = n.action;
		return i === o("MAWUpdateClientRestoreStatusOperationType").upsertClientRestoreStatus ? await t.encrypted_backups_client_restore_status.put({
			lastUpdated: (e || (e = o("I64"))).of_float(Date.now()),
			restoreStatus: (s || (s = o("LSIntEnum"))).ofNumber(r("LSEncryptedBackupsClientRestoreState").RESTORE_IN_PROGRESS),
			serverThreadKey: void 0,
			threadId: a
		}) : await c(t, n.threadId, void 0, n.ebPrefetch), Promise.resolve();
	}
	l.truncateClientRestoreStatusTable = d, l.call = m;
}), 98);
