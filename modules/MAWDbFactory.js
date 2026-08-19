__d("MAWDbFactory", [
	"ClientConsistencyEventEmitter",
	"Deferred",
	"MAWCurrentUser",
	"MAWDbVersion",
	"MAWDexieTable",
	"MAWGetDbVersion",
	"MAWIDbSetupQplEventListener",
	"MAWIndexedDBDeletion",
	"MAWIndexedDbMetadata",
	"MAWLowLevelApiTypes",
	"MAWQplProxy",
	"MAWReliabilityMonitor",
	"MWFBLogger",
	"Promise",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"gkx",
	"promiseDone",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g = [
		"backendInitPromise",
		"middleware",
		"onDbPopulate"
	], h;
	function y(t, a) {
		var i = null, l = o("MWFBLogger").MWLogger().tags([
			"db",
			t,
			a
		]), y = new (r("Deferred"))(), C = !1, b = !1, v, S = !1, R = null, L = a !== "worker" ? null : o("MAWReliabilityMonitor").MAWReliabilityMonitorSingleton.startMonitoring("DB_" + t + "_" + a, function() {
			return {
				extra: {
					isMakingDB: String(C),
					willBeSetup: String(b)
				},
				reason: String(R),
				state: (function() {
					if (R == null) return o("MAWReliabilityMonitor").HealthReportState.UNKNOWN;
					switch (R) {
						case o("MAWLowLevelApiTypes").DatabaseState.Initializing:
						case o("MAWLowLevelApiTypes").DatabaseState.Upgrading: return o("MAWReliabilityMonitor").HealthReportState.PENDING;
						case o("MAWLowLevelApiTypes").DatabaseState.Open: return o("MAWReliabilityMonitor").HealthReportState.OK;
						case o("MAWLowLevelApiTypes").DatabaseState.Closed:
						case o("MAWLowLevelApiTypes").DatabaseState.Error: return o("MAWReliabilityMonitor").HealthReportState.ERROR;
					}
				})()
			};
		});
		function E() {
			y = new (r("Deferred"))(), v == null || v(), C = !1, b = !1;
		}
		function k() {
			return b;
		}
		function I() {
			return y.getPromise().then(function() {
				return S;
			});
		}
		function T(e, t, n) {
			return D.apply(this, arguments);
		}
		function D() {
			return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, h, k) {
				var I = h.backendInitPromise, T = h.middleware, D = h.onDbPopulate, x = babelHelpers.objectWithoutPropertiesLoose(h, g), $ = o("MAWCurrentUser").getID(), P = o("MAWIndexedDbMetadata").dbName($), N = r("qpl")._(25310776, "6155");
				function M(e) {
					R = e, L == null || L.updateState();
				}
				if (i != null) {
					l.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["DB exists"]))), o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_exsists");
					return;
				}
				var w = o("MAWQplProxy").startQplUserFlow(r("qpl")._(1056836116, "905"), { string: {
					db: t,
					name: P
				} });
				if (b = !0, C) return o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_make_in_progress"), y.getPromise();
				l.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Starting DB Setup"]))), C = !0, o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_make_started"), v = o("MAWIDbSetupQplEventListener").trackDbSetupFailure(w, function() {
					M(o("MAWLowLevelApiTypes").DatabaseState.Error), y.reject("DB setup failed"), o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_setup_failed"), E();
				}), M(o("MAWLowLevelApiTypes").DatabaseState.Initializing);
				var A = yield o("MAWDbVersion").getDexieDbVersion(P);
				A == null && (S = !0), w.addAnnotations({ int: { currentVersion: A } });
				var F = k != null ? k : o("MAWGetDbVersion").getArmadilloDbVersion();
				if (w.addAnnotations({ int: { targetVersion: F } }), I && (A || 0) < F) {
					w.addPoint("separate_read_waiting_on_worker_upgrade"), l.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Waiting for worker to upgrade schema..."])));
					try {
						yield I;
					} catch (e) {
						throw l.catching(r("getErrorSafe")(e)).mustfixThrow("Worker startup promise rejected, schema upgrade failed.");
					}
					var O = yield o("MAWDbVersion").getDexieDbVersion(P);
					if (O !== F) throw l.mustfixThrow("Main thread waiting on worker schema upgrade from %s to %s, upgrade failed with version %s", A, F, O);
					A = O;
				} else a === "worker" && (o("MAWQplProxy").sendQPLIntAnnotationThroughBridge(r("qpl")._(1056839232, "112"), "dbVersion", A != null ? A : 0), o("MAWQplProxy").sendQPLIntAnnotationThroughBridge(r("qpl")._(1056839232, "112"), "useSentBytesCache", r("gkx")("33008") ? 1 : 0));
				var B = function(n) {
					var e = o("MAWDbVersion").updateDB(n, w, A, k);
					return !I && a === "worker" && o("MAWQplProxy").sendQPLBoolAnnotationThroughBridge(r("qpl")._(1056839232, "112"), "dbUpgradeNeeded", A !== e), l.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
						"latest pushed version: ",
						", current: ",
						", requested: ",
						""
					])), e, A, k != null ? k : "<latest>"), a === "worker" && (A !== e ? o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_version_upgraded") : o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_version_upgrade_not_required")), e;
				};
				return i = new (o("MAWDexieTable")).DexieTable(P, function(e) {
					T.forEach(function(t) {
						e.use(t(n));
					});
					var i = B(e);
					e.on("populate", function(e) {
						if (!e) {
							M(o("MAWLowLevelApiTypes").DatabaseState.Error), y.reject("Missing DB for populate event"), w.endFail("on_populata-missing_txn"), o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_on_populate_missing_txn");
							return;
						}
						l.info("MAWDB populated. HasPopulateEvent: %s", !!D), D == null || D(e);
					}), e.on("blocked", function() {
						l.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["DB Open blocked"]))), M(o("MAWLowLevelApiTypes").DatabaseState.Error), y.reject("DB Open blocked"), w.endFail("db_blocked"), o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_blocked"), E();
					}), e.on("ready", function(e) {
						if (l.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["MAW DB setup complete"]))), C = !1, e == null) {
							M(o("MAWLowLevelApiTypes").DatabaseState.Error), l.MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["DB is null"]))), y.reject("DB is null"), w.endFail("db_null"), o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_null"), E();
							return;
						}
						M(o("MAWLowLevelApiTypes").DatabaseState.Open), v == null || v(), y.resolve(), w.endSuccess({ int: { dbVersion: i } }), o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_ready");
					}), e.on("close", function() {
						M(o("MAWLowLevelApiTypes").DatabaseState.Closed), l.WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["DB forcibly closed"]))), o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_forcibly_closed");
					}), e.on("versionchange", function(e) {
						l.WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
							"Versionchange detected: (",
							" -> ",
							" (event version: ",
							", highestUsed: (",
							"), name: ",
							""
						])), e == null ? void 0 : e.oldVersion, e == null ? void 0 : e.newVersion, String(e == null ? void 0 : e.version), i, e == null ? void 0 : e.name), M(o("MAWLowLevelApiTypes").DatabaseState.Upgrading), a !== "worker" && r("ClientConsistencyEventEmitter").emit("softRefresh", "mawdb_versionchange"), o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_versionchange");
					});
				}, void 0, x), o("MAWQplProxy").sendQplPointThroughBridge(N, "database_" + t + "_make_requested"), y.getPromise();
			}), D.apply(this, arguments);
		}
		function x(e) {
			if (i == null) throw l.mustfixThrow("IndexDB has not been initialized before executing \"" + (e != null ? e : "unnamed") + "\"");
			return i;
		}
		function $(e) {
			return i != null && !C ? (h || (h = n("Promise"))).resolve(i) : (y = y || new (r("Deferred"))(), y.getPromise().then(function() {
				return x(e);
			}));
		}
		function P() {
			return N.apply(this, arguments);
		}
		function N() {
			return N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield $();
				e != null && (e.close(), i = null), E();
			}), N.apply(this, arguments);
		}
		function M() {
			i = null, E();
		}
		function w(e) {
			r("promiseDone")(P());
			var t = o("MAWIndexedDbMetadata").dbName(e != null ? e : o("MAWCurrentUser").getID());
			r("promiseDone")(o("MAWIndexedDBDeletion").deleteDB(t, "maw")), L == null || L.stopMonitoring();
		}
		return {
			closeDB: P,
			deleteDb: w,
			getDB: $,
			getDBExn: x,
			isNewDb: I,
			makeDB: T,
			reset_singleton_INTERNAL_ONLY: M,
			setupPromise: function() {
				return y.getPromise();
			},
			willSetupDB: k
		};
	}
	l.makeIDBFactory = y;
}), 98);
