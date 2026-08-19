__d("WMIRateLimiter", [
	"WATimeUtils",
	"WMIRateLimitDb",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.key, r = e.limit, a = e.windowMs, i = o("WATimeUtils").unixTimeMs(), l = i - a, s = yield o("WMIRateLimitDb").getRateLimitDb(), u = yield s.runInTransaction(["rateLimitAttempts"], "readwrite", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = yield e.stores.rateLimitAttempts.readIndexRange("by_key_and_timestamp", { greaterThanOrEqual: [t, o("WATimeUtils").castMilliSecondsToUnixTime(l)] }), r = yield e.stores.rateLimitAttempts.readIndexRange("by_key_and_timestamp", {
						greaterThanOrEqual: [t, o("WATimeUtils").castMilliSecondsToUnixTime(0)],
						lessThan: [t, o("WATimeUtils").castMilliSecondsToUnixTime(l)]
					});
					if (r.length > 0) {
						var a = r.map(function(e) {
							return e.id;
						});
						yield e.stores.rateLimitAttempts.bulkDelete(a);
					}
					return n.length;
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(), "checkRateLimit"), c = u >= r;
			return {
				currentCount: u,
				limitBreached: c
			};
		}), s.apply(this, arguments);
	}
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("WMIRateLimitDb").getRateLimitDb(), r = o("WATimeUtils").castMilliSecondsToUnixTime(o("WATimeUtils").unixTimeMs()), a = yield t.runInTransaction(["rateLimitAttempts"], "readwrite", (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					var n = {
						key: e,
						timestamp: r
					}, o = yield t.stores.rateLimitAttempts.bulkAdd([n]), a = o[0];
					return {
						id: a,
						key: e,
						timestamp: r
					};
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})(), "recordAttempt");
			return a;
		}), c.apply(this, arguments);
	}
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield e(t);
			return n.limitBreached || (yield u(t.key)), n;
		}), m.apply(this, arguments);
	}
	l.queryRateLimitStore = e, l.recordAttempt = u, l.checkAndRecordAttempt = d;
}), 98);
