__d("WAWebMediaPanelHeaderButtons.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAPromiseDelays",
	"WAWebBotFrontendUtils",
	"WAWebBotGating",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebChatMessageSearch",
	"WAWebChatRefreshedIcon.react",
	"WAWebCmd",
	"WAWebColumnChangeDispatch",
	"WAWebCommentsModal.react",
	"WAWebComposeBoxActions",
	"WAWebConfirmPopup.react",
	"WAWebCopyToClipboard",
	"WAWebDeleteRevokeMsgFlow.react",
	"WAWebDrawerManager",
	"WAWebDrawerManagerContext",
	"WAWebEnvironment",
	"WAWebFbtCommon",
	"WAWebFileSaver",
	"WAWebForwardMessageFlowLoadable",
	"WAWebFrontendChatGetters",
	"WAWebFrontendMsgGetters",
	"WAWebIcDownloadIcon.react",
	"WAWebIcShareWindowsIcon.react",
	"WAWebInfoRefreshedIcon.react",
	"WAWebKeepInChatActions",
	"WAWebKeepInChatMsgUtils",
	"WAWebLaunchIcon.react",
	"WAWebMediaPanelHeaderTestIds",
	"WAWebMediaTypes",
	"WAWebMediaViewerConstants",
	"WAWebMediaViewerReportSpamPopupLoadable",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMsgModelUtils",
	"WAWebMsgType",
	"WAWebNewsletterAddAiContentLabelFlow",
	"WAWebPinInChatCollection",
	"WAWebPinMessageModal.react",
	"WAWebPinnedMessagesUserJourneyLogger",
	"WAWebPrivateMessageComplianceUtils",
	"WAWebProtobufsE2E.pb",
	"WAWebReplyPrivatelyRefreshedIcon.react",
	"WAWebReplyToMsgChatAction",
	"WAWebRevokeMetricUtils",
	"WAWebSendPinMessageAction",
	"WAWebSendSpamChatAction",
	"WAWebSpamConstants",
	"WAWebStateUtils",
	"WAWebTPEditPdfInWhatsappContext.react",
	"WAWebTPFetchAnnotatedPdfBuffer",
	"WAWebThreadMsgUtils",
	"WAWebWamEnumKicEntryPointType",
	"WDSIconIcBookmark.react",
	"WDSIconIcDelete.react",
	"WDSIconIcFastForward.react",
	"WDSIconIcGrade.react",
	"WDSIconIcMood.react",
	"WDSIconIcOpenInNew.react",
	"WDSIconIcPushPin.react",
	"WDSIconIcReply.react",
	"WDSIconIcThumbDown.react",
	"WDSIconWdsIcAiContent.react",
	"WDSIconWdsIcBookmarkSlash.react",
	"WDSIconWdsIcGradeSlash.react",
	"WDSIconWdsIcPushPinSlash.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"cr:12467",
	"cr:13786",
	"cr:23046",
	"cr:40048",
	"cr:7565",
	"getErrorSafe",
	"react",
	"requireDeferred",
	"useWAWebHdImageChildMsg",
	"useWAWebIsPinnedMsg",
	"useWAWebListener",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f = _ || (_ = o("react")), g = _.useRef, h = r("requireDeferred")("WAWebComplianceReportTrigger").__setRef("WAWebMediaPanelHeaderButtons.react"), y = n("$InternalEnum").Mirrored(["MenuBar", "Dropdown"]);
	function C(e) {
		var t = o("WAWebFrontendMsgGetters").getChat(e);
		o("WAWebFrontendChatGetters").getIsCAG(t) ? o("WAWebModalManager").ModalManager.open(f.jsx(r("WAWebCommentsModal.react"), { parentMsgs: [e] })) : (t.composeQuotedMsg = o("WAWebMsgModelUtils").createMsgSnapshot(e), o("WAWebComposeBoxActions").ComposeBoxActions.focus(t));
	}
	function b(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("contact_name", o("WAWebMsgModelUtils").getMsgDisplayName(e))]
		);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t, n;
		return o("WAWebMsgGetters").getIsSentByMe(e) || ((t = (n = o("WAWebFrontendMsgGetters").getChat(e).newsletterMetadata) == null ? void 0 : n.iAmAdminOrOwner()) != null ? t : !1);
	}
	var S = function() {
		return (n("cr:23046") == null || n("cr:23046").isWindowsShareSheetEnabled == null ? void 0 : n("cr:23046").isWindowsShareSheetEnabled()) === !0;
	};
	function R(t) {
		var a = function() {
			n("cr:40048") == null || n("cr:40048").handleOpenAnotherAppButtonClick(null, t);
		}, i = function() {
			n("cr:7565") && n("cr:7565").saveMediaFile(o("WAWebStateUtils").unproxy(t)).then(function() {
				if (n("cr:13786")) return n("cr:13786").shareFile(o("WAWebStateUtils").unproxy(t));
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error while sharing a message: ", ""])), t);
			});
		}, l = [f.jsx(r("WDSMenuItem.react"), {
			onPress: i,
			Icon: o("WAWebIcShareWindowsIcon.react").IcShareWindowsIcon,
			title: s._(
				/*BTDS*/
				""
			)
		}, "share"), f.jsx(r("WDSMenuItem.react"), {
			onPress: a,
			Icon: o("WAWebLaunchIcon.react").LaunchIcon,
			title: s._(
				/*BTDS*/
				""
			)
		}, "open-with")];
		return l;
	}
	function L(e) {
		var t = e.msg, n = e.onClose, a = e.onRequestGoToMsg, i = e.type, l = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"), u = function() {
			var e, n = (e = l.existsDrawer()) != null ? e : !1;
			n && o("WAWebColumnChangeDispatch").Column.column === 2 && o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
			var r = o("WAWebFrontendMsgGetters").getChat(t), a = o("WAWebThreadMsgUtils").getMsgAiThread(o("WAWebStateUtils").unproxy(t));
			if (a != null && o("WAWebBotGating").isAiChatThreadsEnabled()) {
				o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(r, {
					type: "MessageSearch",
					msg: o("WAWebStateUtils").unproxy(t)
				}), o("WAWebModalManager").ModalManager.close();
				return;
			}
			var i = o("WAWebChatMessageSearch").getSearchContext({
				chat: r,
				msgKey: o("WAWebStateUtils").unproxy(t).id
			});
			o("WAWebCmd").Cmd.openChatAt({
				chat: r,
				msgContext: i,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MediaViewer
			}).then(function(e) {
				e && (o("WAWebModalManager").ModalManager.close(), o("WAWebComposeBoxActions").ComposeBoxActions.focus(o("WAWebFrontendMsgGetters").getChat(t)));
			});
		}, c = function(t) {
			t == null || t.stopPropagation();
			var e = (a == null ? void 0 : a(u)) === !0;
			e || (n(), u());
		};
		return i === y.Dropdown ? f.jsx(r("WDSMenuItem.react"), {
			onPress: c,
			Icon: o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		}) : f.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").GO_TO_MESSAGE_BUTTON.valueOf(),
			icon: o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
			title: s._(
				/*BTDS*/
				""
			),
			onClick: c
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.msg;
		return f.jsx(r("WDSMenuItem.react"), {
			testid: "mi-msg-copy-id",
			onPress: function() {
				o("WAWebCopyToClipboard").copyTextToClipboard(t.id.toString());
			},
			title: "Copy Msg ID"
		}, "copy-id");
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.msg, n = e.onClose, a = e.theme, i = a === void 0 ? "default" : a, l = function(r) {
			n(), o("WAPromiseDelays").delayMs(o("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION).then(function() {
				if (i === "media_hub") {
					var e = o("WAWebFrontendMsgGetters").getChat(t);
					return o("WAWebCmd").Cmd.openChatAt({
						chat: e,
						msgContext: {
							collection: e.msgs,
							msg: e.msgs.assertGet(t.id),
							key: t.id,
							enableAnimation: !0,
							highlightMsg: !0
						},
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MediaViewer
					});
				}
				return Promise.resolve(!0);
			}).then(C.bind(null, o("WAWebStateUtils").unproxy(t)));
		};
		return f.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").REPLY_BUTTON.valueOf(),
			icon: r("WDSIconIcReply.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: l
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = e.msg, n = e.onClose, a = function(a) {
			o("WAWebModalManager").ModalManager.open(f.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
				chat: o("WAWebFrontendMsgGetters").getChat(t),
				msgList: [o("WAWebStateUtils").unproxy(t)],
				onDelete: n
			})), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected();
		};
		return f.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").DELETE_BUTTON.valueOf(),
			icon: r("WDSIconIcDelete.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: a
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = e.isMediaDownloadable, a = e.msg, i = e.onDownloadClick, l = e.onDownloadOverride, u = e.type, c = o("useWAWebHdImageChildMsg").useHdImageChildMsg(a, o("WAWebMediaTypes").MediaDataStage.RESOLVED), d = function(t) {
			if (t == null || t.stopPropagation(), l != null) l();
			else {
				var e = o("WAWebStateUtils").unproxy(c != null ? c : a);
				(n("cr:12467") == null ? void 0 : n("cr:12467").trySaveAs(e)) !== !0 && o("WAWebFileSaver").FileSaver.initDownload(e);
			}
			i == null || i();
		};
		if (!t()) return null;
		var m = r("WAWebEnvironment").isWindows ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u === y.Dropdown ? f.jsx(r("WDSMenuItem.react"), {
			onPress: d,
			disabled: !t(),
			Icon: o("WAWebIcDownloadIcon.react").IcDownloadIcon,
			title: m
		}) : f.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").DOWNLOAD_BUTTON.valueOf(),
			icon: o("WAWebIcDownloadIcon.react").IcDownloadIcon,
			title: m,
			disabled: !t(),
			onClick: d
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		var t = e.msg, o = function(r) {
			n("cr:40048") == null || n("cr:40048").handleOpenAnotherAppButtonClick(r, t);
		};
		return f.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcOpenInNew.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: o
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t = e.msg, n = e.openReactionTray, a = e.sendReactionButtonRef;
		return t.type === o("WAWebMsgType").MSG_TYPE.STICKER ? null : f.jsx(r("WDSMenuBarItem.react"), {
			ref: a,
			testid: r("WAWebMediaPanelHeaderTestIds").REACTIONS_BUTTON.valueOf(),
			icon: r("WDSIconIcMood.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: n
		});
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e) {
		var t = e.msg, n = e.theme, a = n === void 0 ? "default" : n, i, l, u, c = o("useWAWebMsgValues").useMsgValues(t.id, [o("WAWebMsgGetters").getIsKept]), d = c[0], m = a === "media_hub", p = function(n) {
			n == null || n.stopPropagation(), o("WAWebKeepInChatActions").runKeepInChatUX(o("WAWebStateUtils").unproxy(t), o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.MEDIA, m);
		}, _ = function(n) {
			n == null || n.stopPropagation(), o("WAWebKeepInChatActions").runUndoKeepInChatUX(o("WAWebStateUtils").unproxy(t), o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.MEDIA, m);
		};
		if (d && o("WAWebKeepInChatMsgUtils").canShowUnkeepOption(t)) i = r("WDSIconWdsIcBookmarkSlash.react"), l = _, u = s._(
			/*BTDS*/
			""
		);
		else if (!d && o("WAWebKeepInChatMsgUtils").canShowKeepOption(t)) i = r("WDSIconIcBookmark.react"), l = p, u = s._(
			/*BTDS*/
			""
		);
		else return null;
		return f.jsx(r("WDSMenuBarItem.react"), {
			testid: d ? r("WAWebMediaPanelHeaderTestIds").UNKEEP_BUTTON.valueOf() : r("WAWebMediaPanelHeaderTestIds").KEEP_BUTTON.valueOf(),
			icon: i,
			title: u,
			onClick: l
		}, "keep-in-chat-button");
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P(e) {
		var t = e.msg, n = o("useWAWebMsgValues").useMsgValues(t.id, [o("WAWebMsgGetters").getStar]), a = n[0], i, l, u;
		return a ? (i = function(n) {
			n == null || n.stopPropagation(), o("WAWebCmd").Cmd.sendUnstarMsgs(o("WAWebFrontendMsgGetters").getChat(t), [o("WAWebStateUtils").unproxy(t)]);
		}, l = r("WDSIconWdsIcGradeSlash.react"), u = s._(
			/*BTDS*/
			"",
			[s._plural(1)]
		)) : (i = function(n) {
			n == null || n.stopPropagation(), o("WAWebCmd").Cmd.sendStarMsgs(o("WAWebFrontendMsgGetters").getChat(t), [o("WAWebStateUtils").unproxy(t)]);
		}, l = r("WDSIconIcGrade.react"), u = s._(
			/*BTDS*/
			"",
			[s._plural(1)]
		)), f.jsx(r("WDSMenuBarItem.react"), {
			testid: a ? r("WAWebMediaPanelHeaderTestIds").UNSTAR_BUTTON.valueOf() : r("WAWebMediaPanelHeaderTestIds").STAR_BUTTON.valueOf(),
			icon: l,
			title: u,
			onClick: i
		}, "star-button");
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		var t = e.msg, n = g(!1), a, i, l, c = r("useWAWebIsPinnedMsg")(t.id), d = o("WAWebFrontendMsgGetters").getChat(t);
		return o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			n.current && (n.current = !1, o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(null, "media"));
		}), c ? (a = function(n) {
			n == null || n.stopPropagation();
			var e = o("WAWebPinInChatCollection").PinInChatCollection.getByParentMsgKey(t.id);
			new (o("WAWebPinnedMessagesUserJourneyLogger")).PinnedMessagesUserJourneyLogger(d).messageMenuClickUnpin(t, e), o("WAWebSendPinMessageAction").sendPinInChatMsg(t, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Error while unpinning a message: ", ""])), e);
			});
		}, i = r("WDSIconWdsIcPushPinSlash.react"), l = s._(
			/*BTDS*/
			""
		)) : (a = function(a) {
			a == null || a.stopPropagation();
			var e = new (o("WAWebPinnedMessagesUserJourneyLogger")).PinnedMessagesUserJourneyLogger(d);
			e.messageMenuClickPin(t), n.current = !0, o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(!1, "media"), o("WAWebModalManager").ModalManager.open(f.jsx(r("WAWebPinMessageModal.react"), {
				msg: t,
				logger: e
			}));
		}, i = r("WDSIconIcPushPin.react"), l = s._(
			/*BTDS*/
			""
		)), f.jsx(r("WDSMenuBarItem.react"), {
			testid: c ? r("WAWebMediaPanelHeaderTestIds").UNPIN_BUTTON.valueOf() : r("WAWebMediaPanelHeaderTestIds").PIN_BUTTON.valueOf(),
			icon: i,
			title: l,
			onClick: a
		}, "pin-button");
	}
	N.displayName = N.name + " [from " + i.id + "]";
	function M(e) {
		var t = e.filename, n = e.mimetype, a = e.msg, i = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), l = i.isSending, u = i.setIsSending, m = g(!1), p = function() {
			o("WAWebModalManager").ModalManager.close(), o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(null, "media");
		}, _ = async function() {
			if (!m.current) {
				m.current = !0;
				try {
					var e = await o("WAWebTPFetchAnnotatedPdfBuffer").fetchAnnotatedPdfBuffer();
					if (e == null) {
						o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Received null buffer when forwarding annotated PDF"]))).sendLogs("edit-pdf-forward-null-buffer");
						return;
					}
					var r = new File([e], t != null ? t : "document.pdf", { type: n != null ? n : "application/pdf" });
					o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(!1, "media"), o("WAWebCmd").Cmd.trigger("open_file_forward_modal_with_preview", r, {
						onCancel: function() {
							o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(null, "media");
						},
						onSend: function() {
							u(!1), p();
						}
					});
				} finally {
					m.current = !1;
				}
			}
		}, h = function(t) {
			if (t == null || t.stopPropagation(), l) {
				_().catch(function(e) {
					o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to forward annotated PDF"]))).catching(r("getErrorSafe")(e)).sendLogs("edit-pdf-forward-fail");
				});
				return;
			}
			o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(!1, "media"), o("WAWebFrontendMsgGetters").getIsUnsentMedia(a) ? o("WAWebModalManager").ModalManager.open(f.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "media-panel-header"
				},
				title: s._(
					/*BTDS*/
					""
				),
				onOK: p,
				okText: r("WAWebFbtCommon")("OK"),
				children: s._(
					/*BTDS*/
					"",
					[s._plural(1)]
				)
			})) : o("WAWebModalManager").ModalManager.open(f.jsx(o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable, {
				msgs: [o("WAWebStateUtils").unproxy(a)],
				onClose: p
			}), { transition: "modal-flow" });
		};
		return f.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").FORWARD_BUTTON.valueOf(),
			icon: r("WDSIconIcFastForward.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: h
		});
	}
	M.displayName = M.name + " [from " + i.id + "]";
	function w(e) {
		var t = e.msg, n = function() {
			r("WAWebReplyToMsgChatAction")(t);
		};
		return f.jsx(r("WDSMenuItem.react"), {
			testid: "mi-msg-reply",
			onPress: n,
			Icon: o("WAWebReplyPrivatelyRefreshedIcon.react").ReplyPrivatelyRefreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	w.displayName = w.name + " [from " + i.id + "]";
	function A(e) {
		var t = e.msg, n = function(n) {
			n ? o("WAWebSendSpamChatAction").sendMessageReportBlock(t, o("WAWebSpamConstants").SpamFlow.MediaViewer) : o("WAWebSendSpamChatAction").sendMessageReport(t, o("WAWebSpamConstants").SpamFlow.MediaViewer).then(function(e) {
				o("WAWebModalManager").ModalManager.close();
				var n = o("WAWebPrivateMessageComplianceUtils").getPrivateMessageReportComplianceConfig({
					reportId: e,
					msg: t
				});
				n != null && h.load().then(function(e) {
					return e.WAWebComplianceReportTrigger(n);
				}).catch(function(e) {
					o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[ComplianceReport] modal open failed (media viewer): ", ""])), e).sendLogs("report-message-compliance-from-media-viewer-error");
				});
			}).catch(function(e) {
				o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Error while reporting a message from media viewer: ", ""])), e).sendLogs("report-message-from-media-viewer-error");
			});
		}, a = function() {
			var e, r;
			o("WAWebModalManager").ModalManager.open(f.jsx(o("WAWebMediaViewerReportSpamPopupLoadable").WAWebMediaViewerReportSpamPopupLoadable, {
				isBusiness: t.senderObj.isBusiness,
				isGroup: o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(t)),
				isBizBot3p: (e = (r = o("WAWebFrontendMsgGetters").getChat(t).contact.businessProfile) == null ? void 0 : r.isBizBot3p) != null ? e : !1,
				onReport: n,
				onCancel: o("WAWebModalManager").closeModalManager,
				title: b(t)
			}));
		};
		return f.jsx(r("WDSMenuItem.react"), {
			onPress: a,
			Icon: r("WDSIconIcThumbDown.react"),
			title: b(t)
		});
	}
	A.displayName = A.name + " [from " + i.id + "]";
	function F(e) {
		var t = e.msg;
		return f.jsx(r("WDSMenuItem.react"), {
			testid: "mi-media-ai-content-label",
			onPress: function() {
				return o("WAWebNewsletterAddAiContentLabelFlow").runAddAiContentLabelFlow(t);
			},
			Icon: r("WDSIconWdsIcAiContent.react"),
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	F.displayName = F.name + " [from " + i.id + "]";
	function O(e) {
		var t = e.msg, n = e.onClose, a = function() {
			n(), o("WAPromiseDelays").delayMs(o("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION + 250).then(o("WAWebCmd").Cmd.msgInfoDrawer.bind(o("WAWebCmd").Cmd, o("WAWebStateUtils").unproxy(t)));
		};
		return f.jsx(r("WDSMenuItem.react"), {
			onPress: a,
			Icon: o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	O.displayName = O.name + " [from " + i.id + "]", l.ButtonType = y, l.delayedReplyCallback = C, l.getReportSpamTitle = b, l.canDeleteMsg = v, l.isShareSheetEnabled = S, l.getDropdownMenuItemsForWindowsShareSheet = R, l.GoToButton = L, l.CopyMsgIdButton = E, l.ReplyButton = k, l.DeleteButton = I, l.DownloadButton = T, l.OpenWithAnotherAppButton = D, l.SendReactionButton = x, l.KeepInChatButton = $, l.StarButton = P, l.PinButton = N, l.ForwardButton = M, l.PrivateReplyButton = w, l.ReportSpamButton = A, l.AiContentLabelButton = F, l.MsgInfoButton = O;
}), 226);
