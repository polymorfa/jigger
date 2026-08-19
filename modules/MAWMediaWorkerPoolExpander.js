__d("MAWMediaWorkerPoolExpander", [
	"ExecutionEnvironment",
	"MAWMediaWorkerPoolConfig",
	"MAWSendQplToServer",
	"MAWSupportedImageTypes",
	"MAWSupportedVideoTypes",
	"WAMediaWasmWorkerClient",
	"gkx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = 1;
	(e || (e = r("ExecutionEnvironment"))).canUseDOM && document.addEventListener("visibilitychange", function() {
		document.visibilityState === "hidden" && o("MAWMediaWorkerPoolConfig").getIdleCleanupEnabled("silent") && o("WAMediaWasmWorkerClient").terminateExpansionWorkers("visibility");
	});
	function u() {
		o("WAMediaWasmWorkerClient").prewarmMediaWasmWorker("mp4RepairMux"), o("WAMediaWasmWorkerClient").prewarmMediaWasmWorker("progressiveJpegEncode"), r("gkx")("3272") && o("WAMediaWasmWorkerClient").prewarmMediaWasmWorker("kaleidoscopeClassify");
	}
	function c(e) {
		return o("MAWSupportedImageTypes").isSupportedImageFileType(e) || o("MAWSupportedVideoTypes").isSupportedVideoFileType(e);
	}
	function d(e) {
		var t = o("MAWMediaWorkerPoolConfig").getMaxPoolSize("silent"), n = e != null ? e.filter(function(e) {
			return c(e.type);
		}).length : t, a = Math.min(n, t), i = o("WAMediaWasmWorkerClient").expandPool(a);
		if (u(), i !== 0) {
			var l = o("MAWMediaWorkerPoolConfig").getWorkerInitPolicy("silent");
			if (o("MAWMediaWorkerPoolConfig").getIdleCleanupEnabled("silent")) {
				var d = o("MAWMediaWorkerPoolConfig").getIdleCleanupTtlSeconds("silent");
				o("WAMediaWasmWorkerClient").configureIdleCleanup(d * 1e3, function(e, t, n) {
					var a = s++, i = o("MAWSendQplToServer").startQplUserFlow(r("qpl")._(1056847692, "2425"), {
						int: {
							idle_cleanup_ttl_s: d,
							remaining_pool_size: t,
							worker_idle_ms: e
						},
						string: {
							action: "idle_cleanup",
							triggered_by: n,
							worker_init_policy: l
						}
					}, a);
					i.endSuccess();
				});
			}
			var m = s++, p = o("MAWSendQplToServer").startQplUserFlow(r("qpl")._(1056847692, "2425"), {
				int: {
					max_pool_size: t,
					pool_size: a,
					target_size: n != null ? n : t,
					workers_added: i
				},
				string: {
					action: "expansion",
					worker_init_policy: l
				}
			}, m);
			p.endSuccess();
		}
	}
	l.WorkerInitPolicy = o("MAWMediaWorkerPoolConfig").WorkerInitPolicy, l.getWorkerInitPolicy = o("MAWMediaWorkerPoolConfig").getWorkerInitPolicy, l.getMaxPoolSize = o("MAWMediaWorkerPoolConfig").getMaxPoolSize, l.getIdleCleanupEnabled = o("MAWMediaWorkerPoolConfig").getIdleCleanupEnabled, l.getIdleCleanupTtlSeconds = o("MAWMediaWorkerPoolConfig").getIdleCleanupTtlSeconds, l.prewarmPool = u, l.expandAndPreparePool = d;
}), 98);
