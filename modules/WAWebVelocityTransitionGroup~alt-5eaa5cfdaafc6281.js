__d("WAWebVelocityTransitionGroup", [
	"WAWebClassnames",
	"WAWebVelocityTransition",
	"react",
	"react-transition-group",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u.Children;
	function m(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = d.toArray(a.children), l = a.appear, u = a.component, m = u === void 0 ? "span" : u, p = a.delay, _ = a.displayName, f = a.enter, g = a.exit, h = a.onAnimationComplete, y = a.testid, C = a.transitionName, b = C === void 0 ? "default" : C, v = a.xstyle;
		return c.jsx(m, {
			ref: n,
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease((s || (s = r("stylex")))(v)),
			"data-testid": y,
			children: c.jsx(o("react-transition-group").TransitionGroup, {
				component: null,
				appear: l,
				enter: f,
				exit: g,
				children: i == null ? void 0 : i.map(function(e) {
					return c.jsx(r("WAWebVelocityTransition"), {
						transitionName: b,
						delay: p,
						onAnimationComplete: h,
						displayName: _,
						children: e
					}, e.key);
				})
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
