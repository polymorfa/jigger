__d("WAWebVoipUiPopoutWindowPortalContainer.react", [
	"Promise",
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
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"useWAWebListener",
	"useWAWebStableCallback",
	"useWAWebTimeout",
	"useWAWebVoipCallCleanupOnUnload"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x = D || (D = o("react")), $ = D, P = $.useMemo, N = $.useRef, M = $.useState, w = "wa-web-voip-popover-portal", A = 15e3, F = 5e3;
	function O() {
		r("useWAWebVoipCallCleanupOnUnload")();
		var t = M(null), a = t[0], i = t[1], l = M(null), D = l[0], $ = l[1], O = M(null), B = O[0], W = O[1], q = r("useWAWebStableCallback")(function() {
			var e = o("WAWebVoipPopoutWindowState").getPopoutWindow();
			if (e) {
				var t = e.document.visibilityState;
				o("WAWebVoipActivityTracker").trackUiActivity(t === "hidden" ? o("WAWebVoipActivityTracker").VoipUiActivity.TAB_VISIBILITY_HIDDEN : o("WAWebVoipActivityTracker").VoipUiActivity.TAB_VISIBILITY_VISIBLE), o("WAWebVelocityBackgroundTimer").toggleSmoothBackgroundAnimations(t === "visible"), o("WAWebVoipUiPopoutWindowPortalHelpers").emitPopoutWindowVisibilityChanged(t);
			}
		}), U = N(null), V = N(null), H = N(null), G = N(!1), z = N(!1), j = r("useWAWebStableCallback")(function() {
			U.current != null && (window.clearInterval(U.current), U.current = null);
		}), K = r("useWAWebStableCallback")(function() {
			V.current != null && (V.current(), V.current = null);
		}), Q = o("useWAWebTimeout").useManualTimeout(function() {
			j(), K();
			var t = o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow();
			o("WAWebVoipPopoutWindowState").setIsCallActiveInPopoutWindow(!1), o("WAWebVoipPopoutWindowState").setPopoutWindow(null), t && r("WAWebCallCollection").lastActiveCall != null && r("WAWebCallCollection").lastActiveCall.shouldShowPostCallSurvey === !0 && r("WAWebCallCollection").lastActiveCall.postCallSurveyInteracted !== !0 && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: clearing stale post-call survey state"]))), r("WAWebCallCollection").lastActiveCall.shouldShowPostCallSurvey = !1), t && o("WAWebVoipUiPopoutWindowPortalHelpers").emitPopoutWindowVisibilityChanged("hidden"), o("WAWebVelocityBackgroundTimer").toggleSmoothBackgroundAnimations(!1), a == null || a.removeEventListener("visibilitychange", q), a == null || a.close(), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("setPopoutWindowProps", {
				callLogMsg: null,
				popoutWindow: null
			});
		}), X = Q[0];
		o("useWAWebListener").useListener(o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", function(e) {
			var t, a = e.callLogMsg, l = e.popoutWindow;
			o("WAWebVoipPopoutWindowState").resetPopoutUiReady(), a != null && (G.current = !1);
			var C = o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow();
			if (W(a), i(l), a != null && !C ? o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_MOVE_TO_POPOUT) : a == null && C && o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_MOVE_FROM_POPOUT), o("WAWebVoipPopoutWindowState").setIsCallActiveInPopoutWindow(a != null), o("WAWebVoipFocusTracker").notifyWindowModeChanged(a != null ? "popout" : "main"), o("WAWebVoipPopoutWindowState").setPopoutWindow(a != null ? l : null), o("WAWebVelocityBackgroundTimer").toggleSmoothBackgroundAnimations(a != null), (t = o("WAWebVoipPopoutWindowState").getPopoutWindow()) == null || t.addEventListener("visibilitychange", q), a == null && (o("WAWebVoipUiPopoutWindowPortalHelpers").clearActiveStreams(), j(), K()), a != null && o("WAWebUA").UA.isSafari && l != null && (j(), U.current = window.setInterval(function() {
				try {
					l.closed && (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: Safari popout close polling: detected window closed"]))), j(), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", { callEnded: !1 }));
				} catch (e) {
					o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: Safari popout poll: window inaccessible: ", ""])), String(e)), j(), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", { callEnded: !1 });
				}
			}, o("WAWebVoipUiPopoutWindowPortalHelpers").SAFARI_POPOUT_CLOSE_POLL_INTERVAL_MS)), a != null && l != null) {
				var b, v = r("WAWebCallCollection").activeCall, S = (b = v == null ? void 0 : v.id) != null ? b : o("WAWebMsgGetters").getCallId(a), R = o("WAWebVoipVideoStateUtils").isVideoEnabled(v == null ? void 0 : v.selfVideoState), L = o("WAWebVoipGatingUtils").isPopoutReuseCaptureEnabled();
				if (z.current = L, L && v != null && R) {
					var E = !1, k = function() {
						E || o("WAWebVoipPopoutWindowState").getPopoutWindow() !== l || !o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow() || (E = !0, o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: popout open: camera reuse-repump into popout"]))), o("WAWebVoipUiPopoutWindowPortalHelpers").reacquireCameraReusingStreamForPopout(S));
					};
					if (o("WAWebVoipPopoutWindowState").getIsPopoutUiReady()) k();
					else {
						var I = [], T = function() {
							I.forEach(function(e) {
								return e();
							}), I.length = 0, V.current === T && (V.current = null);
						}, D = function() {
							T(), k();
						};
						o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("popoutUiReady", D), I.push(function() {
							o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.off("popoutUiReady", D);
						});
						var x = window.setTimeout(function() {
							T(), k();
						}, o("WAWebVoipUiPopoutWindowPortalHelpers").STREAM_REACQUISITION_TIMEOUT_MS);
						I.push(function() {
							window.clearTimeout(x);
						}), V.current == null || V.current(), V.current = T;
					}
				}
				if (!L) {
					var $, P = ($ = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice()) != null ? $ : o("WAWebUserPrefsVoip").getSelectedAudioInputDevice(), N = function() {
						var e;
						if (o("WAWebVoipPopoutWindowState").getPopoutWindow() !== l || !o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow()) return null;
						var t = r("WAWebCallCollection").activeCall;
						return t == null || t !== v && (S == null || t.id !== S) ? null : {
							currentDeviceId: (e = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice()) != null ? e : o("WAWebUserPrefsVoip").getSelectedAudioInputDevice(),
							isVideoEnabled: o("WAWebVoipVideoStateUtils").isVideoEnabled(t.selfVideoState)
						};
					}, M = function() {
						var e = N();
						return e == null || !e.isVideoEnabled && e.currentDeviceId == null ? null : e;
					};
					if (v != null && (R || P != null)) {
						o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: popout open: setting up stream re-acquisition"])));
						var w = (function() {
							var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
								var e = o("WAWebVoipPopoutWindowState").beginCameraStreamReacquisition(), t = window.setTimeout(function() {
									o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: popout open: reacquisition guard fired, clearing"]))), e();
								}, A);
								try {
									var n = M();
									if (n == null) return;
									var a = yield o("WAWebVoipStackInterface").getVoipStackInterface();
									if (n = M(), n == null || a == null || a.type !== "web" || (yield o("WAWebVoipUiPopoutWindowPortalHelpers").primeSafariMediaPermissions(l, n.isVideoEnabled, n.currentDeviceId != null), n = M(), n == null)) return;
									if (n.isVideoEnabled) {
										var i = {
											popoutWindow: l,
											promise: o("WAWebVoipUiPopoutWindowPortalHelpers").reacquireCameraInTargetWindow(l, S)
										};
										H.current = i;
										try {
											yield i.promise;
										} finally {
											H.current === i && (H.current = null);
										}
									}
									if (n = M(), n == null) return;
									n.currentDeviceId != null && o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("requestAudioReacquisition", {
										deviceId: n.currentDeviceId,
										targetWindow: l
									}), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: popout open: stream re-acquisition initiated"])));
								} catch (e) {
									o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: popout open: stream re-acquisition failed"]))).catching(r("getErrorSafe")(e));
								} finally {
									window.clearTimeout(t), e();
								}
							});
							return function() {
								return e.apply(this, arguments);
							};
						})(), F = !1, O = !1, B = !o("WAWebUA").UA.isSafari || o("WAWebVoipPopoutWindowState").getIsPopoutUiReady(), Q = [], X = function() {
							Q.forEach(function(e) {
								e();
							}), Q.length = 0, V.current === X && (V.current = null);
						}, Y = function(t) {
							if (!F) {
								var e = !1, n = O, a = !1, i;
								try {
									var s = l.document;
									e = s.visibilityState === "visible" && !s.hidden, n = n || s.hasFocus(), a = s.documentElement != null && s.body != null, o("WAWebUA").UA.isSafari ? i = l.location.origin === window.location.origin : i = !0;
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
								])), t, String(a), String(e), String(n), String(B), String(i)), !(!a || !e || !n || !B || !i)) {
									var u = M();
									if (u == null) {
										F = !0, X();
										return;
									}
									F = !0, X(), o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [Popout] reacquisition_triggered reason=", ""])), t), w();
								}
							}
						}, J = function() {
							Y("load");
						};
						l.addEventListener("load", J), Q.push(function() {
							l.removeEventListener("load", J);
						});
						var Z = function() {
							O = !0, Y("focus");
						};
						l.addEventListener("focus", Z), Q.push(function() {
							l.removeEventListener("focus", Z);
						});
						var ee = function() {
							Y("visibilitychange");
						};
						try {
							l.document.addEventListener("visibilitychange", ee), Q.push(function() {
								try {
									l.document.removeEventListener("visibilitychange", ee);
								} catch (e) {}
							});
						} catch (e) {}
						var te = function() {
							B = !0, Y("ui_ready");
						};
						o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("popoutUiReady", te), Q.push(function() {
							o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.off("popoutUiReady", te);
						});
						var ne = window.setInterval(function() {
							Y("poll");
						}, o("WAWebVoipUiPopoutWindowPortalHelpers").STREAM_REACQUISITION_POLL_INTERVAL_MS);
						Q.push(function() {
							window.clearInterval(ne);
						});
						var re = window.setTimeout(function() {
							var e = "unknown";
							try {
								var t = l.document;
								e = "shell=" + String(t.documentElement != null && t.body != null) + " visible=" + t.visibilityState + " focused=" + String(t.hasFocus()) + " ready=" + t.readyState;
							} catch (t) {
								e = "inaccessible";
							}
							o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: [Popout] reacquisition_timeout ", ""])), e), B = !0, o("WAWebVoipPopoutWindowState").markPopoutUiReady(), Y("timeout"), X();
						}, o("WAWebVoipUiPopoutWindowPortalHelpers").STREAM_REACQUISITION_TIMEOUT_MS);
						Q.push(function() {
							window.clearTimeout(re);
						}), V.current = X, Y("initial");
						try {
							l.document.hasFocus() || l.focus();
						} catch (e) {}
					}
				}
			}
		}), o("useWAWebListener").useListener(o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, "popoutUiReady", function() {
			var e = o("WAWebVoipPopoutWindowState").getPopoutWindow();
			if (!(e == null || !o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow())) try {
				var t = new e.Function("\n          if (!window._openerCheckActive) {\n            window._openerCheckActive = true;\n            var id = setInterval(function() {\n              if (!window.opener || window.opener.closed) {\n                clearInterval(id);\n                window._openerCheckActive = false;\n                window.close();\n              }\n            }, 1000);\n          }\n        ");
				t();
			} catch (e) {}
		}), o("useWAWebListener").useListener(o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, "closePopoutWindow", function(e) {
			var t, i, l = e.callEnded, s = e.surveyInteracted;
			if (o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
				"voip: popout close: closePopoutWindow fired callEnded=",
				" closeInProgress=",
				" reuseMode=",
				" hasPopoutEl=",
				""
			])), String(l), String(G.current), String(z.current), String(a != null)), l && o("WAWebVoipPopoutWindowState").resetCameraStreamReacquisitions(), G.current) {
				o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: skipped — close already in progress"])));
				return;
			}
			var u = (t = o("WAWebVoipPopoutWindowState").getPopoutWindow()) != null ? t : a;
			if (!l && a != null && !a.closed) try {
				var c;
				(c = a.open("#", o("WAWebVoipPopoutWindowState").MAIN_WINDOW_NAME)) == null || c.focus();
			} catch (e) {}
			G.current = !0, l || o("WAWebVoipPopoutWindowState").setIsCallActiveInPopoutWindow(!1);
			var d = r("WAWebCallCollection").activeCall, m = (i = B != null ? o("WAWebMsgGetters").getCallId(B) : null) != null ? i : d == null ? void 0 : d.id, p = function() {
				var e;
				if (o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow()) return null;
				var t = r("WAWebCallCollection").activeCall;
				return t == null || m != null && t.id !== m || m == null && t !== d ? null : { currentDeviceId: (e = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice()) != null ? e : o("WAWebUserPrefsVoip").getSelectedAudioInputDevice() };
			}, _ = o("WAWebVoipUiPopoutWindowPortalHelpers").getStreamsFromPopout(), f = H.current, g = f != null && (u == null || f.popoutWindow === u) ? f : null;
			if (!l && (_.length > 0 || g != null)) {
				var h = _.some(function(e) {
					return e.type === "desktop";
				});
				if (h) {
					var y = (function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
							(e == null ? void 0 : e.type) === "web" && (yield e.stopScreenShare());
						});
						return function() {
							return e.apply(this, arguments);
						};
					})();
					y();
				}
				if ((_.some(function(e) {
					return e.type === "camera";
				}) || g != null) && !z.current) {
					var D = o("WAWebVoipPopoutWindowState").beginCameraStreamReacquisition(), x = function() {
						return window.setTimeout(function() {
							o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: reacquisition flag guard fired, clearing"]))), D();
						}, A);
					}, $ = x(), P = (function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							try {
								if (window.clearTimeout($), $ = x(), g != null) {
									var e = null, t = yield (T || (T = n("Promise"))).race([g.promise.then(o("WAWebBoolFunc").returnTrue, function(e) {
										return !0;
									}), new T(function(t) {
										e = window.setTimeout(function() {
											return t(!1);
										}, F);
									})]);
									e != null && window.clearTimeout(e), t || o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: pending camera re-acquisition wait timed out"]))), window.clearTimeout($), $ = x();
								}
								var r = p();
								if (r == null) return;
								var a = yield o("WAWebVoipStackInterface").getVoipStackInterface(), i = p();
								if (i == null) return;
								a != null && a.type === "web" && (o("WAWebVoipPopoutWindowState").setPopoutWindow(null), yield o("WAWebVoipUiPopoutWindowPortalHelpers").reacquireCameraInTargetWindow(window, m));
							} catch (e) {} finally {
								window.clearTimeout($), D();
							}
						});
						return function() {
							return e.apply(this, arguments);
						};
					})();
					if (document.hasFocus()) P();
					else {
						var N = 1e4, M = function() {
							window.clearTimeout(w), window.removeEventListener("focus", M), P();
						}, w = window.setTimeout(function() {
							window.removeEventListener("focus", M), o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: video focus timeout, attempting stream swap"]))), P();
						}, N);
						window.addEventListener("focus", M), window.focus();
					}
				}
			}
			if (!l && z.current) {
				var O = o("WAWebVoipPopoutWindowState").beginCameraStreamReacquisition(), W = window.setTimeout(function() {
					O();
				}, A), q = (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						try {
							if (p() == null) return;
							o("WAWebVoipPopoutWindowState").setPopoutWindow(null), o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: reuse swap-back to main"]))), yield o("WAWebVoipUiPopoutWindowPortalHelpers").reacquireCameraInTargetWindow(window, m);
						} catch (e) {
							o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: reuse swap-back failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-popout-reuse-swap-back-failed");
						} finally {
							window.clearTimeout(W), O();
						}
					});
					return function() {
						return e.apply(this, arguments);
					};
				})();
				q();
			}
			if (!l && !z.current) {
				var U = p();
				if ((U == null ? void 0 : U.currentDeviceId) != null) {
					o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: setting up audio re-acquisition"])));
					var V = function() {
						var e = p();
						e != null && e.currentDeviceId != null && o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("requestAudioReacquisition", {
							deviceId: e.currentDeviceId,
							targetWindow: window
						});
					};
					if (document.hasFocus()) V();
					else {
						var j = 1e4, K = function() {
							window.clearTimeout(Q), window.removeEventListener("focus", K), o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["voip: popout close: main window focused, re-acquiring audio"]))), V();
						}, Q = window.setTimeout(function() {
							window.removeEventListener("focus", K);
						}, j);
						window.addEventListener("focus", K), window.focus();
					}
				}
			}
			var Y = l && !s;
			X(Y ? o("WAWebVoipUiPopoutWindowPortalHelpers").POPOUT_WINDOW_CALL_END_CLOSE_DELAY_MS : 0);
		});
		var Y = P(function() {
			return {
				isContextInPopoutWindow: !0,
				popoverPortalEl: D == null ? void 0 : D.getElementById(w),
				documentEl: D,
				windowEl: a,
				isDocPip: !1
			};
		}, [D, a]);
		return B ? x.jsx(r("WAWebVoipUiPopoutWindowContext").Provider, {
			value: Y,
			children: x.jsx(o("WAWebVoipUiPopoutWindowLoadable").WAWebVoipUiPopoutWindowLoadable, {
				callLogMsg: B,
				popoutWindow: a,
				onWindowReady: function(t) {
					return $(t.document);
				}
			})
		}) : null;
	}
	O.displayName = O.name + " [from " + i.id + "]", l.VOIP_POPOUT_POPOVER_PORTAL_ID = w, l.MAIN_WINDOW_NAME = o("WAWebVoipPopoutWindowState").MAIN_WINDOW_NAME, l.WAWebVoipUiPopoutWindowEventEmitter = o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, l.getIsCallActiveInPopoutWindow = o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow, l.getIsPopoutWindowActiveAndVisible = o("WAWebVoipPopoutWindowState").getIsPopoutWindowActiveAndVisible, l.getIsPopoutUiReady = o("WAWebVoipPopoutWindowState").getIsPopoutUiReady, l.getIsPopoutWindowOpening = o("WAWebVoipPopoutWindowState").getIsPopoutWindowOpening, l.getPopoutWindow = o("WAWebVoipPopoutWindowState").getPopoutWindow, l.isPopoutWindowAlive = o("WAWebVoipPopoutWindowState").isPopoutWindowAlive, l.setIsPopoutWindowOpening = o("WAWebVoipPopoutWindowState").setIsPopoutWindowOpening, l.setMediaStream = o("WAWebVoipUiPopoutWindowPortalHelpers").setMediaStream, l.WAWebVoipUiPopoutWindowPortalContainer = O;
}), 98);
