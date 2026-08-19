__d("MAWUIJob", [
	"ExecutionEnvironment",
	"MAWBridge",
	"WAJobOrchestratorTypes",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }, m = {
		fireAndForget: function(n) {
			var t;
			(c || (c = r("ExecutionEnvironment"))).isInWorker && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["UIJobStarters fireAndForget called in the worker, which is a bug for job: ", ""])), n.type), o("MAWBridge").getBridge().fireAndForget("backend", "runJobFireAndForget", babelHelpers.extends({}, n, { scheduleConfig: (t = n.scheduleConfig) != null ? t : d }));
		},
		waitUntilCompleted: function(t, n, a) {
			var e;
			(c || (c = r("ExecutionEnvironment"))).isInWorker && o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["UIJobStarters waitUntilCompleted called in the worker, which is a bug for job: ", ""])), t.type);
			var i = o("MAWBridge").getBridge().sendAndReceive("backend", "runJobWaitUntilCompleted", babelHelpers.extends({}, t, { scheduleConfig: (e = t.scheduleConfig) != null ? e : d }), void 0, n, a);
			return i;
		},
		waitUntilPersisted: function(t, n, a) {
			var e;
			(c || (c = r("ExecutionEnvironment"))).isInWorker && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["UIJobStarters waitUntilPersisted called in the worker, which is a bug for job: ", ""])), t.type);
			var i = o("MAWBridge").getBridge().sendAndReceive("backend", "runJobWaitUntilPersisted", babelHelpers.extends({}, t, { scheduleConfig: (e = t.scheduleConfig) != null ? e : d }), void 0, n, a);
			return i;
		}
	};
	l.UIJobStarters = m;
}), 98);
