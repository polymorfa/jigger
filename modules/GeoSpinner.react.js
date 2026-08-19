__d("GeoSpinner.react", [
	"fbt",
	"GeoBaseText.react",
	"GeoPrivateLongLoadIndicator.react",
	"GeoPrivateMakeComponent",
	"GeoVisualCompletionAttributes",
	"LoadingMarker.react",
	"geoMargin",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useGeoTheme"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useRef, m = 1.5, p = 1.25, _ = 14.5, f = 22, g = 1.5, h = 2;
	function y(t) {
		var n = o("react-compiler-runtime").c(30), a = t.center, i = t["data-testid"], l = t.description, u = t.label, m = t.loggingName, p = t.shade, _ = t.size, f = t.xstyle, g = p === void 0 ? "dark" : p, h = _ === void 0 ? "large" : _, y = d(null), C = a != null ? a : !!u, b;
		n[0] !== C ? (b = { isCentered: C }, n[0] = C, n[1] = b) : b = n[1];
		var R = v(b), L;
		n[2] !== g ? (L = g === "dark" ? ["heading", "headingDescription"] : ["inverted", "inverted"], n[2] = g, n[3] = L) : L = n[3];
		var E = L, k = E[0], I = E[1], T;
		n[4] !== R || n[5] !== f ? (T = (e || (e = r("stylex")))(R, f), n[4] = R, n[5] = f, n[6] = T) : T = n[6];
		var D;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), n[7] = D) : D = n[7];
		var x;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "x3nfvp2 x1t137rt" }, n[8] = x) : x = n[8];
		var $;
		n[9] !== g || n[10] !== h ? ($ = c.jsx("span", babelHelpers.extends({
			"aria-busy": !0,
			"aria-valuetext": D,
			"data-is-placeholder": "true"
		}, x, {
			role: "progressbar",
			children: c.jsx(S, {
				shade: g,
				size: h
			})
		})), n[9] = g, n[10] = h, n[11] = $) : $ = n[11];
		var P;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "x193iq5w" }, n[12] = P) : P = n[12];
		var N;
		n[13] !== u || n[14] !== k ? (N = u != null && c.jsx(r("GeoBaseText.react"), {
			color: k,
			display: "truncate",
			size: "header4",
			textAlign: "center",
			weight: "bold",
			whiteSpace: "nowrap",
			xstyle: r("geoMargin").top12,
			children: u
		}), n[13] = u, n[14] = k, n[15] = N) : N = n[15];
		var M;
		n[16] !== l || n[17] !== I ? (M = l != null && c.jsx(r("GeoBaseText.react"), {
			color: I,
			display: "truncate",
			size: "valueDescription",
			textAlign: "center",
			whiteSpace: "nowrap",
			xstyle: r("geoMargin").top4,
			children: l
		}), n[16] = l, n[17] = I, n[18] = M) : M = n[18];
		var w;
		n[19] !== N || n[20] !== M ? (w = c.jsxs("div", babelHelpers.extends({}, P, { children: [N, M] })), n[19] = N, n[20] = M, n[21] = w) : w = n[21];
		var A;
		n[22] !== i || n[23] !== w || n[24] !== T || n[25] !== $ ? (A = c.jsxs("div", babelHelpers.extends({}, r("GeoVisualCompletionAttributes").LOADING_STATE, {
			className: T,
			"data-testid": void 0,
			ref: y,
			children: [$, w]
		})), n[22] = i, n[23] = w, n[24] = T, n[25] = $, n[26] = A) : A = n[26];
		var F;
		return n[27] !== m || n[28] !== A ? (F = c.jsx(r("GeoPrivateLongLoadIndicator.react"), { children: c.jsx(r("LoadingMarker.react"), {
			loadingMarkerName: m,
			nodeRef: y,
			children: A
		}) }), n[27] = m, n[28] = A, n[29] = F) : F = n[29], F;
	}
	var C = "xqng64z-B", b = {
		root: {
			display: "x3nfvp2",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		fullSize: {
			boxSizing: "x9f619",
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function v(e) {
		var t = o("react-compiler-runtime").c(6), n = e.isCentered, a = r("useGeoTheme")(), i = a.selectSpacing, l = n && b.fullSize, s;
		t[0] !== n || t[1] !== i ? (s = n && i({
			bounds: "internal",
			context: "component",
			target: "coarse"
		}), t[0] = n, t[1] = i, t[2] = s) : s = t[2];
		var u;
		return t[3] !== l || t[4] !== s ? (u = [
			b.root,
			l,
			s
		], t[3] = l, t[4] = s, t[5] = u) : u = t[5], u;
	}
	function S(t) {
		var n = o("react-compiler-runtime").c(35), a = t.shade, i = t.size, l = r("useGeoTheme")(), s = l.selectProgressElementColor, u, d, y, C, b, v, S, R, L, E;
		if (n[0] !== s || n[1] !== a || n[2] !== i) {
			var I = s({
				shade: a,
				element: "bar"
			}), T = s({
				shade: a,
				element: "track"
			}), D = i === "small" ? _ : f;
			y = i === "small" ? g : h;
			var x = D + y, $ = y / 2;
			d = D / 2, u = x / 2, n[13] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x1ka1v4i x7v9bd0 x1esw782 xa4qsjk xxymvpz" }, n[13] = b) : b = n[13], v = x, S = "0 0 " + x + " " + x, R = x, L = "http://www.w3.org/2000/svg";
			var P = (e || (e = r("stylex"))).props(T);
			n[14] !== D || n[15] !== $ || n[16] !== d || n[17] !== y || n[18] !== P ? (E = c.jsx("rect", babelHelpers.extends({}, P, {
				fill: "none",
				height: D,
				rx: d,
				strokeWidth: y,
				width: D,
				x: $,
				y: $
			})), n[14] = D, n[15] = $, n[16] = d, n[17] = y, n[18] = P, n[19] = E) : E = n[19], C = e.props(I), n[0] = s, n[1] = a, n[2] = i, n[3] = u, n[4] = d, n[5] = y, n[6] = C, n[7] = b, n[8] = v, n[9] = S, n[10] = R, n[11] = L, n[12] = E;
		} else u = n[3], d = n[4], y = n[5], C = n[6], b = n[7], v = n[8], S = n[9], R = n[10], L = n[11], E = n[12];
		var N;
		n[20] !== u || n[21] !== d ? (N = k(u, u, d, m * Math.PI, (m + p) % 2 * Math.PI), n[20] = u, n[21] = d, n[22] = N) : N = n[22];
		var M;
		n[23] !== y || n[24] !== C || n[25] !== N ? (M = c.jsx("path", babelHelpers.extends({}, C, {
			d: N,
			fill: "none",
			strokeWidth: y
		})), n[23] = y, n[24] = C, n[25] = N, n[26] = M) : M = n[26];
		var w;
		return n[27] !== b || n[28] !== v || n[29] !== S || n[30] !== R || n[31] !== L || n[32] !== E || n[33] !== M ? (w = c.jsxs("svg", babelHelpers.extends({}, b, {
			height: v,
			viewBox: S,
			width: R,
			xmlns: L,
			children: [E, M]
		})), n[27] = b, n[28] = v, n[29] = S, n[30] = R, n[31] = L, n[32] = E, n[33] = M, n[34] = w) : w = n[34], w;
	}
	function R(e) {
		return e * Math.PI / 180;
	}
	function L(e) {
		return e * 180 / Math.PI;
	}
	function E(e, t, n, r) {
		var o = R(r);
		return {
			x: e + n * Math.cos(o),
			y: t + n * Math.sin(o)
		};
	}
	function k(e, t, n, r, o) {
		var a = L(r), i = L(o), l = E(e, t, n, i), s = E(e, t, n, a), u = a - i > 180 ? "0" : "1";
		return ["M " + l.x + " " + l.y, "A " + n + " " + n + " 0 " + u + " 0 " + s.x + " " + s.y].join(" ");
	}
	var I = o("GeoPrivateMakeComponent").makeGeoComponent("GeoSpinner", y);
	l.default = I;
}), 226);
