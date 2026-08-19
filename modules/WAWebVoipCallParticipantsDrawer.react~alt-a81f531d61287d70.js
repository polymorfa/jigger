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
	"asyncToGeneratorRuntime",
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
	function x() {
		return $.apply(this, arguments);
	}
	function $() {
		return $ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
			if (e == null || e.type !== "web") return 0;
			var t = yield e.getCallInfo();
			return t === "" ? 0 : Math.floor(r("WAWebVoipJsonParsersWeb").parseCallInfo(t).callActiveDuration / 1e3);
		}), $.apply(this, arguments);
	}
	function P(e) {
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
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
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
	N.displayName = N.name + " [from " + i.id + "]";
	function M(e) {
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
	M.displayName = M.name + " [from " + i.id + "]";
	function w(t) {
		var a = t.call, i = t.chat, l = t.isLinkedGroupCall, C = t.isVideoCall, b = t.onClose, S = t.onRingParticipant, k = t.participantStates, T = t.participantsWithoutSelf, $ = t.showCloseButton, w = $ === void 0 ? !0 : $, A = r("useWAWebVoipModalManager")(), F = A.closeModal, O = A.openModal, B = L(r("WAWebVoipUiContext")), W = B.showToast, q = I(null), U = q[0], V = q[1], H = R(function(e) {
			var t = o("WAWebContactCollection").ContactCollection.get(e.toString());
			t != null && V({
				contact: t,
				lid: e.isLid() ? o("WAWebWidFactory").asUserLidOrThrow(e) : null
			});
		}, []), G = R(function(t, a, i) {
			var l = function() {
				return W == null ? void 0 : W(s._(
					/*BTDS*/
					""
				), "center", "voip-report-error");
			}, c = (function() {
				var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						var n = babelHelpers.extends({}, t, { callDurationSeconds: yield x() }), a = yield o("WAWebVoipReportCallJob").reportVoipCall(n);
						if (a != null && "errorCode" in a) {
							o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: guest call report rejected (", ")"])), a.errorCode).sendLogs("voip-report-fail"), l();
							return;
						}
						W == null || W(s._(
							/*BTDS*/
							""
						), "center", "voip-report-sent");
					} catch (e) {
						o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: guest call report failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-report-fail"), l();
					}
				});
				return function() {
					return a.apply(this, arguments);
				};
			})(), d = function() {
				F(), c();
			};
			O(v.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
				onOK: d,
				onCancel: F,
				testid: i,
				children: a
			}));
		}, [
			O,
			F,
			W
		]), z = R(function(e) {
			var t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
			t == null || a == null || G({
				spamFlow: o("WAWebSpamConstants").SpamFlow.GuestCallParticipantReport,
				reportedWid: e,
				reporterWid: t,
				callFromWid: e,
				callId: a.id,
				mediaType: a.isVideo === !0 ? "video" : "audio"
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
		}, [a, G]), j = R(function() {
			var e, t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser(), n = a == null ? void 0 : a.callLinkCreatorJid;
			t == null || n == null || G({
				spamFlow: o("WAWebSpamConstants").SpamFlow.GuestCallReport,
				reportedWid: n,
				reporterWid: t,
				callFromWid: n,
				callId: (e = a == null ? void 0 : a.id) != null ? e : "",
				mediaType: (a == null ? void 0 : a.isVideo) === !0 ? "video" : "audio"
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
		}, [a, G]), K = E(function() {
			if (i == null) return T;
			var e = i.groupMetadata;
			if (e == null) return T;
			var t = new Set(T.map(function(e) {
				return e.toString();
			})), n = e.participants.map(function(e) {
				return e.id;
			}).filter(function(e) {
				return !t.has(e.toString()) && !o("WAWebUserPrefsMeUser").isMeAccount(e);
			});
			return [].concat(T, n);
		}, [i, T]), Q = E(function() {
			var e = 0;
			for (var t of T) {
				var n = k.get(t.toString());
				n === o("WAWebVoipWaCallEnums").CallParticipantState.Connected && e++;
			}
			return e + 1;
		}, [T, k]), X = r("useWAWebEventTargetValue")(a, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE), function() {
			var e;
			return (e = a == null ? void 0 : a.waitingRoomUsers) != null ? e : [];
		}), Y = r("useWAWebEventTargetValue")(a, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE), function() {
			var e;
			return (e = a == null ? void 0 : a.isWaitingRoomToggleOn(function() {
				return o("WAWebVoipGatingUtils").isGuestCallingWaitingRoomAdminXpEnabled();
			})) != null ? e : !1;
		}), J = (a == null ? void 0 : a.callLinkCreatorJid) != null && o("WAWebUserPrefsMeUser").isMeAccount(a.callLinkCreatorJid) || (a == null ? void 0 : a.isWaitingRoomAdmin) === !0, Z = R(function(e) {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					if (t != null && t.type === "web") {
						var n = yield t.waitingRoomAdmit(e.toString({ legacy: !0 }));
						n !== 0 && o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomAdmit returned non-zero status: ", ""])), n).sendLogs("waiting-room-admit-error");
					}
				} catch (e) {
					o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomAdmit failed: ", ""])), e).sendLogs("waiting-room-admit-error");
				}
			})();
		}, []), ee = R(function(e) {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					if (t != null && t.type === "web") {
						var n = yield t.waitingRoomDeny(e.toString({ legacy: !0 }));
						n !== 0 && o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomDeny returned non-zero status: ", ""])), n).sendLogs("waiting-room-deny-error");
					}
				} catch (e) {
					o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomDeny failed: ", ""])), e).sendLogs("waiting-room-deny-error");
				}
			})();
		}, []), te = R(function() {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					if (e != null && e.type === "web") {
						var t = yield e.waitingRoomAdmitAll();
						t !== 0 && o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomAdmitAll returned non-zero status: ", ""])), t).sendLogs("waiting-room-admit-all-error");
					}
				} catch (e) {
					o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomAdmitAll failed: ", ""])), e).sendLogs("waiting-room-admit-all-error");
				}
			})();
		}, []), ne = R(function() {
			O(v.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: function() {
					F(), te();
				},
				onCancel: F,
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
			O,
			F,
			te
		]), re = R(function(e) {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					if (t != null && t.type === "web") {
						var n = yield t.waitingRoomToggleActiveCall(e);
						if (n !== 0) o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomToggleActiveCall returned non-zero status: ", ""])), n).sendLogs("waiting-room-toggle-error");
						else {
							o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: waiting room toggle succeeded, enabled=", ""])), e);
							var r = (a == null ? void 0 : a.isVideo) === !0 ? o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VIDEO : o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VOICE;
							new (o("WAWebCallLinkActionEventWamEvent")).CallLinkActionEventWamEvent({
								callLinkAction: o("WAWebWamEnumCallLinkAction").CALL_LINK_ACTION.TOGGLE_WAITING_ROOM,
								callLinkActionEntryPoint: o("WAWebWamEnumCallLinkActionEntryPoint").CALL_LINK_ACTION_ENTRY_POINT.IN_CALL_PARTICIPANT_LIST,
								callLinkMedia: r,
								isWaitingRoomEnabled: e
							}).commit();
						}
					}
				} catch (e) {
					o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomToggleActiveCall failed: ", ""])), e).sendLogs("waiting-room-toggle-error");
				}
			})();
		}, [a]), oe = R(function(e) {
			!e && X.length > 0 ? O(v.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: function() {
					F(), re(!1);
				},
				onCancel: F,
				children: v.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			})) : re(e);
		}, [
			X,
			O,
			F,
			re
		]), ae = (a == null ? void 0 : a.isCallLink) === !0 && J;
		if (i == null && a == null) return null;
		var ie = function() {
			o("WAWebVoipStartCall").preloadGroupCallBundle();
			var e = i != null ? i : o("WAWebChatCollection").ChatCollection.getLatestChatForWid(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
			e != null && O(v.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
				chat: e,
				isAddingToExistingCall: !0,
				isVideoCall: C,
				onClose: F
			}), {
				blockClose: !0,
				skipDarkTheme: !0
			});
		}, le = !o("WAWebVoipGatingUtils").isGuestViewer() && !l && (i != null || a != null);
		return U != null ? v.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: D.drawerContainer,
			children: v.jsx(r("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable, {
				contact: U.contact,
				lid: U.lid,
				isFirstLevel: !1,
				onClose: function() {
					return V(null);
				}
			})
		}) : v.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: D.drawerContainer,
			children: v.jsxs(r("WAWebDrawer.react"), {
				xstyle: D.drawerBackground,
				children: [w && v.jsxs("div", {
					className: "x1s70e7g x78zum5 x1nhvcw1 x16ovd2e x12xbjc7 x12w63v0 x1nzty39",
					children: [v.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						variant: "borderless",
						size: "small",
						onPress: b,
						"aria-label": s._(
							/*BTDS*/
							""
						)
					}), o("WAWebVoipGatingUtils").isGuestViewer() && (a == null ? void 0 : a.callLinkCreatorJid) != null && v.jsx(M, { onReport: j })]
				}), v.jsxs(r("WAWebDrawerBody.react"), { children: [
					v.jsx(r("WAWebDrawerSection.react"), {
						animation: !1,
						theme: "refresh-new",
						xstyle: D.drawerBackground,
						children: v.jsx(N, {
							callLinkCreatorJid: a == null ? void 0 : a.callLinkCreatorJid,
							chat: i,
							connectedCount: Q,
							isCallLink: (a == null ? void 0 : a.isCallLink) === !0,
							isLinkedGroupCall: l,
							participantsWithoutSelf: T
						})
					}),
					v.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" }),
					a != null && a.isCallLink && v.jsxs(v.Fragment, { children: [v.jsx(r("WAWebVoipCallLinkSharePanel.react"), {
						call: a,
						surface: "sidebar"
					}), v.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" })] }),
					le && v.jsx(P, { onPress: ie }),
					le && v.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l xlese2p xviac27" }),
					ae && v.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: D.waitingRoomSection,
						children: [
							X.length > 0 && v.jsxs(v.Fragment, { children: [
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
									}), X.length >= 2 && v.jsx(r("WDSButton.react"), {
										variant: "borderless",
										type: "default",
										size: "small",
										label: s._(
											/*BTDS*/
											""
										),
										onPress: ne
									})]
								}),
								X.map(function(e) {
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
													return ee(e);
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
													return Z(e);
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
										value: Y,
										onClick: function(t) {
											t.preventDefault(), oe(!Y);
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
						onReportParticipant: o("WAWebVoipGatingUtils").isGuestViewer() ? z : void 0,
						onRingParticipant: S,
						onVerifyEncryption: o("WAWebVoipGatingUtils").isGuestViewer() ? H : void 0,
						participantStates: k,
						participantsWithoutSelf: K,
						showActionButton: !0,
						showConnectedIndicator: !1,
						surface: "drawer"
					})
				] })]
			})
		});
	}
	w.displayName = w.name + " [from " + i.id + "]", l.default = w;
}), 226);
