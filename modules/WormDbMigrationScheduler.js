__d("WormDbMigrationScheduler", [
	"FBLogger",
	"MpsTypes",
	"MsgrSchedulerQPL",
	"NativeSchedulerTickStrategy",
	"ODS",
	"QPLFlow",
	"TaskScheduler",
	"TaskSchedulerPriority",
	"WAWaitForUserUnblocked",
	"WmiMetadataAppMetaMigration",
	"WmiMetadataDeviceChangeAlertsMigration",
	"WmiMetadataThreadsMigration",
	"WormDbMigrationCompletenessCheck",
	"WormMaintenanceDb",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"gkx",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = function() {
		return r("FBLogger")("wmi").tags(["worm_db_migration"]);
	}, d = null, m = {
		concurrency: 1,
		failOnTimeout: !0,
		promotionTimeoutMs: r("justknobx")._("3546"),
		timeoutMs: r("justknobx")._("3614")
	}, p = null;
	function _() {
		if (p == null) {
			var e = o("TaskScheduler").taskScheduler("WormDbMigrations", m, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
			e.setLifecycleListener(o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener()), p = e;
		}
		return p;
	}
	var f = new Map([["wmi-metadata-device-change-alerts", o("WmiMetadataDeviceChangeAlertsMigration").WmiMetadataDeviceChangeAlertsMigrationTask], ["wmi-metadata-app-meta", o("WmiMetadataAppMetaMigration").WmiMetadataAppMetaMigrationTask]].concat(r("gkx")("3183") === !0 ? [["wmi-metadata-threads", o("WmiMetadataThreadsMigration").WmiMetadataThreadsMigrationTask]] : [])), g = new Map();
	function h(e, t) {
		return e + ":" + (t != null ? t : "null");
	}
	function y(e) {
		var t;
		return (t = g.get(e)) != null ? t : 0;
	}
	function C(e) {
		g.set(e, y(e) + 1);
	}
	function b() {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			return yield o("WAWaitForUserUnblocked").waitForUserUnblocked(), yield o("WormDbMigrationCompletenessCheck").checkAllDbMigrationsCompleteness(Array.from(f.keys()), k), S(f);
		}), v.apply(this, arguments);
	}
	function S(e) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (!r("justknobx")._("3720")) {
				c().info("DB Migrations are disabled");
				return;
			}
			if (d != null) {
				c().info("DB Migrations are already running");
				return;
			}
			for (var t of e.entries()) {
				var n = t[0], o = t[1];
				yield L(n, o);
			}
		}), R.apply(this, arguments);
	}
	function L(e, t) {
		return E.apply(this, arguments);
	}
	function E() {
		return E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var a = o("QPLFlow").startQPLFlow(r("qpl")._(767107656, "1154"), { annotations: { string: { migrationName: t } } }), i = yield k(t), l;
			if (i == null ? (a.addPoint("migration_state_not_found"), l = yield I(t), (u || (u = o("ODS"))).bumpEntityKey(9819, "worm.db_migration", t + ".started"), a.addPoint("initial_migration_state_set")) : (a.addPoint("migration_state_retrieved"), l = i), l.finishedAtMs != null) {
				c().info("Migration " + t + " is already complete"), (u || (u = o("ODS"))).bumpEntityKey(9819, "worm.db_migration", t + ".skipped"), a.addPoint("migration_already_complete"), a.endSuccess();
				return;
			}
			var m = h(t, l.currentCursor), p = y(m);
			if (p > r("justknobx")._("2141")) {
				c().INFO(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Migration ", " has exceeded the max retry count"])), t), (u || (u = o("ODS"))).bumpEntityKey(9819, "worm.db_migration", t + ".stuck"), a.addPoint("retry_count_exceeded"), a.endSuccess();
				return;
			}
			d = _().run(function() {
				return n({
					currentCursor: l.currentCursor,
					migrationStartTimeMs: l.startedAtMs,
					qplFlow: a
				});
			}, {
				name: "worm_db_migration_" + t,
				priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
			});
			try {
				var f = yield d.promise;
				a.addPoint("migration_task_complete"), d = null, f.hasMore ? (yield T(babelHelpers.extends({}, l, { currentCursor: f.nextCursor })), a.addPoint("migration_state_updated"), L(t, n)) : (yield T(babelHelpers.extends({}, l, {
					currentCursor: void 0,
					finishedAtMs: o("MpsTypes").toTimestamp(Date.now())
				})), (u || (u = o("ODS"))).bumpEntityKey(9819, "worm.db_migration", t + ".complete"), a.addPoint("migration_complete")), a.endSuccess();
			} catch (e) {
				d = null;
				var g = r("getErrorSafe")(e);
				c().FATAL(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"Runtime error when running migration ",
					": ",
					""
				])), t, g.message), a.endFail("runtime_error", { string: { errorMessage: g.message } }), C(m), L(t, n);
			}
		}), E.apply(this, arguments);
	}
	function k(e) {
		return o("WormMaintenanceDb").getWormMaintenanceDb().runInTransaction(["migrations"], "readonly", function(t) {
			return t.stores.migrations.getByIndex("name", [e]);
		}, "mps-get-migration-by-name");
	}
	function I(e) {
		return o("WormMaintenanceDb").getWormMaintenanceDb().runInTransaction(["migrations"], "readwrite", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = {
					name: e,
					startedAtMs: o("MpsTypes").toTimestamp(Date.now())
				}, r = yield t.stores.migrations.bulkAdd([n]), a = r[0];
				return babelHelpers.extends({}, n, { pk: a });
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), "mps-add-initial-migration-state");
	}
	function T(e) {
		return o("WormMaintenanceDb").getWormMaintenanceDb().runInTransaction(["migrations"], "readwrite", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				yield t.stores.migrations.bulkPut([e]);
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), "mps-set-migration-state");
	}
	l.runAllDbMigrations = b, l.getDbMigrationStateByName = k;
}), 98);
