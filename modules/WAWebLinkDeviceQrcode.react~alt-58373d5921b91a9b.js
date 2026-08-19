__d("WAWebLinkDeviceQrcode.react", [
	"fbt",
	"CometPlaceholder.react",
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
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState, h = r("requireDeferred")("WABase64").__setRef("WAWebLinkDeviceQrcode.react"), y = r("requireDeferred")("WAWebAdvSignatureApi").__setRef("WAWebLinkDeviceQrcode.react"), C = r("requireDeferred")("WAWebCmd").__setRef("WAWebLinkDeviceQrcode.react"), b = r("requireDeferred")("WAWebCompanionRegClientUtils").__setRef("WAWebLinkDeviceQrcode.react"), v = r("requireDeferred")("WAWebNativeCameraQRLinkedDeviceUtils").__setRef("WAWebLinkDeviceQrcode.react"), S = r("requireDeferred")("WAWebQrDeviceLinkingQpl").__setRef("WAWebLinkDeviceQrcode.react"), R = r("requireDeferred")("WAWebSignalStoreApi").__setRef("WAWebLinkDeviceQrcode.react"), L = r("requireDeferred")("WAWebUserPrefsInfoStore").__setRef("WAWebLinkDeviceQrcode.react"), E = r("requireDeferred")("WAWebWamQrCodeCount").__setRef("WAWebLinkDeviceQrcode.react"), k = {
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
	}, I = r("deferredLoadComponent")(r("requireDeferred")("WAWebVelocityTransitionGroup").__setRef("WAWebLinkDeviceQrcode.react")), T = "https://faq.whatsapp.com/r/ld", D = "https://wa.me/settings/linked_devices#", x = 228, $ = {
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
	function P(e) {
		var t = e.apiCmd, a = e.autoLogoutEnabled, i = e.children, l = e.enabedAlternateDeviceLinking, s = e.onAutoLogoutToggle, u = e.onClickLinkWithPhoneNumber, c = e.theme, m = g(o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE), f = m[0], h = m[1], y = g(!r("WAWebNetworkStatus").online), C = y[0], b = y[1], v = g(o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED), R = v[0], L = v[1], E = function() {
			o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE && S.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.qrCodeExpired();
			}), h(o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE), b(!r("WAWebNetworkStatus").online), o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED && S.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.qrCodeInitialised();
			}), L(o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED), o("WAWebAutoLogoutGating").isAutoLogoutEnabled() && o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED && r("SecurePostMessage").sendMessageForCurrentOrigin(self.parent, "QR_CODE_LOADED_FOR_AUTO_LOGOUT");
		};
		o("useWAWebListener").useListener(o("WAWebBackendEventBus").BackendEventBus, "set_socket_state", E), o("useWAWebListener").useListener(r("WAWebNetworkStatus"), "change:online", E);
		var k = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !0,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN_DEVICE_LINKING_PHONE
		}), I = k.startInteraction, T = k.stopInteraction, D = p(async function() {
			u != null && (I(), await u());
		}, [u, I]);
		_(function() {
			S.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.initialize(t);
			}), n("cr:1064") == null || n("cr:1064").initialize();
		}, []);
		var x;
		return C ? x = d.jsx(M, {
			onLoadingComplete: T,
			theme: c
		}) : f ? x = d.jsx(w, {
			onLoadingComplete: T,
			theme: c
		}) : R ? x = d.jsx(N, {
			onLoadingComplete: T,
			theme: c
		}) : x = d.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, { theme: c }), a && !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && (x = d.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, { theme: c })), d.jsx(o("WAWebLinkDeviceQrcodeLayout.react").WAWebLinkDeviceQrcodeLayout, {
			apiCmd: t,
			autoLogoutEnabled: a,
			enabedAlternateDeviceLinking: l,
			onAutoLogoutToggle: s,
			onClickLinkWithPhoneNumber: u != null ? D : null,
			theme: c,
			children: x
		});
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(t) {
		var n = t.children, a = t.onLoadingComplete, i = t.theme, l = n, s = f(null), c = g(!1), m = c[0], k = c[1], $ = g(null), P = $[0], N = $[1], M = g(null), w = M[0], F = M[1], O = r("useWAWebDebouncedCallback")(function() {
			k(!0);
		}, 100), B = async function() {
			if (r("WAWebEnvironment").getIsShowroom()) return "showroom";
			if (!o("WAWebConnModel").Conn.connected) {
				var t = o("WAWebConnModel").Conn.ref, n = await Promise.all([
					R.load(),
					L.load(),
					y.load(),
					h.load(),
					b.load(),
					v.load()
				]), a = n[0].waSignalStore, i = n[1].waNoiseInfo, l = n[2].getADVSecretKey, s = n[3].encodeB64, c = n[4].DEVICE_PLATFORM, d = n[5].isNativeCameraQRLinkedDeviceTest, m = await a.getRegistrationInfo(), p = await i.get();
				if (!p || !m) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]))).sendLogs("Empty noiseInfo or empty regInfo"), null;
				var _ = s(p.staticKeyPair.pubKey), f = s(m.identityKeyPair.pubKey), g;
				try {
					g = await l();
				} catch (e) {
					return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["QR code render failed: ", ""])), e).sendLogs("qr-code-page-adv-secret-key-failed"), null;
				}
				var C = t + "," + _ + "," + f + "," + g + "," + c;
				return d() ? C = D + C : r("justknobx")._("770") && (C += "," + T), C;
			}
		}, W = p(function() {
			B().then(function(e) {
				e == null || e === "" || (N(e), E.onReady(function(e) {
					e.inc();
				}), a());
			});
		}, [N, a]), q = p(function(e) {
			P != null && e != null && e.removeAttribute("title");
		}, [P]);
		o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:ref", function() {
			W(), S.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.qrCodeRefreshed();
			});
		}), o("useWAWebListener").useListener(o("WAWebUserPrefsMultiDevice").advSecretEventEmitter, "change", function() {
			W(), S.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.qrCodeRegRefreshed();
			});
		}), _(function() {
			if (P != null) {
				var e = s.current;
				if (e != null) {
					var t = e.querySelectorAll("canvas, img"), n = l != null ? "0.04" : "1", r = "opacity 0.5s cubic-bezier(0.1, 0.82, 0.25, 1)";
					t.forEach(function(e) {
						e instanceof HTMLElement && (e.style.opacity = n, e.style.transition = r);
					});
				}
			}
		}, [l, P]), r("useWAWebRenderCallbacks")({
			onMount: function() {
				W(), C.onReady(function(e) {
					return e.Cmd.onInitialLoadReadyFromBridge();
				});
			},
			onUnmount: function() {
				E.onReady(function(e) {
					e.reset();
				});
			}
		});
		var U = function() {
			m && k(!1), O();
		}, V = function(t) {
			O.cancel(), k(!1);
		}, H = function(t) {
			t.stopPropagation(), t.preventDefault(), B().then(function(e) {
				e != null && F(e);
			});
		}, G = function() {
			if (w != null) {
				var e = document.createElement("textarea");
				e.value = w, e.style.position = "fixed", e.style.opacity = "0", document.body && (document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e));
			}
			F(null);
		}, z = m && l == null ? { cursor: "none" } : null, j = null, K = null;
		return r("gkx")("26258") || (j = H, w != null && (K = d.jsx("div", {
			role: "button",
			tabIndex: 0,
			"data-testid": "link-device-qr-data-overlay",
			onClick: G,
			onKeyDown: function(t) {
				t.key === "Escape" ? F(null) : (t.key === "Enter" || t.key === " ") && (t.preventDefault(), G());
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
			children: w
		}))), P == null ? d.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, { theme: i }) : d.jsx(r("WAWebQRCode.react"), {
			data: P,
			size: x,
			colorDark: "#122e31",
			onChange: q,
			children: function(t) {
				return d.jsxs("div", babelHelpers.extends({
					ref: function(n) {
						t.current = n != null ? n : null, s.current = n != null ? n : null;
					},
					"data-testid": "link-device-qr-code"
				}, {
					0: { className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xr9e8f9 x1e4oeot x1ui04y5 x6en5u8" },
					1: { className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xvxx97b x1028phh x1es37l9 xq7a5ml x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1zfx7y x1gj3efs x151wx5t xea0m3l xyi3aci xwf5gio x1p453bz x1suzm8a" }
				}[!!(i === "wds" || r("WAWebEnvironment").isWindows) << 0], {
					"data-ref": P,
					onContextMenu: j,
					style: z,
					onMouseMove: U,
					onMouseLeave: V,
					children: [
						d.jsx(r("CometPlaceholder.react"), {
							fallback: l != null ? l : null,
							name: "WAWebVelocityTransitionGroup",
							children: d.jsx(I, {
								transitionName: "scale",
								children: l
							})
						}),
						d.jsx("div", babelHelpers.extends({}, {
							0: { className: "x10l6tqk xwa60dl xbudbmw xhtitgo x1fu8urw x1peatla x11lhmoz x87ps6o x1hc1fzr x7gkmsb" },
							1: { className: "x10l6tqk xwa60dl xbudbmw xhtitgo x1fu8urw x1peatla x11lhmoz x87ps6o x7gkmsb x1vak9w0" }
						}[!!l << 0], { children: d.jsx(A, {}) })),
						K
					]
				}));
			}
		});
	}
	N.displayName = N.name + " [from " + i.id + "]";
	function M(e) {
		var t = e.onLoadingComplete, n = e.theme;
		return d.jsx(N, {
			onLoadingComplete: t,
			theme: n,
			children: d.jsx(r("WAWebUnstyledButton.react"), {
				xstyle: [
					$.qrCodeWarning,
					n === "wds" && $.qrCodeWarningThemed,
					$.qrCodeOfflineWarning,
					o("WDSMargins.stylex").wdsMargins.marginAuto,
					k.paddingInline30
				],
				onClick: F,
				children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					children: [d.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: k.marginBottom10,
						children: d.jsx(o("WAWebConnectionIcon.react").ConnectionIcon, {
							width: 48,
							height: 48,
							iconXstyle: [$.qrCodeWarningIcon, n === "wds" && $.qrCodeWarningIconThemed]
						})
					}), d.jsx(o("WAWebFlex.react").FlexItem, {
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
	M.displayName = M.name + " [from " + i.id + "]";
	function w(e) {
		var t = e.onLoadingComplete, n = e.theme, a = function() {
			S.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.qrCodeReloaded();
			}), o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR();
		};
		return d.jsx(N, {
			onLoadingComplete: t,
			theme: n,
			children: d.jsx(r("WAWebUnstyledButton.react"), {
				xstyle: [
					$.qrCodeWarning,
					n === "wds" && $.qrCodeWarningThemed,
					o("WDSMargins.stylex").wdsMargins.marginAuto,
					k.paddingInline30
				],
				onClick: a,
				children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					children: [d.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: k.marginBottom10,
						children: d.jsx(o("WAWebRefreshLargeIcon.react").RefreshLargeIcon, { iconXstyle: [$.qrCodeWarningIcon, n === "wds" && $.qrCodeWarningIconThemed] })
					}), d.jsx(o("WAWebFlex.react").FlexItem, { children: s._(
						/*BTDS*/
						""
					) })]
				})
			}, "expiry")
		});
	}
	w.displayName = w.name + " [from " + i.id + "]";
	function A() {
		return d.jsx("span", babelHelpers.extends({}, {
			0: { className: "x1rg5ohu x16dsc37 x82xf8i" },
			1: { className: "x1rg5ohu x16dsc37 x1y4xi8" }
		}[!!r("WAWebEnvironment").isWindows << 0], { children: d.jsxs("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "64",
			height: "64",
			viewBox: "0 0 64 64",
			children: [
				d.jsx("title", { children: s._(
					/*BTDS*/
					""
				) }),
				d.jsx("path", {
					fill: "#FFF",
					d: "M6.525 43.936a29.596 29.596 0 0 1-3.039-13.075C3.494 14.568 16.755 1.313 33.05 1.313c7.904.004 15.328 3.082 20.91 8.666 5.581 5.586 8.653 13.01 8.65 20.907-.007 16.294-13.266 29.549-29.558 29.549a29.648 29.648 0 0 1-12.508-2.771L1.391 62.687l5.134-18.751z"
				}),
				d.jsx("path", {
					fill: "currentColor",
					d: "M50.801 13.135c-4.739-4.742-11.039-7.354-17.752-7.357-13.837 0-25.094 11.253-25.099 25.085a25.039 25.039 0 0 0 3.349 12.541l-3.56 12.999 13.304-3.488a25.084 25.084 0 0 0 11.996 3.054h.011c13.83 0 25.088-11.256 25.095-25.087.002-6.703-2.607-13.005-7.344-17.747zM33.05 51.733h-.008a20.866 20.866 0 0 1-10.62-2.906l-.762-.452-7.894 2.07 2.108-7.694-.497-.789a20.802 20.802 0 0 1-3.189-11.097c.004-11.496 9.361-20.85 20.87-20.85a20.73 20.73 0 0 1 14.746 6.115 20.733 20.733 0 0 1 6.104 14.752c-.006 11.497-9.363 20.851-20.858 20.851z"
				}),
				d.jsx("path", {
					fill: "currentColor",
					d: "M25.429 19.26a8.65 8.65 0 0 0-1.028.011 2.352 2.352 0 0 0-.95.255c-.221.114-.427.277-.75.582-.305.288-.481.54-.668.782a6.974 6.974 0 0 0-1.443 4.291l.001.003a8.243 8.243 0 0 0 .844 3.607c1.043 2.307 2.763 4.746 5.035 7.008a24.676 24.676 0 0 0 1.657 1.6 24.145 24.145 0 0 0 9.814 5.229s.751.179 1.391.218c.021.001.04.003.061.003a9.207 9.207 0 0 0 1.422-.033 5.086 5.086 0 0 0 2.129-.59c.423-.225.623-.337.978-.561 0 0 .11-.072.319-.23.345-.257.558-.438.845-.736.211-.22.394-.479.534-.772.2-.417.401-1.213.481-1.874.061-.505.042-.781.036-.952-.011-.275-.238-.558-.487-.678l-1.486-.668s-2.222-.967-3.581-1.587a1.278 1.278 0 0 0-.452-.104c-.341-.021-.723.068-.966.324v-.004c-.013-.001-.182.145-2.031 2.385-.102.122-.341.387-.754.362a1.086 1.086 0 0 1-.185-.029 3.402 3.402 0 0 1-.49-.17c-.316-.134-.427-.185-.643-.278l-.013-.006a15.361 15.361 0 0 1-4.013-2.556 15.88 15.88 0 0 1-.927-.885c-1.074-1.041-1.953-2.148-2.607-3.24-.035-.06-.09-.146-.15-.242-.107-.174-.225-.381-.262-.523-.095-.376.157-.678.157-.678s.622-.68.911-1.05c.278-.356.518-.704.671-.952.301-.484.39-.982.238-1.37a216.767 216.767 0 0 0-2.219-5.215c-.156-.339-.598-.589-1.005-.636a6.284 6.284 0 0 0-.414-.041"
				})
			]
		}) }));
	}
	A.displayName = A.name + " [from " + i.id + "]";
	function F() {
		o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR();
	}
	l.default = P;
}), 226);
