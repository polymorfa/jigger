__d("WAWebPersistedJobManager", [
	"WAPersistedJobManager",
	"WARandomHex",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebBackendApi",
	"WAWebJobsStorage",
	"WAWebNoop",
	"WAWebNullFunc",
	"WAWebPersistedJob",
	"WAWebPersistedJobTaskScheduler",
	"WAWebSchemaJobs",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e = null;
	async function s() {
		await o("WAWebJobsStorage").initialize();
		var t = o("WAWebSchemaJobs").getTable();
		e = new (o("WAPersistedJobManager")).PersistedJobManager({
			accessors: m(),
			unfinishedJobEntries: t.all().then(function(e) {
				return c(e), e;
			}),
			isRestartAfterCrash: !1,
			listeners: {
				onJobStarted: r("WAWebNoop"),
				onJobFinished: o("WAWebNullFunc").returnNull
			},
			deprecatedJobs: {},
			executionScheduler: r("WAWebPersistedJobTaskScheduler"),
			useExecutionScheduler: u
		}), r("WAWebPersistedJob")(e);
	}
	function u() {
		return o("WAWebABProps").getABPropConfigValue("wmi_jm_to_ts_m1");
	}
	function c(e) {
		e.forEach(function(e) {
			e.step === o("WAPersistedJobManager").FINISHED_JOB || e.stepHardStartCountAfterTimeout >= o("WAPersistedJobManager").MAX_STEP_HARD_START_COUNT_AFTER_TIMEOUT || d(e.type);
		});
	}
	function d(e) {
		o("WAWebBackendApi").frontendFireAndForget("logPersistedJobJobsStoreTriggered", { type: e });
	}
	function m() {
		return {
			deletePersistedJob: function(t) {
				var e = o("WAWebSchemaJobs").getTable();
				return e.remove(t);
			},
			updatePersistedJob: function(t) {
				var e = o("WAWebSchemaJobs").getTable();
				return e.createOrReplace(t);
			},
			readPersistedJob: function(t) {
				var e = o("WAWebSchemaJobs").getTable();
				return e.get(t);
			},
			loadAllJobs: function() {
				var e = o("WAWebSchemaJobs").getTable();
				return e.all();
			},
			maybeCreateJob: p
		};
	}
	async function p(e) {
		var t, n, r, a = o("WAWebSchemaJobs").getTable(), i = JSON.stringify([e.type, (t = e.uniqKey) != null ? t : o("WARandomHex").randomHex(32)]), l = {
			type: e.type,
			uniqKey: i,
			startTime: o("WATimeUtils").unixTime(),
			version: (n = e.version) != null ? n : 1,
			original: e.args,
			current: e.args,
			step: o("WAPersistedJobManager").UNSTARTED_JOB,
			waitUntil: (r = e == null ? void 0 : e.waitUntil) != null ? r : null,
			stepFirstStartTime: null,
			stepHardStartCountAfterTimeout: 0,
			stepUnexpectedErrorCount: 0,
			backedOffCount: 0
		};
		if (e.uniqKey == null) return a.createOrReplace(l).then(function(e) {
			return {
				id: e,
				newlyCreated: !0
			};
		});
		var s = await a.equals(["uniqKey"], [e.uniqKey]);
		if (s.length === 0) return a.createOrReplace(l).then(function(e) {
			return {
				id: e,
				newlyCreated: !0
			};
		});
		var u = [], c = null;
		for (var d of s) d.step !== o("WAPersistedJobManager").FINISHED_JOB ? c = d : u.push(a.remove(d.jobId));
		return await Promise.all(u), c != null ? {
			id: c.jobId,
			newlyCreated: !1
		} : a.createOrReplace(l).then(function(e) {
			return {
				id: e,
				newlyCreated: !0
			};
		});
	}
	function _() {
		if (e == null) throw r("err")("jobs manager has not been initialized");
		return e;
	}
	l.startWebPersistedJobManager = s, l.maybeCreateJob = p, l.getJobManager = _;
}), 98);
