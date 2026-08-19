__d("WAWebUploadManagerWorkerBridge", [
	"WAAbortError",
	"WAWebAppTracker",
	"WAWebBackendWorkerClient",
	"WAWebCryptoEncryptMedia",
	"WAWebCryptoEncryptMediaFromBlob",
	"WAWebDeserializeBridgedError",
	"WAWebMainThreadQplHandler",
	"WAWebMainThreadUploadManagerHandler",
	"WAWebMmsClient",
	"WAWebMmsDownloadUploadCrashLogger",
	"WAWebUploadManagerBase"
], (function(t, n, r, o, a, i, l) {
	var e = (function(e) {
		function t() {
			return e.call(this, {
				appTracker: o("WAWebAppTracker").AppTracker,
				crashLogger: o("WAWebMmsDownloadUploadCrashLogger").downloadUploadCrashLogger,
				mmsClient: {
					upload: function(t) {
						return r("WAWebMmsClient").upload(t);
					},
					checkIfUploadExists: function(t) {
						return r("WAWebMmsClient").checkIfUploadExists(t);
					}
				},
				encryptMedia: r("WAWebCryptoEncryptMedia"),
				encryptMediaFromBlob: r("WAWebCryptoEncryptMediaFromBlob")
			}) || this;
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.encryptAndUpload = async function(t, n) {
			var e = t.blob, r = await o("WAWebBackendWorkerClient").getBackendWorkerBridge(), a = o("WAWebUploadManagerBase").getNextUploadId();
			if (t.signal.aborted) throw new (o("WAAbortError")).AbortError();
			o("WAWebMainThreadUploadManagerHandler").registerUploadCallbacks(a, n);
			var i = function() {
				r.fireAndForget("media", "abortUpload", { uploadId: a });
			};
			t.signal.addEventListener("abort", i, { once: !0 });
			try {
				var l = await r.sendAndReceive("media", "encryptAndUpload", {
					blob: e,
					type: t.type,
					mediaKey: t.mediaKey,
					mediaKeyTimestamp: t.mediaKeyTimestamp,
					userUploadAttemptCount: t.userUploadAttemptCount,
					forwardedFromWeb: t.forwardedFromWeb,
					uploadOrigin: t.uploadOrigin,
					isViewOnce: t.isViewOnce,
					isHdPhoto: t.isHdPhoto,
					token: t.token,
					uploadId: a,
					serializedUploadQpl: o("WAWebMainThreadQplHandler").serializeQplForBridge(t.uploadQpl)
				});
				if (l.success) return l.value;
				throw o("WAWebDeserializeBridgedError").deserializeBridgedError(l.error);
			} finally {
				t.signal.removeEventListener("abort", i), o("WAWebMainThreadUploadManagerHandler").unregisterUploadCallbacks(a);
			}
		}, t;
	})(o("WAWebUploadManagerBase").UploadManagerBase), s = new e();
	l.default = s;
}), 98);
