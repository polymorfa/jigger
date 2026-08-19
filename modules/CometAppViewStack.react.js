__d("CometAppViewStack.react", [
	"BaseDOMContainer.react",
	"BasePortalTargetContext",
	"BaseViewportMarginsContext",
	"CometHiddenAPIContextProvider",
	"CometRouteRenderer.react",
	"CometRouterPushViewStackContext",
	"CometTransientDialogProvider.react",
	"ExecutionEnvironment",
	"cr:3836",
	"getCometRouteScrollKey",
	"isRouteTransparent",
	"isTransparentPushView",
	"react",
	"useStable"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["depth", "key"], s, u, c = u || (u = o("react")), d = u.useContext, m = {
		bottom: 0,
		left: 0,
		right: 0,
		top: 0
	};
	function p(t) {
		var o = t.baseView, a = t.numOpaquePushViewsOnTopBeforeHiding, i = a === void 0 ? 1 : a, l = t.topNavigationComponent, u = t.treatFullyOccludedViewsAsHiddenSubtreeContextHidden, p = u === void 0 ? !1 : u, _ = t.useBodyAsPortalsContainer, f = _ === void 0 ? !1 : _, g = d(r("CometRouterPushViewStackContext")), h = r("useStable")(function() {
			return (s || (s = r("ExecutionEnvironment"))).canUseDOM ? document.createElement("div") : null;
		}), y = 0, C = g != null && c.jsx(r("BaseViewportMarginsContext").Provider, {
			value: m,
			children: g.reduceRight(function(t, o, a) {
				var s, u = o.depth, d = o.key, m = babelHelpers.objectWithoutPropertiesLoose(o, e), _ = m.route.tracePolicy, f = r("isRouteTransparent")(m.route), g = m.navigationInteractionID, h = m.route.useCloseButton === !0, C = m.route.transparencyType === "transparent";
				if ((s = m.mutableState) != null && s.isPurged != null && s.isPurged()) return t;
				var b = y >= i;
				return t.unshift(c.jsx(r("CometHiddenAPIContextProvider"), {
					hiddenAPIOverride: m.route.useLegacyHidden,
					children: c.jsx(n("cr:3836"), {
						background: f ? "none" : "web-wash",
						contextKey: r("getCometRouteScrollKey")(m),
						forceTransparentOverlay: C,
						hidden: b,
						interactionDesc: g != null ? _ : null,
						interactionUUID: g,
						isDialog: r("isTransparentPushView")(m.route),
						isHiddenSubtreeContextHidden: p && y > 0,
						label: m.route.label,
						shouldUseCloseButton: h,
						topNavigationComponent: l,
						children: c.jsx(r("CometRouteRenderer.react"), {
							pushViewIndex: a,
							renderType: "pushView",
							routeInfo: m
						})
					})
				}, d)), f || y++, t;
			}, [])
		});
		return c.jsxs(c.Fragment, { children: [
			c.jsx(r("BasePortalTargetContext").Provider, {
				value: f ? document.body : h,
				children: c.jsx(r("CometTransientDialogProvider.react"), { children: o })
			}),
			!f && c.jsx(r("BaseDOMContainer.react"), { node: h }),
			C
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
