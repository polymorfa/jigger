__d("MAWBridgeUpdateDYIStatusV2", [
	"EBLogger",
	"EncryptedBackupdDYIFileSaver",
	"EncryptedBackupsDYIFileUtils",
	"EncryptedBackupsDYITypes",
	"QPLUserFlow",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			o("EncryptedBackupdDYIFileSaver").saveFile(e, t), window.setTimeout(function() {
				r("promiseDone")(n());
			}, 1e3);
		}), s.apply(this, arguments);
	}
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = t.qplEvent, i = t.qplInstanceKeyE2E, l = t.status, s = o("EBLogger").EBLogger().tags(["dyi"]);
			if (l === o("EncryptedBackupsDYITypes").EncryptedBackupsDYIState.Completed) try {
				if (navigator.storage == null) throw s.mustfixThrow("Storage management API is not supported. Please try one of the supported browsers.");
				var u = o("EncryptedBackupsDYIFileUtils").DyiArchiveFilename, c = yield o("EncryptedBackupsDYIFileUtils").getRootFolderHandle(), d = yield o("EncryptedBackupsDYIFileUtils").readFile(c, u);
				yield e(u, d, n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					yield c.removeEntry(u);
				})), s.info("Saving file with filename ", u), a != null && i != null && r("QPLUserFlow").endSuccess(a, { instanceKey: i }), s.info("DYI Complete");
			} catch (e) {
				return s.catching(r("getErrorSafe")(e)).mustfix("Failed to download the DYI archive"), a != null && i != null && r("QPLUserFlow").endFailure(a, r("getErrorSafe")(e).message, { instanceKey: i }), o("EncryptedBackupsDYITypes").EncryptedBackupsDYIState.Failed;
			}
			return l === o("EncryptedBackupsDYITypes").EncryptedBackupsDYIState.Failed && a != null && i != null && r("QPLUserFlow").endFailure(a, "Unknown error", { instanceKey: i }), l;
		}), c.apply(this, arguments);
	}
	l.call = u;
}), 98);
