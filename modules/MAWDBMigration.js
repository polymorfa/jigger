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
	"asyncToGeneratorRuntime",
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
	function R(e, t, r) {
		b.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Scheduling single migration ", ""])), e), r.addPoint("migration_" + e + "_scheduled");
		var a = o("MAWDBMigrationScheduler").mawDbMigrationScheduler().run(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			b.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Running single migration ", ""])), e), r.addPoint("migration_" + e + "_start");
			var n = o("WATimeUtils").performanceAbsoluteNow();
			yield o("MAWIndexedDb").updateStatusDuringMigration(t.execution(r).catch(function(e) {
				throw b.catching(e).mustfixThrow("MAWDBMigration failed for %s with error: [%s][%s]", t.label, e.name, e.message);
			}));
			var a = o("WATimeUtils").performanceAbsoluteNow() - n;
			b.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"Completed migration ",
				" after ",
				" ms"
			])), e, a), r.addPoint("migration_" + e + "_success"), r.endSuccess();
		}), {
			name: "db_migration_" + e,
			priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
		});
		return a.promise.then(function() {
			D(e, t);
		}).catch(function(t) {
			b.catching(t).MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Cannot process migration ", ""])), e), r.endFail("migration, " + e + ", failed due to error, " + t.name, { string: {
				errorMessage: t.message,
				errorName: t.name
			} });
		});
	}
	function L(e, t, a, i, l, s) {
		b.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
			"Scheduling batched migration ",
			" batchSeq ",
			" with cursor ",
			""
		])), e, i, String(a)), l.addPoint("batched_migration_" + e + "_batch_" + i + "_scheduled");
		var u = o("MAWDBMigrationScheduler").mawDbMigrationScheduler().run(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			i === 1 && l.addPoint("batched_migration_" + e + "_start"), b.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
				"Running migration ",
				" batchSeq ",
				""
			])), e, i), l.addPoint("batched_migration_" + e + "_batch_" + i + "_start");
			var n = o("WATimeUtils").performanceAbsoluteNow(), r = yield o("MAWIndexedDb").updateStatusDuringMigration(t.execution(a, t.batchSize, l, s).catch(function(e) {
				throw b.catching(e).mustfixThrow("MAWDBMigration failed for %s with error: [%s][%s]", t.label, e.name, e.message);
			})), u = o("WATimeUtils").performanceAbsoluteNow() - n;
			return b.DEBUG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
				"Completed migration ",
				" batchSeq ",
				" after ",
				" ms"
			])), e, i, u), l.addPoint("batched_migration_" + e + "_batch_" + i + "_success"), r == null && (b.DEBUG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Completed batched migration ", " fully"])), e), l.addPoint("batched_migration_" + e + "_success"), l.addAnnotations(s), l.endSuccess({ int: { batchCount: i } })), r;
		}), {
			name: "db_migration_" + e + "_batch_" + i,
			priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
		});
		return u.promise.then(function(n) {
			if (n != null) {
				r("promiseDone")(L(e, t, n, i + 1, l, s));
				return;
			}
			D(e, t);
		}).catch(function(t) {
			e === o("MAWDBMigrationUtils").MAWDB_DEDUPE_MSGS_MIGRATION_VERSION && (o("MAWDBMigrationUtils").mawDbDedupeMsgsMigrationStatus.isRunning = !1), b.catching(t).MUSTFIX(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Cannot process migration ", ""])), e), l.addAnnotations(s), l.endFail("batched migration, " + e + ", failed due to error, " + t.name, { string: {
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
	function I() {
		return T.apply(this, arguments);
	}
	function T() {
		return T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield o("WAWaitForUserUnblocked").waitForUserUnblocked();
			var e = yield o("MAWDBMigrationUtils").getMigrationVersion(), t = E();
			if (o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_DB_MIGRATION_CURRENT_VERSION,
				key: "current_version." + e
			}), e >= E()) {
				b.DEBUG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
					"Skip migration. Current version: ",
					", target version: ",
					""
				])), e, t);
				return;
			}
			var n = e + 1, r = k(n);
			if (r == null) {
				b.DEBUG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
					"Skip migration due to migration not defined. Current version: ",
					", next version: ",
					""
				])), e, n);
				return;
			}
			return S(n);
		}), T.apply(this, arguments);
	}
	function D(e, t) {
		if ((t.dryRun == null ? void 0 : t.dryRun()) === !0) {
			b.DEBUG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["Skipping BumpVersionAndScheduleNext as migration is a dry run. Migration: ", ""])), t.label);
			return;
		}
		r("promiseDone")(v(e).then(S(e + 1)));
	}
	l.setMigrationVersion = v, l.startMigration = I;
}), 98);
