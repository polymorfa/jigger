__d("WAFlowsPressable.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsScreenUtils",
	"getStyleValue",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = "x1q7udt8-B", g = "xtjubbz-B", h = {}, y = {
		root: {
			position: "x1n2onr6",
			height: "x5yr21d",
			display: "x78zum5",
			zIndex: "x1ja2u2z",
			"::after_opacity": "xmf22ne",
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_backgroundColor": "xvn5ife",
			"::after_zIndex": "xi4xitw",
			"::after_borderStartStartRadius": "xrw4ojt",
			"::after_borderStartEndRadius": "xg6frx5",
			"::after_borderEndEndRadius": "xw872ko",
			"::after_borderEndStartRadius": "xhgbb2x",
			"::after_animationTimingFunction": "x1a986gr",
			"::after_animationFillMode": "x17pmmvk",
			"::after_animationDuration": "xml25ke",
			"::after_willChange": "xnqjai2",
			"::after_pointerEvents": "x2q1x1w",
			$$css: !0
		},
		rootPressed: {
			"::after_animationName": "x18ochyj",
			$$css: !0
		},
		rootNotPressed: {
			"::after_animationName": "x1bj6e2g",
			$$css: !0
		}
	};
	function C(t) {
		var n = t.children, a = t.enabled, i = a === void 0 ? !0 : a, l = t.manualPressedState, s = t.pressableRef, c = o("WAFlowsEnvContext.react").useWAFlowsEnv(), f = c.env, g = b(f.platform), h = _(0), y = h[0], C = h[1], v = _(null), S = v[0], R = v[1], L = p({ lastPressedTime: 0 }), E = d(function() {
			return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
		}, []), k = d(function() {
			S !== !0 && (R(!0), L.current.lastPressedTime = Date.now());
		}, [S]), I = d(function() {
			if (S === !0 && l !== !0) {
				var e = Date.now() - L.current.lastPressedTime;
				e > y ? R(!1) : window.setTimeout(function() {
					R(!1);
				}, y - e);
			}
		}, [
			S,
			y,
			l
		]);
		return m(function() {
			!y && s != null && s.current && C(o("WAFlowsScreenUtils").getMilliseconds(o("getStyleValue").getStyleValue("--waf-wds-animation-duration", s.current)));
		}, [y, s]), m(function() {
			l != null && (l ? k() : I());
		}, [
			l,
			k,
			I
		]), m(function() {
			if (f.platform === "android" && l == null && s != null && s.current) {
				var e = s.current, t = {
					setPress: ["mousedown"],
					unsetPress: ["mouseup", "mouseleave"]
				}, n = {
					setPress: ["touchstart"],
					unsetPress: [
						"touchend",
						"touchmove",
						"touchcancel"
					]
				}, r = E() ? n : t;
				return r.setPress.forEach(function(t) {
					e == null || e.addEventListener(t, k);
				}), r.unsetPress.forEach(function(t) {
					e == null || e.addEventListener(t, I);
				}), function() {
					r.setPress.forEach(function(t) {
						e == null || e.removeEventListener(t, k);
					}), r.unsetPress.forEach(function(t) {
						e == null || e.removeEventListener(t, I);
					});
				};
			}
		}, [
			f.platform,
			l,
			s,
			k,
			I,
			E
		]), u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.root, i && S === !0 && g.rootPressed, i && S === !1 && g.rootNotPressed), { children: n }));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		return e === "ios" ? h : y;
	}
	l.default = C;
}), 98);
