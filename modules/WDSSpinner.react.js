__d("WDSSpinner.react", [
	"WDSSpinnerElement.react",
	"getPlatformByGK",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = "x17qceat-B", m = "xekv6nw-B", p = "xnrop4s-B", _ = {
		height: "x16ye13r",
		width: "x5lhr3w",
		display: "x78zum5",
		alignItems: "x6s0dn4",
		justifyContent: "xl56j7k",
		$$css: !0
	}, f = {
		container: function(t) {
			return [_, {
				"--x-height": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t + "px"),
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t + "px")
			}];
		},
		gpuContainer: {
			animationName: "x1e112to",
			animationDuration: "x1c74tu6",
			animationTimingFunction: "x1esw782",
			animationIterationCount: "xa4qsjk",
			display: "x3nfvp2",
			$$css: !0
		}
	}, g = {
		width: "x5lhr3w",
		height: "x16ye13r",
		$$css: !0
	}, h = {
		morphIcon: function(t) {
			return [g, {
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t + "px"),
				"--x-height": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t + "px")
			}];
		},
		morphContainer: {
			position: "x1n2onr6",
			display: "x3nfvp2",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		}
	};
	function y(e, t) {
		if (e == null) return null;
		var n = Math.max(Math.min(e, t), 0);
		return n * 100 / t;
	}
	function C(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.platform, l = i === void 0 ? o("getPlatformByGK").WDS_PLATFORM : i, u = a.size, d = u === void 0 ? l === "iOS" ? 18 : 65 : u, m = a.stroke, p = m === void 0 ? 4 : m, _ = a.strokeLinecap, g = _ === void 0 ? "round" : _, C = a.xstyle, b = a.max, v = b === void 0 ? 100 : b, S = a.value, R = a.testid, L = R === void 0 ? "loading-spinner" : R, E = a.morphToIcon, k = E === void 0 ? !1 : E, I = a.iconToMorphTo, T = a.iconProps, D = a.gpuAnimationEnabled, x = D === void 0 ? !1 : D, $ = y(S, v), P = c.jsx("span", babelHelpers.extends({
			ref: n,
			"data-testid": void 0
		}, (s || (s = r("stylex"))).props(f.container(d), x && $ == null && f.gpuContainer), { children: c.jsx(r("WDSSpinnerElement.react"), {
			gpuAnimationEnabled: x,
			platform: l,
			size: d,
			stroke: p,
			progress: $,
			strokeLinecap: g,
			xstyle: C
		}) }));
		return c.jsxs("span", babelHelpers.extends({}, s.props(h.morphContainer, f.container(d)), { children: [c.jsx("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x78zum5 x6s0dn4 xl56j7k x1hc1fzr" },
			1: { className: "x10l6tqk x78zum5 x6s0dn4 xl56j7k x1hc1fzr xvma63k xdz8niu x4hg4is x10e4vud" }
		}[(k === !0 && I != null) << 0], { children: P })), k === !0 && I != null && c.jsx("div", {
			className: "x10l6tqk x78zum5 x6s0dn4 xl56j7k xg01cxk x127lhb5 xdz8niu x1t83zlg x4hg4is x10e4vud",
			children: c.jsx(I, babelHelpers.extends({
				width: d,
				height: d,
				xstyle: h.morphIcon(d)
			}, T))
		})] }));
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 98);
