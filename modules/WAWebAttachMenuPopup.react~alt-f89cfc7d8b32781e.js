__d("WAWebAttachMenuPopup.react", [
	"WAWebAttachMenuPopupItemAudio.react",
	"WAWebAttachMenuPopupItemCamera.react",
	"WAWebAttachMenuPopupItemCatalog.react",
	"WAWebAttachMenuPopupItemContacts.react",
	"WAWebAttachMenuPopupItemDocuments.react",
	"WAWebAttachMenuPopupItemEvents.react",
	"WAWebAttachMenuPopupItemOrders.react",
	"WAWebAttachMenuPopupItemPhotos.react",
	"WAWebAttachMenuPopupItemPolls.react",
	"WAWebAttachMenuPopupItemQuestion.react",
	"WAWebAttachMenuPopupItemQuickReplies.react",
	"WAWebAttachMenuPopupItemQuiz.react",
	"WAWebAttachMenuPopupItemStickers.react",
	"WAWebAttachMenuPopupPix.react",
	"WAWebAttachMenuPopupUprPaymentRequest.react",
	"WAWebAttachMenuPopupUtils",
	"WAWebAttachMenuUtils",
	"WAWebAttachmentMenuLogger",
	"WAWebBotUtils",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebConnModel",
	"WAWebContactGetters",
	"WAWebMediaGatingUtils",
	"WAWebModalManager",
	"WAWebMsgType",
	"WAWebNewsletterGatingUtils",
	"WAWebPixAttachmentTrayFeature",
	"WAWebQuestions.flow",
	"WAWebQuestionsGatingUtils",
	"WAWebQuestionsSenderGatingUtils",
	"WAWebQuickReplyGatingUtils",
	"WAWebUprAttachmentTrayFeature",
	"WAWebWamEnumMediaPickerOriginType",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebChatValues",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n, a = e.chat, i = e.getComposeBoxEditorRef, l = e.getComposeContents, u = e.onMenuComplete, d = e.questionReplyQuotedMessage, m = e.questionType, p = e.threadId, _ = (t = o("useWAWebChatValues")).useChatValues(a.id, [(n = o("WAWebChatGetters")).getIsNewsletter]), f = _[0], g = t.useChatValues(a.id, [n.getIsBroadcast]), h = g[0], y = t.useChatValues(a.id, [n.getIsMetaAiBot]), C = y[0], b = t.useChatValues(a.id, [n.getIsBotChannel]), v = b[0], S = a.id.isAiHub(), R = r("useWAWebUIM")(), L = function() {
			R == null || R.requestDismiss();
		}, E = function(t) {
			var e = t.attachments, n = t.onCancel, r = t.onSend, i = t.openTrigger, s = t.sendAsSticker, c = s === void 0 ? !1 : s;
			o("WAWebCmd").Cmd.attachMediaDrawer({
				chat: a,
				attachments: e,
				fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
				initCaption: l == null ? void 0 : l(),
				onComplete: function(t, n) {
					u(t, n);
				},
				onSend: r,
				onCancel: n,
				openTrigger: i,
				sendAsSticker: c,
				isQuestion: m === o("WAWebQuestions.flow").QuestionType.Question,
				questionReplyQuotedMessage: d,
				threadId: p
			});
		}, k = o("WAWebAttachMenuUtils").shouldShowDisabledCatalogOption(), I = o("WAWebAttachMenuUtils").shouldShowCatalogOption(a) && !v, T = o("WAWebQuickReplyGatingUtils").canSendQuickReplyInChat(a) && !v, D = o("WAWebAttachMenuUtils").canSendOrder(a) && !o("WAWebContactGetters").getIsMe(a.contact) && !v, x = I || T || D, $ = o("WAWebUprAttachmentTrayFeature").resolveUprMethodForChat(a), P = o("WAWebMediaGatingUtils").getSupportedMediaTypesForChat(a), N = o("WAWebPixAttachmentTrayFeature").shouldShowPixInAttachmentTray(a), M = [];
		if (m == null) {
			P.has(o("WAWebMsgType").MSG_TYPE.DOCUMENT) && M.push(s.jsx(r("WAWebAttachMenuPopupItemDocuments.react"), {
				chat: a,
				dismissMenu: L,
				multiple: o("WAWebMediaGatingUtils").supportsMultipleUploads(a.id, "document"),
				onDocumentPick: function(t) {
					E({
						attachments: t,
						onSend: function() {
							o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(a, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.DOCUMENT);
						},
						onCancel: function() {
							o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(a, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.DOCUMENT);
						}
					});
				}
			}));
			var w = o("WAWebAttachMenuPopupUtils").getMediaSelectionType(a.id);
			w != null && M.push(s.jsx(o("WAWebAttachMenuPopupItemPhotos.react").AttachMenuPopupItemPhotos, {
				chat: a,
				dismissMenu: L,
				multiple: o("WAWebMediaGatingUtils").supportsMultipleUploads(a.id, "image"),
				onMediaPick: function(t) {
					E({
						attachments: t,
						onSend: function() {
							o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(a, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
						},
						onCancel: function() {
							o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(a, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
						}
					});
				},
				mediaSelectionType: w
			})), P.has(o("WAWebMsgType").MSG_TYPE.IMAGE) && M.push(s.jsx(r("WAWebAttachMenuPopupItemCamera.react"), {
				chat: a,
				onCaptureClick: function() {
					o("WAWebCmd").Cmd.openCaptureMedia({
						onMenuComplete: u,
						threadId: p
					});
				}
			})), o("WAWebQuestionsSenderGatingUtils").isQuestionSenderEnabled(a) && M.push(s.jsx(r("WAWebAttachMenuPopupItemQuestion.react"), {
				chat: a,
				getComposeBoxEditorRef: i
			})), !S && (f && o("WAWebNewsletterGatingUtils").isNewsletterAudioFileSendingEnabled() || !f && !h && !C && !v) && M.push(s.jsx(r("WAWebAttachMenuPopupItemAudio.react"), {
				chat: a,
				dismissMenu: L,
				multiple: o("WAWebMediaGatingUtils").supportsMultipleUploads(a.id),
				onMediaPick: function(t) {
					E({
						attachments: t,
						onSend: function() {
							o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(a, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.AUDIO);
						},
						onCancel: function() {
							o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(a, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.AUDIO);
						}
					});
				}
			})), !S && !f && !h && !C && !o("WAWebBotUtils").isManusBot(a.id) && M.push(s.jsx(r("WAWebAttachMenuPopupItemContacts.react"), {
				chat: a,
				onMenuComplete: u
			})), a.canSendPolls() && M.push(s.jsx(r("WAWebAttachMenuPopupItemPolls.react"), {
				chat: a,
				getComposeBoxEditorRef: i
			})), !o("WAWebConnModel").Conn.isSMB && N && M.push(s.jsx(r("WAWebAttachMenuPopupPix.react"), {
				chat: a,
				dismissMenu: L
			})), !S && f && o("WAWebNewsletterGatingUtils").isNewsletterQuizSenderEnabled() && M.push(s.jsx(o("WAWebAttachMenuPopupItemQuiz.react").AttachMenuPopupItemQuiz, {
				chat: a,
				getComposeBoxEditorRef: i
			}));
			var A = !S && P.has(o("WAWebMsgType").MSG_TYPE.STICKER) ? s.jsx(r("WAWebAttachMenuPopupItemStickers.react"), {
				chat: a,
				dismissMenu: L,
				onMediaPick: function(t) {
					E({
						attachments: t,
						sendAsSticker: !0,
						onSend: function() {
							o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(a, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.STICKER_MAKER);
						},
						onCancel: function() {
							o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(a, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.STICKER_MAKER);
						}
					});
				}
			}) : null, F = !S && (o("WAWebChatGetters").getIsGroup(a) || o("WAWebChatGetters").getIsUser(a) && !o("WAWebChatGetters").getIsMetaAiBot(a) && !v) ? s.jsx(r("WAWebAttachMenuPopupItemEvents.react"), { chat: a }) : null;
			M.push([F, A]);
		} else {
			var O = o("WAWebQuestionsGatingUtils").getEnabledAttachmentTypesForQuestionType(m), B;
			O.has(o("WAWebMsgType").MSG_TYPE.IMAGE) ? O.has(o("WAWebMsgType").MSG_TYPE.VIDEO) ? B = o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS_AND_VIDEOS : B = o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS : O.has(o("WAWebMsgType").MSG_TYPE.VIDEO) && (B = o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.VIDEOS), B != null && M.push(s.jsx(o("WAWebAttachMenuPopupItemPhotos.react").AttachMenuPopupItemPhotos, {
				chat: a,
				dismissMenu: L,
				multiple: !1,
				onMediaPick: function(t) {
					o("WAWebModalManager").ModalManager.close(), E({
						attachments: t,
						onSend: function() {
							o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(a, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
						},
						onCancel: function() {
							o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(a, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
						}
					});
				},
				mediaSelectionType: B
			})), O.has(o("WAWebMsgType").MSG_TYPE.IMAGE) && M.push(s.jsx(r("WAWebAttachMenuPopupItemCamera.react"), {
				chat: a,
				onCaptureClick: function() {
					o("WAWebCmd").Cmd.openCaptureMedia({
						onMenuComplete: u,
						questionType: m,
						questionReplyQuotedMessage: d,
						threadId: p
					});
				}
			}));
		}
		var W = s.jsxs(s.Fragment, { children: [
			M,
			x && s.jsx(c, {}),
			o("WAWebConnModel").Conn.isSMB && N && s.jsx(r("WAWebAttachMenuPopupPix.react"), {
				chat: a,
				dismissMenu: L
			}),
			$ != null && s.jsx(r("WAWebAttachMenuPopupUprPaymentRequest.react"), {
				chat: a,
				methods: $,
				dismissMenu: L
			}),
			I && s.jsx(r("WAWebAttachMenuPopupItemCatalog.react"), {
				chat: a,
				disabled: k,
				dismissMenu: L
			}),
			T && s.jsx(r("WAWebAttachMenuPopupItemQuickReplies.react"), {
				chat: a,
				dismissMenu: L
			}),
			D && s.jsx(r("WAWebAttachMenuPopupItemOrders.react"), {
				chat: a,
				dismissMenu: L
			})
		] });
		return s.jsx(r("WDSMenu.react"), { children: W });
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c() {
		return s.jsx(r("WDSMenuItem.react"), { type: "separator" });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = u;
}), 98);
