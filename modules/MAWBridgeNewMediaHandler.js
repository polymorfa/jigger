__d("MAWBridgeNewMediaHandler", [
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSThreadMediaGalleryGroup",
	"MAWDbMedia",
	"MAWMedia",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"Promise",
	"ReQL",
	"WAMediaHdType",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t, n, a, i, l) {
		var c, d, m, p, _, f, g, h = t.messagesSortOrderMs ? (s || (s = o("I64"))).of_float(t.messagesSortOrderMs[n]) : t.sortOrderMs != null ? (s || (s = o("I64"))).of_float(t.sortOrderMs) : (s || (s = o("I64"))).of_float(t.ts * 1e3);
		return {
			accessibilitySummaryText: t.accessibilitySummaryText,
			attachmentFbid: a,
			attachmentIndex: (c = e == null ? void 0 : e.attachmentIndex) != null ? c : (s || (s = o("I64"))).zero,
			attachmentType: (d = e == null ? void 0 : e.attachmentType) != null ? d : o("MAWMedia").mediaTypeToMessageAttachmentType(t.mediaType, t.ephemeralMediaViewMode),
			authorityLevel: (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE),
			ephemeralMediaState: t.ephemeralMediaState != null ? (s || (s = o("I64"))).of_int32(t.ephemeralMediaState) : e == null ? void 0 : e.ephemeralMediaState,
			ephemeralMediaViewMode: t.ephemeralMediaViewMode != null ? (s || (s = o("I64"))).of_int32(t.ephemeralMediaViewMode) : e == null ? void 0 : e.ephemeralMediaViewMode,
			filename: (m = (p = t.filenames != null ? t.filenames[n] : null) != null ? p : t.defaultFilename) != null ? m : e == null ? void 0 : e.filename,
			filesize: t.filesize == null ? e == null ? void 0 : e.filesize : (s || (s = o("I64"))).of_int32(t.filesize),
			gifPlayback: t.gifPlayback,
			hasMedia: t.hasMedia,
			hasXma: !1,
			isHd: ((_ = t.hdTypes) == null ? void 0 : _[n]) === o("WAMediaHdType").HD_TYPE_HQ_4K,
			isSharable: !1,
			messageId: n,
			offlineAttachmentId: i,
			playableDurationMs: t.duration == null ? e == null ? void 0 : e.playableDurationMs : (s || (s = o("I64"))).of_int32(t.duration),
			previewHeight: t.previewHeight == null ? e == null ? void 0 : e.previewHeight : (s || (s = o("I64"))).of_int32(t.previewHeight),
			previewHeightLarge: t.previewHeightLarge == null ? e == null ? void 0 : e.previewHeightLarge : (s || (s = o("I64"))).of_int32(t.previewHeightLarge),
			previewWidth: t.previewWidth == null ? e == null ? void 0 : e.previewWidth : (s || (s = o("I64"))).of_int32(t.previewWidth),
			previewWidthLarge: t.previewWidthLarge == null ? e == null ? void 0 : e.previewWidthLarge : (s || (s = o("I64"))).of_int32(t.previewWidthLarge),
			threadKey: l,
			timestampMs: h,
			titleText: t.accessibilitySummaryText,
			transportKey: (f = t.transportKey) != null ? f : "WhatsApp",
			waveformData: (g = t.waveformData) != null ? g : e == null ? void 0 : e.waveformData
		};
	}
	function d(e, t) {
		var n = t.hasPreviewMedia != null;
		return {
			id: e,
			mainMediaStatus: t.hasMedia ? (u || (u = o("LSIntEnum"))).ofNumber(1) : (u || (u = o("LSIntEnum"))).ofNumber(4),
			mainMediaStatusDetails: "initial_media_download",
			previewMediaStatus: n ? t.hasPreviewMedia === !0 ? (u || (u = o("LSIntEnum"))).ofNumber(1) : (u || (u = o("LSIntEnum"))).ofNumber(4) : void 0,
			previewMediaStatusDetails: n ? "initial_media_download" : void 0
		};
	}
	function m(e, t, n) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
			var i = r.mediaId, l = r.msgIds, u = r.offlineAttachmentId, d = r.plaintextHash;
			yield _(t, r);
			var m = g(i, d), p = u != null ? u : m, f = !1, y = h(r), C = null;
			if (C = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.attachments_ranges_v2__generated).getKeyRange(a).filter(function(e) {
				return (s || (s = o("I64"))).equal(e.mediaGroup, y);
			})), yield (e || (e = n("Promise"))).all(l.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = t.attachments, i = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(n).getKeyRange(a, e)), l = c(i, r, e, m, p, a);
					if (r.skipShouldUpdateHasMore !== !0 && C != null && (s || (s = o("I64"))).le(l.timestampMs, C.minTimestampMs) && (f = !0), i != null) {
						var u;
						return n.upsert([
							i.threadKey,
							i.messageId,
							i.attachmentFbid
						], babelHelpers.extends({}, l, { transportKey: (u = i.transportKey) != null ? u : l.transportKey }));
					} else return n.add(l);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})())), C != null && C.hasMoreBefore !== !0 && f) {
				var b = babelHelpers.extends({}, C, { hasMoreBefore: !0 });
				yield t.attachments_ranges_v2__generated.upsert([
					C.threadKey,
					C.mediaGroup,
					C.minTimestampMs
				], b);
			}
		}), p.apply(this, arguments);
	}
	function _(e, t) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = t.mediaId, a = t.plaintextHash;
			if (a == null) {
				r("FBLogger")("messenger_web_media").mustfix("[NewMedia] No valid media plaintextHash found in reducer %s", n);
				return;
			}
			var i = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.client_media_status).getKeyRange(a)), l = i != null && !(s || (s = o("I64"))).equal(i.mainMediaStatus, (u || (u = o("LSIntEnum"))).ofNumber(4));
			l || (yield e.client_media_status.add(d(a, t)));
		}), f.apply(this, arguments);
	}
	function g(e, t) {
		return "" + (t != null ? t : e.toString());
	}
	function h(e) {
		switch (e.mediaType) {
			case o("MAWDbMedia").MEDIA_TYPE.IMAGE:
			case o("MAWDbMedia").MEDIA_TYPE.VIDEO: return (u || (u = o("LSIntEnum"))).ofNumber(r("LSThreadMediaGalleryGroup").PHOTOS_AND_VIDEOS);
			case o("MAWDbMedia").MEDIA_TYPE.DOCUMENT_FILE: return (u || (u = o("LSIntEnum"))).ofNumber(r("LSThreadMediaGalleryGroup").FILES_ONLY);
			default: return (u || (u = o("LSIntEnum"))).ofNumber(r("LSThreadMediaGalleryGroup").PHOTOS_AND_VIDEOS);
		}
	}
	function y(e, t) {
		var n = t.threadJid;
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, n, "MAWBridgeNewMediaHandler", function(e, n) {
			return m(e, t, n);
		});
	}
	l.getAttachmentFromBridgeMedia = c, l.callWithoutWaitingForAnything = m, l.getAttachmentID = g, l.call = y;
}), 98);
