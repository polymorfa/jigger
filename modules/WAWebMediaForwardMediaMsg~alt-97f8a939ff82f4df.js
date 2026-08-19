__d("WAWebMediaForwardMediaMsg", [
	"WALogger",
	"WAWebBotUtils",
	"WAWebForwardDocCaptionGating",
	"WAWebFrontendMsgGetters",
	"WAWebGetAiBotContextForForwardedMsg",
	"WAWebGetNewsletterContextForForwardedMsg",
	"WAWebInteractiveMessageType",
	"WAWebMediaFastForwardUtils",
	"WAWebMediaMmsV4Upload",
	"WAWebMediaOpaqueData",
	"WAWebMediaPrep",
	"WAWebMediaTypes",
	"WAWebMsgGetters",
	"WAWebMsgModelUtils",
	"WAWebMsgType",
	"WAWebStickerSendWamEvent",
	"WAWebWamEnumStickerSendOriginType",
	"WAWebWamEnumWebcRmrReasonCode",
	"WAWebWebpMetadata",
	"WAWebWid",
	"err",
	"isStringNullOrEmpty"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c;
	function d(e, t) {
		return t || o("WAWebMsgGetters").getIsNewsletterMsg(e);
	}
	async function m(t) {
		var n, a, i, l, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I = t.aiThreadInfo, T = t.appendedText, D = t.associationOptions, x = t.chat, $ = t.includeCaption, P = $ === void 0 ? !1 : $, N = t.msg, M = t.multicast, w = M === void 0 ? !1 : M, A = t.threadId;
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Prepping media msg"])));
		var F = N.mediaObject;
		if (!F) return o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
			"id: ",
			" type: ",
			""
		])), N.id.toString(), N.type).sendLogs("media-fault: forwardMediaMsg msg without mediaObject"), Promise.reject(r("err")("non initialized media"));
		var O = N.mediaData.toJSON(), B = o("WAWebFrontendMsgGetters").getMaybeChat(N), W = (B == null || (n = B.contact) == null || (n = n.id) == null ? void 0 : n.isBot()) === !0, q = (a = B == null || (i = B.id) == null ? void 0 : i.toLogString()) != null ? a : "unknown", U = O.mediaBlob instanceof r("WAWebMediaOpaqueData"), V = (l = O.filehash) != null ? l : "none";
		o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"[media-fwd] src=",
			" bot=",
			" type=",
			" blob=",
			" hash=",
			" dl=",
			""
		])), q, W, O.type, U, V, F.downloadStage), d(N, W) && !o("WAWebMediaMmsV4Upload").getBlobFromMediaObject(F) && (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[media-fwd] source blob missing, downloading"]))), await N.downloadMedia({
			downloadEvenIfExpensive: !0,
			rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
			isUserInitiated: !0
		})), O.preview != null && (O.preview = F.contentInfo._preview), O.mediaBlob instanceof r("WAWebMediaOpaqueData") && O.mediaBlob.retain();
		var H = { mimetype: O.mimetype }, G = O.isGif ? babelHelpers.extends({}, H, { isGif: !0 }) : H;
		O.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT && !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(N) && (O.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
		var z = {
			businessOwnerJid: N.businessOwnerJid,
			productId: N.productId,
			currencyCode: N.currencyCode,
			priceAmount1000: N.priceAmount1000,
			salePriceAmount1000: N.salePriceAmount1000,
			retailerId: N.retailerId,
			url: N.url,
			productImageCount: N.productImageCount,
			title: N.title,
			description: N.description
		}, j = O.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT && (N.isFromTemplate || N.isDynamicReplyButtonsMsg), K = j || O.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT ? N.caption : void 0;
		P && (O.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE || O.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO || O.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT || O.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) && (K = N.caption), O.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT && K != null && K === N.filename && o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() && (K = void 0), o("WAWebBotUtils").isMetaAiBot(x.id) && !r("isStringNullOrEmpty")(T) && r("isStringNullOrEmpty")(K) && (K = T);
		var Q = o("WAWebMediaFastForwardUtils").canEnableFastForward(x.contact), X = o("WAWebMediaFastForwardUtils").canEnableFastForward(o("WAWebFrontendMsgGetters").getChat(N).contact), Y = {
			parentMsgKey: D == null ? void 0 : D.parentMsgKey,
			associationType: D == null ? void 0 : D.associationType,
			viewMode: D == null ? void 0 : D.viewMode,
			aiThreadInfo: I,
			threadId: A,
			forwardedFromWeb: !0,
			canEnableFastForward: Q && X,
			caption: K,
			type: N.type,
			mentionedJidList: N.mentionedJidList,
			groupMentions: N.groupMentions,
			footer: O.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT ? N.footer : void 0,
			addEvenWhilePreparing: N.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
			useBasePropsType: N.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
			placeholderProps: G,
			isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(N),
			forwardingScore: o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(N),
			multicast: w,
			productMsgOptions: z,
			isAvatar: (m = N.isAvatar) != null ? m : !1,
			forwardedNewsletterMessageInfo: o("WAWebGetNewsletterContextForForwardedMsg").getNewsletterContextForForwardedMsg(N),
			forwardedAiBotMessageInfo: o("WAWebGetAiBotContextForForwardedMsg").getAiBotContextForForwardedMsg(N),
			aiProvenance: o("WAWebMsgGetters").getIsNewsletterMsg(N) && r("WAWebWid").isNewsletter(x.id) ? N.aiProvenance : void 0,
			stickers: (p = N.stickers) != null ? p : void 0,
			publisher: (_ = N.stickerPackPublisher) != null ? _ : void 0,
			fileLength: (f = N.size) != null ? f : void 0,
			description: O.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK && N.description != null ? N.description : "",
			stickerPackId: (g = N.stickerPackId) != null ? g : void 0,
			thumbnailDirectPath: (h = N.thumbnailDirectPath) != null ? h : void 0,
			thumbnailSha256: (y = N.thumbnailSha256) != null ? y : void 0,
			thumbnailEncSha256: (C = N.thumbnailEncSha256) != null ? C : void 0,
			trayIconFileName: (b = N.trayIconFileName) != null ? b : void 0,
			stickerPackSize: (v = N.stickerPackSize) != null ? v : void 0,
			interactiveAnnotations: (S = N.interactiveAnnotations) != null ? S : void 0,
			interactiveHeader: (R = N.interactiveHeader) != null ? R : void 0,
			interactiveType: (L = N.interactiveType) != null ? L : void 0,
			interactivePayload: (E = N.interactivePayload) != null ? E : void 0,
			nativeFlowInteractiveMsg: N.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW ? !0 : void 0,
			nativeFlowName: (k = N.nativeFlowName) != null ? k : void 0
		}, J = await new (o("WAWebMediaPrep")).MediaPrep(O.type, Promise.resolve(O)).sendToChat({
			chat: x,
			options: o("WAWebGetNewsletterContextForForwardedMsg").maybeStripNewsletterForwardMetadata({
				forwardable: Y,
				destination: x.id,
				source: N.id.remote,
				isOriginalMsgForwarded: N.isForwarded,
				isQuestionOrQuestionReply: N.isQuestion || N.questionReplyQuotedMessage != null
			})
		});
		if (O.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
			var Z, ee, te, ne, re, oe = {
				stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.FORWARD,
				stickerIsAnimated: !!((Z = N.mediaData) != null && Z.isAnimated),
				stickerIsFirstParty: !!((ee = N.mediaData) != null && ee.isFirstParty),
				stickerIsFromStickerMaker: !!((te = N.mediaData) != null && te.isFromStickerMaker),
				stickerIsLottie: !!((ne = N.mediaData) != null && ne.isLottie)
			}, ae = new (o("WAWebStickerSendWamEvent")).StickerSendWamEvent(oe), ie = o("WAWebWebpMetadata").getStickerMakerSourceType((re = N.mediaData) == null ? void 0 : re.stickerMakerSourceType);
			ie != null && (ae.stickerMakerSourceType = ie), ae.commit();
		}
		return J;
	}
	l.forwardMediaMsg = m;
}), 98);
