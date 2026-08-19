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
	"WAUploadMediaQuick",
	"asyncToGeneratorRuntime"
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
		var r = t.createCacheState, a = t.dbCallbacks, i = t.scheduler, l = i != null ? i : o("WAMediaManagerWorkerScheduler").mediaManagerWorkerScheduler(), v = o("WAMediaManagerCache").createAttachmentCache(a.getProtocolMsgIdAndSortOrderMs, a.deleteChunkByPlaintextHash, a.getChunkByPlaintextHash, a.getMediaEntries, a.storeChunkByPlaintextHash, r, a.getChunkWithPreviewFlagByPlaintextHash), S = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = o("WAMediaManagerLogger").createDownloadLogger({
					downloadKind: "fullsize",
					fullSizePlaintextHash: t.fullSizePlaintextHash
				}), r = yield v.getFullsize(t);
				if (n.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])), r.type), r.type === "cache-hit") return r.cache;
				var i = new AbortController(), c = l.run(function() {
					return o("WADownloadFullSizeOnlyTask").startDownloadFullSizeTask({
						abortSignal: i.signal,
						dbCallbacks: a,
						fullSizePlaintextHash: t.fullSizePlaintextHash,
						logger: n,
						mediaDownloadFlow: t.mediaDownloadFlow
					});
				}, {
					name: "media-manager-download-fullsize-only",
					priority: E(t.priority)
				}), d = c.promise;
				return r.setDownloadCache({
					abortController: i,
					fullSizePlaintextHash: t.fullSizePlaintextHash,
					mediaDownloadFlow: t.mediaDownloadFlow,
					scheduledTask: k(c, function(e) {
						return e.fullsizePromise;
					})
				}), d.then(function(e) {
					return e.fullsizePromise;
				}).then(function(e) {
					return $(t.fullSizePlaintextHash, e, r.setDownloadedAttachmentToUploadCache);
				}).catch(function(e) {
					return n.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(e)), o("WAResultOrError").makeError("runtime-error");
				}).finally(function() {
					n.DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose(["end"])));
				});
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})(), R = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = o("WAMediaManagerLogger").createDownloadLogger({
					downloadKind: "preview",
					fullSizePlaintextHash: e.fullSizePlaintextHash
				}), n = yield v.getPreview(e);
				if (t.DEV(c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])), n.type), n.type === "cache-hit") return n.cache;
				var r = new AbortController(), i = l.run(function() {
					return o("WADownloadPreviewOnlyTask").startDownloadPreviewTask({
						abortSignal: r.signal,
						dbCallbacks: a,
						fullSizePlaintextHash: e.fullSizePlaintextHash,
						logger: t,
						mediaDownloadFlow: e.mediaDownloadFlow
					});
				}, {
					name: "media-manager-download-preview-only",
					priority: E(e.priority)
				});
				n.setDownloadCache({
					abortController: r,
					fullSizePlaintextHash: e.fullSizePlaintextHash,
					mediaDownloadFlow: e.mediaDownloadFlow,
					scheduledTask: k(i, function(e) {
						return e.previewPromise;
					})
				});
				var s = i.promise;
				return s.then(function(e) {
					return e.previewPromise;
				}).then(function(e) {
					return P(e, n.setDownloadedAttachmentToUploadCache);
				}).catch(function(e) {
					return t.ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(e)), o("WAResultOrError").makeError("runtime-error");
				}).finally(function() {
					t.DEV(m || (m = babelHelpers.taggedTemplateLiteralLoose(["end"])));
				});
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), L = function(t) {
			var e = o("WAMediaManagerLogger").createDownloadLogger({
				downloadKind: "fullsizeAndPreview",
				fullSizePlaintextHash: t.fullSizePlaintextHash
			}), n = v.getFullsizeAndPreview(t), r = n.then(function(n) {
				var r = n.fullsizeCacheResult, i = n.previewCacheResult;
				if (e.DEV(p || (p = babelHelpers.taggedTemplateLiteralLoose([
					"fullsize: ",
					", preview: ",
					""
				])), r.type, i.type), r.type === "cache-hit" && i.type === "cache-hit") return {
					fullsizePromise: r.cache,
					previewPromise: i.cache
				};
				if (i.type === "cache-hit") {
					var s = S(t);
					return {
						fullsizePromise: s,
						previewPromise: i.cache
					};
				}
				if (r.type === "cache-hit") {
					var u = R(t);
					return {
						fullsizePromise: r.cache,
						previewPromise: u
					};
				}
				r.type, i.type;
				var c = new AbortController(), d = l.run(function() {
					return o("WADownloadFullSizeAndPreviewTask").startDownloadFullSizeAndPreviewTask({
						abortSignal: c.signal,
						dbCallbacks: a,
						fullSizePlaintextHash: t.fullSizePlaintextHash,
						logger: e,
						mediaDownloadFlow: t.mediaDownloadFlow
					});
				}, {
					name: "media-manager-download-fullsize-and-preview",
					priority: E(t.priority)
				});
				r.setDownloadCache({
					abortController: c,
					fullSizePlaintextHash: t.fullSizePlaintextHash,
					mediaDownloadFlow: t.mediaDownloadFlow,
					scheduledTask: k(d, function(e) {
						return e.fullsizePromise;
					})
				}), i.setDownloadCache({
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
						return $(t.fullSizePlaintextHash, e, r.setDownloadedAttachmentToUploadCache);
					}).catch(function(t) {
						return e.ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["fullsizePromise runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(t)), o("WAResultOrError").makeError("runtime-error");
					}).finally(function() {
						e.DEV(f || (f = babelHelpers.taggedTemplateLiteralLoose(["fullsize end"])));
					}),
					previewPromise: m.then(function(e) {
						return e.previewPromise;
					}).then(function(e) {
						return P(e, i.setDownloadedAttachmentToUploadCache);
					}).catch(function(t) {
						return e.ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["previewPromise runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(t)), o("WAResultOrError").makeError("runtime-error");
					}).finally(function() {
						e.DEV(h || (h = babelHelpers.taggedTemplateLiteralLoose(["preview end"])));
					})
				};
			});
			return {
				fullsizePromise: r.then(function(e) {
					return e.fullsizePromise;
				}),
				previewPromise: r.then(function(e) {
					return e.previewPromise;
				})
			};
		}, I = function(t) {
			var e = o("WAMediaManagerLogger").createUploadLogger({
				plaintextHash: t.plaintextHash,
				uploadKind: "fullsize"
			}), n = v.getUploadedAttachment(t);
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
			clearCache: v.clearCache,
			dequeueDownload: v.cancelTask,
			enqueueDownloadFullSize: D("fullsize", S),
			enqueueDownloadFullSizeAndPreview: D("fullsizeAndPreview", L),
			enqueueDownloadPreview: D("preview", R),
			enqueueUploadFullSize: x(I)
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
