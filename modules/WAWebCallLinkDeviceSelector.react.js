__d("WAWebCallLinkDeviceSelector.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebAudioDeviceManager",
	"WAWebGuidePopup.react",
	"WAWebMediaPermissionsUtils",
	"WAWebNoop",
	"WAWebVoipSplitButton.react",
	"WAWebVoipSplitButtonSurface",
	"WDSIconIcKeyboardVoiceFilled.react",
	"WDSIconIcMicOffFilled.react",
	"WDSIconIcVideocamFilled.react",
	"WDSIconIcVideocamOffFilled.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSThemes",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"stylex",
	"useWAWebUnmountSignal",
	"useWAWebVoipModalManager",
	"useWAWebVoipPermissionStatus",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useEffect, g = p.useRef, h = p.useState;
	function y() {
		return o("WAWebABProps").getABPropConfigValue("enable_web_voip_virtual_video_capture_driver") === !0;
	}
	function C(e, t) {
		var n = t + 1;
		return e === "videoinput" ? s._(
			/*BTDS*/
			"",
			[s._param("deviceNumber", n)]
		) : e === "audioinput" ? s._(
			/*BTDS*/
			"",
			[s._param("deviceNumber", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("deviceNumber", n)]
		);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.isMuted, n = e.isPermissionDenied, r = e.isVideo;
		return n ? r ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : r ? t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function v(e, t) {
		return r(e ? t ? "WDSIconIcVideocamOffFilled.react" : "WDSIconIcVideocamFilled.react" : t ? "WDSIconIcMicOffFilled.react" : "WDSIconIcKeyboardVoiceFilled.react");
	}
	function S(e, t) {
		return t ? e ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : e ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function R(t) {
		var a = t.deferMedia, i = a === void 0 ? !1 : a, l = t.isMuted, d = t.kind, p = t.onDeviceSelect, R = t.onMuteToggle, L = t.onPermissionDenied, E = t.onSpeakerSelect, k = t.permissionDenied, I = k === void 0 ? !1 : k, T = t.selectedDeviceId, D = t.selectedSpeakerDeviceId, x = h([]), $ = x[0], P = x[1], N = h([]), M = N[0], w = N[1], A = g(null), F = r("useWAWebVoipModalManager")(), O = F.closeModal, B = F.openModal, W = r("useWAWebUnmountSignal")(), q = d === "audio", U = d === "videoinput", V = r("useWAWebVoipPermissionStatus")(U), H = V.cameraPermission, G = V.micPermission, z = U ? H : G, j = z === "denied" || z !== "granted" && I === !0, K = _(function(t) {
			var a = navigator.mediaDevices;
			if (a == null) {
				P([]), w([]);
				return;
			}
			var i = d === "audio", l = d === "videoinput" && !y(), s = function() {
				W.aborted || L == null || L();
			}, c = (function() {
				var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (!i && !l) return o("WAWebAudioDeviceManager").coalescedEnumerateDevices(a);
					var n = i ? "microphone" : "camera", r = yield o("WAWebMediaPermissionsUtils").checkMediaPermissionState(n), u = r.denied;
					if (u) return s(), o("WAWebAudioDeviceManager").coalescedEnumerateDevices(a);
					if (t) return null;
					var c = i ? { audio: !0 } : { video: !0 };
					try {
						var d = yield a.getUserMedia(c);
						try {
							var m = yield a.enumerateDevices();
							return m;
						} finally {
							d.getTracks().forEach(function(e) {
								return e.stop();
							});
						}
					} catch (t) {
						o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[device-selector] permission request failed: ", ""])), String(t));
						var p = t != null && typeof t == "object" && typeof t.name == "string" ? t.name : "";
						return (p === "NotAllowedError" || p === "PermissionDeniedError") && s(), o("WAWebAudioDeviceManager").coalescedEnumerateDevices(a);
					}
				});
				return function() {
					return r.apply(this, arguments);
				};
			})();
			c().then(function(e) {
				if (!W.aborted) {
					if (e == null) {
						P([]), w([]);
						return;
					}
					if (q) P(e.filter(function(e) {
						return e.kind === "audioinput";
					}).map(function(e, t) {
						return {
							deviceId: e.deviceId,
							label: e.label || C("audioinput", t)
						};
					})), w(e.filter(function(e) {
						return e.kind === "audiooutput";
					}).map(function(e, t) {
						return {
							deviceId: e.deviceId,
							label: e.label || C("audiooutput", t)
						};
					}));
					else {
						var t = e.filter(function(e) {
							return e.kind === "videoinput";
						}).map(function(e, t) {
							return {
								deviceId: e.deviceId,
								label: e.label || C("videoinput", t)
							};
						});
						P(t);
					}
				}
			}).catch(function(e) {
				W.aborted || (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[device-selector] device enumeration failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-calllink-device-enum-failed"), P([]), w([]));
			});
		}, [
			d,
			L,
			W.aborted,
			q
		]);
		f(function() {
			K(i);
			var e = navigator.mediaDevices;
			if (e != null) {
				var t = function() {
					return K(i);
				};
				return e.addEventListener("devicechange", t), function() {
					e.removeEventListener("devicechange", t);
				};
			}
		}, [i, K]);
		var Q = g(z);
		f(function() {
			Q.current !== z && (Q.current = z, K(i));
		}, [
			z,
			i,
			K
		]), f(function() {
			$.length > 0 && (T == null || !$.some(function(e) {
				return e.deviceId === T;
			})) && p($[0].deviceId);
		}, [
			T,
			p,
			$
		]), f(function() {
			q && M.length > 0 && E != null && (D == null || !M.some(function(e) {
				return e.deviceId === D;
			})) && E(M[0].deviceId);
		}, [
			E,
			q,
			M,
			D
		]);
		var X = g(r("WAWebNoop")), Y = _(function(e) {
			p(e), q || X.current();
		}, [p, q]), J = _(function(e) {
			E != null && E(e);
		}, [E]), Z = _(function() {
			if (j) {
				B(m.jsx(o("WAWebGuidePopup.react").GuidePopup, {
					messaging: U ? o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL : o("WAWebGuidePopup.react").Messaging.MIC_FAIL,
					type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
					onConfirm: O
				}));
				return;
			}
			R();
		}, [
			O,
			j,
			U,
			R,
			B
		]), ee = q ? m.jsx("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WDSThemes").WDSLightTheme), { children: m.jsxs(r("WDSMenu.react"), {
			minWidth: 200,
			maxWidth: 300,
			maxHeight: 420,
			children: [
				m.jsx(r("WDSMenuItem.react"), {
					type: "groupHeader",
					title: s._(
						/*BTDS*/
						""
					)
				}),
				$.length === 0 ? m.jsx(r("WDSMenuItem.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					disabled: !0
				}) : $.map(function(e, t) {
					return m.jsx(r("WDSMenuItem.react"), {
						title: e.label,
						isToggleable: !0,
						toggled: e.deviceId === T,
						closeMenuOnPress: !1,
						onPress: function() {
							return Y(e.deviceId);
						},
						testid: "calllink-mic-device-" + t
					}, "in-" + e.deviceId);
				}),
				m.jsx(r("WDSMenuItem.react"), { type: "separator" }),
				m.jsx(r("WDSMenuItem.react"), {
					type: "groupHeader",
					title: s._(
						/*BTDS*/
						""
					)
				}),
				M.length === 0 ? m.jsx(r("WDSMenuItem.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					disabled: !0
				}) : M.map(function(e, t) {
					return m.jsx(r("WDSMenuItem.react"), {
						title: e.label,
						isToggleable: !0,
						toggled: e.deviceId === D,
						closeMenuOnPress: !1,
						onPress: function() {
							return J(e.deviceId);
						},
						testid: "calllink-speaker-device-" + t
					}, "out-" + e.deviceId);
				})
			]
		}) })) : m.jsx("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WDSThemes").WDSLightTheme), { children: m.jsxs(r("WDSMenu.react"), {
			minWidth: 200,
			maxWidth: 300,
			maxHeight: 420,
			children: [m.jsx(r("WDSMenuItem.react"), {
				type: "groupHeader",
				title: d === "videoinput" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}), $.length === 0 ? m.jsx(r("WDSMenuItem.react"), {
				title: d === "videoinput" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				disabled: !0
			}) : $.map(function(e, t) {
				return m.jsx(r("WDSMenuItem.react"), {
					title: e.label,
					isToggleable: !0,
					toggled: e.deviceId === T,
					onPress: function() {
						return Y(e.deviceId);
					},
					testid: "calllink-" + d + "-device-" + t
				}, e.deviceId);
			})]
		}) })), te = r("useWDSMenu")({
			targetRef: A,
			menu: ee,
			position: "above",
			align: "start",
			onClose: function() {
				var e;
				(e = A.current) == null || e.focus();
			}
		}), ne = te.closeMenu, re = te.isMenuOpen, oe = te.menuPortal, ae = te.openMenu;
		f(function() {
			X.current = ne;
		}, [ne]);
		var ie = _(function() {
			re ? ne() : ae();
		}, [
			re,
			ne,
			ae
		]), le = l || j, se = v(U, le), ue = !j && $.length === 0 && i !== !0, ce = j || $.length === 0;
		return m.jsxs("div", { children: [m.jsx(r("WAWebVoipSplitButton.react"), {
			Icon: se,
			surface: o("WAWebVoipSplitButtonSurface").WAWebVoipSplitButtonSurface.CALL_LINK_LANDING_PAGE,
			isMuted: le,
			disableMainButton: ue,
			disableDropdownButton: ce,
			mainButtonLabel: b({
				isMuted: l,
				isPermissionDenied: j,
				isVideo: U
			}),
			mainButtonTestId: "calllink-" + d + "-toggle",
			dropdownButtonLabel: S(U, j),
			dropdownButtonTestId: "calllink-" + d + "-settings",
			onMainClick: Z,
			onDropdownClick: ie,
			dropdownRef: A,
			testId: "calllink-" + d + "-split-button"
		}), oe] });
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);
