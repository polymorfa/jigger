__d("WAWebInAppSignupInfoStore", [
	"WALogger",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebInAppSignupInfoCache",
	"WAWebSchemaInAppSignupInfo",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = null;
	function c() {
		return o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable() ? (u == null && (u = o("WAWebSchemaInAppSignupInfo").getInAppSignupInfoTable().all().then(function(e) {
			o("WAWebInAppSignupInfoCache").primeInAppSignupInfoCache(e);
		}).catch(function(t) {
			u = null, o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[ias-store] hydrate failed"]))).catching(r("getErrorSafe")(t)).sendLogs("ias-store-hydrate-failed");
		})), u) : Promise.resolve();
	}
	function d() {
		u = null, o("WAWebInAppSignupInfoCache").clearInAppSignupInfoCache();
	}
	async function m(e, t) {
		if (o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled") && o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()) try {
			await c();
			var n = o("WAWebSchemaInAppSignupInfo").getInAppSignupInfoTable(), a = o("WAWebInAppSignupInfoCache").buildMergedInAppSignupInfoRow(e, t);
			await n.createOrMerge(a.id, a), o("WAWebInAppSignupInfoCache").setInAppSignupInfo(a);
		} catch (e) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[ias-store] write failed"]))).catching(r("getErrorSafe")(e)).sendLogs("ias-store-write-failed");
		}
	}
	async function p(e, t) {
		var n;
		if (o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled")) {
			await c();
			var r = o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e);
			(r == null ? void 0 : r.iasOptinDs) == null && await m(e, {
				isIasSubscriber: !0,
				iasOptinDs: f(),
				iasEntryPoint: (n = r == null ? void 0 : r.iasEntryPoint) != null ? n : t
			});
		}
	}
	async function _(e, t) {
		var n;
		o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled") && (await c(), ((n = o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e)) == null ? void 0 : n.iasOptinDs) == null && await m(e, { iasEntryPoint: t }));
	}
	function f() {
		return new Intl.DateTimeFormat("en-CA", {
			timeZone: "America/Los_Angeles",
			year: "numeric",
			month: "2-digit",
			day: "2-digit"
		}).format(o("WATimeUtils").unixTimeMs()).replace(/-/g, "/");
	}
	l.ensureInAppSignupInfoHydrated = c, l.clearInAppSignupInfo = d, l.saveOptinDate = p, l.saveEntryPoint = _;
}), 98);
