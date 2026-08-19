__d("WAWebLinkDeviceScreen.react", [
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
	"qex",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"useWAWebDesktopUpsellQRCodeBannerType",
	"useWAWebLinkDeviceAutoLogout",
	"useWAWebSmsRegistration"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useState, _ = r("requireDeferred")("WAWebLinkDeviceExperience").__setRef("WAWebLinkDeviceScreen.react"), f = r("requireDeferred")("WAWebLinkDeviceQplHelpLinkEvent").__setRef("WAWebLinkDeviceScreen.react"), g = r("requireDeferred")("WAWebPageLoadLogging").__setRef("WAWebLinkDeviceScreen.react"), h = r("requireDeferred")("useWAWebDesktopUpsellQplImpression").__setRef("WAWebLinkDeviceScreen.react"), y = {
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
	function C(e) {
		var t;
		o("WAWebRobotoVariableFontLoadable").useApplyRobotoFont(), d(function() {
			var e = r("qex")._("5285");
			e === "control" ? r("WAWebODS").incr("web.client.wa_logged_out_qe_universe_group_control") : e === "test" && r("WAWebODS").incr("web.client.wa_logged_out_qe_universe_group_test");
		}, []), d(function() {
			Promise.all([g.load(), _.load()]).then(function(t) {
				var n = t[0].endPageLoadQpl, o = t[1].getWebCompanionLinkDeviceExperienceId;
				n(!0, o(e.apiCmd), r("WAWebL10N").getLocale());
			});
		}, void 0);
		var n = r("useWAWebLinkDeviceAutoLogout")(), a = n.autoLogoutEnabled, i = n.autoLogoutIframe, l = n.autoLogoutIframeLoaded, u = n.handleAutoLogoutToggle, C = o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() || a, v = !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && l, S = p(e.apiCmd), R = S[0], L = S[1], E = p(!0), k = E[0], I = E[1], T = p(o("WAWebUA").UA.isOculusBrowser), D = T[0], x = T[1];
		d(function() {
			L(e.apiCmd);
		}, [e.apiCmd]);
		var $ = o("useWAWebDesktopUpsellQRCodeBannerType").useWAWebDesktopUpsellQRCodeBannerType(R), P = r("useWAWebSmsRegistration")(), N = m(function() {
			return {
				onAutoLogoutToggle: u,
				autoLogoutEnabled: C,
				apiCmd: R,
				setApiCmd: L,
				smsRegistration: P,
				isLinkingWithPhoneNumber: D,
				setIsLinkingWithPhoneNumber: x
			};
		}, [
			R,
			u,
			D,
			C,
			P
		]), M = c(async function() {
			o("WAWebLinkDeviceScreenGatedUtils").getOptimizedRegFromWebVariant() === "test" ? L({
				resultType: "WEB_REGISTRATION",
				data: { url: "/" }
			}) : window.open("https://faq.whatsapp.com/497209988909970", "_blank");
			var e = await f.load(), t = e.WAWebLinkDeviceQplHelpLinkEvent, n = e.WebcPairingScreenLinkType;
			await t(n.GET_STARTED, R);
		}, []), w = c(async function(e, t) {
			var n = await f.load(), r = n.WAWebLinkDeviceQplHelpLinkEvent, o = n.WebcPairingScreenLinkType;
			await r(o.LANDING_PROMO_GET_STARTED, R), await P.sendSms(e, t, void 0, { skipContinueQpl: !0 });
		}, [R, P]), A = m(function() {
			return babelHelpers.extends({}, P, { sendSms: w });
		}, [w, P]);
		if (v) return s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			className: {
				0: "x1dr59a3 xw2csxc x1odjw0f xyinxu5 xp48ta0 x1g2khh7 xtssl2i xp9ttsr x6s0dn4 x9f619 xowvryd xp8kixx",
				1: "x1dr59a3 xw2csxc x1odjw0f xyinxu5 xp48ta0 x1g2khh7 xtssl2i xp9ttsr x6s0dn4 x9f619 xowvryd xe4h88v"
			}[!!r("WAWebEnvironment").isWeb << 0],
			children: i
		});
		if (k && o("WAWebLinkDeviceScreenGatedUtils").isAppleTouchscreenOverlayEnabled()) return s.jsx(r("WAWebLinkDeviceAppleTouchScreen.react"), {
			onContinueToWeb: function() {
				f.load().then(function(e) {
					var t = e.WAWebLinkDeviceQplHelpLinkEvent, n = e.WebcPairingScreenLinkType;
					t(n.APPLE_TOUCHSCREEN_OVERLAY_CONTINUE_TO_WEB, R);
				}), I(!1);
			},
			onOpenAppStore: function() {
				h.load().then(function(e) {
					var t = e.logDesktopUpsellQplEvent;
					t("click", o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY, R);
				}), o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
					ctaSource: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY,
					isBetaUser: !1
				});
			}
		});
		var F = s.jsx(b, {
			upsellBannerType: $,
			apiCmd: e.apiCmd
		}), O = (R == null ? void 0 : R.resultType) === "WEB_REGISTRATION" && o("WAWebLinkDeviceScreenGatedUtils").getOptimizedRegFromWebVariant() === "test" || (R == null ? void 0 : R.resultType) === "WEB_REGISTRATION_CAMPAIGN", B = ((t = P.serverResponse) == null ? void 0 : t.status) === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.SENT, W = !O && !B && (!o("WAWebLandingPromoGating").isLandingPromoEnabled() || !D);
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: [y.wrapper, r("WAWebEnvironment").isWeb ? y.wrapperWeb : y.wrapperWindows],
			children: [
				i,
				s.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: y.headerFooterContainer,
					shrink: 0,
					children: s.jsx(r("WAWebLandingHeader.react"), {
						showAppDownloadButton: $ === o("useWAWebDesktopUpsellQRCodeBannerType").WAWebDesktopUpsellQRCodeBannerType.NONE && !O,
						surface: "link-device-screen"
					})
				}),
				s.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					grow: 1,
					shrink: 0,
					rowGap: 16,
					children: [
						F,
						s.jsx("div", {
							className: "x1lliihq",
							children: s.jsx(o("WAWebFlex.react").FlexItem, {
								align: "center",
								justify: "center",
								className: "xy296fx xbl0rts x4i7bpe x15zmtp0 x1sgudl8 x1oiqv2n x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x12peec7 x91od0 xvl3i4w xfqsd3n xzg3blf x191sbug",
								children: s.jsx(r("WAWebLinkDeviceMethod.react"), babelHelpers.extends({}, N))
							})
						}),
						s.jsx(o("WAWebFlex.react").FlexItem, {
							shrink: 0,
							children: W && s.jsx(r("WAWebLandingFooter.react"), {
								isWebReg: O,
								onGetStartedNav: M,
								smsRegistration: A
							})
						})
					]
				}),
				s.jsx(o("WAWebFlex.react").FlexItem, { xstyle: y.headerFooterContainer })
			]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = o("react-compiler-runtime").c(3), n = e.apiCmd, a = e.upsellBannerType, i;
		if (t[0] !== n || t[1] !== a) {
			var l = [y.upsellBannerContainer];
			i = a === o("useWAWebDesktopUpsellQRCodeBannerType").WAWebDesktopUpsellQRCodeBannerType.SLIM && s.jsx("div", {
				className: "x1lliihq xh8yej3",
				children: s.jsx(r("WAWebDesktopUpsellQRCodeSlimBanner.react"), { apiCmd: n })
			}), t[0] = n, t[1] = a, t[2] = i;
		} else i = t[2];
		return i;
	}
	l.default = C;
}), 98);
