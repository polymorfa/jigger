__d("MpsMediaManagerV2", [
	"MAWGetThumbnailBlobDataUrlByMediaIdApi",
	"MpsMediaEntryCache",
	"MpsMessageToBridgeWrapper",
	"MpsToBridgeMessageId",
	"WAJids",
	"WAMediaManager",
	"WAMediaUtils",
	"WAResultOrError",
	"WAStanzaUtils",
	"WAValidateMedia",
	"WebMps",
	"WmiChunkApi",
	"WmiMediaService",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = o("MpsToBridgeMessageId").bridgeMsgIdToMps(e), n = t.messageId, r = t.threadId, a = yield o("WebMps").mps().loadMessage({
				config: {
					shouldFetchSupplementals: !1,
					shouldFetchTags: !1,
					strategy: "local-first"
				},
				debug: { purpose: "mps_media_manager" },
				messageId: n,
				threadId: r
			});
			if (a.value) {
				var i = o("MpsMessageToBridgeWrapper").MpsMessageToBridgeWrapper.fromTopLevel(a.value.toplevelProtobuf), l = i.getAuthor();
				if (!o("WAJids").isAuthorSystem(l)) return {
					protocolMsgId: {
						author: l,
						chat: i.getChatJid(),
						externalId: o("WAStanzaUtils").toStanzaId(i.getExternalId())
					},
					sortOrderMs: i.message.timestampMs
				};
			}
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})();
	function s(e) {
		var t = e.mediaEntry, n = e.message, r = o("MpsToBridgeMessageId").mpsToBridgeMsgId(n.threadId, n.messageId);
		return o("WAResultOrError").makeResult(new Map([[r, t]]));
	}
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = o("MpsMediaEntryCache").getEntry(e);
			if (t != null) return s(t);
			var n = yield o("WmiMediaService").mediaService().getMessageReferenceForMediaId(e);
			if (n == null) return o("WAResultOrError").makeError("no-media-by-plaintext-hash");
			var r = yield o("WebMps").mps().loadMessage({
				config: {
					shouldFetchSupplementals: !1,
					shouldFetchTags: !1,
					strategy: "local-only"
				},
				debug: { purpose: "MpsMediaManagerV2-getMediaEntriesWithFallback" },
				messageId: n.messageId,
				threadId: n.threadId
			}), a = r.value;
			a != null && o("MpsMediaEntryCache").hydrateCache(a.toplevelProtobuf);
			var i = o("MpsMediaEntryCache").getEntry(e);
			return i != null ? s(i) : o("WAResultOrError").makeError("no-media-by-plaintext-hash");
		}), c.apply(this, arguments);
	}
	function d(e, t) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n;
			if (e.success || e.error !== "signature-expired") return e;
			var r = yield o("MAWGetThumbnailBlobDataUrlByMediaIdApi").getFullMediaWithPlaintextHash(t);
			if (r == null) return e;
			var a = (n = r.validatedImageInfo) != null ? n : r.validatedVideoInfo, i = a == null ? void 0 : a.jpegThumbnail;
			if (i == null) return e;
			var l = yield o("WAValidateMedia").validateMedia(i, {
				addAnnotations: function() {},
				addPoint: function() {}
			}, "image");
			return l.value == null ? e : o("WAResultOrError").makeResult({
				serverMediaType: "image",
				source: "chunk_store",
				unvalidatedMimeType: o("WAMediaUtils").getMimeTypeFromServerMediaType("image"),
				validatedResult: l.value
			});
		}), m.apply(this, arguments);
	}
	var p = null;
	function _() {
		if (p == null) {
			var t = o("WmiChunkApi").getChunkApi(), r = o("WAMediaManager").createMediaManager({ dbCallbacks: {
				deleteChunkByPlaintextHash: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						yield t.delete([e]);
					});
					function r(t) {
						return e.apply(this, arguments);
					}
					return r;
				})(),
				getChunkByPlaintextHash: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var n = yield t.get(e);
						return n == null ? void 0 : n.blobData;
					});
					function r(t) {
						return e.apply(this, arguments);
					}
					return r;
				})(),
				getChunkWithPreviewFlagByPlaintextHash: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var n = yield t.get(e);
						return (n == null ? void 0 : n.blobData) == null ? null : {
							blobData: n.blobData,
							isProgressivePreview: n.isProgressivePreview
						};
					});
					function r(t) {
						return e.apply(this, arguments);
					}
					return r;
				})(),
				getMediaEntries: u,
				getProtocolMsgIdAndSortOrderMs: e,
				storeChunkByPlaintextHash: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var n = e.blobData, r = e.isProgressivePreview, o = e.mimetype, a = e.plaintextHash;
						yield t.store(a, n, o, r != null ? r : !1);
					});
					function r(t) {
						return e.apply(this, arguments);
					}
					return r;
				})()
			} });
			p = babelHelpers.extends({}, r, {
				enqueueDownloadFullSize: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = yield r.enqueueDownloadFullSize(e);
						return d(t, e.fullSizePlaintextHash);
					});
					function t(t) {
						return e.apply(this, arguments);
					}
					return t;
				})(),
				enqueueDownloadFullSizeAndPreview: function(t) {
					var e = r.enqueueDownloadFullSizeAndPreview(t), n = e.fullsizePromise, o = e.previewPromise;
					return {
						fullsizePromise: n.then(function(e) {
							return d(e, t.fullSizePlaintextHash);
						}),
						previewPromise: o.then(function(e) {
							return d(e, t.fullSizePlaintextHash);
						})
					};
				},
				enqueueDownloadPreview: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = yield r.enqueueDownloadPreview(e);
						return d(t, e.fullSizePlaintextHash);
					});
					function t(t) {
						return e.apply(this, arguments);
					}
					return t;
				})()
			});
		}
		return p;
	}
	function f() {
		p = null;
	}
	l.mpsMediaManager = _, l.reset__TEST_ONLY = f;
}), 98);
