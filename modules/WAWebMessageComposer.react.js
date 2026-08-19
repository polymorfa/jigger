__d("WAWebMessageComposer.react", [
	"WAWebAiModeSelector.react",
	"WAWebAttachMenuBarItem.react",
	"WAWebBotBaseGating",
	"WAWebBotGating",
	"WAWebBotUtils",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebComposeBoxSendButton.react",
	"WAWebContactGetters",
	"WAWebEnvironment",
	"WAWebExpressionsPanelPicker.react",
	"WAWebIsInThreadsViewContext",
	"WAWebKeyboardHotKeys.react",
	"WAWebMsgType",
	"WAWebNewsletterGatingUtils",
	"WAWebPttComposer.react",
	"WAWebQuestions.flow",
	"WAWebQuestionsAdminGatingUtils",
	"WAWebQuestionsGatingUtils",
	"WAWebQuickReplyComposerButton.react",
	"WAWebQuickReplyGatingUtils",
	"WAWebScheduleMessageButton.react",
	"WAWebScheduledMsgConstants",
	"WAWebStateUtils",
	"WDSMargins.stylex",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebListener",
	"useWAWebScheduledMsgCount"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useContext, m = c.useRef, p = { padding5: {
		paddingTop: "x123j3cw",
		paddingInlineEnd: "x1gabggj",
		paddingBottom: "xs9asl8",
		paddingInlineStart: "xaso8d8",
		$$css: !0
	} }, _ = "border-radius 300ms, box-shadow 300ms", f = {
		inputContainer: {
			boxSizing: "x9f619",
			flex: "x12lumcd",
			width: "x1qrby5j",
			minWidth: "xeuugli",
			minHeight: "xisnujt",
			fontSize: "x6prxxf",
			fontWeight: "x1fcty0u",
			lineHeight: "x1fc57z9",
			backgroundColor: "xk7ee7b",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			outline: "x1a2a7pz",
			willChange: "x13w7htt",
			display: "x78zum5",
			$$css: !0
		},
		inputContainerMaterial: {
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			$$css: !0
		},
		inputContainerRefresh: {
			minHeight: "x1wiwyrm",
			height: "xt7dq6l",
			borderStartStartRadius: "x17m9png",
			borderStartEndRadius: "x91sizk",
			borderEndEndRadius: "x1vva9xg",
			borderEndStartRadius: "x1jfkl46",
			alignItems: "x6s0dn4",
			transition: "x1m0b2ad",
			$$css: !0
		},
		inputBoxShadow: {
			boxShadow: "xkfubxc",
			$$css: !0
		},
		questionInputContainer: {
			backgroundColor: "x4wrhlh",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		withoutTopBorder: {
			borderTopWidth: "x972fbf",
			$$css: !0
		},
		inputContainerRefreshNoTopPanel: {
			transition: "x1p0mfcu",
			$$css: !0
		},
		inputContainerHasTopPanel: {
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			boxShadow: "xz16w4b",
			transition: "x1m0b2ad",
			$$css: !0
		},
		composerInputContainer: {
			display: "x78zum5",
			flex: "x98rzlu",
			alignItems: "xuk3077",
			minWidth: "xeuugli",
			$$css: !0
		},
		composerInputContainerDisabled: {
			pointerEvents: "x47corl",
			$$css: !0
		},
		containedInputContainer: {
			flexDirection: "xdt5ytf",
			alignItems: "x1qjc9v5",
			$$css: !0
		},
		containedComposer: {
			boxSizing: "x9f619",
			marginInlineStart: "x1uvdrpn",
			marginInlineEnd: "x14mko6t",
			marginBottom: "xcytdqz",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			backgroundColor: "xk7ee7b",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			transition: "x1m0b2ad",
			$$css: !0
		},
		containedComposerHasTopPanel: {
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			$$css: !0
		},
		containedInputRow: {
			backgroundColor: "xjbqb8w",
			boxShadow: "x1gnnqk1",
			$$css: !0
		}
	};
	function g(t) {
		var n = o("react-compiler-runtime").c(176), a = t.chat, i = t.closePttComposer, l = t.expressionsPanelPickerRef, s = t.expressionsPanelWrapperRef, c = t.getCurrentComposeContent, _ = t.handleInputBlur, g = t.handleInputFocus, y = t.handleMetaUpDebounced, C = t.handlePanelsGif, b = t.handlePanelsSticker, v = t.handlePanelsStickerFromStore, S = t.handleSendText, R = t.handleTab, L = t.hasTextState, E = t.hasTopPanel, k = t.input, I = t.inputHotkeyRef, T = t.isMessageToBot, D = t.onPttSend, x = t.onScheduleSend, $ = t.pttComposerActive, P = t.questionReplyQuotedMessage, N = t.questionType, M = t.recordingSession, w = t.ref, A = t.replaceInputSelection, F = t.richTextInputRef, O = t.smartComposerCard, B = t.smartComposerModePill, W = t.startRecording, q = t.threadId, U = t.updateTextAfterMediaDrawerClose, V = t.wwaiButton, H = m(null), G;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (G = function() {
			var e = H.current;
			e && e.open();
		}, n[0] = G) : G = n[0], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_attachment_dropdown", G);
		var z = N === o("WAWebQuestions.flow").QuestionType.Question, j = N === o("WAWebQuestions.flow").QuestionType.Reply, K;
		n[1] !== a ? (K = o("WAWebQuestionsAdminGatingUtils").isQuestionsM2FeatureEnabledForAdmins(a), n[1] = a, n[2] = K) : K = n[2];
		var Q = K, X = d(r("WAWebIsInThreadsViewContext")), Y = r("useWAWebScheduledMsgCount")(x != null ? a.id : null), J = Y >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT, Z;
		n[3] !== a.id ? (Z = a.id.isAiHub(), n[3] = a.id, n[4] = Z) : Z = n[4];
		var ee = Z, te;
		n[5] !== a || n[6] !== X || n[7] !== ee || n[8] !== T || n[9] !== z || n[10] !== j || n[11] !== Q ? (te = !X && (!o("WAWebChatGetters").getIsNewsletter(a) || o("WAWebNewsletterGatingUtils").isNewsletterPTTReceivingEnabled()) && (!z || Q && o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(o("WAWebMsgType").MSG_TYPE.PTT)) && (!j || Q && o("WAWebQuestionsGatingUtils").isQuestionReplySenderEnabledForMsgType(o("WAWebMsgType").MSG_TYPE.PTT)) && !o("WAWebContactGetters").getIsCAPISupportAccount(a.contact) && (!T || o("WAWebBotGating").isBotPttEnabled(a.id)) && !o("WAWebChatGetters").getIsBroadcast(a) && !ee, n[5] = a, n[6] = X, n[7] = ee, n[8] = T, n[9] = z, n[10] = j, n[11] = Q, n[12] = te) : te = n[12];
		var ne = te, re;
		n[13] !== $ || n[14] !== F ? (re = function(t) {
			t.target === t.currentTarget && $ === !1 && (F == null || F.focus());
		}, n[13] = $, n[14] = F, n[15] = re) : re = n[15];
		var oe = re, ae;
		n[16] !== a.id ? (ae = o("WAWebBotUtils").isMetaAiBot(a.id), n[16] = a.id, n[17] = ae) : ae = n[17];
		var ie = ae, le;
		n[18] !== a.id ? (le = o("WAWebBotUtils").isBotChannelFBID(a.id), n[18] = a.id, n[19] = le) : le = n[19];
		var se = le, ue;
		n[20] !== se || n[21] !== T || n[22] !== ie ? (ue = T && (ie && (o("WAWebBotGating").isAnyMetaAiMediaInputEnabled() || o("WAWebBotGating").isMetaAiDocUploadEnabled()) || se), n[20] = se, n[21] = T, n[22] = ie, n[23] = ue) : ue = n[23];
		var ce = ue, de = !T || ce, me;
		n[24] !== a || n[25] !== z || n[26] !== j || n[27] !== de ? (me = function(t) {
			return de ? z ? o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(t) : j ? o("WAWebQuestionsGatingUtils").isQuestionReplySenderEnabledForMsgType(t) : !o("WAWebChatGetters").getIsBroadcast(a) : !1;
		}, n[24] = a, n[25] = z, n[26] = j, n[27] = de, n[28] = me) : me = n[28];
		var pe = me, _e;
		n[29] !== ie ? (_e = ie && o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled(), n[29] = ie, n[30] = _e) : _e = n[30];
		var fe = _e, ge;
		n[31] !== fe ? (ge = fe && o("WAWebBotGating").isAiModeSelectorInteractive(), n[31] = fe, n[32] = ge) : ge = n[32];
		var he = ge, ye;
		n[33] !== pe || n[34] !== se || n[35] !== ee ? (ye = !ee && !se && pe(o("WAWebMsgType").MSG_TYPE.STICKER), n[33] = pe, n[34] = se, n[35] = ee, n[36] = ye) : ye = n[36];
		var Ce;
		n[37] !== pe || n[38] !== se || n[39] !== ee ? (Ce = !ee && !se && pe(o("WAWebMsgType").MSG_TYPE.VIDEO), n[37] = pe, n[38] = se, n[39] = ee, n[40] = Ce) : Ce = n[40];
		var be, ve;
		n[41] !== F ? (be = function() {
			return F;
		}, ve = function() {
			return F == null ? void 0 : F.focus();
		}, n[41] = F, n[42] = be, n[43] = ve) : (be = n[42], ve = n[43]);
		var Se = j || z ? o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL : void 0, Re;
		n[44] !== l || n[45] !== s || n[46] !== C || n[47] !== b || n[48] !== v || n[49] !== A || n[50] !== ye || n[51] !== Ce || n[52] !== be || n[53] !== ve || n[54] !== Se ? (Re = {
			expressionsPanelWrapperRef: s,
			expressionsPanelPickerRef: l,
			replaceInputSelection: A,
			handlePanelsSticker: b,
			handlePanelsStickerFromStore: v,
			handlePanelsGif: C,
			isStickerEnabled: ye,
			isGifEnabled: Ce,
			getComposeBoxEditorRef: be,
			handleClose: ve,
			size: Se
		}, n[44] = l, n[45] = s, n[46] = C, n[47] = b, n[48] = v, n[49] = A, n[50] = ye, n[51] = Ce, n[52] = be, n[53] = ve, n[54] = Se, n[55] = Re) : Re = n[55];
		var Le = Re, Ee = O != null, ke, Ie, Te, De, xe, $e, Pe, Ne, Me;
		if (n[56] !== a || n[57] !== i || n[58] !== Le || n[59] !== c || n[60] !== y || n[61] !== S || n[62] !== R || n[63] !== L || n[64] !== E || n[65] !== k || n[66] !== I || n[67] !== J || n[68] !== Ee || n[69] !== X || n[70] !== he || n[71] !== T || n[72] !== z || n[73] !== j || n[74] !== D || n[75] !== x || n[76] !== $ || n[77] !== P || n[78] !== N || n[79] !== M || n[80] !== w || n[81] !== F || n[82] !== de || n[83] !== fe || n[84] !== O || n[85] !== B || n[86] !== W || n[87] !== ne || n[88] !== q || n[89] !== U || n[90] !== V) {
			var we = Ee ? [p.padding5] : [
				p.padding5,
				o("WDSMargins.stylex").wdsMargins.marginHor12,
				o("WDSMargins.stylex").wdsMargins.marginBottom12
			], Ae;
			n[100] !== W ? (Ae = function() {
				return void W();
			}, n[100] = W, n[101] = Ae) : Ae = n[101];
			var Fe = (j || z) && !L ? "tonal" : void 0, Oe;
			n[102] !== S || n[103] !== L || n[104] !== T || n[105] !== M || n[106] !== ne || n[107] !== Ae || n[108] !== Fe ? (Oe = u.jsx(o("WAWebComposeBoxSendButton.react").SendButtonRefresh, {
				supportsPtt: ne,
				onClickSend: S,
				recordingSession: M,
				onStartRecording: Ae,
				hasTextState: L,
				isMessageToBot: T,
				buttonVariant: Fe
			}), n[102] = S, n[103] = L, n[104] = T, n[105] = M, n[106] = ne, n[107] = Ae, n[108] = Fe, n[109] = Oe) : Oe = n[109];
			var Be = Oe, We;
			n[110] !== a || n[111] !== L || n[112] !== J || n[113] !== x || n[114] !== M ? (We = x != null && L && M == null ? u.jsx(r("WAWebScheduleMessageButton.react"), {
				atLimit: J,
				isGroup: o("WAWebChatGetters").getIsGroup(a),
				onScheduleSend: x
			}) : null, n[110] = a, n[111] = L, n[112] = J, n[113] = x, n[114] = M, n[115] = We) : We = n[115];
			var qe = We, Ue = void 0;
			if (!X && de && (!z || o("WAWebQuestionsGatingUtils").getEnabledQuestionAttachmentTypes().size > 0) && (!j || o("WAWebQuestionsGatingUtils").getEnabledQuestionReplyAttachmentTypes().size > 0)) {
				var Ve;
				n[116] === Symbol.for("react.memo_cache_sentinel") ? (Ve = { className: "x100vrsf x1vqgdyp x78zum5 x6s0dn4 xpvyfi4" }, n[116] = Ve) : Ve = n[116];
				var He;
				n[117] !== a ? (He = o("WAWebStateUtils").unproxy(a), n[117] = a, n[118] = He) : He = n[118];
				var Ge;
				n[119] !== F ? (Ge = function() {
					return F;
				}, n[119] = F, n[120] = Ge) : Ge = n[120];
				var ze;
				n[121] !== c || n[122] !== P || n[123] !== N || n[124] !== He || n[125] !== Ge || n[126] !== q || n[127] !== U ? (ze = u.jsx("div", babelHelpers.extends({}, Ve, { children: u.jsx(r("WAWebAttachMenuBarItem.react"), {
					ref: H,
					chat: He,
					getComposeContents: c,
					getComposeBoxEditorRef: Ge,
					onMenuComplete: U,
					questionType: N,
					questionReplyQuotedMessage: P,
					threadId: q
				}) })), n[121] = c, n[122] = P, n[123] = N, n[124] = He, n[125] = Ge, n[126] = q, n[127] = U, n[128] = ze) : ze = n[128], Ue = ze;
			}
			var je;
			n[129] !== Ue || n[130] !== a || n[131] !== i || n[132] !== Le || n[133] !== k || n[134] !== he || n[135] !== D || n[136] !== $ || n[137] !== P || n[138] !== N || n[139] !== M || n[140] !== qe || n[141] !== Be || n[142] !== de || n[143] !== fe || n[144] !== B || n[145] !== q || n[146] !== V ? (je = $ ? u.jsx("div", {
				className: "x78zum5 x13a6bvl xh8yej3 x67bb7w",
				children: u.jsx(r("WAWebPttComposer.react"), {
					chat: o("WAWebStateUtils").unproxy(a),
					recordingSession: r("nullthrows")(M),
					onComplete: i,
					onSend: D,
					questionType: N,
					questionReplyQuotedMessage: P,
					threadId: q
				})
			}) : u.jsxs(u.Fragment, { children: [
				de && Ue,
				u.jsx(h, babelHelpers.extends({}, Le)),
				o("WAWebQuickReplyGatingUtils").isQuickReplyComposerEntryPointEnabled(o("WAWebStateUtils").unproxy(a)) && u.jsx(r("WAWebQuickReplyComposerButton.react"), {}),
				k,
				B,
				fe && u.jsx(r("WAWebAiModeSelector.react"), {
					chat: a,
					threadId: q,
					isInteractive: he
				}),
				qe,
				V,
				Be
			] }), n[129] = Ue, n[130] = a, n[131] = i, n[132] = Le, n[133] = k, n[134] = he, n[135] = D, n[136] = $, n[137] = P, n[138] = N, n[139] = M, n[140] = qe, n[141] = Be, n[142] = de, n[143] = fe, n[144] = B, n[145] = q, n[146] = V, n[147] = je) : je = n[147], Ie = je;
			var Ke = r("WAWebEnvironment").isWindows, Qe;
			n[148] !== y ? (Qe = Ke ? { "ctrl+up": y } : { "meta+up": y }, n[148] = y, n[149] = Qe) : Qe = n[149];
			var Xe;
			n[150] !== y || n[151] !== R || n[152] !== Qe ? (Xe = babelHelpers.extends({
				tab: R,
				"shift+tab": R
			}, Qe, { up: y }), n[150] = y, n[151] = R, n[152] = Qe, n[153] = Xe) : Xe = n[153], Te = Xe, Ne = w, n[154] === Symbol.for("react.memo_cache_sentinel") ? (Me = { className: "x78zum5 xuk3077" }, n[154] = Me) : Me = n[154], n[155] !== E || n[156] !== Ee || n[157] !== $ ? ($e = (e || (e = r("stylex"))).props(f.composerInputContainer, Ee && f.containedInputContainer, Ee && f.containedComposer, Ee && f.inputBoxShadow, Ee && E && f.containedComposerHasTopPanel, $ && f.composerInputContainerDisabled), n[155] = E, n[156] = Ee, n[157] = $, n[158] = $e) : $e = n[158], Pe = O, ke = o("WAWebKeyboardHotKeys.react").HotKeys, De = I, xe = (e || (e = r("stylex")))(f.inputContainer, we, f.inputContainerMaterial, f.inputContainerRefresh, !N && f.inputBoxShadow, !E && f.inputContainerRefreshNoTopPanel, E && f.inputContainerHasTopPanel, N && f.questionInputContainer, N != null && E && f.withoutTopBorder, Ee && f.containedInputRow), n[56] = a, n[57] = i, n[58] = Le, n[59] = c, n[60] = y, n[61] = S, n[62] = R, n[63] = L, n[64] = E, n[65] = k, n[66] = I, n[67] = J, n[68] = Ee, n[69] = X, n[70] = he, n[71] = T, n[72] = z, n[73] = j, n[74] = D, n[75] = x, n[76] = $, n[77] = P, n[78] = N, n[79] = M, n[80] = w, n[81] = F, n[82] = de, n[83] = fe, n[84] = O, n[85] = B, n[86] = W, n[87] = ne, n[88] = q, n[89] = U, n[90] = V, n[91] = ke, n[92] = Ie, n[93] = Te, n[94] = De, n[95] = xe, n[96] = $e, n[97] = Pe, n[98] = Ne, n[99] = Me;
		} else ke = n[91], Ie = n[92], Te = n[93], De = n[94], xe = n[95], $e = n[96], Pe = n[97], Ne = n[98], Me = n[99];
		var Ye;
		n[159] !== ke || n[160] !== Ie || n[161] !== _ || n[162] !== oe || n[163] !== g || n[164] !== Te || n[165] !== De || n[166] !== xe ? (Ye = u.jsx(ke, {
			ref: De,
			className: xe,
			handlers: Te,
			onClick: oe,
			onFocus: g,
			onBlur: _,
			children: Ie
		}), n[159] = ke, n[160] = Ie, n[161] = _, n[162] = oe, n[163] = g, n[164] = Te, n[165] = De, n[166] = xe, n[167] = Ye) : Ye = n[167];
		var Je;
		n[168] !== $e || n[169] !== Pe || n[170] !== Ye ? (Je = u.jsxs("div", babelHelpers.extends({}, $e, { children: [Pe, Ye] })), n[168] = $e, n[169] = Pe, n[170] = Ye, n[171] = Je) : Je = n[171];
		var Ze;
		return n[172] !== Ne || n[173] !== Me || n[174] !== Je ? (Ze = u.jsx("div", babelHelpers.extends({ ref: Ne }, Me, { children: Je })), n[172] = Ne, n[173] = Me, n[174] = Je, n[175] = Ze) : Ze = n[175], Ze;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(10), n = e.expressionsPanelPickerRef, r = e.expressionsPanelWrapperRef, a = e.getComposeBoxEditorRef, i = e.handleClose, l = e.handlePanelsGif, s = e.handlePanelsSticker, c = e.handlePanelsStickerFromStore, d = e.isGifEnabled, m = e.isStickerEnabled, p = e.replaceInputSelection, _ = e.size, f = m ? s : void 0, g = m ? c : void 0, h = d ? l : void 0, y;
		return t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== p || t[5] !== _ || t[6] !== f || t[7] !== g || t[8] !== h ? (y = u.jsx(o("WAWebExpressionsPanelPicker.react").ExpressionsPanelPicker, {
			ref: n,
			wrapperRef: r,
			onEmoji: p,
			onSticker: f,
			onStickerFromStore: g,
			onGif: h,
			getComposeBoxEditorRef: a,
			onClose: i,
			size: _
		}), t[0] = n, t[1] = r, t[2] = a, t[3] = i, t[4] = p, t[5] = _, t[6] = f, t[7] = g, t[8] = h, t[9] = y) : y = t[9], y;
	}
	l.default = g;
}), 98);
