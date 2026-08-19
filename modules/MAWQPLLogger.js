__d("MAWQPLLogger", [
	"QPLUserFlow",
	"Random",
	"cr:10049"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	n("cr:10049") == null || n("cr:10049").overwriteSamplingRate();
	function e(e) {
		return {
			addQPLAnnotations: function(n, o) {
				r("QPLUserFlow").addAnnotations(e, o, { instanceKey: n });
			},
			markQPLCancel: function(n) {
				r("QPLUserFlow").endCancel(e, { instanceKey: n });
			},
			markQPLFailure: function(n, o) {
				var t;
				r("QPLUserFlow").endFailure(e, (t = o == null ? void 0 : o.name) != null ? t : "fail", {
					error: o,
					instanceKey: n
				});
			},
			markQPLFailureWithMsg: function(n, o) {
				r("QPLUserFlow").endFailure(e, o, { instanceKey: n });
			},
			markQPLPoint: function(n, o, a) {
				r("QPLUserFlow").addPoint(e, o, {
					debugInfo: a,
					instanceKey: n
				});
			},
			markQPLStart: function() {
				var t = Date.now() + (Math.round(o("Random").random() * 1e4) + 1e4);
				return r("QPLUserFlow").start(e, { instanceKey: t }), t;
			},
			markQPLSuccess: function(n) {
				r("QPLUserFlow").endSuccess(e, { instanceKey: n });
			}
		};
	}
	l.default = e;
}), 98);
