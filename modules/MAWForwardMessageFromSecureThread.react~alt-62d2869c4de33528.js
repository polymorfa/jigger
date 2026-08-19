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
	"ReQL",
	"WAHashUtils",
	"cr:2472",
	"cr:332",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, n, r) {
		return {
			action_url: void 0,
			attachment_fbid: n,
			attachment_index: (e || (e = o("I64"))).zero,
			attachment_type: t.attachmentType,
			cta1_title: void 0,
			cta2_title: void 0,
			cta3_title: void 0,
			description_text: void 0,
			filename: t.filename,
			filesize: void 0,
			has_media: !0,
			has_xma: !1,
			image_url: void 0,
			mini_preview: void 0,
			offline_attachment_id: n,
			original_file_hash: void 0,
			playable_duration_ms: t.playableDurationMs,
			playable_url: URL.createObjectURL(r),
			playable_url_mime_type: r.type,
			preview_height: void 0,
			preview_url: void 0,
			preview_url_mime_type: void 0,
			preview_width: void 0,
			source_text: void 0,
			subtitle_text: void 0,
			title_text: void 0,
			waveform_data: t.waveformData,
			xma_layout_type: void 0,
			xmas_template_type: void 0
		};
	}
	function c(t, n, r, a) {
		var i;
		return {
			action_url: (i = n == null ? void 0 : n.actionUrl) != null ? i : n == null ? void 0 : n.nativeUrl,
			attachment_fbid: r,
			attachment_index: (e || (e = o("I64"))).zero,
			attachment_type: t.attachmentType,
			cta1_title: t.cta1Title,
			cta2_title: t.cta2Title,
			cta3_title: t.cta3Title,
			description_text: t.descriptionText,
			filename: t.filename,
			filesize: t.filesize,
			has_media: !1,
			has_xma: !0,
			image_url: void 0,
			mini_preview: void 0,
			offline_attachment_id: r,
			original_file_hash: void 0,
			playable_duration_ms: void 0,
			playable_url: a != null ? URL.createObjectURL(a) : void 0,
			playable_url_mime_type: a == null ? void 0 : a.type,
			preview_height: void 0,
			preview_url: a != null ? URL.createObjectURL(a) : void 0,
			preview_url_mime_type: a == null ? void 0 : a.type,
			preview_width: void 0,
			source_text: t.sourceText,
			subtitle_text: t.subtitleText,
			title_text: t.titleText,
			xma_layout_type: t.xmaLayoutType,
			xmas_template_type: t.xmasTemplateType
		};
	}
	function d(e, t, n, a, i, l, s, u) {
		var c = r("LSFactory")(u);
		return r("LSOptimisticSendXMAMessageForwardFromSecureThreadStoredProcedure")(c, {
			attachments: r("LSVec").ofArray([o("LSShape").ofRecord(l)]),
			isForwarded: i,
			senderId: e,
			source: s,
			text: a != null ? a : void 0,
			threadKey: t,
			threadType: n
		}).then(function() {
			return Promise.resolve();
		});
	}
	function m(e, t) {
		if (t != null) return {
			amplitudes: t.split(",").map(parseFloat),
			sampling_freq: e != null ? e : o("MAWAudioUtils").WAVEFORM_SAMPLE_RATE
		};
	}
	function p(t, n, a, l, u, c, d, p, _) {
		var f = r("LSFactory")(p);
		return r("LSLocalApplyOptimisticMessageWithAttachmentsStoredProcedure")(f, {
			attachments: r("LSVec").ofArray([o("LSShape").ofRecord(n)]),
			isForwarded: c,
			senderId: d,
			threadKey: u,
			threadType: l
		}).then(function(t) {
			var n = t[0], r = t[1];
			return p.messages_optimistic_context.add({
				externalAttachmentUrl: void 0,
				initiatingSource: void 0,
				markThreadRead: !1,
				messageId: void 0,
				offlineThreadingId: n,
				platformRef: void 0,
				platformToken: void 0,
				replySourceId: void 0,
				replySourceType: void 0,
				sendType: void 0,
				skipUrlPreviewGen: void 0,
				taskId: (e || (e = o("I64"))).of_string(n),
				threadAttributionSource: _,
				threadKey: u
			}).then(function() {
				return Promise.resolve(n);
			});
		}).then(function(t) {
			var a = n.attachment_fbid;
			return r("LSInsertNewMediaSendStoredProcedure")(f, {
				attachmentType: n.attachment_type,
				inMessageIndex: (e || (e = o("I64"))).zero,
				isSecure: !1,
				offlineAttachmentId: a,
				offlineThreadingId: t,
				sendByServer: !1,
				shouldTranscode: !1,
				useDoublePhase: !1
			}).then(function() {
				return Promise.resolve([t, a]);
			});
		}).then(function(l) {
			var u = l[0], c = l[1], d = function(a, l) {
				l == null || l.length === 0 || r("promiseDone")(t.runInTransaction(function(t) {
					var n = r("LSFactory")(t);
					return r("LSMarkSubJobCompletedV2StoredProcedure")(n, {
						fbid: (e || (e = o("I64"))).of_string(l),
						offlineAttachmentId: c
					}).then(function() {
						return o("MWPOpenComposerUtils").resumeSendJob(n, u);
					});
				}, "readwrite", void 0, void 0, i.id + ":223"));
			};
			return o("MWPComposerMediaUploadUtil").startUpload(void 0, void 0, d, void 0, (e || (e = o("I64"))).equal(n.attachment_type, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO)), [a], [c], void 0, void 0, m(n.sampling_frequency_hz, n.waveform_data), void 0, void 0);
		});
	}
	async function _(t, a, l, _, f, g, h, y, C) {
		if (g != null) {
			var b = g.attachmentType;
			if (!((e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO)) || (e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE)) || (e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)) || (e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE)) || (e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").FILE)) || (e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA)))) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("We do not support forwarding this type");
			var v = null;
			if (!(e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA)) && (isFinite(g.attachmentFbid) ? v = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getBlobDataUrlByMediaId", {
				description: "MAWForwardMessageFromSecureThread",
				mediaId: o("MAWDbMedia").convertNumberToMediaId(Number.parseInt(g.attachmentFbid, 10))
			}) : v = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getBlobDataUrlByHashedPlaintextHash", {
				description: "MAWForwardMessageFromSecureThread",
				plaintextHash: o("WAHashUtils").stringToPlaintextHash(g.attachmentFbid)
			}).then(function(e) {
				return n("cr:332") != null && n("cr:332").runBlobReadAndCompareResult({
					fileName: g.attachmentFbid,
					idbBlob: e
				}), e;
			}), v == null)) return;
			await t.runInTransaction(function(i) {
				switch (!0) {
					case (e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO)): {
						var S;
						if (v == null) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("Blob can not be null for MessagingAttachmentType.AUDIO");
						var R = new File([v], "mediaForwardedFromSecureThread", { type: v.type }), L = o("OfflineThreadingId").createOfflineThreadingID(), E = o("MWPComposerMediaUploadUtil").getAudioAttachment(L, R, (e || (e = o("I64"))).to_int32((S = g.playableDurationMs) != null ? S : (e || (e = o("I64"))).zero) / 1e3, m(g.samplingFrequencyHz != null ? (e || (e = o("I64"))).to_int32(g.samplingFrequencyHz) : void 0, g.waveformData));
						return p(t, E, R, l, a, f, h, i, y);
					}
					case (e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA)): {
						var k;
						return o("ReQL").firstAsync(o("ReQL").fromTableDescending(i.attachment_ctas).getKeyRange((k = g.defaultCtaId) != null ? k : (e || (e = o("I64"))).zero)).then(function(e) {
							var t = g.xmaPreviewFbid;
							if (t == null) return r("FBLogger")("messenger_web_sharing").mustfix("XMA preview fbid is null when forwarding XMA"), Promise.resolve([e, void 0]);
							var a = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getBlobDataUrlByHashedPlaintextHash", {
								description: "MAWForwardMessageFromSecureThread",
								plaintextHash: o("WAHashUtils").stringToPlaintextHash(t)
							}).then(function(e) {
								return n("cr:332") != null && n("cr:332").runBlobReadAndCompareResult({
									fileName: g.attachmentFbid,
									idbBlob: e
								}), e;
							});
							return a.then(function(t) {
								return Promise.resolve([e, t]);
							}).catch(function(t) {
								return r("FBLogger")("messenger_web_sharing").catching(t).warn("Unable to getBlobDataUrlByXMAId, from MAWForwardMessageFromSecureThread"), Promise.resolve([e, void 0]);
							});
						}).then(function(e) {
							var t = e[0], r = e[1], s = null;
							r != null && (s = new File([r], "xmaForwardedFromSecureThread", { type: r.type }));
							var u = o("OfflineThreadingId").createOfflineThreadingID(), m = c(g, t, u, s), p = _.text, b = n("cr:2472") == null || p == null ? p : n("cr:2472").unvault(p);
							return d(h, a, l, C != null ? C : b, f, m, y, i);
						});
					}
					case (e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").FILE)):
					case (e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE)):
					case (e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)):
					case (e || (e = o("I64"))).equal(b, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE)): {
						var I;
						if (v == null) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("Blob can not be null for MessagingAttachmentType.AUDIO");
						var T = new File([v], (I = g.filename) != null ? I : "mediaForwardedFromSecureThread", { type: v.type }), D = o("OfflineThreadingId").createOfflineThreadingID(), x = u(g, D, T);
						return p(t, x, T, l, a, f, h, i, y);
					}
					default: throw r("FBLogger")("messenger_web_sharing").mustfixThrow("We do not support forwarding this type");
				}
			}, "readwrite", void 0, void 0, i.id + ":333");
		} else {
			var S = _.text;
			if (S == null) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("We do not support forwarding this type");
			var R = n("cr:2472") == null ? S : n("cr:2472").unvault(S), L = R === "👍" && _.hotEmojiSize != null && (e || (e = o("I64"))).equal(_.hotEmojiSize, (s || (s = o("LSIntEnum"))).ofNumber(r("LSHotEmojiSize").SMALL)), E = L ? (e || (e = o("I64"))).of_string("369239263222822") : void 0;
			await t.runInTransaction(function(e) {
				return r("LSOptimisticSendMessageV2StoredProcedure")(r("LSFactory")(e), {
					extraSendMessageParams: o("LSShape").ofRecord({
						calculate_denormalizations: !1,
						is_forwarded: f,
						mark_read: !1,
						power_up_style: (s || (s = o("LSIntEnum"))).ofNumber(r("MessagePowerUp").NONE),
						source: y,
						sticker_id: E
					}),
					mailboxType: s.ofNumber(r("LSMailboxType").MESSENGER),
					senderId: h,
					text: L ? void 0 : C != null ? C : R,
					threadKey: a,
					threadType: l
				});
			}, "readwrite", void 0, void 0, i.id + ":521");
		}
	}
	l.getMediaAttachment = u, l.uploadAndSendMediaToOpenThread = p, l.forwardMessage = _;
}), 98);
