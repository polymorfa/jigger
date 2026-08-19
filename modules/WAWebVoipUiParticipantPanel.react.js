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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(40), n = e.arePeersActive, a = e.callState, i = e.onReportParticipant, l = e.onRingParticipant, u = e.onVerifyEncryption, d = e.participantStates, m = e.participantsWithoutSelf, p = e.showActionButton, _ = e.showConnectedIndicator, f = e.surface, g = e.transparentBackground, y = p === void 0 ? !1 : p, b = _ === void 0 ? !0 : _, v = f === void 0 ? "modal" : f, S = g === void 0 ? !1 : g, R, L, E, k;
		if (t[0] !== d || t[1] !== m) {
			var I = new Set();
			for (var T of m) {
				var D = d.get(T.toString());
				D === o("WAWebVoipWaCallEnums").CallParticipantState.Connected && I.add(T.toString());
			}
			var x = o("WAWebCallLogUtils").sortParticipantWidsByPriority(m, I);
			L = [], k = [], E = [], R = [];
			for (var $ of x) {
				var P = d.get($.toString()), N = P == null, M = P === o("WAWebVoipWaCallEnums").CallParticipantState.Receipt || P === o("WAWebVoipWaCallEnums").CallParticipantState.Incoming, w = {
					jid: $,
					isRinging: M,
					isLoading: N
				};
				R.push(w), P === o("WAWebVoipWaCallEnums").CallParticipantState.Connected ? L.push(w) : M ? k.push(w) : E.push(w);
			}
			t[0] = d, t[1] = m, t[2] = R, t[3] = L, t[4] = E, t[5] = k;
		} else R = t[2], L = t[3], E = t[4], k = t[5];
		var A;
		t[6] !== E || t[7] !== k ? (A = [].concat(k, E), t[6] = E, t[7] = k, t[8] = A) : A = t[8];
		var F;
		t[9] !== R || t[10] !== L || t[11] !== A ? (F = {
			allParticipants: R,
			connectedParticipants: L,
			nonConnectedParticipants: A
		}, t[9] = R, t[10] = L, t[11] = A, t[12] = F) : F = t[12];
		var O = F, B = O.allParticipants, W = O.connectedParticipants, q = O.nonConnectedParticipants, U = v === "lobby", V = v === "drawer" || v === "modal", H = n && !U, G = U && (a === o("WAWebVoipWaCallEnums").CallState.Rejoining || a === o("WAWebVoipWaCallEnums").CallState.ReceivedCall), z;
		t[13] !== B || t[14] !== W || t[15] !== q || t[16] !== i || t[17] !== l || t[18] !== u || t[19] !== d || t[20] !== y || t[21] !== b || t[22] !== G || t[23] !== H || t[24] !== V ? (z = function() {
			return H ? c.jsxs(c.Fragment, { children: [W.length > 0 && c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: h.sectionHeader,
				children: c.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), W.map(function(e) {
				return c.jsx(C, {
					isConnected: !0,
					isDisabled: !1,
					isLoading: e.isLoading,
					isRinging: e.isRinging,
					onReportParticipant: i,
					onRingParticipant: l,
					onVerifyEncryption: u,
					participantJid: e.jid,
					showActionButton: !1,
					showConnectedIndicator: b,
					waitIdleForProfilePicture: V
				}, e.jid.toString());
			})] }), q.length > 0 && c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: h.sectionHeader,
				children: c.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), q.map(function(e) {
				return c.jsx(C, {
					isDisabled: !0,
					isLoading: e.isLoading,
					isRinging: e.isRinging,
					onRingParticipant: l,
					participantJid: e.jid,
					showActionButton: y,
					waitIdleForProfilePicture: V
				}, e.jid.toString());
			})] })] }) : G ? W.map(function(e) {
				return c.jsx(C, {
					isConnected: !0,
					isDisabled: !1,
					isLoading: e.isLoading,
					isRinging: e.isRinging,
					onReportParticipant: i,
					onRingParticipant: l,
					onVerifyEncryption: u,
					participantJid: e.jid,
					showActionButton: y,
					waitIdleForProfilePicture: V
				}, e.jid.toString());
			}) : B.map(function(e) {
				var t = d.get(e.jid.toString()) === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
				return c.jsx(C, {
					isConnected: t,
					isDisabled: !t,
					isLoading: e.isLoading,
					isRinging: e.isRinging,
					onReportParticipant: i,
					onRingParticipant: l,
					onVerifyEncryption: u,
					participantJid: e.jid,
					showActionButton: y,
					waitIdleForProfilePicture: V
				}, e.jid.toString());
			});
		}, t[13] = B, t[14] = W, t[15] = q, t[16] = i, t[17] = l, t[18] = u, t[19] = d, t[20] = y, t[21] = b, t[22] = G, t[23] = H, t[24] = V, t[25] = z) : z = t[25];
		var j = z, K = S && h.transparentBackground, Q = v === "drawer" && h.participantPanelContainerStatic, X;
		t[26] !== K || t[27] !== Q ? (X = [
			h.participantPanelContainer,
			K,
			Q
		], t[26] = K, t[27] = Q, t[28] = X) : X = t[28];
		var Y;
		t[29] !== U || t[30] !== v ? (Y = v === "drawer" ? h.participantPanelStatic : [h.participantPanel, U && h.participantPanelLobby], t[29] = U, t[30] = v, t[31] = Y) : Y = t[31];
		var J;
		t[32] !== j ? (J = j(), t[32] = j, t[33] = J) : J = t[33];
		var Z;
		t[34] !== Y || t[35] !== J ? (Z = c.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: Y,
			children: J
		}), t[34] = Y, t[35] = J, t[36] = Z) : Z = t[36];
		var ee;
		return t[37] !== X || t[38] !== Z ? (ee = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: X,
			children: Z
		}), t[37] = X, t[38] = Z, t[39] = ee) : ee = t[39], ee;
	}
	function C(e) {
		var t, n = o("react-compiler-runtime").c(36), a = e.isConnected, i = e.isDisabled, l = e.isLoading, u = e.isRinging, d = e.onReportParticipant, p = e.onRingParticipant, _ = e.onVerifyEncryption, f = e.participantJid, g = e.showActionButton, y = e.showConnectedIndicator, C = e.waitIdleForProfilePicture, v = a === void 0 ? !1 : a, S = l === void 0 ? !1 : l, R = y === void 0 ? !0 : y, L = C === void 0 ? !1 : C, E = m(r("WAWebVoipUiPopoutWindowContext")), k = E.isContextInPopoutWindow, I;
		n[0] !== f ? (I = o("WAWebContactCollection").ContactCollection.get(f.toString()), n[0] = f, n[1] = I) : I = n[1];
		var T = I, D;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (D = [o("WAWebFrontendContactGetters").getIsGuest], n[2] = D) : D = n[2];
		var x = o("useWAWebContactValues").useOptionalContactValues(f, D), $ = (t = x == null ? void 0 : x[0]) != null ? t : !1, P;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (P = o("WAWebVoipGatingUtils").isGuestViewer(), n[3] = P) : P = n[3];
		var N = P, M = $ || N, w = !S && g && !$ && !N, A = _ != null, F = d != null, O = N && v && (A || F);
		if (T == null) return null;
		var B;
		n[4] !== p || n[5] !== f ? (B = function() {
			p == null || p(f);
		}, n[4] = p, n[5] = f, n[6] = B) : B = n[6];
		var W = B, q = i && h.disabled, U = i && h.dimmedAppearance, V;
		n[7] !== U || n[8] !== q ? (V = [
			h.participantTextContainer,
			q,
			U
		], n[7] = U, n[8] = q, n[9] = V) : V = n[9];
		var H;
		n[10] !== T || n[11] !== L ? (H = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: h.profilePicContainer,
			children: c.jsx(r("WAWebContactImage.react"), {
				contact: T,
				size: 36,
				loadPicture: !0,
				waitIdle: L
			})
		}), n[10] = T, n[11] = L, n[12] = H) : H = n[12];
		var G;
		n[13] !== T || n[14] !== M ? (G = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: h.participantTextContainer,
			children: c.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				maxLines: 1,
				children: c.jsx(o("WAWebName.react").Name, {
					contact: T,
					showNotifyName: M,
					elevatedPushNamesEnabled: M
				})
			})
		}), n[13] = T, n[14] = M, n[15] = G) : G = n[15];
		var z;
		n[16] !== V || n[17] !== H || n[18] !== G ? (z = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 16,
			grow: 1,
			xstyle: V,
			children: [H, G]
		}), n[16] = V, n[17] = H, n[18] = G, n[19] = z) : z = n[19];
		var j;
		n[20] !== F || n[21] !== A || n[22] !== W || n[23] !== v || n[24] !== k || n[25] !== u || n[26] !== d || n[27] !== _ || n[28] !== w || n[29] !== f || n[30] !== O || n[31] !== R ? (j = (v || w || O) && c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 8,
			xstyle: h.rightActions,
			children: [
				v && R && c.jsx("div", { className: "x1fsd2vl x170jfvy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1qe8gl4 x2lah0s" }),
				w && c.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: u && h.flashingIcon,
					children: u ? c.jsx(r("WDSButton.react"), {
						variant: "borderless",
						type: "default",
						size: "small",
						Icon: r("WDSIconIcMoreHoriz.react"),
						onPress: r("WAWebNoop")
					}) : c.jsx(r("WDSButton.react"), {
						variant: "filled",
						type: k ? "media" : "default",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: W
					})
				}),
				O && c.jsx(b, {
					onReport: F ? function() {
						return d == null ? void 0 : d(f);
					} : void 0,
					onVerify: A ? function() {
						return _ == null ? void 0 : _(f);
					} : void 0
				})
			]
		}), n[20] = F, n[21] = A, n[22] = W, n[23] = v, n[24] = k, n[25] = u, n[26] = d, n[27] = _, n[28] = w, n[29] = f, n[30] = O, n[31] = R, n[32] = j) : j = n[32];
		var K;
		return n[33] !== z || n[34] !== j ? (K = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			alignSelf: "stretch",
			columnGap: 16,
			xstyle: h.participantRow,
			children: [z, j]
		}), n[33] = z, n[34] = j, n[35] = K) : K = n[35], K;
	}
	function b(t) {
		var n = o("react-compiler-runtime").c(26), a = t.onReport, i = t.onVerify, l = r("useWAWebVoipWindowPopoutTooltipProps")(), u = l.tooltipAnchorRef, d = l.tooltipOwnerDocument, m = _(null), p;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (p = (e || (e = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), n[0] = p) : p = n[0];
		var f;
		n[1] !== i ? (f = i != null && c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcLock.react"),
			title: s._(
				/*BTDS*/
				""
			),
			testid: "voip-participant-verify-security-code",
			onPress: i
		}), n[1] = i, n[2] = f) : f = n[2];
		var g;
		n[3] !== a ? (g = a != null && c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcThumbDown.react"),
			destructive: !0,
			title: s._(
				/*BTDS*/
				""
			),
			testid: "voip-participant-report",
			onPress: a
		}), n[3] = a, n[4] = g) : g = n[4];
		var h;
		n[5] !== f || n[6] !== g ? (h = c.jsx("div", babelHelpers.extends({}, p, { children: c.jsxs(r("WDSMenu.react"), { children: [f, g] }) })), n[5] = f, n[6] = g, n[7] = h) : h = n[7];
		var y = h, C;
		n[8] !== y || n[9] !== d ? (C = {
			targetRef: m,
			menu: y,
			ownerDocument: d
		}, n[8] = y, n[9] = d, n[10] = C) : C = n[10];
		var b = r("useWDSMenu")(C), v = b.closeMenu, S = b.isMenuOpen, R = b.menuPortal, L = b.openMenu, E;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
			/*BTDS*/
			""
		), n[11] = E) : E = n[11];
		var k = E, I;
		n[12] !== v || n[13] !== S || n[14] !== L ? (I = c.jsx(r("WDSButton.react"), {
			ref: m,
			variant: "borderless",
			type: "default",
			size: "small",
			Icon: r("WDSIconIcMoreVert.react"),
			onPress: function() {
				return S ? v() : L();
			},
			"aria-label": k,
			testid: "voip-participant-actions-menu"
		}), n[12] = v, n[13] = S, n[14] = L, n[15] = I) : I = n[15];
		var T;
		n[16] !== I || n[17] !== u || n[18] !== d ? (T = c.jsx(r("WDSTooltip.react"), {
			label: k,
			ownerAnchorRef: u,
			ownerDocument: d,
			children: I
		}), n[16] = I, n[17] = u, n[18] = d, n[19] = T) : T = n[19];
		var D;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x10l6tqk" }, n[20] = D) : D = n[20];
		var x;
		n[21] !== R ? (x = c.jsx("div", babelHelpers.extends({}, D, { children: R })), n[21] = R, n[22] = x) : x = n[22];
		var $;
		return n[23] !== x || n[24] !== T ? ($ = c.jsxs(c.Fragment, { children: [T, x] }), n[23] = x, n[24] = T, n[25] = $) : $ = n[25], $;
	}
	l.default = y;
}), 226);
