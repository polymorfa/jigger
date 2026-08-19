__d("useMAWReregisterDeviceOnError", [
	"FBLogger",
	"LSPersistedDbGating",
	"MAWEBSwitch",
	"MAWIssueNewUserVisibleErrors",
	"MAWLoggerUtils",
	"MAWReinitWorker",
	"MAWSetupWorker",
	"MAWWaitForBackendSetup",
	"MWEncryptedBackupsInitializeRestoreDeferred",
	"ODS",
	"WAOdsEnums",
	"WMIWABridgeApi",
	"asyncToGeneratorRuntime",
	"emptyFunction",
	"getErrorSafe",
	"promiseDone",
	"react",
	"useAsyncReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = (s || (s = o("react"))).useCallback, d = !1, m = typeof window != "undefined" ? window : self;
	function p() {
		d = !0, r("promiseDone")(o("MAWSetupWorker").terminateWorkerPermanently(), function() {
			(u || (u = o("ODS"))).bumpEntityKey(3185, "armadillo_forced_reregister_fail", m.location.hostname), u.bumpEntityKey(3185, o("WAOdsEnums").Entity.WA_REREGISTRATION, "reregister_fail_logout"), o("MAWIssueNewUserVisibleErrors").issueError(o("MAWIssueNewUserVisibleErrors").MAWLegacyUserErrorMsgBody, o("MAWIssueNewUserVisibleErrors").MAWLegacyUserErrorMsgTitle, o("MAWIssueNewUserVisibleErrors").MAWUserVisibleErrorPresentationType.BANNER);
		});
	}
	function _(t) {
		var a = t.rotateCryptoAuthToken, i = t.setupBridge, l = r("useAsyncReStore")();
		return c(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (!d) {
				(u || (u = o("ODS"))).bumpEntityKey(3185, "armadillo_forced_deregister", m.location.hostname), yield r("WMIWABridgeApi").removeCurrentDevice(), yield o("MAWSetupWorker").terminateWorker("useMAWReregisterDeviceOnError"), o("MAWWaitForBackendSetup").resetBackendSetup();
				try {
					var t = yield l;
					(u || (u = o("ODS"))).bumpEntityKey(3185, o("WAOdsEnums").Entity.WA_REREGISTRATION, "reinit_worker"), yield r("MAWReinitWorker")({
						allTablesPersisted: o("LSPersistedDbGating").allTablesPersisted,
						db: t,
						logout: p,
						reregisterDevice: p,
						rotateCryptoAuthToken: a,
						setupBridge: i,
						workerCreateReason: "mawReinitReregDevice"
					}), r("MAWEBSwitch").isEnabled() && ((u || (u = o("ODS"))).bumpEntityKey(3185, o("WAOdsEnums").Entity.WA_REREGISTRATION, "eb_initial_restore"), yield o("MWEncryptedBackupsInitializeRestoreDeferred").encryptedBackupsInitializeRestoreDeferred({
						db: t,
						onFailure: r("emptyFunction"),
						onSuccess: r("emptyFunction")
					}));
				} catch (t) {
					var n, s = r("getErrorSafe")(t);
					o("MAWWaitForBackendSetup").rejectBackendSetup(s);
					var c = s.message;
					r("FBLogger")("wmi_wa").tags([
						(n = o("MAWLoggerUtils")).Tag.DeviceRegistration,
						n.Tag.LogoutHandler,
						n.Tag.WorkerSetup,
						n.Tag.MAWWorker,
						n.Tag.MAWInit
					]).catching(s).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unable to reinit worker: ", ""])), c), (u || (u = o("ODS"))).bumpEntityKey(3185, o("WAOdsEnums").Entity.WA_REREGISTRATION, "reinit_worker_fail.${message}"), o("MAWIssueNewUserVisibleErrors").issueError(o("MAWIssueNewUserVisibleErrors").MAWLegacyUserErrorMsgBody, o("MAWIssueNewUserVisibleErrors").MAWLegacyUserErrorMsgTitle, o("MAWIssueNewUserVisibleErrors").MAWUserVisibleErrorPresentationType.BANNER);
				}
			}
		}), [
			l,
			a,
			i
		]);
	}
	l.default = _;
}), 98);
