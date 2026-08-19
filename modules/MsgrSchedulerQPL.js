__d("MsgrSchedulerQPL", ["getSafeQplErrorMessage"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 1e4, s = null;
	function u(e) {
		var t;
		s = (t = e.qpl) != null ? t : null;
	}
	function c(e) {
		var t = e.indexOf(":");
		return t === -1 ? e : e.slice(0, t);
	}
	function d(t) {
		t === void 0 && (t = {});
		var n = new Map();
		return function(r) {
			if (r.type === "queued") {
				var a, i, l, u, d, m, p, _, f, g = s;
				if (g == null) return;
				var h = r.metrics, y = (a = (i = h == null ? void 0 : h.eventSamplingRate) != null ? i : t.defaultSamplingRate) != null ? a : e, C = (l = h == null || (u = h.annotations) == null ? void 0 : u.bool) != null ? l : {}, b = (d = h == null ? void 0 : h.customFlags) != null ? d : {}, v = (m = h == null || (p = h.annotations) == null ? void 0 : p.int) != null ? m : {}, S = (_ = h == null || (f = h.annotations) == null ? void 0 : f.string) != null ? _ : {}, R = self != null && "worker_id" in self ? self.worker_id : void 0, L = g.qplFlowStarter(g.eventType, y, { annotations: {
					bool: babelHelpers.extends({}, C, b),
					int: babelHelpers.extends({}, v, { priority: r.priority }),
					string: babelHelpers.extends({}, S, {
						name: r.name,
						scheduler: c(r.taskId),
						workerID: R
					})
				} });
				L != null && (L.addPoint("schedule_start"), n.set(r.taskId, L));
				return;
			}
			var E = n.get(r.taskId);
			if (E != null) {
				if (r.type === "granted") {
					E.addPoint("schedule_end", { int: {
						priorityTier: r.priority,
						waitTimeMs: r.waitTimeMs
					} }), E.addPoint("run_start", { int: { startPriority: r.priority } });
					return;
				}
				if (r.type === "completed") {
					E.addPoint("run_end", { int: { totalTimeMs: r.totalTimeMs } }), E.endSuccess({}), n.delete(r.taskId);
					return;
				}
				if (r.type === "failed") {
					E.addPoint("run_fail"), E.endFail("runtime", { string: { jsError: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(r.error) } }), n.delete(r.taskId);
					return;
				}
				if (r.type === "stuck") {
					E.endCancel(113, { int: { totalTimeMs: r.totalTimeMs } }), n.delete(r.taskId);
					return;
				}
				if (r.type === "promoted") {
					E.addPoint("promote_to_" + r.to);
					return;
				}
			}
		};
	}
	function m() {
		s = null;
	}
	l.configMsgrScheduler = u, l.makeMsgrSchedulerQPLListener = d, l.TEST_ONLY_resetBridge = m;
}), 98);
