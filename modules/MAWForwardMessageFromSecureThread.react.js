__d("MAWForwardMessageFromSecureThread.react", [
	"FBLogger",
	"I64",
	"LSFactory",
	"LSHotEmojiSize",
	"LSInsertNewMediaSendStoredProcedure",
	"LSIntEnum",
	"LSLocalApplyOptimisticMessageWithAttachmentsStoredProcedure",
	"LSMailboxType",
	"LSMarkSubJobCompletedV2StoredProcedure",
	"LSOptimisticSendMessageV2StoredProcedure",
	"LSOptimisticSendXMAMessageForwardFromSecureThreadStoredProcedure",
	"LSShape",
	"LSVec",
	"MAWAudioUtils",
	"MAWBridgeSendAndReceive",
	"MAWDbMedia",
	"MWPComposerMediaUploadUtil",
	"MWPOpenComposerUtils",
	"MessagePowerUp",
	"MessagingAttachmentType",
	"OfflineThreadingId",
	"Promise",
	"ReQL",
	"WAHashUtils",
	"asyncToGeneratorRuntime",
	"cr:2472",
	"cr:332",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t, n) {
		return {
			action_url: void 0,
			attachment_fbid: t,
			attachment_index: (u || (u = o("I64"))).zero,
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
			offline_attachment_id: t,
			original_file_hash: void 0,
			playable_duration_ms: e.playableDurationMs,
			playable_url: URL.createObjectURL(n),
			playable_url_mime_type: n.type,
			preview_height: void 0,
			preview_url: void 0,
			preview_url_mime_type: void 0,
			preview_width: void 0,
			source_text: void 0,
			subtitle_text: void 0,
			title_text: void 0,
			waveform_data: e.waveformData,
			xma_layout_type: void 0,
			xmas_template_type: void 0
		};
	}
	function d(e, t, n, r) {
		var a;
		return {
			action_url: (a = t == null ? void 0 : t.actionUrl) != null ? a : t == null ? void 0 : t.nativeUrl,
			attachment_fbid: n,
			attachment_index: (u || (u = o("I64"))).zero,
			attachment_type: e.attachmentType,
			cta1_title: e.cta1Title,
			cta2_title: e.cta2Title,
			cta3_title: e.cta3Title,
			description_text: e.descriptionText,
			filename: e.filename,
			filesize: e.filesize,
			has_media: !1,
			has_xma: !0,
			image_url: void 0,
			mini_preview: void 0,
			offline_attachment_id: n,
			original_file_hash: void 0,
			playable_duration_ms: void 0,
			playable_url: r != null ? URL.createObjectURL(r) : void 0,
			playable_url_mime_type: r == null ? void 0 : r.type,
			preview_height: void 0,
			preview_url: r != null ? URL.createObjectURL(r) : void 0,
			preview_url_mime_type: r == null ? void 0 : r.type,
			preview_width: void 0,
			source_text: e.sourceText,
			subtitle_text: e.subtitleText,
			title_text: e.titleText,
			xma_layout_type: e.xmaLayoutType,
			xmas_template_type: e.xmasTemplateType
		};
	}
	function m(t, a, i, l, s, u, c, d) {
		var m = r("LSFactory")(d);
		return r("LSOptimisticSendXMAMessageForwardFromSecureThreadStoredProcedure")(m, {
			attachments: r("LSVec").ofArray([o("LSShape").ofRecord(u)]),
			isForwarded: s,
			senderId: t,
			source: c,
			text: l != null ? l : void 0,
			threadKey: a,
			threadType: i
		}).then(function() {
			return (e || (e = n("Promise"))).resolve();
		});
	}
	function p(e, t) {
		if (t != null) return {
			amplitudes: t.split(",").map(parseFloat),
			sampling_freq: e != null ? e : o("MAWAudioUtils").WAVEFORM_SAMPLE_RATE
		};
	}
	function _(t, a, l, c, d, m, _, f, g) {
		var h = r("LSFactory")(f);
		return r("LSLocalApplyOptimisticMessageWithAttachmentsStoredProcedure")(h, {
			attachments: r("LSVec").ofArray([o("LSShape").ofRecord(a)]),
			isForwarded: m,
			senderId: _,
			threadKey: d,
			threadType: c
		}).then(function(t) {
			var r = t[0], a = t[1];
			return f.messages_optimistic_context.add({
				externalAttachmentUrl: void 0,
				initiatingSource: void 0,
				markThreadRead: !1,
				messageId: void 0,
				offlineThreadingId: r,
				platformRef: void 0,
				platformToken: void 0,
				replySourceId: void 0,
				replySourceType: void 0,
				sendType: void 0,
				skipUrlPreviewGen: void 0,
				taskId: (u || (u = o("I64"))).of_string(r),
				threadAttributionSource: g,
				threadKey: d
			}).then(function() {
				return (e || (e = n("Promise"))).resolve(r);
			});
		}).then(function(t) {
			var i = a.attachment_fbid;
			return r("LSInsertNewMediaSendStoredProcedure")(h, {
				attachmentType: a.attachment_type,
				inMessageIndex: (u || (u = o("I64"))).zero,
				isSecure: !1,
				offlineAttachmentId: i,
				offlineThreadingId: t,
				sendByServer: !1,
				shouldTranscode: !1,
				useDoublePhase: !1
			}).then(function() {
				return (e || (e = n("Promise"))).resolve([t, i]);
			});
		}).then(function(e) {
			var n = e[0], c = e[1], d = function(a, l) {
				l == null || l.length === 0 || r("promiseDone")(t.runInTransaction(function(e) {
					var t = r("LSFactory")(e);
					return r("LSMarkSubJobCompletedV2StoredProcedure")(t, {
						fbid: (u || (u = o("I64"))).of_string(l),
						offlineAttachmentId: c
					}).then(function() {
						return o("MWPOpenComposerUtils").resumeSendJob(t, n);
					});
				}, "readwrite", void 0, void 0, i.id + ":223"));
			};
			return o("MWPComposerMediaUploadUtil").startUpload(void 0, void 0, d, void 0, (u || (u = o("I64"))).equal(a.attachment_type, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO)), [l], [c], void 0, void 0, p(a.sampling_frequency_hz, a.waveform_data), void 0, void 0);
		});
	}
	function f(e, t, n, r, o, a, i, l, s) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, l, f, g, h, y, C, b) {
			if (h != null) {
				var v = h.attachmentType;
				if (!((u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO)) || (u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE)) || (u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)) || (u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE)) || (u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").FILE)) || (u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA)))) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("We do not support forwarding this type");
				var S = null;
				if (!(u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA)) && (isFinite(h.attachmentFbid) ? S = yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getBlobDataUrlByMediaId", {
					description: "MAWForwardMessageFromSecureThread",
					mediaId: o("MAWDbMedia").convertNumberToMediaId(Number.parseInt(h.attachmentFbid, 10))
				}) : S = yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getBlobDataUrlByHashedPlaintextHash", {
					description: "MAWForwardMessageFromSecureThread",
					plaintextHash: o("WAHashUtils").stringToPlaintextHash(h.attachmentFbid)
				}).then(function(e) {
					return n("cr:332") != null && n("cr:332").runBlobReadAndCompareResult({
						fileName: h.attachmentFbid,
						idbBlob: e
					}), e;
				}), S == null)) return;
				yield t.runInTransaction(function(i) {
					switch (!0) {
						case (u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO)): {
							var R;
							if (S == null) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("Blob can not be null for MessagingAttachmentType.AUDIO");
							var L = new File([S], "mediaForwardedFromSecureThread", { type: S.type }), E = o("OfflineThreadingId").createOfflineThreadingID(), k = o("MWPComposerMediaUploadUtil").getAudioAttachment(E, L, (u || (u = o("I64"))).to_int32((R = h.playableDurationMs) != null ? R : (u || (u = o("I64"))).zero) / 1e3, p(h.samplingFrequencyHz != null ? (u || (u = o("I64"))).to_int32(h.samplingFrequencyHz) : void 0, h.waveformData));
							return _(t, k, L, l, a, g, y, i, C);
						}
						case (u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA)): {
							var I;
							return o("ReQL").firstAsync(o("ReQL").fromTableDescending(i.attachment_ctas).getKeyRange((I = h.defaultCtaId) != null ? I : (u || (u = o("I64"))).zero)).then(function(t) {
								var a = h.xmaPreviewFbid;
								if (a == null) return r("FBLogger")("messenger_web_sharing").mustfix("XMA preview fbid is null when forwarding XMA"), (e || (e = n("Promise"))).resolve([t, void 0]);
								var i = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getBlobDataUrlByHashedPlaintextHash", {
									description: "MAWForwardMessageFromSecureThread",
									plaintextHash: o("WAHashUtils").stringToPlaintextHash(a)
								}).then(function(e) {
									return n("cr:332") != null && n("cr:332").runBlobReadAndCompareResult({
										fileName: h.attachmentFbid,
										idbBlob: e
									}), e;
								});
								return i.then(function(r) {
									return (e || (e = n("Promise"))).resolve([t, r]);
								}).catch(function(o) {
									return r("FBLogger")("messenger_web_sharing").catching(o).warn("Unable to getBlobDataUrlByXMAId, from MAWForwardMessageFromSecureThread"), (e || (e = n("Promise"))).resolve([t, void 0]);
								});
							}).then(function(e) {
								var t = e[0], r = e[1], s = null;
								r != null && (s = new File([r], "xmaForwardedFromSecureThread", { type: r.type }));
								var u = o("OfflineThreadingId").createOfflineThreadingID(), c = d(h, t, u, s), p = f.text, _ = n("cr:2472") == null || p == null ? p : n("cr:2472").unvault(p);
								return m(y, a, l, b != null ? b : _, g, c, C, i);
							});
						}
						case (u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").FILE)):
						case (u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE)):
						case (u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)):
						case (u || (u = o("I64"))).equal(v, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE)): {
							var T;
							if (S == null) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("Blob can not be null for MessagingAttachmentType.AUDIO");
							var D = new File([S], (T = h.filename) != null ? T : "mediaForwardedFromSecureThread", { type: S.type }), x = o("OfflineThreadingId").createOfflineThreadingID(), $ = c(h, x, D);
							return _(t, $, D, l, a, g, y, i, C);
						}
						default: throw r("FBLogger")("messenger_web_sharing").mustfixThrow("We do not support forwarding this type");
					}
				}, "readwrite", void 0, void 0, i.id + ":333");
			} else {
				var R = f.text;
				if (R == null) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("We do not support forwarding this type");
				var L = n("cr:2472") == null ? R : n("cr:2472").unvault(R), E = L === "👍" && f.hotEmojiSize != null && (u || (u = o("I64"))).equal(f.hotEmojiSize, (s || (s = o("LSIntEnum"))).ofNumber(r("LSHotEmojiSize").SMALL)), k = E ? (u || (u = o("I64"))).of_string("369239263222822") : void 0;
				yield t.runInTransaction(function(e) {
					return r("LSOptimisticSendMessageV2StoredProcedure")(r("LSFactory")(e), {
						extraSendMessageParams: o("LSShape").ofRecord({
							calculate_denormalizations: !1,
							is_forwarded: g,
							mark_read: !1,
							power_up_style: (s || (s = o("LSIntEnum"))).ofNumber(r("MessagePowerUp").NONE),
							source: C,
							sticker_id: k
						}),
						mailboxType: s.ofNumber(r("LSMailboxType").MESSENGER),
						senderId: y,
						text: E ? void 0 : b != null ? b : L,
						threadKey: a,
						threadType: l
					});
				}, "readwrite", void 0, void 0, i.id + ":521");
			}
		}), g.apply(this, arguments);
	}
	l.getMediaAttachment = c, l.uploadAndSendMediaToOpenThread = _, l.forwardMessage = f;
}), 98);
