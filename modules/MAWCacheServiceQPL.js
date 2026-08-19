__d("MAWCacheServiceQPL", [
	"ExecutionEnvironment",
	"MAWCurrentUser",
	"MAWQplProxy",
	"QPLUserFlow",
	"performanceAbsoluteNow",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = new Set(), c = new Set(), d = 3e3, m = r("qpl")._(1056836703, "2955");
	function p(t, n) {
		var a = (e || (e = r("ExecutionEnvironment"))).isInWorker || (e || (e = r("ExecutionEnvironment"))).isInSharedWorker;
		if (a) {
			if (c.has(t)) return;
			f(t), o("MAWQplProxy").startQplUserFlow(m, {}, {
				callBridgeWithTimestamp: !0,
				providedInstanceKey: t
			});
		} else {
			if (u.has(t)) return;
			_(t), r("QPLUserFlow").start(m, {
				annotations: { string: { service: n } },
				instanceKey: t
			});
		}
	}
	function _(e) {
		u.add(e);
	}
	function f(e) {
		c.add(e);
	}
	function g(t, n, a) {
		var i = b(a), l = (e || (e = r("ExecutionEnvironment"))).isInWorker || (e || (e = r("ExecutionEnvironment"))).isInSharedWorker;
		if (l) {
			if (!c.has(t)) return;
			o("MAWQplProxy").sendQplPointThroughBridge(m, "worker@" + i + n, { instanceKey: t }, !0);
		} else {
			if (!u.has(t)) return;
			var p = (s || (s = r("performanceAbsoluteNow")))();
			a === "realtime-update" ? window.setTimeout(function() {
				r("QPLUserFlow").addPoint(m, "ui@" + n, {
					instanceKey: t,
					timestamp: p
				});
			}, d) : r("QPLUserFlow").addPoint(m, "ui@" + n, { instanceKey: t });
		}
	}
	function h(t, n) {
		var a = (e || (e = r("ExecutionEnvironment"))).isInWorker || (e || (e = r("ExecutionEnvironment"))).isInSharedWorker;
		if (a) {
			if (!c.has(t)) return;
			o("MAWQplProxy").sendQPLAnnotationsThroughBridge(m, n, t);
		} else {
			if (!u.has(t)) return;
			r("QPLUserFlow").addAnnotations(m, n, { instanceKey: t });
		}
	}
	function y(t) {
		var n = (e || (e = r("ExecutionEnvironment"))).isInWorker || (e || (e = r("ExecutionEnvironment"))).isInSharedWorker;
		if (n) {
			if (!c.has(t)) return;
			c.delete(t), o("MAWQplProxy").sendQPLSuccessThroughBridge(m, {}, t, !0);
		} else {
			if (!u.has(t)) return;
			var a = (s || (s = r("performanceAbsoluteNow")))();
			window.setTimeout(function() {
				u.delete(t), r("QPLUserFlow").endSuccess(m, {
					instanceKey: t,
					timestamp: a
				});
			}, d);
		}
	}
	function C(t, n, a) {
		var i = b(a), l = (e || (e = r("ExecutionEnvironment"))).isInWorker || (e || (e = r("ExecutionEnvironment"))).isInSharedWorker;
		if (l) {
			if (!c.has(t)) return;
			o("MAWQplProxy").sendQPLFailThroughBridge(m, "worker@" + i + n, {}, t, !0);
		} else {
			if (!u.has(t)) return;
			var p = (s || (s = r("performanceAbsoluteNow")))();
			window.setTimeout(function() {
				u.delete(t), r("QPLUserFlow").endFailure(m, "ui@" + n, {
					instanceKey: t,
					timestamp: p
				});
			}, d), u.delete(t);
		}
	}
	function b(e) {
		return e ? e.replace(/-/g, "_") + "_" : "";
	}
	function v(e) {
		return o("MAWCurrentUser").isEmployee() || o("MAWCurrentUser").isTestUser() ? e : void 0;
	}
	var S = {
		addAnnotationsQPL: h,
		addPointQPL: g,
		endFailureQPL: C,
		endSuccessQPL: y,
		redactKeysForNonEmployee: v,
		registerInstanceKeyInUI: _,
		registerInstanceKeyInWorker: f,
		startQPL: p
	};
	l.default = S;
}), 98);
