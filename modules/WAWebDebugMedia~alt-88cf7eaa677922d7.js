__d("WAWebDebugMedia", [
	"WAWebChatCollection",
	"WAWebMedia",
	"WAWebMediaDownloadMmsThumbnail",
	"WAWebMediaTypes",
	"WAWebMmsClient",
	"WAWebMsgType"
], (function(t, n, r, o, a, i, l) {
	async function e(e) {
		e === void 0 && (e = !0);
		var t = o("WAWebChatCollection").ChatCollection.getActive();
		if (t == null) return "No active chat is open — open a chat containing a sticker first.";
		var n = t.msgs.getModelsArray().map(function(e) {
			return {
				msg: e,
				mediaObject: e.mediaObject
			};
		}).filter(function(e) {
			var t = e.mediaObject, n = e.msg;
			return n.type === o("WAWebMsgType").MSG_TYPE.STICKER && t != null;
		});
		for (var r of n) {
			var a = r.mediaObject;
			a == null || a.consolidate({ downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE });
		}
		if (e) {
			await Promise.all(n.map(function(e) {
				var t = e.mediaObject;
				return t == null ? void 0 : t.resolveWhenConsolidated();
			}));
			for (var i of n) {
				var l = i.msg;
				l.mediaData.set({
					preview: null,
					renderableUrl: "",
					rgbaBuffer: null,
					extractedLottieSticker: null,
					mediaBlob: null
				});
			}
		}
		return "Reset " + n.length + " sticker(s) to NEED_POKE in the active chat" + (e ? " and blanked their images" : "") + ". Scroll them into view to see the download button.";
	}
	e.doc = "Mark every sticker in the currently open chat as not-downloaded (NEED_POKE) so the download button/label reappears. Pass false to keep the sticker image visible. Repro tool for the sticker media-control UI.";
	var s = {
		checkMediaExistence: o("WAWebMedia").checkMediaExistence,
		forceStickerNeedPoke: e,
		WAWebMmsClient: r("WAWebMmsClient"),
		WAWebMediaDownloadMmsThumbnail: r("WAWebMediaDownloadMmsThumbnail"),
		downloadProgressiveJpegThumbnail: o("WAWebMedia").downloadProgressiveJpegThumbnail,
		downloadStatusThumbnail: o("WAWebMedia").downloadStatusThumbnail
	};
	l.default = s;
}), 98);
