__d("WAWebMediaEditorForChat.react", [
	"WAWebAiModeSelector.react",
	"WAWebBotBaseGating",
	"WAWebBotGating",
	"WAWebBotMultiModalToasts",
	"WAWebBotMultiModalUtils",
	"WAWebBotUtils",
	"WAWebChatGetters",
	"WAWebFileUtils",
	"WAWebFrontendChatGetters",
	"WAWebMediaEditor.react",
	"WAWebMediaEditorCaptionInput.react",
	"WAWebMediaEditorEnumsThemes",
	"WAWebMediaGatingUtils",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterWamoSubMessageType",
	"WAWebNewsletterWamoSubMessageTypePopup.react",
	"WAWebNewsletterWamoSubUtils",
	"WAWebQuotedMessageUserJourneyLogger",
	"WAWebScheduledMsgConstants",
	"WAWebStateUtils",
	"WAWebUserPrefsMeUser",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebChatValues",
	"useWAWebListener",
	"useWAWebScheduledMsgCount"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e, t, n) {
		return function(o) {
			return s.jsx(r("WAWebMediaEditorCaptionInput.react"), babelHelpers.extends({ chat: e }, o, {
				placeholderText: t,
				modeSelectorElement: n
			}));
		};
	}
	function d(e) {
		var t, a = e.allowMultipleMedia, i = e.chat, l = e.hideCanvasShadow, d = e.hideFooter, m = e.initCaption, p = e.isSubmitDisabled, _ = e.maxCaptionLength, f = e.maxNumberOfMedia, g = e.mediaCollection, h = e.mimes, y = e.onClose, C = e.onDropText, b = e.onRender, v = e.onScheduleMedia, S = e.onSendMedia, R = e.openTrigger, L = e.placeholderText, E = e.ref, k = e.sendAsSticker, I = e.submitAccessory, T = e.theme, D = e.threadId, x = e.toolbarContainer, $ = e.tsNavigationData, P = !i.contact.isEnterprise && !o("WAWebUserPrefsMeUser").isMeAccount(i.contact.id) && !o("WAWebBotUtils").isAnyMetaAiBot(i.id) && !k, N = (t = o("useWAWebChatValues").useOptionalChatValues(i.id, [
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebFrontendChatGetters").getNewsletterMetadata,
			o("WAWebFrontendChatGetters").getComposeQuotedMsg
		])) != null ? t : [
			!1,
			null,
			null
		], M = N[0], w = N[1], A = N[2], F = r("useWAWebScheduledMsgCount")(v != null ? i.id : null), O = F >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT, B = u(null), W = B[0], q = B[1], U = o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(i));
		o("useWAWebListener").useListener(U ? g : null, "max_upload_limit", function() {
			var e = g.getPreviewableMedias(), t = e.length > 0 ? o("WAWebFileUtils").typeFromMimetype(e[0].mimetype) : void 0, n = o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(0, i.id, t);
			t === "image" || t === "video" ? o("WAWebBotMultiModalToasts").showMediaSendLimitExceededToast(n) : t === "document" && o("WAWebBotMultiModalToasts").showDocumentUploadLimitExceededToast(n);
		});
		var V = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = e;
				if (U) {
					var r = new Set(g.getPreviewableMedias().map(function(e) {
						return o("WAWebFileUtils").typeFromMimetype(e.mimetype);
					})), a = o("WAWebBotMultiModalUtils").validateMetaAiAttachments(e, i.id, r), l = a.errors, s = a.validAttachments;
					if (o("WAWebBotMultiModalUtils").showMetaAiAttachmentErrors(l), s.length === 0) {
						g.getPreviewableMedias().length === 0 && (y == null || y(!0));
						return;
					}
					n = s;
				}
				var u = n.length > 0 ? o("WAWebFileUtils").typeFromMimetype(n[0].file.type) : void 0;
				return g.processAttachmentsForChat(n, t, i, f != null ? f : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(g.getPreviewableMedias().length + n.length, i.id, u));
			});
			return function(n, r) {
				return e.apply(this, arguments);
			};
		})(), H = function(t, n, r) {
			if (M && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(w) && T !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
				var e = function(r) {
					q(null), S(t, babelHelpers.extends({}, n, { isWamoSub: r === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub ? !0 : void 0 }));
				};
				q({
					popupAnchorEl: r,
					handleSelect: e
				});
				return;
			}
			S(t, babelHelpers.extends({}, n)), A != null && o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageSent(i.id);
		}, G = o("WAWebBotUtils").isMetaAiBot(i.id) && o("WAWebBotBaseGating").isAiModeSelectorMediaEditorEnabled() ? s.jsx(r("WAWebAiModeSelector.react"), {
			chat: i,
			isInteractive: o("WAWebBotGating").isAiModeSelectorInteractive(),
			threadId: D
		}) : null, z = g.getPreviewableMedias(), j = z.length > 0 ? o("WAWebFileUtils").typeFromMimetype(z[0].mimetype) : void 0;
		return s.jsxs(s.Fragment, { children: [s.jsx(o("WAWebMediaEditor.react").MediaEditor, {
			ref: E,
			canViewOnce: P,
			sendAsSticker: k,
			theme: T,
			onClose: y,
			onRender: b,
			hdEligible: !M,
			mediaCollection: g,
			initCaption: m,
			onDropText: C,
			onSendMedia: H,
			onScheduleMedia: v,
			scheduleIsGroup: i.id.isGroup(),
			scheduleAtLimit: O,
			tsNavigationData: $,
			threadId: D,
			allowMultipleMedia: a,
			maxNumberOfMedia: f != null ? f : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(z.length, i.id, j),
			mimes: h,
			maxCaptionLength: _,
			openTrigger: R,
			onProcessAttachments: V,
			renderCaptionInput: c(i, L, G),
			hideFooter: d,
			hideCanvasShadow: l,
			toolbarContainer: x,
			submitAccessory: I,
			isSubmitDisabled: p
		}), W != null && T !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL && s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
			handleSelect: W.handleSelect,
			popupAnchorEl: W.popupAnchorEl,
			onDismiss: function() {
				return q(null);
			}
		})] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MediaEditorForChat = d;
}), 98);
