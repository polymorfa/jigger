__d("MAWDBMigration", [
	"MAWDBMigrationScheduler",
	"MAWDBMigrationTasks",
	"MAWDBMigrationUtils",
	"MAWDbAppMeta",
	"MAWIndexedDb",
	"MAWODSProxy",
	"MAWSendQplToServer",
	"MAWTransactionMode",
	"MWFBLogger",
	"TaskSchedulerPriority",
	"WAOdsEnums",
	"WATimeUtils",
	"WAWaitForUserUnblocked",
	"justknobx",
	"promiseDone",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b = o("MWFBLogger").MWLogger().tags(["maw_db_migration"]), v = o("MAWIndexedDb").makeMsgrTransactor({ appMeta: o("MAWTransactionMode").READWRITE }, "setMigrationVersion", function(e) {
		return function(t) {
			return e.appMeta.put({
				key: o("MAWDbAppMeta").AppMetaKeysEnum.dbMigrationVersion,
				value: { dbMigrationVersion: t }
			}).then(function() {
				o("MAWDBMigrationUtils").mawDbMigrationVersion.version = t;
			});
		};
	});
	function S(t) {
		var n = k(t);
		if (n != null) {
			if (n.canExecute && n.canExecute() === !1) {
				b.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"Skip migration due to migration is not allowed. Version: ",
					", migration: ",
					""
				])), t, n.label);
				return;
			}
			var a = o("MAWSendQplToServer").startQplUserFlow(r("qpl")._(1056841228, "2729"), {
				bool: { dryRun: n == null || n.dryRun == null ? void 0 : n.dryRun() },
				int: { migrationVersion: t },
				string: { migration: n.label }
			});
			switch (n.type) {
				case "single":
					r("promiseDone")(R(t, n, a));
					break;
				case "batched":
					r("promiseDone")(L(t, n, n.startCursor, 1, a, {}));
					break;
			}
		}
	}
	function R(e, t, n) {
		b.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Scheduling single migration ", ""])), e), n.addPoint("migration_" + e + "_scheduled");
		var r = o("MAWDBMigrationScheduler").mawDbMigrationScheduler().run(async function() {
			b.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Running single migration ", ""])), e), n.addPoint("migration_" + e + "_start");
			var r = o("WATimeUtils").performanceAbsoluteNow();
			await o("MAWIndexedDb").updateStatusDuringMigration(t.execution(n).catch(function(e) {
				throw b.catching(e).mustfixThrow("MAWDBMigration failed for %s with error: [%s][%s]", t.label, e.name, e.message);
			}));
			var a = o("WATimeUtils").performanceAbsoluteNow() - r;
			b.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"Completed migration ",
				" after ",
				" ms"
			])), e, a), n.addPoint("migration_" + e + "_success"), n.endSuccess();
		}, {
			name: "db_migration_" + e,
			priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
		});
		return r.promise.then(function() {
			T(e, t);
		}).catch(function(t) {
			b.catching(t).MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Cannot process migration ", ""])), e), n.endFail("migration, " + e + ", failed due to error, " + t.name, { string: {
				errorMessage: t.message,
				errorName: t.name
			} });
		});
	}
	function L(e, t, n, a, i, l) {
		b.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
			"Scheduling batched migration ",
			" batchSeq ",
			" with cursor ",
			""
		])), e, a, String(n)), i.addPoint("batched_migration_" + e + "_batch_" + a + "_scheduled");
		var s = o("MAWDBMigrationScheduler").mawDbMigrationScheduler().run(async function() {
			a === 1 && i.addPoint("batched_migration_" + e + "_start"), b.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
				"Running migration ",
				" batchSeq ",
				""
			])), e, a), i.addPoint("batched_migration_" + e + "_batch_" + a + "_start");
			var r = o("WATimeUtils").performanceAbsoluteNow(), s = await o("MAWIndexedDb").updateStatusDuringMigration(t.execution(n, t.batchSize, i, l).catch(function(e) {
				throw b.catching(e).mustfixThrow("MAWDBMigration failed for %s with error: [%s][%s]", t.label, e.name, e.message);
			})), u = o("WATimeUtils").performanceAbsoluteNow() - r;
			return b.DEBUG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
				"Completed migration ",
				" batchSeq ",
				" after ",
				" ms"
			])), e, a, u), i.addPoint("batched_migration_" + e + "_batch_" + a + "_success"), s == null && (b.DEBUG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Completed batched migration ", " fully"])), e), i.addPoint("batched_migration_" + e + "_success"), i.addAnnotations(l), i.endSuccess({ int: { batchCount: a } })), s;
		}, {
			name: "db_migration_" + e + "_batch_" + a,
			priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
		});
		return s.promise.then(function(n) {
			if (n != null) {
				r("promiseDone")(L(e, t, n, a + 1, i, l));
				return;
			}
			T(e, t);
		}).catch(function(t) {
			e === o("MAWDBMigrationUtils").MAWDB_DEDUPE_MSGS_MIGRATION_VERSION && (o("MAWDBMigrationUtils").mawDbDedupeMsgsMigrationStatus.isRunning = !1), b.catching(t).MUSTFIX(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Cannot process migration ", ""])), e), i.addAnnotations(l), i.endFail("batched migration, " + e + ", failed due to error, " + t.name, { string: {
				errorMessage: t.message,
				errorName: t.name
			} });
		});
	}
	function E() {
		return r("justknobx")._("3065");
	}
	function k(e) {
		return e > E() ? null : o("MAWDBMigrationTasks").getMigrationByVersion(e);
	}
	async function I() {
		await o("WAWaitForUserUnblocked").waitForUserUnblocked();
		var e = await o("MAWDBMigrationUtils").getMigrationVersion(), t = E();
		if (o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_DB_MIGRATION_CURRENT_VERSION,
			key: "current_version." + e
		}), e >= E()) {
			b.DEBUG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
				"Skip migration. Current version: ",
				", target version: ",
				""
			])), e, t);
			return;
		}
		var n = e + 1, r = k(n);
		if (r == null) {
			b.DEBUG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
				"Skip migration due to migration not defined. Current version: ",
				", next version: ",
				""
			])), e, n);
			return;
		}
		return S(n);
	}
	function T(e, t) {
		if ((t.dryRun == null ? void 0 : t.dryRun()) === !0) {
			b.DEBUG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["Skipping BumpVersionAndScheduleNext as migration is a dry run. Migration: ", ""])), t.label);
			return;
		}
		r("promiseDone")(v(e).then(S(e + 1)));
	}
	l.setMigrationVersion = v, l.startMigration = I;
}), 98);
