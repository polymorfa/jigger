__d("MAWCommonWebWorkerErrorLogging", [
	"Env",
	"ErrorGuard",
	"ErrorPubSub",
	"ErrorSetup",
	"ErrorTransport",
	"JSErrorLoggingConfig",
	"SiteData",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c() {
		(e || (e = r("ErrorGuard"))).skipGuardGlobal((s || (s = r("Env"))).nocatch), r("ErrorSetup").setup({
			appId: r("JSErrorLoggingConfig").appId,
			client_revision: r("SiteData").client_revision,
			extra: r("JSErrorLoggingConfig").extra,
			loggingFramework: "worker",
			projectBlocklist: r("JSErrorLoggingConfig").projectBlocklist,
			report_source: r("JSErrorLoggingConfig").report_source,
			report_source_ref: r("JSErrorLoggingConfig").report_source_ref,
			sample_weight: r("JSErrorLoggingConfig").sampleWeight != null ? r("JSErrorLoggingConfig").sampleWeight : 0,
			site_category: "armadillo-worker"
		}, o("ErrorTransport").log), t.addEventListener("unhandledrejection", function(e) {
			var t = e.reason;
			(u || (u = r("ErrorPubSub"))).reportError(r("getErrorSafe")(t));
		});
	}
	r("ErrorSetup").preSetup(), l.init = c;
}), 98);
