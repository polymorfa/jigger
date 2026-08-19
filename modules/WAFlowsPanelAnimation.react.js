__d("WAFlowsPanelAnimation.react", [
	"WAFlowsScreenAnimationContext",
	"WAFlowsSwipeable.react",
	"manageScreenAnimation",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState, _ = "xp2281s-B", f = "x1fx2mjv-B", g = {
		root: {
			animationDuration: "xy9na11",
			animationTimingFunction: "xsz6t5k",
			animationFillMode: "x10e4vud",
			willChange: "x1q1rmc8",
			$$css: !0
		},
		show: {
			animationName: "xzwh7vc",
			$$css: !0
		},
		hide: {
			animationName: "x1sxxgd6",
			$$css: !0
		},
		fullPage: {
			transform: "xumwmo6",
			$$css: !0
		}
	};
	function h(e) {
		return e.fullPage === !0 ? u.jsx(r("WAFlowsSwipeable.react"), {
			onSwipeRight: e.onClose,
			children: u.jsx(y, babelHelpers.extends({}, e))
		}) : u.jsx(y, babelHelpers.extends({}, e));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.children, a = t.enabled, i = a === void 0 ? !0 : a, l = t.fullPage, s = l === void 0 ? !1 : l, c = t.isPanelVisible, _ = t.onAnimatingChange, f = t.onClose, h = t.xstyle, y = p(), C = y[0], b = y[1], v = o("WAFlowsScreenAnimationContext").useWAFlowsScreenAnimation(), S = v.setAnimatingScreen, R = d(function(e) {
			s && C === e.target && S(!0), _(!0);
		}, [
			s,
			C,
			S,
			_
		]), L = d(function() {
			s && S(!1), _(c);
		}, [
			c,
			s,
			S,
			_
		]), E = d(function(e) {
			return e && (e.focus(), e.addEventListener("animationstart", R), e.addEventListener("animationend", L), b(e)), function() {
				e && (e.removeEventListener("animationstart", R), e.removeEventListener("animationend", L));
			};
		}, [R, L]), k = c ? g.show : g.hide;
		return m(function() {
			s && o("manageScreenAnimation").manageScreenAnimation(C, c ? "enter" : "exit", c ? "push" : "pop");
		}, [
			c,
			s,
			C
		]), u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([h].concat(i ? [g.root, s ? g.fullPage : k] : [])), {
			ref: E,
			children: n
		}));
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = h;
}), 98);
