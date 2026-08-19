__d("PersistedQueueApi", [
	"PersistedQueueDB",
	"WALogger",
	"WAThrottle",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = 36e5, u = function(t, n) {
		return "PersistedQueue:" + t + ":" + n;
	};
	function c() {
		return {
			ack: p,
			clear: _,
			count: b,
			delete: f,
			get: d,
			index: m,
			keys: h,
			read: g,
			write: y
		};
	}
	function d(e, t) {
		return o("PersistedQueueDB").getPersistedQueues().runInTransaction([e], "readonly", function(n) {
			var r = n.stores[e];
			return r.get(t);
		}, u(e, "get"));
	}
	function m(e, t) {
		return {
			equals: function(r) {
				return { read: function(a) {
					return o("PersistedQueueDB").getPersistedQueues().runInTransaction([e], "readonly", function(n) {
						return n.stores[e].readIndexRange(t, { only: r }, a);
					}, u(e, "index-equal"));
				} };
			},
			keys: function() {
				return o("PersistedQueueDB").getPersistedQueues().runInTransaction([e], "readonly", function(n) {
					return n.stores[e].readIndexKeys(t);
				}, "index-keys");
			},
			read: (function() {
				var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
					var r = yield o("PersistedQueueDB").getPersistedQueues().runInTransaction([e], "readonly", function(r) {
						return r.stores[e].readIndex(t, void 0, n);
					}, u(e, "index-read"));
					return r;
				});
				function a(e) {
					return r.apply(this, arguments);
				}
				return a;
			})()
		};
	}
	function p(e, t) {
		return f(e, t);
	}
	function _(e) {
		return o("PersistedQueueDB").getPersistedQueues().runInTransaction([e], "readwrite", function(t) {
			return t.stores[e].clear();
		}, u(e, "clear"));
	}
	function f(e, t) {
		return o("PersistedQueueDB").getPersistedQueues().runInTransaction([e], "readwrite", (function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
				var r = n.stores[e];
				yield r.bulkDelete(t), v(e);
			});
			return function(e) {
				return r.apply(this, arguments);
			};
		})(), u(e, "delete"));
	}
	function g(e, t) {
		return o("PersistedQueueDB").getPersistedQueues().runInTransaction([e], "readonly", function(n) {
			return n.stores[e].readAll(t);
		}, u(e, "read"));
	}
	function h(e) {
		return o("PersistedQueueDB").getPersistedQueues().runInTransaction([e], "readonly", function(t) {
			return t.stores[e].readKeys();
		}, u(e, "keys"));
	}
	function y(e, t) {
		return o("PersistedQueueDB").getPersistedQueues().runInTransaction([e], "readwrite", function(n) {
			return n.stores[e].bulkAdd(t);
		}, u(e, "write"));
	}
	function C(e) {
		return o("PersistedQueueDB").getPersistedQueues().runInTransaction([e], "readwrite", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = t.stores[e], r = yield n.readAll({ limit: 1 });
				r.length === 0 && (yield n.clear());
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), u(e, "ClearIfEmpty"));
	}
	function b(e) {
		return o("PersistedQueueDB").getPersistedQueues().runInTransaction([e], "readonly", function(t) {
			return t.stores[e].count();
		}, u(e, "count"));
	}
	var v = o("WAThrottle").throttle(function(t) {
		C(t).catch(function(n) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[PersistedQueueV2] Error during PQ clear operation of ",
				": ",
				""
			])), t, n);
		});
	}, s);
	l.persistedQueueApi = c;
}), 98);
