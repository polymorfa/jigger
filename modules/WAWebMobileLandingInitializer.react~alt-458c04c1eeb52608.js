__d("WAWebMobileLandingInitializer.react", [
	"WAWebMainThreadLogger",
	"WAWebMobileLanding.react",
	"WAWebToastManagerImpl",
	"WDSThemes",
	"WDSToast.react",
	"WDSToastContainerID",
	"cr:37852",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useMemo, p = c.useState, _ = { toastContainer: {
		position: "xixxii4",
		bottom: "x191j7n5",
		insetInlineStart: "xbudbmw",
		left: null,
		right: null,
		transform: "xuuh30",
		width: "xkxa9zd",
		maxWidth: "x1dt7z5j",
		zIndex: "xc9l9hb",
		pointerEvents: "x47corl",
		$$css: !0
	} }, f = /^\/mobile\/reg\/[^/]+\/?$/;
	function g() {
		return f.test(window.location.pathname);
	}
	function h() {
		return new URLSearchParams(window.location.search).get("pn");
	}
	function y() {
		return new URLSearchParams(window.location.search).get("prov_num");
	}
	function C() {
		var t = p(!1), a = t[0], i = t[1], l = m(function() {
			return n("cr:37852") != null && g();
		}, []), s = m(function() {
			return l ? {
				phoneNumber: h(),
				providerNumber: y()
			} : {
				phoneNumber: null,
				providerNumber: null
			};
		}, [l]), c = s.phoneNumber, f = s.providerNumber;
		return d(function() {
			b(), i(!0);
		}, []), a ? l && n("cr:37852") != null ? u.jsx(n("cr:37852"), {
			phoneNumber: c,
			providerNumber: f
		}) : u.jsxs(o("WDSToast.react").WDSToastProvider, {
			target: "#" + r("WDSToastContainerID"),
			children: [
				u.jsx(r("WAWebToastManagerImpl"), {}),
				u.jsx(r("WAWebMobileLanding.react"), {}),
				u.jsx("div", babelHelpers.extends({
					"data-testid": "mobile_landing_toast_container",
					id: r("WDSToastContainerID")
				}, (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, _.toastContainer)))
			]
		}) : null;
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		try {
			o("WAWebMainThreadLogger").initializeWAWebMainThreadLogger();
		} catch (e) {}
	}
	l.default = C;
}), 98);
