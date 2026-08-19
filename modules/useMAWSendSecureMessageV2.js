__d("useMAWSendSecureMessageV2", [
	"FBLogger",
	"I64",
	"LSFactory",
	"LSIntEnum",
	"LSIssueE2EESummonGenAIStoredProcedure",
	"LSMessagingThreadAttributionType",
	"LSThreadAttributionTypeUtil",
	"MAWExternalId",
	"MAWJids",
	"MWFBLogger",
	"MWMsgMediaTypeLogUtils",
	"MWPReplyContext.react",
	"MWSharedMsgLogUtils",
	"MWSharedS2SBaseAnnotations",
	"MWV2ComposerActionsContext.react",
	"WACommon.pb",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"getMWIsDefaultHotlikeStickerId",
	"gkx",
	"promiseDone",
	"qpl",
	"react",
	"react-compiler-runtime",
	"sendToSentQPLLogger",
	"useAsyncReStore",
	"useCometInteractionTracing",
	"useIsSecureMessageData",
	"useLSMessagingSource",
	"useMAWSendSecureMessageV2Impl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = (e || (e = o("react"))).useContext, d = r("gkx")("19021");
	function m(e, t, a) {
		var l = o("react-compiler-runtime").c(17), m = c(o("MWPReplyContext.react").MWPReplyContext), g = m.reply, h = g == null ? void 0 : g.messageId, y = g == null ? void 0 : g.threadKey, C = g == null ? void 0 : g.timestampMs, b;
		l[0] !== h || l[1] !== y || l[2] !== C ? (b = {
			messageId: h,
			messageThreadKey: y,
			messageTimestamp: C
		}, l[0] = h, l[1] = y, l[2] = C, l[3] = b) : b = l[3];
		var v;
		l[4] !== e.threadType ? (v = { fallbackThreadType: e.threadType }, l[4] = e.threadType, l[5] = v) : v = l[5];
		var S = r("useIsSecureMessageData")(b, v), R = c(o("MWV2ComposerActionsContext.react").MWV2ComposerActionsContext), L = R.onMessageSendAttempt, E = r("useMAWSendSecureMessageV2Impl")(a, e.threadType, e.threadKey), k;
		l[6] === Symbol.for("react.memo_cache_sentinel") ? (k = r("qpl")._(30605384, "573"), l[6] = k) : k = l[6];
		var I = r("useCometInteractionTracing")(k, "fast", "INTERACTION", void 0), T = r("useAsyncReStore")(), D = r("useLSMessagingSource")(), x;
		return l[7] !== T || l[8] !== S || l[9] !== D || l[10] !== t || l[11] !== L || l[12] !== g || l[13] !== E || l[14] !== e || l[15] !== I ? (x = function(l, c, m, h, y, C, b, v, R, k, x, $, P, N, M, w, A, F) {
			o("MWFBLogger").MWLogger().tags(["Composer", "MAWSendSecureMessageV2"]).debug("Calling useMAWSendSecureMessageV2");
			var a = [], O = [];
			for (var B of c != null ? c : []) e: switch (B.type) {
				case "ai": {
					d && a.push({
						commandType: o("WACommon.pb").COMMAND_COMMAND_TYPE.AI,
						length: B.length,
						offset: B.offset
					});
					break e;
				}
				case "t": {
					a.push({
						commandType: o("WACommon.pb").COMMAND_COMMAND_TYPE.EVERYONE,
						length: B.length,
						offset: B.offset
					});
					break e;
				}
				default: O.push(o("MAWJids").toUserJid(B.id));
			}
			var W = l;
			m != null && r("getMWIsDefaultHotlikeStickerId")((s || (s = o("I64"))).to_string(m.stickerId)) && (W = "👍");
			var q = a.some(f), U = d && q, V = o("MAWExternalId").generateExternalId();
			r("promiseDone")(T, function(s) {
				L == null || L(!0), I(function(c) {
					var d = function(l, u, d, f) {
						return E({
							accessibilityLabel: F,
							commands: a,
							composerEntrypointForLogging: w,
							currentDraftId: M,
							externalAttachmentUrl: C,
							hotEmojiSize: h,
							lssTraceApi: c,
							mediaStagings: d,
							mentionedJids: O,
							messageExternalId: V,
							messageText: W,
							messageTypeParams: u,
							reply: S ? g : void 0,
							s2sInstanceKey: l,
							source: f,
							sticker: m,
							thread: e,
							voiceClip: v
						}).then(function(n) {
							var a = n.some(_);
							if (!a) {
								var l = W;
								q && l != null && l !== "" && r("promiseDone")(s.runInTransaction(function(t) {
									return r("LSIssueE2EESummonGenAIStoredProcedure")(r("LSFactory")(t), {
										serverThreadKey: e.threadKey,
										summonMsgOtid: V,
										summonMsgText: l,
										summonToken: o("MAWExternalId").generateExternalId()
									});
								}, "readwrite", void 0, void 0, i.id + ":239").catch(p)), t(), k && k();
							}
							return n;
						}).catch(function(e) {
							var t = r("getErrorSafe")(e);
							o("sendToSentQPLLogger").markSendToSentFail(l, "message_send_fail", t), c.failTrace(t.message, !0);
							var n = r("FBLogger")("messenger_web_sharing");
							throw n.catching(t), n.mustfixThrow("Encountered failure during Armadillo Message Send (UI)");
						});
					};
					r("promiseDone")(o("MWSharedS2SBaseAnnotations").queryMediaStagingAndGetMessageTypeParams({
						db: s,
						externalAttachmentUrl: C,
						hotEmojiSize: h,
						messageText: l,
						reply: g,
						sticker: m,
						threadKey: e == null ? void 0 : e.threadKey,
						threadType: e.threadType,
						voiceClip: v
					}), (function() {
						var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
							var n = t.mediaStagings, a = t.messageTypeParams, i = o("MWMsgMediaTypeLogUtils").getAttachmentType({
								hasFile: a.hasFile,
								hasGif: a.hasGif,
								hasHotEmoji: a.hasHotEmoji,
								hasImage: a.hasImage,
								hasLinks: a.hasLinks,
								hasShare: a.hasShare,
								hasSticker: a.hasSticker,
								hasVideo: a.hasVideo,
								hasVoiceClip: a.hasVoiceClip,
								isAttachmentsGrouped: a.isAttachmentsGrouped,
								numberOfAttachments: a.numberOfAttachments,
								numberOfGroupedAttachments: a.numberOfGroupedAttachments
							}), l = o("sendToSentQPLLogger").markSendToSentStart(void 0, i), s = U ? (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessagingThreadAttributionType").MESSENGER_INBOX_META_AI_INVOCATION) : o("LSThreadAttributionTypeUtil").getSourceAndResetAttribution(e.threadKey, D);
							return o("sendToSentQPLLogger").addSendToSentAnnotations(l, yield o("MWSharedMsgLogUtils").getSendToSentAnnotations({
								attachmentTypeParams: a,
								composerEntrypoint: w,
								messageOfflineThreadingId: V,
								source: (u || (u = o("LSIntEnum"))).unwrapIntEnum(s),
								thread: e
							})), d(l, a, n, s);
						});
						return function(e) {
							return t.apply(this, arguments);
						};
					})());
				});
			});
		}, l[7] = T, l[8] = S, l[9] = D, l[10] = t, l[11] = L, l[12] = g, l[13] = E, l[14] = e, l[15] = I, l[16] = x) : x = l[16], x;
	}
	function p(e) {
		var t = r("getErrorSafe")(e);
		r("FBLogger")("messenger_web_sharing").catching(t).mustfix("Failed to issue E2EE Meta AI summon task");
	}
	function _(e) {
		return (e == null ? void 0 : e.success) === !1;
	}
	function f(e) {
		return e.commandType === o("WACommon.pb").COMMAND_COMMAND_TYPE.AI;
	}
	l.default = m;
}), 98);
