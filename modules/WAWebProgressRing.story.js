__d("WAWebProgressRing.story", [
	"WAWebProgressRing.react",
	"WAWebShowroomUtils",
	"WDSSlider.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = [
		"Body3Emphasized",
		"Body2Emphasized",
		"Body1Emphasized",
		"Headline2",
		"Headline1"
	], d = {
		min: 0,
		max: 99,
		step: 1
	}, m = {
		min: 24,
		max: 128,
		step: 4
	}, p = {
		min: 1,
		max: 8,
		step: 1
	};
	function _(e) {
		return e + "px";
	}
	function f() {
		var e = o("react-compiler-runtime").c(59), t = u(40), n = t[0], a = t[1], i = u(64), l = i[0], f = i[1], y = u(4), C = y[0], b = y[1], v = u(1), S = v[0], R = v[1], L;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x6s0dn4 x78zum5 xdt5ytf x1na6gtj" }, e[0] = L) : L = e[0];
		var E = c[S], k;
		e[1] !== n || e[2] !== l || e[3] !== C || e[4] !== E ? (k = s.jsx(r("WAWebProgressRing.react"), {
			percentage: n,
			size: l,
			stroke: C,
			textType: E
		}), e[1] = n, e[2] = l, e[3] = C, e[4] = E, e[5] = k) : k = e[5];
		var I, T;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x78zum5 xdt5ytf xgpatz3 x1hfn5x7" }, T = { className: "x78zum5 xdt5ytf x1r0jzty" }, e[6] = I, e[7] = T) : (I = e[6], T = e[7]);
		var D = "Percentage — " + n + "%", x;
		e[8] !== D ? (x = s.jsx("label", {
			htmlFor: "progress-ring-percentage",
			children: D
		}), e[8] = D, e[9] = x) : x = e[9];
		var $;
		e[10] !== n ? ($ = [n], e[10] = n, e[11] = $) : $ = e[11];
		var P;
		e[12] === Symbol.for("react.memo_cache_sentinel") ? (P = function(t) {
			return a(t[0]);
		}, e[12] = P) : P = e[12];
		var N;
		e[13] !== $ ? (N = s.jsx(r("WDSSlider.react"), {
			testid: "progress-ring-percentage",
			values: $,
			min: d.min,
			max: d.max,
			step: d.step,
			startEndLabels: "minMax",
			displayValueText: h,
			onChange: P
		}), e[13] = $, e[14] = N) : N = e[14];
		var M;
		e[15] !== x || e[16] !== N ? (M = s.jsxs("div", babelHelpers.extends({}, T, { children: [x, N] })), e[15] = x, e[16] = N, e[17] = M) : M = e[17];
		var w;
		e[18] === Symbol.for("react.memo_cache_sentinel") ? (w = { className: "x78zum5 xdt5ytf x1r0jzty" }, e[18] = w) : w = e[18];
		var A = "Ring size — " + l + "px", F;
		e[19] !== A ? (F = s.jsx("label", {
			htmlFor: "progress-ring-size",
			children: A
		}), e[19] = A, e[20] = F) : F = e[20];
		var O;
		e[21] !== l ? (O = [l], e[21] = l, e[22] = O) : O = e[22];
		var B;
		e[23] === Symbol.for("react.memo_cache_sentinel") ? (B = function(t) {
			return f(t[0]);
		}, e[23] = B) : B = e[23];
		var W;
		e[24] !== O ? (W = s.jsx(r("WDSSlider.react"), {
			testid: "progress-ring-size",
			values: O,
			min: m.min,
			max: m.max,
			step: m.step,
			startEndLabels: "minMax",
			displayValueText: _,
			onChange: B
		}), e[24] = O, e[25] = W) : W = e[25];
		var q;
		e[26] !== F || e[27] !== W ? (q = s.jsxs("div", babelHelpers.extends({}, w, { children: [F, W] })), e[26] = F, e[27] = W, e[28] = q) : q = e[28];
		var U;
		e[29] === Symbol.for("react.memo_cache_sentinel") ? (U = { className: "x78zum5 xdt5ytf x1r0jzty" }, e[29] = U) : U = e[29];
		var V = "Ring stroke — " + C + "px", H;
		e[30] !== V ? (H = s.jsx("label", {
			htmlFor: "progress-ring-stroke",
			children: V
		}), e[30] = V, e[31] = H) : H = e[31];
		var G;
		e[32] !== C ? (G = [C], e[32] = C, e[33] = G) : G = e[33];
		var z;
		e[34] === Symbol.for("react.memo_cache_sentinel") ? (z = function(t) {
			return b(t[0]);
		}, e[34] = z) : z = e[34];
		var j;
		e[35] !== G ? (j = s.jsx(r("WDSSlider.react"), {
			testid: "progress-ring-stroke",
			values: G,
			min: p.min,
			max: p.max,
			step: p.step,
			startEndLabels: "minMax",
			displayValueText: _,
			onChange: z
		}), e[35] = G, e[36] = j) : j = e[36];
		var K;
		e[37] !== H || e[38] !== j ? (K = s.jsxs("div", babelHelpers.extends({}, U, { children: [H, j] })), e[37] = H, e[38] = j, e[39] = K) : K = e[39];
		var Q;
		e[40] === Symbol.for("react.memo_cache_sentinel") ? (Q = { className: "x78zum5 xdt5ytf x1r0jzty" }, e[40] = Q) : Q = e[40];
		var X = "Text size — " + c[S], Y;
		e[41] !== X ? (Y = s.jsx("label", {
			htmlFor: "progress-ring-text-size",
			children: X
		}), e[41] = X, e[42] = Y) : Y = e[42];
		var J;
		e[43] !== S ? (J = [S], e[43] = S, e[44] = J) : J = e[44];
		var Z;
		e[45] === Symbol.for("react.memo_cache_sentinel") ? (Z = function(t) {
			return R(t[0]);
		}, e[45] = Z) : Z = e[45];
		var ee;
		e[46] !== J ? (ee = s.jsx(r("WDSSlider.react"), {
			testid: "progress-ring-text-size",
			values: J,
			min: 0,
			max: c.length - 1,
			startEndLabels: "minMax",
			displayValueText: g,
			onChange: Z
		}), e[46] = J, e[47] = ee) : ee = e[47];
		var te;
		e[48] !== Y || e[49] !== ee ? (te = s.jsxs("div", babelHelpers.extends({}, Q, { children: [Y, ee] })), e[48] = Y, e[49] = ee, e[50] = te) : te = e[50];
		var ne;
		e[51] !== M || e[52] !== q || e[53] !== K || e[54] !== te ? (ne = s.jsxs("div", babelHelpers.extends({}, I, { children: [
			M,
			q,
			K,
			te
		] })), e[51] = M, e[52] = q, e[53] = K, e[54] = te, e[55] = ne) : ne = e[55];
		var re;
		return e[56] !== k || e[57] !== ne ? (re = s.jsxs("div", babelHelpers.extends({}, L, { children: [k, ne] })), e[56] = k, e[57] = ne, e[58] = re) : re = e[58], re;
	}
	function g(e) {
		return c[e];
	}
	function h(e) {
		return e + "%";
	}
	var y = {
		storyName: "WAWebProgressRing",
		component: r("WAWebProgressRing.react"),
		description: "A determinate circular progress ring (built on the WA media download/upload arc) with the percentage centered in it. Takes a percentage (0–100) plus the ring size/stroke and the label text type.",
		examples: [{
			example: f,
			title: "Interactive",
			description: "Each slider is clamped to a sensible range (shown as its min/max endpoints); the current value is in the label above it.",
			templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").bigPreview)
		}]
	};
	l.default = y;
}), 98);
