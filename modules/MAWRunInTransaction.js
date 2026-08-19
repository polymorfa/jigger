__d("MAWRunInTransaction", [
	"MAWDexie",
	"MAWGroupInfoStore",
	"MAWIndexedDb",
	"MAWMessageStore",
	"MAWParticipantsStore",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		GroupInfoStore: o("MAWGroupInfoStore").MAWGroupInfoStore.tableLocks,
		MessagesStore: o("MAWMessageStore").MAWMessageStore_DEPRECATED_DO_NOT_USE.tableLocks,
		ParticipantsStore: o("MAWParticipantsStore").MAWParticipantsStore.tableLocks
	}, s = function(n, a, i) {
		var t = [];
		for (var l in n) n[l] === !0 && t.push(l);
		var s = t.flatMap(function(t) {
			return Object.entries(e[t]);
		}).reduce(function(e, t) {
			var n, r = t[0], a = t[1];
			if (e[r] === o("MAWTransactionMode").READWRITE) return e;
			var i = r;
			return babelHelpers.extends({}, e, (n = {}, n["" + i] = a, n));
		}, {}), u = o("MAWIndexedDb").makeMsgrTransactor(s, i != null ? i : "runInTransaction", function(e) {
			return function() {
				var t = {
					CollectionVersionStore: null,
					GroupInfoStore: n.GroupInfoStore === !0 ? new (o("MAWGroupInfoStore")).MAWGroupInfoStore(e) : null,
					MessagesStore: n.MessagesStore === !0 ? new (o("MAWMessageStore")).MAWMessageStore_DEPRECATED_DO_NOT_USE(e) : null,
					MissingKeyStore: null,
					ParticipantsStore: n.ParticipantsStore === !0 ? new (o("MAWParticipantsStore")).MAWParticipantsStore(e) : null,
					PendingMutationStore: null,
					SyncActionStore: null,
					SyncKeyStore: null
				};
				return new (r("MAWDexie")).Promise(function(e) {
					e(a(t));
				});
			};
		});
		return u();
	};
	l.runInTransaction = s;
}), 98);
