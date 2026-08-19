__d("CometMapZoomControl.react", [
	"fbt",
	"CometPressable.react",
	"FBNucleusMinusFilled20Icon.react",
	"FBNucleusPlusFilled20Icon.react",
	"FDSIcon.react",
	"react",
	"react-compiler-runtime",
	"useMapLibreMap"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useState, _ = {
		button: {
			alignItems: "x6s0dn4",
			backgroundColor: "x1jx94hy",
			display: "x78zum5",
			height: "xc9qbxq",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		zoomIn: {
			borderStartEndRadius: "x1whfx0g",
			borderStartStartRadius: "x1i5p2am",
			$$css: !0
		},
		zoomOut: {
			borderEndEndRadius: "xr2y4jy",
			borderEndStartRadius: "x1ihp6rs",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(31), n = e.maxZoom, a = e.minZoom, i = r("useMapLibreMap")(), l;
		t[0] !== i ? (l = i.getZoom(), t[0] = i, t[1] = l) : l = t[1];
		var c = p(l), d = c[0], _ = c[1], f;
		t[2] !== i ? (f = function() {
			return _(i.getZoom());
		}, t[2] = i, t[3] = f) : f = t[3];
		var y = f, C, b;
		t[4] !== y || t[5] !== i ? (C = function() {
			return i.on("zoom", y), (function() {
				i.off("zoom", y);
			});
		}, b = [y, i], t[4] = y, t[5] = i, t[6] = C, t[7] = b) : (C = t[6], b = t[7]), m(C, b), n != null && i.setMaxZoom(n), a != null && i.setMinZoom(a);
		var v = i.getMaxZoom() - d <= Number.EPSILON, S = d - i.getMinZoom() <= Number.EPSILON, R;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x52tqoz xod5an3 x14vqqas x14qfxbe" }, t[8] = R) : R = t[8];
		var L;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[9] = L) : L = t[9];
		var E;
		t[10] !== i ? (E = function(t) {
			i.zoomIn({}, { originalEvent: t });
		}, t[10] = i, t[11] = E) : E = t[11];
		var k = v ? "disabled" : "primary", I;
		t[12] !== k ? (I = u.jsx(r("FDSIcon.react"), {
			color: k,
			icon: r("FBNucleusPlusFilled20Icon.react"),
			size: 20
		}), t[12] = k, t[13] = I) : I = t[13];
		var T;
		t[14] !== v || t[15] !== E || t[16] !== I ? (T = u.jsx(r("CometPressable.react"), {
			"aria-label": L,
			disabled: v,
			display: "block",
			onPress: E,
			xstyle: h,
			children: I
		}), t[14] = v, t[15] = E, t[16] = I, t[17] = T) : T = t[17];
		var D;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (D = u.jsx("div", { className: "x8cjs6t x13fuv20 x178xt8z" }), t[18] = D) : D = t[18];
		var x;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), t[19] = x) : x = t[19];
		var $;
		t[20] !== i ? ($ = function(t) {
			i.zoomOut({}, { originalEvent: t });
		}, t[20] = i, t[21] = $) : $ = t[21];
		var P = S ? "disabled" : "primary", N;
		t[22] !== P ? (N = u.jsx(r("FDSIcon.react"), {
			color: P,
			icon: r("FBNucleusMinusFilled20Icon.react"),
			size: 20
		}), t[22] = P, t[23] = N) : N = t[23];
		var M;
		t[24] !== S || t[25] !== $ || t[26] !== N ? (M = u.jsx(r("CometPressable.react"), {
			"aria-label": x,
			disabled: S,
			display: "block",
			onPress: $,
			xstyle: g,
			children: N
		}), t[24] = S, t[25] = $, t[26] = N, t[27] = M) : M = t[27];
		var w;
		return t[28] !== T || t[29] !== M ? (w = u.jsxs("div", babelHelpers.extends({}, R, { children: [
			T,
			D,
			M
		] })), t[28] = T, t[29] = M, t[30] = w) : w = t[30], w;
	}
	function g() {
		return [_.button, _.zoomOut];
	}
	function h() {
		return [_.button, _.zoomIn];
	}
	l.default = f;
}), 226);
