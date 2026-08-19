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
		var t, n = e.dataTab, a = n === void 0 ? o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR : n, i = e.onCancel, l = e.onDeleteModalOpen, c = e.selectedMessages, m = e.theme, f = e.toastPosition, h = (t = c == null ? void 0 : c.getSelected()) != null ? t : [], b = r("sumBy")(h, function(e) {
			var t;
			return (t = e.mediaData) == null ? void 0 : t.size;
		}), v = h.every(function(e) {
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
				}) ? o("WDSDialogBridge").openWDSDialog(u.jsx(C, {
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
		}, L = !S || !v, E = u.jsx(r("WDSMenuBarItem.react"), {
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
				children: b > 0 ? o("WAWebL10nFilesize").getL10nFilesize(b) : null
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
		var t = e.msgList, n = e.onEnd, a = e.toastPosition, i = c(!0), l = i[0], d = i[1], m = o("WAArrayUtils").groupBy(t, function(e) {
			return o("WAWebFrontendMsgGetters").getChat(e);
		}), p = function() {
			o("WAWebRevokeMetricUtils").UiRevokeActionHelper.endSession(), o("WDSDialogBridge").closeWDSDialog(), n();
		}, _ = function() {
			m.forEach(function(e, t) {
				t != null && e.length > 0 && o("WAWebCmd").Cmd.sendDeleteMsgs(t, {
					type: "message",
					list: e
				}, l, null, a);
			}), o("WDSDialogBridge").closeWDSDialog(), n();
		}, f = s._(
			/*BTDS*/
			""
		), g = "delete-media-file-checkbox", y = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: _,
				testid: "popup-controls-delete",
				type: "destructive",
				variant: "outline"
			},
			secondaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: p,
				variant: "borderless"
			}
		});
		return u.jsx(r("WDSDialog.react"), {
			closeButton: !1,
			footer: y,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: p,
			open: !0,
			size: "sm",
			testid: "delete-for-me-media-popup",
			title: h(t),
			children: u.jsxs("div", {
				className: "x6s0dn4 x1s70e7g x78zum5",
				children: [u.jsx(r("WDSBaseCheckbox.react"), {
					"aria-label": f,
					id: g,
					onChange: function() {
						return d(function(e) {
							return !e;
						});
					},
					testid: "delete-media-file-checkbox",
					value: l
				}), u.jsx("label", {
					htmlFor: g,
					children: u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body2",
						children: f
					})
				})]
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.msgList, n = e.onEnd, a = e.revokable, i = e.toastPosition, l = o("WAArrayUtils").groupBy(t, function(e) {
			return o("WAWebFrontendMsgGetters").getChat(e);
		}), c = function() {
			o("WAWebRevokeMetricUtils").UiRevokeActionHelper.endSession(), o("WDSDialogBridge").closeWDSDialog(), n();
		}, d = function() {
			l.forEach(function(e, t) {
				t != null && e.length > 0 && o("WAWebCmd").Cmd.sendDeleteMsgs(t, {
					type: "message",
					list: e
				}, !0, null, i);
			}), o("WDSDialogBridge").closeWDSDialog(), n();
		}, m = function() {
			a.sender > 0 && o("WAWebRevokeMetricUtils").UiRevokeActionHelper.senderRevoke(), r("WAWebEnforcementActionLogging").isSessionStarted() && r("WAWebEnforcementActionLogging").logDeleteUpdateConfirmClick(), l.forEach(function(e, t) {
				t != null && e.length > 0 && o("WAWebCmd").Cmd.sendRevokeMsgs(t, {
					type: "message",
					list: e
				}, {
					clearMedia: !0,
					toastPosition: i
				});
			}), o("WDSDialogBridge").closeWDSDialog(), n();
		}, p = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: m,
				testid: "delete-revoke-dialog-confirm",
				type: "destructive",
				variant: "outline"
			},
			secondaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: d,
				testid: "delete-revoke-dialog-delete-for-me",
				variant: "outline"
			},
			tertiaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: c,
				testid: "delete-revoke-dialog-cancel",
				variant: "borderless"
			}
		});
		return u.jsx(r("WDSDialog.react"), {
			closeButton: !1,
			footer: p,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: c,
			open: !0,
			size: "sm",
			testid: "delete-revoke-dialog",
			title: h(t)
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = m;
}), 226);
