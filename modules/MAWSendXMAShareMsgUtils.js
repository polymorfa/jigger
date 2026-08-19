__d("MAWSendXMAShareMsgUtils", [
	"MAWBridgeMsg",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWFrontendMediaUtils",
	"MAWGetDownloadableThumbnailForMediaApi",
	"MAWHandleXmaTransactionUtil",
	"MAWIndexedDb",
	"MAWMediaManagementTxns",
	"MAWMediaUtils",
	"MAWMessageSendsCommon",
	"MAWMsgType",
	"MAWTransactionMode",
	"MAWUploadAndHandleMedia",
	"MAWXMAManagementTxns",
	"MAWXMAUtils",
	"Promise",
	"WABlobToArrayBuffer",
	"WAJids",
	"WAStartMediaUploadQplFlow",
	"asyncToGeneratorRuntime",
	"validateMAWMediaAndComposeEntryForProtoMsg"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWMessageSendsCommon").messageSendLogger.tags(["XMAShare"]);
	function u(e, t, n, r, o, a) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a, i) {
			var l = i.get(e), s = l == null ? void 0 : l.optimisticUploadPromise;
			if (s != null) return s;
			var u = o("WAStartMediaUploadQplFlow").startMediaUploadQplFlow({
				chatJid: t,
				fileSize: a.file.size,
				serverMediaType: r,
				uploadEntry: "sendXMAShareMsg"
			});
			return o("MAWUploadAndHandleMedia").uploadAndHandleMedia({
				chatJid: t,
				dbCallbacks: { getDownloadableThumbnailForMedia: o("MAWGetDownloadableThumbnailForMediaApi").getDownloadableThumbnailForMedia },
				filename: void 0,
				hash: e,
				mediaTypeDetails: {
					mediaType: r,
					type: "regular"
				},
				plaintext: yield o("WABlobToArrayBuffer").blobToArrayBuffer(a.file),
				protocolMsgId: n,
				serverMediaType: r,
				size: a.file.size,
				uploadMediaMetric: u
			}).catch(function(e) {
				throw u.endFail("xma_upload_unknown_failure", { string: { errorDescription: e.toString() } }), e;
			});
		}), c.apply(this, arguments);
	}
	function d(t) {
		var r = t.chatJid, a = t.favicon, i = t.header, l = t.optimisticUploadManager, s = t.preview, c = t.protocolMsgId, d = [
			s,
			a,
			i
		].filter(Boolean), m = d.map(function(e) {
			var t = e.dbMedia, n = e.file, a = o("MAWMediaUtils").getServerMediaTypeFromMediaType(t.mediaType, "xma-media");
			return u(t.plaintextHash, r, c, a, n, l).then(function(e) {
				return {
					media: t,
					uploadResult: e
				};
			});
		});
		return (e || (e = n("Promise"))).all(m);
	}
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var r = t.chatJid, a = t.favicon, i = t.header, l = t.optimisticUploadManager, s = t.preview, c = t.protocolMsgId, d = yield (e || (e = n("Promise"))).all([
				f(s),
				f(a),
				f(i)
			]), m = d[0], p = d[1], _ = d[2];
			return {
				favicon: p,
				header: _,
				preview: m
			};
			function f(t) {
				if (t == null) return (e || (e = n("Promise"))).resolve(null);
				var a = t.file, i = t.mediaType, s = t.plaintextHash, d = o("MAWMediaUtils").getServerMediaTypeFromMediaType(i, "xma-media");
				return u(s, r, c, d, a, l).then(function(e) {
					return {
						plaintextHash: s,
						uploadResult: e
					};
				});
			}
		}), p.apply(this, arguments);
	}
	function _(e, t, n, r, o, a, i, l, s, u, c) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, o, a, i, l, s, u, c, d, m) {
			var p = yield (e || (e = n("Promise"))).all([
				h(t, m, "preview"),
				h(r, m, "header"),
				h(o, m, "favicon")
			]), _ = p[0], f = p[1], g = p[2];
			return C(a, _, f, g, i, l, s, u, c, d);
		}), f.apply(this, arguments);
	}
	function g(e) {
		var t = e.associatedMsgId, n = e.chatJid, r = e.db, o = e.faviconMediaEntry, a = e.faviconMetadata, i = e.headerMediaEntry, l = e.headerMetadata, s = e.msgId, u = e.offlineAttachmentId, c = e.previewMediaEntry, d = e.previewMetadata, m = e.targetType, p = e.xmaArgs, _ = e.xmaMsgProtocolMsgId;
		return b({
			associatedMsgId: t,
			chatJid: n,
			db: r,
			faviconMediaEntry: o,
			faviconMetadata: a,
			headerMediaEntry: i,
			headerMetadata: l,
			msgId: s,
			offlineAttachmentId: u,
			previewMediaEntry: c,
			previewMetadata: d,
			targetType: m,
			xmaArgs: p,
			xmaMsgProtocolMsgId: _
		});
	}
	function h(e, t, n) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			if (e == null) return null;
			var r = e.file, a = o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(r.type, !0), i = a.mediaType, l = a.serverMediaType, u = yield o("MAWMediaUtils").genBlobHashes(r), c = u[0], d = u[1];
			if (i !== "Image") throw t == null || t("xma_media_type_not_image", { string: {
				xma_get_media_metadata_source: n,
				xma_media_type: i
			} }), s.mustfixThrow("Expected Image when sending XMA share");
			var m = yield o("WABlobToArrayBuffer").blobToArrayBuffer(r);
			return {
				blobArrayBuffer: m,
				file: r,
				hashedPlaintextHash: d,
				mediaInfo: {
					validatedAudioInfo: null,
					validatedDocumentFileInfo: null,
					validatedImageInfo: {
						height: e.height,
						width: e.width
					},
					validatedVideoInfo: null
				},
				mediaType: i,
				plaintextHash: c,
				serverMediaType: l
			};
		}), y.apply(this, arguments);
	}
	function C(e, t, n, r, a, i, l, s, u, c) {
		var d;
		return o("MAWIndexedDb").makeMsgrTransactor({
			chunk: (d = o("MAWTransactionMode")).READWRITE,
			media: d.READWRITE,
			mediaBackup: d.READWRITE,
			messages: d.READWRITE,
			unrenderedMessages: d.READWRITE,
			xma: d.READWRITE
		}, "saveXMAMediaAndMetadata", function(o) {
			return function() {
				return b({
					associatedMsgId: i,
					chatJid: u,
					db: o,
					faviconMetadata: r,
					headerMetadata: n,
					msgId: e,
					offlineAttachmentId: c,
					previewMetadata: t,
					targetType: a,
					xmaArgs: s,
					xmaMsgProtocolMsgId: l
				});
			};
		})();
	}
	function b(e) {
		var t = e.associatedMsgId, n = e.chatJid, r = e.db, a = e.faviconMediaEntry, i = e.faviconMetadata, l = e.headerMediaEntry, s = e.headerMetadata, u = e.msgId, c = e.offlineAttachmentId, d = e.previewMediaEntry, m = e.previewMetadata, p = e.targetType, _ = e.xmaArgs, f = e.xmaMsgProtocolMsgId, g = new Map();
		if (m != null && g.set(m.plaintextHash, o("MAWMediaManagementTxns").attachHashAndSaveMedia(r, f, m.blobArrayBuffer, m.plaintextHash, void 0, void 0, m.mediaType, m.mediaInfo, m.file, !0, void 0, d)), s != null) {
			var h = g.get(s.plaintextHash);
			h == null && g.set(s.plaintextHash, o("MAWMediaManagementTxns").attachHashAndSaveMedia(r, f, s.blobArrayBuffer, s.plaintextHash, void 0, void 0, s.mediaType, s.mediaInfo, s.file, !0, void 0, l));
		}
		if (i != null) {
			var y = g.get(i.plaintextHash);
			y == null && g.set(i.plaintextHash, o("MAWMediaManagementTxns").attachHashAndSaveMedia(r, f, i.blobArrayBuffer, i.plaintextHash, void 0, void 0, i.mediaType, i.mediaInfo, i.file, !0, void 0, a));
		}
		var C = Array.from(g.values());
		return o("MAWDexieTable").dexieAll([o("MAWDbMsgTxns").maybeGetMsg(r, t), o("MAWDexieTable").dexieAll(C)]).then(function(e) {
			var a = e[0], l = e[1], d = l.reduce(function(e, t) {
				return e.set(t.plaintextHash, t);
			}, new Map()), g = m != null ? d.get(m.plaintextHash) : void 0, h = s != null ? d.get(s.plaintextHash) : void 0, y = i != null ? d.get(i.plaintextHash) : void 0, C = o("MAWDexieTable").dexieResolve();
			return o("MAWXMAManagementTxns").saveXMA(r, g == null ? void 0 : g.mediaId, h == null ? void 0 : h.mediaId, y == null ? void 0 : y.mediaId, p, u, t, f, _, c, g == null ? void 0 : g.plaintextHash, h == null ? void 0 : h.plaintextHash, y == null ? void 0 : y.plaintextHash).then(function(e) {
				return o("MAWXMAUtils").isXMAStoryReply(p) && a != null ? C = v(r, n, e, g, a) : C = o("MAWHandleXmaTransactionUtil").checkMediaChunkAndHandleXmaAfterTransaction(r, e, g), C.then(function() {
					return {
						dbXMA: e,
						faviconDbMedia: y,
						headerDbMedia: h,
						previewDbMedia: g
					};
				});
			});
		});
	}
	function v(e, t, n, r, a) {
		var i = o("WAJids").interpretAsUserJid(t);
		if (i == null) throw s.mustfixThrow("this is a flow check, participant jid can not be null");
		var l = n.defaultCTA, u = l == null ? void 0 : l.nativeUrl, c = {
			author: i,
			expirationTs: n.targetExpiringAtSec,
			externalId: n.externalId,
			mediaId: r == null ? void 0 : r.mediaId,
			plaintextHash: r == null ? void 0 : r.plaintextHash,
			sourceId: u,
			ts: a.ts,
			type: o("MAWMsgType").MSG_TYPE.XMA,
			xmaMessageType: n.targetType
		}, d = {
			content: c,
			remoteJid: t
		};
		if (a.type !== o("MAWMsgType").MSG_TYPE.TEXT) throw s.mustfixThrow("flow check, this message type is only in text type");
		var m = babelHelpers.extends({}, a, { quote: d });
		return e.messages.put(m).then(function() {
			o("MAWIndexedDb").afterTransaction({
				tag: "MsgUpdated",
				value: o("MAWBridgeMsg").createBridgeMsg(m)
			});
		});
	}
	function S(e, t) {
		return e == null || t == null ? null : {
			fileSize: e.file.size,
			mediaEntry: o("validateMAWMediaAndComposeEntryForProtoMsg").validateMediaEntry(e.plaintextHash, t),
			mediaInfo: e.mediaInfo,
			mediaType: e.mediaType
		};
	}
	l.uploadXMAMediasLegacy = d, l.uploadXMAMediasForQuickSend = m, l.saveXMAContentLegacy = _, l.saveXMAContent = g, l.getMediaMetadata = h, l.getXMAMediaMetadataForSending = S;
}), 98);
