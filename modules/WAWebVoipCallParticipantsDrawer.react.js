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
	function N(e) {
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
	function M(e) {
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
