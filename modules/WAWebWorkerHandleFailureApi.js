__d("WAWebWorkerHandleFailureApi", [
	"Promise",
	"WAComms",
	"WADeprecatedWapParser",
	"WALogger",
	"WAWebFailureErrorCodes",
	"WAWebUserPrefsGeneral",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _ = new (r("WADeprecatedWapParser"))("failureParser", function(e) {
		return e.assertTag("failure"), { reason: e.attrInt("reason", 400, 599) };
	});
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = _.parse(t);
			if (a.error) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" parsing ",
				""
			])), a.error.toString(), t.toString()), (p || (p = n("Promise"))).reject(a.error);
			switch (a.success.reason) {
				case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_TEMP_BANNED:
				case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_LOCKED:
				case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_BANNED:
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[handleFailure] banned user, reason=", ", no push"])), a.success.reason).sendLogs("should-not-push-to-banned-users: reason: " + a.success.reason), o("WAComms").stopComms(), o("WAWebUserPrefsGeneral").setOfflinePushDisabled(!0);
					break;
				case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_NOT_AUTHORIZED:
					o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["received failure stanza, reason: 401 - not authorized"]))), o("WAComms").stopComms(), o("WAWebUserPrefsGeneral").setOfflinePushDisabled(!0);
					break;
				case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_CLIENT_TOO_OLD:
				case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_BAD_USER_AGENT: {
					o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[handleFailure] client outdated, defer update to next open"]))), o("WAComms").stopComms(), o("WAWebUserPrefsGeneral").setOfflinePushDisabled(!0);
					break;
				}
				case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_GENERIC_FAILURE:
				case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_INTERNAL_SERVER_ERROR:
				case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_EXPERIMENTAL:
					o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["handleFailure: got failure code ", ""])), a.success.reason);
					break;
				default: return o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["failure reason ", " not implemented yet"])), a.success.reason), (p || (p = n("Promise"))).reject(r("err")("failure reason " + a.success.reason + " not implemented yet"));
			}
		}), g.apply(this, arguments);
	}
	l.default = f;
}), 98);
