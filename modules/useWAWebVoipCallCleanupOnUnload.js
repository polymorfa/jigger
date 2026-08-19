__d("useWAWebVoipCallCleanupOnUnload", [
	"Promise",
	"WALogger",
	"WAWebCallCollection",
	"WAWebVoipActivityTracker",
	"WAWebVoipCallStateUtils",
	"WAWebVoipPopoutWindowState",
	"WAWebVoipSignalingEnums",
	"WAWebVoipStackInterface",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f = _ || (_ = o("react")), g = f.useEffect, h = f.useRef;
	function y() {
		var t = h(null);
		g(function() {
			if (typeof window != "undefined") {
				o("WAWebVoipStackInterface").getVoipStackInterface().then(function(e) {
					t.current = e;
				}).catch(function(t) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip:cleanup] voip stack interface prefetch failed: ", ""])), String(t));
				});
				var n = null, a = null, i = function() {
					n != null && (self.clearTimeout(n), n = null);
				}, l = function() {
					i(), a == null || a(), a = null;
				}, u = function() {
					i(), a = null;
				}, c = function() {
					l(), r("WAWebCallCollection").activeCall != null && (a = o("WAWebVoipActivityTracker").trackUiActivityTemporarily(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_CLOSE_ATTEMPT), n = self.setTimeout(l, 0));
				}, d = function() {
					u();
					var e = r("WAWebCallCollection").activeCall;
					if (e != null && o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_CLOSE_ATTEMPT), b(), e != null && !o("WAWebVoipCallStateUtils").isCallIncoming(e.getState())) {
						var n = t.current;
						if (n != null) {
							C(n);
							return;
						}
						o("WAWebVoipStackInterface").getVoipStackInterface().then(function(e) {
							e != null && C(e);
						}).catch(function(e) {
							o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[voip:cleanup] endCall on unload retry failed to load voip stack interface: ", ""])), String(e));
						});
					}
				};
				return window.addEventListener("beforeunload", c), window.addEventListener("pagehide", d), function() {
					window.removeEventListener("beforeunload", c), window.removeEventListener("pagehide", d), l();
				};
			}
		}, []);
	}
	function C(e) {
		if (e.type === "web") try {
			var t = e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, !0);
			(p || (p = n("Promise"))).resolve(t).catch(function(e) {
				o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[voip:cleanup] endCall on unload rejected: ", ""])), String(e));
			});
		} catch (e) {
			o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[voip:cleanup] endCall on unload threw: ", ""])), String(e));
		}
	}
	function b() {
		if (o("WAWebVoipPopoutWindowState").isPopoutWindowAlive()) {
			var e = o("WAWebVoipPopoutWindowState").getPopoutWindow();
			if (e != null) try {
				e.close(), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[voip:cleanup] popoutWindow.close() called"])));
			} catch (e) {
				o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[voip:cleanup] popoutWindow.close() failed: ", ""])), String(e));
			}
		}
	}
	l.default = y;
}), 98);
