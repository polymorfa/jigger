__d("WAWebIntroPanel.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebDesktopUpsellAnimationData",
	"WAWebDesktopUpsellCommonStrings",
	"WAWebDesktopUpsellPlatformAwareHooks",
	"WAWebDesktopUpsellStoreOpener",
	"WAWebDesktopUpsellUtils",
	"WAWebEnvironment",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFeatureFlagName",
	"WAWebIntroMdBetaLogoDarkIcon.react",
	"WAWebIntroMdBetaLogoLightIcon.react",
	"WAWebIntroPanelStyles.stylex",
	"WAWebLockOutlineIcon.react",
	"WAWebLottieAnimationLoadable",
	"WAWebMobilePlatforms",
	"WAWebSubscriptionsGatingUtils",
	"WAWebThemeContext",
	"WAWebVelocityAnimate",
	"WAWebWaLogoIcon.react",
	"WAWebWamEnumWebcNativeUpsellCtaSourceType",
	"WAWebWdsIllWebNativeIcon.react",
	"WAWebWdsSmbIllStartAChatIcon.react",
	"WDSButton.react",
	"WDSText.react",
	"bx",
	"cr:10211",
	"cr:23046",
	"react",
	"stylex",
	"useWAWebDesktopUpsellWamImpression",
	"useWAWebExternalBetaOptIn",
	"useWAWebGetFeatureFlag"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m, p = m || (m = o("react")), _ = m, f = _.useContext, g = _.useEffect, h = _.useImperativeHandle, y = _.useRef, C = {
		whatsappLogo: {
			color: "x1vef352",
			display: "x1rg5ohu",
			$$css: !0
		},
		textContainer: {
			opacity: "xg01cxk",
			$$css: !0
		},
		mdTextContainer: {
			opacity: "xg01cxk",
			$$css: !0
		},
		mdBetaImage: {
			display: "x1rg5ohu",
			marginTop: "xdj266r",
			marginInlineEnd: "x11t971q",
			marginBottom: "xat24cr",
			marginInlineStart: "xvc5jky",
			$$css: !0
		},
		spacingSingleBottom: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		spacingTripleBottom: {
			marginBottom: "x14mdic9",
			$$css: !0
		},
		spacingTripleTop: {
			marginTop: "x9u28bd",
			$$css: !0
		},
		animation: {
			width: "x9r4l05",
			height: "x1ebt64t",
			$$css: !0
		}
	};
	function b(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, c), l = i.animate, m = f(o("WAWebThemeContext").ThemeContext), _ = o("WAWebDesktopUpsellUtils").getUserDesktopOs(), b = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), R = b[0], L = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(), E = y(null), k = y(null);
		g(function() {
			var t = E.current, n = k.current;
			l ? (r("WAWebVelocityAnimate")(t, {
				scale: [1, 0],
				opacity: [1, 0]
			}, {
				delay: 1340,
				duration: 180,
				easing: [
					.05,
					1.02,
					0,
					1.01
				]
			}).catch(function() {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[intro-panel] Velocity animate failed"])));
			}), r("WAWebVelocityAnimate")(n, {
				translateY: [0, 80],
				opacity: [1, 0]
			}, {
				delay: 1300,
				duration: 140,
				easing: [
					.05,
					1.02,
					0,
					1.01
				]
			}).catch(function() {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[intro-panel] 2nd Velocity animate failed"])));
			})) : (t && (t.style.opacity = "1"), n && (n.style.opacity = "1"));
		}, []);
		var I = y(null), T = function(t) {
			return I.current ? I.current.contains(t) : !1;
		};
		h(a, function() {
			return { containsDOMNode: T };
		});
		var D = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled, x, $, P, N = C.textContainer, M = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformCheck();
		o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression({
			source: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL,
			isCtaVisible: M,
			isBeta: M && L,
			isBetaUser: R
		});
		var w = (n("cr:23046") == null ? void 0 : n("cr:23046").isWindowsHybridEnabled()) === !0, A = o("WAWebMobilePlatforms").isSMB();
		if (M) {
			x = p.jsx("div", {
				ref: E,
				className: "xg01cxk x1g0ag68 x78zum5 xl56j7k",
				children: p.jsx(v, { userDesktopOs: _ })
			});
			var F = p.jsx(r("WDSText.react"), {
				type: "LargeTitle1",
				colorName: "contentDefault",
				isPrimaryHeading: !0,
				xstyle: [C.spacingSingleBottom, C.spacingTripleTop],
				children: o("WAWebDesktopUpsellCommonStrings").getDesktopUpsellDownloadWhatsAppTitle(L)
			}), O = p.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				xstyle: C.spacingTripleBottom,
				children: o("WAWebDesktopUpsellCommonStrings").getDesktopUpsellIntroPanelText(L)
			});
			$ = p.jsxs(p.Fragment, { children: [F, O] }), P = S({
				buttonText: o("WAWebDesktopUpsellCommonStrings").getDesktopAppDownloadFromStoreBtnLabel(L),
				onClick: function() {
					o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
						ctaSource: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL,
						isBetaUpsell: L,
						isBetaUser: R
					});
				}
			});
		} else {
			N = C.mdTextContainer;
			var B;
			w ? B = p.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
				height: 56,
				width: 56,
				iconXstyle: C.whatsappLogo
			}) : A ? B = p.jsx(o("WAWebWdsSmbIllStartAChatIcon.react").WdsSmbIllStartAChatIcon, { xstyle: C.mdBetaImage }) : B = m.theme === "light" ? p.jsx(o("WAWebIntroMdBetaLogoLightIcon.react").IntroMdBetaLogoLightIcon, {
				xstyle: C.mdBetaImage,
				width: 360
			}) : p.jsx(o("WAWebIntroMdBetaLogoDarkIcon.react").IntroMdBetaLogoDarkIcon, {
				xstyle: C.mdBetaImage,
				width: 360
			}), x = p.jsx("div", {
				ref: E,
				className: "xg01cxk x1g0ag68 x78zum5 xl56j7k",
				children: B
			});
			var W;
			A ? W = r("WAWebFbtCommon")("WhatsApp Business on Web") : W = r("WAWebFbtCommon")("WhatsApp Web"), r("WAWebEnvironment").isWindows && (W = r("WAWebFbtCommon")("WhatsApp for Windows"));
			var q = p.jsx("div", {
				className: "x3nfvp2 x1q9ymp4 x579bpy x1iikomf x1srq1fq x14ug900",
				children: p.jsx("h1", {
					"data-testid": "intro-title",
					children: W
				})
			});
			D ? $ = p.jsxs(p.Fragment, { children: [q, p.jsxs("div", {
				"data-testid": "intro-text",
				className: "x98l61r x1f6kntn xo1l8bm x1fc57z9 xhslqc4",
				children: [
					s._(
						/*BTDS*/
						""
					),
					p.jsx("br", {}),
					s._(
						/*BTDS*/
						""
					)
				]
			})] }) : o("WAWebSubscriptionsGatingUtils").billingEnabled() ? $ = p.jsxs(p.Fragment, { children: [q, p.jsxs("div", {
				"data-testid": "intro-text",
				className: "x98l61r x1f6kntn xo1l8bm x1fc57z9 xhslqc4",
				children: [
					s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m0", p.jsx("strong", { children: s._(
							/*BTDS*/
							""
						) }))]
					),
					p.jsx("br", {}),
					s._(
						/*BTDS*/
						""
					),
					p.jsx("br", {}),
					p.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getWhatsAppBusinessPremiumFaqUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})] }) : A ? $ = p.jsxs(p.Fragment, { children: [q, p.jsxs("div", {
				"data-testid": "intro-text",
				className: "x98l61r x1f6kntn xo1l8bm x1fc57z9 xhslqc4",
				children: [s._(
					/*BTDS*/
					""
				), p.jsx("br", {})]
			})] }) : $ = p.jsxs(p.Fragment, { children: [q, p.jsxs("div", {
				"data-testid": "intro-text",
				className: "x98l61r x1f6kntn xo1l8bm x1fc57z9 xhslqc4",
				children: [
					s._(
						/*BTDS*/
						""
					),
					p.jsx("br", {}),
					s._(
						/*BTDS*/
						""
					)
				]
			})] });
		}
		var U = p.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
			height: 20,
			width: 20
		});
		return p.jsx("div", babelHelpers.extends({}, (d || (d = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.intro), {
			ref: I,
			children: p.jsxs("div", babelHelpers.extends({}, d.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.body), {
				"data-testid": "intro-panel",
				children: [
					x,
					p.jsxs("div", babelHelpers.extends({ ref: k }, d.props(N), { children: [
						$,
						P,
						n("cr:10211") ? p.jsx("div", {
							className: "x1hogkm0",
							children: p.jsx(n("cr:10211"), {})
						}) : null
					] })),
					p.jsxs("div", babelHelpers.extends({}, d.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encrypted), { children: [
						p.jsx("span", babelHelpers.extends({}, d.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encryptedIcon), { children: U })),
						" ",
						s._(
							/*BTDS*/
							""
						)
					] }))
				]
			}))
		}));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.userDesktopOs, n = o("WAWebThemeContext").useIsDarkTheme(), a = r("bx")("482"), i = r("bx")("484"), l = o("WAWebABProps").getABPropConfigValue("desktop_upsell_intro_panel_illustration_variant");
		if (l === 1) a = r("bx")("32107"), i = r("bx")("32108");
		else {
			if (l === 2) return p.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
				loop: !1,
				autoplay: !0,
				data: r("WAWebDesktopUpsellAnimationData")(n),
				xstyle: C.animation
			});
			if (l === 3) return p.jsx(o("WAWebWdsIllWebNativeIcon.react").WdsIllWebNativeIcon, {
				width: 270,
				height: 180
			});
		}
		return p.jsx("img", {
			src: t === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS ? r("bx").getURL(a) : r("bx").getURL(i),
			width: 320,
			alt: ""
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e != null ? e : {}, n = t.buttonText, o = t.onClick;
		return n != null && o != null ? p.jsx("div", {
			className: "x1ci5j9l x78zum5 xl56j7k",
			children: p.jsx(r("WDSButton.react"), {
				variant: "filled",
				type: "default",
				size: "medium",
				onPress: o,
				label: n
			})
		}) : null;
	}
	l.default = b;
}), 226);
