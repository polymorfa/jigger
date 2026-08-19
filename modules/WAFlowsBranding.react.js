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
	"asyncToGeneratorRuntime",
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
		var t, a = o("WAFlowsEnvContext.react").useWAFlowsEnv(), i = a.env, l = o("WAFlowsConfigurationContext.react").useWAFlowsConfiguration(), u = l.hideBranding, d = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), f = d.flowInitData, g = f[0], h = f[1], y = g == null ? void 0 : g.environment.business_name, b = g == null ? void 0 : g.environment.biz_logo, S = o("WAFlowsStateProvider.react").useWAFlowsMeta().isCreatedByLeadGenAI(), R = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), L = R.flowInstanceId, E = p(o("WAFlowsNativeState").NativeContext), k = E.keyboardState.change, I = m(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield d.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsLearnMore,
				payload: null,
				fallBackDataForWeb: {},
				hasCallback: !1
			});
		}), [d]), T = o("WAFlowsStateProvider.react").useWAFlowsState(), D = T.internal, x = D.isDatePickerPanelVisible, $ = x === void 0 ? !1 : x, P = D.isOverlayVisible, N = P === void 0 ? !1 : P, M = D.navBarConfig.title, w = D.shopping, A = r("useCurrentScreenMeta")(), F = ((t = A == null ? void 0 : A.hasFooter) != null ? t : !1) || o("WAFlowsShoppingCartStateUtils").getCartItemsNumber(w) > 0 || (A == null ? void 0 : A.layoutType) === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL, O = (A == null ? void 0 : A.layoutType) !== o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART || M === o("WAFlowsCartUtils.react").MM_DISCLOSURE_TITLE, B = v(i.platform);
		if (o("WAFlowsResponseHandler").isResponseFlow(g)) return null;
		if (!o("WAFlowsDomainUtils").isBusinessUrl() && !h || O && N || $ && i.platform !== "wa_web" || ["willShow", "didShow"].includes(k) || y != null && o("WAFlowsUtilityConstants").LEAD_GEN_BOT_BUSINESSES.includes(y) || S || u) return c.jsx("div", babelHelpers.extends({ id: L(r("WAFlowsContainerElementIDs").BRANDING_CONTAINER_ID) }, (e || (e = r("stylex"))).props(C.mainBrandingContainer, B.mainBrandingContainer, i.hostPlatform === "ios" ? B.mainContainerPaddingForEmptyBranding : {}, C.containerWithoutFooter)));
		var W = y != null && y.length > 0 && !o("WAFlowsDomainUtils").isBusinessUrl() ? s._(
			/*BTDS*/
			"",
			[s._param("business-name", y)]
		) : s._(
			/*BTDS*/
			""
		), q = s._(
			/*BTDS*/
			""
		);
		return c.jsxs("div", babelHelpers.extends({ id: L(r("WAFlowsContainerElementIDs").BRANDING_CONTAINER_ID) }, (e || (e = r("stylex"))).props(C.mainBrandingContainer, B.mainBrandingContainer, i.hostPlatform === "ios" ? B.mainBrandingContainerPadding : C.mainBrandingContainerPadding, F ? {} : [C.containerWithoutFooter, B.brandingContainerStroke]), { children: [b != null && (b == null ? void 0 : b.length) > 0 && c.jsx(o("WAFlowsImage.react").WAFlowsImage, {
			src: b,
			isBrandingLogo: !0,
			altText: "Business logo",
			scaleType: "cover",
			xstyle: C.brandingLogo,
			height: _.size,
			width: _.size
		}), c.jsx(o("WAFlowsLabel.react").WAFlowsLabelCaption, {
			textAlign: "center",
			text: W,
			linkText: q,
			xstyle: [
				C.brandingText,
				B.brandingText,
				B.brandingTextColor
			],
			maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.BRANDING,
			linkXStyle: [
				C.brandingText,
				B.brandingText,
				B.brandingTextLink
			],
			linkOnClick: function() {
				return void I();
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
