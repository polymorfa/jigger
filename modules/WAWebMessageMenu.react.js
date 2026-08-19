__d("WAWebMessageMenu.react", [
	"WAWebAdAttributionUtils",
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeValue",
	"WAWebCtwaAGMUtils",
	"WAWebDisplayType",
	"WAWebFrontendMsgGetters",
	"WAWebInteractiveMessageHeaderMediaType",
	"WAWebInteractiveMessagesNativeFlowName",
	"WAWebKeyboardIsKeyActivation",
	"WAWebL10N",
	"WAWebMediaLinkPreviewUtils",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgModelPropUtils",
	"WAWebMsgSelectors",
	"WAWebMsgType",
	"WAWebPipIsParsableOnlineVideoUrl",
	"WAWebProtobufsE2E.pb",
	"WAWebStateUtils",
	"WAWebStopEvent",
	"WAWebThemeContext",
	"WAWebUnifiedResponseUtils",
	"WAWebViewOnceState",
	"WAWebWallpaper",
	"WDSFocusStateStyles",
	"WDSIconIcExpandMore.react",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useImperativeHandle, _ = d.useRef, f = [o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.IMAGE, o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.VIDEO], g = [
		r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION,
		r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
		r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
		r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO,
		r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER,
		r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
	], h = {
		context: {
			position: "x10l6tqk",
			top: "x1jzctok",
			insetInlineEnd: "xceh6e4",
			zIndex: "xjhb59c",
			width: "x10h3iyq",
			height: "x9fpu7x",
			$$css: !0
		},
		contextIn: {
			background: "x1n92vqa",
			$$css: !0
		},
		contextOut: {
			background: "x1595w2n",
			$$css: !0
		},
		contextInverse: {
			insetInlineEnd: "xnro73h",
			insetInlineStart: "x1fb7gu6",
			left: null,
			right: null,
			$$css: !0
		},
		contextInverseIcon: {
			insetInlineEnd: "xnro73h",
			insetInlineStart: "x1o0tod",
			$$css: !0
		},
		contextInverseIn: {
			background: "xjw9qsh",
			$$css: !0
		},
		contextInverseOut: {
			background: "x64ygrw",
			$$css: !0
		},
		contextSpecialIn: {
			background: "xsluj4e",
			$$css: !0
		},
		contextSpecialOut: {
			background: "xsluj4e",
			$$css: !0
		},
		contextPttFix: {
			insetInlineEnd: "x1og1502",
			insetInlineStart: "x1tvzbhf",
			left: null,
			right: null,
			background: "x11g6tue",
			$$css: !0
		},
		contextMultiVcardIn: {
			width: "xge0ay3",
			height: "xnnlda6",
			background: "x1d8sa2z",
			$$css: !0
		},
		contextMultiVcardOut: {
			width: "xge0ay3",
			height: "xnnlda6",
			background: "x1oomfc",
			$$css: !0
		},
		contextTransparent: {
			background: "x11g6tue",
			$$css: !0
		},
		noBg: {
			background: "x11g6tue",
			$$css: !0
		},
		contextEventOut: {
			background: "x1ie7x4c",
			$$css: !0
		},
		contextEventIn: {
			background: "x1ie7x4c",
			$$css: !0
		},
		contextMediaLTR: {
			background: "xrumn1r",
			$$css: !0
		},
		contextMediaRTL: {
			background: "xvfnxmo",
			$$css: !0
		},
		groupHistoryMessageDark: {
			background: "x104how",
			$$css: !0
		},
		groupHistoryMessageLight: {
			background: "xx0f3s1",
			$$css: !0
		},
		contextIcon: {
			color: "x1bvqhpb",
			cursor: "x1ypdohk",
			height: "xmix8c7",
			paddingInlineStart: "x1djpfga",
			paddingInlineEnd: "x1im30kd",
			position: "x10l6tqk",
			insetInlineEnd: "xtijo5x",
			top: "xs7f9wi",
			width: "x1xp8n7a",
			$$css: !0
		},
		contextIconFocusable: {
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			$$css: !0
		},
		contextIconMedia: {
			color: "x17t9dm2",
			height: "xmix8c7",
			pointerEvents: "x67bb7w",
			position: "x10l6tqk",
			insetInlineEnd: "xceh6e4",
			top: "x1jzctok",
			width: "x1xp8n7a",
			$$css: !0
		},
		contextSpecial: {
			top: "xyc4j8s",
			insetInlineEnd: "x1inkcgm",
			$$css: !0
		},
		contextMedia: {
			position: "x10l6tqk",
			top: "xxk6nc9",
			insetInlineEnd: "x1ro0b6g",
			zIndex: "xjhb59c",
			width: "xylgo91",
			maxWidth: "xq8v1hd",
			height: "x1vqgdyp",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			pointerEvents: "x47corl",
			cursor: "x1ypdohk",
			borderStartEndRadius: "xx9ypkp",
			$$css: !0
		},
		contextMediaDocument: {
			top: "xndqk7f",
			insetInlineEnd: "xxx7yvo",
			$$css: !0
		},
		contextMediaSharableEventInvite: {
			top: "x13vifvy",
			insetInlineEnd: "xtijo5x",
			$$css: !0
		},
		contextMediaSharableEventInviteWithAuthor: {
			top: "x12eol54",
			insetInlineEnd: "xtijo5x",
			$$css: !0
		},
		contextDoc: {
			background: "x11g6tue",
			insetInlineEnd: "xxx7yvo",
			left: null,
			right: null,
			top: "xndqk7f",
			$$css: !0
		},
		contextTransparentAuthor: {
			top: "xxk6nc9",
			$$css: !0
		},
		contextTransparentContainer: {
			height: "x1fgtraw",
			top: "x1jzctok",
			width: "xgd8bvy",
			$$css: !0
		},
		contextTransparentInverseContainer: {
			color: "x17t9dm2",
			$$css: !0
		},
		contextIconInTransparent: {
			color: "x1qlax0c",
			opacity: "x1hc1fzr",
			paddingTop: "x123j3cw",
			paddingInlineEnd: "x1gabggj",
			paddingBottom: "xs9asl8",
			paddingInlineStart: "xaso8d8",
			top: "x13vifvy",
			zIndex: "xhtitgo",
			$$css: !0
		},
		contextIconInTransparentInverse: {
			color: "x17t9dm2",
			$$css: !0
		}
	};
	function y(t) {
		var n = o("react-compiler-runtime").c(118), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.ariaLabel, d = l.contextOwnerIsKeyboardFocused, y = l.hasAuthor, C = l.isGroupedSticker, b = l.isMenuOpen, S = l.msg, R = l.onToggle, L = l.role, E = l.tabIndex, k = d === void 0 ? !1 : d, I = _(null), T = _(null), D = m(o("WAWebThemeContext").ThemeContext), x = o("WAWebThemeContext").useIsDarkTheme(), $;
		if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
			var P;
			$ = [
				(P = o("WAWebMsgGetters")).getAck,
				P.getLinkPreview,
				P.getMatchedText,
				P.getCtwaContext,
				o("WAWebFrontendMsgGetters").getDir,
				o("WAWebFrontendMsgGetters").getRtl,
				P.getIsMedia,
				P.getIsSentByMe,
				P.getIsGroupMsg,
				P.getIsNewsletterMsg,
				P.getIsViewOnce,
				P.getInteractiveHeader,
				P.getType,
				P.getQuotedMsg,
				P.getBody,
				P.getQuotedRemoteJid,
				P.getRichPreviewType,
				P.getDoNotPlayInline,
				P.getNewsletterAdminInviteInfo
			], n[3] = $;
		} else $ = n[3];
		var N = o("useWAWebMsgValues").useMsgValues(a.msg.id, $), M = N[1], w = N[2], A = N[3], F = N[4], O = N[5], B = N[6], W = N[7], q = N[8], U = N[9], V = N[10], H = N[11], G = N[12], z = N[13], j = N[14], K = N[15], Q = N[16], X = N[17], Y = N[18], J;
		if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
			var P;
			J = [
				(P = o("WAWebMsgGetters")).getList,
				P.getNativeFlowName,
				P.getThumbnailDirectPath,
				P.getThumbnailHeight,
				P.getThumbnailWidth,
				o("WAWebFrontendMsgGetters").getText,
				o("WAWebFrontendMsgGetters").getIsTransparentMsg,
				o("WAWebFrontendMsgGetters").getIsTransparentMsgEmoji,
				P.getIsGroupHistoryMessageInOwnChat,
				P.getUnifiedResponse
			], n[4] = J;
		} else J = n[4];
		var Z = o("useWAWebMsgValues").useMsgValues(a.msg.id, J), ee = Z[0], te = Z[1], ne = Z[6], re = Z[7], oe = Z[8], ae = Z[9], ie;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (ie = function() {
			return {
				getContext: function() {
					return T.current;
				},
				getElement: function() {
					return I.current;
				}
			};
		}, n[5] = ie) : ie = n[5], p(i, ie);
		var le;
		n[6] !== R ? (le = function(t) {
			t.stopPropagation(), R(t.target);
		}, n[6] = R, n[7] = le) : le = n[7];
		var se = le, ue = !!z, ce = ue && !!K, de;
		n[8] !== S ? (de = o("WAWebMsgSelectors").showForwarded(S), n[8] = S, n[9] = de) : de = n[9];
		var me = de, pe, _e, fe;
		if (n[10] !== j || n[11] !== D || n[12] !== k || n[13] !== A || n[14] !== F || n[15] !== X || n[16] !== y || n[17] !== ue || n[18] !== ce || n[19] !== H || n[20] !== x || n[21] !== oe || n[22] !== q || n[23] !== C || n[24] !== U || n[25] !== W || n[26] !== ne || n[27] !== re || n[28] !== V || n[29] !== M || n[30] !== (ee == null ? void 0 : ee.listType) || n[31] !== w || n[32] !== S || n[33] !== B || n[34] !== te || n[35] !== Y || n[36] !== a.displayType || n[37] !== z || n[38] !== Q || n[39] !== O || n[40] !== me || n[41] !== G || n[42] !== ae) {
			var ge, he = o("WAWebDisplayType").isWideDisplay(a.displayType), ye = G === o("WAWebMsgType").MSG_TYPE.DOCUMENT || (H == null ? void 0 : H.mediaType) === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.DOCUMENT, Ce = ye && !j, be;
			n[46] !== j || n[47] !== ye ? (be = ye && !r("isStringNullOrEmpty")(j), n[46] = j, n[47] = ye, n[48] = be) : be = n[48];
			var ve = be, Se = G === o("WAWebMsgType").MSG_TYPE.LOCATION, Re = G === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE, Le;
			n[49] !== X || n[50] !== M || n[51] !== w || n[52] !== Q ? (Le = M && o("WAWebPipIsParsableOnlineVideoUrl").isParsableOnlineVideoURL(Q, w, X), n[49] = X, n[50] = M, n[51] = w, n[52] = Q, n[53] = Le) : Le = n[53];
			var Ee = Le, ke = G === o("WAWebMsgType").MSG_TYPE.LIST && (ee == null ? void 0 : ee.listType) === o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST, Ie = Y != null, Te;
			n[54] !== ae ? (Te = o("WAWebUnifiedResponseUtils").isImagineResponse(ae), n[54] = ae, n[55] = Te) : Te = n[55];
			var De = Te, xe;
			n[56] !== H || n[57] !== De || n[58] !== B ? (xe = B || (H == null ? void 0 : H.mediaType) != null && f.includes(H.mediaType) || De, n[56] = H, n[57] = De, n[58] = B, n[59] = xe) : xe = n[59];
			var $e = xe, Pe = A != null && A.thumbnail != null && A.thumbnailUrl != null && A.sourceUrl != null, Ne = o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(A == null ? void 0 : A.sourceApp), Me = Ne ? Pe && (S.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE || ((ge = S.ctwaContext) == null ? void 0 : ge.automatedGreetingMessageShown) !== !0) : S.type !== o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && Pe, we;
			n[60] !== ue || n[61] !== Me || n[62] !== ve || n[63] !== Se || n[64] !== $e || n[65] !== ke || n[66] !== W || n[67] !== Re || n[68] !== V || n[69] !== S || n[70] !== te || n[71] !== Ee || n[72] !== G ? (we = ve || Se || ue || ke || G === o("WAWebMsgType").MSG_TYPE.PAYMENT || Ee || G === o("WAWebMsgType").MSG_TYPE.PRODUCT || G === o("WAWebMsgType").MSG_TYPE.ALBUM || Re || te != null && g.includes(te) || Me || $e && !V && G !== o("WAWebMsgType").MSG_TYPE.AUDIO || V && !W && !o("WAWebViewOnceState").isViewed(S.safe()), n[60] = ue, n[61] = Me, n[62] = ve, n[63] = Se, n[64] = $e, n[65] = ke, n[66] = W, n[67] = Re, n[68] = V, n[69] = S, n[70] = te, n[71] = Ee, n[72] = G, n[73] = we) : we = n[73];
			var Ae = we, Fe;
			n[74] !== S ? (Fe = o("WAWebMsgLinks").getSuspiciousLinks(S), n[74] = S, n[75] = Fe) : Fe = n[75];
			var Oe = Fe.length > 0, Be;
			n[76] !== y || n[77] !== Oe || n[78] !== M || n[79] !== S || n[80] !== Ee || n[81] !== me || n[82] !== G ? (Be = G === o("WAWebMsgType").MSG_TYPE.CHAT && M && !Ee && !y && !me && !Oe && o("WAWebMsgModelPropUtils").isTrusted(S), n[76] = y, n[77] = Oe, n[78] = M, n[79] = S, n[80] = Ee, n[81] = me, n[82] = G, n[83] = Be) : Be = n[83];
			var We = Be, qe;
			n[84] !== S ? (qe = o("WAWebMediaLinkPreviewUtils").displayHighQualityLinkPreview(o("WAWebStateUtils").unproxy(S.unsafe())), n[84] = S, n[85] = qe) : qe = n[85];
			var Ue = qe, Ve = We && !Ue && !W && !ue, He;
			n[86] !== Ue || n[87] !== y || n[88] !== Oe || n[89] !== Ae || n[90] !== Re || n[91] !== We || n[92] !== S || n[93] !== me ? (He = Ae && (!y || Re) && !Oe && !me && !o("WAWebAdAttributionUtils").shouldShowAdAttribution(S) || We && Ue, n[86] = Ue, n[87] = y, n[88] = Oe, n[89] = Ae, n[90] = Re, n[91] = We, n[92] = S, n[93] = me, n[94] = He) : He = n[94];
			var Ge = He, ze = G === o("WAWebMsgType").MSG_TYPE.PTT && !V || G === o("WAWebMsgType").MSG_TYPE.AUDIO, je = G === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD && !ue && !y && !me, Ke = G === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE, Qe = Ke && !y && !me && !ue, Xe = (We && !Ue && W || Ce || Ie) && !y && !me && !ue, Ye = v({
				msg: S,
				isGroupedSticker: C,
				isGroupMsg: q,
				isNewsletterMsg: U,
				isWide: he,
				isSentByMe: W,
				isTransparentMsg: ne
			}), Je;
			n[95] !== F || n[96] !== y || n[97] !== ue || n[98] !== Ee || n[99] !== O || n[100] !== me || n[101] !== G ? (Je = G === o("WAWebMsgType").MSG_TYPE.CHAT && !ue && !y && !me && !Ee && !o("WAWebMediaLinkPreviewUtils").displayHighQualityLinkPreview && !!F && O !== r("WAWebL10N").isRTL(), n[95] = F, n[96] = y, n[97] = ue, n[98] = Ee, n[99] = O, n[100] = me, n[101] = G, n[102] = Je) : Je = n[102];
			var Ze = Je, et = ze && r("WAWebL10N").isRTL() && !y, tt = G === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION, nt = Ge || Ve || Qe, rt = Ze || et, ot = Ce && !y && !me && !ue, at = Ye;
			re && z && (at = !1);
			var it;
			!k && !ce && (Xe ? We && W ? it = h.noBg : it = W ? h.contextSpecialOut : h.contextSpecialIn : G === o("WAWebMsgType").MSG_TYPE.CALL_LOG || G === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION && W ? it = h.noBg : ze && !ue && !y ? (r("WAWebL10N").isRTL() && W || !r("WAWebL10N").isRTL() && !W) && (it = h.contextPttFix) : rt ? it = W ? h.contextInverseOut : h.contextInverseIn : ze ? it = h.noBg : je ? it = W ? h.contextMultiVcardOut : h.contextMultiVcardIn : Ye ? (!re || !z) && (it = h.contextTransparent) : re ? it = W ? h.noBg : h.contextIn : tt ? y ? it = h.noBg : it = W ? h.contextEventOut : h.contextEventIn : (S.isForwarded || oe) && B ? it = h.noBg : it = W ? h.contextOut : h.contextIn);
			var lt;
			if (Ye) {
				var st = r("WAWebChatPreferenceCollection").get("defaultPreference"), ut = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(st == null ? void 0 : st.wallpaperValue, x ? "dark" : "light"), ct = ut.wallpaper, dt = {
					backgroundColor: ct,
					opacity: .9
				};
				pe = c.jsx("div", {
					className: {
						0: "x22v28t",
						1: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1fgtraw x1o0tod x10l6tqk x13vifvy xgd8bvy x1vjfegm x22v28t"
					}[!!at << 0],
					style: dt
				}), lt = o("WAWebWallpaper").invertTransparentWallpaperColors(D.theme, ct);
			}
			var mt = null;
			nt && (mt = r("WAWebL10N").isRTL() ? h.contextMediaRTL : h.contextMediaLTR), _e = (s || (s = r("stylex")))((rt ? Ge : nt) ? h.contextIconMedia : h.contextIcon, rt && h.contextInverseIcon, at && h.contextIconInTransparent, Ye && lt === !0 && h.contextIconInTransparentInverse, h.contextIconFocusable, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), fe = s((!(Ge || We) || Xe) && h.context, nt && h.contextMedia, Xe && h.contextSpecial, ve && h.contextMediaDocument, nt && Re && (y ? h.contextMediaSharableEventInviteWithAuthor : h.contextMediaSharableEventInvite), ne && !Ye && h.contextTransparentAuthor, at && h.contextTransparentContainer, rt && h.contextInverse, it, mt, oe && !nt && (x ? h.groupHistoryMessageDark : h.groupHistoryMessageLight), ot && h.contextDoc, Ye && lt === !0 && h.contextTransparentInverseContainer), n[10] = j, n[11] = D, n[12] = k, n[13] = A, n[14] = F, n[15] = X, n[16] = y, n[17] = ue, n[18] = ce, n[19] = H, n[20] = x, n[21] = oe, n[22] = q, n[23] = C, n[24] = U, n[25] = W, n[26] = ne, n[27] = re, n[28] = V, n[29] = M, n[30] = ee == null ? void 0 : ee.listType, n[31] = w, n[32] = S, n[33] = B, n[34] = te, n[35] = Y, n[36] = a.displayType, n[37] = z, n[38] = Q, n[39] = O, n[40] = me, n[41] = G, n[42] = ae, n[43] = pe, n[44] = _e, n[45] = fe;
		} else pe = n[43], _e = n[44], fe = n[45];
		var pt = fe, _t;
		n[103] !== se ? (_t = function(t) {
			r("WAWebKeyboardIsKeyActivation")(t) && se(t);
		}, n[103] = se, n[104] = _t) : _t = n[104];
		var ft = _t, gt;
		n[105] === Symbol.for("react.memo_cache_sentinel") ? (gt = c.jsx(r("WDSIconIcExpandMore.react"), {}), n[105] = gt) : gt = n[105];
		var ht = gt, yt;
		n[106] !== u || n[107] !== se || n[108] !== ft || n[109] !== _e || n[110] !== b || n[111] !== L || n[112] !== E ? (yt = c.jsx("div", {
			"data-testid": "icon-down-context",
			"data-js-context-icon": !0,
			className: _e,
			ref: T,
			onMouseDown: o("WAWebStopEvent").stopPropagation,
			tabIndex: E,
			onKeyDown: ft,
			"aria-label": u,
			"aria-expanded": b,
			role: L,
			onClick: se,
			children: ht
		}), n[106] = u, n[107] = se, n[108] = ft, n[109] = _e, n[110] = b, n[111] = L, n[112] = E, n[113] = yt) : yt = n[113];
		var Ct;
		return n[114] !== pt || n[115] !== pe || n[116] !== yt ? (Ct = c.jsxs("div", {
			ref: I,
			className: pt,
			children: [yt, pe]
		}), n[114] = pt, n[115] = pe, n[116] = yt, n[117] = Ct) : Ct = n[117], Ct;
	}
	var C = y, b = C;
	function v(e) {
		var t = e.isGroupedSticker, n = e.isGroupMsg, r = e.isNewsletterMsg, a = e.isSentByMe, i = e.isTransparentMsg, l = e.isWide, s = e.msg;
		switch (s.type) {
			case o("WAWebMsgType").MSG_TYPE.STICKER: return i && (t === !0 || !n || a && !l);
			case o("WAWebMsgType").MSG_TYPE.CHAT: return i && (!n || a && !l);
			case o("WAWebMsgType").MSG_TYPE.PTV: return i && (r || !l);
		}
		return !1;
	}
	l.default = b;
}), 98);
