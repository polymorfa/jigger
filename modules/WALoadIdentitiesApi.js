__d("WALoadIdentitiesApi", [
	"Promise",
	"WASignalDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function(t) {
		return o("WASignalDB").getDb().runInTransaction(["identity"], "readonly", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var n = yield e.stores.identity.readIndex("userJid", [t]);
				return new Map(n.filter(Boolean).map(function(e) {
					return [e.deviceJid, e.identity];
				}));
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("loadIdentities"));
	}, u = function(r) {
		return o("WASignalDB").getDb().runInTransaction(["identity"], "readonly", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var o = yield (e || (e = n("Promise"))).all(r.map(function(e) {
					return t.stores.identity.readIndex("userJid", [e]);
				})), a = new Map();
				for (var i of o) for (var l of i) if (l != null) {
					var s = a.get(l.userJid);
					s == null && (s = new Map()), s.set(l.deviceJid, l.identity), a.set(l.userJid, s);
				}
				return a;
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("bulkLoadIdentities"));
	};
	l.loadIdentities = s, l.bulkLoadIdentities = u;
}), 98);
