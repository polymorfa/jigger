__d("WAWebMediaStickers", [
	"WAFilteredCatch",
	"WALogger",
	"WAWebDownloadManager",
	"WAWebGetUserMediaErrors",
	"WAWebMediaEntry",
	"WAWebMediaMmsV4Download",
	"WAWebMediaPrep",
	"WAWebMediaStorage",
	"WAWebMediaTypes",
	"WAWebMmsMediaTypes",
	"WAWebRecentStickerCollectionMd",
	"WAWebWamEnumDownloadOriginType",
	"WAWebWamEnumWebcRmrReasonCode",
	"err",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p = 125;
	function _(e) {
		var t = {};
		return o("WAWebMediaTypes").MAPPED_STICKER_PROPS.forEach(function(n) {
			var r = e[n], a = o("WAWebMediaTypes").MSG_TO_MEDIA[n];
			t[a] = r;
		}), t;
	}
	function f(t) {
		if (!t.filehash) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unexpected sticker with no filehash"]))).sendLogs("sticker-filehash-error");
			return;
		}
		var n = o("WAWebMediaStorage").getOrCreateMediaObject(t.filehash);
		return o("WAWebMediaStorage").associateMediaWithSticker(n, t), n;
	}
	function g(e) {
		if (!e.filehash) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Unexpected sticker pack with no filehash"]))).sendLogs("sticker-pack-filehash-error");
			return;
		}
		var t = o("WAWebMediaStorage").getOrCreateMediaObject(e.filehash);
		return o("WAWebMediaStorage").associateMediaWithStickerPack(t, e), t;
	}
	function h(e, t, n, a) {
		var i = _(e);
		if (e.mediaData.set(i), !!t) {
			e.mediaObject = t;
			var l = e.deprecatedMms3Url, s = e.encFilehash;
			if (!r("gkx")("26258") && !s && l && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["sticker ", " encFileHash missing, has mms3Url"])), a ? "pack icon" : "").sendLogs("sticker-" + (a ? "icon-" : "") + "missing-upload-hash-but-url-exists"), (s || l) && !t.entries.has({
				encFilehash: s,
				deprecatedMms3Url: l
			})) {
				var c = t.entries.addEntry({
					deprecatedMms3Url: l,
					mediaKey: e.mediaKey,
					mediaKeyTimestamp: e.mediaKeyTimestamp,
					encFilehash: s,
					type: n,
					directPath: e.directPath,
					debugHint: "setMediaObjectValues"
				});
				c && t.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_MISSING && (i.downloadStage = o("WAWebMediaTypes").DownloadStage.INIT);
			}
			t.consolidate(i);
		}
	}
	function y(e) {
		h(e, e.mediaObject || f(e), o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER, !1);
	}
	function C(e) {
		var t = e.mediaObject;
		t && o("WAWebMediaStorage").disassociateMediaFromSticker(t, e);
	}
	function b(e) {
		h(e, e.mediaObject || g(e), o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE, !0);
	}
	function v(e) {
		var t = e.mediaObject;
		t && o("WAWebMediaStorage").disassociateMediaFromStickerPack(t, e);
	}
	async function S(e) {
		var t = e.shouldThrow, n = t === void 0 ? !0 : t, a = e.sticker, i = e.type;
		if (a.isPlaceholder === !0 || a.isCreateButton === !0) return a.mediaData.mediaStage = o("WAWebMediaTypes").MediaDataStage.PREPARING, Promise.resolve();
		var l = a.mediaObject;
		if (!l) return Promise.reject(r("err")("media-fault: downloadStickerOrStickerPackIcon sticker/stickerPack without mediaObject"));
		var s = i === "STICKER" ? o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.STICKER_PANEL_STICKER : o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.STICKER_PANEL_ICON, u = !1;
		await l.getPendingProcess("fromDisk").then(function() {
			if (!a.filehash || !a.mediaKey || !a.encFilehash) return u = !0, o("WAWebDownloadManager").downloadManager.rmr({
				mediaObject: l,
				signal: new AbortController().signal,
				rmrReason: s
			});
		}).then(function() {
			return o("WAWebMediaMmsV4Download").downloadMedia({
				mimetype: a.mimetype,
				mediaObject: a.mediaObject,
				downloadEvenIfExpensive: !0,
				mediaType: o("WAWebMmsMediaTypes").msgToMediaType({
					type: a.type,
					isGif: !1,
					isNewsletter: !1
				}),
				rmrReason: s,
				downloadOrigin: o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.STICKER_PICKER,
				shouldThrow: n
			});
		}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").RMRNotSupportedOnNewsletterMessagesError, function(e) {
			if (e.mediaType !== o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER) throw o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Unexpected RMR error for media type ", ""])), e.mediaType).sendLogs("failed-to-download-sticker-rmr"), e;
		}));
		var d = l.entries.getDownloadEntry(!0);
		u && d instanceof o("WAWebMediaEntry").EncryptedMediaEntry && o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.updateStickerMediaData(a.filehash, d);
	}
	function R(e) {
		o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Prepping sticker"])));
		var t = e.mediaObject, n = e.mediaData.toJSON();
		return n.fullWidth = p, n.fullHeight = p, t ? new (o("WAWebMediaPrep")).MediaPrep(n.type, Promise.resolve(n)) : (o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["id: ", ""])), e.id).sendLogs("media-fault: prepSticker sticker without mediaObject"), new (o("WAWebMediaPrep")).MediaPrep(n.type, Promise.reject(r("err")("non initialized media"))));
	}
	l.registerSticker = y, l.deregisterSticker = C, l.registerStickerPackIcon = b, l.deregisterStickerPackIcon = v, l.downloadStickerOrStickerPackIcon = S, l.prepSticker = R;
}), 98);
