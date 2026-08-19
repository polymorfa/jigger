__d("WAWebStatusLikeHeartIcon.react", [
	"WAWebLottieAnimationLoadable",
	"WAWebNoop",
	"WAWebStatusActionButtonStyles",
	"WAWebStatusLikeButtonAnimationData",
	"WDSIconIcFavorite.react",
	"WDSIconIcFavoriteFilled.react",
	"react"
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
		var t = e.isLiked, n = e.ref, a = p(null), i = a[0], l = a[1];
		d(function() {
			o("WAWebLottieAnimationLoadable").requireBundle().catch(r("WAWebNoop"));
		}, []);
		var u = c(function() {
			return l(null);
		}, []);
		m(n, function() {
			return {
				playLikeAnimation: function() {
					l(function(e) {
						return (e != null ? e : 0) + 1;
					});
				},
				cancelAnimation: function() {
					l(null);
				}
			};
		}, []);
		var g = i != null;
		return s.jsxs("span", {
			className: "x6s0dn4 x3nfvp2 xl56j7k x1n2onr6 xnfr1j",
			children: [t ? s.jsx(r("WDSIconIcFavoriteFilled.react"), {
				"aria-hidden": !0,
				xstyle: [
					o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26Svg,
					o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26SvgCentered,
					g && f.hiddenWhileAnimating
				],
				colorName: "persistentActivityIndicator"
			}) : s.jsx(r("WDSIconIcFavorite.react"), {
				"aria-hidden": !0,
				xstyle: [
					o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26Svg,
					o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26SvgCentered,
					g && f.hiddenWhileAnimating
				],
				colorName: "persistentAlwaysWhite"
			}), g ? s.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
				autoplay: !0,
				loop: !1,
				speed: _,
				data: o("WAWebStatusLikeButtonAnimationData").statusLikeButtonAnimation,
				onComplete: u,
				xstyle: f.animation
			}, i) : null]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
