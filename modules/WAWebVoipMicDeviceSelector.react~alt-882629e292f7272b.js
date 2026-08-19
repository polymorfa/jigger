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
		var n = t.isMuted, a = n === void 0 ? !1 : n, i = t.isPreviewMode, l = i === void 0 ? !1 : i, U = t.onMainClick, H = z(r("WAWebVoipUiPopoutWindowContext")), X = r("useWAWebVoipModalManager")(), J = X.closeModal, Z = X.openModal, ee = Q([]), te = ee[0], ne = ee[1], re = Q([]), oe = re[0], ae = re[1], ie = Q(null), le = ie[0], se = ie[1], ue = Q(null), ce = ue[0], de = ue[1], me = Q(!1), pe = me[0], _e = me[1], fe = Q(!1), ge = fe[0], he = fe[1], ye = K(null), Ce = K(null), be = r("useWAWebUnmountSignal")(), ve = r("useWAWebVoipPermissionStatus")(!1), Se = ve.micPermission, Re = Se === "denied", Le = r("useWAWebStableCallback")(U != null ? U : r("WAWebNoop")), Ee = K(Se);
		j(function() {
			Re && !a && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] mic permission denied, auto-muting"]))), Le());
		}, [
			Re,
			a,
			Le
		]), j(function() {
			if (!(Se !== "granted" && Se !== "denied")) {
				var e = Ee.current;
				if (Ee.current = Se, Se === "denied" && e === "granted") {
					var t;
					Z(V.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
						messaging: t.Messaging.MIC_FAIL,
						type: t.GuidePopupType.GUIDE_UNBLOCK,
						featureSurface: t.FeatureSurface.VOIP_ACTIVE,
						onConfirm: J
					}));
				}
			}
		}, [
			Se,
			Z,
			J
		]);
		var ke = G(function() {
			if (Re) {
				var e;
				Z(V.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: e.Messaging.MIC_FAIL,
					type: e.GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: e.FeatureSurface.VOIP_ACTIVE,
					onConfirm: J
				}));
				return;
			}
			U == null || U();
		}, [
			J,
			Re,
			U,
			Z
		]);
		j(function() {
			var e, t, n, a = H.windowEl, i = (e = a == null || (t = a.navigator) == null ? void 0 : t.mediaDevices) != null ? e : navigator.mediaDevices, s = o("WAWebUA").UA.isSafari && a != null, L = !l;
			async function E() {
				try {
					var e = await o("WAWebAudioDeviceManager").getAvailableAudioDevices({
						isInActiveCall: L,
						skipPermissionRequest: s,
						targetWindow: a
					});
					ne(e);
					var t = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice();
					t != null ? (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-select prev device: ", ""])), t), se(t)) : o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] no device selected, pending"])));
					var n = await o("WAWebAudioDeviceManager").getAvailableAudioOutputDevices(a, s);
					ae(n);
					var i = o("WAWebAudioDeviceManager").getCurrentSelectedAudioOutputDevice();
					i != null ? (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-select prev speaker: ", ""])), i), de(i)) : n.length > 0 && ce == null && de(n[0].deviceId);
					var l = e.map(function(e) {
						return e.label;
					}).join(", "), p = n.map(function(e) {
						return e.label;
					}).join(", ");
				} catch (e) {
					Y(e) || o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] error loading devices"]))).catching(r("getErrorSafe")(e)), ne([]), ae([]);
				}
			}
			function k() {
				var e = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice();
				e != null && se(e);
			}
			async function I() {
				o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] device change, reloading"]))), he(!0);
				var e = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice();
				try {
					var t = await o("WAWebAudioDeviceManager").getAvailableAudioDevices({
						isInActiveCall: L,
						skipPermissionRequest: s,
						targetWindow: a
					});
					ne(t);
					var n = await o("WAWebAudioDeviceManager").getAvailableAudioOutputDevices(a, s);
					ae(n);
					var i = await o("WAWebAudioDeviceManager").selectAudioDevice(a, s, L);
					if (l) i != null && (se(i), o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] preview: updated preferred mic: ", ""])), i));
					else if (i != null && i !== e && t.find(function(e) {
						return e.deviceId === i;
					})) {
						var u = !1;
						try {
							var c, d = await ((c = navigator.permissions) == null ? void 0 : c.query({ name: "microphone" }));
							u = (d == null ? void 0 : d.state) === "denied";
						} catch (e) {}
						if (!u) {
							o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-switch to: ", ""])), i);
							try {
								var m = await o("WAWebVoipAudioCaptureAndPlayback").switchAudioInputDevice(i, a);
								if (m) se(i), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-switched to: ", ""])), i);
								else if (o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-switch failed: ", ""])), i), e != null) {
									var S = await o("WAWebVoipAudioCaptureAndPlayback").switchAudioInputDevice(e, a);
									S ? o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-reverted to: ", ""])), e) : (o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-revert failed: ", ""])), e), k());
								}
							} catch (e) {
								o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] auto-switch error"]))).catching(r("getErrorSafe")(e)).sendLogs("voip: [MicDeviceSelector] auto-switch error"), k();
							}
						}
					}
					var R = t.map(function(e) {
						return e.label;
					}).join(", "), E = n.map(function(e) {
						return e.label;
					}).join(", ");
				} catch (e) {
					Y(e) || o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] error reloading devices"]))).catching(r("getErrorSafe")(e)), ne([]), ae([]);
				} finally {
					he(!1);
				}
			}
			E().catch(function(e) {
				return o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] error in initial loadDevices"]))).catching(r("getErrorSafe")(e));
			});
			var T = r("WAWebDebounce")(I, 500);
			i && i.addEventListener("devicechange", T);
			var D = (n = a == null ? void 0 : a.navigator) != null ? n : navigator;
			if ("permissions" in D) {
				var x = D.permissions;
				x && x.query({ name: "microphone" }).then(function(e) {
					Ce.current = e, e.addEventListener("change", T);
				}).catch(function(e) {
					o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] permissions API error"]))).catching(r("getErrorSafe")(e));
				});
			}
			return function() {
				T.cancel(), i && i.removeEventListener("devicechange", T), Ce.current && (Ce.current.removeEventListener("change", T), Ce.current = null);
			};
		}, [
			l,
			ce,
			H.windowEl
		]), j(function() {
			var e = function(t) {
				var e, n, r = t[0], a = (e = (n = te.find(function(e) {
					return e.deviceId === r;
				})) == null ? void 0 : n.label) != null ? e : "unknown";
				o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [MicDeviceSelector] mic selection changed: ",
					" (",
					")"
				])), a, r), se(r);
			}, t = function(t) {
				var e, n, r = t[0], a = (e = (n = oe.find(function(e) {
					return e.deviceId === r;
				})) == null ? void 0 : n.label) != null ? e : "unknown";
				o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [MicDeviceSelector] speaker changed: ",
					" (",
					")"
				])), a, r), de(r);
			};
			return o("WAWebAudioDeviceManager").AudioDeviceEvents.on("deviceSelectionChanged", e), o("WAWebAudioDeviceManager").AudioDeviceEvents.on("speakerDeviceSelectionChanged", t), function() {
				o("WAWebAudioDeviceManager").AudioDeviceEvents.off("deviceSelectionChanged", e), o("WAWebAudioDeviceManager").AudioDeviceEvents.off("speakerDeviceSelectionChanged", t);
			};
		}, [te, oe]);
		var Ie = async function(t) {
			var e, n;
			if (t === le) {
				o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] skip, already selected: ", ""])), t);
				return;
			}
			if (pe || ge) {
				o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] skip, change in progress"])));
				return;
			}
			var a = (e = (n = te.find(function(e) {
				return e.deviceId === t;
			})) == null ? void 0 : n.label) != null ? e : "unknown";
			if (o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [MicDeviceSelector] changing device to: ",
				" (",
				")"
			])), a, t), _e(!0), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_SWITCH_MIC_DEVICE), l) {
				se(t), o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(t), o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [MicDeviceSelector] preview: saved mic: ",
					" (",
					")"
				])), a, t), _e(!1);
				return;
			}
			var i = H.windowEl;
			try {
				var u = await o("WAWebVoipAudioCaptureAndPlayback").switchAudioInputDevice(t, i);
				if (u) se(t), o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [MicDeviceSelector] switched to: ",
					" (",
					")"
				])), a, t);
				else throw o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] failed to switch device: ", ""])), t), r("err")("Failed to switch audio device");
			} catch (e) {
				o("WALogger").ERROR(P || (P = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] error switching device"]))).catching(r("getErrorSafe")(e)), o("WAWebToastManager").ToastManager.open(V.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			} finally {
				_e(!1);
			}
		}, Te = async function(t) {
			var e, n;
			if (t === ce) {
				o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] skip, speaker selected: ", ""])), t);
				return;
			}
			if (pe || ge) {
				o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] skip, speaker change pending"])));
				return;
			}
			var a = (e = (n = oe.find(function(e) {
				return e.deviceId === t;
			})) == null ? void 0 : n.label) != null ? e : "unknown";
			if (o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [MicDeviceSelector] changing speaker device to: ",
				" (",
				")"
			])), a, t), _e(!0), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_SWITCH_SPEAKER_DEVICE), l) {
				de(t), o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(t), o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [MicDeviceSelector] preview: saved speaker: ",
					" (",
					")"
				])), a, t), _e(!1);
				return;
			}
			try {
				var i = await o("WAWebVoipAudioCaptureAndPlayback").switchAudioOutputDevice(t);
				if (i) de(t), o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [MicDeviceSelector] speaker switched: ",
					" (",
					")"
				])), a, t);
				else throw o("WALogger").ERROR(O || (O = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] failed to switch speaker device: ", ""])), t), r("err")("Failed to switch speaker device");
			} catch (e) {
				o("WALogger").ERROR(B || (B = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] error switching speaker device"]))).catching(r("getErrorSafe")(e)), o("WAWebToastManager").ToastManager.open(V.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			} finally {
				_e(!1);
			}
		}, De = r("useWAWebStableCallback")(function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_OPEN_MIC_DROPDOWN);
			var e = H.windowEl, t = o("WAWebUA").UA.isSafari && e != null, n = !l;
			(async function() {
				try {
					var a = await o("WAWebAudioDeviceManager").getAvailableAudioDevices({
						allowPermissionPrompt: !Re,
						isInActiveCall: n,
						skipPermissionRequest: t,
						targetWindow: e
					});
					if (be.aborted) return;
					ne(a);
					var i = await o("WAWebAudioDeviceManager").getAvailableAudioOutputDevices(e, t);
					if (be.aborted) return;
					ae(i);
				} catch (e) {
					Y(e) || o("WALogger").ERROR(W || (W = babelHelpers.taggedTemplateLiteralLoose(["voip: [MicDeviceSelector] load devices err on open"]))).catching(r("getErrorSafe")(e)).sendLogs("voip: [MicDeviceSelector] error loading devices on dropdown open");
				}
			})();
		}), xe = r("useWAWebVoipWindowPopoutTooltipProps")(), $e = xe.tooltipAnchorRef, Pe = xe.tooltipOwnerDocument, Ne = V.jsx("div", babelHelpers.extends({}, (q || (q = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), { children: V.jsxs(r("WDSMenu.react"), {
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
				te.length === 0 ? V.jsx(r("WDSMenuItem.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					disabled: !0
				}) : te.map(function(e) {
					return V.jsx(r("WDSMenuItem.react"), {
						title: e.label,
						isToggleable: !0,
						toggled: e.deviceId === le,
						onPress: function() {
							Ie(e.deviceId);
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
				oe.length === 0 ? V.jsx(r("WDSMenuItem.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					disabled: !0
				}) : oe.map(function(e) {
					return V.jsx(r("WDSMenuItem.react"), {
						title: e.label,
						isToggleable: !0,
						toggled: e.deviceId === ce,
						onPress: function() {
							Te(e.deviceId);
						},
						testid: "speaker-device-" + e.deviceId
					}, e.deviceId);
				})
			]
		}) })), Me = r("useWDSMenu")({
			targetRef: ye,
			menu: Ne,
			position: "above",
			align: "end",
			onOpen: De,
			onClose: function() {
				var e;
				(e = ye.current) == null || e.focus();
			},
			ownerDocument: Pe
		}), we = Me.closeMenu, Ae = Me.isMenuOpen, Fe = Me.menuPortal, Oe = Me.openMenu, Be = function() {
			Ae ? we() : Oe();
		}, We = (function() {
			return Re ? s._(
				/*BTDS*/
				""
			) : a ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		})();
		return V.jsxs("div", { children: [V.jsx(r("WAWebVoipSplitButton.react"), {
			Icon: r(a ? "WDSIconIcMicOffFilled.react" : "WDSIconIcKeyboardVoiceFilled.react"),
			isMuted: a,
			onMainClick: U != null ? ke : Be,
			onDropdownClick: Be,
			dropdownRef: ye,
			testId: "mic-split-button",
			disabled: pe || ge,
			tooltipOwnerAnchorRef: $e,
			tooltipOwnerDocument: Pe,
			mainButtonLabel: We,
			mainButtonTestId: a ? "mic-unmute" : "mic-mute",
			dropdownButtonLabel: s._(
				/*BTDS*/
				""
			),
			dropdownButtonTestId: "audio-settings"
		}), Fe] });
	}
	X.displayName = X.name + " [from " + i.id + "]";
	function Y(e) {
		return e instanceof Error && e.name.includes("NotAllowed");
	}
	l.default = X;
}), 226);
