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
	"stylex",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useLayoutEffect, g = d.useRef, h = d.useState;
	function y(e) {
		return c.jsx(b, babelHelpers.extends({}, e));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var n = t.filename, a = g(null), i = h(!1), l = i[0], s = i[1], u = m(function() {
			var e = a.current;
			e != null && s(e.scrollWidth > e.clientWidth);
		}, []);
		return f(function() {
			u();
		}, [n, u]), _(function() {
			var e = a.current;
			if (e != null) {
				var t = new ResizeObserver(u);
				return t.observe(e), function() {
					return t.disconnect();
				};
			}
		}, [u]), c.jsx(r("WDSTooltip.react"), {
			label: n,
			disabled: !l,
			children: c.jsx("span", babelHelpers.extends({ ref: a }, (e || (e = r("stylex"))).props(r("WAWebMediaPanelHeader.styles").filename), { children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: n }) }))
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
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
		var t = e.isMediaDownloadable, n = e.msg, r = e.onClose, a = e.onRequestGoToMsg, i = e.openReactionTray, l = e.sendReactionButtonRef, s = e.theme, u = s === void 0 ? "default" : s;
		return c.jsxs(c.Fragment, { children: [
			o("WAWebMsgReply").canReplyMsg(n) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ReplyButton, {
				msg: n,
				onClose: r,
				theme: u
			}) : null,
			o("WAWebMsgActionCapability").canStarMsg(n) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").StarButton, { msg: n }) : null,
			o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(n) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").KeepInChatButton, {
				msg: n,
				theme: u
			}) : null,
			o("WAWebMsgActionCapability").canPinMsg(n) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").PinButton, { msg: n }) : null,
			o("WAWebReactionsUtils").canReactToMessage(n) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").SendReactionButton, {
				msg: n,
				openReactionTray: i,
				sendReactionButtonRef: l
			}) : null,
			o("WAWebMediaPanelHeaderButtons.react").canDeleteMsg(n) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").DeleteButton, {
				msg: n,
				onClose: r
			}) : null,
			o("WAWebMsgActionCapability").canForwardMsg(n) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ForwardButton, { msg: n }) : null,
			c.jsx(L, {
				isMediaDownloadable: t,
				isAlbumMedia: !0,
				msg: n,
				onClose: r,
				onRequestGoToMsg: a
			})
		] });
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.filename, a = e.isMediaDownloadable, i = e.mimetype, l = e.msg, s = e.onClose, u = e.onDownloadClick, d = e.onDownloadOverride, m = e.onRequestGoToMsg, p = e.openReactionTray, _ = e.sendReactionButtonRef, f = e.theme, g = f === void 0 ? "default" : f, h = o("WAWebFrontendMsgGetters").getChat(l), y = o("WAWebChatGetters").getIsBroadcast(h);
		return c.jsxs(c.Fragment, { children: [
			!o("WAWebMsgGetters").getIsStickerMsg(l) && !o("WAWebMsgGetters").getIsCarouselCard(l) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").GoToButton, {
				msg: l,
				type: o("WAWebMediaPanelHeaderButtons.react").ButtonType.MenuBar,
				onClose: s,
				onRequestGoToMsg: m
			}) : null,
			(o("WAWebMsgGetters").getIsStickerMsg(l) || o("WAWebMsgGetters").getIsMedia(l)) && !o("WAWebMsgGetters").getIsCarouselCard(l) && !o("WAWebMsgGetters").getIsNewsletterMsg(l) && !y ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ReplyButton, {
				msg: l,
				onClose: s,
				theme: g
			}) : null,
			o("WAWebMsgActionCapability").canStarMsg(l) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").StarButton, { msg: l }) : null,
			o("WAWebMsgActionCapability").canPinMsg(l) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").PinButton, { msg: l }) : null,
			o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(l) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").KeepInChatButton, {
				msg: l,
				theme: g
			}) : null,
			o("WAWebMsgGetters").getIsStickerMsg(l) && o("WAWebMediaPanelHeaderButtons.react").canDeleteMsg(l) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").DeleteButton, {
				msg: l,
				onClose: s
			}) : null,
			o("WAWebReactionsUtils").canReactToMessage(l) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").SendReactionButton, {
				msg: l,
				openReactionTray: p,
				sendReactionButtonRef: _
			}) : null,
			o("WAWebMsgActionCapability").canForwardMsg(l) ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ForwardButton, {
				msg: l,
				filename: t,
				mimetype: i
			}) : null,
			o("WAWebMsgGetters").getIsStickerMsg(l) ? null : c.jsx(o("WAWebMediaPanelHeaderButtons.react").DownloadButton, {
				isMediaDownloadable: a,
				msg: l,
				type: o("WAWebMediaPanelHeaderButtons.react").ButtonType.MenuBar,
				onDownloadClick: u,
				onDownloadOverride: d
			}),
			!o("WAWebMsgGetters").getIsStickerMsg(l) && r("WAWebEnvironment").isWindows && n("cr:7565") != null && a() && !o("WAWebMediaPanelHeaderButtons.react").isShareSheetEnabled() ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").OpenWithAnotherAppButton, { msg: l }) : null,
			c.jsx(L, {
				isMediaDownloadable: a,
				isAlbumMedia: !1,
				msg: l,
				onClose: s,
				onRequestGoToMsg: m
			})
		] });
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.filename, n = e.isMediaDownloadable, r = e.mimetype, a = e.msg, i = e.msgIndexInAlbum, l = e.onClose, s = e.onDownloadClick, u = e.onDownloadOverride, d = e.onRequestGoToMsg, m = e.onViewOnceInfoClick, _ = e.openReactionTray, f = e.sendReactionButtonRef, g = e.theme, h = g === void 0 ? "default" : g, y = function() {
			l(), h === "media_hub" && o("WAWebModalManager").ModalManager.close();
		}, C = p(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx), b = [];
		if (C.isEnabled) {
			var R;
			b.push(c.jsx((R = o("WAWebMediaIncrementalZoom")).ZoomButton, { direction: R.ZoomDirection.OUT }, "zoom-out"), c.jsx(R.ZoomButton, { direction: R.ZoomDirection.IN }, "zoom-in"));
		}
		return a.isViewOnce ? b.push(c.jsx(E, {
			isMediaDownloadable: n,
			msg: a,
			onClose: l,
			onViewOnceInfoClick: m
		}, "view-once")) : i >= 0 && a.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM ? b.push(c.jsx(v, {
			isMediaDownloadable: n,
			msg: a,
			onClose: l,
			onRequestGoToMsg: d,
			openReactionTray: _,
			sendReactionButtonRef: f,
			theme: h
		}, "album")) : b.push(c.jsx(S, {
			filename: t,
			isMediaDownloadable: n,
			mimetype: r,
			msg: a,
			onClose: y,
			onRequestGoToMsg: d,
			openReactionTray: _,
			sendReactionButtonRef: f,
			theme: h,
			onDownloadClick: s,
			onDownloadOverride: u
		}, "non-album")), b;
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.isAlbumMedia, n = e.isMediaDownloadable, a = e.msg, i = e.onClose, l = e.onRequestGoToMsg, u = o("WAWebSearchTheWebGetSupportedSearchOptions").getSupportedSearchOptions(a), d;
		u.get(o("WAWebSearchTheWebCommonUtils").SearchType.IMAGE) != null && (d = o("WAWebSearchTheWebCommonUtils").getSTWFormat(u));
		var m = [];
		n() && o("WAWebMediaPanelHeaderButtons.react").isShareSheetEnabled() && m.push.apply(m, o("WAWebMediaPanelHeaderButtons.react").getDropdownMenuItemsForWindowsShareSheet(a));
		var p = o("WAWebFrontendMsgGetters").getChat(a);
		(o("WAWebMsgReply").canPrivateReply(a) || o("WAWebMsgReply").canPrivateReplyInRestrictedGrp(a)) && m.push(c.jsx(o("WAWebMediaPanelHeaderButtons.react").PrivateReplyButton, { msg: a }, "private_reply")), t && (o("WAWebMsgGetters").getIsSentByMe(a) && m.push(c.jsx(o("WAWebMediaPanelHeaderButtons.react").MsgInfoButton, {
			msg: a,
			onClose: i
		}, "dropdownMsgInfo")), m.push(c.jsx(o("WAWebMediaPanelHeaderButtons.react").GoToButton, {
			msg: a,
			type: o("WAWebMediaPanelHeaderButtons.react").ButtonType.Dropdown,
			onClose: i,
			onRequestGoToMsg: l
		}, "dropdownGoToMsg"), c.jsx(o("WAWebMediaPanelHeaderButtons.react").DownloadButton, {
			isMediaDownloadable: n,
			msg: a,
			type: o("WAWebMediaPanelHeaderButtons.react").ButtonType.Dropdown
		}, "dropdownDownload"))), d != null && m.push(c.jsx(r("WAWebSearchTheWebButton.react"), {
			messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
			msg: a,
			entryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT.MEDIA_VIEWER,
			stwFormat: d
		}, "search_the_web"));
		var _ = !o("WAWebChatGetters").getIsNewsletter(p) && (a.isViewOnce || o("WAWebMsgActionCapability").canReportMsg(a)), f = o("WAWebChatGetters").getIsNewsletter(p) && o("WAWebMsgActionCapability").canReportMsg(a);
		return f ? m.push(c.jsx(r("WAWebReportNewsletterPostSpamButton.react"), { msg: a }, "reportSpam")) : _ && m.push(c.jsx(o("WAWebMediaPanelHeaderButtons.react").ReportSpamButton, { msg: a }, "reportSpam")), o("WAWebMsgActionCapability").canReportToAdmin(a) && m.push(c.jsx(r("WAWebSendForAdminReviewButton.react"), { msg: a }, "report_to_admin")), o("WAWebMsgActionCapability").canAddAiContentLabelToMsg(a) && m.push(c.jsx(o("WAWebMediaPanelHeaderButtons.react").AiContentLabelButton, { msg: a }, "ai_content_label")), o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled() && m.push(c.jsx(r("WDSMenuItem.react"), {
			title: "Developer",
			Icon: o("WAWebDevIcon.react").DevIcon,
			hasSubmenu: !0,
			submenuContent: c.jsx(r("WDSMenu.react"), { children: c.jsx(o("WAWebMediaPanelHeaderButtons.react").CopyMsgIdButton, { msg: a }) })
		}, "developer-submenu")), m.length === 0 ? null : c.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").MORE_MENU_BUTTON.valueOf(),
			icon: r("WDSIconIcMoreVert.react"),
			title: s._(
				/*BTDS*/
				""
			),
			menuAlign: "end",
			wdsMenuToRender: c.jsx(r("WDSMenu.react"), { children: m }),
			onMenuOpen: function() {
				d != null && o("WAWebSearchTheWebEventLogger").logSTWEvent({
					stwEntryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT.MEDIA_VIEWER,
					stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.ENTRY_POINT_SURFACED,
					stwFormat: d,
					messageType: o("WAWebWamMsgUtils").getWamMessageType(a)
				});
			}
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.isMediaDownloadable, n = e.msg, a = e.onClose, i = e.onViewOnceInfoClick;
		return c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			icon: c.jsx(r("WDSIconWdsIcViewOnce.react"), { iconXstyle: r("WAWebMediaPanelHeader.styles").voIcon }),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: i
		}), c.jsx(L, {
			isMediaDownloadable: t,
			isAlbumMedia: !1,
			msg: n,
			onClose: a
		})] });
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k() {
		o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("search:show", []);
	}
	l.default = y;
}), 226);
