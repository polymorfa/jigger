__d("useQuickPromotionFalcoEvent", [
	"react",
	"react-compiler-runtime",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useCallback, u = r("requireDeferred")("QpActionFalcoEvent").__setRef("useQuickPromotionFalcoEvent"), c = r("requireDeferred")("QpImpressionFalcoEvent").__setRef("useQuickPromotionFalcoEvent");
	function d(e) {
		var t = o("react-compiler-runtime").c(9), n = e.context_surface_id, r = e.context_trigger, a = r === void 0 ? "newsfeed" : r, i = m, l;
		t[0] !== n || t[1] !== a ? (l = function(t, r, o, l) {
			if (!(r == null || o == null)) {
				var e = "" + n, s = i(l);
				u.onReady(function(n) {
					var i = n.log;
					i(function() {
						return {
							action_type: t,
							context_surface_id: e,
							context_trigger: a,
							extra_client_data: s,
							instance_log_data: o,
							promotion_id: r
						};
					});
				});
			}
		}, t[0] = n, t[1] = a, t[2] = l) : l = t[2];
		var s = l, d;
		t[3] !== n || t[4] !== a ? (d = function(t, r, o) {
			if (!(t == null || r == null)) {
				var e = "" + n, l = i(o);
				c.onReady(function(n) {
					var o = n.log;
					o(function() {
						return {
							context_surface_id: e,
							context_trigger: a,
							extra_client_data: l,
							instance_log_data: r,
							promotion_id: t
						};
					});
				});
			}
		}, t[3] = n, t[4] = a, t[5] = d) : d = t[5];
		var p = d, _;
		return t[6] !== s || t[7] !== p ? (_ = {
			logAction: s,
			logImpression: p
		}, t[6] = s, t[7] = p, t[8] = _) : _ = t[8], _;
	}
	function m(e) {
		return e instanceof Map ? Object.fromEntries(e) : Object.entries(e != null ? e : {}).reduce(p, {});
	}
	function p(e, t) {
		var n = t[0], r = t[1];
		return e[n] = r, e;
	}
	l.default = d;
}), 98);
