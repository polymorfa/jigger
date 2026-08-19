__d("WAWebImageSlide.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebImageSlide.stylex",
	"WAWebMediaStateControls.react",
	"WAWebMediaTypes",
	"isStringNullOrEmpty",
	"react",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = {
		unsupportedVideoOverlay: {
			width: "xh8yej3",
			position: "x10l6tqk",
			zIndex: "xhtitgo",
			top: "xwa60dl",
			insetInlineStart: "xbudbmw",
			left: null,
			right: null,
			transform: "x11lhmoz",
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "x16qb05n",
			borderStartEndRadius: "xi7iut8",
			borderEndEndRadius: "x1dm3dyd",
			borderEndStartRadius: "x1pv694p",
			boxShadow: "x17gmuz2",
			pointerEvents: "x47corl",
			$$css: !0
		},
		unsupportedVideoOverlayText: {
			color: "xraqfvc",
			$$css: !0
		},
		playButton: {
			pointerEvents: "x47corl",
			$$css: !0
		}
	};
	function f(t) {
		var n = t.altText, a = t.forwardRef, i = t.image, l = t.mediaData, u = t.onClick, d = t.onLoad, f = t.renderFallback, g = t.showUnsupportedVideoOverlay, h = t.singleSlide, y = o("useWAWebModelValues").useModelValues(l, [
			"fullHeight",
			"fullWidth",
			"mediaStage",
			"renderableUrl"
		]), C = y.fullHeight, b = y.fullWidth, v = y.mediaStage, S = y.renderableUrl, R = S, L = p(null), E = p(v === o("WAWebMediaTypes").MediaDataStage.RESOLVED);
		m(function() {
			d && !E.current && !f && v === o("WAWebMediaTypes").MediaDataStage.RESOLVED && (d(), E.current = !0);
		}, [
			d,
			f,
			v
		]);
		var k = function() {
			u && L.current && i && u(L.current, i);
		}, I = !!h, T = b && C ? b / C : .8;
		T < .8 && (T = .8), T > 1.91 && (T = 1.91), T > 1 && !I && (T = 1);
		var D = null;
		I && T < 1 ? D = 100 * T + "%" : T === 1 && !h && (D = "100%");
		var x = { width: D }, $ = { paddingTop: Math.floor(100 / T) + "%" }, P = { cursor: u ? "pointer" : "auto" }, N;
		return (i == null ? void 0 : i.videoUrl) != null && (N = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.playButton,
			children: c.jsx(o("WAWebMediaStateControls.react").Play, {})
		})), c.jsx("div", babelHelpers.extends({ ref: a ? function(e) {
			return a(e);
		} : null }, (e || (e = r("stylex"))).props(o("WAWebImageSlide.stylex").styles.slide, h === !0 && o("WAWebImageSlide.stylex").styles.slideSingle), {
			style: x,
			children: c.jsxs("div", babelHelpers.extends({}, e.props(o("WAWebImageSlide.stylex").styles.slideInnerContainer), {
				style: $,
				children: [
					!r("isStringNullOrEmpty")(R) && c.jsx("img", babelHelpers.extends({
						ref: L,
						alt: n,
						src: R
					}, (e || (e = r("stylex"))).props(o("WAWebImageSlide.stylex").styles.image), {
						style: P,
						draggable: "false",
						onClick: k
					})),
					N,
					g === !0 && c.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: _.unsupportedVideoOverlay,
						children: c.jsx(o("WAWebFlex.react").FlexRow, {
							xstyle: _.unsupportedVideoOverlayText,
							children: s._(
								/*BTDS*/
								""
							)
						})
					})
				]
			}))
		}));
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
