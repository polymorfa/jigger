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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = p(null), l = p(null), u = a.displayType, d = a.isGroupedSticker, f = d === void 0 ? !1 : d, g = a.msg, h = a.msgContent, y = o("useWAWebMsgValues").useMsgValues(a.msg.id, [
			o("WAWebMsgGetters").getId,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getIsGroupMsg,
			o("WAWebFrontendMsgGetters").getSenderObj,
			o("WAWebMsgGetters").getHasReaction,
			o("WAWebFrontendMsgGetters").getIsTransparentMsg,
			o("WAWebFrontendMsgGetters").getIsTransparentMsgEmoji,
			o("WAWebMsgGetters").getIsGroupHistoryMessageInOwnChat
		]), C = y[0], b = y[1], v = y[2], S = y[3], R = y[4], L = y[5], E = y[6], k = y[7];
		m(n, function() {
			return {
				getAnchorRef: function() {
					return i;
				},
				getMetaRef: function() {
					return l;
				}
			};
		});
		var I = o("useWAWebSendViewCount").useSendViewCount(g.id, {
			mediaData: a.mediaData,
			displayType: a.displayType
		}), T = o("WAWebDisplayType").isWideDisplay(u), D = !T && (a.position === o("WAWebMessagePosition").MsgPosition.FRONT || a.position === o("WAWebMessagePosition").MsgPosition.SINGLE), x = o("WAWebMsgSelectors").showForwarded(g) && !E, $ = x ? c.jsx(r("WAWebMessageForwardedIndicator.react"), { msg: g.unsafe() }) : null, P = c.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), { msg: g }), N = x ? void 0 : "center", M = x ? "end" : void 0, w = a.displayAuthor ? c.jsx("div", babelHelpers.extends({ ref: i }, (s || (s = r("stylex"))).props(L && _.authorInTransparent, L && (b ? _.authorTransparentOut : _.authorTransparentIn), L && D && _.authorIsFirstInTransparent), { children: c.jsx(r("WAWebMessageAuthor.react"), {
			msg: g,
			contact: S,
			displayType: u
		}) })) : null, A = a.displayCtwaContext === !0 ? c.jsx(r("WAWebBizCtwaContext.react"), {
			msg: g.unsafe(),
			wrapperClass: "x1198e8h x1ws5yxj xahult9 xw01apr"
		}) : null, F = x ? "x9f619 x1racca4 xahult9" : {
			0: "x9f619 x1198e8h x1ws5yxj xahult9 xw01apr",
			2: "x9f619 x1198e8h x1ws5yxj xahult9 xw01apr xdduh5l",
			1: "x9f619 x1ws5yxj xahult9 xw01apr x1ok221b",
			3: "x9f619 x1ws5yxj xahult9 xw01apr xdduh5l x1ok221b"
		}[!T << 1 | !!a.displayAuthor << 0], O = a.quotedMsg ? c.jsx("div", {
			className: F,
			children: a.quotedMsg
		}) : null, B = (s || (s = r("stylex")))(_.bubbleZIndex, (x || !L) && _.wrapper, a.bubbleStyle, !x && _.bubble, L && _.isTransparent, T && !f && _.announcement), W = s(!L && _.bodyInBubble, L && _.bodyInTransparent, L && T && _.announcementBodyInTransparent, L && T && _.wideBodyInTransparent, L && E && _.bodyTransparentBackgroundEmoji, L && a.displayAuthor && _.bodyHasAuthorInTransparent), q = o("WAWebMsgCollection").MsgCollection.get(C), U = null;
		L && (u === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION || T) && q != null && (U = c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto), { children: c.jsx(r("WAWebAddOnBubblesContainer.react"), {
			isOutgoingMsg: b,
			displayType: u,
			bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG,
			parentIds: [q.id.toString()],
			onDetailsPaneClosed: a.onDetailsPaneClosed,
			hasReaction: R
		}) })));
		var V = c.jsx(o("WAWebMessageMeta.react").MetaWrapper, {
			isSentByMe: b,
			isTransparent: L,
			displayType: u,
			ref: l,
			xstyle: k && _.groupHistoryMessage,
			children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: g })
		});
		return c.jsxs("div", {
			className: B,
			onClick: o("WAWebStopEvent").stopPropagation,
			ref: I,
			children: [
				w,
				$,
				P,
				O,
				A,
				c.jsx("div", {
					className: W,
					children: h
				}),
				L && o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(u) ? c.jsxs(o("WAWebFlex.react").FlexRow, {
					alignSelf: M,
					justifySelf: N,
					columnGap: 2,
					children: [U, V]
				}) : c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [V, U] })
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
