__d("WAWebMessageMeta.react", [
	"fbt",
	"WAWebABPropsSaga",
	"WAWebAddOnBubbleRenderUtils",
	"WAWebBizCtwaAGMUtils",
	"WAWebBotBaseGating",
	"WAWebBotGating",
	"WAWebBotPluginMsgBubbleMeta.react",
	"WAWebBotTypes",
	"WAWebBroadcastDeliveringLabel.react",
	"WAWebBroadcastDeliveringLabelView.react",
	"WAWebChatGetters",
	"WAWebClock",
	"WAWebCmd",
	"WAWebContactGetters",
	"WAWebDisplayType",
	"WAWebFlex.react",
	"WAWebFollowUpReplyIcon.react",
	"WAWebFrontendMsgGetters",
	"WAWebKeepInChatIcon.react",
	"WAWebLidMigrationUtils",
	"WAWebMessageAIContentLabel.react",
	"WAWebMessageStatus",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebMsgViewCount",
	"WAWebNewsletterGatingUtils",
	"WAWebPinnedSmallIcon.react",
	"WAWebPremiumChannelFilledIcon.react",
	"WAWebQuotedMsgUtils",
	"WAWebSagaMessageMarker.react",
	"WAWebStarIcon.react",
	"WAWebStateUtils",
	"WAWebTextSizeUtils",
	"WAWebThreadMsgUtils",
	"WAWebThreadsGating",
	"WAWebUA",
	"WAWebWid",
	"WDSIconIcCampaignMegaphone.react",
	"WDSIconIcVisibilityOn.react",
	"WDSIconWdsIcAiFilled.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSText.react",
	"WDSTextContainer.react",
	"isStringNullOrEmpty",
	"react",
	"stylex",
	"useWAWebCanOpenInfoDrawer",
	"useWAWebContactValues",
	"useWAWebListener",
	"useWAWebMsgValues",
	"useWAWebShouldShowMsgPinnedIcon"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		paddingBlock3: {
			paddingTop: "xyqdw3p",
			paddingBottom: "xg8j3zb",
			$$css: !0
		},
		paddingInlineStart6: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		paddingInlineEnd7: {
			paddingInlineEnd: "x1bjonze",
			$$css: !0
		},
		paddingBlock5: {
			paddingTop: "x123j3cw",
			paddingBottom: "xs9asl8",
			$$css: !0
		}
	}, p = {
		chromeFix: {
			lineHeight: "xuy8w9f",
			$$css: !0
		},
		bullet: {
			display: "x78zum5",
			$$css: !0
		},
		editedLabel: {
			marginInlineEnd: "x2fvf9",
			marginInlineStart: "xwklpps",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.light;
		return c.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: [p.bullet, o("WDSMargins.stylex").wdsMargins.marginHor4],
			justify: "center",
			children: c.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: t === !0 ? "persistentAlwaysWhite" : "contentDeemphasized",
				children: "•"
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t, n, a, i, l, u = e.agmTag, m = e.associatedMessages, _ = e.displayType, f = e.isAlbum, g = e.isDelivering, C = e.msg, S = e.theme, R = e.xstyle, L = o("useWAWebMsgValues").useMsgValues(C.id, [
			(l = o("WAWebMsgGetters")).getBroadcast,
			l.getCaption,
			l.getIsLive,
			o("WAWebFrontendMsgGetters").getAsRevoked,
			l.getIsSentByMe,
			l.getIsViewOnce,
			l.getLoc,
			l.getStar,
			l.getT,
			l.getType,
			l.getSubtype,
			l.getIsSendFailure,
			l.getIsKept,
			l.getIsEdited,
			l.getIsBotResponse,
			l.getIsBizBot1pResponse,
			l.getBotPluginSearchQuery,
			l.getIsWamoSub
		]), E = L[0], k = L[1], I = L[2], T = L[3], D = L[4], x = L[5], $ = L[6], P = L[7], N = L[8], M = L[9], w = L[10], A = L[11], F = L[12], O = L[13], B = L[14], W = L[15], q = L[16], U = L[17], V = o("WAWebMsgViewCount").useWAWebLocalizedViewCount(C.id), H = r("useWAWebShouldShowMsgPinnedIcon")(C.unsafe()), G = o("WAWebMessageAIContentLabel.react").useShouldShowAiContentLabel(C, m) && !T, z = d(!1), j = z[0], K = z[1];
		o("useWAWebListener").useListener(o("WAWebClock").Clock, o("WAWebClock").HOUR24_FORMAT_CHANGE_EVENT, function() {
			K(!j);
		});
		var Q = function() {
			o("WAWebCmd").Cmd.msgInfoDrawer(o("WAWebStateUtils").unproxy(C.unsafe()));
		}, X = [], Y = (M === o("WAWebMsgType").MSG_TYPE.IMAGE || M === o("WAWebMsgType").MSG_TYPE.VIDEO) && r("isStringNullOrEmpty")(k) && !x || M === o("WAWebMsgType").MSG_TYPE.LOCATION && !I && !$;
		P && !T && X.push(c.jsx(o("WAWebStarIcon.react").StarIcon, { "aria-label": " " + s._(
			/*BTDS*/
			""
		).toString() + " " })), F && !T && X.push(c.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, {
			width: 15.64,
			height: 14.67,
			"aria-label": " " + s._(
				/*BTDS*/
				""
			).toString() + " "
		})), E && C.type !== o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE && X.push(c.jsx(r("WDSIconIcCampaignMegaphone.react"), {
			height: 15,
			width: 16
		})), H && !T && X.push(c.jsx(o("WAWebPinnedSmallIcon.react").PinnedSmallIcon, {
			width: 15,
			"aria-label": " " + s._(
				/*BTDS*/
				""
			).toString() + " "
		}));
		var J = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(C);
		J != null && o("WAWebQuotedMsgUtils").getMessagesCountByThreadId(J) >= 2 && o("WAWebThreadsGating").isFollowUpReplyEnabled() && X.push(c.jsx(o("WAWebFollowUpReplyIcon.react").FollowUpReplyIcon, { width: 15 }));
		var Z = D && !T, ee = null;
		Z && _ !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS && (ee = c.jsx(r("WAWebMessageStatus"), {
			msg: C.unsafe(),
			associatedMessages: m
		})), (M === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT && w === "fanout" || A === !0) && (ee = null);
		var te = o("WAWebFrontendMsgGetters").getChat(C.unsafe()), ne = o("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(te == null || (t = te.newsletterMetadata) == null ? void 0 : t.membershipType) && f !== !0 && V != null && _ !== o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && C.type !== o("WAWebMsgType").MSG_TYPE.REVOKED ? c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [o("WAWebNewsletterGatingUtils").isNewsletterViewsVPVDefinitionEnabled() && c.jsx("div", babelHelpers.extends({}, {
				0: { className: "xhslqc4 x78zum5 x6s0dn4 x14ju556 x7g7pl8" },
				1: { className: "x78zum5 x6s0dn4 x14ju556 x7g7pl8 x17t9dm2" }
			}[(Y === !0) << 0], { children: c.jsx(r("WDSIconIcVisibilityOn.react"), {
				width: 12,
				height: 12
			}) })), c.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: Y ? "persistentAlwaysWhite" : "contentDeemphasized",
				children: c.jsx("span", {
					"data-testid": "view-count",
					children: V
				})
			})]
		}) : null, re;
		if (O && !T && !B) {
			var oe = y();
			re = c.jsx(r("WDSText.react"), {
				type: "Body3",
				xstyle: p.editedLabel,
				colorName: Y ? "persistentAlwaysWhite" : "contentDeemphasized",
				children: oe
			});
		}
		var ae = G ? c.jsx(o("WAWebMessageAIContentLabel.react").WAWebMessageAIContentLabel, {
			msg: C,
			associatedMessages: m,
			color: Y ? "light" : "secondary"
		}) : null, ie, le = b(C), se = v(C);
		r("WAWebWid").isCAPISupportAccount(C == null || (n = C.id) == null ? void 0 : n.remote) && se != null && o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled() ? (ie = c.jsx("span", {
			className: "x2fvf9 xwklpps",
			"data-testid": "ai-label",
			children: se
		}), X.push(c.jsx(r("WDSIconWdsIcAiFilled.react"), {
			width: 14,
			height: 14
		}))) : le != null && (ie = c.jsx("span", {
			className: "x2fvf9 xwklpps",
			"data-testid": "ai-label",
			children: le
		}), X.push(c.jsx(r("WDSIconWdsIcAiFilled.react"), {
			width: 14,
			height: 14
		})));
		var ue;
		o("WAWebBotGating").showBotSearchPlugin(C.unsafe()) && (ue = c.jsx(r("WAWebBotPluginMsgBubbleMeta.react"), {
			t: N,
			botPluginSearchQuery: q,
			botPluginSearchUrl: o("WAWebMsgGetters").getBotPluginSearchUrl(C),
			botPluginSearchProvider: o("WAWebMsgGetters").getBotPluginSearchProvider(C)
		}));
		var ce;
		le == null && o("WAWebMsgGetters").getIsCAPISupport(C) && W && o("WAWebABPropsSaga").getIsSagaV1Enabled() && (ce = c.jsx(r("WAWebSagaMessageMarker.react"), {
			width: 11,
			height: 11,
			marginRight: !0
		}));
		var de = U === !0 && o("WAWebNewsletterGatingUtils").isWamoSubMessagesSupported() ? c.jsx(o("WAWebPremiumChannelFilledIcon.react").PremiumChannelFilledIcon, {
			width: 11,
			height: 11
		}) : null, me = r("useWAWebCanOpenInfoDrawer")(C.id), pe = me && _ !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING && _ !== o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO && _ !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS, _e;
		N && (S !== "date" ? _e = o("WAWebClock").Clock.timestampStr(N) : _e = o("WAWebClock").Clock.relativeStr(N)), _e != null && o("WAWebLidMigrationUtils").getShouldShowLidDebugUIForMsg(C) && (_e = _e.toString() + " [LID]");
		var fe = c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: Y ? "persistentAlwaysWhite" : "contentDeemphasized",
			children: _e
		}), ge;
		u != null && o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
			isAGMShown: (a = C.ctwaContext) == null ? void 0 : a.automatedGreetingMessageShown,
			msgSource: (i = C.ctwaContext) == null ? void 0 : i.sourceApp,
			msgSubtype: C.subtype,
			msgType: C.type
		}) ? (ge = c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: Y ? "persistentAlwaysWhite" : "contentDeemphasized",
			children: u
		}), ee = null) : M === o("WAWebMsgType").MSG_TYPE.CALL_LOG && (ee = null);
		var he;
		Z && te != null && o("WAWebChatGetters").getIsBroadcast(te) && (he = g != null ? c.jsx(r("WAWebBroadcastDeliveringLabelView.react"), {
			isDelivering: g,
			light: Y
		}) : c.jsx(r("WAWebBroadcastDeliveringLabel.react"), {
			light: Y,
			msg: C.unsafe()
		}));
		var ye = c.jsxs(r("WDSTextContainer.react"), { children: [
			re,
			ce,
			ie,
			ue,
			he,
			ue == null && ge == null && fe,
			ge
		] });
		return c.jsx(h, {
			icons: X,
			aiContentLabel: ae,
			premiumMessageMarker: de,
			light: Y,
			viewCount: ne,
			includeBotSearchPluginDetailToggleEl: ue != null,
			onClick: pe ? Q : null,
			status: ee,
			xstyle: R,
			children: ye
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = {
		meta: {
			color: "x1bvqhpb",
			fontSize: "x1ncwhqj",
			height: "xx3o462",
			lineHeight: "x152skdk",
			whiteSpace: "xuxw1ft",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		metaLight: {
			color: "x17t9dm2",
			$$css: !0
		},
		botPlugin: {
			height: "x5yr21d",
			$$css: !0
		}
	};
	function h(t) {
		var n = t.aiContentLabel, a = t.children, i = t.icons, l = t.includeBotSearchPluginDetailToggleEl, s = t.light, u = t.onClick, d = t.premiumMessageMarker, m = t.status, f = t.viewCount, h = t.xstyle, y = i && i.length > 0 ? i.map(function(e, t) {
			return c.createElement("div", babelHelpers.extends({}, {
				0: { className: "xhslqc4 x1rg5ohu x16q7b9a" },
				1: { className: "x1rg5ohu x16q7b9a x17t9dm2" }
			}[(s === !0) << 0], { key: "icon-" + t }), e);
		}) : null, C = d ? c.jsx("div", babelHelpers.extends({}, {
			0: { className: "xhslqc4 x1rg5ohu x7phf20" },
			1: { className: "x1rg5ohu x7phf20 x17t9dm2" }
		}[(s === !0) << 0], {
			"data-testid": "premium-message",
			children: d
		})) : null, b = m ? c.jsx("div", {
			className: "xhslqc4 x1rg5ohu x7phf20",
			children: m
		}) : null, v = n != null ? c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [n, c.jsx(_, { light: s })]
		}) : null, S = f != null ? c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [f, c.jsx(_, { light: s })]
		}) : null, R = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().metaTextStyles, L = (e || (e = r("stylex")))(g.meta, s === !0 && g.metaLight, o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC && o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.CHROME && o("WAWebUA").UA.osVersion.includes("10.15") && p.chromeFix, l && g.botPlugin, R, h);
		return c.jsxs("div", {
			className: L,
			"data-testid": "msg-meta",
			onClick: u,
			role: u ? "button" : null,
			children: [
				y,
				v,
				S,
				c.jsx("span", babelHelpers.extends({}, {
					0: { className: "x1rg5ohu x16dsc37" },
					1: { className: "x1rg5ohu x1qughib xh8yej3" }
				}[(l === !0) << 0], {
					dir: "auto",
					children: a
				})),
				C,
				b
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		return s._(
			/*BTDS*/
			""
		);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		return s._(
			/*BTDS*/
			""
		);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t, n = o("useWAWebMsgValues").useMsgValues(e.id, [
			o("WAWebFrontendMsgGetters").getAsRevoked,
			o("WAWebMsgGetters").getIsBizBot1pResponse,
			o("WAWebMsgGetters").getBizBotType
		]), r = n[0], a = n[1], i = n[2], l = (t = o("useWAWebContactValues").useOptionalContactValues(e.to, [o("WAWebContactGetters").getBusinessProfile])) != null ? t : [], u = l[0];
		if (!o("WAWebBotBaseGating").isBizBot1pEnabled() || r) return null;
		var c = e.id.fromMe && i === o("WAWebBotTypes").BizBotType.BIZ_1P && !(u != null && u.automatedType);
		return !a && !c ? null : s._(
			/*BTDS*/
			""
		);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = o("useWAWebMsgValues").useMsgValues(e.id, [o("WAWebMsgGetters").getIsSupportAIMessage, o("WAWebMsgGetters").getBizBotType]), n = t[0], r = t[1], a = !1;
		return r === o("WAWebBotTypes").BizBotType.BIZ_1P && (a = !0), n != null && (a = n), a === !0 ? s._(
			/*BTDS*/
			""
		) : null;
	}
	var S = {
		authorIsMe: {
			backgroundColor: "x1g5lz36",
			$$css: !0
		},
		authorIsNotMe: {
			backgroundColor: "x1ew7x2d",
			$$css: !0
		},
		transparentStyles: {
			width: "xeq5yr9",
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			boxShadow: "x1lpesih",
			$$css: !0
		},
		fiftyBorderRadius: {
			borderStartStartRadius: "xal68kn",
			borderStartEndRadius: "x51dqfy",
			borderEndEndRadius: "x1w4cqa3",
			borderEndStartRadius: "x1byqp33",
			$$css: !0
		}
	};
	function R(t) {
		var n = t.children, a = t.displayType, i = t.isSentByMe, l = t.isTransparent, s = t.ref, u = t.xstyle, d = [
			m.paddingBlock3,
			m.paddingInlineStart6,
			m.paddingInlineEnd7,
			S.transparentStyles
		], p = [
			m.paddingBlock5,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
			S.fiftyBorderRadius
		];
		return c.jsx("div", babelHelpers.extends({ ref: s }, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto, l && (i ? S.authorIsMe : S.authorIsNotMe), l && d, l && o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(a) && p, u), { children: n }));
	}
	R.displayName = R.name + " [from " + i.id + "]";
	var L = R;
	l.MetaBullet = _, l.Meta = f, l.getEditedLabel = y, l.getAGMTag = C, l.useBizBot1pLabel = b, l.MetaWrapper = L;
}), 226);
