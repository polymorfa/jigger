__d("WAWebGuestMessagingSwInitDb", [
	"WALogger",
	"WAWebDbRolloutUtil",
	"WAWebWorkerStorage",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s() {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				yield o("WAWebDbRolloutUtil").loadSchemaVersions(), yield o("WAWebWorkerStorage").initialize();
			} catch (t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[guest][push-notification] db init failed: ", ""])), t).sendLogs("guest-push-notification-db-init-error");
			}
		}), u.apply(this, arguments);
	}
	l.initDb = s;
}), 98);
