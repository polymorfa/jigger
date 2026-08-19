__d("useWAWebBizAiFacebookRelayEnvironment", [
	"WALogger",
	"WAWebFetchAdAccountToken",
	"WAWebRelayEnvironment",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useState, _ = null;
	function f() {
		var t = p(_), r = t[0], a = t[1], i = p(0), l = i[0], s = i[1];
		d(function() {
			var t = !1;
			return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var n = yield o("WAWebFetchAdAccountToken").fetchToken(l > 0 ? !0 : void 0);
					if (n.type !== "success") return;
					var r = yield o("WAWebRelayEnvironment").getEnvironment({
						accessToken: n.token.token,
						actorID: n.token.bp_id,
						environmentType: "facebook"
					});
					t || (_ = r, a(r));
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["biz_ai: failed to init Facebook relay environment ", ""])), t).sendLogs("biz-ai-facebook-relay-env-init-failed");
				}
			})(), function() {
				t = !0;
			};
		}, [l]);
		var u = c(function() {
			o("WAWebFetchAdAccountToken").markTokenAsInvalid(), _ = null, a(null), s(function(e) {
				return e + 1;
			});
		}, []);
		return m(function() {
			return {
				env: r,
				refreshEnv: u
			};
		}, [r, u]);
	}
	l.default = f;
}), 98);
