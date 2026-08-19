__d("WAWebMediaDataUtils", [
	"WABase64",
	"WALogger",
	"WAPromiseCallSync",
	"WAWebABProps",
	"WAWebCanvasUtils",
	"WAWebDecodeWebpToRgba",
	"WAWebDocumentUploadEnrichment",
	"WAWebFileUtils",
	"WAWebImageUtils",
	"WAWebMediaAnalyzer",
	"WAWebMediaCleanFileName",
	"WAWebMediaConstants",
	"WAWebMediaFileErrors",
	"WAWebMediaLoad",
	"WAWebMediaLoadErrors",
	"WAWebMediaOpaqueData",
	"WAWebMediaPreProcessQpl",
	"WAWebMediaTypes",
	"WAWebMimeTypes",
	"WAWebMmsMediaTypes",
	"WAWebNetworkGetResponseIfOnline",
	"WAWebURLUtils",
	"WAWebVcardParsingUtils",
	"WAWebVideoTranscoderWamEvent",
	"WAWebWamEnumMediaPickerOriginType",
	"WAWebWamEnumVideoTranscoderAlgorithmType",
	"WAWebWamEnumVideoTranscoderResultType",
	"WAWebWamEnumVideoTranscoderSourceFormatType",
	"WAWebWamEnumVideoTranscoderTargetFormatType",
	"WAWebWaveformUtils",
	"WAWebWebpParseWebp",
	"WAWebXHR",
	"cr:10296",
	"err",
	"file-type",
	"isStringNullOrEmpty",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p = 2e4;
	function _(e) {
		return I(async function(t) {
			t(e);
			var n = new Image();
			return await new Promise(function(t, o) {
				n.onload = t, n.onabort = function() {
					o(r("err")("getImageWidthHeight onabort"));
				}, n.onerror = function() {
					o(r("err")("getImageWidthHeight onerror"));
				}, n.src = e.url();
			}), {
				width: n.naturalWidth,
				height: n.naturalHeight
			};
		});
	}
	function f(e) {
		return new Promise(function(t, n) {
			var o = new Image(), a = window.URL.createObjectURL(e);
			o.onload = function() {
				var e = {
					width: o.naturalWidth,
					height: o.naturalHeight
				};
				window.URL.revokeObjectURL(a), t(e);
			}, o.onabort = function() {
				window.URL.revokeObjectURL(a), n(r("err")("getImageWidthHeight onabort"));
			}, o.onerror = function() {
				window.URL.revokeObjectURL(a), n(r("err")("getImageWidthHeight onerror"));
			}, o.src = a;
		});
	}
	function g(t) {
		return o("WAWebFileUtils").blobToArrayBuffer(t).catch(function(t) {
			throw o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["MediaUtils error: ", ""])), t), t;
		});
	}
	function h(e) {
		return I(function(t) {
			t(e);
			var n = e.getBlob();
			if (n) return g(n);
			var a = r("nullthrows")(e.getBase64(), "b64 should be defined");
			return o("WABase64").decodeB64(a);
		});
	}
	async function y(e) {
		var t = await g(e);
		return r("WAWebDecodeWebpToRgba")(t);
	}
	async function C(e) {
		var t = await g(e);
		return o("WAWebWebpParseWebp").parseWebp(t);
	}
	function b(e, t) {
		return I(async function(n) {
			n(e);
			var a = await o("WAWebMediaLoad").transcode(e.forceToBlob(), t).then(function(e) {
				return r("WAWebMediaOpaqueData").createFromData(e, e.type);
			});
			return n(a), a.autorelease(), a;
		});
	}
	async function v(e, t) {
		var n = t.maxDimension, r = t.minDimension, a = t.transparency, i = await o("WAWebImageUtils").rotateAndResize(e, n, o("WAWebImageUtils").BLOB, {
			transparency: a,
			minDimension: r
		}), l = i.height, s = i.images, u = i.width;
		if (s == null || s.blob == null) throw new (o("WAWebMediaFileErrors")).MediaFileFailedLoad();
		return {
			width: u,
			height: l,
			size: s.blob.size
		};
	}
	async function S(e, t, n) {
		var a = t.maxDimension, i = t.minDimension, l = t.transparency, s = e.forceToBlob(), u = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl("image", s);
		try {
			var c, d = await o("WAWebImageUtils").rotateAndResize(s, a, o("WAWebImageUtils").BLOB | o("WAWebImageUtils").CANVAS, {
				transparency: l,
				minDimension: i
			}), m = d.height, _ = d.images, f = d.width;
			if (_ == null || _.canvas == null) throw new (o("WAWebMediaFileErrors")).MediaFileFailedLoad();
			var g = await o("WAWebImageUtils").rotateAndResize(_.canvas, o("WAWebMediaConstants").IMG_THUMB_MAX_EDGE, o("WAWebImageUtils").DATA_URL | o("WAWebImageUtils").CANVAS), h = g.images;
			if (h == null || h.canvas == null) throw new (o("WAWebMediaFileErrors")).MediaFileFailedLoad();
			var y = o("WAWebCanvasUtils").getResizedDataUrl(h.canvas, "image/jpeg", p), C = y != null && y !== "" ? r("WAWebURLUtils").parseDataURL(y).data : null, b = n === o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_PHOTO_LIBRARY || n === o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_CAPTURE || n === o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_MEDIA_STRIP || n === o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_GIF, v = null, S = null;
			if (b && _.canvas != null) {
				var R = await o("WAWebImageUtils").rotateAndResize(_.canvas, o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE, o("WAWebImageUtils").DATA_URL), L = R.images, E = L == null ? void 0 : L.dataUrl;
				E != null && E !== "" && (v = await r("WAWebMediaOpaqueData").createFromBase64Jpeg(r("WAWebURLUtils").parseDataURL(E).data), S = {
					width: o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE,
					height: Math.round(o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE * m / f)
				});
			}
			return u.endSuccess(), {
				type: o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE,
				mediaBlob: _.blob,
				mimetype: (c = _.blob) == null ? void 0 : c.type,
				fullWidth: f,
				fullHeight: m,
				preview: C,
				fullPreviewData: v,
				fullPreviewSize: S
			};
		} catch (e) {
			throw u.endFailWithError(e instanceof Error ? e.name : "processRawImageError", e instanceof Error ? e.message : String(e)), e;
		}
	}
	async function R(e) {
		var t = e.forceToBlob(), n = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl("sticker", t);
		try {
			var a = await o("WAWebImageUtils").rotateAndResize(t, o("WAWebABProps").getABPropConfigValue("web_image_max_edge"), o("WAWebImageUtils").BLOB, { transparency: !0 }), i = a.height, l = a.images, s = a.width;
			if (l == null || l.blob == null) throw new (o("WAWebMediaFileErrors")).MediaFileFailedLoad();
			var u = await o("WAWebImageUtils").toWebpSticker(l.blob), c = await r("WAWebMediaOpaqueData").createFromData(u, u.type);
			return n.endSuccess(), {
				type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
				mediaBlob: c,
				mimetype: u.type,
				fullWidth: s,
				fullHeight: i
			};
		} catch (e) {
			throw n.endFailWithError(e instanceof Error ? e.name : "processRawStickerError", e instanceof Error ? e.message : String(e)), e;
		}
	}
	async function L(e) {
		var t = e._mimetype, a = e.accessibilityLabel, i = e.asGif, l = e.asPtt, m = e.gifAttribution, p = e.opaqueData, _ = e.precomputedFields, f = e.resetMediaPreview, g = e.setMediaPreview, h = e.setMimeType, y = e.setProgressPercentage, C = !1;
		try {
			var b, v = p.forceToBlob(), S = v instanceof File ? v.name : "", R = new (o("WAWebVideoTranscoderWamEvent")).VideoTranscoderWamEvent({
				sourceHeight: _ == null ? void 0 : _.fullHeight,
				sourceWidth: _ == null ? void 0 : _.fullWidth,
				sourceDuration: _ == null ? void 0 : _.duration,
				sourceFileSize: p.size(),
				sourceFormat: i === !0 ? o("WAWebWamEnumVideoTranscoderSourceFormatType").VIDEO_TRANSCODER_SOURCE_FORMAT_TYPE.GIF : o("WAWebWamEnumVideoTranscoderSourceFormatType").VIDEO_TRANSCODER_SOURCE_FORMAT_TYPE.VIDEO,
				sourceMimeType: v.type,
				sourceFileExtension: S.split(".").pop()
			}), L = (b = n("cr:10296") == null ? void 0 : n("cr:10296").isWindowsHybridTranscoderEnabled()) != null ? b : !1, E = v.type.startsWith("video/"), k = v.type === "video/mp4", I = L && E && !k;
			R.startTranscoderT();
			var T = null;
			if (!I) {
				var D = !1, x = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl(E ? "video" : "audio", v), $ = o("WAWebABProps").getABPropConfigValue("transcode_and_repair_videos"), P;
				if (E ? $ === !0 ? P = await o("WAWebMediaAnalyzer").transcodeToMp4AndMp4RepairMux(v, !!i, x) : P = await o("WAWebMediaAnalyzer").checkAndRepair(v, !!i, x) : P = await o("WAWebMediaAnalyzer").checkAndRepairAudio(v, !!i, x), P.success) {
					var N = P.value;
					T = N[0], D = N[1], x.endSuccess(), R.transcoderAlgorithm = D ? o("WAWebWamEnumVideoTranscoderAlgorithmType").VIDEO_TRANSCODER_ALGORITHM_TYPE.WASM_MP4_CHECK_AND_REPAIR : o("WAWebWamEnumVideoTranscoderAlgorithmType").VIDEO_TRANSCODER_ALGORITHM_TYPE.WEB_MEDIA_WORKER;
				} else x.endFailWithError(P.error.error, P.error.errorDetail);
			}
			if (I || !T && L) {
				R.transcoderAlgorithm = o("WAWebWamEnumVideoTranscoderAlgorithmType").VIDEO_TRANSCODER_ALGORITHM_TYPE.HYBRID_BRIDGE;
				var M = await (n("cr:10296") == null ? void 0 : n("cr:10296").transcodeVideo({
					file: v,
					onProgress: y,
					resetMediaPreview: f,
					setMediaPreview: g,
					setMimeType: h
				}));
				if (M != null) {
					var w = M[0], A = M[1];
					v = w, C = A, T = {
						type: v.type,
						file: v,
						isGif: !1
					};
				}
			}
			if (R.markTranscoderT(), !T) throw R.set({ transcoderResult: o("WAWebWamEnumVideoTranscoderResultType").VIDEO_TRANSCODER_RESULT_TYPE.FAILED }), R.commit(), o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["processRawAudioVideo bad video file ", ""])), v.type), new (o("WAWebMediaFileErrors")).InvalidMediaCheckRepairFailedType();
			var F = T.type, O = T.file;
			R.set({ targetFileSize: O.size });
			var B = i === !0 || T.isGif === !0;
			e: {
				var W = o("WAWebFileUtils").typeFromMimetype(F);
				if (W === o("WAWebFileUtils").FILETYPE.VIDEO) {
					if (l) throw R.set({ transcoderResult: o("WAWebWamEnumVideoTranscoderResultType").VIDEO_TRANSCODER_RESULT_TYPE.FAILED }), R.commit(), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]))).sendLogs("media-fault: ptt became video"), new (o("WAWebMediaFileErrors")).InvalidMediaFileType();
					R.set({
						targetFormat: o("WAWebWamEnumVideoTranscoderTargetFormatType").VIDEO_TRANSCODER_TARGET_FORMAT_TYPE.VIDEO,
						transcoderResult: o("WAWebWamEnumVideoTranscoderResultType").VIDEO_TRANSCODER_RESULT_TYPE.SUCCEEDED
					});
					var q = {
						type: o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO,
						mediaBlob: O,
						mimetype: F,
						isGif: B,
						gifAttribution: B ? m || 0 : void 0,
						accessibilityLabel: a,
						size: O.size
					};
					if (_ && _.duration != null && _.fullHeight != null && _.fullHeight !== 0 && _.fullWidth != null && _.fullWidth !== 0 && !r("isStringNullOrEmpty")(_.preview)) {
						var U = _.duration;
						return R.set({
							sourceHeight: _.fullHeight,
							sourceWidth: _.fullWidth,
							sourceDuration: U
						}), R.commit(), babelHelpers.extends({}, q, {
							fullWidth: _.fullWidth,
							fullHeight: _.fullHeight,
							preview: _.preview,
							duration: U == null ? void 0 : U.toString()
						});
					}
					var V = await o("WAWebImageUtils").generateVideoThumbsAndDuration({
						file: O,
						maxDimensions: [o("WAWebMediaConstants").IMG_THUMB_MAX_EDGE, o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE],
						debugHint: "processRawAudioVideo"
					}), H = V.duration, G = V.thumbs, z = G[0], j = G[1], K = await r("WAWebMediaOpaqueData").createFromBase64Jpeg(r("WAWebURLUtils").parseDataURL(j.url).data);
					return R.set({
						sourceHeight: z.fullHeight,
						sourceWidth: z.fullWidth,
						sourceDuration: H
					}), R.commit(), babelHelpers.extends({}, q, {
						fullWidth: z.fullWidth,
						fullHeight: z.fullHeight,
						preview: r("WAWebURLUtils").parseDataURL(z.url).data,
						fullPreviewData: K,
						duration: H.toString()
					});
					break e;
				}
				if (W === o("WAWebFileUtils").FILETYPE.AUDIO) {
					var Q, X, Y = (Q = _ == null ? void 0 : _.duration) != null ? Q : await o("WAWebFileUtils").getAudioDuration(O), J = (X = _ == null ? void 0 : _.waveform) != null ? X : await o("WAWebWaveformUtils").computeWaveform(O);
					return {
						type: l ? o("WAWebMediaTypes").OUTWARD_TYPES.PTT : o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO,
						mediaBlob: O,
						mimetype: F,
						duration: Y.toString(),
						waveform: J
					};
				}
				if (W === o("WAWebFileUtils").FILETYPE.IMAGE || W === o("WAWebFileUtils").FILETYPE.DOCUMENT || W === o("WAWebFileUtils").FILETYPE.STICKER || W === o("WAWebFileUtils").FILETYPE.STICKER_PACK) {
					throw R.set({ transcoderResult: o("WAWebWamEnumVideoTranscoderResultType").VIDEO_TRANSCODER_RESULT_TYPE.FAILED }), R.commit(), o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]))).sendLogs("media-fault: audio/video became other"), r("err")("audio/video became " + F);
					break e;
				}
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + W);
			}
		} catch (e) {
			throw o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["processRawAudioVideo error: ", ""])), e), C && f != null && f(), e;
		}
	}
	async function E(e, t) {
		var n = e.type;
		if (n) {
			if (n === "image/svg+xml") throw new (o("WAWebMediaFileErrors")).InvalidMediaFileType("disallowed mimetype " + n);
			if (o("WAWebMimeTypes").DOC_MIMES === "*" || o("WAWebMimeTypes").DOC_MIMES.includes(n)) return n;
			throw new (o("WAWebMediaFileErrors")).InvalidMediaFileType("disallowed mimetype " + n);
		} else {
			var a = Math.min(o("WAWebMimeTypes").MIMETYPE_DETERMINING_LENGTH, e.size), i = await g(e.slice(0, a)), l = new Uint8Array(i);
			if (o("WAWebMimeTypes").isMsCompoundFileBinaryFormat(l.subarray(0, 8))) {
				var s;
				return t != null && (s = o("WAWebFileUtils").getMimeTypeForFilepath(t)) != null ? s : o("WAWebMimeTypes").MSCFB_MIME;
			}
			var u = r("file-type")(l);
			if (u != null && u.mime) {
				var c = o("WAWebMimeTypes").isAllowedDocumentMimetype(u.mime, t, !0);
				if (!r("isStringNullOrEmpty")(c)) return c;
			} else if (!r("isStringNullOrEmpty")(t)) {
				var d = o("WAWebFileUtils").getMimeTypeForFilepath(t);
				if (!r("isStringNullOrEmpty")(d)) return d;
			}
			throw new (o("WAWebMediaFileErrors")).InvalidMediaFileType("type: " + String(e.type) + " name: " + String(t));
		}
	}
	async function k(e, t, n, a, i, l) {
		var s = e.forceToBlob(), u = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl("document", s);
		try {
			var c, d, m = o("WAWebMediaCleanFileName").cleanFilename(s.name || (t != null ? t : "")), p = await E(s, m), _ = n ? o("WAWebFileUtils").blobToText(s) : null, f = await Promise.all([o("WAWebDocumentUploadEnrichment").enrich(s, p, l), _]), g = f[0], h = f[1], y = g.pdfImg, C = (c = y == null || (d = y.microThumbnail) == null ? void 0 : d.dataUrl) != null ? c : y == null ? void 0 : y.thumbUrl, b = r("isStringNullOrEmpty")(C) ? null : r("WAWebURLUtils").parseDataURL(C).data, v = await r("WAWebMediaOpaqueData").createFromData(s, p);
			return u.endSuccess(), {
				type: i,
				mediaBlob: v,
				mimetype: p,
				filename: m || void 0,
				documentPreview: y,
				preview: b,
				fullPreviewData: y == null ? void 0 : y.fullPreviewData,
				fullPreviewSize: y ? {
					width: y.width,
					height: y.height
				} : null,
				pageCount: a != null ? a : y == null ? void 0 : y.pdfPages,
				isPasswordProtected: g.isPasswordProtected,
				isVcardOverMmsDocument: n,
				parsedVcards: h ? o("WAWebVcardParsingUtils").parseMultiVcard(h) : null
			};
		} catch (e) {
			throw u.endFailWithError(e instanceof Error ? e.name : "processRawDocumentError", e instanceof Error ? e.message : String(e)), e;
		}
	}
	function I(e) {
		var t = [];
		function n(e) {
			e.retain(), t.push(e);
		}
		return o("WAPromiseCallSync").promiseCallSync(e, null, n).finally(function() {
			for (var e = 0; e < t.length; e++) t[e].autorelease();
		});
	}
	async function T(e) {
		var t = await r("WAWebNetworkGetResponseIfOnline")(e, "GET", null, r("WAWebXHR").RESP_TYPE.ARRAY_BUFFER);
		return t ? Promise.resolve({
			result: t.response,
			status: t.status
		}) : Promise.resolve(null);
	}
	function D() {
		return !!o("WAWebMediaLoad").canPlayOgg;
	}
	async function x(e, t) {
		t.retain();
		var n, a;
		try {
			switch (e.type) {
				case o("WAWebMediaTypes").TYPE.VIDEO:
				case o("WAWebMediaTypes").TYPE.PTV: {
					var i = t.forceToBlob(), l = await o("WAWebImageUtils").generateVideoThumbsAndDuration({
						file: i,
						maxDimensions: [o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE],
						debugHint: "gatherAndSetMetadata"
					}), s = l.thumbs, u = s[0], c = l.duration, d = await r("WAWebMediaOpaqueData").createFromBase64Jpeg(r("WAWebURLUtils").parseDataURL(u.url).data);
					n = {
						mediaBlob: t,
						renderableUrl: t.url(),
						fullWidth: u.fullWidth,
						fullHeight: u.fullHeight,
						duration: c !== void 0 ? "" + Math.ceil(c) : void 0,
						fullPreviewData: d
					};
					break;
				}
				case o("WAWebMediaTypes").TYPE.AUDIO: {
					var p = await b(t);
					p.retain(), n = {
						mediaBlob: p,
						renderableUrl: p.url()
					}, a = function() {
						return p.autorelease();
					};
					break;
				}
				default: (e.type === o("WAWebMediaTypes").TYPE.IMAGE || e.type === o("WAWebMediaTypes").TYPE.STICKER) && o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["object type: ", ""])), e.type || "").sendLogs("Entering gatherAndSetMetadata (with OpaqueData) unexpectedly"), n = {
					mediaBlob: t,
					renderableUrl: t.url()
				};
			}
			e.consolidate(n);
		} catch (n) {
			if (n instanceof o("WAWebMediaLoadErrors").MediaUnsupportedError) e.consolidate({
				mediaBlob: t,
				renderableUrl: t.url()
			});
			else throw n;
		} finally {
			t.autorelease(), a != null && a();
		}
	}
	function $(e) {
		return e === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO;
	}
	function P(e) {
		var t = e === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER, n = e === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.GIF || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_GIF || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PPIC || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTV || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTV || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.TEMPLATE || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_IMAGE || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_VIDEO;
		return t || n;
	}
	function N(e, t) {
		return new Promise(function(n) {
			var r = new Image();
			r.setAttribute("crossorigin", "anonymous"), r.onload = function() {
				var e = t.map(function(e) {
					var t = e.height, n = e.imageFormat, o = e.imageFormatOptions, a = e.keepAspectRatio, i = e.minHeight, l = e.minWidth, s = e.width;
					if (l != null && r.width < l || i != null && r.height < i) return null;
					var u = document.createElement("canvas"), c = u.getContext("2d"), d = 0, m = 0, p, _;
					if (r.height > r.width) {
						var f = r.height / r.width;
						p = s, _ = f * s, m = -(_ - t) / 2;
					} else {
						var g = r.width / r.height;
						_ = t, p = g * t, d = -(p - s) / 2;
					}
					return a === !0 ? (u.width = p, u.height = _) : (u.width = s, u.height = t), c.drawImage(r, d, m, p, _), {
						dataUrl: u.toDataURL(n, o).replace("data:image/jpeg;base64,", ""),
						width: u.width,
						height: u.height
					};
				});
				n(e);
			}, r.src = e;
		});
	}
	function M(e) {
		return e ? e.fullPreviewData ? e.fullPreviewData.url() : e.preview instanceof r("WAWebMediaOpaqueData") ? e.preview.url() : null : null;
	}
	l.getImageWidthHeight = _, l.getImageWidthHeightNoOpaque = f, l.opaqueDataToArrayBuffer = h, l.decodeWebpToRGBANoOpaque = y, l.parseWebpNoOpaque = C, l.getImageMetadata = v, l.processRawImage = S, l.processRawSticker = R, l.processRawAudioVideo = L, l.getRawDocumentMimetype = E, l.processRawDocument = k, l.fetchMedia = T, l.canPlayOgg = D, l.gatherAndSetMetadata = x, l.shouldUseMediaCache = $, l.shouldUseLruMediaStore = P, l.getResizedThumbData = N, l.getHighestQualityThumbnailUrl = M;
}), 98);
