__d("WAWebLottieAnimation.story", [
	"WAWebEmptyState.react",
	"WAWebFlex.react",
	"WAWebLottieAnimation.react",
	"WAWebLottieStoryData",
	"WAWebMinusIcon.react",
	"WAWebPlusIcon.react",
	"WAWebRound.react",
	"WAWebUseLottie.react",
	"WAWebVideoPauseIcon.react",
	"WAWebVideoPlayIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useRef, d = u.useState;
	function m() {
		var e = o("react-compiler-runtime").c(10), t = c(), n = d(1), a = n[0], i = n[1], l;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			var e;
			return (e = t.current) == null ? void 0 : e.pause();
		}, e[0] = l) : l = e[0];
		var u = l, m;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (m = function() {
			var e;
			return (e = t.current) == null ? void 0 : e.play();
		}, e[1] = m) : m = e[1];
		var f = m, g;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (g = function() {
			return i(_);
		}, e[2] = g) : g = e[2];
		var h = g, y;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (y = function() {
			return i(p);
		}, e[3] = y) : y = e[3];
		var C = y, b;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (b = s.jsx(o("WAWebRound.react").Round, {
			onClick: u,
			children: s.jsx(o("WAWebVideoPauseIcon.react").VideoPauseIcon, {})
		}), e[4] = b) : b = e[4];
		var v;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (v = s.jsx(o("WAWebRound.react").Round, {
			onClick: h,
			children: s.jsx(o("WAWebMinusIcon.react").MinusIcon, {})
		}), e[5] = v) : v = e[5];
		var S;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (S = s.jsx(o("WAWebRound.react").Round, {
			onClick: C,
			children: s.jsx(o("WAWebPlusIcon.react").PlusIcon, {})
		}), e[6] = S) : S = e[6];
		var R;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (R = s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			children: [
				b,
				v,
				S,
				s.jsx(o("WAWebRound.react").Round, {
					onClick: f,
					children: s.jsx(o("WAWebVideoPlayIcon.react").VideoPlayIcon, {})
				})
			]
		}), e[7] = R) : R = e[7];
		var L;
		return e[8] !== a ? (L = s.jsxs(s.Fragment, { children: [R, s.jsx(r("WAWebLottieAnimation.react"), {
			ref: t,
			loop: !0,
			autoplay: !0,
			speed: a,
			data: o("WAWebLottieStoryData").bird
		})] }), e[8] = a, e[9] = L) : L = e[9], L;
	}
	function p(e) {
		return e * 1.1;
	}
	function _(e) {
		return e / 1.1;
	}
	function f() {
		var e = o("react-compiler-runtime").c(18), t = d(1), n = t[0], r = t[1], a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = function() {
			return r(h);
		}, e[0] = a) : a = e[0];
		var i = a, l;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			return r(g);
		}, e[1] = l) : l = e[1];
		var u = l, c;
		e[2] !== n ? (c = {
			loop: !0,
			autoplay: !0,
			speed: n,
			data: o("WAWebLottieStoryData").toiletPaper
		}, e[2] = n, e[3] = c) : c = e[3];
		var m = o("WAWebUseLottie.react").useLottie(c), p = m[0], _ = m[1], f = _.pause, y = _.play, C;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (C = s.jsx(o("WAWebVideoPauseIcon.react").VideoPauseIcon, {}), e[4] = C) : C = e[4];
		var b;
		e[5] !== f ? (b = s.jsx(o("WAWebRound.react").Round, {
			onClick: f,
			children: C
		}), e[5] = f, e[6] = b) : b = e[6];
		var v;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (v = s.jsx(o("WAWebRound.react").Round, {
			onClick: i,
			children: s.jsx(o("WAWebMinusIcon.react").MinusIcon, {})
		}), e[7] = v) : v = e[7];
		var S;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (S = s.jsx(o("WAWebRound.react").Round, {
			onClick: u,
			children: s.jsx(o("WAWebPlusIcon.react").PlusIcon, {})
		}), e[8] = S) : S = e[8];
		var R;
		e[9] === Symbol.for("react.memo_cache_sentinel") ? (R = s.jsx(o("WAWebVideoPlayIcon.react").VideoPlayIcon, {}), e[9] = R) : R = e[9];
		var L;
		e[10] !== y ? (L = s.jsx(o("WAWebRound.react").Round, {
			onClick: y,
			children: R
		}), e[10] = y, e[11] = L) : L = e[11];
		var E;
		e[12] !== b || e[13] !== L ? (E = s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			children: [
				b,
				v,
				S,
				L
			]
		}), e[12] = b, e[13] = L, e[14] = E) : E = e[14];
		var k;
		return e[15] !== p || e[16] !== E ? (k = s.jsxs(s.Fragment, { children: [E, p] }), e[15] = p, e[16] = E, e[17] = k) : k = e[17], k;
	}
	function g(e) {
		return e * 1.1;
	}
	function h(e) {
		return e / 1.1;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(16), n = e.autoplay, a = c(), i = d(0), l = i[0], u = i[1], m;
		t[0] !== l ? (m = function() {
			u(l + 1);
		}, t[0] = l, t[1] = m) : m = t[1];
		var p = m, _;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = function() {
			var e;
			(e = a.current) == null || e.goToAndPlay(1);
		}, t[2] = _) : _ = t[2];
		var f = _, g;
		t[3] !== n ? (g = n !== !0 ? s.jsx(o("WAWebRound.react").Round, {
			onClick: f,
			children: s.jsx(o("WAWebVideoPlayIcon.react").VideoPlayIcon, {})
		}) : null, t[3] = n, t[4] = g) : g = t[4];
		var h = "On complete counter: " + l, y;
		t[5] !== h ? (y = s.jsx("div", { children: h }), t[5] = h, t[6] = y) : y = t[6];
		var C;
		t[7] !== g || t[8] !== y ? (C = s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			children: [g, y]
		}), t[7] = g, t[8] = y, t[9] = C) : C = t[9];
		var b;
		t[10] !== n || t[11] !== p ? (b = s.jsx(r("WAWebLottieAnimation.react"), {
			ref: a,
			data: o("WAWebLottieStoryData").bird,
			autoplay: n,
			onComplete: p
		}), t[10] = n, t[11] = p, t[12] = b) : b = t[12];
		var v;
		return t[13] !== C || t[14] !== b ? (v = s.jsxs(s.Fragment, { children: [C, b] }), t[13] = C, t[14] = b, t[15] = v) : v = t[15], v;
	}
	var C = {
		storyName: "WAWebLottieAnimation",
		component: r("WAWebLottieAnimation.react"),
		description: "We use this component to render Lottie animations",
		examples: [
			{
				example: function() {
					return s.jsx(r("WAWebLottieAnimation.react"), {
						loop: !0,
						autoplay: !0,
						data: o("WAWebLottieStoryData").loadingSticker
					});
				},
				title: "Simple animation",
				description: "loop = true, autoplay = true"
			},
			{
				example: function() {
					return s.jsx(r("WAWebLottieAnimation.react"), {
						loop: !0,
						autoplay: !0,
						speed: 2,
						direction: -1,
						data: o("WAWebLottieStoryData").loadingSticker
					});
				},
				title: "Changing speed and direction",
				description: "loop = true, autoplay = true, speed = 2, direction = -1"
			},
			{
				example: function() {
					return s.jsx(r("WAWebLottieAnimation.react"), {
						loop: !0,
						autoplay: !0,
						placeholder: s.jsx(o("WAWebEmptyState.react").Loading, {}),
						path: "https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json"
					});
				},
				title: "Using a placeholder",
				description: "You can use the placeholder prop to pass a component to be rendered while the animation is loading"
			},
			{
				example: function() {
					return s.jsx(r("WAWebLottieAnimation.react"), {
						loop: !0,
						autoplay: !0,
						fallback: s.jsx(o("WAWebEmptyState.react").Empty, { children: "Error" }),
						path: "https://assets10.lottiefiles.com/packages/this_does_not_exist.json"
					});
				},
				title: "Using a fallback",
				description: "You can use the fallback prop to pass a component to be rendered if there is an error loading the animation"
			},
			{
				example: function() {
					return s.jsx(m, {});
				},
				title: "Manual controls",
				description: "Using a ref, you can imperatively control the animation"
			},
			{
				example: function() {
					return s.jsx(f, {});
				},
				title: "Using useLottie hook",
				description: "You can use the useLottie hook directly in your components"
			},
			{
				example: function() {
					return s.jsx(y, {});
				},
				title: "Using Lottie onComplete",
				description: "On complete should trigger when animation has finished"
			},
			{
				example: function() {
					return s.jsx(y, { autoplay: !0 });
				},
				title: "Using Lottie onComplete when on loop",
				description: "On complete should trigger when animation has finished a loop"
			}
		]
	};
	l.default = C;
}), 98);
