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
	"asyncToGeneratorRuntime",
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
		var a = t.callLogMsg, i = t.onWindowReady, l = f(null), u = l[0], d = l[1], R = f(null), L = R[0], E = R[1], I = f(!1), T = I[0], D = I[1], x = m(function() {
			var e = k(), t = e.height, n = e.width;
			try {
				u == null || u.resizeTo(n, t);
			} catch (e) {}
		}, [u]), $ = _(function() {
			return u ? {
				targetWindow: u,
				popoverPortalId: o("WAWebVoipUiDocPipPortalContainer.react").VOIP_DOCPIP_POPOVER_PORTAL_ID,
				logContext: "doc pip"
			} : null;
		}, [u]), P = o("useWAWebVoipWindowSetup").useVoipWindowSetup($, function(e) {
			E(e.document), i == null || i(e);
		});
		p(function() {
			if (!("documentPictureInPicture" in window)) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: DocPiP API not supported"]))), o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.trigger("docPipOpenFailed");
				return;
			}
			function t() {
				return r.apply(this, arguments);
			}
			function r() {
				return r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						var e = window.documentPictureInPicture;
						if (!e) {
							o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.trigger("docPipOpenFailed");
							return;
						}
						if (e.window) return;
						o("WAWebAppTracker").AppTracker.mark(o("WAWebAppTracker").AppTrackerType.VoipUiWindowCreate);
						var t = yield e.requestWindow(k());
						d(t);
					} catch (e) {
						o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: Failed to open Document Picture in Picture"]))).sendLogs("voip: Failed to open Document Picture in Picture"), o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.trigger("docPipOpenFailed");
					}
				}), r.apply(this, arguments);
			}
			t();
		}, []), p(function() {
			if (u) {
				var e = function() {
					D(function(e) {
						var t = u.innerWidth, n = u.innerHeight, a = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth(), i = Math.max(g, a), l = Math.max(C, a + S), s = r("WAWebCallCollection").activeCall, c = (s == null ? void 0 : s.isGroup) === !0 && (s == null ? void 0 : s.isVideo) !== !0, d = c ? y : h, m = c ? v : b;
						return e ? !(t >= l && n >= m) : t < i || n < d;
					});
				};
				return u.addEventListener("resize", e), o("WAWebVoipWindowConstants").sidebarVisibilityEmitter.on("change", e), e(), function() {
					u.removeEventListener("resize", e), o("WAWebVoipWindowConstants").sidebarVisibilityEmitter.off("change", e);
				};
			}
		}, [u]);
		var N = r("useWAWebEventTargetValue")(o("WAWebVoipWindowConstants").speakerDominantTooSmallEmitter, "change", o("WAWebVoipWindowConstants").getIsSpeakerDominantTooSmall), M = _(function() {
			return {
				isContextInPopoutWindow: !0,
				popoverPortalEl: L == null ? void 0 : L.getElementById(o("WAWebVoipUiDocPipPortalContainer.react").VOIP_DOCPIP_POPOVER_PORTAL_ID),
				documentEl: L,
				windowEl: u,
				isDocPip: !0
			};
		}, [L, u]);
		return !P || !L ? null : o("ReactDOM").createPortal(c.jsx(r("WAWebVoipUiPopoutWindowContext").Provider, {
			value: M,
			children: c.jsxs(r("BaseContextualLayerAnchorRoot.react"), { children: [
				c.jsx(o("WAWebVoipPopoutModalManagerWrapper.react").VoipPopoutModalManagerWrapper, { type: o("WAWebVoipPopoutModalManagerWrapper.react").ModalType }),
				c.jsx(r("WAWebVoipPopoutKeyboardShortcutsHotkey.react"), {}),
				c.jsx(o("WAWebContextMenuManager.react").ContextMenuManager, {
					type: o("WAWebContextMenuManager.react").Type.TOOLTIP,
					windowEl: u,
					documentEl: L
				}),
				c.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, { callLogMsg: a }),
				c.jsx(o("WAWebVoipTooSmallOverlay.react").WAWebVoipTooSmallOverlay, {
					isVisible: T || N,
					onRestoreSize: x
				})
			] })
		}), P);
	}
	I.displayName = I.name + " [from " + i.id + "]", l.WAWebVoipUiDocPip = I;
}), 98);
