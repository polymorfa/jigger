__d("CometMapGeoLocatorControl.react", [
	"fbt",
	"BaseMapLibreGLMarker.react",
	"CometPressable.react",
	"CurrentLocation",
	"FBNucleusTargetFilled20Icon.react",
	"FDSIcon.react",
	"maplibre-gl",
	"react",
	"react-compiler-runtime",
	"useMapLibreMap"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = "x1jn504y-B", m = {
		button: {
			alignItems: "x6s0dn4",
			backgroundColor: "x1jx94hy",
			borderStartStartRadius: "x1obq294",
			borderStartEndRadius: "x5a5i1n",
			borderEndEndRadius: "xde0f50",
			borderEndStartRadius: "x15x8krk",
			boxShadow: "x52tqoz",
			display: "x78zum5",
			height: "xc9qbxq",
			justifyContent: "xl56j7k",
			marginBottom: "xod5an3",
			marginTop: "x14vqqas",
			position: "x1n2onr6",
			width: "x14qfxbe",
			$$css: !0
		},
		marker: {
			backgroundColor: "x11goek",
			borderTopColor: "xgjxtca",
			borderInlineEndColor: "x8tsxso",
			borderBottomColor: "x1lqxvo2",
			borderInlineStartColor: "x158ip91",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x1gp4ovq",
			borderInlineEndWidth: "x9p2oo0",
			borderBottomWidth: "x1h2mt7u",
			borderInlineStartWidth: "x56jcm7",
			height: "x1kpxq89",
			width: "xsmyaan",
			$$css: !0
		}
	}, p = 1e4, _ = {
		enableHighAccuracy: !1,
		maximumAge: 0,
		timeout: p
	};
	function f(e) {
		switch (e) {
			case "active": return "blueLink";
			case "failed": return "warning";
			case "searching": return "secondary";
		}
		return "primary";
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(28), n = e.onClick, a = e.showUserLocation, i = a === void 0 ? !1 : a, l = c("inactive"), d = l[0], p = l[1], g = c(null), h = g[0], y = g[1], C = r("useMapLibreMap")();
		if (!o("CurrentLocation").isSupported()) return null;
		var b;
		t[0] !== C ? (b = function(t) {
			var e = t.coords, n = e.accuracy, o = e.latitude, a = e.longitude;
			p("active"), y([a, o]), C.fitBounds(new (r("maplibre-gl")).LngLat(a, o).toBounds(n), {}, { geolocateSource: !0 });
		}, t[0] = C, t[1] = b) : b = t[1];
		var v = b, S;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (S = function() {
			p("failed");
		}, t[2] = S) : S = t[2];
		var R = S, L;
		t[3] !== v || t[4] !== n ? (L = function() {
			p("searching"), o("CurrentLocation").askForCurrentLocation(v, R, _), n != null && n();
		}, t[3] = v, t[4] = n, t[5] = L) : L = t[5];
		var E = L, k;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), t[6] = k) : k = t[6];
		var I = d === "searching", T;
		t[7] !== d ? (T = f(d), t[7] = d, t[8] = T) : T = t[8];
		var D;
		t[9] !== T ? (D = u.jsx(r("FDSIcon.react"), {
			color: T,
			icon: r("FBNucleusTargetFilled20Icon.react"),
			size: 20
		}), t[9] = T, t[10] = D) : D = t[10];
		var x;
		t[11] !== d ? (x = d === "searching" ? "xpz12be x1q3qbx4 xa4qsjk xxp0q0x x14hiurz x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1ey2m1c x170jfvy xtijo5x x1o0tod xr1yuqi x11t971q x4ii5y1 xvc5jky x10l6tqk x13vifvy x1fsd2vl" : "", t[11] = d, t[12] = x) : x = t[12];
		var $;
		t[13] !== x ? ($ = u.jsx("div", { className: x }), t[13] = x, t[14] = $) : $ = t[14];
		var P;
		t[15] !== $ || t[16] !== D ? (P = u.jsxs("div", { children: [D, $] }), t[15] = $, t[16] = D, t[17] = P) : P = t[17];
		var N;
		t[18] !== E || t[19] !== P || t[20] !== I ? (N = u.jsx(r("CometPressable.react"), {
			"aria-label": k,
			disabled: I,
			display: "block",
			onPress: E,
			xstyle: m.button,
			children: P
		}), t[18] = E, t[19] = P, t[20] = I, t[21] = N) : N = t[21];
		var M;
		t[22] !== h || t[23] !== i ? (M = i && h != null ? u.jsx(r("BaseMapLibreGLMarker.react"), {
			lngLat: h,
			xstyle: m.marker
		}) : null, t[22] = h, t[23] = i, t[24] = M) : M = t[24];
		var w;
		return t[25] !== N || t[26] !== M ? (w = u.jsxs(u.Fragment, { children: [N, M] }), t[25] = N, t[26] = M, t[27] = w) : w = t[27], w;
	}
	l.default = g;
}), 226);
