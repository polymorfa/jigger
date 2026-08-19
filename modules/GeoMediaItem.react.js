__d("GeoMediaItem.react", [
	"DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
	"GeoBaseText.react",
	"GeoGlimmer.react",
	"GeoPlatformIcon.react",
	"GeoPlatformIconPile.react",
	"GeoPrivateIcon.react",
	"GeoPrivateMakeComponent",
	"GeoPrivateMediaItemAddOn.react",
	"GeoPrivateMediaItemContext",
	"GeoPrivateMediaItemGroupContext",
	"GeoPrivateMediaItemStatusAddOn.react",
	"GeoPrivateMediaItemSurfaceContext",
	"GeoPrivatePlatformIconUtils",
	"isFalsey",
	"meta-brand-three-dots-horizontal-filled-12",
	"meta-brand-three-dots-horizontal-filled-16",
	"meta-brand-three-dots-horizontal-filled-24",
	"meta-brand-three-dots-horizontal-filled-8",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useCoordinatedAnimationDelay",
	"useGeoPrivateMediaLoadingStatus",
	"useGeoTheme"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useContext, d = {
		root: {
			display: "x1lliihq",
			position: "x1n2onr6",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		glimmer: {
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			position: "x10l6tqk",
			top: "x13vifvy",
			zIndex: "x1vjfegm",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(10), n = e.ratio, a = e.size, i = r("useGeoTheme")(), l = i.selectBorderRadius, s = i.selectSize, u;
		t[0] !== n || t[1] !== s || t[2] !== a ? (u = s({
			size: a,
			ratio: n
		}), t[0] = n, t[1] = s, t[2] = a, t[3] = u) : u = t[3];
		var c = n === "circle" ? "rounded" : "content", m;
		t[4] !== l || t[5] !== c ? (m = l({ context: c }), t[4] = l, t[5] = c, t[6] = m) : m = t[6];
		var p;
		return t[7] !== u || t[8] !== m ? (p = [
			d.root,
			u,
			m
		], t[7] = u, t[8] = m, t[9] = p) : p = t[9], p;
	}
	var p = "x1qr3tc4-B", _ = { style: {
		animationName: "x1je20xj",
		animationDirection: "xpz12be",
		animationFillMode: "x1ir97tl",
		animationIterationCount: "xa4qsjk",
		opacity: "xz5rk10",
		$$css: !0
	} };
	function f(e) {
		var t = o("react-compiler-runtime").c(14), n = e.description, a = e.fit, l = e.hasMediaBackground, s = e.isDisabled, c = e.placeholder, m = e.ratio, p = e.size, f = a === void 0 ? "none" : a, h = l === void 0 ? !0 : l, y = s === void 0 ? !1 : s, C = m === void 0 ? "square" : m, b = p === void 0 ? 32 : p, v = r("useCoordinatedAnimationDelay")(!1, 0), L = v.glimmerRef, E = v.style;
		if (c == null) {
			var k = C === "circle" ? "rounded" : "rectangle", I;
			return t[0] !== k ? (I = u.jsx(r("GeoGlimmer.react"), {
				shape: k,
				xstyle: d.glimmer,
				loggingName: i.id
			}), t[0] = k, t[1] = I) : I = t[1], I;
		} else {
			var T;
			t[2] !== c ? (T = R(c), t[2] = c, t[3] = T) : T = t[3];
			var D = T, x;
			return t[4] !== n || t[5] !== f || t[6] !== L || t[7] !== h || t[8] !== y || t[9] !== D || t[10] !== c || t[11] !== b || t[12] !== E ? (x = u.jsx(S, {
				description: n,
				fit: f,
				hasMediaBackground: h,
				isDisabled: y,
				isImage: D,
				isLoading: !1,
				media: c,
				onLoad: g,
				ref: L,
				size: b,
				style: E,
				xstyle: _.style
			}), t[4] = n, t[5] = f, t[6] = L, t[7] = h, t[8] = y, t[9] = D, t[10] = c, t[11] = b, t[12] = E, t[13] = x) : x = t[13], x;
		}
	}
	function g() {}
	function h(t) {
		var n = o("react-compiler-runtime").c(50), a = t.containerRef, i = t["data-testid"], l = t.description, s = t.fit, d = t.hasMediaBackground, p = t.isDisabled, _ = t.isLoading, g = t.media, h = t.placeholder, y = t.platform, C = t.platformIconSize, v = t.ratio, L = t.size, k = t.status, I = t.xstyle, T = s === void 0 ? "none" : s, D = d === void 0 ? !0 : d, x = p === void 0 ? !1 : p, $ = _ === void 0 ? !1 : _, P = v === void 0 ? "square" : v, N = L === void 0 ? 32 : L, M;
		n[0] !== g ? (M = R(g), n[0] = g, n[1] = M) : M = n[1];
		var w = M, A = c(r("GeoPrivateMediaItemGroupContext")), F = A.ratio, O = A.size, B = c(r("GeoPrivateMediaItemContext")), W = B.isOverflowItem, q = W != null ? W : !1, U = F != null ? F : P, V = O != null ? O : N, H = r("useGeoPrivateMediaLoadingStatus")(g), G = H.isLoading, z = H.onLoad, j = H.ref, K = $ || w && G, Q;
		n[2] !== U || n[3] !== V ? (Q = {
			size: V,
			ratio: U
		}, n[2] = U, n[3] = V, n[4] = Q) : Q = n[4];
		var X = m(Q);
		if (!K && g == null) return null;
		var Y;
		n[5] !== X || n[6] !== I ? (Y = (e || (e = r("stylex"))).props(X, I), n[5] = X, n[6] = I, n[7] = Y) : Y = n[7];
		var J;
		n[8] !== l || n[9] !== T || n[10] !== D || n[11] !== x || n[12] !== K || n[13] !== h || n[14] !== U || n[15] !== V ? (J = K ? u.jsx(f, {
			description: l,
			fit: T,
			hasMediaBackground: D,
			isDisabled: x,
			placeholder: h,
			ratio: U,
			size: V
		}) : null, n[8] = l, n[9] = T, n[10] = D, n[11] = x, n[12] = K, n[13] = h, n[14] = U, n[15] = V, n[16] = J) : J = n[16];
		var Z;
		n[17] !== l || n[18] !== T || n[19] !== D || n[20] !== j || n[21] !== x || n[22] !== w || n[23] !== K || n[24] !== g || n[25] !== z || n[26] !== V ? (Z = g != null ? u.jsx(S, {
			description: l,
			fit: T,
			hasMediaBackground: D,
			isDisabled: x,
			isImage: w,
			isLoading: K,
			media: g,
			onLoad: z,
			ref: j,
			size: V
		}) : null, n[17] = l, n[18] = T, n[19] = D, n[20] = j, n[21] = x, n[22] = w, n[23] = K, n[24] = g, n[25] = z, n[26] = V, n[27] = Z) : Z = n[27];
		var ee;
		n[28] !== V || n[29] !== J || n[30] !== Z ? (ee = u.jsxs(b, {
			size: V,
			children: [J, Z]
		}), n[28] = V, n[29] = J, n[30] = Z, n[31] = ee) : ee = n[31];
		var te;
		n[32] !== q || n[33] !== U || n[34] !== V || n[35] !== k ? (te = !q && k != null && u.jsx(r("GeoPrivateMediaItemStatusAddOn.react"), {
			ratio: U,
			size: V,
			status: k
		}), n[32] = q, n[33] = U, n[34] = V, n[35] = k, n[36] = te) : te = n[36];
		var ne;
		n[37] !== q || n[38] !== y || n[39] !== C || n[40] !== U || n[41] !== V ? (ne = !q && y != null && u.jsx(E, {
			platform: y,
			platformIconSize: C,
			ratio: U,
			size: V
		}), n[37] = q, n[38] = y, n[39] = C, n[40] = U, n[41] = V, n[42] = ne) : ne = n[42];
		var re;
		return n[43] !== a || n[44] !== ee || n[45] !== te || n[46] !== ne || n[47] !== Y || n[48] !== i ? (re = u.jsxs("div", babelHelpers.extends({}, Y, {
			"data-testid": void 0,
			ref: a,
			children: [
				ee,
				te,
				ne
			]
		})), n[43] = a, n[44] = ee, n[45] = te, n[46] = ne, n[47] = Y, n[48] = i, n[49] = re) : re = n[49], re;
	}
	var y = {
		wrapper: {
			borderStartStartRadius: "x1fmog5m",
			borderStartEndRadius: "xu25z0z",
			borderEndEndRadius: "x140muxe",
			borderEndStartRadius: "xo1y3bh",
			height: "x5yr21d",
			position: "x1n2onr6",
			width: "xh8yej3",
			$$css: !0
		},
		denseStroke: {
			paddingTop: "x4p5aij",
			paddingInlineEnd: "x1ccui7m",
			paddingBottom: "x1j85h84",
			paddingInlineStart: "x18pi947",
			$$css: !0
		},
		sparseStroke: {
			paddingTop: "x1nn3v0j",
			paddingInlineEnd: "x14vy60q",
			paddingBottom: "x1120s5i",
			paddingInlineStart: "xyiysdx",
			$$css: !0
		}
	}, C = function(t) {
		return t < 48 ? "dense" : "sparse";
	};
	function b(t) {
		var n = o("react-compiler-runtime").c(7), a = t.children, i = t.size, l = c(r("GeoPrivateMediaItemGroupContext")), s = l.hasStroke, d = r("useGeoTheme")(), m = d.selectStaticBackgroundColor, p;
		n[0] !== i ? (p = C(i), n[0] = i, n[1] = p) : p = n[1];
		var _ = p === "dense", f;
		if (n[2] !== a || n[3] !== s || n[4] !== _ || n[5] !== m) {
			var g = [
				y.wrapper,
				m({ surface: "content" }),
				_ && y.denseStroke,
				!_ && y.sparseStroke
			];
			f = s ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g), { children: u.jsx("div", {
				className: "x1fmog5m xu25z0z x140muxe xo1y3bh x5yr21d x1n2onr6 xh8yej3",
				children: a
			}) })) : u.jsx(u.Fragment, { children: a }), n[2] = a, n[3] = s, n[4] = _, n[5] = m, n[6] = f;
		} else f = n[6];
		return f;
	}
	var v = {
		root: {
			position: "x10l6tqk",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xh8yej3",
			height: "x5yr21d",
			borderStartStartRadius: "x1fmog5m",
			borderStartEndRadius: "xu25z0z",
			borderEndEndRadius: "x140muxe",
			borderEndStartRadius: "xo1y3bh",
			$$css: !0
		},
		loading: {
			opacity: "xg01cxk",
			$$css: !0
		},
		backgroundTransparent: {
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		fitNone: {
			":not([stylex-hack]) > *_left": "xosibs0",
			":not([stylex-hack]) > *_insetInlineStart": null,
			":not([stylex-hack]) > *_insetInlineEnd": null,
			":not([stylex-hack]) > *_position": "xt24udd",
			":not([stylex-hack]) > *_top": "xw53kvy",
			":not([stylex-hack]) > *_transform": "x1dka6rp",
			$$css: !0
		},
		fit: {
			":not([stylex-hack]) img_height": "xtd80it",
			":not([stylex-hack]) img_insetInlineStart": "xdma8tb",
			":not([stylex-hack]) img_left": null,
			":not([stylex-hack]) img_right": null,
			":not([stylex-hack]) img_position": "x1q1rkhy",
			":not([stylex-hack]) img_top": "x18tuezv",
			":not([stylex-hack]) img_width": "x1xuqjiz",
			$$css: !0
		},
		fitCover: {
			":not([stylex-hack]) img_objectFit": "xhl3afg",
			$$css: !0
		},
		fitContain: {
			":not([stylex-hack]) img_objectFit": "x1o3kp5p",
			$$css: !0
		},
		presentational: {
			pointerEvents: "x47corl",
			$$css: !0
		},
		disabled: {
			opacity: "xbyyjgo",
			$$css: !0
		}
	};
	function S(t) {
		var n = o("react-compiler-runtime").c(31), a = t.description, i = t.fit, l = t.hasMediaBackground, s = t.isDisabled, d = t.isImage, m = t.isLoading, p = t.media, _ = t.onLoad, f = t.ref, g = t.size, h = t.style, y = t.xstyle, C = c(r("GeoPrivateMediaItemContext")), b = C.isOverflowItem, S = C.overflowCount, R = C.variant, L = c(r("GeoPrivateMediaItemSurfaceContext")), E = b != null ? b : !1, k = r("useGeoTheme")(), T = k.selectStaticBackgroundColor, D = !d && (p == null ? void 0 : p.type) !== "svg" && (p == null ? void 0 : p.type) !== "img", x = s && v.disabled, $ = m && v.loading, P = (!d || i === "none") && v.fitNone, N = d && i !== "none" && v.fit, M = d && i === "cover" && v.fitCover, w = d && i === "contain" && v.fitContain, A = D && v.presentational, F, O;
		if (n[0] !== a || n[1] !== l || n[2] !== d || n[3] !== m || n[4] !== D || n[5] !== T || n[6] !== L || n[7] !== x || n[8] !== $ || n[9] !== P || n[10] !== N || n[11] !== M || n[12] !== w || n[13] !== A || n[14] !== y) {
			var B = [
				v.root,
				x,
				$,
				P,
				N,
				M,
				w,
				A,
				!m && L !== "none" && T({ surface: "wash" }),
				!d && l === !1 && v.backgroundTransparent,
				y
			];
			F = D ? a : null, O = (e || (e = r("stylex"))).props(B), n[0] = a, n[1] = l, n[2] = d, n[3] = m, n[4] = D, n[5] = T, n[6] = L, n[7] = x, n[8] = $, n[9] = P, n[10] = N, n[11] = M, n[12] = w, n[13] = A, n[14] = y, n[15] = F, n[16] = O;
		} else F = n[15], O = n[16];
		var W = r("isFalsey")(a) && D ? "presentation" : null, q;
		n[17] !== E || n[18] !== S || n[19] !== g || n[20] !== R ? (q = E && u.jsx(I, {
			overflowCount: S,
			size: g,
			variant: R
		}), n[17] = E, n[18] = S, n[19] = g, n[20] = R, n[21] = q) : q = n[21];
		var U;
		return n[22] !== p || n[23] !== _ || n[24] !== f || n[25] !== h || n[26] !== W || n[27] !== q || n[28] !== F || n[29] !== O ? (U = u.jsxs("div", babelHelpers.extends({ "aria-label": F }, O, {
			onLoad: _,
			ref: f,
			role: W,
			style: h,
			children: [p, q]
		})), n[22] = p, n[23] = _, n[24] = f, n[25] = h, n[26] = W, n[27] = q, n[28] = F, n[29] = O, n[30] = U) : U = n[30], U;
	}
	function R(e) {
		if (!u.isValidElement(e)) return !1;
		var t = r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(e);
		return t == null || t.props == null ? !1 : t.type === u.Fragment && t.props.children != null ? u.Children.toArray(t.props.children).some(R) : typeof t.props == "object" && t.props.src != null && (typeof t.props.src == "string" || typeof t.props.src == "object" && t.props.src.valueOf != null && typeof t.props.src.valueOf() == "string");
	}
	var L = { root: {
		position: "x10l6tqk",
		zIndex: "x1vjfegm",
		$$css: !0
	} };
	function E(e) {
		var t = o("react-compiler-runtime").c(18), n = e.platform, a = e.platformIconSize, i = e.ratio, l = e.size, s;
		t[0] !== a || t[1] !== l ? (s = a != null ? a : o("GeoPrivateMediaItemAddOn.react").getAddonSize(l), t[0] = a, t[1] = l, t[2] = s) : s = t[2];
		var c = s, d;
		t[3] !== n ? (d = Array.isArray(n) ? n : [n], t[3] = n, t[4] = d) : d = t[4];
		var m = d, p = m.length > 1, _ = !p, f;
		t[5] !== m[0] || t[6] !== p ? (f = p ? "rounded" : o("GeoPrivatePlatformIconUtils").getIconShape(m[0]), t[5] = m[0], t[6] = p, t[7] = f) : f = t[7];
		var g;
		t[8] !== c || t[9] !== m || t[10] !== p ? (g = p ? u.jsx("div", {
			className: "xjkvuk6 x11lfxj5",
			children: u.jsx(r("GeoPlatformIconPile.react"), {
				platforms: m,
				size: c
			})
		}) : u.jsx(r("GeoPlatformIcon.react"), {
			platform: m[0],
			size: c
		}), t[8] = c, t[9] = m, t[10] = p, t[11] = g) : g = t[11];
		var h;
		return t[12] !== i || t[13] !== l || t[14] !== _ || t[15] !== f || t[16] !== g ? (h = u.jsx(o("GeoPrivateMediaItemAddOn.react").GeoPrivateMediaItemAddOn, {
			hasBackgroundColor: _,
			mediaRatio: i,
			mediaSize: l,
			position: "below",
			shape: f,
			xstyle: L.root,
			children: g
		}), t[12] = i, t[13] = l, t[14] = _, t[15] = f, t[16] = g, t[17] = h) : h = t[17], h;
	}
	var k = { overlay: {
		position: "x10l6tqk",
		height: "x5yr21d",
		width: "xh8yej3",
		top: "x13vifvy",
		insetInlineStart: "x1o0tod",
		borderStartStartRadius: "x1fmog5m",
		borderStartEndRadius: "xu25z0z",
		borderEndEndRadius: "x140muxe",
		borderEndStartRadius: "xo1y3bh",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		display: "x78zum5",
		alignItems: "x6s0dn4",
		justifyContent: "xl56j7k",
		$$css: !0
	} };
	function I(t) {
		var n = o("react-compiler-runtime").c(9), a = t.overflowCount, i = t.size, l = t.variant, s = l === void 0 ? "none" : l, c = r("useGeoTheme")(), d = c.selectStaticBackgroundColor, m;
		n[0] !== d ? (m = (e || (e = r("stylex"))).props([d({ surface: "overlay" }), k.overlay]), n[0] = d, n[1] = m) : m = n[1];
		var p;
		n[2] !== a || n[3] !== i || n[4] !== s ? (p = u.jsx(P, {
			overflowCount: a,
			size: i,
			variant: s
		}), n[2] = a, n[3] = i, n[4] = s, n[5] = p) : p = n[5];
		var _;
		return n[6] !== m || n[7] !== p ? (_ = u.jsx("div", babelHelpers.extends({}, m, { children: p })), n[6] = m, n[7] = p, n[8] = _) : _ = n[8], _;
	}
	function T(e) {
		switch (e) {
			case 16: return o("meta-brand-three-dots-horizontal-filled-8").metaBrandThreeDotsHorizontalFilled8;
			case 24: return o("meta-brand-three-dots-horizontal-filled-12").metaBrandThreeDotsHorizontalFilled12;
			case 30:
			case 32:
			case 41: return o("meta-brand-three-dots-horizontal-filled-16").metaBrandThreeDotsHorizontalFilled16;
			default: return o("meta-brand-three-dots-horizontal-filled-24").metaBrandThreeDotsHorizontalFilled24;
		}
	}
	function D(e) {
		switch (e) {
			case 16:
			case 24:
			case 30:
			case 32: return "accent";
			case 41:
			case 48: return "value";
			default: return "header1";
		}
	}
	function x(e) {
		switch (e) {
			case 16:
			case 24: return 9;
			case 30:
			case 32:
			case 41:
			case 48: return 99;
			case 62:
			case 64: return 999;
			case 94:
			case 96: return 9999;
			default: return 99;
		}
	}
	function $(e, t) {
		var n = x(e);
		return t != null && t > n ? n + "+" : "+" + String(t);
	}
	function P(e) {
		var t = o("react-compiler-runtime").c(10), n = e.overflowCount, a = e.size, i = e.variant, l = i === void 0 ? "ellipses" : i, s;
		t[0] !== a ? (s = T(a), t[0] = a, t[1] = s) : s = t[1];
		var c = s, d;
		t[2] !== a ? (d = D(a), t[2] = a, t[3] = d) : d = t[3];
		var m = d, p;
		return t[4] !== c || t[5] !== m || t[6] !== n || t[7] !== a || t[8] !== l ? (p = l === "ellipses" ? u.jsx(r("GeoPrivateIcon.react"), {
			color: "inverted",
			icon: c
		}) : u.jsx(r("GeoBaseText.react"), {
			color: "inverted",
			size: m,
			textAlign: "center",
			children: $(a, n)
		}), t[4] = c, t[5] = m, t[6] = n, t[7] = a, t[8] = l, t[9] = p) : p = t[9], p;
	}
	var N = o("GeoPrivateMakeComponent").makeGeoComponent("GeoMediaItem", h);
	l.default = N;
}), 98);
