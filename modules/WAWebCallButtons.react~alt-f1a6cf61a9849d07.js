__d("WAWebCallButtons.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebCallButtonsSurface",
	"WAWebCallCollection",
	"WAWebCallLogUtils",
	"WAWebChatGetters",
	"WAWebDesktopUpsellCallingUnavailablePopover.react",
	"WAWebDesktopUpsellUtils",
	"WAWebDrawerManager",
	"WAWebDropdownV2.react",
	"WAWebEnvironment",
	"WAWebFrontendContactGetters",
	"WAWebGroupCallDropdownContent.react",
	"WAWebGroupCallParticipantSelector.react",
	"WAWebGroupMetadataCollection",
	"WAWebLidMigrationUtils",
	"WAWebMenuBarStyles",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMultiParticipantCallImage.react",
	"WAWebNoop",
	"WAWebParticipantListUtils",
	"WAWebPopoverContext.react",
	"WAWebPreCallUserJourneyLogger",
	"WAWebSettingsConst",
	"WAWebSettingsFlowLoadable",
	"WAWebTabOrder",
	"WAWebUserPrefsMeUser",
	"WAWebVoipActionRequestOpenChat",
	"WAWebVoipBetaCallingUpsellPopover.react",
	"WAWebVoipCallBlockedModals",
	"WAWebVoipCallingNux.react",
	"WAWebVoipCoexCallingPermissionDisabledModal.react",
	"WAWebVoipEventConstants",
	"WAWebVoipGatingUtils",
	"WAWebVoipOngoingCallCollection",
	"WAWebVoipStackInterface",
	"WAWebVoipStartCall",
	"WAWebVoipUiDocPipPortalContainer.react",
	"WAWebVoipUiManager",
	"WAWebVoipUiPopoutWindowPortalContainer.react",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWamEnumSubSurface",
	"WDSButton.react",
	"WDSIconIcCall.react",
	"WDSIconIcCallFilled.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconIcVideocam.react",
	"WDSIconIcVideocamFilled.react",
	"WDSIconWdsIcChat.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"WDSTooltip.react",
	"fbs",
	"getErrorSafe",
	"isStringNullOrEmpty",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebABPropConfigValue",
	"useWAWebEventTargetValue",
	"useWAWebExternalBetaOptIn",
	"useWAWebIsWinHybridJoinableCallsEnabled",
	"useWAWebMsgValues",
	"useWAWebVoipCanStartCall",
	"useWAWebVoipIsCallingEnabledAndInited",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y, C, b, v = b || (b = o("react")), S = b, R = S.useCallback, L = S.useEffect, E = S.useMemo, k = S.useRef, I = S.useState, T = n("$InternalEnum").Mirrored([
		"NONE",
		"BETA",
		"DESKTOP"
	]), D = {
		callDropdownShadow: {
			boxShadow: "xs2e80n",
			$$css: !0
		},
		buttonMargin: {
			marginInlineStart: "x150mmf0",
			$$css: !0
		}
	};
	function x(t) {
		var n, a, i, l, b, S = t.callFromUI, x = S === void 0 ? 0 : S, $ = t.callLinkCode, P = $ === void 0 ? "" : $, N = t.chat, M = t.isCallLinkVideo, w = M === void 0 ? !1 : M, A = t.isStartCallDisabled, F = A === void 0 ? !1 : A, O = t.lobbyEntryPoint, B = O === void 0 ? 0 : O, W = t.participants, q = t.surface, U = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited(), V = U.enabled, H = U.inited, G = U.initErrored, z = o("useWAWebIsWinHybridJoinableCallsEnabled").useIsWinHybridJoinableCallsEnabled(), j = o("useWAWebABPropConfigValue").useABPropConfigValue("add_to_call_in_chat_thread") > 0, K = r("useWAWebEventTargetValue")(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "all", function() {
			return o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByChat(N);
		}), Q = o("useWAWebMsgValues").useOptionalMsgValues((n = K == null ? void 0 : K.id) != null ? n : null, [o("WAWebMsgGetters").getSelfOtherDeviceConnected]), X = (a = Q == null ? void 0 : Q[0]) != null ? a : !1, Y = o("WAWebChatGetters").getIsGroup(N), J = !Y && W != null && W.length > 1, Z = o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling(), ee = r("WAWebEnvironment").isWeb && V && !H && !G && !Z && (Y ? o("WAWebVoipGatingUtils").isGroupCallingEnabled() : !0), te = r("WAWebEnvironment").isWeb && V && !H && G && !Z && (Y ? o("WAWebVoipGatingUtils").isGroupCallingEnabled() : !0), ne = !o("useWAWebVoipCanStartCall").useWAWebVoipCanStartCall(N) || F || Z || te, re = o("useWAWebVoipCanStartCall").useWAWebVoipIsCapiCallingPermissionAllowed(N), oe = k(null), ae = k(null), ie = I(!1), le = ie[0], se = ie[1], ue = k(null), ce = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), de = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), me = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), pe = k(!1), _e = k(r("WAWebNoop")), fe = E(function() {
			return new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger();
		}, []), ge = Y || J && W != null && W.length > 2 && q === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails, he = E(function() {
			if (!J || W == null || W.length === 0) return null;
			var e = W.filter(function(e) {
				return !o("WAWebUserPrefsMeUser").isMeAccount(e);
			});
			return {
				avatar: v.jsx(r("WAWebMultiParticipantCallImage.react"), {
					participantWids: e,
					size: 40
				}),
				title: o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(e)
			};
		}, [J, W]), ye = function(n) {
			if (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"voip: header: start call, isVideo: ",
				", groupType: ",
				""
			])), n, N.groupType), !re) {
				o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebVoipCoexCallingPermissionDisabledModal.react"), {}));
				return;
			}
			W != null && W.length > 1 ? (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: header: starting ad hoc group call"]))), o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(W, n, x, B)) : N.groupType === void 0 ? (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: header: starting 1:1 call"]))), o("WAWebVoipStartCall").startWAWebVoipCall(N.contact.id, n, x, B)) : (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: header: starting group call"]))), o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(N, n, x, B));
		}, Ce = k(null), be = R(function(e) {
			oe.current = e, Ce.current = e;
		}, []), ve = o("useWAWebABPropConfigValue").useABPropConfigValue("group_call_max_participants"), Se = r("WAWebEnvironment").isWeb && Y ? r("WAWebGroupMetadataCollection").get(N.id.toString()) : null, Re = (i = (l = Se == null ? void 0 : Se.size) != null ? l : Se == null || (b = Se.participants) == null ? void 0 : b.length) != null ? i : 0, Le = r("WAWebEnvironment").isWeb && Y && Re > ve, Ee = Le && q === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.ChatHeader, ke = r("useWDSMenu")({
			targetRef: Ce,
			enableUIM: !1,
			menu: v.jsx(r("WAWebGroupCallDropdownContent.react"), {
				chat: N,
				isCallingDisabled: ne,
				isLargeGroup: Ee,
				logger: fe,
				onActionTaken: function() {
					pe.current = !0;
				},
				onClose: function() {
					return _e.current();
				}
			}),
			align: "start",
			onClose: function() {
				pe.current || fe.dismissChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), pe.current = !1;
			}
		}), Ie = ke.closeMenu, Te = ke.isMenuOpen, De = ke.menuPortal, xe = ke.openMenu;
		L(function() {
			_e.current = Ie;
		}, [Ie]);
		var $e = R(function() {
			Te ? Ie() : xe();
		}, [
			Te,
			Ie,
			xe
		]), Pe = k(r("WAWebNoop")), Ne = k(r("WAWebNoop")), Me = k(null), we = k(null), Ae = R(function(e) {
			oe.current = e, Me.current = e;
		}, []), Fe = R(function(e) {
			ae.current = e, we.current = e;
		}, []), Oe = function(t) {
			return v.jsx(r("WDSMenu.react"), { children: v.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcPersonAdd.react"),
				title: s._(
					/*BTDS*/
					""
				),
				testid: t ? "add-to-call-video" : "add-to-call-voice",
				onPress: function() {
					o("WAWebVoipStartCall").preloadGroupCallBundle(), (async function() {
						o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
							"voip: add to call clicked for ",
							" call with chat: ",
							""
						])), t ? "video" : "voice", N.id.toString());
						try {
							await o("WAWebVoipStartCall").inviteToCall(N.id);
						} catch (e) {
							o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: add to call failed for ", ""])), N.id.toString()).catching(r("getErrorSafe")(e));
						}
						(t ? Pe : Ne).current();
					})();
				}
			}) });
		}, Be = r("useWDSMenu")({
			targetRef: Me,
			menu: Oe(!0),
			align: "end"
		}), We = Be.closeMenu, qe = Be.menuPortal, Ue = Be.openMenu;
		L(function() {
			Pe.current = We;
		}, [We]);
		var Ve = r("useWDSMenu")({
			targetRef: we,
			menu: Oe(!1),
			align: "end"
		}), He = Ve.closeMenu, Ge = Ve.menuPortal, ze = Ve.openMenu;
		L(function() {
			Ne.current = He;
		}, [He]);
		var je = o("useWAWebABPropConfigValue").useABPropConfigValue("enable_wds_calling_dropdown"), Ke = o("useWAWebABPropConfigValue").useABPropConfigValue("enable_web_calling_nux") && !r("WAWebEnvironment").isWindows, Qe = o("useWAWebABPropConfigValue").useABPropConfigValue("enable_web_calling_beta_upsell"), Xe = q !== o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails && q !== o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly, Ye = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), function() {
			return r("WAWebCallCollection").activeCall;
		}), Je = r("useWAWebEventTargetValue")(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", function() {
			return o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow();
		}), Ze = r("useWAWebEventTargetValue")(o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter, "docPipOpenStateChanged", function() {
			return o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen();
		}), et = Je || Ze, tt = !r("WAWebEnvironment").isWindows || o("WAWebVoipGatingUtils").isWinHybridPlusEnabled(), nt = function() {
			if (K == null || Ye == null) return !1;
			var e = Ye.id, t = o("WAWebMsgGetters").getCallId(K);
			return e === t;
		}, rt = function() {
			return K == null || nt() ? !1 : X != null ? X : !1;
		}, ot = function() {
			var e = o("WAWebCallLogUtils").getJoinButtonTextType(nt(), rt(), o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled());
			return e === "return" ? r("fbs")._(
				/*BTDS*/
				""
			) : e === "join_here" ? r("fbs")._(
				/*BTDS*/
				""
			) : e === "join" ? r("fbs")._(
				/*BTDS*/
				""
			) : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
			})();
		}, at = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), it = at[0], lt = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
		if (Le && !Ee) return null;
		var st = T.NONE;
		if (r("WAWebEnvironment").isWeb && !ee && !te) {
			if (Y) {
				if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled() && !Z) if (lt != null) st = T.DESKTOP;
				else return null;
			} else if (!o("WAWebVoipGatingUtils").isCallingEnabled() && !Z) if (!it && Qe) st = T.BETA;
			else if (lt != null) st = T.DESKTOP;
			else return null;
		}
		var ut = st !== T.NONE, ct = s._(
			/*BTDS*/
			""
		), dt = s._(
			/*BTDS*/
			""
		), mt, pt;
		te ? (mt = dt, pt = dt) : Z ? (mt = ct, pt = ct) : Y ? (mt = s._(
			/*BTDS*/
			""
		), pt = s._(
			/*BTDS*/
			""
		)) : (mt = s._(
			/*BTDS*/
			""
		), pt = s._(
			/*BTDS*/
			""
		));
		var _t = te || Z, ft = function(t) {
			return te ? v.jsx(r("WDSTooltip.react"), {
				label: dt,
				children: t
			}) : Z ? v.jsx(r("WDSTooltip.react"), {
				label: ct,
				children: t
			}) : t;
		}, gt = function(t) {
			return ft(v.jsx("div", {
				className: "x150mmf0",
				children: t
			}));
		}, ht = function(t) {
			var e, n = t ? ce : de;
			(e = n.current) == null || e.hidePopover();
		};
		if (z && K != null && !o("WAWebMsgGetters").getIsCallLink(K) && N.id.isGroup()) {
			if (o("WAWebVoipGatingUtils").isDeviceSwitchEntryPointHidden(rt())) return null;
			var yt = tt && nt() && !et;
			return v.jsx("div", babelHelpers.extends({}, (C || (C = r("stylex"))).props(r("WAWebMenuBarStyles").itemButton, D.buttonMargin), { children: v.jsx(r("WDSButton.react"), {
				label: ot(),
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				Icon: K.isVideoCall ? r("WDSIconIcVideocamFilled.react") : r("WDSIconIcCallFilled.react"),
				variant: yt ? "outline" : "filled",
				disabled: yt,
				onPress: function() {
					tt && nt() ? (window.focus(), o("WAWebVoipUiManager").closeVoipUiPopoutWindow({ callEnded: !1 })) : o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN({
						callId: r("nullthrows")(o("WAWebMsgGetters").getCallId(K)),
						chat: N,
						isDeviceSwitch: o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() && rt(),
						isVideo: o("WAWebMsgGetters").getIsVideoCall(K),
						lobbyEntryPoint: q === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LOG : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CHAT_HEADER
					});
				}
			}) }));
		} else if (q === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails && !r("isStringNullOrEmpty")(P)) return v.jsx("div", babelHelpers.extends({}, (C || (C = r("stylex"))).props(r("WAWebMenuBarStyles").itemButton, D.buttonMargin), { children: v.jsx(r("WDSButton.react"), {
			label: r("fbs")._(
				/*BTDS*/
				""
			),
			Icon: r(w ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react"),
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
			variant: "filled",
			onPress: function() {
				(async function() {
					if (o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
						"voip: preview call link: CallLinkCode=",
						", isVideo=",
						""
					])), P, w), await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
						o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: preview call link blocked — call unavailable"])));
						return;
					}
					try {
						var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
						if (P) {
							var t = o("WAWebFrontendContactGetters").getMyUsername();
							await (e == null ? void 0 : e.previewCallLink(P, w != null ? w : !1, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_CALL_LOG, t)), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: preview call link initiated successfully"])));
						} else o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: preview call link failed - CallLinkCode is empty"])));
					} catch (e) {
						o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: preview call link failed"]))).catching(r("getErrorSafe")(e));
					}
				})();
			}
		}) }));
		var Ct = function(t) {
			var e = t ? pt : mt, n = t ? oe : ae, a = t ? ce : de, i = q === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails || q === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly;
			return v.jsxs(v.Fragment, { children: [_t ? gt(v.jsx(r("WDSButton.react"), {
				testid: t ? "video-call-button" : "voice-call-button",
				variant: "borderless",
				size: "medium",
				type: "default",
				ref: n,
				Icon: r(t ? "WDSIconIcVideocam.react" : "WDSIconIcCall.react"),
				disabled: ne,
				onPress: r("WAWebNoop"),
				"aria-label": e,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON
			})) : v.jsx(r("WDSMenuBarItem.react"), {
				ref: n,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: t ? "video-call-button" : "voice-call-button",
				title: e,
				icon: r(t ? "WDSIconIcVideocam.react" : "WDSIconIcCall.react"),
				disabled: ne,
				marginInlineXstyle: D.buttonMargin
			}), v.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
				xstyle: D.callDropdownShadow,
				controllerRef: a,
				position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
				alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
				target: n,
				maxHeight: 488,
				onClose: function() {
					pe.current || fe.dismissChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), pe.current = !1;
				},
				children: v.jsx(r("WAWebGroupCallParticipantSelector.react"), {
					chat: N,
					groupImage: he == null ? void 0 : he.avatar,
					groupTitleOverride: he == null ? void 0 : he.title,
					hideActions: i,
					isCallingDisabled: ne,
					isVideo: t,
					logger: fe,
					onActionTaken: function() {
						pe.current = !0;
					},
					onCallStart: ht,
					participantWids: J && W != null ? W : void 0,
					useUnifiedUIOverride: i ? !1 : void 0
				}, N.id.toString())
			})] });
		}, bt = function() {
			return o("WAWebVoipGatingUtils").isCallingEnabled() && o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() || G ? null : st === T.BETA ? v.jsx(r("WAWebVoipBetaCallingUpsellPopover.react"), { onClick: function() {
				var e, t, n;
				(e = ce.current) == null || e.hidePopover(), (t = de.current) == null || t.hidePopover(), (n = me.current) == null || n.hidePopover(), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "settings",
					initialStep: o("WAWebSettingsConst").SettingsSteps.Help
				} : v.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
					onEnd: o("WAWebDrawerManager").closeDrawerLeft,
					initialStep: o("WAWebSettingsConst").SettingsSteps.Help
				}));
			} }) : st === T.DESKTOP ? v.jsx(r("WAWebDesktopUpsellCallingUnavailablePopover.react"), {
				userDesktopOs: r("nullthrows")(lt),
				isGroupCall: Y
			}) : null;
		}, vt = function() {
			var e = je || Ee;
			if (ut) {
				var t = bt();
				return v.jsxs(v.Fragment, { children: [v.jsx(r("WDSButton.react"), {
					testid: "call-dropdown-button",
					variant: "borderless",
					size: "medium",
					type: "default",
					ref: oe,
					Icon: r("WDSIconIcVideocam.react"),
					showEndDropdownIcon: !0,
					onPress: function() {
						var e;
						(e = ce.current) == null || e.showPopover();
					},
					"aria-label": pt
				}), v.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
					xstyle: D.callDropdownShadow,
					controllerRef: ce,
					position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
					alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
					target: oe,
					maxHeight: 488,
					children: t
				})] });
			}
			return v.jsxs(v.Fragment, { children: [ft(v.jsx(r("WDSButton.react"), {
				testid: "call-dropdown-button",
				variant: "borderless",
				size: "medium",
				type: "default",
				ref: e ? be : oe,
				Icon: r("WDSIconIcVideocam.react"),
				showEndDropdownIcon: !0,
				disabled: ne,
				onPress: e ? $e : function() {
					var e;
					fe.clickCallDropdown(o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER), (e = ce.current) == null || e.showPopover();
				},
				"aria-label": pt
			})), e ? v.jsx("div", {
				className: "x10l6tqk",
				children: De
			}) : v.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
				xstyle: D.callDropdownShadow,
				controllerRef: ce,
				position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
				alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
				target: oe,
				maxHeight: 488,
				onClose: function() {
					pe.current || fe.dismissChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), pe.current = !1;
				},
				children: v.jsx(r("WAWebGroupCallParticipantSelector.react"), {
					chat: N,
					isCallingDisabled: ne,
					isVideo: !0,
					logger: fe,
					onActionTaken: function() {
						pe.current = !0;
					},
					onCallStart: ht,
					useUnifiedUIOverride: !0
				}, N.id.toString())
			})] });
		}, St = function() {
			if (Ye == null) return !1;
			if (Y && Ye.isGroup) {
				var e, t;
				return (e = (t = Ye.groupJid) == null ? void 0 : t.equals(N.id)) != null ? e : !1;
			}
			if (!Y && Ye.groupCallParticipants != null) return Ye.groupCallParticipants.some(function(e) {
				var t, n = o("WAWebLidMigrationUtils").toCommonAddressingMode(e, N.id), r = n[0], a = n[1];
				return (t = r == null ? void 0 : r.equals(a)) != null ? t : !1;
			});
			if (!Y && !Ye.isGroup) {
				var n, r = o("WAWebLidMigrationUtils").toCommonAddressingMode(Ye.peerJid, N.id), a = r[0], i = r[1];
				return (n = a == null ? void 0 : a.equals(i)) != null ? n : !1;
			}
			return !1;
		}, Rt = function() {
			var e = bt();
			return v.jsxs(v.Fragment, { children: [v.jsx(r("WDSButton.react"), {
				testid: "call-dropdown-button",
				variant: "borderless",
				size: "medium",
				type: "default",
				ref: ue,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				Icon: r("WDSIconIcVideocam.react"),
				showEndDropdownIcon: !0,
				onPress: function() {
					var e;
					(e = me.current) == null || e.showPopover();
				},
				"aria-label": pt
			}), v.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
				xstyle: D.callDropdownShadow,
				controllerRef: me,
				position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
				alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
				target: ue,
				maxHeight: 488,
				children: e
			})] });
		}, Lt = function(t) {
			if (!j || q === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly || Ye == null) return !1;
			var e = St();
			return e ? !1 : Ye.isGroup && Ye.groupJid == null ? !0 : Ye.isGroup ? !1 : t && Ye.isVideo || !t && !Ye.isVideo;
		}, Et = function(t) {
			t ? fe.clickVideoCall(o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER) : fe.clickAudioCall(o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER), Lt(t) ? t ? Ue() : ze() : ye(t);
		}, kt = function() {
			if (ut) return Rt();
			var e = ne, t = ne;
			if (j && q !== o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly && !Z) {
				var n = St();
				n ? (e = !0, t = !0) : Ye != null && (Ye.isGroup && Ye.groupJid != null ? (e = !0, t = !0) : (e = !Ye.isVideo, t = Ye.isVideo));
			}
			var a = _t ? gt(v.jsx(r("WDSButton.react"), {
				testid: "video-call-button",
				variant: "borderless",
				size: "medium",
				type: "default",
				ref: Ae,
				Icon: r("WDSIconIcVideocam.react"),
				disabled: e,
				onPress: function() {
					return Et(!0);
				},
				"aria-label": pt,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON
			})) : v.jsx(r("WDSMenuBarItem.react"), {
				ref: Ae,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "video-call-button",
				icon: r("WDSIconIcVideocam.react"),
				onClick: function() {
					return Et(!0);
				},
				disabled: e,
				title: pt,
				tooltipDisabled: le,
				marginInlineXstyle: D.buttonMargin
			}), i = _t ? gt(v.jsx(r("WDSButton.react"), {
				testid: "voice-call-button",
				variant: "borderless",
				size: "medium",
				type: "default",
				ref: Fe,
				Icon: r("WDSIconIcCall.react"),
				disabled: t,
				onPress: function() {
					return Et(!1);
				},
				"aria-label": mt,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON
			})) : v.jsx(r("WDSMenuBarItem.react"), {
				ref: Fe,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "voice-call-button",
				icon: r("WDSIconIcCall.react"),
				onClick: function() {
					return Et(!1);
				},
				disabled: t,
				title: mt,
				tooltipDisabled: le,
				marginInlineXstyle: D.buttonMargin
			}), l = Lt(!0) ? v.jsx("div", {
				className: "x10l6tqk",
				children: qe
			}) : null, s = Lt(!1) ? v.jsx("div", {
				className: "x10l6tqk",
				children: Ge
			}) : null;
			return v.jsxs(v.Fragment, { children: [
				a,
				l,
				i,
				s
			] });
		}, It = function() {
			if (N.id.isGroup()) return !0;
			if (W == null) return !1;
			var e = W.filter(function(e) {
				return !o("WAWebUserPrefsMeUser").isMeAccount(e);
			});
			return e.length <= 1;
		}, Tt = kt();
		return v.jsxs(v.Fragment, { children: [
			q === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails && It() && v.jsx(r("WDSMenuBarItem.react"), {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "chat-open-button",
				icon: r("WDSIconWdsIcChat.react"),
				onClick: function() {
					return o("WAWebVoipActionRequestOpenChat").requestOpenChat(N.id);
				},
				title: r("fbs")._(
					/*BTDS*/
					""
				),
				marginInlineXstyle: D.buttonMargin
			}),
			Y && (Xe || Ee) && vt(),
			Y && Xe && v.jsx("div", { className: "xamitd3 x3x0x6p xxk0z11 x1i1rx1s" }),
			ge && !Xe && v.jsxs(v.Fragment, { children: [Ct(!0), Ct(!1)] }),
			!ge && Tt,
			Ke && q === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.ChatHeader && !o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() && !G && (!ge && o("WAWebVoipGatingUtils").isCallingEnabled() || Y && Xe && o("WAWebVoipGatingUtils").isGroupCallingEnabled()) && v.jsx("div", {
				className: "x10l6tqk",
				children: v.jsx(r("WAWebVoipCallingNux.react"), {
					onVisibilityChange: se,
					targetRef: Y ? oe : ae
				})
			})
		] });
	}
	x.displayName = x.name + " [from " + i.id + "]", l.WAWebCallButtons = x;
}), 226);
