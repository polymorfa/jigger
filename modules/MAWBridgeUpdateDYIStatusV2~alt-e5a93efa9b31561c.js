__d("MAWBridgeUpdateDYIStatusV2", [
	"EBLogger",
	"EncryptedBackupdDYIFileSaver",
	"EncryptedBackupsDYIFileUtils",
	"EncryptedBackupsDYITypes",
	"QPLUserFlow",
	"getErrorSafe",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t, n) {
		o("EncryptedBackupdDYIFileSaver").saveFile(e, t), window.setTimeout(function() {
			r("promiseDone")(n());
		}, 1e3);
	}
	async function s(t) {
		var n = t.qplEvent, a = t.qplInstanceKeyE2E, i = t.status, l = o("EBLogger").EBLogger().tags(["dyi"]);
		if (i === o("EncryptedBackupsDYITypes").EncryptedBackupsDYIState.Completed) try {
			if (navigator.storage == null) throw l.mustfixThrow("Storage management API is not supported. Please try one of the supported browsers.");
			var s = o("EncryptedBackupsDYIFileUtils").DyiArchiveFilename, u = await o("EncryptedBackupsDYIFileUtils").getRootFolderHandle(), c = await o("EncryptedBackupsDYIFileUtils").readFile(u, s);
			await e(s, c, async function() {
				await u.removeEntry(s);
			}), l.info("Saving file with filename ", s), n != null && a != null && r("QPLUserFlow").endSuccess(n, { instanceKey: a }), l.info("DYI Complete");
		} catch (e) {
			return l.catching(r("getErrorSafe")(e)).mustfix("Failed to download the DYI archive"), n != null && a != null && r("QPLUserFlow").endFailure(n, r("getErrorSafe")(e).message, { instanceKey: a }), o("EncryptedBackupsDYITypes").EncryptedBackupsDYIState.Failed;
		}
		return i === o("EncryptedBackupsDYITypes").EncryptedBackupsDYIState.Failed && n != null && a != null && r("QPLUserFlow").endFailure(n, "Unknown error", { instanceKey: a }), i;
	}
	l.call = s;
}), 98);
