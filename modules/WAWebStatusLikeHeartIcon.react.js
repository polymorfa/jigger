__d("WAWebStatusLikeHeartIcon.react", [
	"WAWebLottieAnimationLoadable",
	"WAWebNoop",
	"WAWebStatusActionButtonStyles",
	"WAWebStatusLikeButtonAnimationData",
	"WDSIconIcFavorite.react",
	"WDSIconIcFavoriteFilled.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useImperativeHandle, p = u.useState, _ = 3, f = {
		hiddenWhileAnimating: {
			visibility: "xlshs6z",
			$$css: !0
		},
		animation: {
			height: "x5yr21d",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			pointerEvents: "x47corl",
			position: "x10l6tqk",
			top: "x13vifvy",
			transform: "x1omdec3",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(14), n = e.isLiked, a = e.ref, i = p(null), l = i[0], u = i[1], c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = [], t[0] = c) : c = t[0], d(y, c);
		var g;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (g = function() {
			return u(null);
		}, t[1] = g) : g = t[1];
		var C = g, b, v;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (b = function() {
			return {
				playLikeAnimation: function() {
					u(h);
				},
				cancelAnimation: function() {
					u(null);
				}
			};
		}, v = [], t[2] = b, t[3] = v) : (b = t[2], v = t[3]), m(a, b, v);
		var S = l != null, R;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x6s0dn4 x3nfvp2 xl56j7k x1n2onr6 xnfr1j" }, t[4] = R) : R = t[4];
		var L;
		t[5] !== S || t[6] !== n ? (L = n ? s.jsx(r("WDSIconIcFavoriteFilled.react"), {
			"aria-hidden": !0,
			xstyle: [
				o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26Svg,
				o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26SvgCentered,
				S && f.hiddenWhileAnimating
			],
			colorName: "persistentActivityIndicator"
		}) : s.jsx(r("WDSIconIcFavorite.react"), {
			"aria-hidden": !0,
			xstyle: [
				o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26Svg,
				o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26SvgCentered,
				S && f.hiddenWhileAnimating
			],
			colorName: "persistentAlwaysWhite"
		}), t[5] = S, t[6] = n, t[7] = L) : L = t[7];
		var E;
		t[8] !== S || t[9] !== l ? (E = S ? s.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
			autoplay: !0,
			loop: !1,
			speed: _,
			data: o("WAWebStatusLikeButtonAnimationData").statusLikeButtonAnimation,
			onComplete: C,
			xstyle: f.animation
		}, l) : null, t[8] = S, t[9] = l, t[10] = E) : E = t[10];
		var k;
		return t[11] !== L || t[12] !== E ? (k = s.jsxs("span", babelHelpers.extends({}, R, { children: [L, E] })), t[11] = L, t[12] = E, t[13] = k) : k = t[13], k;
	}
	function h(e) {
		return (e != null ? e : 0) + 1;
	}
	function y() {
		o("WAWebLottieAnimationLoadable").requireBundle().catch(r("WAWebNoop"));
	}
	l.default = g;
}), 98);
