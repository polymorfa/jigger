__d("WASignalEntityStoreV2", ["$InternalEnum", "asyncToGeneratorRuntime"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = n("$InternalEnum").Mirrored([
		"NOT_PERSISTED",
		"PERSIST_IN_PROGRESS",
		"PERSISTED"
	]), l = (function() {
		function t() {
			this.$1 = new Map();
		}
		var r = t.prototype;
		return r.TEST_ONLY_LOAD_FROM_MEMORY = function(t) {
			return this.$2(t);
		}, r.$2 = function(t) {
			var e = this.$1.get(t);
			return e != null ? {
				entity: e.entity,
				deleted: e.deleted
			} : null;
		}, r.load = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = this.$2(e);
				if (n != null && n.deleted) return null;
				if (n != null && n.entity != null) return n.entity;
				var r = yield t(e);
				return this.$3(e, r), r;
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.bulkLoad = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = [], r = new Map();
				for (var o of e) {
					var a = this.$2(o);
					if (a == null) {
						n.push(o);
						continue;
					}
					a.deleted || (a.entity != null ? r.set(o, a.entity) : n.push(o));
				}
				var i = yield t(n);
				for (var l of i.entries()) {
					var s = l[0], u = l[1];
					r.set(s, u), this.$3(s, u);
				}
				return r;
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.$3 = function(n, r) {
			this.$1.set(n, {
				entity: r,
				status: e.PERSISTED,
				deleted: !1
			});
		}, r.store = function(n, r) {
			this.$1.set(n, {
				entity: r,
				status: e.NOT_PERSISTED,
				deleted: !1
			});
		}, r.remove = function(n) {
			this.$1.set(n, {
				entity: null,
				status: e.NOT_PERSISTED,
				deleted: !0
			});
		}, r.pureSnapshot = function() {
			var t = [], n = Array.from(this.$1.entries()).filter(function(t) {
				var n = t[0], r = t[1];
				return r.status === e.NOT_PERSISTED;
			}).filter(function(e) {
				var n = e[0], r = e[1];
				return r.deleted && t.push({ id: n }), !r.deleted;
			}).filter(function(e) {
				var t = e[0], n = e[1];
				return n.entity != null;
			}).map(function(e) {
				var t = e[0], n = e[1];
				return {
					id: t,
					cachedEntity: n.entity
				};
			});
			return {
				update: n,
				remove: t
			};
		}, r.snapshot = function() {
			var t = this, n = this.pureSnapshot();
			return n.remove.forEach(function(n) {
				var r = n.id, o = t.$1.get(r);
				o && (o.status = e.PERSIST_IN_PROGRESS);
			}), n.update.forEach(function(n) {
				var r = n.id, o = t.$1.get(r);
				o && (o.status = e.PERSIST_IN_PROGRESS);
			}), n;
		}, r.markSnapshotAsCommitted = function() {
			this.$1.forEach(function(t) {
				t.status === e.PERSIST_IN_PROGRESS && (t.status = e.PERSISTED);
			});
		}, r.markSnapshotAsFailed = function() {
			this.$1.forEach(function(t) {
				t.status === e.PERSIST_IN_PROGRESS && (t.status = e.NOT_PERSISTED);
			});
		}, r.clear = function() {
			this.$1 = new Map();
		}, t;
	})();
	i.SignalEntityStore = l;
}), 66);
