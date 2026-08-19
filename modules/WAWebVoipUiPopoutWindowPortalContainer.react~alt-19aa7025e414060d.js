__d("WAWebVoipUiPopoutWindowPortalContainer.react", [
	"WALogger",
	"WAWebAudioDeviceManager",
	"WAWebBoolFunc",
	"WAWebCallCollection",
	"WAWebMsgGetters",
	"WAWebUA",
	"WAWebUserPrefsVoip",
	"WAWebVelocityBackgroundTimer",
	"WAWebVoipActivityTracker",
	"WAWebVoipFocusTracker",
	"WAWebVoipGatingUtils",
	"WAWebVoipPopoutWindowState",
	"WAWebVoipStackInterface",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipUiPopoutWindowLoadable",
	"WAWebVoipUiPopoutWindowPortalHelpers",
	"WAWebVoipVideoStateUtils",
	"getErrorSafe",
	"react",
	"useWAWebListener",
	"useWAWebStableCallback",
	"useWAWebTimeout",
	"useWAWebVoipCallCleanupOnUnload"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D = T || (T = o("react")), x = T, $ = x.useMemo, P = x.useRef, N = x.useState, M = "wa-web-voip-popover-portal", w = 15e3, A = 5e3;
	function F() {
		r("useWAWebVoipCallCleanupOnUnload")();
		var t = N(null), n = t[0], a = t[1], i = N(null), l = i[0], T = i[1], x = N(null), F = x[0], O = x[1], B = r("useWAWebStableCallback")(function() {
			var e = o("WAWebVoipPopoutWindowState").getPopoutWindow();
			if (e) {
				var t = e.document.visibilityState;
				o("WAWebVoipActivityTracker").trackUiActivity(t === "hidden" ? o("WAWebVoipActivityTracker").VoipUiActivity.TAB_VISIBILITY_HIDDEN : o("WAWebVoipActivityTracker").VoipUiActivity.TAB_VISIBILITY_VISIBLE), o("WAWebVelocityBackgroundTimer").toggleSmoothBackgroundAnimations(t === "visible"), o("WAWebVoipUiPopoutWindowPortalHelpers").emitPopoutWindowVisibilityChanged(t);
			}
		}), W = P(null), q = P(null), U = P(null), V = P(!1), H = P(!1), G = r("useWAWebStableCallback")(function() {
			W.current != null && (window.clearInterval(W.current), W.current = null);
		}), z = r("useWAWebStableCallback")(function() {
			q.current != null && (q.current(), q.current = null);
		}), j = o("useWAWebTimeout").useManualTimeout(function() {
			G(), z();
			var t = o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow();
			o("WAWebVoipPopoutWindowState").setIsCallActiveInPopoutWindow(!1), o("WAWebVoipPopoutWindowState").setPopoutWindow(null), t && r("WAWebCallCollection").lastActiveCall != null && r("WAWebCallCollection").lastActiveCall.shouldShowPostCallSurvey === !0 && r("WAWebCallCollection").lastActiveCall.postCallSurveyInteracted !== !0 && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: clearing stale post-call survey state"]))), r("WAWebCallCollection").lastActiveCall.shouldShowPostCallSurvey = !1), t && o("WAWebVoipUiPopoutWindowPortalHelpers").emitPopoutWindowVisibilityChanged("hidden"), o("WAWebVelocityBackgroundTimer").toggleSmoothBackgroundAnimations(!1), n == null || n.removeEventListener("visibilitychange", B), n == null || n.close(), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("setPopoutWindowProps", {
				callLogMsg: null,
				popoutWindow: null
			});
		}), K = j[0];
		o("useWAWebListener").useListener(o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", function(e) {
			var t, n = e.callLogMsg, i = e.popoutWindow;
			o("WAWebVoipPopoutWindowState").resetPopoutUiReady(), n != null && (V.current = !1);
			var l = o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow();
			if (O(n), a(i), n != null && !l ? o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_MOVE_TO_POPOUT) : n == null && l && o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_MOVE_FROM_POPOUT), o("WAWebVoipPopoutWindowState").setIsCallActiveInPopoutWindow(n != null), o("WAWebVoipFocusTracker").notifyWindowModeChanged(n != null ? "popout" : "main"), o("WAWebVoipPopoutWindowState").setPopoutWindow(n != null ? i : null), o("WAWebVelocityBackgroundTimer").toggleSmoothBackgroundAnimations(n != null), (t = o("WAWebVoipPopoutWindowState").getPopoutWindow()) == null || t.addEventListener("visibilitychange", B), n == null && (o("WAWebVoipUiPopoutWindowPortalHelpers").clearActiveStreams(), G(), z()), n != null && o("WAWebUA").UA.isSafari && i != null && (G(), W.current = window.setInterval(function() {
				try {
					i.closed && (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: Safari popout close polling: detected window closed"]))), G(), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", { callEnded: !1 }));
				} catch (e) {
					o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: Safari popout poll: window inaccessible: ", ""])), String(e)), G(), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", { callEnded: !1 });
				}
			}, o("WAWebVoipUiPopoutWindowPortalHelpers").SAFARI_POPOUT_CLOSE_POLL_INTERVAL_MS)), n != null && i != null) {
				var C, b = r("WAWebCallCollection").activeCall, v = (C = b == null ? void 0 : b.id) != null ? C : o("WAWebMsgGetters").getCallId(n), S = o("WAWebVoipVideoStateUtils").isVideoEnabled(b == null ? void 0 : b.selfVideoState), R = o("WAWebVoipGatingUtils").isPopoutReuseCaptureEnabled();
				if (H.current = R, R && b != null && S) {
					var L = !1, E = function() {
						L || o("WAWebVoipPopoutWindowState").getPopoutWindow() !== i || !o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow() || (L = !0, o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: popout open: camera reuse-repump into popout"]))), o("WAWebVoipUiPopoutWindowPortalHelpers").reacquireCameraReusingStreamForPopout(v));
					};
					if (o("WAWebVoipPopoutWindowState").getIsPopoutUiReady()) E();
					else {
						var k = [], I = function() {
							k.forEach(function(e) {
								return e();
							}), k.length = 0, q.current === I && (q.current = null);
						}, T = function() {
							I(), E();
						};
						o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("popoutUiReady", T), k.push(function() {
							o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.off("popoutUiReady", T);
						});
						var D = window.setTimeout(function() {
							I(), E();
						}, o("WAWebVoipUiPopoutWindowPortalHelpers").STREAM_REACQUISITION_TIMEOUT_MS);
						k.push(function() {
							window.clearTimeout(D);
						}), q.current == null || q.current(), q.current = I;
					}
				}
				if (!R) {
					var x, $ = (x = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice()) != null ? x : o("WAWebUserPrefsVoip").getSelectedAudioInputDevice(), P = function() {
						var e;
						if (o("WAWebVoipPopoutWindowState").getPopoutWindow() !== i || !o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow()) return null;
						var t = r("WAWebCallCollection").activeCall;
						return t == null || t !== b && (v == null || t.id !== v) ? null : {
							currentDeviceId: (e = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice()) != null ? e : o("WAWebUserPrefsVoip").getSelectedAudioInputDevice(),
							isVideoEnabled: o("WAWebVoipVideoStateUtils").isVideoEnabled(t.selfVideoState)
						};
					}, N = function() {
						var e = P();
						return e == null || !e.isVideoEnabled && e.currentDeviceId == null ? null : e;
					};
					if (b != null && (S || $ != null)) {
						o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: popout open: setting up stream re-acquisition"])));
						var M = async function() {
							var e = o("WAWebVoipPopoutWindowState").beginCameraStreamReacquisition(), t = window.setTimeout(function() {
								o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: popout open: reacquisition guard fired, clearing"]))), e();
							}, w);
							try {
								var n = N();
								if (n == null) return;
								var a = await o("WAWebVoipStackInterface").getVoipStackInterface();
								if (n = N(), n == null || a == null || a.type !== "web" || (await o("WAWebVoipUiPopoutWindowPortalHelpers").primeSafariMediaPermissions(i, n.isVideoEnabled, n.currentDeviceId != null), n = N(), n == null)) return;
								if (n.isVideoEnabled) {
									var l = {
										popoutWindow: i,
										promise: o("WAWebVoipUiPopoutWindowPortalHelpers").reacquireCameraInTargetWindow(i, v)
									};
									U.current = l;
									try {
										await l.promise;
									} finally {
										U.current === l && (U.current = null);
									}
								}
								if (n = N(), n == null) return;
								n.currentDeviceId != null && o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("requestAudioReacquisition", {
									deviceId: n.currentDeviceId,
									targetWindow: i
								}), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: popout open: stream re-acquisition initiated"])));
							} catch (e) {
								o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: popout open: stream re-acquisition failed"]))).catching(r("getErrorSafe")(e));
							} finally {
								window.clearTimeout(t), e();
							}
						}, A = !1, F = !1, j = !o("WAWebUA").UA.isSafari || o("WAWebVoipPopoutWindowState").getIsPopoutUiReady(), K = [], Q = function() {
							K.forEach(function(e) {
								e();
							}), K.length = 0, q.current === Q && (q.current = null);
						}, X = function(t) {
							if (!A) {
								var e = !1, n = F, a = !1, l;
								try {
									var s = i.document;
									e = s.visibilityState === "visible" && !s.hidden, n = n || s.hasFocus(), a = s.documentElement != null && s.body != null, o("WAWebUA").UA.isSafari ? l = i.location.origin === window.location.origin : l = !0;
								} catch (e) {
									o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: popout: unable to check window state"]))).catching(r("getErrorSafe")(e));
									return;
								}
								if (o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
									"voip: [Popout] ready_check reason=",
									" shell=",
									" visible=",
									" focused=",
									" ui_ready=",
									" origin_match=",
									""
								])), t, String(a), String(e), String(n), String(j), String(l)), !(!a || !e || !n || !j || !l)) {
									var u = N();
									if (u == null) {
										A = !0, Q();
										return;
									}
									A = !0, Q(), o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [Popout] reacquisition_triggered reason=", ""])), t), M();
								}
							}
						}, Y = function() {
							X("load");
						};
						i.addEventListener("load", Y), K.push(function() {
							i.removeEventListener("load", Y);
						});
						var J = function() {
							F = !0, X("focus");
						};
						i.addEventListener("focus", J), K.push(function() {
							i.removeEventListener("focus", J);
						});
						var Z = function() {
							X("visibilitychange");
						};
						try {
							i.document.addEventListener("visibilitychange", Z), K.push(function() {
								try {
									i.document.removeEventListener("visibilitychange", Z);
								} catch (e) {}
							});
						} catch (e) {}
						var ee = function() {
							j = !0, X("ui_ready");
						};
						o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("popoutUiReady", ee), K.push(function() {
							o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.off("popoutUiReady", ee);
						});
						var te = window.setInterval(function() {
							X("poll");
						}, o("WAWebVoipUiPopoutWindowPortalHelpers").STREAM_REACQUISITION_POLL_INTERVAL_MS);
						K.push(function() {
							window.clearInterval(te);
						});
						var ne = window.setTimeout(function() {
							var e = "unknown";
							try {
								var t = i.document;
								e = "shell=" + String(t.documentElement != null && t.body != null) + " visible=" + t.visibilityState + " focused=" + String(t.hasFocus()) + " ready=" + t.readyState;
							} catch (t) {
								e = "inaccessible";
							}
							o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: [Popout] reacquisition_timeout ", ""])), e), j = !0, o("WAWebVoipPopoutWindowState").markPopoutUiReady(), X("timeout"), Q();
						}, o("WAWebVoipUiPopoutWindowPortalHelpers").STREAM_REACQUISITION_TIMEOUT_MS);
						K.push(function() {
							window.clearTimeout(ne);
						}), q.current = Q, X("initial");
						try {
							i.document.hasFocus() || i.focus();
						} catch (e) {}
					}
				}
			}
		}), o("useWAWebListener").useListener(o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, "popoutUiReady", function() {
			var e = o("WAWebVoipPopoutWindowState").getPopoutWindow();
			if (!(e == null || !o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow())) try {
				var t = new e.Function(`
          if (!window._openerCheckActive) {
            window._openerCheckActive = true;
            var id = setInterval(function() {
              if (!window.opener || window.opener.closed) {
                clearInterval(id);
                window._openerCheckActive = false;
                window.close();
              }
            }, 1000);
          }
        `);
				t();
			} catch (e) {}
		}), o("useWAWebListener").useListener(o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, "closePopoutWindow", function(e) {
			var t, a, i = e.callEnded, l = e.surveyInteracted;
			if (o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
				"voip: popout close: closePopoutWindow fired callEnded=",
				" closeInProgress=",
				" reuseMode=",
				" hasPopoutEl=",
				""
			])), String(i), String(V.current), String(H.current), String(n != null)), i && o("WAWebVoipPopoutWindowState").resetCameraStreamReacquisitions(), V.current) {
				o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: skipped — close already in progress"])));
				return;
			}
			var s = (t = o("WAWebVoipPopoutWindowState").getPopoutWindow()) != null ? t : n;
			if (!i && n != null && !n.closed) try {
				var u;
				(u = n.open("#", o("WAWebVoipPopoutWindowState").MAIN_WINDOW_NAME)) == null || u.focus();
			} catch (e) {}
			V.current = !0, i || o("WAWebVoipPopoutWindowState").setIsCallActiveInPopoutWindow(!1);
			var c = r("WAWebCallCollection").activeCall, d = (a = F != null ? o("WAWebMsgGetters").getCallId(F) : null) != null ? a : c == null ? void 0 : c.id, m = function() {
				var e;
				if (o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow()) return null;
				var t = r("WAWebCallCollection").activeCall;
				return t == null || d != null && t.id !== d || d == null && t !== c ? null : { currentDeviceId: (e = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice()) != null ? e : o("WAWebUserPrefsVoip").getSelectedAudioInputDevice() };
			}, p = o("WAWebVoipUiPopoutWindowPortalHelpers").getStreamsFromPopout(), _ = U.current, f = _ != null && (s == null || _.popoutWindow === s) ? _ : null;
			if (!i && (p.length > 0 || f != null)) {
				var g = p.some(function(e) {
					return e.type === "desktop";
				});
				if (g) {
					var h = async function() {
						var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
						(e == null ? void 0 : e.type) === "web" && await e.stopScreenShare();
					};
					h();
				}
				if ((p.some(function(e) {
					return e.type === "camera";
				}) || f != null) && !H.current) {
					var y = o("WAWebVoipPopoutWindowState").beginCameraStreamReacquisition(), T = function() {
						return window.setTimeout(function() {
							o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: reacquisition flag guard fired, clearing"]))), y();
						}, w);
					}, D = T(), x = async function() {
						try {
							if (window.clearTimeout(D), D = T(), f != null) {
								var e = null, t = await Promise.race([f.promise.then(o("WAWebBoolFunc").returnTrue, function(e) {
									return !0;
								}), new Promise(function(t) {
									e = window.setTimeout(function() {
										return t(!1);
									}, A);
								})]);
								e != null && window.clearTimeout(e), t || o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: pending camera re-acquisition wait timed out"]))), window.clearTimeout(D), D = T();
							}
							var n = m();
							if (n == null) return;
							var r = await o("WAWebVoipStackInterface").getVoipStackInterface(), a = m();
							if (a == null) return;
							r != null && r.type === "web" && (o("WAWebVoipPopoutWindowState").setPopoutWindow(null), await o("WAWebVoipUiPopoutWindowPortalHelpers").reacquireCameraInTargetWindow(window, d));
						} catch (e) {} finally {
							window.clearTimeout(D), y();
						}
					};
					if (document.hasFocus()) x();
					else {
						var $ = 1e4, P = function() {
							window.clearTimeout(N), window.removeEventListener("focus", P), x();
						}, N = window.setTimeout(function() {
							window.removeEventListener("focus", P), o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: video focus timeout, attempting stream swap"]))), x();
						}, $);
						window.addEventListener("focus", P), window.focus();
					}
				}
			}
			if (!i && H.current) {
				var M = o("WAWebVoipPopoutWindowState").beginCameraStreamReacquisition(), O = window.setTimeout(function() {
					M();
				}, w), B = async function() {
					try {
						if (m() == null) return;
						o("WAWebVoipPopoutWindowState").setPopoutWindow(null), o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: reuse swap-back to main"]))), await o("WAWebVoipUiPopoutWindowPortalHelpers").reacquireCameraInTargetWindow(window, d);
					} catch (e) {
						o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: reuse swap-back failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-popout-reuse-swap-back-failed");
					} finally {
						window.clearTimeout(O), M();
					}
				};
				B();
			}
			if (!i && !H.current) {
				var W = m();
				if ((W == null ? void 0 : W.currentDeviceId) != null) {
					o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: setting up audio re-acquisition"])));
					var q = function() {
						var e = m();
						e != null && e.currentDeviceId != null && o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("requestAudioReacquisition", {
							deviceId: e.currentDeviceId,
							targetWindow: window
						});
					};
					if (document.hasFocus()) q();
					else {
						var G = 1e4, z = function() {
							window.clearTimeout(j), window.removeEventListener("focus", z), o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: main window focused, re-acquiring audio"]))), q();
						}, j = window.setTimeout(function() {
							window.removeEventListener("focus", z);
						}, G);
						window.addEventListener("focus", z), window.focus();
					}
				}
			}
			var Q = i && !l;
			K(Q ? o("WAWebVoipUiPopoutWindowPortalHelpers").POPOUT_WINDOW_CALL_END_CLOSE_DELAY_MS : 0);
		});
		var Q = $(function() {
			return {
				isContextInPopoutWindow: !0,
				popoverPortalEl: l == null ? void 0 : l.getElementById(M),
				documentEl: l,
				windowEl: n,
				isDocPip: !1
			};
		}, [l, n]);
		return F ? D.jsx(r("WAWebVoipUiPopoutWindowContext").Provider, {
			value: Q,
			children: D.jsx(o("WAWebVoipUiPopoutWindowLoadable").WAWebVoipUiPopoutWindowLoadable, {
				callLogMsg: F,
				popoutWindow: n,
				onWindowReady: function(t) {
					return T(t.document);
				}
			})
		}) : null;
	}
	F.displayName = F.name + " [from " + i.id + "]", l.VOIP_POPOUT_POPOVER_PORTAL_ID = M, l.MAIN_WINDOW_NAME = o("WAWebVoipPopoutWindowState").MAIN_WINDOW_NAME, l.WAWebVoipUiPopoutWindowEventEmitter = o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, l.getIsCallActiveInPopoutWindow = o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow, l.getIsPopoutWindowActiveAndVisible = o("WAWebVoipPopoutWindowState").getIsPopoutWindowActiveAndVisible, l.getIsPopoutUiReady = o("WAWebVoipPopoutWindowState").getIsPopoutUiReady, l.getIsPopoutWindowOpening = o("WAWebVoipPopoutWindowState").getIsPopoutWindowOpening, l.getPopoutWindow = o("WAWebVoipPopoutWindowState").getPopoutWindow, l.isPopoutWindowAlive = o("WAWebVoipPopoutWindowState").isPopoutWindowAlive, l.setIsPopoutWindowOpening = o("WAWebVoipPopoutWindowState").setIsPopoutWindowOpening, l.setMediaStream = o("WAWebVoipUiPopoutWindowPortalHelpers").setMediaStream, l.WAWebVoipUiPopoutWindowPortalContainer = F;
}), 98);
