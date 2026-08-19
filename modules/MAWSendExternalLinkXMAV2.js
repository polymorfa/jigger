__d("MAWSendExternalLinkXMAV2", [
	"ConstUriUtils",
	"MAWBridgeSendAndReceive",
	"MAWExternalId",
	"MAWExternalLinkUtil",
	"MAWGetEphemeralSettings",
	"MAWImagePreProcess",
	"MAWMessageSendReporter",
	"MAWParseXMAProtocol",
	"MAWTimedBridge",
	"MAWXMALoggingUtils",
	"MWPBumpEntityKey",
	"WAArmadilloXMA.pb",
	"WALogger",
	"WAMediaQplHelper",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"justknobx",
	"qpl",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var a, i, l, s, u, c, d, m = t.chatJid, p = t.commands, _ = t.lssTraceApi, f = t.mentionedJids, g = t.message, h = t.offlineAttachmentId, y = t.optimisticMessageData, C = t.previewBlob, b = t.quote, v = t.s2sInstanceKey, S = t.source, R = t.threadKey, L = t.xmaData;
			_ == null || _.addMarkerPoint("send_secure_link_preview_xma_message_start", "AppTiming"), o("sendToSentQPLLogger").markSendToSentPoint(v, "send_secure_link_preview_xma_message_start");
			var E = yield o("MAWGetEphemeralSettings").getEphemeralSetting(m, R), k = void 0;
			if (C != null && o("MAWExternalLinkUtil").allowedPreviewTypes.includes(C.type)) {
				var I = new File([C], "preview", { type: C.type }), T = yield o("MAWImagePreProcess").generateImageThumbnailInWorkerWithFallback(I, r("justknobx")._("2033")), D = new File([T.jpegThumbnail], "preview", { type: "image/jpeg" });
				k = {
					file: D,
					height: T.height,
					width: T.width
				}, _ == null || _.addAnnotation("sent_xma_preview_file_size_bucket", o("WAMediaQplHelper").convertIntegerSizeToStringBucket(k.file.size)), o("sendToSentQPLLogger").addSendToSentAnnotations(v, { string: { sent_xma_preview_file_size_bucket: o("WAMediaQplHelper").convertIntegerSizeToStringBucket(k.file.size) } });
			}
			_ == null || _.addAnnotationBoolean("has_xma_preview", k != null), o("sendToSentQPLLogger").addSendToSentAnnotations(v, { bool: { has_xma_preview: k != null } });
			var x = {
				commands: p ? Array.from(p) : void 0,
				content: g,
				ephemeralSetting: E == null ? void 0 : E,
				mentionedJids: f ? Array.from(f) : void 0,
				offlineAttachmentId: h == null ? void 0 : h,
				optimisticMsg: y == null ? void 0 : {
					msgId: y == null ? void 0 : y.messageExternalId,
					ts: y == null ? void 0 : y.offlineMsgTimestamp
				},
				quote: b,
				source: S,
				xmaMessageType: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_EXTERNAL_LINK_SHARE
			}, $ = (a = o("ConstUriUtils").getUri(L.url)) == null ? void 0 : a.getDomain(), P = o("MAWXMALoggingUtils").getXmaTargetTypeStringFromEnum(x.xmaMessageType);
			_ == null || _.addAnnotation("xmaTargetType", P != null ? P : "undefined"), o("sendToSentQPLLogger").addSendToSentAnnotations(v, { string: { xmaTargetType: P } }), o("ConstUriUtils").isValidUri(L.url) || o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["S410301 The externalLinkUrl set as native and action URL in XMA is not a valid URI\""]))), o("MAWParseXMAProtocol").isURLValid(L.url, o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_EXTERNAL_LINK_SHARE, !1, !0) ? o("MWPBumpEntityKey").bumpEntityKey("maw.xma_invalid_url", "web_link_preview_url_valid") : o("MWPBumpEntityKey").bumpEntityKey("maw.xma_invalid_url", "web_link_preview_url_invalid");
			var N = {
				defaultCTA: {
					actionUrl: L.url,
					buttonType: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE.OPEN_NATIVE,
					nativeUrl: L.url
				},
				overlayIconGlyph: void 0,
				subtitleText: L.author_name,
				titleText: (i = L.title) != null ? i : $
			};
			_ == null || _.addMarkerPoint("sending_message_to_wajob_start", "AppTiming"), o("sendToSentQPLLogger").markSendToSentPoint(v, "sending_message_to_wajob_start");
			var M = (l = y == null ? void 0 : y.messageExternalId) != null ? l : o("MAWExternalId").generateExternalId();
			o("sendToSentQPLLogger").addSendToSentAnnotations(v, { string: { attachment_file_size: o("WAMediaQplHelper").convertIntegerSizeToStringBucket((s = (u = k) == null ? void 0 : u.file.size) != null ? s : 0) } }), _ == null || _.addMetadata("attachment_file_size", o("WAMediaQplHelper").convertIntegerSizeToStringBucket((c = (d = k) == null ? void 0 : d.file.size) != null ? c : 0));
			var w = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendXMAShareMsg", {
				args: x,
				chatJid: m,
				previewFile: k != null ? k : void 0,
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: v,
				xmaArgs: N,
				xmaMsgExternalId: M
			}), A = function(t) {
				return o("sendToSentQPLLogger").addSendToSentAnnotations(v, {
					bool: { fell_back_to_text_after_xma_failure: !0 },
					string: { xma_fallback_reason: t }
				}), _ == null || _.addAnnotationBoolean("fell_back_to_text_after_xma_failure", !0), _ == null || _.addAnnotation("xma_fallback_reason", t), o("MWPBumpEntityKey").bumpEntityKey("maw.xma_send_fallback", t), o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendMsg", {
					args: {
						commands: x.commands,
						content: x.content,
						ephemeralSetting: x.ephemeralSetting,
						mentionedJids: x.mentionedJids,
						quote: x.quote
					},
					chatJid: m,
					externalId: M,
					qplEventType: r("qpl")._(25313175, "1551"),
					qplInstanceKey: v
				});
			}, F = function() {
				return r("justknobx")._("5598");
			}, O = w.then(function(e) {
				return e.success === !1 && F() ? A("in_band_failure") : e;
			}, function(e) {
				if (!F()) throw e;
				if (e instanceof o("MAWTimedBridge").MAWBridgeTimeoutError) return A("bridge_timeout");
				if (e instanceof Error) return A("thrown_send_error");
				throw e;
			});
			return _ == null || _.addMarkerPoint("sending_message_to_wajob_end", "AppTiming"), o("sendToSentQPLLogger").markSendToSentPoint(v, "sending_message_to_wajob_end"), yield o("MAWMessageSendReporter").MAWMessageSendReporter({
				chatJid: m,
				externalId: M
			}, O, {
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: v
			}, n), o("WAResultOrError").makeResult({
				description: "removal pending rollout of MAWMessageSendReporterV2",
				messageType: "fixMe"
			});
		}), u.apply(this, arguments);
	}
	l.sendExternalLinkXMAV2 = s;
}), 98);
