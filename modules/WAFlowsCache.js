__d("WAFlowsCache", [
	"invariant",
	"FBLogger",
	"Promise",
	"WAFlowsDomainUtils",
	"WAFlowsInitEnvironmentTypes",
	"WebAsyncStorage",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = "welj_flow_state", c = "message_id", d = "surface_request", m = 1296e6;
	function p(t, o, a) {
		return new (e || (e = (n("Promise"))))(function(e, n) {
			r("WebAsyncStorage").getItem(S(t, o, a), function(t, r) {
				if (t) {
					n(t);
					return;
				}
				r != null ? e({
					internal: r.internal,
					external: r.external
				}) : e(null);
			});
		});
	}
	function _(e, t, n, a) {
		var i = e.getFlowId();
		i != null || s(0, 78157);
		var l = y(C(t, e));
		r("WebAsyncStorage").setItem(S(i, n, a), l, function(e) {
			e instanceof Error && o("WAFlowsDomainUtils").isOndemandFlowsUrl() && r("FBLogger")("wa_flows").catching(e).mustfix("[Cache] Failed to update the cache.");
		});
	}
	function f(e, t, n) {
		r("WebAsyncStorage").removeItem(S(e, t, n), function(e) {});
	}
	function g() {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield b(), t = yield v(e), n = Date.now(), o = Array.from(t.entries()).filter(function(e) {
				var t = e[0], r = e[1], o = r[0], a = r[1];
				return a.cache.ttl < n;
			}).map(function(e) {
				var t = e[0], n = e[1], r = n[0], o = n[1];
				return r;
			});
			return r("WebAsyncStorage").multiRemove(o, function(e) {}), o.length;
		}), h.apply(this, arguments);
	}
	function y(e) {
		return babelHelpers.extends({}, e, { internal: babelHelpers.extends({}, e.internal, {
			isOverlayVisible: !1,
			scrollConfig: void 0
		}) });
	}
	function C(e, t) {
		var n = Date.now() + m;
		return t.getScreens().reduce(function(n, r) {
			var o = {};
			return Object.keys(e.external[r].form).forEach(function(n) {
				var a;
				(a = t.getScreenMeta(r).privateFields) != null && a.has(n) ? o[n] = null : o[n] = e.external[r].form[n];
			}), n.external[r] = {
				data: e.external[r].data,
				form: o,
				external_data: e.external[r].external_data
			}, n;
		}, {
			internal: e.internal,
			external: {},
			cache: { ttl: n }
		});
	}
	function b() {
		return new (e || (e = (n("Promise"))))(function(e, t) {
			r("WebAsyncStorage").getAllKeys(function(n, r) {
				if (n) {
					t(n);
					return;
				}
				if (r) {
					var o = r.filter(function(e) {
						return e.startsWith(u);
					});
					e(o);
				}
			});
		});
	}
	function v(t) {
		return new (e || (e = (n("Promise"))))(function(e, n) {
			r("WebAsyncStorage").multiGet(t, function(t, r) {
				if (t) {
					n(t);
					return;
				}
				e(r);
			});
		});
	}
	function S(e, t, n) {
		var r = u + "_" + e + "_" + c + "_" + t;
		return n !== void 0 && String(n).toLowerCase() === String(o("WAFlowsInitEnvironmentTypes").WAFlowsShoppingSurfaceRequestType.FAB_SHOPPING) ? r + "_" + d + "_" + String(o("WAFlowsInitEnvironmentTypes").WAFlowsShoppingSurfaceRequestType.FAB_SHOPPING) : r;
	}
	l.getStateFromCache = p, l.updateStateCache = _, l.clearStateCache = f, l.clearExpiredCachedStates = g;
}), 98);
