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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(8), n = e.iconHeight, a = e.isCallLink, i = e.isFromMe, l = e.isMissedCall, s = e.isOngoingCall, u = e.isVideoCall, d = e.xstyle, m = s === void 0 ? !1 : s, p;
		a === !0 ? p = r("WDSIconIcLink.react") : i ? p = r(u ? "WDSIconWdsIcCallVideoMadeFilled.react" : "WDSIconWdsIcPhoneCallMadeFilled.react") : p = r(u ? "WDSIconWdsIcCallVideoReceivedFilled.react" : "WDSIconIcPhoneCallbackFilled.react");
		var _;
		m ? _ = g.ongoing : l && (_ = g.miss);
		var f;
		p === r("WDSIconWdsIcCallVideoReceivedFilled.react") ? f = "video-call-incoming-filled" : p === r("WDSIconWdsIcCallVideoMadeFilled.react") ? f = "video-call-outgoing-filled" : p === r("WDSIconIcPhoneCallbackFilled.react") ? f = "voice-call-incoming-filled" : p === r("WDSIconWdsIcPhoneCallMadeFilled.react") && (f = "voice-call-outgoing-filled");
		var h;
		t[0] !== _ || t[1] !== d ? (h = [d, _], t[0] = _, t[1] = d, t[2] = h) : h = t[2];
		var y;
		return t[3] !== p || t[4] !== n || t[5] !== h || t[6] !== f ? (y = c.jsx(p, {
			height: n,
			xstyle: h,
			testid: f
		}), t[3] = p, t[4] = n, t[5] = h, t[6] = f, t[7] = y) : y = t[7], y;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(13), n = e.count, a = e.isCallLink, i = e.isCallSilenced, l = e.isFromMe, u = e.isMissedCall, d;
		if (a === !0) {
			var m;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
				/*BTDS*/
				""
			), t[0] = m) : m = t[0], d = m;
		} else if (l) {
			var p;
			t[1] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
				/*BTDS*/
				""
			), t[1] = p) : p = t[1], d = p;
		} else if (u) if (i) {
			var _;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
				/*BTDS*/
				""
			), t[2] = _) : _ = t[2], d = _;
		} else {
			var f;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
				/*BTDS*/
				""
			), t[3] = f) : f = t[3], d = f;
		}
		else {
			var h;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
				/*BTDS*/
				""
			), t[4] = h) : h = t[4], d = h;
		}
		if (n > 1) {
			var y;
			if (t[5] !== d || t[6] !== n) {
				var C;
				t[8] !== n ? (C = r("WAWebL10N").n(n), t[8] = n, t[9] = C) : C = t[9], y = s._(
					/*BTDS*/
					"",
					[s._param("call-log-entry-text", d), s._param("call-logs-merged-count", C)]
				), t[5] = d, t[6] = n, t[7] = y;
			} else y = t[7];
			d = y;
		}
		var b = u && !l && g.miss, v;
		return t[10] !== d || t[11] !== b ? (v = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: d,
			direction: "auto",
			ellipsify: !0,
			xstyle: b
		}), t[10] = d, t[11] = b, t[12] = v) : v = t[12], v;
	}
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
		var n, a = o("react-compiler-runtime").c(84), i, l, s;
		a[0] !== t ? (i = t.msg, s = t.testid, l = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l, a[3] = s) : (i = a[1], l = a[2], s = a[3]);
		var u = l, d = u.filterPreset, m = u.mergedMsgs, _ = m.length, g;
		if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
			var b;
			g = [
				(b = o("WAWebMsgGetters")).getIsSentByMe,
				b.getIsVideoCall,
				b.getIsMissedCall,
				b.getIsCallSilenced,
				b.getIsCallLink,
				b.getIsAdHocGroupCall,
				b.getCallOutcome,
				b.getCallParticipants,
				b.getFinalCallOutcome
			], a[4] = g;
		} else g = a[4];
		var v = o("useWAWebMsgValues").useMsgValues(i.id, g), E = v[0], k = v[1], I = v[2], T = v[3], D = v[4], x = v[5], $ = v[6], P = v[7], N = v[8], M = o("WAWebCallLogUtils").getIsSelfConnected(P), w = (n = m[m.length - 1]) != null ? n : i, A = l.active, F;
		a[5] !== w.id ? (F = w.id.toString(), a[5] = w.id, a[6] = F) : F = a[6];
		var O = r("useWAWebActiveSelection")(A, F), B = O[0], W = O[1], q;
		a[7] !== i ? (q = o("WAWebFrontendMsgGetters").getChat(i), a[7] = i, a[8] = q) : q = a[8];
		var U = q, V;
		a[9] !== P ? (V = P != null ? P.map(L) : [], a[9] = P, a[10] = V) : V = a[10];
		var H = V, G = o("useWAWebVoipCanStartCall").useWAWebVoipIsCapiCallingPermissionAllowed(U), z;
		a[11] !== x || a[12] !== i || a[13] !== H ? (z = x ? o("WAWebCallLogUtils").sortCallParticipantWids([].concat(H), i, {
			excludeSelf: !0,
			excludeGuests: !0
		}) : H, a[11] = x, a[12] = i, a[13] = H, a[14] = z) : z = a[14];
		var j = z, K = o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType({
			isAdHocGroupCall: x,
			isCallLink: D,
			isGroup: U.id.isGroup()
		}) && (x || U.id.isGroup() || D === !0), Q;
		a[15] !== U || a[16] !== x || a[17] !== j ? (Q = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
				chat: U,
				showCallTypeButtons: !0,
				isGroupMemberSelection: !0,
				participantWids: x ? j : void 0
			}));
		}, a[15] = U, a[16] = x, a[17] = j, a[18] = Q) : Q = a[18];
		var X = Q, Y = K ? X : void 0, J;
		a[19] !== U || a[20] !== x || a[21] !== D || a[22] !== G || a[23] !== m || a[24] !== H || a[25] !== Y ? (J = C({
			chat: U,
			isAdHocGroupCall: x,
			isCallLink: D,
			isCapiCallingPermissionAllowed: G,
			mergedMsgs: m,
			onOpenParticipantSelector: Y,
			participantWids: H
		}), a[19] = U, a[20] = x, a[21] = D, a[22] = G, a[23] = m, a[24] = H, a[25] = Y, a[26] = J) : J = a[26];
		var Z = J, ee = f(null), te;
		a[27] !== Z ? (te = {
			targetRef: ee,
			menu: Z
		}, a[27] = Z, a[28] = te) : te = a[28];
		var ne = r("useWDSMenu")(te), re = ne.closeMenu, oe = ne.isMenuOpen, ae = ne.menuPortal, ie = ne.openMenu, le;
		a[29] !== m ? (le = m.map(R).join("|"), a[29] = m, a[30] = le) : le = a[30];
		var se = le, ue, ce;
		a[31] !== W || a[32] !== m || a[33] !== se ? (ue = function() {
			!W || se === "" || r("WAWebVoipCallsTabPanelManager").trigger("updateActveCallLogInfo", m.slice());
		}, ce = [
			m,
			se,
			W
		], a[31] = W, a[32] = m, a[33] = se, a[34] = ue, a[35] = ce) : (ue = a[34], ce = a[35]), p(ue, ce);
		var de = S, me;
		a[36] !== re || a[37] !== oe || a[38] !== ie ? (me = function(t) {
			if (oe) {
				re();
				return;
			}
			t.anchor instanceof HTMLElement ? (ee.current = t.anchor, ie()) : t.event != null && ie(t.event);
		}, a[36] = re, a[37] = oe, a[38] = ie, a[39] = me) : me = a[39];
		var pe = me, _e = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(I, M, E, $, N), fe;
		a[40] !== i ? (fe = c.jsx(r("WAWebChatTimestamp.react"), { msg: i }), a[40] = i, a[41] = fe) : fe = a[41];
		var ge = fe, he = D != null ? D : !1, ye;
		a[42] !== _e || a[43] !== E || a[44] !== k || a[45] !== he ? (ye = c.jsx(h, {
			iconHeight: 16,
			isMissedCall: _e,
			isVideoCall: k,
			isFromMe: E,
			isCallLink: he
		}), a[42] = _e, a[43] = E, a[44] = k, a[45] = he, a[46] = ye) : ye = a[46];
		var Ce = D != null ? D : !1, be;
		a[47] !== _ || a[48] !== T || a[49] !== _e || a[50] !== E || a[51] !== Ce ? (be = c.jsx(y, {
			isCallSilenced: T,
			isFromMe: E,
			isMissedCall: _e,
			count: _,
			isCallLink: Ce
		}), a[47] = _, a[48] = T, a[49] = _e, a[50] = E, a[51] = Ce, a[52] = be) : be = a[52];
		var ve;
		a[53] !== ye || a[54] !== be ? (ve = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [
				ye,
				"\xA0",
				be
			]
		}), a[53] = ye, a[54] = be, a[55] = ve) : ve = a[55];
		var Se = ve, Re;
		a[56] !== m || a[57] !== l ? (Re = function() {
			l.onClick(), r("WAWebVoipCallsTabPanelManager").trigger("openCallLogInfoPanel", m);
		}, a[56] = m, a[57] = l, a[58] = Re) : Re = a[58];
		var Le = Re, Ee;
		a[59] !== Le ? (Ee = {
			enter: Le,
			space: Le
		}, a[59] = Le, a[60] = Ee) : Ee = a[60];
		var ke;
		a[61] !== i ? (ke = c.jsx(r("WAWebCallLogEntryChatImage.react"), { msg: i }), a[61] = i, a[62] = ke) : ke = a[62];
		var Ie;
		a[63] !== d || a[64] !== i ? (Ie = c.jsx(r("WAWebCallLogTitle.react"), {
			callLogMsg: i,
			filterPreset: d
		}), a[63] = d, a[64] = i, a[65] = Ie) : Ie = a[65];
		var Te;
		a[66] !== W || a[67] !== Le || a[68] !== pe || a[69] !== oe || a[70] !== ge || a[71] !== Se || a[72] !== ke || a[73] !== Ie || a[74] !== s ? (Te = c.jsx(r("WAWebChatCell.react"), {
			contextEnabled: o("WAWebBoolFunc").returnTrue,
			contextMenu: oe,
			onContext: pe,
			active: W,
			image: ke,
			primary: Ie,
			primaryDetail: ge,
			secondary: Se,
			onClick: Le,
			testid: s
		}), a[66] = W, a[67] = Le, a[68] = pe, a[69] = oe, a[70] = ge, a[71] = Se, a[72] = ke, a[73] = Ie, a[74] = s, a[75] = Te) : Te = a[75];
		var De;
		a[76] !== de || a[77] !== B || a[78] !== Ee || a[79] !== Te ? (De = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: Ee,
			onFocus: de,
			ref: B,
			children: Te
		}), a[76] = de, a[77] = B, a[78] = Ee, a[79] = Te, a[80] = De) : De = a[80];
		var xe;
		return a[81] !== ae || a[82] !== De ? (xe = c.jsxs(c.Fragment, { children: [De, ae] }), a[81] = ae, a[82] = De, a[83] = xe) : xe = a[83], xe;
	}
	function S(e) {
		e.stopPropagation(), e.preventDefault();
	}
	function R(e) {
		return e.id.toString();
	}
	function L(e) {
		return e.participant;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(7), n = e.mergedMsgs, r = e.testidPrefix;
		if (n.length === 0) return null;
		var a = n[0], i = n[n.length - 1], l;
		t[0] !== i || t[1] !== r ? (l = r == null ? void 0 : "chatlist-message-" + i.id.toString(), t[0] = i, t[1] = r, t[2] = l) : l = t[2];
		var s;
		return t[3] !== a || t[4] !== e || t[5] !== l ? (s = c.jsx(v, babelHelpers.extends({}, e, {
			msg: a,
			testid: l
		})), t[3] = a, t[4] = e, t[5] = l, t[6] = s) : s = t[6], s;
	}
	l.CallLogIcon = h, l.CallLogEntryCell = E;
}), 226);
