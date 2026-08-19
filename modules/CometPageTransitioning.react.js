__d("CometPageTransitioning.react", [
	"ariaGlimmerProps",
	"react",
	"react-compiler-runtime",
	"useCometRouterLoadingState",
	"useShouldHidePageTransitioningLoadingState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = "xekv6nw-B", c = "x5ed7rf-B", d = "always-enable-animations";
	function m(e) {
		var t = o("react-compiler-runtime").c(8), n = e.focusable, a = r("useCometRouterLoadingState")(), i = r("useShouldHidePageTransitioningLoadingState")(), l = a && !i, u;
		t[0] !== l ? (u = {
			0: "xshklg3 xxkxylk x1u6ievf x127lhb5 xa3vuyk x1xzmf5g xqu0tyb xtijo5x x1o0tod xg01cxk xixxii4 x13vifvy xn9wirt x14g40p9",
			1: "xshklg3 xxkxylk x1u6ievf x127lhb5 xa3vuyk x1xzmf5g xqu0tyb xtijo5x x1o0tod xg01cxk xixxii4 x13vifvy xn9wirt x14g40p9 x1s85apg"
		}[!l << 0], t[0] = l, t[1] = u) : u = t[1];
		var c;
		t[2] !== u ? (c = [d, u], t[2] = u, t[3] = c) : c = t[3];
		var m = c.join(" "), p = n === !1 ? void 0 : r("ariaGlimmerProps").tabIndex, _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = s.jsx("div", { className: "x1c74tu6 xa4qsjk x14rlmvs xa3vuyk x4o00kh x5yr21d xh8yej3" }), t[4] = _) : _ = t[4];
		var f;
		return t[5] !== m || t[6] !== p ? (f = s.jsx("div", babelHelpers.extends({}, r("ariaGlimmerProps"), {
			className: m,
			tabIndex: p,
			children: _
		})), t[5] = m, t[6] = p, t[7] = f) : f = t[7], f;
	}
	l.default = m;
}), 98);
