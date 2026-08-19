__d("WAFlowsDraftBanner.react", [
	"WAFlowsBanner.react",
	"WAFlowsContainerElementIDs",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsStateProvider.react",
	"getPlatformByGK",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = o("getPlatformByGK").getPlatformByGK(), d = { bannerContainerColorTransition: {
		animationDuration: "x6w7tal",
		animationTimingFunction: "x4hg4is",
		animationIterationCount: "x1v7wizp",
		animationFillMode: "x10e4vud",
		$$css: !0
	} }, m = { bannerContainerStaticColor: {
		backgroundColor: "xs1q97v",
		$$css: !0
	} }, p = { bannerContainerStaticColor: {
		backgroundColor: "xw6alqk",
		$$css: !0
	} }, _ = { bannerContainerStaticColor: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function f(t) {
		var n = t.xstyle, a = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), i = a.flowInstanceId, l = o("WAFlowsStateProvider.react").useWAFlowsState(), s = l.internal.isOverlayVisible, m = g(c);
		return u.jsx("div", babelHelpers.extends({ id: i(r("WAFlowsContainerElementIDs").DRAFT_MODE_CONTAINER_ID) }, (e || (e = r("stylex"))).props(d.bannerContainerColorTransition, m.bannerContainerStaticColor), {
			"aria-hidden": s,
			children: u.jsx(r("WAFlowsBanner.react"), {
				text: "This flow is only for testing",
				xstyle: n
			})
		}));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = {
			android: p,
			ios: m,
			wa_web: _
		};
		return t[e];
	}
	l.default = f;
}), 98);
