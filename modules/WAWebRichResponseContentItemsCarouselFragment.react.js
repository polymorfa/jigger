__d("WAWebRichResponseContentItemsCarouselFragment.react", [
	"WAWebCarouselNavigationButton",
	"WAWebChevronButton.react",
	"WAWebDisplayType",
	"WAWebErrorBoundary.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebMediaLinkPreviewContainer.react",
	"WAWebVelocityTransitionGroup",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebCarouselScrollUtils"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useImperativeHandle, m = u.useRef, p = u.useState, _ = {
		carouselControlContainer: {
			width: "xh8yej3",
			position: "x1n2onr6",
			$$css: !0
		},
		botPluginCarouselControlContainer: {
			position: "x1n2onr6",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(38), n = e.fragment, a = e.msg, i = e.ref, l = m(null), u = m(null), f = n.contentItem.items, g = p(null), h = g[0], y = g[1], C = p(!1), b = C[0], v = C[1], S;
		t[0] !== a ? (S = [a], t[0] = a, t[1] = S) : S = t[1];
		var R = r("useWAWebCarouselScrollUtils")(l, v, y, S), L = R[0], E = R[1], k;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			return l.current;
		}, t[2] = k) : k = t[2];
		var I = k, T;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (T = function() {
			return r("nullthrows")(u.current);
		}, t[3] = T) : T = t[3];
		var D = T, x, $;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (x = function() {
			var e = l.current;
			if (e) {
				var t = e.scrollWidth > e.clientWidth;
				y(t);
			}
		}, $ = [], t[4] = x, t[5] = $) : (x = t[4], $ = t[5]), c(x, $);
		var P;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (P = function() {
			return {
				getElement: I,
				getContainerElement: D
			};
		}, t[6] = P) : P = t[6], d(i, P);
		var N;
		if (t[7] !== f || t[8] !== a) {
			var M;
			t[10] !== a ? (M = function(t, n) {
				return s.jsx("div", {
					className: "x1e03a83 x1gqwnh9 x1s9hi2i",
					children: s.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
						msg: a.unsafe(),
						displayType: o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN,
						theme: "bot_plugin_link",
						reelItem: t
					})
				}, n);
			}, t[10] = a, t[11] = M) : M = t[11], N = f.map(M), t[7] = f, t[8] = a, t[9] = N;
		} else N = t[9];
		var w = N, A;
		t[12] !== E || t[13] !== b ? (A = b === !0 ? s.jsx(o("WAWebCarouselNavigationButton").CarouselNavigationButton, {
			buttonType: o("WAWebChevronButton.react").ButtonType.Prev,
			onButtonClick: E,
			displayType: o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel
		}) : null, t[12] = E, t[13] = b, t[14] = A) : A = t[14];
		var F = A, O;
		t[15] !== E || t[16] !== h ? (O = h === !0 ? s.jsx(o("WAWebCarouselNavigationButton").CarouselNavigationButton, {
			buttonType: o("WAWebChevronButton.react").ButtonType.Next,
			onButtonClick: E,
			displayType: o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel
		}) : null, t[15] = E, t[16] = h, t[17] = O) : O = t[17];
		var B = O, W = f.length > 3 && _.carouselControlContainer, q;
		t[18] !== W ? (q = [_.botPluginCarouselControlContainer, W], t[18] = W, t[19] = q) : q = t[19];
		var U;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (U = { className: "x1n2onr6" }, t[20] = U) : U = t[20];
		var V;
		t[21] !== f.length ? (V = {
			0: { className: "xw2csxc x10wlt62 xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24" },
			1: { className: "x10wlt62 xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24 x1rohswg x6ikm8r" }
		}[(f.length === 1) << 0], t[21] = f.length, t[22] = V) : V = t[22];
		var H;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (H = { className: "x78zum5 x1q0g3np xozqiw3 x9xpc1z xezivpi xk8lq53" }, t[23] = H) : H = t[23];
		var G;
		t[24] !== w || t[25] !== a.id.id ? (G = s.jsx("div", babelHelpers.extends({}, H, {
			"data-id": a.id.id,
			children: w
		})), t[24] = w, t[25] = a.id.id, t[26] = G) : G = t[26];
		var z;
		t[27] !== L || t[28] !== V || t[29] !== G ? (z = s.jsx("div", babelHelpers.extends({}, V, {
			onScroll: L,
			ref: l,
			children: G
		})), t[27] = L, t[28] = V, t[29] = G, t[30] = z) : z = t[30];
		var j;
		t[31] !== B || t[32] !== F || t[33] !== z ? (j = s.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "bot-plugin-carousel",
			children: s.jsxs("div", babelHelpers.extends({}, U, { children: [
				F,
				z,
				B
			] }))
		}), t[31] = B, t[32] = F, t[33] = z, t[34] = j) : j = t[34];
		var K;
		return t[35] !== q || t[36] !== j ? (K = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "content-item-carousel-fragment",
			children: s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				xstyle: q,
				ref: u,
				tabIndex: -1,
				children: j
			})
		}), t[35] = q, t[36] = j, t[37] = K) : K = t[37], K;
	}
	l.default = f;
}), 98);
