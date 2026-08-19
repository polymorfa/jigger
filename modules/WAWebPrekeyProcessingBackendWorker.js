__d("WAWebPrekeyProcessingBackendWorker", [
	"NativeSchedulerTickStrategy",
	"TaskScheduler",
	"WACryptoLibrary",
	"WAWebReleaseToEventLoop",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 1e3, s = o("TaskScheduler").taskScheduler("signal", { concurrency: 1 }, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var r = t.regInfo, a = t.sessions, i = t.useScheduler, l = [], u = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t = yield o("WACryptoLibrary").createOutgoingSession(r, e);
					t.success ? l.push({
						success: !0,
						session: t.value
					}) : l.push({
						success: !1,
						error: t.error
					});
				});
				return function(n) {
					return e.apply(this, arguments);
				};
			})();
			if (i === !0) for (var c of a) yield u(c), yield s.yield();
			else {
				var d = self.performance.now();
				for (var m of a) yield u(m), self.performance.now() - d > e && (yield o("WAWebReleaseToEventLoop").releaseToEventLoop(), d = self.performance.now());
			}
			return l;
		}), c.apply(this, arguments);
	}
	l.createOutgoingSessionBatch = u;
}), 98);
