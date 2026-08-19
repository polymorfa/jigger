__d("WAWebWorkerHandleSuccessApi", [
	"WADeprecatedWapParser",
	"WALogger",
	"WAWebDbEncryptionKey",
	"WAWebUpdateClockSkewUtils",
	"WAWebUpdateMeLidUtils",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumConnectionOriginType",
	"WAWebWamLoginMetricUtils",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e, s = new (r("WADeprecatedWapParser"))("successParser", function(e) {
		return e.assertTag("success"), {
			ts: e.attrTime("t"),
			companionEncStatic: e.maybeAttrString("companion_enc_static") || "NULL",
			lid: e.maybeAttrString("lid"),
			displayName: e.maybeAttrString("display_name")
		};
	});
	async function u(t) {
		var n = s.parse(t);
		if (n.error) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleSuccess: failed to parse ", ""])), n.error), Promise.reject(n.error);
		var r = n.success;
		o("WAWebUpdateClockSkewUtils").updateClockSkew(r.ts), o("WAWebUpdateMeLidUtils").updateMeLid(r.lid != null ? o("WAWebWidFactory").createWid(r.lid) : null), r.displayName != null && o("WAWebUserPrefsMeUser").setMeDisplayName(r.displayName), o("WAWebUserPrefsGeneral").setOfflinePushDisabled(!1);
		var a = r.companionEncStatic;
		o("WAWebDbEncryptionKey").DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(a), await o("WAWebWamLoginMetricUtils").logLoginSuccess(o("WAWebWamEnumConnectionOriginType").CONNECTION_ORIGIN_TYPE.PUSH);
	}
	l.default = u;
}), 98);
