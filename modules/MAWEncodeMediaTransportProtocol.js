__d("MAWEncodeMediaTransportProtocol", [
	"MAWDbMedia",
	"WAMediaHdType",
	"WAMediaTransport.pb",
	"encodeProtobuf"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "image/jpeg", s = "image/webp", u = "video/mp4", c = "audio/wav", d = "audio/ogg", m = "image/gif", p = "application/octet-stream";
	function _(e) {
		switch (e) {
			case o("WAMediaHdType").HD_TYPE_NONE: return o("WAMediaTransport.pb").IMAGE_TRANSPORT_ANCILLARY_HD_TYPE.NONE;
			case o("WAMediaHdType").HD_TYPE_LQ_4K: return o("WAMediaTransport.pb").IMAGE_TRANSPORT_ANCILLARY_HD_TYPE.LQ_4K;
			case o("WAMediaHdType").HD_TYPE_HQ_4K: return o("WAMediaTransport.pb").IMAGE_TRANSPORT_ANCILLARY_HD_TYPE.HQ_4K;
			default: return;
		}
	}
	function f(t, n, r) {
		var a, i, l, s, u, c, d, m, p, f = {
			ancillary: {
				hdType: _((a = r == null ? void 0 : r.hdType) != null ? a : (i = t.validatedImageInfo) == null ? void 0 : i.hdType),
				height: (l = t.validatedImageInfo) == null ? void 0 : l.height,
				scanLengths: ((s = n.progressiveJpegDetails) == null ? void 0 : s.scanLengths) || [],
				scansSidecar: (u = n.progressiveJpegDetails) == null ? void 0 : u.sidecar,
				width: (c = t.validatedImageInfo) == null ? void 0 : c.width
			},
			integral: { transport: {
				ancillary: {
					fileLength: t.size,
					mimetype: e,
					objectId: n.objectId,
					thumbnail: {
						downloadableThumbnail: n.downloadableThumbnail,
						jpegThumbnail: n.downloadableThumbnail || (d = t.validatedImageInfo) == null ? void 0 : d.jpegThumbnail,
						thumbnailHeight: (m = t.validatedImageInfo) == null ? void 0 : m.jpegThumbnailHeight,
						thumbnailWidth: (p = t.validatedImageInfo) == null ? void 0 : p.jpegThumbnailWidth
					}
				},
				integral: {
					directPath: n.directPath,
					fileEncSha256: n.fileEncSha256,
					fileSha256: n.fileSha256,
					mediaKey: n.mediaKey,
					mediaKeyTimestamp: n.mediaKeyTimestamp
				}
			} }
		};
		return o("encodeProtobuf").encodeProtobuf(o("WAMediaTransport.pb").ImageTransportSpec, f).readBuffer();
	}
	function g(e, t, n) {
		var r = f(e, t, n);
		return { payload: { content: { imageMessage: {
			caption: { mentionedJid: [] },
			image: {
				payload: r,
				version: 1
			}
		} } } };
	}
	function h(e, t) {
		var n, r, a, i, l = {
			ancillary: {
				accessibilityLabel: e.accessibilitySummaryText,
				height: (n = e.validatedImageInfo) == null ? void 0 : n.height,
				width: (r = e.validatedImageInfo) == null ? void 0 : r.width
			},
			integral: { transport: {
				ancillary: {
					fileLength: e.size,
					mimetype: s,
					objectId: t.objectId,
					thumbnail: {
						thumbnailHeight: (a = e.validatedImageInfo) == null ? void 0 : a.jpegThumbnailHeight,
						thumbnailWidth: (i = e.validatedImageInfo) == null ? void 0 : i.jpegThumbnailWidth
					}
				},
				integral: {
					directPath: t.directPath,
					fileEncSha256: t.fileEncSha256,
					fileSha256: t.fileSha256,
					mediaKey: t.mediaKey,
					mediaKeyTimestamp: t.mediaKeyTimestamp
				}
			} }
		};
		return o("encodeProtobuf").encodeProtobuf(o("WAMediaTransport.pb").StickerTransportSpec, l).readBuffer();
	}
	function y(e, t) {
		var n = h(e, t);
		return { payload: { content: { stickerMessage: { sticker: {
			payload: n,
			version: 1
		} } } } };
	}
	function C(e, t) {
		var n, r = e.mediaType === o("MAWDbMedia").MEDIA_TYPE.GIF, a = e.isVideoGif === !0, i = r ? e.validatedImageInfo : e.validatedVideoInfo, l = {
			ancillary: {
				accessibilityLabel: e.accessibilitySummaryText,
				gifPlayback: r || a,
				height: i == null ? void 0 : i.height,
				seconds: r || (n = e.validatedVideoInfo) == null ? void 0 : n.duration,
				sidecar: t.sidecar,
				width: i == null ? void 0 : i.width
			},
			integral: { transport: {
				ancillary: {
					fileLength: e.size,
					mimetype: r ? m : u,
					objectId: t.objectId,
					thumbnail: r ? {
						thumbnailHeight: i == null ? void 0 : i.jpegThumbnailHeight,
						thumbnailWidth: i == null ? void 0 : i.jpegThumbnailWidth
					} : {
						downloadableThumbnail: t.downloadableThumbnail,
						jpegThumbnail: t.downloadableThumbnail || i == null ? void 0 : i.jpegThumbnail,
						thumbnailHeight: i == null ? void 0 : i.jpegThumbnailHeight,
						thumbnailWidth: i == null ? void 0 : i.jpegThumbnailWidth
					}
				},
				integral: {
					directPath: t.directPath,
					fileEncSha256: t.fileEncSha256,
					fileSha256: t.fileSha256,
					mediaKey: t.mediaKey,
					mediaKeyTimestamp: t.mediaKeyTimestamp
				}
			} }
		};
		return o("encodeProtobuf").encodeProtobuf(o("WAMediaTransport.pb").VideoTransportSpec, l).readBuffer();
	}
	function b(e, t) {
		var n = C(e, t);
		return { payload: { content: { videoMessage: {
			caption: { mentionedJid: [] },
			video: {
				payload: n,
				version: 1
			}
		} } } };
	}
	var v = new ArrayBuffer(0);
	function S(e, t) {
		var n, r, a = {
			ancillary: {
				seconds: (n = e.validatedAudioInfo) == null ? void 0 : n.duration,
				waveform: (r = e.validatedAudioInfo) == null ? void 0 : r.waveform
			},
			integral: {
				audioFormat: o("WAMediaTransport.pb").AUDIO_TRANSPORT_INTEGRAL_AUDIO_FORMAT.OPUS,
				transport: {
					ancillary: {
						fileLength: e.size,
						mimetype: d,
						objectId: t.objectId,
						thumbnail: { jpegThumbnail: v }
					},
					integral: {
						directPath: t.directPath,
						fileEncSha256: t.fileEncSha256,
						fileSha256: t.fileSha256,
						mediaKey: t.mediaKey,
						mediaKeyTimestamp: t.mediaKeyTimestamp
					}
				}
			}
		};
		return o("encodeProtobuf").encodeProtobuf(o("WAMediaTransport.pb").AudioTransportSpec, a).readBuffer();
	}
	function R(e, t) {
		var n = S(e, t);
		return { payload: { content: { audioMessage: {
			audio: {
				payload: n,
				version: 1
			},
			ptt: !0
		} } } };
	}
	function L(e, t) {
		var n = {
			ancillary: {},
			integral: { transport: {
				ancillary: {
					fileLength: e.size,
					mimetype: p,
					objectId: t.objectId,
					thumbnail: {
						jpegThumbnail: new ArrayBuffer(1),
						thumbnailHeight: 1,
						thumbnailWidth: 1
					}
				},
				integral: {
					directPath: t.directPath,
					fileEncSha256: t.fileEncSha256,
					fileSha256: t.fileSha256,
					mediaKey: t.mediaKey,
					mediaKeyTimestamp: t.mediaKeyTimestamp
				}
			} }
		};
		return o("encodeProtobuf").encodeProtobuf(o("WAMediaTransport.pb").DocumentTransportSpec, n).readBuffer();
	}
	function E(e, t) {
		var n, r = L(e, t);
		return { payload: { content: { documentMessage: {
			document: {
				payload: r,
				version: 1
			},
			fileName: (n = e.validatedDocumentFileInfo) == null ? void 0 : n.filename
		} } } };
	}
	l.IMAGE_MIME_TYPE = e, l.STICKER_MIME_TYPE = s, l.VIDEO_MIME_TYPE = u, l.AUDIO_WAV_MIME_TYPE = c, l.AUDIO_OGG_MIME_TYPE = d, l.GIF_MIME_TYPE = m, l.FILE_MIME_TYPE = p, l.encodeValidatedMediaToImageTransport = f, l.encodeValidatedImageMessage = g, l.encodeValidatedStickerMessage = y, l.encodeValidatedMediaToVideoTransport = C, l.encodeValidatedVideoMessage = b, l.emptyAudioFileArrayBuffer = v, l.encodeValidatedAudioMessage = R, l.encodeValidatedFileMessage = E;
}), 98);
