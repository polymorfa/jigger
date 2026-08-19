__d("WDSNativeSwipeable.react", ["react", "stylex"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useState, p = 100;
	function _(t) {
		var n = t.children, o = t.isRTL, a = o === void 0 ? !0 : o, i = t.onSwipeDown, l = t.onSwipeLeft, s = t.onSwipeRight, c = t.onSwipeUp, _ = t.xstyle, f = m(null), g = f[0], h = f[1], y = m(null), C = y[0], b = y[1], v = d(function(e) {
			e.stopPropagation(), b(null), h({
				x: e.targetTouches[0].clientX,
				y: e.targetTouches[0].clientY
			});
		}, []), S = d(function(e) {
			b({
				x: e.targetTouches[0].clientX,
				y: e.targetTouches[0].clientY
			});
		}, []), R = d(function() {
			if (!(g == null || C == null)) {
				var e = g.x - C.x, t = g.y - C.y, n = e > p, r = e < -p, o = t > p, u = t < -p;
				n && (a ? s == null || s() : l == null || l()), r && (a ? l == null || l() : s == null || s()), !n && !r && (o && (c == null || c()), u && (i == null || i())), h(null), b(null);
			}
		}, [
			a,
			g,
			C,
			l,
			s,
			c,
			i
		]);
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_), {
			onTouchStart: v,
			onTouchMove: S,
			onTouchEnd: R,
			"data-testid": void 0,
			children: n
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
