__d("WAWebMediaHubMessageDropdownMenu.react", [
	"fbt",
	"WAWebBizCtwaAGMUtils",
	"WAWebChatGetters",
	"WAWebChatRefreshedIcon.react",
	"WAWebCopyUtils",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebDeleteRevokeMsgFlow.react",
	"WAWebDropdown.react",
	"WAWebDropdownItem.react",
	"WAWebDropdownItemSeparator.react",
	"WAWebEnvironment",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebIcChevronDownMenuIcon.react",
	"WAWebKeepInChatMsgUtils",
	"WAWebMediaHubContextProvider",
	"WAWebMediaHubLogger",
	"WAWebMediaHubMessageActionHandlers",
	"WAWebMessageContextMenuActionsWamEvent",
	"WAWebModalManager",
	"WAWebMsgActionCanDownloadMsg",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebMsgReply",
	"WAWebNoop",
	"WAWebReplyPrivatelyRefreshedIcon.react",
	"WAWebReplyRefreshedIcon.react",
	"WAWebRevokeMetricUtils",
	"WAWebStarRefreshedIcon.react",
	"WAWebStateUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUnstarRefreshedIcon.react",
	"WAWebWamEnumActionCode",
	"WAWebWamEnumMessageContextMenuActionType",
	"WAWebWamEnumMessageContextMenuOptionType",
	"WDSIconIcBookmark.react",
	"WDSIconIcCheckBox.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcDownload.react",
	"WDSIconIcFastForward.react",
	"WDSIconIcOpenInNew.react",
	"WDSIconWdsIcBookmarkSlash.react",
	"WDSMenuBarItem.react",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		isForMedia: {
			position: "x10l6tqk",
			top: "xfr5jun",
			insetInlineEnd: "x11dcrhx",
			left: null,
			right: null,
			zIndex: "x12xzxwr",
			transition: "x13k7yer",
			opacity: "xg01cxk",
			$$css: !0
		},
		opacityVisible: {
			opacity: "x1hc1fzr",
			$$css: !0
		},
		opacityInvisble: {
			opacity: "xg01cxk",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.isForMedia, n = t === void 0 ? !1 : t, a = e.isHover, i = e.link, l = e.msg, c = e.onHover, f = e.searchType, g = m(null), h = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(), C = h.contextMenuMsg, b = h.isSelectMode, v = h.onMessageSelect, S = h.setContextMenuMsg, R = h.setIsSelectMode, L = function() {
			R(!0), v(l);
		}, E = p(!1), k = E[0], I = E[1], T = function() {
			R(!1);
		};
		o("useWAWebListener").useListener(l, "revoked", function() {
			k && S(null);
		}), d(function() {
			return (C == null ? void 0 : C.msg) === l && (C == null ? void 0 : C.searchType) === f ? I(!0) : I(!1);
		}, [
			C,
			l,
			f
		]);
		var D = (a || k) && !b;
		if (!b) {
			var x = u.jsx(y, {
				msg: l,
				onMessageSelect: L,
				link: i,
				onCancel: T
			}), $ = C == null ? void 0 : C.event;
			return u.jsxs(o("WAWebFlex.react").FlexItem, {
				shrink: 0,
				align: "center",
				tabIndex: -1,
				xstyle: [
					_.opacityInvisble,
					n && _.isForMedia,
					D && _.opacityVisible
				],
				children: [
					u.jsx(r("WDSMenuBarItem.react"), {
						buttonSize: "small",
						buttonType: n ? "media" : "default",
						title: s._(
							/*BTDS*/
							""
						),
						onClick: D ? function(e) {
							e == null || e.stopPropagation(), S(k ? null : {
								msg: l,
								searchType: f
							});
						} : void 0,
						icon: o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon
					}),
					k && u.jsx(o("WAWebUimUie.react").UIE, {
						displayName: "MsgContextMenu",
						escapable: !0,
						popable: !0,
						dismissOnWindowResize: !0,
						requestDismiss: function() {
							S(null);
						},
						children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: $ != null ? {
							menu: x,
							event: $,
							dirX: o("WAWebDropdown.react").DirX.RIGHT
						} : {
							menu: x,
							anchor: g == null ? void 0 : g.current,
							dirX: n ? o("WAWebDropdown.react").DirX.RIGHT : o("WAWebDropdown.react").DirX.LEFT,
							offsetX: n ? -12 : 0,
							offsetY: n ? 16 : 0
						} })
					}),
					u.jsx("div", babelHelpers.extends({ ref: g }, {
						0: {},
						2: { className: "x10l6tqk xfr5jun x11dcrhx x12xzxwr x13k7yer xg01cxk" },
						1: { className: "xomnu4r xdg88n9" },
						3: { className: "x10l6tqk x12xzxwr x13k7yer xg01cxk xomnu4r xdg88n9" }
					}[!!n << 1 | !!n << 0]))
				]
			});
		}
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e, t) {
		new (o("WAWebMessageContextMenuActionsWamEvent")).MessageContextMenuActionsWamEvent({
			isAGroup: o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(e)),
			isMultiAction: !1,
			isOriginalSender: o("WAWebMsgGetters").getIsSentByMe(e),
			messageContextMenuAction: o("WAWebWamEnumMessageContextMenuActionType").MESSAGE_CONTEXT_MENU_ACTION_TYPE.CLICK,
			messageContextMenuOption: t
		}).commit();
	}
	var h = { delete: {
		color: "xqnyt8g",
		$$css: !0
	} };
	function y(e) {
		var t, n, a = e.isMsgVisible, i = e.link, l = e.msg, c = e.onCancel, d = e.onMessageSelect, m = o("WAWebFrontendMsgGetters").getChat(l), p = function() {
			o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
				chat: m,
				msgList: [l].map(o("WAWebStateUtils").unproxy),
				isMsgVisible: a,
				onEnd: c,
				theme: "mediaHub"
			})), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected();
		}, _ = (!o("WAWebMsgGetters").getIsNewsletterMsg(l) || o("WAWebMsgActionCapability").canRevokeNewsletterMsg(l)) && !o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
			isAGMShown: (t = l.ctwaContext) == null ? void 0 : t.automatedGreetingMessageShown,
			msgSource: (n = l.ctwaContext) == null ? void 0 : n.sourceApp,
			msgSubtype: l.subtype,
			msgType: l.type
		}), f = [];
		return f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-select",
			action: d,
			icon: u.jsx(r("WDSIconIcCheckBox.react"), {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "select")), f.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {}, "separator-select")), !o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(l, l.mediaObject != null) && i != null && f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-link",
			action: function() {
				o("WAWebExternalLink.react").openExternalLink(i.href), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN });
			},
			icon: u.jsx(r("WDSIconIcOpenInNew.react"), {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "link")), f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-go-to-msg",
			action: function() {
				o("WAWebMediaHubMessageActionHandlers").goToMessageFromModal(l), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.GO_TO_MESSAGE });
			},
			icon: u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, { directional: !0 }),
			children: s._(
				/*BTDS*/
				""
			)
		}, "go-to-msg")), o("WAWebMsgReply").canReplyMsg(l) && f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-reply",
			action: async function() {
				o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.REPLY }), await o("WAWebMediaHubMessageActionHandlers").replyToMessageFromModal(l), g(l, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY);
			},
			icon: u.jsx(o("WAWebReplyRefreshedIcon.react").ReplyRefreshedIcon, {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "reply")), o("WAWebMsgReply").canPrivateReply(l) && f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-reply-privately",
			action: async function() {
				o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.REPLY }), await o("WAWebMediaHubMessageActionHandlers").replyPrivatelyToMessageFromModal(l), g(l, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY_PRIVATELY);
			},
			icon: u.jsx(o("WAWebReplyPrivatelyRefreshedIcon.react").ReplyPrivatelyRefreshedIcon, {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "reply-privately")), !r("WAWebEnvironment").isWindows && o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(l, l.mediaObject != null) && f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-download",
			action: function() {
				o("WAWebMediaHubMessageActionHandlers").handleMessageDownloadClick([l], c, "media_hub"), g(l, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.DOWNLOAD });
			},
			icon: u.jsx(r("WDSIconIcDownload.react"), {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "download")), o("WAWebCopyUtils").canCopyMessage(l) && f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-copy",
			action: function() {
				o("WAWebCopyUtils").copyMessageToClipboard(l), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), g(l, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY);
			},
			icon: u.jsx(r("WDSIconIcContentCopy.react"), {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "copy")), o("WAWebMsgActionCapability").canForwardMsg(l) && f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-forward",
			action: function() {
				o("WAWebMediaHubMessageActionHandlers").handleForwardClick(l, r("WAWebNoop")), g(l, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.FORWARD), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.FORWARD });
			},
			icon: u.jsx(r("WDSIconIcFastForward.react"), {
				directional: !0,
				testid: "forward-refreshed"
			}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "forward")), o("WAWebKeepInChatMsgUtils").canShowUnkeepOption(l) ? f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-unkeep",
			action: function() {
				o("WAWebMediaHubMessageActionHandlers").handleUndoKeepClick(l).catch(r("WAWebNoop")), g(l, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN);
			},
			icon: u.jsx(r("WDSIconWdsIcBookmarkSlash.react"), {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "unkeep")) : !o("WAWebMsgGetters").getIsKept(l) && o("WAWebKeepInChatMsgUtils").canShowKeepOption(l) && f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-keep",
			action: function() {
				o("WAWebMediaHubMessageActionHandlers").handleKeepClick(l).catch(r("WAWebNoop")), g(l, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN);
			},
			icon: u.jsx(r("WDSIconIcBookmark.react"), {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "keep")), o("WAWebMsgActionCapability").canStarMsg(l) && (l.star ? f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-unstar",
			action: function() {
				o("WAWebMediaHubMessageActionHandlers").handleMessageUnstarClick(l), g(l, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.STAR });
			},
			icon: u.jsx(o("WAWebUnstarRefreshedIcon.react").UnstarRefreshedIcon, {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "star")) : o("WAWebMsgGetters").getIsKept(l) || f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-star",
			action: function() {
				o("WAWebMediaHubMessageActionHandlers").handleMessageStarClick(l), g(l, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.STAR });
			},
			icon: u.jsx(o("WAWebStarRefreshedIcon.react").StarRefreshedIcon, {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "star"))), _ && (f.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {}, "separator")), f.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-msg-delete",
			action: function() {
				p(), g(l, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DELETE), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.DELETE });
			},
			icon: u.jsx(o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon, {}),
			xstyle: h.delete,
			children: s._(
				/*BTDS*/
				""
			)
		}, "delete"))), u.jsx(u.Fragment, { children: f });
	}
	y.displayName = y.name + " [from " + i.id + "]", l.WAWebMediaHubMessageDropdownMenu = f, l.DropdownMenuItems = y;
}), 226);
