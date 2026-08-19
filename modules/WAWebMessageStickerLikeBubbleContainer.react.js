__d("WAWebMessageStickerLikeBubbleContainer.react", [
	"WAWebAddOnBubbleRenderUtils",
	"WAWebAddOnBubbleType",
	"WAWebAddOnBubblesContainer.react",
	"WAWebBizCtwaContext.react",
	"WAWebDisplayType",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMessageAuthor.react",
	"WAWebMessageForwardedIndicator.react",
	"WAWebMessageMeta.react",
	"WAWebMessagePaidPartnershipDisclaimerText.react",
	"WAWebMessagePosition",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebMsgSelectors",
	"WAWebStopEvent",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues",
	"useWAWebSendViewCount"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u, m = d.useImperativeHandle, p = d.useRef, _ = {
		wrapper: {
			boxSizing: "x9f619",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingTop: "x16ovd2e",
			position: "x1n2onr6",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		bubbleZIndex: {
			zIndex: "x1vjfegm",
			$$css: !0
		},
		groupHistoryMessage: {
			backgroundColor: "x1fast2d",
			$$css: !0
		},
		bubble: {
			maxWidth: "x13nahy2",
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "xrw5ot4",
			paddingBottom: "xg8j3zb",
			paddingInlineStart: "x7coems",
			position: "x1n2onr6",
			$$css: !0
		},
		isTransparent: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			marginBottom: "xat24cr",
			$$css: !0
		},
		bodyInBubble: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		bodyInTransparent: {
			position: "x1n2onr6",
			display: "x1rg5ohu",
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x11lfxj5",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x7coems",
			$$css: !0
		},
		bodyTransparentBackgroundEmoji: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		announcementBodyInTransparent: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		wideBodyInTransparent: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		authorInTransparent: {
			paddingTop: "x1iorvi4",
			paddingInlineEnd: "x1bjonze",
			paddingBottom: "xg8j3zb",
			paddingInlineStart: "x7coems",
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			boxShadow: "x1lpesih",
			$$css: !0
		},
		authorTransparentIn: {
			backgroundColor: "x1ew7x2d",
			$$css: !0
		},
		authorTransparentOut: {
			backgroundColor: "x1g5lz36",
			$$css: !0
		},
		bodyHasAuthorInTransparent: {
			paddingTop: "x123j3cw",
			$$css: !0
		},
		authorIsFirstInTransparent: {
			borderStartStartRadius: "x1bczwif",
			$$css: !0
		},
		announcement: {
			width: "x1yuel0x",
			maxWidth: "x193iq5w",
			$$css: !0
		}
	};
	function f(t) {
		var n = o("react-compiler-runtime").c(93), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = p(null), u = p(null), d = a, f = d.displayType, g = d.isGroupedSticker, h = d.msg, y = d.msgContent, C = g === void 0 ? !1 : g, b;
		if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
			var v;
			b = [
				(v = o("WAWebMsgGetters")).getId,
				v.getIsSentByMe,
				v.getIsGroupMsg,
				o("WAWebFrontendMsgGetters").getSenderObj,
				v.getHasReaction,
				o("WAWebFrontendMsgGetters").getIsTransparentMsg,
				o("WAWebFrontendMsgGetters").getIsTransparentMsgEmoji,
				v.getIsGroupHistoryMessageInOwnChat
			], n[3] = b;
		} else b = n[3];
		var S = o("useWAWebMsgValues").useMsgValues(a.msg.id, b), R = S[0], L = S[1], E = S[3], k = S[4], I = S[5], T = S[6], D = S[7], x;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (x = function() {
			return {
				getAnchorRef: function() {
					return l;
				},
				getMetaRef: function() {
					return u;
				}
			};
		}, n[4] = x) : x = n[4], m(i, x);
		var $;
		n[5] !== a.displayType || n[6] !== a.mediaData ? ($ = {
			mediaData: a.mediaData,
			displayType: a.displayType
		}, n[5] = a.displayType, n[6] = a.mediaData, n[7] = $) : $ = n[7];
		var P = o("useWAWebSendViewCount").useSendViewCount(h.id, $), N, M, w, A, F, O, B, W, q;
		if (n[8] !== f || n[9] !== C || n[10] !== L || n[11] !== I || n[12] !== T || n[13] !== h || n[14] !== a.bubbleStyle || n[15] !== a.displayAuthor || n[16] !== a.displayCtwaContext || n[17] !== a.position || n[18] !== a.quotedMsg || n[19] !== E) {
			F = o("WAWebDisplayType").isWideDisplay(f);
			var U = !F && (a.position === o("WAWebMessagePosition").MsgPosition.FRONT || a.position === o("WAWebMessagePosition").MsgPosition.SINGLE), V = o("WAWebMsgSelectors").showForwarded(h) && !T;
			A = V ? c.jsx(r("WAWebMessageForwardedIndicator.react"), { msg: h.unsafe() }) : null;
			var H;
			n[29] !== h ? (H = c.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), { msg: h }), n[29] = h, n[30] = H) : H = n[30], B = H, O = V ? void 0 : "center", N = V ? "end" : void 0;
			var G;
			n[31] !== f || n[32] !== U || n[33] !== L || n[34] !== I || n[35] !== h || n[36] !== a.displayAuthor || n[37] !== E ? (G = a.displayAuthor ? c.jsx("div", babelHelpers.extends({ ref: l }, (s || (s = r("stylex"))).props(I && _.authorInTransparent, I && (L ? _.authorTransparentOut : _.authorTransparentIn), I && U && _.authorIsFirstInTransparent), { children: c.jsx(r("WAWebMessageAuthor.react"), {
				msg: h,
				contact: E,
				displayType: f
			}) })) : null, n[31] = f, n[32] = U, n[33] = L, n[34] = I, n[35] = h, n[36] = a.displayAuthor, n[37] = E, n[38] = G) : G = n[38], M = G;
			var z;
			n[39] !== h || n[40] !== a.displayCtwaContext ? (z = a.displayCtwaContext === !0 ? c.jsx(r("WAWebBizCtwaContext.react"), {
				msg: h.unsafe(),
				wrapperClass: "x1198e8h x1ws5yxj xahult9 xw01apr"
			}) : null, n[39] = h, n[40] = a.displayCtwaContext, n[41] = z) : z = n[41], w = z;
			var j = V ? "x9f619 x1racca4 xahult9" : {
				0: "x9f619 x1198e8h x1ws5yxj xahult9 xw01apr",
				2: "x9f619 x1198e8h x1ws5yxj xahult9 xw01apr xdduh5l",
				1: "x9f619 x1ws5yxj xahult9 xw01apr x1ok221b",
				3: "x9f619 x1ws5yxj xahult9 xw01apr xdduh5l x1ok221b"
			}[!F << 1 | !!a.displayAuthor << 0], K;
			n[42] !== a.quotedMsg || n[43] !== j ? (K = a.quotedMsg ? c.jsx("div", {
				className: j,
				children: a.quotedMsg
			}) : null, n[42] = a.quotedMsg, n[43] = j, n[44] = K) : K = n[44], W = K, q = (s || (s = r("stylex")))(_.bubbleZIndex, (V || !I) && _.wrapper, a.bubbleStyle, !V && _.bubble, I && _.isTransparent, F && !C && _.announcement), n[8] = f, n[9] = C, n[10] = L, n[11] = I, n[12] = T, n[13] = h, n[14] = a.bubbleStyle, n[15] = a.displayAuthor, n[16] = a.displayCtwaContext, n[17] = a.position, n[18] = a.quotedMsg, n[19] = E, n[20] = N, n[21] = M, n[22] = w, n[23] = A, n[24] = F, n[25] = O, n[26] = B, n[27] = W, n[28] = q;
		} else N = n[20], M = n[21], w = n[22], A = n[23], F = n[24], O = n[25], B = n[26], W = n[27], q = n[28];
		var Q = q, X;
		n[45] !== I || n[46] !== T || n[47] !== F || n[48] !== a.displayAuthor ? (X = (s || (s = r("stylex")))(!I && _.bodyInBubble, I && _.bodyInTransparent, I && F && _.announcementBodyInTransparent, I && F && _.wideBodyInTransparent, I && T && _.bodyTransparentBackgroundEmoji, I && a.displayAuthor && _.bodyHasAuthorInTransparent), n[45] = I, n[46] = T, n[47] = F, n[48] = a.displayAuthor, n[49] = X) : X = n[49];
		var Y = X, J;
		if (n[50] !== f || n[51] !== k || n[52] !== R || n[53] !== L || n[54] !== I || n[55] !== F || n[56] !== a.onDetailsPaneClosed) {
			var Z = o("WAWebMsgCollection").MsgCollection.get(R);
			if (J = null, I && (f === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION || F) && Z != null) {
				var ee;
				n[58] === Symbol.for("react.memo_cache_sentinel") ? (ee = (s || (s = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto), n[58] = ee) : ee = n[58];
				var te = [Z.id.toString()], ne;
				n[59] !== f || n[60] !== k || n[61] !== L || n[62] !== a.onDetailsPaneClosed || n[63] !== te ? (ne = c.jsx("div", babelHelpers.extends({}, ee, { children: c.jsx(r("WAWebAddOnBubblesContainer.react"), {
					isOutgoingMsg: L,
					displayType: f,
					bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG,
					parentIds: te,
					onDetailsPaneClosed: a.onDetailsPaneClosed,
					hasReaction: k
				}) })), n[59] = f, n[60] = k, n[61] = L, n[62] = a.onDetailsPaneClosed, n[63] = te, n[64] = ne) : ne = n[64], J = ne;
			}
			n[50] = f, n[51] = k, n[52] = R, n[53] = L, n[54] = I, n[55] = F, n[56] = a.onDetailsPaneClosed, n[57] = J;
		} else J = n[57];
		var re = D && _.groupHistoryMessage, oe;
		n[65] !== h ? (oe = c.jsx(o("WAWebMessageMeta.react").Meta, { msg: h }), n[65] = h, n[66] = oe) : oe = n[66];
		var ae;
		n[67] !== f || n[68] !== L || n[69] !== I || n[70] !== re || n[71] !== oe ? (ae = c.jsx(o("WAWebMessageMeta.react").MetaWrapper, {
			isSentByMe: L,
			isTransparent: I,
			displayType: f,
			ref: u,
			xstyle: re,
			children: oe
		}), n[67] = f, n[68] = L, n[69] = I, n[70] = re, n[71] = oe, n[72] = ae) : ae = n[72];
		var ie = ae, le;
		n[73] !== Y || n[74] !== y ? (le = c.jsx("div", {
			className: Y,
			children: y
		}), n[73] = Y, n[74] = y, n[75] = le) : le = n[75];
		var se;
		n[76] !== J || n[77] !== N || n[78] !== f || n[79] !== I || n[80] !== O || n[81] !== ie ? (se = I && o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(f) ? c.jsxs(o("WAWebFlex.react").FlexRow, {
			alignSelf: N,
			justifySelf: O,
			columnGap: 2,
			children: [J, ie]
		}) : c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [ie, J] }), n[76] = J, n[77] = N, n[78] = f, n[79] = I, n[80] = O, n[81] = ie, n[82] = se) : se = n[82];
		var ue;
		return n[83] !== M || n[84] !== Q || n[85] !== w || n[86] !== A || n[87] !== B || n[88] !== W || n[89] !== P || n[90] !== le || n[91] !== se ? (ue = c.jsxs("div", {
			className: Q,
			onClick: o("WAWebStopEvent").stopPropagation,
			ref: P,
			children: [
				M,
				A,
				B,
				W,
				w,
				le,
				se
			]
		}), n[83] = M, n[84] = Q, n[85] = w, n[86] = A, n[87] = B, n[88] = W, n[89] = P, n[90] = le, n[91] = se, n[92] = ue) : ue = n[92], ue;
	}
	l.default = f;
}), 98);
