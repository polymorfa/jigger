__d("WAWebGuidePopup.react", [
	"fbt",
	"$InternalEnum",
	"WAWebABProps",
	"WAWebButton.react",
	"WAWebChromePermissionsIcon.react",
	"WAWebConfirmPopup.react",
	"WAWebEnvironment",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
	"WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum",
	"WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum",
	"WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum",
	"WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum",
	"WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum",
	"WAWebL10NGetSystemLocale",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNotificationConstants",
	"WAWebUA",
	"WAWebVoipPopoutModalManager",
	"WDSIconIcArrowBack.react",
	"WDSIconIcLock.react",
	"WDSText.react",
	"err",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = {
		iconAllow: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x1useyqa",
			height: "xsdox4t",
			color: "x17t9dm2",
			backgroundColor: "xice4io",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		iconTopCenter: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "xbudbmw",
			left: null,
			marginInlineStart: "xwqyzqf",
			transform: "x1iffjtl",
			$$css: !0
		},
		iconTopLeft: {
			position: "x10l6tqk",
			top: "xxk6nc9",
			left: "xu96u03",
			$$css: !0
		},
		iconTopLeftLtr: {
			transform: "x1158fpu",
			$$css: !0
		},
		iconTopLeftRtl: {
			transform: "x1rr8tx7",
			$$css: !0
		}
	}, p = {
		NOTIFICATIONS: "NOTIFICATIONS",
		BACKGROUND_SYNC: "BACKGROUND_SYNC",
		CAMERA_FAIL: "CAMERA_FAIL",
		CAMERA_MISSING: "CAMERA_MISSING",
		MIC_FAIL: "MIC_FAIL",
		MIC_MISSING: "MIC_MISSING",
		CAMERA_AND_MIC_FAIL: "CAMERA_AND_MIC_FAIL",
		CAMERA_AND_MIC_MISSING: "CAMERA_AND_MIC_MISSING",
		CAMERA: "CAMERA",
		MIC: "MIC",
		CAMERA_AND_MIC: "CAMERA_AND_MIC",
		POPUPS_BLOCKED: "POPUPS_BLOCKED",
		SCREEN_SHARE_FAIL: "SCREEN_SHARE_FAIL",
		VIDEO_UPGRADE_FAIL: "VIDEO_UPGRADE_FAIL"
	}, _ = {
		VOICE_MESSAGES: "VOICE_MESSAGES",
		VOIP: "VOIP",
		VOIP_ACTIVE: "VOIP_ACTIVE"
	}, f = {
		PHOTO_CAPTURE: "PHOTO_CAPTURE",
		VOIP: "VOIP",
		VOIP_VIDEO_UPGRADE: "VOIP_VIDEO_UPGRADE"
	}, g = { VOIP: "VOIP" }, h = babelHelpers.extends({}, _, f, g, { NOTIFICATION: "NOTIFICATION" });
	function y(e) {
		var t = e.children;
		return d.jsx("strong", {
			className: "x1rg5ohu xk50ysn",
			children: t
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = n("$InternalEnum")({
		GUIDE_ALLOW: "guide-allow",
		GUIDE_UNBLOCK: "guide-unblock",
		GUIDE_NONE: "guide-none"
	});
	function b(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.type, c = l === void 0 ? C.GUIDE_NONE : l, p = i.onCancel, _ = i.onConfirm, f = _ === void 0 ? function() {
			return o("WAWebModalManager").ModalManager.close();
		} : _, g = i.messaging, h = i.enableNewBannerLogic, y = g === "NOTIFICATIONS" && (h != null ? h : o("WAWebABProps").getABPropConfigValue("web_notifications_banner_new_logic_enabled")), b = y && ((n = window.Notification) == null ? void 0 : n.permission) === o("WAWebNotificationConstants").PERMISSION_DENIED;
		if (c === C.GUIDE_ALLOW) {
			var S = o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.CHROME || o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.FIREFOX || o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.EDGE, L = o("WAWebL10NGetSystemLocale").isSystemLocaleRTL(), E = L ? "rtl" : "ltr";
			return d.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Guide,
				tsNavigationData: {
					surface: "guide-popup",
					viewName: "guide-allow"
				},
				children: d.jsxs("div", babelHelpers.extends({}, {
					0: { className: "x1n2onr6 x2vfze8 x2b8uid" },
					1: { className: "x1n2onr6 x889kno x7xyrnr" }
				}[!!S << 0], { children: [
					!r("WAWebEnvironment").isWindows && d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(m.iconAllow, S ? m.iconTopLeft : m.iconTopCenter, S && (L ? m.iconTopLeftRtl : m.iconTopLeftLtr)), { children: d.jsx(r("WDSIconIcArrowBack.react"), {
						directional: !0,
						overrideDirection: S ? E : null
					}) })),
					d.jsx("div", {
						className: "x1u7kmwd x1q74xe4 x1iikomf xggjnk3 xqrpoby",
						children: d.jsx(v, {
							messaging: g,
							colorName: "persistentAlwaysWhite"
						})
					}),
					d.jsx("div", {
						className: "x1iikomf x1fc57z9 xat24cr x1jchvi3 xp5xpl3",
						children: d.jsx(R, {
							messaging: g,
							featureSurface: i.featureSurface,
							isNewLogicForDisabledNotifications: b,
							colorName: "persistentAlwaysWhite"
						})
					}),
					d.jsx("div", {
						className: "xqui205",
						children: d.jsx(o("WAWebButton.react").Button, {
							onClick: f,
							type: "primary",
							children: y ? r("WAWebFbtCommon")("OK") : s._(
								/*BTDS*/
								""
							)
						})
					})
				] }))
			});
		}
		return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			ref: a,
			tsNavigationData: {
				surface: "guide-popup",
				viewName: "guide"
			},
			title: d.jsx(v, {
				messaging: g,
				colorName: "contentDefault"
			}),
			onOK: f,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: p,
			cancelText: p ? s._(
				/*BTDS*/
				""
			) : void 0,
			children: d.jsx("div", {
				className: "xieb3on x1f6kntn x1iikomf x1fc57z9",
				children: d.jsx(R, {
					messaging: g,
					featureSurface: i.featureSurface,
					isNewLogicForDisabledNotifications: b,
					colorName: "contentDeemphasized"
				})
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.colorName, n = e.messaging;
		return d.jsx(r("WDSText.react"), {
			colorName: t,
			type: "Headline2",
			children: n === "BACKGROUND_SYNC" || n === "NOTIFICATIONS" ? s._(
				/*BTDS*/
				""
			) : n === "CAMERA" || n === "CAMERA_FAIL" ? s._(
				/*BTDS*/
				""
			) : n === "CAMERA_MISSING" ? s._(
				/*BTDS*/
				""
			) : n === "MIC_MISSING" ? s._(
				/*BTDS*/
				""
			) : n === "MIC_FAIL" || n === "MIC" ? s._(
				/*BTDS*/
				""
			) : n === "CAMERA_AND_MIC_FAIL" || n === "CAMERA_AND_MIC" ? s._(
				/*BTDS*/
				""
			) : n === "CAMERA_AND_MIC_MISSING" ? s._(
				/*BTDS*/
				""
			) : n === "POPUPS_BLOCKED" ? s._(
				/*BTDS*/
				""
			) : n === "SCREEN_SHARE_FAIL" ? s._(
				/*BTDS*/
				""
			) : n === "VIDEO_UPGRADE_FAIL" ? s._(
				/*BTDS*/
				""
			) : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
			})()
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e === h.VOIP_ACTIVE || e === h.VOIP_VIDEO_UPGRADE;
		return t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t, n, a, i = e.colorName, l = e.featureSurface, u = e.isNewLogicForDisabledNotifications, c = e.messaging, m = o("WAWebUA").UA.browser, p = d.jsx("div", {
			className: "x6s0dn4 xl56j7k x3nfvp2 xxymvpz xlup9mm x1kky2od xg5evlq xup1sw1 x1tiyuxx x1uc92m x1nbhmlj x181vq82 xt8t1vi x1xc408v x129tdwq x15urzxu x4wrhlh",
			children: d.jsx(o("WAWebChromePermissionsIcon.react").ChromePermissionsIcon, {
				height: 13,
				width: 13
			})
		}), h = d.jsx("div", {
			className: "x7a106z xl56j7k x3nfvp2 x16dsc37 xxk0z11 xvy4d1p x1sbwfh8 x16q7b9a",
			children: d.jsx(r("WDSIconIcLock.react"), {
				height: 20,
				width: 20
			})
		}), C = m === "edge" ? h : m === "chrome" ? p : m === "opera" ? h : m === "firefox" ? p : null, b;
		switch (c) {
			case "NOTIFICATIONS": {
				if (u && C != null) {
					b = d.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: i,
						children: s._(
							/*BTDS*/
							"",
							[s._param("browser_permissions_icon", C), s._implicitParam("=m3", d.jsx(y, { children: s._(
								/*BTDS*/
								""
							) }))]
						)
					});
					break;
				}
				b = m === "firefox" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
				break;
			}
			case "BACKGROUND_SYNC":
				b = m === "firefox" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
				break;
			case "CAMERA_FAIL":
				if (!(l in f)) throw r("err")("CAMERA_FAIL: Invalid feature surface: " + l);
				if (r("WAWebEnvironment").isWindows) {
					var v;
					b = (v = s._enum(l, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum")), s._(
						/*BTDS*/
						"",
						[v, s._implicitParam("=m5", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS.privacy_webcam,
							children: s._(
								/*BTDS*/
								"",
								[v]
							)
						}))]
					));
					break;
				}
				b = d.jsxs(d.Fragment, { children: [
					m === "safari" ? s._(
						/*BTDS*/
						"",
						[s._enum(l, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"))]
					) : (a = s._enum(l, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum")), s._(
						/*BTDS*/
						"",
						[
							a,
							s._param("browser_permissions_icon", C),
							s._implicitParam("=m6", d.jsx(y, { children: s._(
								/*BTDS*/
								"",
								[a]
							) }))
						]
					)),
					" ",
					S(l)
				] });
				break;
			case "CAMERA_MISSING":
				if (!(l in f)) throw r("err")("CAMERA_MISSING: Invalid feature surface: " + l);
				if (r("WAWebEnvironment").isWindows) {
					b = s._(
						/*BTDS*/
						"",
						[s._enum(l, r("WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum"))]
					);
					break;
				}
				b = s._(
					/*BTDS*/
					"",
					[s._enum(l, r("WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum"))]
				);
				break;
			case "MIC_FAIL":
				if (!(l in _)) throw r("err")("MIC_FAIL: Invalid feature surface: " + l);
				if (r("WAWebEnvironment").isWindows) {
					var a;
					b = (a = s._enum(l, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum")), s._(
						/*BTDS*/
						"",
						[a, s._implicitParam("=m5", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: "ms-settings:privacy-microphone",
							children: s._(
								/*BTDS*/
								"",
								[a]
							)
						}))]
					));
					break;
				}
				b = d.jsxs(d.Fragment, { children: [
					m === "safari" ? s._(
						/*BTDS*/
						"",
						[s._enum(l, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"))]
					) : (n = s._enum(l, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum")), s._(
						/*BTDS*/
						"",
						[
							n,
							s._param("browser_permissions_icon", C),
							s._implicitParam("=m6", d.jsx(y, { children: s._(
								/*BTDS*/
								"",
								[n]
							) }))
						]
					)),
					" ",
					S(l)
				] });
				break;
			case "MIC_MISSING":
				if (!(l in _)) throw r("err")("MIC_MISSING: Invalid feature surface: " + l);
				if (r("WAWebEnvironment").isWindows) {
					b = s._(
						/*BTDS*/
						"",
						[s._enum(l, r("WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum"))]
					);
					break;
				}
				b = s._(
					/*BTDS*/
					"",
					[s._enum(l, r("WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum"))]
				);
				break;
			case "CAMERA_AND_MIC_FAIL":
				if (!(l in g)) throw r("err")("CAMERA_AND_MIC_FAIL: Invalid feature surface: " + l);
				if (r("WAWebEnvironment").isWindows) {
					var n;
					b = (n = s._enum(l, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum")), s._(
						/*BTDS*/
						"",
						[n, s._implicitParam("=m5", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: "ms-settings:privacy-microphone",
							children: s._(
								/*BTDS*/
								"",
								[n]
							)
						}))]
					));
					break;
				}
				b = d.jsxs(d.Fragment, { children: [
					m === "safari" ? s._(
						/*BTDS*/
						"",
						[s._enum(l, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum"))]
					) : (t = s._enum(l, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum")), s._(
						/*BTDS*/
						"",
						[
							t,
							s._param("browser_permissions_icon", C),
							s._implicitParam("=m6", d.jsx(y, { children: s._(
								/*BTDS*/
								"",
								[t]
							) })),
							s._implicitParam("=m8", d.jsx(y, { children: s._(
								/*BTDS*/
								"",
								[t]
							) }))
						]
					)),
					" ",
					S(l)
				] });
				break;
			case "CAMERA_AND_MIC_MISSING":
				if (!(l in g)) throw r("err")("MIC_MISSING: Invalid feature surface: " + l);
				if (r("WAWebEnvironment").isWindows) {
					b = s._(
						/*BTDS*/
						"",
						[s._enum(l, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum"))]
					);
					break;
				}
				b = s._(
					/*BTDS*/
					"",
					[s._enum(l, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum"))]
				);
				break;
			case "CAMERA":
				if (!(l in f)) throw r("err")("CAMERA: Invalid feature surface: " + l);
				if (r("WAWebEnvironment").isWindows) {
					var t;
					b = (t = s._enum(l, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum")), s._(
						/*BTDS*/
						"",
						[t, s._implicitParam("=m5", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS.privacy_webcam,
							children: s._(
								/*BTDS*/
								"",
								[t]
							)
						}))]
					));
					break;
				}
				b = s._(
					/*BTDS*/
					"",
					[s._enum(l, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"))]
				);
				break;
			case "MIC":
				if (!(l in _)) throw r("err")("MIC: Invalid feature surface: " + l);
				if (r("WAWebEnvironment").isWindows) {
					b = s._(
						/*BTDS*/
						"",
						[s._enum(l, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"))]
					);
					break;
				}
				b = s._(
					/*BTDS*/
					"",
					[s._enum(l, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"))]
				);
				break;
			case "CAMERA_AND_MIC":
				if (!(l in g)) throw r("err")("CAMERA_AND_MIC: Invalid feature surface: " + l);
				if (r("WAWebEnvironment").isWindows) {
					var R;
					b = (R = s._enum(l, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum")), s._(
						/*BTDS*/
						"",
						[R, s._implicitParam("=m5", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS.privacy_webcam,
							children: s._(
								/*BTDS*/
								"",
								[R]
							)
						}))]
					));
					break;
				}
				b = s._(
					/*BTDS*/
					"",
					[s._enum(l, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum"))]
				);
				break;
			case "POPUPS_BLOCKED":
				b = m === "safari" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
				break;
			case "SCREEN_SHARE_FAIL":
				b = m === "safari" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
				break;
			case "VIDEO_UPGRADE_FAIL":
				b = s._(
					/*BTDS*/
					""
				);
				break;
			default: throw r("err")("Invalid messaging type: " + c);
		}
		return d.jsx(r("WDSText.react"), {
			colorName: i,
			type: "Body2",
			children: b
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L() {
		o("WAWebModalManager").ModalManager.close(), o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.close();
	}
	function E() {
		switch (o("WAWebUA").UA.browser) {
			case o("WAWebUA").BROWSER_TYPE.CHROME: return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNotificationChromeFaqUrl());
			case o("WAWebUA").BROWSER_TYPE.FIREFOX: return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNotificationFirefoxFaqUrl());
			case o("WAWebUA").BROWSER_TYPE.SAFARI: return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNotificationSafariFaqUrl());
			case o("WAWebUA").BROWSER_TYPE.OPERA: return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNotificationOperaFaqUrl());
			case o("WAWebUA").BROWSER_TYPE.EDGE: return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNotificationEdgeFaqUrl());
			default: return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNotificationChromeFaqUrl());
		}
	}
	l.Messaging = p, l.MicrophoneFeatureSurface = _, l.CameraFeatureSurface = f, l.CameraAndMicrophoneFeatureSurface = g, l.FeatureSurface = h, l.GuidePopupType = C, l.GuidePopup = b, l.guideConfirm = L, l.notificationGuideLearnMore = E;
}), 226);
