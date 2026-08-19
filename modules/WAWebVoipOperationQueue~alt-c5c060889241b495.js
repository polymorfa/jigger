__d("WAWebVoipOperationQueue", [
	"WALogger",
	"WAWebABProps",
	"WAWebCommonTaskScheduler",
	"WAWebReleaseToEventLoop",
	"WAWebVoipPerfOptimizations"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = 100, d = 3e4, m = (function(e) {
		function t(t, n) {
			var r;
			return r = e.call(this, "Operation timed out after " + n + "ms: " + t) || this, r.name = "OperationTimeoutError", r;
		}
		return babelHelpers.inheritsLoose(t, e), t;
	})(babelHelpers.wrapNativeSuper(Error)), p = (function() {
		function t(e, t, n) {
			t === void 0 && (t = d), this.$1 = [], this.$2 = !1, this.$3 = 0, this.$4 = e, this.$5 = t, this.$6 = n;
		}
		var n = t.prototype;
		return n.enqueue = function(t, n) {
			var e = ++this.$3;
			this.$1.push({
				operation: t,
				name: n + " (#" + e + ")"
			}), this.isProcessing() || this.$7();
		}, n.$7 = async function() {
			var t = this;
			if (!this.isProcessing()) {
				this.$2 = !0;
				for (var n = o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web"), a = self.performance.now(), i = async function() {
					var i = t.$1.shift();
					if (i == null) return 1;
					var l = i.name, d = i.operation, p = null, _ = new Promise(function(e, n) {
						p = self.setTimeout(function() {
							return n(new m(l, t.$5));
						}, t.$5);
					});
					try {
						await Promise.race([d(), _]);
					} catch (n) {
						if (n instanceof m) {
							var f = !1;
							try {
								f = await (t.$6 == null ? void 0 : t.$6(l)) === !0;
							} catch (e) {
								f = !1;
							}
							f ? o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
								"voip: [",
								":Queue] op timeout ",
								"ms (benign, abandoning): ",
								""
							])), t.$4, t.$5, l).tags("non-sad").sendLogs("voip-operation-queue-timeout-benign") : o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
								"voip: [",
								":Queue] op timeout ",
								"ms, abandoning: ",
								""
							])), t.$4, t.$5, l).sendLogs("voip-operation-queue-timeout");
						} else o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
							"voip: [",
							":Queue] Operation failed: ",
							", error: ",
							""
						])), t.$4, l, n).sendLogs("voip-operation-queue-failure");
					} finally {
						p != null && self.clearTimeout(p);
					}
					n ? await r("WAWebCommonTaskScheduler").yield() : o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.OPERATION_QUEUE_YIELD) && self.performance.now() - a > c && (await o("WAWebReleaseToEventLoop").releaseToEventLoop(), a = self.performance.now());
				}; this.getQueueLength() > 0;) await i();
				this.$2 = !1;
			}
		}, n.getQueueLength = function() {
			return this.$1.length;
		}, n.isProcessing = function() {
			return this.$2;
		}, t;
	})();
	l.WAWebVoipOperationQueue = p;
}), 98);
