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
		var n, a, i, l, s, m, p, _ = t.msg, f = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
			(p = o("WAWebMsgGetters")).getIsGroupMsg,
			p.getIsPSA,
			p.getIsSentByMe,
			o("WAWebFrontendMsgGetters").getSenderObj,
			p.getSender,
			p.getType,
			p.getActiveBotMsgStreamingInProgress,
			p.getUnifiedResponse
		]), g = f[0], h = f[1], y = f[2], C = f[3], b = f[4], v = f[5], S = f[6], R = f[7], L = r("WAWebL10N").isRTL(), E = o("WAWebFrontendMsgGetters").getChat(_.unsafe()), k = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(E), I = o("WAWebDisplayType").isWideDisplay(t.displayType), T = o("WAWebUnifiedResponseUtils").isImagineResponse(R), D, x = null;
		T ? D = d.imagineUR : v === o("WAWebMsgType").MSG_TYPE.POLL_CREATION || v === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT ? D = d.pollCreation : v === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION ? D = [
			c.paddingInline3,
			c.paddingTop3,
			o("WDSPaddings.stylex").wdsPaddings.paddingBottom8
		] : v === o("WAWebMsgType").MSG_TYPE.STICKER_PACK ? D = o("WDSPaddings.stylex").wdsPaddings.padding0 : v === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE ? (D = o("WDSPaddings.stylex").wdsPaddings.padding0, x = d.sharableEventInviteAuthor) : k ? D = d.elevatedPushNames : D = d.regular;
		var $ = _.unsafe(), P = $.botGroupParticipant, N = b != null && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(b) && (o("WAWebChatGroupUtils").isAIGroupTee(E) || P != null && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(P)), M = (e || (e = r("stylex")))(d.bubble, o("WAWebMsgGetters").getIsPSA(_) && d.isPSA, t.theme === "portrait" && !I && d.portrait, t.theme === "landscape" && !I && d.landscape, I && d.announcement, t.useFixedWidth === !0 && !T && d.fixedWidth, D, t.xstyle), w = T ? {
			width: o("WAWebMessageCropping").IMAGINE_UR_WIDTH,
			maxWidth: "100%"
		} : void 0, A = t.displayAuthor ? u.jsx(r("WAWebMessageAuthor.react"), {
			role: t.authorRole,
			msg: _,
			contact: C,
			displayType: t.displayType,
			disableClick: ((n = _.author) == null ? void 0 : n.isLid()) && ((a = E.groupMetadata) == null ? void 0 : a.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
		}) : null, F = A != null && N ? u.jsx(r("WAWebTeeLockNameRow.react"), { children: A }) : A, O = o("WAWebMsgSelectors").showForwarded(_) ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
			msg: _.unsafe(),
			xstyle: _.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && d.forwardedIndicator
		}) : null, B = u.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), { msg: _ }), W = u.jsx(r("WAWebMessageDisclaimerText.react"), { msg: _ }), q = null;
		return o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
			isAGMShown: (i = _.ctwaContext) == null ? void 0 : i.automatedGreetingMessageShown,
			msgSource: (l = _.ctwaContext) == null ? void 0 : l.sourceApp,
			msgType: _.type
		}) ? q = null : S === !0 && (v === o("WAWebMsgType").MSG_TYPE.CHAT || o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(_.unsafe())) ? q = u.jsx(r("WAWebMessageBubbleTypingIndicator.react"), { isBotMsgStreaming: !0 }) : t.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY && t.hideMeta !== !0 && (q = o("WAWebMsgGetters").getIsSentByMe($) && E != null && o("WAWebChatGetters").getIsBroadcast(E) ? u.jsx(r("WAWebBroadcastMeta.react"), {
			displayType: t.displayType,
			isRTL: L,
			msg: _
		}) : u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.meta, o("WAWebMsgGetters").getIsPSA(_) && o("WDSMargins.stylex").wdsMargins.marginTop4, L && d.metaForRTLMsg, o("WAWebBotGating").showBotSearchPlugin(_.unsafe()) && d.metaAi, T && d.metaForImagineUR), { children: u.jsx(o("WAWebMessageMeta.react").Meta, {
			msg: _,
			displayType: t.displayType
		}) }))), u.jsxs("div", babelHelpers.extends({}, r("WAWebEnvironment").isWindows && { onDragStart: function(t) {
			return t.preventDefault(), !1;
		} }, {
			"aria-label": (s = t.ariaLabel) != null ? s : void 0,
			className: M,
			style: w,
			"data-testid": (m = t.testid) != null ? m : void 0,
			children: [
				F != null && x != null ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(x), { children: F })) : F,
				O,
				W,
				B,
				t.children,
				q
			]
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
