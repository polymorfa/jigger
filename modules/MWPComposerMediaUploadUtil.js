__d("MWPComposerMediaUploadUtil", [
	"FileMercuryUploadService",
	"I64",
	"LSGetAttachmentType",
	"LSIntEnum",
	"MessagingAttachmentType",
	"Promise",
	"URI",
	"WACommsConnectionState",
	"asyncToGeneratorRuntime",
	"clearTimeout",
	"cr:37601",
	"emptyFunction",
	"promiseDone",
	"setTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = 3e4;
	function m(e, t) {
		var n = (c || (c = o("LSIntEnum"))).unwrapIntEnum(e);
		return n === r("MessagingAttachmentType").VIDEO ? "video" : n === r("MessagingAttachmentType").IMAGE ? "image" : n === r("MessagingAttachmentType").ANIMATED_IMAGE ? "animated_image" : n === r("MessagingAttachmentType").AUDIO ? t ? "voice_clip" : "audio" : n === r("MessagingAttachmentType").FILE ? "file" : null;
	}
	var p = function() {
		return new (u || (u = (n("Promise"))))(function(e, t) {
			var n = !1, a = function(t) {
				n || (n = !0, r("clearTimeout")(i), t());
			}, i = r("setTimeout")(function() {
				return a(function() {
					return t("Timed out waiting for WA comms");
				});
			}, d);
			try {
				o("WACommsConnectionState").WACommsConnectionState.waitForConnection().then(function() {
					return a(function() {
						return e();
					});
				}, function() {
					return a(function() {
						return t("WA comms disconnected");
					});
				});
			} catch (e) {
				a(function() {
					return t(e);
				});
			}
		});
	};
	function _(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, s, c, d, _, f, g, h, y, C, b) {
			if (a === void 0 && (a = r("emptyFunction")), l === void 0 && (l = r("emptyFunction")), s === void 0 && (s = !1), n("cr:37601") == null || y == null || _ === !0) {
				r("promiseDone")(o("FileMercuryUploadService").uploadByMercuryUploadService({
					chatSupportUserId: f,
					chatSupportUserNonce: h,
					files: c,
					isChatSupportUser: _,
					isVoiceClip: s,
					onUploadFailure: l,
					onUploadProgress: a,
					onUploadStart: t,
					onUploadSuccess: i,
					requestUserID: b,
					retryCount: 5,
					uploadIDs: d,
					uploadIdToQplFlow: C,
					voiceClipWaveformData: g
				}));
				return;
			}
			var v = yield (u || (u = n("Promise"))).all(c.map(function(e) {
				return o("LSGetAttachmentType").LSGetAttachmentType(e);
			})), S = c.map(function(e, t) {
				return {
					attachmentType: m(v[t], s === !0),
					file: e,
					uploadID: d[t]
				};
			}), R = (e || (e = r("URI"))).getRequestURI().getDomain(), L = /workplace.com/i.test(R) ? "workplace.com" : /messenger.com/i.test(R) ? "messenger.com" : "facebook.com", E = n("cr:37601")({
				filesToUpload: S,
				onUploadFailure: l,
				onUploadStart: t,
				onUploadSuccess: i,
				serviceDomain: L,
				uploadIdToQplFlow: C,
				userID: y,
				voiceClipWaveformData: g,
				waitForOnline: p
			});
			E.length > 0 && r("promiseDone")(o("FileMercuryUploadService").uploadByMercuryUploadService({
				chatSupportUserId: f,
				chatSupportUserNonce: h,
				files: E.map(function(e) {
					return c[e];
				}),
				isChatSupportUser: _,
				isVoiceClip: s,
				onUploadFailure: l,
				onUploadProgress: a,
				onUploadStart: t,
				onUploadSuccess: i,
				requestUserID: b,
				retryCount: 5,
				uploadIDs: E.map(function(e) {
					return d[e];
				}),
				uploadIdToQplFlow: C,
				voiceClipWaveformData: g
			}));
		}), f.apply(this, arguments);
	}
	function g(e, t, n, a) {
		var i;
		return {
			action_url: void 0,
			attachment_fbid: e,
			attachment_index: (s || (s = o("I64"))).zero,
			attachment_type: (c || (c = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO),
			cta1_title: void 0,
			cta2_title: void 0,
			cta3_title: void 0,
			description_text: void 0,
			filename: void 0,
			filesize: void 0,
			has_media: !0,
			has_xma: !1,
			image_url: void 0,
			mini_preview: void 0,
			offline_attachment_id: e,
			original_file_hash: void 0,
			playable_duration_ms: s.of_float(n * 1e3),
			playable_url: URL.createObjectURL(t),
			playable_url_mime_type: t.type,
			preview_height: void 0,
			preview_url: void 0,
			preview_url_mime_type: void 0,
			preview_width: void 0,
			sampling_frequency_hz: a == null ? void 0 : a.sampling_freq,
			source_text: void 0,
			subtitle_text: void 0,
			title_text: void 0,
			waveform_data: a == null || (i = a.amplitudes) == null ? void 0 : i.join(","),
			xma_layout_type: void 0,
			xmas_template_type: void 0
		};
	}
	function h(e, t, n) {
		var a = e.map(function(e) {
			return {
				action_url: void 0,
				attachment_fbid: e.offlineAttachmentId,
				attachment_index: (s || (s = o("I64"))).zero,
				attachment_type: e.attachmentType,
				cta1_title: void 0,
				cta2_title: void 0,
				cta3_title: void 0,
				description_text: void 0,
				filename: e.filename,
				filesize: void 0,
				has_media: !0,
				has_xma: !1,
				image_url: void 0,
				mini_preview: void 0,
				offline_attachment_id: e.offlineAttachmentId,
				original_file_hash: void 0,
				playable_duration_ms: void 0,
				playable_url: e.previewUrl,
				playable_url_mime_type: e.mimeType,
				preview_height: e.previewHeight,
				preview_url: e.previewUrl,
				preview_url_mime_type: void 0,
				preview_width: e.previewWidth,
				source_text: void 0,
				subtitle_text: void 0,
				title_text: void 0,
				xma_layout_type: void 0,
				xmas_template_type: void 0
			};
		}), i = [], l = [];
		return a.forEach(function(e) {
			(s || (s = o("I64"))).equal(e.attachment_type, (c || (c = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE)) && !t ? (l.push(e), n === !0 && l.length === 30 && (i.unshift([].concat(l)), l.length = 0)) : i.push([e]);
		}), l.length > 0 && (n === !0 ? i.push(l) : i.unshift(l)), i.map(function(e) {
			return e.map(function(e, t) {
				return babelHelpers.extends({}, e, { attachment_index: (s || (s = o("I64"))).of_int32(t) });
			});
		});
	}
	l.startUpload = _, l.getAudioAttachment = g, l.createPartitionedAttachments = h;
}), 98);
