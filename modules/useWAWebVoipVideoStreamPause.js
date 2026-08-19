__d("useWAWebVoipVideoStreamPause", [
	"WALogger",
	"WAWebCallCollection",
	"WAWebVoipPopoutWindowState",
	"WAWebVoipStackInterface",
	"WAWebVoipUiDocPipPortalContainer.react",
	"WAWebVoipVideoCameraCapture",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h = g || (g = o("react")), y = h.useEffect, C = h.useEffectEvent, b = h.useRef, v = h.useSyncExternalStore, S = 100, R = 250, L = 500, E = 5e3, k = 2, I = 3, T = null, D = 0, x = 0, $ = 0, P = !1, N = new Set();
	function M() {
		var t = v(F, w), a = v(O, A), i = b(!1), l = b(!1), _ = b(!1), f = b(null), g = b(null);
		y(function() {
			var l = f.current, d = g.current, m = l !== t, p = t === !1 && l === !1 && a && d === !1 && i.current;
			if (f.current = t, g.current = a, m || p) {
				p ? o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip] retrying video stream resume after call became visible"]))) : o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"[voip] video stream pause condition ",
					", ",
					" video stream"
				])), t ? "active" : "inactive", t ? "pausing" : "resuming");
				var _ = !1, h = t ? S : 0, y = window.setTimeout(function() {
					n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						try {
							var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
							if (_ || (e == null ? void 0 : e.type) !== "web") return;
							if (t) {
								var n;
								if (((n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.isSelfScreenSharing()) === !0) {
									o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[voip] skipping video stream pause: screen sharing active"])));
									return;
								}
								yield e.videoStreamPause(), _ || (i.current = !0);
							} else yield e.videoStreamResume();
						} catch (e) {
							_ || o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[voip] Failed to ", " video stream"])), t ? "pause" : "resume").catching(r("getErrorSafe")(e)).sendLogs("voip-stream-pause-fail");
						}
					})();
				}, h);
				return function() {
					_ = !0, window.clearTimeout(y);
				};
			}
		}, [a, t]);
		var h = C(function() {
			!l.current || !i.current || w() || _.current || (_.current = !0, o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[voip] retrying video stream resume after camera frame received"]))), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					if (!l.current || (e == null ? void 0 : e.type) !== "web" || w()) return;
					var t = yield e.videoStreamResume();
					if (!l.current) return;
					if (w()) {
						var n;
						t === 0 && ((n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.isSelfScreenSharing()) !== !0 && (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[voip] re-pausing video stream after stale camera frame resume"]))), yield e.videoStreamPause());
						return;
					}
					t === 0 && (i.current = !1);
				} catch (e) {
					l.current && o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[voip] Failed to resume video stream after camera frame received"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-stream-pause-frame-resume-fail");
				} finally {
					l.current && (_.current = !1);
				}
			})());
		});
		y(function() {
			return l.current = !0, o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.on("cameraFrameReceived", h), function() {
				l.current = !1, o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.off("cameraFrameReceived", h);
			};
		}, []);
	}
	function w() {
		return !A() && P;
	}
	function A() {
		return o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen() || o("WAWebVoipPopoutWindowState").getIsPopoutWindowOpening() ? !0 : o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow() ? o("WAWebVoipPopoutWindowState").getIsPopoutWindowActiveAndVisible() : document.visibilityState === "visible";
	}
	function F(e) {
		var t = function() {
			try {
				W();
			} catch (e) {
				o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[voip] syncBackgroundThrottleProbe failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-throttle-probe-sync-fail");
			}
			e();
		}, n = B(t);
		return N.add(e), W(), function() {
			n(), N.delete(e), N.size === 0 && U();
		};
	}
	function O(e) {
		return B(e);
	}
	function B(e) {
		return document.addEventListener("visibilitychange", e), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("popoutWindowVisibilityChanged", e), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("setPopoutWindowProps", e), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("popoutWindowOpeningChanged", e), o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.on("docPipOpenStateChanged", e), function() {
			document.removeEventListener("visibilitychange", e), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.off("popoutWindowVisibilityChanged", e), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.off("setPopoutWindowProps", e), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.off("popoutWindowOpeningChanged", e), o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.off("docPipOpenStateChanged", e);
		};
	}
	function W() {
		A() ? U() : q();
	}
	function q() {
		T == null && V();
	}
	function U() {
		T != null && (window.clearTimeout(T), T = null), x = 0, $ = 0, G(!1);
	}
	function V() {
		D = window.performance.now() + R, T = window.setTimeout(H, R);
	}
	function H() {
		if (T = null, A()) {
			U();
			return;
		}
		var e = window.performance.now() - D;
		e >= E ? (x = k, $ = 0, G(!0)) : e >= L ? (x++, $ = 0, x >= k && G(!0)) : P ? (x = 0, $++, $ >= I && G(!1)) : x = 0, V();
	}
	function G(e) {
		P !== e && (P = e, o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[voip] background timer throttling ", ""])), e ? "detected" : "cleared"), N.forEach(function(e) {
			e();
		}));
	}
	l.default = M;
}), 98);
