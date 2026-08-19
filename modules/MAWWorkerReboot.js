__d("MAWWorkerReboot", [
	"EBIsEbEnabled",
	"FBLogger",
	"MAWSetupWorker",
	"MAWWaitForBackendSetup",
	"ODS",
	"Promise",
	"QPLUserFlow",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"gkx",
	"pageID",
	"qpl",
	"shouldUseMAWSharedWorker"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("qpl")._(1056840252, "808");
	function c(e) {
		(s || (s = o("ODS"))).bumpEntityKey(3185, "armadillo_shared_worker_reboot", "shared_worker_reboot_" + e);
	}
	var d = o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker(), m = function(t) {
		switch (t) {
			case "bridge_recovery": return "bridgeRecovery";
			case "backend_setup_failure": return "backendSetupFailure";
		}
	};
	function p(t, a, i, l, s, p) {
		r("QPLUserFlow").start(u, { annotations: {
			bool: { isSharedWorker: d },
			string: {
				trigger: s,
				workerInitPageID: r("pageID")
			}
		} }), r("FBLogger")("messenger_web").info("Rebooting worker started."), c("start"), o("MAWWaitForBackendSetup").resetBackendSetup();
		var _ = m(s);
		return r("QPLUserFlow").addPoint(u, "terminate_worker_start"), new (e || (e = (n("Promise"))))(function(e, s) {
			return o("MAWSetupWorker").terminateWorker(_).then(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				r("QPLUserFlow").addPoint(u, "terminate_worker_end"), r("FBLogger")("messenger_web").info("Reboot process killed existing worker successfully.");
				var n;
				if (r("gkx")("1458")) try {
					n = yield o("EBIsEbEnabled").isEBEnabled();
				} catch (e) {
					r("FBLogger")("wmi_eb").mustfix("Failed to get EB state during worker reboot: %s", r("getErrorSafe")(e).message), n = void 0;
				}
				else n = void 0;
				return o("MAWSetupWorker").getOrSetupWorker(t, a, i, l, _, p, n).then(function(t) {
					r("FBLogger")("messenger_web").info("Rebooting worker success. Reason for reboot: %s", _), c("success"), r("QPLUserFlow").endSuccess(u), a(t), e();
				});
			})).catch(function(e) {
				r("FBLogger")("messenger_web").info("Rebooting worker failed. Error message: %s", e.message), c("fail"), r("QPLUserFlow").endFailure(u, e.message), o("MAWWaitForBackendSetup").rejectBackendSetup(e), s(e);
			});
		});
	}
	l.BAD_STATE_RECOVERY_QPL = u, l.rebootWorker = p;
}), 98);
