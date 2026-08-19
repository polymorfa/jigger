__d("WAWebMessageText.react", [
	"fbt",
	"PaymentLinkWamLogger",
	"WALogger",
	"WAWebABProps",
	"WAWebAnimatedEmojiGatingUtils",
	"WAWebApi",
	"WAWebApiParse",
	"WAWebBizCatalogPreviewContainer.react",
	"WAWebBizCtwaContext.react",
	"WAWebBizSuspiciousLabel.react",
	"WAWebBizTemplateMessageFooter.react",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeModeContext",
	"WAWebClock",
	"WAWebCommonNewsletterStrings",
	"WAWebConfirmPopup.react",
	"WAWebDisplayType",
	"WAWebDrawerManager",
	"WAWebEmoji",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebFormatHeaderFooter",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGroupJoinModalUtils",
	"WAWebGroupMetadataCollection",
	"WAWebGroupType",
	"WAWebJoinCallLinkAriaLabel",
	"WAWebKeyboardTabUtils",
	"WAWebL10N",
	"WAWebMediaLinkPreviewContainer.react",
	"WAWebMediaLinkPreviewUtils",
	"WAWebMessageAnimatedEmoji.react",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageMeta.react",
	"WAWebMessageSpacerText.react",
	"WAWebMessageStaticSingleEmoji.react",
	"WAWebMessageTextBody.react",
	"WAWebMessageTextBubble.react",
	"WAWebModalManager",
	"WAWebModifyParticipantsGroupAction",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgSelectors",
	"WAWebNewsletterCommonGatingUtils",
	"WAWebNewsletterExecApiCmd",
	"WAWebNewsletterGatingUtils",
	"WAWebNoop",
	"WAWebPaymentLinkComponents.react",
	"WAWebPaymentLinkPreviewWithTrustSignalsFeature",
	"WAWebPaymentLinkTrustSignalFooter.react",
	"WAWebQuotedMsgModelUtils",
	"WAWebSendStickerToActiveChatStickersAction",
	"WAWebStickerPackCollectionMd",
	"WAWebStickerPackUtils",
	"WAWebStickerStoreFlowLoadable",
	"WAWebUseBotCommands",
	"WAWebUseBotMessageWithAnimation",
	"WAWebUtilsShouldShowVideoPreview",
	"WAWebVideoLinkPreviewContainer.react",
	"WAWebVoipGatingUtils",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWamEnumTsSurface",
	"cr:17104",
	"cr:9382",
	"getErrorSafe",
	"isStringNullOrEmpty",
	"react",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebSendViewCount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d.useContext, _ = {
		horizontalLinkPreviewLayout: {
			maxWidth: "x65f84u",
			$$css: !0
		},
		callLinkContrastLink: {
			color: "xk4n5i7 x17f7hit",
			$$css: !0
		}
	}, f = (e = n("cr:17104")) != null ? e : {}, g = f.handleClickCallLink;
	function h(e) {
		var t = e.contact, a = e.displayAuthor, i = e.displayType, l = e.msg, d = e.position, f = e.quotedMsg, h = e.stickerLikeBubbleContainerRef, y = e.theme, C = e.trusted, b = o("WAWebMsgSelectors").showForwarded(l), v = o("WAWebMsgLinks").getSuspiciousLinks(l.unsafe()).length > 0, S = a || b || v, R = {
			0: "x1198e8h x1lxpwgx xzueoph xw01apr",
			2: "x1lxpwgx xzueoph xw01apr x1ok221b",
			1: "x1lxpwgx xzueoph xw01apr x1198e8h",
			3: "x1lxpwgx xzueoph xw01apr x1198e8h"
		}[!!S << 1 | (f != null) << 0], L, E, k, I = !1, T = !1, D = null, x = p(r("WAWebChatThemeModeContext")), $ = x.isVibrant, P = o("useWAWebMsgValues").useMsgValues(l.id, [o("WAWebFrontendMsgGetters").getIsAnimatedEmoji]), N = P[0], M = o("useWAWebMsgValues").useMsgValues(l.id, [o("WAWebFrontendMsgGetters").getIsSingleEmoji]), w = M[0], A = o("useWAWebMsgValues").useMsgValues(l.id, [o("WAWebFrontendMsgGetters").getJSONAssetForAnimatedEmoji]), F = A[0], O = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), ["autoplayAnimatedImages"]), B = O.autoplayAnimatedImages, W = o("useWAWebSendViewCount").useSendViewCount(l.id, { displayType: i }), q = o("useWAWebMsgValues").useMsgValues(l.id, [o("WAWebFrontendMsgGetters").getAsUrl]), U = q[0];
		if (l.ctwaContext) L = m.jsx(r("WAWebBizCtwaContext.react"), {
			msg: l.unsafe(),
			wrapperClass: R
		});
		else if (C === !0 && o("WAWebMsgGetters").getLinkPreview(l)) {
			var V = r("WAWebUtilsShouldShowVideoPreview")(l);
			if (V) L = m.jsx("div", {
				className: R,
				children: m.jsx(r("WAWebVideoLinkPreviewContainer.react"), { msg: l.unsafe() })
			});
			else {
				var H = o("WAWebApiParse").parseAPICmd(l.matchedText, o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD);
				if (H.resultType === o("WAWebApi").APICmd.GROUP_INVITE) {
					if (L = m.jsx("div", {
						className: R,
						children: m.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
							msg: l.unsafe(),
							displayType: i,
							isInvite: !0
						})
					}), i !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) {
						var G, z = o("WAWebGroupJoinModalUtils").getGroupInviteActionText({
							inGroup: o("WAWebMsgGetters").getIsSentByMe(l),
							groupType: (G = l.inviteGrpType) != null ? G : o("WAWebGroupType").GroupType.DEFAULT
						}), j = function(t) {
							var e = l.matchedText;
							o("WAWebExternalLink.react").openExternalLink(e);
						};
						E = m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
							label: z,
							onClick: j,
							testid: "group-invite-link-action"
						}] });
					}
				} else if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && H.resultType === o("WAWebApi").APICmd.NEWSLETTER) {
					var K = H.data.type === "view" && H.data.serverId !== void 0;
					if (K) {
						var Q = o("WAWebMediaLinkPreviewUtils").getLinkPreviewThemes(U, i), X = Q.bubbleTheme, Y = Q.linkPreviewTheme;
						k = X, L = m.jsx("div", {
							className: R,
							children: m.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
								msg: l.unsafe(),
								displayType: i,
								theme: Y
							})
						});
					} else L = m.jsx("div", {
						className: R,
						children: m.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
							msg: l.unsafe(),
							displayType: i,
							isInvite: !0
						})
					});
					if (i !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) {
						var J = H.data, Z = J.serverId, ee = J.type, te = o("WAWebCommonNewsletterStrings").getNewsletterLinkActionLabel(ee, Z), ne = ee === "view" ? "newsletter-invite-link-action" : "newsletter-create-action", re = function(t) {
							o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd(H.data);
						};
						E = m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
							label: te,
							onClick: re,
							testid: ne
						}] });
					}
				} else if (H.resultType === o("WAWebApi").APICmd.CATALOG) {
					if (L = m.jsx("div", {
						className: R,
						children: m.jsx(r("WAWebBizCatalogPreviewContainer.react"), { msg: l.unsafe() })
					}), i !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) {
						var oe = function(t) {
							var e = l.matchedText;
							o("WAWebExternalLink.react").openExternalLink(e);
						}, ae = s._(
							/*BTDS*/
							""
						);
						E = m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
							label: ae,
							onClick: oe
						}] });
					}
				} else if (H.resultType, U) {
					var ie = o("WAWebMediaLinkPreviewUtils").getLinkPreviewThemes(U, i), le = ie.bubbleTheme, se = ie.linkPreviewTheme;
					k = le, D = H.resultType === o("WAWebApi").APICmd.PAYMENT_LINK ? H.data.psp : null;
					var ue = function() {
						o("PaymentLinkWamLogger").shouldLogReceiverEvent(l) && o("PaymentLinkWamLogger").genLogClickEvent({
							interaction_component: o("PaymentLinkWamLogger").ClickInteractionComponent.LINK_PREVIEW,
							msg: l
						}, D).catch(function(e) {
							o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["error logging payment link message click"]))).catching(r("getErrorSafe")(e));
						});
					}, ce = function(t) {
						o("WAWebDrawerManager").DrawerManager.openDrawerRight(m.jsx(r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable, {
							stickerPackId: t,
							onSticker: r("WAWebSendStickerToActiveChatStickersAction"),
							msg: l.unsafe()
						}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
					}, de = function() {
						var e = o("WAWebStickerPackUtils").extractStickerPackIdFromUrl(l.body);
						e != null && o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.fetchStickerPack(e).then(function() {
							ce(e);
						}).catch(r("WAWebNoop"));
					};
					o("WAWebABProps").getABPropConfigValue("wa_web_horizontal_link_previews") && (T = !0), L = m.jsx("div", {
						className: R,
						children: m.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
							msg: l.unsafe(),
							displayType: i,
							theme: se,
							onClick: ue,
							horizontalLayout: T
						})
					});
					var me = s._(
						/*BTDS*/
						""
					);
					if (o("WAWebApiParse").isStickerPackURL(l.body)) E = m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
						theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.STICKER_PACK,
						items: [{
							label: me,
							title: me,
							onClick: de,
							disabled: !1,
							testid: "view-sticker-pack"
						}]
					});
					else if (H.resultType === o("WAWebApi").APICmd.PAYMENT_LINK) E = m.jsx(r("WAWebPaymentLinkComponents.react"), {
						msg: l,
						psp: H.data.psp
					});
					else if (H.resultType === o("WAWebApi").APICmd.CALL_LINK) {
						var pe = function() {
							var e = o("WAWebFrontendMsgGetters").getChat(l.unsafe()), t = o("WAWebChatGetters").getIsGroup(e), r = t ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_GROUP_CHAT : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_INDIVIDUAL_CHAT, a = g;
							a == null && n("cr:9382") != null && o("WAWebVoipGatingUtils").callLinksEnabled() && (a = n("cr:9382").handleClickCallLink), a == null || a(H, r);
						};
						I = !0;
						var _e = s._(
							/*BTDS*/
							""
						);
						E = m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
							label: _e,
							title: _e,
							ariaLabel: o("WAWebJoinCallLinkAriaLabel").getJoinCallLinkAriaLabel(H.data.callType, o("WAWebClock").Clock.timestampStr(l.t)),
							onClick: pe,
							disabled: !1,
							testid: "join-call-link"
						}] });
					}
				}
			}
		}
		var fe = !!(f && !l.id.fromMe && o("WAWebQuotedMsgModelUtils").getQuotedMsgAdminParentGroupJid(l.unsafe())), ge = o("WAWebQuotedMsgModelUtils").getQuotedMsgAdminGroupJid(l.unsafe());
		if (fe && ge) {
			var he = o("WAWebChatCollection").ChatCollection.get(ge), ye = r("WAWebGroupMetadataCollection").get(ge) || {}, Ce = ye.participants, be = ye.subject, ve = s._(
				/*BTDS*/
				""
			), Se = function() {
				var e = null, t = o("WAWebMsgGetters").getSender(l);
				if (Ce != null && Ce.iAmAdmin() ? t != null && Ce != null && Ce.get(t) && (e = s._(
					/*BTDS*/
					"",
					[s._param("requester-name", m.jsx(o("WAWebEmojiText.react").EmojiText, { text: o("WAWebFrontendContactGetters").getDisplayName(l.senderObj) })), s._param("subgroup-name", m.jsx(o("WAWebEmojiText.react").EmojiText, { text: be }))]
				)) : e = s._(
					/*BTDS*/
					""
				), e) {
					o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
						onOK: o("WAWebModalManager").closeModalManager,
						tsNavigationData: {
							surface: "unknown",
							viewName: "message-text"
						},
						children: e
					}));
					return;
				}
				he && o("WAWebModifyParticipantsGroupAction").addParticipants(he, [l.senderObj]).catch(r("WAWebNoop"));
			};
			E = m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
				label: ve,
				onClick: Se
			}] });
		}
		var Re = o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(l.body), Le = o("WAWebUseBotCommands").useBotCommands(l), Ee = o("WAWebUseBotMessageWithAnimation").useBotMessageWithAnimation(l), ke = function() {
			o("PaymentLinkWamLogger").shouldLogReceiverEvent(l) && o("PaymentLinkWamLogger").genLogClickEvent({
				interaction_component: o("PaymentLinkWamLogger").ClickInteractionComponent.LINK,
				msg: l
			}, D).catch(function(e) {
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["error logging payment link message click"]))).catching(r("getErrorSafe")(e));
			});
		}, Ie = m.jsx(r("WAWebMessageTextBody.react"), {
			msg: l,
			displayType: i,
			handleLinkClick: ke,
			trusted: C,
			botCommands: Le,
			botMsgTextToRender: Ee,
			linkXstyle: o("WAWebChatThemeGatingUtils").shouldApplyCallLinkContrastOverride({
				isCallLink: I,
				isSentByMe: l.id.fromMe,
				isVibrant: $
			}) ? _.callLinkContrastLink : void 0
		}), Te, De;
		if (o("WAWebMsgGetters").getSupportsMessageFooter(l)) {
			var xe = l.isDynamicReplyButtonsMsg ? o("WAWebFormatHeaderFooter").enableHeaderAndFooterFormatting(o("WAWebMsgLinks").getHeaderLinks(l.unsafe()), C === !0) : {}, $e = xe.formatters, Pe = xe.selectable;
			Te = r("isStringNullOrEmpty")(l.title) ? null : m.jsx("div", babelHelpers.extends({}, {
				0: { className: "xs9asl8 x6prxxf xk50ysn x17fgdl5 x14ug900" },
				1: { className: "xs9asl8 x6prxxf xk50ysn x17fgdl5 x14ug900 x1nn3v0j" }
			}[!!a << 0], { children: m.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: l.title,
				dirMismatch: o("WAWebFrontendMsgGetters").getRtl(l) !== r("WAWebL10N").isRTL(),
				direction: o("WAWebFrontendMsgGetters").getDir(l),
				selectable: Pe,
				formatters: $e
			}) })), De = m.jsx(r("WAWebBizTemplateMessageFooter.react"), {
				dir: o("WAWebFrontendMsgGetters").getDir(l),
				footer: l.footer,
				isShown: o("WAWebMsgGetters").getSupportsMessageFooter(l),
				msg: l.unsafe(),
				rtl: o("WAWebFrontendMsgGetters").getRtl(l),
				trusted: C,
				type: l.type
			});
		} else o("WAWebPaymentLinkPreviewWithTrustSignalsFeature").shouldShowPaymentLinkTrustSignals(l) && (De = m.jsx(r("WAWebPaymentLinkTrustSignalFooter.react"), {
			dir: o("WAWebFrontendMsgGetters").getDir(l),
			msg: l.unsafe(),
			rtl: o("WAWebFrontendMsgGetters").getRtl(l),
			type: l.type
		}));
		var Ne = i !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY && !o("WAWebMsgGetters").getIsPSA(l) && !Re && !o("WAWebMsgGetters").getActiveBotMsgStreamingInProgress(l), Me;
		f && (Me = m.jsx("div", babelHelpers.extends({}, {
			0: { className: "x1198e8h x1lxpwgx xzueoph xw01apr" },
			1: { className: "x1lxpwgx xzueoph xw01apr x1ok221b" }
		}[!!S << 0], { children: f })));
		var we = o("useWAWebMsgValues").useMsgValues(l.id, [o("WAWebFrontendMsgGetters").getHasTemplateButtons]), Ae = we[0], Fe = E != null || !!Ae || !!l.isDynamicReplyButtonsMsg || o("WAWebMsgGetters").getIsBotPluginCarouselMsg(l) || o("WAWebMsgGetters").getIsBotSearchResponse(l), Oe;
		if (o("WAWebMsgGetters").getIsBotSearchResponse(l) ? Oe = m.jsx("div", {
			className: "x1n2onr6 x1anpbxc x1q5jw98",
			children: m.jsx(o("WAWebMessageMeta.react").Meta, { msg: l })
		}) : Fe && (Oe = m.jsx("div", {
			className: "x10l6tqk xtijo5x x48lskh",
			children: m.jsx(o("WAWebMessageMeta.react").Meta, { msg: l })
		})), B && Re && N && F != null && o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled()) return m.jsx(r("WAWebMessageAnimatedEmoji.react"), {
			msg: l,
			asset: F,
			quotedMsg: f,
			displayAuthor: a,
			displayType: i,
			stickerLikeBubbleContainerRef: h,
			position: d
		});
		var Be = !(o("WAWebMsgGetters").getForwardedNewsletterMessageInfo(l) != null && o("WAWebNewsletterGatingUtils").isNewsletterForwardBottomButtonEnabled());
		if (Re && w != null) return m.jsx(r("WAWebMessageStaticSingleEmoji.react"), {
			emoji: w,
			msg: l,
			quotedMsg: f,
			displayAuthor: a,
			displayType: i,
			stickerLikeBubbleContainerRef: h,
			position: d
		});
		var We = m.jsx(r("WAWebMessageTextBubble.react"), {
			msg: l,
			displayType: i,
			displayAuthor: a,
			hideMeta: Fe,
			theme: k,
			xstyle: T && k === "portrait" && _.horizontalLinkPreviewLayout,
			useFixedWidth: l.isDynamicReplyButtonsMsg,
			children: m.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
				contact: l.senderObj,
				msg: l.unsafe(),
				children: [
					Me,
					!l.ctwaContext && m.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
						msg: l.unsafe(),
						displayType: i
					}),
					L,
					m.jsxs(r("WAWebMessageSpacerText.react"), {
						msg: l.unsafe(),
						overflowVisible: Fe,
						spacer: l.isFromTemplate || l.isDynamicReplyButtonsMsg ? Ne && !l.footer : Ne,
						"data-id": l.id,
						children: [
							Te,
							Ie,
							De,
							Oe
						]
					}),
					Be && E
				]
			})
		});
		return m.jsx("div", {
			ref: W,
			children: We
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
