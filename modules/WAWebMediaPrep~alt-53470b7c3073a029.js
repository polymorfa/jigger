__d("WAWebMediaPrep", [
	"JSResourceForInteraction",
	"WABackoffDelay",
	"WALogger",
	"WAPromiseBackoffs",
	"WAPromiseCallSync",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebAck",
	"WAWebBotBaseGating",
	"WAWebChannelVideoServerTranscodeGating",
	"WAWebChatEphemerality",
	"WAWebChatGetters",
	"WAWebCoreActionsODS",
	"WAWebCryptoCalculateFilehash",
	"WAWebMediaCryptoEligibilityUtils",
	"WAWebMediaData",
	"WAWebMediaDataUtils",
	"WAWebMediaEntry",
	"WAWebMediaGetUploadOriginForChat",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMediaMmsV4Download",
	"WAWebMediaMmsV4Upload",
	"WAWebMediaOpaqueData",
	"WAWebMediaPrepHelpers",
	"WAWebMediaStorage",
	"WAWebMediaTypes",
	"WAWebMediaUpdateMsg",
	"WAWebMediaUploadMediaWithPrep",
	"WAWebMessagePluginGenerateReportingTokenContent",
	"WAWebMessagingGatingUtils",
	"WAWebMmsMediaTypes",
	"WAWebMsgDataUtils",
	"WAWebMsgType",
	"WAWebNewsletterCommonGatingUtils",
	"WAWebNewsletterSendMsgAction",
	"WAWebNullFunc",
	"WAWebRecentStickerCollectionMd",
	"WAWebSchemaChat",
	"WAWebSendMsgChatAction",
	"WAWebSendMsgResultAction",
	"WAWebSendStatusMsgAction",
	"WAWebSpoilerFormatRegex",
	"WAWebWamEnumDownloadOriginType",
	"WAWebWamEnumMessageSendResultType",
	"WAWebWamEnumWebcRmrReasonCode",
	"err",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C = new AbortController().signal, b = r("err")("upload failed: retryable, auto-retrying"), v = (function() {
		function t(t, n) {
			var a = this;
			this.baseType = t, this.mediaData = new (r("WAWebMediaData"))({ mediaStage: o("WAWebMediaTypes").MediaDataStage.PREPARING }), this.$1 = n.then(function(t) {
				if (a.mediaData.set(t), !t.filehash) return t.mediaBlob || o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]))).sendLogs("media-fault: no hash or blob"), o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(t.mediaBlob).then(function(e) {
					a.mediaData.filehash = e;
				});
			}, function(e) {
				throw a.mediaData.mediaStage = o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED, e;
			});
		}
		var n = t.prototype;
		return n.sendToChat = function(t) {
			var e = t.chat, n = t.earlyUpload, r = t.options;
			return o("WAPromiseCallSync").promiseCallSync(L, null, {
				chat: e,
				earlyUpload: n,
				options: r,
				prep: this
			});
		}, n.waitForPrep = async function() {
			return await this.$1, this.mediaData;
		}, t;
	})(), S = function(t) {
		var e = t.baseProps, n = t.chat, r = t.options, a = t.prep;
		return r.chatWid = n.id, r.downloadOrigin = o("WAWebMediaPrepHelpers").getDownloadOriginForChat(n, e), r.isNewsletterMsg = o("WAWebChatGetters").getIsNewsletter(n), R(a, r);
	};
	function R(e, t) {
		return e.waitForPrep().then(function(e) {
			var t = e.mediaBlob;
			return t && !(t instanceof r("WAWebMediaOpaqueData")) ? r("WAWebMediaOpaqueData").createFromData(t, t.type).then(function(t) {
				return e.mediaBlob = t, e;
			}) : e;
		}).then(function(e) {
			var n, a, i = e.filehash;
			i || o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]))).sendLogs("media-fault: sendToChat filehash undefined");
			var l = e.mediaBlob instanceof r("WAWebMediaOpaqueData"), d = i != null ? i : "none", m = (n = t.forwardedFromWeb) != null ? n : !1;
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[media-fwd] getMediaPropsNew hash=",
				" blob=",
				" type=",
				" fwd=",
				""
			])), d, l, e.type, m);
			var p = o("WAWebMediaStorage").getOrCreateMediaObject(i), _ = p.mediaBlob;
			_ && (_.retain(), e.mediaBlob instanceof r("WAWebMediaOpaqueData") && e.mediaBlob.autorelease(), e.mediaBlob = _), e.mediaBlob instanceof r("WAWebMediaOpaqueData") && (e.renderableUrl = e.mediaBlob.url()), p.consolidate(e.toJSON()), e.mediaBlob instanceof r("WAWebMediaOpaqueData") && e.mediaBlob.autorelease();
			var f = o("WAWebMediaDataUtils").shouldUseMediaCache(o("WAWebMmsMediaTypes").castToV4(p.type));
			if (f && e.mediaBlob instanceof r("WAWebMediaOpaqueData")) {
				var g = e.mediaBlob.formData();
				o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(i, g);
			}
			var h = f && e.mediaBlob instanceof r("WAWebMediaOpaqueData"), y = p.mediaBlob != null, C = p.msgs.length, b = p.entries.entries.length;
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"[media-fwd] post-merge blob=",
				" msgs=",
				" entries=",
				" cache=",
				" mem=",
				""
			])), y, C, b, f, h), o("WAWebMediaMmsV4Download").downloadMedia({
				mimetype: e.mimetype,
				mediaObject: p,
				downloadEvenIfExpensive: !0,
				mediaType: o("WAWebMmsMediaTypes").msgToMediaType({
					type: e.type,
					isGif: e.isGif,
					isNewsletter: t.isNewsletterMsg === !0
				}),
				rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
				downloadOrigin: (a = t.downloadOrigin) != null ? a : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL,
				mode: "manual",
				chatWid: t.chatWid
			});
			var v = babelHelpers.extends({}, p.msgProps(e));
			return v.caption = t.caption, t.isViewOnce === !0 && (v.isViewOnce = !0), v;
		});
	}
	async function L(e) {
		var t, n, a = e.chat, i = e.earlyUpload, l = e.options, s = e.prep;
		o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Media:sendToChat chat ", ""])), a.id.toLogString());
		try {
			if (!a.id.isStatus()) {
				var u = await o("WAWebSchemaChat").getChatTable().get(a.id.toString());
				if (u == null) {
					var c;
					o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
						"sendMediaMsgToChat: chat ",
						" not in DB. lid: ",
						""
					])), a.id.toLogString(), (c = a.accountLid) == null ? void 0 : c.toLogString()).sendLogs("send-media-chat-not-found").tags("missing-lid");
				} else o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
					"sendMediaMsgToChat: chat ",
					" found in DB. has account lid: ",
					""
				])), a.id.toLogString(), u.accountLid != null);
			}
		} catch (e) {
			o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["sendMediaMsgToChat: failed to check if chat exists"])));
		}
		var v = l.caption, R = l.footer, L = l.quotedMsg ? l.quotedMsg.msgContextInfo(a.id) : {}, E = (t = l.productMsgOptions) != null ? t : {}, k = o("WAWebChatEphemerality").isEphemeralSettingOn(a) ? o("WAWebChatEphemerality").getEphemeralSetting(a) : void 0, I = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(a), T = o("WAWebChatEphemerality").getDisappearingModeInitiator(a), D = o("WAWebChatEphemerality").getAfterReadDurationForChat(a), x = o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(v != null ? v : null) && o("WAWebABProps").getABPropConfigValue("is_spoiler_rich_format_sender_enabled"), $, P = !1;
		a.isCAGAdmin() && (P = !0);
		var N = (n = l.type) != null ? n : s.baseType;
		o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() && o("WAWebMessagePluginGenerateReportingTokenContent").isMsgTypeReportingTokenCompatible(N) && (P = !0);
		var M = o("WAWebBotBaseGating").isBotEnabled() && a.id.isBot();
		M && (P = !0), P && ($ = self.crypto.getRandomValues(new Uint8Array(32)));
		var w = babelHelpers.extends({}, await o("WAWebMsgDataUtils").genOutgoingMsgData(a, N), {
			type: N,
			caption: v,
			footer: R,
			quotedMsg: L.quotedMsg,
			quotedParticipant: L.quotedParticipant,
			quotedStanzaID: L.quotedStanzaID,
			quotedRemoteJid: L.quotedRemoteJid,
			mentionedJidList: l.mentionedJidList,
			groupMentions: l.groupMentions,
			isForwarded: l.isForwarded,
			forwardingScore: l.forwardingScore,
			forwardedNewsletterMessageInfo: l.forwardedNewsletterMessageInfo,
			forwardedAiBotMessageInfo: l.forwardedAiBotMessageInfo,
			aiProvenance: l.aiProvenance,
			multicast: l.multicast,
			forwardedFromWeb: l.forwardedFromWeb,
			ctwaContext: l.ctwaContext,
			ephemeralDuration: k,
			ephemeralSettingTimestamp: I,
			disappearingModeInitiator: T,
			afterReadDuration: D,
			isSpoiler: x,
			messageSecret: $,
			botPersonaId: l.botPersonaId,
			aiMediaCollectionInfo: l.aiMediaCollectionInfo,
			botMetricsMetadata: l.botMetricsMetadata,
			aiThreadInfo: l.aiThreadInfo,
			isAvatar: l.isAvatar,
			viewMode: l.viewMode,
			parentMsgKey: l.parentMsgKey,
			associationType: l.associationType,
			isQuestion: l.isQuestion,
			questionReplyQuotedMessage: l.questionReplyQuotedMessage,
			interactiveAnnotations: l.interactiveAnnotations,
			threadIds: l.threadId != null ? [l.threadId] : void 0,
			statusAttributions: l.statusAttributions,
			isScheduledMsg: l.isScheduledMsg,
			scheduledTimestampS: l.scheduledTimestampS
		}, E);
		if (l.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
			var A;
			w.description = l.description, w.isCaptionByUser = !!l.caption, w.thumbnailSha256 = l.thumbnailSha256, w.stickers = l.stickers, w.stickerPackPublisher = l.publisher, w.size = (A = l.fileLength) != null ? A : 0, w.stickerPackId = l.stickerPackId, w.thumbnailDirectPath = l.thumbnailDirectPath, w.thumbnailEncSha256 = l.thumbnailEncSha256, w.trayIconFileName = l.trayIconFileName, w.stickerPackSize = l.stickerPackSize;
		}
		l.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && l.caption && (w.isCaptionByUser = !0), l.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && (w.nativeFlowInteractiveMsg = l.nativeFlowInteractiveMsg, w.nativeFlowName = l.nativeFlowName, w.interactiveHeader = l.interactiveHeader, w.interactiveType = l.interactiveType, w.interactivePayload = l.interactivePayload), l.isWamoSub === !0 && (w.isWamoSub = !0);
		var F, O;
		async function B(e) {
			F = e;
			var t = l.aiProvenance;
			l.aiProvenancePromise != null && (t = await l.aiProvenancePromise.catch(o("WAWebNullFunc").returnNull));
			var n = e.mediaObject;
			l.earlyUpload = i, l.isMediaCryptoExpectedForChat = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForChat(a), l.uploadOriginForChat = r("WAWebMediaGetUploadOriginForChat")(a);
			var s = function() {
				return o("WAWebMediaUploadMediaWithPrep").uploadMediaWithPrep(e, l);
			}, u = o("WAPromiseBackoffs").createTimer({
				algo: {
					type: "exponential",
					first: 1e3,
					base: 2
				},
				max: 3e3,
				jitter: .5
			});
			u();
			var c = o("WAWebABProps").getABPropConfigValue("wa_web_media_upload_retry_retries_count"), d = c > 0 ? await o("WABackoffDelay").backoff({
				delay: function() {
					return u();
				},
				signal: C,
				retries: c
			}, async function(e, t) {
				var r, a, i = (r = n == null ? void 0 : n.loadedSize) != null ? r : 0, l = await s(), u = (a = n == null ? void 0 : n.loadedSize) != null ? a : 0, d = u > i;
				return !l.mediaResult.mediaEntry && l.mediaResult.kind === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR && (n == null ? void 0 : n.uploadStage) === o("WAWebMediaTypes").UploadStage.NEED_UPLOAD && d ? (t < c && (n == null || n.consolidate({ uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING })), e(b)) : l;
			}) : await s(), m = d.body, p = d.mediaResult, _ = p.kind, f = p.mediaEntry, g = d.mmsThumbnailData;
			if (O = _, !f) throw r("err")("upload failed: media entry was not created");
			return await r("WAWebMediaUpdateMsg")(F, babelHelpers.extends({
				aiProvenance: t,
				deprecatedMms3Url: f.deprecatedMms3Url,
				directPath: f.directPath,
				mediaKey: f.getMediaKey(),
				mediaKeyTimestamp: f.getMediaKeyTimestamp(),
				filehash: r("nullthrows")(n).filehash,
				encFilehash: f.getEncfilehash(),
				size: r("nullthrows")(n).size,
				streamingSidecar: f.sidecar,
				firstFrameSidecar: f.firstFrameSidecar,
				body: m,
				stickerSentTs: o("WATimeUtils").unixTimeMs(),
				mediaHandle: f instanceof o("WAWebMediaEntry").UnencryptedMediaEntry ? f.handle : null,
				metadataUrl: f instanceof o("WAWebMediaEntry").UnencryptedMediaEntry && f.metadataUrl != null && o("WAWebChannelVideoServerTranscodeGating").isChannelVideoServerTranscodeUploadEnabled() ? f.metadataUrl : null
			}, g)), F;
		}
		var W;
		if (l.addEvenWhilePreparing === !0) {
			var q = l.placeholderProps || {}, U = babelHelpers.extends({}, q, w), V = function(t) {
				return F = t, S({
					baseProps: w,
					chat: a,
					options: l,
					prep: s
				}).then(function(e) {
					return r("WAWebMediaUpdateMsg")(F, e);
				}).then(function() {
					return B(F);
				});
			};
			o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && o("WAWebChatGetters").getIsNewsletter(a) ? l.isNewsletterStatus === !0 ? W = r("JSResourceForInteraction")("WAWebNewsletterSendStatusAction").__setRef("WAWebMediaPrep").load().then(function(e) {
				return e.sendNewsletterStatusMediaMsgAction(U, V, l.statusPostFunnelContext);
			}) : W = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(a, U, V) : a.id.isStatus() ? W = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction({
				beforeSend: V,
				funnelContext: l.statusPostFunnelContext,
				mediaMsgData: U
			}) : W = o("WAWebSendMsgChatAction").addAndSendMsgToChat(a, U, V)[1];
		} else {
			var H = S({
				baseProps: w,
				chat: a,
				options: l,
				prep: s
			}).then(function(e) {
				var t = l.useBasePropsType === !0 ? w.type : e.type;
				return babelHelpers.extends({}, w, e, { type: t });
			});
			if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && o("WAWebChatGetters").getIsNewsletter(a)) if (l.isNewsletterStatus === !0) {
				var G = await H;
				W = r("JSResourceForInteraction")("WAWebNewsletterSendStatusAction").__setRef("WAWebMediaPrep").load().then(function(e) {
					return e.sendNewsletterStatusMediaMsgAction(G, B, l.statusPostFunnelContext);
				});
			} else W = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(a, await H, B);
			else a.id.isStatus() ? W = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction({
				beforeSend: B,
				funnelContext: l.statusPostFunnelContext,
				mediaMsgData: await H
			}) : w.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ? W = o("WAWebSendMsgChatAction").addAndSendMsgToChat(a, await H, B)[1] : W = o("WAWebSendMsgChatAction").addAndSendMsgToChat(a, H, B)[1];
		}
		return W.then(function(e) {
			return {
				result: e,
				error: null
			};
		}).catch(function(e) {
			return {
				result: null,
				error: e
			};
		}).then(function(e) {
			var t, n = e.error, r = e.result;
			if ((r == null ? void 0 : r.messageSendResult) === o("WAWebSendMsgResultAction").SendMsgResult.OK) return F.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER && F.isAvatar !== !0 && o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.addStickerWithMediaData(F), {
				messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
				msg: F
			};
			F && (F.ack = o("WAWebAck").ACK.FAILED);
			var a = (t = F) == null || (t = t.mediaObject) == null ? void 0 : t.uploadStage;
			if (F && o("WAWebMmsMediaTypes").getMsgMediaType(F) === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
				var i = a || "undefined";
				O === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR && o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Sticker:sendToChat failed with expressions panel enabled"]))).tags("non-sad").sendLogs("sticker-send-fail-with-expressions-panel-enabled-uploadStage-" + i, { sampling: .01 });
			}
			if (O === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.CANCELLATION) {
				var l;
				return o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Media:sendToChat canceled"]))), (l = F.wamMessageSendReporter) == null || l.postFailure({
					result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_CANCELLED,
					isTerminal: !0
				}), { messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED };
			}
			if (o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
				"Media:sendToChat err res=",
				" stage=",
				" kind=",
				" err=",
				""
			])), r, a, O, String(n)), a != null) switch (a) {
				case o("WAWebMediaTypes").UploadStage.NEED_UPLOAD:
				case o("WAWebMediaTypes").UploadStage.ERROR_TOO_LARGE:
				case o("WAWebMediaTypes").UploadStage.ERROR_FORBIDDEN:
				case o("WAWebMediaTypes").UploadStage.ERROR_THROTTLED: return { messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(F) };
				case o("WAWebMediaTypes").UploadStage.ERROR_MISSING: return o("WAWebCoreActionsODS").logMsgSendError(), o("WAWebCoreActionsODS").logMsgSendErrorUpload(), { messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_EXPIRED };
				default:
			}
			return O === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR ? { messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(F) } : r != null ? F != null ? babelHelpers.extends({}, r, { msg: F }) : r : (F && o("WAWebMmsMediaTypes").getMsgMediaType(F) === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER && o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["Sticker:sendToChat failed with unknown error"]))).sendLogs("sticker-send-fail-unknown-expression-panels"), o("WAWebCoreActionsODS").logMsgSendError(), { messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN });
		});
	}
	l.MediaPrep = v, l.getMediaPropsNew = R, l.sendMediaMsgToChat = L;
}), 98);
