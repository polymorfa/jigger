__d("WAWebVoipUiDocPipPortalContainer.react", [
	"WALogger",
	"WAWebABProps",
	"WAWebCallCollection",
	"WAWebTypedEventEmitter",
	"WAWebVoipActivityTracker",
	"WAWebVoipCallStateUtils",
	"WAWebVoipFocusTracker",
	"WAWebVoipLobbyUtils",
	"WAWebVoipUiDocPipLoadable",
	"WAWebVoipUiPopoutWindowPortalContainer.react",
	"react",
	"useWAWebListener",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h = g || (g = o("react")), y = g, C = y.useEffect, b = y.useState, v = "wa-web-voip-docpip-popover-portal", S = 3e3, R = !1;
	function L() {
		return R;
	}
	function E() {
		var e = r("WAWebCallCollection").activeCall;
		if (e == null) return !1;
		var t = e.getState();
		return o("WAWebVoipCallStateUtils").isCallIncoming(t) || o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(e.isGroup === !0, t) || e.isInCallLinkPreview() || e.isInCallLinkLobby();
	}
	var k = new (r("WAWebTypedEventEmitter"))();
	function I(t) {
		try {
			"mediaSession" in navigator ? (navigator.mediaSession.setActionHandler("enterpictureinpicture", t), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [DocPiP] enterpictureinpicture handler ", ""])), t != null ? "registered" : "unregistered")) : o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: [DocPiP] mediaSession not available, cannot register enterpictureinpicture handler"])));
		} catch (e) {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: [DocPiP] enterpictureinpicture action not supported by browser"])));
		}
	}
	function T(e) {
		R !== e && (R = e, k.trigger("docPipOpenStateChanged"), o("WAWebVoipFocusTracker").notifyWindowModeChanged(e ? "pip" : "main"));
	}
	function D() {
		var e = b(null), t = e[0], n = e[1], r = b(!1), a = r[0], i = r[1], l = b(null), s = l[0], u = l[1], g = b(!1), y = g[0], v = g[1], R = t != null || y, L = o("useWAWebTimeout").useManualTimeout(function() {
			i(!1), n(null), v(!1), T(!1), s && s.close();
		}), D = L[0], x = L[1];
		return o("useWAWebListener").useListener(k, "setDocPipProps", function(e) {
			var t = e.callLogMsg, r = e.isArmed;
			(t != null || r === !0) && x(), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [DocPiP] setDocPipProps: callLogMsg=",
				", isArmed=",
				""
			])), t != null, r === !0), n(t), v(r === !0);
		}), o("useWAWebListener").useListener(k, "closeDocPip", function(e) {
			var t = e.surveyInteracted;
			D(t !== !0 ? S : 0);
		}), o("useWAWebListener").useListener(k, "reopenDocPip", function() {
			var e = o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow(), t = E();
			R && !e && !t ? (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: [DocPiP] reopenDocPip: opening doc-pip"]))), i(!0), T(!0), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_MOVE_TO_DOC_PIP)) : o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [DocPiP] reopenDocPip: skipped (active=",
				", popout=",
				", suppressed=",
				")"
			])), R, e, t);
		}), o("useWAWebListener").useListener(k, "docPipOpenFailed", function() {
			o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: [DocPiP] docPipOpenFailed"]))).sendLogs("doc-pip-open-failed"), i(!1), T(!1);
		}), o("useWAWebListener").useListener(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter, "popoutWindowVisibilityChanged", function(e) {
			var t = o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsPopoutWindowActiveAndVisible();
			t && s && s.close();
		}), C(function() {
			if (!R) {
				I(null);
				return;
			}
			return I(function() {
				var e = o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow(), t = o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsPopoutWindowOpening();
				if (e || t) {
					o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [DocPiP] enterpictureinpicture fired but blocked (popoutActive=",
						", popoutOpening=",
						")"
					])), e, t);
					return;
				}
				o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [DocPiP] enterpictureinpicture fired, triggering reopenDocPip"]))), k.trigger("reopenDocPip");
			}), function() {
				I(null);
			};
		}, [R]), C(function() {
			if (s) {
				var e = function() {
					i(!1), u(null), T(!1), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_MOVE_FROM_DOC_PIP);
				}, t = function() {
					document.visibilityState === "visible" && (o("WAWebABProps").getABPropConfigValue("enable_web_voip_anr_optimizations") ? window.setTimeout(function() {
						return s.close();
					}, 0) : s.close());
				};
				return s.addEventListener("pagehide", e), document.addEventListener("visibilitychange", t), function() {
					s.removeEventListener("pagehide", e), document.removeEventListener("visibilitychange", t);
				};
			}
		}, [s]), !R || !a ? null : h.jsx(o("WAWebVoipUiDocPipLoadable").WAWebVoipUiDocPipLoadable, {
			callLogMsg: t,
			onWindowReady: u
		});
	}
	D.displayName = D.name + " [from " + i.id + "]", l.VOIP_DOCPIP_POPOVER_PORTAL_ID = v, l.getIsDocPipWindowOpen = L, l.WAWebVoipUiDocPipEventEmitter = k, l.WAWebVoipUiDocPipPortalContainer = D;
}), 98);
