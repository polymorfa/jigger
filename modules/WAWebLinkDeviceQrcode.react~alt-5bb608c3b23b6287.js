__d("WAWebLinkDeviceQrcode.react", [
	"fbt",
	"CometPlaceholder.react",
	"Promise",
	"SecurePostMessage",
	"WALogger",
	"WAWebAppRootInteractionContext.react",
	"WAWebAutoLogoutGating",
	"WAWebBackendEventBus",
	"WAWebConnModel",
	"WAWebConnectionIcon.react",
	"WAWebEnvironment",
	"WAWebFlex.react",
	"WAWebInteractionTracePolicy",
	"WAWebLinkDeviceQrcodeLayout.react",
	"WAWebNetworkStatus",
	"WAWebQRCode.react",
	"WAWebRefreshLargeIcon.react",
	"WAWebSocketConstants",
	"WAWebUnstyledButton.react",
	"WAWebUserPrefsMultiDevice",
	"WDSMargins.stylex",
	"asyncToGeneratorRuntime",
	"cr:1064",
	"deferredLoadComponent",
	"gkx",
	"justknobx",
	"react",
	"requireDeferred",
	"useWAWebDebouncedCallback",
	"useWAWebListener",
	"useWAWebRenderCallbacks"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useEffect, g = p.useRef, h = p.useState, y = r("requireDeferred")("WABase64").__setRef("WAWebLinkDeviceQrcode.react"), C = r("requireDeferred")("WAWebAdvSignatureApi").__setRef("WAWebLinkDeviceQrcode.react"), b = r("requireDeferred")("WAWebCmd").__setRef("WAWebLinkDeviceQrcode.react"), v = r("requireDeferred")("WAWebCompanionRegClientUtils").__setRef("WAWebLinkDeviceQrcode.react"), S = r("requireDeferred")("WAWebNativeCameraQRLinkedDeviceUtils").__setRef("WAWebLinkDeviceQrcode.react"), R = r("requireDeferred")("WAWebQrDeviceLinkingQpl").__setRef("WAWebLinkDeviceQrcode.react"), L = r("requireDeferred")("WAWebSignalStoreApi").__setRef("WAWebLinkDeviceQrcode.react"), E = r("requireDeferred")("WAWebUserPrefsInfoStore").__setRef("WAWebLinkDeviceQrcode.react"), k = r("requireDeferred")("WAWebWamQrCodeCount").__setRef("WAWebLinkDeviceQrcode.react"), I = {
		paddingInline30: {
			paddingInlineStart: "x162tt16",
			paddingInlineEnd: "x5zjp28",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		}
	}, T = r("deferredLoadComponent")(r("requireDeferred")("WAWebVelocityTransitionGroup").__setRef("WAWebLinkDeviceQrcode.react")), D = "https://faq.whatsapp.com/r/ld", x = "https://wa.me/settings/linked_devices#", $ = 228, P = {
		qrCodeWarning: {
			backgroundColor: "x1c2u55m",
			color: "x10e1pyi",
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			bottom: "x1ey2m1c",
			borderStartStartRadius: "x1rgw4pv",
			borderStartEndRadius: "x1vjm0to",
			borderEndEndRadius: "xnqoqkk",
			borderEndStartRadius: "x16lu3ki",
			zIndex: "x11uqc5h",
			height: "x1m3v4wt",
			width: "x1oysuqx",
			$$css: !0
		},
		qrCodeOfflineWarning: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		qrCodeWarningIcon: {
			color: "x10e1pyi",
			$$css: !0
		},
		qrCodeWarningThemed: {
			backgroundColor: "x1od0jb8",
			color: "x14ug900",
			$$css: !0
		},
		qrCodeWarningIconThemed: {
			color: "x14ug900",
			$$css: !0
		}
	};
	function N(e) {
		var t = e.apiCmd, a = e.autoLogoutEnabled, i = e.children, l = e.enabedAlternateDeviceLinking, s = e.onAutoLogoutToggle, u = e.onClickLinkWithPhoneNumber, c = e.theme, d = h(o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE), p = d[0], g = d[1], y = h(!r("WAWebNetworkStatus").online), C = y[0], b = y[1], v = h(o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED), S = v[0], L = v[1], E = function() {
			o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE && R.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.qrCodeExpired();
			}), g(o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE), b(!r("WAWebNetworkStatus").online), o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED && R.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.qrCodeInitialised();
			}), L(o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED), o("WAWebAutoLogoutGating").isAutoLogoutEnabled() && o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED && r("SecurePostMessage").sendMessageForCurrentOrigin(self.parent, "QR_CODE_LOADED_FOR_AUTO_LOGOUT");
		};
		o("useWAWebListener").useListener(o("WAWebBackendEventBus").BackendEventBus, "set_socket_state", E), o("useWAWebListener").useListener(r("WAWebNetworkStatus"), "change:online", E);
		var k = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !0,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN_DEVICE_LINKING_PHONE
		}), I = k.startInteraction, T = k.stopInteraction, D = _(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			u != null && (I(), yield u());
		}), [u, I]);
		f(function() {
			R.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.initialize(t);
			}), n("cr:1064") == null || n("cr:1064").initialize();
		}, []);
		var x;
		return C ? x = m.jsx(w, {
			onLoadingComplete: T,
			theme: c
		}) : p ? x = m.jsx(A, {
			onLoadingComplete: T,
			theme: c
		}) : S ? x = m.jsx(M, {
			onLoadingComplete: T,
			theme: c
		}) : x = m.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, { theme: c }), a && !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && (x = m.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, { theme: c })), m.jsx(o("WAWebLinkDeviceQrcodeLayout.react").WAWebLinkDeviceQrcodeLayout, {
			apiCmd: t,
			autoLogoutEnabled: a,
			enabedAlternateDeviceLinking: l,
			onAutoLogoutToggle: s,
			onClickLinkWithPhoneNumber: u != null ? D : null,
			theme: c,
			children: x
		});
	}
	N.displayName = N.name + " [from " + i.id + "]";
	function M(t) {
		var a = t.children, i = t.onLoadingComplete, l = t.theme, s = a, d = g(null), p = h(!1), I = p[0], P = p[1], N = h(null), M = N[0], w = N[1], A = h(null), O = A[0], B = A[1], W = r("useWAWebDebouncedCallback")(function() {
			P(!0);
		}, 100), q = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (r("WAWebEnvironment").getIsShowroom()) return "showroom";
				if (!o("WAWebConnModel").Conn.connected) {
					var t = o("WAWebConnModel").Conn.ref, a = yield (c || (c = n("Promise"))).all([
						L.load(),
						E.load(),
						C.load(),
						y.load(),
						v.load(),
						S.load()
					]), i = a[0].waSignalStore, l = a[1].waNoiseInfo, s = a[2].getADVSecretKey, d = a[3].encodeB64, m = a[4].DEVICE_PLATFORM, p = a[5].isNativeCameraQRLinkedDeviceTest, _ = yield i.getRegistrationInfo(), f = yield l.get();
					if (!f || !_) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]))).sendLogs("Empty noiseInfo or empty regInfo"), null;
					var g = d(f.staticKeyPair.pubKey), h = d(_.identityKeyPair.pubKey), b;
					try {
						b = yield s();
					} catch (e) {
						return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["QR code render failed: ", ""])), e).sendLogs("qr-code-page-adv-secret-key-failed"), null;
					}
					var R = t + "," + g + "," + h + "," + b + "," + m;
					return p() ? R = x + R : r("justknobx")._("770") && (R += "," + D), R;
				}
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), U = _(function() {
			q().then(function(e) {
				e == null || e === "" || (w(e), k.onReady(function(e) {
					e.inc();
				}), i());
			});
		}, [w, i]), V = _(function(e) {
			M != null && e != null && e.removeAttribute("title");
		}, [M]);
		o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:ref", function() {
			U(), R.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.qrCodeRefreshed();
			});
		}), o("useWAWebListener").useListener(o("WAWebUserPrefsMultiDevice").advSecretEventEmitter, "change", function() {
			U(), R.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.qrCodeRegRefreshed();
			});
		}), f(function() {
			if (M != null) {
				var e = d.current;
				if (e != null) {
					var t = e.querySelectorAll("canvas, img"), n = s != null ? "0.04" : "1", r = "opacity 0.5s cubic-bezier(0.1, 0.82, 0.25, 1)";
					t.forEach(function(e) {
						e instanceof HTMLElement && (e.style.opacity = n, e.style.transition = r);
					});
				}
			}
		}, [s, M]), r("useWAWebRenderCallbacks")({
			onMount: function() {
				U(), b.onReady(function(e) {
					return e.Cmd.onInitialLoadReadyFromBridge();
				});
			},
			onUnmount: function() {
				k.onReady(function(e) {
					e.reset();
				});
			}
		});
		var H = function() {
			I && P(!1), W();
		}, G = function(t) {
			W.cancel(), P(!1);
		}, z = function(t) {
			t.stopPropagation(), t.preventDefault(), q().then(function(e) {
				e != null && B(e);
			});
		}, j = function() {
			if (O != null) {
				var e = document.createElement("textarea");
				e.value = O, e.style.position = "fixed", e.style.opacity = "0", document.body && (document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e));
			}
			B(null);
		}, K = I && s == null ? { cursor: "none" } : null, Q = null, X = null;
		return r("gkx")("26258") || (Q = z, O != null && (X = m.jsx("div", {
			role: "button",
			tabIndex: 0,
			"data-testid": "link-device-qr-data-overlay",
			onClick: j,
			onKeyDown: function(t) {
				t.key === "Escape" ? B(null) : (t.key === "Enter" || t.key === " ") && (t.preventDefault(), j());
			},
			style: {
				position: "absolute",
				top: 0,
				insetInlineStart: 0,
				insetInlineEnd: 0,
				bottom: 0,
				backgroundColor: "rgba(0,0,0,0.9)",
				color: "white",
				padding: 12,
				zIndex: 200,
				cursor: "pointer",
				overflow: "auto",
				overflowWrap: "break-word",
				wordBreak: "break-all",
				fontSize: 10,
				lineHeight: "14px",
				display: "flex",
				alignItems: "flex-start",
				justifyContent: "center",
				userSelect: "text"
			},
			children: O
		}))), M == null ? m.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, { theme: l }) : m.jsx(r("WAWebQRCode.react"), {
			data: M,
			size: $,
			colorDark: "#122e31",
			onChange: V,
			children: function(t) {
				return m.jsxs("div", babelHelpers.extends({
					ref: function(n) {
						t.current = n != null ? n : null, d.current = n != null ? n : null;
					},
					"data-testid": "link-device-qr-code"
				}, {
					0: { className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xr9e8f9 x1e4oeot x1ui04y5 x6en5u8" },
					1: { className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xvxx97b x1028phh x1es37l9 xq7a5ml x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1zfx7y x1gj3efs x151wx5t xea0m3l xyi3aci xwf5gio x1p453bz x1suzm8a" }
				}[!!(l === "wds" || r("WAWebEnvironment").isWindows) << 0], {
					"data-ref": M,
					onContextMenu: Q,
					style: K,
					onMouseMove: H,
					onMouseLeave: G,
					children: [
						m.jsx(r("CometPlaceholder.react"), {
							fallback: s != null ? s : null,
							name: "WAWebVelocityTransitionGroup",
							children: m.jsx(T, {
								transitionName: "scale",
								children: s
							})
						}),
						m.jsx("div", babelHelpers.extends({}, {
							0: { className: "x10l6tqk xwa60dl xbudbmw xhtitgo x1fu8urw x1peatla x11lhmoz x87ps6o x1hc1fzr x7gkmsb" },
							1: { className: "x10l6tqk xwa60dl xbudbmw xhtitgo x1fu8urw x1peatla x11lhmoz x87ps6o x7gkmsb x1vak9w0" }
						}[!!s << 0], { children: m.jsx(F, {}) })),
						X
					]
				}));
			}
		});
	}
	M.displayName = M.name + " [from " + i.id + "]";
	function w(e) {
		var t = e.onLoadingComplete, n = e.theme;
		return m.jsx(M, {
			onLoadingComplete: t,
			theme: n,
			children: m.jsx(r("WAWebUnstyledButton.react"), {
				xstyle: [
					P.qrCodeWarning,
					n === "wds" && P.qrCodeWarningThemed,
					P.qrCodeOfflineWarning,
					o("WDSMargins.stylex").wdsMargins.marginAuto,
					I.paddingInline30
				],
				onClick: O,
				children: m.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					children: [m.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: I.marginBottom10,
						children: m.jsx(o("WAWebConnectionIcon.react").ConnectionIcon, {
							width: 48,
							height: 48,
							iconXstyle: [P.qrCodeWarningIcon, n === "wds" && P.qrCodeWarningIconThemed]
						})
					}), m.jsx(o("WAWebFlex.react").FlexItem, {
						justify: "center",
						align: "center",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			}, "offline")
		});
	}
	w.displayName = w.name + " [from " + i.id + "]";
	function A(e) {
		var t = e.onLoadingComplete, n = e.theme, a = function() {
			R.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.qrCodeReloaded();
			}), o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR();
		};
		return m.jsx(M, {
			onLoadingComplete: t,
			theme: n,
			children: m.jsx(r("WAWebUnstyledButton.react"), {
				xstyle: [
					P.qrCodeWarning,
					n === "wds" && P.qrCodeWarningThemed,
					o("WDSMargins.stylex").wdsMargins.marginAuto,
					I.paddingInline30
				],
				onClick: a,
				children: m.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					children: [m.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: I.marginBottom10,
						children: m.jsx(o("WAWebRefreshLargeIcon.react").RefreshLargeIcon, { iconXstyle: [P.qrCodeWarningIcon, n === "wds" && P.qrCodeWarningIconThemed] })
					}), m.jsx(o("WAWebFlex.react").FlexItem, { children: s._(
						/*BTDS*/
						""
					) })]
				})
			}, "expiry")
		});
	}
	A.displayName = A.name + " [from " + i.id + "]";
	function F() {
		return m.jsx("span", babelHelpers.extends({}, {
			0: { className: "x1rg5ohu x16dsc37 x82xf8i" },
			1: { className: "x1rg5ohu x16dsc37 x1y4xi8" }
		}[!!r("WAWebEnvironment").isWindows << 0], { children: m.jsxs("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "64",
			height: "64",
			viewBox: "0 0 64 64",
			children: [
				m.jsx("title", { children: s._(
					/*BTDS*/
					""
				) }),
				m.jsx("path", {
					fill: "#FFF",
					d: "M6.525 43.936a29.596 29.596 0 0 1-3.039-13.075C3.494 14.568 16.755 1.313 33.05 1.313c7.904.004 15.328 3.082 20.91 8.666 5.581 5.586 8.653 13.01 8.65 20.907-.007 16.294-13.266 29.549-29.558 29.549a29.648 29.648 0 0 1-12.508-2.771L1.391 62.687l5.134-18.751z"
				}),
				m.jsx("path", {
					fill: "currentColor",
					d: "M50.801 13.135c-4.739-4.742-11.039-7.354-17.752-7.357-13.837 0-25.094 11.253-25.099 25.085a25.039 25.039 0 0 0 3.349 12.541l-3.56 12.999 13.304-3.488a25.084 25.084 0 0 0 11.996 3.054h.011c13.83 0 25.088-11.256 25.095-25.087.002-6.703-2.607-13.005-7.344-17.747zM33.05 51.733h-.008a20.866 20.866 0 0 1-10.62-2.906l-.762-.452-7.894 2.07 2.108-7.694-.497-.789a20.802 20.802 0 0 1-3.189-11.097c.004-11.496 9.361-20.85 20.87-20.85a20.73 20.73 0 0 1 14.746 6.115 20.733 20.733 0 0 1 6.104 14.752c-.006 11.497-9.363 20.851-20.858 20.851z"
				}),
				m.jsx("path", {
					fill: "currentColor",
					d: "M25.429 19.26a8.65 8.65 0 0 0-1.028.011 2.352 2.352 0 0 0-.95.255c-.221.114-.427.277-.75.582-.305.288-.481.54-.668.782a6.974 6.974 0 0 0-1.443 4.291l.001.003a8.243 8.243 0 0 0 .844 3.607c1.043 2.307 2.763 4.746 5.035 7.008a24.676 24.676 0 0 0 1.657 1.6 24.145 24.145 0 0 0 9.814 5.229s.751.179 1.391.218c.021.001.04.003.061.003a9.207 9.207 0 0 0 1.422-.033 5.086 5.086 0 0 0 2.129-.59c.423-.225.623-.337.978-.561 0 0 .11-.072.319-.23.345-.257.558-.438.845-.736.211-.22.394-.479.534-.772.2-.417.401-1.213.481-1.874.061-.505.042-.781.036-.952-.011-.275-.238-.558-.487-.678l-1.486-.668s-2.222-.967-3.581-1.587a1.278 1.278 0 0 0-.452-.104c-.341-.021-.723.068-.966.324v-.004c-.013-.001-.182.145-2.031 2.385-.102.122-.341.387-.754.362a1.086 1.086 0 0 1-.185-.029 3.402 3.402 0 0 1-.49-.17c-.316-.134-.427-.185-.643-.278l-.013-.006a15.361 15.361 0 0 1-4.013-2.556 15.88 15.88 0 0 1-.927-.885c-1.074-1.041-1.953-2.148-2.607-3.24-.035-.06-.09-.146-.15-.242-.107-.174-.225-.381-.262-.523-.095-.376.157-.678.157-.678s.622-.68.911-1.05c.278-.356.518-.704.671-.952.301-.484.39-.982.238-1.37a216.767 216.767 0 0 0-2.219-5.215c-.156-.339-.598-.589-1.005-.636a6.284 6.284 0 0 0-.414-.041"
				})
			]
		}) }));
	}
	F.displayName = F.name + " [from " + i.id + "]";
	function O() {
		o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR();
	}
	l.default = N;
}), 226);
