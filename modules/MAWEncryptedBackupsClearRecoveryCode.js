__d("MAWEncryptedBackupsClearRecoveryCode", ["Promise", "ReQL"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		return (e || (e = n("Promise"))).all([o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.tables.secure_recovery_code_data)), o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.tables.secure_encrypted_backups_recovery_code_status))]).then(function(r) {
			var o = r[0], a = r[1];
			if (o != null || a != null) return t.runInTransaction(function(t) {
				return (e || (e = n("Promise"))).all([(o == null ? void 0 : o.taskId) != null ? t.secure_recovery_code_data.delete(o.taskId) : (e || (e = n("Promise"))).resolve(), (a == null ? void 0 : a.pk) != null ? t.secure_encrypted_backups_recovery_code_status.delete(a.pk) : (e || (e = n("Promise"))).resolve()]);
			}, "readwrite", void 0, void 0, i.id + ":27");
		});
	}
	l.encryptedBackupsClearRecoveryCode = s;
}), 98);
