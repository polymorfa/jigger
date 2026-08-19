__d("WAWebMultiSelectDelete.react", [
	"fbt",
	"WAArrayUtils",
	"WAWebABProps",
	"WAWebBizCtwaAGMUtils",
	"WAWebCmd",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebDeleteRevokeMsgFlow.react",
	"WAWebEnforcementActionLogging",
	"WAWebFrontendMsgGetters",
	"WAWebIconButton.react",
	"WAWebL10nFilesize",
	"WAWebModalManager",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebMultiSelectUtils",
	"WAWebRevokeMetricUtils",
	"WAWebStateUtils",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebWamEnumMessageContextMenuOptionType",
	"WDSBaseCheckbox.react",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSDialogBridge",
	"WDSIconIcDelete.react",
	"WDSMenuBarItem.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"sumBy"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = {
		btnMargin: {
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		},
		mediaHubIcon: {
			color: "xqnyt8g",
			width: "x1849jeq",
			":disabled_color": "x9g49ws",
			$$css: !0
		},
		capitalised: {
			textTransform: "xn80e1m",
			$$css: !0
		},
		deleteHover: {
			":hover_backgroundColor": "x1dulx1b",
			$$css: !0
		},
		paddingEnd12: {
			paddingInlineEnd: "xde1mab",
			$$css: !0
		}
	};
	function m(e) {
		"use no forget";
		var t, n = e.dataTab, a = n === void 0 ? o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR : n, i = e.onCancel, l = e.onDeleteModalOpen, c = e.selectedMessages, m = e.theme, f = e.toastPosition, h = (t = c == null ? void 0 : c.getSelected()) != null ? t : [], C = r("sumBy")(h, function(e) {
			var t;
			return (t = e.mediaData) == null ? void 0 : t.size;
		}), b = h.every(function(e) {
			var t, n;
			return (!o("WAWebMsgGetters").getIsNewsletterMsg(e) || o("WAWebMsgActionCapability").canRevokeNewsletterMsg(e)) && !o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
				isAGMShown: (t = e.ctwaContext) == null ? void 0 : t.automatedGreetingMessageShown,
				msgSource: (n = e.ctwaContext) == null ? void 0 : n.sourceApp,
				msgSubtype: e.subtype,
				msgType: e.type
			});
		}), S = h.length, R = function() {
			var e = h.map(function(e) {
				return o("WAWebFrontendMsgGetters").getChat(e);
			}), t = e.some(Boolean);
			if (t) {
				var n = h.map(function(e) {
					return o("WAWebStateUtils").unproxy(e);
				}), a = p(n), s = n.some(function(e) {
					return o("WAWebFrontendMsgGetters").getAsMms(e) && e.type !== o("WAWebMsgType").MSG_TYPE.STICKER;
				});
				_({
					msgList: n,
					revokable: a,
					theme: m
				}) ? o("WDSDialogBridge").openWDSDialog(u.jsx(v, {
					msgList: n,
					onEnd: i,
					revokable: a,
					toastPosition: f
				})) : g({
					revokable: a,
					shouldShowDeleteMediaFileCheckbox: s,
					theme: m
				}) ? o("WDSDialogBridge").openWDSDialog(u.jsx(y, {
					msgList: n,
					onEnd: i,
					toastPosition: f
				})) : o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
					chats: e,
					msgList: n,
					toastPosition: f,
					onEnd: i,
					theme: m
				})), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.trashCanSelected(), l == null || l();
			}
			o("WAWebMultiSelectUtils").logMessageActionClickMetric(h, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DELETE);
		}, L = !S || !b, E = u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcDelete.react"),
			testid: "multi-select-bar-delete",
			tabOrder: a,
			disabled: L,
			title: s._(
				/*BTDS*/
				"",
				[s._plural(S)]
			),
			onClick: R,
			marginInlineXstyle: d.btnMargin
		}), k = u.jsx(r("WDSButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._plural(S)]
			),
			disabled: L,
			Icon: o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
			onPress: R,
			tabOrder: a,
			testid: "multi-select-bar-delete",
			variant: "borderless",
			xstyle: d.mediaHubIcon
		});
		return m === "mediaHub" ? u.jsx(r("WAWebIconButton.react"), {
			onClick: L ? null : R,
			icon: k,
			xstyle: !L && d.deleteHover,
			children: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
				weight: "semibold",
				xstyle: [d.capitalised, d.paddingEnd12],
				color: L ? "wdsContentDisabled" : "wdsSecondaryNegativeEmphasized",
				children: C > 0 ? o("WAWebL10nFilesize").getL10nFilesize(C) : null
			})
		}) : E;
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.reduce(function(e, t) {
			var n = o("WAWebMsgActionCapability").canSenderRevokeMsg(t), r = o("WAWebMsgActionCapability").canAdminRevokeMsg(t), a = o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(t), i = e.sender + (n || a ? 1 : 0), l = e.admin + (r && !a ? 1 : 0), s = n || r || a, u = e.canRevoke && s;
			return {
				sender: i,
				admin: l,
				canRevoke: u
			};
		}, {
			sender: 0,
			admin: 0,
			canRevoke: !0
		}), n = t.admin, r = t.canRevoke, a = t.sender;
		return {
			sender: a,
			admin: n,
			canRevoke: r
		};
	}
	function _(e) {
		var t = e.msgList, n = e.revokable, r = e.theme;
		return n.canRevoke && n.admin === 0 && !f(t) && r !== "mediaHub" && o("WAWebABProps").getABPropConfigValue("wds_web_dialog");
	}
	function f(e) {
		return e.length === 1 && o("WAWebMsgGetters").getIsEdited(e[0]) && o("WAWebMsgGetters").getIsFailed(e[0]);
	}
	function g(e) {
		var t = e.revokable, n = e.shouldShowDeleteMediaFileCheckbox, r = e.theme;
		return !t.canRevoke && n && r !== "mediaHub" && o("WAWebABProps").getABPropConfigValue("wds_web_dialog");
	}
	function h(e) {
		return s._(
			/*BTDS*/
			"",
			[s._plural(e.length)]
		);
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = o("react-compiler-runtime").c(33), n = e.msgList, a = e.onEnd, i = e.toastPosition, l = c(!0), d = l[0], m = l[1], p;
		t[0] !== n ? (p = o("WAArrayUtils").groupBy(n, b), t[0] = n, t[1] = p) : p = t[1];
		var _ = p, f;
		t[2] !== a ? (f = function() {
			o("WAWebRevokeMetricUtils").UiRevokeActionHelper.endSession(), o("WDSDialogBridge").closeWDSDialog(), a();
		}, t[2] = a, t[3] = f) : f = t[3];
		var g = f, y;
		t[4] !== d || t[5] !== _ || t[6] !== a || t[7] !== i ? (y = function() {
			_.forEach(function(e, t) {
				t != null && e.length > 0 && o("WAWebCmd").Cmd.sendDeleteMsgs(t, {
					type: "message",
					list: e
				}, d, null, i);
			}), o("WDSDialogBridge").closeWDSDialog(), a();
		}, t[4] = d, t[5] = _, t[6] = a, t[7] = i, t[8] = y) : y = t[8];
		var v = y, S;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[9] = S) : S = t[9];
		var R = S, L;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[10] = L) : L = t[10];
		var E;
		t[11] !== v ? (E = {
			label: L,
			onPress: v,
			testid: "popup-controls-delete",
			type: "destructive",
			variant: "outline"
		}, t[11] = v, t[12] = E) : E = t[12];
		var k;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), t[13] = k) : k = t[13];
		var I;
		t[14] !== g ? (I = {
			label: k,
			onPress: g,
			variant: "borderless"
		}, t[14] = g, t[15] = I) : I = t[15];
		var T;
		t[16] !== E || t[17] !== I ? (T = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: E,
			secondaryButtonProps: I
		}), t[16] = E, t[17] = I, t[18] = T) : T = t[18];
		var D = T, x;
		t[19] !== n ? (x = h(n), t[19] = n, t[20] = x) : x = t[20];
		var $;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "x6s0dn4 x1s70e7g x78zum5" }, t[21] = $) : $ = t[21];
		var P;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (P = function() {
			return m(C);
		}, t[22] = P) : P = t[22];
		var N;
		t[23] !== d ? (N = u.jsx(r("WDSBaseCheckbox.react"), {
			"aria-label": R,
			id: "delete-media-file-checkbox",
			onChange: P,
			testid: "delete-media-file-checkbox",
			value: d
		}), t[23] = d, t[24] = N) : N = t[24];
		var M;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx("label", {
			htmlFor: "delete-media-file-checkbox",
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2",
				children: R
			})
		}), t[25] = M) : M = t[25];
		var w;
		t[26] !== N ? (w = u.jsxs("div", babelHelpers.extends({}, $, { children: [N, M] })), t[26] = N, t[27] = w) : w = t[27];
		var A;
		return t[28] !== D || t[29] !== g || t[30] !== x || t[31] !== w ? (A = u.jsx(r("WDSDialog.react"), {
			closeButton: !1,
			footer: D,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: g,
			open: !0,
			size: "sm",
			testid: "delete-for-me-media-popup",
			title: x,
			children: w
		}), t[28] = D, t[29] = g, t[30] = x, t[31] = w, t[32] = A) : A = t[32], A;
	}
	function C(e) {
		return !e;
	}
	function b(e) {
		return o("WAWebFrontendMsgGetters").getChat(e);
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(32), n = e.msgList, a = e.onEnd, i = e.revokable, l = e.toastPosition, c;
		t[0] !== n ? (c = o("WAArrayUtils").groupBy(n, S), t[0] = n, t[1] = c) : c = t[1];
		var d = c, m;
		t[2] !== a ? (m = function() {
			o("WAWebRevokeMetricUtils").UiRevokeActionHelper.endSession(), o("WDSDialogBridge").closeWDSDialog(), a();
		}, t[2] = a, t[3] = m) : m = t[3];
		var p = m, _;
		t[4] !== d || t[5] !== a || t[6] !== l ? (_ = function() {
			d.forEach(function(e, t) {
				t != null && e.length > 0 && o("WAWebCmd").Cmd.sendDeleteMsgs(t, {
					type: "message",
					list: e
				}, !0, null, l);
			}), o("WDSDialogBridge").closeWDSDialog(), a();
		}, t[4] = d, t[5] = a, t[6] = l, t[7] = _) : _ = t[7];
		var f = _, g;
		t[8] !== d || t[9] !== a || t[10] !== i || t[11] !== l ? (g = function() {
			i.sender > 0 && o("WAWebRevokeMetricUtils").UiRevokeActionHelper.senderRevoke(), r("WAWebEnforcementActionLogging").isSessionStarted() && r("WAWebEnforcementActionLogging").logDeleteUpdateConfirmClick(), d.forEach(function(e, t) {
				t != null && e.length > 0 && o("WAWebCmd").Cmd.sendRevokeMsgs(t, {
					type: "message",
					list: e
				}, {
					clearMedia: !0,
					toastPosition: l
				});
			}), o("WDSDialogBridge").closeWDSDialog(), a();
		}, t[8] = d, t[9] = a, t[10] = i, t[11] = l, t[12] = g) : g = t[12];
		var y = g, C;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[13] = C) : C = t[13];
		var b;
		t[14] !== y ? (b = {
			label: C,
			onPress: y,
			testid: "delete-revoke-dialog-confirm",
			type: "destructive",
			variant: "outline"
		}, t[14] = y, t[15] = b) : b = t[15];
		var v;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), t[16] = v) : v = t[16];
		var R;
		t[17] !== f ? (R = {
			label: v,
			onPress: f,
			testid: "delete-revoke-dialog-delete-for-me",
			variant: "outline"
		}, t[17] = f, t[18] = R) : R = t[18];
		var L;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[19] = L) : L = t[19];
		var E;
		t[20] !== p ? (E = {
			label: L,
			onPress: p,
			testid: "delete-revoke-dialog-cancel",
			variant: "borderless"
		}, t[20] = p, t[21] = E) : E = t[21];
		var k;
		t[22] !== E || t[23] !== b || t[24] !== R ? (k = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: b,
			secondaryButtonProps: R,
			tertiaryButtonProps: E
		}), t[22] = E, t[23] = b, t[24] = R, t[25] = k) : k = t[25];
		var I = k, T;
		t[26] !== n ? (T = h(n), t[26] = n, t[27] = T) : T = t[27];
		var D;
		return t[28] !== I || t[29] !== p || t[30] !== T ? (D = u.jsx(r("WDSDialog.react"), {
			closeButton: !1,
			footer: I,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: p,
			open: !0,
			size: "sm",
			testid: "delete-revoke-dialog",
			title: T
		}), t[28] = I, t[29] = p, t[30] = T, t[31] = D) : D = t[31], D;
	}
	function S(e) {
		return o("WAWebFrontendMsgGetters").getChat(e);
	}
	l.default = m;
}), 226);
