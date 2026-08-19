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
		var t, a = o("react-compiler-runtime").c(105), i = e.allowMultipleMedia, l = e.chat, d = e.hideCanvasShadow, p = e.hideFooter, _ = e.initCaption, f = e.isSubmitDisabled, g = e.maxCaptionLength, h = e.maxNumberOfMedia, y = e.mediaCollection, C = e.mimes, b = e.onClose, v = e.onDropText, S = e.onRender, R = e.onScheduleMedia, L = e.onSendMedia, E = e.openTrigger, k = e.placeholderText, I = e.ref, T = e.sendAsSticker, D = e.submitAccessory, x = e.theme, $ = e.threadId, P = e.toolbarContainer, N = e.tsNavigationData, M;
		a[0] !== l.contact.id || a[1] !== l.contact.isEnterprise || a[2] !== l.id || a[3] !== T ? (M = !l.contact.isEnterprise && !o("WAWebUserPrefsMeUser").isMeAccount(l.contact.id) && !o("WAWebBotUtils").isAnyMetaAiBot(l.id) && !T, a[0] = l.contact.id, a[1] = l.contact.isEnterprise, a[2] = l.id, a[3] = T, a[4] = M) : M = a[4];
		var w = M, A = (t = o("useWAWebChatValues").useOptionalChatValues(l.id, [
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebFrontendChatGetters").getNewsletterMetadata,
			o("WAWebFrontendChatGetters").getComposeQuotedMsg
		])) != null ? t : [
			!1,
			null,
			null
		], F = A[0], O = A[1], B = A[2], W = r("useWAWebScheduledMsgCount")(R != null ? l.id : null), q = W >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT, U = u(null), V = U[0], H = U[1], G;
		a[5] !== l ? (G = o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(l)), a[5] = l, a[6] = G) : G = a[6];
		var z = G, j;
		a[7] !== l.id || a[8] !== y ? (j = function() {
			var e = y.getPreviewableMedias(), t = e.length > 0 ? o("WAWebFileUtils").typeFromMimetype(e[0].mimetype) : void 0, n = o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(0, l.id, t);
			t === "image" || t === "video" ? o("WAWebBotMultiModalToasts").showMediaSendLimitExceededToast(n) : t === "document" && o("WAWebBotMultiModalToasts").showDocumentUploadLimitExceededToast(n);
		}, a[7] = l.id, a[8] = y, a[9] = j) : j = a[9], o("useWAWebListener").useListener(z ? y : null, "max_upload_limit", j);
		var K;
		a[10] !== l || a[11] !== z || a[12] !== h || a[13] !== y || a[14] !== b ? (K = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = e;
				if (z) {
					var r = new Set(y.getPreviewableMedias().map(m)), a = o("WAWebBotMultiModalUtils").validateMetaAiAttachments(e, l.id, r), i = a.errors, s = a.validAttachments;
					if (o("WAWebBotMultiModalUtils").showMetaAiAttachmentErrors(i), s.length === 0) {
						y.getPreviewableMedias().length === 0 && (b == null || b(!0));
						return;
					}
					n = s;
				}
				var u = n.length > 0 ? o("WAWebFileUtils").typeFromMimetype(n[0].file.type) : void 0;
				return y.processAttachmentsForChat(n, t, l, h != null ? h : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(y.getPreviewableMedias().length + n.length, l.id, u));
			});
			return function(n, r) {
				return e.apply(this, arguments);
			};
		})(), a[10] = l, a[11] = z, a[12] = h, a[13] = y, a[14] = b, a[15] = K) : K = a[15];
		var Q = K, X;
		a[16] !== l.id || a[17] !== B || a[18] !== F || a[19] !== O || a[20] !== L || a[21] !== x ? (X = function(t, n, r) {
			if (F && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(O) && x !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
				var e = function(r) {
					H(null), L(t, babelHelpers.extends({}, n, { isWamoSub: r === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub ? !0 : void 0 }));
				};
				H({
					popupAnchorEl: r,
					handleSelect: e
				});
				return;
			}
			L(t, babelHelpers.extends({}, n)), B != null && o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageSent(l.id);
		}, a[16] = l.id, a[17] = B, a[18] = F, a[19] = O, a[20] = L, a[21] = x, a[22] = X) : X = a[22];
		var Y = X, J;
		a[23] !== l || a[24] !== $ ? (J = o("WAWebBotUtils").isMetaAiBot(l.id) && o("WAWebBotBaseGating").isAiModeSelectorMediaEditorEnabled() ? s.jsx(r("WAWebAiModeSelector.react"), {
			chat: l,
			isInteractive: o("WAWebBotGating").isAiModeSelectorInteractive(),
			threadId: $
		}) : null, a[23] = l, a[24] = $, a[25] = J) : J = a[25];
		var Z = J, ee, te, ne, re, oe, ae, ie, le, se, ue, ce, de, me, pe, _e, fe, ge, he, ye;
		if (a[26] !== i || a[27] !== w || a[28] !== l.id || a[29] !== Y || a[30] !== _ || a[31] !== q || a[32] !== F || a[33] !== h || a[34] !== y || a[35] !== b || a[36] !== v || a[37] !== S || a[38] !== R || a[39] !== I || a[40] !== T || a[41] !== x || a[42] !== $ || a[43] !== N) {
			var Ce = y.getPreviewableMedias(), be = Ce.length > 0 ? o("WAWebFileUtils").typeFromMimetype(Ce[0].mimetype) : void 0;
			ee = o("WAWebMediaEditor.react").MediaEditor, ge = I, he = w, ye = T, te = x, ne = b, re = S, oe = !F, ae = y, ie = _, le = v, se = Y, ue = R, a[63] !== l.id ? (ce = l.id.isGroup(), a[63] = l.id, a[64] = ce) : ce = a[64], de = q, me = N, pe = $, _e = i, fe = h != null ? h : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(Ce.length, l.id, be), a[26] = i, a[27] = w, a[28] = l.id, a[29] = Y, a[30] = _, a[31] = q, a[32] = F, a[33] = h, a[34] = y, a[35] = b, a[36] = v, a[37] = S, a[38] = R, a[39] = I, a[40] = T, a[41] = x, a[42] = $, a[43] = N, a[44] = ee, a[45] = te, a[46] = ne, a[47] = re, a[48] = oe, a[49] = ae, a[50] = ie, a[51] = le, a[52] = se, a[53] = ue, a[54] = ce, a[55] = de, a[56] = me, a[57] = pe, a[58] = _e, a[59] = fe, a[60] = ge, a[61] = he, a[62] = ye;
		} else ee = a[44], te = a[45], ne = a[46], re = a[47], oe = a[48], ae = a[49], ie = a[50], le = a[51], se = a[52], ue = a[53], ce = a[54], de = a[55], me = a[56], pe = a[57], _e = a[58], fe = a[59], ge = a[60], he = a[61], ye = a[62];
		var ve;
		a[65] !== l || a[66] !== Z || a[67] !== k ? (ve = c(l, k, Z), a[65] = l, a[66] = Z, a[67] = k, a[68] = ve) : ve = a[68];
		var Se;
		a[69] !== ee || a[70] !== Q || a[71] !== d || a[72] !== p || a[73] !== f || a[74] !== g || a[75] !== C || a[76] !== E || a[77] !== D || a[78] !== te || a[79] !== ne || a[80] !== re || a[81] !== oe || a[82] !== ae || a[83] !== ie || a[84] !== le || a[85] !== se || a[86] !== ue || a[87] !== ce || a[88] !== de || a[89] !== me || a[90] !== pe || a[91] !== _e || a[92] !== fe || a[93] !== ve || a[94] !== ge || a[95] !== he || a[96] !== ye || a[97] !== P ? (Se = s.jsx(ee, {
			ref: ge,
			canViewOnce: he,
			sendAsSticker: ye,
			theme: te,
			onClose: ne,
			onRender: re,
			hdEligible: oe,
			mediaCollection: ae,
			initCaption: ie,
			onDropText: le,
			onSendMedia: se,
			onScheduleMedia: ue,
			scheduleIsGroup: ce,
			scheduleAtLimit: de,
			tsNavigationData: me,
			threadId: pe,
			allowMultipleMedia: _e,
			maxNumberOfMedia: fe,
			mimes: C,
			maxCaptionLength: g,
			openTrigger: E,
			onProcessAttachments: Q,
			renderCaptionInput: ve,
			hideFooter: p,
			hideCanvasShadow: d,
			toolbarContainer: P,
			submitAccessory: D,
			isSubmitDisabled: f
		}), a[69] = ee, a[70] = Q, a[71] = d, a[72] = p, a[73] = f, a[74] = g, a[75] = C, a[76] = E, a[77] = D, a[78] = te, a[79] = ne, a[80] = re, a[81] = oe, a[82] = ae, a[83] = ie, a[84] = le, a[85] = se, a[86] = ue, a[87] = ce, a[88] = de, a[89] = me, a[90] = pe, a[91] = _e, a[92] = fe, a[93] = ve, a[94] = ge, a[95] = he, a[96] = ye, a[97] = P, a[98] = Se) : Se = a[98];
		var Re;
		a[99] !== V || a[100] !== x ? (Re = V != null && x !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL && s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
			handleSelect: V.handleSelect,
			popupAnchorEl: V.popupAnchorEl,
			onDismiss: function() {
				return H(null);
			}
		}), a[99] = V, a[100] = x, a[101] = Re) : Re = a[101];
		var Le;
		return a[102] !== Se || a[103] !== Re ? (Le = s.jsxs(s.Fragment, { children: [Se, Re] }), a[102] = Se, a[103] = Re, a[104] = Le) : Le = a[104], Le;
	}
	function m(e) {
		return o("WAWebFileUtils").typeFromMimetype(e.mimetype);
	}
	l.MediaEditorForChat = d;
}), 98);
