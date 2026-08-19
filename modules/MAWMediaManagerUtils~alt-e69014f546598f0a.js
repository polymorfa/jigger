__d("MAWMediaManagerUtils", [
	"FBLogger",
	"MAWBridgeFireAndForget",
	"MAWMediaPreprocess",
	"MAWMediaUtils",
	"MAWMiActOnActThreadReady",
	"MAWVideoPreProcess",
	"MWMediaManagerTypes",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = new Map();
	function s(t, n) {
		var r = n === !0;
		return Promise.all(t.map(async function(a) {
			var i, l, s, u, c = a[0], d = a[1], m, p, _ = o("MAWMediaPreprocess").getSupportedAttachmentType(c);
			if (_ === "video") p = await o("MAWVideoPreProcess").optimisticVideoPreprocessWithFile(c, t.length), m = o("MAWVideoPreProcess").optimisticVideoToFileVideo(p);
			else {
				switch (_) {
					case "image":
						m = o("MAWMediaPreprocess").getMediaPreprocessPromise(c, {
							hdEnabled: n,
							totalNumberOfFilesForLogging: t.length,
							type: _
						});
						break;
					case "audio":
						m = o("MAWMediaPreprocess").getMediaPreprocessPromise(c, {
							totalNumberOfFilesForLogging: t.length,
							type: _
						});
						break;
					default: m = o("MAWMediaPreprocess").getMediaPreprocessPromise(c, { type: _ });
				}
				p = await o("MAWMediaPreprocess").getOptimisticMediaPreprocessPromise(c, _, t.length);
			}
			e.set(d, {
				optimisticMedia: p,
				originalFile: c,
				processedMediaPromise: m
			});
			var f = o("MWMediaManagerTypes").getMessagingAttachmentTypeFromMediaMetadataAttachmentType(p.type), g = {
				attachmentType: f != null ? f : void 0,
				file: c,
				isHd: r,
				offlineAttachmentId: d,
				previewHeight: (i = (l = p.imageSpec) == null ? void 0 : l.height) != null ? i : void 0,
				previewWidth: (s = (u = p.imageSpec) == null ? void 0 : u.width) != null ? s : void 0
			};
			return Promise.resolve(g);
		}));
	}
	function u(t, n, a) {
		r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(t.tables, n, "MAWMediaManagerUtils", async function(t, n) {
			var i = a.reduce(function(t, n) {
				var r, o = (r = e.get(n.offlineAttachmentId)) == null ? void 0 : r.processedMediaPromise;
				return o != null && t.push(o), t;
			}, []), l = await Promise.all(i);
			return l.forEach(function(e) {
				var t;
				switch (e.type) {
					case "image": return o("MAWBridgeFireAndForget").fireAndForget("backend", "optimisticUploadMedia", {
						file: e.file,
						jid: n,
						thumbnail: o("MAWMediaUtils").convertJpegThumbnailArrayBufferToFile((t = e.thumbnailUrlAndSpec) == null ? void 0 : t.jpegThumbnail)
					});
					case "animated_image": return o("MAWBridgeFireAndForget").fireAndForget("backend", "optimisticUploadMedia", {
						file: e.file,
						jid: n,
						thumbnail: null
					});
					case "video": return o("MAWBridgeFireAndForget").fireAndForget("backend", "optimisticUploadMedia", {
						file: e.file,
						jid: n,
						thumbnail: o("MAWMediaUtils").convertJpegThumbnailArrayBufferToFile(e.thumbnailUrlAndSpec.jpegThumbnail)
					});
					case "audio": return o("MAWBridgeFireAndForget").fireAndForget("backend", "optimisticUploadMedia", {
						file: e.file,
						jid: n,
						thumbnail: null
					});
					case "document": return o("MAWBridgeFireAndForget").fireAndForget("backend", "optimisticUploadMedia", {
						file: e.file,
						jid: n,
						thumbnail: null
					});
					default: r("FBLogger")("messenger_web_media").mustfix("MAW Optimistic upload media: unknown media attachment file type: " + e.type);
				}
			}), Promise.resolve();
		}));
	}
	function c(e, t, n) {
		r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(e.tables, t, "MAWMediaManagerUtils", function(e, t) {
			return n.forEach(function(e) {
				return o("MAWBridgeFireAndForget").fireAndForget("backend", "optimisticUploadMedia", {
					file: e,
					jid: t,
					thumbnail: null
				});
			}), Promise.resolve();
		}));
	}
	l.MAWMediaManagerAttachmentsV2 = e, l.preprocessV2 = s, l.upload = u, l.uploadForXMA = c;
}), 98);
