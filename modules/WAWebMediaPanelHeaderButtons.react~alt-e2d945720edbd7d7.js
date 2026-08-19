__d("WAWebMediaPanelHeaderButtons.react", [
	"fbt",
	"$InternalEnum",
	"Promise",
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
	"asyncToGeneratorRuntime",
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
	var e, u, c, d, m, p, _, f, g = f || (f = o("react")), h = f.useRef, y = r("requireDeferred")("WAWebComplianceReportTrigger").__setRef("WAWebMediaPanelHeaderButtons.react"), C = n("$InternalEnum").Mirrored(["MenuBar", "Dropdown"]);
	function b(e) {
		var t = o("WAWebFrontendMsgGetters").getChat(e);
		o("WAWebFrontendChatGetters").getIsCAG(t) ? o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebCommentsModal.react"), { parentMsgs: [e] })) : (t.composeQuotedMsg = o("WAWebMsgModelUtils").createMsgSnapshot(e), o("WAWebComposeBoxActions").ComposeBoxActions.focus(t));
	}
	function v(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("contact_name", o("WAWebMsgModelUtils").getMsgDisplayName(e))]
		);
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t, n;
		return o("WAWebMsgGetters").getIsSentByMe(e) || ((t = (n = o("WAWebFrontendMsgGetters").getChat(e).newsletterMetadata) == null ? void 0 : n.iAmAdminOrOwner()) != null ? t : !1);
	}
	var R = function() {
		return (n("cr:23046") == null || n("cr:23046").isWindowsShareSheetEnabled == null ? void 0 : n("cr:23046").isWindowsShareSheetEnabled()) === !0;
	};
	function L(t) {
		var a = function() {
			n("cr:40048") == null || n("cr:40048").handleOpenAnotherAppButtonClick(null, t);
		}, i = function() {
			n("cr:7565") && n("cr:7565").saveMediaFile(o("WAWebStateUtils").unproxy(t)).then(function() {
				if (n("cr:13786")) return n("cr:13786").shareFile(o("WAWebStateUtils").unproxy(t));
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error while sharing a message: ", ""])), t);
			});
		}, l = [g.jsx(r("WDSMenuItem.react"), {
			onPress: i,
			Icon: o("WAWebIcShareWindowsIcon.react").IcShareWindowsIcon,
			title: s._(
				/*BTDS*/
				""
			)
		}, "share"), g.jsx(r("WDSMenuItem.react"), {
			onPress: a,
			Icon: o("WAWebLaunchIcon.react").LaunchIcon,
			title: s._(
				/*BTDS*/
				""
			)
		}, "open-with")];
		return l;
	}
	function E(e) {
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
		return i === C.Dropdown ? g.jsx(r("WDSMenuItem.react"), {
			onPress: c,
			Icon: o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		}) : g.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").GO_TO_MESSAGE_BUTTON.valueOf(),
			icon: o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
			title: s._(
				/*BTDS*/
				""
			),
			onClick: c
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.msg;
		return g.jsx(r("WDSMenuItem.react"), {
			testid: "mi-msg-copy-id",
			onPress: function() {
				o("WAWebCopyToClipboard").copyTextToClipboard(t.id.toString());
			},
			title: "Copy Msg ID"
		}, "copy-id");
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = e.msg, a = e.onClose, i = e.theme, l = i === void 0 ? "default" : i, u = function(r) {
			a(), o("WAPromiseDelays").delayMs(o("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION).then(function() {
				if (l === "media_hub") {
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
				return (_ || (_ = n("Promise"))).resolve(!0);
			}).then(b.bind(null, o("WAWebStateUtils").unproxy(t)));
		};
		return g.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").REPLY_BUTTON.valueOf(),
			icon: r("WDSIconIcReply.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: u
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = e.msg, n = e.onClose, a = function(a) {
			o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
				chat: o("WAWebFrontendMsgGetters").getChat(t),
				msgList: [o("WAWebStateUtils").unproxy(t)],
				onDelete: n
			})), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected();
		};
		return g.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").DELETE_BUTTON.valueOf(),
			icon: r("WDSIconIcDelete.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: a
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
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
		return u === C.Dropdown ? g.jsx(r("WDSMenuItem.react"), {
			onPress: d,
			disabled: !t(),
			Icon: o("WAWebIcDownloadIcon.react").IcDownloadIcon,
			title: m
		}) : g.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").DOWNLOAD_BUTTON.valueOf(),
			icon: o("WAWebIcDownloadIcon.react").IcDownloadIcon,
			title: m,
			disabled: !t(),
			onClick: d
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t = e.msg, o = function(r) {
			n("cr:40048") == null || n("cr:40048").handleOpenAnotherAppButtonClick(r, t);
		};
		return g.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcOpenInNew.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: o
		});
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e) {
		var t = e.msg, n = e.openReactionTray, a = e.sendReactionButtonRef;
		return t.type === o("WAWebMsgType").MSG_TYPE.STICKER ? null : g.jsx(r("WDSMenuBarItem.react"), {
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
	$.displayName = $.name + " [from " + i.id + "]";
	function P(e) {
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
		return g.jsx(r("WDSMenuBarItem.react"), {
			testid: d ? r("WAWebMediaPanelHeaderTestIds").UNKEEP_BUTTON.valueOf() : r("WAWebMediaPanelHeaderTestIds").KEEP_BUTTON.valueOf(),
			icon: i,
			title: u,
			onClick: l
		}, "keep-in-chat-button");
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
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
		)), g.jsx(r("WDSMenuBarItem.react"), {
			testid: a ? r("WAWebMediaPanelHeaderTestIds").UNSTAR_BUTTON.valueOf() : r("WAWebMediaPanelHeaderTestIds").STAR_BUTTON.valueOf(),
			icon: l,
			title: u,
			onClick: i
		}, "star-button");
	}
	N.displayName = N.name + " [from " + i.id + "]";
	function M(e) {
		var t = e.msg, n = h(!1), a, i, l, c = r("useWAWebIsPinnedMsg")(t.id), d = o("WAWebFrontendMsgGetters").getChat(t);
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
			e.messageMenuClickPin(t), n.current = !0, o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(!1, "media"), o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebPinMessageModal.react"), {
				msg: t,
				logger: e
			}));
		}, i = r("WDSIconIcPushPin.react"), l = s._(
			/*BTDS*/
			""
		)), g.jsx(r("WDSMenuBarItem.react"), {
			testid: c ? r("WAWebMediaPanelHeaderTestIds").UNPIN_BUTTON.valueOf() : r("WAWebMediaPanelHeaderTestIds").PIN_BUTTON.valueOf(),
			icon: i,
			title: l,
			onClick: a
		}, "pin-button");
	}
	M.displayName = M.name + " [from " + i.id + "]";
	function w(e) {
		var t = e.filename, a = e.mimetype, i = e.msg, l = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), u = l.isSending, m = l.setIsSending, p = h(!1), _ = function() {
			o("WAWebModalManager").ModalManager.close(), o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(null, "media");
		}, f = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!p.current) {
					p.current = !0;
					try {
						var e = yield o("WAWebTPFetchAnnotatedPdfBuffer").fetchAnnotatedPdfBuffer();
						if (e == null) {
							o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Received null buffer when forwarding annotated PDF"]))).sendLogs("edit-pdf-forward-null-buffer");
							return;
						}
						var n = new File([e], t != null ? t : "document.pdf", { type: a != null ? a : "application/pdf" });
						o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(!1, "media"), o("WAWebCmd").Cmd.trigger("open_file_forward_modal_with_preview", n, {
							onCancel: function() {
								o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(null, "media");
							},
							onSend: function() {
								m(!1), _();
							}
						});
					} finally {
						p.current = !1;
					}
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), y = function(t) {
			if (t == null || t.stopPropagation(), u) {
				f().catch(function(e) {
					o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to forward annotated PDF"]))).catching(r("getErrorSafe")(e)).sendLogs("edit-pdf-forward-fail");
				});
				return;
			}
			o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(!1, "media"), o("WAWebFrontendMsgGetters").getIsUnsentMedia(i) ? o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "media-panel-header"
				},
				title: s._(
					/*BTDS*/
					""
				),
				onOK: _,
				okText: r("WAWebFbtCommon")("OK"),
				children: s._(
					/*BTDS*/
					"",
					[s._plural(1)]
				)
			})) : o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable, {
				msgs: [o("WAWebStateUtils").unproxy(i)],
				onClose: _
			}), { transition: "modal-flow" });
		};
		return g.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").FORWARD_BUTTON.valueOf(),
			icon: r("WDSIconIcFastForward.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: y
		});
	}
	w.displayName = w.name + " [from " + i.id + "]";
	function A(e) {
		var t = e.msg, n = function() {
			r("WAWebReplyToMsgChatAction")(t);
		};
		return g.jsx(r("WDSMenuItem.react"), {
			testid: "mi-msg-reply",
			onPress: n,
			Icon: o("WAWebReplyPrivatelyRefreshedIcon.react").ReplyPrivatelyRefreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	A.displayName = A.name + " [from " + i.id + "]";
	function F(e) {
		var t = e.msg, n = function(n) {
			n ? o("WAWebSendSpamChatAction").sendMessageReportBlock(t, o("WAWebSpamConstants").SpamFlow.MediaViewer) : o("WAWebSendSpamChatAction").sendMessageReport(t, o("WAWebSpamConstants").SpamFlow.MediaViewer).then(function(e) {
				o("WAWebModalManager").ModalManager.close();
				var n = o("WAWebPrivateMessageComplianceUtils").getPrivateMessageReportComplianceConfig({
					reportId: e,
					msg: t
				});
				n != null && y.load().then(function(e) {
					return e.WAWebComplianceReportTrigger(n);
				}).catch(function(e) {
					o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[ComplianceReport] modal open failed (media viewer): ", ""])), e).sendLogs("report-message-compliance-from-media-viewer-error");
				});
			}).catch(function(e) {
				o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Error while reporting a message from media viewer: ", ""])), e).sendLogs("report-message-from-media-viewer-error");
			});
		}, a = function() {
			var e, r;
			o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebMediaViewerReportSpamPopupLoadable").WAWebMediaViewerReportSpamPopupLoadable, {
				isBusiness: t.senderObj.isBusiness,
				isGroup: o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(t)),
				isBizBot3p: (e = (r = o("WAWebFrontendMsgGetters").getChat(t).contact.businessProfile) == null ? void 0 : r.isBizBot3p) != null ? e : !1,
				onReport: n,
				onCancel: o("WAWebModalManager").closeModalManager,
				title: v(t)
			}));
		};
		return g.jsx(r("WDSMenuItem.react"), {
			onPress: a,
			Icon: r("WDSIconIcThumbDown.react"),
			title: v(t)
		});
	}
	F.displayName = F.name + " [from " + i.id + "]";
	function O(e) {
		var t = e.msg;
		return g.jsx(r("WDSMenuItem.react"), {
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
	O.displayName = O.name + " [from " + i.id + "]";
	function B(e) {
		var t = e.msg, n = e.onClose, a = function() {
			n(), o("WAPromiseDelays").delayMs(o("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION + 250).then(o("WAWebCmd").Cmd.msgInfoDrawer.bind(o("WAWebCmd").Cmd, o("WAWebStateUtils").unproxy(t)));
		};
		return g.jsx(r("WDSMenuItem.react"), {
			onPress: a,
			Icon: o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	B.displayName = B.name + " [from " + i.id + "]", l.ButtonType = C, l.delayedReplyCallback = b, l.getReportSpamTitle = v, l.canDeleteMsg = S, l.isShareSheetEnabled = R, l.getDropdownMenuItemsForWindowsShareSheet = L, l.GoToButton = E, l.CopyMsgIdButton = k, l.ReplyButton = I, l.DeleteButton = T, l.DownloadButton = D, l.OpenWithAnotherAppButton = x, l.SendReactionButton = $, l.KeepInChatButton = P, l.StarButton = N, l.PinButton = M, l.ForwardButton = w, l.PrivateReplyButton = A, l.ReportSpamButton = F, l.AiContentLabelButton = O, l.MsgInfoButton = B;
}), 226);
