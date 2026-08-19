__d("MAWHandleMediaPreviewDownloadApi", [
	"MAWBridgeTypesCreators",
	"MAWDbMediaTxns",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWLoggerUtils",
	"MAWMediaAfterTxns",
	"MAWMediaDownloadStatus",
	"MAWMediaDownloadStatusForUI",
	"MAWMediaPreviewDownloadManager",
	"MAWMediaUtils",
	"MAWTransactionMode",
	"MWFBLogger",
	"WACryptoSha256",
	"WAHashUtils",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MWFBLogger").MWMediaLogger().tags([
		o("MAWLoggerUtils").Tag.MediaDownload,
		o("MAWLoggerUtils").Tag.MessageReceive,
		"MediaPreview"
	]), c = async function(t, n, a, i) {
		var e = o("WAHashUtils").toPlaintextHash(await o("WACryptoSha256").sha256(n));
		o("MAWMediaDownloadStatusForUI").sendMediaDownloadStatusToUI({
			details: "handle_media_download",
			hash: t,
			status: r("MAWMediaDownloadStatus").DOWNLOADING,
			type: "preview"
		});
		var l = o("MAWMediaPreviewDownloadManager").getMediaPreviewDownloadingResolvable(t);
		return l != null && (l.resolve(new Blob([n], { type: "image/jpeg" })), o("MAWMediaPreviewDownloadManager").removeMediaPreviewDownloadingResolvable(t)), d(t, e, n, a, i);
	}, d = o("MAWIndexedDb").makeMsgrTransactor({
		media: o("MAWTransactionMode").READWRITE,
		messages: o("MAWTransactionMode").READONLY,
		threads: o("MAWTransactionMode").READONLY
	}, "handleMediaPreviewDownload", function(t) {
		return (function(n, a, i, l, c) {
			return o("MAWDexieTable").dexieAll([o("MAWDbMediaTxns").maybeGetMediaFromPlaintextHash(t, n), o("MAWDbMsgTxns").maybeGetMsgByProtocolMsgId(t, c)]).then(function(c) {
				var d = c[0], m = c[1];
				if (u.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"Handling preview for main hash ",
					"... preview hash ",
					"..."
				])), o("WAHashUtils").sanitisePlaintextHash(n), o("WAHashUtils").sanitisePlaintextHash(a)), d == null) return o("MAWMediaDownloadStatusForUI").sendMediaDownloadStatusToUI({
					details: "missing_media_on_save",
					hash: n,
					status: r("MAWMediaDownloadStatus").MANUAL_RETRYABLE_FAILURE,
					type: "preview"
				}), u.WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Main media for preview is null. Type: ", ""])), l), o("WAResultOrError").makeError("missing-media-on-save");
				var p = function() {
					switch (l) {
						case "image": return t.media.update(d.mediaId, babelHelpers.extends({}, d, { validatedImageInfo: babelHelpers.extends({}, d.validatedImageInfo, { jpegThumbnail: i }) }));
						case "video": return t.media.update(d.mediaId, babelHelpers.extends({}, d, { validatedVideoInfo: babelHelpers.extends({}, d.validatedVideoInfo, { jpegThumbnail: i }) }));
						default: return o("MAWDexieTable").dexieResolve();
					}
				};
				return o("MAWMediaDownloadStatusForUI").sendMediaDownloadStatusToUI({
					details: "handle_media_download_success",
					hash: n,
					status: r("MAWMediaDownloadStatus").SUCCESS,
					type: "preview"
				}), p().then(function() {
					return t.messages.where("msgId").anyOf(d.msgIds).toArray().then(function(e) {
						return t.threads.where("jid").anyOf(e.map(function(e) {
							return e.threadJid;
						})).toArray().then(function(n) {
							return o("MAWDexieTable").dexieAll(n.map(function(n) {
								var r = o("MAWMediaUtils").createHdTypesForBridgeMedia(e), a = o("MAWBridgeTypesCreators").createBridgeMedia({
									chatJid: n.jid,
									filteredMsgIds: o("MAWBridgeTypesCreators").getMsgIdsFilteredByJid(e, n.jid),
									hasMediaForUI: !0,
									hdTypes: r,
									media: d,
									sortOrderMs: m == null ? void 0 : m.sortOrderMs
								});
								return o("MAWMediaAfterTxns").handleNewMediaAfterTxnWithBridgeMedia(t, a, e);
							})).then(function() {
								return o("WAResultOrError").makeResult();
							});
						});
					});
				});
			});
		});
	});
	l.handleMediaPreviewDownload = c;
}), 98);
