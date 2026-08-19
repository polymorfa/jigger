__d("WAWebMultiParticipantCallImage.react", [
	"WAWebDetailImage.react",
	"WAWebVoipUiContext",
	"WAWebVoipUiPopoutWindowContext",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useContext, d = {
		width: "x5lhr3w",
		height: "x16ye13r",
		$$css: !0
	}, m = {
		container: {
			position: "x1n2onr6",
			backgroundColor: "x1c7u0tx",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		containerSize: function(t) {
			return [{
				width: t != null ? "x5lhr3w" : t,
				height: t != null ? "x16ye13r" : t,
				$$css: !0
			}, {
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t),
				"--x-height": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t)
			}];
		},
		imageOneAuto: function(t) {
			return [d, {
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})("max(49px, min(" + (t != null ? t : 0) * .2 + "px, 120px))"),
				"--x-height": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})("max(49px, min(" + (t != null ? t : 0) * .2 + "px, 120px))")
			}];
		}
	};
	function p(t) {
		var n = o("react-compiler-runtime").c(65), a = t.participantWids, i = t.size, l = i === void 0 ? 49 : i, s = c(r("WAWebVoipUiContext")), d = s.uiHeight, p = c(r("WAWebVoipUiPopoutWindowContext")), f = p.isContextInPopoutWindow, g;
		n[0] !== a ? (g = a.slice(0, 3), n[0] = a, n[1] = g) : g = n[1];
		var h = g, y = h.length;
		if (y === 0) return null;
		var C = f ? 120 : Math.max(49, Math.min((d != null ? d : 0) * .2, 120)), b;
		n[2] !== C ? (b = function(t) {
			if (t === "auto") return C;
			var e = t;
			return e;
		}, n[2] = C, n[3] = b) : b = n[3];
		var v;
		n[4] !== l || n[5] !== b ? (v = b(l), n[4] = l, n[5] = b, n[6] = v) : v = n[6];
		var S = v, R;
		n[7] !== C || n[8] !== y ? (R = function(t) {
			if (t === "auto" && y === 1) return null;
			if (t === "auto") return m.containerSize(C);
			var e = t;
			return m.containerSize(e);
		}, n[7] = C, n[8] = y, n[9] = R) : R = n[9];
		var L, E, k;
		if (n[10] !== S || n[11] !== y || n[12] !== h[0] || n[13] !== h[1] || n[14] !== l || n[15] !== R || n[16] !== d) {
			k = Symbol.for("react.early_return_sentinel");
			e: {
				var I = R(l), T;
				n[20] !== l ? (T = _(l), n[20] = l, n[21] = T) : T = n[21];
				var D = T;
				if (y === 1) {
					var x = l === "auto" ? null : l, $ = l === "auto", P;
					n[22] !== l || n[23] !== d ? (P = l === "auto" && m.imageOneAuto(d), n[22] = l, n[23] = d, n[24] = P) : P = n[24];
					var N;
					n[25] !== h[0] || n[26] !== D || n[27] !== $ || n[28] !== P || n[29] !== x ? (N = u.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: h[0],
						size: x,
						quality: D,
						customDimensionsStyle: $,
						waitIdle: !0,
						shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
						xstyle: P
					}), n[25] = h[0], n[26] = D, n[27] = $, n[28] = P, n[29] = x, n[30] = N) : N = n[30], k = u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.container, I), { children: N }));
					break e;
				}
				if (y === 2) {
					var M;
					n[31] !== S ? (M = Math.round(S * 1.5), n[31] = S, n[32] = M) : M = n[32];
					var w = M, A = (e || (e = r("stylex"))).props(m.container, I), F, O;
					n[33] === Symbol.for("react.memo_cache_sentinel") ? (F = { className: "x10l6tqk x13vifvy x1o0tod x1ax8nco x5yr21d x6ikm8r x10wlt62" }, O = { className: "x10l6tqk xwa60dl xbudbmw x11lhmoz" }, n[33] = F, n[34] = O) : (F = n[33], O = n[34]);
					var B;
					n[35] !== h[0] || n[36] !== w ? (B = u.jsx("div", babelHelpers.extends({}, F, { children: u.jsx("div", babelHelpers.extends({}, O, { children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: h[0],
						size: w,
						quality: o("WAWebDetailImage.react").DetailImageQuality.High,
						waitIdle: !0
					}) })) })), n[35] = h[0], n[36] = w, n[37] = B) : B = n[37];
					var W, q;
					n[38] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "x10l6tqk x13vifvy xtijo5x x1ax8nco x5yr21d x6ikm8r x10wlt62" }, q = { className: "x10l6tqk xwa60dl xbudbmw x11lhmoz" }, n[38] = W, n[39] = q) : (W = n[38], q = n[39]);
					var U;
					n[40] !== h[1] || n[41] !== w ? (U = u.jsx("div", babelHelpers.extends({}, W, { children: u.jsx("div", babelHelpers.extends({}, q, { children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: h[1],
						size: w,
						quality: o("WAWebDetailImage.react").DetailImageQuality.High,
						waitIdle: !0
					}) })) })), n[40] = h[1], n[41] = w, n[42] = U) : U = n[42], k = u.jsxs("div", babelHelpers.extends({}, A, { children: [B, U] }));
					break e;
				}
				var V;
				n[43] !== S ? (V = Math.round(S * 1.5), n[43] = S, n[44] = V) : V = n[44], L = V, E = (e || (e = r("stylex"))).props(m.container, I);
			}
			n[10] = S, n[11] = y, n[12] = h[0], n[13] = h[1], n[14] = l, n[15] = R, n[16] = d, n[17] = L, n[18] = E, n[19] = k;
		} else L = n[17], E = n[18], k = n[19];
		if (k !== Symbol.for("react.early_return_sentinel")) return k;
		var H, G;
		n[45] === Symbol.for("react.memo_cache_sentinel") ? (H = { className: "x10l6tqk x13vifvy x1o0tod x1ax8nco x5yr21d x6ikm8r x10wlt62" }, G = { className: "x10l6tqk xwa60dl xbudbmw x11lhmoz" }, n[45] = H, n[46] = G) : (H = n[45], G = n[46]);
		var z;
		n[47] !== h[0] || n[48] !== L ? (z = u.jsx("div", babelHelpers.extends({}, H, { children: u.jsx("div", babelHelpers.extends({}, G, { children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: h[0],
			size: L,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High,
			waitIdle: !0
		}) })) })), n[47] = h[0], n[48] = L, n[49] = z) : z = n[49];
		var j, K;
		n[50] === Symbol.for("react.memo_cache_sentinel") ? (j = { className: "x10l6tqk x13vifvy xtijo5x x1ax8nco xw4yvfu x6ikm8r x10wlt62" }, K = { className: "x10l6tqk xwa60dl xbudbmw x11lhmoz" }, n[50] = j, n[51] = K) : (j = n[50], K = n[51]);
		var Q;
		n[52] !== h[1] || n[53] !== L ? (Q = u.jsx("div", babelHelpers.extends({}, j, { children: u.jsx("div", babelHelpers.extends({}, K, { children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: h[1],
			size: L,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High,
			waitIdle: !0
		}) })) })), n[52] = h[1], n[53] = L, n[54] = Q) : Q = n[54];
		var X, Y;
		n[55] === Symbol.for("react.memo_cache_sentinel") ? (X = { className: "x10l6tqk x1ey2m1c xtijo5x x1ax8nco xw4yvfu x6ikm8r x10wlt62" }, Y = { className: "x10l6tqk xwa60dl xbudbmw x11lhmoz" }, n[55] = X, n[56] = Y) : (X = n[55], Y = n[56]);
		var J;
		n[57] !== h[2] || n[58] !== L ? (J = u.jsx("div", babelHelpers.extends({}, X, { children: u.jsx("div", babelHelpers.extends({}, Y, { children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: h[2],
			size: L,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High,
			waitIdle: !0
		}) })) })), n[57] = h[2], n[58] = L, n[59] = J) : J = n[59];
		var Z;
		return n[60] !== z || n[61] !== Q || n[62] !== J || n[63] !== E ? (Z = u.jsxs("div", babelHelpers.extends({}, E, { children: [
			z,
			Q,
			J
		] })), n[60] = z, n[61] = Q, n[62] = J, n[63] = E, n[64] = Z) : Z = n[64], Z;
	}
	function _(e) {
		if (e === "auto") return o("WAWebDetailImage.react").DetailImageQuality.High;
		var t = e;
		return t > 49 ? o("WAWebDetailImage.react").DetailImageQuality.High : o("WAWebDetailImage.react").DetailImageQuality.Low;
	}
	l.default = p;
}), 98);
