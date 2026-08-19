__d("WAWebImageSlide.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebImageSlide.stylex",
	"WAWebMediaStateControls.react",
	"WAWebMediaTypes",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(38), a = t.altText, i = t.forwardRef, l = t.image, u = t.mediaData, d = t.onClick, f = t.onLoad, g = t.renderFallback, h = t.showUnsupportedVideoOverlay, y = t.singleSlide, C;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (C = [
			"fullHeight",
			"fullWidth",
			"mediaStage",
			"renderableUrl"
		], n[0] = C) : C = n[0];
		var b = o("useWAWebModelValues").useModelValues(u, C), v = b.fullHeight, S = b.fullWidth, R = b.mediaStage, L = b.renderableUrl, E = L, k = p(null), I = p(R === o("WAWebMediaTypes").MediaDataStage.RESOLVED), T, D;
		n[1] !== R || n[2] !== f || n[3] !== g ? (T = function() {
			f && !I.current && !g && R === o("WAWebMediaTypes").MediaDataStage.RESOLVED && (f(), I.current = !0);
		}, D = [
			f,
			g,
			R
		], n[1] = R, n[2] = f, n[3] = g, n[4] = T, n[5] = D) : (T = n[4], D = n[5]), m(T, D);
		var x;
		n[6] !== l || n[7] !== d ? (x = function() {
			d && k.current && l && d(k.current, l);
		}, n[6] = l, n[7] = d, n[8] = x) : x = n[8];
		var $ = x, P = !!y, N = S && v ? S / v : .8;
		N < .8 && (N = .8), N > 1.91 && (N = 1.91), N > 1 && !P && (N = 1);
		var M = null;
		P && N < 1 ? M = 100 * N + "%" : N === 1 && !y && (M = "100%");
		var w;
		n[9] !== M ? (w = { width: M }, n[9] = M, n[10] = w) : w = n[10];
		var A = w, F = Math.floor(100 / N) + "%", O;
		n[11] !== F ? (O = { paddingTop: F }, n[11] = F, n[12] = O) : O = n[12];
		var B = O, W = d ? "pointer" : "auto", q;
		n[13] !== W ? (q = { cursor: W }, n[13] = W, n[14] = q) : q = n[14];
		var U = q, V;
		if ((l == null ? void 0 : l.videoUrl) != null) {
			var H;
			n[15] === Symbol.for("react.memo_cache_sentinel") ? (H = c.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: _.playButton,
				children: c.jsx(o("WAWebMediaStateControls.react").Play, {})
			}), n[15] = H) : H = n[15], V = H;
		}
		var G;
		n[16] !== i ? (G = i ? function(e) {
			return i(e);
		} : null, n[16] = i, n[17] = G) : G = n[17];
		var z;
		n[18] !== y ? (z = (e || (e = r("stylex"))).props(o("WAWebImageSlide.stylex").styles.slide, y === !0 && o("WAWebImageSlide.stylex").styles.slideSingle), n[18] = y, n[19] = z) : z = n[19];
		var j;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (j = (e || (e = r("stylex"))).props(o("WAWebImageSlide.stylex").styles.slideInnerContainer), n[20] = j) : j = n[20];
		var K;
		n[21] !== a || n[22] !== $ || n[23] !== U || n[24] !== E ? (K = !r("isStringNullOrEmpty")(E) && c.jsx("img", babelHelpers.extends({
			ref: k,
			alt: a,
			src: E
		}, (e || (e = r("stylex"))).props(o("WAWebImageSlide.stylex").styles.image), {
			style: U,
			draggable: "false",
			onClick: $
		})), n[21] = a, n[22] = $, n[23] = U, n[24] = E, n[25] = K) : K = n[25];
		var Q;
		n[26] !== h ? (Q = h === !0 && c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.unsupportedVideoOverlay,
			children: c.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: _.unsupportedVideoOverlayText,
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), n[26] = h, n[27] = Q) : Q = n[27];
		var X;
		n[28] !== B || n[29] !== V || n[30] !== K || n[31] !== Q ? (X = c.jsxs("div", babelHelpers.extends({}, j, {
			style: B,
			children: [
				K,
				V,
				Q
			]
		})), n[28] = B, n[29] = V, n[30] = K, n[31] = Q, n[32] = X) : X = n[32];
		var Y;
		return n[33] !== A || n[34] !== G || n[35] !== z || n[36] !== X ? (Y = c.jsx("div", babelHelpers.extends({ ref: G }, z, {
			style: A,
			children: X
		})), n[33] = A, n[34] = G, n[35] = z, n[36] = X, n[37] = Y) : Y = n[37], Y;
	}
	l.default = f;
}), 226);
