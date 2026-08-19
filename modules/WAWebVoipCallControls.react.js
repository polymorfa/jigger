__d("WAWebVoipCallControls.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebFlex.react",
	"WAWebNoop",
	"WAWebVoipActivityTracker",
	"WAWebVoipCameraDeviceSelector.react",
	"WAWebVoipFullScreenContext",
	"WAWebVoipGatingUtils",
	"WAWebVoipGridPageSize",
	"WAWebVoipLobbyUtils",
	"WAWebVoipMicDeviceSelector.react",
	"WAWebVoipMoreControlsButton.react",
	"WAWebVoipMoveCallConfirmPopup.react",
	"WAWebVoipNewGroupCallContactPicker.react",
	"WAWebVoipPopoutMoreControlsButton.react",
	"WAWebVoipRaiseHandButton.react",
	"WAWebVoipReactionButton.react",
	"WAWebVoipScreenShareHelpers",
	"WAWebVoipUiManager",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipUiPopoutWindowPortalContainer.react",
	"WDSButton.react",
	"WDSIconIcBackToTab.react",
	"WDSIconIcCallEndFilled.react",
	"WDSIconIcCallFilled.react",
	"WDSIconIcFullscreenExit.react",
	"WDSIconIcGridView.react",
	"WDSIconIcGroup.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconIcVideoCallingGrid.react",
	"WDSIconIcVideocamFilled.react",
	"WDSIconWdsIcPipLeftBottomToTopRight.react",
	"WDSText.react",
	"WDSThemes",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"useDelayedBooleanState",
	"useWAWebEventTargetValue",
	"useWAWebVoipContainerWidth",
	"useWAWebVoipModalManager",
	"useWAWebVoipWindowPopoutTooltipProps"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["iconXstyle"], u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useRef;
	function _(e) {
		return e === "accept" ? s._(
			/*BTDS*/
			""
		) : e === "accepting" ? s._(
			/*BTDS*/
			""
		) : e === "decline" ? s._(
			/*BTDS*/
			""
		) : e === "join" ? s._(
			/*BTDS*/
			""
		) : e === "joining" ? s._(
			/*BTDS*/
			""
		) : e === "ignore" ? s._(
			/*BTDS*/
			""
		) : e === "end" ? s._(
			/*BTDS*/
			""
		) : e === "leave" ? s._(
			/*BTDS*/
			""
		) : e === "cancel" ? s._(
			/*BTDS*/
			""
		) : e === "notNow" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	var f = {
		positiveButton: {
			labelKey: "accept",
			shouldShow: !0
		},
		negativeButton: {
			labelKey: "decline",
			shouldShow: !0
		}
	}, g = {
		acceptButton: {
			backgroundColor: "x1qe8gl4",
			$$css: !0
		},
		callButtonMedium: {
			height: "x1vqgdyp",
			minWidth: "xxsxjwm",
			$$css: !0
		},
		callButtonSmall: {
			height: "x10w6t97",
			minWidth: "x4m7ku4",
			$$css: !0
		},
		notNowButtonMedium: {
			height: "x1vqgdyp",
			width: "x14atkfc",
			whiteSpace: "xuxw1ft",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		notNowButtonSmall: {
			height: "x10w6t97",
			width: "x14atkfc",
			whiteSpace: "xuxw1ft",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		centreControlButton: {
			width: "x1useyqa",
			height: "xsdox4t",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			$$css: !0
		},
		participantsButtonWithCount: {
			width: "x14atkfc",
			height: "xsdox4t",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			paddingInlineStart: "x1onr9mi",
			paddingInlineEnd: "x1pic42t",
			$$css: !0
		},
		participantsButtonActive: {
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		callControlsRow: {
			height: "xsdox4t",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		callControlsRowPopout: {
			containerType: "x12h1iku",
			height: "xnnlda6",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			pointerEvents: "x47corl",
			$$css: !0
		},
		popOutButton: {
			height: "x10w6t97",
			$$css: !0
		},
		controlsGroup: {
			columnGap: "x1s70e7g",
			$$css: !0
		},
		centreControlsGroup: {
			columnGap: "x1trrmfo",
			$$css: !0
		},
		leftControlsGroup: {
			minWidth: "xeuugli",
			$$css: !0
		},
		spacer: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "x1r8uery",
			minWidth: "xnokg69",
			$$css: !0
		},
		buttonWrapper: {
			flexShrink: "x2lah0s",
			minWidth: "xeuugli",
			pointerEvents: "x67bb7w",
			$$css: !0
		},
		popoutHideBelowLevel1: {
			display: "xp4xbxe",
			$$css: !0
		},
		popoutHideBelowLevel2: {
			display: "xzql6c",
			$$css: !0
		},
		popoutHideBelowLevel3: {
			display: "x13vgwrq",
			$$css: !0
		},
		popoutHideBelowLevel4: {
			display: "xhzq5o0",
			$$css: !0
		},
		popoutHideBelowLevel6: {
			display: "x9v7kmw",
			$$css: !0
		},
		popoutOverflowButton: {
			display: "x9p39jg x9v7kmw",
			$$css: !0
		},
		flipVertical: {
			transform: "xtjevij",
			$$css: !0
		}
	};
	function h(t) {
		var n = o("react-compiler-runtime").c(8), a, i;
		n[0] !== t ? (a = t.iconXstyle, i = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l;
		n[3] !== a ? (l = [g.flipVertical, a], n[3] = a, n[4] = l) : l = n[4];
		var s;
		return n[5] !== i || n[6] !== l ? (s = c.jsx(r("WDSIconIcVideoCallingGrid.react"), babelHelpers.extends({}, i, { iconXstyle: l })), n[5] = i, n[6] = l, n[7] = s) : s = n[7], s;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(52), n = e.buttonCustomizations, a = e.hasCameraAvailable, i = e.isAccepting, l = e.isMuted, u = e.isVideoCall, d = e.isVideoMuted, p = e.moreButton, h = e.onMuteToggle, y = e.onNegativeButtonClick, C = e.onPositiveButtonClick, b = e.onVideoMuteToggle, v = n === void 0 ? f : n, S = i === void 0 ? !1 : i, R = m(r("WAWebVoipUiPopoutWindowContext")), L = R.isContextInPopoutWindow && !R.isDocPip, E = v.negativeButton, k = v.positiveButton, I;
		t[0] !== E.labelKey ? (I = _(E.labelKey), t[0] = E.labelKey, t[1] = I) : I = t[1];
		var T = I, D = r("useDelayedBooleanState")(S, 150), x = k.labelKey === "accept" ? "accepting" : k.labelKey === "join" ? "joining" : null, $;
		t[2] !== x || t[3] !== D || t[4] !== k.labelKey ? ($ = D && x != null ? _(x) : _(k.labelKey), t[2] = x, t[3] = D, t[4] = k.labelKey, t[5] = $) : $ = t[5];
		var P = $, N = E.showLabel !== !1, M;
		t[6] !== E.styleType || t[7] !== T || t[8] !== y || t[9] !== N || t[10] !== L ? (M = E.styleType === "borderless" ? c.jsx(r("WDSButton.react"), {
			testid: "voip-reject-call-button",
			type: "default",
			variant: "borderless",
			onPress: function() {
				y();
			},
			size: L ? "medium" : "small",
			xstyle: L ? g.notNowButtonMedium : g.notNowButtonSmall,
			label: T,
			"aria-label": T
		}) : E.styleType === "media" ? c.jsx(r("WDSButton.react"), {
			testid: "voip-reject-call-button",
			type: "media",
			onPress: function() {
				y();
			},
			size: L ? "medium" : "small",
			xstyle: L ? g.callButtonMedium : g.callButtonSmall,
			label: T,
			"aria-label": T
		}) : c.jsx(r("WDSButton.react"), {
			testid: "voip-reject-call-button",
			type: "destructive",
			variant: "filled",
			onPress: function() {
				y();
			},
			Icon: r("WDSIconIcCallEndFilled.react"),
			size: L ? "medium" : "small",
			xstyle: [o("WDSThemes").WDSLightTheme, L ? g.callButtonMedium : g.callButtonSmall],
			label: N ? T : void 0,
			"aria-label": T
		}), t[6] = E.styleType, t[7] = T, t[8] = y, t[9] = N, t[10] = L, t[11] = M) : M = t[11];
		var w = M, A;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
			/*BTDS*/
			""
		), t[12] = A) : A = t[12];
		var F = L ? g.callControlsRowPopout : g.callControlsRow, O;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (O = [g.controlsGroup, g.leftControlsGroup], t[13] = O) : O = t[13];
		var B;
		t[14] !== a || t[15] !== u || t[16] !== d || t[17] !== b ? (B = u && c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: g.buttonWrapper,
			children: c.jsx(r("WAWebVoipCameraDeviceSelector.react"), {
				isMuted: d,
				hasCameraAvailable: a,
				isVideoCall: u,
				onMainClick: function() {
					b();
				}
			})
		}), t[14] = a, t[15] = u, t[16] = d, t[17] = b, t[18] = B) : B = t[18];
		var W;
		t[19] !== h ? (W = function() {
			h();
		}, t[19] = h, t[20] = W) : W = t[20];
		var q;
		t[21] !== l || t[22] !== W ? (q = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: g.buttonWrapper,
			children: c.jsx(r("WAWebVoipMicDeviceSelector.react"), {
				isMuted: l,
				isPreviewMode: !0,
				onMainClick: W
			})
		}), t[21] = l, t[22] = W, t[23] = q) : q = t[23];
		var U;
		t[24] !== q || t[25] !== B ? (U = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			grow: 0,
			shrink: 1,
			basis: "auto",
			xstyle: O,
			children: [B, q]
		}), t[24] = q, t[25] = B, t[26] = U) : U = t[26];
		var V;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (V = c.jsx(o("WAWebFlex.react").FlexItem, { xstyle: g.spacer }), t[27] = V) : V = t[27];
		var H = L && g.centreControlsGroup, G;
		t[28] !== H ? (G = [g.controlsGroup, H], t[28] = H, t[29] = G) : G = t[29];
		var z;
		t[30] !== p || t[31] !== L ? (z = p != null && !L && c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: g.buttonWrapper,
			children: p
		}), t[30] = p, t[31] = L, t[32] = z) : z = t[32];
		var j;
		t[33] !== E.shouldShow || t[34] !== w ? (j = E.shouldShow && c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: g.buttonWrapper,
			children: w
		}), t[33] = E.shouldShow, t[34] = w, t[35] = j) : j = t[35];
		var K;
		t[36] !== D || t[37] !== u || t[38] !== C || t[39] !== k.shouldShow || t[40] !== P || t[41] !== L ? (K = k.shouldShow && c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: g.buttonWrapper,
			children: c.jsx(r("WDSButton.react"), {
				testid: "voip-accept-call-button",
				type: "default",
				onPress: function() {
					C();
				},
				Icon: r(u ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react"),
				size: L ? "medium" : "small",
				xstyle: [
					o("WDSThemes").WDSLightTheme,
					L ? g.callButtonMedium : g.callButtonSmall,
					g.acceptButton
				],
				label: P,
				"aria-label": P,
				disabled: D
			})
		}), t[36] = D, t[37] = u, t[38] = C, t[39] = k.shouldShow, t[40] = P, t[41] = L, t[42] = K) : K = t[42];
		var Q;
		t[43] !== G || t[44] !== z || t[45] !== j || t[46] !== K ? (Q = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			grow: 0,
			shrink: 0,
			basis: "auto",
			xstyle: G,
			children: [
				z,
				j,
				K
			]
		}), t[43] = G, t[44] = z, t[45] = j, t[46] = K, t[47] = Q) : Q = t[47];
		var X;
		return t[48] !== U || t[49] !== Q || t[50] !== F ? (X = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "start",
			grow: 1,
			role: "toolbar",
			"aria-label": A,
			xstyle: F,
			children: [
				U,
				V,
				Q
			]
		}), t[48] = U, t[49] = Q, t[50] = F, t[51] = X) : X = t[51], X;
	}
	function C(e) {
		return e === "grid" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	var b = 620, v = 550, S = 490, R = 450, L = 410, E = 370;
	function k(e) {
		return e == null ? 0 : e < E ? 6 : e < L ? 5 : e < R ? 4 : e < S ? 3 : e < v ? 2 : e < b ? 1 : 0;
	}
	function I(e) {
		var t = e.hasAddPeopleAction, n = e.hasLayoutToggleAction, r = e.hasParticipantsAction, o = e.isGroupCall, a = e.level;
		if (a < 1) return [];
		if (a >= 6) return [];
		var i = [];
		return a >= 2 && i.push("screen-share"), a >= 3 && o && i.push("raise-hand"), a >= 4 && (r && i.push("participants"), t && i.push("add-people")), i.push("return-to-whatsapp"), n && i.push("layout-toggle"), i;
	}
	function T(e) {
		var t, n, a = e.chat, i = e.connectedParticipantsCount, l = i === void 0 ? 0 : i, u = e.hasCameraAvailable, d = e.isAnyPeerScreenSharing, _ = e.isCallActive, f = e.isCallLink, y = f === void 0 ? !1 : f, b = e.isCallOutgoing, v = b === void 0 ? !1 : b, S = e.isConnectedLonely, R = S === void 0 ? !1 : S, L = e.isGroupCall, E = e.isLinkedGroupCall, T = e.isMuted, P = e.isParticipantDrawerOpen, N = P === void 0 ? !1 : P, M = e.isSelfHandRaised, w = e.isSelfScreenSharing, A = e.isVideoCall, F = e.isVideoMuted, O = e.layoutMode, B = e.onEnd, W = e.onLayoutModeToggle, q = e.onMuteToggle, U = e.onRaiseHandToggle, V = e.onReactionSelect, H = e.onRingParticipant, G = e.onSendMessage, z = e.onToggleParticipantDrawer, j = e.onVideoMuteToggle, K = e.participantStates, Q = e.participantsWithoutSelf, X = e.ringingMoreButton, Y = e.selfReaction, J = e.showSendMessage, Z = e.showVideoToggle, ee = Z === void 0 ? !0 : Z, te = m(r("WAWebVoipUiPopoutWindowContext")), ne = te.isContextInPopoutWindow && !te.isDocPip, re = m(r("WAWebVoipFullScreenContext")), oe = r("useWAWebEventTargetValue")(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow), ae = r("useWAWebVoipWindowPopoutTooltipProps")(), ie = ae.tooltipAnchorRef, le = ae.tooltipOwnerDocument, se = p(null), ue = r("useWAWebVoipContainerWidth")(se), ce = ne ? k(ue) : 0, de = _ && ne && L && A && O != null && W != null && l > 2, me = de && ce < 1, pe = re.isFullScreen, _e = ce < 6, fe = L && ce < 3, ge = ce < 2, he = L && o("WAWebVoipGatingUtils").isGroupCallingEnabled() && Q != null && K != null && H != null && ce < 4, ye = a != null && o("WAWebVoipGatingUtils").isGroupCallingEnabled() && !L && ce < 4, Ce = !o("WAWebVoipGatingUtils").isGuestViewer() && ne && ce < 1, be = L && o("WAWebVoipGatingUtils").isGroupCallingEnabled() && Q != null && K != null && H != null, ve = a != null && o("WAWebVoipGatingUtils").isGroupCallingEnabled() && !L, Se = I({
			hasAddPeopleAction: ve,
			hasLayoutToggleAction: de,
			hasParticipantsAction: be,
			isGroupCall: L,
			level: ce
		}), Re = ne && Se.length > 0, Le = r("useWAWebVoipModalManager")(), Ee = Le.closeModal, ke = Le.openModal, Ie = function() {
			try {
				var e;
				(e = te.windowEl) == null || (e = e.open("#", "wa-web-main")) == null || e.focus();
			} catch (e) {}
			o("WAWebVoipUiManager").closeVoipUiPopoutWindow({ callEnded: !1 });
		}, Te = function() {
			if (w) {
				ke(c.jsx(r("WAWebVoipMoveCallConfirmPopup.react"), {
					closeModal: Ee,
					onConfirm: Ie
				}));
				return;
			}
			Ie();
		};
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			grow: 1,
			ref: se,
			role: "toolbar",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			xstyle: ne ? g.callControlsRowPopout : g.callControlsRow,
			children: [
				c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "start",
					grow: ne ? 1 : 0,
					basis: ne ? 0 : "auto",
					xstyle: [g.controlsGroup, g.leftControlsGroup],
					children: [ee && c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: g.buttonWrapper,
						children: c.jsx(r("WAWebVoipCameraDeviceSelector.react"), {
							isDisabled: !_ && !v || w && !((t = (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.isSelfDualStreaming()) != null && t) || !A && y,
							disableMainButton: v && !_,
							hasCameraAvailable: u,
							isMuted: F,
							isVideoCall: A,
							onMainClick: function() {
								j();
							}
						})
					}), c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: g.buttonWrapper,
						children: c.jsx(r("WAWebVoipMicDeviceSelector.react"), {
							isMuted: T,
							onMainClick: function() {
								q();
							}
						})
					})]
				}),
				ne && ce < 6 ? c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: g.centreControlsGroup,
					children: [
						_e ? c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [g.buttonWrapper, g.popoutHideBelowLevel6],
							children: c.jsx(r("WAWebVoipReactionButton.react"), {
								isDisabled: !_ || R,
								onReactionSelect: V,
								selfReaction: Y
							})
						}) : null,
						fe ? c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [g.buttonWrapper, g.popoutHideBelowLevel3],
							children: c.jsx(o("WAWebVoipRaiseHandButton.react").WAWebVoipRaiseHandButton, {
								isDisabled: !_,
								isSelfHandRaised: M != null ? M : !1,
								onRaiseHandToggle: U != null ? U : r("WAWebNoop"),
								tooltipAnchorRef: ie,
								tooltipOwnerDocument: le
							})
						}) : null,
						ge ? c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [g.buttonWrapper, g.popoutHideBelowLevel2],
							children: c.jsx(D, {
								isCallLink: y,
								isDisabled: !_ || R,
								isSelfScreenSharing: w,
								isAnyPeerScreenSharing: d,
								isVideoCall: A,
								isVideoMuted: F,
								onVideoMuteToggle: j,
								tooltipAnchorRef: ie,
								tooltipOwnerDocument: le
							})
						}) : null,
						he ? c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [g.buttonWrapper, g.popoutHideBelowLevel4],
							children: c.jsx(x, {
								connectedParticipantsCount: l,
								isActive: N,
								isCallActive: _,
								onToggleParticipantDrawer: z,
								tooltipAnchorRef: ie,
								tooltipOwnerDocument: le
							})
						}) : null,
						ye && a != null ? c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [g.buttonWrapper, g.popoutHideBelowLevel4],
							children: c.jsx($, {
								chat: a,
								isVideoCall: A,
								tooltipAnchorRef: ie,
								tooltipOwnerDocument: le
							})
						}) : null,
						pe ? c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: g.buttonWrapper,
							children: c.jsx(r("WDSTooltip.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								ownerAnchorRef: ie,
								ownerDocument: le,
								children: c.jsx(r("WDSButton.react"), {
									testid: "voip-exit-fullscreen-button",
									variant: "borderless",
									onPress: re.exitFullScreen,
									Icon: r("WDSIconIcFullscreenExit.react"),
									size: "medium",
									xstyle: g.centreControlButton,
									"aria-label": s._(
										/*BTDS*/
										""
									)
								})
							})
						}) : null
					]
				}) : null,
				c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "end",
					shrink: 0,
					grow: ne ? 1 : 0,
					basis: ne ? 0 : "auto",
					xstyle: g.controlsGroup,
					children: [
						!te.isContextInPopoutWindow && c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: g.buttonWrapper,
							children: c.jsx(r("WDSTooltip.react"), {
								label: oe ? s._(
									/*BTDS*/
									""
								) : s._(
									/*BTDS*/
									""
								),
								ownerAnchorRef: ie,
								ownerDocument: le,
								children: c.jsx(r("WDSButton.react"), {
									testid: "voip-popout-button",
									variant: "borderless",
									onPress: oe ? function() {
										var e;
										(e = o("WAWebVoipUiPopoutWindowPortalContainer.react").getPopoutWindow()) == null || e.focus();
									} : o("WAWebVoipUiManager").openVoipUiPopoutWindow,
									Icon: r("WDSIconWdsIcPipLeftBottomToTopRight.react"),
									size: "small",
									xstyle: g.popOutButton,
									"aria-label": oe ? s._(
										/*BTDS*/
										""
									) : s._(
										/*BTDS*/
										""
									)
								})
							})
						}),
						X != null && !ne ? X : null,
						_ && !ne ? c.jsx(r("WAWebVoipMoreControlsButton.react"), {
							chat: a,
							connectedParticipantsCount: l,
							isAnyPeerScreenSharing: d,
							isCallActiveInPopoutWindow: oe,
							isCallLink: y,
							isConnectedLonely: R,
							isGroupCall: L,
							isLinkedGroupCall: E,
							isSelfHandRaised: M,
							isSelfScreenSharing: w,
							isVideoCall: A,
							isVideoMuted: F,
							layoutMode: O,
							onLayoutModeToggle: W,
							onRaiseHandToggle: U,
							onReactionSelect: V,
							onRingParticipant: H,
							onSendMessage: G,
							onVideoMuteToggle: j,
							participantStates: K,
							participantsWithoutSelf: Q,
							selfReaction: Y,
							showSendMessage: J,
							tooltipAnchorRef: ie,
							tooltipOwnerDocument: le
						}) : null,
						me ? c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [g.buttonWrapper, g.popoutHideBelowLevel1],
							children: c.jsx(r("WDSTooltip.react"), {
								label: C(O),
								ownerAnchorRef: ie,
								ownerDocument: le,
								children: c.jsx(r("WDSButton.react"), {
									testid: "voip-layout-toggle-button",
									variant: "borderless",
									onPress: W,
									Icon: O === "grid" ? h : r("WDSIconIcGridView.react"),
									size: ne ? "medium" : "small",
									xstyle: ne ? g.centreControlButton : void 0,
									"aria-label": O === "grid" ? s._(
										/*BTDS*/
										""
									) : s._(
										/*BTDS*/
										""
									)
								})
							})
						}) : null,
						Ce ? c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [g.buttonWrapper, g.popoutHideBelowLevel1],
							children: c.jsx(r("WDSTooltip.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								ownerAnchorRef: ie,
								ownerDocument: le,
								children: c.jsx(r("WDSButton.react"), {
									testid: "voip-focus-main-button",
									variant: "borderless",
									onPress: Te,
									Icon: r("WDSIconIcBackToTab.react"),
									size: "medium",
									xstyle: g.centreControlButton,
									"aria-label": s._(
										/*BTDS*/
										""
									)
								})
							})
						}) : null,
						Re ? c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [g.buttonWrapper, g.popoutOverflowButton],
							children: c.jsx(r("WAWebVoipPopoutMoreControlsButton.react"), {
								actions: Se,
								chat: a,
								isAnyPeerScreenSharing: d,
								isCallActive: _,
								isCallLink: y,
								isConnectedLonely: R,
								isSelfHandRaised: M,
								isSelfScreenSharing: w,
								isVideoCall: A,
								isVideoMuted: F,
								layoutMode: O,
								onLayoutModeToggle: W,
								onRaiseHandToggle: U,
								onReturnToWhatsApp: Te,
								onToggleParticipantDrawer: z,
								onVideoMuteToggle: j,
								tooltipAnchorRef: ie,
								tooltipOwnerDocument: le
							})
						}) : null,
						c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: g.buttonWrapper,
							children: c.jsx(r("WDSTooltip.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								ownerAnchorRef: ie,
								ownerDocument: le,
								children: c.jsx(r("WDSButton.react"), {
									testid: "voip-end-call-button",
									type: "destructive",
									variant: "filled",
									onPress: function() {
										B();
									},
									Icon: r("WDSIconIcCallEndFilled.react"),
									size: ne ? "medium" : "small",
									xstyle: [o("WDSThemes").WDSLightTheme, ne ? g.callButtonMedium : g.callButtonSmall],
									"aria-label": s._(
										/*BTDS*/
										""
									)
								})
							})
						})
					]
				})
			]
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		var t = o("react-compiler-runtime").c(32), n = e.isAnyPeerScreenSharing, a = e.isCallLink, i = e.isDisabled, l = e.isSelfScreenSharing, s = e.isVideoCall, u = e.isVideoMuted, d = e.onVideoMuteToggle, p = e.tooltipAnchorRef, _ = e.tooltipOwnerDocument, f = a === void 0 ? !1 : a, h = i === void 0 ? !1 : i, y = r("useWAWebVoipModalManager")(), C = y.closeModal, b = y.openModal, v = m(r("WAWebVoipUiPopoutWindowContext")), S = v.windowEl, R;
		t[0] !== l ? (R = o("WAWebVoipScreenShareHelpers").getScreenShareLabel(l), t[0] = l, t[1] = R) : R = t[1];
		var L = l ? "filled" : "borderless", E = l ? "destructive" : "default", k;
		t[2] !== l ? (k = o("WAWebVoipScreenShareHelpers").getScreenShareLabel(l), t[2] = l, t[3] = k) : k = t[3];
		var I;
		t[4] !== C || t[5] !== f || t[6] !== l || t[7] !== s || t[8] !== u || t[9] !== d || t[10] !== b || t[11] !== S ? (I = function() {
			o("WAWebVoipScreenShareHelpers").handlePressScreenShare({
				isCallLink: f,
				isSelfScreenSharing: l,
				isVideoCall: s,
				isVideoMuted: u,
				onVideoMuteToggle: d,
				openModal: b,
				closeModal: C,
				targetWindow: S
			});
		}, t[4] = C, t[5] = f, t[6] = l, t[7] = s, t[8] = u, t[9] = d, t[10] = b, t[11] = S, t[12] = I) : I = t[12];
		var T;
		t[13] !== n || t[14] !== l ? (T = o("WAWebVoipScreenShareHelpers").getScreenShareIcon(l, n), t[13] = n, t[14] = l, t[15] = T) : T = t[15];
		var D = l && o("WDSThemes").WDSDarkTheme, x;
		t[16] !== D ? (x = [D, g.centreControlButton], t[16] = D, t[17] = x) : x = t[17];
		var $;
		t[18] !== h || t[19] !== l || t[20] !== x || t[21] !== L || t[22] !== E || t[23] !== k || t[24] !== I || t[25] !== T ? ($ = c.jsx(r("WDSButton.react"), {
			variant: L,
			type: E,
			"aria-label": k,
			"aria-pressed": l,
			disabled: h,
			onPress: I,
			Icon: T,
			directional: !0,
			size: "medium",
			xstyle: x
		}), t[18] = h, t[19] = l, t[20] = x, t[21] = L, t[22] = E, t[23] = k, t[24] = I, t[25] = T, t[26] = $) : $ = t[26];
		var P;
		return t[27] !== $ || t[28] !== R || t[29] !== p || t[30] !== _ ? (P = c.jsx(r("WDSTooltip.react"), {
			label: R,
			ownerAnchorRef: p,
			ownerDocument: _,
			children: $
		}), t[27] = $, t[28] = R, t[29] = p, t[30] = _, t[31] = P) : P = t[31], P;
	}
	function x(e) {
		var t = o("react-compiler-runtime").c(17), n = e.connectedParticipantsCount, a = e.disabled, i = e.isActive, l = e.isCallActive, u = e.onToggleParticipantDrawer, d = e.tooltipAnchorRef, m = e.tooltipOwnerDocument, p = n === void 0 ? 0 : n, _ = i === void 0 ? !1 : i, f = l === void 0 ? !1 : l, h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[0] = h) : h = t[0];
		var y = h, C = f && o("WAWebVoipGridPageSize").getGridParticipantsPerPage() < p, b = C ? g.participantsButtonWithCount : g.centreControlButton, v = _ && g.participantsButtonActive, S;
		t[1] !== b || t[2] !== v ? (S = [b, v], t[1] = b, t[2] = v, t[3] = S) : S = t[3];
		var R;
		t[4] !== p || t[5] !== C ? (R = C ? c.jsx("span", {
			className: "x1wbi8v6",
			children: c.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: String(p)
			})
		}) : null, t[4] = p, t[5] = C, t[6] = R) : R = t[6];
		var L;
		t[7] !== a || t[8] !== _ || t[9] !== u || t[10] !== S || t[11] !== R ? (L = c.jsx(r("WDSButton.react"), {
			testid: "voip-participant-drawer-button",
			variant: "borderless",
			type: "media",
			"aria-label": y,
			"aria-pressed": _,
			disabled: a,
			onPress: u,
			Icon: r("WDSIconIcGroup.react"),
			size: "medium",
			xstyle: S,
			children: R
		}), t[7] = a, t[8] = _, t[9] = u, t[10] = S, t[11] = R, t[12] = L) : L = t[12];
		var E;
		return t[13] !== L || t[14] !== d || t[15] !== m ? (E = c.jsx(r("WDSTooltip.react"), {
			label: y,
			ownerAnchorRef: d,
			ownerDocument: m,
			children: L
		}), t[13] = L, t[14] = d, t[15] = m, t[16] = E) : E = t[16], E;
	}
	function $(e) {
		var t = o("react-compiler-runtime").c(13), n = e.chat, a = e.disabled, i = e.isVideoCall, l = e.tooltipAnchorRef, u = e.tooltipOwnerDocument, d = a === void 0 ? !1 : a, m = r("useWAWebVoipModalManager")(), p = m.closeModal, _ = m.openModal, f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[0] = f) : f = t[0];
		var h = f, y;
		t[1] !== n || t[2] !== p || t[3] !== i || t[4] !== _ ? (y = function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_ADD_PEOPLE_CLICK), _(c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
				chat: n,
				isAddingToExistingCall: !0,
				isVideoCall: i,
				onClose: p
			}), {
				blockClose: !0,
				skipDarkTheme: !0
			});
		}, t[1] = n, t[2] = p, t[3] = i, t[4] = _, t[5] = y) : y = t[5];
		var C;
		t[6] !== d || t[7] !== y ? (C = c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			"aria-label": h,
			disabled: d,
			onPress: y,
			Icon: r("WDSIconIcPersonAdd.react"),
			size: "medium",
			xstyle: g.centreControlButton
		}), t[6] = d, t[7] = y, t[8] = C) : C = t[8];
		var b;
		return t[9] !== C || t[10] !== l || t[11] !== u ? (b = c.jsx(r("WDSTooltip.react"), {
			label: h,
			ownerAnchorRef: l,
			ownerDocument: u,
			children: C
		}), t[9] = C, t[10] = l, t[11] = u, t[12] = b) : b = t[12], b;
	}
	function P(e) {
		var t = o("react-compiler-runtime").c(72), n = e.buttonCustomizations, a = e.callState, i = e.chat, l = e.connectedParticipantsCount, s = e.hasCameraAvailable, u = e.isAccepting, d = e.isAnyPeerScreenSharing, p = e.isCallActive, _ = e.isCallLink, g = e.isCallOutgoing, h = e.isCallRinging, C = e.isConnectedLonely, b = e.isGroupCall, v = e.isInLobby, S = e.isLinkedGroupCall, R = e.isMuted, L = e.isParticipantDrawerOpen, E = e.isSelfHandRaised, k = e.isSelfScreenSharing, I = e.isVideoCall, D = e.isVideoMuted, x = e.layoutMode, $ = e.onAccept, P = e.onEnd, N = e.onLayoutModeToggle, M = e.onMuteToggle, w = e.onRaiseHandToggle, A = e.onReactionSelect, F = e.onReject, O = e.onRingParticipant, B = e.onSendMessage, W = e.onToggleParticipantDrawer, q = e.onVideoMuteToggle, U = e.participantStates, V = e.participantsWithoutSelf, H = e.selfReaction, G = e.showSendMessage, z = e.showVideoToggle, j = n === void 0 ? f : n, K = l === void 0 ? 0 : l, Q = u === void 0 ? !1 : u, X = _ === void 0 ? !1 : _, Y = g === void 0 ? !1 : g, J = C === void 0 ? !1 : C, Z = b === void 0 ? !1 : b, ee = v === void 0 ? !1 : v, te = S === void 0 ? !1 : S, ne = L === void 0 ? !1 : L, re = E === void 0 ? !1 : E, oe = z === void 0 ? !0 : z, ae;
		t[0] !== a || t[1] !== Y || t[2] !== ee || t[3] !== P || t[4] !== F ? (ae = ee ? o("WAWebVoipLobbyUtils").getLobbyNegativeButtonHandler({
			callState: a,
			isCallOutgoing: Y,
			onEnd: P,
			onReject: F
		}) : F, t[0] = a, t[1] = Y, t[2] = ee, t[3] = P, t[4] = F, t[5] = ae) : ae = t[5];
		var ie = ae, le = r("useWAWebVoipWindowPopoutTooltipProps")(), se = le.tooltipAnchorRef, ue = le.tooltipOwnerDocument, ce = Y && !ee, de;
		t[6] !== i || t[7] !== d || t[8] !== X || t[9] !== J || t[10] !== Z || t[11] !== te || t[12] !== re || t[13] !== k || t[14] !== I || t[15] !== D || t[16] !== w || t[17] !== A || t[18] !== O || t[19] !== B || t[20] !== q || t[21] !== U || t[22] !== V || t[23] !== ce || t[24] !== se || t[25] !== ue ? (de = ce ? c.jsx(r("WAWebVoipMoreControlsButton.react"), {
			chat: i,
			isCallLink: X,
			isCallRinging: !0,
			isConnectedLonely: J,
			isGroupCall: Z,
			isLinkedGroupCall: te,
			isSelfHandRaised: re,
			isSelfScreenSharing: k,
			isAnyPeerScreenSharing: d,
			isVideoCall: I,
			isVideoMuted: D,
			onRaiseHandToggle: w,
			onReactionSelect: A,
			onRingParticipant: O,
			onSendMessage: B,
			onVideoMuteToggle: q,
			participantStates: U,
			participantsWithoutSelf: V,
			showSendMessage: !1,
			tooltipAnchorRef: se,
			tooltipOwnerDocument: ue
		}) : null, t[6] = i, t[7] = d, t[8] = X, t[9] = J, t[10] = Z, t[11] = te, t[12] = re, t[13] = k, t[14] = I, t[15] = D, t[16] = w, t[17] = A, t[18] = O, t[19] = B, t[20] = q, t[21] = U, t[22] = V, t[23] = ce, t[24] = se, t[25] = ue, t[26] = de) : de = t[26];
		var me = de, pe = m(r("WAWebVoipUiPopoutWindowContext")), _e = pe.isContextInPopoutWindow && !pe.isDocPip, fe = h && Y && _e;
		if ((h || ee) && !fe) {
			var ge;
			return t[27] !== j || t[28] !== s || t[29] !== Q || t[30] !== R || t[31] !== I || t[32] !== D || t[33] !== ie || t[34] !== $ || t[35] !== M || t[36] !== q || t[37] !== me ? (ge = c.jsx(y, {
				buttonCustomizations: j,
				hasCameraAvailable: s,
				isAccepting: Q,
				isMuted: R,
				isVideoCall: I,
				isVideoMuted: D,
				moreButton: me,
				onPositiveButtonClick: $,
				onMuteToggle: M,
				onNegativeButtonClick: ie,
				onVideoMuteToggle: q
			}), t[27] = j, t[28] = s, t[29] = Q, t[30] = R, t[31] = I, t[32] = D, t[33] = ie, t[34] = $, t[35] = M, t[36] = q, t[37] = me, t[38] = ge) : ge = t[38], ge;
		}
		var he;
		return t[39] !== i || t[40] !== K || t[41] !== s || t[42] !== d || t[43] !== p || t[44] !== X || t[45] !== Y || t[46] !== J || t[47] !== Z || t[48] !== te || t[49] !== R || t[50] !== ne || t[51] !== re || t[52] !== k || t[53] !== I || t[54] !== D || t[55] !== x || t[56] !== P || t[57] !== N || t[58] !== M || t[59] !== w || t[60] !== A || t[61] !== O || t[62] !== B || t[63] !== W || t[64] !== q || t[65] !== U || t[66] !== V || t[67] !== me || t[68] !== H || t[69] !== G || t[70] !== oe ? (he = c.jsx(T, {
			chat: i,
			connectedParticipantsCount: K,
			hasCameraAvailable: s,
			isCallActive: p,
			isCallOutgoing: Y,
			isConnectedLonely: J,
			isMuted: R,
			isSelfHandRaised: re,
			isVideoCall: I,
			isVideoMuted: D,
			isSelfScreenSharing: k,
			isAnyPeerScreenSharing: d,
			isCallLink: X,
			isLinkedGroupCall: te,
			isParticipantDrawerOpen: ne,
			showVideoToggle: oe,
			layoutMode: x,
			onEnd: P,
			onLayoutModeToggle: N,
			onMuteToggle: M,
			onRaiseHandToggle: w,
			onReactionSelect: A,
			onRingParticipant: O,
			onSendMessage: B,
			onToggleParticipantDrawer: W,
			onVideoMuteToggle: q,
			participantStates: U,
			participantsWithoutSelf: V,
			ringingMoreButton: me,
			selfReaction: H,
			isGroupCall: Z,
			showSendMessage: G
		}), t[39] = i, t[40] = K, t[41] = s, t[42] = d, t[43] = p, t[44] = X, t[45] = Y, t[46] = J, t[47] = Z, t[48] = te, t[49] = R, t[50] = ne, t[51] = re, t[52] = k, t[53] = I, t[54] = D, t[55] = x, t[56] = P, t[57] = N, t[58] = M, t[59] = w, t[60] = A, t[61] = O, t[62] = B, t[63] = W, t[64] = q, t[65] = U, t[66] = V, t[67] = me, t[68] = H, t[69] = G, t[70] = oe, t[71] = he) : he = t[71], he;
	}
	l.default = P;
}), 226);
