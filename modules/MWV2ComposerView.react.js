__d("MWV2ComposerView.react", [
	"fbt",
	"CometScreenReaderHeading.react",
	"FBLogger",
	"I64",
	"LSContactReachabilityStatusType",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"LSThreadBitOffset",
	"Locale",
	"MWAudioRecorder.react",
	"MWCMThreadTypes.react",
	"MWComposerEndButtonsGroup.react",
	"MWComposerInnerButtonsGroup.react",
	"MWComposerStartButtonsGroup.react",
	"MWCreatorMessagingUtils",
	"MWPActor.react",
	"MWReQLComposerInner.react",
	"MWReQLComposerPlusButton.react",
	"MWV2ComposerMediaStaging.react",
	"MWV2ComposerSendButton.react",
	"MWXComposerStartButtonsGroup.react",
	"Promise",
	"ReQL",
	"ReQLSuspense",
	"emptyFunction",
	"getErrorSafe",
	"gkx",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"stylex",
	"useDeferredModuleOnReady",
	"useIsAdsAIChat",
	"useIsMessengerPWA",
	"useMWComposerAriaDescribedBy",
	"useMWEntrypoint",
	"useMWIsOffline",
	"useParticipantsExcludingViewer",
	"usePrevious",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _ = p || (p = o("react")), f = p, g = f.useEffect, h = f.useId, y = f.useRef, C = r("requireDeferred")("getUpgradedCometEmojiComposerHandler").__setRef("MWV2ComposerView.react"), b = {
		container: {
			flexGrow: "x1iyjqo2",
			overflowX: "xw2csxc",
			position: "x1n2onr6",
			$$css: !0
		},
		containerTextOnly: {
			marginInlineStart: "xyqm7xq",
			$$css: !0
		},
		hidden: {
			display: "x1s85apg",
			$$css: !0
		}
	};
	function v(e) {
		var t = o("react-compiler-runtime").c(4), n = r("useDeferredModuleOnReady")(C), a, i;
		t[0] !== n || t[1] !== e ? (a = function() {
			if (n != null) return n(e, 16);
		}, i = [e, n], t[0] = n, t[1] = e, t[2] = a, t[3] = i) : (a = t[2], i = t[3]), g(a, i);
	}
	function S(t) {
		var a, l = o("react-compiler-runtime").c(193), p = t.ariaLabel, f = t.canSendAudioClip, C = t.canSendFile, S = t.canSendGif, E = t.canSendSticker, k = t.composerLinkPreview, I = t.editor, T = t.editorElementRef, D = t.getMaxAttachmentSizeInMBFunc, x = t.hasStuffToSend, $ = t.hideAriaDescribedBy, P = t.isAiBotMentionsEnabled, N = t.isMentionsPluginEnabled, M = t.keepInputExpanded, w = t.localTimezoneInformation, A = t.mediaStaging, F = t.onAttachmentRemoved, O = t.onAttachmentsAdded, B = t.onHdMediaToggled, W = t.onSendMessage, q = t.placeholderText, U = t.policyProduct, V = t.renderExtraButtons, H = t.renderExtraOverflowMenuItems, G = t.sendMessage, z = t.showMentionsOnPreviewThread, j = t.supportedFileTypes, K = t.surface, Q = t.thread, X = t.voiceRecorder, Y = f === void 0 ? !0 : f, J = C === void 0 ? !0 : C, Z = S === void 0 ? !0 : S, ee = E === void 0 ? !0 : E, te = $ === void 0 ? !1 : $, ne = N === void 0 ? !0 : N, re = M === void 0 ? !1 : M, oe = V === void 0 ? null : V, ae = z === void 0 ? !1 : z, ie = (m || (m = r("useReStore")))(), le = r("useMWIsOffline")(), se = r("useIsMessengerPWA")(), ue = le && se, ce;
		l[0] !== Q.threadType ? (ce = o("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannel(Q.threadType), l[0] = Q.threadType, l[1] = ce) : ce = l[1];
		var de = ce, me = r("gkx")("7947"), pe = !0;
		(me || de) && (pe = !1);
		var _e;
		l[2] !== Z || l[3] !== Q ? (_e = Z && o("LSThreadBitOffset").has(4, Q), l[2] = Z, l[3] = Q, l[4] = _e) : _e = l[4];
		var fe = _e, ge;
		l[5] !== Q.threadType ? (ge = o("MWCMThreadTypes.react").isBroadcastThread(Q.threadType), l[5] = Q.threadType, l[6] = ge) : ge = l[6];
		var he = ge, ye;
		l[7] !== Q.threadType ? (ye = o("LSMessagingThreadTypeUtil").isAiBot(Q.threadType), l[7] = Q.threadType, l[8] = ye) : ye = l[8];
		var Ce = ye, be;
		l[9] !== Q.threadType ? (be = o("LSMessagingThreadTypeUtil").isAiAgent(Q.threadType), l[9] = Q.threadType, l[10] = be) : be = l[10];
		var ve = be, Se = r("useIsAdsAIChat")(Q.threadKey), Re;
		l[11] !== J || l[12] !== Se || l[13] !== Ce || l[14] !== he || l[15] !== Q ? (Re = J && (he || Ce || Se ? o("LSThreadBitOffset").has(56, Q) : !0), l[11] = J, l[12] = Se, l[13] = Ce, l[14] = he, l[15] = Q, l[16] = Re) : Re = l[16];
		var Le = Re, Ee;
		l[17] !== Q.threadType ? (Ee = o("LSMessagingThreadTypeUtil").isArmadilloSecure(Q.threadType), l[17] = Q.threadType, l[18] = Ee) : Ee = l[18];
		var ke = Ee, Ie;
		l[19] !== ee || l[20] !== Q ? (Ie = ee && o("LSThreadBitOffset").has(3, Q), l[19] = ee, l[20] = Q, l[21] = Ie) : Ie = l[21];
		var Te = Ie, De = r("useMWEntrypoint")(), xe = X.state.stage !== "Unopen", $e;
		l[22] !== W || l[23] !== X ? ($e = function() {
			X.getVoiceClip().then(function(t) {
				return X.reset(), W(void 0, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "MWV2ComposerView.onSendVoiceClip"), (e || (e = n("Promise"))).resolve();
			}).catch(L);
		}, l[22] = W, l[23] = X, l[24] = $e) : $e = l[24];
		var Pe = $e, Ne = y(null), Me = r("usePrevious")(xe), we, Ae;
		l[25] !== xe || l[26] !== Me ? (we = function() {
			if (xe === !0 && Me === !1) {
				var e;
				(e = Ne.current) == null || e.focus();
			}
		}, Ae = [xe, Me], l[25] = xe, l[26] = Me, l[27] = we, l[28] = Ae) : (we = l[27], Ae = l[28]), g(we, Ae);
		var Fe;
		l[29] !== Q.threadKey ? (Fe = { threadKey: Q.threadKey }, l[29] = Q.threadKey, l[30] = Fe) : Fe = l[30];
		var Oe = r("useParticipantsExcludingViewer")(Fe), Be;
		l[31] !== Q ? (Be = o("LSThreadBitOffset").has(43, Q), l[31] = Q, l[32] = Be) : Be = l[32];
		var We = Be, qe = o("MWPActor.react").useActor(), Ue, Ve;
		l[33] !== qe || l[34] !== ie.tables.contacts || l[35] !== ie.tables.participants || l[36] !== Q.threadKey || l[37] !== Q.threadType ? (Ue = function() {
			return o("LSMessagingThreadTypeUtil").isOneToOne(Q.threadType) ? o("ReQL").mergeJoin(o("ReQL").fromTableAscending(ie.tables.participants).getKeyRange(Q.threadKey), o("ReQL").fromTableAscending(ie.tables.contacts)).filter(function(e) {
				var t = e[1];
				return !(c || (c = o("I64"))).equal(t.id, qe);
			}) : o("ReQL").empty();
		}, Ve = [
			Q.threadType,
			Q.threadKey,
			ie.tables.participants,
			ie.tables.contacts,
			qe
		], l[33] = qe, l[34] = ie.tables.contacts, l[35] = ie.tables.participants, l[36] = Q.threadKey, l[37] = Q.threadType, l[38] = Ue, l[39] = Ve) : (Ue = l[38], Ve = l[39]);
		var He = o("ReQLSuspense").useFirst(Ue, Ve, i.id + ":252"), Ge = He == null || (a = He[1]) == null ? void 0 : a.contactReachabilityStatusType, ze;
		l[40] !== Ge ? (ze = (d || (d = o("LSIntEnum"))).equal(Ge, r("LSContactReachabilityStatusType").AP_PLUS_MESSAGING_REACHABLE_TEXT_ONLY_AND_BANNER), l[40] = Ge, l[41] = ze) : ze = l[41];
		var je = ze, Ke;
		l[42] === Symbol.for("react.memo_cache_sentinel") ? (Ke = o("Locale").isRTL(), l[42] = Ke) : Ke = l[42];
		var Qe = Ke, Xe;
		l[43] === Symbol.for("react.memo_cache_sentinel") ? (Xe = [32, 4], l[43] = Xe) : Xe = l[43];
		var Ye = Xe, Je = Ye[0], Ze = Ye[1], et = 0 + Je | 0, tt;
		l[44] !== Q.threadType ? (tt = o("LSMessagingThreadTypeUtil").isCMSubthread(Q.threadType), l[44] = Q.threadType, l[45] = tt) : tt = l[45];
		var nt = tt, rt = x || re || je || nt && De === "inbox", ot = et + Je | 0, at = ot + Je | 0, it = at + Ze, lt = it.toString() + "px", st;
		l[46] !== rt || l[47] !== pe ? (st = Qe ? pe ? { marginRight: "4px" } : { marginRight: rt ? "0" : lt } : pe ? { marginLeft: "4px" } : { marginLeft: rt ? "0" : lt }, l[46] = rt, l[47] = pe, l[48] = st) : st = l[48];
		var ut = st, ct = r("useMWComposerAriaDescribedBy")(Q), dt = h();
		v(I);
		var mt;
		l[49] !== Se || l[50] !== ve || l[51] !== de || l[52] !== Q ? (mt = de || ve || Se && !o("LSThreadBitOffset").has(109, Q) || o("MWCreatorMessagingUtils").isPageToAnyThread(Q) && !o("LSThreadBitOffset").has(109, Q), l[49] = Se, l[50] = ve, l[51] = de, l[52] = Q, l[53] = mt) : mt = l[53];
		var pt = mt, _t;
		l[54] !== ie.tables.custom_thread_commands || l[55] !== Q.threadKey ? (_t = function() {
			return o("ReQL").fromTableAscending(ie.tables.custom_thread_commands).getKeyRange(Q.threadKey).filter(R);
		}, l[54] = ie.tables.custom_thread_commands, l[55] = Q.threadKey, l[56] = _t) : _t = l[56];
		var ft;
		l[57] !== ie || l[58] !== Q.threadKey ? (ft = [ie, Q.threadKey], l[57] = ie, l[58] = Q.threadKey, l[59] = ft) : ft = l[59];
		var gt = o("ReQLSuspense").useFirst(_t, ft, i.id + ":337") != null, ht;
		l[60] !== Q ? (ht = o("LSThreadBitOffset").has(152, Q), l[60] = Q, l[61] = ht) : ht = l[61];
		var yt = ht, Ct;
		l[62] !== We || l[63] !== P || l[64] !== ne || l[65] !== ae || l[66] !== Q.threadType ? (Ct = ne && (P === !0 ? !0 : (We || ae) && o("LSMessagingThreadTypeUtil").isGroup(Q.threadType)), l[62] = We, l[63] = P, l[64] = ne, l[65] = ae, l[66] = Q.threadType, l[67] = Ct) : Ct = l[67];
		var bt = Ct, vt;
		l[68] !== gt || l[69] !== je || l[70] !== Q ? (vt = (je || o("MWCreatorMessagingUtils").isPageToAnyThread(Q)) && !Q.hasPersistentMenu && !gt, l[68] = gt, l[69] = je, l[70] = Q, l[71] = vt) : vt = l[71];
		var St = vt, Rt;
		l[72] !== x || l[73] !== je || l[74] !== xe || l[75] !== Pe || l[76] !== X ? (Rt = xe && !je ? _.jsxs(_.Fragment, { children: [_.jsx(r("MWAudioRecorder.react"), { voiceRecorder: X }), _.jsx(r("MWV2ComposerSendButton.react"), {
			hasStuffToSend: x,
			onPress: Pe,
			ref: Ne
		})] }) : null, l[72] = x, l[73] = je, l[74] = xe, l[75] = Pe, l[76] = X, l[77] = Rt) : Rt = l[77];
		var Lt = Rt, Et;
		l[78] !== I || l[79] !== je || l[80] !== xe || l[81] !== A || l[82] !== O || l[83] !== W || l[84] !== pe || l[85] !== Q || l[86] !== X ? (Et = pe && !je ? _.jsx("div", {
			className: "x78zum5 x2lah0s x6ikm8r x10wlt62 xexx8yu x11lfxj5 x18d9i69 x135b78x x1n2onr6",
			children: _.jsx(r("MWXComposerStartButtonsGroup.react"), {
				editor: I,
				hasNonTextContentToSend: xe || A.length > 0,
				isTextOnly: je,
				onAttachmentsAdded: O,
				onSendMessage: W,
				testid: void 0,
				thread: Q,
				voiceRecorder: X
			})
		}) : null, l[78] = I, l[79] = je, l[80] = xe, l[81] = A, l[82] = O, l[83] = W, l[84] = pe, l[85] = Q, l[86] = X, l[87] = Et) : Et = l[87];
		var kt = Et, It;
		l[88] !== p ? (It = p != null ? p : String(s._(
			/*BTDS*/
			""
		)), l[88] = p, l[89] = It) : It = l[89];
		var Tt;
		l[90] === Symbol.for("react.memo_cache_sentinel") ? (Tt = { className: "xuk3077 x57kliw x78zum5 x6prxxf xz9dl7a xsag5q8" }, l[90] = Tt) : Tt = l[90];
		var Dt;
		l[91] === Symbol.for("react.memo_cache_sentinel") ? (Dt = _.jsx(r("CometScreenReaderHeading.react"), { children: s._(
			/*BTDS*/
			""
		) }), l[91] = Dt) : Dt = l[91];
		var xt;
		l[92] !== Y || l[93] !== Le || l[94] !== I || l[95] !== rt || l[96] !== je || l[97] !== O || l[98] !== W || l[99] !== H || l[100] !== pe || l[101] !== j || l[102] !== Q || l[103] !== X ? (xt = !pe && !je && _.jsx(r("MWReQLComposerPlusButton.react"), {
			canSendAudioClip: Y,
			canSendFile: Le,
			editor: I,
			isInputExpanded: rt,
			onAttachmentsAdded: O,
			onSendMessage: W,
			renderExtraOverflowMenuItems: H,
			supportedFileTypes: j,
			thread: Q,
			voiceRecorder: X
		}), l[92] = Y, l[93] = Le, l[94] = I, l[95] = rt, l[96] = je, l[97] = O, l[98] = W, l[99] = H, l[100] = pe, l[101] = j, l[102] = Q, l[103] = X, l[104] = xt) : xt = l[104];
		var $t;
		l[105] !== je || l[106] !== xe ? ($t = (u || (u = r("stylex"))).props(xe ? b.hidden : !1, b.container, je ? b.containerTextOnly : !1), l[105] = je, l[106] = xe, l[107] = $t) : $t = l[107];
		var Pt;
		l[108] !== Y || l[109] !== Le || l[110] !== fe || l[111] !== yt || l[112] !== Te || l[113] !== k || l[114] !== D || l[115] !== rt || l[116] !== ke || l[117] !== je || l[118] !== w || l[119] !== O || l[120] !== W || l[121] !== pe || l[122] !== j || l[123] !== Q.threadKey || l[124] !== Q.threadType || l[125] !== X ? (Pt = !pe && !je && _.jsx(r("MWComposerStartButtonsGroup.react"), {
			canSendAudioClipFinal: Y,
			canSendFileFinal: Le,
			canSendGifFinal: fe,
			canSendRollcall: yt,
			canSendSticker: Te,
			composerLinkPreview: k,
			getMaxAttachmentSizeInMBFunc: D,
			gifButtonPosition: ot,
			isInputExpanded: rt,
			isRTL: Qe,
			isSecureThread: ke,
			localTimezoneInformation: w,
			onAttachmentsAdded: O,
			onSendMessage: W,
			shouldUseMDS: !1,
			stickerButtonPosition: et,
			supportedFileTypes: j,
			threadKey: Q.threadKey,
			threadType: Q.threadType,
			voiceRecorder: X
		}), l[108] = Y, l[109] = Le, l[110] = fe, l[111] = yt, l[112] = Te, l[113] = k, l[114] = D, l[115] = rt, l[116] = ke, l[117] = je, l[118] = w, l[119] = O, l[120] = W, l[121] = pe, l[122] = j, l[123] = Q.threadKey, l[124] = Q.threadType, l[125] = X, l[126] = Pt) : Pt = l[126];
		var Nt;
		l[127] === Symbol.for("react.memo_cache_sentinel") ? (Nt = "x78zum5 x1iyjqo2 x6q2ic0", l[127] = Nt) : Nt = l[127];
		var Mt;
		l[128] !== ct || l[129] !== dt || l[130] !== te ? (Mt = !te && _.jsx("div", {
			className: "xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",
			id: dt,
			children: ct
		}), l[128] = ct, l[129] = dt, l[130] = te, l[131] = Mt) : Mt = l[131];
		var wt = te ? void 0 : dt, At = p != null ? p : String(ct), Ft;
		l[132] !== I || l[133] !== ke || l[134] !== A || l[135] !== B || l[136] !== oe ? (Ft = _.jsx(r("MWComposerInnerButtonsGroup.react"), {
			editor: I,
			isSecureThread: ke,
			mediaStaging: A,
			onHdMediaToggled: B,
			renderExtraButtons: oe,
			shouldUseMDS: !1
		}), l[132] = I, l[133] = ke, l[134] = A, l[135] = B, l[136] = oe, l[137] = Ft) : Ft = l[137];
		var Ot = Le ? O : r("emptyFunction"), Bt;
		l[138] !== nt || l[139] !== Q.parentThreadKey || l[140] !== Q.threadKey ? (Bt = (c || (c = o("I64"))).to_string(nt ? Q.parentThreadKey : Q.threadKey), l[138] = nt, l[139] = Q.parentThreadKey, l[140] = Q.threadKey, l[141] = Bt) : Bt = l[141];
		var Wt;
		l[142] !== A || l[143] !== F || l[144] !== O || l[145] !== j ? (Wt = _.jsx(r("MWV2ComposerMediaStaging.react"), {
			mediaStaging: A,
			onAttachmentRemoved: F,
			onAttachmentsAdded: O,
			supportedFileTypes: j
		}), l[142] = A, l[143] = F, l[144] = O, l[145] = j, l[146] = Wt) : Wt = l[146];
		var qt;
		l[147] !== I || l[148] !== T || l[149] !== P || l[150] !== ke || l[151] !== Oe || l[152] !== q || l[153] !== U || l[154] !== K || l[155] !== wt || l[156] !== At || l[157] !== Ft || l[158] !== Ot || l[159] !== Bt || l[160] !== Wt || l[161] !== bt ? (qt = _.jsx(r("MWReQLComposerInner.react"), {
			ariaDescribedBy: wt,
			ariaLabel: At,
			contentEditableRef: T,
			editor: I,
			endContent: Ft,
			handlePastedFiles: Ot,
			isAiBotMentionsEnabled: P,
			isSecureThread: ke,
			participants: Oe,
			placeholderText: q,
			policyProduct: U,
			surface: K,
			testId: "chat_input:rich-input",
			threadID: Bt,
			topContent: Wt,
			useMentionsPlugin: bt
		}), l[147] = I, l[148] = T, l[149] = P, l[150] = ke, l[151] = Oe, l[152] = q, l[153] = U, l[154] = K, l[155] = wt, l[156] = At, l[157] = Ft, l[158] = Ot, l[159] = Bt, l[160] = Wt, l[161] = bt, l[162] = qt) : qt = l[162];
		var Ut;
		l[163] !== ut || l[164] !== Mt || l[165] !== qt ? (Ut = _.jsxs("div", {
			className: Nt,
			style: ut,
			children: [Mt, qt]
		}), l[163] = ut, l[164] = Mt, l[165] = qt, l[166] = Ut) : Ut = l[166];
		var Vt;
		l[167] !== $t || l[168] !== Pt || l[169] !== Ut ? (Vt = _.jsxs("div", babelHelpers.extends({}, $t, { children: [Pt, Ut] })), l[167] = $t, l[168] = Pt, l[169] = Ut, l[170] = Vt) : Vt = l[170];
		var Ht = ue || St && !x, Gt;
		l[171] !== St || l[172] !== I || l[173] !== gt || l[174] !== x || l[175] !== ue || l[176] !== xe || l[177] !== W || l[178] !== G || l[179] !== pt || l[180] !== Ht || l[181] !== Q.customEmoji || l[182] !== Q.hasPersistentMenu || l[183] !== Q.threadKey || l[184] !== Q.threadType ? (Gt = _.jsx(r("MWComposerEndButtonsGroup.react"), {
			alwaysShowSend: St,
			customEmoji: Q.customEmoji,
			disabled: Ht,
			editor: I,
			hasPersistentMenu: Q.hasPersistentMenu,
			hasStuffToSend: x,
			isVoiceRecorderOpen: xe,
			onSendMessage: W,
			sendMessage: G,
			shouldHideHotLike: pt,
			shouldHideTooltip: ue,
			showCommands: gt,
			threadKey: Q.threadKey,
			threadType: Q.threadType
		}), l[171] = St, l[172] = I, l[173] = gt, l[174] = x, l[175] = ue, l[176] = xe, l[177] = W, l[178] = G, l[179] = pt, l[180] = Ht, l[181] = Q.customEmoji, l[182] = Q.hasPersistentMenu, l[183] = Q.threadKey, l[184] = Q.threadType, l[185] = Gt) : Gt = l[185];
		var zt;
		return l[186] !== kt || l[187] !== It || l[188] !== xt || l[189] !== Vt || l[190] !== Gt || l[191] !== Lt ? (zt = _.jsxs("div", babelHelpers.extends({ "aria-label": It }, Tt, {
			"data-testid": void 0,
			role: "region",
			children: [
				Dt,
				xt,
				Lt,
				kt,
				Vt,
				Gt
			]
		})), l[186] = kt, l[187] = It, l[188] = xt, l[189] = Vt, l[190] = Gt, l[191] = Lt, l[192] = zt) : zt = l[192], zt;
	}
	function R(e) {
		return !e.isOpenPersistentMenu;
	}
	function L(t) {
		return r("FBLogger")("messenger_web_media").catching(r("getErrorSafe")(t)).warn("Failed to send voice clip in messenger composer "), (e || (e = n("Promise"))).reject(t);
	}
	l.MWV2ComposerView = S;
}), 226);
