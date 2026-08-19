__d("WAWebLinkDeviceScreen.react", [
	"Promise",
	"WAWebAutoLogoutGating",
	"WAWebDesktopUpsellQRCodeSlimBanner.react",
	"WAWebDesktopUpsellStoreOpener",
	"WAWebEnvironment",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebLandingFooter.react",
	"WAWebLandingHeader.react",
	"WAWebLandingPromoGating",
	"WAWebLinkDeviceAppleTouchScreen.react",
	"WAWebLinkDeviceMethod.react",
	"WAWebLinkDeviceScreenGatedUtils",
	"WAWebODS",
	"WAWebRobotoVariableFontLoadable",
	"WAWebSmsRegistrationSendSmsCall",
	"WAWebUA",
	"WAWebWamEnumWebcNativeUpsellCtaSourceType",
	"asyncToGeneratorRuntime",
	"qex",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"useWAWebDesktopUpsellQRCodeBannerType",
	"useWAWebLinkDeviceAutoLogout",
	"useWAWebSmsRegistration"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useState, f = r("requireDeferred")("WAWebLinkDeviceExperience").__setRef("WAWebLinkDeviceScreen.react"), g = r("requireDeferred")("WAWebLinkDeviceQplHelpLinkEvent").__setRef("WAWebLinkDeviceScreen.react"), h = r("requireDeferred")("WAWebPageLoadLogging").__setRef("WAWebLinkDeviceScreen.react"), y = r("requireDeferred")("useWAWebDesktopUpsellQplImpression").__setRef("WAWebLinkDeviceScreen.react"), C = {
		wrapper: {
			height: "x1dr59a3",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			paddingTop: "xyinxu5",
			paddingInlineEnd: "xp48ta0",
			paddingBottom: "x1g2khh7",
			paddingInlineStart: "xtssl2i",
			minWidth: "xp9ttsr",
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			color: "xowvryd",
			$$css: !0
		},
		headerFooterContainer: {
			width: "xh8yej3",
			height: "xwzfr38",
			$$css: !0
		},
		wrapperWeb: {
			background: "xe4h88v",
			$$css: !0
		},
		wrapperWindows: {
			background: "xp8kixx",
			$$css: !0
		},
		upsellBannerContainer: {
			display: "x1lliihq",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function b(t) {
		var a;
		o("WAWebRobotoVariableFontLoadable").useApplyRobotoFont(), m(function() {
			var e = r("qex")._("5285");
			e === "control" ? r("WAWebODS").incr("web.client.wa_logged_out_qe_universe_group_control") : e === "test" && r("WAWebODS").incr("web.client.wa_logged_out_qe_universe_group_test");
		}, []), m(function() {
			(e || (e = n("Promise"))).all([h.load(), f.load()]).then(function(e) {
				var n = e[0].endPageLoadQpl, o = e[1].getWebCompanionLinkDeviceExperienceId;
				n(!0, o(t.apiCmd), r("WAWebL10N").getLocale());
			});
		}, void 0);
		var i = r("useWAWebLinkDeviceAutoLogout")(), l = i.autoLogoutEnabled, s = i.autoLogoutIframe, c = i.autoLogoutIframeLoaded, b = i.handleAutoLogoutToggle, S = o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() || l, R = !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && c, L = _(t.apiCmd), E = L[0], k = L[1], I = _(!0), T = I[0], D = I[1], x = _(o("WAWebUA").UA.isOculusBrowser), $ = x[0], P = x[1];
		m(function() {
			k(t.apiCmd);
		}, [t.apiCmd]);
		var N = o("useWAWebDesktopUpsellQRCodeBannerType").useWAWebDesktopUpsellQRCodeBannerType(E), M = r("useWAWebSmsRegistration")(), w = p(function() {
			return {
				onAutoLogoutToggle: b,
				autoLogoutEnabled: S,
				apiCmd: E,
				setApiCmd: k,
				smsRegistration: M,
				isLinkingWithPhoneNumber: $,
				setIsLinkingWithPhoneNumber: P
			};
		}, [
			E,
			b,
			$,
			S,
			M
		]), A = d(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("WAWebLinkDeviceScreenGatedUtils").getOptimizedRegFromWebVariant() === "test" ? k({
				resultType: "WEB_REGISTRATION",
				data: { url: "/" }
			}) : window.open("https://faq.whatsapp.com/497209988909970", "_blank");
			var e = yield g.load(), t = e.WAWebLinkDeviceQplHelpLinkEvent, n = e.WebcPairingScreenLinkType;
			yield t(n.GET_STARTED, E);
		}), []), F = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = yield g.load(), r = n.WAWebLinkDeviceQplHelpLinkEvent, o = n.WebcPairingScreenLinkType;
				yield r(o.LANDING_PROMO_GET_STARTED, E), yield M.sendSms(e, t, void 0, { skipContinueQpl: !0 });
			});
			return function(t, n) {
				return e.apply(this, arguments);
			};
		})(), [E, M]), O = p(function() {
			return babelHelpers.extends({}, M, { sendSms: F });
		}, [F, M]);
		if (R) return u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			className: {
				0: "x1dr59a3 xw2csxc x1odjw0f xyinxu5 xp48ta0 x1g2khh7 xtssl2i xp9ttsr x6s0dn4 x9f619 xowvryd xp8kixx",
				1: "x1dr59a3 xw2csxc x1odjw0f xyinxu5 xp48ta0 x1g2khh7 xtssl2i xp9ttsr x6s0dn4 x9f619 xowvryd xe4h88v"
			}[!!r("WAWebEnvironment").isWeb << 0],
			children: s
		});
		if (T && o("WAWebLinkDeviceScreenGatedUtils").isAppleTouchscreenOverlayEnabled()) return u.jsx(r("WAWebLinkDeviceAppleTouchScreen.react"), {
			onContinueToWeb: function() {
				g.load().then(function(e) {
					var t = e.WAWebLinkDeviceQplHelpLinkEvent, n = e.WebcPairingScreenLinkType;
					t(n.APPLE_TOUCHSCREEN_OVERLAY_CONTINUE_TO_WEB, E);
				}), D(!1);
			},
			onOpenAppStore: function() {
				y.load().then(function(e) {
					var t = e.logDesktopUpsellQplEvent;
					t("click", o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY, E);
				}), o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
					ctaSource: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY,
					isBetaUser: !1
				});
			}
		});
		var B = u.jsx(v, {
			upsellBannerType: N,
			apiCmd: t.apiCmd
		}), W = (E == null ? void 0 : E.resultType) === "WEB_REGISTRATION" && o("WAWebLinkDeviceScreenGatedUtils").getOptimizedRegFromWebVariant() === "test" || (E == null ? void 0 : E.resultType) === "WEB_REGISTRATION_CAMPAIGN", q = ((a = M.serverResponse) == null ? void 0 : a.status) === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.SENT, U = !W && !q && (!o("WAWebLandingPromoGating").isLandingPromoEnabled() || !$);
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: [C.wrapper, r("WAWebEnvironment").isWeb ? C.wrapperWeb : C.wrapperWindows],
			children: [
				s,
				u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: C.headerFooterContainer,
					shrink: 0,
					children: u.jsx(r("WAWebLandingHeader.react"), {
						showAppDownloadButton: N === o("useWAWebDesktopUpsellQRCodeBannerType").WAWebDesktopUpsellQRCodeBannerType.NONE && !W,
						surface: "link-device-screen"
					})
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					grow: 1,
					shrink: 0,
					rowGap: 16,
					children: [
						B,
						u.jsx("div", {
							className: "x1lliihq",
							children: u.jsx(o("WAWebFlex.react").FlexItem, {
								align: "center",
								justify: "center",
								className: "xy296fx xbl0rts x4i7bpe x15zmtp0 x1sgudl8 x1oiqv2n x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x12peec7 x91od0 xvl3i4w xfqsd3n xzg3blf x191sbug",
								children: u.jsx(r("WAWebLinkDeviceMethod.react"), babelHelpers.extends({}, w))
							})
						}),
						u.jsx(o("WAWebFlex.react").FlexItem, {
							shrink: 0,
							children: U && u.jsx(r("WAWebLandingFooter.react"), {
								isWebReg: W,
								onGetStartedNav: A,
								smsRegistration: O
							})
						})
					]
				}),
				u.jsx(o("WAWebFlex.react").FlexItem, { xstyle: C.headerFooterContainer })
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = o("react-compiler-runtime").c(3), n = e.apiCmd, a = e.upsellBannerType, i;
		if (t[0] !== n || t[1] !== a) {
			var l = [C.upsellBannerContainer];
			i = a === o("useWAWebDesktopUpsellQRCodeBannerType").WAWebDesktopUpsellQRCodeBannerType.SLIM && u.jsx("div", {
				className: "x1lliihq xh8yej3",
				children: u.jsx(r("WAWebDesktopUpsellQRCodeSlimBanner.react"), { apiCmd: n })
			}), t[0] = n, t[1] = a, t[2] = i;
		} else i = t[2];
		return i;
	}
	l.default = b;
}), 98);
