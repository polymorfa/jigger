__d("WAMediaManagerCache", [
	"Promise",
	"WACryptoSha256",
	"WACryptoUtils",
	"WAErrorMessage",
	"WAHashUtils",
	"WAMediaManager",
	"WAMediaManagerGetMostRecentMediaEntry",
	"WAMediaManagerLogger",
	"WAMediaManagerTypes",
	"WAMediaUtils",
	"WAPromiseDelays",
	"WAResultOrError",
	"WATimeUtils",
	"WAValidateMedia",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"mediaKeyTimestamp",
		"objectId",
		"size"
	], s, u, c, d, m, p, _, f, g, h, y;
	function C(e) {
		return e.success ? o("WAResultOrError").makeResult(babelHelpers.extends({}, e.value, { source: "cache" })) : e;
	}
	function b(e) {
		var t;
		if (e == null || !e.success) return null;
		var n = e.value.msgIdAndMediaEntry, r = n[1], o = r.progressiveJpegDetails != null || ((t = r.downloadableThumbnail) == null ? void 0 : t.fileSha256) == null;
		return o ? e : null;
	}
	var v = 1e3 * 30, S = 1e3 * 60 * 60 * 24 * 2;
	function R(e, t, a, i, l, R, k) {
		R === void 0 && (R = o("WAMediaManager").createCacheState);
		var I = R(), T = I.fullsizeCache, D = I.previewCache, x = I.uploadCache, $ = r("gkx")("4811"), P = function(t) {
			var e = t.abortController, a = t.fullSizePlaintextHash, i = t.mediaDownloadFlow, u = t.scheduledTask;
			T.set(a, {
				abortController: e,
				mediaDownloadFlow: i,
				task: u
			}), u.promise.then((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					if (!e.success) {
						T.delete(a);
						return;
					}
					try {
						var t;
						i.addPoint("store_chunk_start"), yield l({
							blobData: e.value.validatedResult.validatedPlaintext,
							isProgressivePreview: $ ? !1 : void 0,
							mimetype: (t = e.value.validatedResult.mimeType) != null ? t : e.value.unvalidatedMimeType,
							plaintextHash: a
						}), i.addPoint("store_chunk_end");
					} catch (e) {
						var n = r("getErrorSafe")(e);
						o("WAMediaManagerLogger").baseLogger.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed to store chunk: ", ""])), n), i.addPoint("store_chunk_failure");
					}
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()).finally(function() {
				o("WAPromiseDelays").delayMs(v).then(function() {
					T.delete(a);
				});
			});
		}, N = function(t) {
			var e = t.abortController, a = t.fullSizePlaintextHash, i = t.mediaDownloadFlow, s = t.scheduledTask;
			D.set(a, {
				abortController: e,
				mediaDownloadFlow: i,
				task: s
			}), s.promise.then((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					if (!e.success) {
						D.delete(a);
						return;
					}
					try {
						var t, n;
						i.addPoint("store_chunk_start");
						var s = e.value.msgIdAndMediaEntry, c = s[1], d = $ ? c.progressiveJpegDetails != null : void 0, m;
						c.progressiveJpegDetails != null ? m = a : ((t = c.downloadableThumbnail) == null ? void 0 : t.fileSha256) != null ? m = o("WAHashUtils").toPlaintextHash(c.downloadableThumbnail.fileSha256) : (i.addPoint("calculate_preview_plaintext_hash"), m = o("WAHashUtils").toPlaintextHash(yield o("WACryptoSha256").sha256(e.value.validatedResult.validatedPlaintext))), yield l({
							blobData: e.value.validatedResult.validatedPlaintext,
							isProgressivePreview: d,
							mimetype: (n = e.value.validatedResult.mimeType) != null ? n : e.value.unvalidatedMimeType,
							plaintextHash: m
						}), i.addPoint("store_chunk_end");
					} catch (e) {
						var p = r("getErrorSafe")(e);
						o("WAMediaManagerLogger").baseLogger.ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to store chunk: ", ""])), p), i.addPoint("store_chunk_failure");
					}
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()).finally(function() {
				o("WAPromiseDelays").delayMs(v).then(function() {
					D.delete(a);
				});
			});
		}, M = function(t) {
			var e = t.chatJid, n = t.plaintextHash, r = t.scheduledTask, a = t.cacheTtlMs, i = a === void 0 ? S : a, l = x.get(n) || new Map();
			l.set(e, r), x.set(n, l), r.then(function(e) {
				var t = e.success;
				return t ? o("WAPromiseDelays").delayMs(i) : void 0;
			}).finally(function() {
				x.delete(n);
			});
		}, w = function(r) {
			var t = r.mediaEntry, a = r.msgId, i = r.plaintextHash;
			e(a).then(function(e) {
				if (e == null) {
					o("WAMediaManagerLogger").baseLogger.WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["missing chatJid, skip setDownloadedAttachmentToUploadCache"])));
					return;
				}
				var r = e.protocolMsgId.chat, a = E(t);
				if (a == null) {
					o("WAMediaManagerLogger").baseLogger.ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["can not covert mediaEntry from download to upload for cache"])));
					return;
				}
				var l = o("WATimeUtils").timeoutFor(a.mediaKeyTimestamp, S / 1e3);
				if (l !== 0) {
					var s = o("WATimeUtils").pastUnixTime(o("WATimeUtils").DAY_SECONDS, a.mediaKeyTimestamp);
					o("WATimeUtils").isInFuture(s) || M({
						cacheTtlMs: l,
						chatJid: r,
						plaintextHash: i,
						scheduledTask: (y || (y = n("Promise"))).resolve(o("WAResultOrError").makeResult(a))
					});
				}
			}).catch(function(e) {
				o("WAMediaManagerLogger").baseLogger.WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["setDownloadedAttachmentToUploadCache getProtocolMsgIdAndSortOrderMs: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(e));
			});
		};
		function A(e, t, n) {
			return F.apply(this, arguments);
		}
		function F() {
			return F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, n, l) {
				l === void 0 && (l = !1), n.addPoint("get_media_from_chunk_store_start");
				var s = l && $, u, c = null;
				if (s && k != null) {
					var d, m, p = yield k(e);
					u = (d = p == null ? void 0 : p.blobData) != null ? d : null, c = (m = p == null ? void 0 : p.isProgressivePreview) != null ? m : null;
				} else u = yield a(e);
				if (n.addPoint("get_media_from_chunk_store_end"), u == null) return n.addPoint("chunk_data_missing"), null;
				if (c === !0) return n.addPoint("chunk_is_progressive_preview"), null;
				var _ = yield o("WAValidateMedia").validateMedia(u, n);
				if (!_.success) {
					n.addPoint("chunk_data_invalid");
					try {
						n.addPoint("delete_chunk_start"), yield t(e), n.addPoint("delete_chunk_end");
					} catch (e) {
						var f = r("getErrorSafe")(e);
						o("WAMediaManagerLogger").baseLogger.ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Failed to delete invalid chunk: ", ""])), f), n.addPoint("delete_chunk_fail");
					}
					return null;
				}
				var y = yield o("WAMediaManagerGetMostRecentMediaEntry").getMostRecentMediaEntry({
					fullSizePlaintextHash: e,
					getMediaEntries: i,
					mediaDownloadFlow: n
				});
				if (!y.success) return null;
				var C = y.value, b = C.msgIdOfRecentMediaEntry, v = C.recentMediaEntry;
				if (l && $ && v.progressiveJpegDetails != null && !o("WACryptoUtils").arrayBuffersEqual(yield o("WACryptoSha256").sha256(u), v.fileSha256)) {
					n.addPoint("chunk_fullsize_hash_mismatch");
					try {
						n.addPoint("delete_chunk_start"), yield t(e), n.addPoint("delete_chunk_end");
					} catch (e) {
						var S = r("getErrorSafe")(e);
						o("WAMediaManagerLogger").baseLogger.ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["Failed to delete truncated-preview chunk: ", ""])), S), n.addPoint("delete_chunk_fail");
					}
					return null;
				}
				var R = _.value;
				return o("WAResultOrError").makeResult({
					msgIdAndMediaEntry: [b, v],
					serverMediaType: v.serverMediaType,
					source: "chunk_store",
					unvalidatedMimeType: o("WAMediaUtils").getMimeTypeFromServerMediaType(v.serverMediaType),
					validatedResult: R
				});
			}), F.apply(this, arguments);
		}
		function O(e, t, r, a) {
			var i = (y || (y = n("Promise"))).resolve(a);
			return e.set(t, {
				abortController: new AbortController(),
				mediaDownloadFlow: r,
				task: {
					cancel: function() {
						return !1;
					},
					promise: i,
					promote: function() {
						return !1;
					}
				}
			}), self.setTimeout(function() {
				e.delete(t);
			}, v), {
				cache: i.then(o("WAMediaManagerTypes").transformInternalMediaDownloadResult).then(C),
				type: "cache-hit"
			};
		}
		return {
			cancelTask: function(t) {
				var e = o("WAMediaManagerLogger").baseLogger.TAGS(["hash:" + o("WAHashUtils").sanitisePlaintextHash(t), "cancelTask"]);
				e.LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["start"])));
				var n = [T, D];
				for (var r of n) {
					var a = r.get(t);
					if (a != null) {
						var i = a.task.cancel();
						a.mediaDownloadFlow.addPoint("cancel_download_triggered"), i === !1 ? (a.abortController.abort(), a.mediaDownloadFlow.addPoint("http_abort_cancel"), e.LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["http abort cancel"])))) : (a.mediaDownloadFlow.addPoint("worker_task_cancel_cancel"), e.LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["worker task cancel"])))), r.delete(t);
					}
				}
			},
			clearCache: function() {
				D.clear(), T.clear(), x.clear();
			},
			getFullsize: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t = T.get(e.fullSizePlaintextHash);
					if (t != null) return L(e.mediaDownloadFlow, "hit", "fullsize"), t.task.promote(o("WAMediaManager").toTaskSchedulerPriority(e.priority)), {
						cache: t.task.promise.then(o("WAMediaManagerTypes").transformInternalMediaDownloadResult).then(C),
						type: "cache-hit"
					};
					var n = yield A(e.fullSizePlaintextHash, e.mediaDownloadFlow, !0);
					return n != null ? (L(e.mediaDownloadFlow, "hit", "fullsize"), O(T, e.fullSizePlaintextHash, e.mediaDownloadFlow, n)) : (L(e.mediaDownloadFlow, "miss", "fullsize"), {
						setDownloadCache: P,
						setDownloadedAttachmentToUploadCache: w,
						type: "cache-miss"
					});
				});
				function t(t) {
					return e.apply(this, arguments);
				}
				return t;
			})(),
			getFullsizeAndPreview: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t = o("WAMediaManager").toTaskSchedulerPriority(e.priority), n = T.get(e.fullSizePlaintextHash), r = D.get(e.fullSizePlaintextHash);
					if (n != null && r != null) return L(e.mediaDownloadFlow, "hit", "fullsize-and-preview"), n.task.promote(t), r.task.promote(t), {
						fullsizeCacheResult: {
							cache: n.task.promise.then(o("WAMediaManagerTypes").transformInternalMediaDownloadResult).then(C),
							type: "cache-hit"
						},
						previewCacheResult: {
							cache: r.task.promise.then(o("WAMediaManagerTypes").transformInternalMediaDownloadResult).then(C),
							type: "cache-hit"
						}
					};
					if (n != null) return L(e.mediaDownloadFlow, "hit", "fullsize"), n.task.promote(t), {
						fullsizeCacheResult: {
							cache: n.task.promise.then(o("WAMediaManagerTypes").transformInternalMediaDownloadResult).then(C),
							type: "cache-hit"
						},
						previewCacheResult: {
							setDownloadCache: N,
							setDownloadedAttachmentToUploadCache: w,
							type: "cache-miss"
						}
					};
					if (r != null) {
						L(e.mediaDownloadFlow, "hit", "preview"), r.task.promote(t);
						var a = yield A(e.fullSizePlaintextHash, e.mediaDownloadFlow, !0);
						return {
							fullsizeCacheResult: a != null ? O(T, e.fullSizePlaintextHash, e.mediaDownloadFlow, a) : {
								setDownloadCache: P,
								setDownloadedAttachmentToUploadCache: w,
								type: "cache-miss"
							},
							previewCacheResult: {
								cache: r.task.promise.then(o("WAMediaManagerTypes").transformInternalMediaDownloadResult).then(C),
								type: "cache-hit"
							}
						};
					}
					var i = yield A(e.fullSizePlaintextHash, e.mediaDownloadFlow, !0), l = b(i);
					return i != null && l != null ? (L(e.mediaDownloadFlow, "hit", "fullsize-and-preview"), {
						fullsizeCacheResult: O(T, e.fullSizePlaintextHash, e.mediaDownloadFlow, i),
						previewCacheResult: O(D, e.fullSizePlaintextHash, e.mediaDownloadFlow, l)
					}) : i != null ? (L(e.mediaDownloadFlow, "hit", "fullsize"), {
						fullsizeCacheResult: O(T, e.fullSizePlaintextHash, e.mediaDownloadFlow, i),
						previewCacheResult: {
							setDownloadCache: N,
							setDownloadedAttachmentToUploadCache: w,
							type: "cache-miss"
						}
					}) : l != null ? (L(e.mediaDownloadFlow, "hit", "preview"), {
						fullsizeCacheResult: {
							setDownloadCache: P,
							setDownloadedAttachmentToUploadCache: w,
							type: "cache-miss"
						},
						previewCacheResult: O(D, e.fullSizePlaintextHash, e.mediaDownloadFlow, l)
					}) : (L(e.mediaDownloadFlow, "miss", "fullsize-and-preview"), {
						fullsizeCacheResult: {
							setDownloadCache: P,
							setDownloadedAttachmentToUploadCache: w,
							type: "cache-miss"
						},
						previewCacheResult: {
							setDownloadCache: N,
							setDownloadedAttachmentToUploadCache: w,
							type: "cache-miss"
						}
					});
				});
				function t(t) {
					return e.apply(this, arguments);
				}
				return t;
			})(),
			getPreview: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t = D.get(e.fullSizePlaintextHash);
					if (t != null) return L(e.mediaDownloadFlow, "hit", "preview"), t.task.promote(o("WAMediaManager").toTaskSchedulerPriority(e.priority)), {
						cache: t.task.promise.then(o("WAMediaManagerTypes").transformInternalMediaDownloadResult).then(C),
						type: "cache-hit"
					};
					var n = yield A(e.fullSizePlaintextHash, e.mediaDownloadFlow), r = b(n);
					return r != null ? (L(e.mediaDownloadFlow, "hit", "preview"), O(D, e.fullSizePlaintextHash, e.mediaDownloadFlow, r)) : (L(e.mediaDownloadFlow, "miss", "preview"), {
						setDownloadCache: N,
						setDownloadedAttachmentToUploadCache: w,
						type: "cache-miss"
					});
				});
				function t(t) {
					return e.apply(this, arguments);
				}
				return t;
			})(),
			getUploadedAttachment: function(t) {
				var e = x.get(t.plaintextHash);
				if (e == null) return {
					setUploadCache: M,
					type: "cache-miss-no-plaintext-hash"
				};
				var n = e.get(t.chatJid);
				return n == null ? {
					setUploadCache: M,
					type: "cache-miss-no-thread"
				} : {
					cache: n,
					type: "in-thread-cache-hit"
				};
			}
		};
	}
	function L(e, t, n) {
		e.addAnnotations({ string: {
			media_manager_cache_result: t,
			media_manager_cache_type: n
		} });
	}
	function E(t) {
		var n = t.mediaKeyTimestamp, r = t.objectId, o = t.size, a = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return n == null || r == null || o == null ? null : babelHelpers.extends({}, a, {
			mediaKeyTimestamp: n,
			objectId: r,
			size: o
		});
	}
	l.DOWNLOAD_TASK_CACHE_TTL_MS = v, l.UPLOAD_TASK_CACHE_TTL_MS = S, l.createAttachmentCache = R;
}), 98);
