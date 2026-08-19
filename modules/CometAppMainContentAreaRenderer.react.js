__d("CometAppMainContentAreaRenderer.react", [
	"CometMainContentWrapper.react",
	"CometMainRoutes.react",
	"CometRouterPushViewStackContext",
	"CometVisualCompletion",
	"FBLogger",
	"getOpaquePushViewCount",
	"react",
	"react-compiler-runtime",
	"useCometIsMainRouteMaintained",
	"useCometMainRouteScrollKey",
	"useCometRouterState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = {
		contentContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			minHeight: "x1t2pt76",
			position: "x1n2onr6",
			zIndex: "x1ja2u2z",
			$$css: !0
		},
		contentContainerHidden: {
			display: "x1s85apg",
			$$css: !0
		},
		contentContainerWithNegativeMarginBottom: {
			marginBottom: "x10cihs4",
			$$css: !0
		}
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(24), n = e.disableNavigationScrollReset, a = e.disableNegativeMarginBottom, i = e.disableScrollResetForSSRHydration, l = e.headerHeight, u = e.numOpaquePushViewsOnTopBeforeHiding, c = e.scrollKeyPrefix, p = e.shouldRenderContextualLayerAnchor, g = e.shouldRenderTopNav, h = e.shouldUseDvhMinHeight, y = e.showPreviousMainTabView, C = e.treatFullyOccludedViewsAsHiddenSubtreeContextHidden, b = e.usesNestedRoutingOutlet, v = e.xstyle, S = n === void 0 ? !1 : n, R = a === void 0 ? !1 : a, L = i === void 0 ? !1 : i, E = u === void 0 ? 1 : u, k = c === void 0 ? null : c, I = p === void 0 ? !0 : p, T = g === void 0 ? !0 : g, D = h === void 0 ? !1 : h, x = y === void 0 ? !1 : y, $ = C === void 0 ? !1 : C, P = b === void 0 ? !1 : b, N = r("useCometRouterState")(), M = d(r("CometRouterPushViewStackContext"));
		if (N == null) throw r("FBLogger")("comet_infra").mustfixThrow("Attempting to render tab bar without a router state (provided by the CometRouterStateProvider/CometRouterStateContext).");
		var w;
		t[0] !== M ? (w = M != null ? r("getOpaquePushViewCount")(M) : 0, t[0] = M, t[1] = w) : w = t[1];
		var A = w, F = M != null && A >= E, O = f, B = r("useCometMainRouteScrollKey")();
		k != null && (B = k + "|" + B);
		var W = r("useCometIsMainRouteMaintained")(), q;
		t[2] !== M ? (q = M == null ? void 0 : M.some(_), t[2] = M, t[3] = q) : q = t[3];
		var U = $ && A > 0, V = !N.hosted && W === !0, H;
		t[4] !== R || t[5] !== v ? (H = function(t) {
			var e = t.isHidden;
			return [
				m.contentContainer,
				!R && m.contentContainerWithNegativeMarginBottom,
				e && m.contentContainerHidden,
				v
			];
		}, t[4] = R, t[5] = v, t[6] = H) : H = t[6];
		var G;
		t[7] !== x || t[8] !== H || t[9] !== P ? (G = s.jsx(r("CometMainRoutes.react"), {
			contentXStyleProvider: H,
			showPreviousMainTabView: x,
			usesNestedRoutingOutlet: P
		}), t[7] = x, t[8] = H, t[9] = P, t[10] = G) : G = t[10];
		var z;
		return t[11] !== S || t[12] !== L || t[13] !== l || t[14] !== F || t[15] !== B || t[16] !== I || t[17] !== T || t[18] !== D || t[19] !== q || t[20] !== U || t[21] !== V || t[22] !== G ? (z = s.jsx(r("CometMainContentWrapper.react"), {
			contextKey: B,
			detachedDefaultValue: q,
			disableNavigationScrollReset: S,
			disableScrollResetForSSRHydration: L,
			headerHeight: l,
			hiddenWhenDetached: F,
			isHiddenSubtreeContextHidden: U,
			maintainScrollForContext: V,
			onInitialScroll: O,
			shouldRenderContextualLayerAnchor: I,
			shouldRenderTopNav: T,
			shouldUseDvhMinHeight: D,
			children: G
		}), t[11] = S, t[12] = L, t[13] = l, t[14] = F, t[15] = B, t[16] = I, t[17] = T, t[18] = D, t[19] = q, t[20] = U, t[21] = V, t[22] = G, t[23] = z) : z = t[23], z;
	}
	function _(e) {
		return e.route.backgroundRouteConfig != null;
	}
	function f(e, t) {
		r("CometVisualCompletion").setInitialScrollY(t);
	}
	l.default = p;
}), 98);
