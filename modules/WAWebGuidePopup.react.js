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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(3), n = e.children, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "x1rg5ohu xk50ysn" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = d.jsx("strong", babelHelpers.extends({}, r, { children: n })), t[1] = n, t[2] = a) : a = t[2], a;
	}
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
		var t = o("react-compiler-runtime").c(5), n = e.colorName, a = e.messaging, i;
		t[0] !== a ? (i = a === "BACKGROUND_SYNC" || a === "NOTIFICATIONS" ? s._(
			/*BTDS*/
			""
		) : a === "CAMERA" || a === "CAMERA_FAIL" ? s._(
			/*BTDS*/
			""
		) : a === "CAMERA_MISSING" ? s._(
			/*BTDS*/
			""
		) : a === "MIC_MISSING" ? s._(
			/*BTDS*/
			""
		) : a === "MIC_FAIL" || a === "MIC" ? s._(
			/*BTDS*/
			""
		) : a === "CAMERA_AND_MIC_FAIL" || a === "CAMERA_AND_MIC" ? s._(
			/*BTDS*/
			""
		) : a === "CAMERA_AND_MIC_MISSING" ? s._(
			/*BTDS*/
			""
		) : a === "POPUPS_BLOCKED" ? s._(
			/*BTDS*/
			""
		) : a === "SCREEN_SHARE_FAIL" ? s._(
			/*BTDS*/
			""
		) : a === "VIDEO_UPGRADE_FAIL" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + a);
		})(), t[0] = a, t[1] = i) : i = t[1];
		var l;
		return t[2] !== n || t[3] !== i ? (l = d.jsx(r("WDSText.react"), {
			colorName: n,
			type: "Headline2",
			children: i
		}), t[2] = n, t[3] = i, t[4] = l) : l = t[4], l;
	}
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
		var t = o("react-compiler-runtime").c(64), n = e.colorName, a = e.featureSurface, i = e.isNewLogicForDisabledNotifications, l = e.messaging, u = o("WAWebUA").UA.browser, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = d.jsx("div", {
			className: "x6s0dn4 xl56j7k x3nfvp2 xxymvpz xlup9mm x1kky2od xg5evlq xup1sw1 x1tiyuxx x1uc92m x1nbhmlj x181vq82 xt8t1vi x1xc408v x129tdwq x15urzxu x4wrhlh",
			children: d.jsx(o("WAWebChromePermissionsIcon.react").ChromePermissionsIcon, {
				height: 13,
				width: 13
			})
		}), t[0] = c) : c = t[0];
		var m = c, p;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (p = d.jsx("div", {
			className: "x7a106z xl56j7k x3nfvp2 x16dsc37 xxk0z11 xvy4d1p x1sbwfh8 x16q7b9a",
			children: d.jsx(r("WDSIconIcLock.react"), {
				height: 20,
				width: 20
			})
		}), t[1] = p) : p = t[1];
		var h = p, C = u === "edge" ? h : u === "chrome" ? m : u === "opera" ? h : u === "firefox" ? m : null, b;
		e: switch (l) {
			case "NOTIFICATIONS": {
				if (i && C != null) {
					var v;
					t[2] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
						/*BTDS*/
						"",
						[s._param("browser_permissions_icon", C), s._implicitParam("=m3", d.jsx(y, { children: s._(
							/*BTDS*/
							""
						) }))]
					), t[2] = v) : v = t[2];
					var R;
					t[3] !== n ? (R = d.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: n,
						children: v
					}), t[3] = n, t[4] = R) : R = t[4], b = R;
					break e;
				}
				var L;
				t[5] === Symbol.for("react.memo_cache_sentinel") ? (L = u === "firefox" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), t[5] = L) : L = t[5], b = L;
				break e;
			}
			case "BACKGROUND_SYNC": {
				var E;
				t[6] === Symbol.for("react.memo_cache_sentinel") ? (E = u === "firefox" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), t[6] = E) : E = t[6], b = E;
				break e;
			}
			case "CAMERA_FAIL": {
				if (!(a in f)) throw r("err")("CAMERA_FAIL: Invalid feature surface: " + a);
				if (r("WAWebEnvironment").isWindows) {
					var k;
					if (t[7] !== a) {
						var I;
						k = (I = s._enum(a, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum")), s._(
							/*BTDS*/
							"",
							[I, s._implicitParam("=m5", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS.privacy_webcam,
								children: s._(
									/*BTDS*/
									"",
									[I]
								)
							}))]
						)), t[7] = a, t[8] = k;
					} else k = t[8];
					b = k;
					break e;
				}
				var T;
				if (t[9] !== a) {
					var D;
					T = u === "safari" ? s._(
						/*BTDS*/
						"",
						[s._enum(a, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"))]
					) : (D = s._enum(a, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum")), s._(
						/*BTDS*/
						"",
						[
							D,
							s._param("browser_permissions_icon", C),
							s._implicitParam("=m6", d.jsx(y, { children: s._(
								/*BTDS*/
								"",
								[D]
							) }))
						]
					)), t[9] = a, t[10] = T;
				} else T = t[10];
				var x;
				t[11] !== a ? (x = S(a), t[11] = a, t[12] = x) : x = t[12];
				var $;
				t[13] !== T || t[14] !== x ? ($ = d.jsxs(d.Fragment, { children: [
					T,
					" ",
					x
				] }), t[13] = T, t[14] = x, t[15] = $) : $ = t[15], b = $;
				break e;
			}
			case "CAMERA_MISSING": {
				if (!(a in f)) throw r("err")("CAMERA_MISSING: Invalid feature surface: " + a);
				if (r("WAWebEnvironment").isWindows) {
					var P;
					t[16] !== a ? (P = s._(
						/*BTDS*/
						"",
						[s._enum(a, r("WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum"))]
					), t[16] = a, t[17] = P) : P = t[17], b = P;
					break e;
				}
				var N;
				t[18] !== a ? (N = s._(
					/*BTDS*/
					"",
					[s._enum(a, r("WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum"))]
				), t[18] = a, t[19] = N) : N = t[19], b = N;
				break e;
			}
			case "MIC_FAIL": {
				if (!(a in _)) throw r("err")("MIC_FAIL: Invalid feature surface: " + a);
				if (r("WAWebEnvironment").isWindows) {
					var M;
					if (t[20] !== a) {
						var w;
						M = (w = s._enum(a, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum")), s._(
							/*BTDS*/
							"",
							[w, s._implicitParam("=m5", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: "ms-settings:privacy-microphone",
								children: s._(
									/*BTDS*/
									"",
									[w]
								)
							}))]
						)), t[20] = a, t[21] = M;
					} else M = t[21];
					b = M;
					break e;
				}
				var A;
				if (t[22] !== a) {
					var F;
					A = u === "safari" ? s._(
						/*BTDS*/
						"",
						[s._enum(a, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"))]
					) : (F = s._enum(a, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum")), s._(
						/*BTDS*/
						"",
						[
							F,
							s._param("browser_permissions_icon", C),
							s._implicitParam("=m6", d.jsx(y, { children: s._(
								/*BTDS*/
								"",
								[F]
							) }))
						]
					)), t[22] = a, t[23] = A;
				} else A = t[23];
				var O;
				t[24] !== a ? (O = S(a), t[24] = a, t[25] = O) : O = t[25];
				var B;
				t[26] !== A || t[27] !== O ? (B = d.jsxs(d.Fragment, { children: [
					A,
					" ",
					O
				] }), t[26] = A, t[27] = O, t[28] = B) : B = t[28], b = B;
				break e;
			}
			case "MIC_MISSING": {
				if (!(a in _)) throw r("err")("MIC_MISSING: Invalid feature surface: " + a);
				if (r("WAWebEnvironment").isWindows) {
					var W;
					t[29] !== a ? (W = s._(
						/*BTDS*/
						"",
						[s._enum(a, r("WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum"))]
					), t[29] = a, t[30] = W) : W = t[30], b = W;
					break e;
				}
				var q;
				t[31] !== a ? (q = s._(
					/*BTDS*/
					"",
					[s._enum(a, r("WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum"))]
				), t[31] = a, t[32] = q) : q = t[32], b = q;
				break e;
			}
			case "CAMERA_AND_MIC_FAIL": {
				if (!(a in g)) throw r("err")("CAMERA_AND_MIC_FAIL: Invalid feature surface: " + a);
				if (r("WAWebEnvironment").isWindows) {
					var U;
					if (t[33] !== a) {
						var V;
						U = (V = s._enum(a, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum")), s._(
							/*BTDS*/
							"",
							[V, s._implicitParam("=m5", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: "ms-settings:privacy-microphone",
								children: s._(
									/*BTDS*/
									"",
									[V]
								)
							}))]
						)), t[33] = a, t[34] = U;
					} else U = t[34];
					b = U;
					break e;
				}
				var H;
				if (t[35] !== a) {
					var G;
					H = u === "safari" ? s._(
						/*BTDS*/
						"",
						[s._enum(a, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum"))]
					) : (G = s._enum(a, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum")), s._(
						/*BTDS*/
						"",
						[
							G,
							s._param("browser_permissions_icon", C),
							s._implicitParam("=m6", d.jsx(y, { children: s._(
								/*BTDS*/
								"",
								[G]
							) })),
							s._implicitParam("=m8", d.jsx(y, { children: s._(
								/*BTDS*/
								"",
								[G]
							) }))
						]
					)), t[35] = a, t[36] = H;
				} else H = t[36];
				var z;
				t[37] !== a ? (z = S(a), t[37] = a, t[38] = z) : z = t[38];
				var j;
				t[39] !== H || t[40] !== z ? (j = d.jsxs(d.Fragment, { children: [
					H,
					" ",
					z
				] }), t[39] = H, t[40] = z, t[41] = j) : j = t[41], b = j;
				break e;
			}
			case "CAMERA_AND_MIC_MISSING": {
				if (!(a in g)) throw r("err")("MIC_MISSING: Invalid feature surface: " + a);
				if (r("WAWebEnvironment").isWindows) {
					var K;
					t[42] !== a ? (K = s._(
						/*BTDS*/
						"",
						[s._enum(a, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum"))]
					), t[42] = a, t[43] = K) : K = t[43], b = K;
					break e;
				}
				var Q;
				t[44] !== a ? (Q = s._(
					/*BTDS*/
					"",
					[s._enum(a, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum"))]
				), t[44] = a, t[45] = Q) : Q = t[45], b = Q;
				break e;
			}
			case "CAMERA": {
				if (!(a in f)) throw r("err")("CAMERA: Invalid feature surface: " + a);
				if (r("WAWebEnvironment").isWindows) {
					var X;
					if (t[46] !== a) {
						var Y;
						X = (Y = s._enum(a, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum")), s._(
							/*BTDS*/
							"",
							[Y, s._implicitParam("=m5", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS.privacy_webcam,
								children: s._(
									/*BTDS*/
									"",
									[Y]
								)
							}))]
						)), t[46] = a, t[47] = X;
					} else X = t[47];
					b = X;
					break e;
				}
				var J;
				t[48] !== a ? (J = s._(
					/*BTDS*/
					"",
					[s._enum(a, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"))]
				), t[48] = a, t[49] = J) : J = t[49], b = J;
				break e;
			}
			case "MIC": {
				if (!(a in _)) throw r("err")("MIC: Invalid feature surface: " + a);
				if (r("WAWebEnvironment").isWindows) {
					var Z;
					t[50] !== a ? (Z = s._(
						/*BTDS*/
						"",
						[s._enum(a, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"))]
					), t[50] = a, t[51] = Z) : Z = t[51], b = Z;
					break e;
				}
				var ee;
				t[52] !== a ? (ee = s._(
					/*BTDS*/
					"",
					[s._enum(a, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"))]
				), t[52] = a, t[53] = ee) : ee = t[53], b = ee;
				break e;
			}
			case "CAMERA_AND_MIC": {
				if (!(a in g)) throw r("err")("CAMERA_AND_MIC: Invalid feature surface: " + a);
				if (r("WAWebEnvironment").isWindows) {
					var te;
					if (t[54] !== a) {
						var ne;
						te = (ne = s._enum(a, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum")), s._(
							/*BTDS*/
							"",
							[ne, s._implicitParam("=m5", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS.privacy_webcam,
								children: s._(
									/*BTDS*/
									"",
									[ne]
								)
							}))]
						)), t[54] = a, t[55] = te;
					} else te = t[55];
					b = te;
					break e;
				}
				var re;
				t[56] !== a ? (re = s._(
					/*BTDS*/
					"",
					[s._enum(a, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum"))]
				), t[56] = a, t[57] = re) : re = t[57], b = re;
				break e;
			}
			case "POPUPS_BLOCKED": {
				var oe;
				t[58] === Symbol.for("react.memo_cache_sentinel") ? (oe = u === "safari" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), t[58] = oe) : oe = t[58], b = oe;
				break e;
			}
			case "SCREEN_SHARE_FAIL": {
				var ae;
				t[59] === Symbol.for("react.memo_cache_sentinel") ? (ae = u === "safari" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), t[59] = ae) : ae = t[59], b = ae;
				break e;
			}
			case "VIDEO_UPGRADE_FAIL": {
				var ie;
				t[60] === Symbol.for("react.memo_cache_sentinel") ? (ie = s._(
					/*BTDS*/
					""
				), t[60] = ie) : ie = t[60], b = ie;
				break e;
			}
			default: throw r("err")("Invalid messaging type: " + l);
		}
		var le;
		return t[61] !== n || t[62] !== b ? (le = d.jsx(r("WDSText.react"), {
			colorName: n,
			type: "Body2",
			children: b
		}), t[61] = n, t[62] = b, t[63] = le) : le = t[63], le;
	}
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
