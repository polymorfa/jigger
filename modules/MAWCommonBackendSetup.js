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
	"Promise",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"gkx",
	"requireDeferredForDisplay",
	"shouldUseMAWSharedWorker"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = r("requireDeferredForDisplay")("MAWMainThreadLogger").__setRef("MAWCommonBackendSetup"), u = function(r, a) {
		return a ? (e || (e = n("Promise"))).resolve(!0) : r.measurePerformance("acquire_mutex", function() {
			return o("MAWAppMutex").use().init();
		});
	};
	function c(e, t, n, r, o, a) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, c, d) {
			yield t.measurePerformance("prepare_logger", n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = s.load();
				(yield e).setupMainWaLogger();
			})), o("MAWLoggerUtils").initMessengerWebLogging();
			var m = o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker();
			m || (yield t.measurePerformance("detection_support", function() {
				if (!o("MAWLocalStorage").isLocalStorageAvailable()) throw new (o("MAWInitError")).MAWInitError("localstorage_not_supported");
				return (e || (e = n("Promise"))).resolve();
			}));
			var p = t.measurePerformance("setup_vault_materials", function() {
				return o("MAWVaultMaterialsStorage").setupVaultMaterials();
			}), _ = yield u(t, m);
			if (!_) throw t.logPoint("maw_appmutex_no_permission"), new (o("MAWInitError")).MAWInitError("maw_appmutex_no_permission");
			var f = yield p, g;
			if (r("gkx")("1458")) try {
				g = yield o("EBIsEbEnabled").isEBEnabled();
			} catch (e) {
				var h = r("getErrorSafe")(e).message;
				t.addStringAnnotation("eb_state_fetch_error", h), r("FBLogger")("wmi_eb").mustfix("Failed to get EB state: %s", h), g = void 0;
			}
			else g = void 0;
			yield t.measurePerformance("setup_worker", function() {
				return o("MAWSetupWorker").getOrSetupWorker(f, a, i, l, c, d, g).catch(function(e) {
					return t.logPoint("reboot_worker_on_backend_setup_failure"), t.addStringAnnotation("backend_setup_failure_reason", e.message), o("MAWWorkerReboot").rebootWorker(f, a, i, l, "backend_setup_failure", d).catch(function(e) {
						throw new (o("MAWInitError")).MAWInitError("worker_setup_error", e);
					});
				});
			});
		}), d.apply(this, arguments);
	}
	l.setupArmadilloBackend = c;
}), 98);
