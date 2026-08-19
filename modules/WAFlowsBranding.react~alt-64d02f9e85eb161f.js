__d("WAFlowsBranding.react", [
	"fbt",
	"WAFlowsBridgeEvents",
	"WAFlowsCartUtils.react",
	"WAFlowsComponentConstants",
	"WAFlowsConfigurationContext.react",
	"WAFlowsContainerElementIDs",
	"WAFlowsDomainUtils",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsImage.react",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsLabel.react",
	"WAFlowsNativeState",
	"WAFlowsResponseHandler",
	"WAFlowsShoppingCartStateUtils",
	"WAFlowsStateProvider.react",
	"WAFlowsTypes",
	"WAFlowsUtilityConstants",
	"react",
	"stylex",
	"useCurrentScreenMeta"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = {
		size: 16,
		sideMargin: 6.4
	}, f = "x18re5ia-B", g = {
		mainBrandingContainer: {
			paddingTop: "xexx8yu",
			$$css: !0
		},
		mainBrandingContainerPadding: {
			paddingBottom: "x1fh90og",
			$$css: !0
		},
		mainContainerPaddingForEmptyBranding: {
			paddingBottom: "x1t4gjm",
			$$css: !0
		},
		brandingText: {
			fontSize: "x1fsp497",
			$$css: !0
		},
		brandingTextColor: {
			color: "xhslqc4",
			$$css: !0
		},
		brandingTextLink: {
			fontWeight: "x1irvuf2",
			$$css: !0
		}
	}, h = {
		brandingText: {
			fontSize: "xw23nyj",
			$$css: !0
		},
		brandingTextColor: {
			color: "xhslqc4",
			$$css: !0
		},
		brandingContainerStroke: {
			borderTopWidth: "x10b6y01",
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			paddingTop: "x1b58sdr",
			$$css: !0
		}
	}, y = {
		brandingText: {
			fontSize: "xw23nyj",
			$$css: !0
		},
		brandingTextColor: {
			color: "xorj6pj",
			$$css: !0
		},
		brandingContainerStroke: {
			borderTopWidth: "x10b6y01",
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			paddingTop: "x1b58sdr",
			$$css: !0
		},
		brandingTextLink: {
			fontWeight: "x1xlr1w8",
			$$css: !0
		}
	}, C = {
		mainBrandingContainer: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			paddingRight: "xuax084",
			paddingLeft: "xirhts3",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			animationName: "xqcmdr3",
			animationDuration: "xs96ltj",
			animationFillMode: "x10e4vud",
			animationTimingFunction: "x1debuo4",
			$$css: !0
		},
		mainBrandingContainerPadding: {
			paddingBottom: "xmnamis",
			$$css: !0
		},
		containerWithoutFooter: {
			paddingTop: "x1b58sdr",
			$$css: !0
		},
		brandingLogo: {
			borderStartStartRadius: "x1q6v8lz",
			borderStartEndRadius: "x1wsbmip",
			borderEndEndRadius: "x1cjsr6o",
			borderEndStartRadius: "x1tzt72m",
			width: "xcdlrvm",
			height: "x1l36t39",
			marginTop: "xmfemka",
			marginInlineEnd: "x3l7ill",
			marginBottom: "x1nlmwxm",
			marginInlineStart: "xa5b275",
			$$css: !0
		},
		brandingTextWrapper: {
			maxWidth: "x1jfdv30",
			$$css: !0
		},
		brandingText: {
			display: "x1rg5ohu",
			lineHeight: "xl2ypbo",
			letterSpacing: "x12oo3zp",
			whiteSpace: "xuxw1ft",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			paddingTop: "x4p5aij",
			paddingBottom: "x1j85h84",
			fontWeight: "x10vqnp0",
			$$css: !0
		}
	};
	function b() {
		var t, n = o("WAFlowsEnvContext.react").useWAFlowsEnv(), a = n.env, i = o("WAFlowsConfigurationContext.react").useWAFlowsConfiguration(), l = i.hideBranding, u = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), d = u.flowInitData, f = d[0], g = d[1], h = f == null ? void 0 : f.environment.business_name, y = f == null ? void 0 : f.environment.biz_logo, b = o("WAFlowsStateProvider.react").useWAFlowsMeta().isCreatedByLeadGenAI(), S = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), R = S.flowInstanceId, L = p(o("WAFlowsNativeState").NativeContext), E = L.keyboardState.change, k = m(async function() {
			await u.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsLearnMore,
				payload: null,
				fallBackDataForWeb: {},
				hasCallback: !1
			});
		}, [u]), I = o("WAFlowsStateProvider.react").useWAFlowsState(), T = I.internal, D = T.isDatePickerPanelVisible, x = D === void 0 ? !1 : D, $ = T.isOverlayVisible, P = $ === void 0 ? !1 : $, N = T.navBarConfig.title, M = T.shopping, w = r("useCurrentScreenMeta")(), A = ((t = w == null ? void 0 : w.hasFooter) != null ? t : !1) || o("WAFlowsShoppingCartStateUtils").getCartItemsNumber(M) > 0 || (w == null ? void 0 : w.layoutType) === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL, F = (w == null ? void 0 : w.layoutType) !== o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART || N === o("WAFlowsCartUtils.react").MM_DISCLOSURE_TITLE, O = v(a.platform);
		if (o("WAFlowsResponseHandler").isResponseFlow(f)) return null;
		if (!o("WAFlowsDomainUtils").isBusinessUrl() && !g || F && P || x && a.platform !== "wa_web" || ["willShow", "didShow"].includes(E) || h != null && o("WAFlowsUtilityConstants").LEAD_GEN_BOT_BUSINESSES.includes(h) || b || l) return c.jsx("div", babelHelpers.extends({ id: R(r("WAFlowsContainerElementIDs").BRANDING_CONTAINER_ID) }, (e || (e = r("stylex"))).props(C.mainBrandingContainer, O.mainBrandingContainer, a.hostPlatform === "ios" ? O.mainContainerPaddingForEmptyBranding : {}, C.containerWithoutFooter)));
		var B = h != null && h.length > 0 && !o("WAFlowsDomainUtils").isBusinessUrl() ? s._(
			/*BTDS*/
			"",
			[s._param("business-name", h)]
		) : s._(
			/*BTDS*/
			""
		), W = s._(
			/*BTDS*/
			""
		);
		return c.jsxs("div", babelHelpers.extends({ id: R(r("WAFlowsContainerElementIDs").BRANDING_CONTAINER_ID) }, (e || (e = r("stylex"))).props(C.mainBrandingContainer, O.mainBrandingContainer, a.hostPlatform === "ios" ? O.mainBrandingContainerPadding : C.mainBrandingContainerPadding, A ? {} : [C.containerWithoutFooter, O.brandingContainerStroke]), { children: [y != null && (y == null ? void 0 : y.length) > 0 && c.jsx(o("WAFlowsImage.react").WAFlowsImage, {
			src: y,
			isBrandingLogo: !0,
			altText: "Business logo",
			scaleType: "cover",
			xstyle: C.brandingLogo,
			height: _.size,
			width: _.size
		}), c.jsx(o("WAFlowsLabel.react").WAFlowsLabelCaption, {
			textAlign: "center",
			text: B,
			linkText: W,
			xstyle: [
				C.brandingText,
				O.brandingText,
				O.brandingTextColor
			],
			maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.BRANDING,
			linkXStyle: [
				C.brandingText,
				O.brandingText,
				O.brandingTextLink
			],
			linkOnClick: function() {
				return void k();
			},
			responsiveFont: !1,
			responsiveFontContainerXStyle: C.brandingTextWrapper
		})] }));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = {
			android: h,
			ios: g,
			wa_web: y
		};
		return t[e];
	}
	l.default = b;
}), 226);
