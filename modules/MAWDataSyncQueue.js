__d("MAWDataSyncQueue", [
	"Promise",
	"WALogger",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"qex",
	"throttle"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = r("qex")._("853") || 1e3, d = r("qex")._("855") || 1e3, m = function() {
		return f = !1, C({ isUnloading: !0 });
	}, p = [], _ = [], f = !1, g = [], h = function() {
		var e, t = p.splice(0, p.length);
		(e = _).push.apply(e, t);
	}, y = function(r) {
		var t = _.splice(0, c);
		if (t.length !== 0) return (u || (u = n("Promise"))).all(g.map(function(n, a) {
			return n(t, r).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"Unhandled exception caught in middleware ",
					" sync: ",
					""
				])), a, t);
			});
		})).then(function() {
			return y(r);
		});
	}, C = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (!f) {
				f = !0, h();
				try {
					yield y(e);
				} catch (e) {
					var t, n = r("getErrorSafe")(e);
					throw o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[MAWIndexedDbMiddleware] error handling queue batch: ", ""])), (t = n == null ? void 0 : n.message) != null ? t : n.toString()), e;
				} finally {
					f = !1, p.length > 0 && b();
				}
			}
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), b = r("throttle")(C, d), v = function(t, n) {
		p.push({
			type: t,
			value: n
		}), b();
	}, S = function(t) {
		g.some(function(e) {
			return e === t;
		}) || g.push(t);
	}, R = function() {
		g = [];
	}, L = function() {
		p = [], _ = [];
	}, E = function() {
		return p;
	};
	l.forceFlushDataSyncQueue = m, l.addSyncItem = v, l.registerDataSyncCallback = S, l.clearDataSyncCallbacks = R, l.clearDataSyncQueue_FOR_TESTING_ONLY = L, l.getDataSyncQueue_FOR_TESTING_ONLY = E;
}), 98);
