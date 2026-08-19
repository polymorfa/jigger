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
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.ariaLabel, u = i.contextOwnerIsKeyboardFocused, d = u === void 0 ? !1 : u, y = i.hasAuthor, C = i.isGroupedSticker, b = i.isMenuOpen, S = i.msg, R = i.onToggle, L = i.role, E = i.tabIndex, k = _(null), I = _(null), T = m(o("WAWebThemeContext").ThemeContext), D = o("WAWebThemeContext").useIsDarkTheme(), x = o("useWAWebMsgValues").useMsgValues(i.msg.id, [
			o("WAWebMsgGetters").getAck,
			o("WAWebMsgGetters").getLinkPreview,
			o("WAWebMsgGetters").getMatchedText,
			o("WAWebMsgGetters").getCtwaContext,
			o("WAWebFrontendMsgGetters").getDir,
			o("WAWebFrontendMsgGetters").getRtl,
			o("WAWebMsgGetters").getIsMedia,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getIsGroupMsg,
			o("WAWebMsgGetters").getIsNewsletterMsg,
			o("WAWebMsgGetters").getIsViewOnce,
			o("WAWebMsgGetters").getInteractiveHeader,
			o("WAWebMsgGetters").getType,
			o("WAWebMsgGetters").getQuotedMsg,
			o("WAWebMsgGetters").getBody,
			o("WAWebMsgGetters").getQuotedRemoteJid,
			o("WAWebMsgGetters").getRichPreviewType,
			o("WAWebMsgGetters").getDoNotPlayInline,
			o("WAWebMsgGetters").getNewsletterAdminInviteInfo
		]), $ = x[0], P = x[1], N = x[2], M = x[3], w = x[4], A = x[5], F = x[6], O = x[7], B = x[8], W = x[9], q = x[10], U = x[11], V = x[12], H = x[13], G = x[14], z = x[15], j = x[16], K = x[17], Q = x[18], X = o("useWAWebMsgValues").useMsgValues(i.msg.id, [
			o("WAWebMsgGetters").getList,
			o("WAWebMsgGetters").getNativeFlowName,
			o("WAWebMsgGetters").getThumbnailDirectPath,
			o("WAWebMsgGetters").getThumbnailHeight,
			o("WAWebMsgGetters").getThumbnailWidth,
			o("WAWebFrontendMsgGetters").getText,
			o("WAWebFrontendMsgGetters").getIsTransparentMsg,
			o("WAWebFrontendMsgGetters").getIsTransparentMsgEmoji,
			o("WAWebMsgGetters").getIsGroupHistoryMessageInOwnChat,
			o("WAWebMsgGetters").getUnifiedResponse
		]), Y = X[0], J = X[1], Z = X[2], ee = X[3], te = X[4], ne = X[5], re = X[6], oe = X[7], ae = X[8], ie = X[9];
		p(a, function() {
			return {
				getContext: function() {
					return I.current;
				},
				getElement: function() {
					return k.current;
				}
			};
		});
		var le = function(t) {
			t.stopPropagation(), R(t.target);
		}, se = !!H, ue = se && !!z, ce = o("WAWebMsgSelectors").showForwarded(S), de = o("WAWebDisplayType").isWideDisplay(i.displayType), me = V === o("WAWebMsgType").MSG_TYPE.DOCUMENT || (U == null ? void 0 : U.mediaType) === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.DOCUMENT, pe = me && !G, _e = me && !r("isStringNullOrEmpty")(G), fe = V === o("WAWebMsgType").MSG_TYPE.LOCATION, ge = V === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE, he = P && o("WAWebPipIsParsableOnlineVideoUrl").isParsableOnlineVideoURL(j, N, K), ye = V === o("WAWebMsgType").MSG_TYPE.LIST && (Y == null ? void 0 : Y.listType) === o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST, Ce = Q != null, be = o("WAWebUnifiedResponseUtils").isImagineResponse(ie), ve = F || (U == null ? void 0 : U.mediaType) != null && f.includes(U.mediaType) || be, Se = M != null && M.thumbnail != null && M.thumbnailUrl != null && M.sourceUrl != null, Re = o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(M == null ? void 0 : M.sourceApp), Le = Re ? Se && (S.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE || ((n = S.ctwaContext) == null ? void 0 : n.automatedGreetingMessageShown) !== !0) : S.type !== o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && Se, Ee = _e || fe || se || ye || V === o("WAWebMsgType").MSG_TYPE.PAYMENT || he || V === o("WAWebMsgType").MSG_TYPE.PRODUCT || V === o("WAWebMsgType").MSG_TYPE.ALBUM || ge || J != null && g.includes(J) || Le || ve && !q && V !== o("WAWebMsgType").MSG_TYPE.AUDIO || q && !O && !o("WAWebViewOnceState").isViewed(S.safe()), ke = o("WAWebMsgLinks").getSuspiciousLinks(S).length > 0, Ie = V === o("WAWebMsgType").MSG_TYPE.CHAT && P && !he && !y && !ce && !ke && o("WAWebMsgModelPropUtils").isTrusted(S), Te = o("WAWebMediaLinkPreviewUtils").displayHighQualityLinkPreview(o("WAWebStateUtils").unproxy(S.unsafe())), De = Ie && !Te && !O && !se, xe = Ee && (!y || ge) && !ke && !ce && !o("WAWebAdAttributionUtils").shouldShowAdAttribution(S) || Ie && Te, $e = V === o("WAWebMsgType").MSG_TYPE.PTT && !q || V === o("WAWebMsgType").MSG_TYPE.AUDIO, Pe = V === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD && !se && !y && !ce, Ne = V === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE, Me = Ne && !y && !ce && !se, we = (Ie && !Te && O || pe || Ce) && !y && !ce && !se, Ae = v({
			msg: S,
			isGroupedSticker: C,
			isGroupMsg: B,
			isNewsletterMsg: W,
			isWide: de,
			isSentByMe: O,
			isTransparentMsg: re
		}), Fe = V === o("WAWebMsgType").MSG_TYPE.CHAT && !se && !y && !ce && !he && !o("WAWebMediaLinkPreviewUtils").displayHighQualityLinkPreview && !!w && A !== r("WAWebL10N").isRTL(), Oe = $e && r("WAWebL10N").isRTL() && !y, Be = V === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION, We = xe || De || Me, qe = Fe || Oe, Ue = pe && !y && !ce && !se, Ve = Ae;
		oe && H && (Ve = !1);
		var He;
		!d && !ue && (we ? Ie && O ? He = h.noBg : He = O ? h.contextSpecialOut : h.contextSpecialIn : V === o("WAWebMsgType").MSG_TYPE.CALL_LOG || V === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION && O ? He = h.noBg : $e && !se && !y ? (r("WAWebL10N").isRTL() && O || !r("WAWebL10N").isRTL() && !O) && (He = h.contextPttFix) : qe ? He = O ? h.contextInverseOut : h.contextInverseIn : $e ? He = h.noBg : Pe ? He = O ? h.contextMultiVcardOut : h.contextMultiVcardIn : Ae ? (!oe || !H) && (He = h.contextTransparent) : oe ? He = O ? h.noBg : h.contextIn : Be ? y ? He = h.noBg : He = O ? h.contextEventOut : h.contextEventIn : (S.isForwarded || ae) && F ? He = h.noBg : He = O ? h.contextOut : h.contextIn);
		var Ge, ze;
		if (Ae) {
			var je = r("WAWebChatPreferenceCollection").get("defaultPreference"), Ke = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(je == null ? void 0 : je.wallpaperValue, D ? "dark" : "light"), Qe = Ke.wallpaper, Xe = {
				backgroundColor: Qe,
				opacity: .9
			};
			ze = c.jsx("div", {
				className: {
					0: "x22v28t",
					1: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1fgtraw x1o0tod x10l6tqk x13vifvy xgd8bvy x1vjfegm x22v28t"
				}[!!Ve << 0],
				style: Xe
			}), Ge = o("WAWebWallpaper").invertTransparentWallpaperColors(T.theme, Qe);
		}
		var Ye = null;
		We && (Ye = r("WAWebL10N").isRTL() ? h.contextMediaRTL : h.contextMediaLTR);
		var Je = (s || (s = r("stylex")))((qe ? xe : We) ? h.contextIconMedia : h.contextIcon, qe && h.contextInverseIcon, Ve && h.contextIconInTransparent, Ae && Ge === !0 && h.contextIconInTransparentInverse, h.contextIconFocusable, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), Ze = s((!(xe || Ie) || we) && h.context, We && h.contextMedia, we && h.contextSpecial, _e && h.contextMediaDocument, We && ge && (y ? h.contextMediaSharableEventInviteWithAuthor : h.contextMediaSharableEventInvite), re && !Ae && h.contextTransparentAuthor, Ve && h.contextTransparentContainer, qe && h.contextInverse, He, Ye, ae && !We && (D ? h.groupHistoryMessageDark : h.groupHistoryMessageLight), Ue && h.contextDoc, Ae && Ge === !0 && h.contextTransparentInverseContainer), et = function(t) {
			r("WAWebKeyboardIsKeyActivation")(t) && le(t);
		}, tt = c.jsx(r("WDSIconIcExpandMore.react"), {});
		return c.jsxs("div", {
			ref: k,
			className: Ze,
			children: [c.jsx("div", {
				"data-testid": "icon-down-context",
				"data-js-context-icon": !0,
				className: Je,
				ref: I,
				onMouseDown: o("WAWebStopEvent").stopPropagation,
				tabIndex: E,
				onKeyDown: et,
				"aria-label": l,
				"aria-expanded": b,
				role: L,
				onClick: le,
				children: tt
			}), ze]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
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
