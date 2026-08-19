__d("MAWCommonBackendSetup", [
	"EBIsEbEnabled",
	"FBLogger",
	"MAWAppMutex",
	"MAWInitError",
	"MAWLocalStorage",
	"MAWLoggerUtils",
	"MAWSetupWorker",
	"MAWVaultMaterialsStorage",
	"MAWWorkerReboot",
	"getErrorSafe",
	"gkx",
	"requireDeferredForDisplay",
	"shouldUseMAWSharedWorker"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferredForDisplay")("MAWMainThreadLogger").__setRef("MAWCommonBackendSetup"), s = function(t, n) {
		return n ? Promise.resolve(!0) : t.measurePerformance("acquire_mutex", function() {
			return o("MAWAppMutex").use().init();
		});
	};
	async function u(t, n, a, i, l, u) {
		await t.measurePerformance("prepare_logger", async function() {
			var t = e.load();
			(await t).setupMainWaLogger();
		}), o("MAWLoggerUtils").initMessengerWebLogging();
		var c = o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker();
		c || await t.measurePerformance("detection_support", function() {
			if (!o("MAWLocalStorage").isLocalStorageAvailable()) throw new (o("MAWInitError")).MAWInitError("localstorage_not_supported");
			return Promise.resolve();
		});
		var d = t.measurePerformance("setup_vault_materials", function() {
			return o("MAWVaultMaterialsStorage").setupVaultMaterials();
		}), m = await s(t, c);
		if (!m) throw t.logPoint("maw_appmutex_no_permission"), new (o("MAWInitError")).MAWInitError("maw_appmutex_no_permission");
		var p = await d, _;
		if (r("gkx")("1458")) try {
			_ = await o("EBIsEbEnabled").isEBEnabled();
		} catch (e) {
			var f = r("getErrorSafe")(e).message;
			t.addStringAnnotation("eb_state_fetch_error", f), r("FBLogger")("wmi_eb").mustfix("Failed to get EB state: %s", f), _ = void 0;
		}
		else _ = void 0;
		await t.measurePerformance("setup_worker", function() {
			return o("MAWSetupWorker").getOrSetupWorker(p, n, a, i, l, u, _).catch(function(e) {
				return t.logPoint("reboot_worker_on_backend_setup_failure"), t.addStringAnnotation("backend_setup_failure_reason", e.message), o("MAWWorkerReboot").rebootWorker(p, n, a, i, "backend_setup_failure", u).catch(function(e) {
					throw new (o("MAWInitError")).MAWInitError("worker_setup_error", e);
				});
			});
		});
	}
	l.setupArmadilloBackend = u;
}), 98);
