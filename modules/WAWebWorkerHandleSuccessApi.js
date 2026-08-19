__d("WAWebWorkerHandleSuccessApi", [
	"Promise",
	"WADeprecatedWapParser",
	"WALogger",
	"WAWebDbEncryptionKey",
	"WAWebUpdateClockSkewUtils",
	"WAWebUpdateMeLidUtils",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumConnectionOriginType",
	"WAWebWamLoginMetricUtils",
	"WAWebWidFactory",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = new (r("WADeprecatedWapParser"))("successParser", function(e) {
		return e.assertTag("success"), {
			ts: e.attrTime("t"),
			companionEncStatic: e.maybeAttrString("companion_enc_static") || "NULL",
			lid: e.maybeAttrString("lid"),
			displayName: e.maybeAttrString("display_name")
		};
	});
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var r = u.parse(t);
			if (r.error) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleSuccess: failed to parse ", ""])), r.error), (s || (s = n("Promise"))).reject(r.error);
			var a = r.success;
			o("WAWebUpdateClockSkewUtils").updateClockSkew(a.ts), o("WAWebUpdateMeLidUtils").updateMeLid(a.lid != null ? o("WAWebWidFactory").createWid(a.lid) : null), a.displayName != null && o("WAWebUserPrefsMeUser").setMeDisplayName(a.displayName), o("WAWebUserPrefsGeneral").setOfflinePushDisabled(!1);
			var i = a.companionEncStatic;
			o("WAWebDbEncryptionKey").DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(i), yield o("WAWebWamLoginMetricUtils").logLoginSuccess(o("WAWebWamEnumConnectionOriginType").CONNECTION_ORIGIN_TYPE.PUSH);
		}), d.apply(this, arguments);
	}
	l.default = c;
}), 98);
