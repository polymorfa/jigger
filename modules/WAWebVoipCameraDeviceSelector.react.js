__d("WAWebVoipCameraDeviceSelector.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebDebounce",
	"WAWebGuidePopup.react",
	"WAWebNoop",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUA",
	"WAWebUserPrefsVoip",
	"WAWebVoipAcquireMediaStream",
	"WAWebVoipActivityTracker",
	"WAWebVoipPopoutWindowState",
	"WAWebVoipSplitButton.react",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipVideoCameraCapture",
	"WDSIconIcVideocamFilled.react",
	"WDSIconIcVideocamOffFilled.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSThemes",
	"asyncToGeneratorRuntime",
	"err",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebAsync",
	"useWAWebDebouncedCallback",
	"useWAWebStableCallback",
	"useWAWebVoipModalManager",
	"useWAWebVoipWindowPopoutTooltipProps",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E = L || (L = o("react")), k = L, I = k.useCallback, T = k.useContext, D = k.useEffect, x = k.useRef, $ = k.useState, P = 500, N = 2e3;
	function M(e) {
		return e instanceof Error && e.name.includes("NotAllowed");
	}
	function w(e) {
		return e.map(function(e) {
			return e.deviceId;
		}).sort().join(",");
	}
	function A(t) {
		var a = t.disableMainButton, i = a === void 0 ? !1 : a, l = t.hasCameraAvailable, L = l === void 0 ? !0 : l, k = t.isDisabled, A = k === void 0 ? !1 : k, O = t.isMuted, B = O === void 0 ? !1 : O, W = t.isVideoCall, q = t.onMainClick, U = T(r("WAWebVoipUiPopoutWindowContext")), V = r("useWAWebVoipModalManager")(), H = V.closeModal, G = V.openModal, z = $([]), j = z[0], K = z[1], Q = $(""), X = Q[0], Y = Q[1], J = x(X);
		D(function() {
			J.current = X;
		}, [X]);
		var Z = r("useWAWebStableCallback")(function(e) {
			e && be.current.abort(), Y(e);
		}), ee = $(!1), te = ee[0], ne = ee[1], re = $(!1), oe = re[0], ae = re[1], ie = $(0), le = ie[0], se = ie[1], ue = $(0), ce = ue[0], de = ue[1], me = x(!1), pe = x(0), _e = x(""), fe = x(null), ge = r("useWAWebDebouncedCallback")(q != null ? q : r("WAWebNoop"), P, {
			leading: !0,
			trailing: !1
		}), he = I(function() {
			if (!L) {
				var e = o("WAWebABProps").getABPropConfigValue("enable_web_voip_virtual_video_capture_driver") === !0;
				if (!e) {
					var t;
					G(E.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
						messaging: t.Messaging.CAMERA_MISSING,
						type: t.GuidePopupType.GUIDE_UNBLOCK,
						featureSurface: t.FeatureSurface.VOIP_VIDEO_UPGRADE,
						onConfirm: H
					}));
					return;
				}
			}
			ge();
		}, [
			H,
			ge,
			L,
			G
		]), ye = U.windowEl, Ce = F(), be = x(new AbortController()), ve = r("useWAWebStableCallback")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = o("WAWebUA").UA.isSafari && ye != null, t = yield o("WAWebVoipAcquireMediaStream").getAvailableVideoDevices({
				isInActiveCall: !0,
				skipPermissionRequest: e,
				targetWindow: ye
			});
			return K(t), t;
		}));
		r("useWAWebAsync")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				if (!W) return;
				var t = yield ve();
				_e.current = w(t);
				var n = o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.currentDeviceId, r = n != null && n !== "" && t.some(function(e) {
					return e.deviceId === n;
				});
				if (r && n != null) o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] auto-selecting previously selected\n          device: ", ""])), n), Z(n);
				else if (t.length > 0 && !X && !be.current.signal.aborted) {
					var a = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice(), i = a != null && t.some(function(e) {
						return e.deviceId === a;
					});
					Z(a != null && i ? a : t[0].deviceId);
				}
				return be.current = new AbortController(), t;
			} catch (e) {
				throw M(e) || o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] error loading devices: ", ""])), e), K([]), e;
			}
		}), [
			Ce,
			ye,
			W
		]), D(function() {
			var e, t, a = (e = ye == null || (t = ye.navigator) == null ? void 0 : t.mediaDevices) != null ? e : navigator.mediaDevices, i = !1;
			function l() {
				return s.apply(this, arguments);
			}
			function s() {
				return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = i;
					i = !1, o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] device change detected, reloading devices"]))), ae(!0);
					try {
						var t = yield ve();
						if (J.current) {
							var n = t.find(function(e) {
								return e.deviceId === J.current;
							});
							!n && t.length > 0 && (Z(t[0].deviceId), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] current device no longer available,\n              switching to: ", ""])), t[0].deviceId));
						} else t.length > 0 && Z(t[0].deviceId);
						if (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
							"voip: [CameraDeviceSelector] loaded ",
							" video\n          devices: ",
							""
						])), t.length, t.map(function(e) {
							return "" + e.label;
						}).join(", ")), o("WAWebUA").UA.isSafari && ye != null) {
							var r = w(t), a = r !== _e.current;
							if (a) {
								if (e) return;
								_e.current = r;
								var l = Date.now() - pe.current;
								l > N && se(function(e) {
									return e + 1;
								});
							}
						}
					} catch (e) {
						M(e) || o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] error reloading devices: ", ""])), e), K([]);
					} finally {
						ae(!1);
					}
				}), s.apply(this, arguments);
			}
			var u = r("WAWebDebounce")(l, 500), _ = function() {
				i = i || o("WAWebVoipPopoutWindowState").getIsCameraStreamReacquisitionInProgress(), u();
			};
			return a && a.addEventListener("devicechange", _), function() {
				u.cancel(), a && a.removeEventListener("devicechange", _);
			};
		}, [
			ve,
			Z,
			ye
		]), D(function() {
			var e = function(t) {
				var e = t[0];
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] device selection changed event received:\n        ", ""])), e), Z(e);
			};
			return o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.on("deviceSelectionChanged", e), function() {
				o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.off("deviceSelectionChanged", e);
			};
		}, [Z]), D(function() {
			var e = function() {
				W && n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] device list refresh requested, reloading devices"]))), ae(!0);
					try {
						var e = yield ve();
						_e.current = w(e);
						var t = o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.currentDeviceId, n = t != null && t !== "" && e.some(function(e) {
							return e.deviceId === t;
						});
						if (n && t != null) Z(t);
						else if (e.length > 0) {
							var r = e.some(function(e) {
								return e.deviceId === J.current;
							});
							r || Z(e[0].deviceId);
						}
					} catch (e) {
						M(e) || o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] error refreshing devices: ", ""])), e);
					} finally {
						ae(!1);
					}
				})();
			}, t = r("WAWebDebounce")(e, 500);
			return o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.on("deviceListRefreshRequested", t), function() {
				t.cancel(), o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.off("deviceListRefreshRequested", t);
			};
		}, [
			W,
			ve,
			Z
		]), D(function() {
			le > ce && !B && X && !te && !oe && !me.current && (me.current = !0, o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] Safari popout: re-acquiring video stream after device enumeration"]))), o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.switchVideoDevice(X, ye).finally(function() {
				me.current = !1, pe.current = Date.now(), de(le);
			}));
		}, [
			le,
			ce,
			B,
			X,
			ye,
			te,
			oe
		]);
		var Se = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (e === X) {
					o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] ignoring click on already selected device: ", ""])), e);
					return;
				}
				if (te || oe) {
					o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] ignoring device change request while another is in progress"])));
					return;
				}
				o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_SWITCH_CAMERA_DEVICE), o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] changing device to: ", ""])), e), ne(!0);
				try {
					var t = yield o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.switchVideoDevice(e, ye);
					if (t) {
						var n, a = (n = o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.currentDeviceId) != null ? n : e;
						Z(a), o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
							"voip: [CameraDeviceSelector] successfully switched to\n          device: ",
							"",
							""
						])), a, a !== e ? " (requested: " + e + ")" : "");
					} else throw r("err")("Failed to switch camera device");
				} catch (e) {
					o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] error switching device: ", ""])), e), o("WAWebToastManager").ToastManager.open(E.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				} finally {
					ne(!1);
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), Re = r("useWAWebVoipWindowPopoutTooltipProps")(), Le = Re.tooltipAnchorRef, Ee = Re.tooltipOwnerDocument, ke = E.jsx("div", babelHelpers.extends({}, (R || (R = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), { children: E.jsxs(r("WDSMenu.react"), {
			minWidth: 280,
			maxHeight: 160,
			children: [E.jsx(r("WDSMenuItem.react"), {
				type: "groupHeader",
				title: s._(
					/*BTDS*/
					""
				)
			}), j.length === 0 ? E.jsx(r("WDSMenuItem.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				disabled: !0
			}) : j.map(function(e) {
				return E.jsx(r("WDSMenuItem.react"), {
					title: e.label,
					isToggleable: !0,
					toggled: e.deviceId === X,
					onPress: function() {
						Se(e.deviceId);
					},
					testid: "camera-device-" + e.deviceId
				}, e.deviceId);
			})]
		}) })), Ie = r("useWDSMenu")({
			targetRef: fe,
			menu: ke,
			position: "above",
			align: "end",
			onClose: function() {
				var e;
				(e = fe.current) == null || e.focus();
			},
			ownerDocument: Ee
		}), Te = Ie.closeMenu, De = Ie.isMenuOpen, xe = Ie.menuPortal, $e = Ie.openMenu, Pe = function() {
			De ? Te() : (o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_OPEN_CAMERA_DROPDOWN), $e());
		}, Ne = !W || Ce !== "granted" || !L, Me = !W && Ce === "denied", we = (function() {
			return Me ? s._(
				/*BTDS*/
				""
			) : i ? s._(
				/*BTDS*/
				""
			) : B ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		})(), Ae = (function() {
			return L ? Ne ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		})();
		return E.jsxs("div", { children: [E.jsx(r("WAWebVoipSplitButton.react"), {
			Icon: r(B ? "WDSIconIcVideocamOffFilled.react" : "WDSIconIcVideocamFilled.react"),
			isMuted: B,
			onMainClick: q != null ? he : Pe,
			onDropdownClick: Pe,
			dropdownRef: fe,
			testId: "camera-split-button",
			disabled: A || te || oe || Me,
			disableMainButton: i,
			disableDropdownButton: Ne,
			tooltipOwnerAnchorRef: Le,
			tooltipOwnerDocument: Ee,
			mainButtonLabel: we,
			mainButtonTestId: B ? "camera-turn-on" : "camera-turn-off",
			dropdownButtonLabel: Ae,
			dropdownButtonTestId: "camera-settings"
		}), xe] });
	}
	A.displayName = A.name + " [from " + i.id + "]";
	function F() {
		var e = o("react-compiler-runtime").c(5), t = $(null), a = t[0], i = t[1], l = r("useWAWebStableCallback")(i), s;
		e[0] !== a || e[1] !== l ? (s = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!(navigator === void 0 || !navigator.permissions || a != null)) {
					var e = function() {
						l(null);
					}, t = yield navigator.permissions.query({ name: "camera" });
					return l(t.state), t.onchange = e, (function() {
						t.onchange = null;
					});
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), e[0] = a, e[1] = l, e[2] = s) : s = e[2];
		var u;
		return e[3] !== a ? (u = [a], e[3] = a, e[4] = u) : u = e[4], r("useWAWebAsync")(s, u), a;
	}
	l.default = A;
}), 226);
