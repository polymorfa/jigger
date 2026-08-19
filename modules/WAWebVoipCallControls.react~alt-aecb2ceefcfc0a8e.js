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
		var n = t.iconXstyle, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return c.jsx(r("WDSIconIcVideoCallingGrid.react"), babelHelpers.extends({}, o, { iconXstyle: [g.flipVertical, n] }));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.buttonCustomizations, n = t === void 0 ? f : t, a = e.hasCameraAvailable, i = e.isAccepting, l = i === void 0 ? !1 : i, u = e.isMuted, d = e.isVideoCall, p = e.isVideoMuted, h = e.moreButton, y = e.onMuteToggle, C = e.onNegativeButtonClick, b = e.onPositiveButtonClick, v = e.onVideoMuteToggle, S = m(r("WAWebVoipUiPopoutWindowContext")), R = S.isContextInPopoutWindow && !S.isDocPip, L = n.negativeButton, E = n.positiveButton, k = _(L.labelKey), I = r("useDelayedBooleanState")(l, 150), T = E.labelKey === "accept" ? "accepting" : E.labelKey === "join" ? "joining" : null, D = I && T != null ? _(T) : _(E.labelKey), x = L.showLabel !== !1, $ = L.styleType === "borderless" ? c.jsx(r("WDSButton.react"), {
			testid: "voip-reject-call-button",
			type: "default",
			variant: "borderless",
			onPress: function() {
				C();
			},
			size: R ? "medium" : "small",
			xstyle: R ? g.notNowButtonMedium : g.notNowButtonSmall,
			label: k,
			"aria-label": k
		}) : L.styleType === "media" ? c.jsx(r("WDSButton.react"), {
			testid: "voip-reject-call-button",
			type: "media",
			onPress: function() {
				C();
			},
			size: R ? "medium" : "small",
			xstyle: R ? g.callButtonMedium : g.callButtonSmall,
			label: k,
			"aria-label": k
		}) : c.jsx(r("WDSButton.react"), {
			testid: "voip-reject-call-button",
			type: "destructive",
			variant: "filled",
			onPress: function() {
				C();
			},
			Icon: r("WDSIconIcCallEndFilled.react"),
			size: R ? "medium" : "small",
			xstyle: [o("WDSThemes").WDSLightTheme, R ? g.callButtonMedium : g.callButtonSmall],
			label: x ? k : void 0,
			"aria-label": k
		});
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "start",
			grow: 1,
			role: "toolbar",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			xstyle: R ? g.callControlsRowPopout : g.callControlsRow,
			children: [
				c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					grow: 0,
					shrink: 1,
					basis: "auto",
					xstyle: [g.controlsGroup, g.leftControlsGroup],
					children: [d && c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: g.buttonWrapper,
						children: c.jsx(r("WAWebVoipCameraDeviceSelector.react"), {
							isMuted: p,
							hasCameraAvailable: a,
							isVideoCall: d,
							onMainClick: function() {
								v();
							}
						})
					}), c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: g.buttonWrapper,
						children: c.jsx(r("WAWebVoipMicDeviceSelector.react"), {
							isMuted: u,
							isPreviewMode: !0,
							onMainClick: function() {
								y();
							}
						})
					})]
				}),
				c.jsx(o("WAWebFlex.react").FlexItem, { xstyle: g.spacer }),
				c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					grow: 0,
					shrink: 0,
					basis: "auto",
					xstyle: [g.controlsGroup, R && g.centreControlsGroup],
					children: [
						h != null && !R && c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: g.buttonWrapper,
							children: h
						}),
						L.shouldShow && c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: g.buttonWrapper,
							children: $
						}),
						E.shouldShow && c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: g.buttonWrapper,
							children: c.jsx(r("WDSButton.react"), {
								testid: "voip-accept-call-button",
								type: "default",
								onPress: function() {
									b();
								},
								Icon: r(d ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react"),
								size: R ? "medium" : "small",
								xstyle: [
									o("WDSThemes").WDSLightTheme,
									R ? g.callButtonMedium : g.callButtonSmall,
									g.acceptButton
								],
								label: D,
								"aria-label": D,
								disabled: I
							})
						})
					]
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
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
		var t = e.isAnyPeerScreenSharing, n = e.isCallLink, a = n === void 0 ? !1 : n, i = e.isDisabled, l = i === void 0 ? !1 : i, s = e.isSelfScreenSharing, u = e.isVideoCall, d = e.isVideoMuted, p = e.onVideoMuteToggle, _ = e.tooltipAnchorRef, f = e.tooltipOwnerDocument, h = r("useWAWebVoipModalManager")(), y = h.closeModal, C = h.openModal, b = m(r("WAWebVoipUiPopoutWindowContext")), v = b.windowEl;
		return c.jsx(r("WDSTooltip.react"), {
			label: o("WAWebVoipScreenShareHelpers").getScreenShareLabel(s),
			ownerAnchorRef: _,
			ownerDocument: f,
			children: c.jsx(r("WDSButton.react"), {
				variant: s ? "filled" : "borderless",
				type: s ? "destructive" : "default",
				"aria-label": o("WAWebVoipScreenShareHelpers").getScreenShareLabel(s),
				"aria-pressed": s,
				disabled: l,
				onPress: function() {
					o("WAWebVoipScreenShareHelpers").handlePressScreenShare({
						isCallLink: a,
						isSelfScreenSharing: s,
						isVideoCall: u,
						isVideoMuted: d,
						onVideoMuteToggle: p,
						openModal: C,
						closeModal: y,
						targetWindow: v
					});
				},
				Icon: o("WAWebVoipScreenShareHelpers").getScreenShareIcon(s, t),
				directional: !0,
				size: "medium",
				xstyle: [s && o("WDSThemes").WDSDarkTheme, g.centreControlButton]
			})
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t = e.connectedParticipantsCount, n = t === void 0 ? 0 : t, a = e.disabled, i = e.isActive, l = i === void 0 ? !1 : i, u = e.isCallActive, d = u === void 0 ? !1 : u, m = e.onToggleParticipantDrawer, p = e.tooltipAnchorRef, _ = e.tooltipOwnerDocument, f = s._(
			/*BTDS*/
			""
		), h = d && o("WAWebVoipGridPageSize").getGridParticipantsPerPage() < n;
		return c.jsx(r("WDSTooltip.react"), {
			label: f,
			ownerAnchorRef: p,
			ownerDocument: _,
			children: c.jsx(r("WDSButton.react"), {
				testid: "voip-participant-drawer-button",
				variant: "borderless",
				type: "media",
				"aria-label": f,
				"aria-pressed": l,
				disabled: a,
				onPress: m,
				Icon: r("WDSIconIcGroup.react"),
				size: "medium",
				xstyle: [h ? g.participantsButtonWithCount : g.centreControlButton, l && g.participantsButtonActive],
				children: h ? c.jsx("span", {
					className: "x1wbi8v6",
					children: c.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						children: String(n)
					})
				}) : null
			})
		});
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e) {
		var t = e.chat, n = e.disabled, a = n === void 0 ? !1 : n, i = e.isVideoCall, l = e.tooltipAnchorRef, u = e.tooltipOwnerDocument, d = r("useWAWebVoipModalManager")(), m = d.closeModal, p = d.openModal, _ = s._(
			/*BTDS*/
			""
		);
		return c.jsx(r("WDSTooltip.react"), {
			label: _,
			ownerAnchorRef: l,
			ownerDocument: u,
			children: c.jsx(r("WDSButton.react"), {
				variant: "borderless",
				"aria-label": _,
				disabled: a,
				onPress: function() {
					o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_ADD_PEOPLE_CLICK), p(c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
						chat: t,
						isAddingToExistingCall: !0,
						isVideoCall: i,
						onClose: m
					}), {
						blockClose: !0,
						skipDarkTheme: !0
					});
				},
				Icon: r("WDSIconIcPersonAdd.react"),
				size: "medium",
				xstyle: g.centreControlButton
			})
		});
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P(e) {
		var t = e.buttonCustomizations, n = t === void 0 ? f : t, a = e.callState, i = e.chat, l = e.connectedParticipantsCount, s = l === void 0 ? 0 : l, u = e.hasCameraAvailable, d = e.isAccepting, p = d === void 0 ? !1 : d, _ = e.isAnyPeerScreenSharing, g = e.isCallActive, h = e.isCallLink, C = h === void 0 ? !1 : h, b = e.isCallOutgoing, v = b === void 0 ? !1 : b, S = e.isCallRinging, R = e.isConnectedLonely, L = R === void 0 ? !1 : R, E = e.isGroupCall, k = E === void 0 ? !1 : E, I = e.isInLobby, D = I === void 0 ? !1 : I, x = e.isLinkedGroupCall, $ = x === void 0 ? !1 : x, P = e.isMuted, N = e.isParticipantDrawerOpen, M = N === void 0 ? !1 : N, w = e.isSelfHandRaised, A = w === void 0 ? !1 : w, F = e.isSelfScreenSharing, O = e.isVideoCall, B = e.isVideoMuted, W = e.layoutMode, q = e.onAccept, U = e.onEnd, V = e.onLayoutModeToggle, H = e.onMuteToggle, G = e.onRaiseHandToggle, z = e.onReactionSelect, j = e.onReject, K = e.onRingParticipant, Q = e.onSendMessage, X = e.onToggleParticipantDrawer, Y = e.onVideoMuteToggle, J = e.participantStates, Z = e.participantsWithoutSelf, ee = e.selfReaction, te = e.showSendMessage, ne = e.showVideoToggle, re = ne === void 0 ? !0 : ne, oe = D ? o("WAWebVoipLobbyUtils").getLobbyNegativeButtonHandler({
			callState: a,
			isCallOutgoing: v,
			onEnd: U,
			onReject: j
		}) : j, ae = r("useWAWebVoipWindowPopoutTooltipProps")(), ie = ae.tooltipAnchorRef, le = ae.tooltipOwnerDocument, se = v && !D, ue = se ? c.jsx(r("WAWebVoipMoreControlsButton.react"), {
			chat: i,
			isCallLink: C,
			isCallRinging: !0,
			isConnectedLonely: L,
			isGroupCall: k,
			isLinkedGroupCall: $,
			isSelfHandRaised: A,
			isSelfScreenSharing: F,
			isAnyPeerScreenSharing: _,
			isVideoCall: O,
			isVideoMuted: B,
			onRaiseHandToggle: G,
			onReactionSelect: z,
			onRingParticipant: K,
			onSendMessage: Q,
			onVideoMuteToggle: Y,
			participantStates: J,
			participantsWithoutSelf: Z,
			showSendMessage: !1,
			tooltipAnchorRef: ie,
			tooltipOwnerDocument: le
		}) : null, ce = m(r("WAWebVoipUiPopoutWindowContext")), de = ce.isContextInPopoutWindow && !ce.isDocPip, me = S && v && de;
		return (S || D) && !me ? c.jsx(y, {
			buttonCustomizations: n,
			hasCameraAvailable: u,
			isAccepting: p,
			isMuted: P,
			isVideoCall: O,
			isVideoMuted: B,
			moreButton: ue,
			onPositiveButtonClick: q,
			onMuteToggle: H,
			onNegativeButtonClick: oe,
			onVideoMuteToggle: Y
		}) : c.jsx(T, {
			chat: i,
			connectedParticipantsCount: s,
			hasCameraAvailable: u,
			isCallActive: g,
			isCallOutgoing: v,
			isConnectedLonely: L,
			isMuted: P,
			isSelfHandRaised: A,
			isVideoCall: O,
			isVideoMuted: B,
			isSelfScreenSharing: F,
			isAnyPeerScreenSharing: _,
			isCallLink: C,
			isLinkedGroupCall: $,
			isParticipantDrawerOpen: M,
			showVideoToggle: re,
			layoutMode: W,
			onEnd: U,
			onLayoutModeToggle: V,
			onMuteToggle: H,
			onRaiseHandToggle: G,
			onReactionSelect: z,
			onRingParticipant: K,
			onSendMessage: Q,
			onToggleParticipantDrawer: X,
			onVideoMuteToggle: Y,
			participantStates: J,
			participantsWithoutSelf: Z,
			ringingMoreButton: ue,
			selfReaction: ee,
			isGroupCall: k,
			showSendMessage: te
		});
	}
	P.displayName = P.name + " [from " + i.id + "]", l.default = P;
}), 226);
