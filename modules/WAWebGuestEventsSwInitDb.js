__d("WAWebGuestEventsSwInitDb", [
	"WALogger",
	"WAWebDbRolloutUtil",
	"WAWebWorkerStorage",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				yield o("WAWebDbRolloutUtil").loadSchemaVersions(), yield o("WAWebWorkerStorage").initialize();
			} catch (t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[sw][guest-events] worker storage init failed: ", ""])), t).sendLogs("guest-events-sw-db-init-error");
			}
		}), u.apply(this, arguments);
	}
	l.initGuestEventsSwDb = s;
}), 98);
