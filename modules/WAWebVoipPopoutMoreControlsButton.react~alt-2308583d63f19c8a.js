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
		var n = t.actions, a = t.chat, i = t.isAnyPeerScreenSharing, l = t.isCallActive, s = t.isCallLink, u = s === void 0 ? !1 : s, d = t.isConnectedLonely, v = d === void 0 ? !1 : d, S = t.isSelfHandRaised, R = S === void 0 ? !1 : S, L = t.isSelfScreenSharing, E = t.isVideoCall, k = t.isVideoMuted, I = t.layoutMode, T = t.onLayoutModeToggle, D = t.onRaiseHandToggle, x = t.onReturnToWhatsApp, $ = t.onToggleParticipantDrawer, P = t.onVideoMuteToggle, N = t.tooltipAnchorRef, M = t.tooltipOwnerDocument, w = r("useWAWebVoipModalManager")(), A = w.closeModal, F = w.openModal, O = m(r("WAWebVoipUiPopoutWindowContext")), B = O.windowEl, W = p(null), q = b(), U = n.includes("raise-hand"), V = n.includes("screen-share"), H = n.includes("participants"), G = n.includes("add-people") && a != null, z = n.includes("return-to-whatsapp"), j = n.includes("layout-toggle") && T != null, K = !l, Q = !l || v, X = o("WAWebVoipScreenShareHelpers").getScreenShareLabel(L), Y = f(R), J = g(), Z = h(), ee = C(), te = y(I), ne = r(R ? "WDSIconIcDoNotTouch.react" : "WDSIconIcPanTool.react"), re = o("WAWebVoipScreenShareHelpers").getScreenShareIcon(L, i), oe = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), { children: c.jsxs(r("WDSMenu.react"), { children: [
			U ? c.jsx(r("WDSMenuItem.react"), {
				testid: "voip-popout-overflow-raise-hand",
				Icon: ne,
				title: Y,
				disabled: K,
				onPress: function() {
					return D == null ? void 0 : D();
				}
			}) : null,
			V ? c.jsx(r("WDSMenuItem.react"), {
				testid: "voip-popout-overflow-screen-share",
				Icon: re,
				title: X,
				disabled: Q,
				onPress: function() {
					o("WAWebVoipScreenShareHelpers").handlePressScreenShare({
						isCallLink: u,
						isSelfScreenSharing: L,
						isVideoCall: E,
						isVideoMuted: k,
						onVideoMuteToggle: P,
						openModal: F,
						closeModal: A,
						targetWindow: B
					});
				}
			}) : null,
			H ? c.jsx(r("WDSMenuItem.react"), {
				testid: "voip-popout-overflow-participants",
				Icon: r("WDSIconIcGroup.react"),
				title: J,
				onPress: function() {
					return $ == null ? void 0 : $();
				}
			}) : null,
			G && a != null ? c.jsx(r("WDSMenuItem.react"), {
				testid: "voip-popout-overflow-add-people",
				Icon: r("WDSIconIcPersonAdd.react"),
				title: Z,
				onPress: function() {
					o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_ADD_PEOPLE_CLICK), F(c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
						chat: a,
						isAddingToExistingCall: !0,
						isVideoCall: E,
						onClose: A
					}), { skipDarkTheme: !0 });
				}
			}) : null,
			z ? c.jsx(r("WDSMenuItem.react"), {
				testid: "voip-popout-overflow-return-to-whatsapp",
				Icon: r("WDSIconIcBackToTab.react"),
				title: ee,
				onPress: function() {
					return x == null ? void 0 : x();
				}
			}) : null,
			j ? c.jsx(r("WDSMenuItem.react"), {
				testid: "voip-popout-overflow-layout-toggle",
				Icon: r("WDSIconIcGridView.react"),
				title: te,
				onPress: function() {
					return T == null ? void 0 : T();
				}
			}) : null
		] }) })), ae = r("useWDSMenu")({
			targetRef: W,
			menu: oe,
			position: "above",
			align: "end",
			ownerDocument: M
		}), ie = ae.closeMenu, le = ae.isMenuOpen, se = ae.menuPortal, ue = ae.openMenu;
		return c.jsxs(c.Fragment, { children: [c.jsx(r("WDSTooltip.react"), {
			label: q,
			ownerAnchorRef: N,
			ownerDocument: M,
			children: c.jsx(r("WDSButton.react"), {
				testid: "voip-popout-more-options-button",
				ref: W,
				variant: "borderless",
				"aria-label": q,
				"aria-expanded": le,
				onPress: function() {
					return le ? ie() : ue();
				},
				Icon: r("WDSIconIcMoreHoriz.react"),
				size: "medium",
				xstyle: _.moreButton
			})
		}), c.jsx("div", {
			className: "x10l6tqk",
			children: se
		})] });
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
