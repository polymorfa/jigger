__d("EBSMWorkerThreadAPI", [
	"EBAPIQPLPoints",
	"EBDeps",
	"I64",
	"LSIntEnum",
	"MAWWaitForBackendSetup",
	"MWEncryptedBackupsFirstRestoreUpsellTime",
	"Promise",
	"QPLFlow",
	"WAResultOrError",
	"WebSession",
	"gkx",
	"justknobx",
	"qpl",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = (c = r("requireDeferred"))("EBAddDeviceWithKeys").__setRef("EBSMWorkerThreadAPI"), m = c("EBAddDeviceWithRecoveryCode").__setRef("EBSMWorkerThreadAPI"), p = c("EBAddVirtualDevice").__setRef("EBSMWorkerThreadAPI"), _ = c("EBDeleteBackupsOnClient").__setRef("EBSMWorkerThreadAPI"), f = c("EBDeleteEncryptedBackup").__setRef("EBSMWorkerThreadAPI"), g = c("EBFetchBackupIds").__setRef("EBSMWorkerThreadAPI"), h = c("EBGenerateRecoveryCode").__setRef("EBSMWorkerThreadAPI"), y = c("EBGetEBState").__setRef("EBSMWorkerThreadAPI"), C = c("EBGetLSVirtualDevices").__setRef("EBSMWorkerThreadAPI"), b = c("EBInitializeBackup").__setRef("EBSMWorkerThreadAPI"), v = c("EBIsEbEnabled").__setRef("EBSMWorkerThreadAPI"), S = c("EBOptOut").__setRef("EBSMWorkerThreadAPI"), R = c("EBOtcAddDevice").__setRef("EBSMWorkerThreadAPI"), L = c("EBRepairEpochs").__setRef("EBSMWorkerThreadAPI"), E = c("EBRepairMembershipHmac").__setRef("EBSMWorkerThreadAPI"), k = c("EBRevokeVirtualDevice").__setRef("EBSMWorkerThreadAPI"), I = c("EBSyncEpochs").__setRef("EBSMWorkerThreadAPI"), T = {
		addDeviceWithEBKeys: function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return d.load().then(function(e) {
				return e.addDeviceWithEBKeys.apply(e, t);
			});
		},
		addDeviceWithRecoveryCode: function() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			if (t.length === 0 || t[0] == null) return (u || (u = n("Promise"))).reject("Missing args");
			var i = o("QPLFlow").startQPLFlow(r("qpl")._(521473756, "2768"), {
				annotations: { bool: {
					isBackendSetupOnStart: o("EBDeps").getDeps().isBackendSetupSuccessful(),
					isEBAddDeviceWithKeys: !1,
					isInWorker: !0
				} },
				timeoutInMs: r("justknobx")._("2444")
			});
			return m.load().then(function(e) {
				return e.addDeviceWithRecoveryCode(babelHelpers.extends({}, t[0], { qplFlow: i }));
			});
		},
		addVirtualDevice: function(t) {
			var e = t.actionType, a = t.recoveryCodeData, i = o("QPLFlow").startQPLFlow(r("qpl")._(521483240, "615"), {
				annotations: { int: { actionType: e } },
				timeoutInMs: r("justknobx")._("4211")
			});
			return i.addPoint("add_virtual_device_worker_start"), a == null ? (i.endFail("add_virtual_device_fail_no_recovery_code_worker"), (u || (u = n("Promise"))).resolve(o("WAResultOrError").makeError("ADD_VIRTUAL_DEVICE_NULL_RECOVERY_CODE_DATA"))) : p.load().then(function(t) {
				return t.addVirtualDevice({
					actionType: e,
					qplFlow: i,
					recoveryCodeData: a
				});
			});
		},
		deleteBackupsOnClient: function(t) {
			var e = t.reason;
			return _.load().then(function(t) {
				return t.deleteBackupsOnClient({ reason: e });
			});
		},
		deleteEncryptedBackup: function(t) {
			var e = t.reason, n = o("QPLFlow").startQPLFlow(r("qpl")._(521484370, "2995"), { timeoutInMs: r("justknobx")._("4553") });
			return n.addPoint(o("EBAPIQPLPoints").EBDeleteEBQPLPoints.DELETE_EB_WORKER_START), f.load().then(function(t) {
				return t.deleteEncryptedBackup({
					qplFlow: n,
					reason: e
				});
			});
		},
		ebOptOut: function() {
			var e = o("QPLFlow").startQPLFlow(r("qpl")._(521482558, "2558"), { annotations: { string: {
				ebSessionIdentifier: o("MWEncryptedBackupsFirstRestoreUpsellTime").getFirstRestoreUpsellTime(),
				fetchBackupIdsVersion: "msys",
				sessionTabId: o("WebSession").getId()
			} } });
			return e.addPoint(o("EBAPIQPLPoints").EBOptOutQPLPoints.OPT_OUT_BACKUP_WORKER_START), S.load().then(function(t) {
				return t.ebOptOut({ qplFlow: e });
			});
		},
		fetchBackupIds: function(t) {
			var e = o("QPLFlow").startQPLFlow(r("qpl")._(521471024, "2275"), { annotations: { string: {
				ebSessionIdentifier: o("MWEncryptedBackupsFirstRestoreUpsellTime").getFirstRestoreUpsellTime(),
				fetchBackupIdsVersion: "msys",
				sessionTabId: o("WebSession").getId()
			} } });
			return e.addPoint("eb_fetch_backup_ids_worker_start"), g.load().then(function(n) {
				return n.fetchBackupIds(t, e);
			});
		},
		generateRecoveryCode: function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return h.load().then(function(e) {
				return e.generateRecoveryCode.apply(e, t);
			});
		},
		getEBState: function() {
			return y.load().then(function(e) {
				return e.GetEbState();
			});
		},
		getLSVirtualDevices: function(t) {
			return C.load().then(function(e) {
				return e.getLSVirtualDevices(t);
			});
		},
		initializeBackup: function(a) {
			var t = a.recoveryCodeData, i = a.virtualDeviceType, l = o("QPLFlow").startQPLFlow(r("qpl")._(521478750, "2850"), {
				annotations: {
					bool: { mailbox_key_rollout_enabled: r("gkx")("11690") },
					int: { virtualDeviceType: (e || (e = o("I64"))).to_int32(i) }
				},
				timeoutInMs: r("justknobx")._("4211")
			});
			l.addPoint(o("EBAPIQPLPoints").EBBackupInitQPLPoints.INITIALIZE_BACKUP_WORKER_START);
			var c = e.equal(i, (s || (s = o("LSIntEnum"))).ofNumber(16));
			return t == null && !c ? (l.endFail("recoveryCodeData null for non-Automatic EB"), (u || (u = n("Promise"))).resolve(o("WAResultOrError").makeError("recoveryCodeData null for non-Automatic EB"))) : b.load().then(function(e) {
				return e.initializeBackup(l, i, t);
			});
		},
		isEbEnabled: function() {
			return v.load().then(function(e) {
				return e.isEbEnabledEbSwitch();
			});
		},
		optOutOfBackup: function() {
			return (u || (u = n("Promise"))).resolve();
		},
		otcAddDevice: function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			var a = o("QPLFlow").startQPLFlow(r("qpl")._(521473756, "2768"), {
				annotations: { bool: {
					isBackendSetupOnStart: o("MAWWaitForBackendSetup").isBackendSetupSuccessful(),
					isEBAddDeviceWithKeys: !1,
					isInWorker: !0,
					isOTC: !0
				} },
				timeoutInMs: r("justknobx")._("2444")
			});
			return R.load().then(function(e) {
				return e.otcAddDevice(babelHelpers.extends({}, t[0], { qplFlow: a }));
			});
		},
		repairEpochs: function() {
			return L.load().then(function(e) {
				return e.EBRepairEpochs();
			});
		},
		repairMembershipHmac: function(t) {
			return E.load().then(function(e) {
				return e.EBRepairMembershipHmac(t);
			});
		},
		revokeVirtualDevice: function(t) {
			var e = t.virtualDeviceId;
			return k.load().then(function(t) {
				return t.revokeVirtualDevice(e);
			});
		},
		syncEpochs: function() {
			return I.load().then(function(e) {
				return e.EBSyncEpochs();
			});
		}
	}, D = T;
	l.default = D;
}), 98);
