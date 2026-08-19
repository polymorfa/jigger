__d("useWAWebVoipCallVisibility", [
	"WALogger",
	"WAWebVoipFullScreenContext",
	"WAWebVoipPopoutWindowState",
	"WAWebVoipUiDocPipPortalContainer.react",
	"WAWebVoipUiPopoutWindowContext",
	"react",
	"useWAWebListener",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useContext, d = u.useEffect, m = u.useRef, p = u.useState;
	function _() {
		var t, n = c(r("WAWebVoipUiPopoutWindowContext")), a = n.isContextInPopoutWindow, i = n.isDocPip, l = c(r("WAWebVoipFullScreenContext")), s = l.isFullScreen, u = r("useWAWebStableCallback")(function() {
			return i || s ? !0 : a ? o("WAWebVoipPopoutWindowState").getIsPopoutWindowActiveAndVisible() : o("WAWebVoipPopoutWindowState").getIsPopoutWindowOpening() ? !0 : o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow() || o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen() ? !1 : document.visibilityState === "visible";
		}), _ = p(u), f = _[0], g = _[1];
		d(function() {
			var e = function() {
				return g(u());
			};
			return document.addEventListener("visibilitychange", e), e(), function() {
				return document.removeEventListener("visibilitychange", e);
			};
		}, [u]), (t = o("useWAWebListener")).useListener(o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, "popoutWindowVisibilityChanged", function(e) {
			return g(u());
		}), t.useListener(o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", function() {
			return g(u());
		}), t.useListener(o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, "popoutWindowOpeningChanged", function() {
			return g(u());
		}), t.useListener(o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter, "docPipOpenStateChanged", function() {
			return g(u());
		});
		var h = m(f);
		return d(function() {
			h.current !== f && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[voip] call UI visibility changed: ",
				" (popoutActive=",
				", docPipOpen=",
				")"
			])), f ? "visible" : "hidden", String(o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow()), String(o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen())), h.current = f);
		}, [f]), f;
	}
	l.default = _;
}), 98);
