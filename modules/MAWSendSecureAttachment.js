__d("MAWSendSecureAttachment", [
	"I64",
	"MAWBridgeSendAndReceive",
	"MAWDbMsg",
	"MAWGetProtocolMsgIdByMsgIdInUI",
	"MAWMessageSendReporter",
	"MWFBLogger",
	"UserAgent",
	"WABlobToArrayBuffer",
	"WAMediaHdType",
	"WAMediaQplHelper",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"gkx",
	"qpl",
	"requireDeferred",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = r("requireDeferred")("MWLogSend").__setRef("MAWSendSecureAttachment"), u = 3e5, c = o("MWFBLogger").MWMediaLogger().tags([
		"Composer",
		"MAWSendSecureMessageV2",
		"MAWSendSecureAttachment"
	]);
	function d(e, t, n, r, o, a, i, l, s, u, c, d, p, _, f, g, h, y, C, b) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a, i, l, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E) {
			var k;
			if (c.debug("Starting attachment message send"), n == null) return o("sendToSentQPLLogger").markSendToSentFail(h, "no_chat_jid"), o("WAResultOrError").makeError({
				isRetriable: !1,
				type: "no-chat-jid"
			});
			var I = null;
			if (_ != null) {
				o("sendToSentQPLLogger").markSendToSentPoint(h, "get_reply_message_start");
				var T = o("MAWDbMsg").toMsgId(_.messageId);
				T != null && (I = yield o("MAWGetProtocolMsgIdByMsgIdInUI").getProtocolMsgIdByMsgIdUI(T)), o("sendToSentQPLLogger").markSendToSentPoint(h, "get_reply_message_end");
			}
			o("sendToSentQPLLogger").markSendToSentPoint(h, "sending_message_to_wajob_start"), o("sendToSentQPLLogger").addSendToSentAnnotations(h, { string: {
				attachment_file_size: o("WAMediaQplHelper").convertIntegerSizeToStringBucket(d.file.size),
				mime_type: d.file.type
			} }), E == null || E.addMetadata("attachment_file_size", o("WAMediaQplHelper").convertIntegerSizeToStringBucket(d.file.size));
			var D;
			switch (d.type) {
				case "image":
				case "animated_image":
				case "sticker": {
					var x = d.imageSpec, $ = d.thumbnailUrlAndSpec;
					D = d.type === "sticker" && d.stickerReceiverFetchId != null && r("gkx")("8057") ? {
						args: {
							accessibilityLabel: L,
							ephemeralSetting: y != null ? y : void 0,
							height: x.height,
							initiatingSource: C,
							isFirstMsg: f,
							isForwarded: !1,
							mediaGroupMetadata: S,
							offlineAttachmentId: m,
							optimisticMsg: b,
							quote: I != null ? I : void 0,
							receiverFetchId: d.stickerReceiverFetchId,
							source: p,
							width: x.width
						},
						attachmentType: "image",
						chatJid: n,
						externalId: v
					} : {
						args: {
							accessibilityLabel: L,
							ephemeralSetting: y != null ? y : void 0,
							hdType: R === !0 ? o("WAMediaHdType").HD_TYPE_HQ_4K : o("WAMediaHdType").HD_TYPE_NONE,
							height: x.height,
							initiatingSource: C,
							isFirstMsg: f,
							isForwarded: !1,
							jpegThumbnail: $ == null ? void 0 : $.jpegThumbnail,
							jpegThumbnailHeight: $ == null ? void 0 : $.height,
							jpegThumbnailWidth: $ == null ? void 0 : $.width,
							mediaGroupMetadata: S,
							offlineAttachmentId: m,
							optimisticMsg: b,
							quote: I != null ? I : void 0,
							source: p,
							width: x.width
						},
						attachmentType: "image",
						chatJid: n,
						externalId: v
					};
					break;
				}
				case "video": {
					var P = d.thumbnailUrlAndSpec;
					D = {
						args: {
							duration: P.duration,
							ephemeralSetting: y != null ? y : void 0,
							height: P.height,
							initiatingSource: C,
							isFirstMsg: f,
							isForwarded: !1,
							isVideoGif: g,
							jpegThumbnail: P.jpegThumbnail,
							jpegThumbnailHeight: P.height,
							jpegThumbnailWidth: P.width,
							offlineAttachmentId: m,
							optimisticMsg: b,
							quote: I != null ? I : void 0,
							source: p,
							width: P.width
						},
						attachmentType: "video",
						chatJid: n,
						externalId: v
					};
					break;
				}
				case "audio": {
					var N = d.durations, M = d.isPtt, w = d.waveform;
					D = {
						args: {
							duration: Math.round(N),
							ephemeralSetting: y != null ? y : void 0,
							initiatingSource: C,
							isFirstMsg: f,
							isForwarded: !1,
							isPtt: M,
							offlineAttachmentId: m,
							optimisticMsg: b,
							quote: I != null ? I : void 0,
							source: p,
							waveform: w
						},
						attachmentType: "audio",
						chatJid: n,
						externalId: v
					};
					break;
				}
				case "document": {
					var A = d.filename;
					D = {
						args: {
							ephemeralSetting: y != null ? y : void 0,
							filename: A,
							initiatingSource: C,
							isFirstMsg: f,
							isForwarded: !1,
							offlineAttachmentId: m,
							optimisticMsg: b,
							quote: I != null ? I : void 0,
							source: p
						},
						attachmentType: "application",
						chatJid: n,
						externalId: v
					};
					break;
				}
				default: o("sendToSentQPLLogger").markSendToSentPoint(h, "unknown_file_type_sendMediaMsg_not_fired"), c.addMetadata("MESSENGER_E2EE_WEB", "ERROR_MESSAGE", "failed while sending attachment").mustfix("sendSecureAttachment: Failed while sending attachment, unknown attachment type %s", d.type);
			}
			var F;
			switch (d.type) {
				case "image":
					F = 8;
					break;
				case "sticker":
					F = 4;
					break;
				case "video":
					F = g === !0 ? 6 : 10;
					break;
				case "audio":
					F = 11;
					break;
				case "document":
					F = 34;
					break;
			}
			if (c.debug("Send attachment message is done"), s.onReady(function(n) {
				var r = (e || (e = o("I64"))).to_string(a);
				return n.log(t, {
					actor: l,
					attachmentFbids: [],
					attachmentType: F,
					backend: 1,
					hasReply: !1,
					messagingThreadId: r,
					offlineThreadingId: m,
					sendType: 0,
					source: p,
					threadKey: a,
					threadType: i
				});
			}), D == null) return o("WAResultOrError").makeError({
				isRetriable: !1,
				type: "send-media-msg-args-null"
			});
			var O = (k = d.plaintext) != null ? k : yield o("WABlobToArrayBuffer").blobToArrayBuffer(d.file), B = r("gkx")("23705") && !r("UserAgent").isBrowser("Safari");
			o("sendToSentQPLLogger").addSendToSentAnnotations(h, { bool: {
				use_transfer_list: B,
				zero_byte_file: O.byteLength === 0
			} });
			var W = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendMediaMsgV2", babelHelpers.extends({}, D, {
				mimeType: d.file.type,
				plaintext: O,
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: h
			}), {
				timeoutMs: u,
				transferList: B ? [O] : void 0
			});
			return o("sendToSentQPLLogger").markSendToSentPoint(h, "sending_message_to_wajob_end"), o("MAWMessageSendReporter").MAWMessageSendReporter({
				chatJid: n,
				externalId: v
			}, W, {
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: h
			}, t, void 0, F);
		}), m.apply(this, arguments);
	}
	l.sendSecureAttachment = d;
}), 98);
