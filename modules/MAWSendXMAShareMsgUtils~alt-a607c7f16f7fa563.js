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
	"WABlobToArrayBuffer",
	"WAJids",
	"WAStartMediaUploadQplFlow",
	"validateMAWMediaAndComposeEntryForProtoMsg"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWMessageSendsCommon").messageSendLogger.tags(["XMAShare"]);
	async function s(e, t, n, r, a, i) {
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
			plaintext: await o("WABlobToArrayBuffer").blobToArrayBuffer(a.file),
			protocolMsgId: n,
			serverMediaType: r,
			size: a.file.size,
			uploadMediaMetric: u
		}).catch(function(e) {
			throw u.endFail("xma_upload_unknown_failure", { string: { errorDescription: e.toString() } }), e;
		});
	}
	function u(e) {
		var t = e.chatJid, n = e.favicon, r = e.header, a = e.optimisticUploadManager, i = e.preview, l = e.protocolMsgId, u = [
			i,
			n,
			r
		].filter(Boolean), c = u.map(function(e) {
			var n = e.dbMedia, r = e.file, i = o("MAWMediaUtils").getServerMediaTypeFromMediaType(n.mediaType, "xma-media");
			return s(n.plaintextHash, t, l, i, r, a).then(function(e) {
				return {
					media: n,
					uploadResult: e
				};
			});
		});
		return Promise.all(c);
	}
	async function c(e) {
		var t = e.chatJid, n = e.favicon, r = e.header, a = e.optimisticUploadManager, i = e.preview, l = e.protocolMsgId, u = await Promise.all([
			p(i),
			p(n),
			p(r)
		]), c = u[0], d = u[1], m = u[2];
		return {
			favicon: d,
			header: m,
			preview: c
		};
		function p(e) {
			if (e == null) return Promise.resolve(null);
			var n = e.file, r = e.mediaType, i = e.plaintextHash, u = o("MAWMediaUtils").getServerMediaTypeFromMediaType(r, "xma-media");
			return s(i, t, l, u, n, a).then(function(e) {
				return {
					plaintextHash: i,
					uploadResult: e
				};
			});
		}
	}
	async function d(e, t, n, r, o, a, i, l, s, u, c) {
		var d = await Promise.all([
			p(e, c, "preview"),
			p(t, c, "header"),
			p(n, c, "favicon")
		]), m = d[0], f = d[1], g = d[2];
		return _(r, m, f, g, o, a, i, l, s, u);
	}
	function m(e) {
		var t = e.associatedMsgId, n = e.chatJid, r = e.db, o = e.faviconMediaEntry, a = e.faviconMetadata, i = e.headerMediaEntry, l = e.headerMetadata, s = e.msgId, u = e.offlineAttachmentId, c = e.previewMediaEntry, d = e.previewMetadata, m = e.targetType, p = e.xmaArgs, _ = e.xmaMsgProtocolMsgId;
		return f({
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
	async function p(t, n, r) {
		if (t == null) return null;
		var a = t.file, i = o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(a.type, !0), l = i.mediaType, s = i.serverMediaType, u = await o("MAWMediaUtils").genBlobHashes(a), c = u[0], d = u[1];
		if (l !== "Image") throw n == null || n("xma_media_type_not_image", { string: {
			xma_get_media_metadata_source: r,
			xma_media_type: l
		} }), e.mustfixThrow("Expected Image when sending XMA share");
		var m = await o("WABlobToArrayBuffer").blobToArrayBuffer(a);
		return {
			blobArrayBuffer: m,
			file: a,
			hashedPlaintextHash: d,
			mediaInfo: {
				validatedAudioInfo: null,
				validatedDocumentFileInfo: null,
				validatedImageInfo: {
					height: t.height,
					width: t.width
				},
				validatedVideoInfo: null
			},
			mediaType: l,
			plaintextHash: c,
			serverMediaType: s
		};
	}
	function _(e, t, n, r, a, i, l, s, u, c) {
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
				return f({
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
	function f(e) {
		var t = e.associatedMsgId, n = e.chatJid, r = e.db, a = e.faviconMediaEntry, i = e.faviconMetadata, l = e.headerMediaEntry, s = e.headerMetadata, u = e.msgId, c = e.offlineAttachmentId, d = e.previewMediaEntry, m = e.previewMetadata, p = e.targetType, _ = e.xmaArgs, f = e.xmaMsgProtocolMsgId, h = new Map();
		if (m != null && h.set(m.plaintextHash, o("MAWMediaManagementTxns").attachHashAndSaveMedia(r, f, m.blobArrayBuffer, m.plaintextHash, void 0, void 0, m.mediaType, m.mediaInfo, m.file, !0, void 0, d)), s != null) {
			var y = h.get(s.plaintextHash);
			y == null && h.set(s.plaintextHash, o("MAWMediaManagementTxns").attachHashAndSaveMedia(r, f, s.blobArrayBuffer, s.plaintextHash, void 0, void 0, s.mediaType, s.mediaInfo, s.file, !0, void 0, l));
		}
		if (i != null) {
			var C = h.get(i.plaintextHash);
			C == null && h.set(i.plaintextHash, o("MAWMediaManagementTxns").attachHashAndSaveMedia(r, f, i.blobArrayBuffer, i.plaintextHash, void 0, void 0, i.mediaType, i.mediaInfo, i.file, !0, void 0, a));
		}
		var b = Array.from(h.values());
		return o("MAWDexieTable").dexieAll([o("MAWDbMsgTxns").maybeGetMsg(r, t), o("MAWDexieTable").dexieAll(b)]).then(function(e) {
			var a = e[0], l = e[1], d = l.reduce(function(e, t) {
				return e.set(t.plaintextHash, t);
			}, new Map()), h = m != null ? d.get(m.plaintextHash) : void 0, y = s != null ? d.get(s.plaintextHash) : void 0, C = i != null ? d.get(i.plaintextHash) : void 0, b = o("MAWDexieTable").dexieResolve();
			return o("MAWXMAManagementTxns").saveXMA(r, h == null ? void 0 : h.mediaId, y == null ? void 0 : y.mediaId, C == null ? void 0 : C.mediaId, p, u, t, f, _, c, h == null ? void 0 : h.plaintextHash, y == null ? void 0 : y.plaintextHash, C == null ? void 0 : C.plaintextHash).then(function(e) {
				return o("MAWXMAUtils").isXMAStoryReply(p) && a != null ? b = g(r, n, e, h, a) : b = o("MAWHandleXmaTransactionUtil").checkMediaChunkAndHandleXmaAfterTransaction(r, e, h), b.then(function() {
					return {
						dbXMA: e,
						faviconDbMedia: C,
						headerDbMedia: y,
						previewDbMedia: h
					};
				});
			});
		});
	}
	function g(t, n, r, a, i) {
		var l = o("WAJids").interpretAsUserJid(n);
		if (l == null) throw e.mustfixThrow("this is a flow check, participant jid can not be null");
		var s = r.defaultCTA, u = s == null ? void 0 : s.nativeUrl, c = {
			author: l,
			expirationTs: r.targetExpiringAtSec,
			externalId: r.externalId,
			mediaId: a == null ? void 0 : a.mediaId,
			plaintextHash: a == null ? void 0 : a.plaintextHash,
			sourceId: u,
			ts: i.ts,
			type: o("MAWMsgType").MSG_TYPE.XMA,
			xmaMessageType: r.targetType
		}, d = {
			content: c,
			remoteJid: n
		};
		if (i.type !== o("MAWMsgType").MSG_TYPE.TEXT) throw e.mustfixThrow("flow check, this message type is only in text type");
		var m = babelHelpers.extends({}, i, { quote: d });
		return t.messages.put(m).then(function() {
			o("MAWIndexedDb").afterTransaction({
				tag: "MsgUpdated",
				value: o("MAWBridgeMsg").createBridgeMsg(m)
			});
		});
	}
	function h(e, t) {
		return e == null || t == null ? null : {
			fileSize: e.file.size,
			mediaEntry: o("validateMAWMediaAndComposeEntryForProtoMsg").validateMediaEntry(e.plaintextHash, t),
			mediaInfo: e.mediaInfo,
			mediaType: e.mediaType
		};
	}
	l.uploadXMAMediasLegacy = u, l.uploadXMAMediasForQuickSend = c, l.saveXMAContentLegacy = d, l.saveXMAContent = m, l.getMediaMetadata = p, l.getXMAMediaMetadataForSending = h;
}), 98);
