__d("WAWebVoipCreateCallLinksPopup.react", [
	"fbt",
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
	"err",
	"fbs",
	"react",
	"useWAWebAsyncRetry",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y, C, b, v = b || (b = o("react")), S = b, R = S.useCallback, L = S.useRef, E = S.useState, k = {
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
	}, I = 5e3, T = { modalContainer: {
		maxWidth: "x65f84u",
		$$css: !0
	} };
	async function D(t) {
		if (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleCallLinkClick: handleCallLinkClick"]))), t == null) {
			o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["handleCallLinkClick: callLink is null"]))).sendLogs("click-call-link-error");
			return;
		}
		var n = o("WAWebApiParse").parseAPICmd(t);
		r("WAWebExecApiCmd")({
			cmdData: n,
			isExternal: !1
		});
	}
	async function x() {
		o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["handleGenerateCallLinkClick BEGIN"])));
		try {
			o("WAWebModalManager").ModalManager.open(v.jsx($, {}));
		} catch (e) {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["handleGenerateCallLinkClick: error=", ""])), e);
		}
	}
	function $(e) {
		var t = e.targetChat, n = E(o("WAWebVoipCallLinksPopupTypeDropDown.react").CallLinkType.VIDEO), a = n[0], i = n[1], l = E(!1), u = l[0], c = l[1], d = E(!1), b = d[0], S = d[1], x = L(!1), $ = E(!1), P = $[0], N = $[1], M = L(void 0);
		M.current === void 0 && (M.current = u);
		var w = o("WAWebABProps").getABPropConfigValue("enable_waiting_room_admin_ui"), A = o("WAWebVoipGatingUtils").isWaitingRoomToggleApprovalNoteEnabled(), F = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:activeCall", function() {
			return r("WAWebCallCollection").activeCall != null;
		}, [r("WAWebCallCollection").activeCall]), O = r("useWAWebAsyncRetry")(async function() {
			var e;
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: creating call link of type ", ""])), a);
			var t = o("WAWebVoipCreateCallLink").createCallLink({
				callType: a === o("WAWebVoipCallLinksPopupTypeDropDown.react").CallLinkType.VIDEO ? "video" : "audio",
				requireApproval: (e = M.current) != null ? e : !1
			}), n = new Promise(function(e, t) {
				window.setTimeout(function() {
					t(r("err")("Call link creation timed out. Please check your connection and try again."));
				}, I);
			}), i = await Promise.race([t, n]);
			return o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: The call link created is ", ""])), i), i;
		}, [a]), B = R(function(e) {
			c(e), o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: requireApproval toggled to ", ""])), e);
			var t = O.value;
			if (t != null) {
				var n = new URL(t).pathname.split("/").filter(Boolean).pop();
				if (n == null || n === "") {
					o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: link token extraction failed"]))).sendLogs("extract-link-token-error");
					return;
				}
				var r = a === o("WAWebVoipCallLinksPopupTypeDropDown.react").CallLinkType.VIDEO;
				S(!0), o("WAWebVoipWaitingRoomToggleJob").toggleWaitingRoomForCallLink({
					isVideoCall: r,
					linkToken: n,
					waitingRoomEnabled: e
				}).then(function() {
					o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: waiting room toggle succeeded"]))), new (o("WAWebCallLinkActionEventWamEvent")).CallLinkActionEventWamEvent({
						callLinkAction: o("WAWebWamEnumCallLinkAction").CALL_LINK_ACTION.TOGGLE_WAITING_ROOM,
						callLinkActionEntryPoint: o("WAWebWamEnumCallLinkActionEntryPoint").CALL_LINK_ACTION_ENTRY_POINT.LINK_CREATION,
						callLinkMedia: r ? o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VIDEO : o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VOICE,
						isWaitingRoomEnabled: e
					}).commit();
				}).catch(function(t) {
					o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: Failed to toggle waiting room, error: ", ""])), t).sendLogs("toggle-waiting-room-error"), o("WAWebToastManager").ToastManager.open(v.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), c(!e);
				}).finally(function() {
					S(!1);
				});
			}
		}, [O.value, a]);
		O.error && o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["createCallLinkAsync: call link creation failed: ", ""])), O.error).sendLogs("create-call-link-error");
		var W = O.loading, q = O.error != null, U = W || q ? null : O.value, V = R(function() {
			U != null && o("WAWebCopyToClipboard").copyTextToClipboard(U).then(function() {
				o("WAWebToastManager").ToastManager.open(v.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			});
		}, [U]);
		function H() {
			if (!(U == null || x.current)) {
				x.current = !0, N(!0), o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["handleGenerateCallLinkClick: handleSendLinkOnWhatsApp"])));
				var e = o("WAWebVoipCallLinkLocalPreview").buildCallLinkLocalPreview(U);
				if (t != null) {
					var n = o("WAWebChatCollection").ChatCollection.getActive();
					if (n != null) {
						o("WAWebSendTextMsgChatAction").sendTextMsgToChat(n, U, babelHelpers.extends({}, e != null ? { linkPreview: e } : void 0)), o("WAWebModalManager").ModalManager.close();
						return;
					}
				}
				o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebSendTextFlow.react"), {
					linkPreview: e,
					title: s._(
						/*BTDS*/
						""
					),
					text: U,
					onSend: o("WAWebDrawerManager").closeDrawerLeft
				}));
			}
		}
		var G = t != null ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), z = (!r("WAWebEnvironment").isWeb || o("WAWebVoipGatingUtils").isGroupCallingEnabled()) && !F;
		return v.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.CDS,
			controlsStyle: [o("WDSMargins.stylex").wdsMargins.margin20, o("WDSPaddings.stylex").wdsPaddings.paddingVer0],
			actions: v.jsx(r("WDSButtonGroup.react"), {
				width: "fill",
				orientation: "horizontal",
				primaryButtonProps: {
					variant: "filled",
					onPress: H,
					testid: "popup-controls-send-link",
					disabled: U == null || b || P,
					size: "medium",
					Icon: r("WDSIconIcSend.react"),
					directional: !0,
					label: G
				},
				secondaryButtonProps: z ? {
					variant: "borderless",
					onPress: function() {
						D(U), o("WAWebModalManager").closeModalManager();
					},
					testid: "popup-controls-join-call",
					disabled: b,
					size: "medium",
					label: s._(
						/*BTDS*/
						""
					)
				} : void 0
			}),
			children: v.jsx(o("WAWebFlex.react").FlexRow, { children: v.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: T.modalContainer,
				children: v.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					gap: 12,
					children: [
						v.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: [k.padding25, o("WDSPaddings.stylex").wdsPaddings.paddingBottom0],
							align: "center",
							justify: "all",
							children: [v.jsx(o("WAWebFlex.react").FlexItem, {
								grow: 1,
								children: v.jsx(o("WAWebText.react").WAWebTextLargeRefreshed, {
									color: "primary",
									children: s._(
										/*BTDS*/
										""
									)
								})
							}), v.jsx(r("WDSButton.react"), {
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
						v.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: k.marginInline25,
							align: "center",
							children: [v.jsx(o("WAWebFlex.react").FlexItem, {
								shrink: 0,
								children: v.jsx(o("WAWebVoipCallLinksPopupTypeDropDown.react").WAWebVoipCallLinksPopupTypeDropDown, {
									callLinkType: a,
									onCallLinkTypeSelectionChanged: i
								})
							}), v.jsx(o("WAWebFlex.react").FlexItem, {
								grow: 1,
								children: q ? v.jsx("div", {
									className: "x1vqgdyp xh8yej3 x6nvzda x4i4b9w xhl9efl xj65ea0 x78zum5 x6s0dn4 x13a6bvl x2vl965 x4wrhlh",
									children: v.jsx(r("WDSTextualLink.react"), {
										onClick: O.retry,
										children: s._(
											/*BTDS*/
											""
										)
									})
								}) : v.jsx(r("WDSTooltip.react"), {
									label: s._(
										/*BTDS*/
										""
									),
									children: v.jsx(r("WDSTextField.react"), {
										label: s._(
											/*BTDS*/
											""
										),
										value: U != null ? U : "",
										readOnly: !0,
										loading: U == null,
										EndIcon: r("WDSIconIcContentCopy.react"),
										onEndIconClick: V,
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
						v.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [k.paddingBlock5, k.paddingInline25],
							children: v.jsx(o("WAWebText.react").WAWebTextSmall, {
								textWrap: "wrap",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						w && v.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: [k.paddingBlock10, k.paddingInline25],
							align: "center",
							justify: "all",
							children: [v.jsxs(o("WAWebFlex.react").FlexColumn, {
								align: "stretch",
								grow: A ? 1 : void 0,
								children: [v.jsx(o("WAWebText.react").WAWebTextSmall, { children: s._(
									/*BTDS*/
									""
								) }), A && v.jsx(r("WDSText.react"), {
									type: "Body3",
									colorName: "contentDeemphasized",
									children: o("WAWebWaitingRoomApprovalNoteText").getWaitingRoomApprovalNoteText()
								})]
							}), v.jsx(o("WAWebFlex.react").FlexItem, {
								shrink: 0,
								children: v.jsxs(o("WAWebFlex.react").FlexRow, {
									align: "center",
									columnGap: 8,
									children: [b && v.jsx(o("WAWebSpinner.react").Spinner, { size: 20 }), v.jsx(r("WDSSwitch.react"), {
										"aria-label": r("fbs")._(
											/*BTDS*/
											""
										),
										disabled: U == null || b,
										value: u,
										onChange: B,
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
	$.displayName = $.name + " [from " + i.id + "]", l.handleGenerateCallLinkClick = x, l.WAWebVoipCreateCallLinksPopup = $;
}), 226);
