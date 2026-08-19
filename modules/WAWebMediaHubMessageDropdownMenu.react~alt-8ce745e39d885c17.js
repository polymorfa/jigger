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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(96), n = e.isMsgVisible, a = e.link, i = e.msg, l = e.onCancel, c = e.onMessageSelect, d;
		t[0] !== i ? (d = o("WAWebFrontendMsgGetters").getChat(i), t[0] = i, t[1] = d) : d = t[1];
		var m = d, p;
		t[2] !== m || t[3] !== n || t[4] !== i || t[5] !== l ? (p = function() {
			o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
				chat: m,
				msgList: [i].map(o("WAWebStateUtils").unproxy),
				isMsgVisible: n,
				onEnd: l,
				theme: "mediaHub"
			})), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected();
		}, t[2] = m, t[3] = n, t[4] = i, t[5] = l, t[6] = p) : p = t[6];
		var _ = p, f;
		if (t[7] !== i) {
			var y, C;
			f = (!o("WAWebMsgGetters").getIsNewsletterMsg(i) || o("WAWebMsgActionCapability").canRevokeNewsletterMsg(i)) && !o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
				isAGMShown: (y = i.ctwaContext) == null ? void 0 : y.automatedGreetingMessageShown,
				msgSource: (C = i.ctwaContext) == null ? void 0 : C.sourceApp,
				msgSubtype: i.subtype,
				msgType: i.type
			}), t[7] = i, t[8] = f;
		} else f = t[8];
		var b = f, v;
		if (t[9] !== b || t[10] !== _ || t[11] !== a || t[12] !== i || t[13] !== l || t[14] !== c) {
			var S = [], R, L;
			t[16] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx(r("WDSIconIcCheckBox.react"), {}), L = s._(
				/*BTDS*/
				""
			), t[16] = R, t[17] = L) : (R = t[16], L = t[17]);
			var E;
			t[18] !== c ? (E = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "mi-msg-select",
				action: c,
				icon: R,
				children: L
			}, "select"), t[18] = c, t[19] = E) : E = t[19], S.push(E);
			var k;
			if (t[20] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsx(r("WAWebDropdownItemSeparator.react"), {}, "separator-select"), t[20] = k) : k = t[20], S.push(k), !o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(i, i.mediaObject != null) && a != null) {
				var I;
				t[21] !== a.href ? (I = function() {
					o("WAWebExternalLink.react").openExternalLink(a.href), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN });
				}, t[21] = a.href, t[22] = I) : I = t[22];
				var T, D;
				t[23] === Symbol.for("react.memo_cache_sentinel") ? (T = u.jsx(r("WDSIconIcOpenInNew.react"), {}), D = s._(
					/*BTDS*/
					""
				), t[23] = T, t[24] = D) : (T = t[23], D = t[24]);
				var x;
				t[25] !== I ? (x = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-msg-link",
					action: I,
					icon: T,
					children: D
				}, "link"), t[25] = I, t[26] = x) : x = t[26], S.push(x);
			}
			var $;
			t[27] !== i ? ($ = function() {
				o("WAWebMediaHubMessageActionHandlers").goToMessageFromModal(i), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.GO_TO_MESSAGE });
			}, t[27] = i, t[28] = $) : $ = t[28];
			var P, N;
			t[29] === Symbol.for("react.memo_cache_sentinel") ? (P = u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, { directional: !0 }), N = s._(
				/*BTDS*/
				""
			), t[29] = P, t[30] = N) : (P = t[29], N = t[30]);
			var M;
			if (t[31] !== $ ? (M = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "mi-msg-go-to-msg",
				action: $,
				icon: P,
				children: N
			}, "go-to-msg"), t[31] = $, t[32] = M) : M = t[32], S.push(M), o("WAWebMsgReply").canReplyMsg(i)) {
				var w;
				t[33] !== i ? (w = async function() {
					o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.REPLY }), await o("WAWebMediaHubMessageActionHandlers").replyToMessageFromModal(i), g(i, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY);
				}, t[33] = i, t[34] = w) : w = t[34];
				var A, F;
				t[35] === Symbol.for("react.memo_cache_sentinel") ? (A = u.jsx(o("WAWebReplyRefreshedIcon.react").ReplyRefreshedIcon, {}), F = s._(
					/*BTDS*/
					""
				), t[35] = A, t[36] = F) : (A = t[35], F = t[36]);
				var O;
				t[37] !== w ? (O = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-msg-reply",
					action: w,
					icon: A,
					children: F
				}, "reply"), t[37] = w, t[38] = O) : O = t[38], S.push(O);
			}
			if (o("WAWebMsgReply").canPrivateReply(i)) {
				var B;
				t[39] !== i ? (B = async function() {
					o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.REPLY }), await o("WAWebMediaHubMessageActionHandlers").replyPrivatelyToMessageFromModal(i), g(i, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY_PRIVATELY);
				}, t[39] = i, t[40] = B) : B = t[40];
				var W, q;
				t[41] === Symbol.for("react.memo_cache_sentinel") ? (W = u.jsx(o("WAWebReplyPrivatelyRefreshedIcon.react").ReplyPrivatelyRefreshedIcon, {}), q = s._(
					/*BTDS*/
					""
				), t[41] = W, t[42] = q) : (W = t[41], q = t[42]);
				var U;
				t[43] !== B ? (U = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-msg-reply-privately",
					action: B,
					icon: W,
					children: q
				}, "reply-privately"), t[43] = B, t[44] = U) : U = t[44], S.push(U);
			}
			if (!r("WAWebEnvironment").isWindows && o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(i, i.mediaObject != null)) {
				var V;
				t[45] !== i || t[46] !== l ? (V = function() {
					o("WAWebMediaHubMessageActionHandlers").handleMessageDownloadClick([i], l, "media_hub"), g(i, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.DOWNLOAD });
				}, t[45] = i, t[46] = l, t[47] = V) : V = t[47];
				var H, G;
				t[48] === Symbol.for("react.memo_cache_sentinel") ? (H = u.jsx(r("WDSIconIcDownload.react"), {}), G = s._(
					/*BTDS*/
					""
				), t[48] = H, t[49] = G) : (H = t[48], G = t[49]);
				var z;
				t[50] !== V ? (z = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-msg-download",
					action: V,
					icon: H,
					children: G
				}, "download"), t[50] = V, t[51] = z) : z = t[51], S.push(z);
			}
			if (o("WAWebCopyUtils").canCopyMessage(i)) {
				var j;
				t[52] !== i ? (j = function() {
					o("WAWebCopyUtils").copyMessageToClipboard(i), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), g(i, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY);
				}, t[52] = i, t[53] = j) : j = t[53];
				var K, Q;
				t[54] === Symbol.for("react.memo_cache_sentinel") ? (K = u.jsx(r("WDSIconIcContentCopy.react"), {}), Q = s._(
					/*BTDS*/
					""
				), t[54] = K, t[55] = Q) : (K = t[54], Q = t[55]);
				var X;
				t[56] !== j ? (X = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-msg-copy",
					action: j,
					icon: K,
					children: Q
				}, "copy"), t[56] = j, t[57] = X) : X = t[57], S.push(X);
			}
			if (o("WAWebMsgActionCapability").canForwardMsg(i)) {
				var Y;
				t[58] !== i ? (Y = function() {
					o("WAWebMediaHubMessageActionHandlers").handleForwardClick(i, r("WAWebNoop")), g(i, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.FORWARD), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.FORWARD });
				}, t[58] = i, t[59] = Y) : Y = t[59];
				var J, Z;
				t[60] === Symbol.for("react.memo_cache_sentinel") ? (J = u.jsx(r("WDSIconIcFastForward.react"), {
					directional: !0,
					testid: "forward-refreshed"
				}), Z = s._(
					/*BTDS*/
					""
				), t[60] = J, t[61] = Z) : (J = t[60], Z = t[61]);
				var ee;
				t[62] !== Y ? (ee = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-msg-forward",
					action: Y,
					icon: J,
					children: Z
				}, "forward"), t[62] = Y, t[63] = ee) : ee = t[63], S.push(ee);
			}
			if (o("WAWebKeepInChatMsgUtils").canShowUnkeepOption(i)) {
				var te;
				t[64] !== i ? (te = function() {
					o("WAWebMediaHubMessageActionHandlers").handleUndoKeepClick(i).catch(r("WAWebNoop")), g(i, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN);
				}, t[64] = i, t[65] = te) : te = t[65];
				var ne, re;
				t[66] === Symbol.for("react.memo_cache_sentinel") ? (ne = u.jsx(r("WDSIconWdsIcBookmarkSlash.react"), {}), re = s._(
					/*BTDS*/
					""
				), t[66] = ne, t[67] = re) : (ne = t[66], re = t[67]);
				var oe;
				t[68] !== te ? (oe = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-msg-unkeep",
					action: te,
					icon: ne,
					children: re
				}, "unkeep"), t[68] = te, t[69] = oe) : oe = t[69], S.push(oe);
			} else if (!o("WAWebMsgGetters").getIsKept(i) && o("WAWebKeepInChatMsgUtils").canShowKeepOption(i)) {
				var ae;
				t[70] !== i ? (ae = function() {
					o("WAWebMediaHubMessageActionHandlers").handleKeepClick(i).catch(r("WAWebNoop")), g(i, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN);
				}, t[70] = i, t[71] = ae) : ae = t[71];
				var ie, le;
				t[72] === Symbol.for("react.memo_cache_sentinel") ? (ie = u.jsx(r("WDSIconIcBookmark.react"), {}), le = s._(
					/*BTDS*/
					""
				), t[72] = ie, t[73] = le) : (ie = t[72], le = t[73]);
				var se;
				t[74] !== ae ? (se = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-msg-keep",
					action: ae,
					icon: ie,
					children: le
				}, "keep"), t[74] = ae, t[75] = se) : se = t[75], S.push(se);
			}
			if (o("WAWebMsgActionCapability").canStarMsg(i)) {
				if (i.star) {
					var ue;
					t[76] !== i ? (ue = function() {
						o("WAWebMediaHubMessageActionHandlers").handleMessageUnstarClick(i), g(i, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.STAR });
					}, t[76] = i, t[77] = ue) : ue = t[77];
					var ce, de;
					t[78] === Symbol.for("react.memo_cache_sentinel") ? (ce = u.jsx(o("WAWebUnstarRefreshedIcon.react").UnstarRefreshedIcon, {}), de = s._(
						/*BTDS*/
						""
					), t[78] = ce, t[79] = de) : (ce = t[78], de = t[79]);
					var me;
					t[80] !== ue ? (me = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						testid: "mi-msg-unstar",
						action: ue,
						icon: ce,
						children: de
					}, "star"), t[80] = ue, t[81] = me) : me = t[81], S.push(me);
				} else if (!o("WAWebMsgGetters").getIsKept(i)) {
					var pe;
					t[82] !== i ? (pe = function() {
						o("WAWebMediaHubMessageActionHandlers").handleMessageStarClick(i), g(i, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.STAR });
					}, t[82] = i, t[83] = pe) : pe = t[83];
					var _e, fe;
					t[84] === Symbol.for("react.memo_cache_sentinel") ? (_e = u.jsx(o("WAWebStarRefreshedIcon.react").StarRefreshedIcon, {}), fe = s._(
						/*BTDS*/
						""
					), t[84] = _e, t[85] = fe) : (_e = t[84], fe = t[85]);
					var ge;
					t[86] !== pe ? (ge = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						testid: "mi-msg-star",
						action: pe,
						icon: _e,
						children: fe
					}, "star"), t[86] = pe, t[87] = ge) : ge = t[87], S.push(ge);
				}
			}
			if (b) {
				var he;
				t[88] === Symbol.for("react.memo_cache_sentinel") ? (he = u.jsx(r("WAWebDropdownItemSeparator.react"), {}, "separator"), t[88] = he) : he = t[88], S.push(he);
				var ye;
				t[89] !== _ || t[90] !== i ? (ye = function() {
					_(), g(i, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DELETE), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.DELETE });
				}, t[89] = _, t[90] = i, t[91] = ye) : ye = t[91];
				var Ce;
				t[92] === Symbol.for("react.memo_cache_sentinel") ? (Ce = u.jsx(o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon, {}), t[92] = Ce) : Ce = t[92];
				var be;
				t[93] === Symbol.for("react.memo_cache_sentinel") ? (be = s._(
					/*BTDS*/
					""
				), t[93] = be) : be = t[93];
				var ve;
				t[94] !== ye ? (ve = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-msg-delete",
					action: ye,
					icon: Ce,
					xstyle: h.delete,
					children: be
				}, "delete"), t[94] = ye, t[95] = ve) : ve = t[95], S.push(ve);
			}
			v = u.jsx(u.Fragment, { children: S }), t[9] = b, t[10] = _, t[11] = a, t[12] = i, t[13] = l, t[14] = c, t[15] = v;
		} else v = t[15];
		return v;
	}
	l.WAWebMediaHubMessageDropdownMenu = f, l.DropdownMenuItems = y;
}), 226);
