__d("WAWebMessageTextBubble.react", [
	"WAWebBizCtwaAGMUtils",
	"WAWebBotGating",
	"WAWebBotUtils",
	"WAWebBroadcastMeta.react",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebCommonMsgUtils",
	"WAWebDisplayType",
	"WAWebElevatedPushNamesFlag",
	"WAWebEnvironment",
	"WAWebFrontendMsgGetters",
	"WAWebGroupType",
	"WAWebL10N",
	"WAWebMessageAuthor.react",
	"WAWebMessageBubbleTypingIndicator.react",
	"WAWebMessageCropping",
	"WAWebMessageDisclaimerText.react",
	"WAWebMessageForwardedIndicator.react",
	"WAWebMessageMeta.react",
	"WAWebMessagePaidPartnershipDisclaimerText.react",
	"WAWebMsgGetters",
	"WAWebMsgSelectors",
	"WAWebMsgType",
	"WAWebTeeLockNameRow.react",
	"WAWebUnifiedResponseUtils",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		paddingInline3: {
			paddingInlineStart: "x1djpfga",
			paddingInlineEnd: "x1im30kd",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingTop3: {
			paddingTop: "xyqdw3p",
			$$css: !0
		}
	}, d = {
		bubble: {
			boxSizing: "x9f619",
			userSelect: "x1hx0egp",
			$$css: !0
		},
		portrait: {
			maxWidth: "x15bsu91",
			$$css: !0
		},
		landscape: {
			maxWidth: "xkknydg",
			$$css: !0
		},
		announcement: {
			width: "x1yuel0x",
			$$css: !0
		},
		fixedWidth: {
			width: "x3orp4s",
			maxWidth: "x193iq5w",
			$$css: !0
		},
		meta: {
			position: "x1n2onr6",
			zIndex: "x1n327nk",
			float: "x18mqm2i",
			marginTop: "xhsvlbd",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xz62fqu",
			marginInlineStart: "x1wbi8v6",
			$$css: !0
		},
		metaForImagineUR: {
			bottom: "xrb244j",
			insetInlineEnd: "xxx7yvo",
			left: null,
			right: null,
			$$css: !0
		},
		metaForRTLMsg: {
			float: "xtrg13t",
			$$css: !0
		},
		isPSA: {
			paddingBottom: "x1em1mmk",
			$$css: !0
		},
		elevatedPushNames: {
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "xf159sx",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "x7coems",
			$$css: !0
		},
		pollCreation: {
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "xm2lglf",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1pjyq1w",
			$$css: !0
		},
		regular: {
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "xodvfiu",
			paddingInlineStart: "xct3hqd",
			paddingBottom: "xwib8y2",
			$$css: !0
		},
		imagineUR: {
			paddingTop: "xyqdw3p",
			paddingInlineEnd: "x1im30kd",
			paddingBottom: "xg8j3zb",
			paddingInlineStart: "x1djpfga",
			$$css: !0
		},
		metaAi: {
			float: "xyen2ro",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		forwardedIndicator: {
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x1bjonze",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x7coems",
			$$css: !0
		},
		sharableEventInviteAuthor: {
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "xodvfiu",
			paddingInlineStart: "xct3hqd",
			$$css: !0
		}
	};
	function m(t) {
		var n, a, i = o("react-compiler-runtime").c(44), l = t.msg, s;
		if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
			var m;
			s = [
				(m = o("WAWebMsgGetters")).getIsGroupMsg,
				m.getIsPSA,
				m.getIsSentByMe,
				o("WAWebFrontendMsgGetters").getSenderObj,
				m.getSender,
				m.getType,
				m.getActiveBotMsgStreamingInProgress,
				m.getUnifiedResponse
			], i[0] = s;
		} else s = i[0];
		var _ = o("useWAWebMsgValues").useMsgValues(t.msg.id, s), f = _[3], g = _[4], h = _[5], y = _[6], C = _[7], b, v, S, R, L, E, k, I;
		if (i[1] !== y || i[2] !== l || i[3] !== t.authorRole || i[4] !== t.displayAuthor || i[5] !== t.displayType || i[6] !== t.hideMeta || i[7] !== t.theme || i[8] !== t.useFixedWidth || i[9] !== t.xstyle || i[10] !== g || i[11] !== f || i[12] !== h || i[13] !== C) {
			var T, D, x, $, P = r("WAWebL10N").isRTL(), N = o("WAWebFrontendMsgGetters").getChat(l.unsafe()), M = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(N), w = o("WAWebDisplayType").isWideDisplay(t.displayType), A = o("WAWebUnifiedResponseUtils").isImagineResponse(C), F;
			v = null, A ? F = d.imagineUR : h === o("WAWebMsgType").MSG_TYPE.POLL_CREATION || h === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT ? F = d.pollCreation : h === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION ? F = [
				c.paddingInline3,
				c.paddingTop3,
				o("WDSPaddings.stylex").wdsPaddings.paddingBottom8
			] : h === o("WAWebMsgType").MSG_TYPE.STICKER_PACK ? F = o("WDSPaddings.stylex").wdsPaddings.padding0 : h === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE ? (F = o("WDSPaddings.stylex").wdsPaddings.padding0, v = d.sharableEventInviteAuthor) : M ? F = d.elevatedPushNames : F = d.regular;
			var O = l.unsafe(), B = O.botGroupParticipant, W = g != null && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(g) && (o("WAWebChatGroupUtils").isAIGroupTee(N) || B != null && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(B));
			R = (e || (e = r("stylex")))(d.bubble, o("WAWebMsgGetters").getIsPSA(l) && d.isPSA, t.theme === "portrait" && !w && d.portrait, t.theme === "landscape" && !w && d.landscape, w && d.announcement, t.useFixedWidth === !0 && !A && d.fixedWidth, F, t.xstyle), L = A ? {
				width: o("WAWebMessageCropping").IMAGINE_UR_WIDTH,
				maxWidth: "100%"
			} : void 0;
			var q = t.displayAuthor ? u.jsx(r("WAWebMessageAuthor.react"), {
				role: t.authorRole,
				msg: l,
				contact: f,
				displayType: t.displayType,
				disableClick: ((T = l.author) == null ? void 0 : T.isLid()) && ((D = N.groupMetadata) == null ? void 0 : D.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
			}) : null;
			b = q != null && W ? u.jsx(r("WAWebTeeLockNameRow.react"), { children: q }) : q;
			var U;
			i[22] !== l ? (U = o("WAWebMsgSelectors").showForwarded(l) ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
				msg: l.unsafe(),
				xstyle: l.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && d.forwardedIndicator
			}) : null, i[22] = l, i[23] = U) : U = i[23], E = U;
			var V;
			i[24] !== l ? (V = u.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), { msg: l }), i[24] = l, i[25] = V) : V = i[25], I = V;
			var H;
			if (i[26] !== l ? (H = u.jsx(r("WAWebMessageDisclaimerText.react"), { msg: l }), i[26] = l, i[27] = H) : H = i[27], S = H, k = null, o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
				isAGMShown: (x = l.ctwaContext) == null ? void 0 : x.automatedGreetingMessageShown,
				msgSource: ($ = l.ctwaContext) == null ? void 0 : $.sourceApp,
				msgType: l.type
			})) k = null;
			else if (y === !0 && (h === o("WAWebMsgType").MSG_TYPE.CHAT || o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(l.unsafe()))) {
				var G;
				i[28] === Symbol.for("react.memo_cache_sentinel") ? (G = u.jsx(r("WAWebMessageBubbleTypingIndicator.react"), { isBotMsgStreaming: !0 }), i[28] = G) : G = i[28], k = G;
			} else t.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY && t.hideMeta !== !0 && (k = o("WAWebMsgGetters").getIsSentByMe(O) && N != null && o("WAWebChatGetters").getIsBroadcast(N) ? u.jsx(r("WAWebBroadcastMeta.react"), {
				displayType: t.displayType,
				isRTL: P,
				msg: l
			}) : u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.meta, o("WAWebMsgGetters").getIsPSA(l) && o("WDSMargins.stylex").wdsMargins.marginTop4, P && d.metaForRTLMsg, o("WAWebBotGating").showBotSearchPlugin(l.unsafe()) && d.metaAi, A && d.metaForImagineUR), { children: u.jsx(o("WAWebMessageMeta.react").Meta, {
				msg: l,
				displayType: t.displayType
			}) })));
			i[1] = y, i[2] = l, i[3] = t.authorRole, i[4] = t.displayAuthor, i[5] = t.displayType, i[6] = t.hideMeta, i[7] = t.theme, i[8] = t.useFixedWidth, i[9] = t.xstyle, i[10] = g, i[11] = f, i[12] = h, i[13] = C, i[14] = b, i[15] = v, i[16] = S, i[17] = R, i[18] = L, i[19] = E, i[20] = k, i[21] = I;
		} else b = i[14], v = i[15], S = i[16], R = i[17], L = i[18], E = i[19], k = i[20], I = i[21];
		var z;
		i[29] === Symbol.for("react.memo_cache_sentinel") ? (z = r("WAWebEnvironment").isWindows && { onDragStart: p }, i[29] = z) : z = i[29];
		var j = (n = t.ariaLabel) != null ? n : void 0, K = (a = t.testid) != null ? a : void 0, Q;
		i[30] !== b || i[31] !== v ? (Q = b != null && v != null ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v), { children: b })) : b, i[30] = b, i[31] = v, i[32] = Q) : Q = i[32];
		var X;
		return i[33] !== S || i[34] !== R || i[35] !== L || i[36] !== E || i[37] !== k || i[38] !== I || i[39] !== t.children || i[40] !== j || i[41] !== K || i[42] !== Q ? (X = u.jsxs("div", babelHelpers.extends({}, z, {
			"aria-label": j,
			className: R,
			style: L,
			"data-testid": K,
			children: [
				Q,
				E,
				S,
				I,
				t.children,
				k
			]
		})), i[33] = S, i[34] = R, i[35] = L, i[36] = E, i[37] = k, i[38] = I, i[39] = t.children, i[40] = j, i[41] = K, i[42] = Q, i[43] = X) : X = i[43], X;
	}
	function p(e) {
		return e.preventDefault(), !1;
	}
	l.default = m;
}), 98);
