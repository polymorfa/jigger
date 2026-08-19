__d("WASignalIdentityStore", [
	"Promise",
	"WAJids",
	"WALogger",
	"WASignalEntityStoreV2",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (function() {
		function t() {
			this.$1 = new Map(), this.$2 = new (o("WASignalEntityStoreV2")).SignalEntityStore();
		}
		var r = t.prototype;
		return r.bulkLoadIdentities = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = this, r = function* () {
					var e = o[0], r = o[1];
					yield t.loadIdentitiesByUser(e, function() {
						return (s || (s = n("Promise"))).resolve(r);
					});
				};
				for (var o of e) yield* r();
				return e;
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.loadIdentitiesByUser = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
				var a = this.$1.get(t);
				if (a == null) {
					var i = this.$3(t, yield r(t)), l = Array.from(i.keys());
					return this.$1.set(t, new Set(l)), this.$2.bulkLoad(l, function() {
						return (s || (s = n("Promise"))).resolve(i);
					});
				} else return this.$2.bulkLoad(Array.from(a), function(t) {
					return t.length > 0 && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WASignalIdentityStore] This should never happen."]))), (s || (s = n("Promise"))).resolve(new Map());
				});
			});
			function r(e, n) {
				return t.apply(this, arguments);
			}
			return r;
		})(), r.$3 = function(t, n) {
			var e = new Map(n), r = this.$2.pureSnapshot(), a = r.remove, i = r.update;
			for (var l of a) {
				var s = l.id;
				e.delete(s);
			}
			for (var u of i) {
				var c = u.cachedEntity, d = u.id;
				c != null && o("WAJids").extractUserJid(d) === t && e.set(d, c);
			}
			return e;
		}, r.store = function(t, n) {
			this.$2.store(t, n);
			var e = o("WAJids").extractUserJid(t), r = this.$1.get(e);
			r != null && r.add(t);
		}, r.remove = function(t) {
			this.$2.remove(t);
			var e = o("WAJids").extractUserJid(t), n = this.$1.get(e);
			n != null && n.delete(t);
		}, r.clear = function() {
			this.$2.clear(), this.$1 = new Map();
		}, r.load = function(t, n) {
			return this.$2.load(t, n);
		}, r.bulkLoad = function(t, n) {
			return this.$2.bulkLoad(t, n);
		}, r.snapshot = function() {
			return this.$2.snapshot();
		}, r.pureSnapshot = function() {
			return this.pureSnapshot();
		}, r.markSnapshotAsCommitted = function() {
			this.$2.markSnapshotAsCommitted();
		}, r.markSnapshotAsFailed = function() {
			this.$2.markSnapshotAsFailed();
		}, t;
	})();
	l.SignalIdentityStore = u;
}), 98);
