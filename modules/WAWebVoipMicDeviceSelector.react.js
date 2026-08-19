__d("WAWebVoipMicDeviceSelector.react", [
	"fbt",
	"WALogger",
	"WAWebAudioDeviceManager",
	"WAWebDebounce",
	"WAWebGuidePopup.react",
	"WAWebNoop",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUA",
	"WAWebUserPrefsVoip",
	"WAWebVoipActivityTracker",
	"WAWebVoipAudioCaptureAndPlayback",
	"WAWebVoipSplitButton.react",
	"WAWebVoipUiPopoutWindowContext",
	"WDSIconIcKeyboardVoiceFilled.react",
	"WDSIconIcMicOffFilled.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSThemes",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe",
	"react",
	"stylex",
	"useWAWebStableCallback",
	"useWAWebUnmountSignal",
	"useWAWebVoipModalManager",
	"useWAWebVoipPermissionStatus",
	"useWAWebVoipWindowPopoutTooltipProps",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U, V = U || (U = o("react")), H = U, G = H.useCallback, z = H.useContext, j = H.useEffect, K = H.useRef, Q = H.useState;
	function X(t) {
		var a = t.isMuted, i = a === void 0 ? !1 : a, l = t.isPreviewMode, U = l === void 0 ? !1 : l, H = t.onMainClick, X = z(r("WAWebVoipUiPopoutWindowContext")), J = r("useWAWebVoipModalManager")(), Z = J.closeModal, ee = J.openModal, te = Q([]), ne = te[0], re = te[1], oe = Q([]), ae = oe[0], ie = oe[1], le = Q(null), se = le[0], ue = le[1], ce = Q(null), de = ce[0], me = ce[1], pe = Q(!1), _e = pe[0], fe = pe[1], ge = Q(!1), he = ge[0], ye = ge[1], Ce = K(null), be = K(null), ve = r("useWAWebUnmountSignal")(), Se = r("useWAWebVoipPermissionStatus")(!1), Re = Se.micPermission, Le = Re === "denied", Ee = r("useWAWebStableCallback")(H != null ? H : r("WAWebNoop")), ke = K(Re);
		j(function() {
			Le && !i && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] mic permission denied, auto-muting"]))), Ee());
		}, [
			Le,
			i,
			Ee
		]), j(function() {
			if (!(Re !== "granted" && Re !== "denied")) {
				var e = ke.current;
				if (ke.current = Re, Re === "denied" && e === "granted") {
					var t;
					ee(V.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
						messaging: t.Messaging.MIC_FAIL,
						type: t.GuidePopupType.GUIDE_UNBLOCK,
						featureSurface: t.FeatureSurface.VOIP_ACTIVE,
						onConfirm: Z
					}));
				}
			}
		}, [
			Re,
			ee,
			Z
		]);
		var Ie = G(function() {
			if (Le) {
				var e;
				ee(V.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: e.Messaging.MIC_FAIL,
					type: e.GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: e.FeatureSurface.VOIP_ACTIVE,
					onConfirm: Z
				}));
				return;
			}
			H == null || H();
		}, [
			Z,
			Le,
			H,
			ee
		]);
		j(function() {
			var e, t, a, i = X.windowEl, l = (e = i == null || (t = i.navigator) == null ? void 0 : t.mediaDevices) != null ? e : navigator.mediaDevices, s = o("WAWebUA").UA.isSafari && i != null, L = !U;
			function E() {
				return k.apply(this, arguments);
			}
			function k() {
				return k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						var e = yield o("WAWebAudioDeviceManager").getAvailableAudioDevices({
							isInActiveCall: L,
							skipPermissionRequest: s,
							targetWindow: i
						});
						re(e);
						var t = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice();
						t != null ? (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-select prev device: ", ""])), t), ue(t)) : o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] no device selected, pending"])));
						var n = yield o("WAWebAudioDeviceManager").getAvailableAudioOutputDevices(i, s);
						ie(n);
						var a = o("WAWebAudioDeviceManager").getCurrentSelectedAudioOutputDevice();
						a != null ? (o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-select prev speaker: ", ""])), a), me(a)) : n.length > 0 && de == null && me(n[0].deviceId);
						var l = e.map(function(e) {
							return e.label;
						}).join(", "), u = n.map(function(e) {
							return e.label;
						}).join(", ");
					} catch (e) {
						Y(e) || o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] error loading devices"]))).catching(r("getErrorSafe")(e)), re([]), ie([]);
					}
				}), k.apply(this, arguments);
			}
			function I() {
				var e = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice();
				e != null && ue(e);
			}
			function T() {
				return D.apply(this, arguments);
			}
			function D() {
				return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] device change, reloading"]))), ye(!0);
					var e = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice();
					try {
						var t = yield o("WAWebAudioDeviceManager").getAvailableAudioDevices({
							isInActiveCall: L,
							skipPermissionRequest: s,
							targetWindow: i
						});
						re(t);
						var n = yield o("WAWebAudioDeviceManager").getAvailableAudioOutputDevices(i, s);
						ie(n);
						var a = yield o("WAWebAudioDeviceManager").selectAudioDevice(i, s, L);
						if (U) a != null && (ue(a), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] preview: updated preferred mic: ", ""])), a));
						else if (a != null && a !== e && t.find(function(e) {
							return e.deviceId === a;
						})) {
							var l = !1;
							try {
								var u, c = yield (u = navigator.permissions) == null ? void 0 : u.query({ name: "microphone" });
								l = (c == null ? void 0 : c.state) === "denied";
							} catch (e) {}
							if (!l) {
								o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-switch to: ", ""])), a);
								try {
									var d = yield o("WAWebVoipAudioCaptureAndPlayback").switchAudioInputDevice(a, i);
									if (d) ue(a), o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-switched to: ", ""])), a);
									else if (o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-switch failed: ", ""])), a), e != null) {
										var m = yield o("WAWebVoipAudioCaptureAndPlayback").switchAudioInputDevice(e, i);
										m ? o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-reverted to: ", ""])), e) : (o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-revert failed: ", ""])), e), I());
									}
								} catch (e) {
									o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-switch error"]))).catching(r("getErrorSafe")(e)).sendLogs("voip: [MicDeviceSelector] auto-switch error"), I();
								}
							}
						}
						var p = t.map(function(e) {
							return e.label;
						}).join(", "), _ = n.map(function(e) {
							return e.label;
						}).join(", ");
					} catch (e) {
						Y(e) || o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] error reloading devices"]))).catching(r("getErrorSafe")(e)), re([]), ie([]);
					} finally {
						ye(!1);
					}
				}), D.apply(this, arguments);
			}
			E().catch(function(e) {
				return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] error in initial loadDevices"]))).catching(r("getErrorSafe")(e));
			});
			var x = r("WAWebDebounce")(T, 500);
			l && l.addEventListener("devicechange", x);
			var $ = (a = i == null ? void 0 : i.navigator) != null ? a : navigator;
			if ("permissions" in $) {
				var P = $.permissions;
				P && P.query({ name: "microphone" }).then(function(e) {
					be.current = e, e.addEventListener("change", x);
				}).catch(function(e) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] permissions API error"]))).catching(r("getErrorSafe")(e));
				});
			}
			return function() {
				x.cancel(), l && l.removeEventListener("devicechange", x), be.current && (be.current.removeEventListener("change", x), be.current = null);
			};
		}, [
			U,
			de,
			X.windowEl
		]), j(function() {
			var e = function(t) {
				var e, n, r = t[0], a = (e = (n = ne.find(function(e) {
					return e.deviceId === r;
				})) == null ? void 0 : n.label) != null ? e : "unknown";
				o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [MicDeviceSelector] mic selection changed: ",
					" (",
					")"
				])), a, r), ue(r);
			}, t = function(t) {
				var e, n, r = t[0], a = (e = (n = ae.find(function(e) {
					return e.deviceId === r;
				})) == null ? void 0 : n.label) != null ? e : "unknown";
				o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [MicDeviceSelector] speaker changed: ",
					" (",
					")"
				])), a, r), me(r);
			};
			return o("WAWebAudioDeviceManager").AudioDeviceEvents.on("deviceSelectionChanged", e), o("WAWebAudioDeviceManager").AudioDeviceEvents.on("speakerDeviceSelectionChanged", t), function() {
				o("WAWebAudioDeviceManager").AudioDeviceEvents.off("deviceSelectionChanged", e), o("WAWebAudioDeviceManager").AudioDeviceEvents.off("speakerDeviceSelectionChanged", t);
			};
		}, [ne, ae]);
		var Te = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t, n;
				if (e === se) {
					o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] skip, already selected: ", ""])), e);
					return;
				}
				if (_e || he) {
					o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] skip, change in progress"])));
					return;
				}
				var a = (t = (n = ne.find(function(t) {
					return t.deviceId === e;
				})) == null ? void 0 : n.label) != null ? t : "unknown";
				if (o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [MicDeviceSelector] changing device to: ",
					" (",
					")"
				])), a, e), fe(!0), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_SWITCH_MIC_DEVICE), U) {
					ue(e), o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e), o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [MicDeviceSelector] preview: saved mic: ",
						" (",
						")"
					])), a, e), fe(!1);
					return;
				}
				var i = X.windowEl;
				try {
					var l = yield o("WAWebVoipAudioCaptureAndPlayback").switchAudioInputDevice(e, i);
					if (l) ue(e), o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [MicDeviceSelector] switched to: ",
						" (",
						")"
					])), a, e);
					else throw o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] failed to switch device: ", ""])), e), r("err")("Failed to switch audio device");
				} catch (e) {
					o("WALogger").ERROR(P || (P = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] error switching device"]))).catching(r("getErrorSafe")(e)), o("WAWebToastManager").ToastManager.open(V.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				} finally {
					fe(!1);
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), De = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t, n;
				if (e === de) {
					o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] skip, speaker selected: ", ""])), e);
					return;
				}
				if (_e || he) {
					o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] skip, speaker change pending"])));
					return;
				}
				var a = (t = (n = ae.find(function(t) {
					return t.deviceId === e;
				})) == null ? void 0 : n.label) != null ? t : "unknown";
				if (o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [MicDeviceSelector] changing speaker device to: ",
					" (",
					")"
				])), a, e), fe(!0), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_SWITCH_SPEAKER_DEVICE), U) {
					me(e), o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e), o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [MicDeviceSelector] preview: saved speaker: ",
						" (",
						")"
					])), a, e), fe(!1);
					return;
				}
				try {
					var i = yield o("WAWebVoipAudioCaptureAndPlayback").switchAudioOutputDevice(e);
					if (i) me(e), o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [MicDeviceSelector] speaker switched: ",
						" (",
						")"
					])), a, e);
					else throw o("WALogger").ERROR(O || (O = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] failed to switch speaker device: ", ""])), e), r("err")("Failed to switch speaker device");
				} catch (e) {
					o("WALogger").ERROR(B || (B = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] error switching speaker device"]))).catching(r("getErrorSafe")(e)), o("WAWebToastManager").ToastManager.open(V.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				} finally {
					fe(!1);
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), xe = r("useWAWebStableCallback")(function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_OPEN_MIC_DROPDOWN);
			var e = X.windowEl, t = o("WAWebUA").UA.isSafari && e != null, a = !U;
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var n = yield o("WAWebAudioDeviceManager").getAvailableAudioDevices({
						allowPermissionPrompt: !Le,
						isInActiveCall: a,
						skipPermissionRequest: t,
						targetWindow: e
					});
					if (ve.aborted) return;
					re(n);
					var i = yield o("WAWebAudioDeviceManager").getAvailableAudioOutputDevices(e, t);
					if (ve.aborted) return;
					ie(i);
				} catch (e) {
					Y(e) || o("WALogger").ERROR(W || (W = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] load devices err on open"]))).catching(r("getErrorSafe")(e)).sendLogs("voip: [MicDeviceSelector] error loading devices on dropdown open");
				}
			})();
		}), $e = r("useWAWebVoipWindowPopoutTooltipProps")(), Pe = $e.tooltipAnchorRef, Ne = $e.tooltipOwnerDocument, Me = V.jsx("div", babelHelpers.extends({}, (q || (q = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), { children: V.jsxs(r("WDSMenu.react"), {
			minWidth: 280,
			maxHeight: 160,
			children: [
				V.jsx(r("WDSMenuItem.react"), {
					type: "groupHeader",
					title: s._(
						/*BTDS*/
						""
					)
				}),
				ne.length === 0 ? V.jsx(r("WDSMenuItem.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					disabled: !0
				}) : ne.map(function(e) {
					return V.jsx(r("WDSMenuItem.react"), {
						title: e.label,
						isToggleable: !0,
						toggled: e.deviceId === se,
						onPress: function() {
							Te(e.deviceId);
						},
						testid: "mic-device-" + e.deviceId
					}, e.deviceId);
				}),
				V.jsx(r("WDSMenuItem.react"), { type: "separator" }),
				V.jsx(r("WDSMenuItem.react"), {
					type: "groupHeader",
					title: s._(
						/*BTDS*/
						""
					)
				}),
				ae.length === 0 ? V.jsx(r("WDSMenuItem.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					disabled: !0
				}) : ae.map(function(e) {
					return V.jsx(r("WDSMenuItem.react"), {
						title: e.label,
						isToggleable: !0,
						toggled: e.deviceId === de,
						onPress: function() {
							De(e.deviceId);
						},
						testid: "speaker-device-" + e.deviceId
					}, e.deviceId);
				})
			]
		}) })), we = r("useWDSMenu")({
			targetRef: Ce,
			menu: Me,
			position: "above",
			align: "end",
			onOpen: xe,
			onClose: function() {
				var e;
				(e = Ce.current) == null || e.focus();
			},
			ownerDocument: Ne
		}), Ae = we.closeMenu, Fe = we.isMenuOpen, Oe = we.menuPortal, Be = we.openMenu, We = function() {
			Fe ? Ae() : Be();
		}, qe = (function() {
			return Le ? s._(
				/*BTDS*/
				""
			) : i ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		})();
		return V.jsxs("div", { children: [V.jsx(r("WAWebVoipSplitButton.react"), {
			Icon: r(i ? "WDSIconIcMicOffFilled.react" : "WDSIconIcKeyboardVoiceFilled.react"),
			isMuted: i,
			onMainClick: H != null ? Ie : We,
			onDropdownClick: We,
			dropdownRef: Ce,
			testId: "mic-split-button",
			disabled: _e || he,
			tooltipOwnerAnchorRef: Pe,
			tooltipOwnerDocument: Ne,
			mainButtonLabel: qe,
			mainButtonTestId: i ? "mic-unmute" : "mic-mute",
			dropdownButtonLabel: s._(
				/*BTDS*/
				""
			),
			dropdownButtonTestId: "audio-settings"
		}), Oe] });
	}
	X.displayName = X.name + " [from " + i.id + "]";
	function Y(e) {
		return e instanceof Error && e.name.includes("NotAllowed");
	}
	l.default = X;
}), 226);
