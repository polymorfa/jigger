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
	"asyncToGeneratorRuntime",
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
		var a, i = t.chat, l = t.composeQuotedMsgRemoteJid, u = t.displayType, d = t.isMsgVisible, f = t.msg, h = t.onClick, y = t.rootMsg, C = t.shouldHideQuotedMsgAuthor, b = t.t, v = r("useWAWebUIM")(), S = m(r("WAWebIsInThreadsViewContext")), R = m(r("WAWebThreadsViewFocusMsgContext")), L = o("useWAWebMsgValues").useMsgValues(f.id, [o("WAWebFrontendMsgGetters").getSenderForReplyMsg, o("WAWebMsgGetters").getIsGroupStatus]), E = L[0], k = L[1], I = r("useLazyRef")(function() {
			return new (o("WAWebProductCatalogSession")).ProductCatalogSession();
		}), T = o("WAWebChatCollection").ChatCollection.get(f.author), D = o("WAWebContactCollection").ContactCollection.get(f.author), x = E, $ = i;
		k && ($ = T != null ? T : i, x = D != null ? D : E);
		var P = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled($);
		p(function() {
			var e = o("WAWebFrontendMsgGetters").getAsProductInquiry(f.unsafe());
			if (e != null) {
				var t = e.businessOwnerJid, n = r("isStringNullOrEmpty")(t) ? null : o("WAWebWidFactory").createWid(t);
				n && (b != null && (e.t = b), o("WAWebCatalogCollection").CatalogCollection.addMsgAsProduct(o("WAWebStateUtils").unproxy(e.unsafe())));
			}
		}, []);
		var N = function(t) {
			var e = t.businessOwnerJid, n = r("isStringNullOrEmpty")(e) ? null : o("WAWebWidFactory").createWid(e);
			if (n) {
				var a = o("WAWebCatalogCollection").CatalogCollection.get(n);
				if (a) {
					var i = t.productId != null ? a.productCollection.get(t.productId) : null, l = t.productId != null ? a.msgProductCollection.get(t.productId) : null;
					if (!(i == null && l == null)) {
						var s = l;
						if (i != null && b != null && i.t >= b && (s = i, l != null && a.productCollection.remove(l)), s != null) {
							var u = o("WAWebProductCatalogContext").buildProductCatalogContext(I.current, o("WAWebContactUtils").getMaybeBizPlatformForLogging(t.businessOwnerJid), o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_MESSAGE);
							return o("WAWebProductCatalogLogEvents").logProductInquiryClick({
								product: o("WAWebStateUtils").unproxy(s),
								catalogContext: u
							}), o("WAWebUtilsLogQplEvents").qplStartProductView("Message"), o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
								product: s,
								chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
								refreshCarousel: !0
							}), {
								transition: "slide-left",
								uim: v,
								newDrawerContext: u
							});
						}
					}
				}
			}
		}, M = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (h == null || h(), !(f.unsafe().local === !0 && !f.id.fromMe)) {
					if (o("WAWebMsgGetters").getIsStatus(f)) {
						if (!y || !y.isQuotedMsgAvailable) o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
							/*BTDS*/
							""
						) }));
						else {
							var e = o("WAWebMsgGetters").getSender(f);
							e != null && o("WAWebStatusCollection").StatusCollection.find(o("WAWebLidStatusMigrationUtils").matWidConvert(e)).then(function(e) {
								var t = function() {
									y && (y.unsafe().isQuotedMsgAvailable = !1);
								};
								o("WAWebModalManager").ModalManager.openMedia(c.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
									status: e,
									msgKey: o("WAWebLidStatusMigrationKeyUtils").matKeyConvert(f.id),
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
					var t = o("WAWebFrontendMsgGetters").getAsProductInquiry(f.unsafe());
					if (t != null) return N(t);
					if (y && !y.isQuotedMsgAvailable) {
						o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
							/*BTDS*/
							""
						) }));
						return;
					}
					var n = o("WAWebFrontendMsgGetters").getChat(f.unsafe()), r = yield o("WAWebNewsletterQuotedMsgUtils").getMsgDetailsForSearch(f), a = r.msgInStore, i = r.quotedMsgKey;
					if (S) {
						var l, u = (l = a == null ? void 0 : a.id) != null ? l : i;
						(R == null || !R(u.id)) && o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
							/*BTDS*/
							""
						) }));
						return;
					}
					g({
						chat: n,
						isMsgVisible: d,
						msg: f,
						msgInStore: a,
						quotedMsgKey: i,
						rootMsg: y
					});
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), w = u != null && [
			o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
			o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
			o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
			o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS
		].includes(u), A = l || (y == null ? void 0 : y.quotedRemoteJid), F = o("WAWebMsgGetters").getSender(f), O = o("useWAWebDefaultProfileColors").isDefaultProfileColorsEnabledForWid(F) ? 1 : o("WAWebChatParticipantColor").getAssignedColor($, F, "WAWebQuotedMsg-" + ((a = o("WAWebQuotedMessageUserJourneyLogger").getChatType(i.id)) != null ? a : "")), B = o("useWAWebGroupColors").useGroupsColorStyle(O, "background"), W = o("useWAWebDefaultProfileColors").useDefaultProfileColors(F), q = W.accent, U = m(r("WAWebChatThemeModeContext")), V = U.isVibrant, H = V && y != null && y.id.fromMe, G = H ? _.vibrantOutgoingBar : q != null ? q : B, z = C === !0 || o("WAWebBotUtils").isMetaAiBot(i.id) && !(o("WAWebBotUtils").isMetaAiBot(f.from) || o("WAWebBotUtils").isMetaAiBot(f.to)), j = z === !0 ? null : c.jsx(r("WAWebMessageAuthor.react"), {
			msg: f,
			contact: x != null ? x : E,
			chat: $,
			quotedRemoteJid: A,
			disableClick: !0,
			showMemberLabel: !1,
			senderNameColorOverride: H ? _.vibrantOutgoingName : void 0,
			rootXstyle: r("WAWebL10N").isRTL() && t.theme === "composeBox" && P ? _.authorRowReverse : void 0
		}), K = t.theme, Q = (e || (e = r("stylex")))(_.msgBody, K === "composeBox" ? _.composeBoxMsgBody : _.basePadding, K === "composeBox" ? o("WAWebStylesEnv").isOSMac && _.macComposeBoxMsgBody : o("WAWebStylesEnv").isOSMac && _.macBasePadding, P && (K === "composeBox" ? _.composeBoxElevatedPushNamesPadding : _.elevatedPushNamesPadding)), X = "x1iyjqo2 x6ikm8r x10wlt62 x193iq5w", Y = c.jsxs("div", {
			className: X,
			children: [j, c.jsx(r("WAWebQuotedMsgContent.react"), {
				msg: f,
				rootMsg: y,
				theme: t.theme
			})]
		}), J = u === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ? "starred" : t.theme;
		return c.jsxs(r("WAWebQuotedMsgWrapper.react"), {
			authorBackgroundStyle: G,
			theme: t.theme,
			handleClick: M,
			clickable: w,
			rootMsg: y,
			children: [c.jsx("div", {
				className: Q,
				dir: w ? null : o("WAWebFrontendMsgGetters").getDir(f),
				children: Y
			}), c.jsx(o("WAWebQuotedMsgQuotedMedia.react").QuotedMediaUnsafe, {
				rootMsg: y != null ? y.unsafe() : null,
				msg: f.unsafe(),
				theme: J
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
