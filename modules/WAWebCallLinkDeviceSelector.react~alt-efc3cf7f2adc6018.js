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
		var n = t.deferMedia, a = n === void 0 ? !1 : n, i = t.isMuted, l = t.kind, d = t.onDeviceSelect, p = t.onMuteToggle, R = t.onPermissionDenied, L = t.onSpeakerSelect, E = t.permissionDenied, k = E === void 0 ? !1 : E, I = t.selectedDeviceId, T = t.selectedSpeakerDeviceId, D = h([]), x = D[0], $ = D[1], P = h([]), N = P[0], M = P[1], w = g(null), A = r("useWAWebVoipModalManager")(), F = A.closeModal, O = A.openModal, B = r("useWAWebUnmountSignal")(), W = l === "audio", q = l === "videoinput", U = r("useWAWebVoipPermissionStatus")(q), V = U.cameraPermission, H = U.micPermission, G = q ? V : H, z = G === "denied" || G !== "granted" && k === !0, j = _(function(t) {
			var n = navigator.mediaDevices;
			if (n == null) {
				$([]), M([]);
				return;
			}
			var a = l === "audio", i = l === "videoinput" && !y(), s = function() {
				B.aborted || R == null || R();
			}, c = async function() {
				if (!a && !i) return o("WAWebAudioDeviceManager").coalescedEnumerateDevices(n);
				var r = a ? "microphone" : "camera", l = await o("WAWebMediaPermissionsUtils").checkMediaPermissionState(r), u = l.denied;
				if (u) return s(), o("WAWebAudioDeviceManager").coalescedEnumerateDevices(n);
				if (t) return null;
				var c = a ? { audio: !0 } : { video: !0 };
				try {
					var d = await n.getUserMedia(c);
					try {
						var m = await n.enumerateDevices();
						return m;
					} finally {
						d.getTracks().forEach(function(e) {
							return e.stop();
						});
					}
				} catch (t) {
					o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[device-selector] permission request failed: ", ""])), String(t));
					var p = t != null && typeof t == "object" && typeof t.name == "string" ? t.name : "";
					return (p === "NotAllowedError" || p === "PermissionDeniedError") && s(), o("WAWebAudioDeviceManager").coalescedEnumerateDevices(n);
				}
			};
			c().then(function(e) {
				if (!B.aborted) {
					if (e == null) {
						$([]), M([]);
						return;
					}
					if (W) $(e.filter(function(e) {
						return e.kind === "audioinput";
					}).map(function(e, t) {
						return {
							deviceId: e.deviceId,
							label: e.label || C("audioinput", t)
						};
					})), M(e.filter(function(e) {
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
						$(t);
					}
				}
			}).catch(function(e) {
				B.aborted || (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[device-selector] device enumeration failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-calllink-device-enum-failed"), $([]), M([]));
			});
		}, [
			l,
			R,
			B.aborted,
			W
		]);
		f(function() {
			j(a);
			var e = navigator.mediaDevices;
			if (e != null) {
				var t = function() {
					return j(a);
				};
				return e.addEventListener("devicechange", t), function() {
					e.removeEventListener("devicechange", t);
				};
			}
		}, [a, j]);
		var K = g(G);
		f(function() {
			K.current !== G && (K.current = G, j(a));
		}, [
			G,
			a,
			j
		]), f(function() {
			x.length > 0 && (I == null || !x.some(function(e) {
				return e.deviceId === I;
			})) && d(x[0].deviceId);
		}, [
			I,
			d,
			x
		]), f(function() {
			W && N.length > 0 && L != null && (T == null || !N.some(function(e) {
				return e.deviceId === T;
			})) && L(N[0].deviceId);
		}, [
			L,
			W,
			N,
			T
		]);
		var Q = g(r("WAWebNoop")), X = _(function(e) {
			d(e), W || Q.current();
		}, [d, W]), Y = _(function(e) {
			L != null && L(e);
		}, [L]), J = _(function() {
			if (z) {
				O(m.jsx(o("WAWebGuidePopup.react").GuidePopup, {
					messaging: q ? o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL : o("WAWebGuidePopup.react").Messaging.MIC_FAIL,
					type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
					onConfirm: F
				}));
				return;
			}
			p();
		}, [
			F,
			z,
			q,
			p,
			O
		]), Z = W ? m.jsx("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WDSThemes").WDSLightTheme), { children: m.jsxs(r("WDSMenu.react"), {
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
				x.length === 0 ? m.jsx(r("WDSMenuItem.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					disabled: !0
				}) : x.map(function(e, t) {
					return m.jsx(r("WDSMenuItem.react"), {
						title: e.label,
						isToggleable: !0,
						toggled: e.deviceId === I,
						closeMenuOnPress: !1,
						onPress: function() {
							return X(e.deviceId);
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
				N.length === 0 ? m.jsx(r("WDSMenuItem.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					disabled: !0
				}) : N.map(function(e, t) {
					return m.jsx(r("WDSMenuItem.react"), {
						title: e.label,
						isToggleable: !0,
						toggled: e.deviceId === T,
						closeMenuOnPress: !1,
						onPress: function() {
							return Y(e.deviceId);
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
				title: l === "videoinput" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}), x.length === 0 ? m.jsx(r("WDSMenuItem.react"), {
				title: l === "videoinput" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				disabled: !0
			}) : x.map(function(e, t) {
				return m.jsx(r("WDSMenuItem.react"), {
					title: e.label,
					isToggleable: !0,
					toggled: e.deviceId === I,
					onPress: function() {
						return X(e.deviceId);
					},
					testid: "calllink-" + l + "-device-" + t
				}, e.deviceId);
			})]
		}) })), ee = r("useWDSMenu")({
			targetRef: w,
			menu: Z,
			position: "above",
			align: "start",
			onClose: function() {
				var e;
				(e = w.current) == null || e.focus();
			}
		}), te = ee.closeMenu, ne = ee.isMenuOpen, re = ee.menuPortal, oe = ee.openMenu;
		f(function() {
			Q.current = te;
		}, [te]);
		var ae = _(function() {
			ne ? te() : oe();
		}, [
			ne,
			te,
			oe
		]), ie = i || z, le = v(q, ie), se = !z && x.length === 0 && a !== !0, ue = z || x.length === 0;
		return m.jsxs("div", { children: [m.jsx(r("WAWebVoipSplitButton.react"), {
			Icon: le,
			surface: o("WAWebVoipSplitButtonSurface").WAWebVoipSplitButtonSurface.CALL_LINK_LANDING_PAGE,
			isMuted: ie,
			disableMainButton: se,
			disableDropdownButton: ue,
			mainButtonLabel: b({
				isMuted: i,
				isPermissionDenied: z,
				isVideo: q
			}),
			mainButtonTestId: "calllink-" + l + "-toggle",
			dropdownButtonLabel: S(q, z),
			dropdownButtonTestId: "calllink-" + l + "-settings",
			onMainClick: J,
			onDropdownClick: ae,
			dropdownRef: w,
			testId: "calllink-" + l + "-split-button"
		}), re] });
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);
