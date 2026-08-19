__d("WAWebMobileLandingInitializer.react", [
	"WAWebMainThreadLogger",
	"WAWebMobileLanding.react",
	"WAWebToastManagerImpl",
	"WDSThemes",
	"WDSToast.react",
	"WDSToastContainerID",
	"cr:37852",
	"react",
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(8), a = p(!1), i = a[0], l = a[1], s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = n("cr:37852") != null && g(), t[0] = s) : s = t[0];
		var c = s, m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (m = c ? {
			phoneNumber: h(),
			providerNumber: y()
		} : {
			phoneNumber: null,
			providerNumber: null
		}, t[1] = m) : m = t[1];
		var f = m, C = f.phoneNumber, v = f.providerNumber, S, R;
		if (t[2] === Symbol.for("react.memo_cache_sentinel") ? (S = function() {
			b(), l(!0);
		}, R = [], t[2] = S, t[3] = R) : (S = t[2], R = t[3]), d(S, R), !i) return null;
		if (c && n("cr:37852") != null) {
			var L;
			return t[4] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(n("cr:37852"), {
				phoneNumber: C,
				providerNumber: v
			}), t[4] = L) : L = t[4], L;
		}
		var E, k;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsx(r("WAWebToastManagerImpl"), {}), k = u.jsx(r("WAWebMobileLanding.react"), {}), t[5] = E, t[6] = k) : (E = t[5], k = t[6]);
		var I;
		return t[7] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsxs(o("WDSToast.react").WDSToastProvider, {
			target: "#" + r("WDSToastContainerID"),
			children: [
				E,
				k,
				u.jsx("div", babelHelpers.extends({
					"data-testid": "mobile_landing_toast_container",
					id: r("WDSToastContainerID")
				}, (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, _.toastContainer)))
			]
		}), t[7] = I) : I = t[7], I;
	}
	function b() {
		try {
			o("WAWebMainThreadLogger").initializeWAWebMainThreadLogger();
		} catch (e) {}
	}
	l.default = C;
}), 98);
