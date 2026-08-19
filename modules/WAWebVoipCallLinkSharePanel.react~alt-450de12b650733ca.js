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
		var n = t.call, a = t.showWaitingRoomToggle, i = t.surface, l = i === void 0 ? "standalone" : i, p = o("WAWebVoipCallLinkUrl").getCallLinkUrl(n.callLinkToken, n.isVideo), f = r("useWAWebVoipModalManager")(), y = l === "sidebar", v = y ? f.openSupportModal : f.openModal, S = y ? f.closeSupportOrModal : f.closeModal, R = h(r("WAWebVoipUiPopoutWindowContext")), L = R.windowEl, E = h(r("WAWebVoipUiContext")), k = E.showToast, I = g(function() {
			p != null && o("WAWebCopyToClipboard").copyTextToClipboard(p, L).then(function() {
				k == null || k(s._(
					/*BTDS*/
					""
				), "center", "voip-link-copied");
			}).catch(r("WAWebNoop"));
		}, [
			p,
			L,
			k
		]), T = r("useWAWebEventTargetValue")(n, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE), function() {
			var e;
			return (e = n == null ? void 0 : n.isWaitingRoomToggleOn(function() {
				return o("WAWebVoipGatingUtils").isGuestCallingWaitingRoomAdminXpEnabled();
			})) != null ? e : !1;
		}), D = r("useWAWebEventTargetValue")(n, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE), function() {
			var e;
			return (e = n == null ? void 0 : n.waitingRoomUsers) != null ? e : [];
		}), x = n.callLinkCreatorJid != null && o("WAWebUserPrefsMeUser").isMeAccount(n.callLinkCreatorJid), $ = g(function(t) {
			(async function() {
				try {
					var r = await o("WAWebVoipStackInterface").getVoipStackInterface();
					if (r != null && r.type === "web") {
						var a = await r.waitingRoomToggleActiveCall(t);
						if (a === 0) {
							o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: waiting room toggle succeeded, enabled=", ""])), t);
							var i = n.isVideo ? o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VIDEO : o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VOICE;
							new (o("WAWebCallLinkActionEventWamEvent")).CallLinkActionEventWamEvent({
								callLinkAction: o("WAWebWamEnumCallLinkAction").CALL_LINK_ACTION.TOGGLE_WAITING_ROOM,
								callLinkActionEntryPoint: o("WAWebWamEnumCallLinkActionEntryPoint").CALL_LINK_ACTION_ENTRY_POINT.IN_CALL_PARTICIPANT_LIST,
								callLinkMedia: i,
								isWaitingRoomEnabled: t
							}).commit();
						} else o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomToggleActiveCall returned non-zero status: ", ""])), a).sendLogs("waiting-room-toggle-error");
					}
				} catch (e) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomToggleActiveCall failed: ", ""])), e).sendLogs("waiting-room-toggle-error");
				}
			})();
		}, [n]), P = g(function(e) {
			!e && D.length > 0 ? R.isDocPip ? $(!1) : v(_.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: function() {
					S(), $(!1);
				},
				onCancel: S,
				children: _.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			})) : $(e);
		}, [
			D,
			v,
			S,
			$,
			R.isDocPip
		]), N = o("WAWebVoipGatingUtils").isGuestViewer(), M = N ? null : o("WAWebChatCollection").ChatCollection.getLatestChatForWid(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()), w = g(function() {
			if (p != null) {
				o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["WAWebVoipCallLinkSharePanel: Opening send link flow"])));
				var e = o("WAWebVoipCallLinkLocalPreview").buildCallLinkLocalPreview(p);
				if (R.isDocPip) {
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
								text: p,
								onSend: o("WAWebDrawerManager").closeDrawerLeft
							}), { skipDarkTheme: !0 });
						});
					}, C);
					return;
				}
				v(_.jsx(r("WAWebSendTextFlow.react"), {
					alwaysShowComposeModal: !0,
					excludeMe: !0,
					linkPreview: e,
					title: s._(
						/*BTDS*/
						""
					),
					text: p,
					onSend: o("WAWebDrawerManager").closeDrawerLeft
				}), { skipDarkTheme: !0 });
			}
		}, [
			p,
			v,
			R.isDocPip
		]);
		if (p == null) return null;
		var A = l === "standalone", F = a != null ? a : A, O = F && n.isCallLink && x;
		return _.jsxs("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(A && o("WDSThemes").WDSDarkTheme, A ? b.container : b.sidebarContainer, !A && !O && b.sidebarBottomGap, A && o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite, A && o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain), { children: [
			_.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1nxh6w3 x1ks1olk x2b8uid x1ua1l7f x37zpob" },
				1: { className: "x1nxh6w3 x1ks1olk x2b8uid x37zpob xefnzgg" }
			}[!A << 0], { children: s._(
				/*BTDS*/
				""
			) })),
			_.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: [b.linkContainer, !A && b.sidebarTightGap],
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
						value: p,
						readOnly: !0,
						EndIcon: r("WDSIconIcContentCopy.react"),
						onEndIconClick: I,
						endIconAriaLabel: s._(
							/*BTDS*/
							""
						),
						floatingLabel: !1,
						testid: "voip_copy_call_link_text_field"
					})
				})
			}),
			!N && _.jsx(r("WDSButton.react"), {
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
				onPress: w,
				size: "small",
				xstyle: b.fullWidthButton
			}),
			A && !N && _.jsx("div", {
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
						M != null && v(_.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
							chat: M,
							isAddingToExistingCall: !0,
							isVideoCall: n.isVideo,
							onClose: S
						}), {
							blockClose: !0,
							skipDarkTheme: !0
						});
					},
					size: "small",
					xstyle: b.fullWidthButton
				})
			}),
			O && _.jsxs(_.Fragment, { children: [_.jsx("div", babelHelpers.extends({}, {
				0: { className: "xso031l x1q0q8m5 x7cikya xh8yej3 x98l61r" },
				1: { className: "xso031l x1q0q8m5 x7cikya xh8yej3 xav9cv8" }
			}[!A << 0])), _.jsx("div", {
				className: "xkh2ocl",
				children: _.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
					containerXstyle: [b.waitingRoomToggleContainer, !A && b.toggleNoVerticalPadding],
					title: _.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
						/*BTDS*/
						""
					) }),
					secondaryTitle: o("WAWebVoipGatingUtils").isWaitingRoomToggleApprovalNoteEnabled() ? _.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed, { title: o("WAWebWaitingRoomApprovalNoteText").getWaitingRoomApprovalNoteText() }) : null,
					side: _.jsx(r("WDSSwitch.react"), {
						value: T,
						onClick: function(t) {
							t.preventDefault(), P(!T);
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
