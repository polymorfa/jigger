__d("WAWebVoipCallParticipantsDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebCallLinkActionEventWamEvent",
	"WAWebCallLogUtils",
	"WAWebChatCollection",
	"WAWebChatInfoDrawerRow.react",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebContactImage.react",
	"WAWebDefaultGroupRefreshedIcon.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerSection.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebGroupCallTitleUtils",
	"WAWebMultiParticipantCallImage.react",
	"WAWebParticipantListUtils",
	"WAWebSpamConstants",
	"WAWebUserPrefsMeUser",
	"WAWebVerificationDrawerLoadable",
	"WAWebVoipCallLinkSharePanel.react",
	"WAWebVoipEventConstants",
	"WAWebVoipGatingUtils",
	"WAWebVoipJsonParsersWeb",
	"WAWebVoipNewGroupCallContactPicker.react",
	"WAWebVoipReportCallJob",
	"WAWebVoipStackInterface",
	"WAWebVoipStartCall",
	"WAWebVoipUiContext",
	"WAWebVoipUiParticipantPanel.react",
	"WAWebVoipWaCallEnums",
	"WAWebWaitingRoomApprovalNoteText",
	"WAWebWaitingRoomNameFormat",
	"WAWebWamEnumCallLinkAction",
	"WAWebWamEnumCallLinkActionEntryPoint",
	"WAWebWamEnumCallLinkMedia",
	"WAWebWidFactory",
	"WDSButton.react",
	"WDSIconIcCheck.react",
	"WDSIconIcClose.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconIcThumbDown.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSSwitch.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"WDSThemes",
	"WDSTooltip.react",
	"getErrorSafe",
	"react",
	"stylex",
	"useWAWebEventTargetValue",
	"useWAWebVoipModalManager",
	"useWAWebVoipWindowPopoutTooltipProps",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y, C, b, v = b || (b = o("react")), S = b, R = S.useCallback, L = S.useContext, E = S.useMemo, k = S.useRef, I = S.useState, T = 80, D = {
		addPeopleRowContent: {
			minHeight: "xvkrg5o",
			width: "xh8yej3",
			$$css: !0
		},
		addPeopleIcon: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		drawerBackground: {
			backgroundColor: "x1od0jb8",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		drawerContainer: {
			height: "x1kg0u7c",
			insetInlineEnd: "xnvtvi1",
			left: null,
			right: null,
			position: "x10l6tqk",
			top: "xpcismx",
			width: "xo1tz6s",
			$$css: !0
		},
		waitingRoomSection: {
			paddingTop: "x16ovd2e",
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		waitingRoomSectionHeader: {
			minHeight: "xu0aao5",
			paddingBottom: "x1nbhmlj",
			paddingTop: "x16ovd2e",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			justifyContent: "x1qughib",
			alignSelf: "xkh2ocl",
			$$css: !0
		},
		waitingRoomRow: {
			justifyContent: "x1qughib",
			minWidth: "xeuugli",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			flexShrink: "x2lah0s",
			minHeight: "x1wjjzik",
			$$css: !0
		},
		waitingRoomRowTextContainer: {
			minWidth: "xeuugli",
			$$css: !0
		},
		waitingRoomProfilePic: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		waitingRoomRowActions: {
			marginInlineStart: "xvc5jky",
			flexShrink: "x2lah0s",
			rowGap: "x129bwdz",
			columnGap: "x1trrmfo",
			$$css: !0
		},
		headerSection: {
			alignItems: "x6s0dn4",
			rowGap: "x129bwdz",
			columnGap: "x1trrmfo",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			flexShrink: "x2lah0s",
			$$css: !0
		},
		groupNameText: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		defaultGroupAvatar: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		connectedCountText: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		waitingRoomToggleContainer: {
			marginInlineStart: "x1lziwak",
			marginInlineEnd: "x14z9mp",
			marginLeft: null,
			marginRight: null,
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	async function x() {
		var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
		if (e == null || e.type !== "web") return 0;
		var t = await e.getCallInfo();
		return t === "" ? 0 : Math.floor(r("WAWebVoipJsonParsersWeb").parseCallInfo(t).callActiveDuration / 1e3);
	}
	function $(e) {
		var t = e.onPress;
		return v.jsx("button", {
			type: "button",
			"data-testid": "voip-participants-drawer-add-people",
			onClick: t,
			className: "xjbqb8w xmcybr3 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x14ug900 x1ypdohk xjb2p0i x1qlqyl8 xexx8yu x18d9i69 xdx6fka xvtqlqk x1yc453h xh8yej3",
			children: v.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 12,
				xstyle: D.addPeopleRowContent,
				children: [v.jsx(r("WDSIconIcPersonAdd.react"), {
					colorName: "contentDeemphasized",
					xstyle: D.addPeopleIcon
				}), v.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})
		});
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P(e) {
		var t = e.callLinkCreatorJid, n = e.chat, a = e.connectedCount, i = e.isCallLink, l = e.isLinkedGroupCall, u = e.participantsWithoutSelf, c = E(function() {
			return o("WAWebCallLogUtils").sortConnectedParticipants(u);
		}, [u]), d = c.sortedParticipants, m = E(function() {
			if (!i || t == null) return null;
			var e = o("WAWebContactCollection").ContactCollection.get(t);
			return e != null ? o("WAWebFrontendContactGetters").getDisplayName(e) : null;
		}, [i, t]), p;
		l ? p = (n == null ? void 0 : n.name) || (n == null ? void 0 : n.formattedTitle) || o("WAWebGroupCallTitleUtils").getUnnamedGroupCallNameOverride(n) : i && m != null ? p = s._(
			/*BTDS*/
			"",
			[s._param("creator_name", m)]
		) : p = o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(d);
		var _ = E(function() {
			return l && n != null ? v.jsx(r("WAWebContactImage.react"), {
				contact: n.contact,
				size: T,
				loadPicture: !0,
				waitIdle: !0
			}) : d.length > 0 ? v.jsx(r("WAWebMultiParticipantCallImage.react"), {
				participantWids: d,
				size: T
			}) : i ? v.jsx(o("WAWebDefaultGroupRefreshedIcon.react").DefaultGroupRefreshedIcon, {
				height: T,
				width: T,
				iconXstyle: D.defaultGroupAvatar
			}) : null;
		}, [
			n,
			i,
			l,
			d
		]);
		return v.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: D.headerSection,
			children: [
				_,
				v.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: D.groupNameText,
					children: v.jsx(r("WDSText.react"), {
						type: "Headline2",
						colorName: "contentDefault",
						maxLines: 2,
						children: p
					})
				}),
				v.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: D.connectedCountText,
					children: v.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							"",
							[s._param("count", a)]
						)
					})
				})
			]
		});
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		var t = e.onReport, n = r("useWAWebVoipWindowPopoutTooltipProps")(), a = n.tooltipAnchorRef, i = n.tooltipOwnerDocument, l = k(null), u = v.jsx("div", babelHelpers.extends({}, (C || (C = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), { children: v.jsx(r("WDSMenu.react"), { children: v.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcThumbDown.react"),
			destructive: !0,
			title: s._(
				/*BTDS*/
				""
			),
			testid: "voip-report-call",
			onPress: t
		}) }) })), c = r("useWDSMenu")({
			targetRef: l,
			menu: u,
			ownerDocument: i
		}), d = c.closeMenu, m = c.isMenuOpen, p = c.menuPortal, _ = c.openMenu, f = s._(
			/*BTDS*/
			""
		);
		return v.jsxs(v.Fragment, { children: [v.jsx(r("WDSTooltip.react"), {
			label: f,
			ownerAnchorRef: a,
			ownerDocument: i,
			children: v.jsx(r("WDSButton.react"), {
				ref: l,
				variant: "borderless",
				type: "default",
				size: "small",
				Icon: r("WDSIconIcMoreVert.react"),
				onPress: function() {
					return m ? d() : _();
				},
				"aria-label": f,
				testid: "voip-call-actions-menu"
			})
		}), v.jsx("div", {
			className: "x10l6tqk",
			children: p
		})] });
	}
	N.displayName = N.name + " [from " + i.id + "]";
	function M(t) {
		var n = t.call, a = t.chat, i = t.isLinkedGroupCall, l = t.isVideoCall, C = t.onClose, b = t.onRingParticipant, S = t.participantStates, k = t.participantsWithoutSelf, T = t.showCloseButton, M = T === void 0 ? !0 : T, w = r("useWAWebVoipModalManager")(), A = w.closeModal, F = w.openModal, O = L(r("WAWebVoipUiContext")), B = O.showToast, W = I(null), q = W[0], U = W[1], V = R(function(e) {
			var t = o("WAWebContactCollection").ContactCollection.get(e.toString());
			t != null && U({
				contact: t,
				lid: e.isLid() ? o("WAWebWidFactory").asUserLidOrThrow(e) : null
			});
		}, []), H = R(function(t, n, a) {
			var i = function() {
				return B == null ? void 0 : B(s._(
					/*BTDS*/
					""
				), "center", "voip-report-error");
			}, l = async function() {
				try {
					var n = babelHelpers.extends({}, t, { callDurationSeconds: await x() }), a = await o("WAWebVoipReportCallJob").reportVoipCall(n);
					if (a != null && "errorCode" in a) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: guest call report rejected (", ")"])), a.errorCode).sendLogs("voip-report-fail"), i();
						return;
					}
					B == null || B(s._(
						/*BTDS*/
						""
					), "center", "voip-report-sent");
				} catch (e) {
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: guest call report failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-report-fail"), i();
				}
			}, c = function() {
				A(), l();
			};
			F(v.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: v.jsx("span", {
					className: "x14ug900",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				okText: s._(
					/*BTDS*/
					""
				),
				okButtonType: "negative-destructive",
				cancelText: s._(
					/*BTDS*/
					""
				),
				onOK: c,
				onCancel: A,
				testid: a,
				children: n
			}));
		}, [
			F,
			A,
			B
		]), G = R(function(e) {
			var t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
			t == null || n == null || H({
				spamFlow: o("WAWebSpamConstants").SpamFlow.GuestCallParticipantReport,
				reportedWid: e,
				reporterWid: t,
				callFromWid: e,
				callId: n.id,
				mediaType: n.isVideo === !0 ? "video" : "audio"
			}, v.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					"",
					[s._param("learn_more_link", v.jsx(r("WDSTextualLink.react"), {
						href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
						testid: "voip-report-participant-learn-more",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			}), "voip-report-participant-confirm");
		}, [n, H]), z = R(function() {
			var e, t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser(), a = n == null ? void 0 : n.callLinkCreatorJid;
			t == null || a == null || H({
				spamFlow: o("WAWebSpamConstants").SpamFlow.GuestCallReport,
				reportedWid: a,
				reporterWid: t,
				callFromWid: a,
				callId: (e = n == null ? void 0 : n.id) != null ? e : "",
				mediaType: (n == null ? void 0 : n.isVideo) === !0 ? "video" : "audio"
			}, v.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					"",
					[s._param("learn_more_link", v.jsx(r("WDSTextualLink.react"), {
						href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
						testid: "voip-report-call-learn-more",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			}), "voip-report-call-confirm");
		}, [n, H]), j = E(function() {
			if (a == null) return k;
			var e = a.groupMetadata;
			if (e == null) return k;
			var t = new Set(k.map(function(e) {
				return e.toString();
			})), n = e.participants.map(function(e) {
				return e.id;
			}).filter(function(e) {
				return !t.has(e.toString()) && !o("WAWebUserPrefsMeUser").isMeAccount(e);
			});
			return [].concat(k, n);
		}, [a, k]), K = E(function() {
			var e = 0;
			for (var t of k) {
				var n = S.get(t.toString());
				n === o("WAWebVoipWaCallEnums").CallParticipantState.Connected && e++;
			}
			return e + 1;
		}, [k, S]), Q = r("useWAWebEventTargetValue")(n, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE), function() {
			var e;
			return (e = n == null ? void 0 : n.waitingRoomUsers) != null ? e : [];
		}), X = r("useWAWebEventTargetValue")(n, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE), function() {
			var e;
			return (e = n == null ? void 0 : n.isWaitingRoomToggleOn(function() {
				return o("WAWebVoipGatingUtils").isGuestCallingWaitingRoomAdminXpEnabled();
			})) != null ? e : !1;
		}), Y = (n == null ? void 0 : n.callLinkCreatorJid) != null && o("WAWebUserPrefsMeUser").isMeAccount(n.callLinkCreatorJid) || (n == null ? void 0 : n.isWaitingRoomAdmin) === !0, J = R(function(e) {
			(async function() {
				try {
					var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
					if (t != null && t.type === "web") {
						var n = await t.waitingRoomAdmit(e.toString({ legacy: !0 }));
						n !== 0 && o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomAdmit returned non-zero status: ", ""])), n).sendLogs("waiting-room-admit-error");
					}
				} catch (e) {
					o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomAdmit failed: ", ""])), e).sendLogs("waiting-room-admit-error");
				}
			})();
		}, []), Z = R(function(e) {
			(async function() {
				try {
					var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
					if (t != null && t.type === "web") {
						var n = await t.waitingRoomDeny(e.toString({ legacy: !0 }));
						n !== 0 && o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomDeny returned non-zero status: ", ""])), n).sendLogs("waiting-room-deny-error");
					}
				} catch (e) {
					o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomDeny failed: ", ""])), e).sendLogs("waiting-room-deny-error");
				}
			})();
		}, []), ee = R(function() {
			(async function() {
				try {
					var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
					if (e != null && e.type === "web") {
						var t = await e.waitingRoomAdmitAll();
						t !== 0 && o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomAdmitAll returned non-zero status: ", ""])), t).sendLogs("waiting-room-admit-all-error");
					}
				} catch (e) {
					o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomAdmitAll failed: ", ""])), e).sendLogs("waiting-room-admit-all-error");
				}
			})();
		}, []), te = R(function() {
			F(v.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: function() {
					A(), ee();
				},
				onCancel: A,
				children: v.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}));
		}, [
			F,
			A,
			ee
		]), ne = R(function(e) {
			(async function() {
				try {
					var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
					if (t != null && t.type === "web") {
						var r = await t.waitingRoomToggleActiveCall(e);
						if (r !== 0) o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomToggleActiveCall returned non-zero status: ", ""])), r).sendLogs("waiting-room-toggle-error");
						else {
							o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: waiting room toggle succeeded, enabled=", ""])), e);
							var a = (n == null ? void 0 : n.isVideo) === !0 ? o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VIDEO : o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VOICE;
							new (o("WAWebCallLinkActionEventWamEvent")).CallLinkActionEventWamEvent({
								callLinkAction: o("WAWebWamEnumCallLinkAction").CALL_LINK_ACTION.TOGGLE_WAITING_ROOM,
								callLinkActionEntryPoint: o("WAWebWamEnumCallLinkActionEntryPoint").CALL_LINK_ACTION_ENTRY_POINT.IN_CALL_PARTICIPANT_LIST,
								callLinkMedia: a,
								isWaitingRoomEnabled: e
							}).commit();
						}
					}
				} catch (e) {
					o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomToggleActiveCall failed: ", ""])), e).sendLogs("waiting-room-toggle-error");
				}
			})();
		}, [n]), re = R(function(e) {
			!e && Q.length > 0 ? F(v.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: function() {
					A(), ne(!1);
				},
				onCancel: A,
				children: v.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			})) : ne(e);
		}, [
			Q,
			F,
			A,
			ne
		]), oe = (n == null ? void 0 : n.isCallLink) === !0 && Y;
		if (a == null && n == null) return null;
		var ae = function() {
			o("WAWebVoipStartCall").preloadGroupCallBundle();
			var e = a != null ? a : o("WAWebChatCollection").ChatCollection.getLatestChatForWid(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
			e != null && F(v.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
				chat: e,
				isAddingToExistingCall: !0,
				isVideoCall: l,
				onClose: A
			}), {
				blockClose: !0,
				skipDarkTheme: !0
			});
		}, ie = !o("WAWebVoipGatingUtils").isGuestViewer() && !i && (a != null || n != null);
		return q != null ? v.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: D.drawerContainer,
			children: v.jsx(r("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable, {
				contact: q.contact,
				lid: q.lid,
				isFirstLevel: !1,
				onClose: function() {
					return U(null);
				}
			})
		}) : v.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: D.drawerContainer,
			children: v.jsxs(r("WAWebDrawer.react"), {
				xstyle: D.drawerBackground,
				children: [M && v.jsxs("div", {
					className: "x1s70e7g x78zum5 x1nhvcw1 x16ovd2e x12xbjc7 x12w63v0 x1nzty39",
					children: [v.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						variant: "borderless",
						size: "small",
						onPress: C,
						"aria-label": s._(
							/*BTDS*/
							""
						)
					}), o("WAWebVoipGatingUtils").isGuestViewer() && (n == null ? void 0 : n.callLinkCreatorJid) != null && v.jsx(N, { onReport: z })]
				}), v.jsxs(r("WAWebDrawerBody.react"), { children: [
					v.jsx(r("WAWebDrawerSection.react"), {
						animation: !1,
						theme: "refresh-new",
						xstyle: D.drawerBackground,
						children: v.jsx(P, {
							callLinkCreatorJid: n == null ? void 0 : n.callLinkCreatorJid,
							chat: a,
							connectedCount: K,
							isCallLink: (n == null ? void 0 : n.isCallLink) === !0,
							isLinkedGroupCall: i,
							participantsWithoutSelf: k
						})
					}),
					v.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" }),
					n != null && n.isCallLink && v.jsxs(v.Fragment, { children: [v.jsx(r("WAWebVoipCallLinkSharePanel.react"), {
						call: n,
						surface: "sidebar"
					}), v.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" })] }),
					ie && v.jsx($, { onPress: ae }),
					ie && v.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l xlese2p xviac27" }),
					oe && v.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: D.waitingRoomSection,
						children: [
							Q.length > 0 && v.jsxs(v.Fragment, { children: [
								v.jsxs(o("WAWebFlex.react").FlexRow, {
									align: "center",
									xstyle: D.waitingRoomSectionHeader,
									children: [v.jsx(r("WDSText.react"), {
										type: "Body2Emphasized",
										colorName: "contentDeemphasized",
										children: s._(
											/*BTDS*/
											""
										)
									}), Q.length >= 2 && v.jsx(r("WDSButton.react"), {
										variant: "borderless",
										type: "default",
										size: "small",
										label: s._(
											/*BTDS*/
											""
										),
										onPress: te
									})]
								}),
								Q.map(function(e) {
									var t = o("WAWebContactCollection").ContactCollection.get(e.toString()), n = o("WAWebWaitingRoomNameFormat").getWaitingRoomUserDisplayName(e);
									return v.jsxs(o("WAWebFlex.react").FlexRow, {
										align: "center",
										alignSelf: "stretch",
										columnGap: 16,
										xstyle: D.waitingRoomRow,
										children: [v.jsxs(o("WAWebFlex.react").FlexRow, {
											align: "center",
											columnGap: 16,
											grow: 1,
											xstyle: D.waitingRoomRowTextContainer,
											children: [t != null && v.jsx(o("WAWebFlex.react").FlexItem, {
												xstyle: D.waitingRoomProfilePic,
												children: v.jsx(r("WAWebContactImage.react"), {
													contact: t,
													size: 36,
													loadPicture: !0,
													waitIdle: !0
												})
											}), v.jsx(o("WAWebFlex.react").FlexItem, {
												xstyle: D.waitingRoomRowTextContainer,
												children: v.jsx(r("WDSText.react"), {
													type: "Body1",
													colorName: "contentDefault",
													maxLines: 1,
													children: n
												})
											})]
										}), v.jsxs(o("WAWebFlex.react").FlexRow, {
											align: "center",
											xstyle: D.waitingRoomRowActions,
											children: [v.jsx(r("WDSButton.react"), {
												variant: "filled",
												type: "media",
												size: "small",
												Icon: r("WDSIconIcClose.react"),
												"aria-label": s._(
													/*BTDS*/
													""
												),
												onPress: function() {
													return Z(e);
												}
											}), v.jsx(r("WDSButton.react"), {
												variant: "tonal",
												type: "default",
												size: "small",
												Icon: r("WDSIconIcCheck.react"),
												"aria-label": s._(
													/*BTDS*/
													""
												),
												onPress: function() {
													return J(e);
												}
											})]
										})]
									}, e.toString());
								}),
								v.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l xlese2p xviac27" })
							] }),
							v.jsx("div", {
								className: "xkh2ocl",
								children: v.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
									containerXstyle: D.waitingRoomToggleContainer,
									title: v.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
										/*BTDS*/
										""
									) }),
									secondaryTitle: o("WAWebVoipGatingUtils").isWaitingRoomToggleApprovalNoteEnabled() ? v.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed, { title: o("WAWebWaitingRoomApprovalNoteText").getWaitingRoomApprovalNoteText() }) : null,
									side: v.jsx(r("WDSSwitch.react"), {
										value: X,
										onClick: function(t) {
											t.preventDefault(), re(!X);
										},
										"aria-label": s._(
											/*BTDS*/
											""
										)
									})
								})
							}),
							v.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l xlese2p xviac27" })
						]
					}),
					v.jsx(r("WAWebVoipUiParticipantPanel.react"), {
						arePeersActive: !0,
						onReportParticipant: o("WAWebVoipGatingUtils").isGuestViewer() ? G : void 0,
						onRingParticipant: b,
						onVerifyEncryption: o("WAWebVoipGatingUtils").isGuestViewer() ? V : void 0,
						participantStates: S,
						participantsWithoutSelf: j,
						showActionButton: !0,
						showConnectedIndicator: !1,
						surface: "drawer"
					})
				] })]
			})
		});
	}
	M.displayName = M.name + " [from " + i.id + "]", l.default = M;
}), 226);
