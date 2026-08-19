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
		var n = t.iconXstyle, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return p.jsx(r("WDSIconIcVideoCallingGrid.react"), babelHelpers.extends({}, o, { iconXstyle: [b.flipVertical, n] }));
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.iconXstyle, n = babelHelpers.objectWithoutPropertiesLoose(e, u);
		return p.jsx(r("WDSIconIcPanTool.react"), babelHelpers.extends({}, n, { iconXstyle: [b.raiseHandIconMirror, t] }));
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.iconXstyle, n = babelHelpers.objectWithoutPropertiesLoose(e, c);
		return p.jsx(r("WDSIconIcDoNotTouch.react"), babelHelpers.extends({}, n, { iconXstyle: [b.raiseHandIconMirror, t] }));
	}
	R.displayName = R.name + " [from " + i.id + "]";
	var L = 150;
	function E(e) {
		var t = e.chat, n = e.connectedParticipantsCount, a = n === void 0 ? 0 : n, i = e.isAnyPeerScreenSharing, l = e.isCallActiveInPopoutWindow, u = l === void 0 ? !1 : l, c = e.isCallLink, m = c === void 0 ? !1 : c, _ = e.isCallRinging, E = _ === void 0 ? !1 : _, k = e.isConnectedLonely, I = k === void 0 ? !1 : k, T = e.isGroupCall, D = T === void 0 ? !1 : T, x = e.isLinkedGroupCall, $ = e.isSelfHandRaised, P = $ === void 0 ? !1 : $, N = e.isSelfScreenSharing, M = e.isVideoCall, w = e.isVideoMuted, A = e.layoutMode, F = e.onLayoutModeToggle, O = e.onRaiseHandToggle, B = e.onReactionSelect, W = e.onRingParticipant, q = e.onSendMessage, U = e.onVideoMuteToggle, V = e.participantStates, H = e.participantsWithoutSelf, G = e.selfReaction, z = e.showSendMessage, j = e.tooltipAnchorRef, K = e.tooltipOwnerDocument, Q = g(r("WAWebVoipUiPopoutWindowContext")), X = g(r("WAWebVoipFullScreenContext")), Y = g(o("WDSGlobalContext").WDSContext), J = Y.closeAllMenus, Z = r("useWAWebVoipModalManager")(), ee = Z.closeModal, te = Z.openModal, ne = y(null), re = y(null), oe = o("WAWebVoipFullScreenHooks").useShouldShowFullScreenToggle() && !u && !E, ae = function() {
			o("WAWebVoipScreenShareHelpers").handlePressScreenShare({
				isCallLink: m,
				isSelfScreenSharing: N,
				isVideoCall: M,
				isVideoMuted: w,
				onVideoMuteToggle: U,
				openModal: te,
				closeModal: ee,
				targetWindow: Q.windowEl
			});
		}, ie = function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_SEND_MESSAGE_CLICK), q();
		}, le = function() {
			O == null || O();
		}, se = function() {
			X.enterFullScreen();
		}, ue = function() {
			F == null || F();
		}, ce = function() {
			var e = t != null ? t : o("WAWebChatCollection").ChatCollection.getLatestChatForWid(o("WAWebUserPrefsMeUser").getMeUserOrThrow());
			e != null && (o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_ADD_PEOPLE_CLICK), te(p.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
				chat: e,
				isAddingToExistingCall: !0,
				isVideoCall: M,
				onClose: ee
			}), { skipDarkTheme: !0 }));
		}, de = C(function() {
			return new (r("WAWebEventEmitter"))();
		}), me = de[0];
		h(function() {
			me.trigger("update", {
				participantStates: V,
				participantsWithoutSelf: H
			});
		}, [
			V,
			H,
			me
		]);
		var pe = r("useWAWebWaitingRoomState")(), _e = pe.waitingRoomUsersCount, fe = function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_PARTICIPANT_DRAWER_TOGGLE), H != null && V != null && W != null && te(p.jsx(r("WAWebVoipParticipantsModal.react"), {
				call: r("WAWebCallCollection").activeCall,
				onClose: ee,
				onRingParticipant: W,
				initialParticipantStates: V,
				initialParticipantsWithoutSelf: H,
				participantDataEmitter: me
			}), { skipDarkTheme: !0 });
		}, ge = function(t) {
			B == null || B(t), J();
		}, he = f(function(e) {
			if (e.key === "ArrowUp") {
				var t = re.current;
				if (t != null) {
					var n = t.querySelector("[role=\"toolbar\"]"), r = t.querySelectorAll("[role=\"menuitem\"]"), o = t.ownerDocument.activeElement;
					if (n != null && r.length > 0 && o === r[0]) {
						var a = n.querySelectorAll("button");
						a.length > 0 && (a[a.length - 1].focus(), e.preventDefault(), e.stopPropagation());
					}
				}
			}
		}, []), ye = f(function(e) {
			if (!(e.key !== "ArrowUp" && e.key !== "ArrowDown")) {
				var t = re.current;
				if (t != null) {
					var n = t.ownerDocument.activeElement;
					if (!(n == null || !t.contains(n)) && (e.stopPropagation(), e.key === "ArrowDown")) {
						var r = t.querySelector("[role=\"toolbar\"]");
						if (r != null && r.contains(n)) {
							var o = t.querySelector("[role=\"menuitem\"]");
							o instanceof HTMLElement && (o.focus(), e.preventDefault());
						}
					}
				}
			}
		}, []), Ce = s._(
			/*BTDS*/
			""
		), be = P ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), ve = r("WAWebL10N").isRTL() ? "start" : "end", Se = p.jsx("div", {
			className: "dark",
			children: p.jsx("div", babelHelpers.extends({}, (d || (d = r("stylex"))).props(o("WDSThemes").WDSDarkTheme, b.emojiPickerContainer, b.voipDarkLegacyVarOverrides), { children: p.jsx(r("WAWebReactionsSelectionContext").Provider, {
				value: G,
				children: p.jsx(r("WAWebEmojiPanel.react"), {
					displayLocation: o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions,
					onEmoji: ge,
					width: o("WAWebDropdown.react").REACTIONS_PANEL_WIDTH
				})
			}) }))
		}), Re = r("useWDSMenu")({
			targetRef: ne,
			menu: Se,
			position: "above",
			align: ve,
			isContainer: !0,
			ownerDocument: K
		}), Le = function(t) {
			t === o("WAWebSendReactionsTray.react").MORE_REACTIONS ? self.setTimeout(function() {
				Re.openMenu();
			}, L) : B == null || B(t);
		}, Ee = p.jsxs("div", babelHelpers.extends({
			ref: re,
			role: "group",
			onKeyDownCapture: he,
			onKeyDown: ye
		}, d.props(b.stackedTraysOuterContainer, o("WDSThemes").WDSDarkTheme, b.voipDarkLegacyVarOverrides), { children: [
			!E && !I && p.jsx("div", babelHelpers.extends({}, (d || (d = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), { children: p.jsx(o("WAWebSendReactionsTray.react").SendReactionsTray, {
				allowTabEscape: !0,
				isInlineMode: !0,
				isMoreSelected: o("WAWebVoipReactionUtils").getIsMoreReactionSelected(G),
				isParentMsgSentByMe: !1,
				selectedCallback: Le,
				reactions: o("WAWebDefaultReactions").DEFAULT_REACTIONS,
				selectedIndex: o("WAWebVoipReactionUtils").getSelectedReactionIndex(G),
				showMoreOption: !0
			}) })),
			!E && !I && p.jsx("div", { className: "xiryn5a" }),
			p.jsx("div", babelHelpers.extends({}, d.props(o("WDSThemes").WDSDarkTheme, b.optionsMenuContainer), { children: p.jsxs(r("WDSMenu.react"), {
				useMaxWidth: !1,
				children: [
					D && !E && p.jsx(r("WDSMenuItem.react"), {
						Icon: P ? R : S,
						testid: "voip_more_controls_raise_hand",
						title: be,
						onPress: le
					}),
					!E && !I && p.jsx(r("WDSMenuItem.react"), {
						Icon: o("WAWebVoipScreenShareHelpers").getScreenShareIcon(N, i),
						iconDirectional: !0,
						testid: "voip_more_controls_share_screen",
						title: o("WAWebVoipScreenShareHelpers").getScreenShareLabel(N),
						onPress: ae
					}),
					D && !E && !I && p.jsx(r("WDSMenuItem.react"), { type: "separator" }),
					!o("WAWebVoipGatingUtils").isGuestViewer() && o("WAWebVoipGatingUtils").isGroupCallingEnabled() && !x && !I ? p.jsx(r("WDSMenuItem.react"), {
						Icon: r("WDSIconIcPersonAdd.react"),
						testid: "voip_more_controls_add_people",
						title: s._(
							/*BTDS*/
							""
						),
						onPress: ce
					}) : null,
					D && o("WAWebVoipGatingUtils").isGroupCallingEnabled() && H != null && (H.length > 0 || _e > 0 || I && Q.isDocPip) && V != null && W != null ? p.jsx(r("WDSMenuItem.react"), {
						Icon: r("WDSIconIcGroup.react"),
						testid: "voip_more_controls_participants",
						title: s._(
							/*BTDS*/
							""
						),
						onPress: fe
					}) : null,
					!o("WAWebVoipGatingUtils").isGuestViewer() && z && !I ? p.jsx(r("WDSMenuItem.react"), {
						Icon: r("WDSIconWdsIcChat.react"),
						testid: "voip_more_controls_send_message",
						title: s._(
							/*BTDS*/
							""
						),
						onPress: ie
					}) : null,
					oe ? p.jsx(r("WDSMenuItem.react"), {
						Icon: r("WDSIconIcFullscreen.react"),
						testid: "voip_more_controls_full_screen",
						title: s._(
							/*BTDS*/
							""
						),
						onPress: se
					}) : null,
					A != null && F != null && M && D && a > 2 ? p.jsx(r("WDSMenuItem.react"), {
						Icon: A === "grid" ? v : r("WDSIconIcGridView.react"),
						testid: "voip_more_controls_layout_toggle",
						title: A === "grid" ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						),
						onPress: ue
					}) : null
				]
			}) }))
		] })), ke = r("useWDSMenu")({
			targetRef: ne,
			menu: Ee,
			position: "above",
			align: ve,
			isContainer: !0,
			ownerDocument: K
		}), Ie = ke.isMenuOpen || Re.isMenuOpen, Te = function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_MORE_OPTIONS_CLICK), Ie ? (ke.closeMenu(), Re.closeMenu()) : ke.openMenu();
		};
		return p.jsxs(o("WAWebFlex.react").FlexItem, { children: [
			p.jsx(r("WDSTooltip.react"), {
				label: Ce,
				ownerAnchorRef: j,
				ownerDocument: K,
				children: p.jsx(r("WDSButton.react"), {
					ref: ne,
					variant: "borderless",
					"aria-label": Ce,
					"aria-expanded": Ie,
					onPress: Te,
					Icon: r("WDSIconIcMoreVert.react"),
					size: "small",
					xstyle: b.moreButton
				})
			}),
			ke.menuPortal,
			Re.menuPortal
		] });
	}
	E.displayName = E.name + " [from " + i.id + "]", l.default = E;
}), 226);
