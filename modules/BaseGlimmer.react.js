__d("BaseGlimmer.react", [
	"BaseGlimmerCompatStyles",
	"BaseLoadingStateElement.react",
	"react",
	"useGlimmerPausedState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		"use no forget";
		var t = e.children, n = e.disableLoadingStateTracker, a = e.index, i = e.isDecorative, l = e.iteration, u = e.startPaused, c = u === void 0 ? !0 : u, d = e.variant, m = e.xstyle, p = r("useGlimmerPausedState")(c), _ = p.paused, f = p.ref;
		return s.jsx(r("BaseLoadingStateElement.react"), {
			disableLoadingStateTracker: n,
			isDecorative: i,
			ref: f,
			xstyle: d == null ? [
				o("BaseGlimmerCompatStyles").styles.root,
				_ && o("BaseGlimmerCompatStyles").styles.paused,
				m,
				o("BaseGlimmerCompatStyles").styles.animationDelay(a),
				l != null && o("BaseGlimmerCompatStyles").styles.animationIterationCount(l)
			] : [
				d.xstyleConfig.container,
				d.xstyleConfig.animation,
				d.xstyleConfig.animationDelay,
				d.xstyleConfig.animationIteration
			],
			children: t
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
