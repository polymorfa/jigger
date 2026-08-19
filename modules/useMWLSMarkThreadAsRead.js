__d("useMWLSMarkThreadAsRead", [
	"FBLogger",
	"I64",
	"LSFactory",
	"LSMessagingThreadTypeUtil",
	"LSOptimisticMarkThreadReadV2StoredProcedure",
	"MWThreadKey.react",
	"MessengerWebUXLogger",
	"ReQL",
	"asyncToGeneratorRuntime",
	"cr:2580",
	"cr:4391",
	"cr:4825",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = (u || (u = o("react"))).useCallback;
	function d(t, a) {
		var l, u = o("react-compiler-runtime").c(5), c = (e || (e = r("useReStore")))(), d = (l = o("MWThreadKey.react").useMWThreadKeyMemoized()) != null ? l : a;
		if (d == null) throw r("FBLogger")("messenger_web").mustfixThrow("Tried to get a thread key when there was none");
		var m = r("MessengerWebUXLogger").useInteractionLogger(), p;
		return u[0] !== c || u[1] !== t || u[2] !== m || u[3] !== d ? (p = function() {
			m == null || m({ eventName: "mark_thread_as_read" }), r("promiseDone")(c.runInTransaction((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var a = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange(d));
					if (a != null) {
						var i = a.lastActivityTimestampMs, l = a.lastReadWatermarkTimestampMs, u = a.threadType;
						if ((s || (s = o("I64"))).gt(i, l)) {
							n("cr:2580") && t != null && n("cr:2580")({
								threadKey: d,
								threadType: u
							}, "seen_receipt", t);
							var c = i, m = o("LSMessagingThreadTypeUtil").isArmadilloSecure(u) ? n("cr:4391") : n("cr:4825");
							if (m != null) {
								m.wmiMessengerMarkThreadRead({
									last_read_watermark_ts: (s || (s = o("I64"))).to_string(c),
									thread_id: s.to_string(d)
								});
								return;
							}
							return r("LSOptimisticMarkThreadReadV2StoredProcedure")(r("LSFactory")(e), {
								readWatermarkTimestampMs: c,
								threadKey: d
							});
						}
					}
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(), "readwrite", void 0, void 0, i.id + ":60"));
		}, u[0] = c, u[1] = t, u[2] = m, u[3] = d, u[4] = p) : p = u[4], p;
	}
	l.default = d;
}), 98);
