__d("WAWebGuestEventsSwInitDb", [
	"WALogger",
	"WAWebDbRolloutUtil",
	"WAWebWorkerStorage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s() {
		try {
			await o("WAWebDbRolloutUtil").loadSchemaVersions(), await o("WAWebWorkerStorage").initialize();
		} catch (t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[sw][guest-events] worker storage init failed: ", ""])), t).sendLogs("guest-events-sw-db-init-error");
		}
	}
	l.initGuestEventsSwDb = s;
}), 98);
