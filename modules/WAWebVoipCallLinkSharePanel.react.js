__d("WAWebVoipCallLinkSharePanel.react", [
	"fbt",
	"WALogger",
	"WAWebCallLinkActionEventWamEvent",
	"WAWebChatCollection",
	"WAWebChatInfoDrawerRow.react",
	"WAWebConfirmPopup.react",
	"WAWebCopyToClipboard",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebSendTextFlow.react",
	"WAWebUserPrefsMeUser",
	"WAWebVoipCallLinkLocalPreview",
	"WAWebVoipCallLinkUrl",
	"WAWebVoipEventConstants",
	"WAWebVoipGatingUtils",
	"WAWebVoipNewGroupCallContactPicker.react",
	"WAWebVoipStackInterface",
	"WAWebVoipUiContext",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebWaitingRoomApprovalNoteText",
	"WAWebWamEnumCallLinkAction",
	"WAWebWamEnumCallLinkActionEntryPoint",
	"WAWebWamEnumCallLinkMedia",
	"WDSButton.react",
	"WDSColorStyles.stylex",
	"WDSIconIcContentCopy.react",
	"WDSIconIcFastForward.react",
	"WDSIconIcPersonAdd.react",
	"WDSSwitch.react",
	"WDSText.react",
	"WDSTextField.react",
	"WDSThemes",
	"WDSTooltip.react",
	"asyncToGeneratorRuntime",
	"react",
	"stylex",
	"useWAWebEventTargetValue",
	"useWAWebVoipModalManager"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _ = p || (p = o("react")), f = p, g = f.useCallback, h = f.useContext, y = 280, C = 500, b = {
		container: {
			width: "x1dz1jew",
			height: "x5yr21d",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			paddingTop: "x1sk1jro",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			borderInlineStartWidth: "xpilrb4",
			borderInlineStartStyle: "x1t7ytsu",
			borderInlineStartColor: "xiotldb",
			$$css: !0
		},
		sidebarContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			paddingTop: "x16ovd2e",
			paddingBottom: "x1nbhmlj",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		sidebarTightGap: {
			marginBottom: "xefnzgg",
			$$css: !0
		},
		sidebarBottomGap: {
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		linkContainer: {
			width: "xh8yej3",
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		fullWidthButton: {
			width: "xh8yej3",
			$$css: !0
		},
		labelTruncate: {
			display: "x1rg5ohu",
			maxWidth: "x1e4dklr",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			verticalAlign: "xxymvpz",
			$$css: !0
		},
		waitingRoomToggleContainer: {
			marginInlineStart: "x1lziwak",
			marginInlineEnd: "x14z9mp",
			marginLeft: null,
			marginRight: null,
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		toggleNoVerticalPadding: {
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			$$css: !0
		}
	};
	function v(t) {
		var a = t.call, i = t.showWaitingRoomToggle, l = t.surface, p = l === void 0 ? "standalone" : l, f = o("WAWebVoipCallLinkUrl").getCallLinkUrl(a.callLinkToken, a.isVideo), y = r("useWAWebVoipModalManager")(), v = p === "sidebar", S = v ? y.openSupportModal : y.openModal, R = v ? y.closeSupportOrModal : y.closeModal, L = h(r("WAWebVoipUiPopoutWindowContext")), E = L.windowEl, k = h(r("WAWebVoipUiContext")), I = k.showToast, T = g(function() {
			f != null && o("WAWebCopyToClipboard").copyTextToClipboard(f, E).then(function() {
				I == null || I(s._(
					/*BTDS*/
					""
				), "center", "voip-link-copied");
			}).catch(r("WAWebNoop"));
		}, [
			f,
			E,
			I
		]), D = r("useWAWebEventTargetValue")(a, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE), function() {
			var e;
			return (e = a == null ? void 0 : a.isWaitingRoomToggleOn(function() {
				return o("WAWebVoipGatingUtils").isGuestCallingWaitingRoomAdminXpEnabled();
			})) != null ? e : !1;
		}), x = r("useWAWebEventTargetValue")(a, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE), function() {
			var e;
			return (e = a == null ? void 0 : a.waitingRoomUsers) != null ? e : [];
		}), $ = a.callLinkCreatorJid != null && o("WAWebUserPrefsMeUser").isMeAccount(a.callLinkCreatorJid), P = g(function(t) {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var n = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					if (n != null && n.type === "web") {
						var r = yield n.waitingRoomToggleActiveCall(t);
						if (r === 0) {
							o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: waiting room toggle succeeded, enabled=", ""])), t);
							var i = a.isVideo ? o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VIDEO : o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VOICE;
							new (o("WAWebCallLinkActionEventWamEvent")).CallLinkActionEventWamEvent({
								callLinkAction: o("WAWebWamEnumCallLinkAction").CALL_LINK_ACTION.TOGGLE_WAITING_ROOM,
								callLinkActionEntryPoint: o("WAWebWamEnumCallLinkActionEntryPoint").CALL_LINK_ACTION_ENTRY_POINT.IN_CALL_PARTICIPANT_LIST,
								callLinkMedia: i,
								isWaitingRoomEnabled: t
							}).commit();
						} else o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomToggleActiveCall returned non-zero status: ", ""])), r).sendLogs("waiting-room-toggle-error");
					}
				} catch (e) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomToggleActiveCall failed: ", ""])), e).sendLogs("waiting-room-toggle-error");
				}
			})();
		}, [a]), N = g(function(e) {
			!e && x.length > 0 ? L.isDocPip ? P(!1) : S(_.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: function() {
					R(), P(!1);
				},
				onCancel: R,
				children: _.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			})) : P(e);
		}, [
			x,
			S,
			R,
			P,
			L.isDocPip
		]), M = o("WAWebVoipGatingUtils").isGuestViewer(), w = M ? null : o("WAWebChatCollection").ChatCollection.getLatestChatForWid(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()), A = g(function() {
			if (f != null) {
				o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["WAWebVoipCallLinkSharePanel: Opening send link flow"])));
				var e = o("WAWebVoipCallLinkLocalPreview").buildCallLinkLocalPreview(f);
				if (L.isDocPip) {
					window.focus(), window.setTimeout(function() {
						o("WAWebModalManager").ModalManager.exists(function(t) {
							t && o("WAWebModalManager").ModalManager.close(), o("WAWebModalManager").ModalManager.open(_.jsx(r("WAWebSendTextFlow.react"), {
								alwaysShowComposeModal: !0,
								excludeMe: !0,
								linkPreview: e,
								title: s._(
									/*BTDS*/
									""
								),
								text: f,
								onSend: o("WAWebDrawerManager").closeDrawerLeft
							}), { skipDarkTheme: !0 });
						});
					}, C);
					return;
				}
				S(_.jsx(r("WAWebSendTextFlow.react"), {
					alwaysShowComposeModal: !0,
					excludeMe: !0,
					linkPreview: e,
					title: s._(
						/*BTDS*/
						""
					),
					text: f,
					onSend: o("WAWebDrawerManager").closeDrawerLeft
				}), { skipDarkTheme: !0 });
			}
		}, [
			f,
			S,
			L.isDocPip
		]);
		if (f == null) return null;
		var F = p === "standalone", O = i != null ? i : F, B = O && a.isCallLink && $;
		return _.jsxs("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(F && o("WDSThemes").WDSDarkTheme, F ? b.container : b.sidebarContainer, !F && !B && b.sidebarBottomGap, F && o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite, F && o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain), { children: [
			_.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1nxh6w3 x1ks1olk x2b8uid x1ua1l7f x37zpob" },
				1: { className: "x1nxh6w3 x1ks1olk x2b8uid x37zpob xefnzgg" }
			}[!F << 0], { children: s._(
				/*BTDS*/
				""
			) })),
			_.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: [b.linkContainer, !F && b.sidebarTightGap],
				children: _.jsx(r("WDSTooltip.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					children: _.jsx(r("WDSTextField.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						value: f,
						readOnly: !0,
						EndIcon: r("WDSIconIcContentCopy.react"),
						onEndIconClick: T,
						endIconAriaLabel: s._(
							/*BTDS*/
							""
						),
						floatingLabel: !1,
						testid: "voip_copy_call_link_text_field"
					})
				})
			}),
			!M && _.jsx(r("WDSButton.react"), {
				variant: "filled",
				type: "default",
				Icon: r("WDSIconIcFastForward.react"),
				directional: !0,
				label: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m0", _.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: b.labelTruncate,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				),
				onPress: A,
				size: "small",
				xstyle: b.fullWidthButton
			}),
			F && !M && _.jsx("div", {
				className: "xh8yej3 x1380le5",
				children: _.jsx(r("WDSButton.react"), {
					variant: "tonal",
					type: "default",
					Icon: r("WDSIconIcPersonAdd.react"),
					label: s._(
						/*BTDS*/
						""
					),
					onPress: function() {
						w != null && S(_.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
							chat: w,
							isAddingToExistingCall: !0,
							isVideoCall: a.isVideo,
							onClose: R
						}), {
							blockClose: !0,
							skipDarkTheme: !0
						});
					},
					size: "small",
					xstyle: b.fullWidthButton
				})
			}),
			B && _.jsxs(_.Fragment, { children: [_.jsx("div", babelHelpers.extends({}, {
				0: { className: "xso031l x1q0q8m5 x7cikya xh8yej3 x98l61r" },
				1: { className: "xso031l x1q0q8m5 x7cikya xh8yej3 xav9cv8" }
			}[!F << 0])), _.jsx("div", {
				className: "xkh2ocl",
				children: _.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
					containerXstyle: [b.waitingRoomToggleContainer, !F && b.toggleNoVerticalPadding],
					title: _.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
						/*BTDS*/
						""
					) }),
					secondaryTitle: o("WAWebVoipGatingUtils").isWaitingRoomToggleApprovalNoteEnabled() ? _.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed, { title: o("WAWebWaitingRoomApprovalNoteText").getWaitingRoomApprovalNoteText() }) : null,
					side: _.jsx(r("WDSSwitch.react"), {
						value: D,
						onClick: function(t) {
							t.preventDefault(), N(!D);
						},
						"aria-label": s._(
							/*BTDS*/
							""
						)
					})
				})
			})] })
		] }));
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
