__d("MAWMediaManagerUtils", [
	"FBLogger",
	"MAWBridgeFireAndForget",
	"MAWMediaPreprocess",
	"MAWMediaUtils",
	"MAWMiActOnActThreadReady",
	"MAWVideoPreProcess",
	"MWMediaManagerTypes",
	"Promise",
	"asyncToGeneratorRuntime",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new Map();
	function u(t, r) {
		var a = r === !0;
		return (e || (e = n("Promise"))).all(t.map((function() {
			var i = n("asyncToGeneratorRuntime").asyncToGenerator(function* (i) {
				var l, u, c, d, m = i[0], p = i[1], _, f, g = o("MAWMediaPreprocess").getSupportedAttachmentType(m);
				if (g === "video") f = yield o("MAWVideoPreProcess").optimisticVideoPreprocessWithFile(m, t.length), _ = o("MAWVideoPreProcess").optimisticVideoToFileVideo(f);
				else {
					switch (g) {
						case "image":
							_ = o("MAWMediaPreprocess").getMediaPreprocessPromise(m, {
								hdEnabled: r,
								totalNumberOfFilesForLogging: t.length,
								type: g
							});
							break;
						case "audio":
							_ = o("MAWMediaPreprocess").getMediaPreprocessPromise(m, {
								totalNumberOfFilesForLogging: t.length,
								type: g
							});
							break;
						default: _ = o("MAWMediaPreprocess").getMediaPreprocessPromise(m, { type: g });
					}
					f = yield o("MAWMediaPreprocess").getOptimisticMediaPreprocessPromise(m, g, t.length);
				}
				s.set(p, {
					optimisticMedia: f,
					originalFile: m,
					processedMediaPromise: _
				});
				var h = o("MWMediaManagerTypes").getMessagingAttachmentTypeFromMediaMetadataAttachmentType(f.type), y = {
					attachmentType: h != null ? h : void 0,
					file: m,
					isHd: a,
					offlineAttachmentId: p,
					previewHeight: (l = (u = f.imageSpec) == null ? void 0 : u.height) != null ? l : void 0,
					previewWidth: (c = (d = f.imageSpec) == null ? void 0 : d.width) != null ? c : void 0
				};
				return (e || (e = n("Promise"))).resolve(y);
			});
			return function(e) {
				return i.apply(this, arguments);
			};
		})()));
	}
	function c(t, a, i) {
		r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(t.tables, a, "MAWMediaManagerUtils", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
				var l = i.reduce(function(e, t) {
					var n, r = (n = s.get(t.offlineAttachmentId)) == null ? void 0 : n.processedMediaPromise;
					return r != null && e.push(r), e;
				}, []), u = yield (e || (e = n("Promise"))).all(l);
				return u.forEach(function(e) {
					var t;
					switch (e.type) {
						case "image": return o("MAWBridgeFireAndForget").fireAndForget("backend", "optimisticUploadMedia", {
							file: e.file,
							jid: a,
							thumbnail: o("MAWMediaUtils").convertJpegThumbnailArrayBufferToFile((t = e.thumbnailUrlAndSpec) == null ? void 0 : t.jpegThumbnail)
						});
						case "animated_image": return o("MAWBridgeFireAndForget").fireAndForget("backend", "optimisticUploadMedia", {
							file: e.file,
							jid: a,
							thumbnail: null
						});
						case "video": return o("MAWBridgeFireAndForget").fireAndForget("backend", "optimisticUploadMedia", {
							file: e.file,
							jid: a,
							thumbnail: o("MAWMediaUtils").convertJpegThumbnailArrayBufferToFile(e.thumbnailUrlAndSpec.jpegThumbnail)
						});
						case "audio": return o("MAWBridgeFireAndForget").fireAndForget("backend", "optimisticUploadMedia", {
							file: e.file,
							jid: a,
							thumbnail: null
						});
						case "document": return o("MAWBridgeFireAndForget").fireAndForget("backend", "optimisticUploadMedia", {
							file: e.file,
							jid: a,
							thumbnail: null
						});
						default: r("FBLogger")("messenger_web_media").mustfix("MAW Optimistic upload media: unknown media attachment file type: " + e.type);
					}
				}), e.resolve();
			});
			return function(e, n) {
				return t.apply(this, arguments);
			};
		})()));
	}
	function d(t, a, i) {
		r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(t.tables, a, "MAWMediaManagerUtils", function(t, r) {
			return i.forEach(function(e) {
				return o("MAWBridgeFireAndForget").fireAndForget("backend", "optimisticUploadMedia", {
					file: e,
					jid: r,
					thumbnail: null
				});
			}), (e || (e = n("Promise"))).resolve();
		}));
	}
	l.MAWMediaManagerAttachmentsV2 = s, l.preprocessV2 = u, l.upload = c, l.uploadForXMA = d;
}), 98);
