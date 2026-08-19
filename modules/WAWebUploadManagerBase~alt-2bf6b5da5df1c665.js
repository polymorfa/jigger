__d("WAWebUploadManagerBase", [
	"WAAbortError",
	"WAFilteredCatch",
	"WALogger",
	"WAMemoizeConcurrent",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebAppTracker",
	"WAWebCryptoRandomMediaKey",
	"WAWebFileUtils",
	"WAWebMediaDebugString",
	"WAWebMmsClientErrors",
	"WAWebMmsDownloadUploadCrashLogger",
	"WAWebMmsMediaTypes",
	"WAWebNullFunc",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C = 0;
	function b() {
		return "" + C++;
	}
	function v(e) {
		var t = e.mediaKey, n = e.mediaKeyTimestamp;
		if (t != null && n != null) return {
			mediaKey: t,
			mediaKeyTimestamp: n
		};
		var o = r("WAWebCryptoRandomMediaKey")(), a = o.key, i = o.timestamp;
		return {
			mediaKey: a,
			mediaKeyTimestamp: i
		};
	}
	var S = (function() {
		function t(t) {
			var n = this;
			this.$1 = r("WAMemoizeConcurrent")(function(e) {
				return e.token;
			}, async function(t) {
				var a = t.encFilehash, i = t.type, l = {
					encFilehash: a,
					type: i
				}, d = o("WAWebMediaDebugString").getDebugString(a);
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["uploadManager.checkIfAlreadyUploaded: [", "] start"])), d);
				try {
					var m = await n.deps.mmsClient.checkIfUploadExists(t).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMmsClientErrors").MediaNotFoundError, o("WAWebNullFunc").returnNull));
					return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["uploadManager.checkIfAlreadyUploaded: [", "] success"])), d), m;
				} catch (e) {
					throw r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR ? o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["uploadManager.checkIfAlreadyUploaded: [", "] canceled"])), d) : o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["uploadManager.checkIfAlreadyUploaded: [", "] error"])), d), e;
				}
			}), this.memoizedUpload = r("WAMemoizeConcurrent")(function(e) {
				return e.token;
			}, async function(e) {
				var t, r = e.ciphertextHmac, o = e.encFilehash, a = e.generateThumbnailOnServer, i = e.mediaId, l = e.onFinalize, s = e.onProgress, u = e.onStreamUploadStart, c = e.onUploadAttemptError, d = e.onUploadAttemptSuccess, m = e.onUploadHostFound, p = e.onUploadSuccess, _ = e.signal, f = e.type, g = await n.deps.mmsClient.upload({
					ciphertextHmac: r,
					encFilehash: o,
					type: f,
					signal: _,
					onUploadHostFound: m,
					onUploadAttemptSuccess: d,
					onUploadAttemptError: c,
					onProgress: s,
					byteOffset: (t = e.byteOffset) != null ? t : 0,
					onFinalize: l,
					onStreamUploadStart: u,
					mediaId: i,
					token: e.token,
					generateThumbnailOnServer: a
				});
				return p(), g;
			}), this.getExistingOrUpload = r("WAMemoizeConcurrent")(function(e) {
				return e.token;
			}, async function(e) {
				var t = e.ciphertextHmac, a = e.encFilehash, i = e.generateThumbnailOnServer, l = e.mediaId, s = e.onCheckExistingError, u = e.onCheckExistingSuccess, c = e.onFinalize, f = e.onProgress, g = e.onStreamUploadStart, h = e.onUploadAttemptError, y = e.onUploadAttemptSuccess, C = e.onUploadHostFound, b = e.onUploadSuccess, v = e.signal, S = e.type, R = {
					encFilehash: a,
					type: S
				}, L = o("WAWebMediaDebugString").getDebugString(a);
				o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["uploadManager._getExistingOrUpload: [", "] start"])), L);
				try {
					var E = await n.$1({
						encFilehash: a,
						type: S,
						signal: v,
						mediaId: l,
						token: e.token,
						generateThumbnailOnServer: i
					}).catch(function(e) {
						throw s(e), e;
					}).then(function(r) {
						return (r == null ? void 0 : r.complete) === !0 ? (u(), {
							directPath: r.directPath,
							handle: r.handle,
							url: r.url
						}) : n.memoizedUpload({
							ciphertextHmac: t,
							encFilehash: a,
							type: S,
							signal: v,
							onUploadHostFound: C,
							onUploadAttemptSuccess: y,
							onUploadAttemptError: h,
							onUploadSuccess: b,
							onCheckExistingSuccess: u,
							onCheckExistingError: s,
							onProgress: f,
							onFinalize: c,
							onStreamUploadStart: g,
							byteOffset: r == null ? void 0 : r.resume,
							mediaId: l,
							token: e.token,
							generateThumbnailOnServer: i
						});
					});
					return o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["uploadManager._getExistingOrUpload: [", "] success"])), L), E;
				} catch (e) {
					throw r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR ? o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["uploadManager._getExistingOrUpload: [", "] canceled"])), L) : o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["uploadManager._getExistingOrUpload: [", "] error"])), L), e;
				}
			}), this.deps = t, t.crashLogger.init();
		}
		var n = t.prototype;
		return n.encryptAndUpload = async function(t, n) {
			var e = this, a = t.blob, i = t.forwardedFromWeb, l = t.onFinalize, s = t.onProgress, u = t.signal, c = t.type, d = { type: c };
			o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["uploadManager.encryptAndUpload: start"]))), t.uploadQpl.addPoint("upload_start");
			var m = n.handleArrayBufferCreated, p = n.handleCheckExistingError, _ = n.handleCheckExistingSuccess, C = n.handleEncryptionStart, b = n.handleEncryptionSuccess, S = n.handleStreamUploadStart, L = n.handleUploadAttemptError, E = n.handleUploadAttemptSuccess, k = n.handleUploadError, I = n.handleUploadHostFound, T = n.handleUploadProgress, D = n.handleUploadSuccess, x = n.mediaId, $ = function(t, n) {
				s == null || s(t, n);
				var e = n + t.loaded;
				T(e);
			};
			this.deps.crashLogger.mark(x, o("WAWebMmsDownloadUploadCrashLogger").ProgressType.UPLOAD_ENCRYPTION_STARTED);
			try {
				var P = v(t), N = c === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT && a instanceof Blob ? o("WAWebABProps").getABPropConfigValue("web_streaming_document_encrypt_min_bytes") : 0, M;
				if (N > 0 && a instanceof Blob && a.size >= N) {
					var w = a;
					M = (async function() {
						m(w.size), C(), e.deps.appTracker.start(o("WAWebAppTracker").AppTrackerType.MediaProcessing);
						try {
							return await e.deps.encryptMediaFromBlob({
								type: c,
								blob: w,
								mediaKey: P.mediaKey
							});
						} finally {
							e.deps.appTracker.stop(o("WAWebAppTracker").AppTrackerType.MediaProcessing);
						}
					})();
				} else M = Promise.resolve(a).then(function(t) {
					e.deps.crashLogger.mark(x, o("WAWebMmsDownloadUploadCrashLogger").ProgressType.UPLOAD_BLOB_TO_ARRAY_BUFFER_STARTED, { size: a instanceof Blob ? a.size : a.byteLength });
					var n = t instanceof Blob ? o("WAWebFileUtils").blobToArrayBuffer(t) : t;
					return e.deps.crashLogger.mark(x, o("WAWebMmsDownloadUploadCrashLogger").ProgressType.UPLOAD_BLOB_TO_ARRAY_BUFFER_FINISHED), n;
				}).then(function(t) {
					return m(t.byteLength), C(), e.deps.appTracker.start(o("WAWebAppTracker").AppTrackerType.MediaProcessing), e.deps.encryptMedia({
						type: c,
						plaintext: t,
						mediaKey: P.mediaKey
					}).finally(function() {
						e.deps.appTracker.stop(o("WAWebAppTracker").AppTrackerType.MediaProcessing);
					});
				});
				var A = M.then(function(n) {
					var r, a = n.ciphertextHmac, s = n.firstFrameSidecar, d = n.hash, m = n.sidecar;
					b(), e.deps.crashLogger.mark(x, o("WAWebMmsDownloadUploadCrashLogger").ProgressType.UPLOAD_ENCRYPTION_FINISHED);
					var f = t.mediaKey ? e.getExistingOrUpload : e.memoizedUpload;
					return f({
						ciphertextHmac: a,
						encFilehash: d,
						type: c,
						signal: u,
						onCheckExistingSuccess: _,
						onCheckExistingError: p,
						onUploadHostFound: I,
						onUploadAttemptSuccess: E,
						onUploadAttemptError: L,
						onUploadSuccess: D,
						onProgress: $,
						onFinalize: l,
						onStreamUploadStart: S,
						mediaId: x,
						token: (r = t.token) != null ? r : d
					}).then(function(e) {
						return {
							directPath: i ? R(e.directPath) : e.directPath,
							encFilehash: d,
							mediaKey: P.mediaKey,
							mediaKeyTimestamp: P.mediaKeyTimestamp,
							sidecar: m,
							firstFrameSidecar: s,
							url: e.url,
							handle: e.handle
						};
					});
				}), F = await A;
				return o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["uploadManager.encryptAndUpload: success"]))), this.deps.crashLogger.mark(x, o("WAWebMmsDownloadUploadCrashLogger").ProgressType.UPLOAD_FINISHED), t.uploadQpl.addPoint("upload_end"), t.uploadQpl.endSuccess(), F;
			} catch (e) {
				throw r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR ? (o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["uploadManager.encryptAndUpload: canceled"]))), t.uploadQpl.endFailWithError("upload_canceled", "aborted")) : (o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose(["uploadManager.encryptAndUpload: error"]))), t.uploadQpl.endFailWithError("upload_failed", r("getErrorSafe")(e).message)), this.deps.crashLogger.mark(x, o("WAWebMmsDownloadUploadCrashLogger").ProgressType.UPLOAD_ERROR), k(r("getErrorSafe")(e)), e;
			}
		}, t;
	})();
	function R(e) {
		var t = e.split("?"), n = t[0], r = t[1], a = new URLSearchParams(r), i = o("WATimeUtils").unixTime();
		return a.set("_nc_hot", String(i)), n + "?" + a.toString();
	}
	l.getNextUploadId = b, l.UploadManagerBase = S;
}), 98);
