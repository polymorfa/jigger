__d("WAWebSpinner.react", [
	"VisualCompletionAttributes",
	"WAWebABProps",
	"react",
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
		var t = e.color, n = e.gpuAnimationEnabled, o = e.outgoingMsg, a = e.progress, i = e.stroke, l = e.strokeLinecap, u = l === void 0 ? "round" : l, d = e.viewBoxSide;
		return c.jsx("circle", {
			style: f(a),
			className: (s || (s = r("stylex")))(u === "round" && p.rounded, u === "square" && p.square, a == null && (n ? p.pathStatic : p.path), typeof t != "string" ? t : p[t], o === !1 && p.in, o === !0 && p.out),
			cx: d / 2,
			cy: d / 2,
			r: _,
			fill: "none",
			strokeWidth: i
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.color, l = i === void 0 ? "default" : i, u = a.max, d = u === void 0 ? 100 : u, m = a.outgoingMsg, f = a.progressContainerColor, y = f === void 0 ? "default" : f, C = a.size, b = C === void 0 ? 65 : C, v = a.stroke, S = v === void 0 ? 4 : v, R = a.strokeLinecap, L = R === void 0 ? "round" : R, E = a.testid, k = E === void 0 ? "loading-spinner" : E, I = a.value, T = a.xstyle, D = g(I, d), x = 2 * _ + S, $ = "0 0 " + x + " " + x, P = o("WAWebABProps").getABPropConfigValue("web_anr_spinner_gpu_animation"), N = (s || (s = r("stylex"))).props(D == null && p.container || p.rotate, P && p.spanDisplay, T);
		return c.jsx("span", babelHelpers.extends({
			ref: n,
			"data-testid": k
		}, P ? N : null, r("VisualCompletionAttributes").LOADING_STATE, { children: c.jsxs("svg", babelHelpers.extends({}, P ? null : N, {
			width: b,
			height: b,
			viewBox: $,
			role: "status",
			children: [D != null ? c.jsx(h, {
				viewBoxSide: x,
				stroke: S,
				strokeLinecap: L,
				outgoingMsg: m,
				color: y,
				gpuAnimationEnabled: P,
				progress: 100
			}) : null, c.jsx(h, {
				progress: D,
				viewBoxSide: x,
				stroke: S,
				strokeLinecap: L,
				outgoingMsg: m,
				color: l,
				gpuAnimationEnabled: P
			})]
		})) }));
	}
	y.displayName = y.name + " [from " + i.id + "]", l.RADIUS = _, l.Spinner = y;
}), 98);
