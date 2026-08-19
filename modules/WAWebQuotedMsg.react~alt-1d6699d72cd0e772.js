__d("WAWebQuotedMsg.react", [
	"fbt",
	"WAFilteredCatch",
	"WAWebBackendErrors",
	"WAWebBotGating",
	"WAWebBotUtils",
	"WAWebCatalogCollection",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebChatMessageSearch",
	"WAWebChatParticipantColor",
	"WAWebChatThemeModeContext",
	"WAWebCmd",
	"WAWebContactCollection",
	"WAWebContactUtils",
	"WAWebDisplayType",
	"WAWebDrawerManager",
	"WAWebElevatedPushNamesFlag",
	"WAWebFrontendMsgGetters",
	"WAWebIsInThreadsViewContext",
	"WAWebJumpToQuotedMsgContextStack",
	"WAWebL10N",
	"WAWebLidStatusMigrationKeyUtils",
	"WAWebLidStatusMigrationUtils",
	"WAWebMessageAuthor.react",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebNewsletterQuotedMsgUtils",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogSession",
	"WAWebProductDetailsFlowLoadable",
	"WAWebQuotedMessageUserJourneyLogger",
	"WAWebQuotedMsgContent.react",
	"WAWebQuotedMsgQuotedMedia.react",
	"WAWebQuotedMsgWrapper.react",
	"WAWebStateUtils",
	"WAWebStatusCollection",
	"WAWebStatusQuotedFlowLoadable",
	"WAWebStylesEnv",
	"WAWebThreadMsgUtils",
	"WAWebThreadsViewFocusMsgContext",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUtilsLogQplEvents",
	"WAWebWamEnumCatalogEntryPoint",
	"WAWebWamEnumStatusRowSection",
	"WAWebWidFactory",
	"isStringNullOrEmpty",
	"nullthrows",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebDefaultProfileColors",
	"useWAWebGroupColors",
	"useWAWebMsgValues",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useEffect, _ = {
		msgBody: {
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			alignItems: "x6s0dn4",
			minHeight: "xpcfgfb",
			maxHeight: "xnwavcm",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		basePadding: {
			paddingTop: "x1tiyuxx",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		macBasePadding: {
			paddingTop: "x123j3cw",
			paddingBottom: "x1ykpatu",
			$$css: !0
		},
		elevatedPushNamesPadding: {
			paddingInlineEnd: "x1uc92m",
			$$css: !0
		},
		composeBoxMsgBody: {
			maxHeight: "xpulllz",
			paddingTop: "xm7lytj",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "x1iwz3mf",
			$$css: !0
		},
		macComposeBoxMsgBody: {
			paddingTop: "x1y1aw1k",
			paddingBottom: "xdvlbce",
			$$css: !0
		},
		composeBoxElevatedPushNamesPadding: {
			paddingInlineEnd: "x1nzty39",
			$$css: !0
		},
		authorRowReverse: {
			flexDirection: "x15zctf7",
			$$css: !0
		},
		vibrantOutgoingBar: {
			backgroundColor: "x1p8t8ri",
			$$css: !0
		},
		vibrantOutgoingName: {
			color: "x17t9dm2",
			$$css: !0
		}
	};
	function f(t) {
		var n, a = t.chat, i = t.composeQuotedMsgRemoteJid, l = t.displayType, u = t.isMsgVisible, d = t.msg, f = t.onClick, h = t.rootMsg, y = t.shouldHideQuotedMsgAuthor, C = t.t, b = r("useWAWebUIM")(), v = m(r("WAWebIsInThreadsViewContext")), S = m(r("WAWebThreadsViewFocusMsgContext")), R = o("useWAWebMsgValues").useMsgValues(d.id, [o("WAWebFrontendMsgGetters").getSenderForReplyMsg, o("WAWebMsgGetters").getIsGroupStatus]), L = R[0], E = R[1], k = r("useLazyRef")(function() {
			return new (o("WAWebProductCatalogSession")).ProductCatalogSession();
		}), I = o("WAWebChatCollection").ChatCollection.get(d.author), T = o("WAWebContactCollection").ContactCollection.get(d.author), D = L, x = a;
		E && (x = I != null ? I : a, D = T != null ? T : L);
		var $ = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(x);
		p(function() {
			var e = o("WAWebFrontendMsgGetters").getAsProductInquiry(d.unsafe());
			if (e != null) {
				var t = e.businessOwnerJid, n = r("isStringNullOrEmpty")(t) ? null : o("WAWebWidFactory").createWid(t);
				n && (C != null && (e.t = C), o("WAWebCatalogCollection").CatalogCollection.addMsgAsProduct(o("WAWebStateUtils").unproxy(e.unsafe())));
			}
		}, []);
		var P = function(t) {
			var e = t.businessOwnerJid, n = r("isStringNullOrEmpty")(e) ? null : o("WAWebWidFactory").createWid(e);
			if (n) {
				var a = o("WAWebCatalogCollection").CatalogCollection.get(n);
				if (a) {
					var i = t.productId != null ? a.productCollection.get(t.productId) : null, l = t.productId != null ? a.msgProductCollection.get(t.productId) : null;
					if (!(i == null && l == null)) {
						var s = l;
						if (i != null && C != null && i.t >= C && (s = i, l != null && a.productCollection.remove(l)), s != null) {
							var u = o("WAWebProductCatalogContext").buildProductCatalogContext(k.current, o("WAWebContactUtils").getMaybeBizPlatformForLogging(t.businessOwnerJid), o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_MESSAGE);
							return o("WAWebProductCatalogLogEvents").logProductInquiryClick({
								product: o("WAWebStateUtils").unproxy(s),
								catalogContext: u
							}), o("WAWebUtilsLogQplEvents").qplStartProductView("Message"), o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
								product: s,
								chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
								refreshCarousel: !0
							}), {
								transition: "slide-left",
								uim: b,
								newDrawerContext: u
							});
						}
					}
				}
			}
		}, N = async function() {
			if (f == null || f(), !(d.unsafe().local === !0 && !d.id.fromMe)) {
				if (o("WAWebMsgGetters").getIsStatus(d)) {
					if (!h || !h.isQuotedMsgAvailable) o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					else {
						var e = o("WAWebMsgGetters").getSender(d);
						e != null && o("WAWebStatusCollection").StatusCollection.find(o("WAWebLidStatusMigrationUtils").matWidConvert(e)).then(function(e) {
							var t = function() {
								h && (h.unsafe().isQuotedMsgAvailable = !1);
							};
							o("WAWebModalManager").ModalManager.openMedia(c.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
								status: e,
								msgKey: o("WAWebLidStatusMigrationKeyUtils").matKeyConvert(d.id),
								onMsgNotFound: t,
								onClose: function() {
									return o("WAWebModalManager").ModalManager.closeMedia();
								},
								rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.QUOTED_MESSAGE_IN_CHAT
							}), { transition: "quoted-status-modal" });
						});
					}
					return;
				}
				var t = o("WAWebFrontendMsgGetters").getAsProductInquiry(d.unsafe());
				if (t != null) return P(t);
				if (h && !h.isQuotedMsgAvailable) {
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				var n = o("WAWebFrontendMsgGetters").getChat(d.unsafe()), r = await o("WAWebNewsletterQuotedMsgUtils").getMsgDetailsForSearch(d), a = r.msgInStore, i = r.quotedMsgKey;
				if (v) {
					var l, m = (l = a == null ? void 0 : a.id) != null ? l : i;
					(S == null || !S(m.id)) && o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				g({
					chat: n,
					isMsgVisible: u,
					msg: d,
					msgInStore: a,
					quotedMsgKey: i,
					rootMsg: h
				});
			}
		}, M = l != null && [
			o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
			o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
			o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
			o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS
		].includes(l), w = i || (h == null ? void 0 : h.quotedRemoteJid), A = o("WAWebMsgGetters").getSender(d), F = o("useWAWebDefaultProfileColors").isDefaultProfileColorsEnabledForWid(A) ? 1 : o("WAWebChatParticipantColor").getAssignedColor(x, A, "WAWebQuotedMsg-" + ((n = o("WAWebQuotedMessageUserJourneyLogger").getChatType(a.id)) != null ? n : "")), O = o("useWAWebGroupColors").useGroupsColorStyle(F, "background"), B = o("useWAWebDefaultProfileColors").useDefaultProfileColors(A), W = B.accent, q = m(r("WAWebChatThemeModeContext")), U = q.isVibrant, V = U && h != null && h.id.fromMe, H = V ? _.vibrantOutgoingBar : W != null ? W : O, G = y === !0 || o("WAWebBotUtils").isMetaAiBot(a.id) && !(o("WAWebBotUtils").isMetaAiBot(d.from) || o("WAWebBotUtils").isMetaAiBot(d.to)), z = G === !0 ? null : c.jsx(r("WAWebMessageAuthor.react"), {
			msg: d,
			contact: D != null ? D : L,
			chat: x,
			quotedRemoteJid: w,
			disableClick: !0,
			showMemberLabel: !1,
			senderNameColorOverride: V ? _.vibrantOutgoingName : void 0,
			rootXstyle: r("WAWebL10N").isRTL() && t.theme === "composeBox" && $ ? _.authorRowReverse : void 0
		}), j = t.theme, K = (e || (e = r("stylex")))(_.msgBody, j === "composeBox" ? _.composeBoxMsgBody : _.basePadding, j === "composeBox" ? o("WAWebStylesEnv").isOSMac && _.macComposeBoxMsgBody : o("WAWebStylesEnv").isOSMac && _.macBasePadding, $ && (j === "composeBox" ? _.composeBoxElevatedPushNamesPadding : _.elevatedPushNamesPadding)), Q = "x1iyjqo2 x6ikm8r x10wlt62 x193iq5w", X = c.jsxs("div", {
			className: Q,
			children: [z, c.jsx(r("WAWebQuotedMsgContent.react"), {
				msg: d,
				rootMsg: h,
				theme: t.theme
			})]
		}), Y = l === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ? "starred" : t.theme;
		return c.jsxs(r("WAWebQuotedMsgWrapper.react"), {
			authorBackgroundStyle: H,
			theme: t.theme,
			handleClick: N,
			clickable: M,
			rootMsg: h,
			children: [c.jsx("div", {
				className: K,
				dir: M ? null : o("WAWebFrontendMsgGetters").getDir(d),
				children: X
			}), c.jsx(o("WAWebQuotedMsgQuotedMedia.react").QuotedMediaUnsafe, {
				rootMsg: h != null ? h.unsafe() : null,
				msg: d.unsafe(),
				theme: Y
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t, n = e.chat, a = e.isMsgVisible, i = e.msg, l = e.msgInStore, s = e.quotedMsgKey, u = e.rootMsg, c;
		if (n.id.isBot() && o("WAWebBotGating").isAiChatThreadsEnabled() && (c = o("WAWebThreadMsgUtils").getMsgAiThread(i.unsafe()), c == null)) {
			var d, m = ((d = l == null ? void 0 : l.id) != null ? d : s).remote;
			u != null && m.equals(n.id) && (c = o("WAWebThreadMsgUtils").getMsgAiThread(u.unsafe()));
		}
		var p = o("WAWebChatMessageSearch").getSearchContext({
			chat: n,
			msgKey: (t = l == null ? void 0 : l.id) != null ? t : s,
			rootMsg: u == null ? void 0 : u.unsafe(),
			threadId: c
		});
		p && (p.slideToMsg = !0);
		var _ = u != null && u.selectedCarouselCardIndex != null;
		_ && (p.highlightMsg = !1);
		var f = u != null ? o("WAWebFrontendMsgGetters").getChat(u.unsafe()) : null;
		f != null && o("WAWebBotUtils").isMetaAiBot(f.id) && c == null && o("WAWebBotGating").isAiChatThreadsEnabled() && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
		var g = o("WAWebCmd").Cmd.openChatAt({
			chat: n,
			chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.QuotedMessage,
			msgContext: p,
			onSuccess: {
				mediaMsgToOpenInMediaViewer: o("WAWebMsgCollection").MsgCollection.get(s),
				onScrollToQuotedCarouselCard: _ ? h(s, r("nullthrows")(u == null ? void 0 : u.selectedCarouselCardIndex), a) : void 0
			},
			threadId: c != null ? c : void 0
		});
		if (o("WAWebJumpToQuotedMsgContextStack").isJumpBackToQuotedMsgContextEnabled() && u != null && u.id.remote.equals(n.id)) {
			var y = u.id;
			g.then(function(e) {
				e && o("WAWebJumpToQuotedMsgContextStack").JumpToQuotedMsgContextStack.push(n.id, y);
			});
		}
		l || p.collection.loadAroundPromise.catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, function() {
			var e = u == null ? void 0 : u.unsafe(), t = e != null ? o("WAWebFrontendMsgGetters").getChat(e) : null;
			e == null || t == null || o("WAWebCmd").Cmd.openChatAt({
				chat: t,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.QuotedMessage,
				msgContext: o("WAWebChatMessageSearch").getSearchContext({
					chat: t,
					msgKey: e.id,
					threadId: c
				}),
				threadId: c != null ? c : void 0
			});
		}));
	}
	function h(e, t, n) {
		if (n != null) {
			var r = n(e);
			if (!(r == null || typeof r != "object" || r.scrollToCard == null)) {
				var o = r.scrollToCard;
				o(t);
			}
		}
	}
	l.default = f;
}), 226);
