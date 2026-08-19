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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(5), n = e.onPress, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "xjbqb8w xmcybr3 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x14ug900 x1ypdohk xjb2p0i x1qlqyl8 xexx8yu x18d9i69 xdx6fka xvtqlqk x1yc453h xh8yej3" }, t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = v.jsx(r("WDSIconIcPersonAdd.react"), {
			colorName: "contentDeemphasized",
			xstyle: D.addPeopleIcon
		}), t[1] = i) : i = t[1];
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = v.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 12,
			xstyle: D.addPeopleRowContent,
			children: [i, v.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), t[2] = l) : l = t[2];
		var u;
		return t[3] !== n ? (u = v.jsx("button", babelHelpers.extends({
			type: "button",
			"data-testid": "voip-participants-drawer-add-people",
			onClick: n
		}, a, { children: l })), t[3] = n, t[4] = u) : u = t[4], u;
	}
	function P(e) {
		var t = o("react-compiler-runtime").c(23), n = e.callLinkCreatorJid, a = e.chat, i = e.connectedCount, l = e.isCallLink, u = e.isLinkedGroupCall, c = e.participantsWithoutSelf, d;
		t[0] !== c ? (d = o("WAWebCallLogUtils").sortConnectedParticipants(c), t[0] = c, t[1] = d) : d = t[1];
		var m = d, p = m.sortedParticipants, _;
		e: {
			if (!l || n == null) {
				_ = null;
				break e;
			}
			var f;
			if (t[2] !== n) {
				var g = o("WAWebContactCollection").ContactCollection.get(n);
				f = g != null ? o("WAWebFrontendContactGetters").getDisplayName(g) : null, t[2] = n, t[3] = f;
			} else f = t[3];
			_ = f;
		}
		var h = _, y;
		if (u) {
			var C;
			t[4] !== a ? (C = (a == null ? void 0 : a.name) || (a == null ? void 0 : a.formattedTitle) || o("WAWebGroupCallTitleUtils").getUnnamedGroupCallNameOverride(a), t[4] = a, t[5] = C) : C = t[5], y = C;
		} else if (l && h != null) {
			var b;
			t[6] !== h ? (b = s._(
				/*BTDS*/
				"",
				[s._param("creator_name", h)]
			), t[6] = h, t[7] = b) : b = t[7], y = b;
		} else {
			var S;
			t[8] !== p ? (S = o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(p), t[8] = p, t[9] = S) : S = t[9], y = S;
		}
		var R;
		e: {
			if (u && a != null) {
				var L;
				t[10] !== a.contact ? (L = v.jsx(r("WAWebContactImage.react"), {
					contact: a.contact,
					size: T,
					loadPicture: !0,
					waitIdle: !0
				}), t[10] = a.contact, t[11] = L) : L = t[11], R = L;
				break e;
			}
			if (p.length > 0) {
				var E;
				t[12] !== p ? (E = v.jsx(r("WAWebMultiParticipantCallImage.react"), {
					participantWids: p,
					size: T
				}), t[12] = p, t[13] = E) : E = t[13], R = E;
				break e;
			}
			if (l) {
				var k;
				t[14] === Symbol.for("react.memo_cache_sentinel") ? (k = v.jsx(o("WAWebDefaultGroupRefreshedIcon.react").DefaultGroupRefreshedIcon, {
					height: T,
					width: T,
					iconXstyle: D.defaultGroupAvatar
				}), t[14] = k) : k = t[14], R = k;
				break e;
			}
			R = null;
		}
		var I = R, x;
		t[15] !== y ? (x = v.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: D.groupNameText,
			children: v.jsx(r("WDSText.react"), {
				type: "Headline2",
				colorName: "contentDefault",
				maxLines: 2,
				children: y
			})
		}), t[15] = y, t[16] = x) : x = t[16];
		var $;
		t[17] !== i ? ($ = v.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: D.connectedCountText,
			children: v.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					"",
					[s._param("count", i)]
				)
			})
		}), t[17] = i, t[18] = $) : $ = t[18];
		var P;
		return t[19] !== I || t[20] !== x || t[21] !== $ ? (P = v.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: D.headerSection,
			children: [
				I,
				x,
				$
			]
		}), t[19] = I, t[20] = x, t[21] = $, t[22] = P) : P = t[22], P;
	}
	function N(e) {
		var t = o("react-compiler-runtime").c(22), n = e.onReport, a = r("useWAWebVoipWindowPopoutTooltipProps")(), i = a.tooltipAnchorRef, l = a.tooltipOwnerDocument, u = k(null), c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = (C || (C = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), t[0] = c) : c = t[0];
		var d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[1] = d) : d = t[1];
		var m;
		t[2] !== n ? (m = v.jsx("div", babelHelpers.extends({}, c, { children: v.jsx(r("WDSMenu.react"), { children: v.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcThumbDown.react"),
			destructive: !0,
			title: d,
			testid: "voip-report-call",
			onPress: n
		}) }) })), t[2] = n, t[3] = m) : m = t[3];
		var p = m, _;
		t[4] !== p || t[5] !== l ? (_ = {
			targetRef: u,
			menu: p,
			ownerDocument: l
		}, t[4] = p, t[5] = l, t[6] = _) : _ = t[6];
		var f = r("useWDSMenu")(_), g = f.closeMenu, h = f.isMenuOpen, y = f.menuPortal, b = f.openMenu, S;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[7] = S) : S = t[7];
		var R = S, L;
		t[8] !== g || t[9] !== h || t[10] !== b ? (L = v.jsx(r("WDSButton.react"), {
			ref: u,
			variant: "borderless",
			type: "default",
			size: "small",
			Icon: r("WDSIconIcMoreVert.react"),
			onPress: function() {
				return h ? g() : b();
			},
			"aria-label": R,
			testid: "voip-call-actions-menu"
		}), t[8] = g, t[9] = h, t[10] = b, t[11] = L) : L = t[11];
		var E;
		t[12] !== L || t[13] !== i || t[14] !== l ? (E = v.jsx(r("WDSTooltip.react"), {
			label: R,
			ownerAnchorRef: i,
			ownerDocument: l,
			children: L
		}), t[12] = L, t[13] = i, t[14] = l, t[15] = E) : E = t[15];
		var I;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x10l6tqk" }, t[16] = I) : I = t[16];
		var T;
		t[17] !== y ? (T = v.jsx("div", babelHelpers.extends({}, I, { children: y })), t[17] = y, t[18] = T) : T = t[18];
		var D;
		return t[19] !== E || t[20] !== T ? (D = v.jsxs(v.Fragment, { children: [E, T] }), t[19] = E, t[20] = T, t[21] = D) : D = t[21], D;
	}
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
