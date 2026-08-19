__d("WAWebVoipUiDocPip.react", [
	"BaseContextualLayerAnchorRoot.react",
	"ReactDOM",
	"WALogger",
	"WAWebAppTracker",
	"WAWebCallCollection",
	"WAWebContextMenuManager.react",
	"WAWebVoipPopoutKeyboardShortcutsHotkey.react",
	"WAWebVoipPopoutModalManagerWrapper.react",
	"WAWebVoipTooSmallOverlay.react",
	"WAWebVoipUiDocPipPortalContainer.react",
	"WAWebVoipUiLoadable",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipWindowConstants",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebVoipWindowSetup"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useState, g = 350, h = 300, y = 160, C = 370, b = 320, v = 180, S = C - g, R = 503, L = 400, E = 220;
	function k() {
		var e = r("WAWebCallCollection").activeCall, t = (e == null ? void 0 : e.isGroup) === !0 && (e == null ? void 0 : e.isVideo) !== !0, n = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth(), a = Math.max(R, n);
		if (t) return {
			width: a,
			height: E
		};
		if (a === R) return {
			width: R,
			height: L
		};
		var i = Math.max(Math.round(a * L / R), o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT);
		return {
			width: a,
			height: i
		};
	}
	function I(t) {
		var n = t.callLogMsg, a = t.onWindowReady, i = f(null), l = i[0], u = i[1], d = f(null), R = d[0], L = d[1], E = f(!1), I = E[0], T = E[1], D = m(function() {
			var e = k(), t = e.height, n = e.width;
			try {
				l == null || l.resizeTo(n, t);
			} catch (e) {}
		}, [l]), x = _(function() {
			return l ? {
				targetWindow: l,
				popoverPortalId: o("WAWebVoipUiDocPipPortalContainer.react").VOIP_DOCPIP_POPOVER_PORTAL_ID,
				logContext: "doc pip"
			} : null;
		}, [l]), $ = o("useWAWebVoipWindowSetup").useVoipWindowSetup(x, function(e) {
			L(e.document), a == null || a(e);
		});
		p(function() {
			if (!("documentPictureInPicture" in window)) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: DocPiP API not supported"]))), o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.trigger("docPipOpenFailed");
				return;
			}
			async function t() {
				try {
					var e = window.documentPictureInPicture;
					if (!e) {
						o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.trigger("docPipOpenFailed");
						return;
					}
					if (e.window) return;
					o("WAWebAppTracker").AppTracker.mark(o("WAWebAppTracker").AppTrackerType.VoipUiWindowCreate);
					var t = await e.requestWindow(k());
					u(t);
				} catch (e) {
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: Failed to open Document Picture in Picture"]))).sendLogs("voip: Failed to open Document Picture in Picture"), o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.trigger("docPipOpenFailed");
				}
			}
			t();
		}, []), p(function() {
			if (l) {
				var e = function() {
					T(function(e) {
						var t = l.innerWidth, n = l.innerHeight, a = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth(), i = Math.max(g, a), s = Math.max(C, a + S), u = r("WAWebCallCollection").activeCall, c = (u == null ? void 0 : u.isGroup) === !0 && (u == null ? void 0 : u.isVideo) !== !0, d = c ? y : h, m = c ? v : b;
						return e ? !(t >= s && n >= m) : t < i || n < d;
					});
				};
				return l.addEventListener("resize", e), o("WAWebVoipWindowConstants").sidebarVisibilityEmitter.on("change", e), e(), function() {
					l.removeEventListener("resize", e), o("WAWebVoipWindowConstants").sidebarVisibilityEmitter.off("change", e);
				};
			}
		}, [l]);
		var P = r("useWAWebEventTargetValue")(o("WAWebVoipWindowConstants").speakerDominantTooSmallEmitter, "change", o("WAWebVoipWindowConstants").getIsSpeakerDominantTooSmall), N = _(function() {
			return {
				isContextInPopoutWindow: !0,
				popoverPortalEl: R == null ? void 0 : R.getElementById(o("WAWebVoipUiDocPipPortalContainer.react").VOIP_DOCPIP_POPOVER_PORTAL_ID),
				documentEl: R,
				windowEl: l,
				isDocPip: !0
			};
		}, [R, l]);
		return !$ || !R ? null : o("ReactDOM").createPortal(c.jsx(r("WAWebVoipUiPopoutWindowContext").Provider, {
			value: N,
			children: c.jsxs(r("BaseContextualLayerAnchorRoot.react"), { children: [
				c.jsx(o("WAWebVoipPopoutModalManagerWrapper.react").VoipPopoutModalManagerWrapper, { type: o("WAWebVoipPopoutModalManagerWrapper.react").ModalType }),
				c.jsx(r("WAWebVoipPopoutKeyboardShortcutsHotkey.react"), {}),
				c.jsx(o("WAWebContextMenuManager.react").ContextMenuManager, {
					type: o("WAWebContextMenuManager.react").Type.TOOLTIP,
					windowEl: l,
					documentEl: R
				}),
				c.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, { callLogMsg: n }),
				c.jsx(o("WAWebVoipTooSmallOverlay.react").WAWebVoipTooSmallOverlay, {
					isVisible: I || P,
					onRestoreSize: D
				})
			] })
		}), $);
	}
	I.displayName = I.name + " [from " + i.id + "]", l.WAWebVoipUiDocPip = I;
}), 98);
