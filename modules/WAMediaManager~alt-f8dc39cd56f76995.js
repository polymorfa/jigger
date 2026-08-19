__d("WAMediaManager", [
	"$InternalEnum",
	"TaskSchedulerPriority",
	"WADownloadFullSizeAndPreviewTask",
	"WADownloadFullSizeOnlyTask",
	"WADownloadPreviewOnlyTask",
	"WAErrorMessage",
	"WAHashUtils",
	"WAMediaManagerCache",
	"WAMediaManagerLogger",
	"WAMediaManagerTypes",
	"WAMediaManagerWorkerScheduler",
	"WAResultOrError",
	"WAUploadMediaQuick"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S = n("$InternalEnum").Mirrored([
		"CRITICAL",
		"HIGH",
		"MEDIUM",
		"LOW"
	]);
	function R() {
		return {
			fullsizeCache: new Map(),
			previewCache: new Map(),
			uploadCache: new Map()
		};
	}
	function L(t) {
		var n = t.createCacheState, r = t.dbCallbacks, a = t.scheduler, i = a != null ? a : o("WAMediaManagerWorkerScheduler").mediaManagerWorkerScheduler(), l = o("WAMediaManagerCache").createAttachmentCache(r.getProtocolMsgIdAndSortOrderMs, r.deleteChunkByPlaintextHash, r.getChunkByPlaintextHash, r.getMediaEntries, r.storeChunkByPlaintextHash, n, r.getChunkWithPreviewFlagByPlaintextHash), v = async function(n) {
			var t = o("WAMediaManagerLogger").createDownloadLogger({
				downloadKind: "fullsize",
				fullSizePlaintextHash: n.fullSizePlaintextHash
			}), a = await l.getFullsize(n);
			if (t.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])), a.type), a.type === "cache-hit") return a.cache;
			var c = new AbortController(), d = i.run(function() {
				return o("WADownloadFullSizeOnlyTask").startDownloadFullSizeTask({
					abortSignal: c.signal,
					dbCallbacks: r,
					fullSizePlaintextHash: n.fullSizePlaintextHash,
					logger: t,
					mediaDownloadFlow: n.mediaDownloadFlow
				});
			}, {
				name: "media-manager-download-fullsize-only",
				priority: E(n.priority)
			}), m = d.promise;
			return a.setDownloadCache({
				abortController: c,
				fullSizePlaintextHash: n.fullSizePlaintextHash,
				mediaDownloadFlow: n.mediaDownloadFlow,
				scheduledTask: k(d, function(e) {
					return e.fullsizePromise;
				})
			}), m.then(function(e) {
				return e.fullsizePromise;
			}).then(function(e) {
				return $(n.fullSizePlaintextHash, e, a.setDownloadedAttachmentToUploadCache);
			}).catch(function(e) {
				return t.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(e)), o("WAResultOrError").makeError("runtime-error");
			}).finally(function() {
				t.DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose(["end"])));
			});
		}, S = async function(t) {
			var e = o("WAMediaManagerLogger").createDownloadLogger({
				downloadKind: "preview",
				fullSizePlaintextHash: t.fullSizePlaintextHash
			}), n = await l.getPreview(t);
			if (e.DEV(c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])), n.type), n.type === "cache-hit") return n.cache;
			var a = new AbortController(), s = i.run(function() {
				return o("WADownloadPreviewOnlyTask").startDownloadPreviewTask({
					abortSignal: a.signal,
					dbCallbacks: r,
					fullSizePlaintextHash: t.fullSizePlaintextHash,
					logger: e,
					mediaDownloadFlow: t.mediaDownloadFlow
				});
			}, {
				name: "media-manager-download-preview-only",
				priority: E(t.priority)
			});
			n.setDownloadCache({
				abortController: a,
				fullSizePlaintextHash: t.fullSizePlaintextHash,
				mediaDownloadFlow: t.mediaDownloadFlow,
				scheduledTask: k(s, function(e) {
					return e.previewPromise;
				})
			});
			var u = s.promise;
			return u.then(function(e) {
				return e.previewPromise;
			}).then(function(e) {
				return P(e, n.setDownloadedAttachmentToUploadCache);
			}).catch(function(t) {
				return e.ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(t)), o("WAResultOrError").makeError("runtime-error");
			}).finally(function() {
				e.DEV(m || (m = babelHelpers.taggedTemplateLiteralLoose(["end"])));
			});
		}, R = function(t) {
			var e = o("WAMediaManagerLogger").createDownloadLogger({
				downloadKind: "fullsizeAndPreview",
				fullSizePlaintextHash: t.fullSizePlaintextHash
			}), n = l.getFullsizeAndPreview(t), a = n.then(function(n) {
				var a = n.fullsizeCacheResult, l = n.previewCacheResult;
				if (e.DEV(p || (p = babelHelpers.taggedTemplateLiteralLoose([
					"fullsize: ",
					", preview: ",
					""
				])), a.type, l.type), a.type === "cache-hit" && l.type === "cache-hit") return {
					fullsizePromise: a.cache,
					previewPromise: l.cache
				};
				if (l.type === "cache-hit") {
					var s = v(t);
					return {
						fullsizePromise: s,
						previewPromise: l.cache
					};
				}
				if (a.type === "cache-hit") {
					var u = S(t);
					return {
						fullsizePromise: a.cache,
						previewPromise: u
					};
				}
				a.type, l.type;
				var c = new AbortController(), d = i.run(function() {
					return o("WADownloadFullSizeAndPreviewTask").startDownloadFullSizeAndPreviewTask({
						abortSignal: c.signal,
						dbCallbacks: r,
						fullSizePlaintextHash: t.fullSizePlaintextHash,
						logger: e,
						mediaDownloadFlow: t.mediaDownloadFlow
					});
				}, {
					name: "media-manager-download-fullsize-and-preview",
					priority: E(t.priority)
				});
				a.setDownloadCache({
					abortController: c,
					fullSizePlaintextHash: t.fullSizePlaintextHash,
					mediaDownloadFlow: t.mediaDownloadFlow,
					scheduledTask: k(d, function(e) {
						return e.fullsizePromise;
					})
				}), l.setDownloadCache({
					abortController: c,
					fullSizePlaintextHash: t.fullSizePlaintextHash,
					mediaDownloadFlow: t.mediaDownloadFlow,
					scheduledTask: k(d, function(e) {
						return e.previewPromise;
					})
				});
				var m = d.promise;
				return {
					fullsizePromise: m.then(function(e) {
						return e.fullsizePromise;
					}).then(function(e) {
						return $(t.fullSizePlaintextHash, e, a.setDownloadedAttachmentToUploadCache);
					}).catch(function(t) {
						return e.ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["fullsizePromise runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(t)), o("WAResultOrError").makeError("runtime-error");
					}).finally(function() {
						e.DEV(f || (f = babelHelpers.taggedTemplateLiteralLoose(["fullsize end"])));
					}),
					previewPromise: m.then(function(e) {
						return e.previewPromise;
					}).then(function(e) {
						return P(e, l.setDownloadedAttachmentToUploadCache);
					}).catch(function(t) {
						return e.ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["previewPromise runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(t)), o("WAResultOrError").makeError("runtime-error");
					}).finally(function() {
						e.DEV(h || (h = babelHelpers.taggedTemplateLiteralLoose(["preview end"])));
					})
				};
			});
			return {
				fullsizePromise: a.then(function(e) {
					return e.fullsizePromise;
				}),
				previewPromise: a.then(function(e) {
					return e.previewPromise;
				})
			};
		}, L = function(t) {
			var e = o("WAMediaManagerLogger").createUploadLogger({
				plaintextHash: t.plaintextHash,
				uploadKind: "fullsize"
			}), n = l.getUploadedAttachment(t);
			if (e.DEV(y || (y = babelHelpers.taggedTemplateLiteralLoose(["cache result: ", ""])), n.type), t.mediaUploadFlow.addAnnotations({ string: { dedupe_result: n.type } }), n.type === "in-thread-cache-hit") return n.cache;
			var r = o("WAUploadMediaQuick").uploadMediaQuick({
				logger: e,
				mediaUploadFlow: t.mediaUploadFlow,
				plaintext: t.plaintext,
				plaintextHash: t.plaintextHash,
				serverMediaType: t.serverMediaType
			}).catch(function(t) {
				return e.ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(t)), o("WAResultOrError").makeError("runtime-error");
			}).finally(function() {
				e.DEV(b || (b = babelHelpers.taggedTemplateLiteralLoose(["upload end"])));
			});
			return n != null && n.setUploadCache({
				chatJid: t.chatJid,
				plaintextHash: t.plaintextHash,
				scheduledTask: r
			}), r;
		};
		return {
			clearCache: l.clearCache,
			dequeueDownload: l.cancelTask,
			enqueueDownloadFullSize: D("fullsize", v),
			enqueueDownloadFullSizeAndPreview: D("fullsizeAndPreview", R),
			enqueueDownloadPreview: D("preview", S),
			enqueueUploadFullSize: x(L)
		};
	}
	function E(e) {
		return e === S.CRITICAL ? o("TaskSchedulerPriority").BLOCKING_PRIORITY : e === S.HIGH ? o("TaskSchedulerPriority").HIGH_PRIORITY : e === S.MEDIUM ? o("TaskSchedulerPriority").NORMAL_PRIORITY : e === S.LOW ? o("TaskSchedulerPriority").BACKGROUND_PRIORITY : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function k(e, t) {
		return babelHelpers.extends({}, e, { promise: e.promise.then(t) });
	}
	var I = typeof ((v = navigator.storage) == null ? void 0 : v.getDirectory) == "function", T = typeof self.caches == "object";
	function D(e, t) {
		return function(n) {
			var r = n.fullSizePlaintextHash, a = n.mediaDownloadFlow;
			try {
				a.addPoint("enqueue_start", {
					bool: {
						isOPFSSupported: I,
						isWebCacheSupported: T
					},
					string: {
						downloadKind: e,
						sanitisedMediaHash: o("WAHashUtils").sanitisePlaintextHash(r)
					}
				});
				var i = t(n);
				return a.addPoint("enqueue_end"), i;
			} catch (e) {
				throw a.addPoint("enqueue_fail"), e;
			}
		};
	}
	function x(e) {
		return function(t) {
			var n = t.mediaUploadFlow, r = t.plaintextHash;
			try {
				n.addPoint("enqueue_start", { string: { sanitisedMediaHash: o("WAHashUtils").sanitisePlaintextHash(r) } });
				var a = e(t);
				return n.addPoint("enqueue_end"), a;
			} catch (e) {
				throw n.addPoint("enqueue_fail"), e;
			}
		};
	}
	function $(e, t, n) {
		if (!t.success) return t;
		var r = t.value.msgIdAndMediaEntry, a = r[0], i = r[1];
		return n({
			mediaEntry: i,
			msgId: a,
			plaintextHash: e
		}), o("WAMediaManagerTypes").transformInternalMediaDownloadResult(t);
	}
	function P(e, t) {
		if (!e.success) return e;
		var n = e.value.msgIdAndMediaEntry, r = n[0], a = n[1], i = a.downloadableThumbnail;
		return i == null || i.directPath == null || i.fileEncSha256 == null || i.fileSha256 == null || i.mediaKey == null || i.mediaKeyTimestamp == null || i.objectId == null || t({
			mediaEntry: babelHelpers.extends({}, a, {
				directPath: i.directPath,
				downloadableThumbnail: null,
				fileSha256: i.fileSha256,
				mediaKey: i.mediaKey,
				mediaKeyTimestamp: i.mediaKeyTimestamp,
				objectId: i.objectId,
				serverMediaType: "preview",
				size: e.value.validatedResult.validatedPlaintext.byteLength
			}),
			msgId: r,
			plaintextHash: o("WAHashUtils").toPlaintextHash(i.fileSha256)
		}), o("WAMediaManagerTypes").transformInternalMediaDownloadResult(e);
	}
	l.MediaTaskPriority = S, l.createCacheState = R, l.createMediaManager = L, l.toTaskSchedulerPriority = E;
}), 98);
