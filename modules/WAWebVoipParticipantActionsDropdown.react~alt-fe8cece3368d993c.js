__d("WAWebVoipParticipantActionsDropdown.react", [
	"fbt",
	"WALogger",
	"WAWebChatContactUtils",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebFrontendContactGetters",
	"WAWebGuestNameFormat",
	"WAWebVoipActionRequestOpenChat",
	"WAWebVoipPopoutWindowState",
	"WAWebVoipStackInterface",
	"WAWebVoipUiContext",
	"WAWebVoipUiPopoutWindowContext",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcMicOffFilled.react",
	"WDSIconIcMoreVert.react",
	"WDSIconWdsIcChat.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSThemes",
	"WDSTooltip.react",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebContactValues",
	"useWAWebVoipWindowPopoutTooltipProps",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g = f || (f = o("react")), h = f, y = h.useCallback, C = h.useContext, b = h.useEffect, v = h.useRef, S = { mediaButtonFocusRing: {
		":focus-visible_outlineColor": "xtnn1bt",
		$$css: !0
	} };
	function R(t) {
		var n, a, i = t.canRemoveParticipant, l = i === void 0 ? !1 : i, f = t.isParticipantMuted, h = f === void 0 ? !1 : f, R = t.onOpenChange, E = t.participantJid, k = C(r("WAWebVoipUiPopoutWindowContext")), I = C(r("WAWebVoipUiContext")), T = I.showCenteredToast, D = k.isContextInPopoutWindow, x = k.windowEl, $ = r("useWAWebVoipWindowPopoutTooltipProps")(), P = $.tooltipAnchorRef, N = $.tooltipOwnerDocument, M = v(null), w = o("WAWebContactCollection").ContactCollection.get(E.toString()), A = o("useWAWebContactValues").useOptionalContactValues(E, [o("WAWebFrontendContactGetters").getIsGuest, o("WAWebContactGetters").getNotifyName]), F = (n = A == null ? void 0 : A[0]) != null ? n : !1, O = (a = A == null ? void 0 : A[1]) != null ? a : null, B = L({
			contact: w,
			isGuest: F,
			notifyName: O
		}), W = w != null ? o("WAWebFrontendContactGetters").getFormattedShortName(w) : "", q = y(async function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: ParticipantActionsDropdown: Requesting mute for ", ""])), E.toString());
			try {
				var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
				if (t.type === "web") {
					var n = await t.requestPeerMute(E.toString());
					n !== 0 && (o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[voip] requestPeerMute failed status=", ""])), n), n === 70020 ? T == null || T(s._(
						/*BTDS*/
						"",
						[s._param("name", W)]
					)) : T == null || T(s._(
						/*BTDS*/
						""
					)));
				}
			} catch (e) {
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: ParticipantActionsDropdown: requestPeerMute error: ", ""])), String(e)), T == null || T(s._(
					/*BTDS*/
					""
				));
			}
		}, [
			E,
			W,
			T
		]), U = y(async function() {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: ParticipantActionsDropdown: Removing participant ", ""])), E.toString());
			try {
				var e = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
				if (e.type === "web") {
					var t = await e.removeCallParticipant(E.toString());
					t !== 0 && o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[voip] removeCallParticipant failed status=", ""])), t);
				}
			} catch (e) {
				o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[voip] removeCallParticipant error: ", ""])), String(e));
			}
		}, [E]), V = g.jsx("div", babelHelpers.extends({}, (_ || (_ = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), { children: g.jsxs(r("WDSMenu.react"), { children: [
			g.jsx(r("WDSMenuItem.react"), {
				type: "groupHeader",
				title: B
			}),
			!F && g.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconWdsIcChat.react"),
				title: s._(
					/*BTDS*/
					"",
					[s._param("name", W)]
				),
				testid: "participant-action-message",
				onPress: function() {
					if (D && x != null) try {
						var e;
						(e = x.open("#", o("WAWebVoipPopoutWindowState").MAIN_WINDOW_NAME)) == null || e.focus();
					} catch (e) {}
					o("WAWebVoipActionRequestOpenChat").requestOpenChat(E);
				}
			}),
			g.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcMicOffFilled.react"),
				disabled: h,
				title: s._(
					/*BTDS*/
					"",
					[s._param("name", W)]
				),
				testid: "participant-action-mute",
				onPress: function() {
					q();
				}
			}),
			l && g.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcClose.react"),
				destructive: !0,
				title: s._(
					/*BTDS*/
					"",
					[s._param("name", W)]
				),
				testid: "participant-action-remove",
				onPress: function() {
					U();
				}
			})
		] }) })), H = r("useWDSMenu")({
			targetRef: M,
			menu: V,
			ownerDocument: N
		}), G = H.closeMenu, z = H.isMenuOpen, j = H.menuPortal, K = H.openMenu;
		if (b(function() {
			R == null || R(z);
		}, [z, R]), w == null) return null;
		var Q = s._(
			/*BTDS*/
			""
		);
		return g.jsxs(g.Fragment, { children: [g.jsx(r("WDSTooltip.react"), {
			label: Q,
			ownerAnchorRef: P,
			ownerDocument: N,
			children: g.jsx(r("WDSButton.react"), {
				ref: M,
				variant: "tonal",
				type: "media",
				size: "small",
				Icon: r("WDSIconIcMoreVert.react"),
				xstyle: S.mediaButtonFocusRing,
				onPress: function() {
					return z ? G() : K();
				},
				"aria-label": W ? s._(
					/*BTDS*/
					"",
					[s._param("name", W)]
				) : s._(
					/*BTDS*/
					""
				)
			})
		}), g.jsx("div", {
			className: "x10l6tqk",
			children: j
		})] });
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.contact, n = e.isGuest, r = e.notifyName;
		if (t == null) return "";
		var a = o("WAWebChatContactUtils").getFormattedNotifyName(r);
		return n && a !== "" ? o("WAWebGuestNameFormat").maybeGetNameWithGuestLabel(a, n) : o("WAWebFrontendContactGetters").getDisplayName(t);
	}
	l.default = R;
}), 226);
