__d("WAWebVoipCreateCallLinksPopup.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebABProps",
	"WAWebApiParse",
	"WAWebCallCollection",
	"WAWebCallLinkActionEventWamEvent",
	"WAWebChatCollection",
	"WAWebCopyToClipboard",
	"WAWebDrawerManager",
	"WAWebEnvironment",
	"WAWebExecApiCmd",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebSendTextFlow.react",
	"WAWebSendTextMsgChatAction",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebVoipCallLinkLocalPreview",
	"WAWebVoipCallLinksPopupTypeDropDown.react",
	"WAWebVoipCreateCallLink",
	"WAWebVoipGatingUtils",
	"WAWebVoipWaitingRoomToggleJob",
	"WAWebWaitingRoomApprovalNoteText",
	"WAWebWamEnumCallLinkAction",
	"WAWebWamEnumCallLinkActionEntryPoint",
	"WAWebWamEnumCallLinkMedia",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSIconIcClose.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcSend.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSSwitch.react",
	"WDSText.react",
	"WDSTextField.react",
	"WDSTextualLink.react",
	"WDSTooltip.react",
	"asyncToGeneratorRuntime",
	"err",
	"fbs",
	"react",
	"useWAWebAsyncRetry",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y, C, b, v, S = v || (v = o("react")), R = v, L = R.useCallback, E = R.useRef, k = R.useState, I = {
		padding25: {
			paddingTop: "x9tmck8",
			paddingInlineEnd: "x1a4sjiy",
			paddingBottom: "x156go17",
			paddingInlineStart: "xvahy20",
			$$css: !0
		},
		marginInline25: {
			marginInlineStart: "x1ult018",
			marginInlineEnd: "x1wcu8vx",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		paddingBlock5: {
			paddingTop: "x123j3cw",
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		paddingInline25: {
			paddingInlineStart: "xvahy20",
			paddingInlineEnd: "x1a4sjiy",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingBlock10: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		}
	}, T = 5e3, D = { modalContainer: {
		maxWidth: "x65f84u",
		$$css: !0
	} };
	function x(e) {
		return $.apply(this, arguments);
	}
	function $() {
		return $ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["handleCallLinkClick: handleCallLinkClick"]))), e == null) {
				o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["handleCallLinkClick: callLink is null"]))).sendLogs("click-call-link-error");
				return;
			}
			var t = o("WAWebApiParse").parseAPICmd(e);
			r("WAWebExecApiCmd")({
				cmdData: t,
				isExternal: !1
			});
		}), $.apply(this, arguments);
	}
	function P() {
		return N.apply(this, arguments);
	}
	function N() {
		return N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["handleGenerateCallLinkClick BEGIN"])));
			try {
				o("WAWebModalManager").ModalManager.open(S.jsx(M, {}));
			} catch (e) {
				o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["handleGenerateCallLinkClick: error=", ""])), e);
			}
		}), N.apply(this, arguments);
	}
	function M(t) {
		var a = t.targetChat, i = k(o("WAWebVoipCallLinksPopupTypeDropDown.react").CallLinkType.VIDEO), l = i[0], g = i[1], h = k(!1), y = h[0], C = h[1], v = k(!1), R = v[0], $ = v[1], P = E(!1), N = k(!1), M = N[0], w = N[1], A = E(void 0);
		A.current === void 0 && (A.current = y);
		var F = o("WAWebABProps").getABPropConfigValue("enable_waiting_room_admin_ui"), O = o("WAWebVoipGatingUtils").isWaitingRoomToggleApprovalNoteEnabled(), B = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:activeCall", function() {
			return r("WAWebCallCollection").activeCall != null;
		}, [r("WAWebCallCollection").activeCall]), W = r("useWAWebAsyncRetry")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t;
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: creating call link of type ", ""])), l);
			var a = o("WAWebVoipCreateCallLink").createCallLink({
				callType: l === o("WAWebVoipCallLinksPopupTypeDropDown.react").CallLinkType.VIDEO ? "video" : "audio",
				requireApproval: (t = A.current) != null ? t : !1
			}), i = new (b || (b = (n("Promise"))))(function(e, t) {
				window.setTimeout(function() {
					t(r("err")("Call link creation timed out. Please check your connection and try again."));
				}, T);
			}), s = yield b.race([a, i]);
			return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: The call link created is ", ""])), s), s;
		}), [l]), q = L(function(e) {
			C(e), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: requireApproval toggled to ", ""])), e);
			var t = W.value;
			if (t != null) {
				var n = new URL(t).pathname.split("/").filter(Boolean).pop();
				if (n == null || n === "") {
					o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: link token extraction failed"]))).sendLogs("extract-link-token-error");
					return;
				}
				var r = l === o("WAWebVoipCallLinksPopupTypeDropDown.react").CallLinkType.VIDEO;
				$(!0), o("WAWebVoipWaitingRoomToggleJob").toggleWaitingRoomForCallLink({
					isVideoCall: r,
					linkToken: n,
					waitingRoomEnabled: e
				}).then(function() {
					o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: waiting room toggle succeeded"]))), new (o("WAWebCallLinkActionEventWamEvent")).CallLinkActionEventWamEvent({
						callLinkAction: o("WAWebWamEnumCallLinkAction").CALL_LINK_ACTION.TOGGLE_WAITING_ROOM,
						callLinkActionEntryPoint: o("WAWebWamEnumCallLinkActionEntryPoint").CALL_LINK_ACTION_ENTRY_POINT.LINK_CREATION,
						callLinkMedia: r ? o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VIDEO : o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VOICE,
						isWaitingRoomEnabled: e
					}).commit();
				}).catch(function(t) {
					o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: Failed to toggle waiting room, error: ", ""])), t).sendLogs("toggle-waiting-room-error"), o("WAWebToastManager").ToastManager.open(S.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), C(!e);
				}).finally(function() {
					$(!1);
				});
			}
		}, [W.value, l]);
		W.error && o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: call link creation failed: ", ""])), W.error).sendLogs("create-call-link-error");
		var U = W.loading, V = W.error != null, H = U || V ? null : W.value, G = L(function() {
			H != null && o("WAWebCopyToClipboard").copyTextToClipboard(H).then(function() {
				o("WAWebToastManager").ToastManager.open(S.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			});
		}, [H]);
		function z() {
			if (!(H == null || P.current)) {
				P.current = !0, w(!0), o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["handleGenerateCallLinkClick: handleSendLinkOnWhatsApp"])));
				var e = o("WAWebVoipCallLinkLocalPreview").buildCallLinkLocalPreview(H);
				if (a != null) {
					var t = o("WAWebChatCollection").ChatCollection.getActive();
					if (t != null) {
						o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, H, babelHelpers.extends({}, e != null ? { linkPreview: e } : void 0)), o("WAWebModalManager").ModalManager.close();
						return;
					}
				}
				o("WAWebModalManager").ModalManager.open(S.jsx(r("WAWebSendTextFlow.react"), {
					linkPreview: e,
					title: s._(
						/*BTDS*/
						""
					),
					text: H,
					onSend: o("WAWebDrawerManager").closeDrawerLeft
				}));
			}
		}
		var j = a != null ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), K = (!r("WAWebEnvironment").isWeb || o("WAWebVoipGatingUtils").isGroupCallingEnabled()) && !B;
		return S.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.CDS,
			controlsStyle: [o("WDSMargins.stylex").wdsMargins.margin20, o("WDSPaddings.stylex").wdsPaddings.paddingVer0],
			actions: S.jsx(r("WDSButtonGroup.react"), {
				width: "fill",
				orientation: "horizontal",
				primaryButtonProps: {
					variant: "filled",
					onPress: z,
					testid: "popup-controls-send-link",
					disabled: H == null || R || M,
					size: "medium",
					Icon: r("WDSIconIcSend.react"),
					directional: !0,
					label: j
				},
				secondaryButtonProps: K ? {
					variant: "borderless",
					onPress: function() {
						x(H), o("WAWebModalManager").closeModalManager();
					},
					testid: "popup-controls-join-call",
					disabled: R,
					size: "medium",
					label: s._(
						/*BTDS*/
						""
					)
				} : void 0
			}),
			children: S.jsx(o("WAWebFlex.react").FlexRow, { children: S.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: D.modalContainer,
				children: S.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					gap: 12,
					children: [
						S.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: [I.padding25, o("WDSPaddings.stylex").wdsPaddings.paddingBottom0],
							align: "center",
							justify: "all",
							children: [S.jsx(o("WAWebFlex.react").FlexItem, {
								grow: 1,
								children: S.jsx(o("WAWebText.react").WAWebTextLargeRefreshed, {
									color: "primary",
									children: s._(
										/*BTDS*/
										""
									)
								})
							}), S.jsx(r("WDSButton.react"), {
								testid: "create-call-link-popup-close",
								variant: "borderless",
								type: "default",
								size: "small",
								Icon: r("WDSIconIcClose.react"),
								onPress: o("WAWebModalManager").closeModalManager,
								"aria-label": r("fbs")._(
									/*BTDS*/
									""
								)
							})]
						}),
						S.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: I.marginInline25,
							align: "center",
							children: [S.jsx(o("WAWebFlex.react").FlexItem, {
								shrink: 0,
								children: S.jsx(o("WAWebVoipCallLinksPopupTypeDropDown.react").WAWebVoipCallLinksPopupTypeDropDown, {
									callLinkType: l,
									onCallLinkTypeSelectionChanged: g
								})
							}), S.jsx(o("WAWebFlex.react").FlexItem, {
								grow: 1,
								children: V ? S.jsx("div", {
									className: "x1vqgdyp xh8yej3 x6nvzda x4i4b9w xhl9efl xj65ea0 x78zum5 x6s0dn4 x13a6bvl x2vl965 x4wrhlh",
									children: S.jsx(r("WDSTextualLink.react"), {
										onClick: W.retry,
										children: s._(
											/*BTDS*/
											""
										)
									})
								}) : S.jsx(r("WDSTooltip.react"), {
									label: s._(
										/*BTDS*/
										""
									),
									children: S.jsx(r("WDSTextField.react"), {
										label: s._(
											/*BTDS*/
											""
										),
										value: H != null ? H : "",
										readOnly: !0,
										loading: H == null,
										EndIcon: r("WDSIconIcContentCopy.react"),
										onEndIconClick: G,
										endIconAriaLabel: s._(
											/*BTDS*/
											""
										),
										floatingLabel: !1,
										testid: "voip_create_call_link_text_field"
									})
								})
							})]
						}),
						S.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [I.paddingBlock5, I.paddingInline25],
							children: S.jsx(o("WAWebText.react").WAWebTextSmall, {
								textWrap: "wrap",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						F && S.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: [I.paddingBlock10, I.paddingInline25],
							align: "center",
							justify: "all",
							children: [S.jsxs(o("WAWebFlex.react").FlexColumn, {
								align: "stretch",
								grow: O ? 1 : void 0,
								children: [S.jsx(o("WAWebText.react").WAWebTextSmall, { children: s._(
									/*BTDS*/
									""
								) }), O && S.jsx(r("WDSText.react"), {
									type: "Body3",
									colorName: "contentDeemphasized",
									children: o("WAWebWaitingRoomApprovalNoteText").getWaitingRoomApprovalNoteText()
								})]
							}), S.jsx(o("WAWebFlex.react").FlexItem, {
								shrink: 0,
								children: S.jsxs(o("WAWebFlex.react").FlexRow, {
									align: "center",
									columnGap: 8,
									children: [R && S.jsx(o("WAWebSpinner.react").Spinner, { size: 20 }), S.jsx(r("WDSSwitch.react"), {
										"aria-label": r("fbs")._(
											/*BTDS*/
											""
										),
										disabled: H == null || R,
										value: y,
										onChange: q,
										testid: "require-approval-switch"
									})]
								})
							})]
						})
					]
				})
			}) })
		});
	}
	M.displayName = M.name + " [from " + i.id + "]", l.handleGenerateCallLinkClick = P, l.WAWebVoipCreateCallLinksPopup = M;
}), 226);
