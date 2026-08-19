__d("WAWebVoipUiParticipantPanel.react", [
	"fbt",
	"WAWebCallLogUtils",
	"WAWebContactCollection",
	"WAWebContactImage.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebName.react",
	"WAWebNoop",
	"WAWebVoipGatingUtils",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipWaCallEnums",
	"WDSButton.react",
	"WDSIconIcLock.react",
	"WDSIconIcMoreHoriz.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcThumbDown.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"WDSThemes",
	"WDSTooltip.react",
	"react",
	"stylex",
	"useWAWebContactValues",
	"useWAWebVoipWindowPopoutTooltipProps",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useMemo, _ = d.useRef, f = .5, g = "xxodl7o-B", h = {
		participantPanelContainer: {
			backgroundColor: "x1od0jb8",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			height: "x5yr21d",
			width: "xh8yej3",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		transparentBackground: {
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		participantPanel: {
			height: "x5yr21d",
			width: "xh8yej3",
			overflowX: "x6ikm8r",
			overflowY: "x1odjw0f",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			paddingTop: "xexx8yu",
			boxSizing: "x9f619",
			$$css: !0
		},
		participantPanelLobby: {
			paddingBottom: "x18d9i69",
			$$css: !0
		},
		participantPanelStatic: {
			width: "xh8yej3",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			paddingTop: "xexx8yu",
			boxSizing: "x9f619",
			$$css: !0
		},
		participantPanelContainerStatic: {
			height: "xt7dq6l",
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			$$css: !0
		},
		sectionHeader: {
			paddingBottom: "x1nbhmlj",
			paddingTop: "x16ovd2e",
			paddingInlineStart: "x12w63v0",
			textAlign: "x1yc453h",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		participantRow: {
			justifyContent: "x1qughib",
			minWidth: "xeuugli",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			flexShrink: "x2lah0s",
			minHeight: "x1wjjzik",
			$$css: !0
		},
		participantTextContainer: {
			minWidth: "xeuugli",
			$$css: !0
		},
		profilePicContainer: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		disabled: {
			pointerEvents: "x47corl",
			$$css: !0
		},
		dimmedAppearance: {
			opacity: "xbyyjgo",
			$$css: !0
		},
		flashingIcon: {
			animationName: "x1g4v8gx",
			animationDuration: "xmg6eyc",
			animationIterationCount: "xa4qsjk",
			animationTimingFunction: "x4hg4is",
			pointerEvents: "x47corl",
			$$css: !0
		},
		rightActions: {
			marginInlineStart: "xvc5jky",
			flexShrink: "x2lah0s",
			minWidth: "x46jg8d",
			justifyContent: "xl56j7k",
			$$css: !0
		}
	};
	function y(e) {
		var t = e.arePeersActive, n = e.callState, a = e.onReportParticipant, i = e.onRingParticipant, l = e.onVerifyEncryption, u = e.participantStates, d = e.participantsWithoutSelf, m = e.showActionButton, _ = m === void 0 ? !1 : m, f = e.showConnectedIndicator, g = f === void 0 ? !0 : f, y = e.surface, b = y === void 0 ? "modal" : y, v = e.transparentBackground, S = v === void 0 ? !1 : v, R = p(function() {
			var e = new Set();
			for (var t of d) {
				var n = u.get(t.toString());
				n === o("WAWebVoipWaCallEnums").CallParticipantState.Connected && e.add(t.toString());
			}
			var r = o("WAWebCallLogUtils").sortParticipantWidsByPriority(d, e), a = [], i = [], l = [], s = [];
			for (var c of r) {
				var m = u.get(c.toString()), p = m == null, _ = m === o("WAWebVoipWaCallEnums").CallParticipantState.Receipt || m === o("WAWebVoipWaCallEnums").CallParticipantState.Incoming, f = {
					jid: c,
					isRinging: _,
					isLoading: p
				};
				s.push(f), m === o("WAWebVoipWaCallEnums").CallParticipantState.Connected ? a.push(f) : _ ? i.push(f) : l.push(f);
			}
			return {
				allParticipants: s,
				connectedParticipants: a,
				nonConnectedParticipants: [].concat(i, l)
			};
		}, [d, u]), L = R.allParticipants, E = R.connectedParticipants, k = R.nonConnectedParticipants, I = b === "lobby", T = b === "drawer" || b === "modal", D = t && !I, x = I && (n === o("WAWebVoipWaCallEnums").CallState.Rejoining || n === o("WAWebVoipWaCallEnums").CallState.ReceivedCall), $ = function() {
			return D ? c.jsxs(c.Fragment, { children: [E.length > 0 && c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: h.sectionHeader,
				children: c.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), E.map(function(e) {
				return c.jsx(C, {
					isConnected: !0,
					isDisabled: !1,
					isLoading: e.isLoading,
					isRinging: e.isRinging,
					onReportParticipant: a,
					onRingParticipant: i,
					onVerifyEncryption: l,
					participantJid: e.jid,
					showActionButton: !1,
					showConnectedIndicator: g,
					waitIdleForProfilePicture: T
				}, e.jid.toString());
			})] }), k.length > 0 && c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: h.sectionHeader,
				children: c.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), k.map(function(e) {
				return c.jsx(C, {
					isDisabled: !0,
					isLoading: e.isLoading,
					isRinging: e.isRinging,
					onRingParticipant: i,
					participantJid: e.jid,
					showActionButton: _,
					waitIdleForProfilePicture: T
				}, e.jid.toString());
			})] })] }) : x ? E.map(function(e) {
				return c.jsx(C, {
					isConnected: !0,
					isDisabled: !1,
					isLoading: e.isLoading,
					isRinging: e.isRinging,
					onReportParticipant: a,
					onRingParticipant: i,
					onVerifyEncryption: l,
					participantJid: e.jid,
					showActionButton: _,
					waitIdleForProfilePicture: T
				}, e.jid.toString());
			}) : L.map(function(e) {
				var t = u.get(e.jid.toString()) === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
				return c.jsx(C, {
					isConnected: t,
					isDisabled: !t,
					isLoading: e.isLoading,
					isRinging: e.isRinging,
					onReportParticipant: a,
					onRingParticipant: i,
					onVerifyEncryption: l,
					participantJid: e.jid,
					showActionButton: _,
					waitIdleForProfilePicture: T
				}, e.jid.toString());
			});
		};
		return c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: [
				h.participantPanelContainer,
				S && h.transparentBackground,
				b === "drawer" && h.participantPanelContainerStatic
			],
			children: c.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: b === "drawer" ? h.participantPanelStatic : [h.participantPanel, I && h.participantPanelLobby],
				children: $()
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t, n = e.isConnected, a = n === void 0 ? !1 : n, i = e.isDisabled, l = e.isLoading, u = l === void 0 ? !1 : l, d = e.isRinging, p = e.onReportParticipant, _ = e.onRingParticipant, f = e.onVerifyEncryption, g = e.participantJid, y = e.showActionButton, C = e.showConnectedIndicator, v = C === void 0 ? !0 : C, S = e.waitIdleForProfilePicture, R = S === void 0 ? !1 : S, L = m(r("WAWebVoipUiPopoutWindowContext")), E = L.isContextInPopoutWindow, k = o("WAWebContactCollection").ContactCollection.get(g.toString()), I = o("useWAWebContactValues").useOptionalContactValues(g, [o("WAWebFrontendContactGetters").getIsGuest]), T = (t = I == null ? void 0 : I[0]) != null ? t : !1, D = o("WAWebVoipGatingUtils").isGuestViewer(), x = T || D, $ = !u && y && !T && !D, P = f != null, N = p != null, M = D && a && (P || N);
		if (k == null) return null;
		var w = function() {
			_ == null || _(g);
		};
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			alignSelf: "stretch",
			columnGap: 16,
			xstyle: h.participantRow,
			children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 16,
				grow: 1,
				xstyle: [
					h.participantTextContainer,
					i && h.disabled,
					i && h.dimmedAppearance
				],
				children: [c.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: h.profilePicContainer,
					children: c.jsx(r("WAWebContactImage.react"), {
						contact: k,
						size: 36,
						loadPicture: !0,
						waitIdle: R
					})
				}), c.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: h.participantTextContainer,
					children: c.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						maxLines: 1,
						children: c.jsx(o("WAWebName.react").Name, {
							contact: k,
							showNotifyName: x,
							elevatedPushNamesEnabled: x
						})
					})
				})]
			}), (a || $ || M) && c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 8,
				xstyle: h.rightActions,
				children: [
					a && v && c.jsx("div", { className: "x1fsd2vl x170jfvy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1qe8gl4 x2lah0s" }),
					$ && c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: d && h.flashingIcon,
						children: d ? c.jsx(r("WDSButton.react"), {
							variant: "borderless",
							type: "default",
							size: "small",
							Icon: r("WDSIconIcMoreHoriz.react"),
							onPress: r("WAWebNoop")
						}) : c.jsx(r("WDSButton.react"), {
							variant: "filled",
							type: E ? "media" : "default",
							size: "small",
							label: s._(
								/*BTDS*/
								""
							),
							onPress: w
						})
					}),
					M && c.jsx(b, {
						onReport: N ? function() {
							return p == null ? void 0 : p(g);
						} : void 0,
						onVerify: P ? function() {
							return f == null ? void 0 : f(g);
						} : void 0
					})
				]
			})]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var n = t.onReport, a = t.onVerify, i = r("useWAWebVoipWindowPopoutTooltipProps")(), l = i.tooltipAnchorRef, u = i.tooltipOwnerDocument, d = _(null), m = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), { children: c.jsxs(r("WDSMenu.react"), { children: [a != null && c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcLock.react"),
			title: s._(
				/*BTDS*/
				""
			),
			testid: "voip-participant-verify-security-code",
			onPress: a
		}), n != null && c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcThumbDown.react"),
			destructive: !0,
			title: s._(
				/*BTDS*/
				""
			),
			testid: "voip-participant-report",
			onPress: n
		})] }) })), p = r("useWDSMenu")({
			targetRef: d,
			menu: m,
			ownerDocument: u
		}), f = p.closeMenu, g = p.isMenuOpen, h = p.menuPortal, y = p.openMenu, C = s._(
			/*BTDS*/
			""
		);
		return c.jsxs(c.Fragment, { children: [c.jsx(r("WDSTooltip.react"), {
			label: C,
			ownerAnchorRef: l,
			ownerDocument: u,
			children: c.jsx(r("WDSButton.react"), {
				ref: d,
				variant: "borderless",
				type: "default",
				size: "small",
				Icon: r("WDSIconIcMoreVert.react"),
				onPress: function() {
					return g ? f() : y();
				},
				"aria-label": C,
				testid: "voip-participant-actions-menu"
			})
		}), c.jsx("div", {
			className: "x10l6tqk",
			children: h
		})] });
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = y;
}), 226);
