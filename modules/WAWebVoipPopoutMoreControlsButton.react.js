__d("WAWebVoipPopoutMoreControlsButton.react", [
	"fbt",
	"WAWebVoipActivityTracker",
	"WAWebVoipNewGroupCallContactPicker.react",
	"WAWebVoipScreenShareHelpers",
	"WAWebVoipUiPopoutWindowContext",
	"WDSButton.react",
	"WDSIconIcBackToTab.react",
	"WDSIconIcDoNotTouch.react",
	"WDSIconIcGridView.react",
	"WDSIconIcGroup.react",
	"WDSIconIcMoreHoriz.react",
	"WDSIconIcPanTool.react",
	"WDSIconIcPersonAdd.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSThemes",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebVoipModalManager",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useRef, _ = { moreButton: {
		width: "x1useyqa",
		height: "xsdox4t",
		borderStartStartRadius: "xlr9sxt",
		borderStartEndRadius: "xvvg52n",
		borderEndEndRadius: "xwd4zgb",
		borderEndStartRadius: "xq8v1ta",
		$$css: !0
	} };
	function f(e) {
		return e ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		return s._(
			/*BTDS*/
			""
		);
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		return s._(
			/*BTDS*/
			""
		);
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		return e === "grid" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		return s._(
			/*BTDS*/
			""
		);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		return s._(
			/*BTDS*/
			""
		);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
		var n = o("react-compiler-runtime").c(90), a = t.actions, i = t.chat, l = t.isAnyPeerScreenSharing, s = t.isCallActive, u = t.isCallLink, d = t.isConnectedLonely, v = t.isSelfHandRaised, S = t.isSelfScreenSharing, R = t.isVideoCall, L = t.isVideoMuted, E = t.layoutMode, k = t.onLayoutModeToggle, I = t.onRaiseHandToggle, T = t.onReturnToWhatsApp, D = t.onToggleParticipantDrawer, x = t.onVideoMuteToggle, $ = t.tooltipAnchorRef, P = t.tooltipOwnerDocument, N = u === void 0 ? !1 : u, M = d === void 0 ? !1 : d, w = v === void 0 ? !1 : v, A = r("useWAWebVoipModalManager")(), F = A.closeModal, O = A.openModal, B = m(r("WAWebVoipUiPopoutWindowContext")), W = B.windowEl, q = p(null), U;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (U = b(), n[0] = U) : U = n[0];
		var V = U, H;
		n[1] !== a ? (H = a.includes("raise-hand"), n[1] = a, n[2] = H) : H = n[2];
		var G = H, z;
		n[3] !== a ? (z = a.includes("screen-share"), n[3] = a, n[4] = z) : z = n[4];
		var j = z, K;
		n[5] !== a ? (K = a.includes("participants"), n[5] = a, n[6] = K) : K = n[6];
		var Q = K, X;
		n[7] !== a || n[8] !== i ? (X = a.includes("add-people") && i != null, n[7] = a, n[8] = i, n[9] = X) : X = n[9];
		var Y = X, J;
		n[10] !== a ? (J = a.includes("return-to-whatsapp"), n[10] = a, n[11] = J) : J = n[11];
		var Z = J, ee;
		n[12] !== a || n[13] !== k ? (ee = a.includes("layout-toggle") && k != null, n[12] = a, n[13] = k, n[14] = ee) : ee = n[14];
		var te = ee, ne = !s, re = !s || M, oe;
		n[15] !== S ? (oe = o("WAWebVoipScreenShareHelpers").getScreenShareLabel(S), n[15] = S, n[16] = oe) : oe = n[16];
		var ae = oe, ie;
		n[17] !== w ? (ie = f(w), n[17] = w, n[18] = ie) : ie = n[18];
		var le = ie, se;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (se = g(), n[19] = se) : se = n[19];
		var ue = se, ce;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (ce = h(), n[20] = ce) : ce = n[20];
		var de = ce, me;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (me = C(), n[21] = me) : me = n[21];
		var pe = me, _e;
		n[22] !== E ? (_e = y(E), n[22] = E, n[23] = _e) : _e = n[23];
		var fe = _e, ge = r(w ? "WDSIconIcDoNotTouch.react" : "WDSIconIcPanTool.react"), he;
		n[24] !== l || n[25] !== S ? (he = o("WAWebVoipScreenShareHelpers").getScreenShareIcon(S, l), n[24] = l, n[25] = S, n[26] = he) : he = n[26];
		var ye = he, Ce;
		n[27] === Symbol.for("react.memo_cache_sentinel") ? (Ce = (e || (e = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), n[27] = Ce) : Ce = n[27];
		var be;
		n[28] !== ge || n[29] !== ne || n[30] !== I || n[31] !== le || n[32] !== G ? (be = G ? c.jsx(r("WDSMenuItem.react"), {
			testid: "voip-popout-overflow-raise-hand",
			Icon: ge,
			title: le,
			disabled: ne,
			onPress: function() {
				return I == null ? void 0 : I();
			}
		}) : null, n[28] = ge, n[29] = ne, n[30] = I, n[31] = le, n[32] = G, n[33] = be) : be = n[33];
		var ve;
		n[34] !== ye || n[35] !== F || n[36] !== N || n[37] !== re || n[38] !== S || n[39] !== R || n[40] !== L || n[41] !== x || n[42] !== O || n[43] !== ae || n[44] !== j || n[45] !== W ? (ve = j ? c.jsx(r("WDSMenuItem.react"), {
			testid: "voip-popout-overflow-screen-share",
			Icon: ye,
			title: ae,
			disabled: re,
			onPress: function() {
				o("WAWebVoipScreenShareHelpers").handlePressScreenShare({
					isCallLink: N,
					isSelfScreenSharing: S,
					isVideoCall: R,
					isVideoMuted: L,
					onVideoMuteToggle: x,
					openModal: O,
					closeModal: F,
					targetWindow: W
				});
			}
		}) : null, n[34] = ye, n[35] = F, n[36] = N, n[37] = re, n[38] = S, n[39] = R, n[40] = L, n[41] = x, n[42] = O, n[43] = ae, n[44] = j, n[45] = W, n[46] = ve) : ve = n[46];
		var Se;
		n[47] !== D || n[48] !== Q ? (Se = Q ? c.jsx(r("WDSMenuItem.react"), {
			testid: "voip-popout-overflow-participants",
			Icon: r("WDSIconIcGroup.react"),
			title: ue,
			onPress: function() {
				return D == null ? void 0 : D();
			}
		}) : null, n[47] = D, n[48] = Q, n[49] = Se) : Se = n[49];
		var Re;
		n[50] !== i || n[51] !== F || n[52] !== R || n[53] !== O || n[54] !== Y ? (Re = Y && i != null ? c.jsx(r("WDSMenuItem.react"), {
			testid: "voip-popout-overflow-add-people",
			Icon: r("WDSIconIcPersonAdd.react"),
			title: de,
			onPress: function() {
				o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_ADD_PEOPLE_CLICK), O(c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
					chat: i,
					isAddingToExistingCall: !0,
					isVideoCall: R,
					onClose: F
				}), { skipDarkTheme: !0 });
			}
		}) : null, n[50] = i, n[51] = F, n[52] = R, n[53] = O, n[54] = Y, n[55] = Re) : Re = n[55];
		var Le;
		n[56] !== T || n[57] !== Z ? (Le = Z ? c.jsx(r("WDSMenuItem.react"), {
			testid: "voip-popout-overflow-return-to-whatsapp",
			Icon: r("WDSIconIcBackToTab.react"),
			title: pe,
			onPress: function() {
				return T == null ? void 0 : T();
			}
		}) : null, n[56] = T, n[57] = Z, n[58] = Le) : Le = n[58];
		var Ee;
		n[59] !== fe || n[60] !== k || n[61] !== te ? (Ee = te ? c.jsx(r("WDSMenuItem.react"), {
			testid: "voip-popout-overflow-layout-toggle",
			Icon: r("WDSIconIcGridView.react"),
			title: fe,
			onPress: function() {
				return k == null ? void 0 : k();
			}
		}) : null, n[59] = fe, n[60] = k, n[61] = te, n[62] = Ee) : Ee = n[62];
		var ke;
		n[63] !== be || n[64] !== ve || n[65] !== Se || n[66] !== Re || n[67] !== Le || n[68] !== Ee ? (ke = c.jsx("div", babelHelpers.extends({}, Ce, { children: c.jsxs(r("WDSMenu.react"), { children: [
			be,
			ve,
			Se,
			Re,
			Le,
			Ee
		] }) })), n[63] = be, n[64] = ve, n[65] = Se, n[66] = Re, n[67] = Le, n[68] = Ee, n[69] = ke) : ke = n[69];
		var Ie = ke, Te;
		n[70] !== Ie || n[71] !== P ? (Te = {
			targetRef: q,
			menu: Ie,
			position: "above",
			align: "end",
			ownerDocument: P
		}, n[70] = Ie, n[71] = P, n[72] = Te) : Te = n[72];
		var De = r("useWDSMenu")(Te), xe = De.closeMenu, $e = De.isMenuOpen, Pe = De.menuPortal, Ne = De.openMenu, Me;
		n[73] !== xe || n[74] !== $e || n[75] !== Ne ? (Me = function() {
			return $e ? xe() : Ne();
		}, n[73] = xe, n[74] = $e, n[75] = Ne, n[76] = Me) : Me = n[76];
		var we;
		n[77] !== $e || n[78] !== Me ? (we = c.jsx(r("WDSButton.react"), {
			testid: "voip-popout-more-options-button",
			ref: q,
			variant: "borderless",
			"aria-label": V,
			"aria-expanded": $e,
			onPress: Me,
			Icon: r("WDSIconIcMoreHoriz.react"),
			size: "medium",
			xstyle: _.moreButton
		}), n[77] = $e, n[78] = Me, n[79] = we) : we = n[79];
		var Ae;
		n[80] !== we || n[81] !== $ || n[82] !== P ? (Ae = c.jsx(r("WDSTooltip.react"), {
			label: V,
			ownerAnchorRef: $,
			ownerDocument: P,
			children: we
		}), n[80] = we, n[81] = $, n[82] = P, n[83] = Ae) : Ae = n[83];
		var Fe;
		n[84] === Symbol.for("react.memo_cache_sentinel") ? (Fe = { className: "x10l6tqk" }, n[84] = Fe) : Fe = n[84];
		var Oe;
		n[85] !== Pe ? (Oe = c.jsx("div", babelHelpers.extends({}, Fe, { children: Pe })), n[85] = Pe, n[86] = Oe) : Oe = n[86];
		var Be;
		return n[87] !== Ae || n[88] !== Oe ? (Be = c.jsxs(c.Fragment, { children: [Ae, Oe] }), n[87] = Ae, n[88] = Oe, n[89] = Be) : Be = n[89], Be;
	}
	l.default = v;
}), 226);
