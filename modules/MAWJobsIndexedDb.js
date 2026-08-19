__d("MAWJobsIndexedDb", [
	"FBLogger",
	"MAWCurrentUser",
	"MAWErrorObject",
	"MAWIndexedDbMetadata",
	"MAWQplProxy",
	"MAWTransactionMode",
	"Promise",
	"WAExceededStorageQuota",
	"WALogger",
	"WAWorkerGlobalScope",
	"emptyFunction",
	"promiseDone",
	"qex",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = null, c = null, d = "jobs";
	function m() {
		return r("qex")._("940");
	}
	function p() {
		if (u == null) throw r("FBLogger")("messenger_web").mustfixThrow("JobDB IndexDB should've been initialized");
		return u;
	}
	function _() {
		if (c == null) throw r("FBLogger")("messenger_web").mustfixThrow("JobDB IndexDB should've been initialized");
		return c.then(function() {
			return p();
		});
	}
	var f = [
		function(e) {
			var t = e.target.result, n = t.createObjectStore(d, {
				autoIncrement: !0,
				keyPath: "jobId"
			});
			n.createIndex("uniqKey", "uniqKey");
		},
		r("emptyFunction"),
		r("emptyFunction")
	];
	function g(e) {
		return c = null, u = null, h(e).then(function() {
			return u.version;
		});
	}
	function h(t) {
		var a;
		if (c != null) return c;
		if (u != null) return (s || (s = n("Promise"))).resolve();
		var i = o("MAWCurrentUser").getID(), l = o("MAWIndexedDbMetadata").jobsDbName(i), d = (a = t != null ? t : m()) != null ? a : f.length, p = r("qpl")._(25310776, "6155");
		return c = new (s || (s = (n("Promise"))))(function(t, n) {
			var r = indexedDB.open(l, d);
			r.onupgradeneeded = function(e) {
				for (var t = 0; t < f.length; t++) {
					var n = f[t], r = t + 1;
					y(e, r) && n(e);
				}
			}, r.onsuccess = function(n) {
				var r = n.target.result;
				r.onversionchange = function() {
					var t;
					o("MAWQplProxy").sendQplPointThroughBridge(p, "database_jobs_db_versionchange"), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[JobsDb initialization] upgradeneeded is triggered in another worker. This should not happen."]))), r.close(), (t = o("WAWorkerGlobalScope").workerGlobalScope.location) == null || t.reload == null || t.reload();
				}, u = r, o("MAWQplProxy").sendQplPointThroughBridge(p, "database_jobs_db_ready"), t();
			}, r.onerror = function() {
				o("MAWQplProxy").sendQplPointThroughBridge(p, "database_jobs_db_failed"), n(r.error);
			};
		}), c;
	}
	function y(e, t) {
		var n, r = (n = e.newVersion) != null ? n : 0, o = e.oldVersion;
		return o < t && r >= t;
	}
	function C(e) {
		return e === o("MAWTransactionMode").READWRITE ? "readwrite" : "readonly";
	}
	function b(e, t, n, a) {
		var i = C(t);
		return function(t) {
			return function() {
				for (var l = arguments.length, s = new Array(l), d = 0; d < l; d++) s[d] = arguments[d];
				var m = a != null ? o("MAWQplProxy").startQplUserFlow(a) : null, p = function(l) {
					return _().then(function(n) {
						var r = function(r) {
							var t = n.transaction(e, r != null ? C(r) : i, { durability: "relaxed" });
							return o("WAExceededStorageQuota").listenToQuotaExceededError(t), t.objectStore(e);
						};
						return t.apply(void 0, [r].concat(s));
					}).then(function(e) {
						return m == null || m.endSuccess(), e;
					}).catch(function(t) {
						m == null || m.endFail("job_transaction_fail");
						var a = o("MAWErrorObject").getErrorObject(t);
						if ((a == null ? void 0 : a.name) === "InvalidStateError" && l === 1) return c = null, u = null, r("promiseDone")(h()), p(l - 1);
						throw a instanceof Error ? r("FBLogger")("maw_db").catching(a).mustfixThrow("%s:%s - Error performing transaction in jobDB transactor v2", n, e) : r("FBLogger")("maw_db").mustfixThrow("%s:%s - Error performing transaction in jobDB transactor v2", n, e);
					});
				};
				return p(1);
			};
		};
	}
	l.dbMigrations = f, l.makeJobsDbIgnoringPreviousCreations = g, l.makeJobsDb = h, l.makeJobsTransactor = b;
}), 98);
