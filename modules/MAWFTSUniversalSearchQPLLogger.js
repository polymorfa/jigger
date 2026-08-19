__d("MAWFTSUniversalSearchQPLLogger", ["QPLUserFlow", "qpl"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		currentResultCount: 0,
		hasStarted: !1,
		instanceKey: 5e3
	}, s = r("qpl")._(25301522, "2409");
	function u() {
		return e.hasStarted && c(), e.instanceKey++, e.hasStarted = !0, r("QPLUserFlow").start(s, {
			annotations: { bool: { isInThread: !1 } },
			instanceKey: e.instanceKey
		}), e.instanceKey;
	}
	function c(t) {
		!e.hasStarted || t != null && e.instanceKey !== t || (e.hasStarted = !1, r("QPLUserFlow").endCancel(s, { instanceKey: e.instanceKey }));
	}
	function d(t) {
		var n = t.annotations, o = t.instanceKey, a = t.point;
		!e.hasStarted || o != null && e.instanceKey !== o || (r("QPLUserFlow").addPoint(s, a, { instanceKey: e.instanceKey }), n != null && m({
			annotations: n,
			instanceKey: e.instanceKey
		}));
	}
	function m(t) {
		var n = t.annotations, o = t.instanceKey;
		!e.hasStarted || o != null && e.instanceKey !== o || r("QPLUserFlow").addAnnotations(s, n, { instanceKey: e.instanceKey });
	}
	function p(t) {
		e.currentResultCount = t;
	}
	function _(t) {
		!e.hasStarted || t != null && e.instanceKey !== t || (e.hasStarted = !1, r("QPLUserFlow").endSuccess(s, {
			annotations: { int: { result_count: e.currentResultCount } },
			instanceKey: e.instanceKey
		}));
	}
	var f = {
		getCurrentInstanceKey: function() {
			return e.instanceKey;
		},
		qplAddAnnotations: m,
		qplAddPoint: d,
		qplCancel: c,
		qplMarkFirstResultShowUp: function() {},
		qplStart: u,
		qplSuccess: _,
		updateCurrentResultCount: p
	}, g = f;
	l.default = g;
}), 98);
