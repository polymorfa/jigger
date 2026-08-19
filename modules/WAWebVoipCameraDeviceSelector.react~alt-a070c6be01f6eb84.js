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
		var n = t.disableMainButton, a = n === void 0 ? !1 : n, i = t.hasCameraAvailable, l = i === void 0 ? !0 : i, L = t.isDisabled, k = L === void 0 ? !1 : L, A = t.isMuted, O = A === void 0 ? !1 : A, B = t.isVideoCall, W = t.onMainClick, q = T(r("WAWebVoipUiPopoutWindowContext")), U = r("useWAWebVoipModalManager")(), V = U.closeModal, H = U.openModal, G = $([]), z = G[0], j = G[1], K = $(""), Q = K[0], X = K[1], Y = x(Q);
		D(function() {
			Y.current = Q;
		}, [Q]);
		var J = r("useWAWebStableCallback")(function(e) {
			e && Ce.current.abort(), X(e);
		}), Z = $(!1), ee = Z[0], te = Z[1], ne = $(!1), re = ne[0], oe = ne[1], ae = $(0), ie = ae[0], le = ae[1], se = $(0), ue = se[0], ce = se[1], de = x(!1), me = x(0), pe = x(""), _e = x(null), fe = r("useWAWebDebouncedCallback")(W != null ? W : r("WAWebNoop"), P, {
			leading: !0,
			trailing: !1
		}), ge = I(function() {
			if (!l) {
				var e = o("WAWebABProps").getABPropConfigValue("enable_web_voip_virtual_video_capture_driver") === !0;
				if (!e) {
					var t;
					H(E.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
						messaging: t.Messaging.CAMERA_MISSING,
						type: t.GuidePopupType.GUIDE_UNBLOCK,
						featureSurface: t.FeatureSurface.VOIP_VIDEO_UPGRADE,
						onConfirm: V
					}));
					return;
				}
			}
			fe();
		}, [
			V,
			fe,
			l,
			H
		]), he = q.windowEl, ye = F(), Ce = x(new AbortController()), be = r("useWAWebStableCallback")(async function() {
			var e = o("WAWebUA").UA.isSafari && he != null, t = await o("WAWebVoipAcquireMediaStream").getAvailableVideoDevices({
				isInActiveCall: !0,
				skipPermissionRequest: e,
				targetWindow: he
			});
			return j(t), t;
		});
		r("useWAWebAsync")(async function() {
			try {
				if (!B) return;
				var t = await be();
				pe.current = w(t);
				var n = o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.currentDeviceId, r = n != null && n !== "" && t.some(function(e) {
					return e.deviceId === n;
				});
				if (r && n != null) o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([`voip: [CameraDeviceSelector] auto-selecting previously selected
          device: `, ""])), n), J(n);
				else if (t.length > 0 && !Q && !Ce.current.signal.aborted) {
					var a = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice(), i = a != null && t.some(function(e) {
						return e.deviceId === a;
					});
					J(a != null && i ? a : t[0].deviceId);
				}
				return Ce.current = new AbortController(), t;
			} catch (e) {
				throw M(e) || o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] error loading devices: ", ""])), e), j([]), e;
			}
		}, [
			ye,
			he,
			B
		]), D(function() {
			var e, t, n = (e = he == null || (t = he.navigator) == null ? void 0 : t.mediaDevices) != null ? e : navigator.mediaDevices, a = !1;
			async function i() {
				var e = a;
				a = !1, o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] device change detected, reloading devices"]))), oe(!0);
				try {
					var t = await be();
					if (Y.current) {
						var n = t.find(function(e) {
							return e.deviceId === Y.current;
						});
						!n && t.length > 0 && (J(t[0].deviceId), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([`voip: [CameraDeviceSelector] current device no longer available,
              switching to: `, ""])), t[0].deviceId));
					} else t.length > 0 && J(t[0].deviceId);
					if (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [CameraDeviceSelector] loaded ",
						` video
          devices: `,
						""
					])), t.length, t.map(function(e) {
						return "" + e.label;
					}).join(", ")), o("WAWebUA").UA.isSafari && he != null) {
						var r = w(t), i = r !== pe.current;
						if (i) {
							if (e) return;
							pe.current = r;
							var l = Date.now() - me.current;
							l > N && le(function(e) {
								return e + 1;
							});
						}
					}
				} catch (e) {
					M(e) || o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] error reloading devices: ", ""])), e), j([]);
				} finally {
					oe(!1);
				}
			}
			var l = r("WAWebDebounce")(i, 500), s = function() {
				a = a || o("WAWebVoipPopoutWindowState").getIsCameraStreamReacquisitionInProgress(), l();
			};
			return n && n.addEventListener("devicechange", s), function() {
				l.cancel(), n && n.removeEventListener("devicechange", s);
			};
		}, [
			be,
			J,
			he
		]), D(function() {
			var e = function(t) {
				var e = t[0];
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([`voip: [CameraDeviceSelector] device selection changed event received:
        `, ""])), e), J(e);
			};
			return o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.on("deviceSelectionChanged", e), function() {
				o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.off("deviceSelectionChanged", e);
			};
		}, [J]), D(function() {
			var e = function() {
				B && (async function() {
					o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] device list refresh requested, reloading devices"]))), oe(!0);
					try {
						var e = await be();
						pe.current = w(e);
						var t = o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.currentDeviceId, n = t != null && t !== "" && e.some(function(e) {
							return e.deviceId === t;
						});
						if (n && t != null) J(t);
						else if (e.length > 0) {
							var r = e.some(function(e) {
								return e.deviceId === Y.current;
							});
							r || J(e[0].deviceId);
						}
					} catch (e) {
						M(e) || o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] error refreshing devices: ", ""])), e);
					} finally {
						oe(!1);
					}
				})();
			}, t = r("WAWebDebounce")(e, 500);
			return o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.on("deviceListRefreshRequested", t), function() {
				t.cancel(), o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.off("deviceListRefreshRequested", t);
			};
		}, [
			B,
			be,
			J
		]), D(function() {
			ie > ue && !O && Q && !ee && !re && !de.current && (de.current = !0, o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] Safari popout: re-acquiring video stream after device enumeration"]))), o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.switchVideoDevice(Q, he).finally(function() {
				de.current = !1, me.current = Date.now(), ce(ie);
			}));
		}, [
			ie,
			ue,
			O,
			Q,
			he,
			ee,
			re
		]);
		var ve = async function(t) {
			if (t === Q) {
				o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] ignoring click on already selected device: ", ""])), t);
				return;
			}
			if (ee || re) {
				o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] ignoring device change request while another is in progress"])));
				return;
			}
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_SWITCH_CAMERA_DEVICE), o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] changing device to: ", ""])), t), te(!0);
			try {
				var e = await o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.switchVideoDevice(t, he);
				if (e) {
					var n, a = (n = o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.currentDeviceId) != null ? n : t;
					J(a), o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
						`voip: [CameraDeviceSelector] successfully switched to
          device: `,
						"",
						""
					])), a, a !== t ? " (requested: " + t + ")" : "");
				} else throw r("err")("Failed to switch camera device");
			} catch (e) {
				o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraDeviceSelector] error switching device: ", ""])), e), o("WAWebToastManager").ToastManager.open(E.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			} finally {
				te(!1);
			}
		}, Se = r("useWAWebVoipWindowPopoutTooltipProps")(), Re = Se.tooltipAnchorRef, Le = Se.tooltipOwnerDocument, Ee = E.jsx("div", babelHelpers.extends({}, (R || (R = r("stylex"))).props(o("WDSThemes").WDSDarkTheme), { children: E.jsxs(r("WDSMenu.react"), {
			minWidth: 280,
			maxHeight: 160,
			children: [E.jsx(r("WDSMenuItem.react"), {
				type: "groupHeader",
				title: s._(
					/*BTDS*/
					""
				)
			}), z.length === 0 ? E.jsx(r("WDSMenuItem.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				disabled: !0
			}) : z.map(function(e) {
				return E.jsx(r("WDSMenuItem.react"), {
					title: e.label,
					isToggleable: !0,
					toggled: e.deviceId === Q,
					onPress: function() {
						ve(e.deviceId);
					},
					testid: "camera-device-" + e.deviceId
				}, e.deviceId);
			})]
		}) })), ke = r("useWDSMenu")({
			targetRef: _e,
			menu: Ee,
			position: "above",
			align: "end",
			onClose: function() {
				var e;
				(e = _e.current) == null || e.focus();
			},
			ownerDocument: Le
		}), Ie = ke.closeMenu, Te = ke.isMenuOpen, De = ke.menuPortal, xe = ke.openMenu, $e = function() {
			Te ? Ie() : (o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_OPEN_CAMERA_DROPDOWN), xe());
		}, Pe = !B || ye !== "granted" || !l, Ne = !B && ye === "denied", Me = (function() {
			return Ne ? s._(
				/*BTDS*/
				""
			) : a ? s._(
				/*BTDS*/
				""
			) : O ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		})(), we = (function() {
			return l ? Pe ? s._(
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
			Icon: r(O ? "WDSIconIcVideocamOffFilled.react" : "WDSIconIcVideocamFilled.react"),
			isMuted: O,
			onMainClick: W != null ? ge : $e,
			onDropdownClick: $e,
			dropdownRef: _e,
			testId: "camera-split-button",
			disabled: k || ee || re || Ne,
			disableMainButton: a,
			disableDropdownButton: Pe,
			tooltipOwnerAnchorRef: Re,
			tooltipOwnerDocument: Le,
			mainButtonLabel: Me,
			mainButtonTestId: O ? "camera-turn-on" : "camera-turn-off",
			dropdownButtonLabel: we,
			dropdownButtonTestId: "camera-settings"
		}), De] });
	}
	A.displayName = A.name + " [from " + i.id + "]";
	function F() {
		var e = o("react-compiler-runtime").c(5), t = $(null), n = t[0], a = t[1], i = r("useWAWebStableCallback")(a), l;
		e[0] !== n || e[1] !== i ? (l = async function() {
			if (!(navigator === void 0 || !navigator.permissions || n != null)) {
				var e = function() {
					i(null);
				}, t = await navigator.permissions.query({ name: "camera" });
				return i(t.state), t.onchange = e, (function() {
					t.onchange = null;
				});
			}
		}, e[0] = n, e[1] = i, e[2] = l) : l = e[2];
		var s;
		return e[3] !== n ? (s = [n], e[3] = n, e[4] = s) : s = e[4], r("useWAWebAsync")(l, s), n;
	}
	l.default = A;
}), 226);
