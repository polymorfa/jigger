__d("WAWebContextualBannerWrapper.react", [
	"WAWebContextualBanner.react",
	"WAWebContextualBannerConfig",
	"WAWebVelocityTransitionGroup",
	"react",
	"useVisibility",
	"useWAWebCallbackOnce",
	"useWAWebContextualBanner"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState;
	function m(e) {
		var t = e.bannerListOrderedByPriority, n = r("useWAWebContextualBanner")(t.map(function(e) {
			return e.id;
		})), a = n[0], i = n[1], l = n[2], u = n[3], m = c(function() {
			return t.find(function(e) {
				var t = e.id;
				return a(t);
			});
		}, [t, a]), p = d(m), _ = p[0], f = p[1], g = r("useWAWebCallbackOnce")(i, [_]), h = r("useVisibility")({ onVisible: function() {
			_ && g(_.id);
		} }), y = h[0], C = c(function() {
			f(m());
		}, [m]);
		if (_ != null) {
			var b = s.jsx(r("WAWebContextualBanner.react"), {
				ref: y,
				canShow: a(_.id),
				config: o("WAWebContextualBannerConfig").getContextualBannerConfig(_.id),
				onClick: function() {
					l(_.id), _.onClick == null || _.onClick(), C();
				},
				onDismiss: function() {
					u(_.id), C();
				}
			});
			return s.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "butterbar",
				children: b
			});
		}
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
