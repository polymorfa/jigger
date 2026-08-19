__d("MAWHandleMediaDownloadApi", [
	"MAWBridgeMsg",
	"MAWBridgeTypesCreators",
	"MAWDbChunkTxns",
	"MAWDbMedia",
	"MAWDbMediaTxns",
	"MAWDbMsgTxns",
	"MAWDbXMATxns",
	"MAWDexieTable",
	"MAWGetMsgQuoteTxn",
	"MAWHandleXmaTransactionUtil",
	"MAWIndexedDb",
	"MAWLegacyMediaDownloadManager",
	"MAWLoadReplyMediaTxns",
	"MAWLoggerUtils",
	"MAWMediaAfterTxns",
	"MAWMediaUtils",
	"MAWMsgType",
	"MAWTransactionMode",
	"MAWVideoAudioValidationUtils",
	"MAWXMAUtils",
	"MWFBLogger",
	"Promise",
	"WAArmadilloXMA.pb",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m = o("MWFBLogger").MWMediaLogger().tags([o("MAWLoggerUtils").Tag.MediaDownload, o("MAWLoggerUtils").Tag.MessageReceive]);
	function p(t, r, a, i, l, c) {
		m.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start persisting media blob"])));
		var p = t.db, _ = o("MAWMediaUtils").genHMACPlaintextHash(r), h = t.persistChunk ? o("MAWDbChunkTxns").getOrCreateMediaChunkWithPlaintextHash(t.db, r, i, a) : null;
		return o("MAWDexieTable").dexieAll([
			o("MAWDbMsgTxns").maybeGetMsgByProtocolMsgId(p, l),
			p.media.where("hashedPlaintextHash").equals(_).first(),
			h
		]).then(function(e) {
			var t = e[0], l = e[1], _ = e[2];
			if (l == null) return m.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Media is null when storing downloaded blob"]))), o("WAResultOrError").makeError("missing-media-on-save");
			var h, y = !1;
			return h = o("MAWLegacyMediaDownloadManager").getFromMediaPlaintextDownloadManager(r), h == null && (h = o("MAWLegacyMediaDownloadManager").getFromMediaDownloadManager(l.mediaId), y = !0), h != null && (m.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["resolve MediaPlaintextDownloadManager promise"]))), h((d || (d = n("Promise"))).resolve(new Blob([i], { type: a }))), o("MAWLegacyMediaDownloadManager").removeFromMediaPlaintextDownloadManager(r), y && o("MAWLegacyMediaDownloadManager").removeFromMediaDownloadManager(l.mediaId)), f(p, t).then(function(e) {
				return e ? p.messages.where("msgId").anyOf(l.msgIds).toArray().then(function(e) {
					return o("MAWDbXMATxns").getXMAFromMsgs(p, e).then(function(e) {
						return o("MAWDexieTable").dexieAll(e.map(function(e) {
							if (!o("MAWXMAUtils").isXMAStoryReply(e.targetType) && e.defaultPreviewMediaId === l.mediaId) return o("MAWHandleXmaTransactionUtil").checkMediaChunkAndHandleXmaAfterTransaction(p, e, l);
						}));
					}).then(function() {
						return e;
					});
				}).then(function(e) {
					return g(p, e);
				}) : p.messages.where("msgId").anyOf(l.msgIds).toArray().then(function(e) {
					return p.threads.where("jid").anyOf(e.map(function(e) {
						return e.threadJid;
					})).toArray().then(function(n) {
						return o("MAWDexieTable").dexieAll(n.map(function(n) {
							var r = o("MAWMediaUtils").createHdTypesForBridgeMedia(e), a = o("MAWBridgeTypesCreators").createBridgeMedia({
								chatJid: n.jid,
								filteredMsgIds: o("MAWBridgeTypesCreators").getMsgIdsFilteredByJid(e, n.jid),
								hasMediaForUI: !0,
								hdTypes: r,
								media: l,
								sortOrderMs: t == null ? void 0 : t.sortOrderMs
							});
							return o("MAWMediaAfterTxns").handleNewMediaAfterTxnWithBridgeMedia(p, a, e);
						}));
					}).then(function() {
						return e;
					});
				}).then(function(e) {
					return g(p, e);
				});
			}).then(function() {
				var e, t, n, r, a, s, u, d, m, _, f, g = l.mediaType === o("MAWDbMedia").MEDIA_TYPE.VIDEO ? o("MAWVideoAudioValidationUtils").normalizeValidationResult({
					audioAvgBitsPerSecond: c == null || (e = c.audioStreamReport) == null ? void 0 : e.avgBitsPerSecond,
					audioNumberOfChannels: c == null || (t = c.audioStreamReport) == null ? void 0 : t.numberOfChannels,
					audioSamplingRate: c == null || (n = c.audioStreamReport) == null ? void 0 : n.samplingRate,
					audioStreamType: c == null || (r = c.audioStreamReport) == null ? void 0 : r.streamType,
					validatedMimeType: c == null ? void 0 : c.mimeType,
					videoAvgBitsPerSecond: c == null || (a = c.videoStreamReport) == null ? void 0 : a.avgBitsPerSecond,
					videoCalculatedFps: c == null || (s = c.videoStreamReport) == null ? void 0 : s.calculatedFps,
					videoDuration: c == null || (u = c.videoStreamReport) == null ? void 0 : u.duration,
					videoHeight: c == null || (d = c.videoStreamReport) == null ? void 0 : d.videoHeight,
					videoNominalFps: c == null || (m = c.videoStreamReport) == null ? void 0 : m.nominalFps,
					videoStreamType: c == null || (_ = c.videoStreamReport) == null ? void 0 : _.streamType,
					videoWidth: c == null || (f = c.videoStreamReport) == null ? void 0 : f.videoWidth
				}) : void 0, h = o("MAWDbMediaTxns").updateMedia(p, l, {
					size: i.byteLength,
					validatedResult: g
				});
				return h;
			}).then(function() {
				return o("WAResultOrError").makeResult();
			});
		});
	}
	var _ = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (c = o("MAWTransactionMode")).READONLY,
		media: c.READWRITE,
		messages: c.READONLY,
		receiverFetchInfo: c.READONLY,
		threads: c.READONLY,
		xma: c.READONLY
	}, "handleMediaDownload", function(e) {
		return (function(t, n, r, o, a) {
			return p({
				db: e,
				persistChunk: !1
			}, t, n, r, o, a);
		});
	});
	function f(e, t) {
		var n;
		return t == null ? o("MAWDexieTable").dexieResolve(!1) : t.type === o("MAWMsgType").MSG_TYPE.XMA ? o("MAWDexieTable").dexieResolve(!0) : ((n = t.quote) == null ? void 0 : n.content.xmaMessageType) === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_REPLY ? o("MAWDexieTable").dexieResolve(t.type === o("MAWMsgType").MSG_TYPE.TEXT) : o("MAWDbXMATxns").maybeGetXMAFromAssociatedMsgId(e, t.msgId).then(function(e) {
			return e != null;
		});
	}
	function g(e, t) {
		return o("MAWGetMsgQuoteTxn").maybeBatchGetMsgsByQuoteExternalId(e, t.map(function(e) {
			return e.externalId;
		})).then(function(t) {
			return t.map(function(t) {
				return t.source = "eb_restore", o("MAWLoadReplyMediaTxns").getReplyMediaForMsgQuote(e, t).then(function(e) {
					o("MAWIndexedDb").afterTransaction({
						tag: "MsgUpdated",
						value: o("MAWBridgeMsg").createBridgeMsg(t, e)
					});
				});
			});
		});
	}
	l.handleMediaDownload = _;
}), 98);
