__d("WAWebVoipMoreControlsButton.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebChatCollection",
	"WAWebDefaultReactions",
	"WAWebDropdown.react",
	"WAWebEmojiPanel.react",
	"WAWebEventEmitter",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebPanelsDisplayLocation",
	"WAWebReactionsSelectionContext",
	"WAWebSendReactionsTray.react",
	"WAWebUserPrefsMeUser",
	"WAWebVoipActivityTracker",
	"WAWebVoipFullScreenContext",
	"WAWebVoipFullScreenHooks",
	"WAWebVoipGatingUtils",
	"WAWebVoipNewGroupCallContactPicker.react",
	"WAWebVoipParticipantsModal.react",
	"WAWebVoipReactionUtils",
	"WAWebVoipScreenShareHelpers",
	"WAWebVoipUiPopoutWindowContext",
	"WDSButton.react",
	"WDSGlobalContext",
	"WDSIconIcDoNotTouch.react",
	"WDSIconIcFullscreen.react",
	"WDSIconIcGridView.react",
	"WDSIconIcGroup.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcPanTool.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconIcVideoCallingGrid.react",
	"WDSIconWdsIcChat.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSThemes",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebVoipModalManager",
	"useWAWebWaitingRoomState",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["iconXstyle"], u = ["iconXstyle"], c = ["iconXstyle"], d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useContext, h = _.useEffect, y = _.useRef, C = _.useState, b = {
		moreButton: {
			height: "x10w6t97",
			$$css: !0
		},
		stackedTraysOuterContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1qjc9v5",
			$$css: !0
		},
		emojiPickerContainer: {
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			boxShadow: "xgfgw2k",
			$$css: !0
		},
		voipDarkLegacyVarOverrides: {
			"--reactions-panel-background-color": "xipi97s",
			"--dropdown-background": "xlgza3w",
			"--reactions-tray-active-round-background": "xvjfkcs",
			"--reactions-search-color": "xhv23hs",
			$$css: !0
		},
		optionsMenuContainer: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		raiseHandIconMirror: {
			transform: "xpk2tj9",
			$$css: !0
		},
		flipVertical: {
			transform: "xtjevij",
			$$css: !0
		}
	};
	function v(t) {
		var n = o("react-compiler-runtime").c(8), a, i;
		n[0] !== t ? (a = t.iconXstyle, i = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l;
		n[3] !== a ? (l = [b.flipVertical, a], n[3] = a, n[4] = l) : l = n[4];
		var s;
		return n[5] !== i || n[6] !== l ? (s = p.jsx(r("WDSIconIcVideoCallingGrid.react"), babelHelpers.extends({}, i, { iconXstyle: l })), n[5] = i, n[6] = l, n[7] = s) : s = n[7], s;
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(8), n, a;
		t[0] !== e ? (n = e.iconXstyle, a = babelHelpers.objectWithoutPropertiesLoose(e, u), t[0] = e, t[1] = n, t[2] = a) : (n = t[1], a = t[2]);
		var i;
		t[3] !== n ? (i = [b.raiseHandIconMirror, n], t[3] = n, t[4] = i) : i = t[4];
		var l;
		return t[5] !== a || t[6] !== i ? (l = p.jsx(r("WDSIconIcPanTool.react"), babelHelpers.extends({}, a, { iconXstyle: i })), t[5] = a, t[6] = i, t[7] = l) : l = t[7], l;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(8), n, a;
		t[0] !== e ? (n = e.iconXstyle, a = babelHelpers.objectWithoutPropertiesLoose(e, c), t[0] = e, t[1] = n, t[2] = a) : (n = t[1], a = t[2]);
		var i;
		t[3] !== n ? (i = [b.raiseHandIconMirror, n], t[3] = n, t[4] = i) : i = t[4];
		var l;
		return t[5] !== a || t[6] !== i ? (l = p.jsx(r("WDSIconIcDoNotTouch.react"), babelHelpers.extends({}, a, { iconXstyle: i })), t[5] = a, t[6] = i, t[7] = l) : l = t[7], l;
	}
	var L = 150;
	function E(e) {
		var t = o("react-compiler-runtime").c(138), n = e.chat, a = e.connectedParticipantsCount, i = e.isAnyPeerScreenSharing, l = e.isCallActiveInPopoutWindow, u = e.isCallLink, c = e.isCallRinging, m = e.isConnectedLonely, _ = e.isGroupCall, f = e.isLinkedGroupCall, E = e.isSelfHandRaised, I = e.isSelfScreenSharing, T = e.isVideoCall, D = e.isVideoMuted, x = e.layoutMode, $ = e.onLayoutModeToggle, P = e.onRaiseHandToggle, N = e.onReactionSelect, M = e.onRingParticipant, w = e.onSendMessage, A = e.onVideoMuteToggle, F = e.participantStates, O = e.participantsWithoutSelf, B = e.selfReaction, W = e.showSendMessage, q = e.tooltipAnchorRef, U = e.tooltipOwnerDocument, V = a === void 0 ? 0 : a, H = l === void 0 ? !1 : l, G = u === void 0 ? !1 : u, z = c === void 0 ? !1 : c, j = m === void 0 ? !1 : m, K = _ === void 0 ? !1 : _, Q = E === void 0 ? !1 : E, X = g(r("WAWebVoipUiPopoutWindowContext")), Y = g(r("WAWebVoipFullScreenContext")), J = g(o("WDSGlobalContext").WDSContext), Z = J.closeAllMenus, ee = r("useWAWebVoipModalManager")(), te = ee.closeModal, ne = ee.openModal, re = y(null), oe = y(null), ae = o("WAWebVoipFullScreenHooks").useShouldShowFullScreenToggle() && !H && !z, ie;
		t[0] !== te || t[1] !== G || t[2] !== I || t[3] !== T || t[4] !== D || t[5] !== A || t[6] !== ne || t[7] !== X.windowEl ? (ie = function() {
			o("WAWebVoipScreenShareHelpers").handlePressScreenShare({
				isCallLink: G,
				isSelfScreenSharing: I,
				isVideoCall: T,
				isVideoMuted: D,
				onVideoMuteToggle: A,
				openModal: ne,
				closeModal: te,
				targetWindow: X.windowEl
			});
		}, t[0] = te, t[1] = G, t[2] = I, t[3] = T, t[4] = D, t[5] = A, t[6] = ne, t[7] = X.windowEl, t[8] = ie) : ie = t[8];
		var le = ie, se;
		t[9] !== w ? (se = function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_SEND_MESSAGE_CLICK), w();
		}, t[9] = w, t[10] = se) : se = t[10];
		var ue = se, ce;
		t[11] !== P ? (ce = function() {
			P == null || P();
		}, t[11] = P, t[12] = ce) : ce = t[12];
		var de = ce, me;
		t[13] !== Y ? (me = function() {
			Y.enterFullScreen();
		}, t[13] = Y, t[14] = me) : me = t[14];
		var pe = me, _e;
		t[15] !== $ ? (_e = function() {
			$ == null || $();
		}, t[15] = $, t[16] = _e) : _e = t[16];
		var fe = _e, ge;
		t[17] !== n || t[18] !== te || t[19] !== T || t[20] !== ne ? (ge = function() {
			var e = n != null ? n : o("WAWebChatCollection").ChatCollection.getLatestChatForWid(o("WAWebUserPrefsMeUser").getMeUserOrThrow());
			e != null && (o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_ADD_PEOPLE_CLICK), ne(p.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
				chat: e,
				isAddingToExistingCall: !0,
				isVideoCall: T,
				onClose: te
			}), { skipDarkTheme: !0 }));
		}, t[17] = n, t[18] = te, t[19] = T, t[20] = ne, t[21] = ge) : ge = t[21];
		var he = ge, ye = C(k), Ce = ye[0], be, ve;
		t[22] !== Ce || t[23] !== F || t[24] !== O ? (be = function() {
			Ce.trigger("update", {
				participantStates: F,
				participantsWithoutSelf: O
			});
		}, ve = [
			F,
			O,
			Ce
		], t[22] = Ce, t[23] = F, t[24] = O, t[25] = be, t[26] = ve) : (be = t[25], ve = t[26]), h(be, ve);
		var Se = r("useWAWebWaitingRoomState")(), Re = Se.waitingRoomUsersCount, Le;
		t[27] !== te || t[28] !== M || t[29] !== ne || t[30] !== Ce || t[31] !== F || t[32] !== O ? (Le = function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_PARTICIPANT_DRAWER_TOGGLE), O != null && F != null && M != null && ne(p.jsx(r("WAWebVoipParticipantsModal.react"), {
				call: r("WAWebCallCollection").activeCall,
				onClose: te,
				onRingParticipant: M,
				initialParticipantStates: F,
				initialParticipantsWithoutSelf: O,
				participantDataEmitter: Ce
			}), { skipDarkTheme: !0 });
		}, t[27] = te, t[28] = M, t[29] = ne, t[30] = Ce, t[31] = F, t[32] = O, t[33] = Le) : Le = t[33];
		var Ee = Le, ke;
		t[34] !== Z || t[35] !== N ? (ke = function(t) {
			N == null || N(t), Z();
		}, t[34] = Z, t[35] = N, t[36] = ke) : ke = t[36];
		var Ie = ke, Te;
		t[37] === Symbol.for("react.memo_cache_sentinel") ? (Te = function(t) {
			if (t.key === "ArrowUp") {
				var e = oe.current;
				if (e != null) {
					var n = e.querySelector("[role=\"toolbar\"]"), r = e.querySelectorAll("[role=\"menuitem\"]"), o = e.ownerDocument.activeElement;
					if (n != null && r.length > 0 && o === r[0]) {
						var a = n.querySelectorAll("button");
						a.length > 0 && (a[a.length - 1].focus(), t.preventDefault(), t.stopPropagation());
					}
				}
			}
		}, t[37] = Te) : Te = t[37];
		var De = Te, xe;
		t[38] === Symbol.for("react.memo_cache_sentinel") ? (xe = function(t) {
			if (!(t.key !== "ArrowUp" && t.key !== "ArrowDown")) {
				var e = oe.current;
				if (e != null) {
					var n = e.ownerDocument.activeElement;
					if (!(n == null || !e.contains(n)) && (t.stopPropagation(), t.key === "ArrowDown")) {
						var r = e.querySelector("[role=\"toolbar\"]");
						if (r != null && r.contains(n)) {
							var o = e.querySelector("[role=\"menuitem\"]");
							o instanceof HTMLElement && (o.focus(), t.preventDefault());
						}
					}
				}
			}
		}, t[38] = xe) : xe = t[38];
		var $e = xe, Pe;
		t[39] === Symbol.for("react.memo_cache_sentinel") ? (Pe = s._(
			/*BTDS*/
			""
		), t[39] = Pe) : Pe = t[39];
		var Ne = Pe, Me;
		t[40] !== Q ? (Me = Q ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[40] = Q, t[41] = Me) : Me = t[41];
		var we = Me, Ae = r("WAWebL10N").isRTL() ? "start" : "end", Fe;
		t[42] === Symbol.for("react.memo_cache_sentinel") ? (Fe = (d || (d = r("stylex"))).props(o("WDSThemes").WDSDarkTheme, b.emojiPickerContainer, b.voipDarkLegacyVarOverrides), t[42] = Fe) : Fe = t[42];
		var Oe;
		t[43] !== Ie ? (Oe = p.jsx(r("WAWebEmojiPanel.react"), {
			displayLocation: o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions,
			onEmoji: Ie,
			width: o("WAWebDropdown.react").REACTIONS_PANEL_WIDTH
		}), t[43] = Ie, t[44] = Oe) : Oe = t[44];
		var Be;
		t[45] !== B || t[46] !== Oe ? (Be = p.jsx("div", {
			className: "dark",
			children: p.jsx("div", babelHelpers.extends({}, Fe, { children: p.jsx(r("WAWebReactionsSelectionContext").Provider, {
				value: B,
				children: Oe
			}) }))
		}), t[45] = B, t[46] = Oe, t[47] = Be) : Be = t[47];
		var We = Be, qe;
		t[48] !== We || t[49] !== U ? (qe = {
			targetRef: re,
			menu: We,
			position: "above",
			align: Ae,
			isContainer: !0,
			ownerDocument: U
		}, t[48] = We, t[49] = U, t[50] = qe) : qe = t[50];
		var Ue = r("useWDSMenu")(qe), Ve;
		t[51] !== Ue || t[52] !== N ? (Ve = function(t) {
			t === o("WAWebSendReactionsTray.react").MORE_REACTIONS ? self.setTimeout(function() {
				Ue.openMenu();
			}, L) : N == null || N(t);
		}, t[51] = Ue, t[52] = N, t[53] = Ve) : Ve = t[53];
		var He = Ve, Ge;
		t[54] === Symbol.for("react.memo_cache_sentinel") ? (Ge = (d || (d = r("stylex"))).props(b.stackedTraysOuterContainer, o("WDSThemes").WDSDarkTheme, b.voipDarkLegacyVarOverrides), t[54] = Ge) : Ge = t[54];
		var ze;
		t[55] !== He || t[56] !== z || t[57] !== j || t[58] !== B ? (ze = !z && !j && p.jsx("div", babelHelpers.extends({}, (d || (d = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), { children: p.jsx(o("WAWebSendReactionsTray.react").SendReactionsTray, {
			allowTabEscape: !0,
			isInlineMode: !0,
			isMoreSelected: o("WAWebVoipReactionUtils").getIsMoreReactionSelected(B),
			isParentMsgSentByMe: !1,
			selectedCallback: He,
			reactions: o("WAWebDefaultReactions").DEFAULT_REACTIONS,
			selectedIndex: o("WAWebVoipReactionUtils").getSelectedReactionIndex(B),
			showMoreOption: !0
		}) })), t[55] = He, t[56] = z, t[57] = j, t[58] = B, t[59] = ze) : ze = t[59];
		var je;
		t[60] !== z || t[61] !== j ? (je = !z && !j && p.jsx("div", { className: "xiryn5a" }), t[60] = z, t[61] = j, t[62] = je) : je = t[62];
		var Ke;
		t[63] === Symbol.for("react.memo_cache_sentinel") ? (Ke = (d || (d = r("stylex"))).props(o("WDSThemes").WDSDarkTheme, b.optionsMenuContainer), t[63] = Ke) : Ke = t[63];
		var Qe;
		t[64] !== de || t[65] !== z || t[66] !== K || t[67] !== Q || t[68] !== we ? (Qe = K && !z && p.jsx(r("WDSMenuItem.react"), {
			Icon: Q ? R : S,
			testid: "voip_more_controls_raise_hand",
			title: we,
			onPress: de
		}), t[64] = de, t[65] = z, t[66] = K, t[67] = Q, t[68] = we, t[69] = Qe) : Qe = t[69];
		var Xe;
		t[70] !== le || t[71] !== i || t[72] !== z || t[73] !== j || t[74] !== I ? (Xe = !z && !j && p.jsx(r("WDSMenuItem.react"), {
			Icon: o("WAWebVoipScreenShareHelpers").getScreenShareIcon(I, i),
			iconDirectional: !0,
			testid: "voip_more_controls_share_screen",
			title: o("WAWebVoipScreenShareHelpers").getScreenShareLabel(I),
			onPress: le
		}), t[70] = le, t[71] = i, t[72] = z, t[73] = j, t[74] = I, t[75] = Xe) : Xe = t[75];
		var Ye;
		t[76] !== z || t[77] !== j || t[78] !== K ? (Ye = K && !z && !j && p.jsx(r("WDSMenuItem.react"), { type: "separator" }), t[76] = z, t[77] = j, t[78] = K, t[79] = Ye) : Ye = t[79];
		var Je;
		t[80] !== he || t[81] !== j || t[82] !== f ? (Je = !o("WAWebVoipGatingUtils").isGuestViewer() && o("WAWebVoipGatingUtils").isGroupCallingEnabled() && !f && !j ? p.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcPersonAdd.react"),
			testid: "voip_more_controls_add_people",
			title: s._(
				/*BTDS*/
				""
			),
			onPress: he
		}) : null, t[80] = he, t[81] = j, t[82] = f, t[83] = Je) : Je = t[83];
		var Ze;
		t[84] !== Ee || t[85] !== j || t[86] !== K || t[87] !== M || t[88] !== F || t[89] !== O || t[90] !== X.isDocPip || t[91] !== Re ? (Ze = K && o("WAWebVoipGatingUtils").isGroupCallingEnabled() && O != null && (O.length > 0 || Re > 0 || j && X.isDocPip) && F != null && M != null ? p.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcGroup.react"),
			testid: "voip_more_controls_participants",
			title: s._(
				/*BTDS*/
				""
			),
			onPress: Ee
		}) : null, t[84] = Ee, t[85] = j, t[86] = K, t[87] = M, t[88] = F, t[89] = O, t[90] = X.isDocPip, t[91] = Re, t[92] = Ze) : Ze = t[92];
		var et;
		t[93] !== ue || t[94] !== j || t[95] !== W ? (et = !o("WAWebVoipGatingUtils").isGuestViewer() && W && !j ? p.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconWdsIcChat.react"),
			testid: "voip_more_controls_send_message",
			title: s._(
				/*BTDS*/
				""
			),
			onPress: ue
		}) : null, t[93] = ue, t[94] = j, t[95] = W, t[96] = et) : et = t[96];
		var tt;
		t[97] !== pe || t[98] !== ae ? (tt = ae ? p.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcFullscreen.react"),
			testid: "voip_more_controls_full_screen",
			title: s._(
				/*BTDS*/
				""
			),
			onPress: pe
		}) : null, t[97] = pe, t[98] = ae, t[99] = tt) : tt = t[99];
		var nt;
		t[100] !== V || t[101] !== fe || t[102] !== K || t[103] !== T || t[104] !== x || t[105] !== $ ? (nt = x != null && $ != null && T && K && V > 2 ? p.jsx(r("WDSMenuItem.react"), {
			Icon: x === "grid" ? v : r("WDSIconIcGridView.react"),
			testid: "voip_more_controls_layout_toggle",
			title: x === "grid" ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			onPress: fe
		}) : null, t[100] = V, t[101] = fe, t[102] = K, t[103] = T, t[104] = x, t[105] = $, t[106] = nt) : nt = t[106];
		var rt;
		t[107] !== Qe || t[108] !== Xe || t[109] !== Ye || t[110] !== Je || t[111] !== Ze || t[112] !== et || t[113] !== tt || t[114] !== nt ? (rt = p.jsx("div", babelHelpers.extends({}, Ke, { children: p.jsxs(r("WDSMenu.react"), {
			useMaxWidth: !1,
			children: [
				Qe,
				Xe,
				Ye,
				Je,
				Ze,
				et,
				tt,
				nt
			]
		}) })), t[107] = Qe, t[108] = Xe, t[109] = Ye, t[110] = Je, t[111] = Ze, t[112] = et, t[113] = tt, t[114] = nt, t[115] = rt) : rt = t[115];
		var ot;
		t[116] !== ze || t[117] !== je || t[118] !== rt ? (ot = p.jsxs("div", babelHelpers.extends({
			ref: oe,
			role: "group",
			onKeyDownCapture: De,
			onKeyDown: $e
		}, Ge, { children: [
			ze,
			je,
			rt
		] })), t[116] = ze, t[117] = je, t[118] = rt, t[119] = ot) : ot = t[119];
		var at = ot, it;
		t[120] !== at || t[121] !== U ? (it = {
			targetRef: re,
			menu: at,
			position: "above",
			align: Ae,
			isContainer: !0,
			ownerDocument: U
		}, t[120] = at, t[121] = U, t[122] = it) : it = t[122];
		var lt = r("useWDSMenu")(it), st = lt.isMenuOpen || Ue.isMenuOpen, ut;
		t[123] !== Ue || t[124] !== st || t[125] !== lt ? (ut = function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_MORE_OPTIONS_CLICK), st ? (lt.closeMenu(), Ue.closeMenu()) : lt.openMenu();
		}, t[123] = Ue, t[124] = st, t[125] = lt, t[126] = ut) : ut = t[126];
		var ct = ut, dt;
		t[127] !== ct || t[128] !== st ? (dt = p.jsx(r("WDSButton.react"), {
			ref: re,
			variant: "borderless",
			"aria-label": Ne,
			"aria-expanded": st,
			onPress: ct,
			Icon: r("WDSIconIcMoreVert.react"),
			size: "small",
			xstyle: b.moreButton
		}), t[127] = ct, t[128] = st, t[129] = dt) : dt = t[129];
		var mt;
		t[130] !== dt || t[131] !== q || t[132] !== U ? (mt = p.jsx(r("WDSTooltip.react"), {
			label: Ne,
			ownerAnchorRef: q,
			ownerDocument: U,
			children: dt
		}), t[130] = dt, t[131] = q, t[132] = U, t[133] = mt) : mt = t[133];
		var pt;
		return t[134] !== Ue.menuPortal || t[135] !== lt.menuPortal || t[136] !== mt ? (pt = p.jsxs(o("WAWebFlex.react").FlexItem, { children: [
			mt,
			lt.menuPortal,
			Ue.menuPortal
		] }), t[134] = Ue.menuPortal, t[135] = lt.menuPortal, t[136] = mt, t[137] = pt) : pt = t[137], pt;
	}
	function k() {
		return new (r("WAWebEventEmitter"))();
	}
	l.default = E;
}), 226);
