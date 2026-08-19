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
	"asyncToGeneratorRuntime",
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
		var a, i, l, b, S, x = t.callFromUI, $ = x === void 0 ? 0 : x, P = t.callLinkCode, N = P === void 0 ? "" : P, M = t.chat, w = t.isCallLinkVideo, A = w === void 0 ? !1 : w, F = t.isStartCallDisabled, O = F === void 0 ? !1 : F, B = t.lobbyEntryPoint, W = B === void 0 ? 0 : B, q = t.participants, U = t.surface, V = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited(), H = V.enabled, G = V.inited, z = V.initErrored, j = o("useWAWebIsWinHybridJoinableCallsEnabled").useIsWinHybridJoinableCallsEnabled(), K = o("useWAWebABPropConfigValue").useABPropConfigValue("add_to_call_in_chat_thread") > 0, Q = r("useWAWebEventTargetValue")(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "all", function() {
			return o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByChat(M);
		}), X = o("useWAWebMsgValues").useOptionalMsgValues((a = Q == null ? void 0 : Q.id) != null ? a : null, [o("WAWebMsgGetters").getSelfOtherDeviceConnected]), Y = (i = X == null ? void 0 : X[0]) != null ? i : !1, J = o("WAWebChatGetters").getIsGroup(M), Z = !J && q != null && q.length > 1, ee = o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling(), te = r("WAWebEnvironment").isWeb && H && !G && !z && !ee && (J ? o("WAWebVoipGatingUtils").isGroupCallingEnabled() : !0), ne = r("WAWebEnvironment").isWeb && H && !G && z && !ee && (J ? o("WAWebVoipGatingUtils").isGroupCallingEnabled() : !0), re = !o("useWAWebVoipCanStartCall").useWAWebVoipCanStartCall(M) || O || ee || ne, oe = o("useWAWebVoipCanStartCall").useWAWebVoipIsCapiCallingPermissionAllowed(M), ae = k(null), ie = k(null), le = I(!1), se = le[0], ue = le[1], ce = k(null), de = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), me = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), pe = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), _e = k(!1), fe = k(r("WAWebNoop")), ge = E(function() {
			return new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger();
		}, []), he = J || Z && q != null && q.length > 2 && U === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails, ye = E(function() {
			if (!Z || q == null || q.length === 0) return null;
			var e = q.filter(function(e) {
				return !o("WAWebUserPrefsMeUser").isMeAccount(e);
			});
			return {
				avatar: v.jsx(r("WAWebMultiParticipantCallImage.react"), {
					participantWids: e,
					size: 40
				}),
				title: o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(e)
			};
		}, [Z, q]), Ce = function(n) {
			if (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"voip: header: start call, isVideo: ",
				", groupType: ",
				""
			])), n, M.groupType), !oe) {
				o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebVoipCoexCallingPermissionDisabledModal.react"), {}));
				return;
			}
			q != null && q.length > 1 ? (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: header: starting ad hoc group call"]))), o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(q, n, $, W)) : M.groupType === void 0 ? (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: header: starting 1:1 call"]))), o("WAWebVoipStartCall").startWAWebVoipCall(M.contact.id, n, $, W)) : (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: header: starting group call"]))), o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(M, n, $, W));
		}, be = k(null), ve = R(function(e) {
			ae.current = e, be.current = e;
		}, []), Se = o("useWAWebABPropConfigValue").useABPropConfigValue("group_call_max_participants"), Re = r("WAWebEnvironment").isWeb && J ? r("WAWebGroupMetadataCollection").get(M.id.toString()) : null, Le = (l = (b = Re == null ? void 0 : Re.size) != null ? b : Re == null || (S = Re.participants) == null ? void 0 : S.length) != null ? l : 0, Ee = r("WAWebEnvironment").isWeb && J && Le > Se, ke = Ee && U === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.ChatHeader, Ie = r("useWDSMenu")({
			targetRef: be,
			enableUIM: !1,
			menu: v.jsx(r("WAWebGroupCallDropdownContent.react"), {
				chat: M,
				isCallingDisabled: re,
				isLargeGroup: ke,
				logger: ge,
				onActionTaken: function() {
					_e.current = !0;
				},
				onClose: function() {
					return fe.current();
				}
			}),
			align: "start",
			onClose: function() {
				_e.current || ge.dismissChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), _e.current = !1;
			}
		}), Te = Ie.closeMenu, De = Ie.isMenuOpen, xe = Ie.menuPortal, $e = Ie.openMenu;
		L(function() {
			fe.current = Te;
		}, [Te]);
		var Pe = R(function() {
			De ? Te() : $e();
		}, [
			De,
			Te,
			$e
		]), Ne = k(r("WAWebNoop")), Me = k(r("WAWebNoop")), we = k(null), Ae = k(null), Fe = R(function(e) {
			ae.current = e, we.current = e;
		}, []), Oe = R(function(e) {
			ie.current = e, Ae.current = e;
		}, []), Be = function(t) {
			return v.jsx(r("WDSMenu.react"), { children: v.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcPersonAdd.react"),
				title: s._(
					/*BTDS*/
					""
				),
				testid: t ? "add-to-call-video" : "add-to-call-voice",
				onPress: function() {
					o("WAWebVoipStartCall").preloadGroupCallBundle(), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
							"voip: add to call clicked for ",
							" call with chat: ",
							""
						])), t ? "video" : "voice", M.id.toString());
						try {
							yield o("WAWebVoipStartCall").inviteToCall(M.id);
						} catch (e) {
							o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: add to call failed for ", ""])), M.id.toString()).catching(r("getErrorSafe")(e));
						}
						(t ? Ne : Me).current();
					})();
				}
			}) });
		}, We = r("useWDSMenu")({
			targetRef: we,
			menu: Be(!0),
			align: "end"
		}), qe = We.closeMenu, Ue = We.menuPortal, Ve = We.openMenu;
		L(function() {
			Ne.current = qe;
		}, [qe]);
		var He = r("useWDSMenu")({
			targetRef: Ae,
			menu: Be(!1),
			align: "end"
		}), Ge = He.closeMenu, ze = He.menuPortal, je = He.openMenu;
		L(function() {
			Me.current = Ge;
		}, [Ge]);
		var Ke = o("useWAWebABPropConfigValue").useABPropConfigValue("enable_wds_calling_dropdown"), Qe = o("useWAWebABPropConfigValue").useABPropConfigValue("enable_web_calling_nux") && !r("WAWebEnvironment").isWindows, Xe = o("useWAWebABPropConfigValue").useABPropConfigValue("enable_web_calling_beta_upsell"), Ye = U !== o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails && U !== o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly, Je = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), function() {
			return r("WAWebCallCollection").activeCall;
		}), Ze = r("useWAWebEventTargetValue")(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", function() {
			return o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow();
		}), et = r("useWAWebEventTargetValue")(o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter, "docPipOpenStateChanged", function() {
			return o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen();
		}), tt = Ze || et, nt = !r("WAWebEnvironment").isWindows || o("WAWebVoipGatingUtils").isWinHybridPlusEnabled(), rt = function() {
			if (Q == null || Je == null) return !1;
			var e = Je.id, t = o("WAWebMsgGetters").getCallId(Q);
			return e === t;
		}, ot = function() {
			return Q == null || rt() ? !1 : Y != null ? Y : !1;
		}, at = function() {
			var e = o("WAWebCallLogUtils").getJoinButtonTextType(rt(), ot(), o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled());
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
		}, it = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), lt = it[0], st = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
		if (Ee && !ke) return null;
		var ut = T.NONE;
		if (r("WAWebEnvironment").isWeb && !te && !ne) {
			if (J) {
				if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled() && !ee) if (st != null) ut = T.DESKTOP;
				else return null;
			} else if (!o("WAWebVoipGatingUtils").isCallingEnabled() && !ee) if (!lt && Xe) ut = T.BETA;
			else if (st != null) ut = T.DESKTOP;
			else return null;
		}
		var ct = ut !== T.NONE, dt = s._(
			/*BTDS*/
			""
		), mt = s._(
			/*BTDS*/
			""
		), pt, _t;
		ne ? (pt = mt, _t = mt) : ee ? (pt = dt, _t = dt) : J ? (pt = s._(
			/*BTDS*/
			""
		), _t = s._(
			/*BTDS*/
			""
		)) : (pt = s._(
			/*BTDS*/
			""
		), _t = s._(
			/*BTDS*/
			""
		));
		var ft = ne || ee, gt = function(t) {
			return ne ? v.jsx(r("WDSTooltip.react"), {
				label: mt,
				children: t
			}) : ee ? v.jsx(r("WDSTooltip.react"), {
				label: dt,
				children: t
			}) : t;
		}, ht = function(t) {
			return gt(v.jsx("div", {
				className: "x150mmf0",
				children: t
			}));
		}, yt = function(t) {
			var e, n = t ? de : me;
			(e = n.current) == null || e.hidePopover();
		};
		if (j && Q != null && !o("WAWebMsgGetters").getIsCallLink(Q) && M.id.isGroup()) {
			if (o("WAWebVoipGatingUtils").isDeviceSwitchEntryPointHidden(ot())) return null;
			var Ct = nt && rt() && !tt;
			return v.jsx("div", babelHelpers.extends({}, (C || (C = r("stylex"))).props(r("WAWebMenuBarStyles").itemButton, D.buttonMargin), { children: v.jsx(r("WDSButton.react"), {
				label: at(),
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				Icon: Q.isVideoCall ? r("WDSIconIcVideocamFilled.react") : r("WDSIconIcCallFilled.react"),
				variant: Ct ? "outline" : "filled",
				disabled: Ct,
				onPress: function() {
					nt && rt() ? (window.focus(), o("WAWebVoipUiManager").closeVoipUiPopoutWindow({ callEnded: !1 })) : o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN({
						callId: r("nullthrows")(o("WAWebMsgGetters").getCallId(Q)),
						chat: M,
						isDeviceSwitch: o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() && ot(),
						isVideo: o("WAWebMsgGetters").getIsVideoCall(Q),
						lobbyEntryPoint: U === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LOG : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CHAT_HEADER
					});
				}
			}) }));
		} else if (U === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails && !r("isStringNullOrEmpty")(N)) return v.jsx("div", babelHelpers.extends({}, (C || (C = r("stylex"))).props(r("WAWebMenuBarStyles").itemButton, D.buttonMargin), { children: v.jsx(r("WDSButton.react"), {
			label: r("fbs")._(
				/*BTDS*/
				""
			),
			Icon: r(A ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react"),
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
			variant: "filled",
			onPress: function() {
				n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
						"voip: preview call link: CallLinkCode=",
						", isVideo=",
						""
					])), N, A), yield o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
						o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: preview call link blocked — call unavailable"])));
						return;
					}
					try {
						var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
						if (N) {
							var t = o("WAWebFrontendContactGetters").getMyUsername();
							yield e == null ? void 0 : e.previewCallLink(N, A != null ? A : !1, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_CALL_LOG, t), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: preview call link initiated successfully"])));
						} else o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: preview call link failed - CallLinkCode is empty"])));
					} catch (e) {
						o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: preview call link failed"]))).catching(r("getErrorSafe")(e));
					}
				})();
			}
		}) }));
		var bt = function(t) {
			var e = t ? _t : pt, n = t ? ae : ie, a = t ? de : me, i = U === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails || U === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly;
			return v.jsxs(v.Fragment, { children: [ft ? ht(v.jsx(r("WDSButton.react"), {
				testid: t ? "video-call-button" : "voice-call-button",
				variant: "borderless",
				size: "medium",
				type: "default",
				ref: n,
				Icon: r(t ? "WDSIconIcVideocam.react" : "WDSIconIcCall.react"),
				disabled: re,
				onPress: r("WAWebNoop"),
				"aria-label": e,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON
			})) : v.jsx(r("WDSMenuBarItem.react"), {
				ref: n,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: t ? "video-call-button" : "voice-call-button",
				title: e,
				icon: r(t ? "WDSIconIcVideocam.react" : "WDSIconIcCall.react"),
				disabled: re,
				marginInlineXstyle: D.buttonMargin
			}), v.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
				xstyle: D.callDropdownShadow,
				controllerRef: a,
				position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
				alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
				target: n,
				maxHeight: 488,
				onClose: function() {
					_e.current || ge.dismissChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), _e.current = !1;
				},
				children: v.jsx(r("WAWebGroupCallParticipantSelector.react"), {
					chat: M,
					groupImage: ye == null ? void 0 : ye.avatar,
					groupTitleOverride: ye == null ? void 0 : ye.title,
					hideActions: i,
					isCallingDisabled: re,
					isVideo: t,
					logger: ge,
					onActionTaken: function() {
						_e.current = !0;
					},
					onCallStart: yt,
					participantWids: Z && q != null ? q : void 0,
					useUnifiedUIOverride: i ? !1 : void 0
				}, M.id.toString())
			})] });
		}, vt = function() {
			return o("WAWebVoipGatingUtils").isCallingEnabled() && o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() || z ? null : ut === T.BETA ? v.jsx(r("WAWebVoipBetaCallingUpsellPopover.react"), { onClick: function() {
				var e, t, n;
				(e = de.current) == null || e.hidePopover(), (t = me.current) == null || t.hidePopover(), (n = pe.current) == null || n.hidePopover(), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "settings",
					initialStep: o("WAWebSettingsConst").SettingsSteps.Help
				} : v.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
					onEnd: o("WAWebDrawerManager").closeDrawerLeft,
					initialStep: o("WAWebSettingsConst").SettingsSteps.Help
				}));
			} }) : ut === T.DESKTOP ? v.jsx(r("WAWebDesktopUpsellCallingUnavailablePopover.react"), {
				userDesktopOs: r("nullthrows")(st),
				isGroupCall: J
			}) : null;
		}, St = function() {
			var e = Ke || ke;
			if (ct) {
				var t = vt();
				return v.jsxs(v.Fragment, { children: [v.jsx(r("WDSButton.react"), {
					testid: "call-dropdown-button",
					variant: "borderless",
					size: "medium",
					type: "default",
					ref: ae,
					Icon: r("WDSIconIcVideocam.react"),
					showEndDropdownIcon: !0,
					onPress: function() {
						var e;
						(e = de.current) == null || e.showPopover();
					},
					"aria-label": _t
				}), v.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
					xstyle: D.callDropdownShadow,
					controllerRef: de,
					position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
					alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
					target: ae,
					maxHeight: 488,
					children: t
				})] });
			}
			return v.jsxs(v.Fragment, { children: [gt(v.jsx(r("WDSButton.react"), {
				testid: "call-dropdown-button",
				variant: "borderless",
				size: "medium",
				type: "default",
				ref: e ? ve : ae,
				Icon: r("WDSIconIcVideocam.react"),
				showEndDropdownIcon: !0,
				disabled: re,
				onPress: e ? Pe : function() {
					var e;
					ge.clickCallDropdown(o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER), (e = de.current) == null || e.showPopover();
				},
				"aria-label": _t
			})), e ? v.jsx("div", {
				className: "x10l6tqk",
				children: xe
			}) : v.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
				xstyle: D.callDropdownShadow,
				controllerRef: de,
				position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
				alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
				target: ae,
				maxHeight: 488,
				onClose: function() {
					_e.current || ge.dismissChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), _e.current = !1;
				},
				children: v.jsx(r("WAWebGroupCallParticipantSelector.react"), {
					chat: M,
					isCallingDisabled: re,
					isVideo: !0,
					logger: ge,
					onActionTaken: function() {
						_e.current = !0;
					},
					onCallStart: yt,
					useUnifiedUIOverride: !0
				}, M.id.toString())
			})] });
		}, Rt = function() {
			if (Je == null) return !1;
			if (J && Je.isGroup) {
				var e, t;
				return (e = (t = Je.groupJid) == null ? void 0 : t.equals(M.id)) != null ? e : !1;
			}
			if (!J && Je.groupCallParticipants != null) return Je.groupCallParticipants.some(function(e) {
				var t, n = o("WAWebLidMigrationUtils").toCommonAddressingMode(e, M.id), r = n[0], a = n[1];
				return (t = r == null ? void 0 : r.equals(a)) != null ? t : !1;
			});
			if (!J && !Je.isGroup) {
				var n, r = o("WAWebLidMigrationUtils").toCommonAddressingMode(Je.peerJid, M.id), a = r[0], i = r[1];
				return (n = a == null ? void 0 : a.equals(i)) != null ? n : !1;
			}
			return !1;
		}, Lt = function() {
			var e = vt();
			return v.jsxs(v.Fragment, { children: [v.jsx(r("WDSButton.react"), {
				testid: "call-dropdown-button",
				variant: "borderless",
				size: "medium",
				type: "default",
				ref: ce,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				Icon: r("WDSIconIcVideocam.react"),
				showEndDropdownIcon: !0,
				onPress: function() {
					var e;
					(e = pe.current) == null || e.showPopover();
				},
				"aria-label": _t
			}), v.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
				xstyle: D.callDropdownShadow,
				controllerRef: pe,
				position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
				alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
				target: ce,
				maxHeight: 488,
				children: e
			})] });
		}, Et = function(t) {
			if (!K || U === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly || Je == null) return !1;
			var e = Rt();
			return e ? !1 : Je.isGroup && Je.groupJid == null ? !0 : Je.isGroup ? !1 : t && Je.isVideo || !t && !Je.isVideo;
		}, kt = function(t) {
			t ? ge.clickVideoCall(o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER) : ge.clickAudioCall(o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER), Et(t) ? t ? Ve() : je() : Ce(t);
		}, It = function() {
			if (ct) return Lt();
			var e = re, t = re;
			if (K && U !== o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly && !ee) {
				var n = Rt();
				n ? (e = !0, t = !0) : Je != null && (Je.isGroup && Je.groupJid != null ? (e = !0, t = !0) : (e = !Je.isVideo, t = Je.isVideo));
			}
			var a = ft ? ht(v.jsx(r("WDSButton.react"), {
				testid: "video-call-button",
				variant: "borderless",
				size: "medium",
				type: "default",
				ref: Fe,
				Icon: r("WDSIconIcVideocam.react"),
				disabled: e,
				onPress: function() {
					return kt(!0);
				},
				"aria-label": _t,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON
			})) : v.jsx(r("WDSMenuBarItem.react"), {
				ref: Fe,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "video-call-button",
				icon: r("WDSIconIcVideocam.react"),
				onClick: function() {
					return kt(!0);
				},
				disabled: e,
				title: _t,
				tooltipDisabled: se,
				marginInlineXstyle: D.buttonMargin
			}), i = ft ? ht(v.jsx(r("WDSButton.react"), {
				testid: "voice-call-button",
				variant: "borderless",
				size: "medium",
				type: "default",
				ref: Oe,
				Icon: r("WDSIconIcCall.react"),
				disabled: t,
				onPress: function() {
					return kt(!1);
				},
				"aria-label": pt,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON
			})) : v.jsx(r("WDSMenuBarItem.react"), {
				ref: Oe,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "voice-call-button",
				icon: r("WDSIconIcCall.react"),
				onClick: function() {
					return kt(!1);
				},
				disabled: t,
				title: pt,
				tooltipDisabled: se,
				marginInlineXstyle: D.buttonMargin
			}), l = Et(!0) ? v.jsx("div", {
				className: "x10l6tqk",
				children: Ue
			}) : null, s = Et(!1) ? v.jsx("div", {
				className: "x10l6tqk",
				children: ze
			}) : null;
			return v.jsxs(v.Fragment, { children: [
				a,
				l,
				i,
				s
			] });
		}, Tt = function() {
			if (M.id.isGroup()) return !0;
			if (q == null) return !1;
			var e = q.filter(function(e) {
				return !o("WAWebUserPrefsMeUser").isMeAccount(e);
			});
			return e.length <= 1;
		}, Dt = It();
		return v.jsxs(v.Fragment, { children: [
			U === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails && Tt() && v.jsx(r("WDSMenuBarItem.react"), {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "chat-open-button",
				icon: r("WDSIconWdsIcChat.react"),
				onClick: function() {
					return o("WAWebVoipActionRequestOpenChat").requestOpenChat(M.id);
				},
				title: r("fbs")._(
					/*BTDS*/
					""
				),
				marginInlineXstyle: D.buttonMargin
			}),
			J && (Ye || ke) && St(),
			J && Ye && v.jsx("div", { className: "xamitd3 x3x0x6p xxk0z11 x1i1rx1s" }),
			he && !Ye && v.jsxs(v.Fragment, { children: [bt(!0), bt(!1)] }),
			!he && Dt,
			Qe && U === o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.ChatHeader && !o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() && !z && (!he && o("WAWebVoipGatingUtils").isCallingEnabled() || J && Ye && o("WAWebVoipGatingUtils").isGroupCallingEnabled()) && v.jsx("div", {
				className: "x10l6tqk",
				children: v.jsx(r("WAWebVoipCallingNux.react"), {
					onVisibilityChange: ue,
					targetRef: J ? ae : ie
				})
			})
		] });
	}
	x.displayName = x.name + " [from " + i.id + "]", l.WAWebCallButtons = x;
}), 226);
