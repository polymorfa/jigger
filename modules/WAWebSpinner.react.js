__d("WAWebSpinner.react", [
	"VisualCompletionAttributes",
	"WAWebABProps",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = "xnrop4s-B", m = "xoslcoy-B", p = {
		accent: {
			stroke: "x94ds6z",
			$$css: !0
		},
		container: {
			animationName: "x1e112to",
			animationDuration: "x1c74tu6",
			animationTimingFunction: "x1esw782",
			animationIterationCount: "xa4qsjk",
			zIndex: "xhtitgo",
			$$css: !0
		},
		default: {
			stroke: "xsg6dc1",
			$$css: !0
		},
		wdsSecondaryLighter: {
			stroke: "xsg6dc1",
			$$css: !0
		},
		highlight: {
			stroke: "x94ds6z",
			$$css: !0
		},
		progress: {
			stroke: "x94ds6z",
			$$css: !0
		},
		in: {
			stroke: "x1yzj2yw",
			$$css: !0
		},
		noop: {
			visibility: "xnpuxes",
			$$css: !0
		},
		out: {
			stroke: "x14t83b7",
			$$css: !0
		},
		rounded: {
			strokeLinecap: "x1owpc8m",
			$$css: !0
		},
		square: {
			strokeLinecap: "x37uqsb",
			$$css: !0
		},
		path: {
			animationName: "xu41xpa",
			animationDuration: "xmg6eyc",
			animationTimingFunction: "x4hg4is",
			animationIterationCount: "xa4qsjk",
			strokeDasharray: "xbla1kb",
			strokeDashoffset: "x1b0o3cz",
			$$css: !0
		},
		pathStatic: {
			strokeDasharray: "x9p2g63",
			strokeDashoffset: "x1b0o3cz",
			$$css: !0
		},
		solidwhite: {
			stroke: "x4jbe4d",
			$$css: !0
		},
		white: {
			stroke: "x11gauq7",
			$$css: !0
		},
		rotate: {
			transform: "x9tu13d",
			transformOrigin: "x1bndym7",
			$$css: !0
		},
		spanDisplay: {
			display: "x1rg5ohu",
			$$css: !0
		},
		transparent: {
			stroke: "xmy28x3",
			$$css: !0
		},
		incoming: {
			stroke: "x1xg270d",
			$$css: !0
		},
		outgoing: {
			stroke: "xxcrxs2",
			$$css: !0
		}
	}, _ = 20;
	function f(e) {
		if (e == null) return null;
		var t = Math.ceil(2 * _ * Math.PI);
		return {
			strokeDasharray: t + " " + t,
			strokeDashoffset: t - e / 100 * t
		};
	}
	function g(e, t) {
		if (e == null) return null;
		var n = Math.max(Math.min(e, t), 0);
		return n * 100 / t;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(14), n = e.color, a = e.gpuAnimationEnabled, i = e.outgoingMsg, l = e.progress, u = e.stroke, d = e.strokeLinecap, m = e.viewBoxSide, g = d === void 0 ? "round" : d, h;
		t[0] !== l ? (h = f(l), t[0] = l, t[1] = h) : h = t[1];
		var y;
		t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== l || t[6] !== g ? (y = (s || (s = r("stylex")))(g === "round" && p.rounded, g === "square" && p.square, l == null && (a ? p.pathStatic : p.path), typeof n != "string" ? n : p[n], i === !1 && p.in, i === !0 && p.out), t[2] = n, t[3] = a, t[4] = i, t[5] = l, t[6] = g, t[7] = y) : y = t[7];
		var C = m / 2, b = m / 2, v;
		return t[8] !== u || t[9] !== h || t[10] !== y || t[11] !== C || t[12] !== b ? (v = c.jsx("circle", {
			style: h,
			className: y,
			cx: C,
			cy: b,
			r: _,
			fill: "none",
			strokeWidth: u
		}), t[8] = u, t[9] = h, t[10] = y, t[11] = C, t[12] = b, t[13] = v) : v = t[13], v;
	}
	function y(t) {
		var n = o("react-compiler-runtime").c(37), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.color, d = l.max, m = l.outgoingMsg, f = l.progressContainerColor, y = l.size, C = l.stroke, b = l.strokeLinecap, v = l.testid, S = l.value, R = l.xstyle, L = u === void 0 ? "default" : u, E = d === void 0 ? 100 : d, k = f === void 0 ? "default" : f, I = y === void 0 ? 65 : y, T = C === void 0 ? 4 : C, D = b === void 0 ? "round" : b, x = v === void 0 ? "loading-spinner" : v, $;
		n[3] !== E || n[4] !== S ? ($ = g(S, E), n[3] = E, n[4] = S, n[5] = $) : $ = n[5];
		var P = $, N = 2 * _ + T, M = "0 0 " + N + " " + N, w, A;
		n[6] !== P || n[7] !== R ? (w = o("WAWebABProps").getABPropConfigValue("web_anr_spinner_gpu_animation"), A = (s || (s = r("stylex"))).props(P == null && p.container || p.rotate, w && p.spanDisplay, R), n[6] = P, n[7] = R, n[8] = w, n[9] = A) : (w = n[8], A = n[9]);
		var F = A, O = w ? F : null, B = w ? null : F, W;
		n[10] !== w || n[11] !== m || n[12] !== P || n[13] !== k || n[14] !== T || n[15] !== D || n[16] !== N ? (W = P != null ? c.jsx(h, {
			viewBoxSide: N,
			stroke: T,
			strokeLinecap: D,
			outgoingMsg: m,
			color: k,
			gpuAnimationEnabled: w,
			progress: 100
		}) : null, n[10] = w, n[11] = m, n[12] = P, n[13] = k, n[14] = T, n[15] = D, n[16] = N, n[17] = W) : W = n[17];
		var q;
		n[18] !== L || n[19] !== w || n[20] !== m || n[21] !== P || n[22] !== T || n[23] !== D || n[24] !== N ? (q = c.jsx(h, {
			progress: P,
			viewBoxSide: N,
			stroke: T,
			strokeLinecap: D,
			outgoingMsg: m,
			color: L,
			gpuAnimationEnabled: w
		}), n[18] = L, n[19] = w, n[20] = m, n[21] = P, n[22] = T, n[23] = D, n[24] = N, n[25] = q) : q = n[25];
		var U;
		n[26] !== I || n[27] !== B || n[28] !== W || n[29] !== q || n[30] !== M ? (U = c.jsxs("svg", babelHelpers.extends({}, B, {
			width: I,
			height: I,
			viewBox: M,
			role: "status",
			children: [W, q]
		})), n[26] = I, n[27] = B, n[28] = W, n[29] = q, n[30] = M, n[31] = U) : U = n[31];
		var V;
		return n[32] !== i || n[33] !== O || n[34] !== U || n[35] !== x ? (V = c.jsx("span", babelHelpers.extends({
			ref: i,
			"data-testid": x
		}, O, r("VisualCompletionAttributes").LOADING_STATE, { children: U })), n[32] = i, n[33] = O, n[34] = U, n[35] = x, n[36] = V) : V = n[36], V;
	}
	l.RADIUS = _, l.Spinner = y;
}), 98);
