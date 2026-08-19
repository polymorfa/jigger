__d("WAWebAttachMediaFlow.react", [
	"fbt",
	"WALogger",
	"WAWebAiMediaCollectionUtils",
	"WAWebAlbumsCreateAlbumParentMsgData",
	"WAWebApiPrepareCtwaContextSend",
	"WAWebAttachMediaModel",
	"WAWebBizBotTosUtils",
	"WAWebBotProfileCollection",
	"WAWebBotUtils",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebComposeBoxUtils",
	"WAWebConfirmPopup.react",
	"WAWebDrawerManager",
	"WAWebFbtCommon",
	"WAWebGetMetaAiImagineEventContext",
	"WAWebIsScheduledMessagesAvailableForChat",
	"WAWebLogImagineAction",
	"WAWebMediaEditorEnumsThemes",
	"WAWebMediaEditorForChatLoadable.react",
	"WAWebMediaGatingUtils",
	"WAWebMessageAssociation.flow",
	"WAWebMsgDataFromModel",
	"WAWebMsgType",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterSendMsgAction",
	"WAWebPrepareMessageSendingAction",
	"WAWebQuestions.flow",
	"WAWebResolveMetaAiPersonaId",
	"WAWebSendAiMediaCollectionBatch",
	"WAWebSendMsgChatAction",
	"WAWebSendMsgResultAction",
	"WAWebSendScheduledMsgAction",
	"WAWebUA",
	"WAWebUiIdleEventBus",
	"WAWebUimUie.react",
	"WAWebViewMode.flow",
	"WAWebWamEnumImagineAction",
	"WAWebWamEnumImagineMediaType",
	"WAWebWamEnumThreadType",
	"countWhere",
	"getErrorSafe",
	"once",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g = f || (f = o("react")), h = f, y = h.useCallback, C = h.useEffect, b = h.useRef;
	async function v(e, t) {
		!o("WAWebBotUtils").isMetaAiBot(e.id) || t.length === 0 || !t.every(function(e) {
			return e.media.type === o("WAWebMsgType").MSG_TYPE.IMAGE;
		}) || o("WAWebLogImagineAction").logImagineAction({
			action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_SEND_CONFIRM,
			mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE,
			maxIndex: t.length,
			isSent: !0,
			eventContext: await o("WAWebGetMetaAiImagineEventContext").getMetaAiImagineEventContext(e)
		});
	}
	async function S(e, t) {
		!o("WAWebBotUtils").isMetaAiBot(e.id) || t.length === 0 || !t.every(function(e) {
			return e.media.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
		}) || o("WAWebLogImagineAction").logImagineAction({
			action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_SEND_CONFIRM,
			mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO,
			maxIndex: t.length,
			isSent: !0,
			eventContext: await o("WAWebGetMetaAiImagineEventContext").getMetaAiImagineEventContext(e)
		});
	}
	async function R(e) {
		var t, n;
		if (o("WAWebBotUtils").isMetaAiBot(e.id)) {
			var r = (t = (n = e.attachMediaContents) == null || (n = n.selection) == null ? void 0 : n.list) != null ? t : [];
			r.length === 0 || !r.every(function(e) {
				return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
			}) || o("WAWebLogImagineAction").logImagineAction({
				action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_SEND_CANCEL,
				isCancelled: !0,
				maxIndex: r.length,
				eventContext: await o("WAWebGetMetaAiImagineEventContext").getMetaAiImagineEventContext(e)
			});
		}
	}
	function L(e, t) {
		var n = r("countWhere")(t, function(e) {
			return e.media.type === o("WAWebMsgType").MSG_TYPE.IMAGE || e.media.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
		}), a = t.some(function(e) {
			return e.media.caption != null && e.media.caption.length > 0;
		});
		return n < o("WAWebNewsletterGatingUtils").getNewsletterAlbumsV2MinItemsToSend(a) ? !1 : o("WAWebChatGetters").getIsNewsletter(e) ? o("WAWebNewsletterGatingUtils").isNewsletterAlbumsV2SenderEnabled() : o("WAWebMediaGatingUtils").isAlbumV2SenderEnabled();
	}
	async function E(t, n) {
		if (!L(t, n)) return null;
		var a = r("countWhere")(n, function(e) {
			return e.media.type === o("WAWebMsgType").MSG_TYPE.IMAGE;
		}), i = r("countWhere")(n, function(e) {
			return e.media.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
		});
		try {
			var l = await o("WAWebAlbumsCreateAlbumParentMsgData").createAlbumParentMsg({
				chat: t,
				expectedImageCount: a,
				expectedVideoCount: i
			}), s;
			if (o("WAWebChatGetters").getIsNewsletter(t)) s = await o("WAWebNewsletterSendMsgAction").sendNewsletterAlbumMsg({
				chat: t,
				msg: l
			});
			else {
				var c = o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, o("WAWebMsgDataFromModel").msgDataFromMsgModel(l)), d = c[1];
				s = await d;
			}
			return s.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK ? l.id : (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: album parent send returned non-OK result ", ""])), String(s.messageSendResult)).sendLogs("attach-media-album-parent-send-failed"), null);
		} catch (e) {
			return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: album parent send -, non-album fallback"]))).catching(r("getErrorSafe")(e)).sendLogs("attach-media-album-parent-send-failed"), null;
		}
	}
	async function k(e) {
		var t, n;
		if (o("WAWebBotUtils").isMetaAiBot(e.id)) {
			var r = (t = (n = e.attachMediaContents) == null || (n = n.selection) == null ? void 0 : n.list) != null ? t : [];
			r.length === 0 || !r.every(function(e) {
				return e.type === o("WAWebMsgType").MSG_TYPE.IMAGE;
			}) || o("WAWebLogImagineAction").logImagineAction({
				action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_SEND_CANCEL,
				mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE,
				isCancelled: !0,
				maxIndex: r.length,
				eventContext: await o("WAWebGetMetaAiImagineEventContext").getMetaAiImagineEventContext(e)
			});
		}
	}
	async function I(e) {
		var t, n;
		if (o("WAWebBotUtils").isMetaAiBot(e.id)) {
			var r = (t = (n = e.attachMediaContents) == null || (n = n.selection) == null ? void 0 : n.list) != null ? t : [];
			r.length === 0 || !r.every(function(e) {
				return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
			}) || o("WAWebLogImagineAction").logImagineAction({
				action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_SEND_CANCEL,
				mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO,
				isCancelled: !0,
				maxIndex: r.length,
				eventContext: await o("WAWebGetMetaAiImagineEventContext").getMetaAiImagineEventContext(e)
			});
		}
	}
	function T(e) {
		var t = e.chat, n = e.initCaption, a = e.isQuestion, i = e.mediaCollection, l = e.onCancel, u = e.onComplete, f = e.onDismiss, h = e.onRender, L = e.onSend, T = e.openTrigger, D = e.questionReplyQuotedMessage, x = e.sendAsSticker, $ = e.threadId, P = b();
		C(function() {
			return o("WAWebCmd").Cmd.closeContextMenu(), o("WAWebCmd").Cmd.closeTooltip(), o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(t), function() {
				o("WAWebUA").UA.isGecko ? self.setTimeout(function() {
					return o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
				}, 1) : o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
			};
		}, []);
		var N = y(function() {
			t == null || t.setAttachMediaContents(null);
		}, [t]), M = y(function(e) {
			var n, a;
			e === void 0 && (e = !0);
			var c = function() {
				var n, r = [];
				(n = t.attachMediaContents) == null || n.forEach(function(e) {
					var t, n = (t = e.caption) == null ? void 0 : t.trim();
					n != null && n.length > 0 && r.push(n);
				}), e && N(), u == null || u(!1), l == null || l(r), i.mediaPickerStatsLogger.logCancel(), f();
			};
			e && ((n = (a = t.attachMediaContents) == null || (a = a.selection) == null || (a = a.list) == null ? void 0 : a.length) != null ? n : 0) > 0 ? o("WAWebConfirmPopup.react").waitForConfirmPopup({
				children: s._(
					/*BTDS*/
					""
				),
				okText: s._(
					/*BTDS*/
					""
				),
				cancelText: r("WAWebFbtCommon")("Cancel")
			}).then(function(e) {
				e && (R(t), k(t), I(t), c());
			}) : c();
		}, [
			t,
			N,
			i.mediaPickerStatsLogger,
			l,
			u,
			f
		]), w = function(t) {
			var e;
			(e = P.current) != null && e.handleRequestDismiss(t);
		}, A = r("once")(async function(e, r) {
			r === void 0 && (r = {}), await o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(t);
			var l = r, s = l.initCaptionUsed, _ = l.isViewOnce, g = l.isWamoSub;
			o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", async function() {
				try {
					var r = o("WAWebResolveMetaAiPersonaId").resolveMetaAiPersonaId(t);
					if (o("WAWebAiMediaCollectionUtils").shouldSendAsAiMediaCollection(t, e)) {
						if (r == null && o("WAWebBotUtils").isMetaAiBot(t.id)) {
							try {
								await o("WAWebBotProfileCollection").BotProfileCollection.find(o("WAWebBotUtils").META_BOT_FBID_WID);
							} catch (e) {
								o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: BotProfileCollection.find failed ", ""])), String(e));
							}
							r = o("WAWebResolveMetaAiPersonaId").resolveMetaAiPersonaId(t);
						}
						r == null && o("WAWebBotUtils").isMetaAiBot(t.id) && o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: Meta AI persona unresolved after warm-up"]))).sendLogs("ai-media-collection-persona-unresolved"), o("WAWebSendAiMediaCollectionBatch").sendAiMediaCollectionBatch({
							botPersonaId: r,
							chat: t,
							medias: e.map(function(e) {
								return e.media;
							}),
							threadId: $
						});
					} else {
						v(t, e), S(t, e);
						var i = await E(t, e);
						e.forEach(function(e, l) {
							var s = e.media, u = {};
							if (l === 0 && (u.quotedMsg = t.composeQuotedMsg, t.composeQuotedMsg = null), u.type = s.type, u.isViewOnce = _, u.mentionedJidList = e.mentionedJidList, u.groupMentions = e.groupMentions, u.caption = s.caption, u.addEvenWhilePreparing = s.previewable && s.state === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING, u.isWamoSub = g, u.isQuestion = a, u.questionReplyQuotedMessage = D, u.botPersonaId = r, u.threadId = $, i != null && (s.type === o("WAWebMsgType").MSG_TYPE.IMAGE || s.type === o("WAWebMsgType").MSG_TYPE.VIDEO) && (u.associationType = o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM, u.parentMsgKey = i, u.viewMode = o("WAWebViewMode.flow").ViewModeType.MEDIA_ALBUM), n != null && n.ctwaContextLinkData) {
								var c = n.ctwaContext, d = n.ctwaContextLinkData;
								u.ctwaContext = o("WAWebApiPrepareCtwaContextSend").prepareCtwaContextSend(d, c);
							}
							s.sendToChat({
								chat: t,
								options: u
							});
						});
					}
					o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: sendToChat called for ", " media items"])), e.length), N();
				} catch (e) {
					o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: ui_idle handler failed ", ""])), String(e)).sendLogs("attach-media-flow-ui-idle-handler-failed");
				}
			}), u == null || u(!0, { initCaptionUsed: s }), L == null || L(), i.mediaPickerStatsLogger.logSend({ isViewOnce: !!_ }), o("WAWebCmd").Cmd.closeExpressionPanels(), f();
		}), F = function(n, r, a) {
			a === void 0 && (a = {});
			var e = a, i = e.initCaptionUsed, l = e.isViewOnce, s = e.threadId;
			o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
				o("WAWebSendScheduledMsgAction").sendScheduledMediaMsgToChat(t, n, r, {
					isViewOnce: l,
					threadId: s
				}).catch(function(e) {
					o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: schedule media failed ", ""])), String(e)).sendLogs("attach-media-flow-schedule-failed");
				}), N();
			}), u == null || u(!0, { initCaptionUsed: i }), L == null || L(), o("WAWebCmd").Cmd.closeExpressionPanels(), f();
		}, O = r("once")(function(e) {
			e != null && o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
				o("WAWebComposeBoxActions").ComposeBoxActions.paste(t, e);
			}), f();
		}), B;
		o("WAWebChatGetters").getIsNewsletter(t) && (B = {
			surface: "channel-producer-media-editor",
			extras: {
				channelWid: t.id,
				threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL
			}
		});
		var W;
		return a === !0 ? W = o("WAWebQuestions.flow").QuestionType.Question : D != null && (W = o("WAWebQuestions.flow").QuestionType.Reply), g.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "AttachMediaFlow",
			escapable: !0,
			requestDismiss: w,
			children: g.jsx(o("WAWebMediaEditorForChatLoadable.react").MediaEditorForChatLoadable, {
				theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.ATTACH,
				ref: P,
				chat: t,
				onClose: M,
				onRender: h,
				initCaption: n,
				onSendMedia: A,
				onScheduleMedia: o("WAWebIsScheduledMessagesAvailableForChat").isScheduledMediaAvailableForChat(t) ? F : void 0,
				mediaCollection: i,
				onDropText: O,
				sendAsSticker: x,
				tsNavigationData: B,
				threadId: $,
				openTrigger: T,
				allowMultipleMedia: a !== !0 && D == null && o("WAWebMediaGatingUtils").supportsMultipleUploads(t.id),
				placeholderText: o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
					chat: t,
					questionType: W
				})
			})
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = T;
}), 226);
