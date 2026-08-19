__d("WAFlowsPreviewDeviceScreen.react", [
	"WAFlowsPreviewDeviceScreenAndroid.react",
	"WAFlowsPreviewDeviceScreenCTWA.react",
	"WAFlowsPreviewDeviceScreeniOS.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = "ctwa";
	function c(e) {
		var t = e.completionMessageCTAType, n = e.completionMessageText, o = e.ctwaImageCreative, a = e.ctwaWelcomeMessage, i = e.height, l = e.isCompletionMessageEnabled, c = l === void 0 ? !1 : l, d = e.isPreviewDisabled, m = d === void 0 ? !1 : d, p = e.onOpen, _ = e.platform, f = _ === void 0 ? "android" : _, g = e.theme, h = g === void 0 ? "light" : g, y = e.width;
		return s.jsxs(s.Fragment, { children: [
			f === "android" && s.jsx(r("WAFlowsPreviewDeviceScreenAndroid.react"), {
				width: y,
				height: i,
				onOpen: p,
				isPreviewButtonDisabled: m,
				theme: h
			}),
			f === u && s.jsx(r("WAFlowsPreviewDeviceScreenCTWA.react"), {
				width: y,
				height: i,
				onOpen: p,
				ctwaWelcomeMessage: a,
				ctwaImageCreative: o,
				completionMessageCTAType: t,
				completionMessageText: n,
				isCompletionMessageEnabled: c
			}),
			f === "ios" && s.jsx(r("WAFlowsPreviewDeviceScreeniOS.react"), {
				width: y,
				height: i,
				onOpen: p,
				isPreviewButtonDisabled: m,
				theme: h
			})
		] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.PLATFORM_CTWA = u, l.WAFlowsPreviewDeviceScreen = c;
}), 98);
