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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(10), n = e.msg, a = e.onClose, i = e.onRequestGoToMsg, l = e.type, u = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"), c;
		t[0] !== n || t[1] !== u ? (c = function() {
			var e, t = (e = u.existsDrawer()) != null ? e : !1;
			t && o("WAWebColumnChangeDispatch").Column.column === 2 && o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
			var r = o("WAWebFrontendMsgGetters").getChat(n), a = o("WAWebThreadMsgUtils").getMsgAiThread(o("WAWebStateUtils").unproxy(n));
			if (a != null && o("WAWebBotGating").isAiChatThreadsEnabled()) {
				o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(r, {
					type: "MessageSearch",
					msg: o("WAWebStateUtils").unproxy(n)
				}), o("WAWebModalManager").ModalManager.close();
				return;
			}
			var i = o("WAWebChatMessageSearch").getSearchContext({
				chat: r,
				msgKey: o("WAWebStateUtils").unproxy(n).id
			});
			o("WAWebCmd").Cmd.openChatAt({
				chat: r,
				msgContext: i,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MediaViewer
			}).then(function(e) {
				e && (o("WAWebModalManager").ModalManager.close(), o("WAWebComposeBoxActions").ComposeBoxActions.focus(o("WAWebFrontendMsgGetters").getChat(n)));
			});
		}, t[0] = n, t[1] = u, t[2] = c) : c = t[2];
		var d = c, m;
		t[3] !== d || t[4] !== a || t[5] !== i ? (m = function(t) {
			t == null || t.stopPropagation();
			var e = (i == null ? void 0 : i(d)) === !0;
			e || (a(), d());
		}, t[3] = d, t[4] = a, t[5] = i, t[6] = m) : m = t[6];
		var p = m, _;
		return t[7] !== p || t[8] !== l ? (_ = l === y.Dropdown ? f.jsx(r("WDSMenuItem.react"), {
			onPress: p,
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
			onClick: p
		}), t[7] = p, t[8] = l, t[9] = _) : _ = t[9], _;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(2), n = e.msg, a;
		return t[0] !== n.id ? (a = f.jsx(r("WDSMenuItem.react"), {
			testid: "mi-msg-copy-id",
			onPress: function() {
				o("WAWebCopyToClipboard").copyTextToClipboard(n.id.toString());
			},
			title: "Copy Msg ID"
		}, "copy-id"), t[0] = n.id, t[1] = a) : a = t[1], a;
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(8), n = e.msg, a = e.onClose, i = e.theme, l = i === void 0 ? "default" : i, u;
		t[0] !== n || t[1] !== a || t[2] !== l ? (u = function(t) {
			a(), o("WAPromiseDelays").delayMs(o("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION).then(function() {
				if (l === "media_hub") {
					var e = o("WAWebFrontendMsgGetters").getChat(n);
					return o("WAWebCmd").Cmd.openChatAt({
						chat: e,
						msgContext: {
							collection: e.msgs,
							msg: e.msgs.assertGet(n.id),
							key: n.id,
							enableAnimation: !0,
							highlightMsg: !0
						},
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MediaViewer
					});
				}
				return Promise.resolve(!0);
			}).then(C.bind(null, o("WAWebStateUtils").unproxy(n)));
		}, t[0] = n, t[1] = a, t[2] = l, t[3] = u) : u = t[3];
		var c = u, d;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = r("WAWebMediaPanelHeaderTestIds").REPLY_BUTTON.valueOf(), t[4] = d) : d = t[4];
		var m;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[5] = m) : m = t[5];
		var p;
		return t[6] !== c ? (p = f.jsx(r("WDSMenuBarItem.react"), {
			testid: d,
			icon: r("WDSIconIcReply.react"),
			title: m,
			onClick: c
		}), t[6] = c, t[7] = p) : p = t[7], p;
	}
	function I(e) {
		var t = o("react-compiler-runtime").c(7), n = e.msg, a = e.onClose, i;
		t[0] !== n || t[1] !== a ? (i = function(t) {
			o("WAWebModalManager").ModalManager.open(f.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
				chat: o("WAWebFrontendMsgGetters").getChat(n),
				msgList: [o("WAWebStateUtils").unproxy(n)],
				onDelete: a
			})), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected();
		}, t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i, u;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = r("WAWebMediaPanelHeaderTestIds").DELETE_BUTTON.valueOf(), t[3] = u) : u = t[3];
		var c;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[4] = c) : c = t[4];
		var d;
		return t[5] !== l ? (d = f.jsx(r("WDSMenuBarItem.react"), {
			testid: u,
			icon: r("WDSIconIcDelete.react"),
			title: c,
			onClick: l
		}), t[5] = l, t[6] = d) : d = t[6], d;
	}
	function T(e) {
		var t = o("react-compiler-runtime").c(10), a = e.isMediaDownloadable, i = e.msg, l = e.onDownloadClick, u = e.onDownloadOverride, c = e.type, d = o("useWAWebHdImageChildMsg").useHdImageChildMsg(i, o("WAWebMediaTypes").MediaDataStage.RESOLVED), m;
		t[0] !== d || t[1] !== i || t[2] !== l || t[3] !== u ? (m = function(t) {
			if (t == null || t.stopPropagation(), u != null) u();
			else {
				var e = o("WAWebStateUtils").unproxy(d != null ? d : i);
				(n("cr:12467") == null ? void 0 : n("cr:12467").trySaveAs(e)) !== !0 && o("WAWebFileSaver").FileSaver.initDownload(e);
			}
			l == null || l();
		}, t[0] = d, t[1] = i, t[2] = l, t[3] = u, t[4] = m) : m = t[4];
		var p = m;
		if (!a()) return null;
		var _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = r("WAWebEnvironment").isWindows ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[5] = _) : _ = t[5];
		var g = _, h;
		return t[6] !== p || t[7] !== a || t[8] !== c ? (h = c === y.Dropdown ? f.jsx(r("WDSMenuItem.react"), {
			onPress: p,
			disabled: !a(),
			Icon: o("WAWebIcDownloadIcon.react").IcDownloadIcon,
			title: g
		}) : f.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").DOWNLOAD_BUTTON.valueOf(),
			icon: o("WAWebIcDownloadIcon.react").IcDownloadIcon,
			title: g,
			disabled: !a(),
			onClick: p
		}), t[6] = p, t[7] = a, t[8] = c, t[9] = h) : h = t[9], h;
	}
	function D(e) {
		var t = o("react-compiler-runtime").c(5), a = e.msg, i;
		t[0] !== a ? (i = function(t) {
			n("cr:40048") == null || n("cr:40048").handleOpenAnotherAppButtonClick(t, a);
		}, t[0] = a, t[1] = i) : i = t[1];
		var l = i, u;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (u = s._(
			/*BTDS*/
			""
		), t[2] = u) : u = t[2];
		var c;
		return t[3] !== l ? (c = f.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcOpenInNew.react"),
			title: u,
			onClick: l
		}), t[3] = l, t[4] = c) : c = t[4], c;
	}
	function x(e) {
		var t = o("react-compiler-runtime").c(5), n = e.msg, a = e.openReactionTray, i = e.sendReactionButtonRef;
		if (n.type === o("WAWebMsgType").MSG_TYPE.STICKER) return null;
		var l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = r("WAWebMediaPanelHeaderTestIds").REACTIONS_BUTTON.valueOf(), t[0] = l) : l = t[0];
		var u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = s._(
			/*BTDS*/
			""
		), t[1] = u) : u = t[1];
		var c;
		return t[2] !== a || t[3] !== i ? (c = f.jsx(r("WDSMenuBarItem.react"), {
			ref: i,
			testid: l,
			icon: r("WDSIconIcMood.react"),
			title: u,
			onClick: a
		}), t[2] = a, t[3] = i, t[4] = c) : c = t[4], c;
	}
	function $(e) {
		var t = o("react-compiler-runtime").c(16), n = e.msg, a = e.theme, i = a === void 0 ? "default" : a, l, u, c, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = [o("WAWebMsgGetters").getIsKept], t[0] = d) : d = t[0];
		var m = o("useWAWebMsgValues").useMsgValues(n.id, d), p = m[0], _ = i === "media_hub", g;
		t[1] !== n || t[2] !== _ ? (g = function(t) {
			t == null || t.stopPropagation(), o("WAWebKeepInChatActions").runKeepInChatUX(o("WAWebStateUtils").unproxy(n), o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.MEDIA, _);
		}, t[1] = n, t[2] = _, t[3] = g) : g = t[3];
		var h = g, y;
		t[4] !== n || t[5] !== _ ? (y = function(t) {
			t == null || t.stopPropagation(), o("WAWebKeepInChatActions").runUndoKeepInChatUX(o("WAWebStateUtils").unproxy(n), o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.MEDIA, _);
		}, t[4] = n, t[5] = _, t[6] = y) : y = t[6];
		var C = y;
		if (p && o("WAWebKeepInChatMsgUtils").canShowUnkeepOption(n)) {
			l = r("WDSIconWdsIcBookmarkSlash.react"), u = C;
			var b;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
				/*BTDS*/
				""
			), t[7] = b) : b = t[7], c = b;
		} else if (!p && o("WAWebKeepInChatMsgUtils").canShowKeepOption(n)) {
			l = r("WDSIconIcBookmark.react"), u = h;
			var v;
			t[8] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
				/*BTDS*/
				""
			), t[8] = v) : v = t[8], c = v;
		} else return null;
		var S;
		t[9] !== p ? (S = p ? r("WAWebMediaPanelHeaderTestIds").UNKEEP_BUTTON.valueOf() : r("WAWebMediaPanelHeaderTestIds").KEEP_BUTTON.valueOf(), t[9] = p, t[10] = S) : S = t[10];
		var R;
		return t[11] !== l || t[12] !== u || t[13] !== S || t[14] !== c ? (R = f.jsx(r("WDSMenuBarItem.react"), {
			testid: S,
			icon: l,
			title: c,
			onClick: u
		}, "keep-in-chat-button"), t[11] = l, t[12] = u, t[13] = S, t[14] = c, t[15] = R) : R = t[15], R;
	}
	function P(e) {
		var t = o("react-compiler-runtime").c(14), n = e.msg, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [o("WAWebMsgGetters").getStar], t[0] = a) : a = t[0];
		var i = o("useWAWebMsgValues").useMsgValues(n.id, a), l = i[0], u, c, d;
		if (l) {
			var m;
			t[1] !== n ? (m = function(t) {
				t == null || t.stopPropagation(), o("WAWebCmd").Cmd.sendUnstarMsgs(o("WAWebFrontendMsgGetters").getChat(n), [o("WAWebStateUtils").unproxy(n)]);
			}, t[1] = n, t[2] = m) : m = t[2], u = m, c = r("WDSIconWdsIcGradeSlash.react");
			var p;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
				/*BTDS*/
				"",
				[s._plural(1)]
			), t[3] = p) : p = t[3], d = p;
		} else {
			var _;
			t[4] !== n ? (_ = function(t) {
				t == null || t.stopPropagation(), o("WAWebCmd").Cmd.sendStarMsgs(o("WAWebFrontendMsgGetters").getChat(n), [o("WAWebStateUtils").unproxy(n)]);
			}, t[4] = n, t[5] = _) : _ = t[5], u = _, c = r("WDSIconIcGrade.react");
			var g;
			t[6] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
				/*BTDS*/
				"",
				[s._plural(1)]
			), t[6] = g) : g = t[6], d = g;
		}
		var h;
		t[7] !== l ? (h = l ? r("WAWebMediaPanelHeaderTestIds").UNSTAR_BUTTON.valueOf() : r("WAWebMediaPanelHeaderTestIds").STAR_BUTTON.valueOf(), t[7] = l, t[8] = h) : h = t[8];
		var y;
		return t[9] !== u || t[10] !== c || t[11] !== h || t[12] !== d ? (y = f.jsx(r("WDSMenuBarItem.react"), {
			testid: h,
			icon: c,
			title: d,
			onClick: u
		}, "star-button"), t[9] = u, t[10] = c, t[11] = h, t[12] = d, t[13] = y) : y = t[13], y;
	}
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
		var t = o("react-compiler-runtime").c(5), n = e.msg, a;
		t[0] !== n ? (a = function() {
			r("WAWebReplyToMsgChatAction")(n);
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[2] = l) : l = t[2];
		var u;
		return t[3] !== i ? (u = f.jsx(r("WDSMenuItem.react"), {
			testid: "mi-msg-reply",
			onPress: i,
			Icon: o("WAWebReplyPrivatelyRefreshedIcon.react").ReplyPrivatelyRefreshedIcon,
			title: l
		}), t[3] = i, t[4] = u) : u = t[4], u;
	}
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
		var t = o("react-compiler-runtime").c(5), n = e.msg, a;
		t[0] !== n ? (a = function() {
			return o("WAWebNewsletterAddAiContentLabelFlow").runAddAiContentLabelFlow(n);
		}, t[0] = n, t[1] = a) : a = t[1];
		var i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[2] = i) : i = t[2];
		var l;
		return t[3] !== a ? (l = f.jsx(r("WDSMenuItem.react"), {
			testid: "mi-media-ai-content-label",
			onPress: a,
			Icon: r("WDSIconWdsIcAiContent.react"),
			title: i
		}), t[3] = a, t[4] = l) : l = t[4], l;
	}
	function O(e) {
		var t = o("react-compiler-runtime").c(6), n = e.msg, a = e.onClose, i;
		t[0] !== n || t[1] !== a ? (i = function() {
			a(), o("WAPromiseDelays").delayMs(o("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION + 250).then(o("WAWebCmd").Cmd.msgInfoDrawer.bind(o("WAWebCmd").Cmd, o("WAWebStateUtils").unproxy(n)));
		}, t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i, u;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = s._(
			/*BTDS*/
			""
		), t[3] = u) : u = t[3];
		var c;
		return t[4] !== l ? (c = f.jsx(r("WDSMenuItem.react"), {
			onPress: l,
			Icon: o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
			title: u
		}), t[4] = l, t[5] = c) : c = t[5], c;
	}
	l.ButtonType = y, l.delayedReplyCallback = C, l.getReportSpamTitle = b, l.canDeleteMsg = v, l.isShareSheetEnabled = S, l.getDropdownMenuItemsForWindowsShareSheet = R, l.GoToButton = L, l.CopyMsgIdButton = E, l.ReplyButton = k, l.DeleteButton = I, l.DownloadButton = T, l.OpenWithAnotherAppButton = D, l.SendReactionButton = x, l.KeepInChatButton = $, l.StarButton = P, l.PinButton = N, l.ForwardButton = M, l.PrivateReplyButton = w, l.ReportSpamButton = A, l.AiContentLabelButton = F, l.MsgInfoButton = O;
}), 226);
