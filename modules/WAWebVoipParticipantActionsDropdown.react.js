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
	"asyncToGeneratorRuntime",
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
		var a, i, l = t.canRemoveParticipant, f = l === void 0 ? !1 : l, h = t.isParticipantMuted, R = h === void 0 ? !1 : h, E = t.onOpenChange, k = t.participantJid, I = C(r("WAWebVoipUiPopoutWindowContext")), T = C(r("WAWebVoipUiContext")), D = T.showCenteredToast, x = I.isContextInPopoutWindow, $ = I.windowEl, P = r("useWAWebVoipWindowPopoutTooltipProps")(), N = P.tooltipAnchorRef, M = P.tooltipOwnerDocument, w = v(null), A = o("WAWebContactCollection").ContactCollection.get(k.toString()), F = o("useWAWebContactValues").useOptionalContactValues(k, [o("WAWebFrontendContactGetters").getIsGuest, o("WAWebContactGetters").getNotifyName]), O = (a = F == null ? void 0 : F[0]) != null ? a : !1, B = (i = F == null ? void 0 : F[1]) != null ? i : null, W = L({
			contact: A,
			isGuest: O,
			notifyName: B
		}), q = A != null ? o("WAWebFrontendContactGetters").getFormattedShortName(A) : "", U = y(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: ParticipantActionsDropdown: Requesting mute for ", ""])), k.toString());
			try {
				var t = r("nullthrows")(yield o("WAWebVoipStackInterface").getVoipStackInterface());
				if (t.type === "web") {
					var n = yield t.requestPeerMute(k.toString());
					n !== 0 && (o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[voip] requestPeerMute failed status=", ""])), n), n === 70020 ? D == null || D(s._(
						/*BTDS*/
						"",
						[s._param("name", q)]
					)) : D == null || D(s._(
						/*BTDS*/
						""
					)));
				}
			} catch (e) {
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: ParticipantActionsDropdown: requestPeerMute error: ", ""])), String(e)), D == null || D(s._(
					/*BTDS*/
					""
				));
			}
		}), [
			k,
			q,
			D
		]), V = y(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: ParticipantActionsDropdown: Removing participant ", ""])), k.toString());
			try {
				var e = r("nullthrows")(yield o("WAWebVoipStackInterface").getVoipStackInterface());
				if (e.type === "web") {
					var t = yield e.removeCallParticipant(k.toString());
					t !== 0 && o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[voip] removeCallParticipant failed status=", ""])), t);
				}
			} catch (e) {
				o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[voip] removeCallParticipant error: ", ""])), String(e));
			}
		}), [k]), H = g.jsx("div", babelHelpers.extends({}, (_ || (_ = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), { children: g.jsxs(r("WDSMenu.react"), { children: [
			g.jsx(r("WDSMenuItem.react"), {
				type: "groupHeader",
				title: W
			}),
			!O && g.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconWdsIcChat.react"),
				title: s._(
					/*BTDS*/
					"",
					[s._param("name", q)]
				),
				testid: "participant-action-message",
				onPress: function() {
					if (x && $ != null) try {
						var e;
						(e = $.open("#", o("WAWebVoipPopoutWindowState").MAIN_WINDOW_NAME)) == null || e.focus();
					} catch (e) {}
					o("WAWebVoipActionRequestOpenChat").requestOpenChat(k);
				}
			}),
			g.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcMicOffFilled.react"),
				disabled: R,
				title: s._(
					/*BTDS*/
					"",
					[s._param("name", q)]
				),
				testid: "participant-action-mute",
				onPress: function() {
					U();
				}
			}),
			f && g.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcClose.react"),
				destructive: !0,
				title: s._(
					/*BTDS*/
					"",
					[s._param("name", q)]
				),
				testid: "participant-action-remove",
				onPress: function() {
					V();
				}
			})
		] }) })), G = r("useWDSMenu")({
			targetRef: w,
			menu: H,
			ownerDocument: M
		}), z = G.closeMenu, j = G.isMenuOpen, K = G.menuPortal, Q = G.openMenu;
		if (b(function() {
			E == null || E(j);
		}, [j, E]), A == null) return null;
		var X = s._(
			/*BTDS*/
			""
		);
		return g.jsxs(g.Fragment, { children: [g.jsx(r("WDSTooltip.react"), {
			label: X,
			ownerAnchorRef: N,
			ownerDocument: M,
			children: g.jsx(r("WDSButton.react"), {
				ref: w,
				variant: "tonal",
				type: "media",
				size: "small",
				Icon: r("WDSIconIcMoreVert.react"),
				xstyle: S.mediaButtonFocusRing,
				onPress: function() {
					return j ? z() : Q();
				},
				"aria-label": q ? s._(
					/*BTDS*/
					"",
					[s._param("name", q)]
				) : s._(
					/*BTDS*/
					""
				)
			})
		}), g.jsx("div", {
			className: "x10l6tqk",
			children: K
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
