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
		var t, n = e.allowMultipleMedia, a = e.chat, i = e.hideCanvasShadow, l = e.hideFooter, d = e.initCaption, m = e.isSubmitDisabled, p = e.maxCaptionLength, _ = e.maxNumberOfMedia, f = e.mediaCollection, g = e.mimes, h = e.onClose, y = e.onDropText, C = e.onRender, b = e.onScheduleMedia, v = e.onSendMedia, S = e.openTrigger, R = e.placeholderText, L = e.ref, E = e.sendAsSticker, k = e.submitAccessory, I = e.theme, T = e.threadId, D = e.toolbarContainer, x = e.tsNavigationData, $ = !a.contact.isEnterprise && !o("WAWebUserPrefsMeUser").isMeAccount(a.contact.id) && !o("WAWebBotUtils").isAnyMetaAiBot(a.id) && !E, P = (t = o("useWAWebChatValues").useOptionalChatValues(a.id, [
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebFrontendChatGetters").getNewsletterMetadata,
			o("WAWebFrontendChatGetters").getComposeQuotedMsg
		])) != null ? t : [
			!1,
			null,
			null
		], N = P[0], M = P[1], w = P[2], A = r("useWAWebScheduledMsgCount")(b != null ? a.id : null), F = A >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT, O = u(null), B = O[0], W = O[1], q = o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(a));
		o("useWAWebListener").useListener(q ? f : null, "max_upload_limit", function() {
			var e = f.getPreviewableMedias(), t = e.length > 0 ? o("WAWebFileUtils").typeFromMimetype(e[0].mimetype) : void 0, n = o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(0, a.id, t);
			t === "image" || t === "video" ? o("WAWebBotMultiModalToasts").showMediaSendLimitExceededToast(n) : t === "document" && o("WAWebBotMultiModalToasts").showDocumentUploadLimitExceededToast(n);
		});
		var U = async function(t, n) {
			var e = t;
			if (q) {
				var r = new Set(f.getPreviewableMedias().map(function(e) {
					return o("WAWebFileUtils").typeFromMimetype(e.mimetype);
				})), i = o("WAWebBotMultiModalUtils").validateMetaAiAttachments(t, a.id, r), l = i.errors, s = i.validAttachments;
				if (o("WAWebBotMultiModalUtils").showMetaAiAttachmentErrors(l), s.length === 0) {
					f.getPreviewableMedias().length === 0 && (h == null || h(!0));
					return;
				}
				e = s;
			}
			var u = e.length > 0 ? o("WAWebFileUtils").typeFromMimetype(e[0].file.type) : void 0;
			return f.processAttachmentsForChat(e, n, a, _ != null ? _ : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(f.getPreviewableMedias().length + e.length, a.id, u));
		}, V = function(t, n, r) {
			if (N && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(M) && I !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
				var e = function(r) {
					W(null), v(t, babelHelpers.extends({}, n, { isWamoSub: r === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub ? !0 : void 0 }));
				};
				W({
					popupAnchorEl: r,
					handleSelect: e
				});
				return;
			}
			v(t, babelHelpers.extends({}, n)), w != null && o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageSent(a.id);
		}, H = o("WAWebBotUtils").isMetaAiBot(a.id) && o("WAWebBotBaseGating").isAiModeSelectorMediaEditorEnabled() ? s.jsx(r("WAWebAiModeSelector.react"), {
			chat: a,
			isInteractive: o("WAWebBotGating").isAiModeSelectorInteractive(),
			threadId: T
		}) : null, G = f.getPreviewableMedias(), z = G.length > 0 ? o("WAWebFileUtils").typeFromMimetype(G[0].mimetype) : void 0;
		return s.jsxs(s.Fragment, { children: [s.jsx(o("WAWebMediaEditor.react").MediaEditor, {
			ref: L,
			canViewOnce: $,
			sendAsSticker: E,
			theme: I,
			onClose: h,
			onRender: C,
			hdEligible: !N,
			mediaCollection: f,
			initCaption: d,
			onDropText: y,
			onSendMedia: V,
			onScheduleMedia: b,
			scheduleIsGroup: a.id.isGroup(),
			scheduleAtLimit: F,
			tsNavigationData: x,
			threadId: T,
			allowMultipleMedia: n,
			maxNumberOfMedia: _ != null ? _ : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(G.length, a.id, z),
			mimes: g,
			maxCaptionLength: p,
			openTrigger: S,
			onProcessAttachments: U,
			renderCaptionInput: c(a, R, H),
			hideFooter: l,
			hideCanvasShadow: i,
			toolbarContainer: D,
			submitAccessory: k,
			isSubmitDisabled: m
		}), B != null && I !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL && s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
			handleSelect: B.handleSelect,
			popupAnchorEl: B.popupAnchorEl,
			onDismiss: function() {
				return W(null);
			}
		})] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MediaEditorForChat = d;
}), 98);
