__d("MAWShareAttachment", [
	"FBLogger",
	"I64",
	"LSDatabaseSingleton",
	"LSIntEnum",
	"LSMessagingThreadAttributionType",
	"MAWBridgeSendAndReceive",
	"MAWConvertExtendedContentTypeToLSXmaContentType",
	"MAWCreateOneToOneThreadWithStringFBID",
	"MAWFetchUserJids",
	"MAWFetchXMAData",
	"MAWFetchXMADataUtils",
	"MAWGetEphemeralSettings",
	"MAWImagePreProcess",
	"MAWImageUtils",
	"MAWInformTreatmentTypeTransform",
	"MAWMessageSendReporter",
	"MAWMiActMaybeCreateActThread",
	"MAWMiActOnActThreadReady",
	"MAWWaitForBackendSetup",
	"MAWXMALoggingUtils",
	"MWPBumpEntityKey",
	"WAArmadilloXMA.pb",
	"WAJids",
	"WAMediaQplHelper",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"emptyFunction",
	"getErrorSafe",
	"getSafeQplErrorMessage",
	"qpl",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e) {
		if (e != null) {
			var t = e.trim();
			if (t !== "") return t;
		}
	}
	var d = 3e5;
	function m(e, t, n, r, o, a, i, l, s, u, c, d, m, _, f, g, h, y, C, b, v, S, R) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a, i, l, u, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T) {
			var D, x, $, P, N, M, w, A, F, O, B, W, q, U, V;
			if (t != null) try {
				yield o("MAWWaitForBackendSetup").waitForBackendSetup("fetch-devices-and-share-xma");
			} catch (e) {
				var H = r("getErrorSafe")(e);
				return o("sendToSentQPLLogger").addSendToSentAnnotations(C, { string: { wait_for_backend_error_in_share: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(H) } }), o("sendToSentQPLLogger").markSendToSentFail(C, "backend_setup_fail", H), o("WAResultOrError").makeError({
					isRetriable: !1,
					type: "failed-to-fetch-devices-for-xma-share"
				});
			}
			o("sendToSentQPLLogger").markSendToSentPoint(C, "fetch_ephemeral_settings_start");
			var G = yield o("MAWGetEphemeralSettings").getEphemeralSetting(n, b);
			if (o("sendToSentQPLLogger").markSendToSentPoint(C, "fetch_ephemeral_settings_end"), n == null) return o("sendToSentQPLLogger").markSendToSentPoint(C, "failed_to_fetch_chat_jid_for_xma_share"), o("WAResultOrError").makeError({
				isRetriable: !1,
				type: "failed-to-fetch-chat-jid-for-xma-share"
			});
			var z = c(a.message), j = v === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_RECEIVER_FETCH, K = o("MAWConvertExtendedContentTypeToLSXmaContentType").convertExtendedContentTypeToLSXmaContentType(v), Q = K != null ? (e || (e = o("I64"))).of_int32(K) : void 0;
			if (b != null) {
				var X = null;
				l != null && (X = yield o("MAWImagePreProcess").optimisticImagePreprocess(l.file)), yield I({
					actionUrl: p == null ? void 0 : p.actionUrl,
					commands: void 0,
					contentRef: k,
					instanceKey: C,
					isReceiverFetch: j,
					lssTraceApi: void 0,
					mentionedJids: void 0,
					messageExternalId: E,
					messageText: z != null ? z : "",
					offlineAttachmentId: L,
					onOfflineMsgId: r("emptyFunction"),
					optimisticMediaAttachment: X,
					reply: void 0,
					subtitleText: f,
					threadKey: b,
					titleText: g,
					xmaContentType: Q
				});
			}
			o("sendToSentQPLLogger").markSendToSentPoint(C, "sending_message_to_wajob"), j && k == null && o("MWPBumpEntityKey").bumpEntityKey("maw.share_attachment", "content_ref_null_for_rf_xma"), o("sendToSentQPLLogger").addSendToSentAnnotations(C, { string: {
				attachment_file_size: o("WAMediaQplHelper").convertIntegerSizeToStringBucket(((D = l == null ? void 0 : l.file.size) != null ? D : 0) + ((x = u == null ? void 0 : u.file.size) != null ? x : 0) + (($ = i == null ? void 0 : i.file.size) != null ? $ : 0)),
				favicon_attachment_file_size: o("WAMediaQplHelper").convertIntegerSizeToStringBucket((P = i == null ? void 0 : i.file.size) != null ? P : 0),
				header_attachment_file_size: o("WAMediaQplHelper").convertIntegerSizeToStringBucket((N = u == null ? void 0 : u.file.size) != null ? N : 0),
				preview_attachment_file_size: o("WAMediaQplHelper").convertIntegerSizeToStringBucket((M = l == null ? void 0 : l.file.size) != null ? M : 0)
			} }), T == null || T.addMetadata("attachment_file_size", o("WAMediaQplHelper").convertIntegerSizeToStringBucket(((w = l == null ? void 0 : l.file.size) != null ? w : 0) + ((A = u == null ? void 0 : u.file.size) != null ? A : 0) + ((F = i == null ? void 0 : i.file.size) != null ? F : 0))), T == null || T.addMetadata("favicon_attachment_file_size", o("WAMediaQplHelper").convertIntegerSizeToStringBucket((O = i == null ? void 0 : i.file.size) != null ? O : 0)), T == null || T.addMetadata("header_attachment_file_size", o("WAMediaQplHelper").convertIntegerSizeToStringBucket((B = u == null ? void 0 : u.file.size) != null ? B : 0)), T == null || T.addMetadata("preview_attachment_file_size", o("WAMediaQplHelper").convertIntegerSizeToStringBucket((W = l == null ? void 0 : l.file.size) != null ? W : 0));
			var Y = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendXMAShareMsg", {
				args: {
					content: z,
					ephemeralSetting: G == null ? void 0 : G,
					offlineAttachmentId: L,
					source: (s || (s = o("LSIntEnum"))).ofNumber(y != null ? y : r("LSMessagingThreadAttributionType").UNKNOWN),
					xmaMessageType: v != null ? v : o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_SHARE
				},
				chatJid: n,
				faviconFile: i,
				headerFile: u,
				previewFile: l,
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: C,
				xmaArgs: {
					contentRef: k,
					ctas: m,
					defaultCTA: p,
					headerTitle: h != null ? h : void 0,
					overlayIconGlyph: _ != null ? _ : r("MAWInformTreatmentTypeTransform")((q = a.messagingInformTreatmentInfo) == null ? void 0 : q.treatmentType),
					overlayTitle: (U = (V = a.messagingInformTreatmentInfo) == null ? void 0 : V.messagingInformTreatmentName) != null ? U : void 0,
					subtitleText: f != null ? f : void 0,
					titleText: g != null ? g : void 0
				},
				xmaMsgExternalId: E
			}, { timeoutMs: d });
			return yield o("MAWMessageSendReporter").MAWMessageSendReporter({
				chatJid: n,
				externalId: E
			}, Y, {
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: C
			}, R), o("WAResultOrError").makeResult({
				description: "removal pending rollout of MAWMessageSendReporterV2",
				messageType: "fixMe"
			});
		}), p.apply(this, arguments);
	}
	function _(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a, i, l, s, c, d, p, _, f, g, h, y) {
			var C, b, v, S, R, L, E, k, I, T, D, x, $ = l, P = yield (u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton, N = {
				linkType: "unknown",
				transportLayerForLogging: "sender_copy",
				xmaTargetTypeForLogging: null
			};
			if (d == null && t != null) {
				var M = n.url;
				if (M == null) return c.failTrace("null_xma_url", !0), o("sendToSentQPLLogger").markSendToSentFail($, "null_xma_url"), r("FBLogger")("messenger_web_sharing").mustfix("[MAWShareAttachment] Attachment URL is null"), o("WAResultOrError").makeError({
					isRetriable: !1,
					type: "null-xma-url"
				});
				try {
					o("sendToSentQPLLogger").markSendToSentPoint($, "xma_data_query_start"), c.addMarkerPoint("xma_data_query_start", "AppTiming"), p != null ? N = yield p : N = yield o("MAWFetchXMAData").fetchXMAData(t, M, [$]), o("sendToSentQPLLogger").markSendToSentPoint($, "xma_data_query_end"), c.addMarkerPoint("xma_data_query_end", "AppTiming");
				} catch (e) {
					var w = r("getErrorSafe")(e);
					if (w.message.includes(o("MAWFetchXMADataUtils").XMA_DATA_ERRORS.failed_to_parse_json_for_xma_share)) return o("sendToSentQPLLogger").markSendToSentFail($, "failed_to_parse_json_for_xma_share", w), o("WAResultOrError").makeError({
						isRetriable: !1,
						type: "failed-to-parse-json-for-xma-share"
					});
					throw o("sendToSentQPLLogger").addSendToSentAnnotations(l, { string: {
						share_error: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(w),
						share_error_entrypoint: "MAWShareAttachment"
					} }), o("sendToSentQPLLogger").markSendToSentFail($, "unknown_xma_error", w), w;
				}
			}
			N = d != null ? d : N;
			var A = N, F = A.contentRef, O = A.ctas, B = A.defaultCTA, W = A.header_title, q = A.image_blob, U = A.overlayIconGlyph, V = A.subtitle_text, H = A.title_text, G = A.transportLayerForLogging, z = A.xma_message_type, j = A.xmaTargetTypeForLogging;
			o("sendToSentQPLLogger").addSendToSentAnnotations($, { string: {
				transportLayer: G,
				xmaTargetType: o("MAWXMALoggingUtils").getXmaTargetTypeStringFromEnum(j)
			} });
			var K = y != null ? yield y : yield o("MAWFetchXMADataUtils").makeXMAFileArgs(N, $), Q = K.faviconFileArgs, X = K.headerImageFileArgs, Y = K.previewFileArgs;
			if (o("sendToSentQPLLogger").addSendToSentAnnotations(l, { string: {
				favicon_original_file_size: o("WAMediaQplHelper").convertIntegerSizeToStringBucket((C = Q == null ? void 0 : Q.file.size) != null ? C : 0),
				header_original_file_size: o("WAMediaQplHelper").convertIntegerSizeToStringBucket((b = X == null ? void 0 : X.file.size) != null ? b : 0),
				original_file_size: o("WAMediaQplHelper").convertIntegerSizeToStringBucket(((v = Y == null ? void 0 : Y.file.size) != null ? v : 0) + ((S = X == null ? void 0 : X.file.size) != null ? S : 0) + ((R = Q == null ? void 0 : Q.file.size) != null ? R : 0)),
				preview_original_file_size: o("WAMediaQplHelper").convertIntegerSizeToStringBucket((L = Y == null ? void 0 : Y.file.size) != null ? L : 0)
			} }), c == null || c.addMetadata("favicon_original_file_size", o("WAMediaQplHelper").convertIntegerSizeToStringBucket((E = Q == null ? void 0 : Q.file.size) != null ? E : 0)), c == null || c.addMetadata("header_original_file_size", o("WAMediaQplHelper").convertIntegerSizeToStringBucket((k = X == null ? void 0 : X.file.size) != null ? k : 0)), c == null || c.addMetadata("original_file_size", o("WAMediaQplHelper").convertIntegerSizeToStringBucket(((I = Y == null ? void 0 : Y.file.size) != null ? I : 0) + ((T = X == null ? void 0 : X.file.size) != null ? T : 0) + ((D = Q == null ? void 0 : Q.file.size) != null ? D : 0))), c == null || c.addMetadata("preview_original_file_size", o("WAMediaQplHelper").convertIntegerSizeToStringBucket((x = Y == null ? void 0 : Y.file.size) != null ? x : 0)), a != null) {
				if (a.isTargetE2E === !0) {
					var J = (e || (e = o("I64"))).of_string_opt(n.targetID);
					if (J == null) return o("sendToSentQPLLogger").markSendToSentFail($, "failed_to_fetch_chat_jid_for_xma_share"), o("WAResultOrError").makeError({
						isRetriable: !1,
						type: "failed-to-fetch-chat-jid-for-xma-share"
					});
					var Z = h != null ? yield h : yield o("sendToSentQPLLogger").measureSendToSentPerformance("maybe_convert_preview_gif_to_thumbnail", $, function() {
						return o("MAWImageUtils").generatePreviewBlobForShare(Y);
					});
					o("sendToSentQPLLogger").markSendToSentPoint($, "fetch_existing_chat_jid_start"), yield o("sendToSentQPLLogger").measureSendToSentPerformance("maybe_load_existing_thread", $, function() {
						return r("MAWMiActMaybeCreateActThread")(P, J, "shareSecureAttachment", $);
					});
					var ee = yield o("MAWMiActOnActThreadReady").waitForACTThreadReady(P.tables, J, "fetch-existing-chatJid", $), te = ee.chatJid, ne = ee.serverThreadKey, re, oe = o("WAJids").interpretAsUserJid(te);
					return oe != null ? re = [oe] : re = yield o("MAWFetchUserJids").fetchUserJids(P, n.targetID), o("sendToSentQPLLogger").markSendToSentPoint($, "fetch_existing_chat_jid_end"), m(re, te, n, Q, Z != null ? Z : void 0, X, O, B, U, V, H, W, i, $, ne, z, s, P, _, f, F, g, c);
				} else if (a.targetType === "USER") return o("sendToSentQPLLogger").markSendToSentPoint($, "create_thread_for_xma_share_start"), o("MAWCreateOneToOneThreadWithStringFBID").call(P, a.targetID, "shareSecureAttachment", $).then(function(e) {
					var t = e == null ? void 0 : e.jid;
					if (t == null) return o("sendToSentQPLLogger").markSendToSentFail($, "failed_to_create_chat_for_xma_share"), o("WAResultOrError").makeError({
						isRetriable: !1,
						type: "failed-to-create-chat-for-xma-share"
					});
					o("sendToSentQPLLogger").markSendToSentPoint($, "create_thread_for_xma_share_end");
					var r = [o("WAJids").interpretAsUserJid(t)].filter(Boolean);
					return m(r, t, n, Q, Y, X, O, B, U, V, H, W, i, $, void 0, z, s, P, _, f, F, g, c);
				}).catch(function(e) {
					var t = r("getErrorSafe")(e);
					throw o("sendToSentQPLLogger").markSendToSentFail($, "failed_to_create_chat_for_xma_share", t), c.addMarkerPoint(t.toString(), "AppTiming"), t;
				});
			}
			return o("WAResultOrError").makeResult({
				description: "catch-all",
				messageType: "fixMe"
			});
		}), f.apply(this, arguments);
	}
	l.shareSecureAttachment = _;
}), 98);
