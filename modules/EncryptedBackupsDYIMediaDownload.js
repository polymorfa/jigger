__d("EncryptedBackupsDYIMediaDownload", [
	"EBLogger",
	"EncryptedBackupsDYIMediaManager",
	"EncryptedBackupsDYITypes",
	"MAWDbMsg",
	"MAWGetPriorityFromDownloadEntry",
	"Promise",
	"WAHashUtils",
	"WAIsPreviewSupported",
	"WAMediaUtils",
	"WAResultOrError",
	"WAStartMediaDownloadQplFlow",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var r = t.mediaEntry, a = t.mediaOption, i = t.plaintextHash, l = t.protocolMsgId, s = t.sortOrderMs, u = o("EncryptedBackupsDYIMediaManager").dyiMediaManager(), c = o("EBLogger").EBLogger().tags(["labyrinth_web", "labyrinth_dyi"]), d = o("MAWDbMsg").toMsgId(l.chat + "_" + l.externalId + "_m");
			if (d == null) return c.mustfix("Failed to construct the msgId from protocolMsgId for media with plaintext hash: %s", o("WAHashUtils").sanitisePlaintextHash(i)), (e || (e = n("Promise"))).resolve(o("WAResultOrError").makeError("missing-media-entry"));
			o("EncryptedBackupsDYIMediaManager").addMediaEntry(i, d, r), o("EncryptedBackupsDYIMediaManager").addMessage(d, l, s);
			var m = "DYIMediaManager", p = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
				downloadEntry: m,
				msgType: null,
				protocolMsgId: null,
				triggerUIView: null
			});
			c.debug("Enqueuing DYI media download for media with plaintext hash: %s", o("WAHashUtils").sanitisePlaintextHash(i));
			var _ = {
				fullSizePlaintextHash: i,
				mediaDownloadFlow: p,
				priority: o("MAWGetPriorityFromDownloadEntry").getPriorityFromDownloadEntry(m)
			}, f = !1;
			if (a === o("EncryptedBackupsDYITypes").EncryptedBackupsDYIMediaOption.PreviewsOnly) {
				var g = o("WAMediaUtils").decodeMediaEntryData(r), h = o("WAIsPreviewSupported").checkPreviewSupport(g), y = h[0], C = h[1];
				f = y !== o("WAIsPreviewSupported").PjpegPreviewSupport.NO || C !== o("WAIsPreviewSupported").DownloadablePreviewSupport.NO;
			}
			var b = f ? yield u.enqueueDownloadPreview(_) : yield u.enqueueDownloadFullSize(_);
			return b.success ? p.endSuccess() : p.endFail(b.error), b;
		}), u.apply(this, arguments);
	}
	l.downloadDYIMedia = s;
}), 98);
