__d("WormDbMigrationCompletenessCheck", [
	"ODS",
	"Promise",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = new Set(), c = new Map();
	function d(e, t) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
			yield (s || (s = n("Promise"))).all(t.map((function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					if (!u.has(t)) {
						u.add(t);
						var n = yield r(t), a = (n == null ? void 0 : n.finishedAtMs) != null;
						c.set(t, a), (e || (e = o("ODS"))).bumpEntityKey(9819, "worm.db_migration", t + ".isMigrated." + String(a));
					}
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})()));
		}), m.apply(this, arguments);
	}
	function p(e) {
		var t;
		return (t = c.get(e)) != null ? t : null;
	}
	l.checkAllDbMigrationsCompleteness = d, l.checkMigrationCompleteness = p;
}), 98);
