__d("MAWBridgeNewMediaHandler", [
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSThreadMediaGalleryGroup",
	"MAWDbMedia",
	"MAWMedia",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"ReQL",
	"WAMediaHdType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, n, a, i, l, u) {
		var c, d, m, p, _, f, g, h = n.messagesSortOrderMs ? (e || (e = o("I64"))).of_float(n.messagesSortOrderMs[a]) : n.sortOrderMs != null ? (e || (e = o("I64"))).of_float(n.sortOrderMs) : (e || (e = o("I64"))).of_float(n.ts * 1e3);
		return {
			accessibilitySummaryText: n.accessibilitySummaryText,
			attachmentFbid: i,
			attachmentIndex: (c = t == null ? void 0 : t.attachmentIndex) != null ? c : (e || (e = o("I64"))).zero,
			attachmentType: (d = t == null ? void 0 : t.attachmentType) != null ? d : o("MAWMedia").mediaTypeToMessageAttachmentType(n.mediaType, n.ephemeralMediaViewMode),
			authorityLevel: (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE),
			ephemeralMediaState: n.ephemeralMediaState != null ? (e || (e = o("I64"))).of_int32(n.ephemeralMediaState) : t == null ? void 0 : t.ephemeralMediaState,
			ephemeralMediaViewMode: n.ephemeralMediaViewMode != null ? (e || (e = o("I64"))).of_int32(n.ephemeralMediaViewMode) : t == null ? void 0 : t.ephemeralMediaViewMode,
			filename: (m = (p = n.filenames != null ? n.filenames[a] : null) != null ? p : n.defaultFilename) != null ? m : t == null ? void 0 : t.filename,
			filesize: n.filesize == null ? t == null ? void 0 : t.filesize : (e || (e = o("I64"))).of_int32(n.filesize),
			gifPlayback: n.gifPlayback,
			hasMedia: n.hasMedia,
			hasXma: !1,
			isHd: ((_ = n.hdTypes) == null ? void 0 : _[a]) === o("WAMediaHdType").HD_TYPE_HQ_4K,
			isSharable: !1,
			messageId: a,
			offlineAttachmentId: l,
			playableDurationMs: n.duration == null ? t == null ? void 0 : t.playableDurationMs : (e || (e = o("I64"))).of_int32(n.duration),
			previewHeight: n.previewHeight == null ? t == null ? void 0 : t.previewHeight : (e || (e = o("I64"))).of_int32(n.previewHeight),
			previewHeightLarge: n.previewHeightLarge == null ? t == null ? void 0 : t.previewHeightLarge : (e || (e = o("I64"))).of_int32(n.previewHeightLarge),
			previewWidth: n.previewWidth == null ? t == null ? void 0 : t.previewWidth : (e || (e = o("I64"))).of_int32(n.previewWidth),
			previewWidthLarge: n.previewWidthLarge == null ? t == null ? void 0 : t.previewWidthLarge : (e || (e = o("I64"))).of_int32(n.previewWidthLarge),
			threadKey: u,
			timestampMs: h,
			titleText: n.accessibilitySummaryText,
			transportKey: (f = n.transportKey) != null ? f : "WhatsApp",
			waveformData: (g = n.waveformData) != null ? g : t == null ? void 0 : t.waveformData
		};
	}
	function c(e, t) {
		var n = t.hasPreviewMedia != null;
		return {
			id: e,
			mainMediaStatus: t.hasMedia ? (s || (s = o("LSIntEnum"))).ofNumber(1) : (s || (s = o("LSIntEnum"))).ofNumber(4),
			mainMediaStatusDetails: "initial_media_download",
			previewMediaStatus: n ? t.hasPreviewMedia === !0 ? (s || (s = o("LSIntEnum"))).ofNumber(1) : (s || (s = o("LSIntEnum"))).ofNumber(4) : void 0,
			previewMediaStatusDetails: n ? "initial_media_download" : void 0
		};
	}
	async function d(t, n, r) {
		var a = n.mediaId, i = n.msgIds, l = n.offlineAttachmentId, s = n.plaintextHash;
		await m(t, n);
		var c = p(a, s), d = l != null ? l : c, f = !1, g = _(n), h = null;
		if (h = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.attachments_ranges_v2__generated).getKeyRange(r).filter(function(t) {
			return (e || (e = o("I64"))).equal(t.mediaGroup, g);
		})), await Promise.all(i.map(async function(a) {
			var i = t.attachments, l = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(i).getKeyRange(r, a)), s = u(l, n, a, c, d, r);
			if (n.skipShouldUpdateHasMore !== !0 && h != null && (e || (e = o("I64"))).le(s.timestampMs, h.minTimestampMs) && (f = !0), l != null) {
				var m;
				return i.upsert([
					l.threadKey,
					l.messageId,
					l.attachmentFbid
				], babelHelpers.extends({}, s, { transportKey: (m = l.transportKey) != null ? m : s.transportKey }));
			} else return i.add(s);
		})), h != null && h.hasMoreBefore !== !0 && f) {
			var y = babelHelpers.extends({}, h, { hasMoreBefore: !0 });
			await t.attachments_ranges_v2__generated.upsert([
				h.threadKey,
				h.mediaGroup,
				h.minTimestampMs
			], y);
		}
	}
	async function m(t, n) {
		var a = n.mediaId, i = n.plaintextHash;
		if (i == null) {
			r("FBLogger")("messenger_web_media").mustfix("[NewMedia] No valid media plaintextHash found in reducer %s", a);
			return;
		}
		var l = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.client_media_status).getKeyRange(i)), u = l != null && !(e || (e = o("I64"))).equal(l.mainMediaStatus, (s || (s = o("LSIntEnum"))).ofNumber(4));
		u || await t.client_media_status.add(c(i, n));
	}
	function p(e, t) {
		return "" + (t != null ? t : e.toString());
	}
	function _(e) {
		switch (e.mediaType) {
			case o("MAWDbMedia").MEDIA_TYPE.IMAGE:
			case o("MAWDbMedia").MEDIA_TYPE.VIDEO: return (s || (s = o("LSIntEnum"))).ofNumber(r("LSThreadMediaGalleryGroup").PHOTOS_AND_VIDEOS);
			case o("MAWDbMedia").MEDIA_TYPE.DOCUMENT_FILE: return (s || (s = o("LSIntEnum"))).ofNumber(r("LSThreadMediaGalleryGroup").FILES_ONLY);
			default: return (s || (s = o("LSIntEnum"))).ofNumber(r("LSThreadMediaGalleryGroup").PHOTOS_AND_VIDEOS);
		}
	}
	function f(e, t) {
		var n = t.threadJid;
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, n, "MAWBridgeNewMediaHandler", function(e, n) {
			return d(e, t, n);
		});
	}
	l.getAttachmentFromBridgeMedia = u, l.callWithoutWaitingForAnything = d, l.getAttachmentID = p, l.call = f;
}), 98);
