__d("WAWebUploadManagerWorkerBridgeHandler", [
	"WAWebCryptoEncryptMediaFromBlob",
	"WAWebCryptoEncryptMediaLocal",
	"WAWebDeserializeBridgedError",
	"WAWebMmsClientUsingDependencies",
	"WAWebNoop",
	"WAWebUploadManagerWorkerHandler",
	"WAWebWorkerQplProxy"
], (function(t, n, r, o, a, i, l) {
	var e = ["serializedUploadQpl", "uploadId"];
	function s(t, n, a) {
		var i = new Map();
		async function l(l) {
			var s = l.serializedUploadQpl, u = l.uploadId, d = babelHelpers.objectWithoutPropertiesLoose(l, e), m = new AbortController();
			i.set(u, m);
			var p = c(t, u), _ = o("WAWebWorkerQplProxy").createWorkerQplProxy(s), f = {
				start: function(n) {
					t.fireAndForget("mainthread_appTracker", "start", { type: n });
				},
				stop: function(n) {
					t.fireAndForget("mainthread_appTracker", "stop", { type: n });
				}
			}, g = {
				init: r("WAWebNoop"),
				mark: function(n, r, o) {
					t.fireAndForget("mainthread_crashLogger", "mark", {
						mediaId: n,
						progressType: r,
						metadata: o
					});
				}
			}, h = o("WAWebMmsClientUsingDependencies").createPartialMmsClientUsingDependencies({
				mediaHosts: n,
				networkStatus: a
			}), y = new (o("WAWebUploadManagerWorkerHandler")).UploadManagerWorkerHandler({
				appTracker: f,
				crashLogger: g,
				mmsClient: h,
				encryptMedia: o("WAWebCryptoEncryptMediaLocal").encryptMediaLocal,
				encryptMediaFromBlob: r("WAWebCryptoEncryptMediaFromBlob")
			}), C = babelHelpers.extends({}, d, {
				signal: m.signal,
				uploadQpl: _
			});
			try {
				return await y.encryptAndUpload(C, p);
			} finally {
				i.delete(u);
			}
		}
		function s(e) {
			var t;
			(t = i.get(e)) == null || t.abort();
		}
		return {
			encryptAndUpload: l,
			abortUpload: s
		};
	}
	function u(e) {
		return o("WAWebDeserializeBridgedError").serializeBridgedError(e);
	}
	function c(e, t) {
		return {
			handleEncryptionStart: function() {
				e.fireAndForget("mainthread_uploadmanager", "handleEncryptionStart", { uploadId: t });
			},
			handleEncryptionSuccess: function() {
				e.fireAndForget("mainthread_uploadmanager", "handleEncryptionSuccess", { uploadId: t });
			},
			handleStreamUploadStart: function() {
				e.fireAndForget("mainthread_uploadmanager", "handleStreamUploadStart", { uploadId: t });
			},
			handleArrayBufferCreated: function(r) {
				e.fireAndForget("mainthread_uploadmanager", "handleArrayBufferCreated", {
					uploadId: t,
					byteLength: r
				});
			},
			handleCheckExistingSuccess: function() {
				e.fireAndForget("mainthread_uploadmanager", "handleCheckExistingSuccess", { uploadId: t });
			},
			handleCheckExistingError: function(r) {
				e.fireAndForget("mainthread_uploadmanager", "handleCheckExistingError", {
					uploadId: t,
					error: u(r)
				});
			},
			handleUploadHostFound: function(r) {
				var n = r.failCount, o = r.hostClass, a = r.hostName;
				e.fireAndForget("mainthread_uploadmanager", "handleUploadHostFound", {
					uploadId: t,
					hostName: a,
					hostClass: o,
					failCount: n
				});
			},
			handleUploadAttemptSuccess: function() {
				e.fireAndForget("mainthread_uploadmanager", "handleUploadAttemptSuccess", { uploadId: t });
			},
			handleUploadAttemptError: function(r, o, a, i) {
				e.fireAndForget("mainthread_uploadmanager", "handleUploadAttemptError", {
					uploadId: t,
					error: u(r),
					overallT: o,
					failCount: a,
					retryPhase: i
				});
			},
			handleUploadProgress: function(r) {
				e.fireAndForget("mainthread_uploadmanager", "handleUploadProgress", {
					uploadId: t,
					bytesTransferred: r
				});
			},
			handleUploadSuccess: function() {
				e.fireAndForget("mainthread_uploadmanager", "handleUploadSuccess", { uploadId: t });
			},
			handleUploadError: function(r) {
				e.fireAndForget("mainthread_uploadmanager", "handleUploadError", {
					uploadId: t,
					error: u(r)
				});
			},
			mediaId: 0,
			handleSendMessageStart: r("WAWebNoop")
		};
	}
	l.createEncryptAndUploadHandler = s;
}), 98);
