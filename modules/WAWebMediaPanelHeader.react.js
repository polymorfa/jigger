__d("WAWebMediaPanelHeader.react", [
	"fbt",
	"WAWebCellFrame.react",
	"WAWebChatGetters",
	"WAWebClock",
	"WAWebDebugGatingUtils",
	"WAWebDetailImage.react",
	"WAWebDevIcon.react",
	"WAWebDropdown.react",
	"WAWebEmojiText.react",
	"WAWebEnvironment",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebKeepInChatMsgUtils",
	"WAWebMediaIncrementalZoom",
	"WAWebMediaPanelHeader.styles",
	"WAWebMediaPanelHeaderButtons.react",
	"WAWebMediaPanelHeaderTestIds",
	"WAWebMediaTypes",
	"WAWebMediaViewerFlow.react",
	"WAWebMenuBar.react",
	"WAWebMessageAIContentLabel.react",
	"WAWebMessageAssociation.flow",
	"WAWebMessageMeta.react",
	"WAWebModalManager",
	"WAWebMsgActionCanDownloadMsg",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebMsgModelUtils",
	"WAWebMsgReply",
	"WAWebMsgViewCount",
	"WAWebNewsletterAiContentInfoModalOpener",
	"WAWebNewsletterAiContentInfoModalTypes",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterMembershipUtil",
	"WAWebPdfViewerEventEmitter",
	"WAWebReactionUserJourneyLogger",
	"WAWebReactionsPanel.react",
	"WAWebReactionsUtils",
	"WAWebReportNewsletterPostSpamButton.react",
	"WAWebRightClickReactionBarContainer.react",
	"WAWebSearchTheWebButton.react",
	"WAWebSearchTheWebCommonUtils",
	"WAWebSearchTheWebEventLogger",
	"WAWebSearchTheWebGetSupportedSearchOptions",
	"WAWebSendForAdminReviewButton.react",
	"WAWebSendReactionMsgAction",
	"WAWebSendReactionsTray.react",
	"WAWebTPEditInAcrobatUtils",
	"WAWebTPEditPdfInWhatsappContext.react",
	"WAWebTPLoggingUtils",
	"WAWebTPPdfViewerGatingUtils",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebWamEnumReactionUserJourneyEntryPoint",
	"WAWebWamEnumStwEntryPoint",
	"WAWebWamEnumStwInteraction",
	"WAWebWamMsgUtils",
	"WDSIconIcClose.react",
	"WDSIconIcMoreVert.react",
	"WDSIconWdsIcViewOnce.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"WDSTooltip.react",
	"cr:1528",
	"cr:19638",
	"cr:21122",
	"cr:7565",
	"cr:7572",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useLayoutEffect, g = d.useRef, h = d.useState;
	function y(e) {
		var t = o("react-compiler-runtime").c(2), n;
		return t[0] !== e ? (n = c.jsx(b, babelHelpers.extends({}, e)), t[0] = e, t[1] = n) : n = t[1], n;
	}
	function C(t) {
		var n = o("react-compiler-runtime").c(13), a = t.filename, i = g(null), l = h(!1), s = l[0], u = l[1], d;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (d = function() {
			var e = i.current;
			e != null && u(e.scrollWidth > e.clientWidth);
		}, n[0] = d) : d = n[0];
		var m = d, p;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (p = function() {
			m();
		}, n[1] = p) : p = n[1];
		var y;
		n[2] !== a ? (y = [a, m], n[2] = a, n[3] = y) : y = n[3], f(p, y);
		var C, b;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (C = function() {
			var e = i.current;
			if (e != null) {
				var t = new ResizeObserver(m);
				return t.observe(e), (function() {
					return t.disconnect();
				});
			}
		}, b = [m], n[4] = C, n[5] = b) : (C = n[4], b = n[5]), _(C, b);
		var v = !s, S;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (S = (e || (e = r("stylex"))).props(r("WAWebMediaPanelHeader.styles").filename), n[6] = S) : S = n[6];
		var R;
		n[7] !== a ? (R = c.jsx("span", babelHelpers.extends({ ref: i }, S, { children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: a }) })), n[7] = a, n[8] = R) : R = n[8];
		var L;
		return n[9] !== a || n[10] !== v || n[11] !== R ? (L = c.jsx(r("WDSTooltip.react"), {
			label: a,
			disabled: v,
			children: R
		}), n[9] = a, n[10] = v, n[11] = R, n[12] = L) : L = n[12], L;
	}
	function b(t) {
		var a, i = t.msg, l = t.msgIndexInAlbum, s = t.onClose, u = t.onHighlightCloseEnd, d = t.onRequestGoToMsg, f = t.onViewOnceInfoClick, y = t.showBorderBottom, b = y === void 0 ? !1 : y, v = t.theme, S = v === void 0 ? "default" : v, L = g(null), E = g(null), I = g(null), T = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
			o("WAWebMsgGetters").getId,
			o("WAWebMsgGetters").getStar,
			o("WAWebMsgGetters").getType,
			o("WAWebMsgGetters").getIsGif,
			o("WAWebMsgGetters").getIsViewOnce,
			o("WAWebMsgGetters").getSender,
			o("WAWebFrontendMsgGetters").getSenderObj,
			o("WAWebMsgGetters").getT,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getIsStickerMsg,
			o("WAWebMsgGetters").getBroadcastId,
			o("WAWebMsgGetters").getIsKept,
			o("WAWebMsgGetters").getMessageSecret,
			o("WAWebMsgGetters").getIsCarouselCard,
			o("WAWebMsgGetters").getCaption
		]), D = T[0], x = T[1], $ = T[2], P = T[3], N = T[4], M = T[5], w = T[6], A = T[7], F = T[8], O = T[9], B = T[10], W = T[11], q = T[12], U = T[13], V = T[14], H = o("WAWebMsgViewCount").useWAWebLocalizedViewCount(i.id), G = o("WAWebFrontendMsgGetters").getChat(i), z = i.safe(), j = o("WAWebMessageAIContentLabel.react").useShouldShowAiContentLabel(z), K = o("useWAWebModelValues").useModelValues(t.mediaData, [
			"size",
			"filehash",
			"mediaStage",
			"renderableUrl",
			"filename",
			"mimetype"
		]), Q = h(null), X = Q[0], Y = Q[1], J = h(null), Z = J[0], ee = J[1], te = g(null);
		_(function() {
			var e = function() {
				var e, t = (e = I.current) == null ? void 0 : e.querySelector("button");
				t == null || t.focus();
			};
			return o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("search:closed", e), function() {
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off("search:closed", e);
			};
		}, []);
		var ne = h(!1), re = ne[0], oe = ne[1];
		!re && K.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && oe(!0);
		var ae = g(!1), ie = function() {
			Y(null), ae.current || o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayClose();
		}, le = function() {
			ee(null), o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayClose(), ae.current = !1;
		}, se = r("useWAWebStableCallback")(function(e) {
			if (o("WAWebReactionsUtils").canReactToMessage(e)) {
				var t = function(n) {
					o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(n), o("WAWebSendReactionMsgAction").sendReactionToMsg(e, n).catch(function(e) {}), le();
				};
				ee({
					dirY: o("WAWebDropdown.react").DirY.BOTTOM,
					dirX: o("WAWebDropdown.react").DirX.CENTER,
					type: o("WAWebDropdown.react").MenuType.ReactionPicker,
					menu: c.jsx(r("WAWebReactionsPanel.react"), {
						msgId: e.id.toString(),
						onSelection: t
					}),
					flipOnRTL: !0,
					anchor: te.current
				});
			}
		}), ue = function() {
			if (o("WAWebReactionsUtils").canReactToMessage(i)) {
				var e = function(t) {
					ae.current = t === o("WAWebSendReactionsTray.react").MORE_REACTIONS, t !== o("WAWebSendReactionsTray.react").MORE_REACTIONS ? (o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(t), o("WAWebSendReactionMsgAction").sendReactionToMsg(i, t).catch(function(e) {})) : self.setTimeout(function() {
						se(i);
					}, 150), ie();
				}, t = {
					dirY: o("WAWebDropdown.react").DirY.BOTTOM,
					dirX: o("WAWebDropdown.react").DirX.CENTER,
					type: o("WAWebDropdown.react").MenuType.ReactionSendTray,
					menu: c.jsx(r("WAWebRightClickReactionBarContainer.react"), {
						disableAutoFocus: !1,
						msg: i,
						onReaction: e,
						onOpenEmojiPicker: function() {
							return e(o("WAWebSendReactionsTray.react").MORE_REACTIONS);
						},
						userJourneyEntryPoint: o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MEDIA_VIEWER_REACTION_CTA
					}),
					flipOnRTL: !1,
					anchor: te.current
				};
				Y(t);
			}
		};
		o("useWAWebListener").useListener(L.current, "animationend", function() {
			u();
		});
		var ce = o("WAWebMsgModelUtils").getMsgDisplayName(i, {
			showShortName: !0,
			withPushName: !0
		}), de = function() {
			return N || !o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(i) ? !1 : o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(K.mimetype) && K.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT ? !0 : !!K.renderableUrl || K.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED;
		}, me = function() {
			return c.jsx(r("WDSIconIcClose.react"), {
				xstyle: t.isHighlightClose ? r("WAWebMediaPanelHeader.styles").highlightClose : {},
				containerRef: L
			});
		}, pe;
		X ? pe = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "MsgReaction",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: ie,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: X })
		}) : Z && (pe = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "MsgReactionPicker",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: le,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: Z })
		}));
		var _e = j ? c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebMessageMeta.react").MetaBullet, {}), c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebMediaPanelHeader.styles").aiContentLabel), { children: c.jsx(o("WAWebMessageAIContentLabel.react").WAWebMessageAIContentLabel, {
			msg: z,
			color: "primary",
			onPress: function() {
				return o("WAWebNewsletterAiContentInfoModalOpener").openAiContentInfoModal(o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(G == null ? void 0 : G.newsletterMetadata) ? o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant.ADMIN_INFO : o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant.VIEWER_INFO);
			}
		}) }))] }) : null, fe;
		o("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(G == null || (a = G.newsletterMetadata) == null ? void 0 : a.membershipType) && H != null ? fe = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			className: (e || (e = r("stylex")))(r("WAWebMediaPanelHeader.styles").secondaryContentDefault),
			children: [
				o("WAWebClock").Clock.relativeDateAndTimeStr(A),
				c.jsx(o("WAWebMessageMeta.react").MetaBullet, {}),
				c.jsx("span", { children: H }),
				_e
			]
		}) : j ? fe = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			className: (e || (e = r("stylex")))(r("WAWebMediaPanelHeader.styles").secondaryContentDefault),
			children: [o("WAWebClock").Clock.relativeDateAndTimeStr(A), _e]
		}) : fe = c.jsx(c.Fragment, { children: o("WAWebClock").Clock.relativeDateAndTimeStr(A) }), o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(K.mimetype) && !r("isStringNullOrEmpty")(V) && V !== K.filename && (fe = c.jsxs(o("WAWebFlex.react").FlexRow, { children: [
			c.jsx("span", { children: o("WAWebClock").Clock.relativeDateAndTimeStr(A) }),
			c.jsx(o("WAWebMessageMeta.react").MetaBullet, {}),
			c.jsx(o("WAWebEmojiText.react").EmojiText, {
				className: (e || (e = r("stylex")))(r("WAWebMediaPanelHeader.styles").filename),
				ellipsify: !0,
				text: V,
				titlify: !0,
				title: V
			})
		] }));
		var ge = o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(K.mimetype) ? c.jsxs(o("WAWebFlex.react").FlexRow, { children: [
			c.jsx(o("WAWebEmojiText.react").EmojiText, {
				className: (e || (e = r("stylex")))(r("WAWebMediaPanelHeader.styles").author),
				ellipsify: !0,
				text: ce
			}),
			c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebMediaPanelHeader.styles").dot), { children: "·" })),
			c.jsx(C, { filename: K.filename })
		] }) : c.jsx(o("WAWebEmojiText.react").EmojiText, {
			ellipsify: !0,
			text: ce
		}), he = m(function() {
			o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(K.mimetype) && o("WAWebTPLoggingUtils").logDownloadDocumentClickEvent("media_viewer_header", K.filehash, K.size);
		}, [
			K.mimetype,
			K.filehash,
			K.size
		]), ye = p(o("WAWebMediaViewerFlow.react").MediaViewerFlowZoomContext), Ce = p(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx).isEnabled, be = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), ve = be.isEditing, Se = be.isSending, Re = be.undoRedoState, Le = Re.hasUndo, Ee = t.onDownloadEditedPdf, ke = Se && o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(K.mimetype) && Ee != null ? Ee : void 0, Ie = m(function() {
			o("WAWebTPEditInAcrobatUtils").openEditInAcrobatModal({
				hasUnsavedAnnotations: Le,
				mediaData: t.mediaData,
				msg: i,
				source: "edit_mode"
			});
		}, [
			i,
			t.mediaData,
			Le
		]), Te = !Ce && ye;
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebMediaPanelHeader.styles").mediaPanelHeader, Te && r("WAWebMediaPanelHeader.styles").mediaPanelHeaderHidden, b && r("WAWebMediaPanelHeader.styles").mediaPanelHeaderBorderBottom), { children: ve && n("cr:21122") != null ? c.jsx(n("cr:21122"), {
			containerRef: E,
			filename: K.filename,
			mimetype: K.mimetype,
			onEditInAcrobat: Ie
		}) : c.jsxs(c.Fragment, { children: [
			c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebMediaPanelHeader.styles").info), { children: c.jsx(r("WAWebCellFrame.react"), {
				idle: !0,
				image: c.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: M,
					size: 40
				}),
				primary: ge,
				secondary: fe,
				theme: "media"
			}) })),
			c.jsx("div", babelHelpers.extends({ ref: E }, (e || (e = r("stylex"))).props(r("WAWebMediaPanelHeader.styles").mediaPanelTools), { children: c.jsxs(o("WAWebMenuBar.react").MenuBar, {
				theme: "strong",
				gap: "single",
				children: [
					n("cr:1528") && o("WAWebTPPdfViewerGatingUtils").isWebTPPdfEditAndShareEnabled(K.mimetype) && c.jsx(n("cr:1528"), {
						msg: i,
						mediaData: K,
						isDisabled: !re || t.hasRendered !== !0
					}),
					n("cr:7572") && o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(K.mimetype) && c.jsx("span", {
						ref: I,
						children: c.jsx(n("cr:7572"), {
							isDisabled: !re || t.hasRendered !== !0,
							onSearchClick: k
						})
					}),
					c.jsx(R, {
						filename: K.filename,
						isMediaDownloadable: de,
						mimetype: K.mimetype,
						msg: i,
						msgIndexInAlbum: l,
						onClose: s,
						onRequestGoToMsg: d,
						onViewOnceInfoClick: f,
						openReactionTray: ue,
						sendReactionButtonRef: te,
						theme: S,
						onDownloadClick: he,
						onDownloadOverride: ke
					}),
					c.jsx(r("WDSMenuBarItem.react"), {
						testid: r("WAWebMediaPanelHeaderTestIds").CLOSE_BUTTON.valueOf(),
						icon: me,
						title: r("WAWebFbtCommon")("Close"),
						onClick: t.onClose
					})
				]
			}, "media-panel-header") })),
			pe,
			n("cr:19638") && c.jsx(n("cr:19638"), {
				containerRef: E,
				mimetype: K.mimetype
			})
		] }) }));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = o("react-compiler-runtime").c(34), n = e.isMediaDownloadable, r = e.msg, a = e.onClose, i = e.onRequestGoToMsg, l = e.openReactionTray, s = e.sendReactionButtonRef, u = e.theme, d = u === void 0 ? "default" : u, m;
		t[0] !== r || t[1] !== a || t[2] !== d ? (m = o("WAWebMsgReply").canReplyMsg(r) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ReplyButton, {
			msg: r,
			onClose: a,
			theme: d
		}) : null, t[0] = r, t[1] = a, t[2] = d, t[3] = m) : m = t[3];
		var p;
		t[4] !== r ? (p = o("WAWebMsgActionCapability").canStarMsg(r) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").StarButton, { msg: r }) : null, t[4] = r, t[5] = p) : p = t[5];
		var _;
		t[6] !== r || t[7] !== d ? (_ = o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(r) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").KeepInChatButton, {
			msg: r,
			theme: d
		}) : null, t[6] = r, t[7] = d, t[8] = _) : _ = t[8];
		var f;
		t[9] !== r ? (f = o("WAWebMsgActionCapability").canPinMsg(r) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").PinButton, { msg: r }) : null, t[9] = r, t[10] = f) : f = t[10];
		var g;
		t[11] !== r || t[12] !== l || t[13] !== s ? (g = o("WAWebReactionsUtils").canReactToMessage(r) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").SendReactionButton, {
			msg: r,
			openReactionTray: l,
			sendReactionButtonRef: s
		}) : null, t[11] = r, t[12] = l, t[13] = s, t[14] = g) : g = t[14];
		var h;
		t[15] !== r || t[16] !== a ? (h = o("WAWebMediaPanelHeaderButtons.react").canDeleteMsg(r) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").DeleteButton, {
			msg: r,
			onClose: a
		}) : null, t[15] = r, t[16] = a, t[17] = h) : h = t[17];
		var y;
		t[18] !== r ? (y = o("WAWebMsgActionCapability").canForwardMsg(r) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ForwardButton, { msg: r }) : null, t[18] = r, t[19] = y) : y = t[19];
		var C;
		t[20] !== n || t[21] !== r || t[22] !== a || t[23] !== i ? (C = c.jsx(L, {
			isMediaDownloadable: n,
			isAlbumMedia: !0,
			msg: r,
			onClose: a,
			onRequestGoToMsg: i
		}), t[20] = n, t[21] = r, t[22] = a, t[23] = i, t[24] = C) : C = t[24];
		var b;
		return t[25] !== m || t[26] !== p || t[27] !== _ || t[28] !== f || t[29] !== g || t[30] !== h || t[31] !== y || t[32] !== C ? (b = c.jsxs(c.Fragment, { children: [
			m,
			p,
			_,
			f,
			g,
			h,
			y,
			C
		] }), t[25] = m, t[26] = p, t[27] = _, t[28] = f, t[29] = g, t[30] = h, t[31] = y, t[32] = C, t[33] = b) : b = t[33], b;
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(54), a = e.filename, i = e.isMediaDownloadable, l = e.mimetype, s = e.msg, u = e.onClose, d = e.onDownloadClick, m = e.onDownloadOverride, p = e.onRequestGoToMsg, _ = e.openReactionTray, f = e.sendReactionButtonRef, g = e.theme, h = g === void 0 ? "default" : g, y;
		if (t[0] !== s) {
			var C = o("WAWebFrontendMsgGetters").getChat(s);
			y = o("WAWebChatGetters").getIsBroadcast(C), t[0] = s, t[1] = y;
		} else y = t[1];
		var b = y, v;
		t[2] !== s || t[3] !== u || t[4] !== p ? (v = !o("WAWebMsgGetters").getIsStickerMsg(s) && !o("WAWebMsgGetters").getIsCarouselCard(s) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").GoToButton, {
			msg: s,
			type: o("WAWebMediaPanelHeaderButtons.react").ButtonType.MenuBar,
			onClose: u,
			onRequestGoToMsg: p
		}) : null, t[2] = s, t[3] = u, t[4] = p, t[5] = v) : v = t[5];
		var S;
		t[6] !== b || t[7] !== s || t[8] !== u || t[9] !== h ? (S = (o("WAWebMsgGetters").getIsStickerMsg(s) || o("WAWebMsgGetters").getIsMedia(s)) && !o("WAWebMsgGetters").getIsCarouselCard(s) && !o("WAWebMsgGetters").getIsNewsletterMsg(s) && !b ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ReplyButton, {
			msg: s,
			onClose: u,
			theme: h
		}) : null, t[6] = b, t[7] = s, t[8] = u, t[9] = h, t[10] = S) : S = t[10];
		var R;
		t[11] !== s ? (R = o("WAWebMsgActionCapability").canStarMsg(s) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").StarButton, { msg: s }) : null, t[11] = s, t[12] = R) : R = t[12];
		var E;
		t[13] !== s ? (E = o("WAWebMsgActionCapability").canPinMsg(s) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").PinButton, { msg: s }) : null, t[13] = s, t[14] = E) : E = t[14];
		var k;
		t[15] !== s || t[16] !== h ? (k = o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(s) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").KeepInChatButton, {
			msg: s,
			theme: h
		}) : null, t[15] = s, t[16] = h, t[17] = k) : k = t[17];
		var I;
		t[18] !== s || t[19] !== u ? (I = o("WAWebMsgGetters").getIsStickerMsg(s) && o("WAWebMediaPanelHeaderButtons.react").canDeleteMsg(s) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").DeleteButton, {
			msg: s,
			onClose: u
		}) : null, t[18] = s, t[19] = u, t[20] = I) : I = t[20];
		var T;
		t[21] !== s || t[22] !== _ || t[23] !== f ? (T = o("WAWebReactionsUtils").canReactToMessage(s) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").SendReactionButton, {
			msg: s,
			openReactionTray: _,
			sendReactionButtonRef: f
		}) : null, t[21] = s, t[22] = _, t[23] = f, t[24] = T) : T = t[24];
		var D;
		t[25] !== a || t[26] !== l || t[27] !== s ? (D = o("WAWebMsgActionCapability").canForwardMsg(s) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ForwardButton, {
			msg: s,
			filename: a,
			mimetype: l
		}) : null, t[25] = a, t[26] = l, t[27] = s, t[28] = D) : D = t[28];
		var x;
		t[29] !== i || t[30] !== s || t[31] !== d || t[32] !== m ? (x = o("WAWebMsgGetters").getIsStickerMsg(s) ? null : c.jsx(o("WAWebMediaPanelHeaderButtons.react").DownloadButton, {
			isMediaDownloadable: i,
			msg: s,
			type: o("WAWebMediaPanelHeaderButtons.react").ButtonType.MenuBar,
			onDownloadClick: d,
			onDownloadOverride: m
		}), t[29] = i, t[30] = s, t[31] = d, t[32] = m, t[33] = x) : x = t[33];
		var $;
		t[34] !== i || t[35] !== s ? ($ = !o("WAWebMsgGetters").getIsStickerMsg(s) && r("WAWebEnvironment").isWindows && n("cr:7565") != null && i() && !o("WAWebMediaPanelHeaderButtons.react").isShareSheetEnabled() ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").OpenWithAnotherAppButton, { msg: s }) : null, t[34] = i, t[35] = s, t[36] = $) : $ = t[36];
		var P;
		t[37] !== i || t[38] !== s || t[39] !== u || t[40] !== p ? (P = c.jsx(L, {
			isMediaDownloadable: i,
			isAlbumMedia: !1,
			msg: s,
			onClose: u,
			onRequestGoToMsg: p
		}), t[37] = i, t[38] = s, t[39] = u, t[40] = p, t[41] = P) : P = t[41];
		var N;
		return t[42] !== D || t[43] !== x || t[44] !== $ || t[45] !== P || t[46] !== v || t[47] !== S || t[48] !== R || t[49] !== E || t[50] !== k || t[51] !== I || t[52] !== T ? (N = c.jsxs(c.Fragment, { children: [
			v,
			S,
			R,
			E,
			k,
			I,
			T,
			D,
			x,
			$,
			P
		] }), t[42] = D, t[43] = x, t[44] = $, t[45] = P, t[46] = v, t[47] = S, t[48] = R, t[49] = E, t[50] = k, t[51] = I, t[52] = T, t[53] = N) : N = t[53], N;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(46), n = e.filename, r = e.isMediaDownloadable, a = e.mimetype, i = e.msg, l = e.msgIndexInAlbum, s = e.onClose, u = e.onDownloadClick, d = e.onDownloadOverride, m = e.onRequestGoToMsg, _ = e.onViewOnceInfoClick, f = e.openReactionTray, g = e.sendReactionButtonRef, h = e.theme, y = h === void 0 ? "default" : h, C;
		t[0] !== s || t[1] !== y ? (C = function() {
			s(), y === "media_hub" && o("WAWebModalManager").ModalManager.close();
		}, t[0] = s, t[1] = y, t[2] = C) : C = t[2];
		var b = C, R = p(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx), L;
		if (t[3] !== n || t[4] !== b || t[5] !== r || t[6] !== a || t[7] !== i || t[8] !== l || t[9] !== s || t[10] !== u || t[11] !== d || t[12] !== m || t[13] !== _ || t[14] !== f || t[15] !== g || t[16] !== y || t[17] !== R.isEnabled) {
			if (L = [], R.isEnabled) {
				var k, I;
				if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
					var T;
					k = c.jsx((T = o("WAWebMediaIncrementalZoom")).ZoomButton, { direction: T.ZoomDirection.OUT }, "zoom-out"), I = c.jsx(T.ZoomButton, { direction: T.ZoomDirection.IN }, "zoom-in"), t[19] = k, t[20] = I;
				} else k = t[19], I = t[20];
				L.push(k, I);
			}
			if (i.isViewOnce) {
				var D;
				t[21] !== r || t[22] !== i || t[23] !== s || t[24] !== _ ? (D = c.jsx(E, {
					isMediaDownloadable: r,
					msg: i,
					onClose: s,
					onViewOnceInfoClick: _
				}, "view-once"), t[21] = r, t[22] = i, t[23] = s, t[24] = _, t[25] = D) : D = t[25], L.push(D);
			} else if (l >= 0 && i.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM) {
				var x;
				t[26] !== r || t[27] !== i || t[28] !== s || t[29] !== m || t[30] !== f || t[31] !== g || t[32] !== y ? (x = c.jsx(v, {
					isMediaDownloadable: r,
					msg: i,
					onClose: s,
					onRequestGoToMsg: m,
					openReactionTray: f,
					sendReactionButtonRef: g,
					theme: y
				}, "album"), t[26] = r, t[27] = i, t[28] = s, t[29] = m, t[30] = f, t[31] = g, t[32] = y, t[33] = x) : x = t[33], L.push(x);
			} else {
				var $;
				t[34] !== n || t[35] !== b || t[36] !== r || t[37] !== a || t[38] !== i || t[39] !== u || t[40] !== d || t[41] !== m || t[42] !== f || t[43] !== g || t[44] !== y ? ($ = c.jsx(S, {
					filename: n,
					isMediaDownloadable: r,
					mimetype: a,
					msg: i,
					onClose: b,
					onRequestGoToMsg: m,
					openReactionTray: f,
					sendReactionButtonRef: g,
					theme: y,
					onDownloadClick: u,
					onDownloadOverride: d
				}, "non-album"), t[34] = n, t[35] = b, t[36] = r, t[37] = a, t[38] = i, t[39] = u, t[40] = d, t[41] = m, t[42] = f, t[43] = g, t[44] = y, t[45] = $) : $ = t[45], L.push($);
			}
			t[3] = n, t[4] = b, t[5] = r, t[6] = a, t[7] = i, t[8] = l, t[9] = s, t[10] = u, t[11] = d, t[12] = m, t[13] = _, t[14] = f, t[15] = g, t[16] = y, t[17] = R.isEnabled, t[18] = L;
		} else L = t[18];
		return L;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(43), n = e.isAlbumMedia, a = e.isMediaDownloadable, i = e.msg, l = e.onClose, u = e.onRequestGoToMsg, d;
		if (t[0] !== i) {
			var m = o("WAWebSearchTheWebGetSupportedSearchOptions").getSupportedSearchOptions(i);
			m.get(o("WAWebSearchTheWebCommonUtils").SearchType.IMAGE) != null && (d = o("WAWebSearchTheWebCommonUtils").getSTWFormat(m)), t[0] = i, t[1] = d;
		} else d = t[1];
		var p;
		if (t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== l || t[6] !== u || t[7] !== d) {
			if (p = [], a() && o("WAWebMediaPanelHeaderButtons.react").isShareSheetEnabled()) {
				var _, f;
				t[9] !== i ? (f = o("WAWebMediaPanelHeaderButtons.react").getDropdownMenuItemsForWindowsShareSheet(i), t[9] = i, t[10] = f) : f = t[10], (_ = p).push.apply(_, f);
			}
			var g = o("WAWebFrontendMsgGetters").getChat(i);
			if (o("WAWebMsgReply").canPrivateReply(i) || o("WAWebMsgReply").canPrivateReplyInRestrictedGrp(i)) {
				var h;
				t[11] !== i ? (h = c.jsx(o("WAWebMediaPanelHeaderButtons.react").PrivateReplyButton, { msg: i }, "private_reply"), t[11] = i, t[12] = h) : h = t[12], p.push(h);
			}
			if (n) {
				if (o("WAWebMsgGetters").getIsSentByMe(i)) {
					var y;
					t[13] !== i || t[14] !== l ? (y = c.jsx(o("WAWebMediaPanelHeaderButtons.react").MsgInfoButton, {
						msg: i,
						onClose: l
					}, "dropdownMsgInfo"), t[13] = i, t[14] = l, t[15] = y) : y = t[15], p.push(y);
				}
				var C;
				t[16] !== i || t[17] !== l || t[18] !== u ? (C = c.jsx(o("WAWebMediaPanelHeaderButtons.react").GoToButton, {
					msg: i,
					type: o("WAWebMediaPanelHeaderButtons.react").ButtonType.Dropdown,
					onClose: l,
					onRequestGoToMsg: u
				}, "dropdownGoToMsg"), t[16] = i, t[17] = l, t[18] = u, t[19] = C) : C = t[19];
				var b;
				t[20] !== a || t[21] !== i ? (b = c.jsx(o("WAWebMediaPanelHeaderButtons.react").DownloadButton, {
					isMediaDownloadable: a,
					msg: i,
					type: o("WAWebMediaPanelHeaderButtons.react").ButtonType.Dropdown
				}, "dropdownDownload"), t[20] = a, t[21] = i, t[22] = b) : b = t[22], p.push(C, b);
			}
			d != null && p.push(c.jsx(r("WAWebSearchTheWebButton.react"), {
				messageType: o("WAWebWamMsgUtils").getWamMessageType(i),
				msg: i,
				entryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT.MEDIA_VIEWER,
				stwFormat: d
			}, "search_the_web"));
			var v = !o("WAWebChatGetters").getIsNewsletter(g) && (i.isViewOnce || o("WAWebMsgActionCapability").canReportMsg(i)), S = o("WAWebChatGetters").getIsNewsletter(g) && o("WAWebMsgActionCapability").canReportMsg(i);
			if (S) {
				var R;
				t[23] !== i ? (R = c.jsx(r("WAWebReportNewsletterPostSpamButton.react"), { msg: i }, "reportSpam"), t[23] = i, t[24] = R) : R = t[24], p.push(R);
			} else if (v) {
				var L;
				t[25] !== i ? (L = c.jsx(o("WAWebMediaPanelHeaderButtons.react").ReportSpamButton, { msg: i }, "reportSpam"), t[25] = i, t[26] = L) : L = t[26], p.push(L);
			}
			if (o("WAWebMsgActionCapability").canReportToAdmin(i)) {
				var E;
				t[27] !== i ? (E = c.jsx(r("WAWebSendForAdminReviewButton.react"), { msg: i }, "report_to_admin"), t[27] = i, t[28] = E) : E = t[28], p.push(E);
			}
			if (o("WAWebMsgActionCapability").canAddAiContentLabelToMsg(i)) {
				var k;
				t[29] !== i ? (k = c.jsx(o("WAWebMediaPanelHeaderButtons.react").AiContentLabelButton, { msg: i }, "ai_content_label"), t[29] = i, t[30] = k) : k = t[30], p.push(k);
			}
			if (o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled()) {
				var I;
				t[31] !== i ? (I = c.jsx(r("WDSMenuItem.react"), {
					title: "Developer",
					Icon: o("WAWebDevIcon.react").DevIcon,
					hasSubmenu: !0,
					submenuContent: c.jsx(r("WDSMenu.react"), { children: c.jsx(o("WAWebMediaPanelHeaderButtons.react").CopyMsgIdButton, { msg: i }) })
				}, "developer-submenu"), t[31] = i, t[32] = I) : I = t[32], p.push(I);
			}
			t[2] = n, t[3] = a, t[4] = i, t[5] = l, t[6] = u, t[7] = d, t[8] = p;
		} else p = t[8];
		if (p.length === 0) return null;
		var T;
		t[33] === Symbol.for("react.memo_cache_sentinel") ? (T = r("WAWebMediaPanelHeaderTestIds").MORE_MENU_BUTTON.valueOf(), t[33] = T) : T = t[33];
		var D;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), t[34] = D) : D = t[34];
		var x;
		t[35] !== p ? (x = c.jsx(r("WDSMenu.react"), { children: p }), t[35] = p, t[36] = x) : x = t[36];
		var $;
		t[37] !== i || t[38] !== d ? ($ = function() {
			d != null && o("WAWebSearchTheWebEventLogger").logSTWEvent({
				stwEntryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT.MEDIA_VIEWER,
				stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.ENTRY_POINT_SURFACED,
				stwFormat: d,
				messageType: o("WAWebWamMsgUtils").getWamMessageType(i)
			});
		}, t[37] = i, t[38] = d, t[39] = $) : $ = t[39];
		var P;
		return t[40] !== x || t[41] !== $ ? (P = c.jsx(r("WDSMenuBarItem.react"), {
			testid: T,
			icon: r("WDSIconIcMoreVert.react"),
			title: D,
			menuAlign: "end",
			wdsMenuToRender: x,
			onMenuOpen: $
		}), t[40] = x, t[41] = $, t[42] = P) : P = t[42], P;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(11), n = e.isMediaDownloadable, a = e.msg, i = e.onClose, l = e.onViewOnceInfoClick, u, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = c.jsx(r("WDSIconWdsIcViewOnce.react"), { iconXstyle: r("WAWebMediaPanelHeader.styles").voIcon }), d = s._(
			/*BTDS*/
			""
		), t[0] = u, t[1] = d) : (u = t[0], d = t[1]);
		var m;
		t[2] !== l ? (m = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			icon: u,
			title: d,
			onClick: l
		}), t[2] = l, t[3] = m) : m = t[3];
		var p;
		t[4] !== n || t[5] !== a || t[6] !== i ? (p = c.jsx(L, {
			isMediaDownloadable: n,
			isAlbumMedia: !1,
			msg: a,
			onClose: i
		}), t[4] = n, t[5] = a, t[6] = i, t[7] = p) : p = t[7];
		var _;
		return t[8] !== m || t[9] !== p ? (_ = c.jsxs(c.Fragment, { children: [m, p] }), t[8] = m, t[9] = p, t[10] = _) : _ = t[10], _;
	}
	function k() {
		o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("search:show", []);
	}
	l.default = y;
}), 226);
