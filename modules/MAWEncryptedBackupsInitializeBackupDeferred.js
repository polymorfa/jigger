__d("MAWEncryptedBackupsInitializeBackupDeferred", [
	"EBSMAPI",
	"I64",
	"MWChatEncryptedBackupsLogging",
	"MWChatEncryptedBackupsQPLEvents",
	"QPLUserFlow",
	"getErrorSafe",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		var n = t.isAutoEBFlow, a = n === void 0 ? !1 : n, i = t.onBackupCreationSuccess, l = t.onFailure, s = t.onStart, u = t.qplEventName, c = u === void 0 ? o("MWChatEncryptedBackupsQPLEvents").backupSetupQplEvent : u, d = t.instanceKey, m = t.virtualDeviceType, p = t.virtualDeviceId;
		s == null || s(), a ? r("QPLUserFlow").addPoint(o("MWChatEncryptedBackupsQPLEvents").backupSetupQplEvent, "AUTO_EB_CREATION_START") : r("QPLUserFlow").addPoint(c, "SETUP_INITIALIZE_BACKUP_SPROC_START", { instanceKey: d }), p != null && r("QPLUserFlow").addAnnotations(c, {
			int: { virtualDeviceType: (e || (e = o("I64"))).to_int32(m) },
			string: { virtualDeviceId: p }
		}), r("promiseDone")(r("EBSMAPI").initializeBackup({
			virtualDeviceId: p,
			virtualDeviceType: m
		}), function(t) {
			t.success ? (a ? (r("QPLUserFlow").addPoint(o("MWChatEncryptedBackupsQPLEvents").backupSetupQplEvent, "AUTO_EB_CREATION_SUCCESS"), o("MWChatEncryptedBackupsLogging").endSuccess({
				annotations: { string: { setup_type: "auto_eb" } },
				event: o("MWChatEncryptedBackupsQPLEvents").backupSetupQplEvent,
				instanceKey: d
			})) : (r("QPLUserFlow").addPoint(c, "SETUP_INITIALIZE_BACKUP_SPROC_END", { instanceKey: d }), r("QPLUserFlow").addPoint(c, "SETUP_INITIALIZE_BACKUP_END", { instanceKey: d })), i == null || i()) : (r("QPLUserFlow").markError(c, "SETUP_INITIALIZE_BACKUP_SPROC_FAILURE_RESOLVE", { instanceKey: d }), r("QPLUserFlow").addAnnotations(c, {
				int: { virtualDeviceType: (e || (e = o("I64"))).to_int32(m) },
				string: { resolve_error_reason: t.error }
			}, { instanceKey: d }), a && (r("QPLUserFlow").addPoint(o("MWChatEncryptedBackupsQPLEvents").backupSetupQplEvent, "AUTO_EB_CREATION_FAIL"), o("MWChatEncryptedBackupsLogging").endFailure({
				annotations: { string: {
					errorReason: t.error,
					setup_type: "auto_eb"
				} },
				errorName: t.error,
				event: o("MWChatEncryptedBackupsQPLEvents").backupSetupQplEvent,
				instanceKey: d
			})), l());
		}, function(t) {
			r("QPLUserFlow").markError(c, "SETUP_INITIALIZE_BACKUP_SPROC_FAILURE_REJECT", { instanceKey: d });
			var n = r("getErrorSafe")(t);
			r("QPLUserFlow").addAnnotations(c, {
				int: { virtualDeviceType: (e || (e = o("I64"))).to_int32(m) },
				string: { reject_error_reason: n.message }
			}, { instanceKey: d }), a && (r("QPLUserFlow").addPoint(o("MWChatEncryptedBackupsQPLEvents").backupSetupQplEvent, "AUTO_EB_CREATION_FAIL"), o("MWChatEncryptedBackupsLogging").endFailure({
				annotations: { string: {
					errorReason: n.message,
					setup_type: "auto_eb"
				} },
				errorName: n.name,
				event: o("MWChatEncryptedBackupsQPLEvents").backupSetupQplEvent,
				instanceKey: d
			})), l();
		});
	}
	l.initializeBackupDeferred = s;
}), 98);
