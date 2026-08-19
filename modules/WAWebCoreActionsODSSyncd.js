__d("WAWebCoreActionsODSSyncd", ["WALogger", "WAWebSyncdMetricFatalError"], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, n) {
		n > 0 && Math.random() < n && (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[test-only] mc_migration_regression crashlog bucket ", ""])), t).sendLogs("mc-migration-regression"), o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.CYCLIC_MUTATION_DEPENDENCY_IN_PATCH));
	}
	l.logMCMigrationRegression = s;
}), 98);
