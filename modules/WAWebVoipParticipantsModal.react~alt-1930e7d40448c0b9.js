__d("WAWebVoipParticipantsModal.react", [
	"fbt",
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebContactImage.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebUserPrefsMeUser",
	"WAWebVoipCallLinkSharePanel.react",
	"WAWebVoipCallStateUtils",
	"WAWebVoipEventConstants",
	"WAWebVoipStackInterface",
	"WAWebVoipUiParticipantPanel.react",
	"WAWebWidFormat",
	"WDSButton.react",
	"WDSIconIcCheck.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useState, g = {
		container: {
			height: "x1egiwwb",
			width: "xvue9z",
			maxHeight: "x1bwycvy",
			maxWidth: "x16xn7b0",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		header: {
			paddingTop: "x1p57kb1",
			paddingBottom: "x1nbhmlj",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			flexShrink: "x2lah0s",
			$$css: !0
		},
		panelContainer: {
			flexGrow: "x1iyjqo2",
			minHeight: "x2lwn1j",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
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
		}
	};
	function h(e) {
		var t = o("react-compiler-runtime").c(24), n = e.call, a = e.initialParticipantStates, i = e.initialParticipantsWithoutSelf, l = e.onClose, u = e.onRingParticipant, c = e.participantDataEmitter, d = f(a), p = d[0], _ = d[1], h = f(i), b = h[0], v = h[1], S;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (S = function(t) {
			_(t.participantStates), v(t.participantsWithoutSelf);
		}, t[0] = S) : S = t[0], o("useWAWebListener").useListener(c, "update", S);
		var R;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), t[1] = R) : R = t[1];
		var L;
		t[2] !== l ? (L = m.jsx(r("WDSButton.react"), {
			testid: "voip-participants-modal-close",
			variant: "borderless",
			type: "default",
			size: "small",
			Icon: r("WDSIconIcClose.react"),
			onPress: l,
			"aria-label": R
		}), t[2] = l, t[3] = L) : L = t[3];
		var E;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (E = m.jsx(o("WAWebFlex.react").FlexRow, {
			grow: 1,
			children: m.jsx(r("WDSText.react"), {
				type: "Headline2",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[4] = E) : E = t[4];
		var k;
		t[5] !== L ? (k = m.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			xstyle: g.header,
			columnGap: 16,
			children: [L, E]
		}), t[5] = L, t[6] = k) : k = t[6];
		var I;
		t[7] !== n ? (I = m.jsx(C, { call: n }), t[7] = n, t[8] = I) : I = t[8];
		var T = b.length > 0, D;
		t[9] !== n || t[10] !== T ? (D = m.jsx(y, {
			call: n,
			hasParticipants: T
		}), t[9] = n, t[10] = T, t[11] = D) : D = t[11];
		var x;
		t[12] !== u || t[13] !== p || t[14] !== b ? (x = m.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: g.panelContainer,
			children: m.jsx(r("WAWebVoipUiParticipantPanel.react"), {
				arePeersActive: !0,
				onRingParticipant: u,
				participantStates: p,
				participantsWithoutSelf: b,
				showActionButton: !0,
				showConnectedIndicator: !1,
				transparentBackground: !0
			})
		}), t[12] = u, t[13] = p, t[14] = b, t[15] = x) : x = t[15];
		var $;
		t[16] !== k || t[17] !== I || t[18] !== D || t[19] !== x ? ($ = m.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 8,
			align: "stretch",
			justify: "all",
			xstyle: g.container,
			children: [
				k,
				I,
				D,
				x
			]
		}), t[16] = k, t[17] = I, t[18] = D, t[19] = x, t[20] = $) : $ = t[20];
		var P;
		return t[21] !== l || t[22] !== $ ? (P = m.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Box,
			onOverlayClick: l,
			children: $
		}), t[21] = l, t[22] = $, t[23] = P) : P = t[23], P;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(10), n = e.call, a = e.hasParticipants, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), t[0] = i) : i = t[0];
		var l;
		t[1] !== n ? (l = function() {
			var e;
			return (e = n == null ? void 0 : n.getState()) != null ? e : null;
		}, t[1] = n, t[2] = l) : l = t[2];
		var s = r("useWAWebEventTargetValue")(n, i, l);
		if (n == null || n.isCallLink !== !0 || n.callLinkToken == null || n.callLinkToken === "" || s == null || o("WAWebVoipCallStateUtils").isCallTerminal(s)) return null;
		var u;
		t[3] !== n ? (u = m.jsx(r("WAWebVoipCallLinkSharePanel.react"), {
			call: n,
			showWaitingRoomToggle: !0,
			surface: "sidebar"
		}), t[3] = n, t[4] = u) : u = t[4];
		var c;
		t[5] !== a ? (c = a && m.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l xlese2p xviac27" }), t[5] = a, t[6] = c) : c = t[6];
		var d;
		return t[7] !== u || t[8] !== c ? (d = m.jsxs(m.Fragment, { children: [u, c] }), t[7] = u, t[8] = c, t[9] = d) : d = t[9], d;
	}
	function C(t) {
		var n = t.call, a = r("useWAWebEventTargetValue")(n, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE), function() {
			var e;
			return (e = n == null ? void 0 : n.waitingRoomUsers) != null ? e : [];
		}), i = (n == null ? void 0 : n.callLinkCreatorJid) != null && o("WAWebUserPrefsMeUser").isMeAccount(n.callLinkCreatorJid), l = _(function(t) {
			(async function() {
				try {
					var n = await o("WAWebVoipStackInterface").getVoipStackInterface();
					n != null && n.type === "web" && await n.waitingRoomAdmit(t.toString({ legacy: !0 }));
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomAdmit failed: ", ""])), t).sendLogs("waiting-room-admit-error");
				}
			})();
		}, []), d = _(function(e) {
			(async function() {
				try {
					var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
					t != null && t.type === "web" && await t.waitingRoomDeny(e.toString({ legacy: !0 }));
				} catch (e) {
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomDeny failed: ", ""])), e).sendLogs("waiting-room-deny-error");
				}
			})();
		}, []), p = _(function() {
			(async function() {
				try {
					var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
					e != null && e.type === "web" && await e.waitingRoomAdmitAll();
				} catch (e) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: waitingRoomAdmitAll failed: ", ""])), e).sendLogs("waiting-room-admit-all-error");
				}
			})();
		}, []), f = _(function() {
			o("WAWebModalManager").ModalManager.openSupportModal(m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: function() {
					o("WAWebModalManager").ModalManager.closeSupportOrModal(), p();
				},
				onCancel: function() {
					o("WAWebModalManager").ModalManager.closeSupportOrModal();
				},
				onOverlayClick: function() {
					o("WAWebModalManager").ModalManager.closeSupportOrModal();
				},
				children: m.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}));
		}, [p]);
		return (n == null ? void 0 : n.isCallLink) !== !0 || !i ? null : m.jsx(m.Fragment, { children: a.length > 0 && m.jsxs(m.Fragment, { children: [
			m.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: g.waitingRoomSectionHeader,
				children: [m.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				}), a.length >= 2 && m.jsx(r("WDSButton.react"), {
					variant: "borderless",
					type: "default",
					size: "small",
					label: s._(
						/*BTDS*/
						""
					),
					onPress: f
				})]
			}),
			a.map(function(e) {
				var t = o("WAWebContactCollection").ContactCollection.get(e.toString()), n = t != null ? o("WAWebFrontendContactGetters").getDisplayName(t) : o("WAWebWidFormat").widToFormattedUser(e);
				return m.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					alignSelf: "stretch",
					columnGap: 16,
					xstyle: g.waitingRoomRow,
					children: [m.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						columnGap: 16,
						grow: 1,
						xstyle: g.waitingRoomRowTextContainer,
						children: [t != null && m.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: g.waitingRoomProfilePic,
							children: m.jsx(r("WAWebContactImage.react"), {
								contact: t,
								size: 36,
								loadPicture: !0
							})
						}), m.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: g.waitingRoomRowTextContainer,
							children: m.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: "contentDefault",
								maxLines: 1,
								children: n
							})
						})]
					}), m.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: g.waitingRoomRowActions,
						children: [m.jsx(r("WDSButton.react"), {
							variant: "filled",
							type: "media",
							size: "small",
							Icon: r("WDSIconIcClose.react"),
							"aria-label": s._(
								/*BTDS*/
								""
							),
							onPress: function() {
								return d(e);
							}
						}), m.jsx(r("WDSButton.react"), {
							variant: "tonal",
							type: "default",
							size: "small",
							Icon: r("WDSIconIcCheck.react"),
							"aria-label": s._(
								/*BTDS*/
								""
							),
							onPress: function() {
								return l(e);
							}
						})]
					})]
				}, e.toString());
			}),
			m.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l xlese2p xviac27" })
		] }) });
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = h;
}), 226);
