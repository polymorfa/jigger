__d("MAWCreateGroupApi", [
	"MAWDexieTable",
	"MAWGroupManagementTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function(t, n) {
		var e = n.extras, r = n.folder, a = n.groupStatus, i = n.groupToCreate, l = n.key, s = n.serverTs;
		return o("MAWGroupManagementTxns").createGroupInternal(t, {
			deduplicationKey: l != null ? l : void 0,
			extras: e,
			folder: r,
			groupStatus: a,
			groupToCreate: i,
			serverTs: s
		});
	}, u = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READONLY,
		editMsgHistory: e.READONLY,
		ftsBackloggedMessages: e.READWRITE,
		groupInfo: e.READWRITE,
		media: e.READONLY,
		messages: e.READWRITE,
		participants: e.READWRITE,
		reactions: e.READONLY,
		receiverFetchInfo: e.READONLY,
		threads: e.READWRITE,
		xma: e.READONLY
	}, "createGroups", function(e) {
		return (function(t) {
			return o("MAWDexieTable").dexieAll(t.map(function(t) {
				var n = t.extras, r = t.folder, o = t.groupStatus, a = t.groupToCreate, i = t.key, l = t.serverTs;
				return s(e, {
					extras: n,
					folder: r,
					groupStatus: o,
					groupToCreate: a,
					key: i,
					serverTs: l
				});
			})).then(r("emptyFunction"));
		});
	});
	l.createGroups = u;
}), 98);
