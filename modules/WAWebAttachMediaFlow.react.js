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
	"asyncToGeneratorRuntime",
	"countWhere",
	"getErrorSafe",
	"once",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g = f || (f = o("react")), h = f, y = h.useCallback, C = h.useEffect, b = h.useRef;
	function v(e, t) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			!o("WAWebBotUtils").isMetaAiBot(e.id) || t.length === 0 || !t.every(function(e) {
				return e.media.type === o("WAWebMsgType").MSG_TYPE.IMAGE;
			}) || o("WAWebLogImagineAction").logImagineAction({
				action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_SEND_CONFIRM,
				mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE,
				maxIndex: t.length,
				isSent: !0,
				eventContext: yield o("WAWebGetMetaAiImagineEventContext").getMetaAiImagineEventContext(e)
			});
		}), S.apply(this, arguments);
	}
	function R(e, t) {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			!o("WAWebBotUtils").isMetaAiBot(e.id) || t.length === 0 || !t.every(function(e) {
				return e.media.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
			}) || o("WAWebLogImagineAction").logImagineAction({
				action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_SEND_CONFIRM,
				mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO,
				maxIndex: t.length,
				isSent: !0,
				eventContext: yield o("WAWebGetMetaAiImagineEventContext").getMetaAiImagineEventContext(e)
			});
		}), L.apply(this, arguments);
	}
	function E(e) {
		return k.apply(this, arguments);
	}
	function k() {
		return k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n;
			if (o("WAWebBotUtils").isMetaAiBot(e.id)) {
				var r = (t = (n = e.attachMediaContents) == null || (n = n.selection) == null ? void 0 : n.list) != null ? t : [];
				r.length === 0 || !r.every(function(e) {
					return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
				}) || o("WAWebLogImagineAction").logImagineAction({
					action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_SEND_CANCEL,
					isCancelled: !0,
					maxIndex: r.length,
					eventContext: yield o("WAWebGetMetaAiImagineEventContext").getMetaAiImagineEventContext(e)
				});
			}
		}), k.apply(this, arguments);
	}
	function I(e, t) {
		var n = r("countWhere")(t, function(e) {
			return e.media.type === o("WAWebMsgType").MSG_TYPE.IMAGE || e.media.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
		}), a = t.some(function(e) {
			return e.media.caption != null && e.media.caption.length > 0;
		});
		return n < o("WAWebNewsletterGatingUtils").getNewsletterAlbumsV2MinItemsToSend(a) ? !1 : o("WAWebChatGetters").getIsNewsletter(e) ? o("WAWebNewsletterGatingUtils").isNewsletterAlbumsV2SenderEnabled() : o("WAWebMediaGatingUtils").isAlbumV2SenderEnabled();
	}
	function T(e, t) {
		return D.apply(this, arguments);
	}
	function D() {
		return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			if (!I(e, t)) return null;
			var n = r("countWhere")(t, function(e) {
				return e.media.type === o("WAWebMsgType").MSG_TYPE.IMAGE;
			}), a = r("countWhere")(t, function(e) {
				return e.media.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
			});
			try {
				var i = yield o("WAWebAlbumsCreateAlbumParentMsgData").createAlbumParentMsg({
					chat: e,
					expectedImageCount: n,
					expectedVideoCount: a
				}), l;
				if (o("WAWebChatGetters").getIsNewsletter(e)) l = yield o("WAWebNewsletterSendMsgAction").sendNewsletterAlbumMsg({
					chat: e,
					msg: i
				});
				else {
					var s = o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, o("WAWebMsgDataFromModel").msgDataFromMsgModel(i)), u = s[1];
					l = yield u;
				}
				return l.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK ? i.id : (o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: album parent send returned non-OK result ", ""])), String(l.messageSendResult)).sendLogs("attach-media-album-parent-send-failed"), null);
			} catch (e) {
				return o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: album parent send -, non-album fallback"]))).catching(r("getErrorSafe")(e)).sendLogs("attach-media-album-parent-send-failed"), null;
			}
		}), D.apply(this, arguments);
	}
	function x(e) {
		return $.apply(this, arguments);
	}
	function $() {
		return $ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
					eventContext: yield o("WAWebGetMetaAiImagineEventContext").getMetaAiImagineEventContext(e)
				});
			}
		}), $.apply(this, arguments);
	}
	function P(e) {
		return N.apply(this, arguments);
	}
	function N() {
		return N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
					eventContext: yield o("WAWebGetMetaAiImagineEventContext").getMetaAiImagineEventContext(e)
				});
			}
		}), N.apply(this, arguments);
	}
	function M(t) {
		var a = t.chat, i = t.initCaption, l = t.isQuestion, p = t.mediaCollection, _ = t.onCancel, f = t.onComplete, h = t.onDismiss, S = t.onRender, L = t.onSend, k = t.openTrigger, I = t.questionReplyQuotedMessage, D = t.sendAsSticker, $ = t.threadId, N = b();
		C(function() {
			return o("WAWebCmd").Cmd.closeContextMenu(), o("WAWebCmd").Cmd.closeTooltip(), o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(a), function() {
				o("WAWebUA").UA.isGecko ? self.setTimeout(function() {
					return o("WAWebComposeBoxActions").ComposeBoxActions.focus(a);
				}, 1) : o("WAWebComposeBoxActions").ComposeBoxActions.focus(a);
			};
		}, []);
		var M = y(function() {
			a == null || a.setAttachMediaContents(null);
		}, [a]), w = y(function(e) {
			var t, n;
			e === void 0 && (e = !0);
			var i = function() {
				var t, n = [];
				(t = a.attachMediaContents) == null || t.forEach(function(e) {
					var t, r = (t = e.caption) == null ? void 0 : t.trim();
					r != null && r.length > 0 && n.push(r);
				}), e && M(), f == null || f(!1), _ == null || _(n), p.mediaPickerStatsLogger.logCancel(), h();
			};
			e && ((t = (n = a.attachMediaContents) == null || (n = n.selection) == null || (n = n.list) == null ? void 0 : n.length) != null ? t : 0) > 0 ? o("WAWebConfirmPopup.react").waitForConfirmPopup({
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
				e && (E(a), x(a), P(a), i());
			}) : i();
		}, [
			a,
			M,
			p.mediaPickerStatsLogger,
			_,
			f,
			h
		]), A = function(t) {
			var e;
			(e = N.current) != null && e.handleRequestDismiss(t);
		}, F = r("once")((function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
				r === void 0 && (r = {}), yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(a);
				var s = r, m = s.initCaptionUsed, _ = s.isViewOnce, g = s.isWamoSub;
				o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						var n = o("WAWebResolveMetaAiPersonaId").resolveMetaAiPersonaId(a);
						if (o("WAWebAiMediaCollectionUtils").shouldSendAsAiMediaCollection(a, t)) {
							if (n == null && o("WAWebBotUtils").isMetaAiBot(a.id)) {
								try {
									yield o("WAWebBotProfileCollection").BotProfileCollection.find(o("WAWebBotUtils").META_BOT_FBID_WID);
								} catch (t) {
									o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: BotProfileCollection.find failed ", ""])), String(t));
								}
								n = o("WAWebResolveMetaAiPersonaId").resolveMetaAiPersonaId(a);
							}
							n == null && o("WAWebBotUtils").isMetaAiBot(a.id) && o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: Meta AI persona unresolved after warm-up"]))).sendLogs("ai-media-collection-persona-unresolved"), o("WAWebSendAiMediaCollectionBatch").sendAiMediaCollectionBatch({
								botPersonaId: n,
								chat: a,
								medias: t.map(function(e) {
									return e.media;
								}),
								threadId: $
							});
						} else {
							v(a, t), R(a, t);
							var r = yield T(a, t);
							t.forEach(function(e, t) {
								var s = e.media, u = {};
								if (t === 0 && (u.quotedMsg = a.composeQuotedMsg, a.composeQuotedMsg = null), u.type = s.type, u.isViewOnce = _, u.mentionedJidList = e.mentionedJidList, u.groupMentions = e.groupMentions, u.caption = s.caption, u.addEvenWhilePreparing = s.previewable && s.state === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING, u.isWamoSub = g, u.isQuestion = l, u.questionReplyQuotedMessage = I, u.botPersonaId = n, u.threadId = $, r != null && (s.type === o("WAWebMsgType").MSG_TYPE.IMAGE || s.type === o("WAWebMsgType").MSG_TYPE.VIDEO) && (u.associationType = o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM, u.parentMsgKey = r, u.viewMode = o("WAWebViewMode.flow").ViewModeType.MEDIA_ALBUM), i != null && i.ctwaContextLinkData) {
									var c = i.ctwaContext, d = i.ctwaContextLinkData;
									u.ctwaContext = o("WAWebApiPrepareCtwaContextSend").prepareCtwaContextSend(d, c);
								}
								s.sendToChat({
									chat: a,
									options: u
								});
							});
						}
						o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: sendToChat called for ", " media items"])), t.length), M();
					} catch (e) {
						o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: ui_idle handler failed ", ""])), String(e)).sendLogs("attach-media-flow-ui-idle-handler-failed");
					}
				})), f == null || f(!0, { initCaptionUsed: m }), L == null || L(), p.mediaPickerStatsLogger.logSend({ isViewOnce: !!_ }), o("WAWebCmd").Cmd.closeExpressionPanels(), h();
			});
			return function(e, n) {
				return t.apply(this, arguments);
			};
		})()), O = function(t, n, r) {
			r === void 0 && (r = {});
			var e = r, i = e.initCaptionUsed, l = e.isViewOnce, s = e.threadId;
			o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
				o("WAWebSendScheduledMsgAction").sendScheduledMediaMsgToChat(a, t, n, {
					isViewOnce: l,
					threadId: s
				}).catch(function(e) {
					o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["AttachMediaFlow: schedule media failed ", ""])), String(e)).sendLogs("attach-media-flow-schedule-failed");
				}), M();
			}), f == null || f(!0, { initCaptionUsed: i }), L == null || L(), o("WAWebCmd").Cmd.closeExpressionPanels(), h();
		}, B = r("once")(function(e) {
			e != null && o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
				o("WAWebComposeBoxActions").ComposeBoxActions.paste(a, e);
			}), h();
		}), W;
		o("WAWebChatGetters").getIsNewsletter(a) && (W = {
			surface: "channel-producer-media-editor",
			extras: {
				channelWid: a.id,
				threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL
			}
		});
		var q;
		return l === !0 ? q = o("WAWebQuestions.flow").QuestionType.Question : I != null && (q = o("WAWebQuestions.flow").QuestionType.Reply), g.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "AttachMediaFlow",
			escapable: !0,
			requestDismiss: A,
			children: g.jsx(o("WAWebMediaEditorForChatLoadable.react").MediaEditorForChatLoadable, {
				theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.ATTACH,
				ref: N,
				chat: a,
				onClose: w,
				onRender: S,
				initCaption: i,
				onSendMedia: F,
				onScheduleMedia: o("WAWebIsScheduledMessagesAvailableForChat").isScheduledMediaAvailableForChat(a) ? O : void 0,
				mediaCollection: p,
				onDropText: B,
				sendAsSticker: D,
				tsNavigationData: W,
				threadId: $,
				openTrigger: k,
				allowMultipleMedia: l !== !0 && I == null && o("WAWebMediaGatingUtils").supportsMultipleUploads(a.id),
				placeholderText: o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
					chat: a,
					questionType: q
				})
			})
		});
	}
	M.displayName = M.name + " [from " + i.id + "]", l.default = M;
}), 226);
