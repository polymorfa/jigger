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
	"react-compiler-runtime",
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
		var t, n = o("react-compiler-runtime").c(105), a = e.allowMultipleMedia, i = e.chat, l = e.hideCanvasShadow, d = e.hideFooter, p = e.initCaption, _ = e.isSubmitDisabled, f = e.maxCaptionLength, g = e.maxNumberOfMedia, h = e.mediaCollection, y = e.mimes, C = e.onClose, b = e.onDropText, v = e.onRender, S = e.onScheduleMedia, R = e.onSendMedia, L = e.openTrigger, E = e.placeholderText, k = e.ref, I = e.sendAsSticker, T = e.submitAccessory, D = e.theme, x = e.threadId, $ = e.toolbarContainer, P = e.tsNavigationData, N;
		n[0] !== i.contact.id || n[1] !== i.contact.isEnterprise || n[2] !== i.id || n[3] !== I ? (N = !i.contact.isEnterprise && !o("WAWebUserPrefsMeUser").isMeAccount(i.contact.id) && !o("WAWebBotUtils").isAnyMetaAiBot(i.id) && !I, n[0] = i.contact.id, n[1] = i.contact.isEnterprise, n[2] = i.id, n[3] = I, n[4] = N) : N = n[4];
		var M = N, w = (t = o("useWAWebChatValues").useOptionalChatValues(i.id, [
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebFrontendChatGetters").getNewsletterMetadata,
			o("WAWebFrontendChatGetters").getComposeQuotedMsg
		])) != null ? t : [
			!1,
			null,
			null
		], A = w[0], F = w[1], O = w[2], B = r("useWAWebScheduledMsgCount")(S != null ? i.id : null), W = B >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT, q = u(null), U = q[0], V = q[1], H;
		n[5] !== i ? (H = o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(i)), n[5] = i, n[6] = H) : H = n[6];
		var G = H, z;
		n[7] !== i.id || n[8] !== h ? (z = function() {
			var e = h.getPreviewableMedias(), t = e.length > 0 ? o("WAWebFileUtils").typeFromMimetype(e[0].mimetype) : void 0, n = o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(0, i.id, t);
			t === "image" || t === "video" ? o("WAWebBotMultiModalToasts").showMediaSendLimitExceededToast(n) : t === "document" && o("WAWebBotMultiModalToasts").showDocumentUploadLimitExceededToast(n);
		}, n[7] = i.id, n[8] = h, n[9] = z) : z = n[9], o("useWAWebListener").useListener(G ? h : null, "max_upload_limit", z);
		var j;
		n[10] !== i || n[11] !== G || n[12] !== g || n[13] !== h || n[14] !== C ? (j = async function(t, n) {
			var e = t;
			if (G) {
				var r = new Set(h.getPreviewableMedias().map(m)), a = o("WAWebBotMultiModalUtils").validateMetaAiAttachments(t, i.id, r), l = a.errors, s = a.validAttachments;
				if (o("WAWebBotMultiModalUtils").showMetaAiAttachmentErrors(l), s.length === 0) {
					h.getPreviewableMedias().length === 0 && (C == null || C(!0));
					return;
				}
				e = s;
			}
			var u = e.length > 0 ? o("WAWebFileUtils").typeFromMimetype(e[0].file.type) : void 0;
			return h.processAttachmentsForChat(e, n, i, g != null ? g : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(h.getPreviewableMedias().length + e.length, i.id, u));
		}, n[10] = i, n[11] = G, n[12] = g, n[13] = h, n[14] = C, n[15] = j) : j = n[15];
		var K = j, Q;
		n[16] !== i.id || n[17] !== O || n[18] !== A || n[19] !== F || n[20] !== R || n[21] !== D ? (Q = function(t, n, r) {
			if (A && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(F) && D !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
				var e = function(r) {
					V(null), R(t, babelHelpers.extends({}, n, { isWamoSub: r === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub ? !0 : void 0 }));
				};
				V({
					popupAnchorEl: r,
					handleSelect: e
				});
				return;
			}
			R(t, babelHelpers.extends({}, n)), O != null && o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageSent(i.id);
		}, n[16] = i.id, n[17] = O, n[18] = A, n[19] = F, n[20] = R, n[21] = D, n[22] = Q) : Q = n[22];
		var X = Q, Y;
		n[23] !== i || n[24] !== x ? (Y = o("WAWebBotUtils").isMetaAiBot(i.id) && o("WAWebBotBaseGating").isAiModeSelectorMediaEditorEnabled() ? s.jsx(r("WAWebAiModeSelector.react"), {
			chat: i,
			isInteractive: o("WAWebBotGating").isAiModeSelectorInteractive(),
			threadId: x
		}) : null, n[23] = i, n[24] = x, n[25] = Y) : Y = n[25];
		var J = Y, Z, ee, te, ne, re, oe, ae, ie, le, se, ue, ce, de, me, pe, _e, fe, ge, he;
		if (n[26] !== a || n[27] !== M || n[28] !== i.id || n[29] !== X || n[30] !== p || n[31] !== W || n[32] !== A || n[33] !== g || n[34] !== h || n[35] !== C || n[36] !== b || n[37] !== v || n[38] !== S || n[39] !== k || n[40] !== I || n[41] !== D || n[42] !== x || n[43] !== P) {
			var ye = h.getPreviewableMedias(), Ce = ye.length > 0 ? o("WAWebFileUtils").typeFromMimetype(ye[0].mimetype) : void 0;
			Z = o("WAWebMediaEditor.react").MediaEditor, fe = k, ge = M, he = I, ee = D, te = C, ne = v, re = !A, oe = h, ae = p, ie = b, le = X, se = S, n[63] !== i.id ? (ue = i.id.isGroup(), n[63] = i.id, n[64] = ue) : ue = n[64], ce = W, de = P, me = x, pe = a, _e = g != null ? g : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(ye.length, i.id, Ce), n[26] = a, n[27] = M, n[28] = i.id, n[29] = X, n[30] = p, n[31] = W, n[32] = A, n[33] = g, n[34] = h, n[35] = C, n[36] = b, n[37] = v, n[38] = S, n[39] = k, n[40] = I, n[41] = D, n[42] = x, n[43] = P, n[44] = Z, n[45] = ee, n[46] = te, n[47] = ne, n[48] = re, n[49] = oe, n[50] = ae, n[51] = ie, n[52] = le, n[53] = se, n[54] = ue, n[55] = ce, n[56] = de, n[57] = me, n[58] = pe, n[59] = _e, n[60] = fe, n[61] = ge, n[62] = he;
		} else Z = n[44], ee = n[45], te = n[46], ne = n[47], re = n[48], oe = n[49], ae = n[50], ie = n[51], le = n[52], se = n[53], ue = n[54], ce = n[55], de = n[56], me = n[57], pe = n[58], _e = n[59], fe = n[60], ge = n[61], he = n[62];
		var be;
		n[65] !== i || n[66] !== J || n[67] !== E ? (be = c(i, E, J), n[65] = i, n[66] = J, n[67] = E, n[68] = be) : be = n[68];
		var ve;
		n[69] !== Z || n[70] !== K || n[71] !== l || n[72] !== d || n[73] !== _ || n[74] !== f || n[75] !== y || n[76] !== L || n[77] !== T || n[78] !== ee || n[79] !== te || n[80] !== ne || n[81] !== re || n[82] !== oe || n[83] !== ae || n[84] !== ie || n[85] !== le || n[86] !== se || n[87] !== ue || n[88] !== ce || n[89] !== de || n[90] !== me || n[91] !== pe || n[92] !== _e || n[93] !== be || n[94] !== fe || n[95] !== ge || n[96] !== he || n[97] !== $ ? (ve = s.jsx(Z, {
			ref: fe,
			canViewOnce: ge,
			sendAsSticker: he,
			theme: ee,
			onClose: te,
			onRender: ne,
			hdEligible: re,
			mediaCollection: oe,
			initCaption: ae,
			onDropText: ie,
			onSendMedia: le,
			onScheduleMedia: se,
			scheduleIsGroup: ue,
			scheduleAtLimit: ce,
			tsNavigationData: de,
			threadId: me,
			allowMultipleMedia: pe,
			maxNumberOfMedia: _e,
			mimes: y,
			maxCaptionLength: f,
			openTrigger: L,
			onProcessAttachments: K,
			renderCaptionInput: be,
			hideFooter: d,
			hideCanvasShadow: l,
			toolbarContainer: $,
			submitAccessory: T,
			isSubmitDisabled: _
		}), n[69] = Z, n[70] = K, n[71] = l, n[72] = d, n[73] = _, n[74] = f, n[75] = y, n[76] = L, n[77] = T, n[78] = ee, n[79] = te, n[80] = ne, n[81] = re, n[82] = oe, n[83] = ae, n[84] = ie, n[85] = le, n[86] = se, n[87] = ue, n[88] = ce, n[89] = de, n[90] = me, n[91] = pe, n[92] = _e, n[93] = be, n[94] = fe, n[95] = ge, n[96] = he, n[97] = $, n[98] = ve) : ve = n[98];
		var Se;
		n[99] !== U || n[100] !== D ? (Se = U != null && D !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL && s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
			handleSelect: U.handleSelect,
			popupAnchorEl: U.popupAnchorEl,
			onDismiss: function() {
				return V(null);
			}
		}), n[99] = U, n[100] = D, n[101] = Se) : Se = n[101];
		var Re;
		return n[102] !== ve || n[103] !== Se ? (Re = s.jsxs(s.Fragment, { children: [ve, Se] }), n[102] = ve, n[103] = Se, n[104] = Re) : Re = n[104], Re;
	}
	function m(e) {
		return o("WAWebFileUtils").typeFromMimetype(e.mimetype);
	}
	l.MediaEditorForChat = d;
}), 98);
