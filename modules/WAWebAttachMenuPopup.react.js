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
	"react-compiler-runtime",
	"useWAWebChatValues",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(151), n = e.chat, a = e.getComposeBoxEditorRef, i = e.getComposeContents, l = e.onMenuComplete, u = e.questionReplyQuotedMessage, d = e.questionType, m = e.threadId, p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = [o("WAWebChatGetters").getIsNewsletter], t[0] = p) : p = t[0];
		var _ = o("useWAWebChatValues").useChatValues(n.id, p), f = _[0], g;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (g = [o("WAWebChatGetters").getIsBroadcast], t[1] = g) : g = t[1];
		var h = o("useWAWebChatValues").useChatValues(n.id, g), y = h[0], C;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (C = [o("WAWebChatGetters").getIsMetaAiBot], t[2] = C) : C = t[2];
		var b = o("useWAWebChatValues").useChatValues(n.id, C), v = b[0], S;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (S = [o("WAWebChatGetters").getIsBotChannel], t[3] = S) : S = t[3];
		var R = o("useWAWebChatValues").useChatValues(n.id, S), L = R[0], E;
		t[4] !== n.id ? (E = n.id.isAiHub(), t[4] = n.id, t[5] = E) : E = t[5];
		var k = E, I = r("useWAWebUIM")(), T;
		t[6] !== I ? (T = function() {
			I == null || I.requestDismiss();
		}, t[6] = I, t[7] = T) : T = t[7];
		var D = T, x;
		t[8] !== n || t[9] !== i || t[10] !== l || t[11] !== u || t[12] !== d || t[13] !== m ? (x = function(t) {
			var e = t.attachments, r = t.onCancel, a = t.onSend, s = t.openTrigger, c = t.sendAsSticker, p = c === void 0 ? !1 : c;
			o("WAWebCmd").Cmd.attachMediaDrawer({
				chat: n,
				attachments: e,
				fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
				initCaption: i == null ? void 0 : i(),
				onComplete: function(t, n) {
					l(t, n);
				},
				onSend: a,
				onCancel: r,
				openTrigger: s,
				sendAsSticker: p,
				isQuestion: d === o("WAWebQuestions.flow").QuestionType.Question,
				questionReplyQuotedMessage: u,
				threadId: m
			});
		}, t[8] = n, t[9] = i, t[10] = l, t[11] = u, t[12] = d, t[13] = m, t[14] = x) : x = t[14];
		var $ = x, P;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (P = o("WAWebAttachMenuUtils").shouldShowDisabledCatalogOption(), t[15] = P) : P = t[15];
		var N = P, M;
		t[16] !== n || t[17] !== L ? (M = o("WAWebAttachMenuUtils").shouldShowCatalogOption(n) && !L, t[16] = n, t[17] = L, t[18] = M) : M = t[18];
		var w = M, A;
		t[19] !== n || t[20] !== L ? (A = o("WAWebQuickReplyGatingUtils").canSendQuickReplyInChat(n) && !L, t[19] = n, t[20] = L, t[21] = A) : A = t[21];
		var F = A, O;
		t[22] !== n || t[23] !== L ? (O = o("WAWebAttachMenuUtils").canSendOrder(n) && !o("WAWebContactGetters").getIsMe(n.contact) && !L, t[22] = n, t[23] = L, t[24] = O) : O = t[24];
		var B = O, W = w || F || B, q;
		t[25] !== n ? (q = o("WAWebUprAttachmentTrayFeature").resolveUprMethodForChat(n), t[25] = n, t[26] = q) : q = t[26];
		var U = q, V, H;
		if (t[27] !== n || t[28] !== D || t[29] !== a || t[30] !== L || t[31] !== y || t[32] !== k || t[33] !== v || t[34] !== f || t[35] !== l || t[36] !== $ || t[37] !== u || t[38] !== d || t[39] !== m) {
			var G = o("WAWebMediaGatingUtils").getSupportedMediaTypesForChat(n), z;
			if (t[42] !== n ? (z = o("WAWebPixAttachmentTrayFeature").shouldShowPixInAttachmentTray(n), t[42] = n, t[43] = z) : z = t[43], H = z, V = [], d == null) {
				if (G.has(o("WAWebMsgType").MSG_TYPE.DOCUMENT)) {
					var j;
					t[44] !== n.id ? (j = o("WAWebMediaGatingUtils").supportsMultipleUploads(n.id, "document"), t[44] = n.id, t[45] = j) : j = t[45];
					var K;
					t[46] !== n || t[47] !== $ ? (K = function(t) {
						$({
							attachments: t,
							onSend: function() {
								o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.DOCUMENT);
							},
							onCancel: function() {
								o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.DOCUMENT);
							}
						});
					}, t[46] = n, t[47] = $, t[48] = K) : K = t[48];
					var Q;
					t[49] !== n || t[50] !== D || t[51] !== j || t[52] !== K ? (Q = s.jsx(r("WAWebAttachMenuPopupItemDocuments.react"), {
						chat: n,
						dismissMenu: D,
						multiple: j,
						onDocumentPick: K
					}), t[49] = n, t[50] = D, t[51] = j, t[52] = K, t[53] = Q) : Q = t[53], V.push(Q);
				}
				var X;
				t[54] !== n.id ? (X = o("WAWebAttachMenuPopupUtils").getMediaSelectionType(n.id), t[54] = n.id, t[55] = X) : X = t[55];
				var Y = X;
				if (Y != null) {
					var J;
					t[56] !== n.id ? (J = o("WAWebMediaGatingUtils").supportsMultipleUploads(n.id, "image"), t[56] = n.id, t[57] = J) : J = t[57];
					var Z;
					t[58] !== n || t[59] !== $ ? (Z = function(t) {
						$({
							attachments: t,
							onSend: function() {
								o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
							},
							onCancel: function() {
								o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
							}
						});
					}, t[58] = n, t[59] = $, t[60] = Z) : Z = t[60];
					var ee;
					t[61] !== n || t[62] !== D || t[63] !== Y || t[64] !== J || t[65] !== Z ? (ee = s.jsx(o("WAWebAttachMenuPopupItemPhotos.react").AttachMenuPopupItemPhotos, {
						chat: n,
						dismissMenu: D,
						multiple: J,
						onMediaPick: Z,
						mediaSelectionType: Y
					}), t[61] = n, t[62] = D, t[63] = Y, t[64] = J, t[65] = Z, t[66] = ee) : ee = t[66], V.push(ee);
				}
				if (G.has(o("WAWebMsgType").MSG_TYPE.IMAGE)) {
					var te;
					t[67] !== l || t[68] !== m ? (te = function() {
						o("WAWebCmd").Cmd.openCaptureMedia({
							onMenuComplete: l,
							threadId: m
						});
					}, t[67] = l, t[68] = m, t[69] = te) : te = t[69];
					var ne;
					t[70] !== n || t[71] !== te ? (ne = s.jsx(r("WAWebAttachMenuPopupItemCamera.react"), {
						chat: n,
						onCaptureClick: te
					}), t[70] = n, t[71] = te, t[72] = ne) : ne = t[72], V.push(ne);
				}
				if (o("WAWebQuestionsSenderGatingUtils").isQuestionSenderEnabled(n)) {
					var re;
					t[73] !== n || t[74] !== a ? (re = s.jsx(r("WAWebAttachMenuPopupItemQuestion.react"), {
						chat: n,
						getComposeBoxEditorRef: a
					}), t[73] = n, t[74] = a, t[75] = re) : re = t[75], V.push(re);
				}
				if (!k && (f && o("WAWebNewsletterGatingUtils").isNewsletterAudioFileSendingEnabled() || !f && !y && !v && !L)) {
					var oe;
					t[76] !== n.id ? (oe = o("WAWebMediaGatingUtils").supportsMultipleUploads(n.id), t[76] = n.id, t[77] = oe) : oe = t[77];
					var ae;
					t[78] !== n || t[79] !== $ ? (ae = function(t) {
						$({
							attachments: t,
							onSend: function() {
								o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.AUDIO);
							},
							onCancel: function() {
								o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.AUDIO);
							}
						});
					}, t[78] = n, t[79] = $, t[80] = ae) : ae = t[80];
					var ie;
					t[81] !== n || t[82] !== D || t[83] !== oe || t[84] !== ae ? (ie = s.jsx(r("WAWebAttachMenuPopupItemAudio.react"), {
						chat: n,
						dismissMenu: D,
						multiple: oe,
						onMediaPick: ae
					}), t[81] = n, t[82] = D, t[83] = oe, t[84] = ae, t[85] = ie) : ie = t[85], V.push(ie);
				}
				if (!k && !f && !y && !v && !o("WAWebBotUtils").isManusBot(n.id)) {
					var le;
					t[86] !== n || t[87] !== l ? (le = s.jsx(r("WAWebAttachMenuPopupItemContacts.react"), {
						chat: n,
						onMenuComplete: l
					}), t[86] = n, t[87] = l, t[88] = le) : le = t[88], V.push(le);
				}
				if (n.canSendPolls()) {
					var se;
					t[89] !== n || t[90] !== a ? (se = s.jsx(r("WAWebAttachMenuPopupItemPolls.react"), {
						chat: n,
						getComposeBoxEditorRef: a
					}), t[89] = n, t[90] = a, t[91] = se) : se = t[91], V.push(se);
				}
				if (!o("WAWebConnModel").Conn.isSMB && H) {
					var ue;
					t[92] !== n || t[93] !== D ? (ue = s.jsx(r("WAWebAttachMenuPopupPix.react"), {
						chat: n,
						dismissMenu: D
					}), t[92] = n, t[93] = D, t[94] = ue) : ue = t[94], V.push(ue);
				}
				if (!k && f && o("WAWebNewsletterGatingUtils").isNewsletterQuizSenderEnabled()) {
					var ce;
					t[95] !== n || t[96] !== a ? (ce = s.jsx(o("WAWebAttachMenuPopupItemQuiz.react").AttachMenuPopupItemQuiz, {
						chat: n,
						getComposeBoxEditorRef: a
					}), t[95] = n, t[96] = a, t[97] = ce) : ce = t[97], V.push(ce);
				}
				var de = !k && G.has(o("WAWebMsgType").MSG_TYPE.STICKER) ? s.jsx(r("WAWebAttachMenuPopupItemStickers.react"), {
					chat: n,
					dismissMenu: D,
					onMediaPick: function(t) {
						$({
							attachments: t,
							sendAsSticker: !0,
							onSend: function() {
								o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.STICKER_MAKER);
							},
							onCancel: function() {
								o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.STICKER_MAKER);
							}
						});
					}
				}) : null, me;
				t[98] !== n || t[99] !== L || t[100] !== k ? (me = !k && (o("WAWebChatGetters").getIsGroup(n) || o("WAWebChatGetters").getIsUser(n) && !o("WAWebChatGetters").getIsMetaAiBot(n) && !L) ? s.jsx(r("WAWebAttachMenuPopupItemEvents.react"), { chat: n }) : null, t[98] = n, t[99] = L, t[100] = k, t[101] = me) : me = t[101];
				var pe = me, _e;
				t[102] !== pe || t[103] !== de ? (_e = [pe, de], t[102] = pe, t[103] = de, t[104] = _e) : _e = t[104], V.push(_e);
			} else {
				var fe = o("WAWebQuestionsGatingUtils").getEnabledAttachmentTypesForQuestionType(d), ge;
				if (fe.has(o("WAWebMsgType").MSG_TYPE.IMAGE) ? fe.has(o("WAWebMsgType").MSG_TYPE.VIDEO) ? ge = o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS_AND_VIDEOS : ge = o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS : fe.has(o("WAWebMsgType").MSG_TYPE.VIDEO) && (ge = o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.VIDEOS), ge != null) {
					var he;
					t[105] !== n || t[106] !== $ ? (he = function(t) {
						o("WAWebModalManager").ModalManager.close(), $({
							attachments: t,
							onSend: function() {
								o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
							},
							onCancel: function() {
								o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
							}
						});
					}, t[105] = n, t[106] = $, t[107] = he) : he = t[107];
					var ye;
					t[108] !== n || t[109] !== D || t[110] !== ge || t[111] !== he ? (ye = s.jsx(o("WAWebAttachMenuPopupItemPhotos.react").AttachMenuPopupItemPhotos, {
						chat: n,
						dismissMenu: D,
						multiple: !1,
						onMediaPick: he,
						mediaSelectionType: ge
					}), t[108] = n, t[109] = D, t[110] = ge, t[111] = he, t[112] = ye) : ye = t[112], V.push(ye);
				}
				if (fe.has(o("WAWebMsgType").MSG_TYPE.IMAGE)) {
					var Ce;
					t[113] !== l || t[114] !== u || t[115] !== d || t[116] !== m ? (Ce = function() {
						o("WAWebCmd").Cmd.openCaptureMedia({
							onMenuComplete: l,
							questionType: d,
							questionReplyQuotedMessage: u,
							threadId: m
						});
					}, t[113] = l, t[114] = u, t[115] = d, t[116] = m, t[117] = Ce) : Ce = t[117];
					var be;
					t[118] !== n || t[119] !== Ce ? (be = s.jsx(r("WAWebAttachMenuPopupItemCamera.react"), {
						chat: n,
						onCaptureClick: Ce
					}), t[118] = n, t[119] = Ce, t[120] = be) : be = t[120], V.push(be);
				}
			}
			t[27] = n, t[28] = D, t[29] = a, t[30] = L, t[31] = y, t[32] = k, t[33] = v, t[34] = f, t[35] = l, t[36] = $, t[37] = u, t[38] = d, t[39] = m, t[40] = V, t[41] = H;
		} else V = t[40], H = t[41];
		var ve;
		t[121] !== W ? (ve = W && s.jsx(c, {}), t[121] = W, t[122] = ve) : ve = t[122];
		var Se;
		t[123] !== n || t[124] !== D || t[125] !== H ? (Se = o("WAWebConnModel").Conn.isSMB && H && s.jsx(r("WAWebAttachMenuPopupPix.react"), {
			chat: n,
			dismissMenu: D
		}), t[123] = n, t[124] = D, t[125] = H, t[126] = Se) : Se = t[126];
		var Re;
		t[127] !== n || t[128] !== D || t[129] !== U ? (Re = U != null && s.jsx(r("WAWebAttachMenuPopupUprPaymentRequest.react"), {
			chat: n,
			methods: U,
			dismissMenu: D
		}), t[127] = n, t[128] = D, t[129] = U, t[130] = Re) : Re = t[130];
		var Le;
		t[131] !== n || t[132] !== D || t[133] !== w ? (Le = w && s.jsx(r("WAWebAttachMenuPopupItemCatalog.react"), {
			chat: n,
			disabled: N,
			dismissMenu: D
		}), t[131] = n, t[132] = D, t[133] = w, t[134] = Le) : Le = t[134];
		var Ee;
		t[135] !== n || t[136] !== D || t[137] !== F ? (Ee = F && s.jsx(r("WAWebAttachMenuPopupItemQuickReplies.react"), {
			chat: n,
			dismissMenu: D
		}), t[135] = n, t[136] = D, t[137] = F, t[138] = Ee) : Ee = t[138];
		var ke;
		t[139] !== n || t[140] !== D || t[141] !== B ? (ke = B && s.jsx(r("WAWebAttachMenuPopupItemOrders.react"), {
			chat: n,
			dismissMenu: D
		}), t[139] = n, t[140] = D, t[141] = B, t[142] = ke) : ke = t[142];
		var Ie;
		if (t[143] !== V || t[144] !== ve || t[145] !== Se || t[146] !== Re || t[147] !== Le || t[148] !== Ee || t[149] !== ke) {
			var Te = s.jsxs(s.Fragment, { children: [
				V,
				ve,
				Se,
				Re,
				Le,
				Ee,
				ke
			] });
			Ie = s.jsx(r("WDSMenu.react"), { children: Te }), t[143] = V, t[144] = ve, t[145] = Se, t[146] = Re, t[147] = Le, t[148] = Ee, t[149] = ke, t[150] = Ie;
		} else Ie = t[150];
		return Ie;
	}
	function c() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(r("WDSMenuItem.react"), { type: "separator" }), e[0] = t) : t = e[0], t;
	}
	l.default = u;
}), 98);
