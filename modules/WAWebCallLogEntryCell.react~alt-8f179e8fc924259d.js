__d("WAWebCallLogEntryCell.react", [
	"fbt",
	"WAWebBoolFunc",
	"WAWebCallInfoLoggingUtils",
	"WAWebCallLogEntryChatImage.react",
	"WAWebCallLogTitle.react",
	"WAWebCallLogUtils",
	"WAWebChatCell.react",
	"WAWebChatSendMessages",
	"WAWebChatTimestamp.react",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebVoipActionRequestOpenChat",
	"WAWebVoipCallsTabPanelManager",
	"WAWebVoipCoexCallingPermissionDisabledModal.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipNewGroupCallContactPicker.react",
	"WAWebVoipStartCall",
	"WAWebWamEnumLobbyEntryPointType",
	"WDSIconIcCall.react",
	"WDSIconIcDelete.react",
	"WDSIconIcLink.react",
	"WDSIconIcPersonCheck.react",
	"WDSIconIcPhoneCallbackFilled.react",
	"WDSIconIcVideocam.react",
	"WDSIconWdsIcCallVideoMadeFilled.react",
	"WDSIconWdsIcCallVideoReceivedFilled.react",
	"WDSIconWdsIcChat.react",
	"WDSIconWdsIcPhoneCallMadeFilled.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebActiveSelection",
	"useWAWebMsgValues",
	"useWAWebVoipCanStartCall",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["msg", "testid"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = {
		miss: {
			color: "x30a034",
			$$css: !0
		},
		ongoing: {
			color: "x1v5yvga",
			$$css: !0
		}
	};
	function h(e) {
		var t = e.iconHeight, n = e.isCallLink, o = e.isFromMe, a = e.isMissedCall, i = e.isOngoingCall, l = i === void 0 ? !1 : i, s = e.isVideoCall, u = e.xstyle, d;
		n === !0 ? d = r("WDSIconIcLink.react") : o ? d = r(s ? "WDSIconWdsIcCallVideoMadeFilled.react" : "WDSIconWdsIcPhoneCallMadeFilled.react") : d = r(s ? "WDSIconWdsIcCallVideoReceivedFilled.react" : "WDSIconIcPhoneCallbackFilled.react");
		var m;
		l ? m = g.ongoing : a && (m = g.miss);
		var p;
		return d === r("WDSIconWdsIcCallVideoReceivedFilled.react") ? p = "video-call-incoming-filled" : d === r("WDSIconWdsIcCallVideoMadeFilled.react") ? p = "video-call-outgoing-filled" : d === r("WDSIconIcPhoneCallbackFilled.react") ? p = "voice-call-incoming-filled" : d === r("WDSIconWdsIcPhoneCallMadeFilled.react") && (p = "voice-call-outgoing-filled"), c.jsx(d, {
			height: t,
			xstyle: [u, m],
			testid: p
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.count, n = e.isCallLink, a = e.isCallSilenced, i = e.isFromMe, l = e.isMissedCall, u;
		return n === !0 ? u = s._(
			/*BTDS*/
			""
		) : i ? u = s._(
			/*BTDS*/
			""
		) : l ? a ? u = s._(
			/*BTDS*/
			""
		) : u = s._(
			/*BTDS*/
			""
		) : u = s._(
			/*BTDS*/
			""
		), t > 1 && (u = s._(
			/*BTDS*/
			"",
			[s._param("call-log-entry-text", u), s._param("call-logs-merged-count", r("WAWebL10N").n(t))]
		)), c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: u,
			direction: "auto",
			ellipsify: !0,
			xstyle: l && !i && g.miss
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.chat, n = e.isAdHocGroupCall, a = e.isCallLink, i = e.isCapiCallingPermissionAllowed, l = e.mergedMsgs, u = e.onOpenParticipantSelector, d = e.participantWids, m = o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType({
			isAdHocGroupCall: n,
			isCallLink: a,
			isGroup: t.id.isGroup()
		}), p = m && a !== !0, _ = m && !n && !a, f = o("WAWebCallInfoLoggingUtils").getCallInfoHeaderCallFromUI({
			isAdHocGroupCall: n,
			isCallLink: a,
			isGroup: t.id.isGroup()
		}), g = function(a) {
			if (!i) {
				o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebVoipCoexCallingPermissionDisabledModal.react"), {}));
				return;
			}
			n && d.length > 1 ? o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(d, a, f, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED) : t.groupType === void 0 ? o("WAWebVoipStartCall").startWAWebVoipCall(t.contact.id, a, f, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED) : o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(t, a, f, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED);
		};
		return c.jsxs(r("WDSMenu.react"), { children: [
			_ && c.jsx(r("WDSMenuItem.react"), {
				onPress: function() {
					return o("WAWebVoipActionRequestOpenChat").requestOpenChat(t.id);
				},
				Icon: r("WDSIconWdsIcChat.react"),
				title: s._(
					/*BTDS*/
					""
				)
			}, "message"),
			p && c.jsx(r("WDSMenuItem.react"), {
				onPress: function() {
					return g(!0);
				},
				Icon: r("WDSIconIcVideocam.react"),
				title: s._(
					/*BTDS*/
					""
				)
			}, "video-call"),
			p && c.jsx(r("WDSMenuItem.react"), {
				onPress: function() {
					return g(!1);
				},
				Icon: r("WDSIconIcCall.react"),
				title: s._(
					/*BTDS*/
					""
				)
			}, "voice-call"),
			p && u != null && c.jsx(r("WDSMenuItem.react"), {
				testid: "mi-select-people",
				onPress: u,
				Icon: r("WDSIconIcPersonCheck.react"),
				title: s._(
					/*BTDS*/
					""
				)
			}, "select-people"),
			p && c.jsx(r("WDSMenuItem.react"), { type: "separator" }),
			c.jsx(r("WDSMenuItem.react"), {
				onPress: function() {
					return b(l);
				},
				testid: "mi-delete-call-log",
				destructive: !0,
				Icon: r("WDSIconIcDelete.react"),
				title: s._(
					/*BTDS*/
					""
				)
			}, "delete-call-log")
		] });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		if (e.length !== 0) {
			var t = o("WAWebFrontendMsgGetters").getChat(e[0]);
			o("WAWebChatSendMessages").sendDeleteMsgs({
				chat_: t,
				clearMedia: !1,
				record: {
					type: "message",
					list: e
				}
			}).then(function() {
				r("WAWebVoipCallsTabPanelManager").trigger("closeCallLogInfoPanel"), r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", null);
			}).catch(function() {
				r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", null);
			});
		}
	}
	function v(t) {
		var n, a, i = t.msg, l = t.testid, s = babelHelpers.objectWithoutPropertiesLoose(t, e), u = s.filterPreset, d = s.mergedMsgs, g = d.length, b = o("useWAWebMsgValues").useMsgValues(i.id, [
			(a = o("WAWebMsgGetters")).getIsSentByMe,
			a.getIsVideoCall,
			a.getIsMissedCall,
			a.getIsCallSilenced,
			a.getIsCallLink,
			a.getIsAdHocGroupCall,
			a.getCallOutcome,
			a.getCallParticipants,
			a.getFinalCallOutcome
		]), v = b[0], S = b[1], R = b[2], L = b[3], E = b[4], k = b[5], I = b[6], T = b[7], D = b[8], x = o("WAWebCallLogUtils").getIsSelfConnected(T), $ = (n = d[d.length - 1]) != null ? n : i, P = r("useWAWebActiveSelection")(s.active, $.id.toString()), N = P[0], M = P[1], w = o("WAWebFrontendMsgGetters").getChat(i), A = _(function() {
			return T != null ? T.map(function(e) {
				return e.participant;
			}) : [];
		}, [T]), F = o("useWAWebVoipCanStartCall").useWAWebVoipIsCapiCallingPermissionAllowed(w), O = _(function() {
			return k ? o("WAWebCallLogUtils").sortCallParticipantWids([].concat(A), i, {
				excludeSelf: !0,
				excludeGuests: !0
			}) : A;
		}, [
			k,
			A,
			i
		]), B = o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType({
			isAdHocGroupCall: k,
			isCallLink: E,
			isGroup: w.id.isGroup()
		}) && (k || w.id.isGroup() || E === !0), W = m(function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
				chat: w,
				showCallTypeButtons: !0,
				isGroupMemberSelection: !0,
				participantWids: k ? O : void 0
			}));
		}, [
			w,
			k,
			O
		]), q = _(function() {
			return C({
				chat: w,
				isAdHocGroupCall: k,
				isCallLink: E,
				isCapiCallingPermissionAllowed: F,
				mergedMsgs: d,
				onOpenParticipantSelector: B ? W : void 0,
				participantWids: A
			});
		}, [
			d,
			k,
			E,
			w,
			A,
			F,
			B,
			W
		]), U = f(null), V = r("useWDSMenu")({
			targetRef: U,
			menu: q
		}), H = V.closeMenu, G = V.isMenuOpen, z = V.menuPortal, j = V.openMenu, K = d.map(function(e) {
			return e.id.toString();
		}).join("|");
		p(function() {
			!M || K === "" || r("WAWebVoipCallsTabPanelManager").trigger("updateActveCallLogInfo", d.slice());
		}, [
			d,
			K,
			M
		]);
		var Q = function(t) {
			t.stopPropagation(), t.preventDefault();
		}, X = function(t) {
			if (G) {
				H();
				return;
			}
			t.anchor instanceof HTMLElement ? (U.current = t.anchor, j()) : t.event != null && j(t.event);
		}, Y = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(R, x, v, I, D), J = c.jsx(r("WAWebChatTimestamp.react"), { msg: i }), Z = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [
				c.jsx(h, {
					iconHeight: 16,
					isMissedCall: Y,
					isVideoCall: S,
					isFromMe: v,
					isCallLink: E != null ? E : !1
				}),
				"\xA0",
				c.jsx(y, {
					isCallSilenced: L,
					isFromMe: v,
					isMissedCall: Y,
					count: g,
					isCallLink: E != null ? E : !1
				})
			]
		}), ee = function() {
			s.onClick(), r("WAWebVoipCallsTabPanelManager").trigger("openCallLogInfoPanel", d);
		};
		return c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: {
				enter: ee,
				space: ee
			},
			onFocus: Q,
			ref: N,
			children: c.jsx(r("WAWebChatCell.react"), {
				contextEnabled: o("WAWebBoolFunc").returnTrue,
				contextMenu: G,
				onContext: X,
				active: M,
				image: c.jsx(r("WAWebCallLogEntryChatImage.react"), { msg: i }),
				primary: c.jsx(r("WAWebCallLogTitle.react"), {
					callLogMsg: i,
					filterPreset: u
				}),
				primaryDetail: J,
				secondary: Z,
				onClick: ee,
				testid: l
			})
		}), z] });
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.mergedMsgs, n = e.testidPrefix;
		if (t.length === 0) return null;
		var r = t[0], o = t[t.length - 1];
		return c.jsx(v, babelHelpers.extends({}, e, {
			msg: r,
			testid: n == null ? void 0 : "chatlist-message-" + o.id.toString()
		}));
	}
	S.displayName = S.name + " [from " + i.id + "]", l.CallLogIcon = h, l.CallLogEntryCell = S;
}), 226);
